// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAlarmResponseBodyAlarmList } from "./ListAlarmResponseBodyAlarmList";


export class ListAlarmResponseBody extends $dara.Model {
  alarmList?: ListAlarmResponseBodyAlarmList;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 2
   */
  nextToken?: number;
  /**
   * @example
   * EFD27F56-5799-4CE8-B625-56DF3332331C
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 27
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alarmList: 'AlarmList',
      code: 'Code',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmList: ListAlarmResponseBodyAlarmList,
      code: 'string',
      message: 'string',
      nextToken: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.alarmList && typeof (this.alarmList as any).validate === 'function') {
      (this.alarmList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

