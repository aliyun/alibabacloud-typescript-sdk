// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAutoCcBlacklistRequest extends $tea.Model {
  blacklist?: string;
  expireTime?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      blacklist: 'Blacklist',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blacklist: 'string',
      expireTime: 'number',
      instanceId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddAutoCcBlacklistResponseBody;
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
      body: AddAutoCcBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAutoCcWhitelistRequest extends $tea.Model {
  expireTime?: number;
  instanceId?: string;
  whitelist?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      instanceId: 'string',
      whitelist: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddAutoCcWhitelistResponseBody;
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
      body: AddAutoCcWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateWebCertRequest extends $tea.Model {
  cert?: string;
  certId?: number;
  certIdentifier?: string;
  certName?: string;
  certRegion?: string;
  domain?: string;
  key?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
      certId: 'CertId',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      certRegion: 'CertRegion',
      domain: 'Domain',
      key: 'Key',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: 'string',
      certId: 'number',
      certIdentifier: 'string',
      certName: 'string',
      certRegion: 'string',
      domain: 'string',
      key: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateWebCertResponseBody;
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
      body: AssociateWebCertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSceneDefenseObjectRequest extends $tea.Model {
  objectType?: string;
  objects?: string;
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      objectType: 'ObjectType',
      objects: 'Objects',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectType: 'string',
      objects: 'string',
      policyId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachSceneDefenseObjectResponseBody;
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
      body: AttachSceneDefenseObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigL7RsPolicyRequest extends $tea.Model {
  domain?: string;
  policy?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      policy: 'Policy',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      policy: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigL7RsPolicyResponseBody;
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
      body: ConfigL7RsPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RealLimitRequest extends $tea.Model {
  instanceId?: string;
  limitValue?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      limitValue: 'LimitValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      limitValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RealLimitResponseBody extends $tea.Model {
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

export class ConfigLayer4RealLimitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigLayer4RealLimitResponseBody;
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
      body: ConfigLayer4RealLimitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RemarkRequest extends $tea.Model {
  listeners?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RemarkResponseBody extends $tea.Model {
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

export class ConfigLayer4RemarkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigLayer4RemarkResponseBody;
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
      body: ConfigLayer4RemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RuleBakModeRequest extends $tea.Model {
  bakMode?: string;
  listeners?: string;
  static names(): { [key: string]: string } {
    return {
      bakMode: 'BakMode',
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bakMode: 'string',
      listeners: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RuleBakModeResponseBody extends $tea.Model {
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

export class ConfigLayer4RuleBakModeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigLayer4RuleBakModeResponseBody;
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
      body: ConfigLayer4RuleBakModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RulePolicyRequest extends $tea.Model {
  listeners?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RulePolicyResponseBody extends $tea.Model {
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

export class ConfigLayer4RulePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigLayer4RulePolicyResponseBody;
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
      body: ConfigLayer4RulePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigNetworkRegionBlockRequest extends $tea.Model {
  config?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      instanceId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigNetworkRegionBlockResponseBody;
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
      body: ConfigNetworkRegionBlockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigNetworkRulesRequest extends $tea.Model {
  networkRules?: string;
  static names(): { [key: string]: string } {
    return {
      networkRules: 'NetworkRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigNetworkRulesResponseBody;
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
      body: ConfigNetworkRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigUdpReflectRequest extends $tea.Model {
  config?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigUdpReflectResponseBody extends $tea.Model {
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

export class ConfigUdpReflectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigUdpReflectResponseBody;
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
      body: ConfigUdpReflectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigWebCCTemplateRequest extends $tea.Model {
  domain?: string;
  resourceGroupId?: string;
  template?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigWebCCTemplateResponseBody;
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
      body: ConfigWebCCTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigWebIpSetRequest extends $tea.Model {
  blackList?: string[];
  domain?: string;
  resourceGroupId?: string;
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      blackList: 'BlackList',
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackList: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigWebIpSetResponseBody;
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
      body: ConfigWebIpSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsyncTaskRequest extends $tea.Model {
  resourceGroupId?: string;
  taskParams?: string;
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      taskParams: 'string',
      taskType: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAsyncTaskResponseBody;
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
      body: CreateAsyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResourceRequest extends $tea.Model {
  domain?: string;
  httpsExt?: string;
  instanceIds?: string[];
  proxyTypes?: CreateDomainResourceRequestProxyTypes[];
  realServers?: string[];
  rsType?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      httpsExt: 'HttpsExt',
      instanceIds: 'InstanceIds',
      proxyTypes: 'ProxyTypes',
      realServers: 'RealServers',
      rsType: 'RsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      httpsExt: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      proxyTypes: { 'type': 'array', 'itemType': CreateDomainResourceRequestProxyTypes },
      realServers: { 'type': 'array', 'itemType': 'string' },
      rsType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResourceResponseBody extends $tea.Model {
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

export class CreateDomainResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDomainResourceResponseBody;
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
      body: CreateDomainResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkRulesRequest extends $tea.Model {
  networkRules?: string;
  static names(): { [key: string]: string } {
    return {
      networkRules: 'NetworkRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNetworkRulesResponseBody;
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
      body: CreateNetworkRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePortRequest extends $tea.Model {
  backendPort?: string;
  frontendPort?: string;
  frontendProtocol?: string;
  instanceId?: string;
  realServers?: string[];
  static names(): { [key: string]: string } {
    return {
      backendPort: 'BackendPort',
      frontendPort: 'FrontendPort',
      frontendProtocol: 'FrontendProtocol',
      instanceId: 'InstanceId',
      realServers: 'RealServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPort: 'string',
      frontendPort: 'string',
      frontendProtocol: 'string',
      instanceId: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePortResponseBody extends $tea.Model {
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

export class CreatePortResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePortResponseBody;
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
      body: CreatePortResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneDefensePolicyRequest extends $tea.Model {
  endTime?: number;
  name?: string;
  startTime?: number;
  template?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      startTime: 'StartTime',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      name: 'string',
      startTime: 'number',
      template: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSceneDefensePolicyResponseBody;
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
      body: CreateSceneDefensePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchedulerRuleRequest extends $tea.Model {
  param?: string;
  resourceGroupId?: string;
  ruleName?: string;
  ruleType?: number;
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      param: 'Param',
      resourceGroupId: 'ResourceGroupId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      param: 'string',
      resourceGroupId: 'string',
      ruleName: 'string',
      ruleType: 'number',
      rules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchedulerRuleResponseBody extends $tea.Model {
  cname?: string;
  requestId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      requestId: 'RequestId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      requestId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchedulerRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSchedulerRuleResponseBody;
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
      body: CreateSchedulerRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceGroupId?: string;
  resourceIds?: string[];
  resourceType?: string;
  tags?: CreateTagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTagResourcesResponseBody;
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
      body: CreateTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebCCRuleRequest extends $tea.Model {
  act?: string;
  count?: number;
  domain?: string;
  interval?: number;
  mode?: string;
  name?: string;
  resourceGroupId?: string;
  ttl?: number;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      act: 'Act',
      count: 'Count',
      domain: 'Domain',
      interval: 'Interval',
      mode: 'Mode',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      act: 'string',
      count: 'number',
      domain: 'string',
      interval: 'number',
      mode: 'string',
      name: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWebCCRuleResponseBody;
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
      body: CreateWebCCRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebRuleRequest extends $tea.Model {
  defenseId?: string;
  domain?: string;
  httpsExt?: string;
  instanceIds?: string[];
  resourceGroupId?: string;
  rsType?: number;
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      defenseId: 'DefenseId',
      domain: 'Domain',
      httpsExt: 'HttpsExt',
      instanceIds: 'InstanceIds',
      resourceGroupId: 'ResourceGroupId',
      rsType: 'RsType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseId: 'string',
      domain: 'string',
      httpsExt: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      rsType: 'number',
      rules: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWebRuleResponseBody;
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
      body: CreateWebRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsyncTaskRequest extends $tea.Model {
  resourceGroupId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAsyncTaskResponseBody;
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
      body: DeleteAsyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoCcBlacklistRequest extends $tea.Model {
  blacklist?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      blacklist: 'Blacklist',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blacklist: 'string',
      instanceId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAutoCcBlacklistResponseBody;
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
      body: DeleteAutoCcBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoCcWhitelistRequest extends $tea.Model {
  instanceId?: string;
  whitelist?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAutoCcWhitelistResponseBody;
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
      body: DeleteAutoCcWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResourceRequest extends $tea.Model {
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResourceResponseBody extends $tea.Model {
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

export class DeleteDomainResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainResourceResponseBody;
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
      body: DeleteDomainResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkRuleRequest extends $tea.Model {
  networkRule?: string;
  static names(): { [key: string]: string } {
    return {
      networkRule: 'NetworkRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNetworkRuleResponseBody;
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
      body: DeleteNetworkRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePortRequest extends $tea.Model {
  backendPort?: string;
  frontendPort?: string;
  frontendProtocol?: string;
  instanceId?: string;
  realServers?: string[];
  static names(): { [key: string]: string } {
    return {
      backendPort: 'BackendPort',
      frontendPort: 'FrontendPort',
      frontendProtocol: 'FrontendProtocol',
      instanceId: 'InstanceId',
      realServers: 'RealServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPort: 'string',
      frontendPort: 'string',
      frontendProtocol: 'string',
      instanceId: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePortResponseBody extends $tea.Model {
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

export class DeletePortResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePortResponseBody;
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
      body: DeletePortResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneDefensePolicyRequest extends $tea.Model {
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSceneDefensePolicyResponseBody;
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
      body: DeleteSceneDefensePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchedulerRuleRequest extends $tea.Model {
  resourceGroupId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSchedulerRuleResponseBody;
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
      body: DeleteSchedulerRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagResourcesRequest extends $tea.Model {
  all?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  resourceIds?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTagResourcesResponseBody;
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
      body: DeleteTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebCCRuleRequest extends $tea.Model {
  domain?: string;
  name?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      name: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWebCCRuleResponseBody;
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
      body: DeleteWebCCRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebCacheCustomRuleRequest extends $tea.Model {
  domain?: string;
  resourceGroupId?: string;
  ruleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWebCacheCustomRuleResponseBody;
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
      body: DeleteWebCacheCustomRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebPreciseAccessRuleRequest extends $tea.Model {
  domain?: string;
  resourceGroupId?: string;
  ruleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWebPreciseAccessRuleResponseBody;
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
      body: DeleteWebPreciseAccessRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebRuleRequest extends $tea.Model {
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWebRuleResponseBody;
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
      body: DeleteWebRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAsyncTasksRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAsyncTasksResponseBody extends $tea.Model {
  asyncTasks?: DescribeAsyncTasksResponseBodyAsyncTasks[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      asyncTasks: 'AsyncTasks',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTasks: { 'type': 'array', 'itemType': DescribeAsyncTasksResponseBodyAsyncTasks },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAsyncTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAsyncTasksResponseBody;
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
      body: DescribeAsyncTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackAnalysisMaxQpsRequest extends $tea.Model {
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackAnalysisMaxQpsResponseBody extends $tea.Model {
  qps?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qps: 'Qps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qps: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackAnalysisMaxQpsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAttackAnalysisMaxQpsResponseBody;
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
      body: DescribeAttackAnalysisMaxQpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcBlacklistRequest extends $tea.Model {
  instanceId?: string;
  keyWord?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keyWord: 'KeyWord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  autoCcBlacklist?: DescribeAutoCcBlacklistResponseBodyAutoCcBlacklist[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoCcBlacklist: 'AutoCcBlacklist',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCcBlacklist: { 'type': 'array', 'itemType': DescribeAutoCcBlacklistResponseBodyAutoCcBlacklist },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcBlacklistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAutoCcBlacklistResponseBody;
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
      body: DescribeAutoCcBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcListCountRequest extends $tea.Model {
  instanceId?: string;
  queryType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queryType: 'QueryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAutoCcListCountResponseBody;
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
      body: DescribeAutoCcListCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcWhitelistRequest extends $tea.Model {
  instanceId?: string;
  keyWord?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keyWord: 'KeyWord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoCcWhitelist: 'AutoCcWhitelist',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCcWhitelist: { 'type': 'array', 'itemType': DescribeAutoCcWhitelistResponseBodyAutoCcWhitelist },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcWhitelistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAutoCcWhitelistResponseBody;
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
      body: DescribeAutoCcWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackSourceCidrRequest extends $tea.Model {
  ipVersion?: string;
  line?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ipVersion: 'IpVersion',
      line: 'Line',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipVersion: 'string',
      line: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackSourceCidrResponseBody extends $tea.Model {
  cidrs?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrs: 'Cidrs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrs: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackSourceCidrResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackSourceCidrResponseBody;
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
      body: DescribeBackSourceCidrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackholeStatusRequest extends $tea.Model {
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackholeStatusResponseBody extends $tea.Model {
  blackholeStatus?: DescribeBlackholeStatusResponseBodyBlackholeStatus[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      blackholeStatus: 'BlackholeStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeStatus: { 'type': 'array', 'itemType': DescribeBlackholeStatusResponseBodyBlackholeStatus },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackholeStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBlackholeStatusResponseBody;
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
      body: DescribeBlackholeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockStatusRequest extends $tea.Model {
  instanceIds?: string[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBlockStatusResponseBody;
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
      body: DescribeBlockStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertsRequest extends $tea.Model {
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCertsResponseBody;
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
      body: DescribeCertsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameReusesRequest extends $tea.Model {
  domains?: string[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameReusesResponseBody extends $tea.Model {
  cnameReuses?: DescribeCnameReusesResponseBodyCnameReuses[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cnameReuses: 'CnameReuses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnameReuses: { 'type': 'array', 'itemType': DescribeCnameReusesResponseBodyCnameReuses },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameReusesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCnameReusesResponseBody;
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
      body: DescribeCnameReusesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsRequest extends $tea.Model {
  endTime?: number;
  instanceIds?: string[];
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsResponseBody extends $tea.Model {
  DDoSEvents?: DescribeDDoSEventsResponseBodyDDoSEvents[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      DDoSEvents: 'DDoSEvents',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDoSEvents: { 'type': 'array', 'itemType': DescribeDDoSEventsResponseBodyDDoSEvents },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDDoSEventsResponseBody;
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
      body: DescribeDDoSEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosAllEventListRequest extends $tea.Model {
  endTime?: number;
  eventType?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventType: 'EventType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      eventType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosAllEventListResponseBody extends $tea.Model {
  attackEvents?: DescribeDDosAllEventListResponseBodyAttackEvents[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      attackEvents: 'AttackEvents',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackEvents: { 'type': 'array', 'itemType': DescribeDDosAllEventListResponseBodyAttackEvents },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosAllEventListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDDosAllEventListResponseBody;
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
      body: DescribeDDosAllEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventAreaRequest extends $tea.Model {
  eventType?: string;
  ip?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      ip: 'Ip',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      ip: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventAreaResponseBody extends $tea.Model {
  areas?: DescribeDDosEventAreaResponseBodyAreas[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      areas: 'Areas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areas: { 'type': 'array', 'itemType': DescribeDDosEventAreaResponseBodyAreas },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventAreaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDDosEventAreaResponseBody;
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
      body: DescribeDDosEventAreaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventAttackTypeRequest extends $tea.Model {
  eventType?: string;
  ip?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      ip: 'Ip',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      ip: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventAttackTypeResponseBody extends $tea.Model {
  attackTypes?: DescribeDDosEventAttackTypeResponseBodyAttackTypes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attackTypes: 'AttackTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackTypes: { 'type': 'array', 'itemType': DescribeDDosEventAttackTypeResponseBodyAttackTypes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventAttackTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDDosEventAttackTypeResponseBody;
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
      body: DescribeDDosEventAttackTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventIspRequest extends $tea.Model {
  eventType?: string;
  ip?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      ip: 'Ip',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      ip: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventIspResponseBody extends $tea.Model {
  isps?: DescribeDDosEventIspResponseBodyIsps[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isps: 'Isps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isps: { 'type': 'array', 'itemType': DescribeDDosEventIspResponseBodyIsps },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventIspResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDDosEventIspResponseBody;
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
      body: DescribeDDosEventIspResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventMaxRequest extends $tea.Model {
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventMaxResponseBody extends $tea.Model {
  cps?: number;
  mbps?: number;
  qps?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cps: 'Cps',
      mbps: 'Mbps',
      qps: 'Qps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cps: 'number',
      mbps: 'number',
      qps: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventMaxResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDDosEventMaxResponseBody;
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
      body: DescribeDDosEventMaxResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventSrcIpRequest extends $tea.Model {
  eventType?: string;
  ip?: string;
  range?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      ip: 'Ip',
      range: 'Range',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      ip: 'string',
      range: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventSrcIpResponseBody extends $tea.Model {
  ips?: DescribeDDosEventSrcIpResponseBodyIps[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ips: 'Ips',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ips: { 'type': 'array', 'itemType': DescribeDDosEventSrcIpResponseBodyIps },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventSrcIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDDosEventSrcIpResponseBody;
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
      body: DescribeDDosEventSrcIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseCountStatisticsRequest extends $tea.Model {
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseCountStatisticsResponseBody extends $tea.Model {
  defenseCountStatistics?: DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defenseCountStatistics: 'DefenseCountStatistics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseCountStatistics: DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseCountStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseCountStatisticsResponseBody;
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
      body: DescribeDefenseCountStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRecordsRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRecordsResponseBody extends $tea.Model {
  defenseRecords?: DescribeDefenseRecordsResponseBodyDefenseRecords[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      defenseRecords: 'DefenseRecords',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseRecords: { 'type': 'array', 'itemType': DescribeDefenseRecordsResponseBodyDefenseRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseRecordsResponseBody;
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
      body: DescribeDefenseRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackEventsRequest extends $tea.Model {
  domain?: string;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackEventsResponseBody extends $tea.Model {
  domainAttackEvents?: DescribeDomainAttackEventsResponseBodyDomainAttackEvents[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainAttackEvents: 'DomainAttackEvents',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainAttackEvents: { 'type': 'array', 'itemType': DescribeDomainAttackEventsResponseBodyDomainAttackEvents },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainAttackEventsResponseBody;
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
      body: DescribeDomainAttackEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainOverviewRequest extends $tea.Model {
  domain?: string;
  endTime?: number;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainOverviewResponseBody extends $tea.Model {
  maxHttp?: number;
  maxHttps?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxHttp: 'MaxHttp',
      maxHttps: 'MaxHttps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxHttp: 'number',
      maxHttps: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainOverviewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainOverviewResponseBody;
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
      body: DescribeDomainOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQPSListRequest extends $tea.Model {
  domain?: string;
  endTime?: number;
  interval?: number;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      interval: 'Interval',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      interval: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainQPSListResponseBody;
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
      body: DescribeDomainQPSListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResourceRequest extends $tea.Model {
  domain?: string;
  instanceIds?: string[];
  pageNumber?: number;
  pageSize?: number;
  queryDomainPattern?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryDomainPattern: 'QueryDomainPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      queryDomainPattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResourceResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  webRules?: DescribeDomainResourceResponseBodyWebRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      webRules: 'WebRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      webRules: { 'type': 'array', 'itemType': DescribeDomainResourceResponseBodyWebRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainResourceResponseBody;
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
      body: DescribeDomainResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSecurityProfileRequest extends $tea.Model {
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSecurityProfileResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeDomainSecurityProfileResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeDomainSecurityProfileResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSecurityProfileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainSecurityProfileResponseBody;
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
      body: DescribeDomainSecurityProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeCountRequest extends $tea.Model {
  domain?: string;
  endTime?: number;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeCountResponseBody extends $tea.Model {
  requestId?: string;
  status200?: number;
  status2XX?: number;
  status3XX?: number;
  status403?: number;
  status404?: number;
  status405?: number;
  status4XX?: number;
  status501?: number;
  status502?: number;
  status503?: number;
  status504?: number;
  status5XX?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status200: 'Status200',
      status2XX: 'Status2XX',
      status3XX: 'Status3XX',
      status403: 'Status403',
      status404: 'Status404',
      status405: 'Status405',
      status4XX: 'Status4XX',
      status501: 'Status501',
      status502: 'Status502',
      status503: 'Status503',
      status504: 'Status504',
      status5XX: 'Status5XX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status200: 'number',
      status2XX: 'number',
      status3XX: 'number',
      status403: 'number',
      status404: 'number',
      status405: 'number',
      status4XX: 'number',
      status501: 'number',
      status502: 'number',
      status503: 'number',
      status504: 'number',
      status5XX: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainStatusCodeCountResponseBody;
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
      body: DescribeDomainStatusCodeCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeListRequest extends $tea.Model {
  domain?: string;
  endTime?: number;
  interval?: number;
  queryType?: string;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      interval: 'Interval',
      queryType: 'QueryType',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      interval: 'number',
      queryType: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainStatusCodeListResponseBody;
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
      body: DescribeDomainStatusCodeListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopAttackListRequest extends $tea.Model {
  endTime?: number;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainTopAttackListResponseBody;
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
      body: DescribeDomainTopAttackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewSourceCountriesRequest extends $tea.Model {
  domain?: string;
  endTime?: number;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainViewSourceCountriesResponseBody;
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
      body: DescribeDomainViewSourceCountriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewSourceProvincesRequest extends $tea.Model {
  domain?: string;
  endTime?: number;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewSourceProvincesResponseBody extends $tea.Model {
  requestId?: string;
  sourceProvinces?: DescribeDomainViewSourceProvincesResponseBodySourceProvinces[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sourceProvinces: 'SourceProvinces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sourceProvinces: { 'type': 'array', 'itemType': DescribeDomainViewSourceProvincesResponseBodySourceProvinces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewSourceProvincesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainViewSourceProvincesResponseBody;
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
      body: DescribeDomainViewSourceProvincesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewTopCostTimeRequest extends $tea.Model {
  domain?: string;
  endTime?: number;
  resourceGroupId?: string;
  startTime?: number;
  top?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainViewTopCostTimeResponseBody;
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
      body: DescribeDomainViewTopCostTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewTopUrlRequest extends $tea.Model {
  domain?: string;
  endTime?: number;
  resourceGroupId?: string;
  startTime?: number;
  top?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainViewTopUrlResponseBody;
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
      body: DescribeDomainViewTopUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsRequest extends $tea.Model {
  instanceIds?: string[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainsResponseBody;
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
      body: DescribeDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticBandwidthSpecRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticBandwidthSpecResponseBody extends $tea.Model {
  elasticBandwidthSpec?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticBandwidthSpec: 'ElasticBandwidthSpec',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticBandwidthSpec: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticBandwidthSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeElasticBandwidthSpecResponseBody;
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
      body: DescribeElasticBandwidthSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticQpsRequest extends $tea.Model {
  endTime?: number;
  interval?: string;
  ip?: string;
  region?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      ip: 'Ip',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      interval: 'string',
      ip: 'string',
      region: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticQpsResponseBody extends $tea.Model {
  elasticQps?: DescribeElasticQpsResponseBodyElasticQps[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticQps: 'ElasticQps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticQps: { 'type': 'array', 'itemType': DescribeElasticQpsResponseBodyElasticQps },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticQpsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeElasticQpsResponseBody;
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
      body: DescribeElasticQpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticQpsRecordRequest extends $tea.Model {
  endTime?: number;
  ip?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ip: 'Ip',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ip: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticQpsRecordResponseBody extends $tea.Model {
  elasticQpsList?: DescribeElasticQpsRecordResponseBodyElasticQpsList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticQpsList: 'ElasticQpsList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticQpsList: { 'type': 'array', 'itemType': DescribeElasticQpsRecordResponseBodyElasticQpsList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticQpsRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeElasticQpsRecordResponseBody;
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
      body: DescribeElasticQpsRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHeadersRequest extends $tea.Model {
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHeadersResponseBody extends $tea.Model {
  customHeader?: DescribeHeadersResponseBodyCustomHeader;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customHeader: 'CustomHeader',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHeader: DescribeHeadersResponseBodyCustomHeader,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHeadersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHeadersResponseBody;
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
      body: DescribeHeadersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListRequest extends $tea.Model {
  networkRules?: string;
  static names(): { [key: string]: string } {
    return {
      networkRules: 'NetworkRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseBody extends $tea.Model {
  healthCheckList?: DescribeHealthCheckListResponseBodyHealthCheckList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckList: 'HealthCheckList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckList: { 'type': 'array', 'itemType': DescribeHealthCheckListResponseBodyHealthCheckList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHealthCheckListResponseBody;
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
      body: DescribeHealthCheckListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusRequest extends $tea.Model {
  networkRules?: string;
  static names(): { [key: string]: string } {
    return {
      networkRules: 'NetworkRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusResponseBody extends $tea.Model {
  healthCheckStatus?: DescribeHealthCheckStatusResponseBodyHealthCheckStatus[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckStatus: 'HealthCheckStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckStatus: { 'type': 'array', 'itemType': DescribeHealthCheckStatusResponseBodyHealthCheckStatus },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHealthCheckStatusResponseBody;
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
      body: DescribeHealthCheckStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsRequest extends $tea.Model {
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceDetailsResponseBody;
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
      body: DescribeInstanceDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceExtRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceExtResponseBody extends $tea.Model {
  instanceExtSpecs?: DescribeInstanceExtResponseBodyInstanceExtSpecs[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceExtSpecs: 'InstanceExtSpecs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceExtSpecs: { 'type': 'array', 'itemType': DescribeInstanceExtResponseBodyInstanceExtSpecs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceExtResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceExtResponseBody;
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
      body: DescribeInstanceExtResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceIdsRequest extends $tea.Model {
  edition?: number;
  instanceIds?: string[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      instanceIds: 'InstanceIds',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceIdsResponseBody extends $tea.Model {
  instanceIds?: DescribeInstanceIdsResponseBodyInstanceIds[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': DescribeInstanceIdsResponseBodyInstanceIds },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceIdsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceIdsResponseBody;
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
      body: DescribeInstanceIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsRequest extends $tea.Model {
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBody extends $tea.Model {
  instanceSpecs?: DescribeInstanceSpecsResponseBodyInstanceSpecs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSpecs: 'InstanceSpecs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpecs: { 'type': 'array', 'itemType': DescribeInstanceSpecsResponseBodyInstanceSpecs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceSpecsResponseBody;
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
      body: DescribeInstanceSpecsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsRequest extends $tea.Model {
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceStatisticsResponseBody;
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
      body: DescribeInstanceStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatusRequest extends $tea.Model {
  instanceId?: string;
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      productType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatusResponseBody extends $tea.Model {
  instanceId?: string;
  instanceStatus?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceStatus: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceStatusResponseBody;
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
      body: DescribeInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  edition?: number;
  enabled?: number;
  expireEndTime?: number;
  expireStartTime?: number;
  instanceIds?: string[];
  ip?: string;
  pageNumber?: string;
  pageSize?: string;
  remark?: string;
  resourceGroupId?: string;
  status?: number[];
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      enabled: 'Enabled',
      expireEndTime: 'ExpireEndTime',
      expireStartTime: 'ExpireStartTime',
      instanceIds: 'InstanceIds',
      ip: 'Ip',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'number',
      enabled: 'number',
      expireEndTime: 'number',
      expireStartTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      remark: 'string',
      resourceGroupId: 'string',
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
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstancesResponseBody;
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
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL7RsPolicyRequest extends $tea.Model {
  domain?: string;
  realServers?: string[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      realServers: 'RealServers',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL7RsPolicyResponseBody extends $tea.Model {
  attributes?: DescribeL7RsPolicyResponseBodyAttributes[];
  proxyMode?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      proxyMode: 'ProxyMode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': DescribeL7RsPolicyResponseBodyAttributes },
      proxyMode: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL7RsPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeL7RsPolicyResponseBody;
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
      body: DescribeL7RsPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulePolicyRequest extends $tea.Model {
  listeners?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulePolicyResponseBody extends $tea.Model {
  backendPort?: number;
  bakMode?: string;
  currentIndex?: number;
  forwardProtocol?: string;
  frontendPort?: number;
  instanceId?: string;
  priRealServers?: DescribeLayer4RulePolicyResponseBodyPriRealServers[];
  requestId?: string;
  secRealServers?: DescribeLayer4RulePolicyResponseBodySecRealServers[];
  static names(): { [key: string]: string } {
    return {
      backendPort: 'BackendPort',
      bakMode: 'BakMode',
      currentIndex: 'CurrentIndex',
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      priRealServers: 'PriRealServers',
      requestId: 'RequestId',
      secRealServers: 'SecRealServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPort: 'number',
      bakMode: 'string',
      currentIndex: 'number',
      forwardProtocol: 'string',
      frontendPort: 'number',
      instanceId: 'string',
      priRealServers: { 'type': 'array', 'itemType': DescribeLayer4RulePolicyResponseBodyPriRealServers },
      requestId: 'string',
      secRealServers: { 'type': 'array', 'itemType': DescribeLayer4RulePolicyResponseBodySecRealServers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLayer4RulePolicyResponseBody;
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
      body: DescribeLayer4RulePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreExistStatusRequest extends $tea.Model {
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreExistStatusResponseBody extends $tea.Model {
  existStatus?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      existStatus: 'ExistStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existStatus: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreExistStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLogStoreExistStatusResponseBody;
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
      body: DescribeLogStoreExistStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRegionBlockRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRegionBlockResponseBody extends $tea.Model {
  config?: DescribeNetworkRegionBlockResponseBodyConfig;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeNetworkRegionBlockResponseBodyConfig,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRegionBlockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNetworkRegionBlockResponseBody;
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
      body: DescribeNetworkRegionBlockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesRequest extends $tea.Model {
  networkRules?: string;
  static names(): { [key: string]: string } {
    return {
      networkRules: 'NetworkRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNetworkRuleAttributesResponseBody;
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
      body: DescribeNetworkRuleAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRulesRequest extends $tea.Model {
  forwardProtocol?: string;
  frontendPort?: number;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardProtocol: 'string',
      frontendPort: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRulesResponseBody extends $tea.Model {
  networkRules?: DescribeNetworkRulesResponseBodyNetworkRules[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkRules: 'NetworkRules',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRules: { 'type': 'array', 'itemType': DescribeNetworkRulesResponseBodyNetworkRules },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNetworkRulesResponseBody;
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
      body: DescribeNetworkRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesRequest extends $tea.Model {
  endTime?: number;
  entityObject?: string;
  entityType?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      entityObject: 'EntityObject',
      entityType: 'EntityType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      entityObject: 'string',
      entityType: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponseBody extends $tea.Model {
  opEntities?: DescribeOpEntitiesResponseBodyOpEntities[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      opEntities: 'OpEntities',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opEntities: { 'type': 'array', 'itemType': DescribeOpEntitiesResponseBodyOpEntities },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOpEntitiesResponseBody;
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
      body: DescribeOpEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortRequest extends $tea.Model {
  frontendPort?: number;
  frontendProtocol?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      frontendPort: 'FrontendPort',
      frontendProtocol: 'FrontendProtocol',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendPort: 'number',
      frontendProtocol: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortResponseBody extends $tea.Model {
  networkRules?: DescribePortResponseBodyNetworkRules[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkRules: 'NetworkRules',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRules: { 'type': 'array', 'itemType': DescribePortResponseBodyNetworkRules },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePortResponseBody;
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
      body: DescribePortResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortAttackMaxFlowRequest extends $tea.Model {
  endTime?: number;
  instanceIds?: string[];
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortAttackMaxFlowResponseBody extends $tea.Model {
  bps?: number;
  pps?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      pps: 'Pps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      pps: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortAttackMaxFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePortAttackMaxFlowResponseBody;
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
      body: DescribePortAttackMaxFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortAutoCcStatusRequest extends $tea.Model {
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortAutoCcStatusResponseBody extends $tea.Model {
  portAutoCcStatus?: DescribePortAutoCcStatusResponseBodyPortAutoCcStatus[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      portAutoCcStatus: 'PortAutoCcStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portAutoCcStatus: { 'type': 'array', 'itemType': DescribePortAutoCcStatusResponseBodyPortAutoCcStatus },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortAutoCcStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePortAutoCcStatusResponseBody;
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
      body: DescribePortAutoCcStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortCcAttackTopIPRequest extends $tea.Model {
  ip?: string;
  limit?: number;
  port?: string;
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      limit: 'Limit',
      port: 'Port',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      limit: 'number',
      port: 'string',
      startTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortCcAttackTopIPResponseBody extends $tea.Model {
  requestId?: string;
  topIp?: DescribePortCcAttackTopIPResponseBodyTopIp[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topIp: 'TopIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topIp: { 'type': 'array', 'itemType': DescribePortCcAttackTopIPResponseBodyTopIp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortCcAttackTopIPResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePortCcAttackTopIPResponseBody;
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
      body: DescribePortCcAttackTopIPResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortConnsCountRequest extends $tea.Model {
  endTime?: number;
  instanceIds?: string[];
  port?: string;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      port: 'Port',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      port: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortConnsCountResponseBody extends $tea.Model {
  actConns?: number;
  conns?: number;
  cps?: number;
  inActConns?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actConns: 'ActConns',
      conns: 'Conns',
      cps: 'Cps',
      inActConns: 'InActConns',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actConns: 'number',
      conns: 'number',
      cps: 'number',
      inActConns: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortConnsCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePortConnsCountResponseBody;
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
      body: DescribePortConnsCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortConnsListRequest extends $tea.Model {
  endTime?: number;
  instanceIds?: string[];
  interval?: number;
  port?: string;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      interval: 'Interval',
      port: 'Port',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      interval: 'number',
      port: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePortConnsListResponseBody;
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
      body: DescribePortConnsListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortFlowListRequest extends $tea.Model {
  endTime?: number;
  instanceIds?: string[];
  interval?: number;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      interval: 'Interval',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      interval: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortFlowListResponseBody extends $tea.Model {
  portFlowList?: DescribePortFlowListResponseBodyPortFlowList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      portFlowList: 'PortFlowList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portFlowList: { 'type': 'array', 'itemType': DescribePortFlowListResponseBodyPortFlowList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortFlowListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePortFlowListResponseBody;
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
      body: DescribePortFlowListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortMaxConnsRequest extends $tea.Model {
  endTime?: number;
  instanceIds?: string[];
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      startTime: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePortMaxConnsResponseBody;
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
      body: DescribePortMaxConnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceCountriesRequest extends $tea.Model {
  endTime?: number;
  instanceIds?: string[];
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      startTime: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePortViewSourceCountriesResponseBody;
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
      body: DescribePortViewSourceCountriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceIspsRequest extends $tea.Model {
  endTime?: number;
  instanceIds?: string[];
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceIspsResponseBody extends $tea.Model {
  isps?: DescribePortViewSourceIspsResponseBodyIsps[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isps: 'Isps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isps: { 'type': 'array', 'itemType': DescribePortViewSourceIspsResponseBodyIsps },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceIspsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePortViewSourceIspsResponseBody;
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
      body: DescribePortViewSourceIspsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceProvincesRequest extends $tea.Model {
  endTime?: number;
  instanceIds?: string[];
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceProvincesResponseBody extends $tea.Model {
  requestId?: string;
  sourceProvinces?: DescribePortViewSourceProvincesResponseBodySourceProvinces[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sourceProvinces: 'SourceProvinces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sourceProvinces: { 'type': 'array', 'itemType': DescribePortViewSourceProvincesResponseBodySourceProvinces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceProvincesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePortViewSourceProvincesResponseBody;
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
      body: DescribePortViewSourceProvincesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefenseObjectsRequest extends $tea.Model {
  policyId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefenseObjectsResponseBody extends $tea.Model {
  objects?: DescribeSceneDefenseObjectsResponseBodyObjects[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      objects: 'Objects',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objects: { 'type': 'array', 'itemType': DescribeSceneDefenseObjectsResponseBodyObjects },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefenseObjectsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSceneDefenseObjectsResponseBody;
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
      body: DescribeSceneDefenseObjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefensePoliciesRequest extends $tea.Model {
  resourceGroupId?: string;
  status?: string;
  template?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      status: 'string',
      template: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSceneDefensePoliciesResponseBody;
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
      body: DescribeSceneDefensePoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchedulerRulesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchedulerRulesResponseBody extends $tea.Model {
  requestId?: string;
  schedulerRules?: DescribeSchedulerRulesResponseBodySchedulerRules[];
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schedulerRules: 'SchedulerRules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schedulerRules: { 'type': 'array', 'itemType': DescribeSchedulerRulesResponseBodySchedulerRules },
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchedulerRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSchedulerRulesResponseBody;
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
      body: DescribeSchedulerRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlaEventListRequest extends $tea.Model {
  endTime?: number;
  ip?: string;
  page?: number;
  pageSize?: number;
  region?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ip: 'Ip',
      page: 'Page',
      pageSize: 'PageSize',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ip: 'string',
      page: 'number',
      pageSize: 'number',
      region: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlaEventListResponseBody extends $tea.Model {
  requestId?: string;
  slaEvent?: DescribeSlaEventListResponseBodySlaEvent[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slaEvent: 'SlaEvent',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slaEvent: { 'type': 'array', 'itemType': DescribeSlaEventListResponseBodySlaEvent },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlaEventListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlaEventListResponseBody;
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
      body: DescribeSlaEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsAuthStatusRequest extends $tea.Model {
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlsAuthStatusResponseBody;
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
      body: DescribeSlsAuthStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogstoreInfoRequest extends $tea.Model {
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogstoreInfoResponseBody extends $tea.Model {
  logStore?: string;
  project?: string;
  quota?: number;
  requestId?: string;
  ttl?: number;
  used?: number;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      project: 'Project',
      quota: 'Quota',
      requestId: 'RequestId',
      ttl: 'Ttl',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      project: 'string',
      quota: 'number',
      requestId: 'string',
      ttl: 'number',
      used: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogstoreInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlsLogstoreInfoResponseBody;
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
      body: DescribeSlsLogstoreInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsOpenStatusRequest extends $tea.Model {
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlsOpenStatusResponseBody;
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
      body: DescribeSlsOpenStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStsGrantStatusRequest extends $tea.Model {
  resourceGroupId?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStsGrantStatusResponseBody;
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
      body: DescribeStsGrantStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLogRequest extends $tea.Model {
  endTime?: number;
  entityObject?: string;
  entityType?: number;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      entityObject: 'EntityObject',
      entityType: 'EntityType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      entityObject: 'string',
      entityType: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLogResponseBody extends $tea.Model {
  requestId?: string;
  systemLog?: DescribeSystemLogResponseBodySystemLog[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      systemLog: 'SystemLog',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemLog: { 'type': 'array', 'itemType': DescribeSystemLogResponseBodySystemLog },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSystemLogResponseBody;
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
      body: DescribeSystemLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeysRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeysResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tagKeys?: DescribeTagKeysResponseBodyTagKeys[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tagKeys: { 'type': 'array', 'itemType': DescribeTagKeysResponseBodyTagKeys },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTagKeysResponseBody;
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
      body: DescribeTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceIds?: string[];
  resourceType?: string;
  tags?: DescribeTagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTagResourcesResponseBody;
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
      body: DescribeTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTotalAttackMaxFlowRequest extends $tea.Model {
  endTime?: number;
  instanceIds?: string[];
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTotalAttackMaxFlowResponseBody extends $tea.Model {
  bps?: number;
  pps?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      pps: 'Pps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      pps: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTotalAttackMaxFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTotalAttackMaxFlowResponseBody;
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
      body: DescribeTotalAttackMaxFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUdpReflectRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUdpReflectResponseBody extends $tea.Model {
  requestId?: string;
  udpSports?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      udpSports: 'UdpSports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      udpSports: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUdpReflectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUdpReflectResponseBody;
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
      body: DescribeUdpReflectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnBlackholeCountRequest extends $tea.Model {
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnBlackholeCountResponseBody extends $tea.Model {
  remainCount?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      remainCount: 'RemainCount',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainCount: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnBlackholeCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUnBlackholeCountResponseBody;
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
      body: DescribeUnBlackholeCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnBlockCountRequest extends $tea.Model {
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnBlockCountResponseBody extends $tea.Model {
  remainCount?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      remainCount: 'RemainCount',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainCount: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnBlockCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUnBlockCountResponseBody;
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
      body: DescribeUnBlockCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogDispatchStatusRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogDispatchStatusResponseBody extends $tea.Model {
  requestId?: string;
  slsConfigStatus?: DescribeWebAccessLogDispatchStatusResponseBodySlsConfigStatus[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsConfigStatus: 'SlsConfigStatus',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsConfigStatus: { 'type': 'array', 'itemType': DescribeWebAccessLogDispatchStatusResponseBodySlsConfigStatus },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogDispatchStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebAccessLogDispatchStatusResponseBody;
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
      body: DescribeWebAccessLogDispatchStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogEmptyCountRequest extends $tea.Model {
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogEmptyCountResponseBody extends $tea.Model {
  availableCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableCount: 'AvailableCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogEmptyCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebAccessLogEmptyCountResponseBody;
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
      body: DescribeWebAccessLogEmptyCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogStatusRequest extends $tea.Model {
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogStatusResponseBody extends $tea.Model {
  requestId?: string;
  slsLogstore?: string;
  slsProject?: string;
  slsStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
      slsStatus: 'SlsStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsLogstore: 'string',
      slsProject: 'string',
      slsStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessLogStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebAccessLogStatusResponseBody;
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
      body: DescribeWebAccessLogStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessModeRequest extends $tea.Model {
  domains?: string[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessModeResponseBody extends $tea.Model {
  domainModes?: DescribeWebAccessModeResponseBodyDomainModes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainModes: 'DomainModes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainModes: { 'type': 'array', 'itemType': DescribeWebAccessModeResponseBodyDomainModes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessModeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebAccessModeResponseBody;
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
      body: DescribeWebAccessModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAreaBlockConfigsRequest extends $tea.Model {
  domains?: string[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebAreaBlockConfigsResponseBody;
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
      body: DescribeWebAreaBlockConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCCRulesRequest extends $tea.Model {
  domain?: string;
  pageNumber?: number;
  pageSize?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      pageNumber: 'number',
      pageSize: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCCRulesResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  webCCRules?: DescribeWebCCRulesResponseBodyWebCCRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      webCCRules: 'WebCCRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      webCCRules: { 'type': 'array', 'itemType': DescribeWebCCRulesResponseBodyWebCCRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCCRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebCCRulesResponseBody;
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
      body: DescribeWebCCRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCacheConfigsRequest extends $tea.Model {
  domains?: string[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCacheConfigsResponseBody extends $tea.Model {
  domainCacheConfigs?: DescribeWebCacheConfigsResponseBodyDomainCacheConfigs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainCacheConfigs: 'DomainCacheConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCacheConfigs: { 'type': 'array', 'itemType': DescribeWebCacheConfigsResponseBodyDomainCacheConfigs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCacheConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebCacheConfigsResponseBody;
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
      body: DescribeWebCacheConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCcProtectSwitchRequest extends $tea.Model {
  domains?: string[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCcProtectSwitchResponseBody extends $tea.Model {
  protectSwitchList?: DescribeWebCcProtectSwitchResponseBodyProtectSwitchList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      protectSwitchList: 'ProtectSwitchList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectSwitchList: { 'type': 'array', 'itemType': DescribeWebCcProtectSwitchResponseBodyProtectSwitchList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCcProtectSwitchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebCcProtectSwitchResponseBody;
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
      body: DescribeWebCcProtectSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCustomPortsRequest extends $tea.Model {
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebCustomPortsResponseBody;
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
      body: DescribeWebCustomPortsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebInstanceRelationsRequest extends $tea.Model {
  domains?: string[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebInstanceRelationsResponseBody;
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
      body: DescribeWebInstanceRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebPreciseAccessRuleRequest extends $tea.Model {
  domains?: string[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebPreciseAccessRuleResponseBody;
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
      body: DescribeWebPreciseAccessRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebReportTopIpRequest extends $tea.Model {
  domain?: string;
  endTime?: number;
  interval?: number;
  queryType?: string;
  startTime?: number;
  top?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      interval: 'Interval',
      queryType: 'QueryType',
      startTime: 'StartTime',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      interval: 'number',
      queryType: 'string',
      startTime: 'number',
      top: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebReportTopIpResponseBody extends $tea.Model {
  dataList?: DescribeWebReportTopIpResponseBodyDataList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeWebReportTopIpResponseBodyDataList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebReportTopIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebReportTopIpResponseBody;
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
      body: DescribeWebReportTopIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebRulesRequest extends $tea.Model {
  cname?: string;
  domain?: string;
  instanceIds?: string[];
  pageNumber?: number;
  pageSize?: number;
  queryDomainPattern?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryDomainPattern: 'QueryDomainPattern',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      queryDomainPattern: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebRulesResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  webRules?: DescribeWebRulesResponseBodyWebRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      webRules: 'WebRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      webRules: { 'type': 'array', 'itemType': DescribeWebRulesResponseBodyWebRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWebRulesResponseBody;
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
      body: DescribeWebRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSceneDefenseObjectRequest extends $tea.Model {
  objectType?: string;
  objects?: string;
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      objectType: 'ObjectType',
      objects: 'Objects',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectType: 'string',
      objects: 'string',
      policyId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachSceneDefenseObjectResponseBody;
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
      body: DetachSceneDefenseObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSceneDefensePolicyRequest extends $tea.Model {
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableSceneDefensePolicyResponseBody;
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
      body: DisableSceneDefensePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableWebAccessLogConfigRequest extends $tea.Model {
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableWebAccessLogConfigResponseBody;
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
      body: DisableWebAccessLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableWebCCRequest extends $tea.Model {
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableWebCCResponseBody;
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
      body: DisableWebCCResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableWebCCRuleRequest extends $tea.Model {
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableWebCCRuleResponseBody;
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
      body: DisableWebCCRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmptyAutoCcBlacklistRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EmptyAutoCcBlacklistResponseBody;
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
      body: EmptyAutoCcBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmptyAutoCcWhitelistRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EmptyAutoCcWhitelistResponseBody;
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
      body: EmptyAutoCcWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmptySlsLogstoreRequest extends $tea.Model {
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EmptySlsLogstoreResponseBody;
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
      body: EmptySlsLogstoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSceneDefensePolicyRequest extends $tea.Model {
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableSceneDefensePolicyResponseBody;
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
      body: EnableSceneDefensePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWebAccessLogConfigRequest extends $tea.Model {
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableWebAccessLogConfigResponseBody;
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
      body: EnableWebAccessLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWebCCRequest extends $tea.Model {
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableWebCCResponseBody;
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
      body: EnableWebCCResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWebCCRuleRequest extends $tea.Model {
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableWebCCRuleResponseBody;
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
      body: EnableWebCCRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBizBandWidthModeRequest extends $tea.Model {
  instanceId?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBizBandWidthModeResponseBody extends $tea.Model {
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

export class ModifyBizBandWidthModeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyBizBandWidthModeResponseBody;
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
      body: ModifyBizBandWidthModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBlackholeStatusRequest extends $tea.Model {
  blackholeStatus?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      blackholeStatus: 'BlackholeStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyBlackholeStatusResponseBody;
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
      body: ModifyBlackholeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBlockStatusRequest extends $tea.Model {
  duration?: number;
  instanceId?: string;
  lines?: string[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      lines: 'Lines',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      lines: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyBlockStatusResponseBody;
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
      body: ModifyBlockStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCnameReuseRequest extends $tea.Model {
  cname?: string;
  domain?: string;
  enable?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      enable: 'Enable',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      enable: 'number',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCnameReuseResponseBody;
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
      body: ModifyCnameReuseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainResourceRequest extends $tea.Model {
  domain?: string;
  httpsExt?: string;
  instanceIds?: string[];
  proxyTypes?: ModifyDomainResourceRequestProxyTypes[];
  realServers?: string[];
  rsType?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      httpsExt: 'HttpsExt',
      instanceIds: 'InstanceIds',
      proxyTypes: 'ProxyTypes',
      realServers: 'RealServers',
      rsType: 'RsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      httpsExt: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      proxyTypes: { 'type': 'array', 'itemType': ModifyDomainResourceRequestProxyTypes },
      realServers: { 'type': 'array', 'itemType': 'string' },
      rsType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainResourceResponseBody extends $tea.Model {
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

export class ModifyDomainResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDomainResourceResponseBody;
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
      body: ModifyDomainResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticBandWidthRequest extends $tea.Model {
  elasticBandwidth?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticBandwidth: 'ElasticBandwidth',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyElasticBandWidthResponseBody;
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
      body: ModifyElasticBandWidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticBizBandWidthRequest extends $tea.Model {
  elasticBizBandwidth?: number;
  instanceId?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      elasticBizBandwidth: 'ElasticBizBandwidth',
      instanceId: 'InstanceId',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticBizBandwidth: 'number',
      instanceId: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticBizBandWidthResponseBody extends $tea.Model {
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

export class ModifyElasticBizBandWidthResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyElasticBizBandWidthResponseBody;
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
      body: ModifyElasticBizBandWidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticBizQpsRequest extends $tea.Model {
  instanceId?: string;
  mode?: string;
  opsElasticQps?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mode: 'Mode',
      opsElasticQps: 'OpsElasticQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mode: 'string',
      opsElasticQps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticBizQpsResponseBody extends $tea.Model {
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

export class ModifyElasticBizQpsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyElasticBizQpsResponseBody;
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
      body: ModifyElasticBizQpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFullLogTtlRequest extends $tea.Model {
  resourceGroupId?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      ttl: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFullLogTtlResponseBody;
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
      body: ModifyFullLogTtlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHeadersRequest extends $tea.Model {
  customHeaders?: string;
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      customHeaders: 'CustomHeaders',
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHeaders: 'string',
      domain: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHeadersResponseBody extends $tea.Model {
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

export class ModifyHeadersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHeadersResponseBody;
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
      body: ModifyHeadersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHealthCheckConfigRequest extends $tea.Model {
  forwardProtocol?: string;
  frontendPort?: number;
  healthCheck?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      healthCheck: 'HealthCheck',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardProtocol: 'string',
      frontendPort: 'number',
      healthCheck: 'string',
      instanceId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHealthCheckConfigResponseBody;
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
      body: ModifyHealthCheckConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHttp2EnableRequest extends $tea.Model {
  domain?: string;
  enable?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enable: 'Enable',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enable: 'number',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHttp2EnableResponseBody;
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
      body: ModifyHttp2EnableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRemarkRequest extends $tea.Model {
  instanceId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceRemarkResponseBody;
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
      body: ModifyInstanceRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkRuleAttributeRequest extends $tea.Model {
  config?: string;
  forwardProtocol?: string;
  frontendPort?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      forwardProtocol: 'string',
      frontendPort: 'number',
      instanceId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyNetworkRuleAttributeResponseBody;
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
      body: ModifyNetworkRuleAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOcspStatusRequest extends $tea.Model {
  domain?: string;
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOcspStatusResponseBody extends $tea.Model {
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

export class ModifyOcspStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyOcspStatusResponseBody;
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
      body: ModifyOcspStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPortRequest extends $tea.Model {
  backendPort?: string;
  frontendPort?: string;
  frontendProtocol?: string;
  instanceId?: string;
  realServers?: string[];
  static names(): { [key: string]: string } {
    return {
      backendPort: 'BackendPort',
      frontendPort: 'FrontendPort',
      frontendProtocol: 'FrontendProtocol',
      instanceId: 'InstanceId',
      realServers: 'RealServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPort: 'string',
      frontendPort: 'string',
      frontendProtocol: 'string',
      instanceId: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPortResponseBody extends $tea.Model {
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

export class ModifyPortResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPortResponseBody;
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
      body: ModifyPortResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPortAutoCcStatusRequest extends $tea.Model {
  instanceId?: string;
  mode?: string;
  switch?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mode: 'Mode',
      switch: 'Switch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mode: 'string',
      switch: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPortAutoCcStatusResponseBody;
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
      body: ModifyPortAutoCcStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQpsModeRequest extends $tea.Model {
  instanceId?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQpsModeResponseBody extends $tea.Model {
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

export class ModifyQpsModeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyQpsModeResponseBody;
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
      body: ModifyQpsModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySceneDefensePolicyRequest extends $tea.Model {
  endTime?: number;
  name?: string;
  policyId?: string;
  startTime?: number;
  template?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      policyId: 'PolicyId',
      startTime: 'StartTime',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      name: 'string',
      policyId: 'string',
      startTime: 'number',
      template: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySceneDefensePolicyResponseBody;
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
      body: ModifySceneDefensePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySchedulerRuleRequest extends $tea.Model {
  param?: string;
  resourceGroupId?: string;
  ruleName?: string;
  ruleType?: number;
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      param: 'Param',
      resourceGroupId: 'ResourceGroupId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      param: 'string',
      resourceGroupId: 'string',
      ruleName: 'string',
      ruleType: 'number',
      rules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySchedulerRuleResponseBody extends $tea.Model {
  cname?: string;
  requestId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      requestId: 'RequestId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      requestId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySchedulerRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySchedulerRuleResponseBody;
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
      body: ModifySchedulerRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTlsConfigRequest extends $tea.Model {
  config?: string;
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTlsConfigResponseBody;
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
      body: ModifyTlsConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebAIProtectModeRequest extends $tea.Model {
  config?: string;
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyWebAIProtectModeResponseBody;
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
      body: ModifyWebAIProtectModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebAIProtectSwitchRequest extends $tea.Model {
  config?: string;
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyWebAIProtectSwitchResponseBody;
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
      body: ModifyWebAIProtectSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebAccessModeRequest extends $tea.Model {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyWebAccessModeResponseBody;
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
      body: ModifyWebAccessModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebAreaBlockRequest extends $tea.Model {
  domain?: string;
  regions?: string[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      regions: 'Regions',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      regions: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyWebAreaBlockResponseBody;
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
      body: ModifyWebAreaBlockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebAreaBlockSwitchRequest extends $tea.Model {
  config?: string;
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyWebAreaBlockSwitchResponseBody;
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
      body: ModifyWebAreaBlockSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebCCRuleRequest extends $tea.Model {
  act?: string;
  count?: number;
  domain?: string;
  interval?: number;
  mode?: string;
  name?: string;
  resourceGroupId?: string;
  ttl?: number;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      act: 'Act',
      count: 'Count',
      domain: 'Domain',
      interval: 'Interval',
      mode: 'Mode',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      act: 'string',
      count: 'number',
      domain: 'string',
      interval: 'number',
      mode: 'string',
      name: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyWebCCRuleResponseBody;
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
      body: ModifyWebCCRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebCacheCustomRuleRequest extends $tea.Model {
  domain?: string;
  resourceGroupId?: string;
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyWebCacheCustomRuleResponseBody;
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
      body: ModifyWebCacheCustomRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebCacheModeRequest extends $tea.Model {
  domain?: string;
  mode?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      mode: 'Mode',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      mode: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyWebCacheModeResponseBody;
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
      body: ModifyWebCacheModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebCacheSwitchRequest extends $tea.Model {
  domain?: string;
  enable?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enable: 'Enable',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enable: 'number',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyWebCacheSwitchResponseBody;
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
      body: ModifyWebCacheSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebIpSetSwitchRequest extends $tea.Model {
  config?: string;
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyWebIpSetSwitchResponseBody;
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
      body: ModifyWebIpSetSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebPreciseAccessRuleRequest extends $tea.Model {
  domain?: string;
  expires?: number;
  resourceGroupId?: string;
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      expires: 'Expires',
      resourceGroupId: 'ResourceGroupId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      expires: 'number',
      resourceGroupId: 'string',
      rules: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyWebPreciseAccessRuleResponseBody;
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
      body: ModifyWebPreciseAccessRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebPreciseAccessSwitchRequest extends $tea.Model {
  config?: string;
  domain?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      domain: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyWebPreciseAccessSwitchResponseBody;
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
      body: ModifyWebPreciseAccessSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebRuleRequest extends $tea.Model {
  domain?: string;
  httpsExt?: string;
  instanceIds?: string[];
  proxyTypes?: string;
  realServers?: string[];
  resourceGroupId?: string;
  rsType?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      httpsExt: 'HttpsExt',
      instanceIds: 'InstanceIds',
      proxyTypes: 'ProxyTypes',
      realServers: 'RealServers',
      resourceGroupId: 'ResourceGroupId',
      rsType: 'RsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      httpsExt: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      proxyTypes: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      rsType: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyWebRuleResponseBody;
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
      body: ModifyWebRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseInstanceResponseBody;
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
      body: ReleaseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSchedulerRuleRequest extends $tea.Model {
  ruleName?: string;
  ruleType?: number;
  switchData?: string;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      switchData: 'SwitchData',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchSchedulerRuleResponseBody;
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
      body: SwitchSchedulerRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResourceRequestProxyTypes extends $tea.Model {
  proxyPorts?: number[];
  proxyType?: string;
  static names(): { [key: string]: string } {
    return {
      proxyPorts: 'ProxyPorts',
      proxyType: 'ProxyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyPorts: { 'type': 'array', 'itemType': 'number' },
      proxyType: 'string',
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
  startTime?: number;
  taskId?: number;
  taskParams?: string;
  taskResult?: string;
  taskStatus?: number;
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      taskId: 'TaskId',
      taskParams: 'TaskParams',
      taskResult: 'TaskResult',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      taskId: 'number',
      taskParams: 'string',
      taskResult: 'string',
      taskStatus: 'number',
      taskType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcBlacklistResponseBodyAutoCcBlacklist extends $tea.Model {
  destIp?: string;
  endTime?: number;
  sourceIp?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      destIp: 'DestIp',
      endTime: 'EndTime',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destIp: 'string',
      endTime: 'number',
      sourceIp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoCcWhitelistResponseBodyAutoCcWhitelist extends $tea.Model {
  destIp?: string;
  endTime?: number;
  sourceIp?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      destIp: 'DestIp',
      endTime: 'EndTime',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destIp: 'string',
      endTime: 'number',
      sourceIp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackholeStatusResponseBodyBlackholeStatus extends $tea.Model {
  blackStatus?: string;
  endTime?: number;
  ip?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      blackStatus: 'BlackStatus',
      endTime: 'EndTime',
      ip: 'Ip',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackStatus: 'string',
      endTime: 'number',
      ip: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockStatusResponseBodyStatusListBlockStatusList extends $tea.Model {
  blockStatus?: string;
  endTime?: number;
  line?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      blockStatus: 'BlockStatus',
      endTime: 'EndTime',
      line: 'Line',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockStatus: 'string',
      endTime: 'number',
      line: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockStatusResponseBodyStatusList extends $tea.Model {
  blockStatusList?: DescribeBlockStatusResponseBodyStatusListBlockStatusList[];
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      blockStatusList: 'BlockStatusList',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockStatusList: { 'type': 'array', 'itemType': DescribeBlockStatusResponseBodyStatusListBlockStatusList },
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertsResponseBodyCerts extends $tea.Model {
  certIdentifier?: string;
  common?: string;
  domainRelated?: boolean;
  endDate?: string;
  id?: number;
  issuer?: string;
  name?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      common: 'Common',
      domainRelated: 'DomainRelated',
      endDate: 'EndDate',
      id: 'Id',
      issuer: 'Issuer',
      name: 'Name',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      common: 'string',
      domainRelated: 'boolean',
      endDate: 'string',
      id: 'number',
      issuer: 'string',
      name: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameReusesResponseBodyCnameReuses extends $tea.Model {
  cname?: string;
  domain?: string;
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      enable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsResponseBodyDDoSEvents extends $tea.Model {
  bps?: number;
  endTime?: number;
  eventType?: string;
  ip?: string;
  port?: string;
  pps?: number;
  region?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      endTime: 'EndTime',
      eventType: 'EventType',
      ip: 'Ip',
      port: 'Port',
      pps: 'Pps',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      endTime: 'number',
      eventType: 'string',
      ip: 'string',
      port: 'string',
      pps: 'number',
      region: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosAllEventListResponseBodyAttackEvents extends $tea.Model {
  area?: string;
  endTime?: number;
  eventType?: string;
  ip?: string;
  mbps?: number;
  port?: string;
  pps?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      endTime: 'EndTime',
      eventType: 'EventType',
      ip: 'Ip',
      mbps: 'Mbps',
      port: 'Port',
      pps: 'Pps',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      endTime: 'number',
      eventType: 'string',
      ip: 'string',
      mbps: 'number',
      port: 'string',
      pps: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventAreaResponseBodyAreas extends $tea.Model {
  area?: string;
  inPkts?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      inPkts: 'InPkts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      inPkts: 'number',
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

export class DescribeDDosEventSrcIpResponseBodyIps extends $tea.Model {
  areaId?: string;
  isp?: string;
  srcIp?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      isp: 'Isp',
      srcIp: 'SrcIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      isp: 'string',
      srcIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics extends $tea.Model {
  defenseCountTotalUsageOfCurrentMonth?: number;
  flowPackCountRemain?: number;
  maxUsableDefenseCountCurrentMonth?: number;
  secHighSpeedCountRemain?: number;
  static names(): { [key: string]: string } {
    return {
      defenseCountTotalUsageOfCurrentMonth: 'DefenseCountTotalUsageOfCurrentMonth',
      flowPackCountRemain: 'FlowPackCountRemain',
      maxUsableDefenseCountCurrentMonth: 'MaxUsableDefenseCountCurrentMonth',
      secHighSpeedCountRemain: 'SecHighSpeedCountRemain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseCountTotalUsageOfCurrentMonth: 'number',
      flowPackCountRemain: 'number',
      maxUsableDefenseCountCurrentMonth: 'number',
      secHighSpeedCountRemain: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRecordsResponseBodyDefenseRecords extends $tea.Model {
  attackPeak?: number;
  endTime?: number;
  eventCount?: number;
  instanceId?: string;
  startTime?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      attackPeak: 'AttackPeak',
      endTime: 'EndTime',
      eventCount: 'EventCount',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackPeak: 'number',
      endTime: 'number',
      eventCount: 'number',
      instanceId: 'string',
      startTime: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackEventsResponseBodyDomainAttackEvents extends $tea.Model {
  domain?: string;
  endTime?: number;
  maxQps?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      maxQps: 'MaxQps',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      maxQps: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQPSListResponseBodyDomainQPSList extends $tea.Model {
  attackQps?: number;
  cacheHits?: number;
  index?: number;
  maxAttackQps?: number;
  maxNormalQps?: number;
  maxQps?: number;
  time?: number;
  totalCount?: number;
  totalQps?: number;
  static names(): { [key: string]: string } {
    return {
      attackQps: 'AttackQps',
      cacheHits: 'CacheHits',
      index: 'Index',
      maxAttackQps: 'MaxAttackQps',
      maxNormalQps: 'MaxNormalQps',
      maxQps: 'MaxQps',
      time: 'Time',
      totalCount: 'TotalCount',
      totalQps: 'TotalQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackQps: 'number',
      cacheHits: 'number',
      index: 'number',
      maxAttackQps: 'number',
      maxNormalQps: 'number',
      maxQps: 'number',
      time: 'number',
      totalCount: 'number',
      totalQps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResourceResponseBodyWebRulesProxyTypes extends $tea.Model {
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

export class DescribeDomainResourceResponseBodyWebRules extends $tea.Model {
  blackList?: string[];
  ccEnabled?: boolean;
  ccRuleEnabled?: boolean;
  ccTemplate?: string;
  certName?: string;
  cname?: string;
  customCiphers?: string[];
  domain?: string;
  http2Enable?: boolean;
  http2HttpsEnable?: boolean;
  https2HttpEnable?: boolean;
  httpsExt?: string;
  instanceIds?: string[];
  ocspEnabled?: boolean;
  policyMode?: string;
  proxyEnabled?: boolean;
  proxyTypes?: DescribeDomainResourceResponseBodyWebRulesProxyTypes[];
  punishReason?: number;
  punishStatus?: boolean;
  realServers?: string[];
  rsType?: number;
  ssl13Enabled?: boolean;
  sslCiphers?: string;
  sslProtocols?: string;
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      blackList: 'BlackList',
      ccEnabled: 'CcEnabled',
      ccRuleEnabled: 'CcRuleEnabled',
      ccTemplate: 'CcTemplate',
      certName: 'CertName',
      cname: 'Cname',
      customCiphers: 'CustomCiphers',
      domain: 'Domain',
      http2Enable: 'Http2Enable',
      http2HttpsEnable: 'Http2HttpsEnable',
      https2HttpEnable: 'Https2HttpEnable',
      httpsExt: 'HttpsExt',
      instanceIds: 'InstanceIds',
      ocspEnabled: 'OcspEnabled',
      policyMode: 'PolicyMode',
      proxyEnabled: 'ProxyEnabled',
      proxyTypes: 'ProxyTypes',
      punishReason: 'PunishReason',
      punishStatus: 'PunishStatus',
      realServers: 'RealServers',
      rsType: 'RsType',
      ssl13Enabled: 'Ssl13Enabled',
      sslCiphers: 'SslCiphers',
      sslProtocols: 'SslProtocols',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackList: { 'type': 'array', 'itemType': 'string' },
      ccEnabled: 'boolean',
      ccRuleEnabled: 'boolean',
      ccTemplate: 'string',
      certName: 'string',
      cname: 'string',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      http2Enable: 'boolean',
      http2HttpsEnable: 'boolean',
      https2HttpEnable: 'boolean',
      httpsExt: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ocspEnabled: 'boolean',
      policyMode: 'string',
      proxyEnabled: 'boolean',
      proxyTypes: { 'type': 'array', 'itemType': DescribeDomainResourceResponseBodyWebRulesProxyTypes },
      punishReason: 'number',
      punishStatus: 'boolean',
      realServers: { 'type': 'array', 'itemType': 'string' },
      rsType: 'number',
      ssl13Enabled: 'boolean',
      sslCiphers: 'string',
      sslProtocols: 'string',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSecurityProfileResponseBodyResult extends $tea.Model {
  globalEnable?: boolean;
  globalMode?: string;
  static names(): { [key: string]: string } {
    return {
      globalEnable: 'GlobalEnable',
      globalMode: 'GlobalMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalEnable: 'boolean',
      globalMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeListResponseBodyStatusCodeList extends $tea.Model {
  index?: number;
  status200?: number;
  status2XX?: number;
  status3XX?: number;
  status403?: number;
  status404?: number;
  status405?: number;
  status4XX?: number;
  status501?: number;
  status502?: number;
  status503?: number;
  status504?: number;
  status5XX?: number;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      status200: 'Status200',
      status2XX: 'Status2XX',
      status3XX: 'Status3XX',
      status403: 'Status403',
      status404: 'Status404',
      status405: 'Status405',
      status4XX: 'Status4XX',
      status501: 'Status501',
      status502: 'Status502',
      status503: 'Status503',
      status504: 'Status504',
      status5XX: 'Status5XX',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      status200: 'number',
      status2XX: 'number',
      status3XX: 'number',
      status403: 'number',
      status404: 'number',
      status405: 'number',
      status4XX: 'number',
      status501: 'number',
      status502: 'number',
      status503: 'number',
      status504: 'number',
      status5XX: 'number',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopAttackListResponseBodyAttackList extends $tea.Model {
  attack?: number;
  count?: number;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      attack: 'Attack',
      count: 'Count',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attack: 'number',
      count: 'number',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewSourceCountriesResponseBodySourceCountrys extends $tea.Model {
  count?: number;
  countryId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      countryId: 'CountryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      countryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewSourceProvincesResponseBodySourceProvinces extends $tea.Model {
  count?: number;
  provinceId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      provinceId: 'ProvinceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      provinceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewTopCostTimeResponseBodyUrlList extends $tea.Model {
  costTime?: number;
  domain?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      domain: 'Domain',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'number',
      domain: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainViewTopUrlResponseBodyUrlList extends $tea.Model {
  count?: number;
  domain?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      domain: 'Domain',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      domain: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticQpsResponseBodyElasticQps extends $tea.Model {
  index?: number;
  maxNormalQps?: number;
  maxQps?: number;
  pv?: number;
  status2?: number;
  status3?: number;
  status4?: number;
  status5?: number;
  ups?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      maxNormalQps: 'MaxNormalQps',
      maxQps: 'MaxQps',
      pv: 'Pv',
      status2: 'Status2',
      status3: 'Status3',
      status4: 'Status4',
      status5: 'Status5',
      ups: 'Ups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      maxNormalQps: 'number',
      maxQps: 'number',
      pv: 'number',
      status2: 'number',
      status3: 'number',
      status4: 'number',
      status5: 'number',
      ups: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticQpsRecordResponseBodyElasticQpsList extends $tea.Model {
  date?: number;
  instanceId?: string;
  ip?: string;
  opsElasticQps?: number;
  opsQps?: number;
  originQps?: number;
  qps?: number;
  qpsPeak?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      instanceId: 'InstanceId',
      ip: 'Ip',
      opsElasticQps: 'OpsElasticQps',
      opsQps: 'OpsQps',
      originQps: 'OriginQps',
      qps: 'Qps',
      qpsPeak: 'QpsPeak',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      instanceId: 'string',
      ip: 'string',
      opsElasticQps: 'number',
      opsQps: 'number',
      originQps: 'number',
      qps: 'number',
      qpsPeak: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHeadersResponseBodyCustomHeader extends $tea.Model {
  domain?: string;
  headers?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      headers: 'Headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      headers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseBodyHealthCheckListHealthCheck extends $tea.Model {
  domain?: string;
  down?: number;
  interval?: number;
  port?: number;
  timeout?: number;
  type?: string;
  up?: number;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      down: 'Down',
      interval: 'Interval',
      port: 'Port',
      timeout: 'Timeout',
      type: 'Type',
      up: 'Up',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      down: 'number',
      interval: 'number',
      port: 'number',
      timeout: 'number',
      type: 'string',
      up: 'number',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseBodyHealthCheckList extends $tea.Model {
  frontendPort?: number;
  healthCheck?: DescribeHealthCheckListResponseBodyHealthCheckListHealthCheck;
  instanceId?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      frontendPort: 'FrontendPort',
      healthCheck: 'HealthCheck',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendPort: 'number',
      healthCheck: DescribeHealthCheckListResponseBodyHealthCheckListHealthCheck,
      instanceId: 'string',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusResponseBodyHealthCheckStatusRealServerStatusList extends $tea.Model {
  address?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusResponseBodyHealthCheckStatus extends $tea.Model {
  frontendPort?: number;
  instanceId?: string;
  protocol?: string;
  realServerStatusList?: DescribeHealthCheckStatusResponseBodyHealthCheckStatusRealServerStatusList[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
      realServerStatusList: 'RealServerStatusList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendPort: 'number',
      instanceId: 'string',
      protocol: 'string',
      realServerStatusList: { 'type': 'array', 'itemType': DescribeHealthCheckStatusResponseBodyHealthCheckStatusRealServerStatusList },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfos extends $tea.Model {
  eip?: string;
  ipMode?: string;
  ipVersion?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
      ipMode: 'IpMode',
      ipVersion: 'IpVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
      ipMode: 'string',
      ipVersion: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponseBodyInstanceDetails extends $tea.Model {
  eipInfos?: DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfos[];
  instanceId?: string;
  line?: string;
  static names(): { [key: string]: string } {
    return {
      eipInfos: 'EipInfos',
      instanceId: 'InstanceId',
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipInfos: { 'type': 'array', 'itemType': DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfos },
      instanceId: 'string',
      line: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceExtResponseBodyInstanceExtSpecs extends $tea.Model {
  functionVersion?: number;
  instanceId?: string;
  normalBandwidth?: number;
  productPlan?: number;
  servicePartner?: string;
  static names(): { [key: string]: string } {
    return {
      functionVersion: 'FunctionVersion',
      instanceId: 'InstanceId',
      normalBandwidth: 'NormalBandwidth',
      productPlan: 'ProductPlan',
      servicePartner: 'ServicePartner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionVersion: 'number',
      instanceId: 'string',
      normalBandwidth: 'number',
      productPlan: 'number',
      servicePartner: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceIdsResponseBodyInstanceIds extends $tea.Model {
  edition?: number;
  instanceId?: string;
  ipMode?: string;
  ipVersion?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      instanceId: 'InstanceId',
      ipMode: 'IpMode',
      ipVersion: 'IpVersion',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'number',
      instanceId: 'string',
      ipMode: 'string',
      ipVersion: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBodyInstanceSpecs extends $tea.Model {
  bandwidthMbps?: number;
  baseBandwidth?: number;
  connLimit?: number;
  cpsLimit?: number;
  defenseCount?: number;
  domainLimit?: number;
  elasticBandwidth?: number;
  elasticBw?: number;
  elasticBwModel?: string;
  elasticQps?: number;
  elasticQpsMode?: string;
  functionVersion?: string;
  instanceId?: string;
  portLimit?: number;
  qpsLimit?: number;
  realLimitBw?: number;
  siteLimit?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthMbps: 'BandwidthMbps',
      baseBandwidth: 'BaseBandwidth',
      connLimit: 'ConnLimit',
      cpsLimit: 'CpsLimit',
      defenseCount: 'DefenseCount',
      domainLimit: 'DomainLimit',
      elasticBandwidth: 'ElasticBandwidth',
      elasticBw: 'ElasticBw',
      elasticBwModel: 'ElasticBwModel',
      elasticQps: 'ElasticQps',
      elasticQpsMode: 'ElasticQpsMode',
      functionVersion: 'FunctionVersion',
      instanceId: 'InstanceId',
      portLimit: 'PortLimit',
      qpsLimit: 'QpsLimit',
      realLimitBw: 'RealLimitBw',
      siteLimit: 'SiteLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthMbps: 'number',
      baseBandwidth: 'number',
      connLimit: 'number',
      cpsLimit: 'number',
      defenseCount: 'number',
      domainLimit: 'number',
      elasticBandwidth: 'number',
      elasticBw: 'number',
      elasticBwModel: 'string',
      elasticQps: 'number',
      elasticQpsMode: 'string',
      functionVersion: 'string',
      instanceId: 'string',
      portLimit: 'number',
      qpsLimit: 'number',
      realLimitBw: 'number',
      siteLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponseBodyInstanceStatistics extends $tea.Model {
  defenseCountUsage?: number;
  domainUsage?: number;
  instanceId?: string;
  portUsage?: number;
  siteUsage?: number;
  static names(): { [key: string]: string } {
    return {
      defenseCountUsage: 'DefenseCountUsage',
      domainUsage: 'DomainUsage',
      instanceId: 'InstanceId',
      portUsage: 'PortUsage',
      siteUsage: 'SiteUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseCountUsage: 'number',
      domainUsage: 'number',
      instanceId: 'string',
      portUsage: 'number',
      siteUsage: 'number',
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
  createTime?: number;
  debtStatus?: number;
  edition?: number;
  enabled?: number;
  expireTime?: number;
  instanceId?: string;
  ip?: string;
  ipMode?: string;
  ipVersion?: string;
  isFirstOpenBw?: number;
  isFirstOpenQps?: number;
  remark?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      debtStatus: 'DebtStatus',
      edition: 'Edition',
      enabled: 'Enabled',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      ip: 'Ip',
      ipMode: 'IpMode',
      ipVersion: 'IpVersion',
      isFirstOpenBw: 'IsFirstOpenBw',
      isFirstOpenQps: 'IsFirstOpenQps',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      debtStatus: 'number',
      edition: 'number',
      enabled: 'number',
      expireTime: 'number',
      instanceId: 'string',
      ip: 'string',
      ipMode: 'string',
      ipVersion: 'string',
      isFirstOpenBw: 'number',
      isFirstOpenQps: 'number',
      remark: 'string',
      status: 'number',
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
  attribute?: DescribeL7RsPolicyResponseBodyAttributesAttribute;
  realServer?: string;
  rsType?: number;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      realServer: 'RealServer',
      rsType: 'RsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: DescribeL7RsPolicyResponseBodyAttributesAttribute,
      realServer: 'string',
      rsType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulePolicyResponseBodyPriRealServers extends $tea.Model {
  currentIndex?: number;
  eip?: string;
  frontendPort?: number;
  instanceId?: string;
  protocol?: string;
  realServer?: string;
  static names(): { [key: string]: string } {
    return {
      currentIndex: 'CurrentIndex',
      eip: 'Eip',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
      realServer: 'RealServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentIndex: 'number',
      eip: 'string',
      frontendPort: 'number',
      instanceId: 'string',
      protocol: 'string',
      realServer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulePolicyResponseBodySecRealServers extends $tea.Model {
  currentIndex?: number;
  eip?: string;
  frontendPort?: number;
  instanceId?: string;
  protocol?: string;
  realServer?: string;
  static names(): { [key: string]: string } {
    return {
      currentIndex: 'CurrentIndex',
      eip: 'Eip',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
      realServer: 'RealServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentIndex: 'number',
      eip: 'string',
      frontendPort: 'number',
      instanceId: 'string',
      protocol: 'string',
      realServer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRegionBlockResponseBodyConfig extends $tea.Model {
  countries?: string[];
  provinces?: string[];
  regionBlockSwitch?: string;
  static names(): { [key: string]: string } {
    return {
      countries: 'Countries',
      provinces: 'Provinces',
      regionBlockSwitch: 'RegionBlockSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countries: { 'type': 'array', 'itemType': 'string' },
      provinces: { 'type': 'array', 'itemType': 'string' },
      regionBlockSwitch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCcSblack extends $tea.Model {
  cnt?: number;
  during?: number;
  expires?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      cnt: 'Cnt',
      during: 'During',
      expires: 'Expires',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnt: 'number',
      during: 'number',
      expires: 'number',
      type: 'number',
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
  cps?: number;
  cpsEnable?: number;
  maxconn?: number;
  maxconnEnable?: number;
  static names(): { [key: string]: string } {
    return {
      cps: 'Cps',
      cpsEnable: 'CpsEnable',
      maxconn: 'Maxconn',
      maxconnEnable: 'MaxconnEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cps: 'number',
      cpsEnable: 'number',
      maxconn: 'number',
      maxconnEnable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSlimit extends $tea.Model {
  bps?: number;
  cps?: number;
  cpsEnable?: number;
  cpsMode?: number;
  maxconn?: number;
  maxconnEnable?: number;
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      cps: 'Cps',
      cpsEnable: 'CpsEnable',
      cpsMode: 'CpsMode',
      maxconn: 'Maxconn',
      maxconnEnable: 'MaxconnEnable',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      cps: 'number',
      cpsEnable: 'number',
      cpsMode: 'number',
      maxconn: 'number',
      maxconnEnable: 'number',
      pps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfig extends $tea.Model {
  cc?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCc;
  nodataConn?: string;
  payloadLen?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigPayloadLen;
  persistenceTimeout?: number;
  sla?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSla;
  slimit?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSlimit;
  synproxy?: string;
  static names(): { [key: string]: string } {
    return {
      cc: 'Cc',
      nodataConn: 'NodataConn',
      payloadLen: 'PayloadLen',
      persistenceTimeout: 'PersistenceTimeout',
      sla: 'Sla',
      slimit: 'Slimit',
      synproxy: 'Synproxy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cc: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCc,
      nodataConn: 'string',
      payloadLen: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigPayloadLen,
      persistenceTimeout: 'number',
      sla: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSla,
      slimit: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSlimit,
      synproxy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributes extends $tea.Model {
  config?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfig;
  frontendPort?: number;
  instanceId?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfig,
      frontendPort: 'number',
      instanceId: 'string',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRulesResponseBodyNetworkRules extends $tea.Model {
  backendPort?: number;
  frontendPort?: number;
  instanceId?: string;
  isAutoCreate?: boolean;
  protocol?: string;
  realServers?: string[];
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      backendPort: 'BackendPort',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      isAutoCreate: 'IsAutoCreate',
      protocol: 'Protocol',
      realServers: 'RealServers',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPort: 'number',
      frontendPort: 'number',
      instanceId: 'string',
      isAutoCreate: 'boolean',
      protocol: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponseBodyOpEntities extends $tea.Model {
  entityObject?: string;
  entityType?: number;
  gmtCreate?: number;
  opAccount?: string;
  opAction?: number;
  opDesc?: string;
  static names(): { [key: string]: string } {
    return {
      entityObject: 'EntityObject',
      entityType: 'EntityType',
      gmtCreate: 'GmtCreate',
      opAccount: 'OpAccount',
      opAction: 'OpAction',
      opDesc: 'OpDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityObject: 'string',
      entityType: 'number',
      gmtCreate: 'number',
      opAccount: 'string',
      opAction: 'number',
      opDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortResponseBodyNetworkRules extends $tea.Model {
  backendPort?: number;
  frontendPort?: number;
  frontendProtocol?: string;
  instanceId?: string;
  isAutoCreate?: boolean;
  realServers?: string[];
  static names(): { [key: string]: string } {
    return {
      backendPort: 'BackendPort',
      frontendPort: 'FrontendPort',
      frontendProtocol: 'FrontendProtocol',
      instanceId: 'InstanceId',
      isAutoCreate: 'IsAutoCreate',
      realServers: 'RealServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPort: 'number',
      frontendPort: 'number',
      frontendProtocol: 'string',
      instanceId: 'string',
      isAutoCreate: 'boolean',
      realServers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortAutoCcStatusResponseBodyPortAutoCcStatus extends $tea.Model {
  mode?: string;
  switch?: string;
  webMode?: string;
  webSwitch?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      switch: 'Switch',
      webMode: 'WebMode',
      webSwitch: 'WebSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      switch: 'string',
      webMode: 'string',
      webSwitch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortCcAttackTopIPResponseBodyTopIp extends $tea.Model {
  areaId?: string;
  pv?: number;
  srcIp?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      pv: 'Pv',
      srcIp: 'SrcIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      pv: 'number',
      srcIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortConnsListResponseBodyConnsList extends $tea.Model {
  actConns?: number;
  conns?: number;
  cps?: number;
  inActConns?: number;
  index?: number;
  static names(): { [key: string]: string } {
    return {
      actConns: 'ActConns',
      conns: 'Conns',
      cps: 'Cps',
      inActConns: 'InActConns',
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actConns: 'number',
      conns: 'number',
      cps: 'number',
      inActConns: 'number',
      index: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortFlowListResponseBodyPortFlowList extends $tea.Model {
  attackBps?: number;
  attackPps?: number;
  inBps?: number;
  inPps?: number;
  index?: number;
  outBps?: number;
  outPps?: number;
  region?: string;
  slaBpsDropBps?: number;
  slaBpsDropPps?: number;
  slaConnDropBps?: number;
  slaConnDropPps?: number;
  slaCpsDropBps?: number;
  slaCpsDropPps?: number;
  slaPpsDropBps?: number;
  slaPpsDropPps?: number;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      attackBps: 'AttackBps',
      attackPps: 'AttackPps',
      inBps: 'InBps',
      inPps: 'InPps',
      index: 'Index',
      outBps: 'OutBps',
      outPps: 'OutPps',
      region: 'Region',
      slaBpsDropBps: 'SlaBpsDropBps',
      slaBpsDropPps: 'SlaBpsDropPps',
      slaConnDropBps: 'SlaConnDropBps',
      slaConnDropPps: 'SlaConnDropPps',
      slaCpsDropBps: 'SlaCpsDropBps',
      slaCpsDropPps: 'SlaCpsDropPps',
      slaPpsDropBps: 'SlaPpsDropBps',
      slaPpsDropPps: 'SlaPpsDropPps',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackBps: 'number',
      attackPps: 'number',
      inBps: 'number',
      inPps: 'number',
      index: 'number',
      outBps: 'number',
      outPps: 'number',
      region: 'string',
      slaBpsDropBps: 'number',
      slaBpsDropPps: 'number',
      slaConnDropBps: 'number',
      slaConnDropPps: 'number',
      slaCpsDropBps: 'number',
      slaCpsDropPps: 'number',
      slaPpsDropBps: 'number',
      slaPpsDropPps: 'number',
      time: 'number',
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
  count?: number;
  countryId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      countryId: 'CountryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      countryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceIspsResponseBodyIsps extends $tea.Model {
  count?: number;
  ispId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ispId: 'IspId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ispId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceProvincesResponseBodySourceProvinces extends $tea.Model {
  count?: number;
  provinceId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      provinceId: 'ProvinceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      provinceId: 'string',
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
  newValue?: string;
  policyType?: number;
  status?: number;
  oldValue?: string;
  static names(): { [key: string]: string } {
    return {
      newValue: 'NewValue',
      policyType: 'PolicyType',
      status: 'Status',
      oldValue: 'oldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newValue: 'string',
      policyType: 'number',
      status: 'number',
      oldValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefensePoliciesResponseBodyPolicies extends $tea.Model {
  done?: number;
  endTime?: number;
  name?: string;
  objectCount?: number;
  policyId?: string;
  runtimePolicies?: DescribeSceneDefensePoliciesResponseBodyPoliciesRuntimePolicies[];
  startTime?: number;
  status?: number;
  template?: string;
  static names(): { [key: string]: string } {
    return {
      done: 'Done',
      endTime: 'EndTime',
      name: 'Name',
      objectCount: 'ObjectCount',
      policyId: 'PolicyId',
      runtimePolicies: 'RuntimePolicies',
      startTime: 'StartTime',
      status: 'Status',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      done: 'number',
      endTime: 'number',
      name: 'string',
      objectCount: 'number',
      policyId: 'string',
      runtimePolicies: { 'type': 'array', 'itemType': DescribeSceneDefensePoliciesResponseBodyPoliciesRuntimePolicies },
      startTime: 'number',
      status: 'number',
      template: 'string',
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
  line?: string;
  priority?: number;
  regionId?: string;
  restoreDelay?: number;
  status?: number;
  type?: string;
  value?: string;
  valueType?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      priority: 'Priority',
      regionId: 'RegionId',
      restoreDelay: 'RestoreDelay',
      status: 'Status',
      type: 'Type',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: 'string',
      priority: 'number',
      regionId: 'string',
      restoreDelay: 'number',
      status: 'number',
      type: 'string',
      value: 'string',
      valueType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchedulerRulesResponseBodySchedulerRules extends $tea.Model {
  cname?: string;
  param?: DescribeSchedulerRulesResponseBodySchedulerRulesParam;
  ruleName?: string;
  ruleType?: string;
  rules?: DescribeSchedulerRulesResponseBodySchedulerRulesRules[];
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      param: 'Param',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      param: DescribeSchedulerRulesResponseBodySchedulerRulesParam,
      ruleName: 'string',
      ruleType: 'string',
      rules: { 'type': 'array', 'itemType': DescribeSchedulerRulesResponseBodySchedulerRulesRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlaEventListResponseBodySlaEvent extends $tea.Model {
  endTime?: number;
  ip?: string;
  region?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ip: 'Ip',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ip: 'string',
      region: 'string',
      startTime: 'number',
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

export class DescribeSystemLogResponseBodySystemLog extends $tea.Model {
  entityObject?: string;
  entityType?: number;
  gmtCreate?: number;
  gmtModified?: number;
  opAccount?: string;
  opAction?: number;
  opDesc?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      entityObject: 'EntityObject',
      entityType: 'EntityType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      opAccount: 'OpAccount',
      opAction: 'OpAction',
      opDesc: 'OpDesc',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityObject: 'string',
      entityType: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      opAccount: 'string',
      opAction: 'number',
      opDesc: 'string',
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
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
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

export class DescribeWebCCRulesResponseBodyWebCCRules extends $tea.Model {
  act?: string;
  count?: number;
  interval?: number;
  mode?: string;
  name?: string;
  ttl?: number;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      act: 'Act',
      count: 'Count',
      interval: 'Interval',
      mode: 'Mode',
      name: 'Name',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      act: 'string',
      count: 'number',
      interval: 'number',
      mode: 'string',
      name: 'string',
      ttl: 'number',
      uri: 'string',
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
  customRules?: DescribeWebCacheConfigsResponseBodyDomainCacheConfigsCustomRules[];
  domain?: string;
  enable?: number;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      customRules: 'CustomRules',
      domain: 'Domain',
      enable: 'Enable',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customRules: { 'type': 'array', 'itemType': DescribeWebCacheConfigsResponseBodyDomainCacheConfigsCustomRules },
      domain: 'string',
      enable: 'number',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCcProtectSwitchResponseBodyProtectSwitchList extends $tea.Model {
  aiMode?: string;
  aiRuleEnable?: number;
  aiTemplate?: string;
  blackWhiteListEnable?: number;
  ccCustomRuleEnable?: number;
  ccEnable?: number;
  ccGlobalSwitch?: string;
  ccTemplate?: string;
  domain?: string;
  preciseRuleEnable?: number;
  regionBlockEnable?: number;
  static names(): { [key: string]: string } {
    return {
      aiMode: 'AiMode',
      aiRuleEnable: 'AiRuleEnable',
      aiTemplate: 'AiTemplate',
      blackWhiteListEnable: 'BlackWhiteListEnable',
      ccCustomRuleEnable: 'CcCustomRuleEnable',
      ccEnable: 'CcEnable',
      ccGlobalSwitch: 'CcGlobalSwitch',
      ccTemplate: 'CcTemplate',
      domain: 'Domain',
      preciseRuleEnable: 'PreciseRuleEnable',
      regionBlockEnable: 'RegionBlockEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiMode: 'string',
      aiRuleEnable: 'number',
      aiTemplate: 'string',
      blackWhiteListEnable: 'number',
      ccCustomRuleEnable: 'number',
      ccEnable: 'number',
      ccGlobalSwitch: 'string',
      ccTemplate: 'string',
      domain: 'string',
      preciseRuleEnable: 'number',
      regionBlockEnable: 'number',
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
  content?: string;
  contentList?: string[];
  field?: string;
  headerName?: string;
  matchMethod?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentList: 'ContentList',
      field: 'Field',
      headerName: 'HeaderName',
      matchMethod: 'MatchMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentList: { 'type': 'array', 'itemType': 'string' },
      field: 'string',
      headerName: 'string',
      matchMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleList extends $tea.Model {
  action?: string;
  conditionList?: DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleListConditionList[];
  expires?: number;
  name?: string;
  owner?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      conditionList: 'ConditionList',
      expires: 'Expires',
      name: 'Name',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      conditionList: { 'type': 'array', 'itemType': DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleListConditionList },
      expires: 'number',
      name: 'string',
      owner: 'string',
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

export class DescribeWebReportTopIpResponseBodyDataList extends $tea.Model {
  areaId?: string;
  count?: number;
  isp?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      count: 'Count',
      isp: 'Isp',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      count: 'number',
      isp: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebRulesResponseBodyWebRulesGmCert extends $tea.Model {
  certId?: string;
  gmEnable?: number;
  gmOnly?: number;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      gmEnable: 'GmEnable',
      gmOnly: 'GmOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      gmEnable: 'number',
      gmOnly: 'number',
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

export class DescribeWebRulesResponseBodyWebRulesRealServers extends $tea.Model {
  realServer?: string;
  rsType?: number;
  static names(): { [key: string]: string } {
    return {
      realServer: 'RealServer',
      rsType: 'RsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realServer: 'string',
      rsType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebRulesResponseBodyWebRules extends $tea.Model {
  blackList?: string[];
  ccEnabled?: boolean;
  ccRuleEnabled?: boolean;
  ccTemplate?: string;
  certName?: string;
  certRegion?: string;
  cname?: string;
  customCiphers?: string[];
  domain?: string;
  gmCert?: DescribeWebRulesResponseBodyWebRulesGmCert;
  http2Enable?: boolean;
  http2HttpsEnable?: boolean;
  https2HttpEnable?: boolean;
  ocspEnabled?: boolean;
  policyMode?: string;
  proxyEnabled?: boolean;
  proxyTypes?: DescribeWebRulesResponseBodyWebRulesProxyTypes[];
  punishReason?: number;
  punishStatus?: boolean;
  realServers?: DescribeWebRulesResponseBodyWebRulesRealServers[];
  ssl13Enabled?: boolean;
  sslCiphers?: string;
  sslProtocols?: string;
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      blackList: 'BlackList',
      ccEnabled: 'CcEnabled',
      ccRuleEnabled: 'CcRuleEnabled',
      ccTemplate: 'CcTemplate',
      certName: 'CertName',
      certRegion: 'CertRegion',
      cname: 'Cname',
      customCiphers: 'CustomCiphers',
      domain: 'Domain',
      gmCert: 'GmCert',
      http2Enable: 'Http2Enable',
      http2HttpsEnable: 'Http2HttpsEnable',
      https2HttpEnable: 'Https2HttpEnable',
      ocspEnabled: 'OcspEnabled',
      policyMode: 'PolicyMode',
      proxyEnabled: 'ProxyEnabled',
      proxyTypes: 'ProxyTypes',
      punishReason: 'PunishReason',
      punishStatus: 'PunishStatus',
      realServers: 'RealServers',
      ssl13Enabled: 'Ssl13Enabled',
      sslCiphers: 'SslCiphers',
      sslProtocols: 'SslProtocols',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackList: { 'type': 'array', 'itemType': 'string' },
      ccEnabled: 'boolean',
      ccRuleEnabled: 'boolean',
      ccTemplate: 'string',
      certName: 'string',
      certRegion: 'string',
      cname: 'string',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      gmCert: DescribeWebRulesResponseBodyWebRulesGmCert,
      http2Enable: 'boolean',
      http2HttpsEnable: 'boolean',
      https2HttpEnable: 'boolean',
      ocspEnabled: 'boolean',
      policyMode: 'string',
      proxyEnabled: 'boolean',
      proxyTypes: { 'type': 'array', 'itemType': DescribeWebRulesResponseBodyWebRulesProxyTypes },
      punishReason: 'number',
      punishStatus: 'boolean',
      realServers: { 'type': 'array', 'itemType': DescribeWebRulesResponseBodyWebRulesRealServers },
      ssl13Enabled: 'boolean',
      sslCiphers: 'string',
      sslProtocols: 'string',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainResourceRequestProxyTypes extends $tea.Model {
  proxyPorts?: number[];
  proxyType?: string;
  static names(): { [key: string]: string } {
    return {
      proxyPorts: 'ProxyPorts',
      proxyType: 'ProxyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyPorts: { 'type': 'array', 'itemType': 'number' },
      proxyType: 'string',
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
    let query = { };
    if (!Util.isUnset(request.blacklist)) {
      query["Blacklist"] = request.blacklist;
    }

    if (!Util.isUnset(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddAutoCcBlacklist",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddAutoCcBlacklistResponse>(await this.callApi(params, req, runtime), new AddAutoCcBlacklistResponse({}));
  }

  async addAutoCcBlacklist(request: AddAutoCcBlacklistRequest): Promise<AddAutoCcBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAutoCcBlacklistWithOptions(request, runtime);
  }

  /**
    * You can call the AddAutoCcWhitelist operation to add IP addresses to the whitelist of an Anti-DDoS Pro or Anti-DDoS Premium instance. This way, the Anti-DDoS Pro or Anti-DDoS Premium instance allows traffic from the IP addresses.
    * By default, the traffic from the IP addresses that you add to the whitelist is always allowed. If you no longer use the whitelist, you can call the [EmptyAutoCcWhitelist](~~157505~~) operation to remove the IP addresses from the whitelist.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request AddAutoCcWhitelistRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddAutoCcWhitelistResponse
   */
  async addAutoCcWhitelistWithOptions(request: AddAutoCcWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<AddAutoCcWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.whitelist)) {
      query["Whitelist"] = request.whitelist;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddAutoCcWhitelist",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddAutoCcWhitelistResponse>(await this.callApi(params, req, runtime), new AddAutoCcWhitelistResponse({}));
  }

  /**
    * You can call the AddAutoCcWhitelist operation to add IP addresses to the whitelist of an Anti-DDoS Pro or Anti-DDoS Premium instance. This way, the Anti-DDoS Pro or Anti-DDoS Premium instance allows traffic from the IP addresses.
    * By default, the traffic from the IP addresses that you add to the whitelist is always allowed. If you no longer use the whitelist, you can call the [EmptyAutoCcWhitelist](~~157505~~) operation to remove the IP addresses from the whitelist.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request AddAutoCcWhitelistRequest
    * @return AddAutoCcWhitelistResponse
   */
  async addAutoCcWhitelist(request: AddAutoCcWhitelistRequest): Promise<AddAutoCcWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAutoCcWhitelistWithOptions(request, runtime);
  }

  async associateWebCertWithOptions(request: AssociateWebCertRequest, runtime: $Util.RuntimeOptions): Promise<AssociateWebCertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cert)) {
      query["Cert"] = request.cert;
    }

    if (!Util.isUnset(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!Util.isUnset(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!Util.isUnset(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.certRegion)) {
      query["CertRegion"] = request.certRegion;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateWebCert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateWebCertResponse>(await this.callApi(params, req, runtime), new AssociateWebCertResponse({}));
  }

  async associateWebCert(request: AssociateWebCertRequest): Promise<AssociateWebCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateWebCertWithOptions(request, runtime);
  }

  async attachSceneDefenseObjectWithOptions(request: AttachSceneDefenseObjectRequest, runtime: $Util.RuntimeOptions): Promise<AttachSceneDefenseObjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!Util.isUnset(request.objects)) {
      query["Objects"] = request.objects;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachSceneDefenseObject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachSceneDefenseObjectResponse>(await this.callApi(params, req, runtime), new AttachSceneDefenseObjectResponse({}));
  }

  async attachSceneDefenseObject(request: AttachSceneDefenseObjectRequest): Promise<AttachSceneDefenseObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachSceneDefenseObjectWithOptions(request, runtime);
  }

  /**
    * If multiple origin servers are configured for a website that is added to Anti-DDoS Pro or Anti-DDoS Premium, you can modify the load balancing algorithms for back-to-origin traffic based on back-to-origin policies. The IP hash algorithm is used by default. You can change the algorithm to the round-robin or least response time algorithm. For more information, see the description of the **Policy** parameter in the "Request parameters" section of this topic.
    *
    * @param request ConfigL7RsPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ConfigL7RsPolicyResponse
   */
  async configL7RsPolicyWithOptions(request: ConfigL7RsPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ConfigL7RsPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigL7RsPolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigL7RsPolicyResponse>(await this.callApi(params, req, runtime), new ConfigL7RsPolicyResponse({}));
  }

  /**
    * If multiple origin servers are configured for a website that is added to Anti-DDoS Pro or Anti-DDoS Premium, you can modify the load balancing algorithms for back-to-origin traffic based on back-to-origin policies. The IP hash algorithm is used by default. You can change the algorithm to the round-robin or least response time algorithm. For more information, see the description of the **Policy** parameter in the "Request parameters" section of this topic.
    *
    * @param request ConfigL7RsPolicyRequest
    * @return ConfigL7RsPolicyResponse
   */
  async configL7RsPolicy(request: ConfigL7RsPolicyRequest): Promise<ConfigL7RsPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configL7RsPolicyWithOptions(request, runtime);
  }

  async configLayer4RealLimitWithOptions(request: ConfigLayer4RealLimitRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer4RealLimitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.limitValue)) {
      query["LimitValue"] = request.limitValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigLayer4RealLimit",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigLayer4RealLimitResponse>(await this.callApi(params, req, runtime), new ConfigLayer4RealLimitResponse({}));
  }

  async configLayer4RealLimit(request: ConfigLayer4RealLimitRequest): Promise<ConfigLayer4RealLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer4RealLimitWithOptions(request, runtime);
  }

  async configLayer4RemarkWithOptions(request: ConfigLayer4RemarkRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer4RemarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigLayer4Remark",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigLayer4RemarkResponse>(await this.callApi(params, req, runtime), new ConfigLayer4RemarkResponse({}));
  }

  async configLayer4Remark(request: ConfigLayer4RemarkRequest): Promise<ConfigLayer4RemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer4RemarkWithOptions(request, runtime);
  }

  async configLayer4RuleBakModeWithOptions(request: ConfigLayer4RuleBakModeRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer4RuleBakModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bakMode)) {
      query["BakMode"] = request.bakMode;
    }

    if (!Util.isUnset(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigLayer4RuleBakMode",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigLayer4RuleBakModeResponse>(await this.callApi(params, req, runtime), new ConfigLayer4RuleBakModeResponse({}));
  }

  async configLayer4RuleBakMode(request: ConfigLayer4RuleBakModeRequest): Promise<ConfigLayer4RuleBakModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer4RuleBakModeWithOptions(request, runtime);
  }

  async configLayer4RulePolicyWithOptions(request: ConfigLayer4RulePolicyRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer4RulePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigLayer4RulePolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigLayer4RulePolicyResponse>(await this.callApi(params, req, runtime), new ConfigLayer4RulePolicyResponse({}));
  }

  async configLayer4RulePolicy(request: ConfigLayer4RulePolicyRequest): Promise<ConfigLayer4RulePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer4RulePolicyWithOptions(request, runtime);
  }

  async configNetworkRegionBlockWithOptions(request: ConfigNetworkRegionBlockRequest, runtime: $Util.RuntimeOptions): Promise<ConfigNetworkRegionBlockResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigNetworkRegionBlock",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigNetworkRegionBlockResponse>(await this.callApi(params, req, runtime), new ConfigNetworkRegionBlockResponse({}));
  }

  async configNetworkRegionBlock(request: ConfigNetworkRegionBlockRequest): Promise<ConfigNetworkRegionBlockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configNetworkRegionBlockWithOptions(request, runtime);
  }

  async configNetworkRulesWithOptions(request: ConfigNetworkRulesRequest, runtime: $Util.RuntimeOptions): Promise<ConfigNetworkRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkRules)) {
      query["NetworkRules"] = request.networkRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigNetworkRules",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigNetworkRulesResponse>(await this.callApi(params, req, runtime), new ConfigNetworkRulesResponse({}));
  }

  async configNetworkRules(request: ConfigNetworkRulesRequest): Promise<ConfigNetworkRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configNetworkRulesWithOptions(request, runtime);
  }

  /**
    * You can call this operation to configure filtering policies to filter out UDP traffic from specific ports. This helps defend against UDP reflection attacks.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ConfigUdpReflectRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ConfigUdpReflectResponse
   */
  async configUdpReflectWithOptions(request: ConfigUdpReflectRequest, runtime: $Util.RuntimeOptions): Promise<ConfigUdpReflectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigUdpReflect",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigUdpReflectResponse>(await this.callApi(params, req, runtime), new ConfigUdpReflectResponse({}));
  }

  /**
    * You can call this operation to configure filtering policies to filter out UDP traffic from specific ports. This helps defend against UDP reflection attacks.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ConfigUdpReflectRequest
    * @return ConfigUdpReflectResponse
   */
  async configUdpReflect(request: ConfigUdpReflectRequest): Promise<ConfigUdpReflectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configUdpReflectWithOptions(request, runtime);
  }

  async configWebCCTemplateWithOptions(request: ConfigWebCCTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ConfigWebCCTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigWebCCTemplate",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigWebCCTemplateResponse>(await this.callApi(params, req, runtime), new ConfigWebCCTemplateResponse({}));
  }

  async configWebCCTemplate(request: ConfigWebCCTemplateRequest): Promise<ConfigWebCCTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configWebCCTemplateWithOptions(request, runtime);
  }

  async configWebIpSetWithOptions(request: ConfigWebIpSetRequest, runtime: $Util.RuntimeOptions): Promise<ConfigWebIpSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.blackList)) {
      query["BlackList"] = request.blackList;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.whiteList)) {
      query["WhiteList"] = request.whiteList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigWebIpSet",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigWebIpSetResponse>(await this.callApi(params, req, runtime), new ConfigWebIpSetResponse({}));
  }

  async configWebIpSet(request: ConfigWebIpSetRequest): Promise<ConfigWebIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configWebIpSetWithOptions(request, runtime);
  }

  async createAsyncTaskWithOptions(request: CreateAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateAsyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.taskParams)) {
      query["TaskParams"] = request.taskParams;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAsyncTask",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAsyncTaskResponse>(await this.callApi(params, req, runtime), new CreateAsyncTaskResponse({}));
  }

  async createAsyncTask(request: CreateAsyncTaskRequest): Promise<CreateAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAsyncTaskWithOptions(request, runtime);
  }

  async createDomainResourceWithOptions(request: CreateDomainResourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDomainResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.httpsExt)) {
      query["HttpsExt"] = request.httpsExt;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.proxyTypes)) {
      query["ProxyTypes"] = request.proxyTypes;
    }

    if (!Util.isUnset(request.realServers)) {
      query["RealServers"] = request.realServers;
    }

    if (!Util.isUnset(request.rsType)) {
      query["RsType"] = request.rsType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDomainResource",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDomainResourceResponse>(await this.callApi(params, req, runtime), new CreateDomainResourceResponse({}));
  }

  async createDomainResource(request: CreateDomainResourceRequest): Promise<CreateDomainResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainResourceWithOptions(request, runtime);
  }

  async createNetworkRulesWithOptions(request: CreateNetworkRulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkRules)) {
      query["NetworkRules"] = request.networkRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNetworkRules",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNetworkRulesResponse>(await this.callApi(params, req, runtime), new CreateNetworkRulesResponse({}));
  }

  async createNetworkRules(request: CreateNetworkRulesRequest): Promise<CreateNetworkRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkRulesWithOptions(request, runtime);
  }

  /**
    * You can call this operation by using Terraform. For more information about Terraform, see [What is Terraform?](~~95820~~).
    *
    * @param request CreatePortRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreatePortResponse
   */
  async createPortWithOptions(request: CreatePortRequest, runtime: $Util.RuntimeOptions): Promise<CreatePortResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendPort)) {
      query["BackendPort"] = request.backendPort;
    }

    if (!Util.isUnset(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
    }

    if (!Util.isUnset(request.frontendProtocol)) {
      query["FrontendProtocol"] = request.frontendProtocol;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.realServers)) {
      query["RealServers"] = request.realServers;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePort",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePortResponse>(await this.callApi(params, req, runtime), new CreatePortResponse({}));
  }

  /**
    * You can call this operation by using Terraform. For more information about Terraform, see [What is Terraform?](~~95820~~).
    *
    * @param request CreatePortRequest
    * @return CreatePortResponse
   */
  async createPort(request: CreatePortRequest): Promise<CreatePortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPortWithOptions(request, runtime);
  }

  async createSceneDefensePolicyWithOptions(request: CreateSceneDefensePolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateSceneDefensePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSceneDefensePolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSceneDefensePolicyResponse>(await this.callApi(params, req, runtime), new CreateSceneDefensePolicyResponse({}));
  }

  async createSceneDefensePolicy(request: CreateSceneDefensePolicyRequest): Promise<CreateSceneDefensePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSceneDefensePolicyWithOptions(request, runtime);
  }

  async createSchedulerRuleWithOptions(request: CreateSchedulerRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateSchedulerRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.param)) {
      query["Param"] = request.param;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSchedulerRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSchedulerRuleResponse>(await this.callApi(params, req, runtime), new CreateSchedulerRuleResponse({}));
  }

  async createSchedulerRule(request: CreateSchedulerRuleRequest): Promise<CreateSchedulerRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSchedulerRuleWithOptions(request, runtime);
  }

  /**
    * You can call the CreateTagResources operation to add a tag to multiple Anti-DDoS Pro instances at a time.
    * > Anti-DDoS Premium does not support the tag feature.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request CreateTagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTagResourcesResponse
   */
  async createTagResourcesWithOptions(request: CreateTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<CreateTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTagResources",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTagResourcesResponse>(await this.callApi(params, req, runtime), new CreateTagResourcesResponse({}));
  }

  /**
    * You can call the CreateTagResources operation to add a tag to multiple Anti-DDoS Pro instances at a time.
    * > Anti-DDoS Premium does not support the tag feature.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request CreateTagResourcesRequest
    * @return CreateTagResourcesResponse
   */
  async createTagResources(request: CreateTagResourcesRequest): Promise<CreateTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTagResourcesWithOptions(request, runtime);
  }

  async createWebCCRuleWithOptions(request: CreateWebCCRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateWebCCRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.act)) {
      query["Act"] = request.act;
    }

    if (!Util.isUnset(request.count)) {
      query["Count"] = request.count;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!Util.isUnset(request.uri)) {
      query["Uri"] = request.uri;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateWebCCRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWebCCRuleResponse>(await this.callApi(params, req, runtime), new CreateWebCCRuleResponse({}));
  }

  async createWebCCRule(request: CreateWebCCRuleRequest): Promise<CreateWebCCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWebCCRuleWithOptions(request, runtime);
  }

  async createWebRuleWithOptions(request: CreateWebRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateWebRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseId)) {
      query["DefenseId"] = request.defenseId;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.httpsExt)) {
      query["HttpsExt"] = request.httpsExt;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.rsType)) {
      query["RsType"] = request.rsType;
    }

    if (!Util.isUnset(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateWebRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWebRuleResponse>(await this.callApi(params, req, runtime), new CreateWebRuleResponse({}));
  }

  async createWebRule(request: CreateWebRuleRequest): Promise<CreateWebRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWebRuleWithOptions(request, runtime);
  }

  async deleteAsyncTaskWithOptions(request: DeleteAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAsyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAsyncTask",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAsyncTaskResponse>(await this.callApi(params, req, runtime), new DeleteAsyncTaskResponse({}));
  }

  async deleteAsyncTask(request: DeleteAsyncTaskRequest): Promise<DeleteAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAsyncTaskWithOptions(request, runtime);
  }

  async deleteAutoCcBlacklistWithOptions(request: DeleteAutoCcBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAutoCcBlacklistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.blacklist)) {
      query["Blacklist"] = request.blacklist;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAutoCcBlacklist",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAutoCcBlacklistResponse>(await this.callApi(params, req, runtime), new DeleteAutoCcBlacklistResponse({}));
  }

  async deleteAutoCcBlacklist(request: DeleteAutoCcBlacklistRequest): Promise<DeleteAutoCcBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAutoCcBlacklistWithOptions(request, runtime);
  }

  async deleteAutoCcWhitelistWithOptions(request: DeleteAutoCcWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAutoCcWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.whitelist)) {
      query["Whitelist"] = request.whitelist;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAutoCcWhitelist",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAutoCcWhitelistResponse>(await this.callApi(params, req, runtime), new DeleteAutoCcWhitelistResponse({}));
  }

  async deleteAutoCcWhitelist(request: DeleteAutoCcWhitelistRequest): Promise<DeleteAutoCcWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAutoCcWhitelistWithOptions(request, runtime);
  }

  async deleteDomainResourceWithOptions(request: DeleteDomainResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomainResource",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainResourceResponse>(await this.callApi(params, req, runtime), new DeleteDomainResourceResponse({}));
  }

  async deleteDomainResource(request: DeleteDomainResourceRequest): Promise<DeleteDomainResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainResourceWithOptions(request, runtime);
  }

  async deleteNetworkRuleWithOptions(request: DeleteNetworkRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkRule)) {
      query["NetworkRule"] = request.networkRule;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNetworkRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNetworkRuleResponse>(await this.callApi(params, req, runtime), new DeleteNetworkRuleResponse({}));
  }

  async deleteNetworkRule(request: DeleteNetworkRuleRequest): Promise<DeleteNetworkRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkRuleWithOptions(request, runtime);
  }

  /**
    * After you delete a port forwarding rule, the Anti-DDoS Pro or Anti-DDoS Premium instance no longer forwards service traffic on the Layer 4 port. Before you delete a specific port forwarding rule, make sure that the service traffic destined for the Layer 4 port is redirected to the origin server. This can prevent negative impacts on your services.
    * > You can call this operation by using Terraform. For more information about Terraform, see [What is Terraform?](~~95820~~).
    *
    * @param request DeletePortRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeletePortResponse
   */
  async deletePortWithOptions(request: DeletePortRequest, runtime: $Util.RuntimeOptions): Promise<DeletePortResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendPort)) {
      query["BackendPort"] = request.backendPort;
    }

    if (!Util.isUnset(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
    }

    if (!Util.isUnset(request.frontendProtocol)) {
      query["FrontendProtocol"] = request.frontendProtocol;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.realServers)) {
      query["RealServers"] = request.realServers;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePort",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePortResponse>(await this.callApi(params, req, runtime), new DeletePortResponse({}));
  }

  /**
    * After you delete a port forwarding rule, the Anti-DDoS Pro or Anti-DDoS Premium instance no longer forwards service traffic on the Layer 4 port. Before you delete a specific port forwarding rule, make sure that the service traffic destined for the Layer 4 port is redirected to the origin server. This can prevent negative impacts on your services.
    * > You can call this operation by using Terraform. For more information about Terraform, see [What is Terraform?](~~95820~~).
    *
    * @param request DeletePortRequest
    * @return DeletePortResponse
   */
  async deletePort(request: DeletePortRequest): Promise<DeletePortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePortWithOptions(request, runtime);
  }

  async deleteSceneDefensePolicyWithOptions(request: DeleteSceneDefensePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSceneDefensePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSceneDefensePolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSceneDefensePolicyResponse>(await this.callApi(params, req, runtime), new DeleteSceneDefensePolicyResponse({}));
  }

  async deleteSceneDefensePolicy(request: DeleteSceneDefensePolicyRequest): Promise<DeleteSceneDefensePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSceneDefensePolicyWithOptions(request, runtime);
  }

  async deleteSchedulerRuleWithOptions(request: DeleteSchedulerRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSchedulerRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSchedulerRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSchedulerRuleResponse>(await this.callApi(params, req, runtime), new DeleteSchedulerRuleResponse({}));
  }

  async deleteSchedulerRule(request: DeleteSchedulerRuleRequest): Promise<DeleteSchedulerRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSchedulerRuleWithOptions(request, runtime);
  }

  /**
    * You can call the DeleteTagResources operation to remove tags from Anti-DDoS Pro instances.
    * > Only Anti-DDoS Pro supports tags.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DeleteTagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTagResourcesResponse
   */
  async deleteTagResourcesWithOptions(request: DeleteTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTagResources",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTagResourcesResponse>(await this.callApi(params, req, runtime), new DeleteTagResourcesResponse({}));
  }

  /**
    * You can call the DeleteTagResources operation to remove tags from Anti-DDoS Pro instances.
    * > Only Anti-DDoS Pro supports tags.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DeleteTagResourcesRequest
    * @return DeleteTagResourcesResponse
   */
  async deleteTagResources(request: DeleteTagResourcesRequest): Promise<DeleteTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagResourcesWithOptions(request, runtime);
  }

  async deleteWebCCRuleWithOptions(request: DeleteWebCCRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWebCCRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWebCCRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWebCCRuleResponse>(await this.callApi(params, req, runtime), new DeleteWebCCRuleResponse({}));
  }

  async deleteWebCCRule(request: DeleteWebCCRuleRequest): Promise<DeleteWebCCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWebCCRuleWithOptions(request, runtime);
  }

  /**
    * You can call the DeleteWebCacheCustomRule operation to delete the custom rules of the Static Page Caching policy for a website.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DeleteWebCacheCustomRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteWebCacheCustomRuleResponse
   */
  async deleteWebCacheCustomRuleWithOptions(request: DeleteWebCacheCustomRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWebCacheCustomRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.ruleNames)) {
      query["RuleNames"] = request.ruleNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWebCacheCustomRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWebCacheCustomRuleResponse>(await this.callApi(params, req, runtime), new DeleteWebCacheCustomRuleResponse({}));
  }

  /**
    * You can call the DeleteWebCacheCustomRule operation to delete the custom rules of the Static Page Caching policy for a website.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DeleteWebCacheCustomRuleRequest
    * @return DeleteWebCacheCustomRuleResponse
   */
  async deleteWebCacheCustomRule(request: DeleteWebCacheCustomRuleRequest): Promise<DeleteWebCacheCustomRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWebCacheCustomRuleWithOptions(request, runtime);
  }

  async deleteWebPreciseAccessRuleWithOptions(request: DeleteWebPreciseAccessRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWebPreciseAccessRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.ruleNames)) {
      query["RuleNames"] = request.ruleNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWebPreciseAccessRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWebPreciseAccessRuleResponse>(await this.callApi(params, req, runtime), new DeleteWebPreciseAccessRuleResponse({}));
  }

  async deleteWebPreciseAccessRule(request: DeleteWebPreciseAccessRuleRequest): Promise<DeleteWebPreciseAccessRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWebPreciseAccessRuleWithOptions(request, runtime);
  }

  async deleteWebRuleWithOptions(request: DeleteWebRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWebRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWebRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWebRuleResponse>(await this.callApi(params, req, runtime), new DeleteWebRuleResponse({}));
  }

  async deleteWebRule(request: DeleteWebRuleRequest): Promise<DeleteWebRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWebRuleWithOptions(request, runtime);
  }

  /**
    * You can call the DescribeAsyncTasks operation to query the details of asynchronous export tasks, such as the IDs, start time, end time, status, parameters, and results.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeAsyncTasksRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeAsyncTasksResponse
   */
  async describeAsyncTasksWithOptions(request: DescribeAsyncTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAsyncTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAsyncTasks",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAsyncTasksResponse>(await this.callApi(params, req, runtime), new DescribeAsyncTasksResponse({}));
  }

  /**
    * You can call the DescribeAsyncTasks operation to query the details of asynchronous export tasks, such as the IDs, start time, end time, status, parameters, and results.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeAsyncTasksRequest
    * @return DescribeAsyncTasksResponse
   */
  async describeAsyncTasks(request: DescribeAsyncTasksRequest): Promise<DescribeAsyncTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAsyncTasksWithOptions(request, runtime);
  }

  async describeAttackAnalysisMaxQpsWithOptions(request: DescribeAttackAnalysisMaxQpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAttackAnalysisMaxQpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAttackAnalysisMaxQps",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAttackAnalysisMaxQpsResponse>(await this.callApi(params, req, runtime), new DescribeAttackAnalysisMaxQpsResponse({}));
  }

  async describeAttackAnalysisMaxQps(request: DescribeAttackAnalysisMaxQpsRequest): Promise<DescribeAttackAnalysisMaxQpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAttackAnalysisMaxQpsWithOptions(request, runtime);
  }

  async describeAutoCcBlacklistWithOptions(request: DescribeAutoCcBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoCcBlacklistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAutoCcBlacklist",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAutoCcBlacklistResponse>(await this.callApi(params, req, runtime), new DescribeAutoCcBlacklistResponse({}));
  }

  async describeAutoCcBlacklist(request: DescribeAutoCcBlacklistRequest): Promise<DescribeAutoCcBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoCcBlacklistWithOptions(request, runtime);
  }

  async describeAutoCcListCountWithOptions(request: DescribeAutoCcListCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoCcListCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAutoCcListCount",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAutoCcListCountResponse>(await this.callApi(params, req, runtime), new DescribeAutoCcListCountResponse({}));
  }

  async describeAutoCcListCount(request: DescribeAutoCcListCountRequest): Promise<DescribeAutoCcListCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoCcListCountWithOptions(request, runtime);
  }

  async describeAutoCcWhitelistWithOptions(request: DescribeAutoCcWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoCcWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAutoCcWhitelist",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAutoCcWhitelistResponse>(await this.callApi(params, req, runtime), new DescribeAutoCcWhitelistResponse({}));
  }

  async describeAutoCcWhitelist(request: DescribeAutoCcWhitelistRequest): Promise<DescribeAutoCcWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoCcWhitelistWithOptions(request, runtime);
  }

  async describeBackSourceCidrWithOptions(request: DescribeBackSourceCidrRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackSourceCidrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.line)) {
      query["Line"] = request.line;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackSourceCidr",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackSourceCidrResponse>(await this.callApi(params, req, runtime), new DescribeBackSourceCidrResponse({}));
  }

  async describeBackSourceCidr(request: DescribeBackSourceCidrRequest): Promise<DescribeBackSourceCidrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackSourceCidrWithOptions(request, runtime);
  }

  async describeBlackholeStatusWithOptions(request: DescribeBlackholeStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBlackholeStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBlackholeStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBlackholeStatusResponse>(await this.callApi(params, req, runtime), new DescribeBlackholeStatusResponse({}));
  }

  async describeBlackholeStatus(request: DescribeBlackholeStatusRequest): Promise<DescribeBlackholeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBlackholeStatusWithOptions(request, runtime);
  }

  /**
    * This operation is used to query the Diversion from Origin Server configurations of one or more Anti-DDoS Pro instances.
    * > This operation is suitable only for Anti-DDoS Pro.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeBlockStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeBlockStatusResponse
   */
  async describeBlockStatusWithOptions(request: DescribeBlockStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBlockStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBlockStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBlockStatusResponse>(await this.callApi(params, req, runtime), new DescribeBlockStatusResponse({}));
  }

  /**
    * This operation is used to query the Diversion from Origin Server configurations of one or more Anti-DDoS Pro instances.
    * > This operation is suitable only for Anti-DDoS Pro.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeBlockStatusRequest
    * @return DescribeBlockStatusResponse
   */
  async describeBlockStatus(request: DescribeBlockStatusRequest): Promise<DescribeBlockStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBlockStatusWithOptions(request, runtime);
  }

  async describeCertsWithOptions(request: DescribeCertsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCerts",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCertsResponse>(await this.callApi(params, req, runtime), new DescribeCertsResponse({}));
  }

  async describeCerts(request: DescribeCertsRequest): Promise<DescribeCertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertsWithOptions(request, runtime);
  }

  async describeCnameReusesWithOptions(request: DescribeCnameReusesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCnameReusesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCnameReuses",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCnameReusesResponse>(await this.callApi(params, req, runtime), new DescribeCnameReusesResponse({}));
  }

  async describeCnameReuses(request: DescribeCnameReusesRequest): Promise<DescribeCnameReusesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCnameReusesWithOptions(request, runtime);
  }

  async describeDDoSEventsWithOptions(request: DescribeDDoSEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDoSEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDDoSEvents",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDDoSEventsResponse>(await this.callApi(params, req, runtime), new DescribeDDoSEventsResponse({}));
  }

  async describeDDoSEvents(request: DescribeDDoSEventsRequest): Promise<DescribeDDoSEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDoSEventsWithOptions(request, runtime);
  }

  /**
    * You can call the DescribeDDosAllEventList operation to query DDoS attack events within a specific time range by page. The information about a DDoS attack event includes the start time and end time of the attack, attack event type, attacked object, peak bandwidth of attack traffic, and peak packet forwarding rate.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDDosAllEventListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDDosAllEventListResponse
   */
  async describeDDosAllEventListWithOptions(request: DescribeDDosAllEventListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDosAllEventListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDDosAllEventList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDDosAllEventListResponse>(await this.callApi(params, req, runtime), new DescribeDDosAllEventListResponse({}));
  }

  /**
    * You can call the DescribeDDosAllEventList operation to query DDoS attack events within a specific time range by page. The information about a DDoS attack event includes the start time and end time of the attack, attack event type, attacked object, peak bandwidth of attack traffic, and peak packet forwarding rate.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDDosAllEventListRequest
    * @return DescribeDDosAllEventListResponse
   */
  async describeDDosAllEventList(request: DescribeDDosAllEventListRequest): Promise<DescribeDDosAllEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDosAllEventListWithOptions(request, runtime);
  }

  /**
    * > This operation is suitable only for volumetric attacks.
    *
    * @param request DescribeDDosEventAreaRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDDosEventAreaResponse
   */
  async describeDDosEventAreaWithOptions(request: DescribeDDosEventAreaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDosEventAreaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDDosEventArea",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDDosEventAreaResponse>(await this.callApi(params, req, runtime), new DescribeDDosEventAreaResponse({}));
  }

  /**
    * > This operation is suitable only for volumetric attacks.
    *
    * @param request DescribeDDosEventAreaRequest
    * @return DescribeDDosEventAreaResponse
   */
  async describeDDosEventArea(request: DescribeDDosEventAreaRequest): Promise<DescribeDDosEventAreaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDosEventAreaWithOptions(request, runtime);
  }

  /**
    * > This operation is suitable only for volumetric attacks.
    *
    * @param request DescribeDDosEventAttackTypeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDDosEventAttackTypeResponse
   */
  async describeDDosEventAttackTypeWithOptions(request: DescribeDDosEventAttackTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDosEventAttackTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDDosEventAttackType",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDDosEventAttackTypeResponse>(await this.callApi(params, req, runtime), new DescribeDDosEventAttackTypeResponse({}));
  }

  /**
    * > This operation is suitable only for volumetric attacks.
    *
    * @param request DescribeDDosEventAttackTypeRequest
    * @return DescribeDDosEventAttackTypeResponse
   */
  async describeDDosEventAttackType(request: DescribeDDosEventAttackTypeRequest): Promise<DescribeDDosEventAttackTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDosEventAttackTypeWithOptions(request, runtime);
  }

  /**
    * > This operation is suitable only for volumetric attacks.
    *
    * @param request DescribeDDosEventIspRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDDosEventIspResponse
   */
  async describeDDosEventIspWithOptions(request: DescribeDDosEventIspRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDosEventIspResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDDosEventIsp",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDDosEventIspResponse>(await this.callApi(params, req, runtime), new DescribeDDosEventIspResponse({}));
  }

  /**
    * > This operation is suitable only for volumetric attacks.
    *
    * @param request DescribeDDosEventIspRequest
    * @return DescribeDDosEventIspResponse
   */
  async describeDDosEventIsp(request: DescribeDDosEventIspRequest): Promise<DescribeDDosEventIspResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDosEventIspWithOptions(request, runtime);
  }

  async describeDDosEventMaxWithOptions(request: DescribeDDosEventMaxRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDosEventMaxResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDDosEventMax",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDDosEventMaxResponse>(await this.callApi(params, req, runtime), new DescribeDDosEventMaxResponse({}));
  }

  async describeDDosEventMax(request: DescribeDDosEventMaxRequest): Promise<DescribeDDosEventMaxResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDosEventMaxWithOptions(request, runtime);
  }

  /**
    * > This operation is suitable only for volumetric attacks.
    *
    * @param request DescribeDDosEventSrcIpRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDDosEventSrcIpResponse
   */
  async describeDDosEventSrcIpWithOptions(request: DescribeDDosEventSrcIpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDosEventSrcIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.range)) {
      query["Range"] = request.range;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDDosEventSrcIp",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDDosEventSrcIpResponse>(await this.callApi(params, req, runtime), new DescribeDDosEventSrcIpResponse({}));
  }

  /**
    * > This operation is suitable only for volumetric attacks.
    *
    * @param request DescribeDDosEventSrcIpRequest
    * @return DescribeDDosEventSrcIpResponse
   */
  async describeDDosEventSrcIp(request: DescribeDDosEventSrcIpRequest): Promise<DescribeDDosEventSrcIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDosEventSrcIpWithOptions(request, runtime);
  }

  /**
    * You can call the DescribeDefenseCountStatistics operation to query the information about advanced mitigation sessions of an Anti-DDoS Premium instance. For example, you can query the number of advanced mitigation sessions that are used within the current calendar month and the number of available global advanced mitigation sessions.
    * > This operation is suitable only for Anti-DDoS Premium.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDefenseCountStatisticsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDefenseCountStatisticsResponse
   */
  async describeDefenseCountStatisticsWithOptions(request: DescribeDefenseCountStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseCountStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseCountStatistics",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseCountStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeDefenseCountStatisticsResponse({}));
  }

  /**
    * You can call the DescribeDefenseCountStatistics operation to query the information about advanced mitigation sessions of an Anti-DDoS Premium instance. For example, you can query the number of advanced mitigation sessions that are used within the current calendar month and the number of available global advanced mitigation sessions.
    * > This operation is suitable only for Anti-DDoS Premium.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDefenseCountStatisticsRequest
    * @return DescribeDefenseCountStatisticsResponse
   */
  async describeDefenseCountStatistics(request: DescribeDefenseCountStatisticsRequest): Promise<DescribeDefenseCountStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseCountStatisticsWithOptions(request, runtime);
  }

  /**
    * > This operation is suitable only for Anti-DDoS Premium.
    *
    * @param request DescribeDefenseRecordsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDefenseRecordsResponse
   */
  async describeDefenseRecordsWithOptions(request: DescribeDefenseRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseRecords",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseRecordsResponse>(await this.callApi(params, req, runtime), new DescribeDefenseRecordsResponse({}));
  }

  /**
    * > This operation is suitable only for Anti-DDoS Premium.
    *
    * @param request DescribeDefenseRecordsRequest
    * @return DescribeDefenseRecordsResponse
   */
  async describeDefenseRecords(request: DescribeDefenseRecordsRequest): Promise<DescribeDefenseRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseRecordsWithOptions(request, runtime);
  }

  async describeDomainAttackEventsWithOptions(request: DescribeDomainAttackEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainAttackEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainAttackEvents",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainAttackEventsResponse>(await this.callApi(params, req, runtime), new DescribeDomainAttackEventsResponse({}));
  }

  async describeDomainAttackEvents(request: DescribeDomainAttackEventsRequest): Promise<DescribeDomainAttackEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainAttackEventsWithOptions(request, runtime);
  }

  async describeDomainOverviewWithOptions(request: DescribeDomainOverviewRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainOverviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainOverview",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainOverviewResponse>(await this.callApi(params, req, runtime), new DescribeDomainOverviewResponse({}));
  }

  async describeDomainOverview(request: DescribeDomainOverviewRequest): Promise<DescribeDomainOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainOverviewWithOptions(request, runtime);
  }

  async describeDomainQPSListWithOptions(request: DescribeDomainQPSListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainQPSListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainQPSList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainQPSListResponse>(await this.callApi(params, req, runtime), new DescribeDomainQPSListResponse({}));
  }

  async describeDomainQPSList(request: DescribeDomainQPSListRequest): Promise<DescribeDomainQPSListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainQPSListWithOptions(request, runtime);
  }

  /**
    * You can call the DescribeDomainResource operation to query the configurations of the forwarding rules that you create for a website by page. The configurations include the domain name-related configurations, protocol-related configurations, HTTPS-related configurations, and configurations that are used to mitigate HTTP flood attacks.
    * You can call this operation by using Terraform. For more information about Terraform, see [What is Terraform?](~~95820~~).
    * ### Limits
    * You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDomainResourceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainResourceResponse
   */
  async describeDomainResourceWithOptions(request: DescribeDomainResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryDomainPattern)) {
      query["QueryDomainPattern"] = request.queryDomainPattern;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainResource",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainResourceResponse>(await this.callApi(params, req, runtime), new DescribeDomainResourceResponse({}));
  }

  /**
    * You can call the DescribeDomainResource operation to query the configurations of the forwarding rules that you create for a website by page. The configurations include the domain name-related configurations, protocol-related configurations, HTTPS-related configurations, and configurations that are used to mitigate HTTP flood attacks.
    * You can call this operation by using Terraform. For more information about Terraform, see [What is Terraform?](~~95820~~).
    * ### Limits
    * You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeDomainResourceRequest
    * @return DescribeDomainResourceResponse
   */
  async describeDomainResource(request: DescribeDomainResourceRequest): Promise<DescribeDomainResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainResourceWithOptions(request, runtime);
  }

  async describeDomainSecurityProfileWithOptions(request: DescribeDomainSecurityProfileRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainSecurityProfileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainSecurityProfile",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainSecurityProfileResponse>(await this.callApi(params, req, runtime), new DescribeDomainSecurityProfileResponse({}));
  }

  async describeDomainSecurityProfile(request: DescribeDomainSecurityProfileRequest): Promise<DescribeDomainSecurityProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainSecurityProfileWithOptions(request, runtime);
  }

  async describeDomainStatusCodeCountWithOptions(request: DescribeDomainStatusCodeCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainStatusCodeCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainStatusCodeCount",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainStatusCodeCountResponse>(await this.callApi(params, req, runtime), new DescribeDomainStatusCodeCountResponse({}));
  }

  async describeDomainStatusCodeCount(request: DescribeDomainStatusCodeCountRequest): Promise<DescribeDomainStatusCodeCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainStatusCodeCountWithOptions(request, runtime);
  }

  async describeDomainStatusCodeListWithOptions(request: DescribeDomainStatusCodeListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainStatusCodeListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainStatusCodeList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainStatusCodeListResponse>(await this.callApi(params, req, runtime), new DescribeDomainStatusCodeListResponse({}));
  }

  async describeDomainStatusCodeList(request: DescribeDomainStatusCodeListRequest): Promise<DescribeDomainStatusCodeListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainStatusCodeListWithOptions(request, runtime);
  }

  async describeDomainTopAttackListWithOptions(request: DescribeDomainTopAttackListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainTopAttackListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainTopAttackList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainTopAttackListResponse>(await this.callApi(params, req, runtime), new DescribeDomainTopAttackListResponse({}));
  }

  async describeDomainTopAttackList(request: DescribeDomainTopAttackListRequest): Promise<DescribeDomainTopAttackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainTopAttackListWithOptions(request, runtime);
  }

  async describeDomainViewSourceCountriesWithOptions(request: DescribeDomainViewSourceCountriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainViewSourceCountriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainViewSourceCountries",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainViewSourceCountriesResponse>(await this.callApi(params, req, runtime), new DescribeDomainViewSourceCountriesResponse({}));
  }

  async describeDomainViewSourceCountries(request: DescribeDomainViewSourceCountriesRequest): Promise<DescribeDomainViewSourceCountriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainViewSourceCountriesWithOptions(request, runtime);
  }

  async describeDomainViewSourceProvincesWithOptions(request: DescribeDomainViewSourceProvincesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainViewSourceProvincesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainViewSourceProvinces",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainViewSourceProvincesResponse>(await this.callApi(params, req, runtime), new DescribeDomainViewSourceProvincesResponse({}));
  }

  async describeDomainViewSourceProvinces(request: DescribeDomainViewSourceProvincesRequest): Promise<DescribeDomainViewSourceProvincesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainViewSourceProvincesWithOptions(request, runtime);
  }

  async describeDomainViewTopCostTimeWithOptions(request: DescribeDomainViewTopCostTimeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainViewTopCostTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.top)) {
      query["Top"] = request.top;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainViewTopCostTime",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainViewTopCostTimeResponse>(await this.callApi(params, req, runtime), new DescribeDomainViewTopCostTimeResponse({}));
  }

  async describeDomainViewTopCostTime(request: DescribeDomainViewTopCostTimeRequest): Promise<DescribeDomainViewTopCostTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainViewTopCostTimeWithOptions(request, runtime);
  }

  async describeDomainViewTopUrlWithOptions(request: DescribeDomainViewTopUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainViewTopUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.top)) {
      query["Top"] = request.top;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainViewTopUrl",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainViewTopUrlResponse>(await this.callApi(params, req, runtime), new DescribeDomainViewTopUrlResponse({}));
  }

  async describeDomainViewTopUrl(request: DescribeDomainViewTopUrlRequest): Promise<DescribeDomainViewTopUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainViewTopUrlWithOptions(request, runtime);
  }

  async describeDomainsWithOptions(request: DescribeDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomains",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainsResponse>(await this.callApi(params, req, runtime), new DescribeDomainsResponse({}));
  }

  async describeDomains(request: DescribeDomainsRequest): Promise<DescribeDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  /**
    * > This operation is suitable only for Anti-DDoS Pro.
    *
    * @param request DescribeElasticBandwidthSpecRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeElasticBandwidthSpecResponse
   */
  async describeElasticBandwidthSpecWithOptions(request: DescribeElasticBandwidthSpecRequest, runtime: $Util.RuntimeOptions): Promise<DescribeElasticBandwidthSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeElasticBandwidthSpec",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeElasticBandwidthSpecResponse>(await this.callApi(params, req, runtime), new DescribeElasticBandwidthSpecResponse({}));
  }

  /**
    * > This operation is suitable only for Anti-DDoS Pro.
    *
    * @param request DescribeElasticBandwidthSpecRequest
    * @return DescribeElasticBandwidthSpecResponse
   */
  async describeElasticBandwidthSpec(request: DescribeElasticBandwidthSpecRequest): Promise<DescribeElasticBandwidthSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticBandwidthSpecWithOptions(request, runtime);
  }

  async describeElasticQpsWithOptions(request: DescribeElasticQpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeElasticQpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeElasticQps",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeElasticQpsResponse>(await this.callApi(params, req, runtime), new DescribeElasticQpsResponse({}));
  }

  async describeElasticQps(request: DescribeElasticQpsRequest): Promise<DescribeElasticQpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticQpsWithOptions(request, runtime);
  }

  async describeElasticQpsRecordWithOptions(request: DescribeElasticQpsRecordRequest, runtime: $Util.RuntimeOptions): Promise<DescribeElasticQpsRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeElasticQpsRecord",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeElasticQpsRecordResponse>(await this.callApi(params, req, runtime), new DescribeElasticQpsRecordResponse({}));
  }

  async describeElasticQpsRecord(request: DescribeElasticQpsRecordRequest): Promise<DescribeElasticQpsRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticQpsRecordWithOptions(request, runtime);
  }

  async describeHeadersWithOptions(request: DescribeHeadersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHeadersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHeaders",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHeadersResponse>(await this.callApi(params, req, runtime), new DescribeHeadersResponse({}));
  }

  async describeHeaders(request: DescribeHeadersRequest): Promise<DescribeHeadersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHeadersWithOptions(request, runtime);
  }

  async describeHealthCheckListWithOptions(request: DescribeHealthCheckListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHealthCheckListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkRules)) {
      query["NetworkRules"] = request.networkRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHealthCheckList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHealthCheckListResponse>(await this.callApi(params, req, runtime), new DescribeHealthCheckListResponse({}));
  }

  async describeHealthCheckList(request: DescribeHealthCheckListRequest): Promise<DescribeHealthCheckListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthCheckListWithOptions(request, runtime);
  }

  async describeHealthCheckStatusWithOptions(request: DescribeHealthCheckStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHealthCheckStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkRules)) {
      query["NetworkRules"] = request.networkRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHealthCheckStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHealthCheckStatusResponse>(await this.callApi(params, req, runtime), new DescribeHealthCheckStatusResponse({}));
  }

  async describeHealthCheckStatus(request: DescribeHealthCheckStatusRequest): Promise<DescribeHealthCheckStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthCheckStatusWithOptions(request, runtime);
  }

  /**
    * You can call the DescribeInstanceDetails operation to query the information about the IP addresses and ISP lines of the instances. The information includes the IP address, status, and protection line.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeInstanceDetailsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeInstanceDetailsResponse
   */
  async describeInstanceDetailsWithOptions(request: DescribeInstanceDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceDetails",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceDetailsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceDetailsResponse({}));
  }

  /**
    * You can call the DescribeInstanceDetails operation to query the information about the IP addresses and ISP lines of the instances. The information includes the IP address, status, and protection line.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeInstanceDetailsRequest
    * @return DescribeInstanceDetailsResponse
   */
  async describeInstanceDetails(request: DescribeInstanceDetailsRequest): Promise<DescribeInstanceDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceDetailsWithOptions(request, runtime);
  }

  async describeInstanceExtWithOptions(request: DescribeInstanceExtRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceExtResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceExt",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceExtResponse>(await this.callApi(params, req, runtime), new DescribeInstanceExtResponse({}));
  }

  async describeInstanceExt(request: DescribeInstanceExtRequest): Promise<DescribeInstanceExtResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceExtWithOptions(request, runtime);
  }

  async describeInstanceIdsWithOptions(request: DescribeInstanceIdsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceIdsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceIds",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceIdsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceIdsResponse({}));
  }

  async describeInstanceIds(request: DescribeInstanceIdsRequest): Promise<DescribeInstanceIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceIdsWithOptions(request, runtime);
  }

  /**
    * You can call the DescribeInstanceSpecs operation to query the specifications of multiple Anti-DDoS Pro or Anti-DDoS Premium instances at a time. The specifications include the clean bandwidth, protection bandwidth, function plan, and the numbers of domain names and ports that can be protected.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeInstanceSpecsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeInstanceSpecsResponse
   */
  async describeInstanceSpecsWithOptions(request: DescribeInstanceSpecsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSpecsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceSpecs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceSpecsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSpecsResponse({}));
  }

  /**
    * You can call the DescribeInstanceSpecs operation to query the specifications of multiple Anti-DDoS Pro or Anti-DDoS Premium instances at a time. The specifications include the clean bandwidth, protection bandwidth, function plan, and the numbers of domain names and ports that can be protected.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeInstanceSpecsRequest
    * @return DescribeInstanceSpecsResponse
   */
  async describeInstanceSpecs(request: DescribeInstanceSpecsRequest): Promise<DescribeInstanceSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSpecsWithOptions(request, runtime);
  }

  async describeInstanceStatisticsWithOptions(request: DescribeInstanceStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceStatistics",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceStatisticsResponse({}));
  }

  async describeInstanceStatistics(request: DescribeInstanceStatisticsRequest): Promise<DescribeInstanceStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceStatisticsWithOptions(request, runtime);
  }

  async describeInstanceStatusWithOptions(request: DescribeInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceStatusResponse>(await this.callApi(params, req, runtime), new DescribeInstanceStatusResponse({}));
  }

  async describeInstanceStatus(request: DescribeInstanceStatusRequest): Promise<DescribeInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceStatusWithOptions(request, runtime);
  }

  /**
    * You can call the DescribeInstances operation to query the details of Anti-DDoS Pro or Anti-DDoS Premium instances within the Alibaba Cloud account by page. The details include the ID, mitigation plan, expiration time, and forwarding status.
    *
    * @param request DescribeInstancesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!Util.isUnset(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.expireEndTime)) {
      query["ExpireEndTime"] = request.expireEndTime;
    }

    if (!Util.isUnset(request.expireStartTime)) {
      query["ExpireStartTime"] = request.expireStartTime;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstances",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstancesResponse>(await this.callApi(params, req, runtime), new DescribeInstancesResponse({}));
  }

  /**
    * You can call the DescribeInstances operation to query the details of Anti-DDoS Pro or Anti-DDoS Premium instances within the Alibaba Cloud account by page. The details include the ID, mitigation plan, expiration time, and forwarding status.
    *
    * @param request DescribeInstancesRequest
    * @return DescribeInstancesResponse
   */
  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeL7RsPolicyWithOptions(request: DescribeL7RsPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeL7RsPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.realServers)) {
      query["RealServers"] = request.realServers;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeL7RsPolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeL7RsPolicyResponse>(await this.callApi(params, req, runtime), new DescribeL7RsPolicyResponse({}));
  }

  async describeL7RsPolicy(request: DescribeL7RsPolicyRequest): Promise<DescribeL7RsPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeL7RsPolicyWithOptions(request, runtime);
  }

  async describeLayer4RulePolicyWithOptions(request: DescribeLayer4RulePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLayer4RulePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLayer4RulePolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLayer4RulePolicyResponse>(await this.callApi(params, req, runtime), new DescribeLayer4RulePolicyResponse({}));
  }

  async describeLayer4RulePolicy(request: DescribeLayer4RulePolicyRequest): Promise<DescribeLayer4RulePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLayer4RulePolicyWithOptions(request, runtime);
  }

  async describeLogStoreExistStatusWithOptions(request: DescribeLogStoreExistStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogStoreExistStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLogStoreExistStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogStoreExistStatusResponse>(await this.callApi(params, req, runtime), new DescribeLogStoreExistStatusResponse({}));
  }

  async describeLogStoreExistStatus(request: DescribeLogStoreExistStatusRequest): Promise<DescribeLogStoreExistStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogStoreExistStatusWithOptions(request, runtime);
  }

  async describeNetworkRegionBlockWithOptions(request: DescribeNetworkRegionBlockRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkRegionBlockResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNetworkRegionBlock",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNetworkRegionBlockResponse>(await this.callApi(params, req, runtime), new DescribeNetworkRegionBlockResponse({}));
  }

  async describeNetworkRegionBlock(request: DescribeNetworkRegionBlockRequest): Promise<DescribeNetworkRegionBlockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkRegionBlockWithOptions(request, runtime);
  }

  async describeNetworkRuleAttributesWithOptions(request: DescribeNetworkRuleAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkRuleAttributesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkRules)) {
      query["NetworkRules"] = request.networkRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNetworkRuleAttributes",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNetworkRuleAttributesResponse>(await this.callApi(params, req, runtime), new DescribeNetworkRuleAttributesResponse({}));
  }

  async describeNetworkRuleAttributes(request: DescribeNetworkRuleAttributesRequest): Promise<DescribeNetworkRuleAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkRuleAttributesWithOptions(request, runtime);
  }

  async describeNetworkRulesWithOptions(request: DescribeNetworkRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.forwardProtocol)) {
      query["ForwardProtocol"] = request.forwardProtocol;
    }

    if (!Util.isUnset(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNetworkRules",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNetworkRulesResponse>(await this.callApi(params, req, runtime), new DescribeNetworkRulesResponse({}));
  }

  async describeNetworkRules(request: DescribeNetworkRulesRequest): Promise<DescribeNetworkRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkRulesWithOptions(request, runtime);
  }

  /**
    * > This operation is suitable only for Anti-DDoS Pro.
    * You can query operations performed on Anti-DDoS Pro, such as configuring burstable protection bandwidth, deactivating blackhole filtering, configuring the Diversion from Origin Server policy, using Anti-DDoS plans, changing the IP addresses of Elastic Compute Service (ECS) instances, and clearing all logs.
    *
    * @param request DescribeOpEntitiesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeOpEntitiesResponse
   */
  async describeOpEntitiesWithOptions(request: DescribeOpEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOpEntitiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.entityObject)) {
      query["EntityObject"] = request.entityObject;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOpEntities",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOpEntitiesResponse>(await this.callApi(params, req, runtime), new DescribeOpEntitiesResponse({}));
  }

  /**
    * > This operation is suitable only for Anti-DDoS Pro.
    * You can query operations performed on Anti-DDoS Pro, such as configuring burstable protection bandwidth, deactivating blackhole filtering, configuring the Diversion from Origin Server policy, using Anti-DDoS plans, changing the IP addresses of Elastic Compute Service (ECS) instances, and clearing all logs.
    *
    * @param request DescribeOpEntitiesRequest
    * @return DescribeOpEntitiesResponse
   */
  async describeOpEntities(request: DescribeOpEntitiesRequest): Promise<DescribeOpEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOpEntitiesWithOptions(request, runtime);
  }

  /**
    * You can call this operation by using Terraform. For more information about Terraform, see [What is Terraform?](~~95820~~).
    *
    * @param request DescribePortRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribePortResponse
   */
  async describePortWithOptions(request: DescribePortRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
    }

    if (!Util.isUnset(request.frontendProtocol)) {
      query["FrontendProtocol"] = request.frontendProtocol;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePort",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePortResponse>(await this.callApi(params, req, runtime), new DescribePortResponse({}));
  }

  /**
    * You can call this operation by using Terraform. For more information about Terraform, see [What is Terraform?](~~95820~~).
    *
    * @param request DescribePortRequest
    * @return DescribePortResponse
   */
  async describePort(request: DescribePortRequest): Promise<DescribePortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the peak bandwidth and peak packet rate of attack traffic on one or more Anti-DDoS Pro or Anti-DDoS Premium instances within a specific period of time.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribePortAttackMaxFlowRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribePortAttackMaxFlowResponse
   */
  async describePortAttackMaxFlowWithOptions(request: DescribePortAttackMaxFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortAttackMaxFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePortAttackMaxFlow",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePortAttackMaxFlowResponse>(await this.callApi(params, req, runtime), new DescribePortAttackMaxFlowResponse({}));
  }

  /**
    * You can call this operation to query the peak bandwidth and peak packet rate of attack traffic on one or more Anti-DDoS Pro or Anti-DDoS Premium instances within a specific period of time.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribePortAttackMaxFlowRequest
    * @return DescribePortAttackMaxFlowResponse
   */
  async describePortAttackMaxFlow(request: DescribePortAttackMaxFlowRequest): Promise<DescribePortAttackMaxFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortAttackMaxFlowWithOptions(request, runtime);
  }

  async describePortAutoCcStatusWithOptions(request: DescribePortAutoCcStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortAutoCcStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePortAutoCcStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePortAutoCcStatusResponse>(await this.callApi(params, req, runtime), new DescribePortAutoCcStatusResponse({}));
  }

  async describePortAutoCcStatus(request: DescribePortAutoCcStatusRequest): Promise<DescribePortAutoCcStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortAutoCcStatusWithOptions(request, runtime);
  }

  async describePortCcAttackTopIPWithOptions(request: DescribePortCcAttackTopIPRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortCcAttackTopIPResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePortCcAttackTopIP",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePortCcAttackTopIPResponse>(await this.callApi(params, req, runtime), new DescribePortCcAttackTopIPResponse({}));
  }

  async describePortCcAttackTopIP(request: DescribePortCcAttackTopIPRequest): Promise<DescribePortCcAttackTopIPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortCcAttackTopIPWithOptions(request, runtime);
  }

  async describePortConnsCountWithOptions(request: DescribePortConnsCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortConnsCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePortConnsCount",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePortConnsCountResponse>(await this.callApi(params, req, runtime), new DescribePortConnsCountResponse({}));
  }

  async describePortConnsCount(request: DescribePortConnsCountRequest): Promise<DescribePortConnsCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortConnsCountWithOptions(request, runtime);
  }

  async describePortConnsListWithOptions(request: DescribePortConnsListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortConnsListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePortConnsList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePortConnsListResponse>(await this.callApi(params, req, runtime), new DescribePortConnsListResponse({}));
  }

  async describePortConnsList(request: DescribePortConnsListRequest): Promise<DescribePortConnsListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortConnsListWithOptions(request, runtime);
  }

  async describePortFlowListWithOptions(request: DescribePortFlowListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortFlowListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePortFlowList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePortFlowListResponse>(await this.callApi(params, req, runtime), new DescribePortFlowListResponse({}));
  }

  async describePortFlowList(request: DescribePortFlowListRequest): Promise<DescribePortFlowListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortFlowListWithOptions(request, runtime);
  }

  async describePortMaxConnsWithOptions(request: DescribePortMaxConnsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortMaxConnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePortMaxConns",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePortMaxConnsResponse>(await this.callApi(params, req, runtime), new DescribePortMaxConnsResponse({}));
  }

  async describePortMaxConns(request: DescribePortMaxConnsRequest): Promise<DescribePortMaxConnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortMaxConnsWithOptions(request, runtime);
  }

  async describePortViewSourceCountriesWithOptions(request: DescribePortViewSourceCountriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortViewSourceCountriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePortViewSourceCountries",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePortViewSourceCountriesResponse>(await this.callApi(params, req, runtime), new DescribePortViewSourceCountriesResponse({}));
  }

  async describePortViewSourceCountries(request: DescribePortViewSourceCountriesRequest): Promise<DescribePortViewSourceCountriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortViewSourceCountriesWithOptions(request, runtime);
  }

  /**
    * You can call the DescribePortViewSourceIsps operation to query the ISPs from which requests are sent to one or more Anti-DDoS Pro or Anti-DDoS Premium instances within a specific period of time.
    * > The data returned for this operation cannot reflect the actual traffic volume because Layer 4 identity authentication algorithms are updated for Anti-DDoS Pro and Anti-DDoS Premium. You can call this operation to calculate only the proportion of requests sent from different ISPs. If you want to query the request traffic volume, we recommend that you call the [DescribePortFlowList](~~157460~~) operation.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribePortViewSourceIspsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribePortViewSourceIspsResponse
   */
  async describePortViewSourceIspsWithOptions(request: DescribePortViewSourceIspsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortViewSourceIspsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePortViewSourceIsps",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePortViewSourceIspsResponse>(await this.callApi(params, req, runtime), new DescribePortViewSourceIspsResponse({}));
  }

  /**
    * You can call the DescribePortViewSourceIsps operation to query the ISPs from which requests are sent to one or more Anti-DDoS Pro or Anti-DDoS Premium instances within a specific period of time.
    * > The data returned for this operation cannot reflect the actual traffic volume because Layer 4 identity authentication algorithms are updated for Anti-DDoS Pro and Anti-DDoS Premium. You can call this operation to calculate only the proportion of requests sent from different ISPs. If you want to query the request traffic volume, we recommend that you call the [DescribePortFlowList](~~157460~~) operation.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribePortViewSourceIspsRequest
    * @return DescribePortViewSourceIspsResponse
   */
  async describePortViewSourceIsps(request: DescribePortViewSourceIspsRequest): Promise<DescribePortViewSourceIspsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortViewSourceIspsWithOptions(request, runtime);
  }

  async describePortViewSourceProvincesWithOptions(request: DescribePortViewSourceProvincesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortViewSourceProvincesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePortViewSourceProvinces",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePortViewSourceProvincesResponse>(await this.callApi(params, req, runtime), new DescribePortViewSourceProvincesResponse({}));
  }

  async describePortViewSourceProvinces(request: DescribePortViewSourceProvincesRequest): Promise<DescribePortViewSourceProvincesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortViewSourceProvincesWithOptions(request, runtime);
  }

  /**
    * You can call the DescribeSceneDefenseObjects operation to query the protected objects of a scenario-specific custom policy.
    * Before you call this operation, make sure that you have created a scenario-specific custom policy by calling the [CreateSceneDefensePolicy](~~159779~~) operation.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeSceneDefenseObjectsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSceneDefenseObjectsResponse
   */
  async describeSceneDefenseObjectsWithOptions(request: DescribeSceneDefenseObjectsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSceneDefenseObjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSceneDefenseObjects",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSceneDefenseObjectsResponse>(await this.callApi(params, req, runtime), new DescribeSceneDefenseObjectsResponse({}));
  }

  /**
    * You can call the DescribeSceneDefenseObjects operation to query the protected objects of a scenario-specific custom policy.
    * Before you call this operation, make sure that you have created a scenario-specific custom policy by calling the [CreateSceneDefensePolicy](~~159779~~) operation.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeSceneDefenseObjectsRequest
    * @return DescribeSceneDefenseObjectsResponse
   */
  async describeSceneDefenseObjects(request: DescribeSceneDefenseObjectsRequest): Promise<DescribeSceneDefenseObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSceneDefenseObjectsWithOptions(request, runtime);
  }

  /**
    * You can call the DescribeSceneDefensePolicies operation to query the configurations of a scenario-specific custom policy that is created. For example, you can query the status, protected objects, and protection rules of the policy.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeSceneDefensePoliciesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSceneDefensePoliciesResponse
   */
  async describeSceneDefensePoliciesWithOptions(request: DescribeSceneDefensePoliciesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSceneDefensePoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSceneDefensePolicies",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSceneDefensePoliciesResponse>(await this.callApi(params, req, runtime), new DescribeSceneDefensePoliciesResponse({}));
  }

  /**
    * You can call the DescribeSceneDefensePolicies operation to query the configurations of a scenario-specific custom policy that is created. For example, you can query the status, protected objects, and protection rules of the policy.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeSceneDefensePoliciesRequest
    * @return DescribeSceneDefensePoliciesResponse
   */
  async describeSceneDefensePolicies(request: DescribeSceneDefensePoliciesRequest): Promise<DescribeSceneDefensePoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSceneDefensePoliciesWithOptions(request, runtime);
  }

  async describeSchedulerRulesWithOptions(request: DescribeSchedulerRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSchedulerRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSchedulerRules",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSchedulerRulesResponse>(await this.callApi(params, req, runtime), new DescribeSchedulerRulesResponse({}));
  }

  async describeSchedulerRules(request: DescribeSchedulerRulesRequest): Promise<DescribeSchedulerRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSchedulerRulesWithOptions(request, runtime);
  }

  async describeSlaEventListWithOptions(request: DescribeSlaEventListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlaEventListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlaEventList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlaEventListResponse>(await this.callApi(params, req, runtime), new DescribeSlaEventListResponse({}));
  }

  async describeSlaEventList(request: DescribeSlaEventListRequest): Promise<DescribeSlaEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlaEventListWithOptions(request, runtime);
  }

  async describeSlsAuthStatusWithOptions(request: DescribeSlsAuthStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsAuthStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlsAuthStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlsAuthStatusResponse>(await this.callApi(params, req, runtime), new DescribeSlsAuthStatusResponse({}));
  }

  async describeSlsAuthStatus(request: DescribeSlsAuthStatusRequest): Promise<DescribeSlsAuthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsAuthStatusWithOptions(request, runtime);
  }

  async describeSlsLogstoreInfoWithOptions(request: DescribeSlsLogstoreInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsLogstoreInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlsLogstoreInfo",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlsLogstoreInfoResponse>(await this.callApi(params, req, runtime), new DescribeSlsLogstoreInfoResponse({}));
  }

  async describeSlsLogstoreInfo(request: DescribeSlsLogstoreInfoRequest): Promise<DescribeSlsLogstoreInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsLogstoreInfoWithOptions(request, runtime);
  }

  async describeSlsOpenStatusWithOptions(request: DescribeSlsOpenStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsOpenStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlsOpenStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlsOpenStatusResponse>(await this.callApi(params, req, runtime), new DescribeSlsOpenStatusResponse({}));
  }

  async describeSlsOpenStatus(request: DescribeSlsOpenStatusRequest): Promise<DescribeSlsOpenStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsOpenStatusWithOptions(request, runtime);
  }

  /**
    * You can call the DescribeStsGrantStatus operation to query whether Anti-DDoS Pro or Anti-DDoS Premium of the current Alibaba Cloud account is authorized to access other cloud services.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeStsGrantStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeStsGrantStatusResponse
   */
  async describeStsGrantStatusWithOptions(request: DescribeStsGrantStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStsGrantStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStsGrantStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStsGrantStatusResponse>(await this.callApi(params, req, runtime), new DescribeStsGrantStatusResponse({}));
  }

  /**
    * You can call the DescribeStsGrantStatus operation to query whether Anti-DDoS Pro or Anti-DDoS Premium of the current Alibaba Cloud account is authorized to access other cloud services.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeStsGrantStatusRequest
    * @return DescribeStsGrantStatusResponse
   */
  async describeStsGrantStatus(request: DescribeStsGrantStatusRequest): Promise<DescribeStsGrantStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStsGrantStatusWithOptions(request, runtime);
  }

  /**
    * You can call the DescribeSystemLog operation to query the system logs of Anti-DDoS Pro or Anti-DDoS Premium. The system logs contain only billing logs for the burstable clean bandwidth.
    * If you have enabled the burstable clean bandwidth feature, you can call this operation to query the details of the bills of the burstable clean bandwidth.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeSystemLogRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSystemLogResponse
   */
  async describeSystemLogWithOptions(request: DescribeSystemLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSystemLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.entityObject)) {
      query["EntityObject"] = request.entityObject;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSystemLog",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSystemLogResponse>(await this.callApi(params, req, runtime), new DescribeSystemLogResponse({}));
  }

  /**
    * You can call the DescribeSystemLog operation to query the system logs of Anti-DDoS Pro or Anti-DDoS Premium. The system logs contain only billing logs for the burstable clean bandwidth.
    * If you have enabled the burstable clean bandwidth feature, you can call this operation to query the details of the bills of the burstable clean bandwidth.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeSystemLogRequest
    * @return DescribeSystemLogResponse
   */
  async describeSystemLog(request: DescribeSystemLogRequest): Promise<DescribeSystemLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSystemLogWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query all tag keys and the Anti-DDoS Pro instances to which the tag keys are added by page.
    * > The tag feature is suitable only for Anti-DDoS Pro.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeTagKeysRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeTagKeysResponse
   */
  async describeTagKeysWithOptions(request: DescribeTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTagKeys",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagKeysResponse>(await this.callApi(params, req, runtime), new DescribeTagKeysResponse({}));
  }

  /**
    * You can call this operation to query all tag keys and the Anti-DDoS Pro instances to which the tag keys are added by page.
    * > The tag feature is suitable only for Anti-DDoS Pro.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeTagKeysRequest
    * @return DescribeTagKeysResponse
   */
  async describeTagKeys(request: DescribeTagKeysRequest): Promise<DescribeTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagKeysWithOptions(request, runtime);
  }

  /**
    * You can call the DescribeTagResources operation to query the information about the tags that are added to an Anti-DDoS Pro instance.
    * > Only Anti-DDoS Pro supports tags.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeTagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeTagResourcesResponse
   */
  async describeTagResourcesWithOptions(request: DescribeTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTagResources",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagResourcesResponse>(await this.callApi(params, req, runtime), new DescribeTagResourcesResponse({}));
  }

  /**
    * You can call the DescribeTagResources operation to query the information about the tags that are added to an Anti-DDoS Pro instance.
    * > Only Anti-DDoS Pro supports tags.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeTagResourcesRequest
    * @return DescribeTagResourcesResponse
   */
  async describeTagResources(request: DescribeTagResourcesRequest): Promise<DescribeTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagResourcesWithOptions(request, runtime);
  }

  async describeTotalAttackMaxFlowWithOptions(request: DescribeTotalAttackMaxFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTotalAttackMaxFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTotalAttackMaxFlow",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTotalAttackMaxFlowResponse>(await this.callApi(params, req, runtime), new DescribeTotalAttackMaxFlowResponse({}));
  }

  async describeTotalAttackMaxFlow(request: DescribeTotalAttackMaxFlowRequest): Promise<DescribeTotalAttackMaxFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTotalAttackMaxFlowWithOptions(request, runtime);
  }

  async describeUdpReflectWithOptions(request: DescribeUdpReflectRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUdpReflectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUdpReflect",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUdpReflectResponse>(await this.callApi(params, req, runtime), new DescribeUdpReflectResponse({}));
  }

  async describeUdpReflect(request: DescribeUdpReflectRequest): Promise<DescribeUdpReflectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUdpReflectWithOptions(request, runtime);
  }

  async describeUnBlackholeCountWithOptions(request: DescribeUnBlackholeCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUnBlackholeCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUnBlackholeCount",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUnBlackholeCountResponse>(await this.callApi(params, req, runtime), new DescribeUnBlackholeCountResponse({}));
  }

  async describeUnBlackholeCount(request: DescribeUnBlackholeCountRequest): Promise<DescribeUnBlackholeCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUnBlackholeCountWithOptions(request, runtime);
  }

  /**
    * > This operation is suitable only for Anti-DDoS Pro.
    *
    * @param request DescribeUnBlockCountRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeUnBlockCountResponse
   */
  async describeUnBlockCountWithOptions(request: DescribeUnBlockCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUnBlockCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUnBlockCount",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUnBlockCountResponse>(await this.callApi(params, req, runtime), new DescribeUnBlockCountResponse({}));
  }

  /**
    * > This operation is suitable only for Anti-DDoS Pro.
    *
    * @param request DescribeUnBlockCountRequest
    * @return DescribeUnBlockCountResponse
   */
  async describeUnBlockCount(request: DescribeUnBlockCountRequest): Promise<DescribeUnBlockCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUnBlockCountWithOptions(request, runtime);
  }

  /**
    * You can call the DescribeWebAccessLogDispatchStatus operation to check whether the log analysis feature is enabled for all domain names that are added to your Anti-DDoS Pro or Anti-DDoS Premium instance.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeWebAccessLogDispatchStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeWebAccessLogDispatchStatusResponse
   */
  async describeWebAccessLogDispatchStatusWithOptions(request: DescribeWebAccessLogDispatchStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebAccessLogDispatchStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebAccessLogDispatchStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebAccessLogDispatchStatusResponse>(await this.callApi(params, req, runtime), new DescribeWebAccessLogDispatchStatusResponse({}));
  }

  /**
    * You can call the DescribeWebAccessLogDispatchStatus operation to check whether the log analysis feature is enabled for all domain names that are added to your Anti-DDoS Pro or Anti-DDoS Premium instance.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeWebAccessLogDispatchStatusRequest
    * @return DescribeWebAccessLogDispatchStatusResponse
   */
  async describeWebAccessLogDispatchStatus(request: DescribeWebAccessLogDispatchStatusRequest): Promise<DescribeWebAccessLogDispatchStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebAccessLogDispatchStatusWithOptions(request, runtime);
  }

  async describeWebAccessLogEmptyCountWithOptions(request: DescribeWebAccessLogEmptyCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebAccessLogEmptyCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebAccessLogEmptyCount",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebAccessLogEmptyCountResponse>(await this.callApi(params, req, runtime), new DescribeWebAccessLogEmptyCountResponse({}));
  }

  async describeWebAccessLogEmptyCount(request: DescribeWebAccessLogEmptyCountRequest): Promise<DescribeWebAccessLogEmptyCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebAccessLogEmptyCountWithOptions(request, runtime);
  }

  async describeWebAccessLogStatusWithOptions(request: DescribeWebAccessLogStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebAccessLogStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebAccessLogStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebAccessLogStatusResponse>(await this.callApi(params, req, runtime), new DescribeWebAccessLogStatusResponse({}));
  }

  async describeWebAccessLogStatus(request: DescribeWebAccessLogStatusRequest): Promise<DescribeWebAccessLogStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebAccessLogStatusWithOptions(request, runtime);
  }

  async describeWebAccessModeWithOptions(request: DescribeWebAccessModeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebAccessModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domains)) {
      query["Domains"] = request.domains;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebAccessMode",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebAccessModeResponse>(await this.callApi(params, req, runtime), new DescribeWebAccessModeResponse({}));
  }

  async describeWebAccessMode(request: DescribeWebAccessModeRequest): Promise<DescribeWebAccessModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebAccessModeWithOptions(request, runtime);
  }

  async describeWebAreaBlockConfigsWithOptions(request: DescribeWebAreaBlockConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebAreaBlockConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebAreaBlockConfigs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebAreaBlockConfigsResponse>(await this.callApi(params, req, runtime), new DescribeWebAreaBlockConfigsResponse({}));
  }

  async describeWebAreaBlockConfigs(request: DescribeWebAreaBlockConfigsRequest): Promise<DescribeWebAreaBlockConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebAreaBlockConfigsWithOptions(request, runtime);
  }

  async describeWebCCRulesWithOptions(request: DescribeWebCCRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebCCRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebCCRules",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebCCRulesResponse>(await this.callApi(params, req, runtime), new DescribeWebCCRulesResponse({}));
  }

  async describeWebCCRules(request: DescribeWebCCRulesRequest): Promise<DescribeWebCCRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebCCRulesWithOptions(request, runtime);
  }

  /**
    * You can call the DescribeWebCacheConfigs operation to query the Static Page Caching configurations of websites. The configurations include cache modes and custom caching rules.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeWebCacheConfigsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeWebCacheConfigsResponse
   */
  async describeWebCacheConfigsWithOptions(request: DescribeWebCacheConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebCacheConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebCacheConfigs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebCacheConfigsResponse>(await this.callApi(params, req, runtime), new DescribeWebCacheConfigsResponse({}));
  }

  /**
    * You can call the DescribeWebCacheConfigs operation to query the Static Page Caching configurations of websites. The configurations include cache modes and custom caching rules.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeWebCacheConfigsRequest
    * @return DescribeWebCacheConfigsResponse
   */
  async describeWebCacheConfigs(request: DescribeWebCacheConfigsRequest): Promise<DescribeWebCacheConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebCacheConfigsWithOptions(request, runtime);
  }

  async describeWebCcProtectSwitchWithOptions(request: DescribeWebCcProtectSwitchRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebCcProtectSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebCcProtectSwitch",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebCcProtectSwitchResponse>(await this.callApi(params, req, runtime), new DescribeWebCcProtectSwitchResponse({}));
  }

  async describeWebCcProtectSwitch(request: DescribeWebCcProtectSwitchRequest): Promise<DescribeWebCcProtectSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebCcProtectSwitchWithOptions(request, runtime);
  }

  async describeWebCustomPortsWithOptions(request: DescribeWebCustomPortsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebCustomPortsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebCustomPorts",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebCustomPortsResponse>(await this.callApi(params, req, runtime), new DescribeWebCustomPortsResponse({}));
  }

  async describeWebCustomPorts(request: DescribeWebCustomPortsRequest): Promise<DescribeWebCustomPortsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebCustomPortsWithOptions(request, runtime);
  }

  async describeWebInstanceRelationsWithOptions(request: DescribeWebInstanceRelationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebInstanceRelationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebInstanceRelations",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebInstanceRelationsResponse>(await this.callApi(params, req, runtime), new DescribeWebInstanceRelationsResponse({}));
  }

  async describeWebInstanceRelations(request: DescribeWebInstanceRelationsRequest): Promise<DescribeWebInstanceRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebInstanceRelationsWithOptions(request, runtime);
  }

  async describeWebPreciseAccessRuleWithOptions(request: DescribeWebPreciseAccessRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebPreciseAccessRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebPreciseAccessRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebPreciseAccessRuleResponse>(await this.callApi(params, req, runtime), new DescribeWebPreciseAccessRuleResponse({}));
  }

  async describeWebPreciseAccessRule(request: DescribeWebPreciseAccessRuleRequest): Promise<DescribeWebPreciseAccessRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebPreciseAccessRuleWithOptions(request, runtime);
  }

  async describeWebReportTopIpWithOptions(request: DescribeWebReportTopIpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebReportTopIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.top)) {
      query["Top"] = request.top;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebReportTopIp",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebReportTopIpResponse>(await this.callApi(params, req, runtime), new DescribeWebReportTopIpResponse({}));
  }

  async describeWebReportTopIp(request: DescribeWebReportTopIpRequest): Promise<DescribeWebReportTopIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebReportTopIpWithOptions(request, runtime);
  }

  async describeWebRulesWithOptions(request: DescribeWebRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cname)) {
      query["Cname"] = request.cname;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryDomainPattern)) {
      query["QueryDomainPattern"] = request.queryDomainPattern;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebRules",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebRulesResponse>(await this.callApi(params, req, runtime), new DescribeWebRulesResponse({}));
  }

  async describeWebRules(request: DescribeWebRulesRequest): Promise<DescribeWebRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebRulesWithOptions(request, runtime);
  }

  async detachSceneDefenseObjectWithOptions(request: DetachSceneDefenseObjectRequest, runtime: $Util.RuntimeOptions): Promise<DetachSceneDefenseObjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!Util.isUnset(request.objects)) {
      query["Objects"] = request.objects;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachSceneDefenseObject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachSceneDefenseObjectResponse>(await this.callApi(params, req, runtime), new DetachSceneDefenseObjectResponse({}));
  }

  async detachSceneDefenseObject(request: DetachSceneDefenseObjectRequest): Promise<DetachSceneDefenseObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachSceneDefenseObjectWithOptions(request, runtime);
  }

  async disableSceneDefensePolicyWithOptions(request: DisableSceneDefensePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DisableSceneDefensePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableSceneDefensePolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableSceneDefensePolicyResponse>(await this.callApi(params, req, runtime), new DisableSceneDefensePolicyResponse({}));
  }

  async disableSceneDefensePolicy(request: DisableSceneDefensePolicyRequest): Promise<DisableSceneDefensePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableSceneDefensePolicyWithOptions(request, runtime);
  }

  async disableWebAccessLogConfigWithOptions(request: DisableWebAccessLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<DisableWebAccessLogConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableWebAccessLogConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableWebAccessLogConfigResponse>(await this.callApi(params, req, runtime), new DisableWebAccessLogConfigResponse({}));
  }

  async disableWebAccessLogConfig(request: DisableWebAccessLogConfigRequest): Promise<DisableWebAccessLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableWebAccessLogConfigWithOptions(request, runtime);
  }

  async disableWebCCWithOptions(request: DisableWebCCRequest, runtime: $Util.RuntimeOptions): Promise<DisableWebCCResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableWebCC",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableWebCCResponse>(await this.callApi(params, req, runtime), new DisableWebCCResponse({}));
  }

  async disableWebCC(request: DisableWebCCRequest): Promise<DisableWebCCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableWebCCWithOptions(request, runtime);
  }

  async disableWebCCRuleWithOptions(request: DisableWebCCRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableWebCCRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableWebCCRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableWebCCRuleResponse>(await this.callApi(params, req, runtime), new DisableWebCCRuleResponse({}));
  }

  async disableWebCCRule(request: DisableWebCCRuleRequest): Promise<DisableWebCCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableWebCCRuleWithOptions(request, runtime);
  }

  async emptyAutoCcBlacklistWithOptions(request: EmptyAutoCcBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<EmptyAutoCcBlacklistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EmptyAutoCcBlacklist",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EmptyAutoCcBlacklistResponse>(await this.callApi(params, req, runtime), new EmptyAutoCcBlacklistResponse({}));
  }

  async emptyAutoCcBlacklist(request: EmptyAutoCcBlacklistRequest): Promise<EmptyAutoCcBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.emptyAutoCcBlacklistWithOptions(request, runtime);
  }

  async emptyAutoCcWhitelistWithOptions(request: EmptyAutoCcWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<EmptyAutoCcWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EmptyAutoCcWhitelist",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EmptyAutoCcWhitelistResponse>(await this.callApi(params, req, runtime), new EmptyAutoCcWhitelistResponse({}));
  }

  async emptyAutoCcWhitelist(request: EmptyAutoCcWhitelistRequest): Promise<EmptyAutoCcWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.emptyAutoCcWhitelistWithOptions(request, runtime);
  }

  async emptySlsLogstoreWithOptions(request: EmptySlsLogstoreRequest, runtime: $Util.RuntimeOptions): Promise<EmptySlsLogstoreResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EmptySlsLogstore",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EmptySlsLogstoreResponse>(await this.callApi(params, req, runtime), new EmptySlsLogstoreResponse({}));
  }

  async emptySlsLogstore(request: EmptySlsLogstoreRequest): Promise<EmptySlsLogstoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.emptySlsLogstoreWithOptions(request, runtime);
  }

  async enableSceneDefensePolicyWithOptions(request: EnableSceneDefensePolicyRequest, runtime: $Util.RuntimeOptions): Promise<EnableSceneDefensePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableSceneDefensePolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableSceneDefensePolicyResponse>(await this.callApi(params, req, runtime), new EnableSceneDefensePolicyResponse({}));
  }

  async enableSceneDefensePolicy(request: EnableSceneDefensePolicyRequest): Promise<EnableSceneDefensePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSceneDefensePolicyWithOptions(request, runtime);
  }

  async enableWebAccessLogConfigWithOptions(request: EnableWebAccessLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<EnableWebAccessLogConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableWebAccessLogConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableWebAccessLogConfigResponse>(await this.callApi(params, req, runtime), new EnableWebAccessLogConfigResponse({}));
  }

  async enableWebAccessLogConfig(request: EnableWebAccessLogConfigRequest): Promise<EnableWebAccessLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableWebAccessLogConfigWithOptions(request, runtime);
  }

  async enableWebCCWithOptions(request: EnableWebCCRequest, runtime: $Util.RuntimeOptions): Promise<EnableWebCCResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableWebCC",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableWebCCResponse>(await this.callApi(params, req, runtime), new EnableWebCCResponse({}));
  }

  async enableWebCC(request: EnableWebCCRequest): Promise<EnableWebCCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableWebCCWithOptions(request, runtime);
  }

  async enableWebCCRuleWithOptions(request: EnableWebCCRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableWebCCRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableWebCCRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableWebCCRuleResponse>(await this.callApi(params, req, runtime), new EnableWebCCRuleResponse({}));
  }

  async enableWebCCRule(request: EnableWebCCRuleRequest): Promise<EnableWebCCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableWebCCRuleWithOptions(request, runtime);
  }

  /**
    * You can switch between the metering methods of the burstable clean bandwidth feature. The new metering method takes effect from 00:00 on the first day of the next month. You can change the metering method up to three times each calendar month. The most recent metering method that you select takes effect in the next month. You cannot change the metering method on the last day of each calendar month.
    *
    * @param request ModifyBizBandWidthModeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyBizBandWidthModeResponse
   */
  async modifyBizBandWidthModeWithOptions(request: ModifyBizBandWidthModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBizBandWidthModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBizBandWidthMode",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBizBandWidthModeResponse>(await this.callApi(params, req, runtime), new ModifyBizBandWidthModeResponse({}));
  }

  /**
    * You can switch between the metering methods of the burstable clean bandwidth feature. The new metering method takes effect from 00:00 on the first day of the next month. You can change the metering method up to three times each calendar month. The most recent metering method that you select takes effect in the next month. You cannot change the metering method on the last day of each calendar month.
    *
    * @param request ModifyBizBandWidthModeRequest
    * @return ModifyBizBandWidthModeResponse
   */
  async modifyBizBandWidthMode(request: ModifyBizBandWidthModeRequest): Promise<ModifyBizBandWidthModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBizBandWidthModeWithOptions(request, runtime);
  }

  async modifyBlackholeStatusWithOptions(request: ModifyBlackholeStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBlackholeStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.blackholeStatus)) {
      query["BlackholeStatus"] = request.blackholeStatus;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBlackholeStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBlackholeStatusResponse>(await this.callApi(params, req, runtime), new ModifyBlackholeStatusResponse({}));
  }

  async modifyBlackholeStatus(request: ModifyBlackholeStatusRequest): Promise<ModifyBlackholeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBlackholeStatusWithOptions(request, runtime);
  }

  /**
    * > This operation is suitable only for Anti-DDoS Pro.
    *
    * @param request ModifyBlockStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyBlockStatusResponse
   */
  async modifyBlockStatusWithOptions(request: ModifyBlockStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBlockStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lines)) {
      query["Lines"] = request.lines;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBlockStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBlockStatusResponse>(await this.callApi(params, req, runtime), new ModifyBlockStatusResponse({}));
  }

  /**
    * > This operation is suitable only for Anti-DDoS Pro.
    *
    * @param request ModifyBlockStatusRequest
    * @return ModifyBlockStatusResponse
   */
  async modifyBlockStatus(request: ModifyBlockStatusRequest): Promise<ModifyBlockStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBlockStatusWithOptions(request, runtime);
  }

  /**
    * > This operation is suitable only for Anti-DDoS Premium.
    *
    * @param request ModifyCnameReuseRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyCnameReuseResponse
   */
  async modifyCnameReuseWithOptions(request: ModifyCnameReuseRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCnameReuseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cname)) {
      query["Cname"] = request.cname;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyCnameReuse",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyCnameReuseResponse>(await this.callApi(params, req, runtime), new ModifyCnameReuseResponse({}));
  }

  /**
    * > This operation is suitable only for Anti-DDoS Premium.
    *
    * @param request ModifyCnameReuseRequest
    * @return ModifyCnameReuseResponse
   */
  async modifyCnameReuse(request: ModifyCnameReuseRequest): Promise<ModifyCnameReuseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCnameReuseWithOptions(request, runtime);
  }

  async modifyDomainResourceWithOptions(request: ModifyDomainResourceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDomainResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.httpsExt)) {
      query["HttpsExt"] = request.httpsExt;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.proxyTypes)) {
      query["ProxyTypes"] = request.proxyTypes;
    }

    if (!Util.isUnset(request.realServers)) {
      query["RealServers"] = request.realServers;
    }

    if (!Util.isUnset(request.rsType)) {
      query["RsType"] = request.rsType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDomainResource",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDomainResourceResponse>(await this.callApi(params, req, runtime), new ModifyDomainResourceResponse({}));
  }

  async modifyDomainResource(request: ModifyDomainResourceRequest): Promise<ModifyDomainResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDomainResourceWithOptions(request, runtime);
  }

  /**
    * > This operation is suitable only for Anti-DDoS Pro.
    *
    * @param request ModifyElasticBandWidthRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyElasticBandWidthResponse
   */
  async modifyElasticBandWidthWithOptions(request: ModifyElasticBandWidthRequest, runtime: $Util.RuntimeOptions): Promise<ModifyElasticBandWidthResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.elasticBandwidth)) {
      query["ElasticBandwidth"] = request.elasticBandwidth;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyElasticBandWidth",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyElasticBandWidthResponse>(await this.callApi(params, req, runtime), new ModifyElasticBandWidthResponse({}));
  }

  /**
    * > This operation is suitable only for Anti-DDoS Pro.
    *
    * @param request ModifyElasticBandWidthRequest
    * @return ModifyElasticBandWidthResponse
   */
  async modifyElasticBandWidth(request: ModifyElasticBandWidthRequest): Promise<ModifyElasticBandWidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyElasticBandWidthWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, make sure that you have fully understood the billing method and [pricing](https://help.aliyun.com/document_detail/283754.html) of the burstable clean bandwidth feature. After you call this operation for the first time, the modification immediately takes effect.
    *
    * @param request ModifyElasticBizBandWidthRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyElasticBizBandWidthResponse
   */
  async modifyElasticBizBandWidthWithOptions(request: ModifyElasticBizBandWidthRequest, runtime: $Util.RuntimeOptions): Promise<ModifyElasticBizBandWidthResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.elasticBizBandwidth)) {
      query["ElasticBizBandwidth"] = request.elasticBizBandwidth;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyElasticBizBandWidth",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyElasticBizBandWidthResponse>(await this.callApi(params, req, runtime), new ModifyElasticBizBandWidthResponse({}));
  }

  /**
    * Before you call this operation, make sure that you have fully understood the billing method and [pricing](https://help.aliyun.com/document_detail/283754.html) of the burstable clean bandwidth feature. After you call this operation for the first time, the modification immediately takes effect.
    *
    * @param request ModifyElasticBizBandWidthRequest
    * @return ModifyElasticBizBandWidthResponse
   */
  async modifyElasticBizBandWidth(request: ModifyElasticBizBandWidthRequest): Promise<ModifyElasticBizBandWidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyElasticBizBandWidthWithOptions(request, runtime);
  }

  async modifyElasticBizQpsWithOptions(request: ModifyElasticBizQpsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyElasticBizQpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.opsElasticQps)) {
      query["OpsElasticQps"] = request.opsElasticQps;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyElasticBizQps",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyElasticBizQpsResponse>(await this.callApi(params, req, runtime), new ModifyElasticBizQpsResponse({}));
  }

  async modifyElasticBizQps(request: ModifyElasticBizQpsRequest): Promise<ModifyElasticBizQpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyElasticBizQpsWithOptions(request, runtime);
  }

  async modifyFullLogTtlWithOptions(request: ModifyFullLogTtlRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFullLogTtlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFullLogTtl",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyFullLogTtlResponse>(await this.callApi(params, req, runtime), new ModifyFullLogTtlResponse({}));
  }

  async modifyFullLogTtl(request: ModifyFullLogTtlRequest): Promise<ModifyFullLogTtlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFullLogTtlWithOptions(request, runtime);
  }

  async modifyHeadersWithOptions(request: ModifyHeadersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHeadersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customHeaders)) {
      query["CustomHeaders"] = request.customHeaders;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHeaders",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHeadersResponse>(await this.callApi(params, req, runtime), new ModifyHeadersResponse({}));
  }

  async modifyHeaders(request: ModifyHeadersRequest): Promise<ModifyHeadersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHeadersWithOptions(request, runtime);
  }

  async modifyHealthCheckConfigWithOptions(request: ModifyHealthCheckConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHealthCheckConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.forwardProtocol)) {
      query["ForwardProtocol"] = request.forwardProtocol;
    }

    if (!Util.isUnset(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
    }

    if (!Util.isUnset(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHealthCheckConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHealthCheckConfigResponse>(await this.callApi(params, req, runtime), new ModifyHealthCheckConfigResponse({}));
  }

  async modifyHealthCheckConfig(request: ModifyHealthCheckConfigRequest): Promise<ModifyHealthCheckConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHealthCheckConfigWithOptions(request, runtime);
  }

  /**
    * > This operation is suitable only for Anti-DDoS Pro.
    *
    * @param request ModifyHttp2EnableRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyHttp2EnableResponse
   */
  async modifyHttp2EnableWithOptions(request: ModifyHttp2EnableRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHttp2EnableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHttp2Enable",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHttp2EnableResponse>(await this.callApi(params, req, runtime), new ModifyHttp2EnableResponse({}));
  }

  /**
    * > This operation is suitable only for Anti-DDoS Pro.
    *
    * @param request ModifyHttp2EnableRequest
    * @return ModifyHttp2EnableResponse
   */
  async modifyHttp2Enable(request: ModifyHttp2EnableRequest): Promise<ModifyHttp2EnableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHttp2EnableWithOptions(request, runtime);
  }

  async modifyInstanceRemarkWithOptions(request: ModifyInstanceRemarkRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceRemarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceRemark",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceRemarkResponse>(await this.callApi(params, req, runtime), new ModifyInstanceRemarkResponse({}));
  }

  async modifyInstanceRemark(request: ModifyInstanceRemarkRequest): Promise<ModifyInstanceRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceRemarkWithOptions(request, runtime);
  }

  async modifyNetworkRuleAttributeWithOptions(request: ModifyNetworkRuleAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNetworkRuleAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.forwardProtocol)) {
      query["ForwardProtocol"] = request.forwardProtocol;
    }

    if (!Util.isUnset(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyNetworkRuleAttribute",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyNetworkRuleAttributeResponse>(await this.callApi(params, req, runtime), new ModifyNetworkRuleAttributeResponse({}));
  }

  async modifyNetworkRuleAttribute(request: ModifyNetworkRuleAttributeRequest): Promise<ModifyNetworkRuleAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNetworkRuleAttributeWithOptions(request, runtime);
  }

  /**
    * This feature is available only for a website that supports HTTPS. If HTTPS is selected for Protocol, we recommend that you enable this feature.
    *
    * @param request ModifyOcspStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyOcspStatusResponse
   */
  async modifyOcspStatusWithOptions(request: ModifyOcspStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOcspStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyOcspStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyOcspStatusResponse>(await this.callApi(params, req, runtime), new ModifyOcspStatusResponse({}));
  }

  /**
    * This feature is available only for a website that supports HTTPS. If HTTPS is selected for Protocol, we recommend that you enable this feature.
    *
    * @param request ModifyOcspStatusRequest
    * @return ModifyOcspStatusResponse
   */
  async modifyOcspStatus(request: ModifyOcspStatusRequest): Promise<ModifyOcspStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOcspStatusWithOptions(request, runtime);
  }

  /**
    * You can call the ModifyPort operation by using Terraform. For more information about Terraform, see [What is Terraform?](~~95820~~).
    *
    * @param request ModifyPortRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyPortResponse
   */
  async modifyPortWithOptions(request: ModifyPortRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPortResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendPort)) {
      query["BackendPort"] = request.backendPort;
    }

    if (!Util.isUnset(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
    }

    if (!Util.isUnset(request.frontendProtocol)) {
      query["FrontendProtocol"] = request.frontendProtocol;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.realServers)) {
      query["RealServers"] = request.realServers;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPort",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPortResponse>(await this.callApi(params, req, runtime), new ModifyPortResponse({}));
  }

  /**
    * You can call the ModifyPort operation by using Terraform. For more information about Terraform, see [What is Terraform?](~~95820~~).
    *
    * @param request ModifyPortRequest
    * @return ModifyPortResponse
   */
  async modifyPort(request: ModifyPortRequest): Promise<ModifyPortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPortWithOptions(request, runtime);
  }

  async modifyPortAutoCcStatusWithOptions(request: ModifyPortAutoCcStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPortAutoCcStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.switch)) {
      query["Switch"] = request.switch;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPortAutoCcStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPortAutoCcStatusResponse>(await this.callApi(params, req, runtime), new ModifyPortAutoCcStatusResponse({}));
  }

  async modifyPortAutoCcStatus(request: ModifyPortAutoCcStatusRequest): Promise<ModifyPortAutoCcStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPortAutoCcStatusWithOptions(request, runtime);
  }

  async modifyQpsModeWithOptions(request: ModifyQpsModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyQpsModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyQpsMode",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyQpsModeResponse>(await this.callApi(params, req, runtime), new ModifyQpsModeResponse({}));
  }

  async modifyQpsMode(request: ModifyQpsModeRequest): Promise<ModifyQpsModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyQpsModeWithOptions(request, runtime);
  }

  async modifySceneDefensePolicyWithOptions(request: ModifySceneDefensePolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifySceneDefensePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySceneDefensePolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySceneDefensePolicyResponse>(await this.callApi(params, req, runtime), new ModifySceneDefensePolicyResponse({}));
  }

  async modifySceneDefensePolicy(request: ModifySceneDefensePolicyRequest): Promise<ModifySceneDefensePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySceneDefensePolicyWithOptions(request, runtime);
  }

  async modifySchedulerRuleWithOptions(request: ModifySchedulerRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifySchedulerRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.param)) {
      query["Param"] = request.param;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySchedulerRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySchedulerRuleResponse>(await this.callApi(params, req, runtime), new ModifySchedulerRuleResponse({}));
  }

  async modifySchedulerRule(request: ModifySchedulerRuleRequest): Promise<ModifySchedulerRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySchedulerRuleWithOptions(request, runtime);
  }

  async modifyTlsConfigWithOptions(request: ModifyTlsConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTlsConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTlsConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTlsConfigResponse>(await this.callApi(params, req, runtime), new ModifyTlsConfigResponse({}));
  }

  async modifyTlsConfig(request: ModifyTlsConfigRequest): Promise<ModifyTlsConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTlsConfigWithOptions(request, runtime);
  }

  async modifyWebAIProtectModeWithOptions(request: ModifyWebAIProtectModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebAIProtectModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebAIProtectMode",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebAIProtectModeResponse>(await this.callApi(params, req, runtime), new ModifyWebAIProtectModeResponse({}));
  }

  async modifyWebAIProtectMode(request: ModifyWebAIProtectModeRequest): Promise<ModifyWebAIProtectModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebAIProtectModeWithOptions(request, runtime);
  }

  async modifyWebAIProtectSwitchWithOptions(request: ModifyWebAIProtectSwitchRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebAIProtectSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebAIProtectSwitch",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebAIProtectSwitchResponse>(await this.callApi(params, req, runtime), new ModifyWebAIProtectSwitchResponse({}));
  }

  async modifyWebAIProtectSwitch(request: ModifyWebAIProtectSwitchRequest): Promise<ModifyWebAIProtectSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebAIProtectSwitchWithOptions(request, runtime);
  }

  async modifyWebAccessModeWithOptions(request: ModifyWebAccessModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebAccessModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessMode)) {
      query["AccessMode"] = request.accessMode;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebAccessMode",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebAccessModeResponse>(await this.callApi(params, req, runtime), new ModifyWebAccessModeResponse({}));
  }

  async modifyWebAccessMode(request: ModifyWebAccessModeRequest): Promise<ModifyWebAccessModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebAccessModeWithOptions(request, runtime);
  }

  async modifyWebAreaBlockWithOptions(request: ModifyWebAreaBlockRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebAreaBlockResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebAreaBlock",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebAreaBlockResponse>(await this.callApi(params, req, runtime), new ModifyWebAreaBlockResponse({}));
  }

  async modifyWebAreaBlock(request: ModifyWebAreaBlockRequest): Promise<ModifyWebAreaBlockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebAreaBlockWithOptions(request, runtime);
  }

  /**
    * You can call the ModifyWebAreaBlockSwitch operation to enable or disable the Location Blacklist (Domain Names) policy for a domain name.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ModifyWebAreaBlockSwitchRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyWebAreaBlockSwitchResponse
   */
  async modifyWebAreaBlockSwitchWithOptions(request: ModifyWebAreaBlockSwitchRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebAreaBlockSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebAreaBlockSwitch",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebAreaBlockSwitchResponse>(await this.callApi(params, req, runtime), new ModifyWebAreaBlockSwitchResponse({}));
  }

  /**
    * You can call the ModifyWebAreaBlockSwitch operation to enable or disable the Location Blacklist (Domain Names) policy for a domain name.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ModifyWebAreaBlockSwitchRequest
    * @return ModifyWebAreaBlockSwitchResponse
   */
  async modifyWebAreaBlockSwitch(request: ModifyWebAreaBlockSwitchRequest): Promise<ModifyWebAreaBlockSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebAreaBlockSwitchWithOptions(request, runtime);
  }

  async modifyWebCCRuleWithOptions(request: ModifyWebCCRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebCCRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.act)) {
      query["Act"] = request.act;
    }

    if (!Util.isUnset(request.count)) {
      query["Count"] = request.count;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!Util.isUnset(request.uri)) {
      query["Uri"] = request.uri;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebCCRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebCCRuleResponse>(await this.callApi(params, req, runtime), new ModifyWebCCRuleResponse({}));
  }

  async modifyWebCCRule(request: ModifyWebCCRuleRequest): Promise<ModifyWebCCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebCCRuleWithOptions(request, runtime);
  }

  async modifyWebCacheCustomRuleWithOptions(request: ModifyWebCacheCustomRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebCacheCustomRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebCacheCustomRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebCacheCustomRuleResponse>(await this.callApi(params, req, runtime), new ModifyWebCacheCustomRuleResponse({}));
  }

  async modifyWebCacheCustomRule(request: ModifyWebCacheCustomRuleRequest): Promise<ModifyWebCacheCustomRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebCacheCustomRuleWithOptions(request, runtime);
  }

  async modifyWebCacheModeWithOptions(request: ModifyWebCacheModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebCacheModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebCacheMode",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebCacheModeResponse>(await this.callApi(params, req, runtime), new ModifyWebCacheModeResponse({}));
  }

  async modifyWebCacheMode(request: ModifyWebCacheModeRequest): Promise<ModifyWebCacheModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebCacheModeWithOptions(request, runtime);
  }

  /**
    * You can call the ModifyWebCacheSwitch operation to enable or disable the Static Page Caching policy for a website.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ModifyWebCacheSwitchRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyWebCacheSwitchResponse
   */
  async modifyWebCacheSwitchWithOptions(request: ModifyWebCacheSwitchRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebCacheSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebCacheSwitch",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebCacheSwitchResponse>(await this.callApi(params, req, runtime), new ModifyWebCacheSwitchResponse({}));
  }

  /**
    * You can call the ModifyWebCacheSwitch operation to enable or disable the Static Page Caching policy for a website.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ModifyWebCacheSwitchRequest
    * @return ModifyWebCacheSwitchResponse
   */
  async modifyWebCacheSwitch(request: ModifyWebCacheSwitchRequest): Promise<ModifyWebCacheSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebCacheSwitchWithOptions(request, runtime);
  }

  async modifyWebIpSetSwitchWithOptions(request: ModifyWebIpSetSwitchRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebIpSetSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebIpSetSwitch",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebIpSetSwitchResponse>(await this.callApi(params, req, runtime), new ModifyWebIpSetSwitchResponse({}));
  }

  async modifyWebIpSetSwitch(request: ModifyWebIpSetSwitchRequest): Promise<ModifyWebIpSetSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebIpSetSwitchWithOptions(request, runtime);
  }

  async modifyWebPreciseAccessRuleWithOptions(request: ModifyWebPreciseAccessRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebPreciseAccessRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.expires)) {
      query["Expires"] = request.expires;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebPreciseAccessRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebPreciseAccessRuleResponse>(await this.callApi(params, req, runtime), new ModifyWebPreciseAccessRuleResponse({}));
  }

  async modifyWebPreciseAccessRule(request: ModifyWebPreciseAccessRuleRequest): Promise<ModifyWebPreciseAccessRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebPreciseAccessRuleWithOptions(request, runtime);
  }

  async modifyWebPreciseAccessSwitchWithOptions(request: ModifyWebPreciseAccessSwitchRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebPreciseAccessSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebPreciseAccessSwitch",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebPreciseAccessSwitchResponse>(await this.callApi(params, req, runtime), new ModifyWebPreciseAccessSwitchResponse({}));
  }

  async modifyWebPreciseAccessSwitch(request: ModifyWebPreciseAccessSwitchRequest): Promise<ModifyWebPreciseAccessSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebPreciseAccessSwitchWithOptions(request, runtime);
  }

  async modifyWebRuleWithOptions(request: ModifyWebRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.httpsExt)) {
      query["HttpsExt"] = request.httpsExt;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.proxyTypes)) {
      query["ProxyTypes"] = request.proxyTypes;
    }

    if (!Util.isUnset(request.realServers)) {
      query["RealServers"] = request.realServers;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.rsType)) {
      query["RsType"] = request.rsType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebRuleResponse>(await this.callApi(params, req, runtime), new ModifyWebRuleResponse({}));
  }

  async modifyWebRule(request: ModifyWebRuleRequest): Promise<ModifyWebRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebRuleWithOptions(request, runtime);
  }

  /**
    * The ID of the request, which is used to locate and troubleshoot issues.
    *
    * @param request ReleaseInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ReleaseInstanceResponse
   */
  async releaseInstanceWithOptions(request: ReleaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseInstanceResponse({}));
  }

  /**
    * The ID of the request, which is used to locate and troubleshoot issues.
    *
    * @param request ReleaseInstanceRequest
    * @return ReleaseInstanceResponse
   */
  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  /**
    * You can call the SwitchSchedulerRule operation to modify the resources to which service traffic is switched for a scheduling rule. For example, you can switch service traffic to an Anti-DDoS Pro or Anti-DDoS Premium instance for scrubbing or switch the service traffic back to the associated cloud resources.
    * Before you call this operation, you must have created a scheduling rule by calling the [CreateSchedulerRule](~~157479~~) operation.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request SwitchSchedulerRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SwitchSchedulerRuleResponse
   */
  async switchSchedulerRuleWithOptions(request: SwitchSchedulerRuleRequest, runtime: $Util.RuntimeOptions): Promise<SwitchSchedulerRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.switchData)) {
      query["SwitchData"] = request.switchData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchSchedulerRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchSchedulerRuleResponse>(await this.callApi(params, req, runtime), new SwitchSchedulerRuleResponse({}));
  }

  /**
    * You can call the SwitchSchedulerRule operation to modify the resources to which service traffic is switched for a scheduling rule. For example, you can switch service traffic to an Anti-DDoS Pro or Anti-DDoS Premium instance for scrubbing or switch the service traffic back to the associated cloud resources.
    * Before you call this operation, you must have created a scheduling rule by calling the [CreateSchedulerRule](~~157479~~) operation.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request SwitchSchedulerRuleRequest
    * @return SwitchSchedulerRuleResponse
   */
  async switchSchedulerRule(request: SwitchSchedulerRuleRequest): Promise<SwitchSchedulerRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchSchedulerRuleWithOptions(request, runtime);
  }

}
