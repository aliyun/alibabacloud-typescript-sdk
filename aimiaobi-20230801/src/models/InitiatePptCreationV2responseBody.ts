// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitiatePptCreationV2ResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * An alert message related to service usage or status.
   * 
   * @example
   * 本月版本内的配送额度已经用尽，超额使用将走按量后付费，下个月配送额度将重新下发；请知晓
   */
  alert?: string;
  /**
   * @remarks
   * The AppKey for initializing the front-end component.
   * 
   * @example
   * S1X5ecouBztZelaQ
   */
  appKey?: string;
  /**
   * @remarks
   * The ID of the export task.
   * 
   * @example
   * 66b25058-d735-47e5-a534-5da93453d3df
   */
  exportTaskId?: string;
  /**
   * @remarks
   * The URL of the artifact cover.
   * 
   * @example
   * http://a.com/xxx.png
   */
  pptArtifactCover?: string;
  /**
   * @remarks
   * The artifact ID. Use this ID to edit the artifact.
   * 
   * @example
   * 53059801
   */
  pptArtifactId?: string;
  /**
   * @remarks
   * The process ID for creating the PPT, used to initialize the front-end component for artifact creation.
   * 
   * @example
   * 8485143
   */
  pptProcessId?: string;
  /**
   * @remarks
   * The signature for initializing the front-end component.
   * 
   * @example
   * dBBGvT0Toje5887Qw+/IwwMNYfk=
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      alert: 'Alert',
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
      alert: 'string',
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
   * @remarks
   * The error code.
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: InitiatePptCreationV2ResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 错误消息
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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

