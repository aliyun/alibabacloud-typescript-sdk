// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappPhoneNumberMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the ISV account.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1693407714687
   */
  end?: number;
  /**
   * @remarks
   * The granularity of the metric.
   * 
   * Valid values:
   * 
   * *   DAILY
   * *   HALF_HOUR
   * 
   * @example
   * DAILY
   */
  granularity?: string;
  /**
   * @remarks
   * The independent software vendor (ISV) verification code, which is used to verify whether the RAM user is authorized by the ISV account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The business phone number.
   * 
   * @example
   * 861380000
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1693107714687
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      end: 'End',
      granularity: 'Granularity',
      isvCode: 'IsvCode',
      phoneNumber: 'PhoneNumber',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      end: 'number',
      granularity: 'string',
      isvCode: 'string',
      phoneNumber: 'string',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

