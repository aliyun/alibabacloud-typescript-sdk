// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMessageAppResponseBodyResultAppList extends $dara.Model {
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
   * test
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
   * The status of the interactive message application. A value of **1** indicates that the application is normal.
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

export class QueryMessageAppResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Details about the interactive messaging applications.
   */
  appList?: QueryMessageAppResponseBodyResultAppList[];
  /**
   * @remarks
   * Indicates whether the current page is followed by another page. Valid values:
   * 
   * *   true: The current page is followed by another page.
   * *   false: The current page is not followed by another page.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The total number of applications returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appList: 'AppList',
      hasMore: 'HasMore',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: { 'type': 'array', 'itemType': QueryMessageAppResponseBodyResultAppList },
      hasMore: 'boolean',
      totalCount: 'number',
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

export class QueryMessageAppResponseBody extends $dara.Model {
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
  result?: QueryMessageAppResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryMessageAppResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

