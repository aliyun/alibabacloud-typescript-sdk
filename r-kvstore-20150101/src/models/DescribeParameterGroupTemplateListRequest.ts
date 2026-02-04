// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupTemplateListRequest extends $dara.Model {
  /**
   * @remarks
   * The service category. Valid values:
   * 
   * *   **standard**: Redis Open-Source Edition
   * *   **enterprise**: Tair (Enterprise Edition)
   * 
   * This parameter is required.
   * 
   * @example
   * standard
   */
  category?: string;
  /**
   * @remarks
   * The role of the instance. Valid values: logic: logical instance. db: database instance. proxy: proxy node. cs: ConfigServer node. normal: master-replica database instance.
   * 
   * @example
   * db
   */
  characterType?: string;
  /**
   * @remarks
   * The engine type. Valid values:
   * 
   * *   **redis**: Redis Open-Source Edition or Tair (In-Memory)
   * *   **tair_pena**: Tair (On NVM)
   * *   **tair_pdb**: Tair (On Disk)
   * 
   * This parameter is required.
   * 
   * @example
   * redis
   */
  engineType?: string;
  /**
   * @remarks
   * The compatible engine version. Valid values:
   * 
   * *   For Redis Open-Source Edition instances, set the parameter to **5.0**, **6.0**, or **7.0**.
   * *   For Tair DRAM-based instances that are compatible with Redis 5.0, 6.0, or 7.0, set the parameter to **5.0**, **6.0**, or **7.0**.
   * *   For Tair persistent memory-optimized instances that are compatible with Redis 6.0, set the parameter to **1.0**.
   * *   For Tair ESSD-based instances that are compatible with Redis 6.0, set the parameter to **1.0**. For Tair SSD-based instances that are compatible with Redis 6.0, set the parameter to **2.0**.
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

