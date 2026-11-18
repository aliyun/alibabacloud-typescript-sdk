// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupSupportParamRequest extends $dara.Model {
  /**
   * @remarks
   * The product category. Valid values:
   * * **standard**: Open-source Redis.
   * * **enterprise**: Tair (Redis Enterprise Edition).
   * 
   * @example
   * standard
   */
  category?: string;
  /**
   * @remarks
   * The engine type. Valid values:
   * * **redis**: Open-source Redis or memory-optimized Tair.
   * * **tair_pena**: Persistent memory-optimized Tair.
   * * **tair_pdb**: Disk-optimized Tair (ESSD/SSD).
   * 
   * @example
   * redis
   */
  engineType?: string;
  /**
   * @remarks
   * The compatible engine version. Valid values:
   * * Open-source Redis supports **5.0**, **6.0**, and **7.0**.
   * * Memory-optimized Tair is compatible with the Redis 5.0 and Redis 6.0 protocols. Set the value to **5.0** or **6.0**.
   * * Persistent memory-optimized Tair is compatible with the Redis 6.0 protocol. Set the value to **1.0**.
   * * Disk-optimized Tair (ESSD/SSD) is compatible with the Redis 6.0 protocol. Set the value to **1.0** for ESSD-based parameter templates or **2.0** for SSD-based parameter templates.
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

