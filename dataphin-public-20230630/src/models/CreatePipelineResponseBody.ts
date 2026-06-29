// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Server-side execution machine name and IP
   * 
   * @example
   * hostName:hostIp
   */
  hostMachine?: string;
  /**
   * @remarks
   * Scheduling node ID of the pipeline/workflow task after successful creation
   * 
   * @example
   * 123
   */
  nodeId?: string;
  /**
   * @remarks
   * Pipeline/workflow ID after successful creation
   * 
   * @example
   * 123
   */
  pipelineId?: number;
  /**
   * @remarks
   * Submit ID of the pending release list generated after successfully submitting the pipeline, used for release through the release domain.
   * Workflow tasks only support PROD, so this value is not applicable.
   * 
   * @example
   * 123
   */
  submitId?: number;
  /**
   * @remarks
   * Pending release version number generated after pipeline submission.
   * Workflow tasks only support PROD, so this value is not applicable.
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
   * Backend response code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Integration pipeline/workflow task creation result
   */
  data?: CreatePipelineResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Backend response exception details
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
   * Whether the request was successful
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

