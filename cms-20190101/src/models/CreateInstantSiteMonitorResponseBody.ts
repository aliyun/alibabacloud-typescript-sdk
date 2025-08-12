// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstantSiteMonitorResponseBodyCreateResultList extends $dara.Model {
  /**
   * @remarks
   * The ID of the instant test task.
   * 
   * @example
   * 2c8dbdf9-a3ab-46a1-85a4-f094965e****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the instant test task.
   * 
   * @example
   * task1
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

export class CreateInstantSiteMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * > The status code 200 indicates that the call was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The results for creating the instant test task.
   */
  createResultList?: CreateInstantSiteMonitorResponseBodyCreateResultList[];
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
   * The ID of the request.
   * 
   * @example
   * 68192f5d-0d45-4b98-9724-892813f86c71
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createResultList: 'CreateResultList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createResultList: { 'type': 'array', 'itemType': CreateInstantSiteMonitorResponseBodyCreateResultList },
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.createResultList)) {
      $dara.Model.validateArray(this.createResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

