// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportNacosConfigResponseBodyDataFailData extends $dara.Model {
  /**
   * @remarks
   * The data ID.
   * 
   * @example
   * test2.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * test
   */
  group?: string;
  /**
   * @remarks
   * The cause of the failure.
   * 
   * @example
   * The import configuration format is incorrect.
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

export class ImportNacosConfigResponseBodyDataSkipData extends $dara.Model {
  /**
   * @remarks
   * The data ID.
   * 
   * @example
   * test.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * The group ID.
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

export class ImportNacosConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of failed imports.
   */
  failData?: ImportNacosConfigResponseBodyDataFailData[];
  /**
   * @remarks
   * The number of skipped messages.
   * 
   * @example
   * 10
   */
  skipCount?: number;
  /**
   * @remarks
   * The list of skipped configurations.
   */
  skipData?: ImportNacosConfigResponseBodyDataSkipData[];
  /**
   * @remarks
   * The number of successfully imported instances.
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
      failData: { 'type': 'array', 'itemType': ImportNacosConfigResponseBodyDataFailData },
      skipCount: 'number',
      skipData: { 'type': 'array', 'itemType': ImportNacosConfigResponseBodyDataSkipData },
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

export class ImportNacosConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code.
   * 
   * @example
   * 1
   */
  code?: number;
  /**
   * @remarks
   * The data overview.
   */
  data?: ImportNacosConfigResponseBodyData;
  /**
   * @remarks
   * The dynamic error message, which is used to replace **%s** in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the **DtsJobId** request parameter is invalid.
   * 
   * @example
   * The specified parameter is invalid.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * mse-100-100
   */
  errorCode?: string;
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
   * The returned message.
   * 
   * @example
   * The request is processed successfully.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AF21683A-29C7-4853-AC0F-B5ADEE4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - `true`: The request was successful.
   * - `false`: The request failed.
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
      data: ImportNacosConfigResponseBodyData,
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

