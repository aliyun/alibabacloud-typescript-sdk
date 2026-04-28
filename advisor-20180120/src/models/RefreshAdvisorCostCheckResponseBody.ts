// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshAdvisorCostCheckResponseBodyData extends $dara.Model {
  /**
   * @example
   * c-wl*****n0g
   */
  commandId?: string;
  /**
   * @example
   * 11***********35
   */
  managerTaskId?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 959***135
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      managerTaskId: 'ManagerTaskId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      managerTaskId: 'number',
      success: 'boolean',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorCostCheckResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: RefreshAdvisorCostCheckResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 566331F9-****-550F-B745-A730331F97A9
   */
  requestId?: string;
  /**
   * @example
   * True
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
      data: RefreshAdvisorCostCheckResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

