// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportNacosConfigResponseBodyDataFailData extends $dara.Model {
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * test2.yaml
   */
  dataId?: string;
  /**
   * @example
   * test
   */
  group?: string;
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
   * The ID of the group.
   * 
   * @example
   * test.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * The information about configurations that are failed to be imported.
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
   * The data structure.
   */
  failData?: ImportNacosConfigResponseBodyDataFailData[];
  /**
   * @remarks
   * The information about skipped configurations.
   * 
   * @example
   * 10
   */
  skipCount?: number;
  /**
   * @remarks
   * The data structure.
   */
  skipData?: ImportNacosConfigResponseBodyDataSkipData[];
  /**
   * @remarks
   * The number of configurations that are skipped.
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
   * The error message returned.
   * 
   * @example
   * 1
   */
  code?: number;
  /**
   * @remarks
   * The number of configurations that are imported.
   */
  data?: ImportNacosConfigResponseBodyData;
  /**
   * @remarks
   * The details of the data.
   * 
   * @example
   * The specified parameter is invalid.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The code returned.
   * 
   * @example
   * mse-100-100
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request is successfully processed.
   * 
   * @example
   * The dynamic part in the error message. This parameter is used to replace the **%s** variable in the **ErrMessage** parameter.
   * 
   * >  If the return value of the **ErrMessage** parameter is **The Value of Input Parameter %s is not valid** and the return value of the **DynamicMessage** parameter is **DtsJobId**, the specified **DtsJobId** parameter is invalid.
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * AF21683A-29C7-4853-AC0F-B5ADEE4****
   */
  requestId?: string;
  /**
   * @remarks
   * The error code that is returned.
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

