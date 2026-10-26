// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParameterGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The modification mode of the parameter template. Valid values:
   * * **Collectivity**: adds or modifies parameters. This is the default value.
   * >The parameters specified in the **Parameters** parameter are added to the current parameter template, or the existing parameters in the current parameter template are modified. Other parameters in the current parameter template remain unaffected.
   * 
   * * **Individual**: overwrites parameters.
   * >The content in the current parameter template is replaced with the content specified in the **Parameters** parameter.
   * 
   * @example
   * Collectivity
   */
  modifyMode?: string;
  ownerId?: number;
  /**
   * @remarks
   * The description of the parameter template. The description must be 0 to 200 characters in length.
   * >If you do not specify this parameter, the original description of the parameter template is retained.
   * 
   * @example
   * test
   */
  parameterGroupDesc?: string;
  /**
   * @remarks
   * The ID of the parameter template. You can call the DescribeParameterGroups operation to query the ID of the parameter template.
   * 
   * This parameter is required.
   * 
   * @example
   * rpg-13ppdh****
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The name of the parameter template.
   * * The name must start with a letter and can contain letters, digits, periods (.), and underscores (_).
   * * The name must be 8 to 64 characters in length.
   * 
   * >If you do not specify this parameter, the original name of the parameter template is retained.
   * 
   * @example
   * testgroup1
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * The JSON string of parameters and values. Format: {"Parameter 1":"Value 1","Parameter 2":"Value 2"...}. For more information about the parameters that can be modified, see [Set the parameters of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96063.html) or [Set the parameters of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96751.html).
   * 
   * > * If the **ModifyMode** parameter is set to **Individual**, the specified parameters overwrite the original parameters in the parameter template.
   * > * If the **ModifyMode** parameter is set to **Collectivity**, the specified parameters are added to or modified in the original parameter template.
   * > * If you do not specify this parameter, the original parameters are retained.
   * 
   * @example
   * {"back_log":"3000"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
   * >The region of a parameter template cannot be modified. You can call the CloneParameterGroup operation to copy the parameter template to another region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. You can call the DescribeDBInstanceAttribute operation to query the ID of the resource group.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      modifyMode: 'ModifyMode',
      ownerId: 'OwnerId',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupId: 'ParameterGroupId',
      parameterGroupName: 'ParameterGroupName',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyMode: 'string',
      ownerId: 'number',
      parameterGroupDesc: 'string',
      parameterGroupId: 'string',
      parameterGroupName: 'string',
      parameters: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

