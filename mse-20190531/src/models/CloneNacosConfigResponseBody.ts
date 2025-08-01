// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneNacosConfigResponseBodyDataFailData extends $dara.Model {
  /**
   * @remarks
   * Data ID.
   * 
   * @example
   * test2.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * Group ID.
   * 
   * @example
   * test
   */
  group?: string;
  /**
   * @remarks
   * The reason for the current operation.
   * 
   * @example
   * param not support
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneNacosConfigResponseBodyDataSkipData extends $dara.Model {
  /**
   * @remarks
   * Data ID.
   * 
   * @example
   * test.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * Group ID.
   * 
   * @example
   * public
   */
  group?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneNacosConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Failed configuration information.
   */
  failData?: CloneNacosConfigResponseBodyDataFailData[];
  /**
   * @remarks
   * Number of skips.
   * 
   * @example
   * 1
   */
  skipCount?: number;
  /**
   * @remarks
   * Skipped configuration information.
   */
  skipData?: CloneNacosConfigResponseBodyDataSkipData[];
  /**
   * @remarks
   * Number of successes.
   * 
   * @example
   * 100
   */
  succCount?: number;
  static names(): { [key: string]: string } {
    return {
      failData: 'FailData',
      skipCount: 'SkipCount',
      skipData: 'SkipData',
      succCount: 'SuccCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failData: { 'type': 'array', 'itemType': CloneNacosConfigResponseBodyDataFailData },
      skipCount: 'number',
      skipData: { 'type': 'array', 'itemType': CloneNacosConfigResponseBodyDataSkipData },
      succCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failData)) {
      $dara.Model.validateArray(this.failData);
    }
    if(Array.isArray(this.skipData)) {
      $dara.Model.validateArray(this.skipData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneNacosConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Data overview.
   */
  data?: CloneNacosConfigResponseBodyData;
  /**
   * @remarks
   * Dynamic error message, used to replace the **%s** in the **ErrMessage** error message.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid**, and **DynamicMessage** returns **DtsJobId**, it indicates that the input request parameter **DtsJobId** is invalid.
   * 
   * @example
   * The specified parameter is invalid.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * Clone Completed Successfully
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 6678DBA9-5600-5948-ACF8-ED3105B288A3
   */
  requestId?: string;
  /**
   * @remarks
   * Request result, with the following values:
   * - `true`: Request succeeded.
   * - `false`: Request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CloneNacosConfigResponseBodyData,
      dynamicMessage: 'string',
      errorCode: 'string',
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

