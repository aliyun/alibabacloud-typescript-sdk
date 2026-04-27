// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExecutorGroupResponseBodyData extends $dara.Model {
  /**
   * @example
   * md5_spell
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
   * NORMAL
   */
  network?: string;
  /**
   * @example
   * All
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

export class CreateExecutorGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: CreateExecutorGroupResponseBodyData;
  /**
   * @example
   * Parameter format error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5EF879D0-3B43-5AD1-9BF7-52418F9C5E73
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
      data: CreateExecutorGroupResponseBodyData,
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

