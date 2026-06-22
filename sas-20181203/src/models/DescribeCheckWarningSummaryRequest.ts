// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckWarningSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster to query.
   * > Call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
   * 
   * @example
   * c80dae73bd1be442699766b14ffd0****
   */
  clusterId?: string;
  /**
   * @remarks
   * The container field. Valid values:
   * 
   * - **clusterId**: cluster ID
   * - **image**: image name
   * - **imageId**: image ID
   * - **namespace**: namespace.
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
   * The page number for a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The group ID of the server to query.
   * > Call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to obtain the group ID of the server.
   * 
   * @example
   * 123
   */
  groupId?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the baseline check risk item.
   * 
   * @example
   * Redis
   */
  riskName?: string;
  /**
   * @remarks
   * The status of the baseline check. Valid values:
   * - **1**: failed 
   * - **3**: passed.
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
   * - **1**: failed
   * - **2**: verifying 
   * - **3**: passed 
   * - **5**: expired 
   * - **6**: ignored.
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
   * The query type. Valid values:
   * - **uuid**: asset ID.
   * 
   * @example
   * uuid
   */
  targetType?: string;
  /**
   * @remarks
   * The level-1 type of the baseline.
   * > Call the [DescribeRiskType](~~DescribeRiskType~~) operation to obtain this parameter.
   * 
   * @example
   * database
   */
  typeName?: string;
  /**
   * @remarks
   * The UUID of the asset.
   * > Call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain this parameter.
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

