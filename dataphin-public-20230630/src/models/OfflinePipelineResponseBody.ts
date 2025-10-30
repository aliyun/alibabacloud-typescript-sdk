// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflinePipelineResponseBodyData extends $dara.Model {
  /**
   * @example
   * hostName:hostIp
   */
  hostMachine?: string;
  /**
   * @example
   * 123
   */
  nodeId?: string;
  /**
   * @example
   * 123
   */
  pipelineId?: number;
  /**
   * @example
   * 123
   */
  submitId?: number;
  /**
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

export class OfflinePipelineResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: OfflinePipelineResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
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
      data: OfflinePipelineResponseBodyData,
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

