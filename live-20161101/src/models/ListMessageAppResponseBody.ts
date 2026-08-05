// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageAppResponseBodyResultAppList extends $dara.Model {
  /**
   * @remarks
   * Application configuration.
   */
  appConfig?: { [key: string]: string };
  /**
   * @remarks
   * Interactive message application ID.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * Interactive message application name.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * UTC timestamp when the application was created.
   * 
   * @example
   * 502280113
   */
  createTime?: number;
  /**
   * @remarks
   * Extension field.
   */
  extension?: { [key: string]: string };
  /**
   * @remarks
   * Interactive message application status. A value of **1** indicates that the application status is Normal.
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

export class ListMessageAppResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Application list.
   */
  appList?: ListMessageAppResponseBodyResultAppList[];
  /**
   * @remarks
   * Indicates whether there is a next page. Valid values:
   * 
   * - true: There is a next page.
   * - false: There is no next page.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * Total number of interactive message applications.
   * 
   * @example
   * 15
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      appList: 'AppList',
      hasMore: 'HasMore',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: { 'type': 'array', 'itemType': ListMessageAppResponseBodyResultAppList },
      hasMore: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appList)) {
      $dara.Model.validateArray(this.appList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 16A96B9A-****-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * Return result.
   */
  result?: ListMessageAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListMessageAppResponseBodyResult,
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

