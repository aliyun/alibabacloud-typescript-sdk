// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeUpgradeTaskRequest extends $dara.Model {
  appId?: string;
  greyConfigInfo?: string;
  greyEndtimeData?: string;
  greyNum?: number;
  historyForce?: number;
  memo?: string;
  packageInfoId?: number;
  publishMode?: number;
  publishType?: number;
  tenantId?: string;
  upgradeContent?: string;
  upgradeType?: number;
  whitelistIds?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      historyForce: 'HistoryForce',
      memo: 'Memo',
      packageInfoId: 'PackageInfoId',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      tenantId: 'TenantId',
      upgradeContent: 'UpgradeContent',
      upgradeType: 'UpgradeType',
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
      historyForce: 'number',
      memo: 'string',
      packageInfoId: 'number',
      publishMode: 'number',
      publishType: 'number',
      tenantId: 'string',
      upgradeContent: 'string',
      upgradeType: 'number',
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

