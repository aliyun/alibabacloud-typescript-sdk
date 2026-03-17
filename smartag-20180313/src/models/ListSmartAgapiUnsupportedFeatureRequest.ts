// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartAGApiUnsupportedFeatureRequest extends $dara.Model {
  /**
   * @remarks
   * The API operation for the unsupported feature.
   * 
   * This parameter is required.
   * 
   * @example
   * ModifySagWan
   */
  openApiName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * This parameter is required.
   * 
   * @example
   * sage62x052614****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The ID of the SAG instance with which the SAG device is associated.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-4d6i45zess8nj4****
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      openApiName: 'OpenApiName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openApiName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

