import React from "react";
import '../css/cardtickets.css';
import trainimg from '../img/Group 9.svg';
import arrow from '../img/Arrow.svg';
import arrow1 from '../img/Arrow (1).svg';

function CardTickets({item1}) {
	console.log(item1.sit);
	return (
		<section className="page_choice choice">
			<div className="choice_top">
				<div className="choice_container">
					<div className="choice_column_a_train_container">
						<div className="choice_column_a_train">
							<div className="choice_icon">
								<img src={trainimg} alt="itemtrain" />
							</div>
							<div className="choice_number">{item1.choice_number}</div>
							<div className="choice_number"></div>
							<div className="choice_menu menu_choice">
								<div className="choice_menu_icon">
									<div className="choice_city_transparent">{item1.choicecitytransparent}</div>
									<img src={arrow} alt="icon_arrow" />
								</div>
								<div className="choice_menu_icon">
									<div className="choice_city">{item1.fromcity}</div>
									<img src={arrow1} alt="icon_arrow" />
								</div>
								<div className="choice_city">{item1.tocity}</div>
								<div className="choice_city">{item1.volga}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="choice_main_container">
				<div className="choice_time_container">
					<div className="choice_time">
						<div className="choice_time-start">{item1.from.fromtime}</div>
						<div className="choice_city">{item1.from.fromcity}</div>
						<div className="choice_city_transparent">{item1.from.fromrailway}</div>
					</div>
					<div className="choice_travel_start">
						<div className="travel_time time">{item1.from.timestart}</div>
						{/* <img src={item1.from.fromarrow} alt="icon_arrow" /> */}
					</div>
					<div className="choice_time choice_time2">
						<div className="choice_time-start">{item1.from.totime}</div>
						<div className="choice_city">{item1.from.tocity}</div>
						<div className="choice_city_transparent">{item1.from.torailway}</div>
					</div>
				</div>
				<div className="choice_time_container_footer">
					<div className="choice_time">
						<div className="choice_time-start">{item1.to.fromtime}</div>
						<div className="choice_city">{item1.to.fromcity}</div>
						<div className="choice_city_transparent">{item1.to.fromrailway}</div>
					</div>
					<div className="choice_travel_start">
						<div className="travel_time time2">{item1.to.timestart}</div>
						{/* <img src={item1.to.toarrow} alt="icon_arrow" /> */}
					</div>
					<div className="choice_time choice_time2">
						<div className="choice_time-start">{item1.to.totime}</div>
						<div className="choice_city">{item1.to.tocity}</div>
						<div className="choice_city_transparent">{item1.to.torailway}</div>
					</div>
				</div>
			</div>
			<div className="choice_price_container">
				<div className="choice_price_group">
					<div className="choice_seat">{item1.sit.tip}</div>
					<a href="" className="choice_seat_quantity">{item1.sit.cunt}</a>
					<div className="choice_seat_start">от</div>
					<div className="choice_price">{item1.sit.price}</div>
					<span className="price">&#8399;</span>
				</div>
				<div className="choice_price_group">
					<div className="choice_seat">{item1.plackard.tip}</div>
					<a href="" className="choice_seat_quantity">{item1.plackard.cunt}</a>
					<div className="choice_seat_start">от</div>
					<div className="choice_price">{item1.plackard.price}</div>
					<span className="price">&#8399;</span>
				</div>
				<div className="choice_price_group">
					<div className="choice_seat">Купе</div>
					<a href="" className="choice_seat_quantity">24</a>
					<div className="choice_seat_start">от</div>
					<div className="choice_price">3530</div>
					<span className="price">&#8399;</span>
				</div>
				<div className="choice_price_group">
					<div className="choice_seat">Люкс</div>
					<a href="" className="choice_seat_quantity">15</a>
					<div className="choice_seat_start">от</div>
					<div className="choice_price">4950</div>
					<span className="price">&#8399;</span>
				</div>
				<div className="choice_icon_services">
					<img src="img/services.svg" alt="itemservices" />
				</div>
				<div className="choice_button">
					<a className="button" href="" target="blank">Выбрать места</a>
				</div>
			</div>

		</section >


	)
}

export default CardTickets;