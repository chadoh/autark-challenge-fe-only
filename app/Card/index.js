import React, { useState } from 'react'
import styled from 'styled-components'
import { Card as AragonCard } from '@aragon/ui'
import { DragHandle, Wrap } from "./styled"
import Show from "./Show"
import Edit from "./Edit"

const StyledCard = styled(AragonCard)`
  grid-column: ${p => p.fullWidth ? 'span 2' : undefined};
`

export default function Card({
  id,
  title,
  body,
  fullWidth,

  allowEdit,
  editing: editingProp,
  moveUp,
  remove,
  update,
}) {
  const [editing, rawSetEditing] = useState(
    allowEdit
      ? editingProp || false
      : false
  )
  const [wasEdited, setWasEdited] = useState(false)
  const [wasMoved, setWasMoved] = useState(false)

  const setEditing = val => {
    if (val) {
      rawSetEditing(true)
    } else {
      rawSetEditing(false)
      setWasEdited(true)
      setWasMoved(false)
    }
  }

  return (
    <StyledCard fullWidth={fullWidth} data-id={id} height="initial" width="initial">
      <Wrap>
        {allowEdit && editing
          ? <React.Fragment>
              <Edit
                body={body}
                fullWidth={fullWidth}
                moveUp={moveUp}
                remove={remove}
                setEditing={setEditing}
                setWasMoved={setWasMoved}
                title={title}
                update={update}
                wasMoved={wasMoved}
              />
              <DragHandle />
            </React.Fragment>
          : <Show
              body={body}
              allowEdit={allowEdit}
              setEditing={setEditing}
              title={title}
              wasEdited={wasEdited}
            />
        }
      </Wrap>
    </StyledCard>
  )
}
