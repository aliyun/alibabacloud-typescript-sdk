// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParameterGroupRequest extends $dara.Model {
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
   * enterprise
   */
  category?: string;
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
   * The parameter template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sys-001****
   */
  parameterGroupId?: string;
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
   * testGroupName
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
   * {"hz":"12"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupId: 'ParameterGroupId',
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
      ownerAccount: 'string',
      ownerId: 'number',
      parameterGroupDesc: 'string',
      parameterGroupId: 'string',
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

