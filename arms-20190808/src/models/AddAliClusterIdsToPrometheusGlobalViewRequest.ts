// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAliClusterIdsToPrometheusGlobalViewRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of clusters. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * cd1d55bef19904324a20ed0ebb86caa5c,c5b48729918ab4745a24482ac29d0973a, c00a94896641449098bf24931e4166003, cd174485c09384060ba542bc1be1185a4
   */
  clusterIds?: string;
  /**
   * @remarks
   * The ID of the global aggregation instance.
   * 
   * This parameter is required.
   * 
   * @example
   * global-v2-cn-1478326682034601-vss8pd0i
   */
  globalViewClusterId?: string;
  /**
   * @remarks
   * The name of the global aggregation instance.
   * 
   * This parameter is required.
   * 
   * @example
   * zyGlobalView
   */
  groupName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      globalViewClusterId: 'GlobalViewClusterId',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: 'string',
      globalViewClusterId: 'string',
      groupName: 'string',
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

