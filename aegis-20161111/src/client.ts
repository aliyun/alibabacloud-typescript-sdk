// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateInstanceRequest extends $tea.Model {
  ownerId?: number;
  clientToken?: string;
  duration?: number;
  pricingCycle?: string;
  versionCode?: number;
  vmNumber?: number;
  isAutoRenew?: boolean;
  autoRenewDuration?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
      versionCode: 'VersionCode',
      vmNumber: 'VmNumber',
      isAutoRenew: 'IsAutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      clientToken: 'string',
      duration: 'number',
      pricingCycle: 'string',
      versionCode: 'number',
      vmNumber: 'number',
      isAutoRenew: 'boolean',
      autoRenewDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoDelConfigRequest extends $tea.Model {
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoDelConfigResponseBody extends $tea.Model {
  requestId?: string;
  days?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      days: 'Days',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      days: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoDelConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAutoDelConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAutoDelConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningDetailRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  checkWarningId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      checkWarningId: 'CheckWarningId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      checkWarningId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningDetailResponseBody extends $tea.Model {
  item?: string;
  type?: string;
  description?: string;
  requestId?: string;
  checkId?: number;
  level?: string;
  prompt?: string;
  advice?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      type: 'Type',
      description: 'Description',
      requestId: 'RequestId',
      checkId: 'CheckId',
      level: 'Level',
      prompt: 'Prompt',
      advice: 'Advice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      type: 'string',
      description: 'string',
      requestId: 'string',
      checkId: 'number',
      level: 'string',
      prompt: 'string',
      advice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCheckWarningDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCheckWarningDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConcernNecessityRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConcernNecessityResponseBody extends $tea.Model {
  requestId?: string;
  concernNecessity?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      concernNecessity: 'ConcernNecessity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      concernNecessity: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConcernNecessityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConcernNecessityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConcernNecessityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeInstanceStatisticsResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': DescribeInstanceStatisticsResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyExecDetailRequest extends $tea.Model {
  sourceIp?: string;
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      strategyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyExecDetailResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  percent?: string;
  failCount?: number;
  startTime?: string;
  successCount?: number;
  source?: string;
  failedEcsList?: DescribeStrategyExecDetailResponseBodyFailedEcsList[];
  inProcessCount?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      percent: 'Percent',
      failCount: 'FailCount',
      startTime: 'StartTime',
      successCount: 'SuccessCount',
      source: 'Source',
      failedEcsList: 'FailedEcsList',
      inProcessCount: 'InProcessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      percent: 'string',
      failCount: 'number',
      startTime: 'string',
      successCount: 'number',
      source: 'string',
      failedEcsList: { 'type': 'array', 'itemType': DescribeStrategyExecDetailResponseBodyFailedEcsList },
      inProcessCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyExecDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStrategyExecDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStrategyExecDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStratetyRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  strategyIds?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      strategyIds: 'StrategyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      strategyIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStratetyResponseBody extends $tea.Model {
  requestId?: string;
  strategies?: DescribeStratetyResponseBodyStrategies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategies: 'Strategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategies: { 'type': 'array', 'itemType': DescribeStratetyResponseBodyStrategies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStratetyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStratetyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStratetyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulWhitelistRequest extends $tea.Model {
  sourceIp?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulWhitelistResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  vulWhitelists?: DescribeVulWhitelistResponseBodyVulWhitelists[];
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      vulWhitelists: 'VulWhitelists',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      vulWhitelists: { 'type': 'array', 'itemType': DescribeVulWhitelistResponseBodyVulWhitelists },
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVulWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVulWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  ownerId?: number;
  clientToken?: string;
  instanceId?: string;
  vmNumber?: string;
  duration?: number;
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      vmNumber: 'VmNumber',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      clientToken: 'string',
      instanceId: 'string',
      vmNumber: 'string',
      duration: 'number',
      pricingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenewInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceRequest extends $tea.Model {
  ownerId?: number;
  clientToken?: string;
  instanceId?: string;
  versionCode?: number;
  vmNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      versionCode: 'VersionCode',
      vmNumber: 'VmNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      clientToken: 'string',
      instanceId: 'string',
      versionCode: 'number',
      vmNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponseBodyData extends $tea.Model {
  account?: number;
  uuid?: string;
  vul?: number;
  health?: number;
  trojan?: number;
  suspicious?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      uuid: 'Uuid',
      vul: 'Vul',
      health: 'Health',
      trojan: 'Trojan',
      suspicious: 'Suspicious',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'number',
      uuid: 'string',
      vul: 'number',
      health: 'number',
      trojan: 'number',
      suspicious: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyExecDetailResponseBodyFailedEcsList extends $tea.Model {
  internetIp?: string;
  instanceName?: string;
  IP?: string;
  intranetIp?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      internetIp: 'InternetIp',
      instanceName: 'InstanceName',
      IP: 'IP',
      intranetIp: 'IntranetIp',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetIp: 'string',
      instanceName: 'string',
      IP: 'string',
      intranetIp: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStratetyResponseBodyStrategiesConfigTargets extends $tea.Model {
  flag?: string;
  target?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      flag: 'Flag',
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flag: 'string',
      target: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStratetyResponseBodyStrategies extends $tea.Model {
  execStatus?: number;
  type?: number;
  configTargets?: DescribeStratetyResponseBodyStrategiesConfigTargets[];
  cycleStartTime?: number;
  ecsCount?: number;
  processRate?: number;
  cycleDays?: number;
  riskCount?: number;
  name?: string;
  passRate?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      execStatus: 'ExecStatus',
      type: 'Type',
      configTargets: 'ConfigTargets',
      cycleStartTime: 'CycleStartTime',
      ecsCount: 'EcsCount',
      processRate: 'ProcessRate',
      cycleDays: 'CycleDays',
      riskCount: 'RiskCount',
      name: 'Name',
      passRate: 'PassRate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execStatus: 'number',
      type: 'number',
      configTargets: { 'type': 'array', 'itemType': DescribeStratetyResponseBodyStrategiesConfigTargets },
      cycleStartTime: 'number',
      ecsCount: 'number',
      processRate: 'number',
      cycleDays: 'number',
      riskCount: 'number',
      name: 'string',
      passRate: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulWhitelistResponseBodyVulWhitelists extends $tea.Model {
  type?: string;
  aliasName?: string;
  name?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      aliasName: 'AliasName',
      name: 'Name',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      aliasName: 'string',
      name: 'string',
      reason: 'string',
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
    this._endpoint = this.getEndpoint("aegis", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateInstanceResponse>(await this.doRPCRequest("CreateInstance", "2016-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async deleteRuleWithOptions(request: DeleteRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRuleResponse>(await this.doRPCRequest("DeleteRule", "2016-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRuleResponse({}));
  }

  async deleteRule(request: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  async describeAutoDelConfigWithOptions(request: DescribeAutoDelConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoDelConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAutoDelConfigResponse>(await this.doRPCRequest("DescribeAutoDelConfig", "2016-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAutoDelConfigResponse({}));
  }

  async describeAutoDelConfig(request: DescribeAutoDelConfigRequest): Promise<DescribeAutoDelConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoDelConfigWithOptions(request, runtime);
  }

  async describeCheckWarningDetailWithOptions(request: DescribeCheckWarningDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCheckWarningDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCheckWarningDetailResponse>(await this.doRPCRequest("DescribeCheckWarningDetail", "2016-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCheckWarningDetailResponse({}));
  }

  async describeCheckWarningDetail(request: DescribeCheckWarningDetailRequest): Promise<DescribeCheckWarningDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCheckWarningDetailWithOptions(request, runtime);
  }

  async describeConcernNecessityWithOptions(request: DescribeConcernNecessityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConcernNecessityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeConcernNecessityResponse>(await this.doRPCRequest("DescribeConcernNecessity", "2016-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeConcernNecessityResponse({}));
  }

  async describeConcernNecessity(request: DescribeConcernNecessityRequest): Promise<DescribeConcernNecessityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConcernNecessityWithOptions(request, runtime);
  }

  async describeInstanceStatisticsWithOptions(request: DescribeInstanceStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceStatisticsResponse>(await this.doRPCRequest("DescribeInstanceStatistics", "2016-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceStatisticsResponse({}));
  }

  async describeInstanceStatistics(request: DescribeInstanceStatisticsRequest): Promise<DescribeInstanceStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceStatisticsWithOptions(request, runtime);
  }

  async describeStrategyExecDetailWithOptions(request: DescribeStrategyExecDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStrategyExecDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStrategyExecDetailResponse>(await this.doRPCRequest("DescribeStrategyExecDetail", "2016-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStrategyExecDetailResponse({}));
  }

  async describeStrategyExecDetail(request: DescribeStrategyExecDetailRequest): Promise<DescribeStrategyExecDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStrategyExecDetailWithOptions(request, runtime);
  }

  async describeStratetyWithOptions(request: DescribeStratetyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStratetyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStratetyResponse>(await this.doRPCRequest("DescribeStratety", "2016-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStratetyResponse({}));
  }

  async describeStratety(request: DescribeStratetyRequest): Promise<DescribeStratetyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStratetyWithOptions(request, runtime);
  }

  async describeVulWhitelistWithOptions(request: DescribeVulWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulWhitelistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVulWhitelistResponse>(await this.doRPCRequest("DescribeVulWhitelist", "2016-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVulWhitelistResponse({}));
  }

  async describeVulWhitelist(request: DescribeVulWhitelistRequest): Promise<DescribeVulWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulWhitelistWithOptions(request, runtime);
  }

  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenewInstanceResponse>(await this.doRPCRequest("RenewInstance", "2016-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new RenewInstanceResponse({}));
  }

  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  async upgradeInstanceWithOptions(request: UpgradeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeInstanceResponse>(await this.doRPCRequest("UpgradeInstance", "2016-11-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeInstanceResponse({}));
  }

  async upgradeInstance(request: UpgradeInstanceRequest): Promise<UpgradeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeInstanceWithOptions(request, runtime);
  }

}
