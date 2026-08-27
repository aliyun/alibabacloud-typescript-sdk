// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStackInstancesRequestDeploymentTargets extends $dara.Model {
  /**
   * @remarks
   * The IDs of the member accounts in the resource directory. You can specify up to 30 member account IDs.
   * 
   * > You can view the member account IDs on the Overview page in the Resource Management console. For more information, see View the details of a member.
   */
  accountIds?: string[];
  /**
   * @remarks
   * The IDs of the folders in the resource directory. You can specify up to 20 folder IDs.
   * 
   * You can create stacks in all the member accounts in the specified folders. If you select the root folder, stacks are created in all the member accounts in the resource directory.
   * 
   * > You can view the folder IDs on the **Overview** page in the **Resource Management** console. For more information, see [View the basic information of a folder](https://help.aliyun.com/document_detail/111223.html).
   */
  rdFolderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      rdFolderIds: 'RdFolderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      rdFolderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    if(Array.isArray(this.rdFolderIds)) {
      $dara.Model.validateArray(this.rdFolderIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesRequestParameterOverrides extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter to overwrite. If you do not specify this parameter, ROS uses the parameter name that was specified when the stack group was created.
   * 
   * You can specify up to 200 parameters.
   * 
   * > - ParameterOverrides is optional.
   * >
   * > - If you specify ParameterOverrides, you must specify both ParameterOverrides.N.ParameterKey and ParameterOverrides.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter to overwrite. If you do not specify this parameter, ROS uses the parameter value that was specified when the stack group was created.
   * 
   * You can specify up to 200 parameters.
   * 
   * > - ParameterOverrides is optional.
   * >
   * > - If you specify ParameterOverrides, you must specify both ParameterOverrides.N.ParameterKey and ParameterOverrides.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the destination accounts where you want to create stacks using self-managed permissions. You can specify up to 50 account IDs.
   * 
   * > You can specify only one of the `AccountIds` and `DeploymentTargets` parameters.
   * 
   * @example
   * ["151266687691****","141261387191****"]
   */
  accountIds?: string[];
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. The client generates the token, which must be globally unique.<br>The token can be up to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).<br>For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The deployment options for deploying stacks in service-managed permission mode. You can specify up to one deployment option.
   */
  deploymentOptions?: string[];
  /**
   * @remarks
   * The deployment targets for deploying stacks in service-managed permission mode.
   * 
   * > You can specify only one of the `AccountIds` and `DeploymentTargets` parameters.
   * 
   * @example
   * {"RdFolderId": "fd-4PvlVLOL8v"}
   */
  deploymentTargets?: CreateStackInstancesRequestDeploymentTargets;
  /**
   * @remarks
   * Indicates whether to disable rollback when a stack fails to be created.
   * 
   * Valid values:
   * 
   * - true: Disables rollback.
   * 
   * - false (default): Enables rollback.
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * The description of the operation to create the stacks.
   * 
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * Create stack instances in hangzhou and beijing
   */
  operationDescription?: string;
  /**
   * @remarks
   * The preferences for the operation.
   * 
   * The following parameters are available:
   * 
   * - {"FailureToleranceCount": N}
   * 
   *   The number of accounts per region in which the operation can fail. If the number of failed operations in a region exceeds this value, Resource Orchestration Service (ROS) stops the operation in that region. If the operation is stopped in a region, the operation is not performed in other regions.
   * 
   *   The value of N can be an integer from 0 to 20.
   * 
   *   If you do not specify this parameter, the default value is 0.
   * 
   * - {"FailureTolerancePercentage": N}
   * 
   *   The percentage of accounts per region in which the operation can fail, relative to the total number of accounts. If the percentage of failed operations in a region exceeds this value, ROS stops the operation in that region.
   * 
   *   The value of N can be an integer from 0 to 100. If the percentage is not an integer, ROS rounds down the value.
   * 
   *   If you do not specify this parameter, the default value is 0.
   * 
   * - {"MaxConcurrentCount": N}
   * 
   *   The maximum number of accounts in each region where stacks can be deployed at the same time.
   * 
   *   The value of N can be an integer from 1 to 20.
   * 
   *   If you do not specify this parameter, the default value is 1.
   * 
   * - {"MaxConcurrentPercentage": N}
   * 
   *   The percentage of accounts in each region where stacks can be deployed at the same time, relative to the total number of accounts.
   * 
   *   The value of N can be an integer from 1 to 100. If the percentage is not an integer, ROS rounds down the value.
   * 
   *   If you do not specify this parameter, the default value is 1.
   * 
   * - {"RegionConcurrencyType": N}<br>The concurrency type of deployment regions. Valid values:
   * 
   *   - SEQUENTIAL (default): Deploys stacks in the specified regions one by one. Stacks are deployed in only one region at a time.
   * 
   *   - PARALLEL: Deploys stacks in all specified regions at the same time.
   * 
   * Separate multiple parameters with commas (,).
   * 
   * > - You cannot specify MaxConcurrentCount and MaxConcurrentPercentage at the same time.
   * >
   * > - You cannot specify FailureToleranceCount and FailureTolerancePercentage at the same time.
   * 
   * @example
   * {"FailureToleranceCount": 1, "MaxConcurrentCount": 2}
   */
  operationPreferences?: { [key: string]: any };
  /**
   * @remarks
   * A list of parameters that overwrite the template parameters.
   */
  parameterOverrides?: CreateStackInstancesRequestParameterOverrides[];
  /**
   * @remarks
   * The region ID of the stack group.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the destination regions. You can specify up to 20 region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cn-hangzhou", "cn-beijing"]
   */
  regionIds?: string[];
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region.<br>The name can be up to 255 characters in length. It must start with a letter or a digit and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The timeout period for creating the stacks.
   * 
   * - Default value: 60.
   * 
   * - Unit: minutes.
   * 
   * @example
   * 10
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      clientToken: 'ClientToken',
      deploymentOptions: 'DeploymentOptions',
      deploymentTargets: 'DeploymentTargets',
      disableRollback: 'DisableRollback',
      operationDescription: 'OperationDescription',
      operationPreferences: 'OperationPreferences',
      parameterOverrides: 'ParameterOverrides',
      regionId: 'RegionId',
      regionIds: 'RegionIds',
      stackGroupName: 'StackGroupName',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      deploymentOptions: { 'type': 'array', 'itemType': 'string' },
      deploymentTargets: CreateStackInstancesRequestDeploymentTargets,
      disableRollback: 'boolean',
      operationDescription: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parameterOverrides: { 'type': 'array', 'itemType': CreateStackInstancesRequestParameterOverrides },
      regionId: 'string',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      stackGroupName: 'string',
      timeoutInMinutes: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    if(Array.isArray(this.deploymentOptions)) {
      $dara.Model.validateArray(this.deploymentOptions);
    }
    if(this.deploymentTargets && typeof (this.deploymentTargets as any).validate === 'function') {
      (this.deploymentTargets as any).validate();
    }
    if(this.operationPreferences) {
      $dara.Model.validateMap(this.operationPreferences);
    }
    if(Array.isArray(this.parameterOverrides)) {
      $dara.Model.validateArray(this.parameterOverrides);
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

