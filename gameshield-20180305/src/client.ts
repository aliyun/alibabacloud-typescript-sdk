// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CleanFlexAccFwdRulesRequest extends $tea.Model {
  sourceIp?: string;
  esnBizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      esnBizId: 'EsnBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      esnBizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CleanFlexAccFwdRulesResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CleanFlexAccFwdRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CleanFlexAccFwdRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CleanFlexAccFwdRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CleanFlexFwdRulesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnBizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnBizId: 'EsnBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnBizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CleanFlexFwdRulesResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CleanFlexFwdRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CleanFlexFwdRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CleanFlexFwdRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearCcRouteRulesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearCcRouteRulesResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearCcRouteRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ClearCcRouteRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClearCcRouteRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  requestId?: string;
  appId?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appId: 'AppId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appId: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppKeyRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppKeyResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAppKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAppKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appId?: number;
  appName?: string;
  bizName?: string;
  bizType?: number;
  useCc?: number;
  ccQps?: number;
  l4Rules?: string;
  groups?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appId: 'AppId',
      appName: 'AppName',
      bizName: 'BizName',
      bizType: 'BizType',
      useCc: 'UseCc',
      ccQps: 'CcQps',
      l4Rules: 'L4Rules',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appId: 'number',
      appName: 'string',
      bizName: 'string',
      bizType: 'number',
      useCc: 'number',
      ccQps: 'number',
      l4Rules: 'string',
      groups: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBizResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBizResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCcRouteRulesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  routeList?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      routeList: 'RouteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      routeList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCcRouteRulesResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCcRouteRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCcRouteRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCcRouteRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlexAccFwdRuleRequest extends $tea.Model {
  sourceIp?: string;
  bizId?: number;
  identity?: string;
  ipList?: string;
  protocolEx?: string;
  domainList?: string;
  remark?: string;
  masterIpList?: string;
  slaveIpList?: string;
  accType?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      bizId: 'BizId',
      identity: 'Identity',
      ipList: 'IpList',
      protocolEx: 'ProtocolEx',
      domainList: 'DomainList',
      remark: 'Remark',
      masterIpList: 'MasterIpList',
      slaveIpList: 'SlaveIpList',
      accType: 'AccType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      bizId: 'number',
      identity: 'string',
      ipList: 'string',
      protocolEx: 'string',
      domainList: 'string',
      remark: 'string',
      masterIpList: 'string',
      slaveIpList: 'string',
      accType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlexAccFwdRuleResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlexAccFwdRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlexAccFwdRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlexAccFwdRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlexAccFwdRuleListRequest extends $tea.Model {
  sourceIp?: string;
  bizId?: number;
  fwdRuleList?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      bizId: 'BizId',
      fwdRuleList: 'FwdRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      bizId: 'number',
      fwdRuleList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlexAccFwdRuleListResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlexAccFwdRuleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlexAccFwdRuleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlexAccFwdRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlexFwdRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  identity?: string;
  masterIpList?: string;
  slaveIpList?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      identity: 'Identity',
      masterIpList: 'MasterIpList',
      slaveIpList: 'SlaveIpList',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      identity: 'string',
      masterIpList: 'string',
      slaveIpList: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlexFwdRuleResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlexFwdRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlexFwdRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlexFwdRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  groupId?: string;
  groupDesc?: string;
  ipList?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      groupId: 'GroupId',
      groupDesc: 'GroupDesc',
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      groupId: 'string',
      groupDesc: 'string',
      ipList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayer4RuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appId?: number;
  bizId?: number;
  frontPort?: number;
  backPort?: number;
  rservers?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appId: 'AppId',
      bizId: 'BizId',
      frontPort: 'FrontPort',
      backPort: 'BackPort',
      rservers: 'Rservers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appId: 'number',
      bizId: 'number',
      frontPort: 'number',
      backPort: 'number',
      rservers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayer4RuleResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

export class CreateLayer4RulesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  rules?: string;
  flush?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      rules: 'Rules',
      flush: 'Flush',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      rules: 'string',
      flush: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayer4RulesResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayer4RulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLayer4RulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLayer4RulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppKeyRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppKeyResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAppKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAppKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBizResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBizResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCcRouteRulesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  routeIdList?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      routeIdList: 'RouteIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      routeIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCcRouteRulesResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCcRouteRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCcRouteRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCcRouteRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlexAccFwdRuleRequest extends $tea.Model {
  sourceIp?: string;
  esnBizId?: number;
  identity?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      esnBizId: 'EsnBizId',
      identity: 'Identity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      esnBizId: 'number',
      identity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlexAccFwdRuleResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlexAccFwdRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlexAccFwdRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlexAccFwdRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlexFwdRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnBizId?: number;
  identity?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnBizId: 'EsnBizId',
      identity: 'Identity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnBizId: 'number',
      identity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlexFwdRuleResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlexFwdRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlexFwdRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlexFwdRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer4RuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  frontPort?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      frontPort: 'FrontPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      frontPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer4RuleResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

export class DescribeAccResSummaryRequest extends $tea.Model {
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

export class DescribeAccResSummaryResponseBody extends $tea.Model {
  requestId?: string;
  fullNodesSummary?: DescribeAccResSummaryResponseBodyFullNodesSummary;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      fullNodesSummary: 'FullNodesSummary',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      fullNodesSummary: DescribeAccResSummaryResponseBodyFullNodesSummary,
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccResSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccResSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccResSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllLocalIpsRequest extends $tea.Model {
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

export class DescribeAllLocalIpsResponseBody extends $tea.Model {
  requestId?: string;
  localIps?: DescribeAllLocalIpsResponseBodyLocalIps;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      localIps: 'LocalIps',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      localIps: DescribeAllLocalIpsResponseBodyLocalIps,
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllLocalIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAllLocalIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAllLocalIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDailyDetailsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnAppId?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnAppId: 'EsnAppId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnAppId: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDailyDetailsResponseBody extends $tea.Model {
  requestId?: string;
  appDailyDetails?: DescribeAppDailyDetailsResponseBodyAppDailyDetails[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appDailyDetails: 'AppDailyDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appDailyDetails: { 'type': 'array', 'itemType': DescribeAppDailyDetailsResponseBodyAppDailyDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDailyDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppDailyDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppDailyDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDailySdkVersionsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnAppId?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnAppId: 'EsnAppId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnAppId: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDailySdkVersionsResponseBody extends $tea.Model {
  requestId?: string;
  appDailySdkVersions?: DescribeAppDailySdkVersionsResponseBodyAppDailySdkVersions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appDailySdkVersions: 'AppDailySdkVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appDailySdkVersions: { 'type': 'array', 'itemType': DescribeAppDailySdkVersionsResponseBodyAppDailySdkVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDailySdkVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppDailySdkVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppDailySdkVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appId?: number;
  appName?: string;
  appIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appId: 'AppId',
      appName: 'AppName',
      appIdList: 'AppIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appId: 'number',
      appName: 'string',
      appIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppListResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  promptInfo?: { [key: string]: any };
  appList?: DescribeAppListResponseBodyAppList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      promptInfo: 'PromptInfo',
      appList: 'AppList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      appList: { 'type': 'array', 'itemType': DescribeAppListResponseBodyAppList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSimpleListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appIdList: 'AppIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSimpleListResponseBody extends $tea.Model {
  requestId?: string;
  appSimpleList?: DescribeAppSimpleListResponseBodyAppSimpleList[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appSimpleList: 'AppSimpleList',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appSimpleList: { 'type': 'array', 'itemType': DescribeAppSimpleListResponseBodyAppSimpleList },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSimpleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppSimpleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppSimpleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAsyncOperationRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAsyncOperationResponseBody extends $tea.Model {
  asyncOperation?: DescribeAsyncOperationResponseBodyAsyncOperation;
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      asyncOperation: 'AsyncOperation',
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncOperation: DescribeAsyncOperationResponseBodyAsyncOperation,
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAsyncOperationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAsyncOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAsyncOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomaticTraceabilitySlsLogRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  startTime?: number;
  endTime?: number;
  page?: number;
  pageSize?: number;
  esnAppId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      startTime: 'StartTime',
      endTime: 'EndTime',
      page: 'Page',
      pageSize: 'PageSize',
      esnAppId: 'EsnAppId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      startTime: 'number',
      endTime: 'number',
      page: 'number',
      pageSize: 'number',
      esnAppId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomaticTraceabilitySlsLogResponseBody extends $tea.Model {
  requestId?: string;
  statistic?: DescribeAutomaticTraceabilitySlsLogResponseBodyStatistic[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: { 'type': 'array', 'itemType': DescribeAutomaticTraceabilitySlsLogResponseBodyStatistic },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomaticTraceabilitySlsLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAutomaticTraceabilitySlsLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAutomaticTraceabilitySlsLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpResSummaryRequest extends $tea.Model {
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

export class DescribeBgpResSummaryResponseBody extends $tea.Model {
  requestId?: string;
  fullNodesSummary?: DescribeBgpResSummaryResponseBodyFullNodesSummary;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      fullNodesSummary: 'FullNodesSummary',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      fullNodesSummary: DescribeBgpResSummaryResponseBodyFullNodesSummary,
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpResSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBgpResSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBgpResSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appId?: number;
  bizId?: number;
  bizName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appId: 'AppId',
      bizId: 'BizId',
      bizName: 'BizName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appId: 'number',
      bizId: 'number',
      bizName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizListResponseBody extends $tea.Model {
  bizList?: DescribeBizListResponseBodyBizList[];
  requestId?: string;
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizList: 'BizList',
      requestId: 'RequestId',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizList: { 'type': 'array', 'itemType': DescribeBizListResponseBodyBizList },
      requestId: 'string',
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBizListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBizListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizSimpleListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appId?: number;
  appIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appId: 'AppId',
      appIdList: 'AppIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appId: 'number',
      appIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizSimpleListResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  promptInfo?: { [key: string]: any };
  bizSimpleList?: DescribeBizSimpleListResponseBodyBizSimpleList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      promptInfo: 'PromptInfo',
      bizSimpleList: 'BizSimpleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      bizSimpleList: { 'type': 'array', 'itemType': DescribeBizSimpleListResponseBodyBizSimpleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizSimpleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBizSimpleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBizSimpleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBpsFlowRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  groupId?: string;
  beginTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      groupId: 'GroupId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      groupId: 'string',
      beginTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBpsFlowResponseBody extends $tea.Model {
  flowData?: DescribeBpsFlowResponseBodyFlowData;
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      flowData: 'FlowData',
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowData: DescribeBpsFlowResponseBodyFlowData,
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBpsFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBpsFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBpsFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcBlackListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcBlackListResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  promptInfo?: { [key: string]: any };
  blackList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      promptInfo: 'PromptInfo',
      blackList: 'BlackList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      blackList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcBlackListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCcBlackListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCcBlackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcDevieIpListRequest extends $tea.Model {
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

export class DescribeCcDevieIpListResponseBody extends $tea.Model {
  requestId?: string;
  ipList?: string[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipList: 'IpList',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipList: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcDevieIpListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCcDevieIpListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCcDevieIpListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcFlowRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  beginTime?: number;
  endTime?: number;
  interval?: number;
  apiVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      interval: 'Interval',
      apiVersion: 'ApiVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      beginTime: 'number',
      endTime: 'number',
      interval: 'number',
      apiVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcFlowResponseBody extends $tea.Model {
  flowData?: DescribeCcFlowResponseBodyFlowData;
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      flowData: 'FlowData',
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowData: DescribeCcFlowResponseBodyFlowData,
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCcFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCcFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcIDCBlockSwitchRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcIDCBlockSwitchResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  ccSwitch?: DescribeCcIDCBlockSwitchResponseBodyCcSwitch;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
      ccSwitch: 'CcSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ccSwitch: DescribeCcIDCBlockSwitchResponseBodyCcSwitch,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcIDCBlockSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCcIDCBlockSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCcIDCBlockSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcMaxFwRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  beginTime?: number;
  endTime?: number;
  source?: string;
  destPort?: number;
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      source: 'Source',
      destPort: 'DestPort',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      beginTime: 'number',
      endTime: 'number',
      source: 'string',
      destPort: 'number',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcMaxFwResponseBody extends $tea.Model {
  requestId?: string;
  fwMaxInfoList?: DescribeCcMaxFwResponseBodyFwMaxInfoList[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      fwMaxInfoList: 'FwMaxInfoList',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      fwMaxInfoList: { 'type': 'array', 'itemType': DescribeCcMaxFwResponseBodyFwMaxInfoList },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcMaxFwResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCcMaxFwResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCcMaxFwResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcResSummaryRequest extends $tea.Model {
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

export class DescribeCcResSummaryResponseBody extends $tea.Model {
  requestId?: string;
  fullNodesSummary?: DescribeCcResSummaryResponseBodyFullNodesSummary;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      fullNodesSummary: 'FullNodesSummary',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      fullNodesSummary: DescribeCcResSummaryResponseBodyFullNodesSummary,
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcResSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCcResSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCcResSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcRouteRulesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  routeComment?: string;
  routeId?: string;
  routeIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      routeComment: 'RouteComment',
      routeId: 'RouteId',
      routeIp: 'RouteIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      routeComment: 'string',
      routeId: 'string',
      routeIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcRouteRulesResponseBody extends $tea.Model {
  ruleQueryResult?: DescribeCcRouteRulesResponseBodyRuleQueryResult;
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      ruleQueryResult: 'RuleQueryResult',
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleQueryResult: DescribeCcRouteRulesResponseBodyRuleQueryResult,
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcRouteRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCcRouteRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCcRouteRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcRouteSwitchRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcRouteSwitchResponseBody extends $tea.Model {
  requestId?: string;
  switch?: DescribeCcRouteSwitchResponseBodySwitch;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      switch: 'Switch',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      switch: DescribeCcRouteSwitchResponseBodySwitch,
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcRouteSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCcRouteSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCcRouteSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcSocketDetailRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  beginTime?: number;
  endTime?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      beginTime: 'number',
      endTime: 'number',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcSocketDetailResponseBody extends $tea.Model {
  flowData?: DescribeCcSocketDetailResponseBodyFlowData;
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      flowData: 'FlowData',
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowData: DescribeCcSocketDetailResponseBodyFlowData,
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcSocketDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCcSocketDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCcSocketDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcTotalFwRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  beginTime?: number;
  endTime?: number;
  source?: string;
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      source: 'Source',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      beginTime: 'number',
      endTime: 'number',
      source: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcTotalFwResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  promptInfo?: { [key: string]: any };
  fwTotalInfoList?: DescribeCcTotalFwResponseBodyFwTotalInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      promptInfo: 'PromptInfo',
      fwTotalInfoList: 'FwTotalInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fwTotalInfoList: { 'type': 'array', 'itemType': DescribeCcTotalFwResponseBodyFwTotalInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcTotalFwResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCcTotalFwResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCcTotalFwResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcTunnelRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcTunnelResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  ccTunnel?: DescribeCcTunnelResponseBodyCcTunnel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
      ccTunnel: 'CcTunnel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ccTunnel: DescribeCcTunnelResponseBodyCcTunnel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcTunnelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCcTunnelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCcTunnelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcWhiteListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcWhiteListResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  promptInfo?: { [key: string]: any };
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      promptInfo: 'PromptInfo',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCcWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCcWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcZoneBlockConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcZoneBlockConfigResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  blockConfig?: DescribeCcZoneBlockConfigResponseBodyBlockConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
      blockConfig: 'BlockConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      blockConfig: DescribeCcZoneBlockConfigResponseBodyBlockConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcZoneBlockConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCcZoneBlockConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCcZoneBlockConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcZonesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcZonesResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  zoneList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
      zoneList: 'ZoneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      zoneList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCcZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCcZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDailyDetailsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDailyDetailsResponseBody extends $tea.Model {
  requestId?: string;
  dailyDetails?: DescribeDailyDetailsResponseBodyDailyDetails[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dailyDetails: 'DailyDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dailyDetails: { 'type': 'array', 'itemType': DescribeDailyDetailsResponseBodyDailyDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDailyDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDailyDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDailyDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadUrlsForAppKeyRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appId?: number;
  appKeyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appId: 'AppId',
      appKeyVersion: 'AppKeyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appId: 'number',
      appKeyVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadUrlsForAppKeyResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  urlResult?: DescribeDownloadUrlsForAppKeyResponseBodyUrlResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
      urlResult: 'UrlResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      urlResult: DescribeDownloadUrlsForAppKeyResponseBodyUrlResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadUrlsForAppKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDownloadUrlsForAppKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDownloadUrlsForAppKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadUrlsForSDKRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appId?: number;
  sdkVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appId: 'AppId',
      sdkVersion: 'SdkVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appId: 'number',
      sdkVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadUrlsForSDKResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  urlResult?: DescribeDownloadUrlsForSDKResponseBodyUrlResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
      urlResult: 'UrlResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      urlResult: DescribeDownloadUrlsForSDKResponseBodyUrlResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadUrlsForSDKResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDownloadUrlsForSDKResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDownloadUrlsForSDKResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexAccConfigRequest extends $tea.Model {
  sourceIp?: string;
  esnBizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      esnBizId: 'EsnBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      esnBizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexAccConfigResponseBody extends $tea.Model {
  requestId?: string;
  flexAccConfig?: DescribeFlexAccConfigResponseBodyFlexAccConfig;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flexAccConfig: 'FlexAccConfig',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flexAccConfig: DescribeFlexAccConfigResponseBodyFlexAccConfig,
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexAccConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlexAccConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlexAccConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexAccFlowRequest extends $tea.Model {
  sourceIp?: string;
  bizId?: number;
  beginTime?: number;
  endTime?: number;
  interval?: number;
  apiVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      bizId: 'BizId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      interval: 'Interval',
      apiVersion: 'ApiVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      bizId: 'number',
      beginTime: 'number',
      endTime: 'number',
      interval: 'number',
      apiVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexAccFlowResponseBody extends $tea.Model {
  flowData?: DescribeFlexAccFlowResponseBodyFlowData;
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      flowData: 'FlowData',
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowData: DescribeFlexAccFlowResponseBodyFlowData,
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexAccFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlexAccFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlexAccFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexAccFwdRulesRequest extends $tea.Model {
  sourceIp?: string;
  esnBizId?: number;
  keyword?: string;
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      esnBizId: 'EsnBizId',
      keyword: 'Keyword',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      esnBizId: 'number',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexAccFwdRulesResponseBody extends $tea.Model {
  flexAccFwdRules?: DescribeFlexAccFwdRulesResponseBodyFlexAccFwdRules[];
  requestId?: string;
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      flexAccFwdRules: 'FlexAccFwdRules',
      requestId: 'RequestId',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flexAccFwdRules: { 'type': 'array', 'itemType': DescribeFlexAccFwdRulesResponseBodyFlexAccFwdRules },
      requestId: 'string',
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexAccFwdRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlexAccFwdRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlexAccFwdRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexBackupGroupsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexBackupGroupsResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  allBackupGroups?: DescribeFlexBackupGroupsResponseBodyAllBackupGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
      allBackupGroups: 'AllBackupGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      allBackupGroups: DescribeFlexBackupGroupsResponseBodyAllBackupGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexBackupGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlexBackupGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlexBackupGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnBizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnBizId: 'EsnBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnBizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexConfigResponseBody extends $tea.Model {
  flexConfig?: DescribeFlexConfigResponseBodyFlexConfig;
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      flexConfig: 'FlexConfig',
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flexConfig: DescribeFlexConfigResponseBodyFlexConfig,
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlexConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlexConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexFwdRulesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnBizId?: number;
  keyword?: string;
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnBizId: 'EsnBizId',
      keyword: 'Keyword',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnBizId: 'number',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexFwdRulesResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  promptInfo?: { [key: string]: any };
  flexFwdRules?: DescribeFlexFwdRulesResponseBodyFlexFwdRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      promptInfo: 'PromptInfo',
      flexFwdRules: 'FlexFwdRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      flexFwdRules: { 'type': 'array', 'itemType': DescribeFlexFwdRulesResponseBodyFlexFwdRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexFwdRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlexFwdRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlexFwdRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexSechedPolicyRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnBizId?: number;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnBizId: 'EsnBizId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnBizId: 'number',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexSechedPolicyResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  flexSechedPolicy?: DescribeFlexSechedPolicyResponseBodyFlexSechedPolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
      flexSechedPolicy: 'FlexSechedPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      flexSechedPolicy: DescribeFlexSechedPolicyResponseBodyFlexSechedPolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexSechedPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlexSechedPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlexSechedPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowReportRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  interval?: number;
  startTime?: number;
  endTime?: number;
  esnAppId?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      interval: 'Interval',
      startTime: 'StartTime',
      endTime: 'EndTime',
      esnAppId: 'EsnAppId',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      interval: 'number',
      startTime: 'number',
      endTime: 'number',
      esnAppId: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowReportResponseBody extends $tea.Model {
  requestId?: string;
  flowReport?: DescribeFlowReportResponseBodyFlowReport[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowReport: 'FlowReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowReport: { 'type': 'array', 'itemType': DescribeFlowReportResponseBodyFlowReport },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullNodesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appId?: number;
  groupId?: string;
  inUse?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appId: 'AppId',
      groupId: 'GroupId',
      inUse: 'InUse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appId: 'number',
      groupId: 'string',
      inUse: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullNodesResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  nodeList?: DescribeFullNodesResponseBodyNodeList[];
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      nodeList: 'NodeList',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      nodeList: { 'type': 'array', 'itemType': DescribeFullNodesResponseBodyNodeList },
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFullNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFullNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullNodesSummaryRequest extends $tea.Model {
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

export class DescribeFullNodesSummaryResponseBody extends $tea.Model {
  requestId?: string;
  fullNodesSummary?: DescribeFullNodesSummaryResponseBodyFullNodesSummary;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      fullNodesSummary: 'FullNodesSummary',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      fullNodesSummary: DescribeFullNodesSummaryResponseBodyFullNodesSummary,
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullNodesSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFullNodesSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFullNodesSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGfResSummaryRequest extends $tea.Model {
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

export class DescribeGfResSummaryResponseBody extends $tea.Model {
  requestId?: string;
  fullNodesSummary?: DescribeGfResSummaryResponseBodyFullNodesSummary;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      fullNodesSummary: 'FullNodesSummary',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      fullNodesSummary: DescribeGfResSummaryResponseBodyFullNodesSummary,
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGfResSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGfResSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGfResSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupListResponseBody extends $tea.Model {
  requestId?: string;
  groupList?: DescribeGroupListResponseBodyGroupList[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groupList: 'GroupList',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groupList: { 'type': 'array', 'itemType': DescribeGroupListResponseBodyGroupList },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupSimpleListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupSimpleListResponseBody extends $tea.Model {
  requestId?: string;
  groupList?: DescribeGroupSimpleListResponseBodyGroupList[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groupList: 'GroupList',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groupList: { 'type': 'array', 'itemType': DescribeGroupSimpleListResponseBodyGroupList },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupSimpleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupSimpleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupSimpleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRequest extends $tea.Model {
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

export class DescribeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  instanceInfo?: DescribeInstanceResponseBodyInstanceInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
      instanceInfo: 'InstanceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceInfo: DescribeInstanceResponseBodyInstanceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpFlowReportRequest extends $tea.Model {
  sourceIp?: string;
  ip?: string;
  endTime?: number;
  FPort?: number;
  interval?: number;
  protocolEx?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      ip: 'Ip',
      endTime: 'EndTime',
      FPort: 'FPort',
      interval: 'Interval',
      protocolEx: 'ProtocolEx',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      ip: 'string',
      endTime: 'number',
      FPort: 'number',
      interval: 'number',
      protocolEx: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpFlowReportResponseBody extends $tea.Model {
  ipFlowReportList?: DescribeIpFlowReportResponseBodyIpFlowReportList[];
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      ipFlowReportList: 'IpFlowReportList',
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipFlowReportList: { 'type': 'array', 'itemType': DescribeIpFlowReportResponseBodyIpFlowReportList },
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpFlowReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIpFlowReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIpFlowReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJianYuTestGetRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJianYuTestGetResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  data?: DescribeJianYuTestGetResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      data: DescribeJianYuTestGetResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJianYuTestGetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeJianYuTestGetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeJianYuTestGetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJianYuTestListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJianYuTestListResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  list?: DescribeJianYuTestListResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      list: { 'type': 'array', 'itemType': DescribeJianYuTestListResponseBodyList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJianYuTestListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeJianYuTestListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeJianYuTestListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJianYuTestPaginationRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  startTime?: string;
  endTime?: string;
  page?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      startTime: 'StartTime',
      endTime: 'EndTime',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      startTime: 'string',
      endTime: 'string',
      page: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJianYuTestPaginationResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  promptInfo?: { [key: string]: any };
  list?: DescribeJianYuTestPaginationResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      promptInfo: 'PromptInfo',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      list: { 'type': 'array', 'itemType': DescribeJianYuTestPaginationResponseBodyList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJianYuTestPaginationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeJianYuTestPaginationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeJianYuTestPaginationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL4EventsSelectiveRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  beginTime?: number;
  endTime?: number;
  page?: number;
  pageSize?: number;
  esnAppId?: string;
  esnBizId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      page: 'Page',
      pageSize: 'PageSize',
      esnAppId: 'EsnAppId',
      esnBizId: 'EsnBizId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      beginTime: 'number',
      endTime: 'number',
      page: 'number',
      pageSize: 'number',
      esnAppId: 'string',
      esnBizId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL4EventsSelectiveResponseBody extends $tea.Model {
  requestId?: string;
  esnL4EventList?: DescribeL4EventsSelectiveResponseBodyEsnL4EventList[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      esnL4EventList: 'EsnL4EventList',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      esnL4EventList: { 'type': 'array', 'itemType': DescribeL4EventsSelectiveResponseBodyEsnL4EventList },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL4EventsSelectiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeL4EventsSelectiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeL4EventsSelectiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesResponseBody extends $tea.Model {
  requestId?: string;
  extInfo?: DescribeLayer4RulesResponseBodyExtInfo;
  total?: number;
  promptInfo?: { [key: string]: any };
  l4RuleList?: DescribeLayer4RulesResponseBodyL4RuleList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      extInfo: 'ExtInfo',
      total: 'Total',
      promptInfo: 'PromptInfo',
      l4RuleList: 'L4RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      extInfo: DescribeLayer4RulesResponseBodyExtInfo,
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      l4RuleList: { 'type': 'array', 'itemType': DescribeLayer4RulesResponseBodyL4RuleList },
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

export class DescribeMianLiuResSummaryRequest extends $tea.Model {
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

export class DescribeMianLiuResSummaryResponseBody extends $tea.Model {
  requestId?: string;
  fullNodesSummary?: DescribeMianLiuResSummaryResponseBodyFullNodesSummary;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      fullNodesSummary: 'FullNodesSummary',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      fullNodesSummary: DescribeMianLiuResSummaryResponseBodyFullNodesSummary,
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMianLiuResSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMianLiuResSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMianLiuResSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNgSourceDiagnosisLogRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  startTime?: number;
  endTime?: number;
  page?: number;
  pageSize?: number;
  appId?: string;
  bizId?: string;
  source?: string;
  sourcePort?: string;
  detectPort?: string;
  detectIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      startTime: 'StartTime',
      endTime: 'EndTime',
      page: 'Page',
      pageSize: 'PageSize',
      appId: 'AppId',
      bizId: 'BizId',
      source: 'Source',
      sourcePort: 'SourcePort',
      detectPort: 'DetectPort',
      detectIp: 'DetectIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      startTime: 'number',
      endTime: 'number',
      page: 'number',
      pageSize: 'number',
      appId: 'string',
      bizId: 'string',
      source: 'string',
      sourcePort: 'string',
      detectPort: 'string',
      detectIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNgSourceDiagnosisLogResponseBody extends $tea.Model {
  requestId?: string;
  statistic?: DescribeNgSourceDiagnosisLogResponseBodyStatistic[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: { 'type': 'array', 'itemType': DescribeNgSourceDiagnosisLogResponseBodyStatistic },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNgSourceDiagnosisLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNgSourceDiagnosisLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNgSourceDiagnosisLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRemainQpsRequest extends $tea.Model {
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

export class DescribeRemainQpsResponseBody extends $tea.Model {
  requestId?: string;
  qps?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      qps: 'Qps',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      qps: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRemainQpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRemainQpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRemainQpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticByEsnBizIntervalRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnApp?: string;
  esnBiz?: string;
  startTime?: number;
  endTime?: number;
  interval?: number;
  province?: string;
  country?: string;
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnApp: 'EsnApp',
      esnBiz: 'EsnBiz',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      province: 'Province',
      country: 'Country',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnApp: 'string',
      esnBiz: 'string',
      startTime: 'number',
      endTime: 'number',
      interval: 'number',
      province: 'string',
      country: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticByEsnBizIntervalResponseBody extends $tea.Model {
  requestId?: string;
  statistic?: DescribeRequestStatisticByEsnBizIntervalResponseBodyStatistic[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: { 'type': 'array', 'itemType': DescribeRequestStatisticByEsnBizIntervalResponseBodyStatistic },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticByEsnBizIntervalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRequestStatisticByEsnBizIntervalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRequestStatisticByEsnBizIntervalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBiz1DayRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnApp?: string;
  esnBiz?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnApp: 'EsnApp',
      esnBiz: 'EsnBiz',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnApp: 'string',
      esnBiz: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBiz1DayResponseBody extends $tea.Model {
  requestId?: string;
  statistic?: DescribeRequestStatisticCountByEsnBiz1DayResponseBodyStatistic;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: DescribeRequestStatisticCountByEsnBiz1DayResponseBodyStatistic,
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBiz1DayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRequestStatisticCountByEsnBiz1DayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRequestStatisticCountByEsnBiz1DayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBiz1DayProvinceRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnApp?: string;
  esnBiz?: string;
  startTime?: number;
  endTime?: number;
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnApp: 'EsnApp',
      esnBiz: 'EsnBiz',
      startTime: 'StartTime',
      endTime: 'EndTime',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnApp: 'string',
      esnBiz: 'string',
      startTime: 'number',
      endTime: 'number',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBiz1DayProvinceResponseBody extends $tea.Model {
  requestId?: string;
  statistic?: DescribeRequestStatisticCountByEsnBiz1DayProvinceResponseBodyStatistic[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: { 'type': 'array', 'itemType': DescribeRequestStatisticCountByEsnBiz1DayProvinceResponseBodyStatistic },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBiz1DayProvinceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRequestStatisticCountByEsnBiz1DayProvinceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRequestStatisticCountByEsnBiz1DayProvinceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBiz1M30MRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnApp?: string;
  esnBiz?: string;
  time?: number;
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnApp: 'EsnApp',
      esnBiz: 'EsnBiz',
      time: 'Time',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnApp: 'string',
      esnBiz: 'string',
      time: 'number',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBiz1M30MResponseBody extends $tea.Model {
  requestId?: string;
  statistic?: DescribeRequestStatisticCountByEsnBiz1M30MResponseBodyStatistic[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: { 'type': 'array', 'itemType': DescribeRequestStatisticCountByEsnBiz1M30MResponseBodyStatistic },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBiz1M30MResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRequestStatisticCountByEsnBiz1M30MResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRequestStatisticCountByEsnBiz1M30MResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBiz30MRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnApp?: string;
  esnBiz?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnApp: 'EsnApp',
      esnBiz: 'EsnBiz',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnApp: 'string',
      esnBiz: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBiz30MResponseBody extends $tea.Model {
  requestId?: string;
  statistic?: DescribeRequestStatisticCountByEsnBiz30MResponseBodyStatistic;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: DescribeRequestStatisticCountByEsnBiz30MResponseBodyStatistic,
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBiz30MResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRequestStatisticCountByEsnBiz30MResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRequestStatisticCountByEsnBiz30MResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBizGroup30MRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnApp?: string;
  esnBiz?: string;
  time?: number;
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnApp: 'EsnApp',
      esnBiz: 'EsnBiz',
      time: 'Time',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnApp: 'string',
      esnBiz: 'string',
      time: 'number',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBizGroup30MResponseBody extends $tea.Model {
  requestId?: string;
  statistic?: DescribeRequestStatisticCountByEsnBizGroup30MResponseBodyStatistic[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: { 'type': 'array', 'itemType': DescribeRequestStatisticCountByEsnBizGroup30MResponseBodyStatistic },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBizGroup30MResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRequestStatisticCountByEsnBizGroup30MResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRequestStatisticCountByEsnBizGroup30MResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticLogRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  startTime?: number;
  endTime?: number;
  page?: number;
  pageSize?: number;
  esnApp?: string;
  esnBiz?: string;
  esnGroup?: string;
  source?: string;
  country?: string;
  province?: string;
  city?: string;
  ISP?: string;
  token?: string;
  SDK?: string;
  callResult?: string;
  osType?: string;
  escapedLessThan?: number;
  escapedGreaterThan?: number;
  detectIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      startTime: 'StartTime',
      endTime: 'EndTime',
      page: 'Page',
      pageSize: 'PageSize',
      esnApp: 'EsnApp',
      esnBiz: 'EsnBiz',
      esnGroup: 'EsnGroup',
      source: 'Source',
      country: 'Country',
      province: 'Province',
      city: 'City',
      ISP: 'ISP',
      token: 'Token',
      SDK: 'SDK',
      callResult: 'CallResult',
      osType: 'OsType',
      escapedLessThan: 'EscapedLessThan',
      escapedGreaterThan: 'EscapedGreaterThan',
      detectIp: 'DetectIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      startTime: 'number',
      endTime: 'number',
      page: 'number',
      pageSize: 'number',
      esnApp: 'string',
      esnBiz: 'string',
      esnGroup: 'string',
      source: 'string',
      country: 'string',
      province: 'string',
      city: 'string',
      ISP: 'string',
      token: 'string',
      SDK: 'string',
      callResult: 'string',
      osType: 'string',
      escapedLessThan: 'number',
      escapedGreaterThan: 'number',
      detectIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticLogResponseBody extends $tea.Model {
  requestId?: string;
  statistic?: DescribeRequestStatisticLogResponseBodyStatistic[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: { 'type': 'array', 'itemType': DescribeRequestStatisticLogResponseBodyStatistic },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRequestStatisticLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRequestStatisticLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticLogRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  startTime?: number;
  endTime?: number;
  page?: number;
  pageSize?: number;
  esnApp?: string;
  esnBiz?: string;
  esnGroup?: string;
  source?: string;
  country?: string;
  province?: string;
  city?: string;
  ISP?: string;
  token?: string;
  result?: string;
  osType?: string;
  detectIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      startTime: 'StartTime',
      endTime: 'EndTime',
      page: 'Page',
      pageSize: 'PageSize',
      esnApp: 'EsnApp',
      esnBiz: 'EsnBiz',
      esnGroup: 'EsnGroup',
      source: 'Source',
      country: 'Country',
      province: 'Province',
      city: 'City',
      ISP: 'ISP',
      token: 'Token',
      result: 'Result',
      osType: 'OsType',
      detectIp: 'DetectIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      startTime: 'number',
      endTime: 'number',
      page: 'number',
      pageSize: 'number',
      esnApp: 'string',
      esnBiz: 'string',
      esnGroup: 'string',
      source: 'string',
      country: 'string',
      province: 'string',
      city: 'string',
      ISP: 'string',
      token: 'string',
      result: 'string',
      osType: 'string',
      detectIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticLogResponseBody extends $tea.Model {
  requestId?: string;
  statistic?: DescribeSDKStatisticLogResponseBodyStatistic[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: { 'type': 'array', 'itemType': DescribeSDKStatisticLogResponseBodyStatistic },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSDKStatisticLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSDKStatisticLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticResultByEsnBizISP1M30MRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnApp?: string;
  esnBiz?: string;
  time?: number;
  page?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnApp: 'EsnApp',
      esnBiz: 'EsnBiz',
      time: 'Time',
      page: 'Page',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnApp: 'string',
      esnBiz: 'string',
      time: 'number',
      page: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticResultByEsnBizISP1M30MResponseBody extends $tea.Model {
  requestId?: string;
  statistic?: DescribeSDKStatisticResultByEsnBizISP1M30MResponseBodyStatistic[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: { 'type': 'array', 'itemType': DescribeSDKStatisticResultByEsnBizISP1M30MResponseBodyStatistic },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticResultByEsnBizISP1M30MResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSDKStatisticResultByEsnBizISP1M30MResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSDKStatisticResultByEsnBizISP1M30MResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticResultByEsnBizISPIntervalRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnApp?: string;
  esnBiz?: string;
  startTime?: number;
  endTime?: number;
  page?: number;
  pageSize?: number;
  type?: string;
  interval?: number;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnApp: 'EsnApp',
      esnBiz: 'EsnBiz',
      startTime: 'StartTime',
      endTime: 'EndTime',
      page: 'Page',
      pageSize: 'PageSize',
      type: 'Type',
      interval: 'Interval',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnApp: 'string',
      esnBiz: 'string',
      startTime: 'number',
      endTime: 'number',
      page: 'number',
      pageSize: 'number',
      type: 'string',
      interval: 'number',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticResultByEsnBizISPIntervalResponseBody extends $tea.Model {
  requestId?: string;
  statistic?: DescribeSDKStatisticResultByEsnBizISPIntervalResponseBodyStatistic[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: { 'type': 'array', 'itemType': DescribeSDKStatisticResultByEsnBizISPIntervalResponseBodyStatistic },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticResultByEsnBizISPIntervalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSDKStatisticResultByEsnBizISPIntervalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSDKStatisticResultByEsnBizISPIntervalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticResultByEsnBizProvince1DayRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnApp?: string;
  esnBiz?: string;
  startTime?: number;
  endTime?: number;
  page?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnApp: 'EsnApp',
      esnBiz: 'EsnBiz',
      startTime: 'StartTime',
      endTime: 'EndTime',
      page: 'Page',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnApp: 'string',
      esnBiz: 'string',
      startTime: 'number',
      endTime: 'number',
      page: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticResultByEsnBizProvince1DayResponseBody extends $tea.Model {
  requestId?: string;
  statistic?: DescribeSDKStatisticResultByEsnBizProvince1DayResponseBodyStatistic[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: { 'type': 'array', 'itemType': DescribeSDKStatisticResultByEsnBizProvince1DayResponseBodyStatistic },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticResultByEsnBizProvince1DayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSDKStatisticResultByEsnBizProvince1DayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSDKStatisticResultByEsnBizProvince1DayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticResultByEsnBizProvince30MRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnApp?: string;
  esnBiz?: string;
  time?: number;
  page?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnApp: 'EsnApp',
      esnBiz: 'EsnBiz',
      time: 'Time',
      page: 'Page',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnApp: 'string',
      esnBiz: 'string',
      time: 'number',
      page: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticResultByEsnBizProvince30MResponseBody extends $tea.Model {
  requestId?: string;
  statistic?: DescribeSDKStatisticResultByEsnBizProvince30MResponseBodyStatistic[];
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: { 'type': 'array', 'itemType': DescribeSDKStatisticResultByEsnBizProvince30MResponseBodyStatistic },
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticResultByEsnBizProvince30MResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSDKStatisticResultByEsnBizProvince30MResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSDKStatisticResultByEsnBizProvince30MResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceFailureTopIpRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnBizId?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnBizId: 'EsnBizId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnBizId: 'string',
      startTime: 'number',
      endTime: 'number',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceFailureTopIpResponseBody extends $tea.Model {
  topIps?: DescribeSourceFailureTopIpResponseBodyTopIps[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      topIps: 'TopIps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topIps: { 'type': 'array', 'itemType': DescribeSourceFailureTopIpResponseBodyTopIps },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceFailureTopIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSourceFailureTopIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSourceFailureTopIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceFailureTrendGraphRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnBizId?: string;
  startTime?: number;
  endTime?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnBizId: 'EsnBizId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnBizId: 'string',
      startTime: 'number',
      endTime: 'number',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceFailureTrendGraphResponseBody extends $tea.Model {
  requestId?: string;
  trendGraph?: DescribeSourceFailureTrendGraphResponseBodyTrendGraph[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trendGraph: 'TrendGraph',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trendGraph: { 'type': 'array', 'itemType': DescribeSourceFailureTrendGraphResponseBodyTrendGraph },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceFailureTrendGraphResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSourceFailureTrendGraphResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSourceFailureTrendGraphResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadPreSignRequest extends $tea.Model {
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

export class DescribeUploadPreSignResponseBody extends $tea.Model {
  policy?: string;
  requestId?: string;
  accessId?: string;
  signature?: string;
  promptInfo?: { [key: string]: any };
  host?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
      accessId: 'AccessId',
      signature: 'Signature',
      promptInfo: 'PromptInfo',
      host: 'Host',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      requestId: 'string',
      accessId: 'string',
      signature: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      host: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadPreSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUploadPreSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUploadPreSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowInfoRequest extends $tea.Model {
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

export class DescribeUserFlowInfoResponseBody extends $tea.Model {
  flowInfo?: DescribeUserFlowInfoResponseBodyFlowInfo;
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      flowInfo: 'FlowInfo',
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowInfo: DescribeUserFlowInfoResponseBodyFlowInfo,
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserFlowInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserFlowInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowReportRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  endTime?: number;
  interval?: number;
  startTime?: number;
  esnGroupId?: string;
  esnBizId?: number;
  esnAppId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      endTime: 'EndTime',
      interval: 'Interval',
      startTime: 'StartTime',
      esnGroupId: 'EsnGroupId',
      esnBizId: 'EsnBizId',
      esnAppId: 'EsnAppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      endTime: 'number',
      interval: 'number',
      startTime: 'number',
      esnGroupId: 'string',
      esnBizId: 'number',
      esnAppId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowReportResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  flowReport?: DescribeUserFlowReportResponseBodyFlowReport;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
      flowReport: 'FlowReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      flowReport: DescribeUserFlowReportResponseBodyFlowReport,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserFlowReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserFlowReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTotalFlowReportRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  endTime?: number;
  interval?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      endTime: 'EndTime',
      interval: 'Interval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      endTime: 'number',
      interval: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTotalFlowReportResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  flowReport?: DescribeUserTotalFlowReportResponseBodyFlowReport;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
      flowReport: 'FlowReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      flowReport: DescribeUserTotalFlowReportResponseBodyFlowReport,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTotalFlowReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserTotalFlowReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserTotalFlowReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadAppKeyFileRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appId?: number;
  platform?: string;
  keyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appId: 'AppId',
      platform: 'Platform',
      keyVersion: 'KeyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appId: 'number',
      platform: 'string',
      keyVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadAppKeyFileResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  downloadLinkResult?: DownloadAppKeyFileResponseBodyDownloadLinkResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
      downloadLinkResult: 'DownloadLinkResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      downloadLinkResult: DownloadAppKeyFileResponseBodyDownloadLinkResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadAppKeyFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadAppKeyFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadAppKeyFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadCcRouteRulesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadCcRouteRulesResponseBody extends $tea.Model {
  downloadFileResult?: DownloadCcRouteRulesResponseBodyDownloadFileResult;
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      downloadFileResult: 'DownloadFileResult',
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadFileResult: DownloadCcRouteRulesResponseBodyDownloadFileResult,
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadCcRouteRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadCcRouteRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadCcRouteRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFlexAccRulesFileRequest extends $tea.Model {
  sourceIp?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFlexAccRulesFileResponseBody extends $tea.Model {
  downloadFileResult?: DownloadFlexAccRulesFileResponseBodyDownloadFileResult;
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      downloadFileResult: 'DownloadFileResult',
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadFileResult: DownloadFlexAccRulesFileResponseBodyDownloadFileResult,
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFlexAccRulesFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadFlexAccRulesFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadFlexAccRulesFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadLayer4RulesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadLayer4RulesResponseBody extends $tea.Model {
  downloadFileResult?: DownloadLayer4RulesResponseBodyDownloadFileResult;
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      downloadFileResult: 'DownloadFileResult',
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadFileResult: DownloadLayer4RulesResponseBodyDownloadFileResult,
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadLayer4RulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadLayer4RulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadLayer4RulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadSdkFileRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appId?: number;
  sdkVersion?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appId: 'AppId',
      sdkVersion: 'SdkVersion',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appId: 'number',
      sdkVersion: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadSdkFileResponseBody extends $tea.Model {
  downloadFileResult?: DownloadSdkFileResponseBodyDownloadFileResult;
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      downloadFileResult: 'DownloadFileResult',
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadFileResult: DownloadSdkFileResponseBodyDownloadFileResult,
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadSdkFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadSdkFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadSdkFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadUserTotalFlowReportRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  startTime?: number;
  endTime?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      startTime: 'number',
      endTime: 'number',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadUserTotalFlowReportResponseBody extends $tea.Model {
  downloadFileResult?: DownloadUserTotalFlowReportResponseBodyDownloadFileResult;
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      downloadFileResult: 'DownloadFileResult',
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadFileResult: DownloadUserTotalFlowReportResponseBodyDownloadFileResult,
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadUserTotalFlowReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadUserTotalFlowReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadUserTotalFlowReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlushLayer4RulesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlushLayer4RulesResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlushLayer4RulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FlushLayer4RulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FlushLayer4RulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReallocNgResourceRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: string;
  ccQps?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      ccQps: 'CcQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'string',
      ccQps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReallocNgResourceResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReallocNgResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReallocNgResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReallocNgResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceCcRouteRulesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  routeList?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      routeList: 'RouteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      routeList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceCcRouteRulesResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceCcRouteRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReplaceCcRouteRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReplaceCcRouteRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFlexFwdRulesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnBizId?: number;
  keyword?: string;
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnBizId: 'EsnBizId',
      keyword: 'Keyword',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnBizId: 'number',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFlexFwdRulesResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  promptInfo?: { [key: string]: any };
  flexFwdRules?: SearchFlexFwdRulesResponseBodyFlexFwdRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      promptInfo: 'PromptInfo',
      flexFwdRules: 'FlexFwdRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      flexFwdRules: { 'type': 'array', 'itemType': SearchFlexFwdRulesResponseBodyFlexFwdRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFlexFwdRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchFlexFwdRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchFlexFwdRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appName?: string;
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appName: 'AppName',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appName: 'string',
      appId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcBlackListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  ips?: string;
  actionType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      ips: 'Ips',
      actionType: 'ActionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      ips: 'string',
      actionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcBlackListResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcBlackListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCcBlackListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCcBlackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcIDCBlockSwitchRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      enable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcIDCBlockSwitchResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcIDCBlockSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCcIDCBlockSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCcIDCBlockSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcRouteRulesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  routelist?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      routelist: 'Routelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      routelist: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcRouteRulesResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcRouteRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCcRouteRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCcRouteRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcRouteSwitchRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      enable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcRouteSwitchResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcRouteSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCcRouteSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCcRouteSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcTunnelGrayAndOnlyAllowRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: string;
  onlyAllow?: number;
  gray?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      onlyAllow: 'OnlyAllow',
      gray: 'Gray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'string',
      onlyAllow: 'number',
      gray: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcTunnelGrayAndOnlyAllowResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcTunnelGrayAndOnlyAllowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCcTunnelGrayAndOnlyAllowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCcTunnelGrayAndOnlyAllowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcTunnelStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcTunnelStatusResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcTunnelStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCcTunnelStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCcTunnelStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcUseRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  actionType?: string;
  ccQps?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      actionType: 'ActionType',
      ccQps: 'CcQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      actionType: 'string',
      ccQps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcUseResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcUseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCcUseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCcUseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcWhiteListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  ips?: string;
  actionType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      ips: 'Ips',
      actionType: 'ActionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      ips: 'string',
      actionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcWhiteListResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCcWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCcWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcZoneBlockConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcZoneBlockConfigResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcZoneBlockConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCcZoneBlockConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCcZoneBlockConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcZoneBlockStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      enable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcZoneBlockStatusResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcZoneBlockStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCcZoneBlockStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCcZoneBlockStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexAccFwdRuleRequest extends $tea.Model {
  sourceIp?: string;
  esnBizId?: number;
  identity?: string;
  protocolEx?: string;
  ipList?: string;
  domainList?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      esnBizId: 'EsnBizId',
      identity: 'Identity',
      protocolEx: 'ProtocolEx',
      ipList: 'IpList',
      domainList: 'DomainList',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      esnBizId: 'number',
      identity: 'string',
      protocolEx: 'string',
      ipList: 'string',
      domainList: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexAccFwdRuleResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexAccFwdRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFlexAccFwdRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFlexAccFwdRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexAccFwdRuleV2Request extends $tea.Model {
  sourceIp?: string;
  bizId?: number;
  identity?: string;
  ipList?: string;
  protocolEx?: string;
  domainList?: string;
  remark?: string;
  masterIpList?: string;
  slaveIpList?: string;
  accType?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      bizId: 'BizId',
      identity: 'Identity',
      ipList: 'IpList',
      protocolEx: 'ProtocolEx',
      domainList: 'DomainList',
      remark: 'Remark',
      masterIpList: 'MasterIpList',
      slaveIpList: 'SlaveIpList',
      accType: 'AccType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      bizId: 'number',
      identity: 'string',
      ipList: 'string',
      protocolEx: 'string',
      domainList: 'string',
      remark: 'string',
      masterIpList: 'string',
      slaveIpList: 'string',
      accType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexAccFwdRuleV2ResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexAccFwdRuleV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFlexAccFwdRuleV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFlexAccFwdRuleV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexAccStatusRequest extends $tea.Model {
  sourceIp?: string;
  bizId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      bizId: 'BizId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      bizId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexAccStatusResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexAccStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFlexAccStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFlexAccStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexAccTcpPortsRequest extends $tea.Model {
  sourceIp?: string;
  esnBizId?: number;
  ports?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      esnBizId: 'EsnBizId',
      ports: 'Ports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      esnBizId: 'number',
      ports: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexAccTcpPortsResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexAccTcpPortsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFlexAccTcpPortsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFlexAccTcpPortsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexAccUdpPortsRequest extends $tea.Model {
  sourceIp?: string;
  esnBizId?: number;
  ports?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      esnBizId: 'EsnBizId',
      ports: 'Ports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      esnBizId: 'number',
      ports: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexAccUdpPortsResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexAccUdpPortsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFlexAccUdpPortsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFlexAccUdpPortsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexBackupGroupsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnBizId?: number;
  groupId?: string;
  backupGroupPolicy?: number;
  backups?: string;
  sharedBackups?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnBizId: 'EsnBizId',
      groupId: 'GroupId',
      backupGroupPolicy: 'BackupGroupPolicy',
      backups: 'Backups',
      sharedBackups: 'SharedBackups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnBizId: 'number',
      groupId: 'string',
      backupGroupPolicy: 'number',
      backups: 'string',
      sharedBackups: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexBackupGroupsResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexBackupGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFlexBackupGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFlexBackupGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexFwdRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  identity?: string;
  masterIpList?: string;
  slaveIpList?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      identity: 'Identity',
      masterIpList: 'MasterIpList',
      slaveIpList: 'SlaveIpList',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      identity: 'string',
      masterIpList: 'string',
      slaveIpList: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexFwdRuleResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexFwdRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFlexFwdRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFlexFwdRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexInnerPolicyRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnBizId?: number;
  groupId?: string;
  groupInnerPolicy?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnBizId: 'EsnBizId',
      groupId: 'GroupId',
      groupInnerPolicy: 'GroupInnerPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnBizId: 'number',
      groupId: 'string',
      groupInnerPolicy: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexInnerPolicyResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexInnerPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFlexInnerPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFlexInnerPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexLinkTypeRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnBizId?: number;
  linkType?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnBizId: 'EsnBizId',
      linkType: 'LinkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnBizId: 'number',
      linkType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexLinkTypeResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexLinkTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFlexLinkTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFlexLinkTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexPortsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  esnBizId?: number;
  ports?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      esnBizId: 'EsnBizId',
      ports: 'Ports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      esnBizId: 'number',
      ports: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexPortsResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexPortsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFlexPortsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFlexPortsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexStatusResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlexStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFlexStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFlexStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  groupId?: string;
  groupDesc?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      groupId: 'GroupId',
      groupDesc: 'GroupDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      groupId: 'string',
      groupDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupDnsStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  groupId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      groupId: 'GroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      groupId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupDnsStatusResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupDnsStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateGroupDnsStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateGroupDnsStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupNodesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  groupId?: string;
  ipList?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      groupId: 'GroupId',
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      groupId: 'string',
      ipList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupNodesResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateGroupNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateGroupNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  groupId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      groupId: 'GroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      groupId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupStatusResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateGroupStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateGroupStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLayer4RuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  frontPort?: number;
  rservers?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      frontPort: 'FrontPort',
      rservers: 'Rservers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      frontPort: 'number',
      rservers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLayer4RuleResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLayer4RuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLayer4RuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLayer4RuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCcRouteFileForParseRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  fileKey?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      fileKey: 'FileKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      fileKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCcRouteFileForParseResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  promptInfo?: { [key: string]: any };
  routeRules?: UploadCcRouteFileForParseResponseBodyRouteRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      promptInfo: 'PromptInfo',
      routeRules: 'RouteRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      routeRules: { 'type': 'array', 'itemType': UploadCcRouteFileForParseResponseBodyRouteRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCcRouteFileForParseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadCcRouteFileForParseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadCcRouteFileForParseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCcWhiteBlackListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizId?: number;
  BWList?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizId: 'BizId',
      BWList: 'BWList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizId: 'number',
      BWList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCcWhiteBlackListResponseBody extends $tea.Model {
  requestId?: string;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCcWhiteBlackListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadCcWhiteBlackListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadCcWhiteBlackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFlexAccRulesFileForParseRequest extends $tea.Model {
  sourceIp?: string;
  fileKey?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      fileKey: 'FileKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      fileKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFlexAccRulesFileForParseResponseBody extends $tea.Model {
  flexAccFwdRules?: UploadFlexAccRulesFileForParseResponseBodyFlexAccFwdRules[];
  requestId?: string;
  total?: number;
  promptInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      flexAccFwdRules: 'FlexAccFwdRules',
      requestId: 'RequestId',
      total: 'Total',
      promptInfo: 'PromptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flexAccFwdRules: { 'type': 'array', 'itemType': UploadFlexAccRulesFileForParseResponseBodyFlexAccFwdRules },
      requestId: 'string',
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFlexAccRulesFileForParseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadFlexAccRulesFileForParseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadFlexAccRulesFileForParseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFlexRulesFileForParseRequest extends $tea.Model {
  sourceIp?: string;
  fileKey?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      fileKey: 'FileKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      fileKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFlexRulesFileForParseResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  flexFwdRules?: UploadFlexRulesFileForParseResponseBodyFlexFwdRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      flexFwdRules: 'FlexFwdRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      flexFwdRules: { 'type': 'array', 'itemType': UploadFlexRulesFileForParseResponseBodyFlexFwdRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFlexRulesFileForParseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadFlexRulesFileForParseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadFlexRulesFileForParseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadL4RulesFileForParseRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  fileKey?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      fileKey: 'FileKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      fileKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadL4RulesFileForParseResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  promptInfo?: { [key: string]: any };
  l4RuleList?: UploadL4RulesFileForParseResponseBodyL4RuleList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      promptInfo: 'PromptInfo',
      l4RuleList: 'L4RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      promptInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      l4RuleList: { 'type': 'array', 'itemType': UploadL4RulesFileForParseResponseBodyL4RuleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadL4RulesFileForParseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadL4RulesFileForParseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadL4RulesFileForParseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccResSummaryResponseBodyFullNodesSummaryNodes extends $tea.Model {
  type?: number;
  bizId?: string;
  ip?: string;
  regionId?: string;
  appName?: string;
  regionName?: string;
  groupId?: string;
  appId?: string;
  inUse?: number;
  bizName?: string;
  ddosStatus?: number;
  isDisabled?: boolean;
  threshold?: number;
  esnBizId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      bizId: 'BizId',
      ip: 'Ip',
      regionId: 'RegionId',
      appName: 'AppName',
      regionName: 'RegionName',
      groupId: 'GroupId',
      appId: 'AppId',
      inUse: 'InUse',
      bizName: 'BizName',
      ddosStatus: 'DdosStatus',
      isDisabled: 'IsDisabled',
      threshold: 'Threshold',
      esnBizId: 'EsnBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      bizId: 'string',
      ip: 'string',
      regionId: 'string',
      appName: 'string',
      regionName: 'string',
      groupId: 'string',
      appId: 'string',
      inUse: 'number',
      bizName: 'string',
      ddosStatus: 'number',
      isDisabled: 'boolean',
      threshold: 'number',
      esnBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccResSummaryResponseBodyFullNodesSummary extends $tea.Model {
  nodes?: DescribeAccResSummaryResponseBodyFullNodesSummaryNodes[];
  cleanCount?: number;
  holeCount?: number;
  usedCount?: number;
  unUsedCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      cleanCount: 'CleanCount',
      holeCount: 'HoleCount',
      usedCount: 'UsedCount',
      unUsedCount: 'UnUsedCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeAccResSummaryResponseBodyFullNodesSummaryNodes },
      cleanCount: 'number',
      holeCount: 'number',
      usedCount: 'number',
      unUsedCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllLocalIpsResponseBodyLocalIps extends $tea.Model {
  bgp?: string[];
  gf?: string[];
  static names(): { [key: string]: string } {
    return {
      bgp: 'Bgp',
      gf: 'Gf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgp: { 'type': 'array', 'itemType': 'string' },
      gf: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDailyDetailsResponseBodyAppDailyDetails extends $tea.Model {
  iosActiveCount?: number;
  index?: number;
  androidCount?: number;
  iosCount?: number;
  newCount?: number;
  ipActiveCount?: number;
  activeCount?: number;
  count?: number;
  androidActiveCount?: number;
  static names(): { [key: string]: string } {
    return {
      iosActiveCount: 'IosActiveCount',
      index: 'Index',
      androidCount: 'AndroidCount',
      iosCount: 'IosCount',
      newCount: 'NewCount',
      ipActiveCount: 'IpActiveCount',
      activeCount: 'ActiveCount',
      count: 'Count',
      androidActiveCount: 'AndroidActiveCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iosActiveCount: 'number',
      index: 'number',
      androidCount: 'number',
      iosCount: 'number',
      newCount: 'number',
      ipActiveCount: 'number',
      activeCount: 'number',
      count: 'number',
      androidActiveCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppDailySdkVersionsResponseBodyAppDailySdkVersions extends $tea.Model {
  index?: number;
  version?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      version: 'Version',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      version: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppListResponseBodyAppList extends $tea.Model {
  oldAppKey?: string;
  appName?: string;
  appKey?: string;
  appId?: number;
  hasOldAppKey?: boolean;
  sdkVersion?: string;
  bizNum?: number;
  groupNum?: number;
  nodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      oldAppKey: 'OldAppKey',
      appName: 'AppName',
      appKey: 'AppKey',
      appId: 'AppId',
      hasOldAppKey: 'HasOldAppKey',
      sdkVersion: 'SdkVersion',
      bizNum: 'BizNum',
      groupNum: 'GroupNum',
      nodeNum: 'NodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oldAppKey: 'string',
      appName: 'string',
      appKey: 'string',
      appId: 'number',
      hasOldAppKey: 'boolean',
      sdkVersion: 'string',
      bizNum: 'number',
      groupNum: 'number',
      nodeNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSimpleListResponseBodyAppSimpleList extends $tea.Model {
  appName?: string;
  ngAppId?: string;
  appId?: number;
  esnAppId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      ngAppId: 'NgAppId',
      appId: 'AppId',
      esnAppId: 'EsnAppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      ngAppId: 'string',
      appId: 'number',
      esnAppId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAsyncOperationResponseBodyAsyncOperation extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomaticTraceabilitySlsLogResponseBodyStatistic extends $tea.Model {
  sourceIp?: string;
  time?: string;
  token?: string;
  point?: string;
  ip?: string;
  sourceIpLocation?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      time: 'Time',
      token: 'Token',
      point: 'Point',
      ip: 'Ip',
      sourceIpLocation: 'SourceIpLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      time: 'string',
      token: 'string',
      point: 'string',
      ip: 'string',
      sourceIpLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpResSummaryResponseBodyFullNodesSummaryNodes extends $tea.Model {
  type?: number;
  bizId?: string;
  ip?: string;
  regionId?: string;
  appName?: string;
  regionName?: string;
  groupId?: string;
  appId?: string;
  inUse?: number;
  bizName?: string;
  ddosStatus?: number;
  isDisabled?: boolean;
  threshold?: number;
  esnBizId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      bizId: 'BizId',
      ip: 'Ip',
      regionId: 'RegionId',
      appName: 'AppName',
      regionName: 'RegionName',
      groupId: 'GroupId',
      appId: 'AppId',
      inUse: 'InUse',
      bizName: 'BizName',
      ddosStatus: 'DdosStatus',
      isDisabled: 'IsDisabled',
      threshold: 'Threshold',
      esnBizId: 'EsnBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      bizId: 'string',
      ip: 'string',
      regionId: 'string',
      appName: 'string',
      regionName: 'string',
      groupId: 'string',
      appId: 'string',
      inUse: 'number',
      bizName: 'string',
      ddosStatus: 'number',
      isDisabled: 'boolean',
      threshold: 'number',
      esnBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpResSummaryResponseBodyFullNodesSummary extends $tea.Model {
  nodes?: DescribeBgpResSummaryResponseBodyFullNodesSummaryNodes[];
  cleanCount?: number;
  holeCount?: number;
  usedCount?: number;
  unUsedCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      cleanCount: 'CleanCount',
      holeCount: 'HoleCount',
      usedCount: 'UsedCount',
      unUsedCount: 'UnUsedCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeBgpResSummaryResponseBodyFullNodesSummaryNodes },
      cleanCount: 'number',
      holeCount: 'number',
      usedCount: 'number',
      unUsedCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizListResponseBodyBizList extends $tea.Model {
  type?: number;
  nodeInUseNum?: number;
  ngGroupId?: string;
  useCc?: number;
  bizId?: number;
  groupNum?: number;
  nodeUnUseNum?: number;
  appId?: number;
  bizName?: string;
  nodeNum?: number;
  esnBizId?: string;
  ccQps?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      nodeInUseNum: 'NodeInUseNum',
      ngGroupId: 'NgGroupId',
      useCc: 'UseCc',
      bizId: 'BizId',
      groupNum: 'GroupNum',
      nodeUnUseNum: 'NodeUnUseNum',
      appId: 'AppId',
      bizName: 'BizName',
      nodeNum: 'NodeNum',
      esnBizId: 'EsnBizId',
      ccQps: 'CcQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      nodeInUseNum: 'number',
      ngGroupId: 'string',
      useCc: 'number',
      bizId: 'number',
      groupNum: 'number',
      nodeUnUseNum: 'number',
      appId: 'number',
      bizName: 'string',
      nodeNum: 'number',
      esnBizId: 'string',
      ccQps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizSimpleListResponseBodyBizSimpleList extends $tea.Model {
  type?: number;
  ngGroupId?: string;
  appId?: number;
  useCc?: number;
  bizId?: number;
  bizName?: string;
  esnBizId?: string;
  ccQps?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      ngGroupId: 'NgGroupId',
      appId: 'AppId',
      useCc: 'UseCc',
      bizId: 'BizId',
      bizName: 'BizName',
      esnBizId: 'EsnBizId',
      ccQps: 'CcQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      ngGroupId: 'string',
      appId: 'number',
      useCc: 'number',
      bizId: 'number',
      bizName: 'string',
      esnBizId: 'string',
      ccQps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBpsFlowResponseBodyFlowDataItems extends $tea.Model {
  values?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBpsFlowResponseBodyFlowDataTimeScope extends $tea.Model {
  start?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'number',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBpsFlowResponseBodyFlowData extends $tea.Model {
  items?: DescribeBpsFlowResponseBodyFlowDataItems[];
  categories?: string[];
  timeScope?: DescribeBpsFlowResponseBodyFlowDataTimeScope;
  categoriesType?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      categories: 'Categories',
      timeScope: 'TimeScope',
      categoriesType: 'CategoriesType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeBpsFlowResponseBodyFlowDataItems },
      categories: { 'type': 'array', 'itemType': 'string' },
      timeScope: DescribeBpsFlowResponseBodyFlowDataTimeScope,
      categoriesType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcFlowResponseBodyFlowDataItems extends $tea.Model {
  values?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcFlowResponseBodyFlowDataTimeScope extends $tea.Model {
  start?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'number',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcFlowResponseBodyFlowData extends $tea.Model {
  items?: DescribeCcFlowResponseBodyFlowDataItems[];
  categories?: string[];
  timeScope?: DescribeCcFlowResponseBodyFlowDataTimeScope;
  categoriesType?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      categories: 'Categories',
      timeScope: 'TimeScope',
      categoriesType: 'CategoriesType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeCcFlowResponseBodyFlowDataItems },
      categories: { 'type': 'array', 'itemType': 'string' },
      timeScope: DescribeCcFlowResponseBodyFlowDataTimeScope,
      categoriesType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcIDCBlockSwitchResponseBodyCcSwitch extends $tea.Model {
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcMaxFwResponseBodyFwMaxInfoList extends $tea.Model {
  inWhiteList?: boolean;
  time?: number;
  sourceIp?: string;
  destPort?: number;
  action?: number;
  protocol?: number;
  inBlackList?: boolean;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      inWhiteList: 'InWhiteList',
      time: 'Time',
      sourceIp: 'SourceIp',
      destPort: 'DestPort',
      action: 'Action',
      protocol: 'Protocol',
      inBlackList: 'InBlackList',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inWhiteList: 'boolean',
      time: 'number',
      sourceIp: 'string',
      destPort: 'number',
      action: 'number',
      protocol: 'number',
      inBlackList: 'boolean',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcResSummaryResponseBodyFullNodesSummaryNGResInfoList extends $tea.Model {
  appName?: string;
  appId?: string;
  usedQps?: number;
  bizName?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appId: 'AppId',
      usedQps: 'UsedQps',
      bizName: 'BizName',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appId: 'string',
      usedQps: 'number',
      bizName: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcResSummaryResponseBodyFullNodesSummary extends $tea.Model {
  unUsedQps?: number;
  usedQps?: number;
  totalQps?: number;
  NGResInfoList?: DescribeCcResSummaryResponseBodyFullNodesSummaryNGResInfoList[];
  static names(): { [key: string]: string } {
    return {
      unUsedQps: 'UnUsedQps',
      usedQps: 'UsedQps',
      totalQps: 'TotalQps',
      NGResInfoList: 'NGResInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unUsedQps: 'number',
      usedQps: 'number',
      totalQps: 'number',
      NGResInfoList: { 'type': 'array', 'itemType': DescribeCcResSummaryResponseBodyFullNodesSummaryNGResInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcRouteRulesResponseBodyRuleQueryResultRouteRules extends $tea.Model {
  comment?: string;
  rservers?: string[];
  id?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      rservers: 'Rservers',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      rservers: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcRouteRulesResponseBodyRuleQueryResult extends $tea.Model {
  appId?: string;
  routeRules?: DescribeCcRouteRulesResponseBodyRuleQueryResultRouteRules[];
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      routeRules: 'RouteRules',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      routeRules: { 'type': 'array', 'itemType': DescribeCcRouteRulesResponseBodyRuleQueryResultRouteRules },
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcRouteSwitchResponseBodySwitch extends $tea.Model {
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcSocketDetailResponseBodyFlowDataItems extends $tea.Model {
  values?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcSocketDetailResponseBodyFlowDataTimeScope extends $tea.Model {
  start?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'number',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcSocketDetailResponseBodyFlowData extends $tea.Model {
  items?: DescribeCcSocketDetailResponseBodyFlowDataItems[];
  categories?: string[];
  timeScope?: DescribeCcSocketDetailResponseBodyFlowDataTimeScope;
  categoriesType?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      categories: 'Categories',
      timeScope: 'TimeScope',
      categoriesType: 'CategoriesType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeCcSocketDetailResponseBodyFlowDataItems },
      categories: { 'type': 'array', 'itemType': 'string' },
      timeScope: DescribeCcSocketDetailResponseBodyFlowDataTimeScope,
      categoriesType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcTotalFwResponseBodyFwTotalInfoList extends $tea.Model {
  inWhiteList?: boolean;
  time?: number;
  sourceIp?: string;
  attackType?: string;
  inBlackList?: boolean;
  count?: number;
  sourceLocation?: string;
  static names(): { [key: string]: string } {
    return {
      inWhiteList: 'InWhiteList',
      time: 'Time',
      sourceIp: 'SourceIp',
      attackType: 'AttackType',
      inBlackList: 'InBlackList',
      count: 'Count',
      sourceLocation: 'SourceLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inWhiteList: 'boolean',
      time: 'number',
      sourceIp: 'string',
      attackType: 'string',
      inBlackList: 'boolean',
      count: 'number',
      sourceLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcTunnelResponseBodyCcTunnel extends $tea.Model {
  status?: string;
  onlyAllow?: boolean;
  gray?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      onlyAllow: 'OnlyAllow',
      gray: 'Gray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      onlyAllow: 'boolean',
      gray: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcZoneBlockConfigResponseBodyBlockConfigCcZones extends $tea.Model {
  provinces?: string[];
  country?: string;
  static names(): { [key: string]: string } {
    return {
      provinces: 'Provinces',
      country: 'Country',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provinces: { 'type': 'array', 'itemType': 'string' },
      country: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcZoneBlockConfigResponseBodyBlockConfig extends $tea.Model {
  ccZones?: DescribeCcZoneBlockConfigResponseBodyBlockConfigCcZones[];
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      ccZones: 'CcZones',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccZones: { 'type': 'array', 'itemType': DescribeCcZoneBlockConfigResponseBodyBlockConfigCcZones },
      enable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDailyDetailsResponseBodyDailyDetails extends $tea.Model {
  iosActiveCount?: number;
  index?: number;
  androidCount?: number;
  iosCount?: number;
  newCount?: number;
  ipActiveCount?: number;
  activeCount?: number;
  count?: number;
  androidActiveCount?: number;
  static names(): { [key: string]: string } {
    return {
      iosActiveCount: 'IosActiveCount',
      index: 'Index',
      androidCount: 'AndroidCount',
      iosCount: 'IosCount',
      newCount: 'NewCount',
      ipActiveCount: 'IpActiveCount',
      activeCount: 'ActiveCount',
      count: 'Count',
      androidActiveCount: 'AndroidActiveCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iosActiveCount: 'number',
      index: 'number',
      androidCount: 'number',
      iosCount: 'number',
      newCount: 'number',
      ipActiveCount: 'number',
      activeCount: 'number',
      count: 'number',
      androidActiveCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadUrlsForAppKeyResponseBodyUrlResultUrls extends $tea.Model {
  android?: string;
  wins?: string;
  IOS?: string;
  static names(): { [key: string]: string } {
    return {
      android: 'Android',
      wins: 'Wins',
      IOS: 'IOS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      android: 'string',
      wins: 'string',
      IOS: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadUrlsForAppKeyResponseBodyUrlResult extends $tea.Model {
  appId?: number;
  urls?: DescribeDownloadUrlsForAppKeyResponseBodyUrlResultUrls;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      urls: 'Urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      urls: DescribeDownloadUrlsForAppKeyResponseBodyUrlResultUrls,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadUrlsForSDKResponseBodyUrlResultUrls extends $tea.Model {
  android?: string;
  wins?: string;
  IOS?: string;
  static names(): { [key: string]: string } {
    return {
      android: 'Android',
      wins: 'Wins',
      IOS: 'IOS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      android: 'string',
      wins: 'string',
      IOS: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadUrlsForSDKResponseBodyUrlResult extends $tea.Model {
  appId?: number;
  urls?: DescribeDownloadUrlsForSDKResponseBodyUrlResultUrls;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      urls: 'Urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      urls: DescribeDownloadUrlsForSDKResponseBodyUrlResultUrls,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexAccConfigResponseBodyFlexAccConfig extends $tea.Model {
  status?: number;
  tcpPorts?: string;
  udpPorts?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      tcpPorts: 'TcpPorts',
      udpPorts: 'UdpPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      tcpPorts: 'string',
      udpPorts: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexAccFlowResponseBodyFlowDataItems extends $tea.Model {
  values?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexAccFlowResponseBodyFlowDataTimeScope extends $tea.Model {
  start?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'number',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexAccFlowResponseBodyFlowData extends $tea.Model {
  items?: DescribeFlexAccFlowResponseBodyFlowDataItems[];
  categories?: string[];
  timeScope?: DescribeFlexAccFlowResponseBodyFlowDataTimeScope;
  categoriesType?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      categories: 'Categories',
      timeScope: 'TimeScope',
      categoriesType: 'CategoriesType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeFlexAccFlowResponseBodyFlowDataItems },
      categories: { 'type': 'array', 'itemType': 'string' },
      timeScope: DescribeFlexAccFlowResponseBodyFlowDataTimeScope,
      categoriesType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexAccFwdRulesResponseBodyFlexAccFwdRules extends $tea.Model {
  masterIpList?: string;
  remark?: string;
  slaveIpList?: string;
  identity?: string;
  protocol?: string;
  accType?: number;
  ipList?: string;
  domainList?: string;
  static names(): { [key: string]: string } {
    return {
      masterIpList: 'MasterIpList',
      remark: 'Remark',
      slaveIpList: 'SlaveIpList',
      identity: 'Identity',
      protocol: 'Protocol',
      accType: 'AccType',
      ipList: 'IpList',
      domainList: 'DomainList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterIpList: 'string',
      remark: 'string',
      slaveIpList: 'string',
      identity: 'string',
      protocol: 'string',
      accType: 'number',
      ipList: 'string',
      domainList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexBackupGroupsResponseBodyAllBackupGroupsSharedGroups extends $tea.Model {
  status?: number;
  groupId?: string;
  specDesc?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      groupId: 'GroupId',
      specDesc: 'SpecDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      groupId: 'string',
      specDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexBackupGroupsResponseBodyAllBackupGroupsBackupGroups extends $tea.Model {
  status?: number;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexBackupGroupsResponseBodyAllBackupGroups extends $tea.Model {
  sharedGroups?: DescribeFlexBackupGroupsResponseBodyAllBackupGroupsSharedGroups[];
  backupGroups?: DescribeFlexBackupGroupsResponseBodyAllBackupGroupsBackupGroups[];
  static names(): { [key: string]: string } {
    return {
      sharedGroups: 'SharedGroups',
      backupGroups: 'BackupGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sharedGroups: { 'type': 'array', 'itemType': DescribeFlexBackupGroupsResponseBodyAllBackupGroupsSharedGroups },
      backupGroups: { 'type': 'array', 'itemType': DescribeFlexBackupGroupsResponseBodyAllBackupGroupsBackupGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexConfigResponseBodyFlexConfig extends $tea.Model {
  status?: number;
  linkType?: number;
  ports?: string;
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      linkType: 'LinkType',
      ports: 'Ports',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      linkType: 'number',
      ports: 'string',
      rate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexFwdRulesResponseBodyFlexFwdRules extends $tea.Model {
  masterIpList?: string;
  remark?: string;
  slaveIpList?: string;
  protocol?: string;
  identity?: string;
  static names(): { [key: string]: string } {
    return {
      masterIpList: 'MasterIpList',
      remark: 'Remark',
      slaveIpList: 'SlaveIpList',
      protocol: 'Protocol',
      identity: 'Identity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterIpList: 'string',
      remark: 'string',
      slaveIpList: 'string',
      protocol: 'string',
      identity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexSechedPolicyResponseBodyFlexSechedPolicy extends $tea.Model {
  greyGroupPolicy?: number;
  groupInnerPolicy?: number;
  backupGroupPolicy?: number;
  static names(): { [key: string]: string } {
    return {
      greyGroupPolicy: 'GreyGroupPolicy',
      groupInnerPolicy: 'GroupInnerPolicy',
      backupGroupPolicy: 'BackupGroupPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greyGroupPolicy: 'number',
      groupInnerPolicy: 'number',
      backupGroupPolicy: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowReportResponseBodyFlowReport extends $tea.Model {
  index?: number;
  actConns?: number;
  inactConns?: number;
  inBps?: number;
  outBps?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      actConns: 'ActConns',
      inactConns: 'InactConns',
      inBps: 'InBps',
      outBps: 'OutBps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      actConns: 'number',
      inactConns: 'number',
      inBps: 'number',
      outBps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullNodesResponseBodyNodeList extends $tea.Model {
  type?: number;
  bizId?: string;
  ip?: string;
  regionId?: string;
  appName?: string;
  regionName?: string;
  groupId?: string;
  appId?: string;
  inUse?: number;
  bizName?: string;
  ddosStatus?: number;
  isDisabled?: boolean;
  threshold?: number;
  esnBizId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      bizId: 'BizId',
      ip: 'Ip',
      regionId: 'RegionId',
      appName: 'AppName',
      regionName: 'RegionName',
      groupId: 'GroupId',
      appId: 'AppId',
      inUse: 'InUse',
      bizName: 'BizName',
      ddosStatus: 'DdosStatus',
      isDisabled: 'IsDisabled',
      threshold: 'Threshold',
      esnBizId: 'EsnBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      bizId: 'string',
      ip: 'string',
      regionId: 'string',
      appName: 'string',
      regionName: 'string',
      groupId: 'string',
      appId: 'string',
      inUse: 'number',
      bizName: 'string',
      ddosStatus: 'number',
      isDisabled: 'boolean',
      threshold: 'number',
      esnBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullNodesSummaryResponseBodyFullNodesSummaryHolingNodes extends $tea.Model {
  type?: number;
  bizId?: string;
  ip?: string;
  regionId?: string;
  appName?: string;
  regionName?: string;
  groupId?: string;
  appId?: string;
  inUse?: number;
  bizName?: string;
  ddosStatus?: number;
  isDisabled?: boolean;
  threshold?: number;
  esnBizId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      bizId: 'BizId',
      ip: 'Ip',
      regionId: 'RegionId',
      appName: 'AppName',
      regionName: 'RegionName',
      groupId: 'GroupId',
      appId: 'AppId',
      inUse: 'InUse',
      bizName: 'BizName',
      ddosStatus: 'DdosStatus',
      isDisabled: 'IsDisabled',
      threshold: 'Threshold',
      esnBizId: 'EsnBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      bizId: 'string',
      ip: 'string',
      regionId: 'string',
      appName: 'string',
      regionName: 'string',
      groupId: 'string',
      appId: 'string',
      inUse: 'number',
      bizName: 'string',
      ddosStatus: 'number',
      isDisabled: 'boolean',
      threshold: 'number',
      esnBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullNodesSummaryResponseBodyFullNodesSummaryCleaningNodes extends $tea.Model {
  type?: number;
  bizId?: string;
  ip?: string;
  regionId?: string;
  appName?: string;
  regionName?: string;
  groupId?: string;
  appId?: string;
  inUse?: number;
  bizName?: string;
  ddosStatus?: number;
  isDisabled?: boolean;
  threshold?: number;
  esnBizId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      bizId: 'BizId',
      ip: 'Ip',
      regionId: 'RegionId',
      appName: 'AppName',
      regionName: 'RegionName',
      groupId: 'GroupId',
      appId: 'AppId',
      inUse: 'InUse',
      bizName: 'BizName',
      ddosStatus: 'DdosStatus',
      isDisabled: 'IsDisabled',
      threshold: 'Threshold',
      esnBizId: 'EsnBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      bizId: 'string',
      ip: 'string',
      regionId: 'string',
      appName: 'string',
      regionName: 'string',
      groupId: 'string',
      appId: 'string',
      inUse: 'number',
      bizName: 'string',
      ddosStatus: 'number',
      isDisabled: 'boolean',
      threshold: 'number',
      esnBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullNodesSummaryResponseBodyFullNodesSummary extends $tea.Model {
  cleanCount?: number;
  holingNodes?: DescribeFullNodesSummaryResponseBodyFullNodesSummaryHolingNodes[];
  holeCount?: number;
  cleaningNodes?: DescribeFullNodesSummaryResponseBodyFullNodesSummaryCleaningNodes[];
  usedCount?: number;
  unUsedCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cleanCount: 'CleanCount',
      holingNodes: 'HolingNodes',
      holeCount: 'HoleCount',
      cleaningNodes: 'CleaningNodes',
      usedCount: 'UsedCount',
      unUsedCount: 'UnUsedCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanCount: 'number',
      holingNodes: { 'type': 'array', 'itemType': DescribeFullNodesSummaryResponseBodyFullNodesSummaryHolingNodes },
      holeCount: 'number',
      cleaningNodes: { 'type': 'array', 'itemType': DescribeFullNodesSummaryResponseBodyFullNodesSummaryCleaningNodes },
      usedCount: 'number',
      unUsedCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGfResSummaryResponseBodyFullNodesSummaryNodes extends $tea.Model {
  type?: number;
  bizId?: string;
  ip?: string;
  regionId?: string;
  appName?: string;
  regionName?: string;
  groupId?: string;
  appId?: string;
  inUse?: number;
  bizName?: string;
  ddosStatus?: number;
  isDisabled?: boolean;
  threshold?: number;
  esnBizId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      bizId: 'BizId',
      ip: 'Ip',
      regionId: 'RegionId',
      appName: 'AppName',
      regionName: 'RegionName',
      groupId: 'GroupId',
      appId: 'AppId',
      inUse: 'InUse',
      bizName: 'BizName',
      ddosStatus: 'DdosStatus',
      isDisabled: 'IsDisabled',
      threshold: 'Threshold',
      esnBizId: 'EsnBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      bizId: 'string',
      ip: 'string',
      regionId: 'string',
      appName: 'string',
      regionName: 'string',
      groupId: 'string',
      appId: 'string',
      inUse: 'number',
      bizName: 'string',
      ddosStatus: 'number',
      isDisabled: 'boolean',
      threshold: 'number',
      esnBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGfResSummaryResponseBodyFullNodesSummary extends $tea.Model {
  nodes?: DescribeGfResSummaryResponseBodyFullNodesSummaryNodes[];
  cleanCount?: number;
  holeCount?: number;
  usedCount?: number;
  unUsedCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      cleanCount: 'CleanCount',
      holeCount: 'HoleCount',
      usedCount: 'UsedCount',
      unUsedCount: 'UnUsedCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeGfResSummaryResponseBodyFullNodesSummaryNodes },
      cleanCount: 'number',
      holeCount: 'number',
      usedCount: 'number',
      unUsedCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupListResponseBodyGroupList extends $tea.Model {
  status?: string;
  isDnsEnabled?: boolean;
  groupId?: string;
  blackIp?: number;
  normalIp?: number;
  cleanIp?: number;
  totalIp?: number;
  isDisabled?: boolean;
  dnsStatus?: string;
  groupDesc?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      isDnsEnabled: 'IsDnsEnabled',
      groupId: 'GroupId',
      blackIp: 'BlackIp',
      normalIp: 'NormalIp',
      cleanIp: 'CleanIp',
      totalIp: 'TotalIp',
      isDisabled: 'IsDisabled',
      dnsStatus: 'DnsStatus',
      groupDesc: 'GroupDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      isDnsEnabled: 'boolean',
      groupId: 'string',
      blackIp: 'number',
      normalIp: 'number',
      cleanIp: 'number',
      totalIp: 'number',
      isDisabled: 'boolean',
      dnsStatus: 'string',
      groupDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupSimpleListResponseBodyGroupList extends $tea.Model {
  isDnsEnabled?: boolean;
  groupId?: string;
  groupName?: string;
  appId?: string;
  bizId?: string;
  isDisabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      isDnsEnabled: 'IsDnsEnabled',
      groupId: 'GroupId',
      groupName: 'GroupName',
      appId: 'AppId',
      bizId: 'BizId',
      isDisabled: 'IsDisabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDnsEnabled: 'boolean',
      groupId: 'string',
      groupName: 'string',
      appId: 'string',
      bizId: 'string',
      isDisabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceInfo extends $tea.Model {
  endTime?: string;
  status?: number;
  packageCode?: string;
  region?: string;
  specMap?: { [key: string]: any };
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      status: 'Status',
      packageCode: 'PackageCode',
      region: 'Region',
      specMap: 'SpecMap',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      status: 'number',
      packageCode: 'string',
      region: 'string',
      specMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpFlowReportResponseBodyIpFlowReportList extends $tea.Model {
  outpps?: string;
  cps?: string;
  inkbps?: string;
  inpps?: string;
  inbps?: string;
  conns?: boolean;
  inpkts?: string;
  inbytes?: string;
  outbytes?: string;
  clusterName?: string;
  actconns?: string;
  outbps?: string;
  outpkts?: string;
  vip?: string;
  qtime?: string;
  outkbps?: string;
  inactconns?: string;
  static names(): { [key: string]: string } {
    return {
      outpps: 'Outpps',
      cps: 'Cps',
      inkbps: 'Inkbps',
      inpps: 'Inpps',
      inbps: 'Inbps',
      conns: 'Conns',
      inpkts: 'Inpkts',
      inbytes: 'Inbytes',
      outbytes: 'Outbytes',
      clusterName: 'ClusterName',
      actconns: 'Actconns',
      outbps: 'Outbps',
      outpkts: 'Outpkts',
      vip: 'Vip',
      qtime: 'Qtime',
      outkbps: 'Outkbps',
      inactconns: 'Inactconns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outpps: 'string',
      cps: 'string',
      inkbps: 'string',
      inpps: 'string',
      inbps: 'string',
      conns: 'boolean',
      inpkts: 'string',
      inbytes: 'string',
      outbytes: 'string',
      clusterName: 'string',
      actconns: 'string',
      outbps: 'string',
      outpkts: 'string',
      vip: 'string',
      qtime: 'string',
      outkbps: 'string',
      inactconns: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJianYuTestGetResponseBodyData extends $tea.Model {
  createTime?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJianYuTestListResponseBodyList extends $tea.Model {
  createTime?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJianYuTestPaginationResponseBodyList extends $tea.Model {
  createTime?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL4EventsSelectiveResponseBodyEsnL4EventList extends $tea.Model {
  endTime?: number;
  startTime?: number;
  targetRegion?: string;
  attackType?: number;
  result?: number;
  attackSrc?: string;
  duration?: number;
  attackTime?: number;
  maxAttack?: number;
  target?: string;
  targetType?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      targetRegion: 'TargetRegion',
      attackType: 'AttackType',
      result: 'Result',
      attackSrc: 'AttackSrc',
      duration: 'Duration',
      attackTime: 'AttackTime',
      maxAttack: 'MaxAttack',
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      targetRegion: 'string',
      attackType: 'number',
      result: 'number',
      attackSrc: 'string',
      duration: 'number',
      attackTime: 'number',
      maxAttack: 'number',
      target: 'string',
      targetType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesResponseBodyExtInfo extends $tea.Model {
  useCc?: number;
  ngRouteEnable?: number;
  static names(): { [key: string]: string } {
    return {
      useCc: 'UseCc',
      ngRouteEnable: 'NgRouteEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      useCc: 'number',
      ngRouteEnable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesResponseBodyL4RuleList extends $tea.Model {
  protocol?: string;
  appId?: number;
  backPort?: number;
  bizId?: number;
  rservers?: string[];
  lvsPolicy?: string;
  frontPort?: number;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      appId: 'AppId',
      backPort: 'BackPort',
      bizId: 'BizId',
      rservers: 'Rservers',
      lvsPolicy: 'LvsPolicy',
      frontPort: 'FrontPort',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      appId: 'number',
      backPort: 'number',
      bizId: 'number',
      rservers: { 'type': 'array', 'itemType': 'string' },
      lvsPolicy: 'string',
      frontPort: 'number',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMianLiuResSummaryResponseBodyFullNodesSummaryNodes extends $tea.Model {
  type?: number;
  bizId?: string;
  ip?: string;
  regionId?: string;
  appName?: string;
  regionName?: string;
  groupId?: string;
  appId?: string;
  inUse?: number;
  bizName?: string;
  ddosStatus?: number;
  isDisabled?: boolean;
  threshold?: number;
  esnBizId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      bizId: 'BizId',
      ip: 'Ip',
      regionId: 'RegionId',
      appName: 'AppName',
      regionName: 'RegionName',
      groupId: 'GroupId',
      appId: 'AppId',
      inUse: 'InUse',
      bizName: 'BizName',
      ddosStatus: 'DdosStatus',
      isDisabled: 'IsDisabled',
      threshold: 'Threshold',
      esnBizId: 'EsnBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      bizId: 'string',
      ip: 'string',
      regionId: 'string',
      appName: 'string',
      regionName: 'string',
      groupId: 'string',
      appId: 'string',
      inUse: 'number',
      bizName: 'string',
      ddosStatus: 'number',
      isDisabled: 'boolean',
      threshold: 'number',
      esnBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMianLiuResSummaryResponseBodyFullNodesSummary extends $tea.Model {
  nodes?: DescribeMianLiuResSummaryResponseBodyFullNodesSummaryNodes[];
  cleanCount?: number;
  holeCount?: number;
  usedCount?: number;
  unUsedCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      cleanCount: 'CleanCount',
      holeCount: 'HoleCount',
      usedCount: 'UsedCount',
      unUsedCount: 'UnUsedCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeMianLiuResSummaryResponseBodyFullNodesSummaryNodes },
      cleanCount: 'number',
      holeCount: 'number',
      usedCount: 'number',
      unUsedCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNgSourceDiagnosisLogResponseBodyStatistic extends $tea.Model {
  time?: string;
  sourceIp?: string;
  appName?: string;
  sourcePort?: string;
  detectPort?: string;
  appId?: string;
  detectIp?: string;
  userId?: string;
  bizName?: string;
  bizId?: string;
  sourceIpLocation?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      sourceIp: 'SourceIp',
      appName: 'AppName',
      sourcePort: 'SourcePort',
      detectPort: 'DetectPort',
      appId: 'AppId',
      detectIp: 'DetectIp',
      userId: 'UserId',
      bizName: 'BizName',
      bizId: 'BizId',
      sourceIpLocation: 'SourceIpLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      sourceIp: 'string',
      appName: 'string',
      sourcePort: 'string',
      detectPort: 'string',
      appId: 'string',
      detectIp: 'string',
      userId: 'string',
      bizName: 'string',
      bizId: 'string',
      sourceIpLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticByEsnBizIntervalResponseBodyStatistic extends $tea.Model {
  index?: number;
  time?: number;
  failureCount?: number;
  totalCount?: number;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      time: 'Time',
      failureCount: 'FailureCount',
      totalCount: 'TotalCount',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      time: 'number',
      failureCount: 'number',
      totalCount: 'number',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBiz1DayResponseBodyStatistic extends $tea.Model {
  failureCount?: number;
  successCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failureCount: 'FailureCount',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureCount: 'number',
      successCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBiz1DayProvinceResponseBodyStatistic extends $tea.Model {
  failureCount?: number;
  provinceId?: number;
  totalCount?: number;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      failureCount: 'FailureCount',
      provinceId: 'ProvinceId',
      totalCount: 'TotalCount',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureCount: 'number',
      provinceId: 'number',
      totalCount: 'number',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBiz1M30MResponseBodyStatistic extends $tea.Model {
  time?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBiz30MResponseBodyStatistic extends $tea.Model {
  failureCount?: number;
  successCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failureCount: 'FailureCount',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureCount: 'number',
      successCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticCountByEsnBizGroup30MResponseBodyStatistic extends $tea.Model {
  detectIp?: string;
  esnGroupId?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      detectIp: 'DetectIp',
      esnGroupId: 'EsnGroupId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectIp: 'string',
      esnGroupId: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestStatisticLogResponseBodyStatistic extends $tea.Model {
  serverTime?: string;
  callResult?: string;
  token?: string;
  userId?: string;
  countryId?: string;
  detectIp?: string;
  esnAppId?: string;
  city?: string;
  ispId?: string;
  isp?: string;
  escapedTime?: string;
  sourceIp?: string;
  cityId?: string;
  provinceId?: string;
  osType?: string;
  sdkVersion?: string;
  country?: string;
  esnGroupId?: string;
  province?: string;
  esnBizId?: string;
  static names(): { [key: string]: string } {
    return {
      serverTime: 'ServerTime',
      callResult: 'CallResult',
      token: 'Token',
      userId: 'UserId',
      countryId: 'CountryId',
      detectIp: 'DetectIp',
      esnAppId: 'EsnAppId',
      city: 'City',
      ispId: 'IspId',
      isp: 'Isp',
      escapedTime: 'EscapedTime',
      sourceIp: 'SourceIp',
      cityId: 'CityId',
      provinceId: 'ProvinceId',
      osType: 'OsType',
      sdkVersion: 'SdkVersion',
      country: 'Country',
      esnGroupId: 'EsnGroupId',
      province: 'Province',
      esnBizId: 'EsnBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverTime: 'string',
      callResult: 'string',
      token: 'string',
      userId: 'string',
      countryId: 'string',
      detectIp: 'string',
      esnAppId: 'string',
      city: 'string',
      ispId: 'string',
      isp: 'string',
      escapedTime: 'string',
      sourceIp: 'string',
      cityId: 'string',
      provinceId: 'string',
      osType: 'string',
      sdkVersion: 'string',
      country: 'string',
      esnGroupId: 'string',
      province: 'string',
      esnBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticLogResponseBodyStatistic extends $tea.Model {
  serverTime?: string;
  callResult?: string;
  token?: string;
  pingResult?: string;
  userId?: string;
  countryId?: string;
  city?: string;
  connectResult?: string;
  sourceIp?: string;
  provinceId?: string;
  detectIp?: string;
  traceResult?: string;
  esnAppId?: string;
  MType?: string;
  ispId?: string;
  isp?: string;
  cityId?: string;
  osType?: string;
  verdictCode?: string;
  sdkVersion?: string;
  country?: string;
  esnGroupId?: string;
  province?: string;
  esnBizId?: string;
  static names(): { [key: string]: string } {
    return {
      serverTime: 'ServerTime',
      callResult: 'CallResult',
      token: 'Token',
      pingResult: 'PingResult',
      userId: 'UserId',
      countryId: 'CountryId',
      city: 'City',
      connectResult: 'ConnectResult',
      sourceIp: 'SourceIp',
      provinceId: 'ProvinceId',
      detectIp: 'DetectIp',
      traceResult: 'TraceResult',
      esnAppId: 'EsnAppId',
      MType: 'MType',
      ispId: 'IspId',
      isp: 'Isp',
      cityId: 'CityId',
      osType: 'OsType',
      verdictCode: 'VerdictCode',
      sdkVersion: 'SdkVersion',
      country: 'Country',
      esnGroupId: 'EsnGroupId',
      province: 'Province',
      esnBizId: 'EsnBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverTime: 'string',
      callResult: 'string',
      token: 'string',
      pingResult: 'string',
      userId: 'string',
      countryId: 'string',
      city: 'string',
      connectResult: 'string',
      sourceIp: 'string',
      provinceId: 'string',
      detectIp: 'string',
      traceResult: 'string',
      esnAppId: 'string',
      MType: 'string',
      ispId: 'string',
      isp: 'string',
      cityId: 'string',
      osType: 'string',
      verdictCode: 'string',
      sdkVersion: 'string',
      country: 'string',
      esnGroupId: 'string',
      province: 'string',
      esnBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticResultByEsnBizISP1M30MResponseBodyStatistic extends $tea.Model {
  time?: number;
  result?: string;
  ispId?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      result: 'Result',
      ispId: 'IspId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      result: 'string',
      ispId: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticResultByEsnBizISPIntervalResponseBodyStatistic extends $tea.Model {
  index?: number;
  time?: number;
  result?: string;
  ispId?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      time: 'Time',
      result: 'Result',
      ispId: 'IspId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      time: 'number',
      result: 'string',
      ispId: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticResultByEsnBizProvince1DayResponseBodyStatistic extends $tea.Model {
  result?: string;
  provinceId?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      provinceId: 'ProvinceId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      provinceId: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDKStatisticResultByEsnBizProvince30MResponseBodyStatistic extends $tea.Model {
  result?: string;
  provinceId?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      provinceId: 'ProvinceId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      provinceId: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceFailureTopIpResponseBodyTopIps extends $tea.Model {
  ip?: string;
  port?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceFailureTrendGraphResponseBodyTrendGraph extends $tea.Model {
  index?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowInfoResponseBodyFlowInfo extends $tea.Model {
  bizBandWidth?: number;
  static names(): { [key: string]: string } {
    return {
      bizBandWidth: 'BizBandWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizBandWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowReportResponseBodyFlowReport extends $tea.Model {
  time?: string[];
  maxInflow?: string[];
  attackFlow?: string[];
  maxOutFlow?: string[];
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      maxInflow: 'MaxInflow',
      attackFlow: 'AttackFlow',
      maxOutFlow: 'MaxOutFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: { 'type': 'array', 'itemType': 'string' },
      maxInflow: { 'type': 'array', 'itemType': 'string' },
      attackFlow: { 'type': 'array', 'itemType': 'string' },
      maxOutFlow: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTotalFlowReportResponseBodyFlowReport extends $tea.Model {
  time?: string[];
  maxInflow?: string[];
  attackFlow?: string[];
  maxOutFlow?: string[];
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      maxInflow: 'MaxInflow',
      attackFlow: 'AttackFlow',
      maxOutFlow: 'MaxOutFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: { 'type': 'array', 'itemType': 'string' },
      maxInflow: { 'type': 'array', 'itemType': 'string' },
      attackFlow: { 'type': 'array', 'itemType': 'string' },
      maxOutFlow: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadAppKeyFileResponseBodyDownloadLinkResult extends $tea.Model {
  downloadLink?: string;
  static names(): { [key: string]: string } {
    return {
      downloadLink: 'DownloadLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadLink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadCcRouteRulesResponseBodyDownloadFileResult extends $tea.Model {
  downloadLink?: string;
  static names(): { [key: string]: string } {
    return {
      downloadLink: 'DownloadLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadLink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFlexAccRulesFileResponseBodyDownloadFileResult extends $tea.Model {
  downloadLink?: string;
  static names(): { [key: string]: string } {
    return {
      downloadLink: 'DownloadLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadLink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadLayer4RulesResponseBodyDownloadFileResult extends $tea.Model {
  downloadLink?: string;
  static names(): { [key: string]: string } {
    return {
      downloadLink: 'DownloadLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadLink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadSdkFileResponseBodyDownloadFileResult extends $tea.Model {
  downloadLink?: string;
  static names(): { [key: string]: string } {
    return {
      downloadLink: 'DownloadLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadLink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadUserTotalFlowReportResponseBodyDownloadFileResult extends $tea.Model {
  downloadLink?: string;
  static names(): { [key: string]: string } {
    return {
      downloadLink: 'DownloadLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadLink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFlexFwdRulesResponseBodyFlexFwdRules extends $tea.Model {
  masterIpList?: string;
  remark?: string;
  slaveIpList?: string;
  protocol?: string;
  identity?: string;
  static names(): { [key: string]: string } {
    return {
      masterIpList: 'MasterIpList',
      remark: 'Remark',
      slaveIpList: 'SlaveIpList',
      protocol: 'Protocol',
      identity: 'Identity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterIpList: 'string',
      remark: 'string',
      slaveIpList: 'string',
      protocol: 'string',
      identity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCcRouteFileForParseResponseBodyRouteRules extends $tea.Model {
  comment?: string;
  rservers?: string[];
  id?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      rservers: 'Rservers',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      rservers: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFlexAccRulesFileForParseResponseBodyFlexAccFwdRules extends $tea.Model {
  masterIpList?: string;
  remark?: string;
  slaveIpList?: string;
  identity?: string;
  protocol?: string;
  accType?: number;
  ipList?: string;
  domainList?: string;
  static names(): { [key: string]: string } {
    return {
      masterIpList: 'MasterIpList',
      remark: 'Remark',
      slaveIpList: 'SlaveIpList',
      identity: 'Identity',
      protocol: 'Protocol',
      accType: 'AccType',
      ipList: 'IpList',
      domainList: 'DomainList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterIpList: 'string',
      remark: 'string',
      slaveIpList: 'string',
      identity: 'string',
      protocol: 'string',
      accType: 'number',
      ipList: 'string',
      domainList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFlexRulesFileForParseResponseBodyFlexFwdRules extends $tea.Model {
  masterIpList?: string;
  remark?: string;
  slaveIpList?: string;
  protocol?: string;
  identity?: string;
  static names(): { [key: string]: string } {
    return {
      masterIpList: 'MasterIpList',
      remark: 'Remark',
      slaveIpList: 'SlaveIpList',
      protocol: 'Protocol',
      identity: 'Identity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterIpList: 'string',
      remark: 'string',
      slaveIpList: 'string',
      protocol: 'string',
      identity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadL4RulesFileForParseResponseBodyL4RuleList extends $tea.Model {
  protocol?: string;
  appId?: number;
  backPort?: number;
  bizId?: number;
  rservers?: string[];
  lvsPolicy?: string;
  frontPort?: number;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      appId: 'AppId',
      backPort: 'BackPort',
      bizId: 'BizId',
      rservers: 'Rservers',
      lvsPolicy: 'LvsPolicy',
      frontPort: 'FrontPort',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      appId: 'number',
      backPort: 'number',
      bizId: 'number',
      rservers: { 'type': 'array', 'itemType': 'string' },
      lvsPolicy: 'string',
      frontPort: 'number',
      ruleId: 'string',
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
    this._endpoint = this.getEndpoint("gameshield", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async cleanFlexAccFwdRulesWithOptions(request: CleanFlexAccFwdRulesRequest, runtime: $Util.RuntimeOptions): Promise<CleanFlexAccFwdRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CleanFlexAccFwdRulesResponse>(await this.doRPCRequest("CleanFlexAccFwdRules", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new CleanFlexAccFwdRulesResponse({}));
  }

  async cleanFlexAccFwdRules(request: CleanFlexAccFwdRulesRequest): Promise<CleanFlexAccFwdRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cleanFlexAccFwdRulesWithOptions(request, runtime);
  }

  async cleanFlexFwdRulesWithOptions(request: CleanFlexFwdRulesRequest, runtime: $Util.RuntimeOptions): Promise<CleanFlexFwdRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CleanFlexFwdRulesResponse>(await this.doRPCRequest("CleanFlexFwdRules", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new CleanFlexFwdRulesResponse({}));
  }

  async cleanFlexFwdRules(request: CleanFlexFwdRulesRequest): Promise<CleanFlexFwdRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cleanFlexFwdRulesWithOptions(request, runtime);
  }

  async clearCcRouteRulesWithOptions(request: ClearCcRouteRulesRequest, runtime: $Util.RuntimeOptions): Promise<ClearCcRouteRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ClearCcRouteRulesResponse>(await this.doRPCRequest("ClearCcRouteRules", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new ClearCcRouteRulesResponse({}));
  }

  async clearCcRouteRules(request: ClearCcRouteRulesRequest): Promise<ClearCcRouteRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearCcRouteRulesWithOptions(request, runtime);
  }

  async createAppWithOptions(request: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAppResponse>(await this.doRPCRequest("CreateApp", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAppResponse({}));
  }

  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  async createAppKeyWithOptions(request: CreateAppKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAppKeyResponse>(await this.doRPCRequest("CreateAppKey", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAppKeyResponse({}));
  }

  async createAppKey(request: CreateAppKeyRequest): Promise<CreateAppKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppKeyWithOptions(request, runtime);
  }

  async createBizWithOptions(request: CreateBizRequest, runtime: $Util.RuntimeOptions): Promise<CreateBizResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBizResponse>(await this.doRPCRequest("CreateBiz", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBizResponse({}));
  }

  async createBiz(request: CreateBizRequest): Promise<CreateBizResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBizWithOptions(request, runtime);
  }

  async createCcRouteRulesWithOptions(request: CreateCcRouteRulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateCcRouteRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCcRouteRulesResponse>(await this.doRPCRequest("CreateCcRouteRules", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCcRouteRulesResponse({}));
  }

  async createCcRouteRules(request: CreateCcRouteRulesRequest): Promise<CreateCcRouteRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCcRouteRulesWithOptions(request, runtime);
  }

  async createFlexAccFwdRuleWithOptions(request: CreateFlexAccFwdRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlexAccFwdRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlexAccFwdRuleResponse>(await this.doRPCRequest("CreateFlexAccFwdRule", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlexAccFwdRuleResponse({}));
  }

  async createFlexAccFwdRule(request: CreateFlexAccFwdRuleRequest): Promise<CreateFlexAccFwdRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlexAccFwdRuleWithOptions(request, runtime);
  }

  async createFlexAccFwdRuleListWithOptions(request: CreateFlexAccFwdRuleListRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlexAccFwdRuleListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlexAccFwdRuleListResponse>(await this.doRPCRequest("CreateFlexAccFwdRuleList", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlexAccFwdRuleListResponse({}));
  }

  async createFlexAccFwdRuleList(request: CreateFlexAccFwdRuleListRequest): Promise<CreateFlexAccFwdRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlexAccFwdRuleListWithOptions(request, runtime);
  }

  async createFlexFwdRuleWithOptions(request: CreateFlexFwdRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlexFwdRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlexFwdRuleResponse>(await this.doRPCRequest("CreateFlexFwdRule", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlexFwdRuleResponse({}));
  }

  async createFlexFwdRule(request: CreateFlexFwdRuleRequest): Promise<CreateFlexFwdRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlexFwdRuleWithOptions(request, runtime);
  }

  async createGroupWithOptions(request: CreateGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGroupResponse>(await this.doRPCRequest("CreateGroup", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGroupResponse({}));
  }

  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  async createLayer4RuleWithOptions(request: CreateLayer4RuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateLayer4RuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLayer4RuleResponse>(await this.doRPCRequest("CreateLayer4Rule", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLayer4RuleResponse({}));
  }

  async createLayer4Rule(request: CreateLayer4RuleRequest): Promise<CreateLayer4RuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLayer4RuleWithOptions(request, runtime);
  }

  async createLayer4RulesWithOptions(request: CreateLayer4RulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateLayer4RulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLayer4RulesResponse>(await this.doRPCRequest("CreateLayer4Rules", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLayer4RulesResponse({}));
  }

  async createLayer4Rules(request: CreateLayer4RulesRequest): Promise<CreateLayer4RulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLayer4RulesWithOptions(request, runtime);
  }

  async deleteAppWithOptions(request: DeleteAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAppResponse>(await this.doRPCRequest("DeleteApp", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAppResponse({}));
  }

  async deleteApp(request: DeleteAppRequest): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  async deleteAppKeyWithOptions(request: DeleteAppKeyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAppKeyResponse>(await this.doRPCRequest("DeleteAppKey", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAppKeyResponse({}));
  }

  async deleteAppKey(request: DeleteAppKeyRequest): Promise<DeleteAppKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppKeyWithOptions(request, runtime);
  }

  async deleteBizWithOptions(request: DeleteBizRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBizResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBizResponse>(await this.doRPCRequest("DeleteBiz", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBizResponse({}));
  }

  async deleteBiz(request: DeleteBizRequest): Promise<DeleteBizResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBizWithOptions(request, runtime);
  }

  async deleteCcRouteRulesWithOptions(request: DeleteCcRouteRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCcRouteRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCcRouteRulesResponse>(await this.doRPCRequest("DeleteCcRouteRules", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCcRouteRulesResponse({}));
  }

  async deleteCcRouteRules(request: DeleteCcRouteRulesRequest): Promise<DeleteCcRouteRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCcRouteRulesWithOptions(request, runtime);
  }

  async deleteFlexAccFwdRuleWithOptions(request: DeleteFlexAccFwdRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlexAccFwdRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlexAccFwdRuleResponse>(await this.doRPCRequest("DeleteFlexAccFwdRule", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlexAccFwdRuleResponse({}));
  }

  async deleteFlexAccFwdRule(request: DeleteFlexAccFwdRuleRequest): Promise<DeleteFlexAccFwdRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlexAccFwdRuleWithOptions(request, runtime);
  }

  async deleteFlexFwdRuleWithOptions(request: DeleteFlexFwdRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlexFwdRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlexFwdRuleResponse>(await this.doRPCRequest("DeleteFlexFwdRule", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlexFwdRuleResponse({}));
  }

  async deleteFlexFwdRule(request: DeleteFlexFwdRuleRequest): Promise<DeleteFlexFwdRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlexFwdRuleWithOptions(request, runtime);
  }

  async deleteGroupWithOptions(request: DeleteGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteGroupResponse>(await this.doRPCRequest("DeleteGroup", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteGroupResponse({}));
  }

  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  async deleteLayer4RuleWithOptions(request: DeleteLayer4RuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLayer4RuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLayer4RuleResponse>(await this.doRPCRequest("DeleteLayer4Rule", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLayer4RuleResponse({}));
  }

  async deleteLayer4Rule(request: DeleteLayer4RuleRequest): Promise<DeleteLayer4RuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLayer4RuleWithOptions(request, runtime);
  }

  async describeAccResSummaryWithOptions(request: DescribeAccResSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccResSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccResSummaryResponse>(await this.doRPCRequest("DescribeAccResSummary", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccResSummaryResponse({}));
  }

  async describeAccResSummary(request: DescribeAccResSummaryRequest): Promise<DescribeAccResSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccResSummaryWithOptions(request, runtime);
  }

  async describeAllLocalIpsWithOptions(request: DescribeAllLocalIpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllLocalIpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAllLocalIpsResponse>(await this.doRPCRequest("DescribeAllLocalIps", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAllLocalIpsResponse({}));
  }

  async describeAllLocalIps(request: DescribeAllLocalIpsRequest): Promise<DescribeAllLocalIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllLocalIpsWithOptions(request, runtime);
  }

  async describeAppDailyDetailsWithOptions(request: DescribeAppDailyDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppDailyDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAppDailyDetailsResponse>(await this.doRPCRequest("DescribeAppDailyDetails", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAppDailyDetailsResponse({}));
  }

  async describeAppDailyDetails(request: DescribeAppDailyDetailsRequest): Promise<DescribeAppDailyDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppDailyDetailsWithOptions(request, runtime);
  }

  async describeAppDailySdkVersionsWithOptions(request: DescribeAppDailySdkVersionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppDailySdkVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAppDailySdkVersionsResponse>(await this.doRPCRequest("DescribeAppDailySdkVersions", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAppDailySdkVersionsResponse({}));
  }

  async describeAppDailySdkVersions(request: DescribeAppDailySdkVersionsRequest): Promise<DescribeAppDailySdkVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppDailySdkVersionsWithOptions(request, runtime);
  }

  async describeAppListWithOptions(request: DescribeAppListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAppListResponse>(await this.doRPCRequest("DescribeAppList", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAppListResponse({}));
  }

  async describeAppList(request: DescribeAppListRequest): Promise<DescribeAppListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppListWithOptions(request, runtime);
  }

  async describeAppSimpleListWithOptions(request: DescribeAppSimpleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppSimpleListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAppSimpleListResponse>(await this.doRPCRequest("DescribeAppSimpleList", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAppSimpleListResponse({}));
  }

  async describeAppSimpleList(request: DescribeAppSimpleListRequest): Promise<DescribeAppSimpleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppSimpleListWithOptions(request, runtime);
  }

  async describeAsyncOperationWithOptions(request: DescribeAsyncOperationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAsyncOperationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAsyncOperationResponse>(await this.doRPCRequest("DescribeAsyncOperation", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAsyncOperationResponse({}));
  }

  async describeAsyncOperation(request: DescribeAsyncOperationRequest): Promise<DescribeAsyncOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAsyncOperationWithOptions(request, runtime);
  }

  async describeAutomaticTraceabilitySlsLogWithOptions(request: DescribeAutomaticTraceabilitySlsLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutomaticTraceabilitySlsLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAutomaticTraceabilitySlsLogResponse>(await this.doRPCRequest("DescribeAutomaticTraceabilitySlsLog", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAutomaticTraceabilitySlsLogResponse({}));
  }

  async describeAutomaticTraceabilitySlsLog(request: DescribeAutomaticTraceabilitySlsLogRequest): Promise<DescribeAutomaticTraceabilitySlsLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutomaticTraceabilitySlsLogWithOptions(request, runtime);
  }

  async describeBgpResSummaryWithOptions(request: DescribeBgpResSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBgpResSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBgpResSummaryResponse>(await this.doRPCRequest("DescribeBgpResSummary", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBgpResSummaryResponse({}));
  }

  async describeBgpResSummary(request: DescribeBgpResSummaryRequest): Promise<DescribeBgpResSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBgpResSummaryWithOptions(request, runtime);
  }

  async describeBizListWithOptions(request: DescribeBizListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBizListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBizListResponse>(await this.doRPCRequest("DescribeBizList", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBizListResponse({}));
  }

  async describeBizList(request: DescribeBizListRequest): Promise<DescribeBizListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBizListWithOptions(request, runtime);
  }

  async describeBizSimpleListWithOptions(request: DescribeBizSimpleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBizSimpleListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBizSimpleListResponse>(await this.doRPCRequest("DescribeBizSimpleList", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBizSimpleListResponse({}));
  }

  async describeBizSimpleList(request: DescribeBizSimpleListRequest): Promise<DescribeBizSimpleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBizSimpleListWithOptions(request, runtime);
  }

  async describeBpsFlowWithOptions(request: DescribeBpsFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBpsFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBpsFlowResponse>(await this.doRPCRequest("DescribeBpsFlow", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBpsFlowResponse({}));
  }

  async describeBpsFlow(request: DescribeBpsFlowRequest): Promise<DescribeBpsFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBpsFlowWithOptions(request, runtime);
  }

  async describeCcBlackListWithOptions(request: DescribeCcBlackListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCcBlackListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCcBlackListResponse>(await this.doRPCRequest("DescribeCcBlackList", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCcBlackListResponse({}));
  }

  async describeCcBlackList(request: DescribeCcBlackListRequest): Promise<DescribeCcBlackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCcBlackListWithOptions(request, runtime);
  }

  async describeCcDevieIpListWithOptions(request: DescribeCcDevieIpListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCcDevieIpListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCcDevieIpListResponse>(await this.doRPCRequest("DescribeCcDevieIpList", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCcDevieIpListResponse({}));
  }

  async describeCcDevieIpList(request: DescribeCcDevieIpListRequest): Promise<DescribeCcDevieIpListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCcDevieIpListWithOptions(request, runtime);
  }

  async describeCcFlowWithOptions(request: DescribeCcFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCcFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCcFlowResponse>(await this.doRPCRequest("DescribeCcFlow", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCcFlowResponse({}));
  }

  async describeCcFlow(request: DescribeCcFlowRequest): Promise<DescribeCcFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCcFlowWithOptions(request, runtime);
  }

  async describeCcIDCBlockSwitchWithOptions(request: DescribeCcIDCBlockSwitchRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCcIDCBlockSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCcIDCBlockSwitchResponse>(await this.doRPCRequest("DescribeCcIDCBlockSwitch", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCcIDCBlockSwitchResponse({}));
  }

  async describeCcIDCBlockSwitch(request: DescribeCcIDCBlockSwitchRequest): Promise<DescribeCcIDCBlockSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCcIDCBlockSwitchWithOptions(request, runtime);
  }

  async describeCcMaxFwWithOptions(request: DescribeCcMaxFwRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCcMaxFwResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCcMaxFwResponse>(await this.doRPCRequest("DescribeCcMaxFw", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCcMaxFwResponse({}));
  }

  async describeCcMaxFw(request: DescribeCcMaxFwRequest): Promise<DescribeCcMaxFwResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCcMaxFwWithOptions(request, runtime);
  }

  async describeCcResSummaryWithOptions(request: DescribeCcResSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCcResSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCcResSummaryResponse>(await this.doRPCRequest("DescribeCcResSummary", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCcResSummaryResponse({}));
  }

  async describeCcResSummary(request: DescribeCcResSummaryRequest): Promise<DescribeCcResSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCcResSummaryWithOptions(request, runtime);
  }

  async describeCcRouteRulesWithOptions(request: DescribeCcRouteRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCcRouteRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCcRouteRulesResponse>(await this.doRPCRequest("DescribeCcRouteRules", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCcRouteRulesResponse({}));
  }

  async describeCcRouteRules(request: DescribeCcRouteRulesRequest): Promise<DescribeCcRouteRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCcRouteRulesWithOptions(request, runtime);
  }

  async describeCcRouteSwitchWithOptions(request: DescribeCcRouteSwitchRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCcRouteSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCcRouteSwitchResponse>(await this.doRPCRequest("DescribeCcRouteSwitch", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCcRouteSwitchResponse({}));
  }

  async describeCcRouteSwitch(request: DescribeCcRouteSwitchRequest): Promise<DescribeCcRouteSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCcRouteSwitchWithOptions(request, runtime);
  }

  async describeCcSocketDetailWithOptions(request: DescribeCcSocketDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCcSocketDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCcSocketDetailResponse>(await this.doRPCRequest("DescribeCcSocketDetail", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCcSocketDetailResponse({}));
  }

  async describeCcSocketDetail(request: DescribeCcSocketDetailRequest): Promise<DescribeCcSocketDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCcSocketDetailWithOptions(request, runtime);
  }

  async describeCcTotalFwWithOptions(request: DescribeCcTotalFwRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCcTotalFwResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCcTotalFwResponse>(await this.doRPCRequest("DescribeCcTotalFw", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCcTotalFwResponse({}));
  }

  async describeCcTotalFw(request: DescribeCcTotalFwRequest): Promise<DescribeCcTotalFwResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCcTotalFwWithOptions(request, runtime);
  }

  async describeCcTunnelWithOptions(request: DescribeCcTunnelRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCcTunnelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCcTunnelResponse>(await this.doRPCRequest("DescribeCcTunnel", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCcTunnelResponse({}));
  }

  async describeCcTunnel(request: DescribeCcTunnelRequest): Promise<DescribeCcTunnelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCcTunnelWithOptions(request, runtime);
  }

  async describeCcWhiteListWithOptions(request: DescribeCcWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCcWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCcWhiteListResponse>(await this.doRPCRequest("DescribeCcWhiteList", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCcWhiteListResponse({}));
  }

  async describeCcWhiteList(request: DescribeCcWhiteListRequest): Promise<DescribeCcWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCcWhiteListWithOptions(request, runtime);
  }

  async describeCcZoneBlockConfigWithOptions(request: DescribeCcZoneBlockConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCcZoneBlockConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCcZoneBlockConfigResponse>(await this.doRPCRequest("DescribeCcZoneBlockConfig", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCcZoneBlockConfigResponse({}));
  }

  async describeCcZoneBlockConfig(request: DescribeCcZoneBlockConfigRequest): Promise<DescribeCcZoneBlockConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCcZoneBlockConfigWithOptions(request, runtime);
  }

  async describeCcZonesWithOptions(request: DescribeCcZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCcZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCcZonesResponse>(await this.doRPCRequest("DescribeCcZones", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCcZonesResponse({}));
  }

  async describeCcZones(request: DescribeCcZonesRequest): Promise<DescribeCcZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCcZonesWithOptions(request, runtime);
  }

  async describeDailyDetailsWithOptions(request: DescribeDailyDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDailyDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDailyDetailsResponse>(await this.doRPCRequest("DescribeDailyDetails", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDailyDetailsResponse({}));
  }

  async describeDailyDetails(request: DescribeDailyDetailsRequest): Promise<DescribeDailyDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDailyDetailsWithOptions(request, runtime);
  }

  async describeDownloadUrlsForAppKeyWithOptions(request: DescribeDownloadUrlsForAppKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDownloadUrlsForAppKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDownloadUrlsForAppKeyResponse>(await this.doRPCRequest("DescribeDownloadUrlsForAppKey", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDownloadUrlsForAppKeyResponse({}));
  }

  async describeDownloadUrlsForAppKey(request: DescribeDownloadUrlsForAppKeyRequest): Promise<DescribeDownloadUrlsForAppKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDownloadUrlsForAppKeyWithOptions(request, runtime);
  }

  async describeDownloadUrlsForSDKWithOptions(request: DescribeDownloadUrlsForSDKRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDownloadUrlsForSDKResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDownloadUrlsForSDKResponse>(await this.doRPCRequest("DescribeDownloadUrlsForSDK", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDownloadUrlsForSDKResponse({}));
  }

  async describeDownloadUrlsForSDK(request: DescribeDownloadUrlsForSDKRequest): Promise<DescribeDownloadUrlsForSDKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDownloadUrlsForSDKWithOptions(request, runtime);
  }

  async describeFlexAccConfigWithOptions(request: DescribeFlexAccConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlexAccConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlexAccConfigResponse>(await this.doRPCRequest("DescribeFlexAccConfig", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlexAccConfigResponse({}));
  }

  async describeFlexAccConfig(request: DescribeFlexAccConfigRequest): Promise<DescribeFlexAccConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlexAccConfigWithOptions(request, runtime);
  }

  async describeFlexAccFlowWithOptions(request: DescribeFlexAccFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlexAccFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlexAccFlowResponse>(await this.doRPCRequest("DescribeFlexAccFlow", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlexAccFlowResponse({}));
  }

  async describeFlexAccFlow(request: DescribeFlexAccFlowRequest): Promise<DescribeFlexAccFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlexAccFlowWithOptions(request, runtime);
  }

  async describeFlexAccFwdRulesWithOptions(request: DescribeFlexAccFwdRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlexAccFwdRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlexAccFwdRulesResponse>(await this.doRPCRequest("DescribeFlexAccFwdRules", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlexAccFwdRulesResponse({}));
  }

  async describeFlexAccFwdRules(request: DescribeFlexAccFwdRulesRequest): Promise<DescribeFlexAccFwdRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlexAccFwdRulesWithOptions(request, runtime);
  }

  async describeFlexBackupGroupsWithOptions(request: DescribeFlexBackupGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlexBackupGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlexBackupGroupsResponse>(await this.doRPCRequest("DescribeFlexBackupGroups", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlexBackupGroupsResponse({}));
  }

  async describeFlexBackupGroups(request: DescribeFlexBackupGroupsRequest): Promise<DescribeFlexBackupGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlexBackupGroupsWithOptions(request, runtime);
  }

  async describeFlexConfigWithOptions(request: DescribeFlexConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlexConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlexConfigResponse>(await this.doRPCRequest("DescribeFlexConfig", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlexConfigResponse({}));
  }

  async describeFlexConfig(request: DescribeFlexConfigRequest): Promise<DescribeFlexConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlexConfigWithOptions(request, runtime);
  }

  async describeFlexFwdRulesWithOptions(request: DescribeFlexFwdRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlexFwdRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlexFwdRulesResponse>(await this.doRPCRequest("DescribeFlexFwdRules", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlexFwdRulesResponse({}));
  }

  async describeFlexFwdRules(request: DescribeFlexFwdRulesRequest): Promise<DescribeFlexFwdRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlexFwdRulesWithOptions(request, runtime);
  }

  async describeFlexSechedPolicyWithOptions(request: DescribeFlexSechedPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlexSechedPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlexSechedPolicyResponse>(await this.doRPCRequest("DescribeFlexSechedPolicy", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlexSechedPolicyResponse({}));
  }

  async describeFlexSechedPolicy(request: DescribeFlexSechedPolicyRequest): Promise<DescribeFlexSechedPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlexSechedPolicyWithOptions(request, runtime);
  }

  async describeFlowReportWithOptions(request: DescribeFlowReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowReportResponse>(await this.doRPCRequest("DescribeFlowReport", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowReportResponse({}));
  }

  async describeFlowReport(request: DescribeFlowReportRequest): Promise<DescribeFlowReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowReportWithOptions(request, runtime);
  }

  async describeFullNodesWithOptions(request: DescribeFullNodesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFullNodesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFullNodesResponse>(await this.doRPCRequest("DescribeFullNodes", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFullNodesResponse({}));
  }

  async describeFullNodes(request: DescribeFullNodesRequest): Promise<DescribeFullNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFullNodesWithOptions(request, runtime);
  }

  async describeFullNodesSummaryWithOptions(request: DescribeFullNodesSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFullNodesSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFullNodesSummaryResponse>(await this.doRPCRequest("DescribeFullNodesSummary", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFullNodesSummaryResponse({}));
  }

  async describeFullNodesSummary(request: DescribeFullNodesSummaryRequest): Promise<DescribeFullNodesSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFullNodesSummaryWithOptions(request, runtime);
  }

  async describeGfResSummaryWithOptions(request: DescribeGfResSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGfResSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGfResSummaryResponse>(await this.doRPCRequest("DescribeGfResSummary", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGfResSummaryResponse({}));
  }

  async describeGfResSummary(request: DescribeGfResSummaryRequest): Promise<DescribeGfResSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGfResSummaryWithOptions(request, runtime);
  }

  async describeGroupListWithOptions(request: DescribeGroupListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupListResponse>(await this.doRPCRequest("DescribeGroupList", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupListResponse({}));
  }

  async describeGroupList(request: DescribeGroupListRequest): Promise<DescribeGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupListWithOptions(request, runtime);
  }

  async describeGroupSimpleListWithOptions(request: DescribeGroupSimpleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupSimpleListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupSimpleListResponse>(await this.doRPCRequest("DescribeGroupSimpleList", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupSimpleListResponse({}));
  }

  async describeGroupSimpleList(request: DescribeGroupSimpleListRequest): Promise<DescribeGroupSimpleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupSimpleListWithOptions(request, runtime);
  }

  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceResponse>(await this.doRPCRequest("DescribeInstance", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceResponse({}));
  }

  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  async describeIpFlowReportWithOptions(request: DescribeIpFlowReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpFlowReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIpFlowReportResponse>(await this.doRPCRequest("DescribeIpFlowReport", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIpFlowReportResponse({}));
  }

  async describeIpFlowReport(request: DescribeIpFlowReportRequest): Promise<DescribeIpFlowReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpFlowReportWithOptions(request, runtime);
  }

  async describeJianYuTestGetWithOptions(request: DescribeJianYuTestGetRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJianYuTestGetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeJianYuTestGetResponse>(await this.doRPCRequest("DescribeJianYuTestGet", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeJianYuTestGetResponse({}));
  }

  async describeJianYuTestGet(request: DescribeJianYuTestGetRequest): Promise<DescribeJianYuTestGetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJianYuTestGetWithOptions(request, runtime);
  }

  async describeJianYuTestListWithOptions(request: DescribeJianYuTestListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJianYuTestListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeJianYuTestListResponse>(await this.doRPCRequest("DescribeJianYuTestList", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeJianYuTestListResponse({}));
  }

  async describeJianYuTestList(request: DescribeJianYuTestListRequest): Promise<DescribeJianYuTestListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJianYuTestListWithOptions(request, runtime);
  }

  async describeJianYuTestPaginationWithOptions(request: DescribeJianYuTestPaginationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJianYuTestPaginationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeJianYuTestPaginationResponse>(await this.doRPCRequest("DescribeJianYuTestPagination", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeJianYuTestPaginationResponse({}));
  }

  async describeJianYuTestPagination(request: DescribeJianYuTestPaginationRequest): Promise<DescribeJianYuTestPaginationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJianYuTestPaginationWithOptions(request, runtime);
  }

  async describeL4EventsSelectiveWithOptions(request: DescribeL4EventsSelectiveRequest, runtime: $Util.RuntimeOptions): Promise<DescribeL4EventsSelectiveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeL4EventsSelectiveResponse>(await this.doRPCRequest("DescribeL4EventsSelective", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeL4EventsSelectiveResponse({}));
  }

  async describeL4EventsSelective(request: DescribeL4EventsSelectiveRequest): Promise<DescribeL4EventsSelectiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeL4EventsSelectiveWithOptions(request, runtime);
  }

  async describeLayer4RulesWithOptions(request: DescribeLayer4RulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLayer4RulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLayer4RulesResponse>(await this.doRPCRequest("DescribeLayer4Rules", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLayer4RulesResponse({}));
  }

  async describeLayer4Rules(request: DescribeLayer4RulesRequest): Promise<DescribeLayer4RulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLayer4RulesWithOptions(request, runtime);
  }

  async describeMianLiuResSummaryWithOptions(request: DescribeMianLiuResSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMianLiuResSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMianLiuResSummaryResponse>(await this.doRPCRequest("DescribeMianLiuResSummary", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMianLiuResSummaryResponse({}));
  }

  async describeMianLiuResSummary(request: DescribeMianLiuResSummaryRequest): Promise<DescribeMianLiuResSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMianLiuResSummaryWithOptions(request, runtime);
  }

  async describeNgSourceDiagnosisLogWithOptions(request: DescribeNgSourceDiagnosisLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNgSourceDiagnosisLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNgSourceDiagnosisLogResponse>(await this.doRPCRequest("DescribeNgSourceDiagnosisLog", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNgSourceDiagnosisLogResponse({}));
  }

  async describeNgSourceDiagnosisLog(request: DescribeNgSourceDiagnosisLogRequest): Promise<DescribeNgSourceDiagnosisLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNgSourceDiagnosisLogWithOptions(request, runtime);
  }

  async describeRemainQpsWithOptions(request: DescribeRemainQpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRemainQpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRemainQpsResponse>(await this.doRPCRequest("DescribeRemainQps", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRemainQpsResponse({}));
  }

  async describeRemainQps(request: DescribeRemainQpsRequest): Promise<DescribeRemainQpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRemainQpsWithOptions(request, runtime);
  }

  async describeRequestStatisticByEsnBizIntervalWithOptions(request: DescribeRequestStatisticByEsnBizIntervalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRequestStatisticByEsnBizIntervalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRequestStatisticByEsnBizIntervalResponse>(await this.doRPCRequest("DescribeRequestStatisticByEsnBizInterval", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRequestStatisticByEsnBizIntervalResponse({}));
  }

  async describeRequestStatisticByEsnBizInterval(request: DescribeRequestStatisticByEsnBizIntervalRequest): Promise<DescribeRequestStatisticByEsnBizIntervalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRequestStatisticByEsnBizIntervalWithOptions(request, runtime);
  }

  async describeRequestStatisticCountByEsnBiz1DayWithOptions(request: DescribeRequestStatisticCountByEsnBiz1DayRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRequestStatisticCountByEsnBiz1DayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRequestStatisticCountByEsnBiz1DayResponse>(await this.doRPCRequest("DescribeRequestStatisticCountByEsnBiz1Day", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRequestStatisticCountByEsnBiz1DayResponse({}));
  }

  async describeRequestStatisticCountByEsnBiz1Day(request: DescribeRequestStatisticCountByEsnBiz1DayRequest): Promise<DescribeRequestStatisticCountByEsnBiz1DayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRequestStatisticCountByEsnBiz1DayWithOptions(request, runtime);
  }

  async describeRequestStatisticCountByEsnBiz1DayProvinceWithOptions(request: DescribeRequestStatisticCountByEsnBiz1DayProvinceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRequestStatisticCountByEsnBiz1DayProvinceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRequestStatisticCountByEsnBiz1DayProvinceResponse>(await this.doRPCRequest("DescribeRequestStatisticCountByEsnBiz1DayProvince", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRequestStatisticCountByEsnBiz1DayProvinceResponse({}));
  }

  async describeRequestStatisticCountByEsnBiz1DayProvince(request: DescribeRequestStatisticCountByEsnBiz1DayProvinceRequest): Promise<DescribeRequestStatisticCountByEsnBiz1DayProvinceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRequestStatisticCountByEsnBiz1DayProvinceWithOptions(request, runtime);
  }

  async describeRequestStatisticCountByEsnBiz1M30MWithOptions(request: DescribeRequestStatisticCountByEsnBiz1M30MRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRequestStatisticCountByEsnBiz1M30MResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRequestStatisticCountByEsnBiz1M30MResponse>(await this.doRPCRequest("DescribeRequestStatisticCountByEsnBiz1M30M", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRequestStatisticCountByEsnBiz1M30MResponse({}));
  }

  async describeRequestStatisticCountByEsnBiz1M30M(request: DescribeRequestStatisticCountByEsnBiz1M30MRequest): Promise<DescribeRequestStatisticCountByEsnBiz1M30MResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRequestStatisticCountByEsnBiz1M30MWithOptions(request, runtime);
  }

  async describeRequestStatisticCountByEsnBiz30MWithOptions(request: DescribeRequestStatisticCountByEsnBiz30MRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRequestStatisticCountByEsnBiz30MResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRequestStatisticCountByEsnBiz30MResponse>(await this.doRPCRequest("DescribeRequestStatisticCountByEsnBiz30M", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRequestStatisticCountByEsnBiz30MResponse({}));
  }

  async describeRequestStatisticCountByEsnBiz30M(request: DescribeRequestStatisticCountByEsnBiz30MRequest): Promise<DescribeRequestStatisticCountByEsnBiz30MResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRequestStatisticCountByEsnBiz30MWithOptions(request, runtime);
  }

  async describeRequestStatisticCountByEsnBizGroup30MWithOptions(request: DescribeRequestStatisticCountByEsnBizGroup30MRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRequestStatisticCountByEsnBizGroup30MResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRequestStatisticCountByEsnBizGroup30MResponse>(await this.doRPCRequest("DescribeRequestStatisticCountByEsnBizGroup30M", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRequestStatisticCountByEsnBizGroup30MResponse({}));
  }

  async describeRequestStatisticCountByEsnBizGroup30M(request: DescribeRequestStatisticCountByEsnBizGroup30MRequest): Promise<DescribeRequestStatisticCountByEsnBizGroup30MResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRequestStatisticCountByEsnBizGroup30MWithOptions(request, runtime);
  }

  async describeRequestStatisticLogWithOptions(request: DescribeRequestStatisticLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRequestStatisticLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRequestStatisticLogResponse>(await this.doRPCRequest("DescribeRequestStatisticLog", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRequestStatisticLogResponse({}));
  }

  async describeRequestStatisticLog(request: DescribeRequestStatisticLogRequest): Promise<DescribeRequestStatisticLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRequestStatisticLogWithOptions(request, runtime);
  }

  async describeSDKStatisticLogWithOptions(request: DescribeSDKStatisticLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSDKStatisticLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSDKStatisticLogResponse>(await this.doRPCRequest("DescribeSDKStatisticLog", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSDKStatisticLogResponse({}));
  }

  async describeSDKStatisticLog(request: DescribeSDKStatisticLogRequest): Promise<DescribeSDKStatisticLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSDKStatisticLogWithOptions(request, runtime);
  }

  async describeSDKStatisticResultByEsnBizISP1M30MWithOptions(request: DescribeSDKStatisticResultByEsnBizISP1M30MRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSDKStatisticResultByEsnBizISP1M30MResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSDKStatisticResultByEsnBizISP1M30MResponse>(await this.doRPCRequest("DescribeSDKStatisticResultByEsnBizISP1M30M", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSDKStatisticResultByEsnBizISP1M30MResponse({}));
  }

  async describeSDKStatisticResultByEsnBizISP1M30M(request: DescribeSDKStatisticResultByEsnBizISP1M30MRequest): Promise<DescribeSDKStatisticResultByEsnBizISP1M30MResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSDKStatisticResultByEsnBizISP1M30MWithOptions(request, runtime);
  }

  async describeSDKStatisticResultByEsnBizISPIntervalWithOptions(request: DescribeSDKStatisticResultByEsnBizISPIntervalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSDKStatisticResultByEsnBizISPIntervalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSDKStatisticResultByEsnBizISPIntervalResponse>(await this.doRPCRequest("DescribeSDKStatisticResultByEsnBizISPInterval", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSDKStatisticResultByEsnBizISPIntervalResponse({}));
  }

  async describeSDKStatisticResultByEsnBizISPInterval(request: DescribeSDKStatisticResultByEsnBizISPIntervalRequest): Promise<DescribeSDKStatisticResultByEsnBizISPIntervalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSDKStatisticResultByEsnBizISPIntervalWithOptions(request, runtime);
  }

  async describeSDKStatisticResultByEsnBizProvince1DayWithOptions(request: DescribeSDKStatisticResultByEsnBizProvince1DayRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSDKStatisticResultByEsnBizProvince1DayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSDKStatisticResultByEsnBizProvince1DayResponse>(await this.doRPCRequest("DescribeSDKStatisticResultByEsnBizProvince1Day", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSDKStatisticResultByEsnBizProvince1DayResponse({}));
  }

  async describeSDKStatisticResultByEsnBizProvince1Day(request: DescribeSDKStatisticResultByEsnBizProvince1DayRequest): Promise<DescribeSDKStatisticResultByEsnBizProvince1DayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSDKStatisticResultByEsnBizProvince1DayWithOptions(request, runtime);
  }

  async describeSDKStatisticResultByEsnBizProvince30MWithOptions(request: DescribeSDKStatisticResultByEsnBizProvince30MRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSDKStatisticResultByEsnBizProvince30MResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSDKStatisticResultByEsnBizProvince30MResponse>(await this.doRPCRequest("DescribeSDKStatisticResultByEsnBizProvince30M", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSDKStatisticResultByEsnBizProvince30MResponse({}));
  }

  async describeSDKStatisticResultByEsnBizProvince30M(request: DescribeSDKStatisticResultByEsnBizProvince30MRequest): Promise<DescribeSDKStatisticResultByEsnBizProvince30MResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSDKStatisticResultByEsnBizProvince30MWithOptions(request, runtime);
  }

  async describeSourceFailureTopIpWithOptions(request: DescribeSourceFailureTopIpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSourceFailureTopIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSourceFailureTopIpResponse>(await this.doRPCRequest("DescribeSourceFailureTopIp", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSourceFailureTopIpResponse({}));
  }

  async describeSourceFailureTopIp(request: DescribeSourceFailureTopIpRequest): Promise<DescribeSourceFailureTopIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSourceFailureTopIpWithOptions(request, runtime);
  }

  async describeSourceFailureTrendGraphWithOptions(request: DescribeSourceFailureTrendGraphRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSourceFailureTrendGraphResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSourceFailureTrendGraphResponse>(await this.doRPCRequest("DescribeSourceFailureTrendGraph", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSourceFailureTrendGraphResponse({}));
  }

  async describeSourceFailureTrendGraph(request: DescribeSourceFailureTrendGraphRequest): Promise<DescribeSourceFailureTrendGraphResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSourceFailureTrendGraphWithOptions(request, runtime);
  }

  async describeUploadPreSignWithOptions(request: DescribeUploadPreSignRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUploadPreSignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUploadPreSignResponse>(await this.doRPCRequest("DescribeUploadPreSign", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUploadPreSignResponse({}));
  }

  async describeUploadPreSign(request: DescribeUploadPreSignRequest): Promise<DescribeUploadPreSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUploadPreSignWithOptions(request, runtime);
  }

  async describeUserFlowInfoWithOptions(request: DescribeUserFlowInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserFlowInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserFlowInfoResponse>(await this.doRPCRequest("DescribeUserFlowInfo", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserFlowInfoResponse({}));
  }

  async describeUserFlowInfo(request: DescribeUserFlowInfoRequest): Promise<DescribeUserFlowInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserFlowInfoWithOptions(request, runtime);
  }

  async describeUserFlowReportWithOptions(request: DescribeUserFlowReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserFlowReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserFlowReportResponse>(await this.doRPCRequest("DescribeUserFlowReport", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserFlowReportResponse({}));
  }

  async describeUserFlowReport(request: DescribeUserFlowReportRequest): Promise<DescribeUserFlowReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserFlowReportWithOptions(request, runtime);
  }

  async describeUserTotalFlowReportWithOptions(request: DescribeUserTotalFlowReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserTotalFlowReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserTotalFlowReportResponse>(await this.doRPCRequest("DescribeUserTotalFlowReport", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserTotalFlowReportResponse({}));
  }

  async describeUserTotalFlowReport(request: DescribeUserTotalFlowReportRequest): Promise<DescribeUserTotalFlowReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserTotalFlowReportWithOptions(request, runtime);
  }

  async downloadAppKeyFileWithOptions(request: DownloadAppKeyFileRequest, runtime: $Util.RuntimeOptions): Promise<DownloadAppKeyFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DownloadAppKeyFileResponse>(await this.doRPCRequest("DownloadAppKeyFile", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DownloadAppKeyFileResponse({}));
  }

  async downloadAppKeyFile(request: DownloadAppKeyFileRequest): Promise<DownloadAppKeyFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadAppKeyFileWithOptions(request, runtime);
  }

  async downloadCcRouteRulesWithOptions(request: DownloadCcRouteRulesRequest, runtime: $Util.RuntimeOptions): Promise<DownloadCcRouteRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DownloadCcRouteRulesResponse>(await this.doRPCRequest("DownloadCcRouteRules", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DownloadCcRouteRulesResponse({}));
  }

  async downloadCcRouteRules(request: DownloadCcRouteRulesRequest): Promise<DownloadCcRouteRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadCcRouteRulesWithOptions(request, runtime);
  }

  async downloadFlexAccRulesFileWithOptions(request: DownloadFlexAccRulesFileRequest, runtime: $Util.RuntimeOptions): Promise<DownloadFlexAccRulesFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DownloadFlexAccRulesFileResponse>(await this.doRPCRequest("DownloadFlexAccRulesFile", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DownloadFlexAccRulesFileResponse({}));
  }

  async downloadFlexAccRulesFile(request: DownloadFlexAccRulesFileRequest): Promise<DownloadFlexAccRulesFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadFlexAccRulesFileWithOptions(request, runtime);
  }

  async downloadLayer4RulesWithOptions(request: DownloadLayer4RulesRequest, runtime: $Util.RuntimeOptions): Promise<DownloadLayer4RulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DownloadLayer4RulesResponse>(await this.doRPCRequest("DownloadLayer4Rules", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DownloadLayer4RulesResponse({}));
  }

  async downloadLayer4Rules(request: DownloadLayer4RulesRequest): Promise<DownloadLayer4RulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadLayer4RulesWithOptions(request, runtime);
  }

  async downloadSdkFileWithOptions(request: DownloadSdkFileRequest, runtime: $Util.RuntimeOptions): Promise<DownloadSdkFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DownloadSdkFileResponse>(await this.doRPCRequest("DownloadSdkFile", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DownloadSdkFileResponse({}));
  }

  async downloadSdkFile(request: DownloadSdkFileRequest): Promise<DownloadSdkFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadSdkFileWithOptions(request, runtime);
  }

  async downloadUserTotalFlowReportWithOptions(request: DownloadUserTotalFlowReportRequest, runtime: $Util.RuntimeOptions): Promise<DownloadUserTotalFlowReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DownloadUserTotalFlowReportResponse>(await this.doRPCRequest("DownloadUserTotalFlowReport", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new DownloadUserTotalFlowReportResponse({}));
  }

  async downloadUserTotalFlowReport(request: DownloadUserTotalFlowReportRequest): Promise<DownloadUserTotalFlowReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadUserTotalFlowReportWithOptions(request, runtime);
  }

  async flushLayer4RulesWithOptions(request: FlushLayer4RulesRequest, runtime: $Util.RuntimeOptions): Promise<FlushLayer4RulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FlushLayer4RulesResponse>(await this.doRPCRequest("FlushLayer4Rules", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new FlushLayer4RulesResponse({}));
  }

  async flushLayer4Rules(request: FlushLayer4RulesRequest): Promise<FlushLayer4RulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.flushLayer4RulesWithOptions(request, runtime);
  }

  async reallocNgResourceWithOptions(request: ReallocNgResourceRequest, runtime: $Util.RuntimeOptions): Promise<ReallocNgResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReallocNgResourceResponse>(await this.doRPCRequest("ReallocNgResource", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new ReallocNgResourceResponse({}));
  }

  async reallocNgResource(request: ReallocNgResourceRequest): Promise<ReallocNgResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reallocNgResourceWithOptions(request, runtime);
  }

  async replaceCcRouteRulesWithOptions(request: ReplaceCcRouteRulesRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceCcRouteRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReplaceCcRouteRulesResponse>(await this.doRPCRequest("ReplaceCcRouteRules", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new ReplaceCcRouteRulesResponse({}));
  }

  async replaceCcRouteRules(request: ReplaceCcRouteRulesRequest): Promise<ReplaceCcRouteRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceCcRouteRulesWithOptions(request, runtime);
  }

  async searchFlexFwdRulesWithOptions(request: SearchFlexFwdRulesRequest, runtime: $Util.RuntimeOptions): Promise<SearchFlexFwdRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchFlexFwdRulesResponse>(await this.doRPCRequest("SearchFlexFwdRules", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new SearchFlexFwdRulesResponse({}));
  }

  async searchFlexFwdRules(request: SearchFlexFwdRulesRequest): Promise<SearchFlexFwdRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchFlexFwdRulesWithOptions(request, runtime);
  }

  async updateAppWithOptions(request: UpdateAppRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppResponse>(await this.doRPCRequest("UpdateApp", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppResponse({}));
  }

  async updateApp(request: UpdateAppRequest): Promise<UpdateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppWithOptions(request, runtime);
  }

  async updateCcBlackListWithOptions(request: UpdateCcBlackListRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCcBlackListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCcBlackListResponse>(await this.doRPCRequest("UpdateCcBlackList", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCcBlackListResponse({}));
  }

  async updateCcBlackList(request: UpdateCcBlackListRequest): Promise<UpdateCcBlackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCcBlackListWithOptions(request, runtime);
  }

  async updateCcIDCBlockSwitchWithOptions(request: UpdateCcIDCBlockSwitchRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCcIDCBlockSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCcIDCBlockSwitchResponse>(await this.doRPCRequest("UpdateCcIDCBlockSwitch", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCcIDCBlockSwitchResponse({}));
  }

  async updateCcIDCBlockSwitch(request: UpdateCcIDCBlockSwitchRequest): Promise<UpdateCcIDCBlockSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCcIDCBlockSwitchWithOptions(request, runtime);
  }

  async updateCcRouteRulesWithOptions(request: UpdateCcRouteRulesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCcRouteRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCcRouteRulesResponse>(await this.doRPCRequest("UpdateCcRouteRules", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCcRouteRulesResponse({}));
  }

  async updateCcRouteRules(request: UpdateCcRouteRulesRequest): Promise<UpdateCcRouteRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCcRouteRulesWithOptions(request, runtime);
  }

  async updateCcRouteSwitchWithOptions(request: UpdateCcRouteSwitchRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCcRouteSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCcRouteSwitchResponse>(await this.doRPCRequest("UpdateCcRouteSwitch", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCcRouteSwitchResponse({}));
  }

  async updateCcRouteSwitch(request: UpdateCcRouteSwitchRequest): Promise<UpdateCcRouteSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCcRouteSwitchWithOptions(request, runtime);
  }

  async updateCcTunnelGrayAndOnlyAllowWithOptions(request: UpdateCcTunnelGrayAndOnlyAllowRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCcTunnelGrayAndOnlyAllowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCcTunnelGrayAndOnlyAllowResponse>(await this.doRPCRequest("UpdateCcTunnelGrayAndOnlyAllow", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCcTunnelGrayAndOnlyAllowResponse({}));
  }

  async updateCcTunnelGrayAndOnlyAllow(request: UpdateCcTunnelGrayAndOnlyAllowRequest): Promise<UpdateCcTunnelGrayAndOnlyAllowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCcTunnelGrayAndOnlyAllowWithOptions(request, runtime);
  }

  async updateCcTunnelStatusWithOptions(request: UpdateCcTunnelStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCcTunnelStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCcTunnelStatusResponse>(await this.doRPCRequest("UpdateCcTunnelStatus", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCcTunnelStatusResponse({}));
  }

  async updateCcTunnelStatus(request: UpdateCcTunnelStatusRequest): Promise<UpdateCcTunnelStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCcTunnelStatusWithOptions(request, runtime);
  }

  async updateCcUseWithOptions(request: UpdateCcUseRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCcUseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCcUseResponse>(await this.doRPCRequest("UpdateCcUse", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCcUseResponse({}));
  }

  async updateCcUse(request: UpdateCcUseRequest): Promise<UpdateCcUseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCcUseWithOptions(request, runtime);
  }

  async updateCcWhiteListWithOptions(request: UpdateCcWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCcWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCcWhiteListResponse>(await this.doRPCRequest("UpdateCcWhiteList", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCcWhiteListResponse({}));
  }

  async updateCcWhiteList(request: UpdateCcWhiteListRequest): Promise<UpdateCcWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCcWhiteListWithOptions(request, runtime);
  }

  async updateCcZoneBlockConfigWithOptions(request: UpdateCcZoneBlockConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCcZoneBlockConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCcZoneBlockConfigResponse>(await this.doRPCRequest("UpdateCcZoneBlockConfig", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCcZoneBlockConfigResponse({}));
  }

  async updateCcZoneBlockConfig(request: UpdateCcZoneBlockConfigRequest): Promise<UpdateCcZoneBlockConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCcZoneBlockConfigWithOptions(request, runtime);
  }

  async updateCcZoneBlockStatusWithOptions(request: UpdateCcZoneBlockStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCcZoneBlockStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCcZoneBlockStatusResponse>(await this.doRPCRequest("UpdateCcZoneBlockStatus", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCcZoneBlockStatusResponse({}));
  }

  async updateCcZoneBlockStatus(request: UpdateCcZoneBlockStatusRequest): Promise<UpdateCcZoneBlockStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCcZoneBlockStatusWithOptions(request, runtime);
  }

  async updateFlexAccFwdRuleWithOptions(request: UpdateFlexAccFwdRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFlexAccFwdRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFlexAccFwdRuleResponse>(await this.doRPCRequest("UpdateFlexAccFwdRule", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFlexAccFwdRuleResponse({}));
  }

  async updateFlexAccFwdRule(request: UpdateFlexAccFwdRuleRequest): Promise<UpdateFlexAccFwdRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlexAccFwdRuleWithOptions(request, runtime);
  }

  async updateFlexAccFwdRuleV2WithOptions(request: UpdateFlexAccFwdRuleV2Request, runtime: $Util.RuntimeOptions): Promise<UpdateFlexAccFwdRuleV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFlexAccFwdRuleV2Response>(await this.doRPCRequest("UpdateFlexAccFwdRuleV2", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFlexAccFwdRuleV2Response({}));
  }

  async updateFlexAccFwdRuleV2(request: UpdateFlexAccFwdRuleV2Request): Promise<UpdateFlexAccFwdRuleV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlexAccFwdRuleV2WithOptions(request, runtime);
  }

  async updateFlexAccStatusWithOptions(request: UpdateFlexAccStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFlexAccStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFlexAccStatusResponse>(await this.doRPCRequest("UpdateFlexAccStatus", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFlexAccStatusResponse({}));
  }

  async updateFlexAccStatus(request: UpdateFlexAccStatusRequest): Promise<UpdateFlexAccStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlexAccStatusWithOptions(request, runtime);
  }

  async updateFlexAccTcpPortsWithOptions(request: UpdateFlexAccTcpPortsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFlexAccTcpPortsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFlexAccTcpPortsResponse>(await this.doRPCRequest("UpdateFlexAccTcpPorts", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFlexAccTcpPortsResponse({}));
  }

  async updateFlexAccTcpPorts(request: UpdateFlexAccTcpPortsRequest): Promise<UpdateFlexAccTcpPortsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlexAccTcpPortsWithOptions(request, runtime);
  }

  async updateFlexAccUdpPortsWithOptions(request: UpdateFlexAccUdpPortsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFlexAccUdpPortsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFlexAccUdpPortsResponse>(await this.doRPCRequest("UpdateFlexAccUdpPorts", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFlexAccUdpPortsResponse({}));
  }

  async updateFlexAccUdpPorts(request: UpdateFlexAccUdpPortsRequest): Promise<UpdateFlexAccUdpPortsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlexAccUdpPortsWithOptions(request, runtime);
  }

  async updateFlexBackupGroupsWithOptions(request: UpdateFlexBackupGroupsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFlexBackupGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFlexBackupGroupsResponse>(await this.doRPCRequest("UpdateFlexBackupGroups", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFlexBackupGroupsResponse({}));
  }

  async updateFlexBackupGroups(request: UpdateFlexBackupGroupsRequest): Promise<UpdateFlexBackupGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlexBackupGroupsWithOptions(request, runtime);
  }

  async updateFlexFwdRuleWithOptions(request: UpdateFlexFwdRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFlexFwdRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFlexFwdRuleResponse>(await this.doRPCRequest("UpdateFlexFwdRule", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFlexFwdRuleResponse({}));
  }

  async updateFlexFwdRule(request: UpdateFlexFwdRuleRequest): Promise<UpdateFlexFwdRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlexFwdRuleWithOptions(request, runtime);
  }

  async updateFlexInnerPolicyWithOptions(request: UpdateFlexInnerPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFlexInnerPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFlexInnerPolicyResponse>(await this.doRPCRequest("UpdateFlexInnerPolicy", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFlexInnerPolicyResponse({}));
  }

  async updateFlexInnerPolicy(request: UpdateFlexInnerPolicyRequest): Promise<UpdateFlexInnerPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlexInnerPolicyWithOptions(request, runtime);
  }

  async updateFlexLinkTypeWithOptions(request: UpdateFlexLinkTypeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFlexLinkTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFlexLinkTypeResponse>(await this.doRPCRequest("UpdateFlexLinkType", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFlexLinkTypeResponse({}));
  }

  async updateFlexLinkType(request: UpdateFlexLinkTypeRequest): Promise<UpdateFlexLinkTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlexLinkTypeWithOptions(request, runtime);
  }

  async updateFlexPortsWithOptions(request: UpdateFlexPortsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFlexPortsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFlexPortsResponse>(await this.doRPCRequest("UpdateFlexPorts", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFlexPortsResponse({}));
  }

  async updateFlexPorts(request: UpdateFlexPortsRequest): Promise<UpdateFlexPortsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlexPortsWithOptions(request, runtime);
  }

  async updateFlexStatusWithOptions(request: UpdateFlexStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFlexStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFlexStatusResponse>(await this.doRPCRequest("UpdateFlexStatus", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFlexStatusResponse({}));
  }

  async updateFlexStatus(request: UpdateFlexStatusRequest): Promise<UpdateFlexStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlexStatusWithOptions(request, runtime);
  }

  async updateGroupWithOptions(request: UpdateGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateGroupResponse>(await this.doRPCRequest("UpdateGroup", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateGroupResponse({}));
  }

  async updateGroup(request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupWithOptions(request, runtime);
  }

  async updateGroupDnsStatusWithOptions(request: UpdateGroupDnsStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupDnsStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateGroupDnsStatusResponse>(await this.doRPCRequest("UpdateGroupDnsStatus", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateGroupDnsStatusResponse({}));
  }

  async updateGroupDnsStatus(request: UpdateGroupDnsStatusRequest): Promise<UpdateGroupDnsStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupDnsStatusWithOptions(request, runtime);
  }

  async updateGroupNodesWithOptions(request: UpdateGroupNodesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupNodesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateGroupNodesResponse>(await this.doRPCRequest("UpdateGroupNodes", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateGroupNodesResponse({}));
  }

  async updateGroupNodes(request: UpdateGroupNodesRequest): Promise<UpdateGroupNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupNodesWithOptions(request, runtime);
  }

  async updateGroupStatusWithOptions(request: UpdateGroupStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateGroupStatusResponse>(await this.doRPCRequest("UpdateGroupStatus", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateGroupStatusResponse({}));
  }

  async updateGroupStatus(request: UpdateGroupStatusRequest): Promise<UpdateGroupStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupStatusWithOptions(request, runtime);
  }

  async updateLayer4RuleWithOptions(request: UpdateLayer4RuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLayer4RuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLayer4RuleResponse>(await this.doRPCRequest("UpdateLayer4Rule", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLayer4RuleResponse({}));
  }

  async updateLayer4Rule(request: UpdateLayer4RuleRequest): Promise<UpdateLayer4RuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLayer4RuleWithOptions(request, runtime);
  }

  async uploadCcRouteFileForParseWithOptions(request: UploadCcRouteFileForParseRequest, runtime: $Util.RuntimeOptions): Promise<UploadCcRouteFileForParseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadCcRouteFileForParseResponse>(await this.doRPCRequest("UploadCcRouteFileForParse", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UploadCcRouteFileForParseResponse({}));
  }

  async uploadCcRouteFileForParse(request: UploadCcRouteFileForParseRequest): Promise<UploadCcRouteFileForParseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadCcRouteFileForParseWithOptions(request, runtime);
  }

  async uploadCcWhiteBlackListWithOptions(request: UploadCcWhiteBlackListRequest, runtime: $Util.RuntimeOptions): Promise<UploadCcWhiteBlackListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadCcWhiteBlackListResponse>(await this.doRPCRequest("UploadCcWhiteBlackList", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UploadCcWhiteBlackListResponse({}));
  }

  async uploadCcWhiteBlackList(request: UploadCcWhiteBlackListRequest): Promise<UploadCcWhiteBlackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadCcWhiteBlackListWithOptions(request, runtime);
  }

  async uploadFlexAccRulesFileForParseWithOptions(request: UploadFlexAccRulesFileForParseRequest, runtime: $Util.RuntimeOptions): Promise<UploadFlexAccRulesFileForParseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadFlexAccRulesFileForParseResponse>(await this.doRPCRequest("UploadFlexAccRulesFileForParse", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UploadFlexAccRulesFileForParseResponse({}));
  }

  async uploadFlexAccRulesFileForParse(request: UploadFlexAccRulesFileForParseRequest): Promise<UploadFlexAccRulesFileForParseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadFlexAccRulesFileForParseWithOptions(request, runtime);
  }

  async uploadFlexRulesFileForParseWithOptions(request: UploadFlexRulesFileForParseRequest, runtime: $Util.RuntimeOptions): Promise<UploadFlexRulesFileForParseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadFlexRulesFileForParseResponse>(await this.doRPCRequest("UploadFlexRulesFileForParse", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UploadFlexRulesFileForParseResponse({}));
  }

  async uploadFlexRulesFileForParse(request: UploadFlexRulesFileForParseRequest): Promise<UploadFlexRulesFileForParseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadFlexRulesFileForParseWithOptions(request, runtime);
  }

  async uploadL4RulesFileForParseWithOptions(request: UploadL4RulesFileForParseRequest, runtime: $Util.RuntimeOptions): Promise<UploadL4RulesFileForParseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadL4RulesFileForParseResponse>(await this.doRPCRequest("UploadL4RulesFileForParse", "2018-03-05", "HTTPS", "POST", "AK", "json", req, runtime), new UploadL4RulesFileForParseResponse({}));
  }

  async uploadL4RulesFileForParse(request: UploadL4RulesFileForParseRequest): Promise<UploadL4RulesFileForParseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadL4RulesFileForParseWithOptions(request, runtime);
  }

}
