// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMdsMiniprogramTaskRequest extends $dara.Model {
  appId?: string;
  greyConfigInfo?: string;
  greyEndtimeData?: string;
  greyNum?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: number;
  memo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  packageId?: number;
  publishMode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  publishType?: number;
  syncMode?: string;
  tenantId?: string;
  whitelistIds?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      id: 'Id',
      memo: 'Memo',
      packageId: 'PackageId',
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
      greyNum: 'string',
      id: 'number',
      memo: 'string',
      packageId: 'number',
      publishMode: 'string',
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

