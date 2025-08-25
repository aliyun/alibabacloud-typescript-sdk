// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeMiniTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  greyConfigInfo?: string;
  greyEndtimeData?: string;
  greyNum?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  memo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  packageId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  publishMode?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  publishType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  tenantId?: string;
  whitelistIds?: string;
  /**
   * @remarks
   * This parameter is required.
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
      publishMode: 'PublishMode',
      publishType: 'PublishType',
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
      publishMode: 'number',
      publishType: 'number',
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

