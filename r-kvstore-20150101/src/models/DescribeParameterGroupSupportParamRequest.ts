// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupSupportParamRequest extends $dara.Model {
  /**
   * @remarks
   * The product category. Valid values:
   * * **standard**: ApsaraDB for Redis Community Edition.
   * * **enterprise**: Tair (Redis Enterprise Edition).
   * 
   * @example
   * standard
   */
  category?: string;
  /**
   * @remarks
   * The engine type. Valid values:
   * * **redis**: ApsaraDB for Redis Community Edition or Tair memory-optimized instances.
   * * **tair_pena**: Tair persistent memory-optimized instances.
   * * **tair_pdb**: Tair cloud-native (ESSD/SSD) instances.
   * 
   * @example
   * redis
   */
  engineType?: string;
  /**
   * @remarks
   * The compatible version. Valid values:
   * * ApsaraDB for Redis Community Edition supports **5.0**, **6.0**, and **7.0**.
   * * Tair memory-optimized instances are compatible with Redis 5.0 and Redis 6.0 protocols. Set this parameter to **5.0** or **6.0**.
   * * Tair persistent memory-optimized instances are compatible with the Redis 6.0 protocol. Set this parameter to **1.0**.
   * * Tair cloud-native (ESSD/SSD) instances are compatible with the Redis 6.0 protocol. To create a parameter template for ESSD-based instances, set this parameter to **1.0**. To create a parameter template for SSD-based instances, set this parameter to **2.0**.
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

