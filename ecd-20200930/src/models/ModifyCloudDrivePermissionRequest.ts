// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudDrivePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud disk in Cloud Drive Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-60911*****
   */
  cdsId?: string;
  /**
   * @remarks
   * The IDs of the users who have the download permissions.
   */
  downloadEndUserIds?: string[];
  /**
   * @remarks
   * The IDs of the users who have the upload and download permissions.
   */
  downloadUploadEndUserIds?: string[];
  noDownloadNoUploadEndUserIds?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      downloadEndUserIds: 'DownloadEndUserIds',
      downloadUploadEndUserIds: 'DownloadUploadEndUserIds',
      noDownloadNoUploadEndUserIds: 'NoDownloadNoUploadEndUserIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      downloadEndUserIds: { 'type': 'array', 'itemType': 'string' },
      downloadUploadEndUserIds: { 'type': 'array', 'itemType': 'string' },
      noDownloadNoUploadEndUserIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.downloadEndUserIds)) {
      $dara.Model.validateArray(this.downloadEndUserIds);
    }
    if(Array.isArray(this.downloadUploadEndUserIds)) {
      $dara.Model.validateArray(this.downloadUploadEndUserIds);
    }
    if(Array.isArray(this.noDownloadNoUploadEndUserIds)) {
      $dara.Model.validateArray(this.noDownloadNoUploadEndUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

