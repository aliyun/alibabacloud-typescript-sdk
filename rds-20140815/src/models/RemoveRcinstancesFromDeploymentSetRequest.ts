// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveRCInstancesFromDeploymentSetRequest extends $dara.Model {
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
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rc-sff,rc-err
   */
  RCInstanceIds?: string;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentSetId: 'DeploymentSetId',
      RCInstanceIds: 'RCInstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSetId: 'string',
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

