// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayResponseBodyDataResultElasticPolicyEnableScaleTimePolicyList extends $dara.Model {
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBodyDataResultElasticPolicyTimePolicyList extends $dara.Model {
  /**
   * @remarks
   * The expected number of replicas for auto scale-out.
   * 
   * @example
   * 4
   */
  desiredReplica?: number;
  /**
   * @remarks
   * The end time of auto scale-out.
   * 
   * @example
   * 09:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of auto scale-out.
   * 
   * @example
   * 07:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desiredReplica: 'DesiredReplica',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desiredReplica: 'number',
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBodyDataResultElasticPolicy extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto scale-out is enabled.
   * 
   * @example
   * true
   */
  elastic?: boolean;
  /**
   * @remarks
   * The type of auto scale-out. Valid value:
   * 
   * *   CronHPA: scale-out by time
   * 
   * @example
   * CronHPA
   */
  elasticType?: string;
  enableScaleTimePolicyList?: ListGatewayResponseBodyDataResultElasticPolicyEnableScaleTimePolicyList[];
  loadWarningThreshold?: boolean;
  /**
   * @remarks
   * The maximum number of instances that are automatically scaled out. This parameter is used for horizontal scale-out.
   * 
   * @example
   * 10
   */
  maxReplica?: number;
  /**
   * @remarks
   * The time policy list for auto scale-out.
   */
  timePolicyList?: ListGatewayResponseBodyDataResultElasticPolicyTimePolicyList[];
  static names(): { [key: string]: string } {
    return {
      elastic: 'Elastic',
      elasticType: 'ElasticType',
      enableScaleTimePolicyList: 'EnableScaleTimePolicyList',
      loadWarningThreshold: 'LoadWarningThreshold',
      maxReplica: 'MaxReplica',
      timePolicyList: 'TimePolicyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elastic: 'boolean',
      elasticType: 'string',
      enableScaleTimePolicyList: { 'type': 'array', 'itemType': ListGatewayResponseBodyDataResultElasticPolicyEnableScaleTimePolicyList },
      loadWarningThreshold: 'boolean',
      maxReplica: 'number',
      timePolicyList: { 'type': 'array', 'itemType': ListGatewayResponseBodyDataResultElasticPolicyTimePolicyList },
    };
  }

  validate() {
    if(Array.isArray(this.enableScaleTimePolicyList)) {
      $dara.Model.validateArray(this.enableScaleTimePolicyList);
    }
    if(Array.isArray(this.timePolicyList)) {
      $dara.Model.validateArray(this.timePolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBodyDataResultGatewayEntry extends $dara.Model {
  /**
   * @example
   * gw-*****5c2cd6144f4bfa1c32289f45ea8.cn-hangzhou.alicloudapi.com
   */
  entryDomain?: string;
  httpPorts?: number[];
  httpsPorts?: number[];
  ipList?: string[];
  ipv6List?: string[];
  /**
   * @example
   * PUB_NET
   */
  netType?: string;
  /**
   * @example
   * Ready
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      entryDomain: 'EntryDomain',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      ipList: 'IpList',
      ipv6List: 'Ipv6List',
      netType: 'NetType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryDomain: 'string',
      httpPorts: { 'type': 'array', 'itemType': 'number' },
      httpsPorts: { 'type': 'array', 'itemType': 'number' },
      ipList: { 'type': 'array', 'itemType': 'string' },
      ipv6List: { 'type': 'array', 'itemType': 'string' },
      netType: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.httpPorts)) {
      $dara.Model.validateArray(this.httpPorts);
    }
    if(Array.isArray(this.httpsPorts)) {
      $dara.Model.validateArray(this.httpsPorts);
    }
    if(Array.isArray(this.ipList)) {
      $dara.Model.validateArray(this.ipList);
    }
    if(Array.isArray(this.ipv6List)) {
      $dara.Model.validateArray(this.ipv6List);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBodyDataResultInitConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Web Application Firewall (WAF) is enabled.
   * 
   * @example
   * true
   */
  enableWaf?: boolean;
  /**
   * @remarks
   * Indicates whether WAF is supported.
   * 
   * @example
   * true
   */
  supportWaf?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableWaf: 'EnableWaf',
      supportWaf: 'SupportWaf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableWaf: 'boolean',
      supportWaf: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBodyDataResultInternetSlb extends $dara.Model {
  /**
   * @remarks
   * The mode of the SLB instance.
   * 
   * @example
   * UserHost
   */
  gatewaySlbMode?: string;
  /**
   * @remarks
   * The state of the SLB instance.
   * 
   * @example
   * Ready
   */
  gatewaySlbStatus?: string;
  /**
   * @remarks
   * The traffic of the gateway.
   * 
   * @example
   * 20
   */
  internetNetworkFlow?: string;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * @example
   * lb-bp1ut8asdfgucjk****
   */
  slbId?: string;
  /**
   * @remarks
   * The IP address of the SLB instance.
   * 
   * @example
   * 153.12.XX.XX
   */
  slbIp?: string;
  /**
   * @remarks
   * The port number of the SLB instance.
   * 
   * @example
   * slb.s2.small
   */
  slbPort?: string;
  /**
   * @remarks
   * The specifications of the SLB instance.
   * 
   * @example
   * slb.s2.small
   */
  slbSpec?: string;
  /**
   * @remarks
   * The description of the state.
   * 
   * @example
   * Creating
   */
  statusDesc?: string;
  /**
   * @remarks
   * The type of the SLB instance.
   * 
   * @example
   * PUB_NET
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gatewaySlbMode: 'GatewaySlbMode',
      gatewaySlbStatus: 'GatewaySlbStatus',
      internetNetworkFlow: 'InternetNetworkFlow',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      slbPort: 'SlbPort',
      slbSpec: 'SlbSpec',
      statusDesc: 'StatusDesc',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewaySlbMode: 'string',
      gatewaySlbStatus: 'string',
      internetNetworkFlow: 'string',
      slbId: 'string',
      slbIp: 'string',
      slbPort: 'string',
      slbSpec: 'string',
      statusDesc: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBodyDataResultMaintenancePeriod extends $dara.Model {
  endTime?: string;
  startTime?: string;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBodyDataResultSlb extends $dara.Model {
  /**
   * @remarks
   * The mode of the SLB instance.
   * 
   * @example
   * UserHost
   */
  gatewaySlbMode?: string;
  /**
   * @remarks
   * The state of the SLB instance.
   * 
   * @example
   * Ready
   */
  gatewaySlbStatus?: string;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * @example
   * lb-bp1ut8asdfgucjk****
   */
  slbId?: string;
  /**
   * @remarks
   * The IP address of the SLB instance.
   * 
   * @example
   * 153.12.XX.XX
   */
  slbIp?: string;
  /**
   * @remarks
   * The port number of the SLB instance.
   * 
   * @example
   * 80
   */
  slbPort?: string;
  /**
   * @remarks
   * The specifications of the SLB instance.
   * 
   * @example
   * slb.s2.small
   */
  slbSpec?: string;
  /**
   * @remarks
   * The description of the state.
   * 
   * @example
   * Creating
   */
  statusDesc?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   PUB_NET
   * *   PRIVATE_NET
   * 
   * @example
   * PUB_NET
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gatewaySlbMode: 'GatewaySlbMode',
      gatewaySlbStatus: 'GatewaySlbStatus',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      slbPort: 'SlbPort',
      slbSpec: 'SlbSpec',
      statusDesc: 'StatusDesc',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewaySlbMode: 'string',
      gatewaySlbStatus: 'string',
      slbId: 'string',
      slbIp: 'string',
      slbPort: 'string',
      slbSpec: 'string',
      statusDesc: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Application High Availability Service (AHAS) is activated.
   * 
   * @example
   * false
   */
  ahasOn?: boolean;
  /**
   * @remarks
   * The version of the application.
   * 
   * @example
   * 1.0.1.0
   */
  appVersion?: string;
  /**
   * @remarks
   * Indicates whether Application Real-Time Monitoring Service (ARMS) is activated.
   * 
   * @example
   * false
   */
  armsOn?: boolean;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The current version of the gateway.
   * 
   * @example
   * 0.1.0-mse-gw
   */
  currentVersion?: string;
  /**
   * @remarks
   * Indicates whether auto scale-out is enabled.
   * 
   * @example
   * true
   */
  elastic?: boolean;
  /**
   * @remarks
   * The ID of the elastic gateway. This parameter is returned if auto scale-out is used.
   * 
   * @example
   * mse_ingresselastic_public_cn-uqm3d0*****
   */
  elasticInstanceId?: string;
  /**
   * @remarks
   * The auto scale-out policy.
   */
  elasticPolicy?: ListGatewayResponseBodyDataResultElasticPolicy;
  /**
   * @remarks
   * The number of replicas that are automatically scaled out.
   * 
   * @example
   * 2
   */
  elasticReplica?: number;
  /**
   * @remarks
   * The type of auto scale-out. Valid value:
   * 
   * *   CronHPA: scale-out by time
   * 
   * @example
   * CronHPA
   */
  elasticType?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 4792060800000
   */
  endDate?: string;
  gatewayEntry?: ListGatewayResponseBodyDataResultGatewayEntry[];
  /**
   * @remarks
   * The gateway type.
   * 
   * @example
   * Ingress
   */
  gatewayType?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-5017305290e14cebb8ce5cb6a4****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The version of the gateway.
   * 
   * @example
   * 1.2.9
   */
  gatewayVersion?: string;
  /**
   * @remarks
   * The time when the gateway was created.
   * 
   * @example
   * 2021-09-13 19:24:23
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the gateway was modified.
   * 
   * @example
   * 2021-09-13 19:24:23
   */
  gmtModified?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 153
   */
  id?: number;
  /**
   * @remarks
   * The configurations.
   */
  initConfig?: ListGatewayResponseBodyDataResultInitConfig;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * mse_ingresspost-cn-0jbvrcex****
   */
  instanceId?: string;
  /**
   * @remarks
   * The details of the Internet-facing SLB instances.
   */
  internetSlb?: ListGatewayResponseBodyDataResultInternetSlb[];
  /**
   * @remarks
   * The latest version of the gateway.
   * 
   * @example
   * 0.1.0-mse-gw
   */
  latestVersion?: string;
  maintenancePeriod?: ListGatewayResponseBodyDataResultMaintenancePeriod;
  /**
   * @remarks
   * The resource tag.
   * 
   * @example
   * {"tagKey":"tagValue"}
   */
  mseTag?: string;
  mseVersion?: string;
  /**
   * @remarks
   * Indicates whether the instance was forcefully upgraded.
   * 
   * @example
   * false
   */
  mustUpgrade?: boolean;
  /**
   * @remarks
   * The gateway name.
   * 
   * @example
   * tesa-test
   */
  name?: string;
  /**
   * @remarks
   * The user information.
   * 
   * @example
   * 18278117654342
   */
  primaryUser?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The number of replicas.
   * 
   * @example
   * 2
   */
  replica?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-97hg87vi****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether rollbacks are allowed.
   * 
   * @example
   * false
   */
  rollBack?: boolean;
  /**
   * @remarks
   * The details of Server Load Balancer (SLB) instances.
   */
  slb?: ListGatewayResponseBodyDataResultSlb[];
  /**
   * @remarks
   * The specifications of the gateway.
   * 
   * @example
   * MSE_GTW_1_2_200_c
   */
  spec?: string;
  /**
   * @remarks
   * The gateway state. Valid values:
   * 
   * *   0: The gateway is being created.
   * *   1: The gateway failed to be created.
   * *   2: The gateway is running.
   * *   3: The gateway is being changed.
   * *   4: The gateway is scaling in.
   * *   6: The gateway is scaling out.
   * *   8: The gateway is being deleted.
   * *   9: The gateway is suspended and is to be released.
   * *   10: The gateway is restarting.
   * *   11: The gateway is being rebuilt.
   * *   12: The gateway is being upgraded.
   * *   13: The gateway failed to be upgraded.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The description of the gateway state.
   * 
   * @example
   * Restarting
   */
  statusDesc?: string;
  /**
   * @remarks
   * Indicates whether WebAssembly (Wasm) is supported.
   * 
   * @example
   * true
   */
  supportWasm?: boolean;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * test
   */
  tag?: string;
  /**
   * @remarks
   * The total number of replicas, including the number of replicas that are automatically scaled out.
   * 
   * @example
   * 4
   */
  totalReplica?: number;
  /**
   * @remarks
   * Indicates whether the instance was upgraded.
   * 
   * @example
   * false
   */
  upgrade?: boolean;
  versionLifecycle?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the gateway belongs.
   * 
   * @example
   * vpc-uf6heojei217tv14*****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the secondary vSwitch.
   * 
   * @example
   * vsw-bpbrveck45nf****
   */
  vswitch2?: string;
  static names(): { [key: string]: string } {
    return {
      ahasOn: 'AhasOn',
      appVersion: 'AppVersion',
      armsOn: 'ArmsOn',
      chargeType: 'ChargeType',
      currentVersion: 'CurrentVersion',
      elastic: 'Elastic',
      elasticInstanceId: 'ElasticInstanceId',
      elasticPolicy: 'ElasticPolicy',
      elasticReplica: 'ElasticReplica',
      elasticType: 'ElasticType',
      endDate: 'EndDate',
      gatewayEntry: 'GatewayEntry',
      gatewayType: 'GatewayType',
      gatewayUniqueId: 'GatewayUniqueId',
      gatewayVersion: 'GatewayVersion',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      initConfig: 'InitConfig',
      instanceId: 'InstanceId',
      internetSlb: 'InternetSlb',
      latestVersion: 'LatestVersion',
      maintenancePeriod: 'MaintenancePeriod',
      mseTag: 'MseTag',
      mseVersion: 'MseVersion',
      mustUpgrade: 'MustUpgrade',
      name: 'Name',
      primaryUser: 'PrimaryUser',
      region: 'Region',
      replica: 'Replica',
      resourceGroupId: 'ResourceGroupId',
      rollBack: 'RollBack',
      slb: 'Slb',
      spec: 'Spec',
      status: 'Status',
      statusDesc: 'StatusDesc',
      supportWasm: 'SupportWasm',
      tag: 'Tag',
      totalReplica: 'TotalReplica',
      upgrade: 'Upgrade',
      versionLifecycle: 'VersionLifecycle',
      vpcId: 'VpcId',
      vswitch2: 'Vswitch2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ahasOn: 'boolean',
      appVersion: 'string',
      armsOn: 'boolean',
      chargeType: 'string',
      currentVersion: 'string',
      elastic: 'boolean',
      elasticInstanceId: 'string',
      elasticPolicy: ListGatewayResponseBodyDataResultElasticPolicy,
      elasticReplica: 'number',
      elasticType: 'string',
      endDate: 'string',
      gatewayEntry: { 'type': 'array', 'itemType': ListGatewayResponseBodyDataResultGatewayEntry },
      gatewayType: 'string',
      gatewayUniqueId: 'string',
      gatewayVersion: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      initConfig: ListGatewayResponseBodyDataResultInitConfig,
      instanceId: 'string',
      internetSlb: { 'type': 'array', 'itemType': ListGatewayResponseBodyDataResultInternetSlb },
      latestVersion: 'string',
      maintenancePeriod: ListGatewayResponseBodyDataResultMaintenancePeriod,
      mseTag: 'string',
      mseVersion: 'string',
      mustUpgrade: 'boolean',
      name: 'string',
      primaryUser: 'string',
      region: 'string',
      replica: 'number',
      resourceGroupId: 'string',
      rollBack: 'boolean',
      slb: { 'type': 'array', 'itemType': ListGatewayResponseBodyDataResultSlb },
      spec: 'string',
      status: 'number',
      statusDesc: 'string',
      supportWasm: 'boolean',
      tag: 'string',
      totalReplica: 'number',
      upgrade: 'boolean',
      versionLifecycle: 'string',
      vpcId: 'string',
      vswitch2: 'string',
    };
  }

  validate() {
    if(this.elasticPolicy && typeof (this.elasticPolicy as any).validate === 'function') {
      (this.elasticPolicy as any).validate();
    }
    if(Array.isArray(this.gatewayEntry)) {
      $dara.Model.validateArray(this.gatewayEntry);
    }
    if(this.initConfig && typeof (this.initConfig as any).validate === 'function') {
      (this.initConfig as any).validate();
    }
    if(Array.isArray(this.internetSlb)) {
      $dara.Model.validateArray(this.internetSlb);
    }
    if(this.maintenancePeriod && typeof (this.maintenancePeriod as any).validate === 'function') {
      (this.maintenancePeriod as any).validate();
    }
    if(Array.isArray(this.slb)) {
      $dara.Model.validateArray(this.slb);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The data returned.
   */
  result?: ListGatewayResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 9
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListGatewayResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListGatewayResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * You are not authorized to perform this operation. Action: mse:ListGateway, Resource: acs:mse:cn-hangzhou:102123:*
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34300B3-52EC-5049-8C96-914098CF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListGatewayResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

