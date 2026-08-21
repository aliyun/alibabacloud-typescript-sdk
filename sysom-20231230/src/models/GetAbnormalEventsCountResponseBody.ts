// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAbnormalEventsCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of abnormal events.
   */
  eventList?: string[];
  /**
   * @remarks
   * The type of the abnormal event.
   * 
   * @example
   * health
   */
  type?: string;
  /**
   * @remarks
   * The number of abnormal events of this type.
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
   * The response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAbnormalEventsCountResponseBodyData[];
  /**
   * @remarks
   * The business error message. This parameter is not empty when success is false.
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

