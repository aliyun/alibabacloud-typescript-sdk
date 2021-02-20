// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAutoCcBlacklistRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  blacklist?: string;
  expireTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      blacklist: 'Blacklist',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      blacklist: 'string',
      expireTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAutoCcBlacklistResponseBody extends $tea.Model {
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

export class AddAutoCcBlacklistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddAutoCcBlacklistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddAutoCcBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAutoCcWhitelistRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  whitelist?: string;
  expireTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      whitelist: 'Whitelist',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      whitelist: 'string',
      expireTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAutoCcWhitelistResponseBody extends $tea.Model {
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

export class AddAutoCcWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddAutoCcWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddAutoCcWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateWebCertRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  certId?: number;
  certName?: string;
  cert?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      certId: 'CertId',
      certName: 'CertName',
      cert: 'Cert',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      certId: 'number',
      certName: 'string',
      cert: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateWebCertResponseBody extends $tea.Model {
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

export class AssociateWebCertResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateWebCertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateWebCertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSceneDefenseObjectRequest extends $tea.Model {
  sourceIp?: string;
  policyId?: string;
  objectType?: string;
  objects?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      policyId: 'PolicyId',
      objectType: 'ObjectType',
      objects: 'Objects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      policyId: 'string',
      objectType: 'string',
      objects: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSceneDefenseObjectResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSceneDefenseObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachSceneDefenseObjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachSceneDefenseObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigL7RsPolicyRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      policy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigL7RsPolicyResponseBody extends $tea.Model {
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

export class ConfigL7RsPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigL7RsPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigL7RsPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigNetworkRegionBlockRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigNetworkRegionBlockResponseBody extends $tea.Model {
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

export class ConfigNetworkRegionBlockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigNetworkRegionBlockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigNetworkRegionBlockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigNetworkRulesRequest extends $tea.Model {
  sourceIp?: string;
  networkRules?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      networkRules: 'NetworkRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      networkRules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigNetworkRulesResponseBody extends $tea.Model {
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

export class ConfigNetworkRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigNetworkRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigNetworkRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigWebCCTemplateRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  template?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      template: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigWebCCTemplateResponseBody extends $tea.Model {
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

export class ConfigWebCCTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigWebCCTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigWebCCTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigWebIpSetRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  blackList?: string[];
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      blackList: 'BlackList',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      blackList: { 'type': 'array', 'itemType': 'string' },
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigWebIpSetResponseBody extends $tea.Model {
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

export class ConfigWebIpSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigWebIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigWebIpSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsyncTaskRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  taskType?: number;
  taskParams?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      taskType: 'TaskType',
      taskParams: 'TaskParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      taskType: 'number',
      taskParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsyncTaskResponseBody extends $tea.Model {
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

export class CreateAsyncTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAsyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAsyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkRulesRequest extends $tea.Model {
  sourceIp?: string;
  networkRules?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      networkRules: 'NetworkRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      networkRules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkRulesResponseBody extends $tea.Model {
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

export class CreateNetworkRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateNetworkRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateNetworkRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneDefensePolicyRequest extends $tea.Model {
  sourceIp?: string;
  name?: string;
  template?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      name: 'Name',
      template: 'Template',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      name: 'string',
      template: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneDefensePolicyResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneDefensePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSceneDefensePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSceneDefensePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchedulerRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  rules?: string;
  ruleName?: string;
  ruleType?: number;
  param?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      rules: 'Rules',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      param: 'Param',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      rules: 'string',
      ruleName: 'string',
      ruleType: 'number',
      param: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchedulerRuleResponseBody extends $tea.Model {
  requestId?: string;
  cname?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cname: 'Cname',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cname: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchedulerRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSchedulerRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSchedulerRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResourcesRequest extends $tea.Model {
  sourceIp?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  resourceIds?: string[];
  tags?: CreateTagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      resourceIds: 'ResourceIds',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': CreateTagResourcesRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResourcesResponseBody extends $tea.Model {
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

export class CreateTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebCCRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  name?: string;
  act?: string;
  count?: number;
  interval?: number;
  mode?: string;
  ttl?: number;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      name: 'Name',
      act: 'Act',
      count: 'Count',
      interval: 'Interval',
      mode: 'Mode',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      name: 'string',
      act: 'string',
      count: 'number',
      interval: 'number',
      mode: 'string',
      ttl: 'number',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebCCRuleResponseBody extends $tea.Model {
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

export class CreateWebCCRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateWebCCRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateWebCCRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  rsType?: number;
  rules?: string;
  httpsExt?: string;
  defenseId?: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      rsType: 'RsType',
      rules: 'Rules',
      httpsExt: 'HttpsExt',
      defenseId: 'DefenseId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      rsType: 'number',
      rules: 'string',
      httpsExt: 'string',
      defenseId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebRuleResponseBody extends $tea.Model {
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

export class CreateWebRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateWebRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateWebRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsyncTaskRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsyncTaskResponseBody extends $tea.Model {
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

export class DeleteAsyncTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAsyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAsyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoCcBlacklistRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  blacklist?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      blacklist: 'Blacklist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      blacklist: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoCcBlacklistResponseBody extends $tea.Model {
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

export class DeleteAutoCcBlacklistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAutoCcBlacklistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAutoCcBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoCcWhitelistRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  whitelist?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      whitelist: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoCcWhitelistResponseBody extends $tea.Model {
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

export class DeleteAutoCcWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAutoCcWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAutoCcWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkRuleRequest extends $tea.Model {
  sourceIp?: string;
  networkRule?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      networkRule: 'NetworkRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      networkRule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkRuleResponseBody extends $tea.Model {
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

export class DeleteNetworkRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNetworkRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNetworkRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneDefensePolicyRequest extends $tea.Model {
  sourceIp?: string;
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneDefensePolicyResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneDefensePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSceneDefensePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSceneDefensePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchedulerRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchedulerRuleResponseBody extends $tea.Model {
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

export class DeleteSchedulerRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSchedulerRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSchedulerRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagResourcesRequest extends $tea.Model {
  sourceIp?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  all?: boolean;
  resourceIds?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceIds: 'ResourceIds',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      all: 'boolean',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagResourcesResponseBody extends $tea.Model {
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

export class DeleteTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebCacheCustomRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  ruleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      ruleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebCacheCustomRuleResponseBody extends $tea.Model {
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

export class DeleteWebCacheCustomRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteWebCacheCustomRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteWebCacheCustomRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebCCRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebCCRuleResponseBody extends $tea.Model {
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

export class DeleteWebCCRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteWebCCRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteWebCCRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebPreciseAccessRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  ruleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      ruleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebPreciseAccessRuleResponseBody extends $tea.Model {
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

export class DeleteWebPreciseAccessRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteWebPreciseAccessRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteWebPreciseAccessRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebRuleResponseBody extends $tea.Model {
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

export class DeleteWebRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteWebRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteWebRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAsyncTasksRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAsyncTasksResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  asyncTasks?: DescribeAsyncTasksResponseBodyAsyncTasks[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      asyncTasks: 'AsyncTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      asyncTasks: { 'type': 'array', 'itemType': DescribeAsyncTasksResponseBodyAsyncTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAsyncTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAsyncTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAsyncTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcBlacklistRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  keyWord?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      keyWord: 'KeyWord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      keyWord: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcBlacklistResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  autoCcBlacklist?: DescribeAutoCcBlacklistResponseBodyAutoCcBlacklist[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      autoCcBlacklist: 'AutoCcBlacklist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      autoCcBlacklist: { 'type': 'array', 'itemType': DescribeAutoCcBlacklistResponseBodyAutoCcBlacklist },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcBlacklistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAutoCcBlacklistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAutoCcBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcListCountRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  queryType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      queryType: 'QueryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      queryType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcListCountResponseBody extends $tea.Model {
  blackCount?: number;
  requestId?: string;
  whiteCount?: number;
  static names(): { [key: string]: string } {
    return {
      blackCount: 'BlackCount',
      requestId: 'RequestId',
      whiteCount: 'WhiteCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackCount: 'number',
      requestId: 'string',
      whiteCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcListCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAutoCcListCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAutoCcListCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcWhitelistRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  keyWord?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      keyWord: 'KeyWord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      keyWord: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcWhitelistResponseBody extends $tea.Model {
  autoCcWhitelist?: DescribeAutoCcWhitelistResponseBodyAutoCcWhitelist[];
  totalCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCcWhitelist: 'AutoCcWhitelist',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCcWhitelist: { 'type': 'array', 'itemType': DescribeAutoCcWhitelistResponseBodyAutoCcWhitelist },
      totalCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAutoCcWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAutoCcWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackSourceCidrRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  line?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      line: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackSourceCidrResponseBody extends $tea.Model {
  requestId?: string;
  cidrs?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cidrs: 'Cidrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cidrs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackSourceCidrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackSourceCidrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackSourceCidrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackholeStatusRequest extends $tea.Model {
  sourceIp?: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackholeStatusResponseBody extends $tea.Model {
  requestId?: string;
  blackholeStatus?: DescribeBlackholeStatusResponseBodyBlackholeStatus[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      blackholeStatus: 'BlackholeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      blackholeStatus: { 'type': 'array', 'itemType': DescribeBlackholeStatusResponseBodyBlackholeStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackholeStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBlackholeStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBlackholeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockStatusResponseBody extends $tea.Model {
  requestId?: string;
  statusList?: DescribeBlockStatusResponseBodyStatusList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusList: { 'type': 'array', 'itemType': DescribeBlockStatusResponseBodyStatusList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBlockStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBlockStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertsResponseBody extends $tea.Model {
  certs?: DescribeCertsResponseBodyCerts[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certs: 'Certs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certs: { 'type': 'array', 'itemType': DescribeCertsResponseBodyCerts },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCertsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCertsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameReusesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domains?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameReusesResponseBody extends $tea.Model {
  requestId?: string;
  cnameReuses?: DescribeCnameReusesResponseBodyCnameReuses[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cnameReuses: 'CnameReuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cnameReuses: { 'type': 'array', 'itemType': DescribeCnameReusesResponseBodyCnameReuses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameReusesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCnameReusesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCnameReusesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosAllEventListRequest extends $tea.Model {
  sourceIp?: string;
  eventType?: string;
  startTime?: number;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      eventType: 'EventType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      eventType: 'string',
      startTime: 'number',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosAllEventListResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  attackEvents?: DescribeDDosAllEventListResponseBodyAttackEvents[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      attackEvents: 'AttackEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      attackEvents: { 'type': 'array', 'itemType': DescribeDDosAllEventListResponseBodyAttackEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosAllEventListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDDosAllEventListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDDosAllEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventAreaRequest extends $tea.Model {
  sourceIp?: string;
  eventType?: string;
  startTime?: number;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      eventType: 'EventType',
      startTime: 'StartTime',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      eventType: 'string',
      startTime: 'number',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventAreaResponseBody extends $tea.Model {
  requestId?: string;
  areas?: DescribeDDosEventAreaResponseBodyAreas[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      areas: 'Areas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      areas: { 'type': 'array', 'itemType': DescribeDDosEventAreaResponseBodyAreas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventAreaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDDosEventAreaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDDosEventAreaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventAttackTypeRequest extends $tea.Model {
  sourceIp?: string;
  eventType?: string;
  startTime?: number;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      eventType: 'EventType',
      startTime: 'StartTime',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      eventType: 'string',
      startTime: 'number',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventAttackTypeResponseBody extends $tea.Model {
  requestId?: string;
  attackTypes?: DescribeDDosEventAttackTypeResponseBodyAttackTypes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      attackTypes: 'AttackTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      attackTypes: { 'type': 'array', 'itemType': DescribeDDosEventAttackTypeResponseBodyAttackTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventAttackTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDDosEventAttackTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDDosEventAttackTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventIspRequest extends $tea.Model {
  sourceIp?: string;
  eventType?: string;
  startTime?: number;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      eventType: 'EventType',
      startTime: 'StartTime',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      eventType: 'string',
      startTime: 'number',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventIspResponseBody extends $tea.Model {
  requestId?: string;
  isps?: DescribeDDosEventIspResponseBodyIsps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isps: 'Isps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isps: { 'type': 'array', 'itemType': DescribeDDosEventIspResponseBodyIsps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventIspResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDDosEventIspResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDDosEventIspResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventMaxRequest extends $tea.Model {
  sourceIp?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventMaxResponseBody extends $tea.Model {
  requestId?: string;
  qps?: number;
  cps?: number;
  mbps?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      qps: 'Qps',
      cps: 'Cps',
      mbps: 'Mbps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      qps: 'number',
      cps: 'number',
      mbps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventMaxResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDDosEventMaxResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDDosEventMaxResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  endTime?: number;
  startTime?: number;
  pageSize?: number;
  pageNumber?: number;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      endTime: 'number',
      startTime: 'number',
      pageSize: 'number',
      pageNumber: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  DDoSEvents?: DescribeDDoSEventsResponseBodyDDoSEvents[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      DDoSEvents: 'DDoSEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      DDoSEvents: { 'type': 'array', 'itemType': DescribeDDoSEventsResponseBodyDDoSEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDDoSEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDDoSEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventSrcIpRequest extends $tea.Model {
  sourceIp?: string;
  eventType?: string;
  startTime?: number;
  ip?: string;
  range?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      eventType: 'EventType',
      startTime: 'StartTime',
      ip: 'Ip',
      range: 'Range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      eventType: 'string',
      startTime: 'number',
      ip: 'string',
      range: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventSrcIpResponseBody extends $tea.Model {
  requestId?: string;
  ips?: DescribeDDosEventSrcIpResponseBodyIps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ips: 'Ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ips: { 'type': 'array', 'itemType': DescribeDDosEventSrcIpResponseBodyIps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventSrcIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDDosEventSrcIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDDosEventSrcIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseCountStatisticsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseCountStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  defenseCountStatistics?: DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      defenseCountStatistics: 'DefenseCountStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      defenseCountStatistics: DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseCountStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDefenseCountStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDefenseCountStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRecordsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  instanceId?: string;
  startTime?: number;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      instanceId: 'string',
      startTime: 'number',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRecordsResponseBody extends $tea.Model {
  totalCount?: number;
  defenseRecords?: DescribeDefenseRecordsResponseBodyDefenseRecords[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      defenseRecords: 'DefenseRecords',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      defenseRecords: { 'type': 'array', 'itemType': DescribeDefenseRecordsResponseBodyDefenseRecords },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDefenseRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDefenseRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackEventsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime?: number;
  endTime?: number;
  domain?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      domain: 'Domain',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      endTime: 'number',
      domain: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackEventsResponseBody extends $tea.Model {
  totalCount?: number;
  domainAttackEvents?: DescribeDomainAttackEventsResponseBodyDomainAttackEvents[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      domainAttackEvents: 'DomainAttackEvents',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      domainAttackEvents: { 'type': 'array', 'itemType': DescribeDomainAttackEventsResponseBodyDomainAttackEvents },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainAttackEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainAttackEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainOverviewRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime?: number;
  endTime?: number;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      endTime: 'number',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainOverviewResponseBody extends $tea.Model {
  requestId?: string;
  maxHttps?: number;
  maxHttp?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      maxHttps: 'MaxHttps',
      maxHttp: 'MaxHttp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      maxHttps: 'number',
      maxHttp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainOverviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainOverviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQPSListRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime?: number;
  endTime?: number;
  interval?: number;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      endTime: 'number',
      interval: 'number',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQPSListResponseBody extends $tea.Model {
  domainQPSList?: DescribeDomainQPSListResponseBodyDomainQPSList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainQPSList: 'DomainQPSList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainQPSList: { 'type': 'array', 'itemType': DescribeDomainQPSListResponseBodyDomainQPSList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQPSListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainQPSListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainQPSListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsWithCacheRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsWithCacheResponseBody extends $tea.Model {
  ipBlockQps?: string[];
  ccJsQps?: string[];
  blocks?: string[];
  preciseBlocks?: string[];
  requestId?: string;
  preciseJsQps?: string[];
  totals?: string[];
  startTime?: number;
  ccBlockQps?: string[];
  interval?: number;
  regionBlocks?: string[];
  cacheHits?: string[];
  static names(): { [key: string]: string } {
    return {
      ipBlockQps: 'IpBlockQps',
      ccJsQps: 'CcJsQps',
      blocks: 'Blocks',
      preciseBlocks: 'PreciseBlocks',
      requestId: 'RequestId',
      preciseJsQps: 'PreciseJsQps',
      totals: 'Totals',
      startTime: 'StartTime',
      ccBlockQps: 'CcBlockQps',
      interval: 'Interval',
      regionBlocks: 'RegionBlocks',
      cacheHits: 'CacheHits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipBlockQps: { 'type': 'array', 'itemType': 'string' },
      ccJsQps: { 'type': 'array', 'itemType': 'string' },
      blocks: { 'type': 'array', 'itemType': 'string' },
      preciseBlocks: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      preciseJsQps: { 'type': 'array', 'itemType': 'string' },
      totals: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      ccBlockQps: { 'type': 'array', 'itemType': 'string' },
      interval: 'number',
      regionBlocks: { 'type': 'array', 'itemType': 'string' },
      cacheHits: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsWithCacheResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainQpsWithCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainQpsWithCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBody extends $tea.Model {
  domains?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeCountRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime?: number;
  endTime?: number;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      endTime: 'number',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeCountResponseBody extends $tea.Model {
  requestId?: string;
  status501?: number;
  status502?: number;
  status403?: number;
  status503?: number;
  status404?: number;
  status405?: number;
  status504?: number;
  status2XX?: number;
  status200?: number;
  status3XX?: number;
  status4XX?: number;
  status5XX?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status501: 'Status501',
      status502: 'Status502',
      status403: 'Status403',
      status503: 'Status503',
      status404: 'Status404',
      status405: 'Status405',
      status504: 'Status504',
      status2XX: 'Status2XX',
      status200: 'Status200',
      status3XX: 'Status3XX',
      status4XX: 'Status4XX',
      status5XX: 'Status5XX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status501: 'number',
      status502: 'number',
      status403: 'number',
      status503: 'number',
      status404: 'number',
      status405: 'number',
      status504: 'number',
      status2XX: 'number',
      status200: 'number',
      status3XX: 'number',
      status4XX: 'number',
      status5XX: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainStatusCodeCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainStatusCodeCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeListRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime?: number;
  endTime?: number;
  interval?: number;
  domain?: string;
  queryType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      domain: 'Domain',
      queryType: 'QueryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      endTime: 'number',
      interval: 'number',
      domain: 'string',
      queryType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeListResponseBody extends $tea.Model {
  requestId?: string;
  statusCodeList?: DescribeDomainStatusCodeListResponseBodyStatusCodeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusCodeList: 'StatusCodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusCodeList: { 'type': 'array', 'itemType': DescribeDomainStatusCodeListResponseBodyStatusCodeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainStatusCodeListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainStatusCodeListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopAttackListRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopAttackListResponseBody extends $tea.Model {
  attackList?: DescribeDomainTopAttackListResponseBodyAttackList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attackList: 'AttackList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackList: { 'type': 'array', 'itemType': DescribeDomainTopAttackListResponseBodyAttackList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopAttackListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainTopAttackListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainTopAttackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewSourceCountriesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime?: number;
  endTime?: number;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      endTime: 'number',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewSourceCountriesResponseBody extends $tea.Model {
  requestId?: string;
  sourceCountrys?: DescribeDomainViewSourceCountriesResponseBodySourceCountrys[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sourceCountrys: 'SourceCountrys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sourceCountrys: { 'type': 'array', 'itemType': DescribeDomainViewSourceCountriesResponseBodySourceCountrys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewSourceCountriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainViewSourceCountriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainViewSourceCountriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewSourceProvincesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime?: number;
  endTime?: number;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      endTime: 'number',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewSourceProvincesResponseBody extends $tea.Model {
  sourceProvinces?: DescribeDomainViewSourceProvincesResponseBodySourceProvinces[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceProvinces: 'SourceProvinces',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceProvinces: { 'type': 'array', 'itemType': DescribeDomainViewSourceProvincesResponseBodySourceProvinces },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewSourceProvincesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainViewSourceProvincesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainViewSourceProvincesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewTopCostTimeRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime?: number;
  endTime?: number;
  domain?: string;
  top?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      domain: 'Domain',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      endTime: 'number',
      domain: 'string',
      top: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewTopCostTimeResponseBody extends $tea.Model {
  requestId?: string;
  urlList?: DescribeDomainViewTopCostTimeResponseBodyUrlList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      urlList: { 'type': 'array', 'itemType': DescribeDomainViewTopCostTimeResponseBodyUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewTopCostTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainViewTopCostTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainViewTopCostTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewTopUrlRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime?: number;
  endTime?: number;
  domain?: string;
  top?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      domain: 'Domain',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      endTime: 'number',
      domain: 'string',
      top: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewTopUrlResponseBody extends $tea.Model {
  requestId?: string;
  urlList?: DescribeDomainViewTopUrlResponseBodyUrlList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      urlList: { 'type': 'array', 'itemType': DescribeDomainViewTopUrlResponseBodyUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewTopUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainViewTopUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainViewTopUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticBandwidthSpecRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticBandwidthSpecResponseBody extends $tea.Model {
  requestId?: string;
  elasticBandwidthSpec?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      elasticBandwidthSpec: 'ElasticBandwidthSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      elasticBandwidthSpec: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticBandwidthSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeElasticBandwidthSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeElasticBandwidthSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListRequest extends $tea.Model {
  sourceIp?: string;
  networkRules?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      networkRules: 'NetworkRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      networkRules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseBody extends $tea.Model {
  requestId?: string;
  healthCheckList?: DescribeHealthCheckListResponseBodyHealthCheckList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      healthCheckList: 'HealthCheckList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      healthCheckList: { 'type': 'array', 'itemType': DescribeHealthCheckListResponseBodyHealthCheckList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHealthCheckListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHealthCheckListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusRequest extends $tea.Model {
  sourceIp?: string;
  networkRules?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      networkRules: 'NetworkRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      networkRules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusResponseBody extends $tea.Model {
  requestId?: string;
  healthCheckStatus?: DescribeHealthCheckStatusResponseBodyHealthCheckStatus[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      healthCheckStatus: 'HealthCheckStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      healthCheckStatus: { 'type': 'array', 'itemType': DescribeHealthCheckStatusResponseBodyHealthCheckStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHealthCheckStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHealthCheckStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsRequest extends $tea.Model {
  sourceIp?: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponseBody extends $tea.Model {
  instanceDetails?: DescribeInstanceDetailsResponseBodyInstanceDetails[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceDetails: 'InstanceDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDetails: { 'type': 'array', 'itemType': DescribeInstanceDetailsResponseBodyInstanceDetails },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceIdsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  edition?: number;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      edition: 'Edition',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      edition: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceIdsResponseBody extends $tea.Model {
  requestId?: string;
  instanceIds?: DescribeInstanceIdsResponseBodyInstanceIds[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceIds: { 'type': 'array', 'itemType': DescribeInstanceIdsResponseBodyInstanceIds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  pageNumber?: string;
  pageSize?: string;
  ip?: string;
  remark?: string;
  edition?: number;
  enabled?: number;
  expireStartTime?: number;
  expireEndTime?: number;
  instanceIds?: string[];
  status?: number[];
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ip: 'Ip',
      remark: 'Remark',
      edition: 'Edition',
      enabled: 'Enabled',
      expireStartTime: 'ExpireStartTime',
      expireEndTime: 'ExpireEndTime',
      instanceIds: 'InstanceIds',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      ip: 'string',
      remark: 'string',
      edition: 'number',
      enabled: 'number',
      expireStartTime: 'number',
      expireEndTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      status: { 'type': 'array', 'itemType': 'number' },
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  instances?: DescribeInstancesResponseBodyInstances[];
  totalCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      totalCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsRequest extends $tea.Model {
  sourceIp?: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBody extends $tea.Model {
  requestId?: string;
  instanceSpecs?: DescribeInstanceSpecsResponseBodyInstanceSpecs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceSpecs: 'InstanceSpecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceSpecs: { 'type': 'array', 'itemType': DescribeInstanceSpecsResponseBodyInstanceSpecs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceSpecsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceSpecsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsRequest extends $tea.Model {
  sourceIp?: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponseBody extends $tea.Model {
  instanceStatistics?: DescribeInstanceStatisticsResponseBodyInstanceStatistics[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceStatistics: 'InstanceStatistics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatistics: { 'type': 'array', 'itemType': DescribeInstanceStatisticsResponseBodyInstanceStatistics },
      requestId: 'string',
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

export class DescribeInstanceStatusRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      productType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatusResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  instanceStatus?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      instanceStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL7RsPolicyRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  realServers?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      realServers: 'RealServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL7RsPolicyResponseBody extends $tea.Model {
  requestId?: string;
  attributes?: DescribeL7RsPolicyResponseBodyAttributes[];
  proxyMode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      attributes: 'Attributes',
      proxyMode: 'ProxyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      attributes: { 'type': 'array', 'itemType': DescribeL7RsPolicyResponseBodyAttributes },
      proxyMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL7RsPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeL7RsPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeL7RsPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreExistStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreExistStatusResponseBody extends $tea.Model {
  requestId?: string;
  existStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      existStatus: 'ExistStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      existStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreExistStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLogStoreExistStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLogStoreExistStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRegionBlockRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRegionBlockResponseBody extends $tea.Model {
  requestId?: string;
  config?: DescribeNetworkRegionBlockResponseBodyConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      config: DescribeNetworkRegionBlockResponseBodyConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRegionBlockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNetworkRegionBlockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNetworkRegionBlockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesRequest extends $tea.Model {
  sourceIp?: string;
  networkRules?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      networkRules: 'NetworkRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      networkRules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesResponseBody extends $tea.Model {
  networkRuleAttributes?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkRuleAttributes: 'NetworkRuleAttributes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRuleAttributes: { 'type': 'array', 'itemType': DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNetworkRuleAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNetworkRuleAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRulesRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  forwardProtocol?: string;
  frontendPort?: number;
  pageNumber?: number;
  pageSize?: number;
  isOffset?: boolean;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      isOffset: 'IsOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      forwardProtocol: 'string',
      frontendPort: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      isOffset: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRulesResponseBody extends $tea.Model {
  totalCount?: number;
  networkRules?: DescribeNetworkRulesResponseBodyNetworkRules[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      networkRules: 'NetworkRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      networkRules: { 'type': 'array', 'itemType': DescribeNetworkRulesResponseBodyNetworkRules },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNetworkRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNetworkRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  entityType?: number;
  entityObject?: string;
  startTime?: number;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      entityType: 'EntityType',
      entityObject: 'EntityObject',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      entityType: 'number',
      entityObject: 'string',
      startTime: 'number',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  opEntities?: DescribeOpEntitiesResponseBodyOpEntities[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      opEntities: 'OpEntities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      opEntities: { 'type': 'array', 'itemType': DescribeOpEntitiesResponseBodyOpEntities },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOpEntitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOpEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortAttackMaxFlowRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  endTime?: number;
  startTime?: number;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      endTime: 'number',
      startTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortAttackMaxFlowResponseBody extends $tea.Model {
  pps?: number;
  requestId?: string;
  bps?: number;
  static names(): { [key: string]: string } {
    return {
      pps: 'Pps',
      requestId: 'RequestId',
      bps: 'Bps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pps: 'number',
      requestId: 'string',
      bps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortAttackMaxFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePortAttackMaxFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePortAttackMaxFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortAutoCcStatusRequest extends $tea.Model {
  sourceIp?: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortAutoCcStatusResponseBody extends $tea.Model {
  requestId?: string;
  portAutoCcStatus?: DescribePortAutoCcStatusResponseBodyPortAutoCcStatus[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      portAutoCcStatus: 'PortAutoCcStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      portAutoCcStatus: { 'type': 'array', 'itemType': DescribePortAutoCcStatusResponseBodyPortAutoCcStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortAutoCcStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePortAutoCcStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePortAutoCcStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortConnsCountRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  endTime?: number;
  startTime?: number;
  port?: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      port: 'Port',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      endTime: 'number',
      startTime: 'number',
      port: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortConnsCountResponseBody extends $tea.Model {
  conns?: number;
  requestId?: string;
  cps?: number;
  inActConns?: number;
  actConns?: number;
  static names(): { [key: string]: string } {
    return {
      conns: 'Conns',
      requestId: 'RequestId',
      cps: 'Cps',
      inActConns: 'InActConns',
      actConns: 'ActConns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conns: 'number',
      requestId: 'string',
      cps: 'number',
      inActConns: 'number',
      actConns: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortConnsCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePortConnsCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePortConnsCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortConnsListRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  endTime?: number;
  startTime?: number;
  interval?: number;
  port?: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      interval: 'Interval',
      port: 'Port',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      endTime: 'number',
      startTime: 'number',
      interval: 'number',
      port: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortConnsListResponseBody extends $tea.Model {
  connsList?: DescribePortConnsListResponseBodyConnsList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connsList: 'ConnsList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connsList: { 'type': 'array', 'itemType': DescribePortConnsListResponseBodyConnsList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortConnsListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePortConnsListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePortConnsListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortFlowListRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  endTime?: number;
  startTime?: number;
  interval?: number;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      interval: 'Interval',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      endTime: 'number',
      startTime: 'number',
      interval: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortFlowListResponseBody extends $tea.Model {
  requestId?: string;
  portFlowList?: DescribePortFlowListResponseBodyPortFlowList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      portFlowList: 'PortFlowList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      portFlowList: { 'type': 'array', 'itemType': DescribePortFlowListResponseBodyPortFlowList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortFlowListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePortFlowListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePortFlowListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortMaxConnsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  endTime?: number;
  startTime?: number;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      endTime: 'number',
      startTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortMaxConnsResponseBody extends $tea.Model {
  portMaxConns?: DescribePortMaxConnsResponseBodyPortMaxConns[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      portMaxConns: 'PortMaxConns',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portMaxConns: { 'type': 'array', 'itemType': DescribePortMaxConnsResponseBodyPortMaxConns },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortMaxConnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePortMaxConnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePortMaxConnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceCountriesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  endTime?: number;
  startTime?: number;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      endTime: 'number',
      startTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceCountriesResponseBody extends $tea.Model {
  requestId?: string;
  sourceCountrys?: DescribePortViewSourceCountriesResponseBodySourceCountrys[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sourceCountrys: 'SourceCountrys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sourceCountrys: { 'type': 'array', 'itemType': DescribePortViewSourceCountriesResponseBodySourceCountrys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceCountriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePortViewSourceCountriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePortViewSourceCountriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceIspsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  endTime?: number;
  startTime?: number;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      endTime: 'number',
      startTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceIspsResponseBody extends $tea.Model {
  requestId?: string;
  isps?: DescribePortViewSourceIspsResponseBodyIsps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isps: 'Isps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isps: { 'type': 'array', 'itemType': DescribePortViewSourceIspsResponseBodyIsps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceIspsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePortViewSourceIspsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePortViewSourceIspsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceProvincesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  endTime?: number;
  startTime?: number;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      endTime: 'number',
      startTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceProvincesResponseBody extends $tea.Model {
  sourceProvinces?: DescribePortViewSourceProvincesResponseBodySourceProvinces[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceProvinces: 'SourceProvinces',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceProvinces: { 'type': 'array', 'itemType': DescribePortViewSourceProvincesResponseBodySourceProvinces },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceProvincesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePortViewSourceProvincesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePortViewSourceProvincesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefenseObjectsRequest extends $tea.Model {
  sourceIp?: string;
  policyId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      policyId: 'PolicyId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      policyId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefenseObjectsResponseBody extends $tea.Model {
  requestId?: string;
  objects?: DescribeSceneDefenseObjectsResponseBodyObjects[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      objects: 'Objects',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      objects: { 'type': 'array', 'itemType': DescribeSceneDefenseObjectsResponseBodyObjects },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefenseObjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSceneDefenseObjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSceneDefenseObjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefensePoliciesRequest extends $tea.Model {
  sourceIp?: string;
  template?: string;
  status?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      template: 'Template',
      status: 'Status',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      template: 'string',
      status: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefensePoliciesResponseBody extends $tea.Model {
  policies?: DescribeSceneDefensePoliciesResponseBodyPolicies[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': DescribeSceneDefensePoliciesResponseBodyPolicies },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefensePoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSceneDefensePoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSceneDefensePoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchedulerRulesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  ruleName?: string;
  offset?: number;
  pageNumber?: number;
  pageSize?: number;
  isOffset?: boolean;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      ruleName: 'RuleName',
      offset: 'Offset',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      isOffset: 'IsOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      ruleName: 'string',
      offset: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      isOffset: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchedulerRulesResponseBody extends $tea.Model {
  totalCount?: string;
  requestId?: string;
  schedulerRules?: DescribeSchedulerRulesResponseBodySchedulerRules[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      schedulerRules: 'SchedulerRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'string',
      requestId: 'string',
      schedulerRules: { 'type': 'array', 'itemType': DescribeSchedulerRulesResponseBodySchedulerRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchedulerRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSchedulerRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSchedulerRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsAuthStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsAuthStatusResponseBody extends $tea.Model {
  requestId?: string;
  slsAuthStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsAuthStatus: 'SlsAuthStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsAuthStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsAuthStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSlsAuthStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSlsAuthStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogstoreInfoRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogstoreInfoResponseBody extends $tea.Model {
  project?: string;
  requestId?: string;
  quota?: number;
  logStore?: string;
  used?: number;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      requestId: 'RequestId',
      quota: 'Quota',
      logStore: 'LogStore',
      used: 'Used',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      requestId: 'string',
      quota: 'number',
      logStore: 'string',
      used: 'number',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogstoreInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSlsLogstoreInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSlsLogstoreInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsOpenStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsOpenStatusResponseBody extends $tea.Model {
  requestId?: string;
  slsOpenStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsOpenStatus: 'SlsOpenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsOpenStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsOpenStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSlsOpenStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSlsOpenStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStsGrantStatusRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStsGrantStatusResponseBody extends $tea.Model {
  requestId?: string;
  stsGrant?: DescribeStsGrantStatusResponseBodyStsGrant;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stsGrant: 'StsGrant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stsGrant: DescribeStsGrantStatusResponseBodyStsGrant,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStsGrantStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStsGrantStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStsGrantStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeysRequest extends $tea.Model {
  sourceIp?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeysResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  tagKeys?: DescribeTagKeysResponseBodyTagKeys[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      tagKeys: { 'type': 'array', 'itemType': DescribeTagKeysResponseBodyTagKeys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagResourcesRequest extends $tea.Model {
  sourceIp?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  nextToken?: string;
  resourceIds?: string[];
  tags?: DescribeTagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceIds: 'ResourceIds',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      nextToken: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': DescribeTagResourcesRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: DescribeTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: DescribeTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnBlackholeCountRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnBlackholeCountResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  remainCount?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      remainCount: 'RemainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      remainCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnBlackholeCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUnBlackholeCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUnBlackholeCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnBlockCountRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnBlockCountResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  remainCount?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      remainCount: 'RemainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      remainCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnBlockCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUnBlockCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUnBlockCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogDispatchStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogDispatchStatusResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  slsConfigStatus?: DescribeWebAccessLogDispatchStatusResponseBodySlsConfigStatus[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      slsConfigStatus: 'SlsConfigStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      slsConfigStatus: { 'type': 'array', 'itemType': DescribeWebAccessLogDispatchStatusResponseBodySlsConfigStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogDispatchStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebAccessLogDispatchStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebAccessLogDispatchStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogEmptyCountRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogEmptyCountResponseBody extends $tea.Model {
  requestId?: string;
  availableCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      availableCount: 'AvailableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      availableCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogEmptyCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebAccessLogEmptyCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebAccessLogEmptyCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogStatusResponseBody extends $tea.Model {
  slsProject?: string;
  slsStatus?: boolean;
  requestId?: string;
  slsLogstore?: string;
  static names(): { [key: string]: string } {
    return {
      slsProject: 'SlsProject',
      slsStatus: 'SlsStatus',
      requestId: 'RequestId',
      slsLogstore: 'SlsLogstore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsProject: 'string',
      slsStatus: 'boolean',
      requestId: 'string',
      slsLogstore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebAccessLogStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebAccessLogStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessModeRequest extends $tea.Model {
  sourceIp?: string;
  domains?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessModeResponseBody extends $tea.Model {
  requestId?: string;
  domainModes?: DescribeWebAccessModeResponseBodyDomainModes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainModes: 'DomainModes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainModes: { 'type': 'array', 'itemType': DescribeWebAccessModeResponseBodyDomainModes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebAccessModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebAccessModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAreaBlockConfigsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domains?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAreaBlockConfigsResponseBody extends $tea.Model {
  areaBlockConfigs?: DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      areaBlockConfigs: 'AreaBlockConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaBlockConfigs: { 'type': 'array', 'itemType': DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAreaBlockConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebAreaBlockConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebAreaBlockConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCacheConfigsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domains?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCacheConfigsResponseBody extends $tea.Model {
  requestId?: string;
  domainCacheConfigs?: DescribeWebCacheConfigsResponseBodyDomainCacheConfigs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainCacheConfigs: 'DomainCacheConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainCacheConfigs: { 'type': 'array', 'itemType': DescribeWebCacheConfigsResponseBodyDomainCacheConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCacheConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebCacheConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebCacheConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCcProtectSwitchRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domains?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCcProtectSwitchResponseBody extends $tea.Model {
  requestId?: string;
  protectSwitchList?: DescribeWebCcProtectSwitchResponseBodyProtectSwitchList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      protectSwitchList: 'ProtectSwitchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      protectSwitchList: { 'type': 'array', 'itemType': DescribeWebCcProtectSwitchResponseBodyProtectSwitchList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCcProtectSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebCcProtectSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebCcProtectSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCCRulesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  offset?: number;
  pageNumber?: number;
  pageSize?: string;
  isOffset?: boolean;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      offset: 'Offset',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      isOffset: 'IsOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      offset: 'number',
      pageNumber: 'number',
      pageSize: 'string',
      isOffset: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCCRulesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  webCCRules?: DescribeWebCCRulesResponseBodyWebCCRules[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      webCCRules: 'WebCCRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      webCCRules: { 'type': 'array', 'itemType': DescribeWebCCRulesResponseBodyWebCCRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCCRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebCCRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebCCRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCustomPortsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCustomPortsResponseBody extends $tea.Model {
  requestId?: string;
  webCustomPorts?: DescribeWebCustomPortsResponseBodyWebCustomPorts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      webCustomPorts: 'WebCustomPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      webCustomPorts: { 'type': 'array', 'itemType': DescribeWebCustomPortsResponseBodyWebCustomPorts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCustomPortsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebCustomPortsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebCustomPortsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebInstanceRelationsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domains?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebInstanceRelationsResponseBody extends $tea.Model {
  requestId?: string;
  webInstanceRelations?: DescribeWebInstanceRelationsResponseBodyWebInstanceRelations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      webInstanceRelations: 'WebInstanceRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      webInstanceRelations: { 'type': 'array', 'itemType': DescribeWebInstanceRelationsResponseBodyWebInstanceRelations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebInstanceRelationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebInstanceRelationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebInstanceRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebPreciseAccessRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domains?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebPreciseAccessRuleResponseBody extends $tea.Model {
  preciseAccessConfigList?: DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      preciseAccessConfigList: 'PreciseAccessConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preciseAccessConfigList: { 'type': 'array', 'itemType': DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebPreciseAccessRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebPreciseAccessRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebPreciseAccessRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebRulesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  queryDomainPattern?: string;
  pageNumber?: number;
  pageSize?: number;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      queryDomainPattern: 'QueryDomainPattern',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      queryDomainPattern: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebRulesResponseBody extends $tea.Model {
  totalCount?: number;
  webRules?: DescribeWebRulesResponseBodyWebRules[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      webRules: 'WebRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      webRules: { 'type': 'array', 'itemType': DescribeWebRulesResponseBodyWebRules },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSceneDefenseObjectRequest extends $tea.Model {
  sourceIp?: string;
  policyId?: string;
  objectType?: string;
  objects?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      policyId: 'PolicyId',
      objectType: 'ObjectType',
      objects: 'Objects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      policyId: 'string',
      objectType: 'string',
      objects: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSceneDefenseObjectResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSceneDefenseObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachSceneDefenseObjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachSceneDefenseObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSceneDefensePolicyRequest extends $tea.Model {
  sourceIp?: string;
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSceneDefensePolicyResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSceneDefensePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableSceneDefensePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableSceneDefensePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableWebAccessLogConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableWebAccessLogConfigResponseBody extends $tea.Model {
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

export class DisableWebAccessLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableWebAccessLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableWebAccessLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableWebCCRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableWebCCResponseBody extends $tea.Model {
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

export class DisableWebCCResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableWebCCResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableWebCCResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableWebCCRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableWebCCRuleResponseBody extends $tea.Model {
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

export class DisableWebCCRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableWebCCRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableWebCCRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmptyAutoCcBlacklistRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmptyAutoCcBlacklistResponseBody extends $tea.Model {
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

export class EmptyAutoCcBlacklistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EmptyAutoCcBlacklistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EmptyAutoCcBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmptyAutoCcWhitelistRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmptyAutoCcWhitelistResponseBody extends $tea.Model {
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

export class EmptyAutoCcWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EmptyAutoCcWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EmptyAutoCcWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmptySlsLogstoreRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmptySlsLogstoreResponseBody extends $tea.Model {
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

export class EmptySlsLogstoreResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EmptySlsLogstoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EmptySlsLogstoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSceneDefensePolicyRequest extends $tea.Model {
  sourceIp?: string;
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSceneDefensePolicyResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSceneDefensePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableSceneDefensePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableSceneDefensePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWebAccessLogConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWebAccessLogConfigResponseBody extends $tea.Model {
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

export class EnableWebAccessLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableWebAccessLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableWebAccessLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWebCCRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWebCCResponseBody extends $tea.Model {
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

export class EnableWebCCResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableWebCCResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableWebCCResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWebCCRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWebCCRuleResponseBody extends $tea.Model {
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

export class EnableWebCCRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableWebCCRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableWebCCRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBlackholeStatusRequest extends $tea.Model {
  sourceIp?: string;
  blackholeStatus?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      blackholeStatus: 'BlackholeStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      blackholeStatus: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBlackholeStatusResponseBody extends $tea.Model {
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

export class ModifyBlackholeStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBlackholeStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBlackholeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBlockStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  status?: string;
  duration?: number;
  instanceId?: string;
  lines?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      status: 'Status',
      duration: 'Duration',
      instanceId: 'InstanceId',
      lines: 'Lines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      status: 'string',
      duration: 'number',
      instanceId: 'string',
      lines: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBlockStatusResponseBody extends $tea.Model {
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

export class ModifyBlockStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBlockStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBlockStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCnameReuseRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  cname?: string;
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      cname: 'Cname',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      cname: 'string',
      enable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCnameReuseResponseBody extends $tea.Model {
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

export class ModifyCnameReuseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCnameReuseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCnameReuseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticBandWidthRequest extends $tea.Model {
  sourceIp?: string;
  elasticBandwidth?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      elasticBandwidth: 'ElasticBandwidth',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      elasticBandwidth: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticBandWidthResponseBody extends $tea.Model {
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

export class ModifyElasticBandWidthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyElasticBandWidthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyElasticBandWidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFullLogTtlRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ttl?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ttl: 'Ttl',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ttl: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFullLogTtlResponseBody extends $tea.Model {
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

export class ModifyFullLogTtlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFullLogTtlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFullLogTtlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHealthCheckConfigRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  forwardProtocol?: string;
  frontendPort?: number;
  healthCheck?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      healthCheck: 'HealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      forwardProtocol: 'string',
      frontendPort: 'number',
      healthCheck: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHealthCheckConfigResponseBody extends $tea.Model {
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

export class ModifyHealthCheckConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyHealthCheckConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyHealthCheckConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHttp2EnableRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      enable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHttp2EnableResponseBody extends $tea.Model {
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

export class ModifyHttp2EnableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyHttp2EnableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyHttp2EnableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRemarkRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRemarkResponseBody extends $tea.Model {
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

export class ModifyInstanceRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkRuleAttributeRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  forwardProtocol?: string;
  frontendPort?: number;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      forwardProtocol: 'string',
      frontendPort: 'number',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkRuleAttributeResponseBody extends $tea.Model {
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

export class ModifyNetworkRuleAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyNetworkRuleAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyNetworkRuleAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPortAutoCcStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  switch?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      switch: 'Switch',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      switch: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPortAutoCcStatusResponseBody extends $tea.Model {
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

export class ModifyPortAutoCcStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPortAutoCcStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPortAutoCcStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySceneDefensePolicyRequest extends $tea.Model {
  sourceIp?: string;
  policyId?: string;
  name?: string;
  template?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      policyId: 'PolicyId',
      name: 'Name',
      template: 'Template',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      policyId: 'string',
      name: 'string',
      template: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySceneDefensePolicyResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySceneDefensePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySceneDefensePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySceneDefensePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySchedulerRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  rules?: string;
  ruleName?: string;
  ruleType?: number;
  param?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      rules: 'Rules',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      param: 'Param',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      rules: 'string',
      ruleName: 'string',
      ruleType: 'number',
      param: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySchedulerRuleResponseBody extends $tea.Model {
  requestId?: string;
  cname?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cname: 'Cname',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cname: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySchedulerRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySchedulerRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySchedulerRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTlsConfigRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTlsConfigResponseBody extends $tea.Model {
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

export class ModifyTlsConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyTlsConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyTlsConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebAccessModeRequest extends $tea.Model {
  sourceIp?: string;
  domain?: string;
  accessMode?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      domain: 'Domain',
      accessMode: 'AccessMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      domain: 'string',
      accessMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebAccessModeResponseBody extends $tea.Model {
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

export class ModifyWebAccessModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebAccessModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebAccessModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebAIProtectModeRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebAIProtectModeResponseBody extends $tea.Model {
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

export class ModifyWebAIProtectModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebAIProtectModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebAIProtectModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebAIProtectSwitchRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebAIProtectSwitchResponseBody extends $tea.Model {
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

export class ModifyWebAIProtectSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebAIProtectSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebAIProtectSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebAreaBlockRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  regions?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      regions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebAreaBlockResponseBody extends $tea.Model {
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

export class ModifyWebAreaBlockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebAreaBlockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebAreaBlockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebAreaBlockSwitchRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebAreaBlockSwitchResponseBody extends $tea.Model {
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

export class ModifyWebAreaBlockSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebAreaBlockSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebAreaBlockSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebCacheCustomRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      rules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebCacheCustomRuleResponseBody extends $tea.Model {
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

export class ModifyWebCacheCustomRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebCacheCustomRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebCacheCustomRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebCacheModeRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebCacheModeResponseBody extends $tea.Model {
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

export class ModifyWebCacheModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebCacheModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebCacheModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebCacheSwitchRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      enable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebCacheSwitchResponseBody extends $tea.Model {
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

export class ModifyWebCacheSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebCacheSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebCacheSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebCCRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  name?: string;
  act?: string;
  count?: number;
  interval?: number;
  mode?: string;
  ttl?: number;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      name: 'Name',
      act: 'Act',
      count: 'Count',
      interval: 'Interval',
      mode: 'Mode',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      name: 'string',
      act: 'string',
      count: 'number',
      interval: 'number',
      mode: 'string',
      ttl: 'number',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebCCRuleResponseBody extends $tea.Model {
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

export class ModifyWebCCRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebCCRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebCCRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebIpSetSwitchRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebIpSetSwitchResponseBody extends $tea.Model {
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

export class ModifyWebIpSetSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebIpSetSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebIpSetSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebPreciseAccessRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  rules?: string;
  expires?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      rules: 'Rules',
      expires: 'Expires',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      rules: 'string',
      expires: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebPreciseAccessRuleResponseBody extends $tea.Model {
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

export class ModifyWebPreciseAccessRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebPreciseAccessRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebPreciseAccessRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebPreciseAccessSwitchRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebPreciseAccessSwitchResponseBody extends $tea.Model {
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

export class ModifyWebPreciseAccessSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebPreciseAccessSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebPreciseAccessSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  proxyTypes?: string;
  rsType?: number;
  httpsExt?: string;
  realServers?: string[];
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      proxyTypes: 'ProxyTypes',
      rsType: 'RsType',
      httpsExt: 'HttpsExt',
      realServers: 'RealServers',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      proxyTypes: 'string',
      rsType: 'number',
      httpsExt: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebRuleResponseBody extends $tea.Model {
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

export class ModifyWebRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponseBody extends $tea.Model {
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

export class ReleaseInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSchedulerRuleRequest extends $tea.Model {
  sourceIp?: string;
  ruleName?: string;
  ruleType?: number;
  switchData?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      switchData: 'SwitchData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      ruleName: 'string',
      ruleType: 'number',
      switchData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSchedulerRuleResponseBody extends $tea.Model {
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

export class SwitchSchedulerRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SwitchSchedulerRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SwitchSchedulerRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResourcesRequestTags extends $tea.Model {
  key?: string;
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

export class DescribeAsyncTasksResponseBodyAsyncTasks extends $tea.Model {
  endTime?: number;
  taskType?: number;
  startTime?: number;
  taskParams?: string;
  taskStatus?: number;
  taskResult?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      taskType: 'TaskType',
      startTime: 'StartTime',
      taskParams: 'TaskParams',
      taskStatus: 'TaskStatus',
      taskResult: 'TaskResult',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      taskType: 'number',
      startTime: 'number',
      taskParams: 'string',
      taskStatus: 'number',
      taskResult: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcBlacklistResponseBodyAutoCcBlacklist extends $tea.Model {
  type?: string;
  endTime?: number;
  sourceIp?: string;
  destIp?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      endTime: 'EndTime',
      sourceIp: 'SourceIp',
      destIp: 'DestIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      endTime: 'number',
      sourceIp: 'string',
      destIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcWhitelistResponseBodyAutoCcWhitelist extends $tea.Model {
  type?: string;
  endTime?: number;
  sourceIp?: string;
  destIp?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      endTime: 'EndTime',
      sourceIp: 'SourceIp',
      destIp: 'DestIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      endTime: 'number',
      sourceIp: 'string',
      destIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackholeStatusResponseBodyBlackholeStatus extends $tea.Model {
  endTime?: number;
  startTime?: number;
  ip?: string;
  blackStatus?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      ip: 'Ip',
      blackStatus: 'BlackStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      ip: 'string',
      blackStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockStatusResponseBodyStatusListBlockStatusList extends $tea.Model {
  endTime?: number;
  startTime?: number;
  line?: string;
  blockStatus?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      line: 'Line',
      blockStatus: 'BlockStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      line: 'string',
      blockStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockStatusResponseBodyStatusList extends $tea.Model {
  ip?: string;
  blockStatusList?: DescribeBlockStatusResponseBodyStatusListBlockStatusList[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      blockStatusList: 'BlockStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      blockStatusList: { 'type': 'array', 'itemType': DescribeBlockStatusResponseBodyStatusListBlockStatusList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertsResponseBodyCerts extends $tea.Model {
  endDate?: string;
  domainRelated?: boolean;
  startDate?: string;
  issuer?: string;
  name?: string;
  common?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      domainRelated: 'DomainRelated',
      startDate: 'StartDate',
      issuer: 'Issuer',
      name: 'Name',
      common: 'Common',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      domainRelated: 'boolean',
      startDate: 'string',
      issuer: 'string',
      name: 'string',
      common: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameReusesResponseBodyCnameReuses extends $tea.Model {
  domain?: string;
  cname?: string;
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      cname: 'Cname',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      cname: 'string',
      enable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosAllEventListResponseBodyAttackEvents extends $tea.Model {
  endTime?: number;
  startTime?: number;
  eventType?: string;
  mbps?: number;
  ip?: string;
  port?: string;
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      eventType: 'EventType',
      mbps: 'Mbps',
      ip: 'Ip',
      port: 'Port',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      eventType: 'string',
      mbps: 'number',
      ip: 'string',
      port: 'string',
      pps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventAreaResponseBodyAreas extends $tea.Model {
  inPkts?: number;
  area?: string;
  static names(): { [key: string]: string } {
    return {
      inPkts: 'InPkts',
      area: 'Area',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inPkts: 'number',
      area: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventAttackTypeResponseBodyAttackTypes extends $tea.Model {
  attackType?: string;
  inPkts?: number;
  static names(): { [key: string]: string } {
    return {
      attackType: 'AttackType',
      inPkts: 'InPkts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackType: 'string',
      inPkts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventIspResponseBodyIsps extends $tea.Model {
  inPkts?: number;
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      inPkts: 'InPkts',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inPkts: 'number',
      isp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsResponseBodyDDoSEvents extends $tea.Model {
  endTime?: number;
  startTime?: number;
  eventType?: string;
  region?: string;
  ip?: string;
  port?: string;
  bps?: number;
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      eventType: 'EventType',
      region: 'Region',
      ip: 'Ip',
      port: 'Port',
      bps: 'Bps',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      eventType: 'string',
      region: 'string',
      ip: 'string',
      port: 'string',
      bps: 'number',
      pps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventSrcIpResponseBodyIps extends $tea.Model {
  srcIp?: string;
  areaId?: string;
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      srcIp: 'SrcIp',
      areaId: 'AreaId',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcIp: 'string',
      areaId: 'string',
      isp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics extends $tea.Model {
  maxUsableDefenseCountCurrentMonth?: number;
  flowPackCountRemain?: number;
  defenseCountTotalUsageOfCurrentMonth?: number;
  static names(): { [key: string]: string } {
    return {
      maxUsableDefenseCountCurrentMonth: 'MaxUsableDefenseCountCurrentMonth',
      flowPackCountRemain: 'FlowPackCountRemain',
      defenseCountTotalUsageOfCurrentMonth: 'DefenseCountTotalUsageOfCurrentMonth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxUsableDefenseCountCurrentMonth: 'number',
      flowPackCountRemain: 'number',
      defenseCountTotalUsageOfCurrentMonth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRecordsResponseBodyDefenseRecords extends $tea.Model {
  endTime?: number;
  status?: number;
  startTime?: number;
  eventCount?: number;
  instanceId?: string;
  attackPeak?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      status: 'Status',
      startTime: 'StartTime',
      eventCount: 'EventCount',
      instanceId: 'InstanceId',
      attackPeak: 'AttackPeak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      status: 'number',
      startTime: 'number',
      eventCount: 'number',
      instanceId: 'string',
      attackPeak: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackEventsResponseBodyDomainAttackEvents extends $tea.Model {
  endTime?: number;
  startTime?: number;
  domain?: string;
  maxQps?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      domain: 'Domain',
      maxQps: 'MaxQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      domain: 'string',
      maxQps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQPSListResponseBodyDomainQPSList extends $tea.Model {
  index?: number;
  time?: number;
  maxAttackQps?: number;
  attackQps?: number;
  maxQps?: number;
  maxNormalQps?: number;
  totalQps?: number;
  totalCount?: number;
  cacheHits?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      time: 'Time',
      maxAttackQps: 'MaxAttackQps',
      attackQps: 'AttackQps',
      maxQps: 'MaxQps',
      maxNormalQps: 'MaxNormalQps',
      totalQps: 'TotalQps',
      totalCount: 'TotalCount',
      cacheHits: 'CacheHits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      time: 'number',
      maxAttackQps: 'number',
      attackQps: 'number',
      maxQps: 'number',
      maxNormalQps: 'number',
      totalQps: 'number',
      totalCount: 'number',
      cacheHits: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeListResponseBodyStatusCodeList extends $tea.Model {
  status502?: number;
  index?: number;
  time?: number;
  status405?: number;
  status3XX?: number;
  status503?: number;
  status4XX?: number;
  status2XX?: number;
  status5XX?: number;
  status504?: number;
  status403?: number;
  status200?: number;
  status404?: number;
  status501?: number;
  static names(): { [key: string]: string } {
    return {
      status502: 'Status502',
      index: 'Index',
      time: 'Time',
      status405: 'Status405',
      status3XX: 'Status3XX',
      status503: 'Status503',
      status4XX: 'Status4XX',
      status2XX: 'Status2XX',
      status5XX: 'Status5XX',
      status504: 'Status504',
      status403: 'Status403',
      status200: 'Status200',
      status404: 'Status404',
      status501: 'Status501',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status502: 'number',
      index: 'number',
      time: 'number',
      status405: 'number',
      status3XX: 'number',
      status503: 'number',
      status4XX: 'number',
      status2XX: 'number',
      status5XX: 'number',
      status504: 'number',
      status403: 'number',
      status200: 'number',
      status404: 'number',
      status501: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopAttackListResponseBodyAttackList extends $tea.Model {
  attack?: number;
  domain?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      attack: 'Attack',
      domain: 'Domain',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attack: 'number',
      domain: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewSourceCountriesResponseBodySourceCountrys extends $tea.Model {
  countryId?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      countryId: 'CountryId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countryId: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewSourceProvincesResponseBodySourceProvinces extends $tea.Model {
  provinceId?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      provinceId: 'ProvinceId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provinceId: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewTopCostTimeResponseBodyUrlList extends $tea.Model {
  domain?: string;
  costTime?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      costTime: 'CostTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      costTime: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewTopUrlResponseBodyUrlList extends $tea.Model {
  domain?: string;
  url?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      url: 'Url',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      url: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseBodyHealthCheckListHealthCheck extends $tea.Model {
  timeout?: number;
  type?: string;
  domain?: string;
  interval?: number;
  up?: number;
  down?: number;
  port?: number;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      timeout: 'Timeout',
      type: 'Type',
      domain: 'Domain',
      interval: 'Interval',
      up: 'Up',
      down: 'Down',
      port: 'Port',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeout: 'number',
      type: 'string',
      domain: 'string',
      interval: 'number',
      up: 'number',
      down: 'number',
      port: 'number',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseBodyHealthCheckList extends $tea.Model {
  frontendPort?: number;
  protocol?: string;
  instanceId?: string;
  healthCheck?: DescribeHealthCheckListResponseBodyHealthCheckListHealthCheck;
  static names(): { [key: string]: string } {
    return {
      frontendPort: 'FrontendPort',
      protocol: 'Protocol',
      instanceId: 'InstanceId',
      healthCheck: 'HealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendPort: 'number',
      protocol: 'string',
      instanceId: 'string',
      healthCheck: DescribeHealthCheckListResponseBodyHealthCheckListHealthCheck,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusResponseBodyHealthCheckStatusRealServerStatusList extends $tea.Model {
  status?: string;
  address?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      address: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusResponseBodyHealthCheckStatus extends $tea.Model {
  status?: string;
  frontendPort?: number;
  protocol?: string;
  instanceId?: string;
  realServerStatusList?: DescribeHealthCheckStatusResponseBodyHealthCheckStatusRealServerStatusList[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      frontendPort: 'FrontendPort',
      protocol: 'Protocol',
      instanceId: 'InstanceId',
      realServerStatusList: 'RealServerStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      frontendPort: 'number',
      protocol: 'string',
      instanceId: 'string',
      realServerStatusList: { 'type': 'array', 'itemType': DescribeHealthCheckStatusResponseBodyHealthCheckStatusRealServerStatusList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfos extends $tea.Model {
  status?: string;
  eip?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      eip: 'Eip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      eip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponseBodyInstanceDetails extends $tea.Model {
  line?: string;
  instanceId?: string;
  eipInfos?: DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfos[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      instanceId: 'InstanceId',
      eipInfos: 'EipInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: 'string',
      instanceId: 'string',
      eipInfos: { 'type': 'array', 'itemType': DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceIdsResponseBodyInstanceIds extends $tea.Model {
  edition?: number;
  remark?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      remark: 'Remark',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'number',
      remark: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequestTag extends $tea.Model {
  key?: string;
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

export class DescribeInstancesResponseBodyInstances extends $tea.Model {
  status?: number;
  debtStatus?: number;
  edition?: number;
  expireTime?: number;
  remark?: string;
  createTime?: number;
  enabled?: number;
  instanceId?: string;
  connInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      debtStatus: 'DebtStatus',
      edition: 'Edition',
      expireTime: 'ExpireTime',
      remark: 'Remark',
      createTime: 'CreateTime',
      enabled: 'Enabled',
      instanceId: 'InstanceId',
      connInstanceId: 'ConnInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      debtStatus: 'number',
      edition: 'number',
      expireTime: 'number',
      remark: 'string',
      createTime: 'number',
      enabled: 'number',
      instanceId: 'string',
      connInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBodyInstanceSpecs extends $tea.Model {
  baseBandwidth?: number;
  qpsLimit?: number;
  bandwidthMbps?: number;
  defenseCount?: number;
  siteLimit?: number;
  portLimit?: number;
  elasticBandwidth?: number;
  functionVersion?: string;
  instanceId?: string;
  domainLimit?: number;
  static names(): { [key: string]: string } {
    return {
      baseBandwidth: 'BaseBandwidth',
      qpsLimit: 'QpsLimit',
      bandwidthMbps: 'BandwidthMbps',
      defenseCount: 'DefenseCount',
      siteLimit: 'SiteLimit',
      portLimit: 'PortLimit',
      elasticBandwidth: 'ElasticBandwidth',
      functionVersion: 'FunctionVersion',
      instanceId: 'InstanceId',
      domainLimit: 'DomainLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseBandwidth: 'number',
      qpsLimit: 'number',
      bandwidthMbps: 'number',
      defenseCount: 'number',
      siteLimit: 'number',
      portLimit: 'number',
      elasticBandwidth: 'number',
      functionVersion: 'string',
      instanceId: 'string',
      domainLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponseBodyInstanceStatistics extends $tea.Model {
  domainUsage?: number;
  defenseCountUsage?: number;
  instanceId?: string;
  siteUsage?: number;
  portUsage?: number;
  static names(): { [key: string]: string } {
    return {
      domainUsage: 'DomainUsage',
      defenseCountUsage: 'DefenseCountUsage',
      instanceId: 'InstanceId',
      siteUsage: 'SiteUsage',
      portUsage: 'PortUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainUsage: 'number',
      defenseCountUsage: 'number',
      instanceId: 'string',
      siteUsage: 'number',
      portUsage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL7RsPolicyResponseBodyAttributesAttribute extends $tea.Model {
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL7RsPolicyResponseBodyAttributes extends $tea.Model {
  rsType?: number;
  attribute?: DescribeL7RsPolicyResponseBodyAttributesAttribute;
  realServer?: string;
  static names(): { [key: string]: string } {
    return {
      rsType: 'RsType',
      attribute: 'Attribute',
      realServer: 'RealServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rsType: 'number',
      attribute: DescribeL7RsPolicyResponseBodyAttributesAttribute,
      realServer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRegionBlockResponseBodyConfig extends $tea.Model {
  regionBlockSwitch?: string;
  provinces?: string[];
  countries?: string[];
  static names(): { [key: string]: string } {
    return {
      regionBlockSwitch: 'RegionBlockSwitch',
      provinces: 'Provinces',
      countries: 'Countries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionBlockSwitch: 'string',
      provinces: { 'type': 'array', 'itemType': 'string' },
      countries: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCcSblack extends $tea.Model {
  type?: number;
  expires?: number;
  during?: number;
  cnt?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      expires: 'Expires',
      during: 'During',
      cnt: 'Cnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      expires: 'number',
      during: 'number',
      cnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCc extends $tea.Model {
  sblack?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCcSblack[];
  static names(): { [key: string]: string } {
    return {
      sblack: 'Sblack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sblack: { 'type': 'array', 'itemType': DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCcSblack },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigPayloadLen extends $tea.Model {
  max?: number;
  min?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSla extends $tea.Model {
  maxconnEnable?: number;
  cpsEnable?: number;
  cps?: number;
  maxconn?: number;
  static names(): { [key: string]: string } {
    return {
      maxconnEnable: 'MaxconnEnable',
      cpsEnable: 'CpsEnable',
      cps: 'Cps',
      maxconn: 'Maxconn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxconnEnable: 'number',
      cpsEnable: 'number',
      cps: 'number',
      maxconn: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSlimit extends $tea.Model {
  maxconnEnable?: number;
  cpsEnable?: number;
  cps?: number;
  pps?: number;
  bps?: number;
  maxconn?: number;
  cpsMode?: number;
  static names(): { [key: string]: string } {
    return {
      maxconnEnable: 'MaxconnEnable',
      cpsEnable: 'CpsEnable',
      cps: 'Cps',
      pps: 'Pps',
      bps: 'Bps',
      maxconn: 'Maxconn',
      cpsMode: 'CpsMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxconnEnable: 'number',
      cpsEnable: 'number',
      cps: 'number',
      pps: 'number',
      bps: 'number',
      maxconn: 'number',
      cpsMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfig extends $tea.Model {
  cc?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCc;
  payloadLen?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigPayloadLen;
  persistenceTimeout?: number;
  sla?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSla;
  slimit?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSlimit;
  nodataConn?: string;
  synproxy?: string;
  static names(): { [key: string]: string } {
    return {
      cc: 'Cc',
      payloadLen: 'PayloadLen',
      persistenceTimeout: 'PersistenceTimeout',
      sla: 'Sla',
      slimit: 'Slimit',
      nodataConn: 'NodataConn',
      synproxy: 'Synproxy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cc: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCc,
      payloadLen: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigPayloadLen,
      persistenceTimeout: 'number',
      sla: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSla,
      slimit: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSlimit,
      nodataConn: 'string',
      synproxy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributes extends $tea.Model {
  frontendPort?: number;
  protocol?: string;
  instanceId?: string;
  config?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfig;
  static names(): { [key: string]: string } {
    return {
      frontendPort: 'FrontendPort',
      protocol: 'Protocol',
      instanceId: 'InstanceId',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendPort: 'number',
      protocol: 'string',
      instanceId: 'string',
      config: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRulesResponseBodyNetworkRules extends $tea.Model {
  frontendPort?: number;
  isAutoCreate?: boolean;
  protocol?: string;
  realServers?: string[];
  instanceId?: string;
  backendPort?: number;
  static names(): { [key: string]: string } {
    return {
      frontendPort: 'FrontendPort',
      isAutoCreate: 'IsAutoCreate',
      protocol: 'Protocol',
      realServers: 'RealServers',
      instanceId: 'InstanceId',
      backendPort: 'BackendPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendPort: 'number',
      isAutoCreate: 'boolean',
      protocol: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      backendPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponseBodyOpEntities extends $tea.Model {
  entityType?: number;
  entityObject?: string;
  gmtCreate?: number;
  opAction?: number;
  opAccount?: string;
  opDesc?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      entityObject: 'EntityObject',
      gmtCreate: 'GmtCreate',
      opAction: 'OpAction',
      opAccount: 'OpAccount',
      opDesc: 'OpDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'number',
      entityObject: 'string',
      gmtCreate: 'number',
      opAction: 'number',
      opAccount: 'string',
      opDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortAutoCcStatusResponseBodyPortAutoCcStatus extends $tea.Model {
  switch?: string;
  mode?: string;
  webSwitch?: string;
  webMode?: string;
  static names(): { [key: string]: string } {
    return {
      switch: 'Switch',
      mode: 'Mode',
      webSwitch: 'WebSwitch',
      webMode: 'WebMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switch: 'string',
      mode: 'string',
      webSwitch: 'string',
      webMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortConnsListResponseBodyConnsList extends $tea.Model {
  actConns?: number;
  inActConns?: number;
  index?: number;
  time?: number;
  cps?: number;
  conns?: number;
  static names(): { [key: string]: string } {
    return {
      actConns: 'ActConns',
      inActConns: 'InActConns',
      index: 'Index',
      time: 'Time',
      cps: 'Cps',
      conns: 'Conns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actConns: 'number',
      inActConns: 'number',
      index: 'number',
      time: 'number',
      cps: 'number',
      conns: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortFlowListResponseBodyPortFlowList extends $tea.Model {
  index?: number;
  time?: number;
  inPps?: number;
  inBps?: number;
  region?: string;
  outPps?: number;
  attackPps?: number;
  outBps?: number;
  attackBps?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      time: 'Time',
      inPps: 'InPps',
      inBps: 'InBps',
      region: 'Region',
      outPps: 'OutPps',
      attackPps: 'AttackPps',
      outBps: 'OutBps',
      attackBps: 'AttackBps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      time: 'number',
      inPps: 'number',
      inBps: 'number',
      region: 'string',
      outPps: 'number',
      attackPps: 'number',
      outBps: 'number',
      attackBps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortMaxConnsResponseBodyPortMaxConns extends $tea.Model {
  cps?: number;
  ip?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      cps: 'Cps',
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cps: 'number',
      ip: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceCountriesResponseBodySourceCountrys extends $tea.Model {
  countryId?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      countryId: 'CountryId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countryId: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceIspsResponseBodyIsps extends $tea.Model {
  ispId?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      ispId: 'IspId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispId: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceProvincesResponseBodySourceProvinces extends $tea.Model {
  provinceId?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      provinceId: 'ProvinceId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provinceId: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefenseObjectsResponseBodyObjects extends $tea.Model {
  domain?: string;
  policyId?: string;
  vip?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      policyId: 'PolicyId',
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      policyId: 'string',
      vip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefensePoliciesResponseBodyPoliciesRuntimePolicies extends $tea.Model {
  status?: number;
  oldValue?: string;
  newValue?: string;
  policyType?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      oldValue: 'oldValue',
      newValue: 'NewValue',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      oldValue: 'string',
      newValue: 'string',
      policyType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefensePoliciesResponseBodyPolicies extends $tea.Model {
  done?: number;
  endTime?: number;
  status?: number;
  startTime?: number;
  objectCount?: number;
  template?: string;
  policyId?: string;
  name?: string;
  runtimePolicies?: DescribeSceneDefensePoliciesResponseBodyPoliciesRuntimePolicies[];
  static names(): { [key: string]: string } {
    return {
      done: 'Done',
      endTime: 'EndTime',
      status: 'Status',
      startTime: 'StartTime',
      objectCount: 'ObjectCount',
      template: 'Template',
      policyId: 'PolicyId',
      name: 'Name',
      runtimePolicies: 'RuntimePolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      done: 'number',
      endTime: 'number',
      status: 'number',
      startTime: 'number',
      objectCount: 'number',
      template: 'string',
      policyId: 'string',
      name: 'string',
      runtimePolicies: { 'type': 'array', 'itemType': DescribeSceneDefensePoliciesResponseBodyPoliciesRuntimePolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchedulerRulesResponseBodySchedulerRulesParamParamData extends $tea.Model {
  cloudInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudInstanceId: 'CloudInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchedulerRulesResponseBodySchedulerRulesParam extends $tea.Model {
  paramData?: DescribeSchedulerRulesResponseBodySchedulerRulesParamParamData;
  paramType?: string;
  static names(): { [key: string]: string } {
    return {
      paramData: 'ParamData',
      paramType: 'ParamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramData: DescribeSchedulerRulesResponseBodySchedulerRulesParamParamData,
      paramType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchedulerRulesResponseBodySchedulerRulesRules extends $tea.Model {
  type?: string;
  status?: number;
  value?: string;
  valueType?: number;
  priority?: number;
  restoreDelay?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      value: 'Value',
      valueType: 'ValueType',
      priority: 'Priority',
      restoreDelay: 'RestoreDelay',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'number',
      value: 'string',
      valueType: 'number',
      priority: 'number',
      restoreDelay: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchedulerRulesResponseBodySchedulerRules extends $tea.Model {
  ruleType?: string;
  param?: DescribeSchedulerRulesResponseBodySchedulerRulesParam;
  cname?: string;
  rules?: DescribeSchedulerRulesResponseBodySchedulerRulesRules[];
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleType: 'RuleType',
      param: 'Param',
      cname: 'Cname',
      rules: 'Rules',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleType: 'string',
      param: DescribeSchedulerRulesResponseBodySchedulerRulesParam,
      cname: 'string',
      rules: { 'type': 'array', 'itemType': DescribeSchedulerRulesResponseBodySchedulerRulesRules },
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStsGrantStatusResponseBodyStsGrant extends $tea.Model {
  status?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeysResponseBodyTagKeys extends $tea.Model {
  tagCount?: number;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagCount: 'TagCount',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagCount: 'number',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagResourcesRequestTags extends $tea.Model {
  key?: string;
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

export class DescribeTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: DescribeTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': DescribeTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogDispatchStatusResponseBodySlsConfigStatus extends $tea.Model {
  domain?: string;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessModeResponseBodyDomainModes extends $tea.Model {
  accessMode?: number;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'number',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigsRegionList extends $tea.Model {
  block?: number;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      block: 'Block',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: 'number',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigs extends $tea.Model {
  domain?: string;
  regionList?: DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigsRegionList[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      regionList: 'RegionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      regionList: { 'type': 'array', 'itemType': DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigsRegionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCacheConfigsResponseBodyDomainCacheConfigsCustomRules extends $tea.Model {
  cacheTtl?: number;
  mode?: string;
  name?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      cacheTtl: 'CacheTtl',
      mode: 'Mode',
      name: 'Name',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheTtl: 'number',
      mode: 'string',
      name: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCacheConfigsResponseBodyDomainCacheConfigs extends $tea.Model {
  domain?: string;
  customRules?: DescribeWebCacheConfigsResponseBodyDomainCacheConfigsCustomRules[];
  mode?: string;
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      customRules: 'CustomRules',
      mode: 'Mode',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      customRules: { 'type': 'array', 'itemType': DescribeWebCacheConfigsResponseBodyDomainCacheConfigsCustomRules },
      mode: 'string',
      enable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCcProtectSwitchResponseBodyProtectSwitchList extends $tea.Model {
  blackWhiteListEnable?: number;
  aiTemplate?: string;
  preciseRuleEnable?: number;
  domain?: string;
  aiMode?: string;
  aiRuleEnable?: number;
  regionBlockEnable?: number;
  ccTemplate?: string;
  ccCustomRuleEnable?: number;
  ccEnable?: number;
  static names(): { [key: string]: string } {
    return {
      blackWhiteListEnable: 'BlackWhiteListEnable',
      aiTemplate: 'AiTemplate',
      preciseRuleEnable: 'PreciseRuleEnable',
      domain: 'Domain',
      aiMode: 'AiMode',
      aiRuleEnable: 'AiRuleEnable',
      regionBlockEnable: 'RegionBlockEnable',
      ccTemplate: 'CcTemplate',
      ccCustomRuleEnable: 'CcCustomRuleEnable',
      ccEnable: 'CcEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackWhiteListEnable: 'number',
      aiTemplate: 'string',
      preciseRuleEnable: 'number',
      domain: 'string',
      aiMode: 'string',
      aiRuleEnable: 'number',
      regionBlockEnable: 'number',
      ccTemplate: 'string',
      ccCustomRuleEnable: 'number',
      ccEnable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCCRulesResponseBodyWebCCRules extends $tea.Model {
  ttl?: number;
  act?: string;
  interval?: number;
  mode?: string;
  name?: string;
  uri?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      ttl: 'Ttl',
      act: 'Act',
      interval: 'Interval',
      mode: 'Mode',
      name: 'Name',
      uri: 'Uri',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ttl: 'number',
      act: 'string',
      interval: 'number',
      mode: 'string',
      name: 'string',
      uri: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCustomPortsResponseBodyWebCustomPorts extends $tea.Model {
  proxyPorts?: string[];
  proxyType?: string;
  static names(): { [key: string]: string } {
    return {
      proxyPorts: 'ProxyPorts',
      proxyType: 'ProxyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyPorts: { 'type': 'array', 'itemType': 'string' },
      proxyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebInstanceRelationsResponseBodyWebInstanceRelationsInstanceDetails extends $tea.Model {
  eipList?: string[];
  functionVersion?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      eipList: 'EipList',
      functionVersion: 'FunctionVersion',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipList: { 'type': 'array', 'itemType': 'string' },
      functionVersion: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebInstanceRelationsResponseBodyWebInstanceRelations extends $tea.Model {
  domain?: string;
  instanceDetails?: DescribeWebInstanceRelationsResponseBodyWebInstanceRelationsInstanceDetails[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceDetails: 'InstanceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceDetails: { 'type': 'array', 'itemType': DescribeWebInstanceRelationsResponseBodyWebInstanceRelationsInstanceDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleListConditionList extends $tea.Model {
  matchMethod?: string;
  field?: string;
  content?: string;
  headerName?: string;
  static names(): { [key: string]: string } {
    return {
      matchMethod: 'MatchMethod',
      field: 'Field',
      content: 'Content',
      headerName: 'HeaderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchMethod: 'string',
      field: 'string',
      content: 'string',
      headerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleList extends $tea.Model {
  action?: string;
  owner?: string;
  expires?: number;
  name?: string;
  conditionList?: DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleListConditionList[];
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      owner: 'Owner',
      expires: 'Expires',
      name: 'Name',
      conditionList: 'ConditionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      owner: 'string',
      expires: 'number',
      name: 'string',
      conditionList: { 'type': 'array', 'itemType': DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleListConditionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigList extends $tea.Model {
  domain?: string;
  ruleList?: DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleList[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebRulesResponseBodyWebRulesRealServers extends $tea.Model {
  rsType?: number;
  realServer?: string;
  static names(): { [key: string]: string } {
    return {
      rsType: 'RsType',
      realServer: 'RealServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rsType: 'number',
      realServer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebRulesResponseBodyWebRulesProxyTypes extends $tea.Model {
  proxyPorts?: string[];
  proxyType?: string;
  static names(): { [key: string]: string } {
    return {
      proxyPorts: 'ProxyPorts',
      proxyType: 'ProxyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyPorts: { 'type': 'array', 'itemType': 'string' },
      proxyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebRulesResponseBodyWebRules extends $tea.Model {
  domain?: string;
  http2HttpsEnable?: boolean;
  customCiphers?: string[];
  blackList?: string[];
  whiteList?: string[];
  realServers?: DescribeWebRulesResponseBodyWebRulesRealServers[];
  proxyTypes?: DescribeWebRulesResponseBodyWebRulesProxyTypes[];
  sslProtocols?: string;
  ccTemplate?: string;
  ccEnabled?: boolean;
  sslCiphers?: string;
  ccRuleEnabled?: boolean;
  ssl13Enabled?: boolean;
  proxyEnabled?: boolean;
  certName?: string;
  policyMode?: string;
  cname?: string;
  http2Enable?: boolean;
  https2HttpEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      http2HttpsEnable: 'Http2HttpsEnable',
      customCiphers: 'CustomCiphers',
      blackList: 'BlackList',
      whiteList: 'WhiteList',
      realServers: 'RealServers',
      proxyTypes: 'ProxyTypes',
      sslProtocols: 'SslProtocols',
      ccTemplate: 'CcTemplate',
      ccEnabled: 'CcEnabled',
      sslCiphers: 'SslCiphers',
      ccRuleEnabled: 'CcRuleEnabled',
      ssl13Enabled: 'Ssl13Enabled',
      proxyEnabled: 'ProxyEnabled',
      certName: 'CertName',
      policyMode: 'PolicyMode',
      cname: 'Cname',
      http2Enable: 'Http2Enable',
      https2HttpEnable: 'Https2HttpEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      http2HttpsEnable: 'boolean',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      blackList: { 'type': 'array', 'itemType': 'string' },
      whiteList: { 'type': 'array', 'itemType': 'string' },
      realServers: { 'type': 'array', 'itemType': DescribeWebRulesResponseBodyWebRulesRealServers },
      proxyTypes: { 'type': 'array', 'itemType': DescribeWebRulesResponseBodyWebRulesProxyTypes },
      sslProtocols: 'string',
      ccTemplate: 'string',
      ccEnabled: 'boolean',
      sslCiphers: 'string',
      ccRuleEnabled: 'boolean',
      ssl13Enabled: 'boolean',
      proxyEnabled: 'boolean',
      certName: 'string',
      policyMode: 'string',
      cname: 'string',
      http2Enable: 'boolean',
      https2HttpEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ddoscoo", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addAutoCcBlacklistWithOptions(request: AddAutoCcBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<AddAutoCcBlacklistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddAutoCcBlacklistResponse>(await this.doRPCRequest("AddAutoCcBlacklist", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddAutoCcBlacklistResponse({}));
  }

  async addAutoCcBlacklist(request: AddAutoCcBlacklistRequest): Promise<AddAutoCcBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAutoCcBlacklistWithOptions(request, runtime);
  }

  async addAutoCcWhitelistWithOptions(request: AddAutoCcWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<AddAutoCcWhitelistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddAutoCcWhitelistResponse>(await this.doRPCRequest("AddAutoCcWhitelist", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddAutoCcWhitelistResponse({}));
  }

  async addAutoCcWhitelist(request: AddAutoCcWhitelistRequest): Promise<AddAutoCcWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAutoCcWhitelistWithOptions(request, runtime);
  }

  async associateWebCertWithOptions(request: AssociateWebCertRequest, runtime: $Util.RuntimeOptions): Promise<AssociateWebCertResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateWebCertResponse>(await this.doRPCRequest("AssociateWebCert", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateWebCertResponse({}));
  }

  async associateWebCert(request: AssociateWebCertRequest): Promise<AssociateWebCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateWebCertWithOptions(request, runtime);
  }

  async attachSceneDefenseObjectWithOptions(request: AttachSceneDefenseObjectRequest, runtime: $Util.RuntimeOptions): Promise<AttachSceneDefenseObjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachSceneDefenseObjectResponse>(await this.doRPCRequest("AttachSceneDefenseObject", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AttachSceneDefenseObjectResponse({}));
  }

  async attachSceneDefenseObject(request: AttachSceneDefenseObjectRequest): Promise<AttachSceneDefenseObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachSceneDefenseObjectWithOptions(request, runtime);
  }

  async configL7RsPolicyWithOptions(request: ConfigL7RsPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ConfigL7RsPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigL7RsPolicyResponse>(await this.doRPCRequest("ConfigL7RsPolicy", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigL7RsPolicyResponse({}));
  }

  async configL7RsPolicy(request: ConfigL7RsPolicyRequest): Promise<ConfigL7RsPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configL7RsPolicyWithOptions(request, runtime);
  }

  async configNetworkRegionBlockWithOptions(request: ConfigNetworkRegionBlockRequest, runtime: $Util.RuntimeOptions): Promise<ConfigNetworkRegionBlockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigNetworkRegionBlockResponse>(await this.doRPCRequest("ConfigNetworkRegionBlock", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigNetworkRegionBlockResponse({}));
  }

  async configNetworkRegionBlock(request: ConfigNetworkRegionBlockRequest): Promise<ConfigNetworkRegionBlockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configNetworkRegionBlockWithOptions(request, runtime);
  }

  async configNetworkRulesWithOptions(request: ConfigNetworkRulesRequest, runtime: $Util.RuntimeOptions): Promise<ConfigNetworkRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigNetworkRulesResponse>(await this.doRPCRequest("ConfigNetworkRules", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigNetworkRulesResponse({}));
  }

  async configNetworkRules(request: ConfigNetworkRulesRequest): Promise<ConfigNetworkRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configNetworkRulesWithOptions(request, runtime);
  }

  async configWebCCTemplateWithOptions(request: ConfigWebCCTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ConfigWebCCTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigWebCCTemplateResponse>(await this.doRPCRequest("ConfigWebCCTemplate", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigWebCCTemplateResponse({}));
  }

  async configWebCCTemplate(request: ConfigWebCCTemplateRequest): Promise<ConfigWebCCTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configWebCCTemplateWithOptions(request, runtime);
  }

  async configWebIpSetWithOptions(request: ConfigWebIpSetRequest, runtime: $Util.RuntimeOptions): Promise<ConfigWebIpSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigWebIpSetResponse>(await this.doRPCRequest("ConfigWebIpSet", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigWebIpSetResponse({}));
  }

  async configWebIpSet(request: ConfigWebIpSetRequest): Promise<ConfigWebIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configWebIpSetWithOptions(request, runtime);
  }

  async createAsyncTaskWithOptions(request: CreateAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateAsyncTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAsyncTaskResponse>(await this.doRPCRequest("CreateAsyncTask", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAsyncTaskResponse({}));
  }

  async createAsyncTask(request: CreateAsyncTaskRequest): Promise<CreateAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAsyncTaskWithOptions(request, runtime);
  }

  async createNetworkRulesWithOptions(request: CreateNetworkRulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateNetworkRulesResponse>(await this.doRPCRequest("CreateNetworkRules", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateNetworkRulesResponse({}));
  }

  async createNetworkRules(request: CreateNetworkRulesRequest): Promise<CreateNetworkRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkRulesWithOptions(request, runtime);
  }

  async createSceneDefensePolicyWithOptions(request: CreateSceneDefensePolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateSceneDefensePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSceneDefensePolicyResponse>(await this.doRPCRequest("CreateSceneDefensePolicy", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSceneDefensePolicyResponse({}));
  }

  async createSceneDefensePolicy(request: CreateSceneDefensePolicyRequest): Promise<CreateSceneDefensePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSceneDefensePolicyWithOptions(request, runtime);
  }

  async createSchedulerRuleWithOptions(request: CreateSchedulerRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateSchedulerRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSchedulerRuleResponse>(await this.doRPCRequest("CreateSchedulerRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSchedulerRuleResponse({}));
  }

  async createSchedulerRule(request: CreateSchedulerRuleRequest): Promise<CreateSchedulerRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSchedulerRuleWithOptions(request, runtime);
  }

  async createTagResourcesWithOptions(request: CreateTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<CreateTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTagResourcesResponse>(await this.doRPCRequest("CreateTagResources", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTagResourcesResponse({}));
  }

  async createTagResources(request: CreateTagResourcesRequest): Promise<CreateTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTagResourcesWithOptions(request, runtime);
  }

  async createWebCCRuleWithOptions(request: CreateWebCCRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateWebCCRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateWebCCRuleResponse>(await this.doRPCRequest("CreateWebCCRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateWebCCRuleResponse({}));
  }

  async createWebCCRule(request: CreateWebCCRuleRequest): Promise<CreateWebCCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWebCCRuleWithOptions(request, runtime);
  }

  async createWebRuleWithOptions(request: CreateWebRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateWebRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateWebRuleResponse>(await this.doRPCRequest("CreateWebRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateWebRuleResponse({}));
  }

  async createWebRule(request: CreateWebRuleRequest): Promise<CreateWebRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWebRuleWithOptions(request, runtime);
  }

  async deleteAsyncTaskWithOptions(request: DeleteAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAsyncTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAsyncTaskResponse>(await this.doRPCRequest("DeleteAsyncTask", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAsyncTaskResponse({}));
  }

  async deleteAsyncTask(request: DeleteAsyncTaskRequest): Promise<DeleteAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAsyncTaskWithOptions(request, runtime);
  }

  async deleteAutoCcBlacklistWithOptions(request: DeleteAutoCcBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAutoCcBlacklistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAutoCcBlacklistResponse>(await this.doRPCRequest("DeleteAutoCcBlacklist", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAutoCcBlacklistResponse({}));
  }

  async deleteAutoCcBlacklist(request: DeleteAutoCcBlacklistRequest): Promise<DeleteAutoCcBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAutoCcBlacklistWithOptions(request, runtime);
  }

  async deleteAutoCcWhitelistWithOptions(request: DeleteAutoCcWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAutoCcWhitelistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAutoCcWhitelistResponse>(await this.doRPCRequest("DeleteAutoCcWhitelist", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAutoCcWhitelistResponse({}));
  }

  async deleteAutoCcWhitelist(request: DeleteAutoCcWhitelistRequest): Promise<DeleteAutoCcWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAutoCcWhitelistWithOptions(request, runtime);
  }

  async deleteNetworkRuleWithOptions(request: DeleteNetworkRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNetworkRuleResponse>(await this.doRPCRequest("DeleteNetworkRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNetworkRuleResponse({}));
  }

  async deleteNetworkRule(request: DeleteNetworkRuleRequest): Promise<DeleteNetworkRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkRuleWithOptions(request, runtime);
  }

  async deleteSceneDefensePolicyWithOptions(request: DeleteSceneDefensePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSceneDefensePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSceneDefensePolicyResponse>(await this.doRPCRequest("DeleteSceneDefensePolicy", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSceneDefensePolicyResponse({}));
  }

  async deleteSceneDefensePolicy(request: DeleteSceneDefensePolicyRequest): Promise<DeleteSceneDefensePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSceneDefensePolicyWithOptions(request, runtime);
  }

  async deleteSchedulerRuleWithOptions(request: DeleteSchedulerRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSchedulerRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSchedulerRuleResponse>(await this.doRPCRequest("DeleteSchedulerRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSchedulerRuleResponse({}));
  }

  async deleteSchedulerRule(request: DeleteSchedulerRuleRequest): Promise<DeleteSchedulerRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSchedulerRuleWithOptions(request, runtime);
  }

  async deleteTagResourcesWithOptions(request: DeleteTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTagResourcesResponse>(await this.doRPCRequest("DeleteTagResources", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTagResourcesResponse({}));
  }

  async deleteTagResources(request: DeleteTagResourcesRequest): Promise<DeleteTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagResourcesWithOptions(request, runtime);
  }

  async deleteWebCacheCustomRuleWithOptions(request: DeleteWebCacheCustomRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWebCacheCustomRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteWebCacheCustomRuleResponse>(await this.doRPCRequest("DeleteWebCacheCustomRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteWebCacheCustomRuleResponse({}));
  }

  async deleteWebCacheCustomRule(request: DeleteWebCacheCustomRuleRequest): Promise<DeleteWebCacheCustomRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWebCacheCustomRuleWithOptions(request, runtime);
  }

  async deleteWebCCRuleWithOptions(request: DeleteWebCCRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWebCCRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteWebCCRuleResponse>(await this.doRPCRequest("DeleteWebCCRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteWebCCRuleResponse({}));
  }

  async deleteWebCCRule(request: DeleteWebCCRuleRequest): Promise<DeleteWebCCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWebCCRuleWithOptions(request, runtime);
  }

  async deleteWebPreciseAccessRuleWithOptions(request: DeleteWebPreciseAccessRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWebPreciseAccessRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteWebPreciseAccessRuleResponse>(await this.doRPCRequest("DeleteWebPreciseAccessRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteWebPreciseAccessRuleResponse({}));
  }

  async deleteWebPreciseAccessRule(request: DeleteWebPreciseAccessRuleRequest): Promise<DeleteWebPreciseAccessRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWebPreciseAccessRuleWithOptions(request, runtime);
  }

  async deleteWebRuleWithOptions(request: DeleteWebRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWebRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteWebRuleResponse>(await this.doRPCRequest("DeleteWebRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteWebRuleResponse({}));
  }

  async deleteWebRule(request: DeleteWebRuleRequest): Promise<DeleteWebRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWebRuleWithOptions(request, runtime);
  }

  async describeAsyncTasksWithOptions(request: DescribeAsyncTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAsyncTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAsyncTasksResponse>(await this.doRPCRequest("DescribeAsyncTasks", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAsyncTasksResponse({}));
  }

  async describeAsyncTasks(request: DescribeAsyncTasksRequest): Promise<DescribeAsyncTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAsyncTasksWithOptions(request, runtime);
  }

  async describeAutoCcBlacklistWithOptions(request: DescribeAutoCcBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoCcBlacklistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAutoCcBlacklistResponse>(await this.doRPCRequest("DescribeAutoCcBlacklist", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAutoCcBlacklistResponse({}));
  }

  async describeAutoCcBlacklist(request: DescribeAutoCcBlacklistRequest): Promise<DescribeAutoCcBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoCcBlacklistWithOptions(request, runtime);
  }

  async describeAutoCcListCountWithOptions(request: DescribeAutoCcListCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoCcListCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAutoCcListCountResponse>(await this.doRPCRequest("DescribeAutoCcListCount", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAutoCcListCountResponse({}));
  }

  async describeAutoCcListCount(request: DescribeAutoCcListCountRequest): Promise<DescribeAutoCcListCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoCcListCountWithOptions(request, runtime);
  }

  async describeAutoCcWhitelistWithOptions(request: DescribeAutoCcWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoCcWhitelistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAutoCcWhitelistResponse>(await this.doRPCRequest("DescribeAutoCcWhitelist", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAutoCcWhitelistResponse({}));
  }

  async describeAutoCcWhitelist(request: DescribeAutoCcWhitelistRequest): Promise<DescribeAutoCcWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoCcWhitelistWithOptions(request, runtime);
  }

  async describeBackSourceCidrWithOptions(request: DescribeBackSourceCidrRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackSourceCidrResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackSourceCidrResponse>(await this.doRPCRequest("DescribeBackSourceCidr", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackSourceCidrResponse({}));
  }

  async describeBackSourceCidr(request: DescribeBackSourceCidrRequest): Promise<DescribeBackSourceCidrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackSourceCidrWithOptions(request, runtime);
  }

  async describeBlackholeStatusWithOptions(request: DescribeBlackholeStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBlackholeStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBlackholeStatusResponse>(await this.doRPCRequest("DescribeBlackholeStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBlackholeStatusResponse({}));
  }

  async describeBlackholeStatus(request: DescribeBlackholeStatusRequest): Promise<DescribeBlackholeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBlackholeStatusWithOptions(request, runtime);
  }

  async describeBlockStatusWithOptions(request: DescribeBlockStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBlockStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBlockStatusResponse>(await this.doRPCRequest("DescribeBlockStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBlockStatusResponse({}));
  }

  async describeBlockStatus(request: DescribeBlockStatusRequest): Promise<DescribeBlockStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBlockStatusWithOptions(request, runtime);
  }

  async describeCertsWithOptions(request: DescribeCertsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCertsResponse>(await this.doRPCRequest("DescribeCerts", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCertsResponse({}));
  }

  async describeCerts(request: DescribeCertsRequest): Promise<DescribeCertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertsWithOptions(request, runtime);
  }

  async describeCnameReusesWithOptions(request: DescribeCnameReusesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCnameReusesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCnameReusesResponse>(await this.doRPCRequest("DescribeCnameReuses", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCnameReusesResponse({}));
  }

  async describeCnameReuses(request: DescribeCnameReusesRequest): Promise<DescribeCnameReusesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCnameReusesWithOptions(request, runtime);
  }

  async describeDDosAllEventListWithOptions(request: DescribeDDosAllEventListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDosAllEventListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDDosAllEventListResponse>(await this.doRPCRequest("DescribeDDosAllEventList", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDDosAllEventListResponse({}));
  }

  async describeDDosAllEventList(request: DescribeDDosAllEventListRequest): Promise<DescribeDDosAllEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDosAllEventListWithOptions(request, runtime);
  }

  async describeDDosEventAreaWithOptions(request: DescribeDDosEventAreaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDosEventAreaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDDosEventAreaResponse>(await this.doRPCRequest("DescribeDDosEventArea", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDDosEventAreaResponse({}));
  }

  async describeDDosEventArea(request: DescribeDDosEventAreaRequest): Promise<DescribeDDosEventAreaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDosEventAreaWithOptions(request, runtime);
  }

  async describeDDosEventAttackTypeWithOptions(request: DescribeDDosEventAttackTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDosEventAttackTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDDosEventAttackTypeResponse>(await this.doRPCRequest("DescribeDDosEventAttackType", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDDosEventAttackTypeResponse({}));
  }

  async describeDDosEventAttackType(request: DescribeDDosEventAttackTypeRequest): Promise<DescribeDDosEventAttackTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDosEventAttackTypeWithOptions(request, runtime);
  }

  async describeDDosEventIspWithOptions(request: DescribeDDosEventIspRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDosEventIspResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDDosEventIspResponse>(await this.doRPCRequest("DescribeDDosEventIsp", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDDosEventIspResponse({}));
  }

  async describeDDosEventIsp(request: DescribeDDosEventIspRequest): Promise<DescribeDDosEventIspResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDosEventIspWithOptions(request, runtime);
  }

  async describeDDosEventMaxWithOptions(request: DescribeDDosEventMaxRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDosEventMaxResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDDosEventMaxResponse>(await this.doRPCRequest("DescribeDDosEventMax", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDDosEventMaxResponse({}));
  }

  async describeDDosEventMax(request: DescribeDDosEventMaxRequest): Promise<DescribeDDosEventMaxResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDosEventMaxWithOptions(request, runtime);
  }

  async describeDDoSEventsWithOptions(request: DescribeDDoSEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDoSEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDDoSEventsResponse>(await this.doRPCRequest("DescribeDDoSEvents", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDDoSEventsResponse({}));
  }

  async describeDDoSEvents(request: DescribeDDoSEventsRequest): Promise<DescribeDDoSEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDoSEventsWithOptions(request, runtime);
  }

  async describeDDosEventSrcIpWithOptions(request: DescribeDDosEventSrcIpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDosEventSrcIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDDosEventSrcIpResponse>(await this.doRPCRequest("DescribeDDosEventSrcIp", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDDosEventSrcIpResponse({}));
  }

  async describeDDosEventSrcIp(request: DescribeDDosEventSrcIpRequest): Promise<DescribeDDosEventSrcIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDosEventSrcIpWithOptions(request, runtime);
  }

  async describeDefenseCountStatisticsWithOptions(request: DescribeDefenseCountStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseCountStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDefenseCountStatisticsResponse>(await this.doRPCRequest("DescribeDefenseCountStatistics", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDefenseCountStatisticsResponse({}));
  }

  async describeDefenseCountStatistics(request: DescribeDefenseCountStatisticsRequest): Promise<DescribeDefenseCountStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseCountStatisticsWithOptions(request, runtime);
  }

  async describeDefenseRecordsWithOptions(request: DescribeDefenseRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDefenseRecordsResponse>(await this.doRPCRequest("DescribeDefenseRecords", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDefenseRecordsResponse({}));
  }

  async describeDefenseRecords(request: DescribeDefenseRecordsRequest): Promise<DescribeDefenseRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseRecordsWithOptions(request, runtime);
  }

  async describeDomainAttackEventsWithOptions(request: DescribeDomainAttackEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainAttackEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainAttackEventsResponse>(await this.doRPCRequest("DescribeDomainAttackEvents", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainAttackEventsResponse({}));
  }

  async describeDomainAttackEvents(request: DescribeDomainAttackEventsRequest): Promise<DescribeDomainAttackEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainAttackEventsWithOptions(request, runtime);
  }

  async describeDomainOverviewWithOptions(request: DescribeDomainOverviewRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainOverviewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainOverviewResponse>(await this.doRPCRequest("DescribeDomainOverview", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainOverviewResponse({}));
  }

  async describeDomainOverview(request: DescribeDomainOverviewRequest): Promise<DescribeDomainOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainOverviewWithOptions(request, runtime);
  }

  async describeDomainQPSListWithOptions(request: DescribeDomainQPSListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainQPSListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainQPSListResponse>(await this.doRPCRequest("DescribeDomainQPSList", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainQPSListResponse({}));
  }

  async describeDomainQPSList(request: DescribeDomainQPSListRequest): Promise<DescribeDomainQPSListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainQPSListWithOptions(request, runtime);
  }

  async describeDomainQpsWithCacheWithOptions(request: DescribeDomainQpsWithCacheRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainQpsWithCacheResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainQpsWithCacheResponse>(await this.doRPCRequest("DescribeDomainQpsWithCache", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainQpsWithCacheResponse({}));
  }

  async describeDomainQpsWithCache(request: DescribeDomainQpsWithCacheRequest): Promise<DescribeDomainQpsWithCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainQpsWithCacheWithOptions(request, runtime);
  }

  async describeDomainsWithOptions(request: DescribeDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainsResponse>(await this.doRPCRequest("DescribeDomains", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainsResponse({}));
  }

  async describeDomains(request: DescribeDomainsRequest): Promise<DescribeDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  async describeDomainStatusCodeCountWithOptions(request: DescribeDomainStatusCodeCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainStatusCodeCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainStatusCodeCountResponse>(await this.doRPCRequest("DescribeDomainStatusCodeCount", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainStatusCodeCountResponse({}));
  }

  async describeDomainStatusCodeCount(request: DescribeDomainStatusCodeCountRequest): Promise<DescribeDomainStatusCodeCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainStatusCodeCountWithOptions(request, runtime);
  }

  async describeDomainStatusCodeListWithOptions(request: DescribeDomainStatusCodeListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainStatusCodeListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainStatusCodeListResponse>(await this.doRPCRequest("DescribeDomainStatusCodeList", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainStatusCodeListResponse({}));
  }

  async describeDomainStatusCodeList(request: DescribeDomainStatusCodeListRequest): Promise<DescribeDomainStatusCodeListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainStatusCodeListWithOptions(request, runtime);
  }

  async describeDomainTopAttackListWithOptions(request: DescribeDomainTopAttackListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainTopAttackListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainTopAttackListResponse>(await this.doRPCRequest("DescribeDomainTopAttackList", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainTopAttackListResponse({}));
  }

  async describeDomainTopAttackList(request: DescribeDomainTopAttackListRequest): Promise<DescribeDomainTopAttackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainTopAttackListWithOptions(request, runtime);
  }

  async describeDomainViewSourceCountriesWithOptions(request: DescribeDomainViewSourceCountriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainViewSourceCountriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainViewSourceCountriesResponse>(await this.doRPCRequest("DescribeDomainViewSourceCountries", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainViewSourceCountriesResponse({}));
  }

  async describeDomainViewSourceCountries(request: DescribeDomainViewSourceCountriesRequest): Promise<DescribeDomainViewSourceCountriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainViewSourceCountriesWithOptions(request, runtime);
  }

  async describeDomainViewSourceProvincesWithOptions(request: DescribeDomainViewSourceProvincesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainViewSourceProvincesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainViewSourceProvincesResponse>(await this.doRPCRequest("DescribeDomainViewSourceProvinces", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainViewSourceProvincesResponse({}));
  }

  async describeDomainViewSourceProvinces(request: DescribeDomainViewSourceProvincesRequest): Promise<DescribeDomainViewSourceProvincesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainViewSourceProvincesWithOptions(request, runtime);
  }

  async describeDomainViewTopCostTimeWithOptions(request: DescribeDomainViewTopCostTimeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainViewTopCostTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainViewTopCostTimeResponse>(await this.doRPCRequest("DescribeDomainViewTopCostTime", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainViewTopCostTimeResponse({}));
  }

  async describeDomainViewTopCostTime(request: DescribeDomainViewTopCostTimeRequest): Promise<DescribeDomainViewTopCostTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainViewTopCostTimeWithOptions(request, runtime);
  }

  async describeDomainViewTopUrlWithOptions(request: DescribeDomainViewTopUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainViewTopUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainViewTopUrlResponse>(await this.doRPCRequest("DescribeDomainViewTopUrl", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainViewTopUrlResponse({}));
  }

  async describeDomainViewTopUrl(request: DescribeDomainViewTopUrlRequest): Promise<DescribeDomainViewTopUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainViewTopUrlWithOptions(request, runtime);
  }

  async describeElasticBandwidthSpecWithOptions(request: DescribeElasticBandwidthSpecRequest, runtime: $Util.RuntimeOptions): Promise<DescribeElasticBandwidthSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeElasticBandwidthSpecResponse>(await this.doRPCRequest("DescribeElasticBandwidthSpec", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeElasticBandwidthSpecResponse({}));
  }

  async describeElasticBandwidthSpec(request: DescribeElasticBandwidthSpecRequest): Promise<DescribeElasticBandwidthSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticBandwidthSpecWithOptions(request, runtime);
  }

  async describeHealthCheckListWithOptions(request: DescribeHealthCheckListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHealthCheckListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHealthCheckListResponse>(await this.doRPCRequest("DescribeHealthCheckList", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHealthCheckListResponse({}));
  }

  async describeHealthCheckList(request: DescribeHealthCheckListRequest): Promise<DescribeHealthCheckListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthCheckListWithOptions(request, runtime);
  }

  async describeHealthCheckStatusWithOptions(request: DescribeHealthCheckStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHealthCheckStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHealthCheckStatusResponse>(await this.doRPCRequest("DescribeHealthCheckStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHealthCheckStatusResponse({}));
  }

  async describeHealthCheckStatus(request: DescribeHealthCheckStatusRequest): Promise<DescribeHealthCheckStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthCheckStatusWithOptions(request, runtime);
  }

  async describeInstanceDetailsWithOptions(request: DescribeInstanceDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceDetailsResponse>(await this.doRPCRequest("DescribeInstanceDetails", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceDetailsResponse({}));
  }

  async describeInstanceDetails(request: DescribeInstanceDetailsRequest): Promise<DescribeInstanceDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceDetailsWithOptions(request, runtime);
  }

  async describeInstanceIdsWithOptions(request: DescribeInstanceIdsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceIdsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceIdsResponse>(await this.doRPCRequest("DescribeInstanceIds", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceIdsResponse({}));
  }

  async describeInstanceIds(request: DescribeInstanceIdsRequest): Promise<DescribeInstanceIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceIdsWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstancesResponse>(await this.doRPCRequest("DescribeInstances", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeInstanceSpecsWithOptions(request: DescribeInstanceSpecsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSpecsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceSpecsResponse>(await this.doRPCRequest("DescribeInstanceSpecs", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceSpecsResponse({}));
  }

  async describeInstanceSpecs(request: DescribeInstanceSpecsRequest): Promise<DescribeInstanceSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSpecsWithOptions(request, runtime);
  }

  async describeInstanceStatisticsWithOptions(request: DescribeInstanceStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceStatisticsResponse>(await this.doRPCRequest("DescribeInstanceStatistics", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceStatisticsResponse({}));
  }

  async describeInstanceStatistics(request: DescribeInstanceStatisticsRequest): Promise<DescribeInstanceStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceStatisticsWithOptions(request, runtime);
  }

  async describeInstanceStatusWithOptions(request: DescribeInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceStatusResponse>(await this.doRPCRequest("DescribeInstanceStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceStatusResponse({}));
  }

  async describeInstanceStatus(request: DescribeInstanceStatusRequest): Promise<DescribeInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceStatusWithOptions(request, runtime);
  }

  async describeL7RsPolicyWithOptions(request: DescribeL7RsPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeL7RsPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeL7RsPolicyResponse>(await this.doRPCRequest("DescribeL7RsPolicy", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeL7RsPolicyResponse({}));
  }

  async describeL7RsPolicy(request: DescribeL7RsPolicyRequest): Promise<DescribeL7RsPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeL7RsPolicyWithOptions(request, runtime);
  }

  async describeLogStoreExistStatusWithOptions(request: DescribeLogStoreExistStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogStoreExistStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLogStoreExistStatusResponse>(await this.doRPCRequest("DescribeLogStoreExistStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLogStoreExistStatusResponse({}));
  }

  async describeLogStoreExistStatus(request: DescribeLogStoreExistStatusRequest): Promise<DescribeLogStoreExistStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogStoreExistStatusWithOptions(request, runtime);
  }

  async describeNetworkRegionBlockWithOptions(request: DescribeNetworkRegionBlockRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkRegionBlockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNetworkRegionBlockResponse>(await this.doRPCRequest("DescribeNetworkRegionBlock", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNetworkRegionBlockResponse({}));
  }

  async describeNetworkRegionBlock(request: DescribeNetworkRegionBlockRequest): Promise<DescribeNetworkRegionBlockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkRegionBlockWithOptions(request, runtime);
  }

  async describeNetworkRuleAttributesWithOptions(request: DescribeNetworkRuleAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkRuleAttributesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNetworkRuleAttributesResponse>(await this.doRPCRequest("DescribeNetworkRuleAttributes", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNetworkRuleAttributesResponse({}));
  }

  async describeNetworkRuleAttributes(request: DescribeNetworkRuleAttributesRequest): Promise<DescribeNetworkRuleAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkRuleAttributesWithOptions(request, runtime);
  }

  async describeNetworkRulesWithOptions(request: DescribeNetworkRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNetworkRulesResponse>(await this.doRPCRequest("DescribeNetworkRules", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNetworkRulesResponse({}));
  }

  async describeNetworkRules(request: DescribeNetworkRulesRequest): Promise<DescribeNetworkRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkRulesWithOptions(request, runtime);
  }

  async describeOpEntitiesWithOptions(request: DescribeOpEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOpEntitiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOpEntitiesResponse>(await this.doRPCRequest("DescribeOpEntities", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOpEntitiesResponse({}));
  }

  async describeOpEntities(request: DescribeOpEntitiesRequest): Promise<DescribeOpEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOpEntitiesWithOptions(request, runtime);
  }

  async describePortAttackMaxFlowWithOptions(request: DescribePortAttackMaxFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortAttackMaxFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePortAttackMaxFlowResponse>(await this.doRPCRequest("DescribePortAttackMaxFlow", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePortAttackMaxFlowResponse({}));
  }

  async describePortAttackMaxFlow(request: DescribePortAttackMaxFlowRequest): Promise<DescribePortAttackMaxFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortAttackMaxFlowWithOptions(request, runtime);
  }

  async describePortAutoCcStatusWithOptions(request: DescribePortAutoCcStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortAutoCcStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePortAutoCcStatusResponse>(await this.doRPCRequest("DescribePortAutoCcStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePortAutoCcStatusResponse({}));
  }

  async describePortAutoCcStatus(request: DescribePortAutoCcStatusRequest): Promise<DescribePortAutoCcStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortAutoCcStatusWithOptions(request, runtime);
  }

  async describePortConnsCountWithOptions(request: DescribePortConnsCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortConnsCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePortConnsCountResponse>(await this.doRPCRequest("DescribePortConnsCount", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePortConnsCountResponse({}));
  }

  async describePortConnsCount(request: DescribePortConnsCountRequest): Promise<DescribePortConnsCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortConnsCountWithOptions(request, runtime);
  }

  async describePortConnsListWithOptions(request: DescribePortConnsListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortConnsListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePortConnsListResponse>(await this.doRPCRequest("DescribePortConnsList", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePortConnsListResponse({}));
  }

  async describePortConnsList(request: DescribePortConnsListRequest): Promise<DescribePortConnsListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortConnsListWithOptions(request, runtime);
  }

  async describePortFlowListWithOptions(request: DescribePortFlowListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortFlowListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePortFlowListResponse>(await this.doRPCRequest("DescribePortFlowList", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePortFlowListResponse({}));
  }

  async describePortFlowList(request: DescribePortFlowListRequest): Promise<DescribePortFlowListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortFlowListWithOptions(request, runtime);
  }

  async describePortMaxConnsWithOptions(request: DescribePortMaxConnsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortMaxConnsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePortMaxConnsResponse>(await this.doRPCRequest("DescribePortMaxConns", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePortMaxConnsResponse({}));
  }

  async describePortMaxConns(request: DescribePortMaxConnsRequest): Promise<DescribePortMaxConnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortMaxConnsWithOptions(request, runtime);
  }

  async describePortViewSourceCountriesWithOptions(request: DescribePortViewSourceCountriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortViewSourceCountriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePortViewSourceCountriesResponse>(await this.doRPCRequest("DescribePortViewSourceCountries", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePortViewSourceCountriesResponse({}));
  }

  async describePortViewSourceCountries(request: DescribePortViewSourceCountriesRequest): Promise<DescribePortViewSourceCountriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortViewSourceCountriesWithOptions(request, runtime);
  }

  async describePortViewSourceIspsWithOptions(request: DescribePortViewSourceIspsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortViewSourceIspsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePortViewSourceIspsResponse>(await this.doRPCRequest("DescribePortViewSourceIsps", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePortViewSourceIspsResponse({}));
  }

  async describePortViewSourceIsps(request: DescribePortViewSourceIspsRequest): Promise<DescribePortViewSourceIspsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortViewSourceIspsWithOptions(request, runtime);
  }

  async describePortViewSourceProvincesWithOptions(request: DescribePortViewSourceProvincesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortViewSourceProvincesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePortViewSourceProvincesResponse>(await this.doRPCRequest("DescribePortViewSourceProvinces", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePortViewSourceProvincesResponse({}));
  }

  async describePortViewSourceProvinces(request: DescribePortViewSourceProvincesRequest): Promise<DescribePortViewSourceProvincesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortViewSourceProvincesWithOptions(request, runtime);
  }

  async describeSceneDefenseObjectsWithOptions(request: DescribeSceneDefenseObjectsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSceneDefenseObjectsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSceneDefenseObjectsResponse>(await this.doRPCRequest("DescribeSceneDefenseObjects", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSceneDefenseObjectsResponse({}));
  }

  async describeSceneDefenseObjects(request: DescribeSceneDefenseObjectsRequest): Promise<DescribeSceneDefenseObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSceneDefenseObjectsWithOptions(request, runtime);
  }

  async describeSceneDefensePoliciesWithOptions(request: DescribeSceneDefensePoliciesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSceneDefensePoliciesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSceneDefensePoliciesResponse>(await this.doRPCRequest("DescribeSceneDefensePolicies", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSceneDefensePoliciesResponse({}));
  }

  async describeSceneDefensePolicies(request: DescribeSceneDefensePoliciesRequest): Promise<DescribeSceneDefensePoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSceneDefensePoliciesWithOptions(request, runtime);
  }

  async describeSchedulerRulesWithOptions(request: DescribeSchedulerRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSchedulerRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSchedulerRulesResponse>(await this.doRPCRequest("DescribeSchedulerRules", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSchedulerRulesResponse({}));
  }

  async describeSchedulerRules(request: DescribeSchedulerRulesRequest): Promise<DescribeSchedulerRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSchedulerRulesWithOptions(request, runtime);
  }

  async describeSlsAuthStatusWithOptions(request: DescribeSlsAuthStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsAuthStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSlsAuthStatusResponse>(await this.doRPCRequest("DescribeSlsAuthStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSlsAuthStatusResponse({}));
  }

  async describeSlsAuthStatus(request: DescribeSlsAuthStatusRequest): Promise<DescribeSlsAuthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsAuthStatusWithOptions(request, runtime);
  }

  async describeSlsLogstoreInfoWithOptions(request: DescribeSlsLogstoreInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsLogstoreInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSlsLogstoreInfoResponse>(await this.doRPCRequest("DescribeSlsLogstoreInfo", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSlsLogstoreInfoResponse({}));
  }

  async describeSlsLogstoreInfo(request: DescribeSlsLogstoreInfoRequest): Promise<DescribeSlsLogstoreInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsLogstoreInfoWithOptions(request, runtime);
  }

  async describeSlsOpenStatusWithOptions(request: DescribeSlsOpenStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsOpenStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSlsOpenStatusResponse>(await this.doRPCRequest("DescribeSlsOpenStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSlsOpenStatusResponse({}));
  }

  async describeSlsOpenStatus(request: DescribeSlsOpenStatusRequest): Promise<DescribeSlsOpenStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsOpenStatusWithOptions(request, runtime);
  }

  async describeStsGrantStatusWithOptions(request: DescribeStsGrantStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStsGrantStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStsGrantStatusResponse>(await this.doRPCRequest("DescribeStsGrantStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStsGrantStatusResponse({}));
  }

  async describeStsGrantStatus(request: DescribeStsGrantStatusRequest): Promise<DescribeStsGrantStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStsGrantStatusWithOptions(request, runtime);
  }

  async describeTagKeysWithOptions(request: DescribeTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTagKeysResponse>(await this.doRPCRequest("DescribeTagKeys", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTagKeysResponse({}));
  }

  async describeTagKeys(request: DescribeTagKeysRequest): Promise<DescribeTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagKeysWithOptions(request, runtime);
  }

  async describeTagResourcesWithOptions(request: DescribeTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTagResourcesResponse>(await this.doRPCRequest("DescribeTagResources", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTagResourcesResponse({}));
  }

  async describeTagResources(request: DescribeTagResourcesRequest): Promise<DescribeTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagResourcesWithOptions(request, runtime);
  }

  async describeUnBlackholeCountWithOptions(request: DescribeUnBlackholeCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUnBlackholeCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUnBlackholeCountResponse>(await this.doRPCRequest("DescribeUnBlackholeCount", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUnBlackholeCountResponse({}));
  }

  async describeUnBlackholeCount(request: DescribeUnBlackholeCountRequest): Promise<DescribeUnBlackholeCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUnBlackholeCountWithOptions(request, runtime);
  }

  async describeUnBlockCountWithOptions(request: DescribeUnBlockCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUnBlockCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUnBlockCountResponse>(await this.doRPCRequest("DescribeUnBlockCount", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUnBlockCountResponse({}));
  }

  async describeUnBlockCount(request: DescribeUnBlockCountRequest): Promise<DescribeUnBlockCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUnBlockCountWithOptions(request, runtime);
  }

  async describeWebAccessLogDispatchStatusWithOptions(request: DescribeWebAccessLogDispatchStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebAccessLogDispatchStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebAccessLogDispatchStatusResponse>(await this.doRPCRequest("DescribeWebAccessLogDispatchStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebAccessLogDispatchStatusResponse({}));
  }

  async describeWebAccessLogDispatchStatus(request: DescribeWebAccessLogDispatchStatusRequest): Promise<DescribeWebAccessLogDispatchStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebAccessLogDispatchStatusWithOptions(request, runtime);
  }

  async describeWebAccessLogEmptyCountWithOptions(request: DescribeWebAccessLogEmptyCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebAccessLogEmptyCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebAccessLogEmptyCountResponse>(await this.doRPCRequest("DescribeWebAccessLogEmptyCount", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebAccessLogEmptyCountResponse({}));
  }

  async describeWebAccessLogEmptyCount(request: DescribeWebAccessLogEmptyCountRequest): Promise<DescribeWebAccessLogEmptyCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebAccessLogEmptyCountWithOptions(request, runtime);
  }

  async describeWebAccessLogStatusWithOptions(request: DescribeWebAccessLogStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebAccessLogStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebAccessLogStatusResponse>(await this.doRPCRequest("DescribeWebAccessLogStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebAccessLogStatusResponse({}));
  }

  async describeWebAccessLogStatus(request: DescribeWebAccessLogStatusRequest): Promise<DescribeWebAccessLogStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebAccessLogStatusWithOptions(request, runtime);
  }

  async describeWebAccessModeWithOptions(request: DescribeWebAccessModeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebAccessModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebAccessModeResponse>(await this.doRPCRequest("DescribeWebAccessMode", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebAccessModeResponse({}));
  }

  async describeWebAccessMode(request: DescribeWebAccessModeRequest): Promise<DescribeWebAccessModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebAccessModeWithOptions(request, runtime);
  }

  async describeWebAreaBlockConfigsWithOptions(request: DescribeWebAreaBlockConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebAreaBlockConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebAreaBlockConfigsResponse>(await this.doRPCRequest("DescribeWebAreaBlockConfigs", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebAreaBlockConfigsResponse({}));
  }

  async describeWebAreaBlockConfigs(request: DescribeWebAreaBlockConfigsRequest): Promise<DescribeWebAreaBlockConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebAreaBlockConfigsWithOptions(request, runtime);
  }

  async describeWebCacheConfigsWithOptions(request: DescribeWebCacheConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebCacheConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebCacheConfigsResponse>(await this.doRPCRequest("DescribeWebCacheConfigs", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebCacheConfigsResponse({}));
  }

  async describeWebCacheConfigs(request: DescribeWebCacheConfigsRequest): Promise<DescribeWebCacheConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebCacheConfigsWithOptions(request, runtime);
  }

  async describeWebCcProtectSwitchWithOptions(request: DescribeWebCcProtectSwitchRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebCcProtectSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebCcProtectSwitchResponse>(await this.doRPCRequest("DescribeWebCcProtectSwitch", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebCcProtectSwitchResponse({}));
  }

  async describeWebCcProtectSwitch(request: DescribeWebCcProtectSwitchRequest): Promise<DescribeWebCcProtectSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebCcProtectSwitchWithOptions(request, runtime);
  }

  async describeWebCCRulesWithOptions(request: DescribeWebCCRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebCCRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebCCRulesResponse>(await this.doRPCRequest("DescribeWebCCRules", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebCCRulesResponse({}));
  }

  async describeWebCCRules(request: DescribeWebCCRulesRequest): Promise<DescribeWebCCRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebCCRulesWithOptions(request, runtime);
  }

  async describeWebCustomPortsWithOptions(request: DescribeWebCustomPortsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebCustomPortsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebCustomPortsResponse>(await this.doRPCRequest("DescribeWebCustomPorts", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebCustomPortsResponse({}));
  }

  async describeWebCustomPorts(request: DescribeWebCustomPortsRequest): Promise<DescribeWebCustomPortsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebCustomPortsWithOptions(request, runtime);
  }

  async describeWebInstanceRelationsWithOptions(request: DescribeWebInstanceRelationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebInstanceRelationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebInstanceRelationsResponse>(await this.doRPCRequest("DescribeWebInstanceRelations", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebInstanceRelationsResponse({}));
  }

  async describeWebInstanceRelations(request: DescribeWebInstanceRelationsRequest): Promise<DescribeWebInstanceRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebInstanceRelationsWithOptions(request, runtime);
  }

  async describeWebPreciseAccessRuleWithOptions(request: DescribeWebPreciseAccessRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebPreciseAccessRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebPreciseAccessRuleResponse>(await this.doRPCRequest("DescribeWebPreciseAccessRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebPreciseAccessRuleResponse({}));
  }

  async describeWebPreciseAccessRule(request: DescribeWebPreciseAccessRuleRequest): Promise<DescribeWebPreciseAccessRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebPreciseAccessRuleWithOptions(request, runtime);
  }

  async describeWebRulesWithOptions(request: DescribeWebRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebRulesResponse>(await this.doRPCRequest("DescribeWebRules", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebRulesResponse({}));
  }

  async describeWebRules(request: DescribeWebRulesRequest): Promise<DescribeWebRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebRulesWithOptions(request, runtime);
  }

  async detachSceneDefenseObjectWithOptions(request: DetachSceneDefenseObjectRequest, runtime: $Util.RuntimeOptions): Promise<DetachSceneDefenseObjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachSceneDefenseObjectResponse>(await this.doRPCRequest("DetachSceneDefenseObject", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DetachSceneDefenseObjectResponse({}));
  }

  async detachSceneDefenseObject(request: DetachSceneDefenseObjectRequest): Promise<DetachSceneDefenseObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachSceneDefenseObjectWithOptions(request, runtime);
  }

  async disableSceneDefensePolicyWithOptions(request: DisableSceneDefensePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DisableSceneDefensePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableSceneDefensePolicyResponse>(await this.doRPCRequest("DisableSceneDefensePolicy", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DisableSceneDefensePolicyResponse({}));
  }

  async disableSceneDefensePolicy(request: DisableSceneDefensePolicyRequest): Promise<DisableSceneDefensePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableSceneDefensePolicyWithOptions(request, runtime);
  }

  async disableWebAccessLogConfigWithOptions(request: DisableWebAccessLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<DisableWebAccessLogConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableWebAccessLogConfigResponse>(await this.doRPCRequest("DisableWebAccessLogConfig", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DisableWebAccessLogConfigResponse({}));
  }

  async disableWebAccessLogConfig(request: DisableWebAccessLogConfigRequest): Promise<DisableWebAccessLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableWebAccessLogConfigWithOptions(request, runtime);
  }

  async disableWebCCWithOptions(request: DisableWebCCRequest, runtime: $Util.RuntimeOptions): Promise<DisableWebCCResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableWebCCResponse>(await this.doRPCRequest("DisableWebCC", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DisableWebCCResponse({}));
  }

  async disableWebCC(request: DisableWebCCRequest): Promise<DisableWebCCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableWebCCWithOptions(request, runtime);
  }

  async disableWebCCRuleWithOptions(request: DisableWebCCRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableWebCCRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableWebCCRuleResponse>(await this.doRPCRequest("DisableWebCCRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DisableWebCCRuleResponse({}));
  }

  async disableWebCCRule(request: DisableWebCCRuleRequest): Promise<DisableWebCCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableWebCCRuleWithOptions(request, runtime);
  }

  async emptyAutoCcBlacklistWithOptions(request: EmptyAutoCcBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<EmptyAutoCcBlacklistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EmptyAutoCcBlacklistResponse>(await this.doRPCRequest("EmptyAutoCcBlacklist", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new EmptyAutoCcBlacklistResponse({}));
  }

  async emptyAutoCcBlacklist(request: EmptyAutoCcBlacklistRequest): Promise<EmptyAutoCcBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.emptyAutoCcBlacklistWithOptions(request, runtime);
  }

  async emptyAutoCcWhitelistWithOptions(request: EmptyAutoCcWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<EmptyAutoCcWhitelistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EmptyAutoCcWhitelistResponse>(await this.doRPCRequest("EmptyAutoCcWhitelist", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new EmptyAutoCcWhitelistResponse({}));
  }

  async emptyAutoCcWhitelist(request: EmptyAutoCcWhitelistRequest): Promise<EmptyAutoCcWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.emptyAutoCcWhitelistWithOptions(request, runtime);
  }

  async emptySlsLogstoreWithOptions(request: EmptySlsLogstoreRequest, runtime: $Util.RuntimeOptions): Promise<EmptySlsLogstoreResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EmptySlsLogstoreResponse>(await this.doRPCRequest("EmptySlsLogstore", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new EmptySlsLogstoreResponse({}));
  }

  async emptySlsLogstore(request: EmptySlsLogstoreRequest): Promise<EmptySlsLogstoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.emptySlsLogstoreWithOptions(request, runtime);
  }

  async enableSceneDefensePolicyWithOptions(request: EnableSceneDefensePolicyRequest, runtime: $Util.RuntimeOptions): Promise<EnableSceneDefensePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableSceneDefensePolicyResponse>(await this.doRPCRequest("EnableSceneDefensePolicy", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableSceneDefensePolicyResponse({}));
  }

  async enableSceneDefensePolicy(request: EnableSceneDefensePolicyRequest): Promise<EnableSceneDefensePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSceneDefensePolicyWithOptions(request, runtime);
  }

  async enableWebAccessLogConfigWithOptions(request: EnableWebAccessLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<EnableWebAccessLogConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableWebAccessLogConfigResponse>(await this.doRPCRequest("EnableWebAccessLogConfig", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableWebAccessLogConfigResponse({}));
  }

  async enableWebAccessLogConfig(request: EnableWebAccessLogConfigRequest): Promise<EnableWebAccessLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableWebAccessLogConfigWithOptions(request, runtime);
  }

  async enableWebCCWithOptions(request: EnableWebCCRequest, runtime: $Util.RuntimeOptions): Promise<EnableWebCCResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableWebCCResponse>(await this.doRPCRequest("EnableWebCC", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableWebCCResponse({}));
  }

  async enableWebCC(request: EnableWebCCRequest): Promise<EnableWebCCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableWebCCWithOptions(request, runtime);
  }

  async enableWebCCRuleWithOptions(request: EnableWebCCRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableWebCCRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableWebCCRuleResponse>(await this.doRPCRequest("EnableWebCCRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableWebCCRuleResponse({}));
  }

  async enableWebCCRule(request: EnableWebCCRuleRequest): Promise<EnableWebCCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableWebCCRuleWithOptions(request, runtime);
  }

  async modifyBlackholeStatusWithOptions(request: ModifyBlackholeStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBlackholeStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBlackholeStatusResponse>(await this.doRPCRequest("ModifyBlackholeStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBlackholeStatusResponse({}));
  }

  async modifyBlackholeStatus(request: ModifyBlackholeStatusRequest): Promise<ModifyBlackholeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBlackholeStatusWithOptions(request, runtime);
  }

  async modifyBlockStatusWithOptions(request: ModifyBlockStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBlockStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBlockStatusResponse>(await this.doRPCRequest("ModifyBlockStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBlockStatusResponse({}));
  }

  async modifyBlockStatus(request: ModifyBlockStatusRequest): Promise<ModifyBlockStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBlockStatusWithOptions(request, runtime);
  }

  async modifyCnameReuseWithOptions(request: ModifyCnameReuseRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCnameReuseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCnameReuseResponse>(await this.doRPCRequest("ModifyCnameReuse", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCnameReuseResponse({}));
  }

  async modifyCnameReuse(request: ModifyCnameReuseRequest): Promise<ModifyCnameReuseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCnameReuseWithOptions(request, runtime);
  }

  async modifyElasticBandWidthWithOptions(request: ModifyElasticBandWidthRequest, runtime: $Util.RuntimeOptions): Promise<ModifyElasticBandWidthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyElasticBandWidthResponse>(await this.doRPCRequest("ModifyElasticBandWidth", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyElasticBandWidthResponse({}));
  }

  async modifyElasticBandWidth(request: ModifyElasticBandWidthRequest): Promise<ModifyElasticBandWidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyElasticBandWidthWithOptions(request, runtime);
  }

  async modifyFullLogTtlWithOptions(request: ModifyFullLogTtlRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFullLogTtlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFullLogTtlResponse>(await this.doRPCRequest("ModifyFullLogTtl", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFullLogTtlResponse({}));
  }

  async modifyFullLogTtl(request: ModifyFullLogTtlRequest): Promise<ModifyFullLogTtlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFullLogTtlWithOptions(request, runtime);
  }

  async modifyHealthCheckConfigWithOptions(request: ModifyHealthCheckConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHealthCheckConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHealthCheckConfigResponse>(await this.doRPCRequest("ModifyHealthCheckConfig", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHealthCheckConfigResponse({}));
  }

  async modifyHealthCheckConfig(request: ModifyHealthCheckConfigRequest): Promise<ModifyHealthCheckConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHealthCheckConfigWithOptions(request, runtime);
  }

  async modifyHttp2EnableWithOptions(request: ModifyHttp2EnableRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHttp2EnableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHttp2EnableResponse>(await this.doRPCRequest("ModifyHttp2Enable", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHttp2EnableResponse({}));
  }

  async modifyHttp2Enable(request: ModifyHttp2EnableRequest): Promise<ModifyHttp2EnableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHttp2EnableWithOptions(request, runtime);
  }

  async modifyInstanceRemarkWithOptions(request: ModifyInstanceRemarkRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceRemarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceRemarkResponse>(await this.doRPCRequest("ModifyInstanceRemark", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceRemarkResponse({}));
  }

  async modifyInstanceRemark(request: ModifyInstanceRemarkRequest): Promise<ModifyInstanceRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceRemarkWithOptions(request, runtime);
  }

  async modifyNetworkRuleAttributeWithOptions(request: ModifyNetworkRuleAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNetworkRuleAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyNetworkRuleAttributeResponse>(await this.doRPCRequest("ModifyNetworkRuleAttribute", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyNetworkRuleAttributeResponse({}));
  }

  async modifyNetworkRuleAttribute(request: ModifyNetworkRuleAttributeRequest): Promise<ModifyNetworkRuleAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNetworkRuleAttributeWithOptions(request, runtime);
  }

  async modifyPortAutoCcStatusWithOptions(request: ModifyPortAutoCcStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPortAutoCcStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPortAutoCcStatusResponse>(await this.doRPCRequest("ModifyPortAutoCcStatus", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPortAutoCcStatusResponse({}));
  }

  async modifyPortAutoCcStatus(request: ModifyPortAutoCcStatusRequest): Promise<ModifyPortAutoCcStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPortAutoCcStatusWithOptions(request, runtime);
  }

  async modifySceneDefensePolicyWithOptions(request: ModifySceneDefensePolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifySceneDefensePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySceneDefensePolicyResponse>(await this.doRPCRequest("ModifySceneDefensePolicy", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySceneDefensePolicyResponse({}));
  }

  async modifySceneDefensePolicy(request: ModifySceneDefensePolicyRequest): Promise<ModifySceneDefensePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySceneDefensePolicyWithOptions(request, runtime);
  }

  async modifySchedulerRuleWithOptions(request: ModifySchedulerRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifySchedulerRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySchedulerRuleResponse>(await this.doRPCRequest("ModifySchedulerRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySchedulerRuleResponse({}));
  }

  async modifySchedulerRule(request: ModifySchedulerRuleRequest): Promise<ModifySchedulerRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySchedulerRuleWithOptions(request, runtime);
  }

  async modifyTlsConfigWithOptions(request: ModifyTlsConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTlsConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyTlsConfigResponse>(await this.doRPCRequest("ModifyTlsConfig", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyTlsConfigResponse({}));
  }

  async modifyTlsConfig(request: ModifyTlsConfigRequest): Promise<ModifyTlsConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTlsConfigWithOptions(request, runtime);
  }

  async modifyWebAccessModeWithOptions(request: ModifyWebAccessModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebAccessModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebAccessModeResponse>(await this.doRPCRequest("ModifyWebAccessMode", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebAccessModeResponse({}));
  }

  async modifyWebAccessMode(request: ModifyWebAccessModeRequest): Promise<ModifyWebAccessModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebAccessModeWithOptions(request, runtime);
  }

  async modifyWebAIProtectModeWithOptions(request: ModifyWebAIProtectModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebAIProtectModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebAIProtectModeResponse>(await this.doRPCRequest("ModifyWebAIProtectMode", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebAIProtectModeResponse({}));
  }

  async modifyWebAIProtectMode(request: ModifyWebAIProtectModeRequest): Promise<ModifyWebAIProtectModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebAIProtectModeWithOptions(request, runtime);
  }

  async modifyWebAIProtectSwitchWithOptions(request: ModifyWebAIProtectSwitchRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebAIProtectSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebAIProtectSwitchResponse>(await this.doRPCRequest("ModifyWebAIProtectSwitch", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebAIProtectSwitchResponse({}));
  }

  async modifyWebAIProtectSwitch(request: ModifyWebAIProtectSwitchRequest): Promise<ModifyWebAIProtectSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebAIProtectSwitchWithOptions(request, runtime);
  }

  async modifyWebAreaBlockWithOptions(request: ModifyWebAreaBlockRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebAreaBlockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebAreaBlockResponse>(await this.doRPCRequest("ModifyWebAreaBlock", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebAreaBlockResponse({}));
  }

  async modifyWebAreaBlock(request: ModifyWebAreaBlockRequest): Promise<ModifyWebAreaBlockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebAreaBlockWithOptions(request, runtime);
  }

  async modifyWebAreaBlockSwitchWithOptions(request: ModifyWebAreaBlockSwitchRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebAreaBlockSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebAreaBlockSwitchResponse>(await this.doRPCRequest("ModifyWebAreaBlockSwitch", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebAreaBlockSwitchResponse({}));
  }

  async modifyWebAreaBlockSwitch(request: ModifyWebAreaBlockSwitchRequest): Promise<ModifyWebAreaBlockSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebAreaBlockSwitchWithOptions(request, runtime);
  }

  async modifyWebCacheCustomRuleWithOptions(request: ModifyWebCacheCustomRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebCacheCustomRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebCacheCustomRuleResponse>(await this.doRPCRequest("ModifyWebCacheCustomRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebCacheCustomRuleResponse({}));
  }

  async modifyWebCacheCustomRule(request: ModifyWebCacheCustomRuleRequest): Promise<ModifyWebCacheCustomRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebCacheCustomRuleWithOptions(request, runtime);
  }

  async modifyWebCacheModeWithOptions(request: ModifyWebCacheModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebCacheModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebCacheModeResponse>(await this.doRPCRequest("ModifyWebCacheMode", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebCacheModeResponse({}));
  }

  async modifyWebCacheMode(request: ModifyWebCacheModeRequest): Promise<ModifyWebCacheModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebCacheModeWithOptions(request, runtime);
  }

  async modifyWebCacheSwitchWithOptions(request: ModifyWebCacheSwitchRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebCacheSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebCacheSwitchResponse>(await this.doRPCRequest("ModifyWebCacheSwitch", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebCacheSwitchResponse({}));
  }

  async modifyWebCacheSwitch(request: ModifyWebCacheSwitchRequest): Promise<ModifyWebCacheSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebCacheSwitchWithOptions(request, runtime);
  }

  async modifyWebCCRuleWithOptions(request: ModifyWebCCRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebCCRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebCCRuleResponse>(await this.doRPCRequest("ModifyWebCCRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebCCRuleResponse({}));
  }

  async modifyWebCCRule(request: ModifyWebCCRuleRequest): Promise<ModifyWebCCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebCCRuleWithOptions(request, runtime);
  }

  async modifyWebIpSetSwitchWithOptions(request: ModifyWebIpSetSwitchRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebIpSetSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebIpSetSwitchResponse>(await this.doRPCRequest("ModifyWebIpSetSwitch", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebIpSetSwitchResponse({}));
  }

  async modifyWebIpSetSwitch(request: ModifyWebIpSetSwitchRequest): Promise<ModifyWebIpSetSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebIpSetSwitchWithOptions(request, runtime);
  }

  async modifyWebPreciseAccessRuleWithOptions(request: ModifyWebPreciseAccessRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebPreciseAccessRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebPreciseAccessRuleResponse>(await this.doRPCRequest("ModifyWebPreciseAccessRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebPreciseAccessRuleResponse({}));
  }

  async modifyWebPreciseAccessRule(request: ModifyWebPreciseAccessRuleRequest): Promise<ModifyWebPreciseAccessRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebPreciseAccessRuleWithOptions(request, runtime);
  }

  async modifyWebPreciseAccessSwitchWithOptions(request: ModifyWebPreciseAccessSwitchRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebPreciseAccessSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebPreciseAccessSwitchResponse>(await this.doRPCRequest("ModifyWebPreciseAccessSwitch", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebPreciseAccessSwitchResponse({}));
  }

  async modifyWebPreciseAccessSwitch(request: ModifyWebPreciseAccessSwitchRequest): Promise<ModifyWebPreciseAccessSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebPreciseAccessSwitchWithOptions(request, runtime);
  }

  async modifyWebRuleWithOptions(request: ModifyWebRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebRuleResponse>(await this.doRPCRequest("ModifyWebRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebRuleResponse({}));
  }

  async modifyWebRule(request: ModifyWebRuleRequest): Promise<ModifyWebRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebRuleWithOptions(request, runtime);
  }

  async releaseInstanceWithOptions(request: ReleaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseInstanceResponse>(await this.doRPCRequest("ReleaseInstance", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseInstanceResponse({}));
  }

  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  async switchSchedulerRuleWithOptions(request: SwitchSchedulerRuleRequest, runtime: $Util.RuntimeOptions): Promise<SwitchSchedulerRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SwitchSchedulerRuleResponse>(await this.doRPCRequest("SwitchSchedulerRule", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new SwitchSchedulerRuleResponse({}));
  }

  async switchSchedulerRule(request: SwitchSchedulerRuleRequest): Promise<SwitchSchedulerRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchSchedulerRuleWithOptions(request, runtime);
  }

}
