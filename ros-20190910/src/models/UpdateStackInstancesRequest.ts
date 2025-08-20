// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStackInstancesRequestDeploymentTargets extends $dara.Model {
  /**
   * @remarks
   * The IDs of the member accounts in the resource directory. You can specify up to 20 member account IDs.
   * 
   * > To view the member account IDs, go to the **Overview** page in the **Resource Management** console. For more information, see [View the details of a member](https://help.aliyun.com/document_detail/111624.html).
   */
  accountIds?: string[];
  /**
   * @remarks
   * The folder IDs of the resource directory.
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

export class UpdateStackInstancesRequestParameterOverrides extends $dara.Model {
  /**
   * @remarks
   * The key of parameter N that you want to use to override a specific parameter. If you do not specify this parameter, ROS uses the name that you specified when you created the stack group.
   * 
   * Maximum value of N: 200.
   * 
   * > -  ParameterOverrides is optional.
   * > - If you specify ParameterOverrides, you must specify ParameterOverrides.N.ParameterKey and ParameterOverrides.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N that you want to use to override a specific parameter. If you do not specify this parameter, ROS uses the value that you specified when you created the stack group.
   * 
   * Maximum value of N: 200.
   * 
   * > -  ParameterOverrides is optional.
   * > - If you specify ParameterOverrides, you must specify ParameterOverrides.N.ParameterKey and ParameterOverrides.N.ParameterValue.
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

export class UpdateStackInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the execution accounts within which you want to deploy stacks in self-managed mode. You can specify up to 20 execution account IDs.
   * 
   * > If you want to update stacks in self-managed permission mode, you must specify this parameter.
   * 
   * @example
   * ["151266687691****","141261387191****"]
   */
  accountIds?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.\\
   * The token can contain letters, digits, hyphens (-), and underscores (_), and cannot exceed 64 characters in length.\\
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The folders in which you want to deploy stacks in service-managed mode.
   * 
   * > If you want to update stacks in service-managed permission mode, you must specify this parameter.
   */
  deploymentTargets?: UpdateStackInstancesRequestDeploymentTargets;
  /**
   * @remarks
   * The description of the update operation.
   * 
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * Update stack instances in hangzhou and beijing
   */
  operationDescription?: string;
  /**
   * @remarks
   * The preference settings of the update operation.
   * 
   * The following parameters are available:
   * -  {"FailureToleranceCount": N}
   * 
   *     The number of accounts within which stack operation failures are allowed in each region. If the value of this parameter is exceeded in a region, ROS stops the operation in the region. If ROS stops the operation in one region, ROS stops the operation in other regions.
   * 
   *     Valid values of N: 0 to 20.
   * 
   *     If you do not specify FailureToleranceCount, 0 is used as the default value.
   * 
   * -  {"FailureTolerancePercentage": N}
   * 
   *     The percentage of the number of accounts within which stack operation failures are allowed to the total number of accounts in each region. If the value of this parameter is exceeded, ROS stops the operation in the region.
   * 
   *     Valid values of N: 0 to 100. If the numeric value in the percentage is not an integer, ROS rounds the value down to the nearest integer.
   * 
   *     If you do not specify FailureTolerancePercentage, 0 is used as the default value.
   * 
   * -  {"MaxConcurrentCount": N}
   * 
   *     The maximum number of accounts within which multiple stacks are deployed at the same time in each region.
   * 
   *     Valid values of N: 1 to 20.
   * 
   *     If you do not specify MaxConcurrentCount, 1 is used as the default value.
   * 
   * - {"MaxConcurrentPercentage": N}
   * 
   *     The percentage of the maximum number of accounts within which stacks are deployed at the same time to the total number of accounts in each region.
   * 
   *     Valid values: 1 to 100. If the numeric value in the percentage is not an integer, ROS rounds the value down to the nearest integer.
   * 
   *     If you do not specify MaxConcurrentPercentage, 1 is used as the default value.
   * 
   * - {"RegionConcurrencyType": N}
   * 
   *   The mode that you want to use to deploy stacks across regions. Valid values:
   *   - SEQUENTIAL (default): deploys stacks in the specified regions one by one in sequence. This way, ROS deploys stacks in only one region at a time. 
   * 
   *    - PARALLEL: deploys stacks in all the specified regions in parallel. 
   * 
   * Separate multiple parameters with commas (,).
   * 
   * > - You can specify only one of the following parameters: MaxConcurrentCount and MaxConcurrentPercentage.
   * > - You can specify only one of the following parameters: FailureToleranceCount and FailureTolerancePercentage.
   * 
   * @example
   * {"FailureToleranceCount": 1,"MaxConcurrentCount": 2}
   */
  operationPreferences?: { [key: string]: any };
  /**
   * @remarks
   * The parameters that are used to override specific parameters.
   */
  parameterOverrides?: UpdateStackInstancesRequestParameterOverrides[];
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the regions where you want to update the stacks. You can specify up to 20 region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cn-hangzhou", "cn-beijing"]
   */
  regionIds?: string[];
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region.\\
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The timeout period for the update operation.
   * 
   * *   Default value: 60.
   * *   Unit: minutes.
   * 
   * @example
   * 10
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      clientToken: 'ClientToken',
      deploymentTargets: 'DeploymentTargets',
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
      deploymentTargets: UpdateStackInstancesRequestDeploymentTargets,
      operationDescription: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parameterOverrides: { 'type': 'array', 'itemType': UpdateStackInstancesRequestParameterOverrides },
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

