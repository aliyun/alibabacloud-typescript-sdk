// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ConfigNetStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The CIDR block of the anti-DDoS diversion instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX/22
   */
  net?: string;
  /**
   * @remarks
   * The regions in which the CIDR block needs to be advertised or withdrawn from advertising. If you leave this parameter empty, the CIDR blocks in all regions are configured.
   * 
   * >  You can call the [QueryNetList](https://help.aliyun.com/document_detail/2639086.html) operation to obtain the regions of the CIDR blocks.
   */
  regions?: string[];
  /**
   * @remarks
   * The ID of the anti-DDoS diversion instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ddos_diversion_public_cn-xxxxxxxxxxxxx
   */
  saleId?: string;
  /**
   * @remarks
   * The status of the CIDR block. Valid values:
   * 
   * *   enable: advertises the CIDR block.
   * *   disable: withdraws the advertising of the CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * enable
   */
  status?: string;
  /**
   * @remarks
   * The subnet CIDR blocks of the CIDR block.
   */
  subNets?: string[];
  static names(): { [key: string]: string } {
    return {
      net: 'Net',
      regions: 'Regions',
      saleId: 'SaleId',
      status: 'Status',
      subNets: 'SubNets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      net: 'string',
      regions: { 'type': 'array', 'itemType': 'string' },
      saleId: 'string',
      status: 'string',
      subNets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigNetStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * *   **200**: The request was successful.
   * *   Other codes: The request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B0949F09-B9C1-1D5E-8F27-0A5BF3CD5D95
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigNetStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigNetStatusResponseBody;
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
      body: ConfigNetStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 100
   */
  num?: number;
  /**
   * @remarks
   * The page number. Default value: 1
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The ID of the anti-DDoS diversion instance.
   * 
   * @example
   * ddos_diversion_public_cn-xxxxxxxxxxxxx
   */
  saleId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - normal
   * - expired
   * - deleting
   * - stopped
   * 
   * @example
   * normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      num: 'Num',
      page: 'Page',
      saleId: 'SaleId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      num: 'number',
      page: 'number',
      saleId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * - 200: The request was successful.
   * - Other codes: The request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned result.
   */
  data?: ListInstanceResponseBodyData;
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B0949F09-B9C1-1D5E-8F27-0A5BF3CD5D95
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceResponseBody;
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
      body: ListInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListRequest extends $tea.Model {
  /**
   * @remarks
   * The primary CIDR block of the anti-DDoS diversion instance for which an extended CIDR block is configured. If no extended CIDR blocks are configured for the anti-DDoS diversion instance, leave this parameter empty.
   * 
   * @example
   * 192.168.XX.XX/22
   */
  mainNet?: string;
  /**
   * @remarks
   * The scheduling mode. Valid values:
   * 
   * - manual: manual scheduling
   * - netflow-auto: automatic scheduling
   * 
   * @example
   * netflow-auto
   */
  mode?: string;
  /**
   * @remarks
   * The CIDR block of the anti-DDoS diversion instance.
   * 
   * 
   * > If no extended CIDR blocks are configured for the anti-DDoS diversion instance, this parameter specifies the CIDR block of the instance. If an extended CIDR block is configured for the anti-DDoS diversion instance, this parameter specifies the extended CIDR block that is configured for the instance. If this parameter is specified, the MainNet parameter is required.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  net?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 100
   */
  num?: number;
  /**
   * @remarks
   * The page number. Default value: 1
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The ID of the anti-DDoS diversion instance.
   * 
   * @example
   * ddos_diversion_public_cn-xxxxxxxxxxxxx
   */
  saleId?: string;
  static names(): { [key: string]: string } {
    return {
      mainNet: 'MainNet',
      mode: 'Mode',
      net: 'Net',
      num: 'Num',
      page: 'Page',
      saleId: 'SaleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainNet: 'string',
      mode: 'string',
      net: 'string',
      num: 'number',
      page: 'number',
      saleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * - 200: The request was successful.
   * - Other codes: The request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The CIDR blocks.
   */
  data?: QueryNetListResponseBodyData;
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 24B652B5-AEFF-3F03-9114-00D053C42277
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: QueryNetListResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryNetListResponseBody;
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
      body: QueryNetListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyDataInstancesSpec extends $tea.Model {
  /**
   * @remarks
   * The region of the asset.
   * 
   * @example
   * international_and_hmt
   */
  coverage?: string;
  /**
   * @remarks
   * The diversion mode. Valid values: on-demand always-on
   * 
   * @example
   * on-demand
   */
  diversionType?: string;
  /**
   * @remarks
   * The mitigation plan.
   * 
   * @example
   * enterprise
   */
  edition?: string;
  /**
   * @remarks
   * The number of data centers. Valid values: 1 to 10.
   * 
   * @example
   * 1
   */
  idcNumbers?: string;
  /**
   * @remarks
   * The initial installation mode.
   * 
   * @example
   * gre_tunnel_by_pccw
   */
  initialInstallation?: string;
  /**
   * @remarks
   * The initial installation quantity.
   * 
   * @example
   * 1
   */
  initialQty?: string;
  /**
   * @remarks
   * The number of CIDR blocks. Value range: 1 to 10000.
   * 
   * @example
   * 1
   */
  ipSubnetNums?: string;
  /**
   * @remarks
   * The mitigation analysis feature.
   * 
   * @example
   * off
   */
  mitigationAnalysis?: string;
  /**
   * @remarks
   * The log storage capacity.
   * 
   * @example
   * 3T
   */
  mitigationAnalysisCapacity?: string;
  /**
   * @remarks
   * The maximum mitigation capability.
   * 
   * @example
   * unlimited
   */
  mitigationCapacity?: string;
  /**
   * @remarks
   * The number of mitigation sessions.
   * 
   * @example
   * unlimited
   */
  mitigationNums?: string;
  /**
   * @remarks
   * The service traffic. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  normalBandwidth?: string;
  static names(): { [key: string]: string } {
    return {
      coverage: 'Coverage',
      diversionType: 'DiversionType',
      edition: 'Edition',
      idcNumbers: 'IdcNumbers',
      initialInstallation: 'InitialInstallation',
      initialQty: 'InitialQty',
      ipSubnetNums: 'IpSubnetNums',
      mitigationAnalysis: 'MitigationAnalysis',
      mitigationAnalysisCapacity: 'MitigationAnalysisCapacity',
      mitigationCapacity: 'MitigationCapacity',
      mitigationNums: 'MitigationNums',
      normalBandwidth: 'NormalBandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: 'string',
      diversionType: 'string',
      edition: 'string',
      idcNumbers: 'string',
      initialInstallation: 'string',
      initialQty: 'string',
      ipSubnetNums: 'string',
      mitigationAnalysis: 'string',
      mitigationAnalysisCapacity: 'string',
      mitigationCapacity: 'string',
      mitigationNums: 'string',
      normalBandwidth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyDataInstances extends $tea.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description
   */
  comment?: string;
  /**
   * @remarks
   * The purchase time.
   * 
   * @example
   * 2022-12-15 11:10:42
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2023-02-23 00:00:00
   */
  gmtExpire?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2022-12-15 11:10:42
   */
  gmtModify?: string;
  /**
   * @remarks
   * The alias of the instance.
   * 
   * @example
   * ddos_diversion_public_cn-xxxxxxxxxxxxx_xxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The configurations of the instance.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddos_diversion_public_cn-xxxxxxxxxxxxx
   */
  saleId?: string;
  /**
   * @remarks
   * The specifications of the instance.
   */
  spec?: ListInstanceResponseBodyDataInstancesSpec;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - normal
   * - expired
   * - deleting
   * - stopped
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 177xxxxxxxxxxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      gmtCreate: 'GmtCreate',
      gmtExpire: 'GmtExpire',
      gmtModify: 'GmtModify',
      instanceId: 'InstanceId',
      message: 'Message',
      name: 'Name',
      saleId: 'SaleId',
      spec: 'Spec',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      gmtCreate: 'string',
      gmtExpire: 'string',
      gmtModify: 'string',
      instanceId: 'string',
      message: 'string',
      name: 'string',
      saleId: 'string',
      spec: ListInstanceResponseBodyDataInstancesSpec,
      status: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The details of the anti-DDoS diversion instance.
   */
  instances?: ListInstanceResponseBodyDataInstances[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  num?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      num: 'Num',
      page: 'Page',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstanceResponseBodyDataInstances },
      num: 'number',
      page: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponseBodyDataNetsDDoSDefenseCleanTh extends $tea.Model {
  /**
   * @remarks
   * The traffic scrubbing threshold in Mbit/s.
   * 
   * @example
   * 0
   */
  mbps?: number;
  /**
   * @remarks
   * The traffic scrubbing threshold in packets per second (pps)
   * 
   * @example
   * 0
   */
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      mbps: 'Mbps',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mbps: 'number',
      pps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponseBodyDataNetsDDoSDefenseDjPolicy extends $tea.Model {
  /**
   * @remarks
   * The name of the mitigation policy.
   * 
   * @example
   * test_polilciy-xxx
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponseBodyDataNetsDDoSDefenseHoleTh extends $tea.Model {
  /**
   * @remarks
   * The blackhole filtering threshold.
   * 
   * @example
   * 0
   */
  threshMbps?: number;
  static names(): { [key: string]: string } {
    return {
      threshMbps: 'ThreshMbps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshMbps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponseBodyDataNetsDDoSDefense extends $tea.Model {
  /**
   * @remarks
   * The configuration of traffic scrubbing.
   */
  cleanTh?: QueryNetListResponseBodyDataNetsDDoSDefenseCleanTh;
  /**
   * @remarks
   * The configuration of the mitigation policy.
   */
  djPolicy?: QueryNetListResponseBodyDataNetsDDoSDefenseDjPolicy;
  /**
   * @remarks
   * The configuration of blackhole filtering.
   */
  holeTh?: QueryNetListResponseBodyDataNetsDDoSDefenseHoleTh;
  static names(): { [key: string]: string } {
    return {
      cleanTh: 'CleanTh',
      djPolicy: 'DjPolicy',
      holeTh: 'HoleTh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanTh: QueryNetListResponseBodyDataNetsDDoSDefenseCleanTh,
      djPolicy: QueryNetListResponseBodyDataNetsDDoSDefenseDjPolicy,
      holeTh: QueryNetListResponseBodyDataNetsDDoSDefenseHoleTh,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponseBodyDataNetsDeclared extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the CIDR block is advertised. Valid values:
   * 
   * - 0: The CIDR block is not advertised.
   * - 1: The CIDR block is advertised.
   * 
   * @example
   * 0
   */
  declared?: string;
  /**
   * @remarks
   * The region in which the CIDR block is advertised.
   * 
   * @example
   * oe26
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      declared: 'Declared',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      declared: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponseBodyDataNets extends $tea.Model {
  /**
   * @remarks
   * The DDoS mitigation configuration of the CIDR block.
   */
  DDoSDefense?: QueryNetListResponseBodyDataNetsDDoSDefense;
  /**
   * @remarks
   * The advertising details.
   */
  declared?: QueryNetListResponseBodyDataNetsDeclared[];
  /**
   * @remarks
   * The advertising status of the CIDR block. Valid values:
   * - 0: The CIDR block is not advertised.
   * - 1: The CIDR block is advertised.
   * 
   * @example
   * 1
   */
  declaredState?: number;
  /**
   * @remarks
   * Indicates whether the forwarding configuration takes effect. Valid values:
   * 
   * - 0: The forwarding configuration takes effect.
   * - 1: The forwarding configuration does not take effect.
   * - -1: The forwarding configuration is being deleted.
   * 
   * @example
   * 1
   */
  fwdEffect?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-02-23 00:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2023-02-24 00:00:00
   */
  gmtModify?: string;
  /**
   * @remarks
   * The scheduling mode.
   * 
   * @example
   * manual
   */
  mode?: string;
  /**
   * @remarks
   * The CIDR block of the anti-DDoS diversion instance.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  net?: string;
  /**
   * @remarks
   * Indicates whether the CIDR block needs to be extended. Valid values:
   * 
   * - 0: The CIDR block needs to be extended.
   * - 1: The CIDR block does not need to be extended.
   * 
   * @example
   * 1
   */
  netExtend?: string;
  /**
   * @remarks
   * The primary CIDR block.
   * 
   * @example
   * 192.168.XX.XX/22
   */
  netMain?: string;
  /**
   * @remarks
   * The type of the CIDR block.
   * 
   * @example
   * ipv4
   */
  netType?: string;
  permit?: number;
  /**
   * @remarks
   * The ID of the anti-DDoS diversion instance.
   * 
   * @example
   * ddos_diversion_public_cn-xxxxxxxxxxxxx
   */
  saleId?: string;
  /**
   * @remarks
   * The reinjection type.
   * 
   * @example
   * aliyun_line
   */
  upstreamType?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 177xxxxxxxxxxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      DDoSDefense: 'DDoSDefense',
      declared: 'Declared',
      declaredState: 'DeclaredState',
      fwdEffect: 'FwdEffect',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      mode: 'Mode',
      net: 'Net',
      netExtend: 'NetExtend',
      netMain: 'NetMain',
      netType: 'NetType',
      permit: 'Permit',
      saleId: 'SaleId',
      upstreamType: 'UpstreamType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDoSDefense: QueryNetListResponseBodyDataNetsDDoSDefense,
      declared: { 'type': 'array', 'itemType': QueryNetListResponseBodyDataNetsDeclared },
      declaredState: 'number',
      fwdEffect: 'number',
      gmtCreate: 'string',
      gmtModify: 'string',
      mode: 'string',
      net: 'string',
      netExtend: 'string',
      netMain: 'string',
      netType: 'string',
      permit: 'number',
      saleId: 'string',
      upstreamType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The configuration of the CIDR block.
   */
  nets?: QueryNetListResponseBodyDataNets[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  num?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nets: 'Nets',
      num: 'Num',
      page: 'Page',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nets: { 'type': 'array', 'itemType': QueryNetListResponseBodyDataNets },
      num: 'number',
      page: 'number',
      total: 'number',
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
    this._endpoint = this.getEndpoint("ddosdiversion", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Configures the advertising of a CIDR block.
   * 
   * @param request - ConfigNetStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigNetStatusResponse
   */
  async configNetStatusWithOptions(request: ConfigNetStatusRequest, runtime: $Util.RuntimeOptions): Promise<ConfigNetStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.net)) {
      query["Net"] = request.net;
    }

    if (!Util.isUnset(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!Util.isUnset(request.saleId)) {
      query["SaleId"] = request.saleId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.subNets)) {
      query["SubNets"] = request.subNets;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigNetStatus",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigNetStatusResponse>(await this.callApi(params, req, runtime), new ConfigNetStatusResponse({}));
  }

  /**
   * Configures the advertising of a CIDR block.
   * 
   * @param request - ConfigNetStatusRequest
   * @returns ConfigNetStatusResponse
   */
  async configNetStatus(request: ConfigNetStatusRequest): Promise<ConfigNetStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configNetStatusWithOptions(request, runtime);
  }

  /**
   * Queries anti-DDoS diversion instances.
   * 
   * @param request - ListInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceResponse
   */
  async listInstanceWithOptions(request: ListInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.num)) {
      query["Num"] = request.num;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.saleId)) {
      query["SaleId"] = request.saleId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstance",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceResponse>(await this.callApi(params, req, runtime), new ListInstanceResponse({}));
  }

  /**
   * Queries anti-DDoS diversion instances.
   * 
   * @param request - ListInstanceRequest
   * @returns ListInstanceResponse
   */
  async listInstance(request: ListInstanceRequest): Promise<ListInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the CIDR blocks of an anti-DDoS diversion instance.
   * 
   * @param request - QueryNetListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryNetListResponse
   */
  async queryNetListWithOptions(request: QueryNetListRequest, runtime: $Util.RuntimeOptions): Promise<QueryNetListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mainNet)) {
      query["MainNet"] = request.mainNet;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.net)) {
      query["Net"] = request.net;
    }

    if (!Util.isUnset(request.num)) {
      query["Num"] = request.num;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.saleId)) {
      query["SaleId"] = request.saleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryNetList",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryNetListResponse>(await this.callApi(params, req, runtime), new QueryNetListResponse({}));
  }

  /**
   * Queries the CIDR blocks of an anti-DDoS diversion instance.
   * 
   * @param request - QueryNetListRequest
   * @returns QueryNetListResponse
   */
  async queryNetList(request: QueryNetListRequest): Promise<QueryNetListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryNetListWithOptions(request, runtime);
  }

}
