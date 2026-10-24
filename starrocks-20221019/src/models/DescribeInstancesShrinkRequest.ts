// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-a0cb1c8ad6d35XXX
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * starrocks_1
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance status. You can specify multiple statuses separated by commas. Valid values:
   * <ul>
   * <li>unpaid: Pending payment.</li>
   * <li>paid: Paid.</li>
   * <li>creating: Starting.</li>
   * <li>running: Running.</li>
   * <li>updating: Updating.</li>
   * <li>disable: Unavailable.</li>
   * <li>deleting: Releasing.</li>
   * <li>scaling_out: Scaling out.</li>
   * <li>scaling_in: Scaling in.</li>
   * <li>scaling_up: Scaling up.</li>
   * <li>scaling_down: Scaling down.</li>
   * <li>upgrading: Upgrading.</li>
   * <li>modifying_config: Updating configurations.</li>
   * <li>enable_public_network: Enabling public network access.</li>
   * <li>disable_public_network: Disabling public network access.</li>
   * <li>convert_from_trial_to_official: Upgrading the instance edition.</li>
   * <li>restarting: Restarting the cluster.</li>
   * <li>migration_cluster_to_serverless: Migrating the cluster.</li>
   * <li>actively_disabled: Stopped.</li>
   * <li>enabling: Resuming.</li>
   * <li>agent_creating: Creating the agent.</li>
   * <li>agent_scaling_up: Scaling up the agent.</li>
   * </ul>
   * 
   * @example
   * running,creating
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmygmtrcenXXX
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

