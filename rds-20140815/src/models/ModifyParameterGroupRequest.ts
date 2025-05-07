// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParameterGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The modification mode of the parameter template. Valid values:
   * 
   * *   **Collectivity** (default): adds new parameters or modifies parameters in the original parameter template.
   * 
   * >  If you set the ModifyMode parameter to Collectivity, the system adds the value of the **Parameters** parameter to the original parameter template or modifies the corresponding parameters in the original parameter template. Other parameters in the original parameter template are not affected.
   * 
   * *   **Individual**: overwrites original parameters.
   * 
   * >  If you set the ModifyMode parameter to Individual, the system uses the value of the **Parameters** parameter to overwrite the parameter settings in the original parameter template.
   * 
   * @example
   * Collectivity
   */
  modifyMode?: string;
  ownerId?: number;
  /**
   * @remarks
   * The new description of the parameter template. The description can be up to 200 characters in length.
   * 
   * > If you do not specify this parameter, the original description of the parameter template is retained.
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
   * The parameter template name.
   * 
   * *   The name can contain letters, digits, periods (.), and underscores (_). It must start with a letter.
   * *   It can be 8 to 64 characters in length.
   * 
   * > If you do not specify this parameter, the original name of the parameter template is retained.
   * 
   * @example
   * testgroup1
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * A JSON string that consists of parameters and their values in the parameter template. Format: {"Parameter 1":"Value of Parameter 1","Parameter 2":"Value of Parameter 2"...}. For more information about the parameters that can be modified, see [Modify the parameters of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96063.html) or [Modify the parameters of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96751.html).
   * 
   * > *   If **ModifyMode** is set to **Individual** and this parameter is specified, the new parameters overwrite the parameters in the original parameter template.
   * > *   If you set **ModifyMode** to **Collectivity** and specify this parameter, the new parameters are added to the original parameter template, or the parameters in the original parameter template are modified.
   * > *   If you do not specify this parameter, the parameters in the original parameter template remain unchanged.
   * 
   * @example
   * {"back_log":"3000"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * >  The region of a parameter template cannot be changed. You can call the CloneParameterGroup operation to replicate a parameter template to a specific region.
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

