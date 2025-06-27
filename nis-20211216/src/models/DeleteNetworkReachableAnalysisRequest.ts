// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetworkReachableAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the tasks for analyzing network reachability.
   * 
   * This parameter is required.
   */
  networkReachableAnalysisIds?: string[];
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
      networkReachableAnalysisIds: 'NetworkReachableAnalysisIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkReachableAnalysisIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkReachableAnalysisIds)) {
      $dara.Model.validateArray(this.networkReachableAnalysisIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

