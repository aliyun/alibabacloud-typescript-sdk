// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterSaveFlowConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time of the configuration.
   * 
   * @example
   * 2026-04-27T18:28:57.987356+08:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time of the configuration.
   * 
   * @example
   * 2026-04-27T18:28:57.987356+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the flow control configuration.
   * 
   * @example
   * 6
   */
  id?: number;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * 607
   */
  modelId?: number;
  /**
   * @remarks
   * The configured RPM.
   * 
   * @example
   * 100
   */
  rpm?: number;
  /**
   * @remarks
   * Indicates whether smooth flow control is enabled.
   * 
   * @example
   * true
   */
  smoothFlowEnabled?: boolean;
  /**
   * @remarks
   * The configured TPM.
   * 
   * @example
   * 10000
   */
  tpm?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      modelId: 'modelId',
      rpm: 'rpm',
      smoothFlowEnabled: 'smoothFlowEnabled',
      tpm: 'tpm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      modelId: 'number',
      rpm: 'number',
      smoothFlowEnabled: 'boolean',
      tpm: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelRouterSaveFlowConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ModelRouterSaveFlowConfigResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * 未知错误
   */
  errMessage?: string;
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
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
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
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModelRouterSaveFlowConfigResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

