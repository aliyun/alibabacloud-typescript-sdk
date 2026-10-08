// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRCInstancesToDeploymentSetRequest extends $dara.Model {
  /**
   * @remarks
   * The group number of the ECS instance in the deployment set when the deployment set policy is high availability group (AvailabilityGroup). You can use this parameter to specify the group number. Valid values: 1 to 7. If no value is specified, the system automatically assigns an active group.
   * 
   * @example
   * 1
   */
  deploymentSetGroupNo?: string;
  /**
   * @remarks
   * The deployment set ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ds-uf6c8qerk019bj1l****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * Specifies whether to forcibly release running instances. Valid values:
   * 
   * * **true**: Forcibly release.
   * * **false** (default): Do not forcibly release.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rc-aaaa,rc-bbb
   */
  RCInstanceIds?: string;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentSetGroupNo: 'DeploymentSetGroupNo',
      deploymentSetId: 'DeploymentSetId',
      force: 'Force',
      RCInstanceIds: 'RCInstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSetGroupNo: 'string',
      deploymentSetId: 'string',
      force: 'boolean',
      RCInstanceIds: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

