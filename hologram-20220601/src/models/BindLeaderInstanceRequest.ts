// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindLeaderInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The leader instance ID. The region ID, zone ID, and version of the follower instance must be the same as those of the leader instance. Select the leader instance ID from the list of instances returned by the ListFollowerInstances operation.
   * 
   * @example
   * hgpostcn-cn-uqm3316l1004
   */
  leaderInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      leaderInstanceId: 'leaderInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      leaderInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

