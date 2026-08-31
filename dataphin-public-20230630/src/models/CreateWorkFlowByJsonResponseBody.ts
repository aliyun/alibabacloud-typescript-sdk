// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkFlowByJsonResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name and IP address of the server-side execution machine.
   * 
   * @example
   * hostName:hostIp
   */
  hostMachine?: string;
  /**
   * @remarks
   * The scheduling node ID of the workflow node created.
   * 
   * @example
   * n_123
   */
  nodeId?: string;
  /**
   * @remarks
   * The workflow ID generated after successful creation.
   * 
   * @example
   * 123
   */
  pipelineId?: number;
  /**
   * @remarks
   * The submit ID of the pending publish list generated after a successful submission. Use this ID to publish through the publish domain. You can ignore this value for BASIC projects.
   * 
   * @example
   * 7891
   */
  submitId?: number;
  /**
   * @remarks
   * The pending publish version number generated after the workflow is submitted. You can ignore this value for BASIC projects.
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

export class CreateWorkFlowByJsonResponseBody extends $dara.Model {
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
   * The creation result of the workflow node.
   */
  data?: CreateWorkFlowByJsonResponseBodyData;
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
   * The error message returned by the backend.
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
      data: CreateWorkFlowByJsonResponseBodyData,
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

