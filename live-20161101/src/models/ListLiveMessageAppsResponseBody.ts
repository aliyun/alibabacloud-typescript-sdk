// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveMessageAppsResponseBodyAppList extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application queried.
   * 
   * @example
   * demo
   */
  appId?: string;
  /**
   * @remarks
   * The AppKey of the interactive messaging application. It is used to authorize operations related to the application ID.
   * 
   * @example
   * **********************************
   */
  appKey?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * testApp
   */
  appName?: string;
  /**
   * @remarks
   * The signature of the interactive messaging application. It is required by the interactive messaging SDK.
   * 
   * @example
   * **************************************************************************
   */
  appSign?: string;
  /**
   * @remarks
   * The time when the application was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1698305471
   */
  createTime?: number;
  /**
   * @remarks
   * The live center.
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * Indicates whether the interactive messaging application is disabled.
   * 
   * @example
   * false
   */
  disable?: string;
  /**
   * @remarks
   * The time when the application was last modified. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1698305471
   */
  modifyTime?: number;
  /**
   * @remarks
   * The retention period of group messages in the application. Valid values:
   * 
   * *   0 (default): 30 days
   * *   1: 90 days
   * *   2: 180 days
   * 
   * @example
   * 1
   */
  msgLifeCycle?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appKey: 'AppKey',
      appName: 'AppName',
      appSign: 'AppSign',
      createTime: 'CreateTime',
      dataCenter: 'DataCenter',
      disable: 'Disable',
      modifyTime: 'ModifyTime',
      msgLifeCycle: 'MsgLifeCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appKey: 'string',
      appName: 'string',
      appSign: 'string',
      createTime: 'number',
      dataCenter: 'string',
      disable: 'string',
      modifyTime: 'number',
      msgLifeCycle: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveMessageAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The interactive messaging applications.
   */
  appList?: ListLiveMessageAppsResponseBodyAppList[];
  /**
   * @remarks
   * Indicates whether the current page is followed by a page.
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The starting page number for the next query. This parameter is returned only if the value of HasMore is true.
   * 
   * @example
   * 1
   */
  nextPageToken?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B8EB4994-1368-1458-B9F3-5B88D76D734C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appList: 'AppList',
      hasMore: 'HasMore',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: { 'type': 'array', 'itemType': ListLiveMessageAppsResponseBodyAppList },
      hasMore: 'boolean',
      nextPageToken: 'number',
      requestId: 'string',
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

