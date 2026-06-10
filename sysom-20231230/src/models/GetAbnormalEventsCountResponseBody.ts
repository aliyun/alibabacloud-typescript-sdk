// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAbnormalEventsCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Event List
   */
  eventList?: string[];
  /**
   * @remarks
   * Type of anomaly
   * 
   * @example
   * health
   */
  type?: string;
  /**
   * @remarks
   * Quantity of the anomaly type
   * 
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'eventList',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      value: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventList)) {
      $dara.Model.validateArray(this.eventList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAbnormalEventsCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: GetAbnormalEventsCountResponseBodyData[];
  /**
   * @remarks
   * When success is false, this value is Not Empty and indicates the error message.
   * 
   * @example
   * result: code=1 msg=(Request failed, status_code != 200)
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAbnormalEventsCountResponseBodyData },
      message: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

