// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmartAccessGatewayVersionRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * @example
   * sag233****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-0ovhf732a9j*******
   */
  smartAGId?: string;
  /**
   * @remarks
   * The version to which you want to upgrade the SAG device.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0.1
   */
  versionCode?: string;
  /**
   * @remarks
   * The type of software that you want to upgrade. Valid values:
   * 
   * *   **Device**: The operating system run by the SAG device.
   * *   **Dpi**: The signature database used by the SAG device.
   * 
   * @example
   * Device
   */
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
      versionCode: 'VersionCode',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
      versionCode: 'string',
      versionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

