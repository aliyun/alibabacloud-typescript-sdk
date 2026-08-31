// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name and IP address of the server machine that executes the task.
   * 
   * @example
   * hostName:hostIp
   */
  hostMachine?: string;
  /**
   * @remarks
   * The scheduling node ID of the pipeline or workflow task after successful creation.
   * 
   * @example
   * 123
   */
  nodeId?: string;
  /**
   * @remarks
   * The pipeline or workflow ID after successful creation.
   * 
   * @example
   * 123
   */
  pipelineId?: number;
  /**
   * @remarks
   * The submit ID of the pending publish list generated after the pipeline is submitted. Use this ID to publish through the publish domain.
   * Workflow tasks support only PROD, so this value is not returned for workflow tasks.
   * 
   * @example
   * 123
   */
  submitId?: number;
  /**
   * @remarks
   * The pending publish version number generated after the pipeline is submitted.
   * Workflow tasks support only PROD, so this value is not returned for workflow tasks.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      hostMachine: 'HostMachine',
      nodeId: 'NodeId',
      pipelineId: 'PipelineId',
      submitId: 'SubmitId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostMachine: 'string',
      nodeId: 'string',
      pipelineId: 'number',
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

export class CreatePipelineResponseBody extends $dara.Model {
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
   * The creation result of the integration pipeline or workflow task.
   */
  data?: CreatePipelineResponseBodyData;
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
   * The details of the backend exception.
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
   * Indicates whether the request was successful.
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
      data: CreatePipelineResponseBodyData,
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

