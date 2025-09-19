// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCheckInstanceResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * An array consisting of instances that failed the check.
   */
  failInstances?: string[];
  /**
   * @remarks
   * The operation code of the task that checks the configurations of cloud services. Valid values:
   * 
   * *   **Throttling**
   * *   **ActionTrialUnauthorized**
   * 
   * @example
   * ActionTrialUnauthorized
   */
  operateCode?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * a410bb3-e68c217a-3368bc0-238c668***
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      failInstances: 'FailInstances',
      operateCode: 'OperateCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failInstances: { 'type': 'array', 'itemType': 'string' },
      operateCode: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failInstances)) {
      $dara.Model.validateArray(this.failInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCheckInstanceResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: VerifyCheckInstanceResultResponseBodyData;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * B869E3A0-1147-539D-9920-47580700****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: VerifyCheckInstanceResultResponseBodyData,
      requestId: 'string',
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

