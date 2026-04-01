// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParameterGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * *   **mysql**
   * *   **PostgreSQL**
   * 
   * This parameter is required.
   * 
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * *   If the instance runs MySQL, the instance must run one of the following MySQL versions:
   * 
   *     *   **5.6**
   *     *   **5.7**
   *     *   **8.0**
   * 
   * *   If the instance runs PostgreSQL, the instance must run one of the following PostgreSQL versions:
   * 
   *     *   **10.0**
   *     *   **11.0**
   *     *   **12.0**
   *     *   **13.0**
   *     *   **14.0**
   *     *   **15.0**
   * 
   * This parameter is required.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  ownerId?: number;
  /**
   * @remarks
   * The description of the parameter template. The value can be up to 200 characters in length.
   * 
   * @example
   * test
   */
  parameterGroupDesc?: string;
  /**
   * @remarks
   * The name of the parameter template.
   * 
   * *   The value must start with a letter and can contain letters, digits, periods (.), and underscores (_).
   * *   The value can be 8 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test1234
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * A JSON string that consists of parameters and their values in the parameter template. Format: {"Parameter 1":"Value of Parameter 1","Parameter 2":"Value of Parameter 2"...}. For more information about the parameters that can be modified, see [Modify the parameters of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96063.html) or [Modify the parameters of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96751.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"back_log":"3000","wait_timeout":"86400"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID of the parameter template. You can call the DescribeRegions operation to query the most recent zone list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute operation to obtain the resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
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
      engine: 'string',
      engineVersion: 'string',
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

