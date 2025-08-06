// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeSlsRoleRequest extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   */
  clientId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceModel?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  terminalType?: string;
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
      terminalType: 'TerminalType',
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
      terminalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

