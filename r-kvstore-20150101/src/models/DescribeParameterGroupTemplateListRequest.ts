// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupTemplateListRequest extends $dara.Model {
  /**
   * @remarks
   * The product category. Valid values:
   * - **standard**: Open-source Redis.
   * - **enterprise**: Tair (Enterprise Edition).
   * 
   * This parameter is required.
   * 
   * @example
   * standard
   */
  category?: string;
  /**
   * @remarks
   * The role type of the instance. Valid values:
   * * **logic**: Cluster logical instance.
   * * **db**: Cluster DB instance.
   * * **proxy**: Cluster proxy instance.
   * * **cs**: Cluster CS instance.
   * * **normal**: Primary/secondary DB instance.
   * 
   * @example
   * db
   */
  characterType?: string;
  /**
   * @remarks
   * The engine type. Valid values:
   * - **redis**: Open-source Redis or memory-optimized Tair.
   * - **tair_pena**: Persistent memory-optimized Tair.
   * - **tair_pdb**: Disk-based Tair (ESSD/SSD).
   * 
   * This parameter is required.
   * 
   * @example
   * redis
   */
  engineType?: string;
  /**
   * @remarks
   * The compatible version. Valid values:
   * * Open-source Redis supports **5.0**, **6.0**, and **7.0**.
   * * Memory-optimized Tair is compatible with Redis 5.0, 6.0, and 7.0 protocols. Set the value to **5.0**, **6.0**, or **7.0**.
   * * Persistent memory-optimized Tair is compatible with the Redis 6.0 protocol. Set the value to **1.0**.
   * * Disk-based Tair (ESSD/SSD) is compatible with the Redis 6.0 protocol. To create a parameter template for ESSD-based instances, set the value to **1.0**. To create a parameter template for SSD-based instances, set the value to **2.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      characterType: 'CharacterType',
      engineType: 'EngineType',
      engineVersion: 'EngineVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      characterType: 'string',
      engineType: 'string',
      engineVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

