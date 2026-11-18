// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParameterGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The product category. Valid values:
   * * **standard**: Open-source Redis.
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
   * * **redis**: Open-source Redis or Tair memory-based.
   * * **tair_pena**: Tair persistent memory-based.
   * * **tair_pdb**: Tair disk-based (ESSD/SSD).
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
   * * Tair memory-based instances are compatible with the Redis 5.0, 6.0, and 7.0 protocols. Set the value to **5.0**, **6.0**, or **7.0**.
   * * Tair persistent memory-based instances are compatible with the Redis 6.0 protocol. Set the value to **1.0**.
   * * Tair disk-based (ESSD/SSD) instances are compatible with the Redis 6.0 protocol. To create a parameter template for ESSD-based instances, set the value to **1.0**. To create a parameter template for SSD-based instances, set the value to **2.0**.
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
   * The name of the parameter template. The name must meet the following requirements:
   * - It must contain only letters, digits, and underscores (_). It must start with a letter and cannot contain Chinese characters.
   * - It must be 8 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * tw_test1
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * The parameters and their corresponding values in JSON format. Format: {"Parameter1":"Value1","Parameter2":"Value2"...}.
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

