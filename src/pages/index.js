import React from 'react'
import { Row, Col, Avatar, Icon } from 'antd'
import Layout from '../Layout'
import { Section, Heading, Card, Button } from '../components'
import styled from 'styled-components'
import { baseStyles } from '../styles'
import DynamicIcon from '../components/DynamicIcon'
import { Link } from 'gatsby'
import blueSplatter from '../images/splatter-blue.svg'

const HeroSection = styled(Section)`
	height: 100vh;
	background: url('https://assets.website-files.com/5ccc8aa73871f9d12dc81c1b/5cdaba596d9f35a12997b809_masthead-pop-parlour-compressor-p-1600.jpeg')
		center no-repeat;
	background-size: cover;
	.heading {
		h4 {
			font-size: 5em;
			line-height: 1;
			margin-bottom: 0.5em;
			color: #fff;
		}
		p {
			font-size: 1.4em;
			color: #fff;
		}
	}
`

const InnerBox = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	align-items: ${({ align }) => align || 'flex-end'};
	justify-content: ${({ justify }) => justify || 'flex-end'};
	.splatter {
		position: absolute;
		left: 30%;
		top: 40%;
		width: 150px;
		z-index: 0;
	}
`

const ReviewCard = styled.div`
	line-height: 1.8;
	background: ${baseStyles.lightGrey.two};
	padding: 3em 4em;
	margin-right: -50px;
	position: relative;
	z-index: 2;
	box-shadow: ${baseStyles.boxShadow.main};
	&& {
		h4 {
			margin-bottom: 1.2em;
		}
	}
	.reviewer-section {
		.reviewer {
			line-height: initial;
			h4 {
				margin-bottom: initial;
			}
			p {
				margin-bottom: 0;
				color: ${baseStyles.greyColor};
			}
		}
		.ant-avatar {
			width: 70px;
			height: 70px;
		}
	}
`

const StyledReviewImage = styled.div`
	width: 450px;
	height: 450px;
`

const CallToAction = styled.div`
	margin-top: -80px;
	background: #77b8d4;
	border-radius: 12px;
	padding: 3em 5em;
	box-shadow: ${baseStyles.boxShadow.main};
	.ant-typography {
		font-size: 1.7em;
		line-height: 1.2;
		color: #fff;
	}
	.ant-btn {
		background: #fff;
		border-color: #fff;
		color: ${baseStyles.primaryColor};
	}
`

const Home = () => {
	return (
		<Layout>
			<HeroSection bg="#77b8d4">
				<Section ph="very" style={{ marginTop: '3em' }}>
					<Row gutter={32} type="flex" align="middle">
						<Col lg={8}>
							<Heading
								className="heading"
								content="Event organizer"
								headingStyles={{ marginBottom: '0.2em' }}
								subheader="Kami adalah salah satu EO terbaik di kota ini. Well, itu kata mereka. Jangan percaya mereka &mdash; kamu harus buktikan sendiri!"
							/>
							<a
								target="_blank"
								href="https://wa.me/6282113111668?text=Hi,%20Tacita!%20Saya%20mau%20bertanya%20tentang%20pembuatan%20event"
							>
								<Button type="primary">
									<Icon type="smile" /> Ngobrol dengan kami
								</Button>
							</a>
						</Col>
						<Col lg={8}></Col>
						<Col lg={8}>
							<Card
								style={{ width: 250, margin: '0 auto' }}
								cover="https://assets.website-files.com/5ccc8aa73871f9d12dc81c1b/5cf19c0ffeecff536f839acd_pop%20parlour%20feature.jpg"
								title="Hear from them"
								description="Saya sudah bermitra dengan Tacita sejak tahun 2015, dan sampai saat ini Tacita sudah membantu saya membuat hingga 6 event di berbagai kota..."
							/>
							<Button icon="arrow-right" shape="circle" />
						</Col>
					</Row>
				</Section>
			</HeroSection>
			<Section ph="very">
				<Row gutter={32} type="flex">
					<Col lg={8}>
						<InnerBox align="center">
							<img
								className="splatter"
								src={blueSplatter}
								alt="Biarkan Tacita yang merancang event kamu"
							/>
							<div>
								<img
									src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5cfe97c2b4e53beb6d4389a7_crew.jpg"
									width="200"
									alt="What is Tacita?"
								/>
							</div>
						</InnerBox>
					</Col>
					<Col lg={8}>
						<img
							src="https://assets.website-files.com/5ccc8aa73871f9d0b1c81c04/5d81401d08863e1d917f691c_how%20it%20works-min.jpg"
							width="100%"
							alt="Know Tacita closer"
						/>
					</Col>
					<Col lg={8}>
						{/* prettier-ignore */}
						<Heading
							content={<span>Ngadain{' '} <span className="underline"> event itu berat </span> . Biar kami saja.</span>}
							level={1}
							style={{
								marginLeft: '-120px',
								marginTop: 50,
								width: '90%',
							}}
						/>
						{/* <InnerBox align="center" justify="center"> */}
						<p>
							Bagian ini nggak tau mau diisi dengan copywriting
							apa. Semoga{' '}
							<span className="underline">
								amal ibadah para hadirin solat Jumat
							</span>{' '}
							diterima sepantasnya dan selayaknya. Thanks. <br />
							<br /> Tacita uses a carefully selected shirt
							library, unique print processes, and simple order
							process to make it easier than ever to order shirts
							you'll love and wear proudly.
						</p>
					</Col>
				</Row>
			</Section>

			<Section
				ph="very"
				bg={baseStyles.secondaryColor}
				style={{ paddingTop: '4em', paddingBottom: '12em' }}
			>
				<Section ph="very">
					<Row type="flex" justify="center" align="middle">
						<Col lg={8}>
							<ReviewCard>
								<Heading
									content="Apa kata mereka"
									subheader="Tacita is one of the best. Superb customer service too, very responsive and the nicest people from here to Timbuktu. Will order again. And again. HUGE THANKS TACITA! ❤️"
									marginBottom="4em"
								/>
								<Row
									gutter={32}
									className="reviewer-section"
									type="flex"
									align="middle"
								>
									<Col lg={8}>
										<Avatar
											size="default"
											src="https://assets.website-files.com/5ccc8aa73871f9d12dc81c1b/5ced36d63d602ded8a75be9f_Team-Orange-Nick-Forneris-p-500.jpeg"
										/>
									</Col>
									<Col lg={16}>
										<Heading
											className="reviewer"
											content="Felix Zainuddin"
											subheader="Pejaten, DKI Jakarta"
											marginBottom="0"
										/>
									</Col>
								</Row>
							</ReviewCard>
						</Col>
						<Col lg={10}>
							<StyledReviewImage>
								<img
									src="https://assets.website-files.com/5ccc8aa73871f9d12dc81c1b/5cf18dcf08fa33b11d4b8be1_threefivetwo.jpg"
									width="100%"
									alt="Review"
								/>
							</StyledReviewImage>
						</Col>
					</Row>
				</Section>
			</Section>
			<Section ph="very">
				<CallToAction>
					<Row gutter={120} type="flex" align="middle">
						<Col lg={16}>
							<Heading
								content={
									<span>
										Sudah siap untuk{' '}
										<span className="underline">
											nge-host event terkeren
										</span>{' '}
										di kotamu?
									</span>
								}
								marginBottom="0"
							/>
						</Col>
						<Col lg={6}>
							<Link to="/contact">
								<Button block type="primary">
									<DynamicIcon type="iconicon_comment" />
									Hubungi kami
								</Button>
							</Link>
						</Col>
					</Row>
				</CallToAction>
			</Section>
		</Layout>
	)
}

export default Home
