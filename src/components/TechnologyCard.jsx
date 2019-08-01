import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const TechDisplay = styled.img`
  ${tw`w-32 xl:w-48 h-auto`};
`

const TechnologyCard = ({ link, name }) => <TechDisplay src={link} alt={name} />

export default TechnologyCard

TechnologyCard.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
