// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderDetailV2ResponseBodyModulePassengerListCredential } from "./FlightOrderDetailV2responseBodyModulePassengerListCredential";
import { FlightOrderDetailV2ResponseBodyModulePassengerListCredentials } from "./FlightOrderDetailV2responseBodyModulePassengerListCredentials";
import { FlightOrderDetailV2ResponseBodyModulePassengerListTickets } from "./FlightOrderDetailV2responseBodyModulePassengerListTickets";


export class FlightOrderDetailV2ResponseBodyModulePassengerList extends $dara.Model {
  /**
   * @example
   * 1991-06-21 00:00:00
   */
  birthday?: string;
  /**
   * @example
   * 12172819047252004460056
   */
  btripUserId?: string;
  code?: number;
  country?: string;
  /**
   * @example
   * CN
   */
  countryCode?: string;
  credential?: FlightOrderDetailV2ResponseBodyModulePassengerListCredential;
  credentials?: FlightOrderDetailV2ResponseBodyModulePassengerListCredentials[];
  /**
   * @example
   * 17800000001@163.com
   */
  email?: string;
  /**
   * @example
   * san
   */
  enFirstName?: string;
  /**
   * @example
   * zhang
   */
  enLastName?: string;
  /**
   * @example
   * zhangsan
   */
  englishName?: string;
  /**
   * @example
   * 1
   */
  gender?: number;
  /**
   * @example
   * 3243028
   */
  id?: string;
  /**
   * @example
   * true
   */
  isComplete?: boolean;
  /**
   * @example
   * false
   */
  isFrequently?: boolean;
  memo?: string;
  /**
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @example
   * 17800000001
   */
  mobilePhoneNumber?: string;
  name?: string;
  /**
   * @example
   * true
   */
  oneself?: boolean;
  orderName?: string;
  /**
   * @example
   * 1111
   */
  outPassengerId?: string;
  /**
   * @example
   * 17800000001
   */
  phone?: string;
  /**
   * @example
   * 111
   */
  shengPiPinyin?: string;
  ticketNos?: string[];
  tickets?: FlightOrderDetailV2ResponseBodyModulePassengerListTickets[];
  /**
   * @example
   * 0
   */
  type?: number;
  /**
   * @example
   * 312312
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      btripUserId: 'btrip_user_id',
      code: 'code',
      country: 'country',
      countryCode: 'country_code',
      credential: 'credential',
      credentials: 'credentials',
      email: 'email',
      enFirstName: 'en_first_name',
      enLastName: 'en_last_name',
      englishName: 'english_name',
      gender: 'gender',
      id: 'id',
      isComplete: 'is_complete',
      isFrequently: 'is_frequently',
      memo: 'memo',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNumber: 'mobile_phone_number',
      name: 'name',
      oneself: 'oneself',
      orderName: 'order_name',
      outPassengerId: 'out_passenger_id',
      phone: 'phone',
      shengPiPinyin: 'sheng_pi_pinyin',
      ticketNos: 'ticket_nos',
      tickets: 'tickets',
      type: 'type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      btripUserId: 'string',
      code: 'number',
      country: 'string',
      countryCode: 'string',
      credential: FlightOrderDetailV2ResponseBodyModulePassengerListCredential,
      credentials: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModulePassengerListCredentials },
      email: 'string',
      enFirstName: 'string',
      enLastName: 'string',
      englishName: 'string',
      gender: 'number',
      id: 'string',
      isComplete: 'boolean',
      isFrequently: 'boolean',
      memo: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNumber: 'string',
      name: 'string',
      oneself: 'boolean',
      orderName: 'string',
      outPassengerId: 'string',
      phone: 'string',
      shengPiPinyin: 'string',
      ticketNos: { 'type': 'array', 'itemType': 'string' },
      tickets: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModulePassengerListTickets },
      type: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    if(Array.isArray(this.credentials)) {
      $dara.Model.validateArray(this.credentials);
    }
    if(Array.isArray(this.ticketNos)) {
      $dara.Model.validateArray(this.ticketNos);
    }
    if(Array.isArray(this.tickets)) {
      $dara.Model.validateArray(this.tickets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

