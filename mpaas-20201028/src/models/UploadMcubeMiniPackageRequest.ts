// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadMcubeMiniPackageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  autoInstall?: number;
  clientVersionMax?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  clientVersionMin?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enableKeepAlive?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enableOptionMenu?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enableTabBar?: number;
  extendInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  h5Id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  h5Name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  h5Version?: string;
  iconFileUrl?: string;
  iconUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  installType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  mainUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  onexFlag?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  packageType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  platform?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceFileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  uuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vhost?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoInstall: 'AutoInstall',
      clientVersionMax: 'ClientVersionMax',
      clientVersionMin: 'ClientVersionMin',
      enableKeepAlive: 'EnableKeepAlive',
      enableOptionMenu: 'EnableOptionMenu',
      enableTabBar: 'EnableTabBar',
      extendInfo: 'ExtendInfo',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      h5Version: 'H5Version',
      iconFileUrl: 'IconFileUrl',
      iconUrl: 'IconUrl',
      installType: 'InstallType',
      mainUrl: 'MainUrl',
      onexFlag: 'OnexFlag',
      packageType: 'PackageType',
      platform: 'Platform',
      resourceFileUrl: 'ResourceFileUrl',
      resourceType: 'ResourceType',
      tenantId: 'TenantId',
      userId: 'UserId',
      uuid: 'Uuid',
      vhost: 'Vhost',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoInstall: 'number',
      clientVersionMax: 'string',
      clientVersionMin: 'string',
      enableKeepAlive: 'string',
      enableOptionMenu: 'string',
      enableTabBar: 'number',
      extendInfo: 'string',
      h5Id: 'string',
      h5Name: 'string',
      h5Version: 'string',
      iconFileUrl: 'string',
      iconUrl: 'string',
      installType: 'number',
      mainUrl: 'string',
      onexFlag: 'boolean',
      packageType: 'number',
      platform: 'string',
      resourceFileUrl: 'string',
      resourceType: 'number',
      tenantId: 'string',
      userId: 'string',
      uuid: 'string',
      vhost: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

