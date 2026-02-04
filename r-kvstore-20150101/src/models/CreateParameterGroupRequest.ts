// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParameterGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The service category. Valid values:
   * 
   * *   **standard**: Community Edition
   * *   **enterprise**: Enhanced Edition (Tair)
   * 
   * This parameter is required.
   * 
   * @example
   * enterprise
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
   * *   For ApsaraDB for Redis Community Edition instances, set the parameter to **5.0**, **6.0**, or **7.0**.
   * *   For Tair DRAM-based instances that are compatible with Redis 5.0, 6.0, or 7.0, set the parameter to **5.0**, **6.0**, or **7.0**.
   * *   For Tair persistent memory-optimized instances that are compatible with Redis 6.0, set the parameter to **1.0**.
   * *   For Tair ESSD-based instances that are compatible with Redis 6.0, set the parameter to **1.0**. For Tair SSD-based instances that are compatible with Redis 6.0, set the parameter to **2.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 6.0
   */
  engineVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The description of the parameter template. The description must be 0 to 200 characters in length.
   * 
   * @example
   * test
   */
  parameterGroupDesc?: string;
  /**
   * @remarks
   * The new name of the parameter template. The name must meet the following requirements:
   * 
   * *   The name can contain letters, digits, and underscores (_). It must start with a letter and cannot contain Chinese characters.
   * *   The name can be 8 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * tw_test1
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * A JSON-formatted object that specifies the parameter-value pairs. Format: {"Parameter 1":"Value 1","Parameter 2":"Value 2"...}. The specified value overwrites the original content.
   * 
   * >  The parameters that can be added for different editions are displayed in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * {"hz":"15","#no_loose_disabled-commands":"flushall"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupName: 'ParameterGroupName',
      parameters: 'Parameters',
      regionId: 'RegionId',
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
      parameterGroupDesc: 'string',
      parameterGroupName: 'string',
      parameters: 'string',
      regionId: 'string',
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

