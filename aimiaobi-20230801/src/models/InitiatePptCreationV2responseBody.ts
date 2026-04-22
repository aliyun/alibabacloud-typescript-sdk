// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitiatePptCreationV2ResponseBodyData extends $dara.Model {
  /**
   * @example
   * S1X5ecouBztZelaQ
   */
  appKey?: string;
  /**
   * @example
   * 66b25058-d735-47e5-a534-5da93453d3df
   */
  exportTaskId?: string;
  /**
   * @example
   * http://a.com/xxx.png
   */
  pptArtifactCover?: string;
  /**
   * @example
   * 53059801
   */
  pptArtifactId?: string;
  /**
   * @example
   * 8485143
   */
  pptProcessId?: string;
  /**
   * @example
   * dBBGvT0Toje5887Qw+/IwwMNYfk=
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      exportTaskId: 'ExportTaskId',
      pptArtifactCover: 'PptArtifactCover',
      pptArtifactId: 'PptArtifactId',
      pptProcessId: 'PptProcessId',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      exportTaskId: 'string',
      pptArtifactCover: 'string',
      pptArtifactId: 'string',
      pptProcessId: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiatePptCreationV2ResponseBody extends $dara.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: InitiatePptCreationV2ResponseBodyData;
  /**
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @example
   * 错误消息
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxx
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InitiatePptCreationV2ResponseBodyData,
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

