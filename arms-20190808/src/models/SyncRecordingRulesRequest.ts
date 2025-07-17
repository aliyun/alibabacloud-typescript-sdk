// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncRecordingRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster whose aggregation rule you want to synchronize.
   * 
   * This parameter is required.
   * 
   * @example
   * cc7a37ee31aea4ed1a059eff8034b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the region. The destination region can be the same as the source region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of clusters to which you want to synchronize the aggregation rule.
   * 
   * This parameter is required.
   * 
   * @example
   * {     "cn":[         "c06ca68cd16f14f52bb07772eda***",         "c33dd70a0ac184c1b879d807ab2***",         "c384cf7e4dcb543e6ac8c7d4dd3***"     ],     "us":[         "ce30f833bc4a04a56a06b070319***"     ],     "jp":[      ],     "ap":[      ],     "gov":[      ],     "finance":[      ] }
   */
  targetClusters?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      targetClusters: 'TargetClusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      targetClusters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

