// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShareLink extends $dara.Model {
  accessCount?: number;
  createdAt?: string;
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
  fileIdList?: string[];
  officeEditable?: boolean;
  previewCount?: number;
  previewLimit?: number;
  reportCount?: number;
  saveCount?: number;
  saveDownloadLimit?: number;
  saveLimit?: number;
  shareAllFiles?: boolean;
  shareId?: string;
  shareName?: string;
  sharePwd?: string;
  status?: string;
  updatedAt?: string;
  videoPreviewCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'access_count',
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      disableDownload: 'disable_download',
      disablePreview: 'disable_preview',
      disableSave: 'disable_save',
      downloadCount: 'download_count',
      downloadLimit: 'download_limit',
      driveId: 'drive_id',
      expiration: 'expiration',
      expired: 'expired',
      fileIdList: 'file_id_list',
      officeEditable: 'office_editable',
      previewCount: 'preview_count',
      previewLimit: 'preview_limit',
      reportCount: 'report_count',
      saveCount: 'save_count',
      saveDownloadLimit: 'save_download_limit',
      saveLimit: 'save_limit',
      shareAllFiles: 'share_all_files',
      shareId: 'share_id',
      shareName: 'share_name',
      sharePwd: 'share_pwd',
      status: 'status',
      updatedAt: 'updated_at',
      videoPreviewCount: 'video_preview_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'number',
      createdAt: 'string',
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
      fileIdList: { 'type': 'array', 'itemType': 'string' },
      officeEditable: 'boolean',
      previewCount: 'number',
      previewLimit: 'number',
      reportCount: 'number',
      saveCount: 'number',
      saveDownloadLimit: 'number',
      saveLimit: 'number',
      shareAllFiles: 'boolean',
      shareId: 'string',
      shareName: 'string',
      sharePwd: 'string',
      status: 'string',
      updatedAt: 'string',
      videoPreviewCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fileIdList)) {
      $dara.Model.validateArray(this.fileIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

