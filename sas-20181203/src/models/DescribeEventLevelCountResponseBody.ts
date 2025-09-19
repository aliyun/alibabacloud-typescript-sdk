// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventLevelCountResponseBodyEventLevels extends $dara.Model {
  /**
   * @remarks
   * The number of alerts whose Emergency level is Reminder.
   * 
   * @example
   * 2
   */
  remind?: number;
  /**
   * @remarks
   * The number of alerts whose Emergency level is Urgent.
   * 
   * @example
   * 0
   */
  serious?: number;
  /**
   * @remarks
   * The number of alerts whose Emergency level is Suspicious.
   * 
   * @example
   * 1
   */
  suspicious?: number;
  static names(): { [key: string]: string } {
    return {
      remind: 'Remind',
      serious: 'Serious',
      suspicious: 'Suspicious',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remind: 'number',
      serious: 'number',
      suspicious: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventLevelCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The statistics of alerts by risk level.
   */
  eventLevels?: DescribeEventLevelCountResponseBodyEventLevels;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CE8CA5EA-24EF-5D41-B735-53ACE7XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      eventLevels: 'EventLevels',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      eventLevels: DescribeEventLevelCountResponseBodyEventLevels,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.eventLevels && typeof (this.eventLevels as any).validate === 'function') {
      (this.eventLevels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

