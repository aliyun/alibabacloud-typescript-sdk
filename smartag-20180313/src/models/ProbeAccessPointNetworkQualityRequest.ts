// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProbeAccessPointNetworkQualityRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the access point.
   * 
   * This parameter is required.
   */
  accessPointIds?: number[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-6z21oj0vjjrx6s****
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointIds: 'AccessPointIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointIds: { 'type': 'array', 'itemType': 'number' },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessPointIds)) {
      $dara.Model.validateArray(this.accessPointIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

