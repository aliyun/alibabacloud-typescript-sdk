// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParameterGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The product category. Valid values:
   * 
   * * **standard**: Redis Community Edition.
   * * **enterprise**: Tair (Enterprise Edition).
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
   * * **redis**: Redis Community Edition or Tair memory-optimized.
   * * **tair_pena**: Tair persistent memory-optimized.
   * * **tair_pdb**: Tair disk-optimized (ESSD/SSD).
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
   * 
   * * Redis Community Edition supports **5.0**, **6.0**, and **7.0**.
   * * Tair memory-optimized is compatible with Redis 5.0, 6.0, and 7.0 protocols. Set this parameter to **5.0**, **6.0**, or **7.0**.
   * * Tair persistent memory-optimized is compatible with the Redis 6.0 protocol. Set this parameter to **1.0**.
   * * Tair disk-optimized (ESSD/SSD) is compatible with the Redis 6.0 protocol. To create a parameter template for the ESSD type, set this parameter to **1.0**. To create a parameter template for the SSD type, set this parameter to **2.0**.
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
   * The description of the parameter template. The description can be 0 to 200 characters in length.
   * 
   * @example
   * test
   */
  parameterGroupDesc?: string;
  /**
   * @remarks
   * The name of the parameter template. The name must meet the following requirements:
   * 
   * - The name can contain letters, digits, and underscores (_). It must start with a letter and cannot contain Chinese characters.
   * - The name must be 8 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * tw_test1
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * A JSON string that consists of parameters and their values, in the following format: {"Parameter 1":"Value of Parameter 1","Parameter 2":"Value of Parameter 2"...}.
   * > The parameters that can be added vary by version. Refer to the console for details.
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

