// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CdsFileShareLinkModel extends $dara.Model {
  accessCount?: number;
  createTime?: string;
  creator?: string;
  description?: string;
  disableDownload?: boolean;
  disablePreview?: boolean;
  disableSave?: boolean;
  downloadCount?: number;
  downloadLimit?: number;
  driveId?: string;
  expiration?: string;
  expired?: boolean;
  fileIds?: string;
  modifiyTime?: string;
  previewCount?: number;
  previewLimit?: number;
  reportCount?: number;
  saveCount?: number;
  saveLimit?: number;
  shareId?: string;
  shareLink?: string;
  shareName?: string;
  sharePwd?: string;
  status?: string;
  videoPreviewCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'AccessCount',
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      disableDownload: 'DisableDownload',
      disablePreview: 'DisablePreview',
      disableSave: 'DisableSave',
      downloadCount: 'DownloadCount',
      downloadLimit: 'DownloadLimit',
      driveId: 'DriveId',
      expiration: 'Expiration',
      expired: 'Expired',
      fileIds: 'FileIds',
      modifiyTime: 'ModifiyTime',
      previewCount: 'PreviewCount',
      previewLimit: 'PreviewLimit',
      reportCount: 'ReportCount',
      saveCount: 'SaveCount',
      saveLimit: 'SaveLimit',
      shareId: 'ShareId',
      shareLink: 'ShareLink',
      shareName: 'ShareName',
      sharePwd: 'SharePwd',
      status: 'Status',
      videoPreviewCount: 'VideoPreviewCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'number',
      createTime: 'string',
      creator: 'string',
      description: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadCount: 'number',
      downloadLimit: 'number',
      driveId: 'string',
      expiration: 'string',
      expired: 'boolean',
      fileIds: 'string',
      modifiyTime: 'string',
      previewCount: 'number',
      previewLimit: 'number',
      reportCount: 'number',
      saveCount: 'number',
      saveLimit: 'number',
      shareId: 'string',
      shareLink: 'string',
      shareName: 'string',
      sharePwd: 'string',
      status: 'string',
      videoPreviewCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

