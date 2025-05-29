// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshRenderingInstanceStreamingResponseBody extends $dara.Model {
  /**
   * @example
   * 792fy125-594c-4dde-ab35-9ff8hrf0a86f
   */
  flowId?: string;
  /**
   * @example
   * 10.178.208.22
   */
  gateway?: string;
  /**
   * @example
   * cn-xxx.ecr.aliyuncs.com
   */
  hostname?: string;
  /**
   * @example
   * 8080
   */
  port?: string;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      gateway: 'Gateway',
      hostname: 'Hostname',
      port: 'Port',
      renderingInstanceId: 'RenderingInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      gateway: 'string',
      hostname: 'string',
      port: 'string',
      renderingInstanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

