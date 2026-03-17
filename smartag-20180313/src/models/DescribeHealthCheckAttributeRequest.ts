// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthCheckAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the health check instance.
   * 
   * This parameter is required.
   * 
   * @example
   * hc-1k4ucuq77b56x4****
   */
  hcInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway (SAG) instance.
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
   * sag-1um5x5nwhilymw****
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      hcInstanceId: 'HcInstanceId',
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
      hcInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

