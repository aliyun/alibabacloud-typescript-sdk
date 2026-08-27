// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStackInstancesRequestDeploymentTargets extends $dara.Model {
  /**
   * @remarks
   * The IDs of member accounts in the resource directory. You can specify up to 30 member account IDs.
   * 
   * > You can find the member account IDs on the Overview page in the Resource Management console. For more information, see [View the details of a member](https://help.aliyun.com/document_detail/111624.html).
   */
  accountIds?: string[];
  /**
   * @remarks
   * The IDs of folders in the resource directory. You can specify up to 20 folder IDs.
   * 
   * Stack instances are deleted from all member accounts in the specified folders. If you specify the Root folder, stack instances are deleted from all member accounts in your resource directory.
   * 
   * > You can find the folder IDs on the Overview page in the Resource Management console. For more information, see [View the basic information of a folder](https://help.aliyun.com/document_detail/111223.html).
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

export class DeleteStackInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the accounts from which to delete stack instances. This parameter applies only to stack groups that use self-managed permissions. You can specify up to 50 account IDs.
   * 
   * @example
   * ["151266687691****"]
   */
  accountIds?: string[];
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You can use your client to generate the token, but you must make sure that the token is unique among different requests.<br>The token can be up to 64 characters long and can contain letters, digits, hyphens (-), and underscores (_).<br>For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The deployment targets from which to delete stack instances. This parameter applies only to stack groups that use service-managed permissions.
   */
  deploymentTargets?: DeleteStackInstancesRequestDeploymentTargets;
  /**
   * @remarks
   * The description of the operation to delete stack instances.
   * 
   * The description can be 1 to 256 characters long.
   * 
   * @example
   * Delete stack instances in hangzhou and beijing
   */
  operationDescription?: string;
  /**
   * @remarks
   * The preferences for the operation to delete stack instances.
   * 
   * This parameter contains the following subparameters:
   * 
   * - {"FailureToleranceCount": N}
   * 
   *   The number of accounts in each region for which the deletion of stack instances can fail. If the number of failures in a region exceeds this value, the operation stops in that region. If the operation stops in one region, it does not continue in other regions.
   * 
   *   The value of N must be an integer from 0 to 20.
   * 
   *   If you do not specify FailureToleranceCount, the default value is 0.
   * 
   * - {"FailureTolerancePercentage": N}
   * 
   *   The percentage of accounts in each region for which the deletion of stack instances can fail. If the percentage of failures in a region exceeds this value, the operation stops in that region.
   * 
   *   The value of N must be an integer from 0 to 100. If the calculated percentage is not an integer, ROS rounds it down to the nearest integer.
   * 
   *   If you do not specify FailureTolerancePercentage, the default value is 0.
   * 
   * - {"MaxConcurrentCount": N}
   * 
   *   The maximum number of accounts in each region for which stack instances can be deleted at the same time.
   * 
   *   The value of N must be an integer from 1 to 20.
   * 
   *   If you do not specify MaxConcurrentCount, the default value is 1.
   * 
   * - {"MaxConcurrentPercentage": N}
   * 
   *   The maximum percentage of accounts in each region for which stack instances can be deleted at the same time.
   * 
   *   The value of N must be an integer from 1 to 100. If the calculated percentage is not an integer, ROS rounds it down to the nearest integer.
   * 
   *   If you do not specify MaxConcurrentPercentage, the default value is 1.
   * 
   * - {"RegionConcurrencyType": N}
   *   The concurrency model for deleting stack instances in different regions. Valid values:
   * 
   *   - SEQUENTIAL (default): Deletes stack instances in each specified region sequentially. At any given time, the operation deletes stack instances in only one region.
   * 
   *   - PARALLEL: Deletes stack instances in all specified regions in parallel.
   * 
   * Separate multiple parameters with commas (,).
   * 
   * > - You cannot specify both MaxConcurrentCount and MaxConcurrentPercentage.
   * >
   * > - You cannot specify both FailureToleranceCount and FailureTolerancePercentage.
   * 
   * @example
   * {"FailureToleranceCount": 1, "MaxConcurrentCount": 2}
   */
  operationPreferences?: { [key: string]: any };
  /**
   * @remarks
   * The region ID of the stack group. Call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the regions where the stack instances are deployed. You can specify up to 20 region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cn-hangzhou", "cn-beijing"]
   */
  regionIds?: string[];
  /**
   * @remarks
   * Specifies whether to retain the stacks.
   * 
   * Valid values:
   * 
   * - true: The stacks are retained.
   * 
   * - false: The stacks are deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  retainStacks?: boolean;
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region.<br>The name can be up to 255 characters long. It must start with a letter or a digit and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      clientToken: 'ClientToken',
      deploymentTargets: 'DeploymentTargets',
      operationDescription: 'OperationDescription',
      operationPreferences: 'OperationPreferences',
      regionId: 'RegionId',
      regionIds: 'RegionIds',
      retainStacks: 'RetainStacks',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      deploymentTargets: DeleteStackInstancesRequestDeploymentTargets,
      operationDescription: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      retainStacks: 'boolean',
      stackGroupName: 'string',
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
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

