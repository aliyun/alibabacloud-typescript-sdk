// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindLeaderInstanceRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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

