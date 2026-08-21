// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppInfosResponseBodyAppInfoList extends $dara.Model {
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
   * The creation time in UTC. The time follows the ISO 8601 standard in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
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
   * The modification time in UTC. The time follows the ISO 8601 standard in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
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
   * The application status. Valid values:
   * - **Normal**: normal.
   * - **Disable**: disabled.
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
   * The list of application information.
   */
  appInfoList?: GetAppInfosResponseBodyAppInfoList[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of application IDs that do not exist.
   */
  nonExistAppIds?: string[];
  /**
   * @remarks
   * The request ID.
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

