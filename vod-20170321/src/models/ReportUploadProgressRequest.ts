// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportUploadProgressRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  authInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  authTimestamp?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  businessType?: string;
  clientId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceModel?: string;
  donePartsCount?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  fileCreateTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileHash?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileSize?: number;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  partSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  source?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  terminalType?: string;
  totalPart?: number;
  uploadAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uploadId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uploadPoint?: string;
  uploadRatio?: number;
  userId?: number;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      authInfo: 'AuthInfo',
      authTimestamp: 'AuthTimestamp',
      businessType: 'BusinessType',
      clientId: 'ClientId',
      deviceModel: 'DeviceModel',
      donePartsCount: 'DonePartsCount',
      fileCreateTime: 'FileCreateTime',
      fileHash: 'FileHash',
      fileName: 'FileName',
      fileSize: 'FileSize',
      ownerId: 'OwnerId',
      partSize: 'PartSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      source: 'Source',
      terminalType: 'TerminalType',
      totalPart: 'TotalPart',
      uploadAddress: 'UploadAddress',
      uploadId: 'UploadId',
      uploadPoint: 'UploadPoint',
      uploadRatio: 'UploadRatio',
      userId: 'UserId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      authInfo: 'string',
      authTimestamp: 'number',
      businessType: 'string',
      clientId: 'string',
      deviceModel: 'string',
      donePartsCount: 'number',
      fileCreateTime: 'string',
      fileHash: 'string',
      fileName: 'string',
      fileSize: 'number',
      ownerId: 'number',
      partSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      source: 'string',
      terminalType: 'string',
      totalPart: 'number',
      uploadAddress: 'string',
      uploadId: 'string',
      uploadPoint: 'string',
      uploadRatio: 'number',
      userId: 'number',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

