// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventSubEventRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the subscribed application.
   * 
   * This parameter is required.
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  /**
   * @remarks
   * The end time, expressed as a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1698201013
   */
  endTime?: number;
  /**
   * @remarks
   * The page number. Valid values: 1 and greater.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of records per page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time, expressed as a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1698195600
   */
  startTime?: number;
  /**
   * @remarks
   * The subscribe ID. You can obtain the subscribe ID from the response parameters of the [CreateEventSub](https://help.aliyun.com/document_detail/2848209.html) operation by using a parameter query.
   * 
   * @example
   * ad53276431c****
   */
  subscribeId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      subscribeId: 'SubscribeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'number',
      pageNo: 'number',
      pageSize: 'number',
      startTime: 'number',
      subscribeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

