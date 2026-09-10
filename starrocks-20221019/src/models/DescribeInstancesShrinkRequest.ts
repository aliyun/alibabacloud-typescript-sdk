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
   * Retrieves instances by instance status. Separate multiple instance statuses with commas. Valid values:
   * <ul>
   * <li>unpaid: Pending payment.</li>
   * <li>paid: Paid.</li>
   * <li>creating: Being created.</li>
   * <li>running: Running.</li>
   * <li>updating: Being upgraded.</li>
   * <li>disable: Unavailable.</li>
   * <li>deleting: Being deleted.</li>
   * <li>scaling_out: Scaling out.</li>
   * <li>scaling_in: Scaling in.</li>
   * <li>scaling_up: Specifications are being upgraded.</li>
   * <li>scaling_down: Specifications are being used to decrease the quota.</li>
   * <li>upgrading: Version is being upgraded.</li>
   * <li>modifying_config: Configuration is being updated.</li>
   * <li>enable_public_network: Public network access is being enabled.</li>
   * <li>disable_public_network: Public network access is being shutdown.</li>
   * <li>convert_from_trial_to_official: The instance edition is being upgraded.</li>
   * <li>restarting: The cluster is restarting.</li>
   * <li>migration_cluster_to_serverless: The cluster is being migrated.</li>
   * <li>actively_disabled: The instance is stopped.</li>
   * <li>enabling: The instance is being recovered.</li>
   * <li>agent_creating: The agent is being created.</li>
   * <li>agent_scaling_up: The agent specifications are being upgraded.</li>
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
   * The number of entries per page for a paged query.
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
   * The tags.
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

