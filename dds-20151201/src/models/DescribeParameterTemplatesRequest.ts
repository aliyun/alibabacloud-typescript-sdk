// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The database engine. Set the value to **mongodb**.
   * 
   * This parameter is required.
   * 
   * @example
   * mongodb
   */
  engine?: string;
  /**
   * @remarks
   * The database version number. Valid values:
   * 
   * - **7.0**
   * 
   * - **6.0**
   * 
   * - **5.0**
   * 
   * - **4.4**
   * 
   * - **4.2**
   * 
   * - **4.0**
   * 
   * - **3.4**
   * 
   * This parameter is required.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role of the instance. Valid values:
   * 
   * - db: the shard role of a sharded cluster instance.
   * 
   * - cs: the config server role of a sharded cluster instance.
   * 
   * - mongos: the mongos role of a sharded cluster instance.
   * 
   * - normal: the role of a replica set instance.
   * 
   * - physical: the role of a single node instance.
   * 
   * The default value is normal.
   * 
   * @example
   * normal
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      engineVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

