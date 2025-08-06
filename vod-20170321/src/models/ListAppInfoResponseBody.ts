// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInfoResponseBodyAppInfoList extends $dara.Model {
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
   * The time when the application was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
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
   * The last time when the application was modified. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2019-03-01T09:00:00Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
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
      regionId: 'RegionId',
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
      regionId: 'string',
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

export class ListAppInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of applications.
   */
  appInfoList?: ListAppInfoResponseBodyAppInfoList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-4D5C-D7393642****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      appInfoList: 'AppInfoList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfoList: { 'type': 'array', 'itemType': ListAppInfoResponseBodyAppInfoList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appInfoList)) {
      $dara.Model.validateArray(this.appInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

