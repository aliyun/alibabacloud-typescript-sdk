// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppInfosResponseBodyAppInfoList extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The time when the application was created. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-03-01T08:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * my first app.
   */
  description?: string;
  /**
   * @remarks
   * The last time when the application was modified. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-03-01T09:00:00Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzko7fsuj****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   **Normal**
   * *   **Disable**
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   **System**
   * *   **Custom**
   * 
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      creationTime: 'CreationTime',
      description: 'Description',
      modificationTime: 'ModificationTime',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      creationTime: 'string',
      description: 'string',
      modificationTime: 'string',
      resourceGroupId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of applications.
   */
  appInfoList?: GetAppInfosResponseBodyAppInfoList[];
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The IDs of applications that do not exist.
   */
  nonExistAppIds?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-4DC4-D7393642****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appInfoList: 'AppInfoList',
      code: 'Code',
      nonExistAppIds: 'NonExistAppIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfoList: { 'type': 'array', 'itemType': GetAppInfosResponseBodyAppInfoList },
      code: 'string',
      nonExistAppIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appInfoList)) {
      $dara.Model.validateArray(this.appInfoList);
    }
    if(Array.isArray(this.nonExistAppIds)) {
      $dara.Model.validateArray(this.nonExistAppIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

