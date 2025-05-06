// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParameterGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the database engine. Only **MySQL** is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine. Valid values:
   * 
   * *   **5.6**
   * *   **5.7**
   * *   **8.0**
   * 
   * This parameter is required.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The description of the parameter template. It must be 0 to 199 characters in length.
   * 
   * @example
   * test_group
   */
  parameterGroupDesc?: string;
  /**
   * @remarks
   * The name of the parameter template. The name must meet the following requirements:
   * 
   * *   It can contain letters, digits, and underscores (_). It must start with a letter and cannot end with an underscore.**
   * *   It must be 8 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test_group
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * The JSON string that consists of parameters and values. The parameter values are strings. Example: `{"wait_timeout":"86400","innodb_old_blocks_time":"1000"}`.
   * 
   * > You can call the [DescribeParameterTemplates](https://help.aliyun.com/document_detail/207428.html) operation to query the details of all parameters in the cluster of a specified engine version, such as the parameter name and valid values.
   * 
   * This parameter is required.
   * 
   * @example
   * {"wait_timeout":"86400","innodb_old_blocks_time":"1000"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-**********
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameterGroupDesc: 'ParameterGroupDesc',
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
      DBType: 'string',
      DBVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      parameterGroupDesc: 'string',
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

