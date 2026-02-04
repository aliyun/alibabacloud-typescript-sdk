// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupSupportParamRequest extends $dara.Model {
  /**
   * @remarks
   * The service category. Valid values:
   * 
   * *   **standard**: ApsaraDB for Redis Community Edition
   * *   **enterprise**: ApsaraDB for Redis Enhanced Edition (Tair)
   * 
   * @example
   * standard
   */
  category?: string;
  /**
   * @remarks
   * The engine type. Valid values:
   * 
   * *   **redis**: ApsaraDB for Redis Community Edition instance or Tair DRAM-based instance
   * *   **tair_pena**: Tair persistent memory-optimized instance
   * *   **tair_pdb**: Tair ESSD/SSD-based instance
   * 
   * @example
   * redis
   */
  engineType?: string;
  /**
   * @remarks
   * The compatible engine version. Valid values:
   * 
   * *   For ApsaraDB for Redis Community Edition instances, set the parameter to **5.0**, **6.0**, or **7.0**.
   * *   For Tair DRAM-based instances that are compatible with Redis 5.0 or Redis 6.0, set the parameter to **5.0** or **6.0**.
   * *   For Tair persistent memory-optimized instances that are compatible with Redis 6.0, set the parameter to **1.0**.
   * *   For Tair ESSD-based instances that are compatible with Redis 6.0, set the parameter to **1.0**. For Tair SSD-based instances that are compatible with Redis 6.0, set the parameter to **2.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
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

