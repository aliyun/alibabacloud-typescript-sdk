// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExecutorGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The authentication method used by devices under the product to connect to the IoT platform. Valid values:
   * 
   * - **secret**: Uses the device secret for device identity authentication.
   * - **id2**: Uses IoT Internet Device ID (ID²).
   * - **x509**: Uses the device X.509 certificate for device identity authentication.
   * 
   * @example
   * md5_spell
   */
  authType?: string;
  /**
   * @remarks
   * The workflow description.
   * 
   * @example
   * my first workflow
   */
  description?: string;
  /**
   * @remarks
   * The Kubernetes services that failed to be imported.
   * 
   * @example
   * [{"cluster":"xxxxx","namespace":"xxxxx","service":"xxxxx"}]
   */
  failedService?: string;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * myWorkflow
   */
  name?: string;
  /**
   * @remarks
   * The domain name rule.
   * 
   * @example
   * NORMAL
   */
  network?: string;
  /**
   * @remarks
   * The protocol types supported by the domain name. Valid values: HTTP (supports only the HTTP protocol), HTTPS (supports only the HTTPS protocol), and HTTP,HTTPS (supports both HTTP and HTTPS protocols).
   * 
   * @example
   * All
   */
  protocol?: string;
  /**
   * @remarks
   * The worker ID of the deployment task. You can obtain this ID by calling the [ListWorkerResource](https://help.aliyun.com/document_detail/2712224.html) operation.
   * 
   * @example
   * 12
   */
  workerId?: number;
  /**
   * @remarks
   * The executor type.
   * 
   * @example
   * k8s_service
   */
  workerType?: string;
  /**
   * @remarks
   * The list of specified machines in JSON format.
   * 
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
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateExecutorGroupResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
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
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
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

