// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddLayer7CCRuleRequest extends $tea.Model {
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

export class AddLayer7CCRuleResponseBody extends $tea.Model {
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

export class AddLayer7CCRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLayer7CCRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLayer7CCRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDomainSlsConfigRequest extends $tea.Model {
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

export class CloseDomainSlsConfigResponseBody extends $tea.Model {
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

export class CloseDomainSlsConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloseDomainSlsConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloseDomainSlsConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDomainAccessModeRequest extends $tea.Model {
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

export class ConfigDomainAccessModeResponseBody extends $tea.Model {
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

export class ConfigDomainAccessModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigDomainAccessModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigDomainAccessModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigHealthCheckRequest extends $tea.Model {
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

export class ConfigHealthCheckResponseBody extends $tea.Model {
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

export class ConfigHealthCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigHealthCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigHealthCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RuleRequest extends $tea.Model {
  sourceIp?: string;
  listeners?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      listeners: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RuleResponseBody extends $tea.Model {
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

export class ConfigLayer4RuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigLayer4RuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigLayer4RuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RuleAttributeRequest extends $tea.Model {
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

export class ConfigLayer4RuleAttributeResponseBody extends $tea.Model {
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

export class ConfigLayer4RuleAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigLayer4RuleAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigLayer4RuleAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7BlackWhiteListRequest extends $tea.Model {
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

export class ConfigLayer7BlackWhiteListResponseBody extends $tea.Model {
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

export class ConfigLayer7BlackWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigLayer7BlackWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigLayer7BlackWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7CCRuleRequest extends $tea.Model {
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

export class ConfigLayer7CCRuleResponseBody extends $tea.Model {
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

export class ConfigLayer7CCRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigLayer7CCRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigLayer7CCRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7CCTemplateRequest extends $tea.Model {
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

export class ConfigLayer7CCTemplateResponseBody extends $tea.Model {
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

export class ConfigLayer7CCTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigLayer7CCTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigLayer7CCTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7CertRequest extends $tea.Model {
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

export class ConfigLayer7CertResponseBody extends $tea.Model {
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

export class ConfigLayer7CertResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigLayer7CertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigLayer7CertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7RuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  proxyTypeList?: string;
  rsType?: number;
  proxyTypes?: string[];
  realServers?: string[];
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      proxyTypeList: 'ProxyTypeList',
      rsType: 'RsType',
      proxyTypes: 'ProxyTypes',
      realServers: 'RealServers',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      proxyTypeList: 'string',
      rsType: 'number',
      proxyTypes: { 'type': 'array', 'itemType': 'string' },
      realServers: { 'type': 'array', 'itemType': 'string' },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7RuleResponseBody extends $tea.Model {
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

export class ConfigLayer7RuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigLayer7RuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigLayer7RuleResponseBody,
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

export class CreateLayer4RuleRequest extends $tea.Model {
  sourceIp?: string;
  listeners?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      listeners: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayer4RuleResponseBody extends $tea.Model {
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

export class CreateLayer4RuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLayer4RuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLayer4RuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayer7RuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  rsType?: number;
  rules?: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      rsType: 'RsType',
      rules: 'Rules',
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
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayer7RuleResponseBody extends $tea.Model {
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

export class CreateLayer7RuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLayer7RuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLayer7RuleResponseBody,
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

export class DeleteLayer4RuleRequest extends $tea.Model {
  sourceIp?: string;
  listeners?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      listeners: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer4RuleResponseBody extends $tea.Model {
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

export class DeleteLayer4RuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLayer4RuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLayer4RuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer7CCRuleRequest extends $tea.Model {
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

export class DeleteLayer7CCRuleResponseBody extends $tea.Model {
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

export class DeleteLayer7CCRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLayer7CCRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLayer7CCRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer7RuleRequest extends $tea.Model {
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

export class DeleteLayer7RuleResponseBody extends $tea.Model {
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

export class DeleteLayer7RuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLayer7RuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLayer7RuleResponseBody,
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
  cidrList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cidrList: 'CidrList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cidrList: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeBatchSlsDispatchStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchSlsDispatchStatusResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  slsConfigStatusList?: DescribeBatchSlsDispatchStatusResponseBodySlsConfigStatusList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      slsConfigStatusList: 'SlsConfigStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      slsConfigStatusList: { 'type': 'array', 'itemType': DescribeBatchSlsDispatchStatusResponseBodySlsConfigStatusList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchSlsDispatchStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBatchSlsDispatchStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBatchSlsDispatchStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime?: number;
  endTime?: number;
  eip?: string;
  offset?: number;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      eip: 'Eip',
      offset: 'Offset',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      endTime: 'number',
      eip: 'string',
      offset: 'number',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsResponseBody extends $tea.Model {
  requestId?: string;
  events?: DescribeDDoSEventsResponseBodyEvents[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      events: 'Events',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      events: { 'type': 'array', 'itemType': DescribeDDoSEventsResponseBodyEvents },
      total: 'number',
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

export class DescribeDDoSTrafficRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime?: number;
  interval?: number;
  endTime?: number;
  eip?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      interval: 'Interval',
      endTime: 'EndTime',
      eip: 'Eip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      interval: 'number',
      endTime: 'number',
      eip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSTrafficResponseBody extends $tea.Model {
  defenseInBytes?: number;
  requestId?: string;
  sourceInBytes?: number;
  DDoSTrafficPoints?: DescribeDDoSTrafficResponseBodyDDoSTrafficPoints[];
  static names(): { [key: string]: string } {
    return {
      defenseInBytes: 'DefenseInBytes',
      requestId: 'RequestId',
      sourceInBytes: 'SourceInBytes',
      DDoSTrafficPoints: 'DDoSTrafficPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseInBytes: 'number',
      requestId: 'string',
      sourceInBytes: 'number',
      DDoSTrafficPoints: { 'type': 'array', 'itemType': DescribeDDoSTrafficResponseBodyDDoSTrafficPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSTrafficResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDDoSTrafficResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDDoSTrafficResponseBody,
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

export class DescribeDomainAccessModeRequest extends $tea.Model {
  sourceIp?: string;
  domainList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      domainList: 'DomainList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      domainList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAccessModeResponseBody extends $tea.Model {
  requestId?: string;
  domainModeList?: DescribeDomainAccessModeResponseBodyDomainModeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainModeList: 'DomainModeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainModeList: { 'type': 'array', 'itemType': DescribeDomainAccessModeResponseBodyDomainModeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAccessModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainAccessModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainAccessModeResponseBody,
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
  offset?: number;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      domain: 'Domain',
      offset: 'Offset',
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
      offset: 'number',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackEventsResponseBody extends $tea.Model {
  requestId?: string;
  events?: DescribeDomainAttackEventsResponseBodyEvents[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      events: 'Events',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      events: { 'type': 'array', 'itemType': DescribeDomainAttackEventsResponseBodyEvents },
      total: 'number',
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

export class DescribeDomainQpsRequest extends $tea.Model {
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

export class DescribeDomainQpsResponseBody extends $tea.Model {
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

export class DescribeDomainQpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainQpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainQpsResponseBody,
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
  resourceGroupId?: string;
  domain?: string;
  queryDomainPattern?: string;
  offset?: number;
  pageSize?: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      queryDomainPattern: 'QueryDomainPattern',
      offset: 'Offset',
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
      offset: 'number',
      pageSize: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBody extends $tea.Model {
  domains?: DescribeDomainsResponseBodyDomains[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomains },
      requestId: 'string',
      total: 'number',
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

export class DescribeDomainSlsStatusRequest extends $tea.Model {
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

export class DescribeDomainSlsStatusResponseBody extends $tea.Model {
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

export class DescribeDomainSlsStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainSlsStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainSlsStatusResponseBody,
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
  listeners?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      listeners: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseBody extends $tea.Model {
  listeners?: DescribeHealthCheckListResponseBodyListeners[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': DescribeHealthCheckListResponseBodyListeners },
      requestId: 'string',
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

export class DescribeHealthCheckStatusListRequest extends $tea.Model {
  sourceIp?: string;
  listeners?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      listeners: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusListResponseBody extends $tea.Model {
  healthCheckStatusList?: DescribeHealthCheckStatusListResponseBodyHealthCheckStatusList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckStatusList: 'HealthCheckStatusList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckStatusList: { 'type': 'array', 'itemType': DescribeHealthCheckStatusListResponseBodyHealthCheckStatusList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHealthCheckStatusListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHealthCheckStatusListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsRequest extends $tea.Model {
  sourceIp?: string;
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceIds: 'string',
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

export class DescribeInstancesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  instanceIds?: string;
  pageNo?: string;
  pageSize?: string;
  ip?: string;
  remark?: string;
  edition?: number;
  enabled?: number;
  expireStartTime?: number;
  expireEndTime?: number;
  status?: number[];
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      instanceIds: 'InstanceIds',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      ip: 'Ip',
      remark: 'Remark',
      edition: 'Edition',
      enabled: 'Enabled',
      expireStartTime: 'ExpireStartTime',
      expireEndTime: 'ExpireEndTime',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      instanceIds: 'string',
      pageNo: 'string',
      pageSize: 'string',
      ip: 'string',
      remark: 'string',
      edition: 'number',
      enabled: 'number',
      expireStartTime: 'number',
      expireEndTime: 'number',
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
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      requestId: 'string',
      total: 'number',
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
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceIds: 'string',
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
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceIds: 'string',
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

export class DescribeIpTrafficRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime?: number;
  interval?: number;
  endTime?: number;
  eip?: string;
  port?: number;
  queryProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      interval: 'Interval',
      endTime: 'EndTime',
      eip: 'Eip',
      port: 'Port',
      queryProtocol: 'QueryProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      interval: 'number',
      endTime: 'number',
      eip: 'string',
      port: 'number',
      queryProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpTrafficResponseBody extends $tea.Model {
  maxOutBps?: number;
  requestId?: string;
  avgInBps?: number;
  maxInBps?: number;
  avgOutBps?: number;
  ipTrafficPoints?: DescribeIpTrafficResponseBodyIpTrafficPoints[];
  static names(): { [key: string]: string } {
    return {
      maxOutBps: 'MaxOutBps',
      requestId: 'RequestId',
      avgInBps: 'AvgInBps',
      maxInBps: 'MaxInBps',
      avgOutBps: 'AvgOutBps',
      ipTrafficPoints: 'IpTrafficPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxOutBps: 'number',
      requestId: 'string',
      avgInBps: 'number',
      maxInBps: 'number',
      avgOutBps: 'number',
      ipTrafficPoints: { 'type': 'array', 'itemType': DescribeIpTrafficResponseBodyIpTrafficPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpTrafficResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIpTrafficResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIpTrafficResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesRequest extends $tea.Model {
  sourceIp?: string;
  listeners?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      listeners: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBody extends $tea.Model {
  listeners?: DescribeLayer4RuleAttributesResponseBodyListeners[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': DescribeLayer4RuleAttributesResponseBodyListeners },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLayer4RuleAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLayer4RuleAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  forwardProtocol?: string;
  frontendPort?: number;
  offset?: number;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      offset: 'Offset',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      forwardProtocol: 'string',
      frontendPort: 'number',
      offset: 'number',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesResponseBody extends $tea.Model {
  listeners?: DescribeLayer4RulesResponseBodyListeners[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': DescribeLayer4RulesResponseBodyListeners },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLayer4RulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLayer4RulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer7CCRulesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  offset?: number;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      offset: 'Offset',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      offset: 'number',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer7CCRulesResponseBody extends $tea.Model {
  layer7CCRules?: DescribeLayer7CCRulesResponseBodyLayer7CCRules[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      layer7CCRules: 'Layer7CCRules',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layer7CCRules: { 'type': 'array', 'itemType': DescribeLayer7CCRulesResponseBodyLayer7CCRules },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer7CCRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLayer7CCRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLayer7CCRulesResponseBody,
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

export class DescribeOpEntitiesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  entityType?: number;
  entityObject?: string;
  startTime?: number;
  endTime?: number;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      entityType: 'EntityType',
      entityObject: 'EntityObject',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNo: 'PageNo',
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
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  opEntities?: DescribeOpEntitiesResponseBodyOpEntities[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      opEntities: 'OpEntities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
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

export class DescribeSimpleDomainsRequest extends $tea.Model {
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

export class DescribeSimpleDomainsResponseBody extends $tea.Model {
  requestId?: string;
  domainList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainList: 'DomainList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimpleDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSimpleDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSimpleDomainsResponseBody,
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

export class DescribeSlsEmptyCountRequest extends $tea.Model {
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

export class DescribeSlsEmptyCountResponseBody extends $tea.Model {
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

export class DescribeSlsEmptyCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSlsEmptyCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSlsEmptyCountResponseBody,
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

export class DescribleCertListRequest extends $tea.Model {
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

export class DescribleCertListResponseBody extends $tea.Model {
  certList?: DescribleCertListResponseBodyCertList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: { 'type': 'array', 'itemType': DescribleCertListResponseBodyCertList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleCertListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribleCertListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribleCertListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleLayer7InstanceRelationsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domainList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domainList: 'DomainList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domainList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleLayer7InstanceRelationsResponseBody extends $tea.Model {
  requestId?: string;
  layer7InstanceRelations?: DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      layer7InstanceRelations: 'Layer7InstanceRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      layer7InstanceRelations: { 'type': 'array', 'itemType': DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleLayer7InstanceRelationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribleLayer7InstanceRelationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribleLayer7InstanceRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLayer7CCRequest extends $tea.Model {
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

export class DisableLayer7CCResponseBody extends $tea.Model {
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

export class DisableLayer7CCResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableLayer7CCResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableLayer7CCResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLayer7CCRuleRequest extends $tea.Model {
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

export class DisableLayer7CCRuleResponseBody extends $tea.Model {
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

export class DisableLayer7CCRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableLayer7CCRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableLayer7CCRuleResponseBody,
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

export class EnableLayer7CCRequest extends $tea.Model {
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

export class EnableLayer7CCResponseBody extends $tea.Model {
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

export class EnableLayer7CCResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableLayer7CCResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableLayer7CCResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLayer7CCRuleRequest extends $tea.Model {
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

export class EnableLayer7CCRuleResponseBody extends $tea.Model {
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

export class EnableLayer7CCRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableLayer7CCRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableLayer7CCRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTaskRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTaskResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  asyncTasks?: ListAsyncTaskResponseBodyAsyncTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      asyncTasks: 'AsyncTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      asyncTasks: { 'type': 'array', 'itemType': ListAsyncTaskResponseBodyAsyncTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAsyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAsyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayer7CustomPortsRequest extends $tea.Model {
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

export class ListLayer7CustomPortsResponseBody extends $tea.Model {
  requestId?: string;
  layer7CustomPorts?: ListLayer7CustomPortsResponseBodyLayer7CustomPorts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      layer7CustomPorts: 'Layer7CustomPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      layer7CustomPorts: { 'type': 'array', 'itemType': ListLayer7CustomPortsResponseBodyLayer7CustomPorts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayer7CustomPortsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLayer7CustomPortsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLayer7CustomPortsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  sourceIp?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  currentPage?: number;
  tagKeys?: ListTagKeysResponseBodyTagKeys[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      tagKeys: { 'type': 'array', 'itemType': ListTagKeysResponseBodyTagKeys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  sourceIp?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
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
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListValueAddedRequest extends $tea.Model {
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

export class ListValueAddedResponseBody extends $tea.Model {
  requestId?: string;
  valueAddedList?: ListValueAddedResponseBodyValueAddedList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      valueAddedList: 'ValueAddedList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      valueAddedList: { 'type': 'array', 'itemType': ListValueAddedResponseBodyValueAddedList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListValueAddedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListValueAddedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListValueAddedResponseBody,
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

export class OpenDomainSlsConfigRequest extends $tea.Model {
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

export class OpenDomainSlsConfigResponseBody extends $tea.Model {
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

export class OpenDomainSlsConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenDomainSlsConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenDomainSlsConfigResponseBody,
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

export class ReleaseValueAddedRequest extends $tea.Model {
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

export class ReleaseValueAddedResponseBody extends $tea.Model {
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

export class ReleaseValueAddedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseValueAddedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseValueAddedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  sourceIp?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
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

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  sourceIp?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
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
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
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

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchSlsDispatchStatusResponseBodySlsConfigStatusList extends $tea.Model {
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

export class DescribeDDoSEventsResponseBodyEvents extends $tea.Model {
  status?: string;
  endTime?: number;
  startTime?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      endTime: 'EndTime',
      startTime: 'StartTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      endTime: 'number',
      startTime: 'number',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSTrafficResponseBodyDDoSTrafficPoints extends $tea.Model {
  time?: number;
  sourceMaxInBps?: number;
  defenseMaxInBps?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      sourceMaxInBps: 'SourceMaxInBps',
      defenseMaxInBps: 'DefenseMaxInBps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      sourceMaxInBps: 'number',
      defenseMaxInBps: 'number',
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

export class DescribeDomainAccessModeResponseBodyDomainModeList extends $tea.Model {
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

export class DescribeDomainAttackEventsResponseBodyEvents extends $tea.Model {
  endTime?: number;
  startTime?: number;
  maxQps?: number;
  duration?: number;
  finished?: boolean;
  blockCount?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      maxQps: 'MaxQps',
      duration: 'Duration',
      finished: 'Finished',
      blockCount: 'BlockCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      maxQps: 'number',
      duration: 'number',
      finished: 'boolean',
      blockCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsProxyTypeList extends $tea.Model {
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

export class DescribeDomainsResponseBodyDomainsRealServers extends $tea.Model {
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

export class DescribeDomainsResponseBodyDomains extends $tea.Model {
  domain?: string;
  proxyTypeList?: DescribeDomainsResponseBodyDomainsProxyTypeList[];
  whiteList?: string[];
  blackList?: string[];
  realServers?: DescribeDomainsResponseBodyDomainsRealServers[];
  sslProtocols?: string;
  ccTemplate?: string;
  ccEnabled?: boolean;
  sslCiphers?: string;
  ccRuleEnabled?: boolean;
  certName?: string;
  cname?: string;
  http2Enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      proxyTypeList: 'ProxyTypeList',
      whiteList: 'WhiteList',
      blackList: 'BlackList',
      realServers: 'RealServers',
      sslProtocols: 'SslProtocols',
      ccTemplate: 'CcTemplate',
      ccEnabled: 'CcEnabled',
      sslCiphers: 'SslCiphers',
      ccRuleEnabled: 'CcRuleEnabled',
      certName: 'CertName',
      cname: 'Cname',
      http2Enable: 'Http2Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      proxyTypeList: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsProxyTypeList },
      whiteList: { 'type': 'array', 'itemType': 'string' },
      blackList: { 'type': 'array', 'itemType': 'string' },
      realServers: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsRealServers },
      sslProtocols: 'string',
      ccTemplate: 'string',
      ccEnabled: 'boolean',
      sslCiphers: 'string',
      ccRuleEnabled: 'boolean',
      certName: 'string',
      cname: 'string',
      http2Enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseBodyListenersHealthCheck extends $tea.Model {
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

export class DescribeHealthCheckListResponseBodyListeners extends $tea.Model {
  frontendPort?: number;
  protocol?: string;
  instanceId?: string;
  healthCheck?: DescribeHealthCheckListResponseBodyListenersHealthCheck;
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
      healthCheck: DescribeHealthCheckListResponseBodyListenersHealthCheck,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusListResponseBodyHealthCheckStatusListRealServerStatusList extends $tea.Model {
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

export class DescribeHealthCheckStatusListResponseBodyHealthCheckStatusList extends $tea.Model {
  status?: string;
  frontendPort?: number;
  protocol?: string;
  instanceId?: string;
  realServerStatusList?: DescribeHealthCheckStatusListResponseBodyHealthCheckStatusListRealServerStatusList[];
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
      realServerStatusList: { 'type': 'array', 'itemType': DescribeHealthCheckStatusListResponseBodyHealthCheckStatusListRealServerStatusList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfoList extends $tea.Model {
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
  eipInfoList?: DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfoList[];
  line?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      eipInfoList: 'EipInfoList',
      line: 'Line',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipInfoList: { 'type': 'array', 'itemType': DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfoList },
      line: 'string',
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
  remark?: string;
  expireTime?: number;
  enabled?: number;
  gmtCreate?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      debtStatus: 'DebtStatus',
      edition: 'Edition',
      remark: 'Remark',
      expireTime: 'ExpireTime',
      enabled: 'Enabled',
      gmtCreate: 'GmtCreate',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      debtStatus: 'number',
      edition: 'number',
      remark: 'string',
      expireTime: 'number',
      enabled: 'number',
      gmtCreate: 'number',
      instanceId: 'string',
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

export class DescribeIpTrafficResponseBodyIpTrafficPoints extends $tea.Model {
  actConns?: number;
  time?: number;
  inactConns?: number;
  maxInbps?: number;
  maxOutbps?: number;
  cps?: number;
  static names(): { [key: string]: string } {
    return {
      actConns: 'ActConns',
      time: 'Time',
      inactConns: 'InactConns',
      maxInbps: 'MaxInbps',
      maxOutbps: 'MaxOutbps',
      cps: 'Cps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actConns: 'number',
      time: 'number',
      inactConns: 'number',
      maxInbps: 'number',
      maxOutbps: 'number',
      cps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBodyListenersConfigCcSblack extends $tea.Model {
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

export class DescribeLayer4RuleAttributesResponseBodyListenersConfigCc extends $tea.Model {
  sblack?: DescribeLayer4RuleAttributesResponseBodyListenersConfigCcSblack[];
  static names(): { [key: string]: string } {
    return {
      sblack: 'Sblack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sblack: { 'type': 'array', 'itemType': DescribeLayer4RuleAttributesResponseBodyListenersConfigCcSblack },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBodyListenersConfigPayloadLen extends $tea.Model {
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

export class DescribeLayer4RuleAttributesResponseBodyListenersConfigSla extends $tea.Model {
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

export class DescribeLayer4RuleAttributesResponseBodyListenersConfigSlimit extends $tea.Model {
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

export class DescribeLayer4RuleAttributesResponseBodyListenersConfig extends $tea.Model {
  cc?: DescribeLayer4RuleAttributesResponseBodyListenersConfigCc;
  payloadLen?: DescribeLayer4RuleAttributesResponseBodyListenersConfigPayloadLen;
  persistenceTimeout?: number;
  sla?: DescribeLayer4RuleAttributesResponseBodyListenersConfigSla;
  slimit?: DescribeLayer4RuleAttributesResponseBodyListenersConfigSlimit;
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
      cc: DescribeLayer4RuleAttributesResponseBodyListenersConfigCc,
      payloadLen: DescribeLayer4RuleAttributesResponseBodyListenersConfigPayloadLen,
      persistenceTimeout: 'number',
      sla: DescribeLayer4RuleAttributesResponseBodyListenersConfigSla,
      slimit: DescribeLayer4RuleAttributesResponseBodyListenersConfigSlimit,
      nodataConn: 'string',
      synproxy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBodyListeners extends $tea.Model {
  frontendPort?: number;
  protocol?: string;
  instanceId?: string;
  config?: DescribeLayer4RuleAttributesResponseBodyListenersConfig;
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
      config: DescribeLayer4RuleAttributesResponseBodyListenersConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesResponseBodyListeners extends $tea.Model {
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

export class DescribeLayer7CCRulesResponseBodyLayer7CCRules extends $tea.Model {
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

export class DescribleCertListResponseBodyCertList extends $tea.Model {
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

export class DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelationsInstanceDetails extends $tea.Model {
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

export class DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelations extends $tea.Model {
  domain?: string;
  instanceDetails?: DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelationsInstanceDetails[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceDetails: 'InstanceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceDetails: { 'type': 'array', 'itemType': DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelationsInstanceDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTaskResponseBodyAsyncTasks extends $tea.Model {
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

export class ListLayer7CustomPortsResponseBodyLayer7CustomPorts extends $tea.Model {
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

export class ListTagKeysResponseBodyTagKeys extends $tea.Model {
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

export class ListTagResourcesRequestTag extends $tea.Model {
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListValueAddedResponseBodyValueAddedList extends $tea.Model {
  status?: number;
  expireTime?: number;
  logSize?: number;
  gmtCreate?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      expireTime: 'ExpireTime',
      logSize: 'LogSize',
      gmtCreate: 'GmtCreate',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      expireTime: 'number',
      logSize: 'number',
      gmtCreate: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
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

  async addLayer7CCRuleWithOptions(request: AddLayer7CCRuleRequest, runtime: $Util.RuntimeOptions): Promise<AddLayer7CCRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddLayer7CCRuleResponse>(await this.doRPCRequest("AddLayer7CCRule", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new AddLayer7CCRuleResponse({}));
  }

  async addLayer7CCRule(request: AddLayer7CCRuleRequest): Promise<AddLayer7CCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLayer7CCRuleWithOptions(request, runtime);
  }

  async closeDomainSlsConfigWithOptions(request: CloseDomainSlsConfigRequest, runtime: $Util.RuntimeOptions): Promise<CloseDomainSlsConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CloseDomainSlsConfigResponse>(await this.doRPCRequest("CloseDomainSlsConfig", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new CloseDomainSlsConfigResponse({}));
  }

  async closeDomainSlsConfig(request: CloseDomainSlsConfigRequest): Promise<CloseDomainSlsConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeDomainSlsConfigWithOptions(request, runtime);
  }

  async configDomainAccessModeWithOptions(request: ConfigDomainAccessModeRequest, runtime: $Util.RuntimeOptions): Promise<ConfigDomainAccessModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigDomainAccessModeResponse>(await this.doRPCRequest("ConfigDomainAccessMode", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigDomainAccessModeResponse({}));
  }

  async configDomainAccessMode(request: ConfigDomainAccessModeRequest): Promise<ConfigDomainAccessModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configDomainAccessModeWithOptions(request, runtime);
  }

  async configHealthCheckWithOptions(request: ConfigHealthCheckRequest, runtime: $Util.RuntimeOptions): Promise<ConfigHealthCheckResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigHealthCheckResponse>(await this.doRPCRequest("ConfigHealthCheck", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigHealthCheckResponse({}));
  }

  async configHealthCheck(request: ConfigHealthCheckRequest): Promise<ConfigHealthCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configHealthCheckWithOptions(request, runtime);
  }

  async configLayer4RuleWithOptions(request: ConfigLayer4RuleRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer4RuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigLayer4RuleResponse>(await this.doRPCRequest("ConfigLayer4Rule", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigLayer4RuleResponse({}));
  }

  async configLayer4Rule(request: ConfigLayer4RuleRequest): Promise<ConfigLayer4RuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer4RuleWithOptions(request, runtime);
  }

  async configLayer4RuleAttributeWithOptions(request: ConfigLayer4RuleAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer4RuleAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigLayer4RuleAttributeResponse>(await this.doRPCRequest("ConfigLayer4RuleAttribute", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigLayer4RuleAttributeResponse({}));
  }

  async configLayer4RuleAttribute(request: ConfigLayer4RuleAttributeRequest): Promise<ConfigLayer4RuleAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer4RuleAttributeWithOptions(request, runtime);
  }

  async configLayer7BlackWhiteListWithOptions(request: ConfigLayer7BlackWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer7BlackWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigLayer7BlackWhiteListResponse>(await this.doRPCRequest("ConfigLayer7BlackWhiteList", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigLayer7BlackWhiteListResponse({}));
  }

  async configLayer7BlackWhiteList(request: ConfigLayer7BlackWhiteListRequest): Promise<ConfigLayer7BlackWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer7BlackWhiteListWithOptions(request, runtime);
  }

  async configLayer7CCRuleWithOptions(request: ConfigLayer7CCRuleRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer7CCRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigLayer7CCRuleResponse>(await this.doRPCRequest("ConfigLayer7CCRule", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigLayer7CCRuleResponse({}));
  }

  async configLayer7CCRule(request: ConfigLayer7CCRuleRequest): Promise<ConfigLayer7CCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer7CCRuleWithOptions(request, runtime);
  }

  async configLayer7CCTemplateWithOptions(request: ConfigLayer7CCTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer7CCTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigLayer7CCTemplateResponse>(await this.doRPCRequest("ConfigLayer7CCTemplate", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigLayer7CCTemplateResponse({}));
  }

  async configLayer7CCTemplate(request: ConfigLayer7CCTemplateRequest): Promise<ConfigLayer7CCTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer7CCTemplateWithOptions(request, runtime);
  }

  async configLayer7CertWithOptions(request: ConfigLayer7CertRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer7CertResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigLayer7CertResponse>(await this.doRPCRequest("ConfigLayer7Cert", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigLayer7CertResponse({}));
  }

  async configLayer7Cert(request: ConfigLayer7CertRequest): Promise<ConfigLayer7CertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer7CertWithOptions(request, runtime);
  }

  async configLayer7RuleWithOptions(request: ConfigLayer7RuleRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer7RuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigLayer7RuleResponse>(await this.doRPCRequest("ConfigLayer7Rule", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigLayer7RuleResponse({}));
  }

  async configLayer7Rule(request: ConfigLayer7RuleRequest): Promise<ConfigLayer7RuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer7RuleWithOptions(request, runtime);
  }

  async createAsyncTaskWithOptions(request: CreateAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateAsyncTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAsyncTaskResponse>(await this.doRPCRequest("CreateAsyncTask", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAsyncTaskResponse({}));
  }

  async createAsyncTask(request: CreateAsyncTaskRequest): Promise<CreateAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAsyncTaskWithOptions(request, runtime);
  }

  async createLayer4RuleWithOptions(request: CreateLayer4RuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateLayer4RuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLayer4RuleResponse>(await this.doRPCRequest("CreateLayer4Rule", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLayer4RuleResponse({}));
  }

  async createLayer4Rule(request: CreateLayer4RuleRequest): Promise<CreateLayer4RuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLayer4RuleWithOptions(request, runtime);
  }

  async createLayer7RuleWithOptions(request: CreateLayer7RuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateLayer7RuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLayer7RuleResponse>(await this.doRPCRequest("CreateLayer7Rule", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLayer7RuleResponse({}));
  }

  async createLayer7Rule(request: CreateLayer7RuleRequest): Promise<CreateLayer7RuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLayer7RuleWithOptions(request, runtime);
  }

  async deleteAsyncTaskWithOptions(request: DeleteAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAsyncTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAsyncTaskResponse>(await this.doRPCRequest("DeleteAsyncTask", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAsyncTaskResponse({}));
  }

  async deleteAsyncTask(request: DeleteAsyncTaskRequest): Promise<DeleteAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAsyncTaskWithOptions(request, runtime);
  }

  async deleteLayer4RuleWithOptions(request: DeleteLayer4RuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLayer4RuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLayer4RuleResponse>(await this.doRPCRequest("DeleteLayer4Rule", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLayer4RuleResponse({}));
  }

  async deleteLayer4Rule(request: DeleteLayer4RuleRequest): Promise<DeleteLayer4RuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLayer4RuleWithOptions(request, runtime);
  }

  async deleteLayer7CCRuleWithOptions(request: DeleteLayer7CCRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLayer7CCRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLayer7CCRuleResponse>(await this.doRPCRequest("DeleteLayer7CCRule", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLayer7CCRuleResponse({}));
  }

  async deleteLayer7CCRule(request: DeleteLayer7CCRuleRequest): Promise<DeleteLayer7CCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLayer7CCRuleWithOptions(request, runtime);
  }

  async deleteLayer7RuleWithOptions(request: DeleteLayer7RuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLayer7RuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLayer7RuleResponse>(await this.doRPCRequest("DeleteLayer7Rule", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLayer7RuleResponse({}));
  }

  async deleteLayer7Rule(request: DeleteLayer7RuleRequest): Promise<DeleteLayer7RuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLayer7RuleWithOptions(request, runtime);
  }

  async describeBackSourceCidrWithOptions(request: DescribeBackSourceCidrRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackSourceCidrResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackSourceCidrResponse>(await this.doRPCRequest("DescribeBackSourceCidr", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackSourceCidrResponse({}));
  }

  async describeBackSourceCidr(request: DescribeBackSourceCidrRequest): Promise<DescribeBackSourceCidrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackSourceCidrWithOptions(request, runtime);
  }

  async describeBatchSlsDispatchStatusWithOptions(request: DescribeBatchSlsDispatchStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBatchSlsDispatchStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBatchSlsDispatchStatusResponse>(await this.doRPCRequest("DescribeBatchSlsDispatchStatus", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBatchSlsDispatchStatusResponse({}));
  }

  async describeBatchSlsDispatchStatus(request: DescribeBatchSlsDispatchStatusRequest): Promise<DescribeBatchSlsDispatchStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBatchSlsDispatchStatusWithOptions(request, runtime);
  }

  async describeDDoSEventsWithOptions(request: DescribeDDoSEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDoSEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDDoSEventsResponse>(await this.doRPCRequest("DescribeDDoSEvents", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDDoSEventsResponse({}));
  }

  async describeDDoSEvents(request: DescribeDDoSEventsRequest): Promise<DescribeDDoSEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDoSEventsWithOptions(request, runtime);
  }

  async describeDDoSTrafficWithOptions(request: DescribeDDoSTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDoSTrafficResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDDoSTrafficResponse>(await this.doRPCRequest("DescribeDDoSTraffic", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDDoSTrafficResponse({}));
  }

  async describeDDoSTraffic(request: DescribeDDoSTrafficRequest): Promise<DescribeDDoSTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDoSTrafficWithOptions(request, runtime);
  }

  async describeDefenseCountStatisticsWithOptions(request: DescribeDefenseCountStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseCountStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDefenseCountStatisticsResponse>(await this.doRPCRequest("DescribeDefenseCountStatistics", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDefenseCountStatisticsResponse({}));
  }

  async describeDefenseCountStatistics(request: DescribeDefenseCountStatisticsRequest): Promise<DescribeDefenseCountStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseCountStatisticsWithOptions(request, runtime);
  }

  async describeDomainAccessModeWithOptions(request: DescribeDomainAccessModeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainAccessModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainAccessModeResponse>(await this.doRPCRequest("DescribeDomainAccessMode", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainAccessModeResponse({}));
  }

  async describeDomainAccessMode(request: DescribeDomainAccessModeRequest): Promise<DescribeDomainAccessModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainAccessModeWithOptions(request, runtime);
  }

  async describeDomainAttackEventsWithOptions(request: DescribeDomainAttackEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainAttackEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainAttackEventsResponse>(await this.doRPCRequest("DescribeDomainAttackEvents", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainAttackEventsResponse({}));
  }

  async describeDomainAttackEvents(request: DescribeDomainAttackEventsRequest): Promise<DescribeDomainAttackEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainAttackEventsWithOptions(request, runtime);
  }

  async describeDomainQpsWithOptions(request: DescribeDomainQpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainQpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainQpsResponse>(await this.doRPCRequest("DescribeDomainQps", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainQpsResponse({}));
  }

  async describeDomainQps(request: DescribeDomainQpsRequest): Promise<DescribeDomainQpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainQpsWithOptions(request, runtime);
  }

  async describeDomainQpsWithCacheWithOptions(request: DescribeDomainQpsWithCacheRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainQpsWithCacheResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainQpsWithCacheResponse>(await this.doRPCRequest("DescribeDomainQpsWithCache", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainQpsWithCacheResponse({}));
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
    return $tea.cast<DescribeDomainsResponse>(await this.doRPCRequest("DescribeDomains", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainsResponse({}));
  }

  async describeDomains(request: DescribeDomainsRequest): Promise<DescribeDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  async describeDomainSlsStatusWithOptions(request: DescribeDomainSlsStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainSlsStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainSlsStatusResponse>(await this.doRPCRequest("DescribeDomainSlsStatus", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainSlsStatusResponse({}));
  }

  async describeDomainSlsStatus(request: DescribeDomainSlsStatusRequest): Promise<DescribeDomainSlsStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainSlsStatusWithOptions(request, runtime);
  }

  async describeElasticBandwidthSpecWithOptions(request: DescribeElasticBandwidthSpecRequest, runtime: $Util.RuntimeOptions): Promise<DescribeElasticBandwidthSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeElasticBandwidthSpecResponse>(await this.doRPCRequest("DescribeElasticBandwidthSpec", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeElasticBandwidthSpecResponse({}));
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
    return $tea.cast<DescribeHealthCheckListResponse>(await this.doRPCRequest("DescribeHealthCheckList", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHealthCheckListResponse({}));
  }

  async describeHealthCheckList(request: DescribeHealthCheckListRequest): Promise<DescribeHealthCheckListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthCheckListWithOptions(request, runtime);
  }

  async describeHealthCheckStatusListWithOptions(request: DescribeHealthCheckStatusListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHealthCheckStatusListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHealthCheckStatusListResponse>(await this.doRPCRequest("DescribeHealthCheckStatusList", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHealthCheckStatusListResponse({}));
  }

  async describeHealthCheckStatusList(request: DescribeHealthCheckStatusListRequest): Promise<DescribeHealthCheckStatusListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthCheckStatusListWithOptions(request, runtime);
  }

  async describeInstanceDetailsWithOptions(request: DescribeInstanceDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceDetailsResponse>(await this.doRPCRequest("DescribeInstanceDetails", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceDetailsResponse({}));
  }

  async describeInstanceDetails(request: DescribeInstanceDetailsRequest): Promise<DescribeInstanceDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceDetailsWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstancesResponse>(await this.doRPCRequest("DescribeInstances", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstancesResponse({}));
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
    return $tea.cast<DescribeInstanceSpecsResponse>(await this.doRPCRequest("DescribeInstanceSpecs", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceSpecsResponse({}));
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
    return $tea.cast<DescribeInstanceStatisticsResponse>(await this.doRPCRequest("DescribeInstanceStatistics", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceStatisticsResponse({}));
  }

  async describeInstanceStatistics(request: DescribeInstanceStatisticsRequest): Promise<DescribeInstanceStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceStatisticsWithOptions(request, runtime);
  }

  async describeIpTrafficWithOptions(request: DescribeIpTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpTrafficResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIpTrafficResponse>(await this.doRPCRequest("DescribeIpTraffic", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIpTrafficResponse({}));
  }

  async describeIpTraffic(request: DescribeIpTrafficRequest): Promise<DescribeIpTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpTrafficWithOptions(request, runtime);
  }

  async describeLayer4RuleAttributesWithOptions(request: DescribeLayer4RuleAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLayer4RuleAttributesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLayer4RuleAttributesResponse>(await this.doRPCRequest("DescribeLayer4RuleAttributes", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLayer4RuleAttributesResponse({}));
  }

  async describeLayer4RuleAttributes(request: DescribeLayer4RuleAttributesRequest): Promise<DescribeLayer4RuleAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLayer4RuleAttributesWithOptions(request, runtime);
  }

  async describeLayer4RulesWithOptions(request: DescribeLayer4RulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLayer4RulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLayer4RulesResponse>(await this.doRPCRequest("DescribeLayer4Rules", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLayer4RulesResponse({}));
  }

  async describeLayer4Rules(request: DescribeLayer4RulesRequest): Promise<DescribeLayer4RulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLayer4RulesWithOptions(request, runtime);
  }

  async describeLayer7CCRulesWithOptions(request: DescribeLayer7CCRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLayer7CCRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLayer7CCRulesResponse>(await this.doRPCRequest("DescribeLayer7CCRules", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLayer7CCRulesResponse({}));
  }

  async describeLayer7CCRules(request: DescribeLayer7CCRulesRequest): Promise<DescribeLayer7CCRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLayer7CCRulesWithOptions(request, runtime);
  }

  async describeLogStoreExistStatusWithOptions(request: DescribeLogStoreExistStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogStoreExistStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLogStoreExistStatusResponse>(await this.doRPCRequest("DescribeLogStoreExistStatus", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLogStoreExistStatusResponse({}));
  }

  async describeLogStoreExistStatus(request: DescribeLogStoreExistStatusRequest): Promise<DescribeLogStoreExistStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogStoreExistStatusWithOptions(request, runtime);
  }

  async describeOpEntitiesWithOptions(request: DescribeOpEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOpEntitiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOpEntitiesResponse>(await this.doRPCRequest("DescribeOpEntities", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOpEntitiesResponse({}));
  }

  async describeOpEntities(request: DescribeOpEntitiesRequest): Promise<DescribeOpEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOpEntitiesWithOptions(request, runtime);
  }

  async describeSimpleDomainsWithOptions(request: DescribeSimpleDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSimpleDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSimpleDomainsResponse>(await this.doRPCRequest("DescribeSimpleDomains", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSimpleDomainsResponse({}));
  }

  async describeSimpleDomains(request: DescribeSimpleDomainsRequest): Promise<DescribeSimpleDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSimpleDomainsWithOptions(request, runtime);
  }

  async describeSlsAuthStatusWithOptions(request: DescribeSlsAuthStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsAuthStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSlsAuthStatusResponse>(await this.doRPCRequest("DescribeSlsAuthStatus", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSlsAuthStatusResponse({}));
  }

  async describeSlsAuthStatus(request: DescribeSlsAuthStatusRequest): Promise<DescribeSlsAuthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsAuthStatusWithOptions(request, runtime);
  }

  async describeSlsEmptyCountWithOptions(request: DescribeSlsEmptyCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsEmptyCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSlsEmptyCountResponse>(await this.doRPCRequest("DescribeSlsEmptyCount", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSlsEmptyCountResponse({}));
  }

  async describeSlsEmptyCount(request: DescribeSlsEmptyCountRequest): Promise<DescribeSlsEmptyCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsEmptyCountWithOptions(request, runtime);
  }

  async describeSlsLogstoreInfoWithOptions(request: DescribeSlsLogstoreInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsLogstoreInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSlsLogstoreInfoResponse>(await this.doRPCRequest("DescribeSlsLogstoreInfo", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSlsLogstoreInfoResponse({}));
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
    return $tea.cast<DescribeSlsOpenStatusResponse>(await this.doRPCRequest("DescribeSlsOpenStatus", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSlsOpenStatusResponse({}));
  }

  async describeSlsOpenStatus(request: DescribeSlsOpenStatusRequest): Promise<DescribeSlsOpenStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsOpenStatusWithOptions(request, runtime);
  }

  async describleCertListWithOptions(request: DescribleCertListRequest, runtime: $Util.RuntimeOptions): Promise<DescribleCertListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribleCertListResponse>(await this.doRPCRequest("DescribleCertList", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribleCertListResponse({}));
  }

  async describleCertList(request: DescribleCertListRequest): Promise<DescribleCertListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describleCertListWithOptions(request, runtime);
  }

  async describleLayer7InstanceRelationsWithOptions(request: DescribleLayer7InstanceRelationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribleLayer7InstanceRelationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribleLayer7InstanceRelationsResponse>(await this.doRPCRequest("DescribleLayer7InstanceRelations", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribleLayer7InstanceRelationsResponse({}));
  }

  async describleLayer7InstanceRelations(request: DescribleLayer7InstanceRelationsRequest): Promise<DescribleLayer7InstanceRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describleLayer7InstanceRelationsWithOptions(request, runtime);
  }

  async disableLayer7CCWithOptions(request: DisableLayer7CCRequest, runtime: $Util.RuntimeOptions): Promise<DisableLayer7CCResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableLayer7CCResponse>(await this.doRPCRequest("DisableLayer7CC", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DisableLayer7CCResponse({}));
  }

  async disableLayer7CC(request: DisableLayer7CCRequest): Promise<DisableLayer7CCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableLayer7CCWithOptions(request, runtime);
  }

  async disableLayer7CCRuleWithOptions(request: DisableLayer7CCRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableLayer7CCRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableLayer7CCRuleResponse>(await this.doRPCRequest("DisableLayer7CCRule", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new DisableLayer7CCRuleResponse({}));
  }

  async disableLayer7CCRule(request: DisableLayer7CCRuleRequest): Promise<DisableLayer7CCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableLayer7CCRuleWithOptions(request, runtime);
  }

  async emptySlsLogstoreWithOptions(request: EmptySlsLogstoreRequest, runtime: $Util.RuntimeOptions): Promise<EmptySlsLogstoreResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EmptySlsLogstoreResponse>(await this.doRPCRequest("EmptySlsLogstore", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new EmptySlsLogstoreResponse({}));
  }

  async emptySlsLogstore(request: EmptySlsLogstoreRequest): Promise<EmptySlsLogstoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.emptySlsLogstoreWithOptions(request, runtime);
  }

  async enableLayer7CCWithOptions(request: EnableLayer7CCRequest, runtime: $Util.RuntimeOptions): Promise<EnableLayer7CCResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableLayer7CCResponse>(await this.doRPCRequest("EnableLayer7CC", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new EnableLayer7CCResponse({}));
  }

  async enableLayer7CC(request: EnableLayer7CCRequest): Promise<EnableLayer7CCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableLayer7CCWithOptions(request, runtime);
  }

  async enableLayer7CCRuleWithOptions(request: EnableLayer7CCRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableLayer7CCRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableLayer7CCRuleResponse>(await this.doRPCRequest("EnableLayer7CCRule", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new EnableLayer7CCRuleResponse({}));
  }

  async enableLayer7CCRule(request: EnableLayer7CCRuleRequest): Promise<EnableLayer7CCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableLayer7CCRuleWithOptions(request, runtime);
  }

  async listAsyncTaskWithOptions(request: ListAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListAsyncTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAsyncTaskResponse>(await this.doRPCRequest("ListAsyncTask", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListAsyncTaskResponse({}));
  }

  async listAsyncTask(request: ListAsyncTaskRequest): Promise<ListAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAsyncTaskWithOptions(request, runtime);
  }

  async listLayer7CustomPortsWithOptions(request: ListLayer7CustomPortsRequest, runtime: $Util.RuntimeOptions): Promise<ListLayer7CustomPortsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListLayer7CustomPortsResponse>(await this.doRPCRequest("ListLayer7CustomPorts", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListLayer7CustomPortsResponse({}));
  }

  async listLayer7CustomPorts(request: ListLayer7CustomPortsRequest): Promise<ListLayer7CustomPortsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLayer7CustomPortsWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagKeysResponse>(await this.doRPCRequest("ListTagKeys", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listValueAddedWithOptions(request: ListValueAddedRequest, runtime: $Util.RuntimeOptions): Promise<ListValueAddedResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListValueAddedResponse>(await this.doRPCRequest("ListValueAdded", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListValueAddedResponse({}));
  }

  async listValueAdded(request: ListValueAddedRequest): Promise<ListValueAddedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listValueAddedWithOptions(request, runtime);
  }

  async modifyElasticBandWidthWithOptions(request: ModifyElasticBandWidthRequest, runtime: $Util.RuntimeOptions): Promise<ModifyElasticBandWidthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyElasticBandWidthResponse>(await this.doRPCRequest("ModifyElasticBandWidth", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyElasticBandWidthResponse({}));
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
    return $tea.cast<ModifyFullLogTtlResponse>(await this.doRPCRequest("ModifyFullLogTtl", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFullLogTtlResponse({}));
  }

  async modifyFullLogTtl(request: ModifyFullLogTtlRequest): Promise<ModifyFullLogTtlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFullLogTtlWithOptions(request, runtime);
  }

  async modifyInstanceRemarkWithOptions(request: ModifyInstanceRemarkRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceRemarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceRemarkResponse>(await this.doRPCRequest("ModifyInstanceRemark", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceRemarkResponse({}));
  }

  async modifyInstanceRemark(request: ModifyInstanceRemarkRequest): Promise<ModifyInstanceRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceRemarkWithOptions(request, runtime);
  }

  async openDomainSlsConfigWithOptions(request: OpenDomainSlsConfigRequest, runtime: $Util.RuntimeOptions): Promise<OpenDomainSlsConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenDomainSlsConfigResponse>(await this.doRPCRequest("OpenDomainSlsConfig", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new OpenDomainSlsConfigResponse({}));
  }

  async openDomainSlsConfig(request: OpenDomainSlsConfigRequest): Promise<OpenDomainSlsConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openDomainSlsConfigWithOptions(request, runtime);
  }

  async releaseInstanceWithOptions(request: ReleaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseInstanceResponse>(await this.doRPCRequest("ReleaseInstance", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseInstanceResponse({}));
  }

  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  async releaseValueAddedWithOptions(request: ReleaseValueAddedRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseValueAddedResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseValueAddedResponse>(await this.doRPCRequest("ReleaseValueAdded", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseValueAddedResponse({}));
  }

  async releaseValueAdded(request: ReleaseValueAddedRequest): Promise<ReleaseValueAddedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseValueAddedWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2017-12-28", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
