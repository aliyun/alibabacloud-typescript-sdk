// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLFlowMilestoneCount extends $dara.Model {
  /**
   * @remarks
   * The number of in-transit trajectories that remain at this milestone.
   * 
   * @example
   * 96
   */
  count?: number;
  /**
   * @remarks
   * The milestone. Valid values are the same as those of Stuck[].Milestone.
   * 
   * @example
   * 生成中
   */
  milestone?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      milestone: 'Milestone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      milestone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

