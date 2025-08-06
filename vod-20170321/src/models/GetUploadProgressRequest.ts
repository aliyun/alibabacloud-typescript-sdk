// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadProgressRequest extends $dara.Model {
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
  businessType?: string;
  clientId?: string;
  deviceModel?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  source?: string;
  terminalType?: string;
  uploadAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uploadInfoList?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      authInfo: 'AuthInfo',
      authTimestamp: 'AuthTimestamp',
      businessType: 'BusinessType',
      clientId: 'ClientId',
      deviceModel: 'DeviceModel',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      source: 'Source',
      terminalType: 'TerminalType',
      uploadAddress: 'UploadAddress',
      uploadInfoList: 'UploadInfoList',
      userId: 'UserId',
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
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      source: 'string',
      terminalType: 'string',
      uploadAddress: 'string',
      uploadInfoList: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

