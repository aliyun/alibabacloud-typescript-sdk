// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSmartAccessGatewayVersionsRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
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
   * The Smart Access Gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-d3m51apgw4po5*****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The serial number of the Smart Access Gateway device.
   * 
   * @example
   * sage62x022502****
   */
  smartAGSn?: string;
  /**
   * @remarks
   * The software type of the Smart Access Gateway device. Valid values:
   * 
   * - **Device**: the operating system software that runs on the Smart Access Gateway device. Default value.
   * - **Dpi**: the application signature library software that runs on the Smart Access Gateway device.
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

