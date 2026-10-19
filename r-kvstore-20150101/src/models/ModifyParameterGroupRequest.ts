// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParameterGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The product category. Valid values:
   * 
   * - **standard**: Redis Community Edition.
   * - **enterprise**: Tair (Enhanced Edition).
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
   * The description of the parameter template. The description can be up to 200 characters in length.
   * 
   * @example
   * test
   */
  parameterGroupDesc?: string;
  /**
   * @remarks
   * The ID of the parameter template.
   * 
   * This parameter is required.
   * 
   * @example
   * sys-001****
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The name of the parameter template. The name must meet the following requirements:
   * 
   * * The name can contain letters, digits, and underscores (_). It must start with a letter and cannot contain Chinese characters.
   * * The name must be 8 to 64 characters in length.
   * > This parameter is required. If you do not want to change the name of the parameter template, specify the original name.
   * 
   * This parameter is required.
   * 
   * @example
   * testGroupName
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * The parameters and their values in JSON format: {"Parameter1":"Value1","Parameter2":"Value2",...}. The specified values overwrite the existing values.
   * > The parameters that can be added vary by version. Refer to the console for details.
   * 
   * This parameter is required.
   * 
   * @example
   * {"hz":"12"}
   */
  parameters?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides. You can call the [DescribeInstanceAttribute](https://help.aliyun.com/document_detail/473779.html) operation to query the region ID.
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

