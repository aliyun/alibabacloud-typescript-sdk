// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupTemplateListRequest extends $dara.Model {
  /**
   * @remarks
   * The product category. Valid values:
   * - **standard**: Redis Community Edition.
   * - **enterprise**: Tair (Enhanced Edition).
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
   * * **logic**: cluster logical instance.
   * * **db**: cluster DB instance.
   * * **proxy**: cluster proxy instance.
   * * **cs**: cluster CS instance.
   * * **normal**: primary/secondary DB instance.
   * 
   * @example
   * db
   */
  characterType?: string;
  /**
   * @remarks
   * The engine type. Valid values:
   * - **redis**: Redis Community Edition or Tair memory-optimized.
   * - **tair_pena**: Tair persistent memory-optimized.
   * - **tair_pdb**: Tair disk-based (ESSD/SSD).
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
   * * Redis Community Edition supports **5.0**, **6.0**, and **7.0**.
   * * Tair memory-optimized instances are compatible with Redis 5.0, 6.0, and 7.0 protocols. Set this parameter to **5.0**, **6.0**, or **7.0**.
   * * Tair persistent memory-optimized instances are compatible with the Redis 6.0 protocol. Set this parameter to **1.0**.
   * * Tair disk-based (ESSD/SSD) instances are compatible with the Redis 6.0 protocol. To create an ESSD-based parameter template, set this parameter to **1.0**. To create an SSD-based parameter template, set this parameter to **2.0**.
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

