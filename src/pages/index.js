import React, { useEffect } from 'react'
import Layout from '../Layout'
import { Section, Heading, Button } from '../components'
import { Icon, Row, Col } from 'antd'
import styled from 'styled-components'
import { Link } from 'gatsby'

const MainSection = styled(Section)`
	height: 100vh;
	padding-top: 0;
`

const MiddleRow = styled(Row)`
	height: 100vh;
`

function Home(props) {
	useEffect(() => {}, [])

	return (
		<Layout basic>
			<MainSection centered>
				<MiddleRow type="flex" align="middle" justify="center">
					<Col lg={12}>
						<Heading content="Selamat datang di Wisuda 4.0" subheader="Lihat daftar semua tamu undangan" />
						<Button type="primary">
							<Link to="/guests">
								Lihat semua <Icon type="arrow-right" />
							</Link>
						</Button>
					</Col>
				</MiddleRow>
			</MainSection>
		</Layout>
	)
}

export default Home
