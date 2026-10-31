// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineAsyncResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The asynchronous execution query ID.
   * 
   * @example
   * 123
   */
  asyncId?: number;
  /**
   * @remarks
   * The check result of the commit details. The value is a JSON character string and is returned only for asynchronous commit links. The structure is consistent with the commit details on the product page.
   * 
   * @example
   * {"success":true}
   */
  checkDetail?: string;
  /**
   * @remarks
   * The error code returned when an execution exception occurs.
   * 
   * @example
   * DPN.Pipeline.InnerError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when an execution exception occurs.
   * 
   * @example
   * NullPointException
   */
  errorMessage?: string;
  /**
   * @remarks
   * The server host information for request execution.
   * 
   * @example
   * hostName:hostIp
   */
  hostMachine?: string;
  /**
   * @remarks
   * The ID of the scheduling node for the pipeline task.
   * 
   * @example
   * n_123
   */
  nodeId?: string;
  /**
   * @remarks
   * The primary key ID of the pipeline.
   * 
   * @example
   * 123
   */
  pipelineId?: number;
  /**
   * @remarks
   * The current execution status. Valid values: SUCCESS: The execution is successful. FAILED: The execution fails. RUNNING: The execution is in progress.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The publish ID generated after the pipeline task is submitted. You can use this ID to publish the task through the publish domain.
   * 
   * @example
   * 123
   */
  submitId?: number;
  /**
   * @remarks
   * The version number generated after the pipeline task is submitted.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      asyncId: 'AsyncId',
      checkDetail: 'CheckDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      hostMachine: 'HostMachine',
      nodeId: 'NodeId',
      pipelineId: 'PipelineId',
      status: 'Status',
      submitId: 'SubmitId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncId: 'number',
      checkDetail: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      hostMachine: 'string',
      nodeId: 'string',
      pipelineId: 'number',
      status: 'string',
      submitId: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineAsyncResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The asynchronous execution result.
   */
  data?: GetPipelineAsyncResultResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend response exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPipelineAsyncResultResponseBodyData,
      httpStatusCode: 'number',
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

