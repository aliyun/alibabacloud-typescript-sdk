// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the applications.
   */
  appIdList?: string[];
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * defaultAppName
   */
  appName?: string;
  appType?: string;
  /**
   * @remarks
   * Region id.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The installation/uninstallation status of the application.
   * 
   * Valid values:
   * 
   * *   INSTALLFAILED: The application failed to be installed.
   * *   UNINSTALLING: The application is being uninstalled.
   * *   INSTALLING: The application is being installed.
   * *   UNINSTALLED: The application is uninstalled.
   * *   INSTALLED: The application is installed.
   * *   UNINSTALLFAILED: The application failed to be uninstalled.
   * 
   * @example
   * INSTALLING
   */
  installationStatus?: string;
  /**
   * @remarks
   * The value of MD5.
   * 
   * @example
   * THCIEH73KEK3334
   */
  MD5?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the parameter is left empty, the data is queried from the first entry.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The status of the application.
   * 
   * Valid values:
   * 
   * *   FAILED: The application failed to be created.
   * *   NORMAL: The application is available.
   * *   CREATING: The application is being created.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appIdList: 'AppIdList',
      appName: 'AppName',
      appType: 'AppType',
      bizRegionId: 'BizRegionId',
      installationStatus: 'InstallationStatus',
      MD5: 'MD5',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdList: { 'type': 'array', 'itemType': 'string' },
      appName: 'string',
      appType: 'string',
      bizRegionId: 'string',
      installationStatus: 'string',
      MD5: 'string',
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appIdList)) {
      $dara.Model.validateArray(this.appIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

