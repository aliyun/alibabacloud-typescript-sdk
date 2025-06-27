// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkReachableAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task for analyzing network reachability. You can call the **CreateNetworkRearchableAnalysis** operation to obtain the ID of the task for analyzing network reachability.
   * 
   * This parameter is required.
   * 
   * @example
   * nra-90eef36a9e6e4662****
   */
  networkReachableAnalysisId?: string;
  /**
   * @remarks
   * The ID of the region for which you want to obtain the result of network reachability analysis.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkReachableAnalysisId: 'NetworkReachableAnalysisId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkReachableAnalysisId: 'string',
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

