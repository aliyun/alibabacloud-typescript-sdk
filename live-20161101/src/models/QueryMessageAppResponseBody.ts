// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMessageAppResponseBodyResultAppList extends $dara.Model {
  /**
   * @remarks
   * Application configuration.
   */
  appConfig?: { [key: string]: string };
  /**
   * @remarks
   * Interactive Messages application ID.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * Interactive Messages application name.
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
   * Interactive Messages application status. A value of **1** indicates that the application status is Normal.
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
   * Interactive Messages application list.
   */
  appList?: QueryMessageAppResponseBodyResultAppList[];
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
   * Total number of query results.
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

