// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeHotpatchTaskRequest extends $dara.Model {
  /**
   * @example
   * ALIPUBE5C3F6D091419
   */
  appId?: string;
  greyConfigInfo?: string;
  greyEndtimeData?: string;
  /**
   * @example
   * 100
   */
  greyNum?: number;
  memo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1662218
   */
  packageId?: number;
  /**
   * @example
   * iOS
   */
  platform?: string;
  /**
   * @example
   * 2
   */
  publishMode?: number;
  /**
   * @example
   * 3
   */
  publishType?: number;
  /**
   * @example
   * 0
   */
  syncMode?: string;
  /**
   * @example
   * ZXCXMAHQ
   */
  tenantId?: string;
  /**
   * @example
   * 825827
   */
  whitelistIds?: string;
  /**
   * @example
   * dev
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      memo: 'Memo',
      packageId: 'PackageId',
      platform: 'Platform',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      syncMode: 'SyncMode',
      tenantId: 'TenantId',
      whitelistIds: 'WhitelistIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      greyConfigInfo: 'string',
      greyEndtimeData: 'string',
      greyNum: 'number',
      memo: 'string',
      packageId: 'number',
      platform: 'string',
      publishMode: 'number',
      publishType: 'number',
      syncMode: 'string',
      tenantId: 'string',
      whitelistIds: 'string',
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

