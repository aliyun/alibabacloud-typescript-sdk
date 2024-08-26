// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateAndAnalyzeNetworkPathRequest extends $tea.Model {
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **tcp**: Transmission Control Protocol (TCP)
   * *   **udp**: User Datagram Protocol (UDP)
   * *   **icmp**: Internet Control Message Protocol (ICMP)
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the region for which you want to initiate a task for analyzing network reachability.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the source resource.
   * 
   * This parameter is required.
   * 
   * @example
   * i-uf62y8khhbkbdrp6****
   */
  sourceId?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * The source port.
   * 
   * @example
   * 0
   */
  sourcePort?: number;
  /**
   * @remarks
   * The type of the source resource. Valid values:
   * 
   * *   **ecs**: the Elastic Compute Service (ECS) instance
   * *   **internetIp**: the public IP address
   * *   **vsw**: the vSwitch
   * *   **vpn**: the VPN gateway
   * *   **vbr**: the virtual border router (VBR)
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the destination resource.
   * 
   * @example
   * i-m5eactvw7wtpktv5****
   */
  targetId?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 172.50.XX.XX
   */
  targetIpAddress?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 80
   */
  targetPort?: number;
  /**
   * @remarks
   * The type of the destination resource. Valid values:
   * 
   * *   **ecs**: the ECS instance
   * *   **internetIp**: the public IP address
   * *   **vsw**: the vSwitch
   * *   **vpn**: the VPN gateway
   * *   **vbr**: the VBR
   * *   **clb**: the Classic Load Balancer (CLB) instance
   * 
   * @example
   * ecs
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      regionId: 'RegionId',
      sourceId: 'SourceId',
      sourceIpAddress: 'SourceIpAddress',
      sourcePort: 'SourcePort',
      sourceType: 'SourceType',
      targetId: 'TargetId',
      targetIpAddress: 'TargetIpAddress',
      targetPort: 'TargetPort',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      regionId: 'string',
      sourceId: 'string',
      sourceIpAddress: 'string',
      sourcePort: 'number',
      sourceType: 'string',
      targetId: 'string',
      targetIpAddress: 'string',
      targetPort: 'number',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndAnalyzeNetworkPathResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the task for analyzing network reachability that you initiated.
   * 
   * @example
   * nra-dfe9e53d2b524568****
   */
  networkReachableAnalysisId?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the source resource.
   * 
   * @example
   * i-uf62y8khhbkbdrp6****
   */
  sourceId?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * The source port.
   * 
   * @example
   * 0
   */
  sourcePort?: string;
  /**
   * @remarks
   * The type of the source resource.
   * 
   * @example
   * ecs
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the destination resource.
   * 
   * @example
   * i-m5eactvw7wtpktv5****
   */
  targetId?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 172.50.XX.XX
   */
  targetIpAddress?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 80
   */
  targetPort?: string;
  /**
   * @remarks
   * The type of the destination resource.
   * 
   * @example
   * ecs
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      networkReachableAnalysisId: 'NetworkReachableAnalysisId',
      protocol: 'Protocol',
      requestId: 'RequestId',
      sourceId: 'SourceId',
      sourceIpAddress: 'SourceIpAddress',
      sourcePort: 'SourcePort',
      sourceType: 'SourceType',
      targetId: 'TargetId',
      targetIpAddress: 'TargetIpAddress',
      targetPort: 'TargetPort',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkReachableAnalysisId: 'string',
      protocol: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourceIpAddress: 'string',
      sourcePort: 'string',
      sourceType: 'string',
      targetId: 'string',
      targetIpAddress: 'string',
      targetPort: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndAnalyzeNetworkPathResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAndAnalyzeNetworkPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAndAnalyzeNetworkPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPathRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the network path.
   * 
   * @example
   * Analyze the path from ECS to ECS
   */
  networkPathDescription?: string;
  /**
   * @remarks
   * The name of the network path.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs2PublicIp
   */
  networkPathName?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **tcp**: Transmission Control Protocol (TCP)
   * *   **udp**: User Datagram Protocol (UDP)
   * *   **icmp**: Internet Control Message Protocol (ICMP)
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID of the network path that you want to create.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm27qsxjj****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the source resource.
   * 
   * This parameter is required.
   * 
   * @example
   * i-2zef4ngqfarepyun****
   */
  sourceId?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 172.17.XX.XX
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * The source port.
   * 
   * @example
   * 443
   */
  sourcePort?: number;
  /**
   * @remarks
   * The type of the source resource. Valid values:
   * 
   * *   **ecs**: the Elastic Compute Service (ECS) instance
   * *   **internetIp**: the public IP address
   * *   **vsw**: the vSwitch
   * *   **vpn**: the VPN gateway
   * *   **vbr**: the virtual border router (VBR)
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  sourceType?: string;
  /**
   * @remarks
   * The tags to add to the resource.
   */
  tag?: CreateNetworkPathRequestTag[];
  /**
   * @remarks
   * The ID of the destination resource.
   * 
   * @example
   * i-bp13d0e064gubm****
   */
  targetId?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 192.168.0.210
   */
  targetIpAddress?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 80
   */
  targetPort?: number;
  /**
   * @remarks
   * The type of the destination resource. Valid values:
   * 
   * *   **ecs**: the ECS instance
   * *   **internetIp**: the public IP address
   * *   **vsw**: the vSwitch
   * *   **vpn**: the VPN gateway
   * *   **vbr**: the VBR
   * *   **clb**: the Classic Load Balancer (CLB) instance
   * 
   * @example
   * ecs
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      networkPathDescription: 'NetworkPathDescription',
      networkPathName: 'NetworkPathName',
      protocol: 'Protocol',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceId: 'SourceId',
      sourceIpAddress: 'SourceIpAddress',
      sourcePort: 'SourcePort',
      sourceType: 'SourceType',
      tag: 'Tag',
      targetId: 'TargetId',
      targetIpAddress: 'TargetIpAddress',
      targetPort: 'TargetPort',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPathDescription: 'string',
      networkPathName: 'string',
      protocol: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceId: 'string',
      sourceIpAddress: 'string',
      sourcePort: 'number',
      sourceType: 'string',
      tag: { 'type': 'array', 'itemType': CreateNetworkPathRequestTag },
      targetId: 'string',
      targetIpAddress: 'string',
      targetPort: 'number',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPathResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the network path.
   * 
   * @example
   * np-4cbf598673d14d27****
   */
  networkPathId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 92DD9FFB-06FB-56F7-83EF-5CEF98F5562A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPathId: 'NetworkPathId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPathId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPathResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNetworkPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNetworkPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkReachableAnalysisRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the network path. You can call the [CreateNetworkPath](https://help.aliyun.com/document_detail/2366522.html) operation to obtain the ID of the network path.
   * 
   * This parameter is required.
   * 
   * @example
   * np-b2f618ceb2c84057****
   */
  networkPathId?: string;
  /**
   * @remarks
   * The ID of the region for which you want to create a task for analyzing network reachability.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The tags to add to the resource.
   */
  tag?: CreateNetworkReachableAnalysisRequestTag[];
  static names(): { [key: string]: string } {
    return {
      networkPathId: 'NetworkPathId',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPathId: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': CreateNetworkReachableAnalysisRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkReachableAnalysisResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the task for analyzing network reachability.
   * 
   * @example
   * nra-2fede05617494417****
   */
  networkReachableAnalysisId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkReachableAnalysisId: 'NetworkReachableAnalysisId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkReachableAnalysisId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkReachableAnalysisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNetworkReachableAnalysisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNetworkReachableAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkPathRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of network paths.
   * 
   * This parameter is required.
   */
  networkPathIds?: string[];
  /**
   * @remarks
   * The region ID of the network path that you want to delete.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPathIds: 'NetworkPathIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPathIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkPathShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of network paths.
   * 
   * This parameter is required.
   */
  networkPathIdsShrink?: string;
  /**
   * @remarks
   * The region ID of the network path that you want to delete.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPathIdsShrink: 'NetworkPathIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPathIdsShrink: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkPathResponseBody extends $tea.Model {
  /**
   * @remarks
   * Result of operation.
   * 
   * - **true**: Delete Success.
   * - **false**: Delete Fail.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C4331873-C534-590F-A905-F66C53B88A47
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkPathResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNetworkPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNetworkPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkReachableAnalysisRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkReachableAnalysisShrinkRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkReachableAnalysisResponseBody extends $tea.Model {
  /**
   * @remarks
   * Result of operation.
   * - **true**: Delete Success.
   * - **false**: Delete Fail.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4838F3F2-30E1-5D82-B25A-B9FE33BC3E25
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkReachableAnalysisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNetworkReachableAnalysisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNetworkReachableAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNisInspectionReportRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nir-ffd1af****196d0
   */
  inspectionReportId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionReportId: 'InspectionReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionReportId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNisInspectionReportResponseBody extends $tea.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNisInspectionReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNisInspectionReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNisInspectionReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNisInspectionTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ni-209d****wfirfwc2yl
   */
  inspectionTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionTaskId: 'InspectionTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNisInspectionTaskResponseBody extends $tea.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNisInspectionTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNisInspectionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNisInspectionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionRecommendationResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nir-ffd1af****196d0
   */
  inspectionReportId?: string;
  /**
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * hKrS+MVXkuOgztXnvdml16/uO3mvCyHxSjzdhx9VRUC+8umDTIV2Wg9TTOUrR7ve
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nat_snat_cross_az_warn
   */
  recommendationCode?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionReportId: 'InspectionReportId',
      language: 'Language',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      recommendationCode: 'RecommendationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionReportId: 'string',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      recommendationCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionRecommendationResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * nir-ffd1af****196d0
   */
  inspectionReportId?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * qt0DqY2lXxwBt9/ROQoS/7J9p90D1vF2vFbwzb/1oSWr3AxcM6/KpObZ7Z1PZdcV
   */
  nextToken?: string;
  /**
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  resourceList?: DescribeNisInspectionRecommendationResourcesResponseBodyResourceList[];
  /**
   * @example
   * 192
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      inspectionReportId: 'InspectionReportId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceList: 'ResourceList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionReportId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resourceList: { 'type': 'array', 'itemType': DescribeNisInspectionRecommendationResourcesResponseBodyResourceList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionRecommendationResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNisInspectionRecommendationResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNisInspectionRecommendationResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportCheckItemsRequest extends $tea.Model {
  /**
   * @example
   * stability
   */
  categoryCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nir-ffd1af****196d0
   */
  inspectionReportId?: string;
  /**
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * hKrS+MVXkuOgztXnvdml16/uO3mvCyHxSjzdhx9VRUC+8umDTIV2Wg9TTOUrR7ve
   */
  nextToken?: string;
  resourceType?: string[];
  riskLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'CategoryCode',
      inspectionReportId: 'InspectionReportId',
      language: 'Language',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceType: 'ResourceType',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'string',
      inspectionReportId: 'string',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceType: { 'type': 'array', 'itemType': 'string' },
      riskLevel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportCheckItemsShrinkRequest extends $tea.Model {
  /**
   * @example
   * stability
   */
  categoryCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nir-ffd1af****196d0
   */
  inspectionReportId?: string;
  /**
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * hKrS+MVXkuOgztXnvdml16/uO3mvCyHxSjzdhx9VRUC+8umDTIV2Wg9TTOUrR7ve
   */
  nextToken?: string;
  resourceTypeShrink?: string;
  riskLevelShrink?: string;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'CategoryCode',
      inspectionReportId: 'InspectionReportId',
      language: 'Language',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceTypeShrink: 'ResourceType',
      riskLevelShrink: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'string',
      inspectionReportId: 'string',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceTypeShrink: 'string',
      riskLevelShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportCheckItemsResponseBody extends $tea.Model {
  checkItemList?: DescribeNisInspectionReportCheckItemsResponseBodyCheckItemList[];
  /**
   * @example
   * nir-ffd1af****196d0
   */
  inspectionReportId?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * hKrS+MVXkuOgztXnvdml194Cz/lMNdmr+DEh0th6dVlNEo/F148UPCh2itDku7Qj
   */
  nextToken?: string;
  /**
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
   */
  requestId?: string;
  /**
   * @example
   * 11
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkItemList: 'CheckItemList',
      inspectionReportId: 'InspectionReportId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItemList: { 'type': 'array', 'itemType': DescribeNisInspectionReportCheckItemsResponseBodyCheckItemList },
      inspectionReportId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportCheckItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNisInspectionReportCheckItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNisInspectionReportCheckItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nir-2ca527b8de114ba4afb9
   */
  inspectionReportId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionReportId: 'InspectionReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionReportId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportStatusResponseBody extends $tea.Model {
  /**
   * @example
   * 2024-07-18 15:13:07
   */
  endTime?: string;
  /**
   * @example
   * basic
   */
  inspectionProject?: string;
  /**
   * @example
   * nir-2ca527b8de114ba4afb9
   */
  inspectionReportId?: string;
  /**
   * @example
   * ni-8svmpe0yso****r7fh79
   */
  inspectionTaskId?: string;
  inspectionTaskName?: string;
  /**
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  /**
   * @example
   * 2024-07-18 15:12:28
   */
  startTime?: string;
  /**
   * @example
   * Finish
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      inspectionProject: 'InspectionProject',
      inspectionReportId: 'InspectionReportId',
      inspectionTaskId: 'InspectionTaskId',
      inspectionTaskName: 'InspectionTaskName',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      inspectionProject: 'string',
      inspectionReportId: 'string',
      inspectionTaskId: 'string',
      inspectionTaskName: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNisInspectionReportStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNisInspectionReportStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nir-38abb318b27b49cc9a01
   */
  inspectionReportId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionReportId: 'InspectionReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionReportId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportSummaryResponseBody extends $tea.Model {
  /**
   * @example
   * 2024-06-03 09:36:00
   */
  endTime?: string;
  /**
   * @example
   * nir-38abb318b27b49cc9a01
   */
  inspectionReportId?: string;
  /**
   * @example
   * ni-8svmpe0yso2bhzr7fh79
   */
  inspectionTaskId?: string;
  /**
   * @example
   * 4838F3F2-30E1-5D82-B25A-B9FE33BC3E25
   */
  requestId?: string;
  /**
   * @example
   * 2024-06-03 09:35:00
   */
  startTime?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  summary?: DescribeNisInspectionReportSummaryResponseBodySummary;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      inspectionReportId: 'InspectionReportId',
      inspectionTaskId: 'InspectionTaskId',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      inspectionReportId: 'string',
      inspectionTaskId: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      summary: DescribeNisInspectionReportSummaryResponseBodySummary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNisInspectionReportSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNisInspectionReportSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ni-8svmpe0yso2bhzr7fh79
   */
  inspectionTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionTaskId: 'InspectionTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionTaskResponseBody extends $tea.Model {
  checkResourceList?: DescribeNisInspectionTaskResponseBodyCheckResourceList[];
  /**
   * @example
   * 2024-07-01 10:00:57
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  inspectionInterval?: string;
  /**
   * @example
   * Default
   */
  inspectionName?: string;
  /**
   * @example
   * basic
   */
  inspectionProject?: string;
  /**
   * @example
   * ni-8svmpe0yso2bhzr7fh79
   */
  inspectionTaskId?: string;
  /**
   * @example
   * 2024-07-01 15:15:57
   */
  inspectionTriggerTime?: string;
  /**
   * @example
   * nir-7c3dd178738a429abe6d
   */
  lastUpdateReportId?: string;
  /**
   * @example
   * 2024-07-01 10:00:59
   */
  lastUpdateTime?: string;
  /**
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkResourceList: 'CheckResourceList',
      createTime: 'CreateTime',
      inspectionInterval: 'InspectionInterval',
      inspectionName: 'InspectionName',
      inspectionProject: 'InspectionProject',
      inspectionTaskId: 'InspectionTaskId',
      inspectionTriggerTime: 'InspectionTriggerTime',
      lastUpdateReportId: 'LastUpdateReportId',
      lastUpdateTime: 'LastUpdateTime',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResourceList: { 'type': 'array', 'itemType': DescribeNisInspectionTaskResponseBodyCheckResourceList },
      createTime: 'string',
      inspectionInterval: 'string',
      inspectionName: 'string',
      inspectionProject: 'string',
      inspectionTaskId: 'string',
      inspectionTriggerTime: 'string',
      lastUpdateReportId: 'string',
      lastUpdateTime: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNisInspectionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNisInspectionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInternetTupleRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of member accounts.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684373600099
   */
  beginTime?: number;
  /**
   * @remarks
   * The local IP address.
   * 
   * @example
   * 112.74.XX.XX
   */
  cloudIp?: string;
  /**
   * @remarks
   * The local IP addresses for filtering.
   */
  cloudIpList?: string[];
  /**
   * @remarks
   * The local Internet service provider (ISP).
   * 
   * >  In most cases, the value is Alibaba or Alibaba Cloud.
   * 
   * @example
   * Alibaba
   */
  cloudIsp?: string;
  /**
   * @remarks
   * The local port.
   * 
   * >  This parameter is required only if you set GroupBy to CloudPort.
   * 
   * @example
   * 443
   */
  cloudPort?: string;
  /**
   * @remarks
   * The direction of the Internet traffic that you want to query. Valid values:
   * 
   * *   **in**: inbound
   * *   **out**: outbound
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684373700099
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud instance.
   * 
   * @example
   * eip-sample*
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance IDs for filtering.
   */
  instanceList?: string[];
  /**
   * @remarks
   * The metric for data ranking. Default value: **ByteCount**. This value indicates that Internet traffic data is ranked by traffic volume.
   * 
   * Valid values:
   * 
   * *   Rtt
   * *   ByteCount
   * *   PacketCount
   * *   RetransmitRate
   * 
   * @example
   * ByteCount
   */
  orderBy?: string;
  /**
   * @remarks
   * The remote city.
   * 
   * >  This parameter is required only if you set **TupleType** to **2** or **5**.
   * 
   * @example
   * Hangzhou
   */
  otherCity?: string;
  /**
   * @remarks
   * The remote country.
   * 
   * >  This parameter is required only if you set **TupleType** to **2** or **5**.
   * 
   * @example
   * China
   */
  otherCountry?: string;
  /**
   * @remarks
   * The remote IP address.
   * 
   * > This parameter is required only when you set **TupleType** to **2** or **5**.
   * 
   * @example
   * 122.112.XX.XX
   */
  otherIp?: string;
  /**
   * @remarks
   * The remote ISP.
   * 
   * > This parameter is required if you want to view the information about the remote ISP.
   * 
   * @example
   * China Mobile
   */
  otherIsp?: string;
  /**
   * @remarks
   * The remote port.
   * 
   * > This parameter is required only when you set **TupleType** to **5**.
   * 
   * @example
   * 40002
   */
  otherPort?: string;
  /**
   * @remarks
   * The protocol number.
   * 
   * > All protocols are supported. This parameter is required only when you set **TupleType** to **5**.
   * 
   * @example
   * 6
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the region for which you want to query the Internet traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The order in which instances are ranked by Internet traffic. Valid values:
   * 
   * *   **desc**: the descending order
   * *   **asc**: the ascending order
   * 
   * @example
   * desc
   */
  sort?: string;
  /**
   * @remarks
   * Specifies top-N traffic data to display. Default value: **10**. This value specifies to display top-10 traffic data by default. Max value: **100**.
   * 
   * @example
   * 10
   */
  topN?: number;
  /**
   * @remarks
   * The type of the tuple. Valid values:
   * 
   * *   **1**: 1-tuple
   * *   **2**: 2-tuple
   * *   **5**: 5-tuple
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  tupleType?: number;
  /**
   * @remarks
   * Specifies whether to enable the multi-account management feature. Default value: **false**. This value specifies that the multi-account management feature is disabled.
   * 
   * >  By default, the multi-account management feature is not available. If you want to use this feature, contact your account manager to apply for permissions.
   * 
   * @example
   * false
   */
  useMultiAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      beginTime: 'BeginTime',
      cloudIp: 'CloudIp',
      cloudIpList: 'CloudIpList',
      cloudIsp: 'CloudIsp',
      cloudPort: 'CloudPort',
      direction: 'Direction',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceList: 'InstanceList',
      orderBy: 'OrderBy',
      otherCity: 'OtherCity',
      otherCountry: 'OtherCountry',
      otherIp: 'OtherIp',
      otherIsp: 'OtherIsp',
      otherPort: 'OtherPort',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sort: 'Sort',
      topN: 'TopN',
      tupleType: 'TupleType',
      useMultiAccount: 'UseMultiAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      beginTime: 'number',
      cloudIp: 'string',
      cloudIpList: { 'type': 'array', 'itemType': 'string' },
      cloudIsp: 'string',
      cloudPort: 'string',
      direction: 'string',
      endTime: 'number',
      instanceId: 'string',
      instanceList: { 'type': 'array', 'itemType': 'string' },
      orderBy: 'string',
      otherCity: 'string',
      otherCountry: 'string',
      otherIp: 'string',
      otherIsp: 'string',
      otherPort: 'string',
      protocol: 'string',
      regionId: 'string',
      sort: 'string',
      topN: 'number',
      tupleType: 'number',
      useMultiAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInternetTupleShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of member accounts.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684373600099
   */
  beginTime?: number;
  /**
   * @remarks
   * The local IP address.
   * 
   * @example
   * 112.74.XX.XX
   */
  cloudIp?: string;
  /**
   * @remarks
   * The local IP addresses for filtering.
   */
  cloudIpListShrink?: string;
  /**
   * @remarks
   * The local Internet service provider (ISP).
   * 
   * >  In most cases, the value is Alibaba or Alibaba Cloud.
   * 
   * @example
   * Alibaba
   */
  cloudIsp?: string;
  /**
   * @remarks
   * The local port.
   * 
   * >  This parameter is required only if you set GroupBy to CloudPort.
   * 
   * @example
   * 443
   */
  cloudPort?: string;
  /**
   * @remarks
   * The direction of the Internet traffic that you want to query. Valid values:
   * 
   * *   **in**: inbound
   * *   **out**: outbound
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684373700099
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud instance.
   * 
   * @example
   * eip-sample*
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance IDs for filtering.
   */
  instanceListShrink?: string;
  /**
   * @remarks
   * The metric for data ranking. Default value: **ByteCount**. This value indicates that Internet traffic data is ranked by traffic volume.
   * 
   * Valid values:
   * 
   * *   Rtt
   * *   ByteCount
   * *   PacketCount
   * *   RetransmitRate
   * 
   * @example
   * ByteCount
   */
  orderBy?: string;
  /**
   * @remarks
   * The remote city.
   * 
   * >  This parameter is required only if you set **TupleType** to **2** or **5**.
   * 
   * @example
   * Hangzhou
   */
  otherCity?: string;
  /**
   * @remarks
   * The remote country.
   * 
   * >  This parameter is required only if you set **TupleType** to **2** or **5**.
   * 
   * @example
   * China
   */
  otherCountry?: string;
  /**
   * @remarks
   * The remote IP address.
   * 
   * > This parameter is required only when you set **TupleType** to **2** or **5**.
   * 
   * @example
   * 122.112.XX.XX
   */
  otherIp?: string;
  /**
   * @remarks
   * The remote ISP.
   * 
   * > This parameter is required if you want to view the information about the remote ISP.
   * 
   * @example
   * China Mobile
   */
  otherIsp?: string;
  /**
   * @remarks
   * The remote port.
   * 
   * > This parameter is required only when you set **TupleType** to **5**.
   * 
   * @example
   * 40002
   */
  otherPort?: string;
  /**
   * @remarks
   * The protocol number.
   * 
   * > All protocols are supported. This parameter is required only when you set **TupleType** to **5**.
   * 
   * @example
   * 6
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the region for which you want to query the Internet traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The order in which instances are ranked by Internet traffic. Valid values:
   * 
   * *   **desc**: the descending order
   * *   **asc**: the ascending order
   * 
   * @example
   * desc
   */
  sort?: string;
  /**
   * @remarks
   * Specifies top-N traffic data to display. Default value: **10**. This value specifies to display top-10 traffic data by default. Max value: **100**.
   * 
   * @example
   * 10
   */
  topN?: number;
  /**
   * @remarks
   * The type of the tuple. Valid values:
   * 
   * *   **1**: 1-tuple
   * *   **2**: 2-tuple
   * *   **5**: 5-tuple
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  tupleType?: number;
  /**
   * @remarks
   * Specifies whether to enable the multi-account management feature. Default value: **false**. This value specifies that the multi-account management feature is disabled.
   * 
   * >  By default, the multi-account management feature is not available. If you want to use this feature, contact your account manager to apply for permissions.
   * 
   * @example
   * false
   */
  useMultiAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      beginTime: 'BeginTime',
      cloudIp: 'CloudIp',
      cloudIpListShrink: 'CloudIpList',
      cloudIsp: 'CloudIsp',
      cloudPort: 'CloudPort',
      direction: 'Direction',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceListShrink: 'InstanceList',
      orderBy: 'OrderBy',
      otherCity: 'OtherCity',
      otherCountry: 'OtherCountry',
      otherIp: 'OtherIp',
      otherIsp: 'OtherIsp',
      otherPort: 'OtherPort',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sort: 'Sort',
      topN: 'TopN',
      tupleType: 'TupleType',
      useMultiAccount: 'UseMultiAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      beginTime: 'number',
      cloudIp: 'string',
      cloudIpListShrink: 'string',
      cloudIsp: 'string',
      cloudPort: 'string',
      direction: 'string',
      endTime: 'number',
      instanceId: 'string',
      instanceListShrink: 'string',
      orderBy: 'string',
      otherCity: 'string',
      otherCountry: 'string',
      otherIp: 'string',
      otherIsp: 'string',
      otherPort: 'string',
      protocol: 'string',
      regionId: 'string',
      sort: 'string',
      topN: 'number',
      tupleType: 'number',
      useMultiAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInternetTupleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ranking result of Internet traffic data.
   */
  data?: GetInternetTupleResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetInternetTupleResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInternetTupleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInternetTupleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInternetTupleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatTopNRequest extends $tea.Model {
  /**
   * @remarks
   * The beginning of the time range to query in milliseconds. If you do not specify **EndTime**, the point in time specified by **BeginTime** is queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 1638239092000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end of the time range to query in milliseconds. The time range specified by **BeginTime** and **EndTime** cannot exceed **86400000** milliseconds (24 hours).
   * 
   * @example
   * 1638239093000
   */
  endTime?: number;
  /**
   * @remarks
   * Query ranking statistics for a specific IP address. If you specify this parameter, you do not need to specify **TopN** or **OrderBy**.
   * 
   * @example
   * 192.168.156.101
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-sample***
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The metric that is used for real-time SNAT performance ranking. Valid values:
   * 
   * *   **InBps**: inbound data transfer. Unit: bit/s.
   * *   **OutBps**: outbound data transfer. Unit: bit/s.
   * *   **InPps**: inbound packet forwarding rate. Unit: packets per second.
   * *   **OutPps**: outbound packet forwarding rate. Unit: packets per second.
   * *   **NewSessionPerSecond**: new connection creation rate. Unit: connections per second.
   * *   **ActiveSessionCount**: number of concurrent connections. Unit: connections.
   * 
   * @example
   * InBps
   */
  orderBy?: string;
  /**
   * @remarks
   * The ID of the region in which the NAT gateway is deployed.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The number of entries to return for real-time SNAT performance ranking. Valid values: **1 to 100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  topN?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      ip: 'Ip',
      natGatewayId: 'NatGatewayId',
      orderBy: 'OrderBy',
      regionId: 'RegionId',
      topN: 'TopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      ip: 'string',
      natGatewayId: 'string',
      orderBy: 'string',
      regionId: 'string',
      topN: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatTopNResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether Network Intelligence Service (NIS) is activated. The NatGatewayTopN parameter returns an empty array when NIS is not activated.
   * 
   * *   **true**: activated
   * *   **false**: not activated
   * 
   * @example
   * true
   */
  isTopNOpen?: boolean;
  /**
   * @remarks
   * An array of statistics about real-time SNAT performance ranking.
   */
  natGatewayTopN?: GetNatTopNResponseBodyNatGatewayTopN[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 77C512B5-12f3-f892-BD94-88A98271C1A0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isTopNOpen: 'IsTopNOpen',
      natGatewayTopN: 'NatGatewayTopN',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTopNOpen: 'boolean',
      natGatewayTopN: { 'type': 'array', 'itemType': GetNatTopNResponseBodyNatGatewayTopN },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatTopNResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNatTopNResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNatTopNResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkReachableAnalysisRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkReachableAnalysisResponseBody extends $tea.Model {
  /**
   * @remarks
   * The unique ID (UID) of the Alibaba Cloud account.
   * 
   * @example
   * 123147627844****
   */
  aliUid?: number;
  /**
   * @remarks
   * The time when the network path was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-16T07:11:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The network path ID.
   * 
   * @example
   * np-2a1332214fa346b6****
   */
  networkPathId?: string;
  /**
   * @remarks
   * The parameters of the network path.
   * 
   * @example
   * {
   *   "sourceId": "i-bp100g5pbp6kj4p9****",
   *   "sourceType": "ecs",
   *   "targetId": "i-t4n4ltwgbbomzb0g****",
   *   "targetType": "ecs"
   * }
   */
  networkPathParameter?: string;
  /**
   * @remarks
   * The ID of the task for analyzing network reachability.
   * 
   * @example
   * nra-8607514e71c1484****
   */
  networkReachableAnalysisId?: string;
  /**
   * @remarks
   * The result of network reachability analysis, which includes the network topology, error codes of network unreachability, and rules of network unreachability.
   * 
   * @example
   * {
   *   "errorCode": "",
   *   "networkAclData": {
   *     "networkAclItems": [
   *       
   *     ]
   *   },
   *   "nraId": "nra-f2c8701a36424094****",
   *   "requestId": "B931F8A0-620E-5230-B77F-3BD7F612****",
   *   "routeData": {
   *     "routeItems": [
   *       
   *     ]
   *   },
   *   "securityGroupData": {
   *     "policy": "accept",
   *     "securityGroupItems": [
   *       {
   *         "description": "default_sg_access_rule",
   *         "matchedRule": {
   *           "bizProtocol": "ALL",
   *           "creatingTime": "2022-11-10T03:24:49Z",
   *           "description": "",
   *           "destinationCidr": "",
   *           "destinationGroupId": "sg-wz980j96p8y99co5****",
   *           "direction": "egress",
   *           "policy": "Accept",
   *           "portRange": "-1/-1",
   *           "priority": "1",
   *           "sourceCidr": "",
   *           "sourceGroupId": ""
   *         },
   *         "policy": "accept",
   *         "resourceId": "eni-wz92ce4saz1jzazg****",
   *         "securityGroupId": "sg-wz980j96p8y99co5****"
   *       },
   *       {
   *         "description": "user_acl_drop_rule",
   *         "matchedRule": {
   *           "bizProtocol": "",
   *           "creatingTime": "",
   *           "description": "",
   *           "destinationCidr": "",
   *           "destinationGroupId": "",
   *           "direction": "",
   *           "policy": "",
   *           "portRange": "",
   *           "priority": "",
   *           "sourceCidr": "",
   *           "sourceGroupId": ""
   *         },
   *         "policy": "",
   *         "resourceId": "eni-wz97vry93t6z4lbd****",
   *         "securityGroupId": "sg-wz980j96p8y99co****"
   *       }
   *     ],
   *     "securityGroupReportId": "sgr-4479d23bb37241aab****"
   *   },
   *   "status": "security_group_checking_target",
   *   "topologyData": {
   *     "positive": {
   *       "linkList": [
   *         {
   *           "id": "i-wz91dk7bor557hp93zyv-->eni-wz92ce4saz1jzazg****",
   *           "source": "i-wz91dk7bor557hp9****",
   *           "target": "eni-wz92ce4saz1jzazg****"
   *         },
   *         {
   *           "id": "eni-wz92ce4saz1jzazgi13d-->vsw-wz9slpwdcppwfrnee****",
   *           "source": "eni-wz92ce4saz1jzazg****",
   *           "target": "vsw-wz9slpwdcppwfrnee****"
   *         },
   *         {
   *           "id": "vsw-wz9slpwdcppwfrneebcrp-->eni-wz97vry93t6z4lbd****",
   *           "source": "vsw-wz9slpwdcppwfrnee****",
   *           "target": "eni-wz97vry93t6z4lbd****"
   *         },
   *         {
   *           "id": "eni-wz97vry93t6z4lbdgmfi-->i-wz91dk7bor557hp9****",
   *           "source": "eni-wz97vry93t6z4lbd****",
   *           "target": "i-wz91dk7bor557hp9****"
   *         }
   *       ],
   *       "nodeList": [
   *         {
   *           "aZone": "cn-shenzhen-d",
   *           "bizInsId": "i-wz91dk7bor557hp9****",
   *           "id": "i-wz91dk7bor557hp9****",
   *           "level": 1,
   *           "matchedRoute": {
   *             "nextHopSet": [
   *               
   *             ]
   *           },
   *           "nodeType": "VM",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "trafficLogs": [
   *             
   *           ]
   *         },
   *         {
   *           "aZone": "cn-shenzhen-d",
   *           "bizInsId": "i-wz91dk7bor557hp9****",
   *           "id": "i-wz91dk7bor557hp9****",
   *           "level": 3,
   *           "matchedRoute": {
   *             "nextHopSet": [
   *               
   *             ]
   *           },
   *           "nodeType": "VM",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "trafficLogs": [
   *             
   *           ]
   *         },
   *         {
   *           "aZone": "cn-shenzhen-d",
   *           "bizInsId": "vsw-wz9slpwdcppwfrnee****",
   *           "cidr": "192.168.0.0/24",
   *           "id": "vsw-wz9slpwdcppwfrnee****",
   *           "level": 2,
   *           "matchedRoute": {
   *             "nextHopSet": [
   *               
   *             ]
   *           },
   *           "nodeType": "VSW",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "trafficLogs": [
   *             
   *           ]
   *         },
   *         {
   *           "bizInsId": "eni-wz92ce4saz1jzazg****",
   *           "id": "eni-wz92ce4saz1jzazg****",
   *           "ip": "192.168.0.33",
   *           "mac": "00:XXXX:3e:16:7c:50",
   *           "matchedRoute": {
   *             "nextHopSet": [
   *               
   *             ]
   *           },
   *           "nodeType": "ENI",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "status": "InUse",
   *           "trafficLogs": [
   *             
   *           ]
   *         },
   *         {
   *           "bizInsId": "eni-wz97vry93t6z4lbd****",
   *           "id": "eni-wz97vry93t6z4lbd****",
   *           "ip": "192.168.0.34",
   *           "mac": "00:XXXX:3e:14:70:c2",
   *           "matchedRoute": {
   *             "nextHopSet": [
   *               
   *             ]
   *           },
   *           "nodeType": "ENI",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "status": "InUse",
   *           "trafficLogs": [
   *             
   *           ]
   *         }
   *       ]
   *     },
   *     "reverse": {
   *       "revLinkList": [
   *         {
   *           "id": "i-wz91dk7bor557hp93zys-->eni-wz97vry93t6z4lbd****",
   *           "source": "i-wz91dk7bor557hp9****",
   *           "target": "eni-wz97vry93t6z4lbd****"
   *         },
   *         {
   *           "id": "eni-wz97vry93t6z4lbdgmfi-->vsw-wz9slpwdcppwfrnee****",
   *           "source": "eni-wz97vry93t6z4lbd****",
   *           "target": "vsw-wz9slpwdcppwfrnee****"
   *         },
   *         {
   *           "id": "vsw-wz9slpwdcppwfrneebcrp-->eni-wz92ce4saz1jzazg****",
   *           "source": "vsw-wz9slpwdcppwfrnee****",
   *           "target": "eni-wz92ce4saz1jzazg****"
   *         },
   *         {
   *           "id": "eni-wz92ce4saz1jzazgi13d-->i-wz91dk7bor557hp9****",
   *           "source": "eni-wz92ce4saz1jzazg****",
   *           "target": "i-wz91dk7bor557hp9****"
   *         }
   *       ],
   *       "revNodeList": [
   *         {
   *           "aZone": "cn-shenzhen-d",
   *           "bizInsId": "i-wz91dk7bor557hp9****",
   *           "id": "i-wz91dk7bor557hp9****",
   *           "level": 1,
   *           "nodeType": "VM",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "revMatchedRoute": {
   *             "revNextHopSet": [
   *               
   *             ]
   *           }
   *         },
   *         {
   *           "aZone": "cn-shenzhen-d",
   *           "bizInsId": "i-wz91dk7bor557hp9****",
   *           "id": "i-wz91dk7bor557hp9****",
   *           "level": 3,
   *           "nodeType": "VM",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "revMatchedRoute": {
   *             "revNextHopSet": [
   *               
   *             ]
   *           }
   *         },
   *         {
   *           "aZone": "cn-shenzhen-d",
   *           "bizInsId": "vsw-wz9slpwdcppwfrnee****",
   *           "cidr": "192.168.0.0/24",
   *           "id": "vsw-wz9slpwdcppwfrnee****",
   *           "level": 2,
   *           "nodeType": "VSW",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "revMatchedRoute": {
   *             "revNextHopSet": [
   *               
   *             ]
   *           }
   *         },
   *         {
   *           "bizInsId": "eni-wz97vry93t6z4lbd****",
   *           "id": "eni-wz97vry93t6z4lbd****",
   *           "ip": "192.168.0.34",
   *           "mac": "00:XXXX:3e:14:70:c2",
   *           "nodeType": "ENI",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "revMatchedRoute": {
   *             "revNextHopSet": [
   *               
   *             ]
   *           },
   *           "status": "InUse"
   *         },
   *         {
   *           "bizInsId": "eni-wz92ce4saz1jzazg****",
   *           "id": "eni-wz92ce4saz1jzazg****",
   *           "ip": "192.168.0.33",
   *           "mac": "00:XXXX:3e:16:7c:50",
   *           "nodeType": "ENI",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "revMatchedRoute": {
   *             "revNextHopSet": [
   *               
   *             ]
   *           },
   *           "status": "InUse"
   *         }
   *       ]
   *     },
   *     "topologyReportId": "tpr-21cf60002715491b8****"
   *   }
   * }
   */
  networkReachableAnalysisResult?: string;
  /**
   * @remarks
   * The state of the task for analyzing network reachability. Valid values:
   * 
   * *   **init**: The task is in progress.
   * *   **finish**: The task is complete.
   * *   **error**: An analysis error occurred.
   * *   **timeout**: The task timed out.
   * 
   * @example
   * finish
   */
  networkReachableAnalysisStatus?: string;
  /**
   * @remarks
   * Indicates whether the network path is reachable. Valid values:
   * 
   * *   **true**: The network path is reachable.
   * *   **false**: The network path is unreachable.
   * 
   * @example
   * true
   */
  reachable?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DEE0FEAF-59AE-5CDD-AA07-626BC365D571
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createTime: 'CreateTime',
      networkPathId: 'NetworkPathId',
      networkPathParameter: 'NetworkPathParameter',
      networkReachableAnalysisId: 'NetworkReachableAnalysisId',
      networkReachableAnalysisResult: 'NetworkReachableAnalysisResult',
      networkReachableAnalysisStatus: 'NetworkReachableAnalysisStatus',
      reachable: 'Reachable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      createTime: 'string',
      networkPathId: 'string',
      networkPathParameter: 'string',
      networkReachableAnalysisId: 'string',
      networkReachableAnalysisResult: 'string',
      networkReachableAnalysisStatus: 'string',
      reachable: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkReachableAnalysisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNetworkReachableAnalysisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNetworkReachableAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkMetricsRequest extends $tea.Model {
  accountIds?: string[];
  /**
   * @example
   * 1638239092000
   */
  beginTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  dimensions?: GetNisNetworkMetricsRequestDimensions[];
  /**
   * @example
   * 1684373700099
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bps
   */
  metricName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AccessInternetIPV4
   */
  resourceType?: string;
  /**
   * @example
   * TimestampAscending
   */
  scanBy?: string;
  /**
   * @example
   * false
   */
  useCrossAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      beginTime: 'BeginTime',
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      metricName: 'MetricName',
      regionNo: 'RegionNo',
      resourceType: 'ResourceType',
      scanBy: 'ScanBy',
      useCrossAccount: 'UseCrossAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      beginTime: 'number',
      dimensions: { 'type': 'array', 'itemType': GetNisNetworkMetricsRequestDimensions },
      endTime: 'number',
      metricName: 'string',
      regionNo: 'string',
      resourceType: 'string',
      scanBy: 'string',
      useCrossAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkMetricsShrinkRequest extends $tea.Model {
  accountIds?: string[];
  /**
   * @example
   * 1638239092000
   */
  beginTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  dimensionsShrink?: string;
  /**
   * @example
   * 1684373700099
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bps
   */
  metricName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AccessInternetIPV4
   */
  resourceType?: string;
  /**
   * @example
   * TimestampAscending
   */
  scanBy?: string;
  /**
   * @example
   * false
   */
  useCrossAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      beginTime: 'BeginTime',
      dimensionsShrink: 'Dimensions',
      endTime: 'EndTime',
      metricName: 'MetricName',
      regionNo: 'RegionNo',
      resourceType: 'ResourceType',
      scanBy: 'ScanBy',
      useCrossAccount: 'UseCrossAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      beginTime: 'number',
      dimensionsShrink: 'string',
      endTime: 'number',
      metricName: 'string',
      regionNo: 'string',
      resourceType: 'string',
      scanBy: 'string',
      useCrossAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkMetricsResponseBody extends $tea.Model {
  data?: GetNisNetworkMetricsResponseBodyData;
  /**
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetNisNetworkMetricsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkMetricsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNisNetworkMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNisNetworkMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkRankingRequest extends $tea.Model {
  accountIds?: string[];
  /**
   * @example
   * 1684373600099
   */
  beginTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @example
   * 1684379093000
   */
  endTime?: number;
  filter?: GetNisNetworkRankingRequestFilter[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Protocol
   */
  groupBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bps
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AccessInternetIpV4
   */
  resourceType?: string;
  /**
   * @example
   * desc
   */
  sort?: string;
  /**
   * @example
   * 10
   */
  topN?: number;
  /**
   * @example
   * false
   */
  useCrossAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      beginTime: 'BeginTime',
      direction: 'Direction',
      endTime: 'EndTime',
      filter: 'Filter',
      groupBy: 'GroupBy',
      orderBy: 'OrderBy',
      regionNo: 'RegionNo',
      resourceType: 'ResourceType',
      sort: 'Sort',
      topN: 'TopN',
      useCrossAccount: 'UseCrossAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      beginTime: 'number',
      direction: 'string',
      endTime: 'number',
      filter: { 'type': 'array', 'itemType': GetNisNetworkRankingRequestFilter },
      groupBy: 'string',
      orderBy: 'string',
      regionNo: 'string',
      resourceType: 'string',
      sort: 'string',
      topN: 'number',
      useCrossAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkRankingShrinkRequest extends $tea.Model {
  accountIds?: string[];
  /**
   * @example
   * 1684373600099
   */
  beginTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @example
   * 1684379093000
   */
  endTime?: number;
  filterShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Protocol
   */
  groupBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bps
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AccessInternetIpV4
   */
  resourceType?: string;
  /**
   * @example
   * desc
   */
  sort?: string;
  /**
   * @example
   * 10
   */
  topN?: number;
  /**
   * @example
   * false
   */
  useCrossAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      beginTime: 'BeginTime',
      direction: 'Direction',
      endTime: 'EndTime',
      filterShrink: 'Filter',
      groupBy: 'GroupBy',
      orderBy: 'OrderBy',
      regionNo: 'RegionNo',
      resourceType: 'ResourceType',
      sort: 'Sort',
      topN: 'TopN',
      useCrossAccount: 'UseCrossAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      beginTime: 'number',
      direction: 'string',
      endTime: 'number',
      filterShrink: 'string',
      groupBy: 'string',
      orderBy: 'string',
      regionNo: 'string',
      resourceType: 'string',
      sort: 'string',
      topN: 'number',
      useCrossAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkRankingResponseBody extends $tea.Model {
  data?: GetNisNetworkRankingResponseBodyData[];
  /**
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetNisNetworkRankingResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkRankingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNisNetworkRankingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNisNetworkRankingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransitRouterFlowTopNRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of the member accounts.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The ID of the CEN bandwidth plan.
   * 
   * @example
   * cenbwp-ia8kw1zjv4hyal*****
   */
  bandwithPackageId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. The maximum time range that you can query is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684373600099
   */
  beginTime?: number;
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-ia8kw1zjv4hyal****
   */
  cenId?: string;
  /**
   * @remarks
   * The direction of the inter-region traffic in the local regions or for the local IP addresses. Valid values:
   * 
   * *   **in**: inbound traffic
   * *   **out**: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. The maximum time range that you can query is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1638239093000
   */
  endTime?: number;
  /**
   * @remarks
   * The dimension for ranking inter-region traffic data. The value of this parameter is case-sensitive. Valid values:
   * 
   * *   **1Tuple**: queries the rankings of inter-region traffic data for the local regions, Cloud Enterprise Network (CEN) instances, and IP addresses.
   * *   **2Tuple**: queries the rankings of inter-region traffic data for the local and remote regions, and the local and remote IP addresses.
   * *   **5Tuple**: queries the rankings of inter-region traffic data for the local and remote IP addresses, local and remote ports, and protocols.
   * *   **Cen**: queries the rankings of inter-region traffic data for CEN instances.
   * *   **RegionPair**: queries the rankings of inter-region traffic data for the local and remote regions.
   * *   **Port**: queries the rankings of inter-region traffic data for the local and remote ports.
   * *   **Protocol**: queries the rankings of inter-region traffic data for the protocols.
   * 
   * This parameter is required.
   * 
   * @example
   * 1Tuple
   */
  groupBy?: string;
  /**
   * @remarks
   * The metric for ranking inter-region traffic data. Default value: Bytes. This value specifies that inter-region traffic data is ranked by traffic volume.
   * 
   * @example
   * Bytes
   */
  orderBy?: string;
  /**
   * @remarks
   * The remote IP address.
   * 
   * @example
   * 122.112.XX.XX
   */
  otherIp?: string;
  /**
   * @remarks
   * The remote port.
   * 
   * @example
   * 10869
   */
  otherPort?: string;
  /**
   * @remarks
   * The remote region.
   * 
   * @example
   * ap-southeast-1
   */
  otherRegion?: string;
  /**
   * @remarks
   * The protocol number.
   * 
   * >  All protocols are supported. This parameter is required only if you set **GroupBy** to **5Tuple** or **Protocol**.
   * 
   * @example
   * 6
   */
  protocol?: string;
  /**
   * @remarks
   * The order for ranking inter-region traffic data. Valid values:
   * 
   * *   **desc**: descending order
   * *   **asc**: ascending order
   * 
   * @example
   * desc
   */
  sort?: string;
  /**
   * @remarks
   * The local IP address.
   * 
   * @example
   * 1.8.XX.XX
   */
  thisIp?: string;
  /**
   * @remarks
   * The local port.
   * 
   * @example
   * 80
   */
  thisPort?: string;
  /**
   * @remarks
   * The local region where the **local IP address** resides.
   * 
   * @example
   * cn-shanghai
   */
  thisRegion?: string;
  /**
   * @remarks
   * Specifies the maximum number of data entries to display. Default value: **10**. Maximum value: 100.
   * 
   * @example
   * 20
   */
  topN?: number;
  /**
   * @remarks
   * Specifies whether to enable the multi-account management feature. Default value: **false**. This value specifies that the multi-account management feature is disabled.
   * 
   * >  By default, the multi-account management feature is not available. If you want to use this feature, contact your account manager to apply for permissions.
   * 
   * @example
   * false
   */
  useMultiAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      bandwithPackageId: 'BandwithPackageId',
      beginTime: 'BeginTime',
      cenId: 'CenId',
      direction: 'Direction',
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      orderBy: 'OrderBy',
      otherIp: 'OtherIp',
      otherPort: 'OtherPort',
      otherRegion: 'OtherRegion',
      protocol: 'Protocol',
      sort: 'Sort',
      thisIp: 'ThisIp',
      thisPort: 'ThisPort',
      thisRegion: 'ThisRegion',
      topN: 'TopN',
      useMultiAccount: 'UseMultiAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      bandwithPackageId: 'string',
      beginTime: 'number',
      cenId: 'string',
      direction: 'string',
      endTime: 'number',
      groupBy: 'string',
      orderBy: 'string',
      otherIp: 'string',
      otherPort: 'string',
      otherRegion: 'string',
      protocol: 'string',
      sort: 'string',
      thisIp: 'string',
      thisPort: 'string',
      thisRegion: 'string',
      topN: 'number',
      useMultiAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransitRouterFlowTopNShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of the member accounts.
   */
  accountIdsShrink?: string;
  /**
   * @remarks
   * The ID of the CEN bandwidth plan.
   * 
   * @example
   * cenbwp-ia8kw1zjv4hyal*****
   */
  bandwithPackageId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. The maximum time range that you can query is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684373600099
   */
  beginTime?: number;
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-ia8kw1zjv4hyal****
   */
  cenId?: string;
  /**
   * @remarks
   * The direction of the inter-region traffic in the local regions or for the local IP addresses. Valid values:
   * 
   * *   **in**: inbound traffic
   * *   **out**: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. The maximum time range that you can query is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1638239093000
   */
  endTime?: number;
  /**
   * @remarks
   * The dimension for ranking inter-region traffic data. The value of this parameter is case-sensitive. Valid values:
   * 
   * *   **1Tuple**: queries the rankings of inter-region traffic data for the local regions, Cloud Enterprise Network (CEN) instances, and IP addresses.
   * *   **2Tuple**: queries the rankings of inter-region traffic data for the local and remote regions, and the local and remote IP addresses.
   * *   **5Tuple**: queries the rankings of inter-region traffic data for the local and remote IP addresses, local and remote ports, and protocols.
   * *   **Cen**: queries the rankings of inter-region traffic data for CEN instances.
   * *   **RegionPair**: queries the rankings of inter-region traffic data for the local and remote regions.
   * *   **Port**: queries the rankings of inter-region traffic data for the local and remote ports.
   * *   **Protocol**: queries the rankings of inter-region traffic data for the protocols.
   * 
   * This parameter is required.
   * 
   * @example
   * 1Tuple
   */
  groupBy?: string;
  /**
   * @remarks
   * The metric for ranking inter-region traffic data. Default value: Bytes. This value specifies that inter-region traffic data is ranked by traffic volume.
   * 
   * @example
   * Bytes
   */
  orderBy?: string;
  /**
   * @remarks
   * The remote IP address.
   * 
   * @example
   * 122.112.XX.XX
   */
  otherIp?: string;
  /**
   * @remarks
   * The remote port.
   * 
   * @example
   * 10869
   */
  otherPort?: string;
  /**
   * @remarks
   * The remote region.
   * 
   * @example
   * ap-southeast-1
   */
  otherRegion?: string;
  /**
   * @remarks
   * The protocol number.
   * 
   * >  All protocols are supported. This parameter is required only if you set **GroupBy** to **5Tuple** or **Protocol**.
   * 
   * @example
   * 6
   */
  protocol?: string;
  /**
   * @remarks
   * The order for ranking inter-region traffic data. Valid values:
   * 
   * *   **desc**: descending order
   * *   **asc**: ascending order
   * 
   * @example
   * desc
   */
  sort?: string;
  /**
   * @remarks
   * The local IP address.
   * 
   * @example
   * 1.8.XX.XX
   */
  thisIp?: string;
  /**
   * @remarks
   * The local port.
   * 
   * @example
   * 80
   */
  thisPort?: string;
  /**
   * @remarks
   * The local region where the **local IP address** resides.
   * 
   * @example
   * cn-shanghai
   */
  thisRegion?: string;
  /**
   * @remarks
   * Specifies the maximum number of data entries to display. Default value: **10**. Maximum value: 100.
   * 
   * @example
   * 20
   */
  topN?: number;
  /**
   * @remarks
   * Specifies whether to enable the multi-account management feature. Default value: **false**. This value specifies that the multi-account management feature is disabled.
   * 
   * >  By default, the multi-account management feature is not available. If you want to use this feature, contact your account manager to apply for permissions.
   * 
   * @example
   * false
   */
  useMultiAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'AccountIds',
      bandwithPackageId: 'BandwithPackageId',
      beginTime: 'BeginTime',
      cenId: 'CenId',
      direction: 'Direction',
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      orderBy: 'OrderBy',
      otherIp: 'OtherIp',
      otherPort: 'OtherPort',
      otherRegion: 'OtherRegion',
      protocol: 'Protocol',
      sort: 'Sort',
      thisIp: 'ThisIp',
      thisPort: 'ThisPort',
      thisRegion: 'ThisRegion',
      topN: 'TopN',
      useMultiAccount: 'UseMultiAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      bandwithPackageId: 'string',
      beginTime: 'number',
      cenId: 'string',
      direction: 'string',
      endTime: 'number',
      groupBy: 'string',
      orderBy: 'string',
      otherIp: 'string',
      otherPort: 'string',
      otherRegion: 'string',
      protocol: 'string',
      sort: 'string',
      thisIp: 'string',
      thisPort: 'string',
      thisRegion: 'string',
      topN: 'number',
      useMultiAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransitRouterFlowTopNResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
   */
  requestId?: string;
  /**
   * @remarks
   * The ranking result of inter-region traffic data.
   */
  transitRouterFlowTopN?: GetTransitRouterFlowTopNResponseBodyTransitRouterFlowTopN[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterFlowTopN: 'TransitRouterFlowTopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterFlowTopN: { 'type': 'array', 'itemType': GetTransitRouterFlowTopNResponseBodyTransitRouterFlowTopN },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransitRouterFlowTopNResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTransitRouterFlowTopNResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTransitRouterFlowTopNResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVbrFlowTopNRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of member accounts.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The CEN connection ID.
   * 
   * @example
   * tr-attach-dnv870gmqzmb5u****
   */
  attachmentId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. The maximum time range that you can query is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1638239092000
   */
  beginTime?: number;
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-ia8kw1zjv4hyal****
   */
  cenId?: string;
  /**
   * @remarks
   * The local IP address.
   * 
   * @example
   * 112.74.XX.XX
   */
  cloudIp?: string;
  /**
   * @remarks
   * The local port.
   * 
   * >  This parameter is required only if you set **GroupBy** to **CloudPort**.
   * 
   * @example
   * 443
   */
  cloudPort?: string;
  /**
   * @remarks
   * The direction of the hybrid cloud traffic in the local regions or for the local IP addresses. Valid values:
   * 
   * *   **in**: traffic from a data center to Alibaba Cloud
   * *   **out**: traffic from Alibaba Cloud to a data center
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. The maximum time range that you can query is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1638239093000
   */
  endTime?: number;
  /**
   * @remarks
   * The dimension for ranking hybrid cloud traffic data. The value of this parameter is case-sensitive. Valid values:
   * 
   * *   **1Tuple**: queries the rankings of hybrid cloud traffic data for the Cloud Enterprise Network (CEN) instances, CEN connections, virtual border routers (VBRs), and IP addresses.
   * *   **2Tuple**: queries the rankings of hybrid cloud traffic data for the local and remote IP addresses.
   * *   **5Tuple**: queries the rankings of hybrid cloud traffic data for the local and remote IP addresses, local and remote ports, and protocols.
   * *   **CloudPort**: queries the rankings of hybrid cloud traffic data for the local ports.
   * *   **OtherPort**: queries the rankings of hybrid cloud traffic data for the remote ports.
   * *   **Protocol**: queries the rankings of hybrid cloud traffic data for the protocols.
   * 
   * This parameter is required.
   * 
   * @example
   * 1Tuple
   */
  groupBy?: string;
  /**
   * @remarks
   * The metric for ranking hybrid cloud traffic data. Default value: Bytes. This value specifies that hybrid cloud traffic data is ranked by traffic volumes.
   * 
   * @example
   * Bytes
   */
  orderBy?: string;
  /**
   * @remarks
   * The remote IP address.
   * 
   * @example
   * 122.112.XX.XX
   */
  otherIp?: string;
  /**
   * @remarks
   * The remote port.
   * 
   * >  This parameter is required only if you set **GroupBy** to **OtherPort**.
   * 
   * @example
   * 40002
   */
  otherPort?: string;
  /**
   * @remarks
   * The protocol number.
   * 
   * >  All protocols are supported. This parameter is required only if you set **GroupBy** to **5Tuple** or **Protocol**.
   * 
   * @example
   * 6
   */
  protocol?: string;
  /**
   * @remarks
   * The local region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The order for ranking hybrid cloud traffic data. Valid values:
   * 
   * *   **desc**: descending order
   * *   **asc**: ascending order
   * 
   * @example
   * desc
   */
  sort?: string;
  /**
   * @remarks
   * Specifies top-N traffic data to display. Default value: **10**. This value specifies that top-10 traffic data is displayed by default. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  topN?: number;
  /**
   * @remarks
   * Specifies whether to enable the multi-account management feature. Default value: **false**. This value specifies that the multi-account management feature is disabled.
   * 
   * >  By default, the multi-account management feature is not available. If you want to use this feature, contact your account manager to apply for permissions.
   * 
   * @example
   * false
   */
  useMultiAccount?: boolean;
  /**
   * @remarks
   * The ID of the VBR that is associated with the Express Connect circuit.
   * 
   * @example
   * vbr-k1atj46citwuek42j****
   */
  virtualBorderRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      attachmentId: 'AttachmentId',
      beginTime: 'BeginTime',
      cenId: 'CenId',
      cloudIp: 'CloudIp',
      cloudPort: 'CloudPort',
      direction: 'Direction',
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      orderBy: 'OrderBy',
      otherIp: 'OtherIp',
      otherPort: 'OtherPort',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sort: 'Sort',
      topN: 'TopN',
      useMultiAccount: 'UseMultiAccount',
      virtualBorderRouterId: 'VirtualBorderRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      attachmentId: 'string',
      beginTime: 'number',
      cenId: 'string',
      cloudIp: 'string',
      cloudPort: 'string',
      direction: 'string',
      endTime: 'number',
      groupBy: 'string',
      orderBy: 'string',
      otherIp: 'string',
      otherPort: 'string',
      protocol: 'string',
      regionId: 'string',
      sort: 'string',
      topN: 'number',
      useMultiAccount: 'boolean',
      virtualBorderRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVbrFlowTopNShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of member accounts.
   */
  accountIdsShrink?: string;
  /**
   * @remarks
   * The CEN connection ID.
   * 
   * @example
   * tr-attach-dnv870gmqzmb5u****
   */
  attachmentId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. The maximum time range that you can query is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1638239092000
   */
  beginTime?: number;
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-ia8kw1zjv4hyal****
   */
  cenId?: string;
  /**
   * @remarks
   * The local IP address.
   * 
   * @example
   * 112.74.XX.XX
   */
  cloudIp?: string;
  /**
   * @remarks
   * The local port.
   * 
   * >  This parameter is required only if you set **GroupBy** to **CloudPort**.
   * 
   * @example
   * 443
   */
  cloudPort?: string;
  /**
   * @remarks
   * The direction of the hybrid cloud traffic in the local regions or for the local IP addresses. Valid values:
   * 
   * *   **in**: traffic from a data center to Alibaba Cloud
   * *   **out**: traffic from Alibaba Cloud to a data center
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. The maximum time range that you can query is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1638239093000
   */
  endTime?: number;
  /**
   * @remarks
   * The dimension for ranking hybrid cloud traffic data. The value of this parameter is case-sensitive. Valid values:
   * 
   * *   **1Tuple**: queries the rankings of hybrid cloud traffic data for the Cloud Enterprise Network (CEN) instances, CEN connections, virtual border routers (VBRs), and IP addresses.
   * *   **2Tuple**: queries the rankings of hybrid cloud traffic data for the local and remote IP addresses.
   * *   **5Tuple**: queries the rankings of hybrid cloud traffic data for the local and remote IP addresses, local and remote ports, and protocols.
   * *   **CloudPort**: queries the rankings of hybrid cloud traffic data for the local ports.
   * *   **OtherPort**: queries the rankings of hybrid cloud traffic data for the remote ports.
   * *   **Protocol**: queries the rankings of hybrid cloud traffic data for the protocols.
   * 
   * This parameter is required.
   * 
   * @example
   * 1Tuple
   */
  groupBy?: string;
  /**
   * @remarks
   * The metric for ranking hybrid cloud traffic data. Default value: Bytes. This value specifies that hybrid cloud traffic data is ranked by traffic volumes.
   * 
   * @example
   * Bytes
   */
  orderBy?: string;
  /**
   * @remarks
   * The remote IP address.
   * 
   * @example
   * 122.112.XX.XX
   */
  otherIp?: string;
  /**
   * @remarks
   * The remote port.
   * 
   * >  This parameter is required only if you set **GroupBy** to **OtherPort**.
   * 
   * @example
   * 40002
   */
  otherPort?: string;
  /**
   * @remarks
   * The protocol number.
   * 
   * >  All protocols are supported. This parameter is required only if you set **GroupBy** to **5Tuple** or **Protocol**.
   * 
   * @example
   * 6
   */
  protocol?: string;
  /**
   * @remarks
   * The local region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The order for ranking hybrid cloud traffic data. Valid values:
   * 
   * *   **desc**: descending order
   * *   **asc**: ascending order
   * 
   * @example
   * desc
   */
  sort?: string;
  /**
   * @remarks
   * Specifies top-N traffic data to display. Default value: **10**. This value specifies that top-10 traffic data is displayed by default. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  topN?: number;
  /**
   * @remarks
   * Specifies whether to enable the multi-account management feature. Default value: **false**. This value specifies that the multi-account management feature is disabled.
   * 
   * >  By default, the multi-account management feature is not available. If you want to use this feature, contact your account manager to apply for permissions.
   * 
   * @example
   * false
   */
  useMultiAccount?: boolean;
  /**
   * @remarks
   * The ID of the VBR that is associated with the Express Connect circuit.
   * 
   * @example
   * vbr-k1atj46citwuek42j****
   */
  virtualBorderRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'AccountIds',
      attachmentId: 'AttachmentId',
      beginTime: 'BeginTime',
      cenId: 'CenId',
      cloudIp: 'CloudIp',
      cloudPort: 'CloudPort',
      direction: 'Direction',
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      orderBy: 'OrderBy',
      otherIp: 'OtherIp',
      otherPort: 'OtherPort',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sort: 'Sort',
      topN: 'TopN',
      useMultiAccount: 'UseMultiAccount',
      virtualBorderRouterId: 'VirtualBorderRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      attachmentId: 'string',
      beginTime: 'number',
      cenId: 'string',
      cloudIp: 'string',
      cloudPort: 'string',
      direction: 'string',
      endTime: 'number',
      groupBy: 'string',
      orderBy: 'string',
      otherIp: 'string',
      otherPort: 'string',
      protocol: 'string',
      regionId: 'string',
      sort: 'string',
      topN: 'number',
      useMultiAccount: 'boolean',
      virtualBorderRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVbrFlowTopNResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  /**
   * @remarks
   * The ranking result of hybrid cloud traffic data.
   */
  virtualBorderRouterFlowlogTopN?: GetVbrFlowTopNResponseBodyVirtualBorderRouterFlowlogTopN[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      virtualBorderRouterFlowlogTopN: 'VirtualBorderRouterFlowlogTopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      virtualBorderRouterFlowlogTopN: { 'type': 'array', 'itemType': GetVbrFlowTopNResponseBodyVirtualBorderRouterFlowlogTopN },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVbrFlowTopNResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVbrFlowTopNResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVbrFlowTopNResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNisInspectionResourceTypeResponseBody extends $tea.Model {
  /**
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
   */
  requestId?: string;
  resourceTypeList?: ListNisInspectionResourceTypeResponseBodyResourceTypeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceTypeList: 'ResourceTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceTypeList: { 'type': 'array', 'itemType': ListNisInspectionResourceTypeResponseBodyResourceTypeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNisInspectionResourceTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNisInspectionResourceTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNisInspectionResourceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNisInspectionTaskReportsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ni-8svmpe0yso2bhzr7fh79
   */
  inspectionTaskId?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * hKrS+MVXkuOgztXnvdml194Cz/lMNdmr+DEh0th6dVlNEo/F148UPCh2itDku7Qj
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionTaskId: 'InspectionTaskId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTaskId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNisInspectionTaskReportsResponseBody extends $tea.Model {
  inspectionReportList?: ListNisInspectionTaskReportsResponseBodyInspectionReportList[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * hKrS+MVXkuOgztXnvdml194Cz/lMNdmr+DEh0th6dVlNEo/F148UPCh2itDku7Qj
   */
  nextToken?: string;
  /**
   * @example
   * 0D213AF9-7B8A-51A8-B411-2D797A1A447B
   */
  requestId?: string;
  /**
   * @example
   * 34
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      inspectionReportList: 'InspectionReportList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionReportList: { 'type': 'array', 'itemType': ListNisInspectionTaskReportsResponseBodyInspectionReportList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNisInspectionTaskReportsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNisInspectionTaskReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNisInspectionTaskReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNisInspectionTasksRequest extends $tea.Model {
  inspectionName?: string;
  /**
   * @example
   * basic
   */
  inspectionProject?: string;
  /**
   * @example
   * ni-8svm******hzr7fh79
   */
  inspectionTaskId?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * hKrS+MVXkuOgztXnvdml1/R9jhHkiH8eW3CfaOYU0CEL7yiT0zae6J8v1zYNg+d1
   */
  nextToken?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionName: 'InspectionName',
      inspectionProject: 'InspectionProject',
      inspectionTaskId: 'InspectionTaskId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionName: 'string',
      inspectionProject: 'string',
      inspectionTaskId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNisInspectionTasksResponseBody extends $tea.Model {
  inspectionTaskList?: ListNisInspectionTasksResponseBodyInspectionTaskList[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * hKrS+MVXkuOgztXnvdml194Cz/lMNdmr+DEh0th6dVlNEo/F148UPCh2itDku7Qj
   */
  nextToken?: string;
  /**
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      inspectionTaskList: 'InspectionTaskList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTaskList: { 'type': 'array', 'itemType': ListNisInspectionTasksResponseBodyInspectionTaskList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNisInspectionTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNisInspectionTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNisInspectionTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNisInspectionTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ni-8svmpe0yso****r7fh79
   */
  inspectionTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionTaskId: 'InspectionTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNisInspectionTaskResponseBody extends $tea.Model {
  /**
   * @example
   * nir-9923e262c106461d86ad
   */
  inspectionReportId?: string;
  /**
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionReportId: 'InspectionReportId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionReportId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNisInspectionTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartNisInspectionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartNisInspectionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNisInspectionTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ni-8svmpe0yso2bhzr7fh79
   */
  inspectionTaskId?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionTaskId: 'InspectionTaskId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTaskId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNisInspectionTaskResponseBody extends $tea.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNisInspectionTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNisInspectionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNisInspectionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPathRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N to add to the resource. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * You can add up to 20 tags in each call.
   * 
   * @example
   * role
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * ops
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkReachableAnalysisRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag to add to the resource. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * You can add up to 20 tags in each call.
   * 
   * @example
   * Team
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to add to the resource. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`. The tag value can be an empty string.
   * 
   * You can add up to 20 tag values in each call.
   * 
   * @example
   * ops
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionRecommendationResourcesResponseBodyResourceList extends $tea.Model {
  /**
   * @example
   * {ResourceId: "ngw-p0wn04hi4****q2us6q7q"}
   */
  analysisData?: string;
  /**
   * @example
   * ngw-p0wn04hi4****q2us6q7q
   */
  resourceId?: string;
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      analysisData: 'AnalysisData',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisData: 'string',
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListCheckResultList extends $tea.Model {
  /**
   * @example
   * 0
   */
  count?: number;
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      riskLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListRecommendationList extends $tea.Model {
  abnormality?: string;
  metadata?: string;
  reason?: string;
  /**
   * @example
   * nat_snat_cross_az_warn
   */
  recommendationCode?: string;
  riskLevel?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      abnormality: 'Abnormality',
      metadata: 'Metadata',
      reason: 'Reason',
      recommendationCode: 'RecommendationCode',
      riskLevel: 'RiskLevel',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormality: 'string',
      metadata: 'string',
      reason: 'string',
      recommendationCode: 'string',
      riskLevel: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportCheckItemsResponseBodyCheckItemList extends $tea.Model {
  /**
   * @example
   * stability
   */
  categoryCode?: string;
  /**
   * @example
   * item_nat_water_level_check
   */
  checkItemCode?: string;
  checkItemName?: string;
  checkResultList?: DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListCheckResultList[];
  description?: string;
  recommendationList?: DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListRecommendationList[];
  /**
   * @example
   * NAT
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'CategoryCode',
      checkItemCode: 'CheckItemCode',
      checkItemName: 'CheckItemName',
      checkResultList: 'CheckResultList',
      description: 'Description',
      recommendationList: 'RecommendationList',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'string',
      checkItemCode: 'string',
      checkItemName: 'string',
      checkResultList: { 'type': 'array', 'itemType': DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListCheckResultList },
      description: 'string',
      recommendationList: { 'type': 'array', 'itemType': DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListRecommendationList },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportSummaryResponseBodySummaryPassRateSummary extends $tea.Model {
  /**
   * @example
   * 0.98
   */
  passRate?: number;
  /**
   * @example
   * Stability
   */
  passRateScope?: string;
  static names(): { [key: string]: string } {
    return {
      passRate: 'PassRate',
      passRateScope: 'PassRateScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passRate: 'number',
      passRateScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportSummaryResponseBodySummaryRiskSummary extends $tea.Model {
  /**
   * @example
   * 0
   */
  resourceCount?: number;
  /**
   * @example
   * 3
   */
  riskCount?: number;
  /**
   * @example
   * HighRisk
   */
  riskLevel?: string;
  /**
   * @example
   * StabilityRisk
   */
  riskType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'ResourceCount',
      riskCount: 'RiskCount',
      riskLevel: 'RiskLevel',
      riskType: 'RiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      riskCount: 'number',
      riskLevel: 'string',
      riskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionReportSummaryResponseBodySummary extends $tea.Model {
  /**
   * @example
   * 11
   */
  checkItemCount?: number;
  /**
   * @example
   * 123
   */
  checkResourceCount?: number;
  passRateSummary?: DescribeNisInspectionReportSummaryResponseBodySummaryPassRateSummary[];
  riskSummary?: DescribeNisInspectionReportSummaryResponseBodySummaryRiskSummary[];
  static names(): { [key: string]: string } {
    return {
      checkItemCount: 'CheckItemCount',
      checkResourceCount: 'CheckResourceCount',
      passRateSummary: 'PassRateSummary',
      riskSummary: 'RiskSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItemCount: 'number',
      checkResourceCount: 'number',
      passRateSummary: { 'type': 'array', 'itemType': DescribeNisInspectionReportSummaryResponseBodySummaryPassRateSummary },
      riskSummary: { 'type': 'array', 'itemType': DescribeNisInspectionReportSummaryResponseBodySummaryRiskSummary },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisInspectionTaskResponseBodyCheckResourceList extends $tea.Model {
  /**
   * @example
   * CheckAll
   */
  checkScope?: string;
  /**
   * @example
   * EIP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      checkScope: 'CheckScope',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkScope: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInternetTupleResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The access point of Alibaba Cloud.
   * 
   * >  This parameter is valid only if you set **InstanceId** to the instance ID of an Anycast elastic IP address (EIP).
   * 
   * @example
   * cn-hongkong-pop
   */
  accessRegion?: string;
  /**
   * @remarks
   * The beginning of the time range that you queried. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1684373600099
   */
  beginTime?: string;
  /**
   * @remarks
   * The traffic volume. Unit: bytes.
   * 
   * @example
   * 88
   */
  byteCount?: number;
  /**
   * @remarks
   * The local city.
   * 
   * @example
   * Nanjing
   */
  cloudCity?: string;
  /**
   * @remarks
   * The local country or region.
   * 
   * @example
   * China
   */
  cloudCountry?: string;
  /**
   * @remarks
   * The local IP address.
   * 
   * @example
   * 112.74.XX.XX
   */
  cloudIp?: string;
  /**
   * @remarks
   * The local ISP.
   * 
   * @example
   * China Mobile
   */
  cloudIsp?: string;
  /**
   * @remarks
   * The local port.
   * 
   * @example
   * 443
   */
  cloudPort?: string;
  /**
   * @remarks
   * The service code of the instance to which the local IP address belongs.
   * 
   * @example
   * EIP
   */
  cloudProduct?: string;
  /**
   * @remarks
   * The local province.
   * 
   * @example
   * Jiangsu
   */
  cloudProvince?: string;
  /**
   * @remarks
   * The direction of Internet traffic. Valid values:
   * 
   * *   **in**: inbound
   * *   **out**: outbound
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The inbound traffic volume. Unit: bytes.
   * 
   * @example
   * 88
   */
  inByteCount?: number;
  /**
   * @remarks
   * The number of inbound disordered packets.
   * 
   * @example
   * 2
   */
  inOutOrderCount?: number;
  /**
   * @remarks
   * The number of inbound packets.
   * 
   * @example
   * 33
   */
  inPacketCount?: number;
  /**
   * @remarks
   * The number of inbound repeated packets.
   * 
   * @example
   * 0
   */
  inRetranCount?: number;
  /**
   * @remarks
   * The ID of the instance to which the local IP address belongs.
   * 
   * @example
   * eip-sample*
   */
  instanceId?: string;
  /**
   * @remarks
   * The remote city. In most cases, this parameter is empty if you set **OtherCountry** to a country except China.
   * 
   * @example
   * Austin
   */
  otherCity?: string;
  /**
   * @remarks
   * The remote country or region.
   * 
   * @example
   * United States
   */
  otherCountry?: string;
  /**
   * @remarks
   * The remote IP address.
   * 
   * @example
   * 122.112.XX.XX
   */
  otherIp?: string;
  /**
   * @remarks
   * The remote ISP.
   * 
   * @example
   * amazon.com
   */
  otherIsp?: string;
  /**
   * @remarks
   * The remote port.
   * 
   * @example
   * 40002
   */
  otherPort?: string;
  /**
   * @remarks
   * The service code of the instance to which the remote IP address belongs. If the IP address is not on the cloud, this parameter is empty.
   * 
   * @example
   * ECS
   */
  otherProduct?: string;
  /**
   * @remarks
   * The remote province. In most cases, this parameter is empty if you set **OtherCountry** to a country except China.
   * 
   * @example
   * Texas
   */
  otherProvince?: string;
  /**
   * @remarks
   * The outbound traffic volume. Unit: bytes.
   * 
   * @example
   * 66
   */
  outByteCount?: number;
  /**
   * @remarks
   * The number of disordered packets.
   * 
   * @example
   * 1
   */
  outOrderCount?: number;
  /**
   * @remarks
   * The number of outbound disordered packets.
   * 
   * @example
   * 1
   */
  outOutOrderCount?: number;
  /**
   * @remarks
   * The number of outbound packets.
   * 
   * @example
   * 22
   */
  outPacketCount?: number;
  /**
   * @remarks
   * The number of outbound repeated packets.
   * 
   * @example
   * 1
   */
  outRetranCount?: number;
  /**
   * @remarks
   * The number of packets.
   * 
   * @example
   * 66
   */
  packetCount?: number;
  /**
   * @remarks
   * The protocol number.
   * 
   * @example
   * 6
   */
  protocol?: string;
  /**
   * @remarks
   * The retransmission rate of TCP packets.
   * 
   * @example
   * 0.1
   */
  retransmitRate?: number;
  /**
   * @remarks
   * The round-trip time (RTT). Unit: milliseconds.
   * 
   * @example
   * 10000
   */
  rtt?: number;
  static names(): { [key: string]: string } {
    return {
      accessRegion: 'AccessRegion',
      beginTime: 'BeginTime',
      byteCount: 'ByteCount',
      cloudCity: 'CloudCity',
      cloudCountry: 'CloudCountry',
      cloudIp: 'CloudIp',
      cloudIsp: 'CloudIsp',
      cloudPort: 'CloudPort',
      cloudProduct: 'CloudProduct',
      cloudProvince: 'CloudProvince',
      direction: 'Direction',
      inByteCount: 'InByteCount',
      inOutOrderCount: 'InOutOrderCount',
      inPacketCount: 'InPacketCount',
      inRetranCount: 'InRetranCount',
      instanceId: 'InstanceId',
      otherCity: 'OtherCity',
      otherCountry: 'OtherCountry',
      otherIp: 'OtherIp',
      otherIsp: 'OtherIsp',
      otherPort: 'OtherPort',
      otherProduct: 'OtherProduct',
      otherProvince: 'OtherProvince',
      outByteCount: 'OutByteCount',
      outOrderCount: 'OutOrderCount',
      outOutOrderCount: 'OutOutOrderCount',
      outPacketCount: 'OutPacketCount',
      outRetranCount: 'OutRetranCount',
      packetCount: 'PacketCount',
      protocol: 'Protocol',
      retransmitRate: 'RetransmitRate',
      rtt: 'Rtt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegion: 'string',
      beginTime: 'string',
      byteCount: 'number',
      cloudCity: 'string',
      cloudCountry: 'string',
      cloudIp: 'string',
      cloudIsp: 'string',
      cloudPort: 'string',
      cloudProduct: 'string',
      cloudProvince: 'string',
      direction: 'string',
      inByteCount: 'number',
      inOutOrderCount: 'number',
      inPacketCount: 'number',
      inRetranCount: 'number',
      instanceId: 'string',
      otherCity: 'string',
      otherCountry: 'string',
      otherIp: 'string',
      otherIsp: 'string',
      otherPort: 'string',
      otherProduct: 'string',
      otherProvince: 'string',
      outByteCount: 'number',
      outOrderCount: 'number',
      outOutOrderCount: 'number',
      outPacketCount: 'number',
      outRetranCount: 'number',
      packetCount: 'number',
      protocol: 'string',
      retransmitRate: 'number',
      rtt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatTopNResponseBodyNatGatewayTopN extends $tea.Model {
  /**
   * @remarks
   * The number of concurrent connections. Unit: connections.
   * 
   * @example
   * 8
   */
  activeSessionCount?: number;
  /**
   * @remarks
   * The inbound data transfer. Unit: bit/s.
   * 
   * @example
   * 100
   */
  inBps?: number;
  /**
   * @remarks
   * This field is reserved and not in use.
   * 
   * @example
   * 10
   */
  inFlowPerMinute?: number;
  /**
   * @remarks
   * The inbound packet forwarding rate. Unit: packets per second.
   * 
   * @example
   * 10
   */
  inPps?: number;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.168.156.101
   */
  ip?: string;
  /**
   * @remarks
   * The new connection creation rate. Unit: connections per second.
   * 
   * @example
   * 2
   */
  newSessionPerSecond?: number;
  /**
   * @remarks
   * The outbound data transfer. Unit: bit/s.
   * 
   * @example
   * 200
   */
  outBps?: number;
  /**
   * @remarks
   * This field is reserved and not in use.
   * 
   * @example
   * 10
   */
  outFlowPerMinute?: number;
  /**
   * @remarks
   * The outbound packet forwarding rate. Unit: packets per second.
   * 
   * @example
   * 20
   */
  outPps?: number;
  static names(): { [key: string]: string } {
    return {
      activeSessionCount: 'ActiveSessionCount',
      inBps: 'InBps',
      inFlowPerMinute: 'InFlowPerMinute',
      inPps: 'InPps',
      ip: 'Ip',
      newSessionPerSecond: 'NewSessionPerSecond',
      outBps: 'OutBps',
      outFlowPerMinute: 'OutFlowPerMinute',
      outPps: 'OutPps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeSessionCount: 'number',
      inBps: 'number',
      inFlowPerMinute: 'number',
      inPps: 'number',
      ip: 'string',
      newSessionPerSecond: 'number',
      outBps: 'number',
      outFlowPerMinute: 'number',
      outPps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkMetricsRequestDimensions extends $tea.Model {
  /**
   * @example
   * instanceId
   */
  name?: string;
  /**
   * @example
   * eip-sample*
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkMetricsResponseBodyDataMetrics extends $tea.Model {
  /**
   * @example
   * 1690684091100
   */
  timeStamp?: number;
  /**
   * @example
   * 88
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkMetricsResponseBodyData extends $tea.Model {
  metrics?: GetNisNetworkMetricsResponseBodyDataMetrics[];
  /**
   * @example
   * Bits/Second
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': GetNisNetworkMetricsResponseBodyDataMetrics },
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkRankingRequestFilter extends $tea.Model {
  /**
   * @example
   * instanceId
   */
  name?: string;
  /**
   * @example
   * lb-2zxxxxz1d
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkRankingResponseBodyData extends $tea.Model {
  /**
   * @example
   * 66
   */
  activeSessionCount?: number;
  /**
   * @example
   * 129103
   */
  asn?: string;
  /**
   * @example
   * tr-sample*
   */
  attachmentId?: string;
  /**
   * @example
   * cbwp-sample*
   */
  bandwidthPackageId?: string;
  /**
   * @example
   * 1024
   */
  byteCount?: number;
  city?: string;
  country?: string;
  /**
   * @example
   * 2.2.XX.XX
   */
  destinationIp?: string;
  destinationIsp?: string;
  /**
   * @example
   * 80
   */
  destinationPort?: string;
  /**
   * @example
   * cn-hangzhou
   */
  destinationRegionNo?: string;
  /**
   * @example
   * cn-hangzhou-b
   */
  destinationZone?: string;
  /**
   * @example
   * 120.238.XX.XX
   */
  IP?: string;
  /**
   * @example
   * 10
   */
  inBps?: number;
  /**
   * @example
   * 3
   */
  inPps?: number;
  /**
   * @example
   * eip-sample*
   */
  instanceId?: string;
  isp?: string;
  /**
   * @example
   * 18
   */
  newSessionPerSecond?: number;
  /**
   * @example
   * 88
   */
  outBps?: number;
  /**
   * @example
   * 8
   */
  outPps?: number;
  /**
   * @example
   * 66
   */
  packetCount?: number;
  /**
   * @example
   * 6
   */
  protocol?: string;
  province?: string;
  /**
   * @example
   * 23
   */
  RTT?: number;
  /**
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @example
   * 0.1
   */
  retransmitRate?: number;
  /**
   * @example
   * 42.120.XX.XX
   */
  sourceIp?: string;
  sourceIsp?: string;
  /**
   * @example
   * 443
   */
  sourcePort?: string;
  /**
   * @example
   * cn-hangzhou-a
   */
  sourceZone?: string;
  /**
   * @example
   * vbr-sample*
   */
  vbrId?: string;
  static names(): { [key: string]: string } {
    return {
      activeSessionCount: 'ActiveSessionCount',
      asn: 'Asn',
      attachmentId: 'AttachmentId',
      bandwidthPackageId: 'BandwidthPackageId',
      byteCount: 'ByteCount',
      city: 'City',
      country: 'Country',
      destinationIp: 'DestinationIp',
      destinationIsp: 'DestinationIsp',
      destinationPort: 'DestinationPort',
      destinationRegionNo: 'DestinationRegionNo',
      destinationZone: 'DestinationZone',
      IP: 'IP',
      inBps: 'InBps',
      inPps: 'InPps',
      instanceId: 'InstanceId',
      isp: 'Isp',
      newSessionPerSecond: 'NewSessionPerSecond',
      outBps: 'OutBps',
      outPps: 'OutPps',
      packetCount: 'PacketCount',
      protocol: 'Protocol',
      province: 'Province',
      RTT: 'RTT',
      regionNo: 'RegionNo',
      retransmitRate: 'RetransmitRate',
      sourceIp: 'SourceIp',
      sourceIsp: 'SourceIsp',
      sourcePort: 'SourcePort',
      sourceZone: 'SourceZone',
      vbrId: 'VbrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeSessionCount: 'number',
      asn: 'string',
      attachmentId: 'string',
      bandwidthPackageId: 'string',
      byteCount: 'number',
      city: 'string',
      country: 'string',
      destinationIp: 'string',
      destinationIsp: 'string',
      destinationPort: 'string',
      destinationRegionNo: 'string',
      destinationZone: 'string',
      IP: 'string',
      inBps: 'number',
      inPps: 'number',
      instanceId: 'string',
      isp: 'string',
      newSessionPerSecond: 'number',
      outBps: 'number',
      outPps: 'number',
      packetCount: 'number',
      protocol: 'string',
      province: 'string',
      RTT: 'number',
      regionNo: 'string',
      retransmitRate: 'number',
      sourceIp: 'string',
      sourceIsp: 'string',
      sourcePort: 'string',
      sourceZone: 'string',
      vbrId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransitRouterFlowTopNResponseBodyTransitRouterFlowTopN extends $tea.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 118639953821xxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the CEN bandwidth plan.
   * 
   * @example
   * cenbwp-ia8kw1zjv4hyal****
   */
  bandwithPackageId?: string;
  /**
   * @remarks
   * The total volume of traffic in the specified time range.
   * 
   * @example
   * 188
   */
  bytes?: number;
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-ia8kw1zjv4hyal****
   */
  cenId?: string;
  /**
   * @remarks
   * The end of the time range that you queried. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-01-31T06:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The remote IP address.
   * 
   * @example
   * 47.216.XX.XX
   */
  otherIp?: string;
  /**
   * @remarks
   * The remote port.
   * 
   * @example
   * 53470
   */
  otherPort?: string;
  /**
   * @remarks
   * The remote region where the **remote IP address** resides.
   * 
   * @example
   * ap-southeast-1
   */
  otherRegion?: string;
  /**
   * @remarks
   * The total number of packets in the specified time range.
   * 
   * @example
   * 88
   */
  packets?: number;
  /**
   * @remarks
   * The protocol number.
   * 
   * @example
   * 6
   */
  protocol?: string;
  /**
   * @remarks
   * The beginning of the time range that you queried. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-01-31T05:40:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The local IP address.
   * 
   * @example
   * 1.8.XX.XX
   */
  thisIp?: string;
  /**
   * @remarks
   * The local port.
   * 
   * @example
   * 80
   */
  thisPort?: string;
  /**
   * @remarks
   * The local region where the **local IP address** resides.
   * 
   * @example
   * cn-shanghai
   */
  thisRegion?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      bandwithPackageId: 'BandwithPackageId',
      bytes: 'Bytes',
      cenId: 'CenId',
      endTime: 'EndTime',
      otherIp: 'OtherIp',
      otherPort: 'OtherPort',
      otherRegion: 'OtherRegion',
      packets: 'Packets',
      protocol: 'Protocol',
      startTime: 'StartTime',
      thisIp: 'ThisIp',
      thisPort: 'ThisPort',
      thisRegion: 'ThisRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      bandwithPackageId: 'string',
      bytes: 'number',
      cenId: 'string',
      endTime: 'string',
      otherIp: 'string',
      otherPort: 'string',
      otherRegion: 'string',
      packets: 'number',
      protocol: 'string',
      startTime: 'string',
      thisIp: 'string',
      thisPort: 'string',
      thisRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVbrFlowTopNResponseBodyVirtualBorderRouterFlowlogTopN extends $tea.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 156237031628****
   */
  accountId?: string;
  /**
   * @remarks
   * The CEN connection ID.
   * 
   * @example
   * tr-attach-u6v1j3jre0fe9h****
   */
  attachmentId?: string;
  /**
   * @remarks
   * The total volume of traffic in the specified time range.
   * 
   * @example
   * 108
   */
  bytes?: number;
  /**
   * @remarks
   * The local IP address.
   * 
   * @example
   * 120.24.X.X
   */
  cloudIp?: string;
  /**
   * @remarks
   * The local port.
   * 
   * @example
   * 80
   */
  cloudPort?: string;
  /**
   * @remarks
   * The local region where the local IP address resides.
   * 
   * @example
   * cn-shanghai
   */
  cloudRegion?: string;
  /**
   * @remarks
   * The remote IP address.
   * 
   * @example
   * 222.85.X.X
   */
  otherIp?: string;
  /**
   * @remarks
   * The remote port.
   * 
   * @example
   * 10965
   */
  otherPort?: string;
  /**
   * @remarks
   * The total number of packets in the specified time range.
   * 
   * @example
   * 66
   */
  packets?: number;
  /**
   * @remarks
   * The protocol number.
   * 
   * @example
   * 6
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the VBR that is associated with the Express Connect circuit.
   * 
   * @example
   * vbr-k1atj46citwuek42j****
   */
  virtualBorderRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      attachmentId: 'AttachmentId',
      bytes: 'Bytes',
      cloudIp: 'CloudIp',
      cloudPort: 'CloudPort',
      cloudRegion: 'CloudRegion',
      otherIp: 'OtherIp',
      otherPort: 'OtherPort',
      packets: 'Packets',
      protocol: 'Protocol',
      virtualBorderRouterId: 'VirtualBorderRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      attachmentId: 'string',
      bytes: 'number',
      cloudIp: 'string',
      cloudPort: 'string',
      cloudRegion: 'string',
      otherIp: 'string',
      otherPort: 'string',
      packets: 'number',
      protocol: 'string',
      virtualBorderRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNisInspectionResourceTypeResponseBodyResourceTypeList extends $tea.Model {
  /**
   * @example
   * EIP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNisInspectionTaskReportsResponseBodyInspectionReportList extends $tea.Model {
  /**
   * @example
   * nir-7c3dd178738a429abe6d
   */
  inspectionReportId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionReportId: 'InspectionReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionReportId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNisInspectionTasksResponseBodyInspectionTaskList extends $tea.Model {
  /**
   * @example
   * 2024-06-18 00:14:46
   */
  createTime?: string;
  inspectionName?: string;
  /**
   * @example
   * basic
   */
  inspectionProject?: string;
  /**
   * @example
   * ni-8svm******hzr7fh79
   */
  inspectionTaskId?: string;
  /**
   * @example
   * nir-b4c4c9******8a25e
   */
  lastUpdateReportId?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      inspectionName: 'InspectionName',
      inspectionProject: 'InspectionProject',
      inspectionTaskId: 'InspectionTaskId',
      lastUpdateReportId: 'LastUpdateReportId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      inspectionName: 'string',
      inspectionProject: 'string',
      inspectionTaskId: 'string',
      lastUpdateReportId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("nis", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Initiates a task for analyzing network reachability.
   * 
   * @remarks
   * You can call this operation to initiate a task for analyzing network reachability by specifying only the information about the source and destination. You do not need to create a network path for reachability analysis. The analysis result is not recorded in the system. If you want to record the path parameters and analysis result in the Network Intelligence Service (NIS) console, we recommend that you call the **createNetworkReachableAnalysis** operation.
   * 
   * @param request - CreateAndAnalyzeNetworkPathRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAndAnalyzeNetworkPathResponse
   */
  async createAndAnalyzeNetworkPathWithOptions(request: CreateAndAnalyzeNetworkPathRequest, runtime: $Util.RuntimeOptions): Promise<CreateAndAnalyzeNetworkPathResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAndAnalyzeNetworkPath",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAndAnalyzeNetworkPathResponse>(await this.callApi(params, req, runtime), new CreateAndAnalyzeNetworkPathResponse({}));
  }

  /**
   * Initiates a task for analyzing network reachability.
   * 
   * @remarks
   * You can call this operation to initiate a task for analyzing network reachability by specifying only the information about the source and destination. You do not need to create a network path for reachability analysis. The analysis result is not recorded in the system. If you want to record the path parameters and analysis result in the Network Intelligence Service (NIS) console, we recommend that you call the **createNetworkReachableAnalysis** operation.
   * 
   * @param request - CreateAndAnalyzeNetworkPathRequest
   * @returns CreateAndAnalyzeNetworkPathResponse
   */
  async createAndAnalyzeNetworkPath(request: CreateAndAnalyzeNetworkPathRequest): Promise<CreateAndAnalyzeNetworkPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAndAnalyzeNetworkPathWithOptions(request, runtime);
  }

  /**
   * Creates a network path in the cloud for reachability analysis.
   * 
   * @remarks
   *   You can call the **CreateNetworkPath** operation to create network paths in multiple networking scenarios and between multiple resources. After a path is created, the path parameters are saved for repeated analysis.
   * *   You can create up to 100 network paths within one Alibaba Cloud account.
   * 
   * @param request - CreateNetworkPathRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkPathResponse
   */
  async createNetworkPathWithOptions(request: CreateNetworkPathRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkPathResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkPathDescription)) {
      query["NetworkPathDescription"] = request.networkPathDescription;
    }

    if (!Util.isUnset(request.networkPathName)) {
      query["NetworkPathName"] = request.networkPathName;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.sourceIpAddress)) {
      query["SourceIpAddress"] = request.sourceIpAddress;
    }

    if (!Util.isUnset(request.sourcePort)) {
      query["SourcePort"] = request.sourcePort;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetIpAddress)) {
      query["TargetIpAddress"] = request.targetIpAddress;
    }

    if (!Util.isUnset(request.targetPort)) {
      query["TargetPort"] = request.targetPort;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNetworkPath",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNetworkPathResponse>(await this.callApi(params, req, runtime), new CreateNetworkPathResponse({}));
  }

  /**
   * Creates a network path in the cloud for reachability analysis.
   * 
   * @remarks
   *   You can call the **CreateNetworkPath** operation to create network paths in multiple networking scenarios and between multiple resources. After a path is created, the path parameters are saved for repeated analysis.
   * *   You can create up to 100 network paths within one Alibaba Cloud account.
   * 
   * @param request - CreateNetworkPathRequest
   * @returns CreateNetworkPathResponse
   */
  async createNetworkPath(request: CreateNetworkPathRequest): Promise<CreateNetworkPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkPathWithOptions(request, runtime);
  }

  /**
   * Creates a task for analyzing network reachability.
   * 
   * @remarks
   *   The **CreateNetworkReachableAnalysis** operation is used to create a task for analyzing the reachability of the network path that is created by calling the **CreateNetworkPath** operation and record the analysis results.
   * *   The **CreateNetworkReachableAnalysis** operation can be called to repeatedly analyze the reachability of a network path.
   * *   You can create up to 1,000 reachability analysis records within one Alibaba Cloud account.
   * 
   * @param request - CreateNetworkReachableAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkReachableAnalysisResponse
   */
  async createNetworkReachableAnalysisWithOptions(request: CreateNetworkReachableAnalysisRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkReachableAnalysisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkPathId)) {
      query["NetworkPathId"] = request.networkPathId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNetworkReachableAnalysis",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNetworkReachableAnalysisResponse>(await this.callApi(params, req, runtime), new CreateNetworkReachableAnalysisResponse({}));
  }

  /**
   * Creates a task for analyzing network reachability.
   * 
   * @remarks
   *   The **CreateNetworkReachableAnalysis** operation is used to create a task for analyzing the reachability of the network path that is created by calling the **CreateNetworkPath** operation and record the analysis results.
   * *   The **CreateNetworkReachableAnalysis** operation can be called to repeatedly analyze the reachability of a network path.
   * *   You can create up to 1,000 reachability analysis records within one Alibaba Cloud account.
   * 
   * @param request - CreateNetworkReachableAnalysisRequest
   * @returns CreateNetworkReachableAnalysisResponse
   */
  async createNetworkReachableAnalysis(request: CreateNetworkReachableAnalysisRequest): Promise<CreateNetworkReachableAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkReachableAnalysisWithOptions(request, runtime);
  }

  /**
   * Deletes a network path.
   * 
   * @param tmpReq - DeleteNetworkPathRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkPathResponse
   */
  async deleteNetworkPathWithOptions(tmpReq: DeleteNetworkPathRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkPathResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteNetworkPathShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.networkPathIds)) {
      request.networkPathIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networkPathIds, "NetworkPathIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.networkPathIdsShrink)) {
      query["NetworkPathIds"] = request.networkPathIdsShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNetworkPath",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNetworkPathResponse>(await this.callApi(params, req, runtime), new DeleteNetworkPathResponse({}));
  }

  /**
   * Deletes a network path.
   * 
   * @param request - DeleteNetworkPathRequest
   * @returns DeleteNetworkPathResponse
   */
  async deleteNetworkPath(request: DeleteNetworkPathRequest): Promise<DeleteNetworkPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkPathWithOptions(request, runtime);
  }

  /**
   * Deletes a task for analyzing network reachability.
   * 
   * @param tmpReq - DeleteNetworkReachableAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkReachableAnalysisResponse
   */
  async deleteNetworkReachableAnalysisWithOptions(tmpReq: DeleteNetworkReachableAnalysisRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkReachableAnalysisResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteNetworkReachableAnalysisShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.networkReachableAnalysisIds)) {
      request.networkReachableAnalysisIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networkReachableAnalysisIds, "NetworkReachableAnalysisIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.networkReachableAnalysisIdsShrink)) {
      query["NetworkReachableAnalysisIds"] = request.networkReachableAnalysisIdsShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNetworkReachableAnalysis",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNetworkReachableAnalysisResponse>(await this.callApi(params, req, runtime), new DeleteNetworkReachableAnalysisResponse({}));
  }

  /**
   * Deletes a task for analyzing network reachability.
   * 
   * @param request - DeleteNetworkReachableAnalysisRequest
   * @returns DeleteNetworkReachableAnalysisResponse
   */
  async deleteNetworkReachableAnalysis(request: DeleteNetworkReachableAnalysisRequest): Promise<DeleteNetworkReachableAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkReachableAnalysisWithOptions(request, runtime);
  }

  /**
   * 删除报告
   * 
   * @param request - DeleteNisInspectionReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNisInspectionReportResponse
   */
  async deleteNisInspectionReportWithOptions(request: DeleteNisInspectionReportRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNisInspectionReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inspectionReportId)) {
      query["InspectionReportId"] = request.inspectionReportId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNisInspectionReport",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNisInspectionReportResponse>(await this.callApi(params, req, runtime), new DeleteNisInspectionReportResponse({}));
  }

  /**
   * 删除报告
   * 
   * @param request - DeleteNisInspectionReportRequest
   * @returns DeleteNisInspectionReportResponse
   */
  async deleteNisInspectionReport(request: DeleteNisInspectionReportRequest): Promise<DeleteNisInspectionReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNisInspectionReportWithOptions(request, runtime);
  }

  /**
   * 删除巡检任务
   * 
   * @param request - DeleteNisInspectionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNisInspectionTaskResponse
   */
  async deleteNisInspectionTaskWithOptions(request: DeleteNisInspectionTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNisInspectionTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inspectionTaskId)) {
      query["InspectionTaskId"] = request.inspectionTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNisInspectionTask",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNisInspectionTaskResponse>(await this.callApi(params, req, runtime), new DeleteNisInspectionTaskResponse({}));
  }

  /**
   * 删除巡检任务
   * 
   * @param request - DeleteNisInspectionTaskRequest
   * @returns DeleteNisInspectionTaskResponse
   */
  async deleteNisInspectionTask(request: DeleteNisInspectionTaskRequest): Promise<DeleteNisInspectionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNisInspectionTaskWithOptions(request, runtime);
  }

  /**
   * 受影响资源列表
   * 
   * @param request - DescribeNisInspectionRecommendationResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNisInspectionRecommendationResourcesResponse
   */
  async describeNisInspectionRecommendationResourcesWithOptions(request: DescribeNisInspectionRecommendationResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNisInspectionRecommendationResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inspectionReportId)) {
      query["InspectionReportId"] = request.inspectionReportId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.recommendationCode)) {
      query["RecommendationCode"] = request.recommendationCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNisInspectionRecommendationResources",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNisInspectionRecommendationResourcesResponse>(await this.callApi(params, req, runtime), new DescribeNisInspectionRecommendationResourcesResponse({}));
  }

  /**
   * 受影响资源列表
   * 
   * @param request - DescribeNisInspectionRecommendationResourcesRequest
   * @returns DescribeNisInspectionRecommendationResourcesResponse
   */
  async describeNisInspectionRecommendationResources(request: DescribeNisInspectionRecommendationResourcesRequest): Promise<DescribeNisInspectionRecommendationResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNisInspectionRecommendationResourcesWithOptions(request, runtime);
  }

  /**
   * 报告巡检项列表
   * 
   * @param tmpReq - DescribeNisInspectionReportCheckItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNisInspectionReportCheckItemsResponse
   */
  async describeNisInspectionReportCheckItemsWithOptions(tmpReq: DescribeNisInspectionReportCheckItemsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNisInspectionReportCheckItemsResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeNisInspectionReportCheckItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceType)) {
      request.resourceTypeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceType, "ResourceType", "json");
    }

    if (!Util.isUnset(tmpReq.riskLevel)) {
      request.riskLevelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.riskLevel, "RiskLevel", "json");
    }

    let query = { };
    if (!Util.isUnset(request.categoryCode)) {
      query["CategoryCode"] = request.categoryCode;
    }

    if (!Util.isUnset(request.inspectionReportId)) {
      query["InspectionReportId"] = request.inspectionReportId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceTypeShrink)) {
      query["ResourceType"] = request.resourceTypeShrink;
    }

    if (!Util.isUnset(request.riskLevelShrink)) {
      query["RiskLevel"] = request.riskLevelShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNisInspectionReportCheckItems",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNisInspectionReportCheckItemsResponse>(await this.callApi(params, req, runtime), new DescribeNisInspectionReportCheckItemsResponse({}));
  }

  /**
   * 报告巡检项列表
   * 
   * @param request - DescribeNisInspectionReportCheckItemsRequest
   * @returns DescribeNisInspectionReportCheckItemsResponse
   */
  async describeNisInspectionReportCheckItems(request: DescribeNisInspectionReportCheckItemsRequest): Promise<DescribeNisInspectionReportCheckItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNisInspectionReportCheckItemsWithOptions(request, runtime);
  }

  /**
   * 查询报告状态
   * 
   * @param request - DescribeNisInspectionReportStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNisInspectionReportStatusResponse
   */
  async describeNisInspectionReportStatusWithOptions(request: DescribeNisInspectionReportStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNisInspectionReportStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inspectionReportId)) {
      query["InspectionReportId"] = request.inspectionReportId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNisInspectionReportStatus",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNisInspectionReportStatusResponse>(await this.callApi(params, req, runtime), new DescribeNisInspectionReportStatusResponse({}));
  }

  /**
   * 查询报告状态
   * 
   * @param request - DescribeNisInspectionReportStatusRequest
   * @returns DescribeNisInspectionReportStatusResponse
   */
  async describeNisInspectionReportStatus(request: DescribeNisInspectionReportStatusRequest): Promise<DescribeNisInspectionReportStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNisInspectionReportStatusWithOptions(request, runtime);
  }

  /**
   * 报告总结信息
   * 
   * @param request - DescribeNisInspectionReportSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNisInspectionReportSummaryResponse
   */
  async describeNisInspectionReportSummaryWithOptions(request: DescribeNisInspectionReportSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNisInspectionReportSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inspectionReportId)) {
      query["InspectionReportId"] = request.inspectionReportId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNisInspectionReportSummary",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNisInspectionReportSummaryResponse>(await this.callApi(params, req, runtime), new DescribeNisInspectionReportSummaryResponse({}));
  }

  /**
   * 报告总结信息
   * 
   * @param request - DescribeNisInspectionReportSummaryRequest
   * @returns DescribeNisInspectionReportSummaryResponse
   */
  async describeNisInspectionReportSummary(request: DescribeNisInspectionReportSummaryRequest): Promise<DescribeNisInspectionReportSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNisInspectionReportSummaryWithOptions(request, runtime);
  }

  /**
   * 查询巡检任务
   * 
   * @param request - DescribeNisInspectionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNisInspectionTaskResponse
   */
  async describeNisInspectionTaskWithOptions(request: DescribeNisInspectionTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNisInspectionTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inspectionTaskId)) {
      query["InspectionTaskId"] = request.inspectionTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNisInspectionTask",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNisInspectionTaskResponse>(await this.callApi(params, req, runtime), new DescribeNisInspectionTaskResponse({}));
  }

  /**
   * 查询巡检任务
   * 
   * @param request - DescribeNisInspectionTaskRequest
   * @returns DescribeNisInspectionTaskResponse
   */
  async describeNisInspectionTask(request: DescribeNisInspectionTaskRequest): Promise<DescribeNisInspectionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNisInspectionTaskWithOptions(request, runtime);
  }

  /**
   * Queries the rankings of Internet traffic data in the form of 1-tuple, 2-tuple, or 5-tuple. Internet traffic data can be ranked by metrics such as traffic volumes and the number of packets.
   * 
   * @deprecated OpenAPI GetInternetTuple is deprecated, please use nis::2021-12-16::GetNisNetworkRanking instead.
   * 
   * @param tmpReq - GetInternetTupleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInternetTupleResponse
   */
  // Deprecated
  async getInternetTupleWithOptions(tmpReq: GetInternetTupleRequest, runtime: $Util.RuntimeOptions): Promise<GetInternetTupleResponse> {
    Util.validateModel(tmpReq);
    let request = new GetInternetTupleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.cloudIpList)) {
      request.cloudIpListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cloudIpList, "CloudIpList", "json");
    }

    if (!Util.isUnset(tmpReq.instanceList)) {
      request.instanceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceList, "InstanceList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountIds)) {
      query["AccountIds"] = request.accountIds;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.cloudIp)) {
      query["CloudIp"] = request.cloudIp;
    }

    if (!Util.isUnset(request.cloudIpListShrink)) {
      query["CloudIpList"] = request.cloudIpListShrink;
    }

    if (!Util.isUnset(request.cloudIsp)) {
      query["CloudIsp"] = request.cloudIsp;
    }

    if (!Util.isUnset(request.cloudPort)) {
      query["CloudPort"] = request.cloudPort;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceListShrink)) {
      query["InstanceList"] = request.instanceListShrink;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.otherCity)) {
      query["OtherCity"] = request.otherCity;
    }

    if (!Util.isUnset(request.otherCountry)) {
      query["OtherCountry"] = request.otherCountry;
    }

    if (!Util.isUnset(request.otherIp)) {
      query["OtherIp"] = request.otherIp;
    }

    if (!Util.isUnset(request.otherIsp)) {
      query["OtherIsp"] = request.otherIsp;
    }

    if (!Util.isUnset(request.otherPort)) {
      query["OtherPort"] = request.otherPort;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.topN)) {
      query["TopN"] = request.topN;
    }

    if (!Util.isUnset(request.tupleType)) {
      query["TupleType"] = request.tupleType;
    }

    if (!Util.isUnset(request.useMultiAccount)) {
      query["UseMultiAccount"] = request.useMultiAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInternetTuple",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInternetTupleResponse>(await this.callApi(params, req, runtime), new GetInternetTupleResponse({}));
  }

  /**
   * Queries the rankings of Internet traffic data in the form of 1-tuple, 2-tuple, or 5-tuple. Internet traffic data can be ranked by metrics such as traffic volumes and the number of packets.
   * 
   * @deprecated OpenAPI GetInternetTuple is deprecated, please use nis::2021-12-16::GetNisNetworkRanking instead.
   * 
   * @param request - GetInternetTupleRequest
   * @returns GetInternetTupleResponse
   */
  // Deprecated
  async getInternetTuple(request: GetInternetTupleRequest): Promise<GetInternetTupleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInternetTupleWithOptions(request, runtime);
  }

  /**
   * Queries the real-time SNAT performance ranking of a NAT gateway.
   * 
   * @deprecated OpenAPI GetNatTopN is deprecated, please use nis::2021-12-16::GetNisNetworkRanking instead.
   * 
   * @param request - GetNatTopNRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNatTopNResponse
   */
  // Deprecated
  async getNatTopNWithOptions(request: GetNatTopNRequest, runtime: $Util.RuntimeOptions): Promise<GetNatTopNResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.topN)) {
      query["TopN"] = request.topN;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNatTopN",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNatTopNResponse>(await this.callApi(params, req, runtime), new GetNatTopNResponse({}));
  }

  /**
   * Queries the real-time SNAT performance ranking of a NAT gateway.
   * 
   * @deprecated OpenAPI GetNatTopN is deprecated, please use nis::2021-12-16::GetNisNetworkRanking instead.
   * 
   * @param request - GetNatTopNRequest
   * @returns GetNatTopNResponse
   */
  // Deprecated
  async getNatTopN(request: GetNatTopNRequest): Promise<GetNatTopNResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNatTopNWithOptions(request, runtime);
  }

  /**
   * Obtains the results of network reachability analysis.
   * 
   * @remarks
   * *GetNetworkReachableAnalysis** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can query the state of the task for analyzing network reachability.
   * *   The **init** state indicates that the task is in progress.
   * *   The **finish** state indicates that the task is complete. In this state, you can obtain the analysis result.
   * 
   * @param request - GetNetworkReachableAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetworkReachableAnalysisResponse
   */
  async getNetworkReachableAnalysisWithOptions(request: GetNetworkReachableAnalysisRequest, runtime: $Util.RuntimeOptions): Promise<GetNetworkReachableAnalysisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkReachableAnalysisId)) {
      query["NetworkReachableAnalysisId"] = request.networkReachableAnalysisId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNetworkReachableAnalysis",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNetworkReachableAnalysisResponse>(await this.callApi(params, req, runtime), new GetNetworkReachableAnalysisResponse({}));
  }

  /**
   * Obtains the results of network reachability analysis.
   * 
   * @remarks
   * *GetNetworkReachableAnalysis** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can query the state of the task for analyzing network reachability.
   * *   The **init** state indicates that the task is in progress.
   * *   The **finish** state indicates that the task is complete. In this state, you can obtain the analysis result.
   * 
   * @param request - GetNetworkReachableAnalysisRequest
   * @returns GetNetworkReachableAnalysisResponse
   */
  async getNetworkReachableAnalysis(request: GetNetworkReachableAnalysisRequest): Promise<GetNetworkReachableAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNetworkReachableAnalysisWithOptions(request, runtime);
  }

  /**
   * 获取云网络指标趋势
   * 
   * @param tmpReq - GetNisNetworkMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNisNetworkMetricsResponse
   */
  async getNisNetworkMetricsWithOptions(tmpReq: GetNisNetworkMetricsRequest, runtime: $Util.RuntimeOptions): Promise<GetNisNetworkMetricsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetNisNetworkMetricsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dimensions)) {
      request.dimensionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dimensions, "Dimensions", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountIds)) {
      query["AccountIds"] = request.accountIds;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.dimensionsShrink)) {
      query["Dimensions"] = request.dimensionsShrink;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.scanBy)) {
      query["ScanBy"] = request.scanBy;
    }

    if (!Util.isUnset(request.useCrossAccount)) {
      query["UseCrossAccount"] = request.useCrossAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNisNetworkMetrics",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNisNetworkMetricsResponse>(await this.callApi(params, req, runtime), new GetNisNetworkMetricsResponse({}));
  }

  /**
   * 获取云网络指标趋势
   * 
   * @param request - GetNisNetworkMetricsRequest
   * @returns GetNisNetworkMetricsResponse
   */
  async getNisNetworkMetrics(request: GetNisNetworkMetricsRequest): Promise<GetNisNetworkMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNisNetworkMetricsWithOptions(request, runtime);
  }

  /**
   * 获取云网络指标排名
   * 
   * @param tmpReq - GetNisNetworkRankingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNisNetworkRankingResponse
   */
  async getNisNetworkRankingWithOptions(tmpReq: GetNisNetworkRankingRequest, runtime: $Util.RuntimeOptions): Promise<GetNisNetworkRankingResponse> {
    Util.validateModel(tmpReq);
    let request = new GetNisNetworkRankingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountIds)) {
      query["AccountIds"] = request.accountIds;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.filterShrink)) {
      query["Filter"] = request.filterShrink;
    }

    if (!Util.isUnset(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.topN)) {
      query["TopN"] = request.topN;
    }

    if (!Util.isUnset(request.useCrossAccount)) {
      query["UseCrossAccount"] = request.useCrossAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNisNetworkRanking",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNisNetworkRankingResponse>(await this.callApi(params, req, runtime), new GetNisNetworkRankingResponse({}));
  }

  /**
   * 获取云网络指标排名
   * 
   * @param request - GetNisNetworkRankingRequest
   * @returns GetNisNetworkRankingResponse
   */
  async getNisNetworkRanking(request: GetNisNetworkRankingRequest): Promise<GetNisNetworkRankingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNisNetworkRankingWithOptions(request, runtime);
  }

  /**
   * Queries the rankings of inter-region traffic data in the form of 1-tuple, 2-tuple, or 5-tuple. Inter-region traffic data can be ranked by metrics such as traffic volumes and the number of packets.
   * 
   * @deprecated OpenAPI GetTransitRouterFlowTopN is deprecated, please use nis::2021-12-16::GetNisNetworkRanking instead.
   * 
   * @param tmpReq - GetTransitRouterFlowTopNRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTransitRouterFlowTopNResponse
   */
  // Deprecated
  async getTransitRouterFlowTopNWithOptions(tmpReq: GetTransitRouterFlowTopNRequest, runtime: $Util.RuntimeOptions): Promise<GetTransitRouterFlowTopNResponse> {
    Util.validateModel(tmpReq);
    let request = new GetTransitRouterFlowTopNShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!Util.isUnset(request.bandwithPackageId)) {
      query["BandwithPackageId"] = request.bandwithPackageId;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.otherIp)) {
      query["OtherIp"] = request.otherIp;
    }

    if (!Util.isUnset(request.otherPort)) {
      query["OtherPort"] = request.otherPort;
    }

    if (!Util.isUnset(request.otherRegion)) {
      query["OtherRegion"] = request.otherRegion;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.thisIp)) {
      query["ThisIp"] = request.thisIp;
    }

    if (!Util.isUnset(request.thisPort)) {
      query["ThisPort"] = request.thisPort;
    }

    if (!Util.isUnset(request.thisRegion)) {
      query["ThisRegion"] = request.thisRegion;
    }

    if (!Util.isUnset(request.topN)) {
      query["TopN"] = request.topN;
    }

    if (!Util.isUnset(request.useMultiAccount)) {
      query["UseMultiAccount"] = request.useMultiAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTransitRouterFlowTopN",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTransitRouterFlowTopNResponse>(await this.callApi(params, req, runtime), new GetTransitRouterFlowTopNResponse({}));
  }

  /**
   * Queries the rankings of inter-region traffic data in the form of 1-tuple, 2-tuple, or 5-tuple. Inter-region traffic data can be ranked by metrics such as traffic volumes and the number of packets.
   * 
   * @deprecated OpenAPI GetTransitRouterFlowTopN is deprecated, please use nis::2021-12-16::GetNisNetworkRanking instead.
   * 
   * @param request - GetTransitRouterFlowTopNRequest
   * @returns GetTransitRouterFlowTopNResponse
   */
  // Deprecated
  async getTransitRouterFlowTopN(request: GetTransitRouterFlowTopNRequest): Promise<GetTransitRouterFlowTopNResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTransitRouterFlowTopNWithOptions(request, runtime);
  }

  /**
   * Queries the rankings of hybrid cloud traffic data in the form of 1-tuple, 2-tuple, or 5-tuple. Hybrid cloud traffic data can be ranked by metrics such as traffic volumes and the number of packets.
   * 
   * @deprecated OpenAPI GetVbrFlowTopN is deprecated, please use nis::2021-12-16::GetNisNetworkRanking instead.
   * 
   * @param tmpReq - GetVbrFlowTopNRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVbrFlowTopNResponse
   */
  // Deprecated
  async getVbrFlowTopNWithOptions(tmpReq: GetVbrFlowTopNRequest, runtime: $Util.RuntimeOptions): Promise<GetVbrFlowTopNResponse> {
    Util.validateModel(tmpReq);
    let request = new GetVbrFlowTopNShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!Util.isUnset(request.attachmentId)) {
      query["AttachmentId"] = request.attachmentId;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cloudIp)) {
      query["CloudIp"] = request.cloudIp;
    }

    if (!Util.isUnset(request.cloudPort)) {
      query["CloudPort"] = request.cloudPort;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.otherIp)) {
      query["OtherIp"] = request.otherIp;
    }

    if (!Util.isUnset(request.otherPort)) {
      query["OtherPort"] = request.otherPort;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.topN)) {
      query["TopN"] = request.topN;
    }

    if (!Util.isUnset(request.useMultiAccount)) {
      query["UseMultiAccount"] = request.useMultiAccount;
    }

    if (!Util.isUnset(request.virtualBorderRouterId)) {
      query["VirtualBorderRouterId"] = request.virtualBorderRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVbrFlowTopN",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVbrFlowTopNResponse>(await this.callApi(params, req, runtime), new GetVbrFlowTopNResponse({}));
  }

  /**
   * Queries the rankings of hybrid cloud traffic data in the form of 1-tuple, 2-tuple, or 5-tuple. Hybrid cloud traffic data can be ranked by metrics such as traffic volumes and the number of packets.
   * 
   * @deprecated OpenAPI GetVbrFlowTopN is deprecated, please use nis::2021-12-16::GetNisNetworkRanking instead.
   * 
   * @param request - GetVbrFlowTopNRequest
   * @returns GetVbrFlowTopNResponse
   */
  // Deprecated
  async getVbrFlowTopN(request: GetVbrFlowTopNRequest): Promise<GetVbrFlowTopNResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVbrFlowTopNWithOptions(request, runtime);
  }

  /**
   * 巡检资源类型列表
   * 
   * @param request - ListNisInspectionResourceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNisInspectionResourceTypeResponse
   */
  async listNisInspectionResourceTypeWithOptions(runtime: $Util.RuntimeOptions): Promise<ListNisInspectionResourceTypeResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListNisInspectionResourceType",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNisInspectionResourceTypeResponse>(await this.callApi(params, req, runtime), new ListNisInspectionResourceTypeResponse({}));
  }

  /**
   * 巡检资源类型列表
   * @returns ListNisInspectionResourceTypeResponse
   */
  async listNisInspectionResourceType(): Promise<ListNisInspectionResourceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNisInspectionResourceTypeWithOptions(runtime);
  }

  /**
   * 查询巡检报告列表
   * 
   * @param request - ListNisInspectionTaskReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNisInspectionTaskReportsResponse
   */
  async listNisInspectionTaskReportsWithOptions(request: ListNisInspectionTaskReportsRequest, runtime: $Util.RuntimeOptions): Promise<ListNisInspectionTaskReportsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inspectionTaskId)) {
      query["InspectionTaskId"] = request.inspectionTaskId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNisInspectionTaskReports",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNisInspectionTaskReportsResponse>(await this.callApi(params, req, runtime), new ListNisInspectionTaskReportsResponse({}));
  }

  /**
   * 查询巡检报告列表
   * 
   * @param request - ListNisInspectionTaskReportsRequest
   * @returns ListNisInspectionTaskReportsResponse
   */
  async listNisInspectionTaskReports(request: ListNisInspectionTaskReportsRequest): Promise<ListNisInspectionTaskReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNisInspectionTaskReportsWithOptions(request, runtime);
  }

  /**
   * 巡检任务列表
   * 
   * @param request - ListNisInspectionTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNisInspectionTasksResponse
   */
  async listNisInspectionTasksWithOptions(request: ListNisInspectionTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListNisInspectionTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inspectionName)) {
      query["InspectionName"] = request.inspectionName;
    }

    if (!Util.isUnset(request.inspectionProject)) {
      query["InspectionProject"] = request.inspectionProject;
    }

    if (!Util.isUnset(request.inspectionTaskId)) {
      query["InspectionTaskId"] = request.inspectionTaskId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNisInspectionTasks",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNisInspectionTasksResponse>(await this.callApi(params, req, runtime), new ListNisInspectionTasksResponse({}));
  }

  /**
   * 巡检任务列表
   * 
   * @param request - ListNisInspectionTasksRequest
   * @returns ListNisInspectionTasksResponse
   */
  async listNisInspectionTasks(request: ListNisInspectionTasksRequest): Promise<ListNisInspectionTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNisInspectionTasksWithOptions(request, runtime);
  }

  /**
   * 请补充描述开启任务
   * 
   * @param request - StartNisInspectionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartNisInspectionTaskResponse
   */
  async startNisInspectionTaskWithOptions(request: StartNisInspectionTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartNisInspectionTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inspectionTaskId)) {
      query["InspectionTaskId"] = request.inspectionTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartNisInspectionTask",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartNisInspectionTaskResponse>(await this.callApi(params, req, runtime), new StartNisInspectionTaskResponse({}));
  }

  /**
   * 请补充描述开启任务
   * 
   * @param request - StartNisInspectionTaskRequest
   * @returns StartNisInspectionTaskResponse
   */
  async startNisInspectionTask(request: StartNisInspectionTaskRequest): Promise<StartNisInspectionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startNisInspectionTaskWithOptions(request, runtime);
  }

  /**
   * 修改巡检项
   * 
   * @param request - UpdateNisInspectionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNisInspectionTaskResponse
   */
  async updateNisInspectionTaskWithOptions(request: UpdateNisInspectionTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNisInspectionTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inspectionTaskId)) {
      query["InspectionTaskId"] = request.inspectionTaskId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNisInspectionTask",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNisInspectionTaskResponse>(await this.callApi(params, req, runtime), new UpdateNisInspectionTaskResponse({}));
  }

  /**
   * 修改巡检项
   * 
   * @param request - UpdateNisInspectionTaskRequest
   * @returns UpdateNisInspectionTaskResponse
   */
  async updateNisInspectionTask(request: UpdateNisInspectionTaskRequest): Promise<UpdateNisInspectionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNisInspectionTaskWithOptions(request, runtime);
  }

}
