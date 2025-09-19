// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckWarningSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * >  You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of container clusters.
   * 
   * @example
   * c80dae73bd1be442699766b14ffd0****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the container field. Valid values:
   * 
   * *   **clusterId**: the ID of the cluster
   * *   **image**: the name of the image
   * *   **imageId**: the ID of the image
   * *   **namespace**: the namespace
   * 
   * @example
   * namespace
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the container field.
   * 
   * @example
   * c819391d2d520485fa3e81e2dc2ea****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the asset group.
   * 
   * > You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the IDs of asset groups.
   * 
   * @example
   * 123
   */
  groupId?: number;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the risk item.
   * 
   * @example
   * Redis
   */
  riskName?: string;
  /**
   * @remarks
   * The status of the baseline check. Valid values:
   * 
   * *   **1**: failed
   * *   **3**: passed
   * 
   * @example
   * 1
   */
  riskStatus?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 219.133.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The status of the check item. Valid values:
   * 
   * *   **1**: failed
   * *   **2**: verifying
   * *   **3**: passed
   * *   **5**: expired
   * *   **6**: ignored
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The ID of the baseline check policy.
   * 
   * @example
   * 1
   */
  strategyId?: number;
  /**
   * @remarks
   * The type of the query condition. Valid values:
   * 
   * *   **uuid**: the ID of an asset
   * 
   * @example
   * uuid
   */
  targetType?: string;
  /**
   * @remarks
   * The level-1 type of check items.
   * 
   * >  You can call the [DescribeRiskType](~~DescribeRiskType~~) operation to query the level-1 types of check items.
   * 
   * @example
   * database
   */
  typeName?: string;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of assets.
   * 
   * @example
   * f03259d8-1e81-4fae-bcbb-275fb5****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      currentPage: 'CurrentPage',
      groupId: 'GroupId',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskName: 'RiskName',
      riskStatus: 'RiskStatus',
      sourceIp: 'SourceIp',
      status: 'Status',
      strategyId: 'StrategyId',
      targetType: 'TargetType',
      typeName: 'TypeName',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      containerFieldName: 'string',
      containerFieldValue: 'string',
      currentPage: 'number',
      groupId: 'number',
      lang: 'string',
      pageSize: 'number',
      riskName: 'string',
      riskStatus: 'number',
      sourceIp: 'string',
      status: 'string',
      strategyId: 'number',
      targetType: 'string',
      typeName: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

