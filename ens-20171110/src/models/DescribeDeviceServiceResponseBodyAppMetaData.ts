// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceServiceResponseBodyAppMetaData extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 97a32f2a-aa2c-436a-b19c-05b20d258618
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * iotx-api-admin
   */
  appName?: string;
  /**
   * @remarks
   * The stable version number of the application.
   * 
   * @example
   * v1
   */
  appStableVersion?: string;
  /**
   * @remarks
   * The type of the application. The value is of the enumeration type. Valid values:
   * 
   * *   Common
   * *   Scheduler
   * 
   * @example
   * Common
   */
  appType?: string;
  /**
   * @remarks
   * The name of the application cluster.
   * 
   * @example
   * poc
   */
  clusterName?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2022-03-03T03:42:11
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * test application
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appStableVersion: 'AppStableVersion',
      appType: 'AppType',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appStableVersion: 'string',
      appType: 'string',
      clusterName: 'string',
      createTime: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

