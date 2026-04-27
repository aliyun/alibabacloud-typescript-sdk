// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExecutorGroupResponseBodyData extends $dara.Model {
  /**
   * @example
   * EDIT
   */
  authType?: string;
  /**
   * @example
   * my first workflow
   */
  description?: string;
  /**
   * @example
   * [{"cluster":"xxxxx","namespace":"xxxxx","service":"xxxxx"}]
   */
  failedService?: string;
  /**
   * @example
   * myWorkflow
   */
  name?: string;
  /**
   * @example
   * {\\"OfficeSiteId\\":\\"cn-hangzhou+dir-8801187585\\",\\"VSwitchIds\\":[null]}
   */
  network?: string;
  /**
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @example
   * ins-95mfvqrtg6fkijt1uko000
   */
  workerId?: number;
  /**
   * @example
   * k8s_service
   */
  workerType?: string;
  /**
   * @example
   * [{"cluster":"xxxxx","namespace":"xxxxx","service":"xxxxx"}]
   */
  workers?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      description: 'Description',
      failedService: 'FailedService',
      name: 'Name',
      network: 'Network',
      protocol: 'Protocol',
      workerId: 'WorkerId',
      workerType: 'WorkerType',
      workers: 'Workers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      description: 'string',
      failedService: 'string',
      name: 'string',
      network: 'string',
      protocol: 'string',
      workerId: 'number',
      workerType: 'string',
      workers: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExecutorGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: UpdateExecutorGroupResponseBodyData;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C78E2AD2-5985-515B-BAD2-31A248AFC263
   */
  requestId?: string;
  /**
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
      code: 'number',
      data: UpdateExecutorGroupResponseBodyData,
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

