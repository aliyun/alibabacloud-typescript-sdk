// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClassDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  classCode?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  commodityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  engineVersion?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      clientToken: 'ClientToken',
      commodityCode: 'CommodityCode',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      clientToken: 'string',
      commodityCode: 'string',
      engine: 'string',
      engineVersion: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

