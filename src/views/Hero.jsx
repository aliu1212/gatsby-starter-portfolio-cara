import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { UpDown, UpDownWide } from '../styles/animations'
import SVG from '../components/SVG'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const Hero = ({ children, offset }) => (
  <>
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="circle" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
        <SVG icon="triangle" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
        <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
      <SVG icon="upDown" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
      <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
      <SVG icon="box" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
      <SVG icon="hexa" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
      <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
