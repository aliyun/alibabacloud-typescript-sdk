// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterSaveFlowConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2026-04-27T18:28:57.987356+08:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2026-04-27T18:28:57.987356+08:00
   */
  gmtModified?: string;
  /**
   * @example
   * 6
   */
  id?: number;
  /**
   * @example
   * 607
   */
  modelId?: number;
  /**
   * @example
   * 100
   */
  rpm?: number;
  /**
   * @example
   * true
   */
  smoothFlowEnabled?: boolean;
  /**
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
  data?: ModelRouterSaveFlowConfigResponseBodyData;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
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

