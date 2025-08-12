// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateInstantSiteMonitorResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the site monitoring task.
   * 
   * @example
   * 679fbe4f-b80b-4706-91b2-5427b43e****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the site monitoring task.
   * 
   * @example
   * HangZhou_ECS1
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateInstantSiteMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the site monitoring task.
   * 
   * @example
   * [{"taskName": "HangZhou_ECS1", "taskId": "679fbe4f-b80b-4706-91b2-5427b43e****"}]
   */
  data?: BatchCreateInstantSiteMonitorResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7AE72720-2C96-5446-9F2B-308C7CEDFF1A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': BatchCreateInstantSiteMonitorResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

