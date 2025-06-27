// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetworkReachableAnalysisShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the tasks for analyzing network reachability.
   * 
   * This parameter is required.
   */
  networkReachableAnalysisIdsShrink?: string;
  /**
   * @remarks
   * The ID of the region for which you want to delete a task for analyzing network reachability.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkReachableAnalysisIdsShrink: 'NetworkReachableAnalysisIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkReachableAnalysisIdsShrink: 'string',
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

