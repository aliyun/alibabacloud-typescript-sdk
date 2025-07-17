// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPrometheusGlobalViewByAliClusterIdsRequest extends $dara.Model {
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
   * The identifier to identify the service if custom dashboards are created for the specified clusters.
   * 
   * @example
   * adcp
   */
  productCode?: string;
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
      groupName: 'GroupName',
      productCode: 'ProductCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: 'string',
      groupName: 'string',
      productCode: 'string',
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

