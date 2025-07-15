// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageAppResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The configurations of the application.
   */
  appConfig?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * The name of the interactive messaging application.
   * 
   * @example
   * testApp
   */
  appName?: string;
  /**
   * @remarks
   * The time when the interactive messaging application was created. The time is displayed in UTC.
   * 
   * @example
   * 502280113
   */
  createTime?: number;
  /**
   * @remarks
   * The extended field.
   */
  extension?: { [key: string]: string };
  /**
   * @remarks
   * The status of the interactive message application. A value of 1 indicates that the application is normal.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appConfig: 'AppConfig',
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      extension: 'Extension',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      appId: 'string',
      appName: 'string',
      createTime: 'number',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      status: 'number',
    };
  }

  validate() {
    if(this.appConfig) {
      $dara.Model.validateMap(this.appConfig);
    }
    if(this.extension) {
      $dara.Model.validateMap(this.extension);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-****-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: GetMessageAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetMessageAppResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

