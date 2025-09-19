// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWarningMachinesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of container clusters.
   * 
   * @example
   * c7e3c5b420a7947c2933303144688****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the field that is used to search for the container. Valid values:
   * 
   * *   **CONTAINER_ID**: the ID of the container
   * *   **IMAGE**: the name of the image
   * *   **NAMESPACE**: the namespace
   * *   **NODE_NAME**: the name of the node
   * *   **POD_IP**: the IP address of the pod
   * *   **HOST_IP**: the IP address of the host
   * *   **INSTANCE_ID**: the ID of the instance
   * 
   * @example
   * containerId
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the field that is used to search for the container.
   * 
   * @example
   * c8bb3ef0f5ccf45508f0fd1ffc200****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the asset group.
   * 
   * > You can call the [DescribeAllGroups](https://help.aliyun.com/document_detail/130972.html) operation to query the IDs of asset groups.
   * 
   * @example
   * 123
   */
  groupId?: number;
  /**
   * @remarks
   * Specifies whether risks were detected. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  haveRisk?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
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
   * The name of the server on which the baseline check is performed.
   * 
   * @example
   * oracle-win-001****
   */
  machineName?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**, which indicates that 10 entries of server information are displayed on each page. A maximum of 100 entries can be returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the risk item.
   * 
   * > You can call the [DescribeCheckWarningSummary](~~DescribeCheckWarningSummary~~) operation to query the IDs of risk items.
   * 
   * This parameter is required.
   * 
   * @example
   * 196
   */
  riskId?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the baseline check policy.
   * 
   * @example
   * 16
   */
  strategyId?: number;
  /**
   * @remarks
   * The type of the query condition. Valid values:
   * 
   * *   **containerId**: the ID of the container
   * *   **uuid**: the UUID of the asset
   * 
   * @example
   * uuid
   */
  targetType?: string;
  /**
   * @remarks
   * The UUID of the server on which the baseline check is performed. Separate multiple UUIDs with commas (,).
   * 
   * @example
   * 9888955c-0076-49da-bd9c-34f5492b****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      currentPage: 'CurrentPage',
      groupId: 'GroupId',
      haveRisk: 'HaveRisk',
      lang: 'Lang',
      machineName: 'MachineName',
      pageSize: 'PageSize',
      riskId: 'RiskId',
      sourceIp: 'SourceIp',
      strategyId: 'StrategyId',
      targetType: 'TargetType',
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
      haveRisk: 'number',
      lang: 'string',
      machineName: 'string',
      pageSize: 'number',
      riskId: 'number',
      sourceIp: 'string',
      strategyId: 'number',
      targetType: 'string',
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

