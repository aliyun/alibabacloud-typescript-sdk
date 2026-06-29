// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePipelineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name and IP address of the server that executed the request.
   * 
   * @example
   * hostName:hostIp
   */
  hostMachine?: string;
  /**
   * @remarks
   * The scheduling node ID of the pipeline or workflow node.
   * 
   * @example
   * 123
   */
  nodeId?: string;
  /**
   * @remarks
   * The pipeline or workflow ID.
   * 
   * @example
   * 123
   */
  pipelineId?: number;
  /**
   * @remarks
   * The submit ID generated upon successful submission of the pipeline or workflow, which is added to the pending publish list and can be published through the publish domain. This value is not returned for workflow nodes because they only support PROD.
   * 
   * @example
   * 123
   */
  submitId?: number;
  /**
   * @remarks
   * The version number pending publish. This value is not returned for workflow nodes because they only support PROD.
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

export class UpdatePipelineResponseBody extends $dara.Model {
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
   * The update result of the pipeline or workflow node.
   */
  data?: UpdatePipelineResponseBodyData;
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
   * The error details returned by the backend.
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
      data: UpdatePipelineResponseBodyData,
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

