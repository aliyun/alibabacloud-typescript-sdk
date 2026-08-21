// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInfoResponseBodyAppInfoList extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The time when the application was created. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2019-03-01T08:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * my first app.
   */
  description?: string;
  /**
   * @remarks
   * The time when the application was last modified. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format (UTC).
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
   * The resource group ID.
   * 
   * @example
   * rg-aekzko7fsuj****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The application status. Valid values:
   * - **Normal**
   * - **Disable**
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The application type. Valid values:
   * - **System**: system default.
   * - **Custom**: user-created.
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
   * The list of application information.
   */
  appInfoList?: ListAppInfoResponseBodyAppInfoList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4A13-4D5C-D7393642****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

