// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeNebulaTaskRequest extends $dara.Model {
  appCode?: string;
  appId?: string;
  bizType?: string;
  creator?: string;
  gmtCreate?: string;
  gmtModified?: string;
  gmtModifiedStr?: string;
  greyConfigInfo?: string;
  greyEndtime?: string;
  greyEndtimeData?: string;
  greyEndtimeStr?: string;
  greyNum?: number;
  greyUrl?: string;
  id?: number;
  memo?: string;
  modifier?: string;
  packageId?: number;
  percent?: number;
  platform?: string;
  productId?: string;
  productVersion?: string;
  publishMode?: number;
  publishType?: number;
  releaseVersion?: string;
  resIds?: string;
  serialVersionUID?: number;
  status?: number;
  syncMode?: string;
  syncResult?: string;
  taskName?: string;
  taskStatus?: number;
  taskType?: number;
  taskVersion?: number;
  tenantId?: string;
  upgradeNoticeNum?: number;
  upgradeProgress?: string;
  whitelistIds?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appId: 'AppId',
      bizType: 'BizType',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtModifiedStr: 'GmtModifiedStr',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtime: 'GreyEndtime',
      greyEndtimeData: 'GreyEndtimeData',
      greyEndtimeStr: 'GreyEndtimeStr',
      greyNum: 'GreyNum',
      greyUrl: 'GreyUrl',
      id: 'Id',
      memo: 'Memo',
      modifier: 'Modifier',
      packageId: 'PackageId',
      percent: 'Percent',
      platform: 'Platform',
      productId: 'ProductId',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      releaseVersion: 'ReleaseVersion',
      resIds: 'ResIds',
      serialVersionUID: 'SerialVersionUID',
      status: 'Status',
      syncMode: 'SyncMode',
      syncResult: 'SyncResult',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      taskVersion: 'TaskVersion',
      tenantId: 'TenantId',
      upgradeNoticeNum: 'UpgradeNoticeNum',
      upgradeProgress: 'UpgradeProgress',
      whitelistIds: 'WhitelistIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appId: 'string',
      bizType: 'string',
      creator: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      gmtModifiedStr: 'string',
      greyConfigInfo: 'string',
      greyEndtime: 'string',
      greyEndtimeData: 'string',
      greyEndtimeStr: 'string',
      greyNum: 'number',
      greyUrl: 'string',
      id: 'number',
      memo: 'string',
      modifier: 'string',
      packageId: 'number',
      percent: 'number',
      platform: 'string',
      productId: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishType: 'number',
      releaseVersion: 'string',
      resIds: 'string',
      serialVersionUID: 'number',
      status: 'number',
      syncMode: 'string',
      syncResult: 'string',
      taskName: 'string',
      taskStatus: 'number',
      taskType: 'number',
      taskVersion: 'number',
      tenantId: 'string',
      upgradeNoticeNum: 'number',
      upgradeProgress: 'string',
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

