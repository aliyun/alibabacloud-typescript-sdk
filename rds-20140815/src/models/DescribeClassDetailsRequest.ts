// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClassDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * rds.mysql.s3.large
   */
  classCode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the generated token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz*****
   */
  clientToken?: string;
  /**
   * @remarks
   * The commodity code of the instance. Valid values:
   * 
   * *   **bards_intl**: The instance is a pay-as-you-go primary instance.
   * *   **rds_intl**: The instance is a subscription primary instance.
   * *   **rords_intl**: The instance is a pay-as-you-go read-only instance.
   * *   **rds_rordspre_public_intl**: The instance is a subscription read-only instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.6
   */
  engineVersion?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute operation to query the resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
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

