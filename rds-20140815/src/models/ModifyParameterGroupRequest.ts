// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParameterGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The modification mode of the parameter template. Valid values:
   * * **Collectivity** (default): adds or updates parameters.
   * > The parameters that you specify in the **Parameters** parameter are added to or updated in the existing parameter template. Other parameters in the existing parameter template are not affected.
   * 
   * * **Individual**: overwrites the parameter template.
   * > The existing parameter template is replaced with the parameters that you specify in the **Parameters** parameter.
   * 
   * @example
   * Collectivity
   */
  modifyMode?: string;
  ownerId?: number;
  /**
   * @remarks
   * The description of the parameter template. The description can be up to 200 characters in length.
   * > If you do not specify this parameter, the original parameter template description is retained.
   * 
   * @example
   * test
   */
  parameterGroupDesc?: string;
  /**
   * @remarks
   * The parameter template ID. You can call the DescribeParameterGroups operation to query the parameter template ID.
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
   * > If you do not specify this parameter, the original parameter template name is retained.
   * 
   * @example
   * testgroup1
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * A JSON string that consists of parameters and their values. Format: {"Parameter 1":"Value 1","Parameter 2":"Value 2"...}. For more information about the parameters that can be modified, see [Configure the parameters of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96063.html) or [Configure the parameters of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96751.html).
   * 
   * > * If **ModifyMode** is set to **Individual**, the parameters that you specify overwrite the existing parameter template.
   * > * If **ModifyMode** is set to **Collectivity**, the parameters that you specify are added to or updated in the existing parameter template. Other parameters in the existing parameter template are not affected.
   * > * If you do not specify this parameter, the original parameter information is retained.
   * 
   * @example
   * {"back_log":"3000"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
   * > The region of a parameter template cannot be changed. You can call the CloneParameterGroup operation to copy a parameter template to another region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute operation to query the resource group ID.
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

