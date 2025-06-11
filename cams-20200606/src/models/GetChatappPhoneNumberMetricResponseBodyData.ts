// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappPhoneNumberMetricResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of delivered messages.
   * 
   * @example
   * 5
   */
  deliveredCount?: number;
  /**
   * @remarks
   * The end of the time range that you queried.
   * 
   * @example
   * 1667196043904
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
   * The business phone number.
   * 
   * @example
   * 861380000
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The number of sent messages.
   * 
   * @example
   * 10
   */
  sentCount?: number;
  /**
   * @remarks
   * The beginning of the time range that you queried.
   * 
   * @example
   * 1669619491000
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      deliveredCount: 'DeliveredCount',
      end: 'End',
      granularity: 'Granularity',
      phoneNumber: 'PhoneNumber',
      sentCount: 'SentCount',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveredCount: 'number',
      end: 'number',
      granularity: 'string',
      phoneNumber: 'string',
      sentCount: 'number',
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

