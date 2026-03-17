// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSmartAccessGatewayVersionsRequest extends $dara.Model {
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
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-d3m51apgw4po5*****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * @example
   * sage62x022502****
   */
  smartAGSn?: string;
  /**
   * @remarks
   * The type of software run by the SAG device. Valid values:
   * 
   * *   **Device**: The operating system run by the SAG device. This is the default value.
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
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
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
      smartAGId: 'string',
      smartAGSn: 'string',
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

