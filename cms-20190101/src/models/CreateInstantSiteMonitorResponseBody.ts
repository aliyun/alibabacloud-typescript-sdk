// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstantSiteMonitorResponseBodyCreateResultList extends $dara.Model {
  /**
   * @remarks
   * The ID of the detection task.
   * 
   * @example
   * 2c8dbdf9-a3ab-46a1-85a4-f094965e****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the detection task.
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
   * The status code.
   * 
   * > A value of 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The results of the one-time detection task.
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
   * The request ID.
   * 
   * @example
   * 68192f5d-0d45-4b98-9724-892813f86c71
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: The operation was successful.
   * 
   * - false: The operation failed.
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

