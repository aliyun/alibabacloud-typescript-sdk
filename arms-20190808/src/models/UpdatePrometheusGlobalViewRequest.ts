// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusGlobalViewRequest extends $dara.Model {
  /**
   * @remarks
   * To edit a GlobalView aggregated instance, do you require all passed child instances to be verified successfully before creating a GlobalView instance (optional, default to false):
   * - true
   * - false
   * 
   * @example
   * true
   */
  allSubClustersSuccess?: boolean;
  /**
   * @remarks
   * The ID of the Prometheus instance.
   * 
   * This parameter is required.
   * 
   * @example
   * global****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the global aggregation instance.
   * 
   * @example
   * zyGlobalView
   */
  groupName?: string;
  /**
   * @remarks
   * The region ID of the global aggregation instance.
   * 
   * @example
   * cn-hangzhou
   */
  mostRegionId?: string;
  /**
   * @remarks
   * The ID of the region in which the Prometheus instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Prometheus instance belongs.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The data sources of the Prometheus instance for GlobalView.
   * 
   * This parameter is required.
   * 
   * @example
   * [ { "headers":{ }, "regionId":"cn-hangzhou", "sourceType":"AlibabaPrometheus", "extras":{ }, "clusterId":"c39a1048921e04f***********", "sourceName":"arms-luyao-test", "dataSource":"", "userId":"1672753***********" }, { "headers":{ }, "regionId":"cn-beijing", "sourceType":"AlibabaPrometheus", "extras":{ }, "clusterId":"c6b6485496d5b40***********", "sourceName":"agent-321-test", "dataSource":"", "userId":"1672753***********" }, { "headers":{ }, "regionId":"cn-zhangjiakou", "sourceType":"AlibabaPrometheus", "extras":{ }, "clusterId":"c261a4f3200c446***********", "sourceName":"zaifeng-cardinality-01", "dataSource":"", "userId":"1672753***********" } ]
   */
  subClustersJson?: string;
  static names(): { [key: string]: string } {
    return {
      allSubClustersSuccess: 'AllSubClustersSuccess',
      clusterId: 'ClusterId',
      groupName: 'GroupName',
      mostRegionId: 'MostRegionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subClustersJson: 'SubClustersJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allSubClustersSuccess: 'boolean',
      clusterId: 'string',
      groupName: 'string',
      mostRegionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subClustersJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

