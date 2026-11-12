// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExecutorGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The authentication type. Valid values:
   * - **Anonymous**: No authentication is required.
   * - **Application**: Authentication is required.
   * > The default value is **Anonymous**.
   * 
   * @example
   * EDIT
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
   * The network data.
   * 
   * @example
   * {\\"OfficeSiteId\\":\\"cn-hangzhou+dir-8801187585\\",\\"VSwitchIds\\":[null]}
   */
  network?: string;
  /**
   * @remarks
   * The protocol types supported by the domain name. HTTP: Only the HTTP protocol is supported. HTTPS: Only the HTTPS protocol is supported. HTTP,HTTPS: Both HTTP and HTTPS protocols are supported.
   * 
   * @example
   * TCP
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

export class UpdateExecutorGroupResponseBody extends $dara.Model {
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
   * The updated executor group information.
   */
  data?: UpdateExecutorGroupResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
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

