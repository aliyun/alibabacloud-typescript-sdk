// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateAclRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  rules?: string;
  domain?: string;
  instanceId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      rules: 'Rules',
      domain: 'Domain',
      instanceId: 'InstanceId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      rules: 'string',
      domain: 'string',
      instanceId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclRuleResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateAclRuleResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateAclRuleResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAclRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAclRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertAndKeyRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  region?: string;
  instanceId?: string;
  cert?: string;
  key?: string;
  httpsCertName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      region: 'Region',
      instanceId: 'InstanceId',
      cert: 'Cert',
      key: 'Key',
      httpsCertName: 'HttpsCertName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      region: 'string',
      instanceId: 'string',
      cert: 'string',
      key: 'string',
      httpsCertName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertAndKeyResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateCertAndKeyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateCertAndKeyResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertAndKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCertAndKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCertAndKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  sourceIps?: string;
  httpPort?: string;
  httpsPort?: string;
  instanceId?: string;
  region?: string;
  isAccessProduct?: number;
  protocols?: string;
  loadBalancing?: number;
  httpToUserIp?: number;
  httpsRedirect?: number;
  rsType?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      sourceIps: 'SourceIps',
      httpPort: 'HttpPort',
      httpsPort: 'HttpsPort',
      instanceId: 'InstanceId',
      region: 'Region',
      isAccessProduct: 'IsAccessProduct',
      protocols: 'Protocols',
      loadBalancing: 'LoadBalancing',
      httpToUserIp: 'HttpToUserIp',
      httpsRedirect: 'HttpsRedirect',
      rsType: 'RsType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      sourceIps: 'string',
      httpPort: 'string',
      httpsPort: 'string',
      instanceId: 'string',
      region: 'string',
      isAccessProduct: 'number',
      protocols: 'string',
      loadBalancing: 'number',
      httpToUserIp: 'number',
      httpsRedirect: 'number',
      rsType: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateDomainConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateDomainConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDomainConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDomainConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtectionModuleRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  defense?: string;
  rule?: string;
  instanceId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      defense: 'Defense',
      rule: 'Rule',
      instanceId: 'InstanceId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      defense: 'string',
      rule: 'string',
      instanceId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtectionModuleRuleResponseBody extends $tea.Model {
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

export class CreateProtectionModuleRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProtectionModuleRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProtectionModuleRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ruleId?: number;
  domain?: string;
  instanceId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ruleId: 'RuleId',
      domain: 'Domain',
      instanceId: 'InstanceId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ruleId: 'number',
      domain: 'string',
      instanceId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclRuleResponseBody extends $tea.Model {
  requestId?: string;
  result?: DeleteAclRuleResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DeleteAclRuleResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAclRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAclRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  instanceId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      instanceId: 'InstanceId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      instanceId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: DeleteDomainConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DeleteDomainConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDomainConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDomainConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclRulesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  region?: string;
  instanceId?: string;
  domain?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      region: 'Region',
      instanceId: 'InstanceId',
      domain: 'Domain',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      region: 'string',
      instanceId: 'string',
      domain: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclRulesResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAclRulesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAclRulesResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAclRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAclRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAsyncTaskStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  region?: string;
  instanceId?: string;
  wafRequestId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      region: 'Region',
      instanceId: 'InstanceId',
      wafRequestId: 'WafRequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      region: 'string',
      instanceId: 'string',
      wafRequestId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAsyncTaskStatusResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAsyncTaskStatusResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAsyncTaskStatusResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAsyncTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAsyncTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAsyncTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  region?: string;
  instanceId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      region: 'Region',
      instanceId: 'InstanceId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      region: 'string',
      instanceId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeDomainConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeDomainConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainConfigStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  region?: string;
  instanceId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      region: 'Region',
      instanceId: 'InstanceId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      region: 'string',
      instanceId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainConfigStatusResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeDomainConfigStatusResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeDomainConfigStatusResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainConfigStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainConfigStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainConfigStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNamesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  region?: string;
  instanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      region: 'Region',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      region: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNamesResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeDomainNamesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeDomainNamesResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNamesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePayInfoRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  region?: string;
  instanceSource?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      region: 'Region',
      instanceSource: 'InstanceSource',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      region: 'string',
      instanceSource: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePayInfoResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribePayInfoResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribePayInfoResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePayInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePayInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePayInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleRulesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  pageSize?: number;
  currentPage?: number;
  domain?: string;
  defense?: string;
  instanceId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      domain: 'Domain',
      defense: 'Defense',
      instanceId: 'InstanceId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      pageSize: 'number',
      currentPage: 'number',
      domain: 'string',
      defense: 'string',
      instanceId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleRulesResponseBody extends $tea.Model {
  moduleRules?: DescribeProtectionModuleRulesResponseBodyModuleRules[];
  requestId?: string;
  total?: number;
  taskStatus?: number;
  static names(): { [key: string]: string } {
    return {
      moduleRules: 'ModuleRules',
      requestId: 'RequestId',
      total: 'Total',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleRules: { 'type': 'array', 'itemType': DescribeProtectionModuleRulesResponseBodyModuleRules },
      requestId: 'string',
      total: 'number',
      taskStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProtectionModuleRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProtectionModuleRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
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

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseBodyRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  region?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      region: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentResponseBody extends $tea.Model {
  requestId?: string;
  ips?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ips: 'Ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWafSourceIpSegmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWafSourceIpSegmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAclRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  rules?: string;
  instanceId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      rules: 'Rules',
      instanceId: 'InstanceId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      rules: 'string',
      instanceId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAclRuleResponseBody extends $tea.Model {
  requestId?: string;
  result?: ModifyAclRuleResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyAclRuleResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAclRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAclRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAclRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  sourceIps?: string;
  httpPort?: string;
  httpsPort?: string;
  instanceId?: string;
  region?: string;
  isAccessProduct?: number;
  protocols?: string;
  loadBalancing?: number;
  httpToUserIp?: number;
  httpsRedirect?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      sourceIps: 'SourceIps',
      httpPort: 'HttpPort',
      httpsPort: 'HttpsPort',
      instanceId: 'InstanceId',
      region: 'Region',
      isAccessProduct: 'IsAccessProduct',
      protocols: 'Protocols',
      loadBalancing: 'LoadBalancing',
      httpToUserIp: 'HttpToUserIp',
      httpsRedirect: 'HttpsRedirect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      sourceIps: 'string',
      httpPort: 'string',
      httpsPort: 'string',
      instanceId: 'string',
      region: 'string',
      isAccessProduct: 'number',
      protocols: 'string',
      loadBalancing: 'number',
      httpToUserIp: 'number',
      httpsRedirect: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: ModifyDomainConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyDomainConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDomainConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDomainConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionRuleCacheStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  id?: number;
  defense?: string;
  instanceId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      id: 'Id',
      defense: 'Defense',
      instanceId: 'InstanceId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      id: 'number',
      defense: 'string',
      instanceId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionRuleCacheStatusResponseBody extends $tea.Model {
  requestId?: string;
  taskStatus?: number;
  wafTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskStatus: 'TaskStatus',
      wafTaskId: 'WafTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskStatus: 'number',
      wafTaskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionRuleCacheStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyProtectionRuleCacheStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyProtectionRuleCacheStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionRuleStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  defense?: string;
  id?: number;
  ruleStatus?: number;
  lockVersion?: number;
  instanceId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      defense: 'Defense',
      id: 'Id',
      ruleStatus: 'RuleStatus',
      lockVersion: 'LockVersion',
      instanceId: 'InstanceId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      defense: 'string',
      id: 'number',
      ruleStatus: 'number',
      lockVersion: 'number',
      instanceId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionRuleStatusResponseBody extends $tea.Model {
  requestId?: string;
  taskStatus?: number;
  wafTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskStatus: 'TaskStatus',
      wafTaskId: 'WafTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskStatus: 'number',
      wafTaskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionRuleStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyProtectionRuleStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyProtectionRuleStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWafSwitchRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  region?: string;
  domain?: string;
  instanceId?: string;
  serviceOn?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      region: 'Region',
      domain: 'Domain',
      instanceId: 'InstanceId',
      serviceOn: 'ServiceOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      region: 'string',
      domain: 'string',
      instanceId: 'string',
      serviceOn: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWafSwitchResponseBody extends $tea.Model {
  requestId?: string;
  result?: ModifyWafSwitchResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyWafSwitchResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWafSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWafSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWafSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclRuleResponseBodyResult extends $tea.Model {
  status?: number;
  wafTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      wafTaskId: 'WafTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      wafTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertAndKeyResponseBodyResult extends $tea.Model {
  status?: number;
  wafTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      wafTaskId: 'WafTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      wafTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainConfigResponseBodyResult extends $tea.Model {
  status?: number;
  wafTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      wafTaskId: 'WafTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      wafTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclRuleResponseBodyResult extends $tea.Model {
  status?: number;
  wafTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      wafTaskId: 'WafTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      wafTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainConfigResponseBodyResult extends $tea.Model {
  status?: number;
  wafTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      wafTaskId: 'WafTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      wafTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclRulesResponseBodyResultAclRulesAclRuleConditionsCondition extends $tea.Model {
  key?: string;
  value?: string;
  contain?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      contain: 'Contain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      contain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclRulesResponseBodyResultAclRulesAclRuleConditions extends $tea.Model {
  condition?: DescribeAclRulesResponseBodyResultAclRulesAclRuleConditionsCondition[];
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: { 'type': 'array', 'itemType': DescribeAclRulesResponseBodyResultAclRulesAclRuleConditionsCondition },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclRulesResponseBodyResultAclRulesAclRule extends $tea.Model {
  action?: number;
  isDefault?: number;
  continueWaf?: number;
  order?: number;
  conditions?: DescribeAclRulesResponseBodyResultAclRulesAclRuleConditions;
  continueDataRiskControl?: number;
  continueSdk?: number;
  continueCc?: number;
  continueSA?: number;
  continueBlockGeo?: number;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      isDefault: 'IsDefault',
      continueWaf: 'ContinueWaf',
      order: 'Order',
      conditions: 'Conditions',
      continueDataRiskControl: 'ContinueDataRiskControl',
      continueSdk: 'ContinueSdk',
      continueCc: 'ContinueCc',
      continueSA: 'ContinueSA',
      continueBlockGeo: 'ContinueBlockGeo',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'number',
      isDefault: 'number',
      continueWaf: 'number',
      order: 'number',
      conditions: DescribeAclRulesResponseBodyResultAclRulesAclRuleConditions,
      continueDataRiskControl: 'number',
      continueSdk: 'number',
      continueCc: 'number',
      continueSA: 'number',
      continueBlockGeo: 'number',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclRulesResponseBodyResultAclRules extends $tea.Model {
  aclRule?: DescribeAclRulesResponseBodyResultAclRulesAclRule[];
  static names(): { [key: string]: string } {
    return {
      aclRule: 'AclRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRule: { 'type': 'array', 'itemType': DescribeAclRulesResponseBodyResultAclRulesAclRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclRulesResponseBodyResult extends $tea.Model {
  aclRules?: DescribeAclRulesResponseBodyResultAclRules;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      aclRules: 'AclRules',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRules: DescribeAclRulesResponseBodyResultAclRules,
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAsyncTaskStatusResponseBodyResult extends $tea.Model {
  data?: string;
  progress?: number;
  errCode?: string;
  errMsg?: string;
  asyncTaskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      progress: 'Progress',
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      asyncTaskStatus: 'AsyncTaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      progress: 'number',
      errCode: 'string',
      errMsg: 'string',
      asyncTaskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainConfigResponseBodyResultDomainConfig extends $tea.Model {
  cname?: string;
  protocolType?: number;
  sourceIps?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      protocolType: 'ProtocolType',
      sourceIps: 'SourceIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      protocolType: 'number',
      sourceIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainConfigResponseBodyResult extends $tea.Model {
  status?: number;
  wafTaskId?: string;
  domainConfig?: DescribeDomainConfigResponseBodyResultDomainConfig;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      wafTaskId: 'WafTaskId',
      domainConfig: 'DomainConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      wafTaskId: 'string',
      domainConfig: DescribeDomainConfigResponseBodyResultDomainConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainConfigStatusResponseBodyResultDomainConfig extends $tea.Model {
  configStatus?: string;
  static names(): { [key: string]: string } {
    return {
      configStatus: 'ConfigStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainConfigStatusResponseBodyResult extends $tea.Model {
  status?: number;
  wafTaskId?: string;
  domainConfig?: DescribeDomainConfigStatusResponseBodyResultDomainConfig;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      wafTaskId: 'WafTaskId',
      domainConfig: 'DomainConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      wafTaskId: 'string',
      domainConfig: DescribeDomainConfigStatusResponseBodyResultDomainConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNamesResponseBodyResult extends $tea.Model {
  domainNames?: string[];
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePayInfoResponseBodyResult extends $tea.Model {
  status?: number;
  endDate?: number;
  remainDay?: number;
  region?: string;
  payType?: number;
  inDebt?: number;
  instanceId?: string;
  trial?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      endDate: 'EndDate',
      remainDay: 'RemainDay',
      region: 'Region',
      payType: 'PayType',
      inDebt: 'InDebt',
      instanceId: 'InstanceId',
      trial: 'Trial',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      endDate: 'number',
      remainDay: 'number',
      region: 'string',
      payType: 'number',
      inDebt: 'number',
      instanceId: 'string',
      trial: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleRulesResponseBodyModuleRules extends $tea.Model {
  time?: number;
  version?: number;
  content?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      version: 'Version',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      version: 'number',
      content: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  region?: string;
  display?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      display: 'Display',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      display: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAclRuleResponseBodyResult extends $tea.Model {
  status?: number;
  wafTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      wafTaskId: 'WafTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      wafTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainConfigResponseBodyResult extends $tea.Model {
  status?: number;
  wafTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      wafTaskId: 'WafTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      wafTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWafSwitchResponseBodyResult extends $tea.Model {
  status?: number;
  wafTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      wafTaskId: 'WafTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      wafTaskId: 'string',
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
    this._endpointMap = {
      'cn-qingdao': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-beijing': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-chengdu': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-zhangjiakou': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-huhehaote': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-hangzhou': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-heyuan': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-wulanchabu': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'us-west-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'us-east-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'eu-central-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'me-east-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'cn-shanghai-finance-1': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen-finance-1': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-north-2-gov-1': "wafopenapi.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("waf-openapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createAclRuleWithOptions(request: CreateAclRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateAclRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAclRuleResponse>(await this.doRPCRequest("CreateAclRule", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAclRuleResponse({}));
  }

  async createAclRule(request: CreateAclRuleRequest): Promise<CreateAclRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAclRuleWithOptions(request, runtime);
  }

  async createCertAndKeyWithOptions(request: CreateCertAndKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateCertAndKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCertAndKeyResponse>(await this.doRPCRequest("CreateCertAndKey", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCertAndKeyResponse({}));
  }

  async createCertAndKey(request: CreateCertAndKeyRequest): Promise<CreateCertAndKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertAndKeyWithOptions(request, runtime);
  }

  async createDomainConfigWithOptions(request: CreateDomainConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateDomainConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDomainConfigResponse>(await this.doRPCRequest("CreateDomainConfig", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDomainConfigResponse({}));
  }

  async createDomainConfig(request: CreateDomainConfigRequest): Promise<CreateDomainConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainConfigWithOptions(request, runtime);
  }

  async createProtectionModuleRuleWithOptions(request: CreateProtectionModuleRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateProtectionModuleRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProtectionModuleRuleResponse>(await this.doRPCRequest("CreateProtectionModuleRule", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProtectionModuleRuleResponse({}));
  }

  async createProtectionModuleRule(request: CreateProtectionModuleRuleRequest): Promise<CreateProtectionModuleRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProtectionModuleRuleWithOptions(request, runtime);
  }

  async deleteAclRuleWithOptions(request: DeleteAclRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAclRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAclRuleResponse>(await this.doRPCRequest("DeleteAclRule", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAclRuleResponse({}));
  }

  async deleteAclRule(request: DeleteAclRuleRequest): Promise<DeleteAclRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAclRuleWithOptions(request, runtime);
  }

  async deleteDomainConfigWithOptions(request: DeleteDomainConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDomainConfigResponse>(await this.doRPCRequest("DeleteDomainConfig", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDomainConfigResponse({}));
  }

  async deleteDomainConfig(request: DeleteDomainConfigRequest): Promise<DeleteDomainConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainConfigWithOptions(request, runtime);
  }

  async describeAclRulesWithOptions(request: DescribeAclRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAclRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAclRulesResponse>(await this.doRPCRequest("DescribeAclRules", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAclRulesResponse({}));
  }

  async describeAclRules(request: DescribeAclRulesRequest): Promise<DescribeAclRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAclRulesWithOptions(request, runtime);
  }

  async describeAsyncTaskStatusWithOptions(request: DescribeAsyncTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAsyncTaskStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAsyncTaskStatusResponse>(await this.doRPCRequest("DescribeAsyncTaskStatus", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAsyncTaskStatusResponse({}));
  }

  async describeAsyncTaskStatus(request: DescribeAsyncTaskStatusRequest): Promise<DescribeAsyncTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAsyncTaskStatusWithOptions(request, runtime);
  }

  async describeDomainConfigWithOptions(request: DescribeDomainConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainConfigResponse>(await this.doRPCRequest("DescribeDomainConfig", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainConfigResponse({}));
  }

  async describeDomainConfig(request: DescribeDomainConfigRequest): Promise<DescribeDomainConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainConfigWithOptions(request, runtime);
  }

  async describeDomainConfigStatusWithOptions(request: DescribeDomainConfigStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainConfigStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainConfigStatusResponse>(await this.doRPCRequest("DescribeDomainConfigStatus", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainConfigStatusResponse({}));
  }

  async describeDomainConfigStatus(request: DescribeDomainConfigStatusRequest): Promise<DescribeDomainConfigStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainConfigStatusWithOptions(request, runtime);
  }

  async describeDomainNamesWithOptions(request: DescribeDomainNamesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainNamesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainNamesResponse>(await this.doRPCRequest("DescribeDomainNames", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainNamesResponse({}));
  }

  async describeDomainNames(request: DescribeDomainNamesRequest): Promise<DescribeDomainNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainNamesWithOptions(request, runtime);
  }

  async describePayInfoWithOptions(request: DescribePayInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribePayInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePayInfoResponse>(await this.doRPCRequest("DescribePayInfo", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePayInfoResponse({}));
  }

  async describePayInfo(request: DescribePayInfoRequest): Promise<DescribePayInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePayInfoWithOptions(request, runtime);
  }

  async describeProtectionModuleRulesWithOptions(request: DescribeProtectionModuleRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProtectionModuleRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeProtectionModuleRulesResponse>(await this.doRPCRequest("DescribeProtectionModuleRules", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProtectionModuleRulesResponse({}));
  }

  async describeProtectionModuleRules(request: DescribeProtectionModuleRulesRequest): Promise<DescribeProtectionModuleRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProtectionModuleRulesWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeWafSourceIpSegmentWithOptions(request: DescribeWafSourceIpSegmentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWafSourceIpSegmentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWafSourceIpSegmentResponse>(await this.doRPCRequest("DescribeWafSourceIpSegment", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWafSourceIpSegmentResponse({}));
  }

  async describeWafSourceIpSegment(request: DescribeWafSourceIpSegmentRequest): Promise<DescribeWafSourceIpSegmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWafSourceIpSegmentWithOptions(request, runtime);
  }

  async modifyAclRuleWithOptions(request: ModifyAclRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAclRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAclRuleResponse>(await this.doRPCRequest("ModifyAclRule", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAclRuleResponse({}));
  }

  async modifyAclRule(request: ModifyAclRuleRequest): Promise<ModifyAclRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAclRuleWithOptions(request, runtime);
  }

  async modifyDomainConfigWithOptions(request: ModifyDomainConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDomainConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDomainConfigResponse>(await this.doRPCRequest("ModifyDomainConfig", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDomainConfigResponse({}));
  }

  async modifyDomainConfig(request: ModifyDomainConfigRequest): Promise<ModifyDomainConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDomainConfigWithOptions(request, runtime);
  }

  async modifyProtectionRuleCacheStatusWithOptions(request: ModifyProtectionRuleCacheStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyProtectionRuleCacheStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyProtectionRuleCacheStatusResponse>(await this.doRPCRequest("ModifyProtectionRuleCacheStatus", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyProtectionRuleCacheStatusResponse({}));
  }

  async modifyProtectionRuleCacheStatus(request: ModifyProtectionRuleCacheStatusRequest): Promise<ModifyProtectionRuleCacheStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyProtectionRuleCacheStatusWithOptions(request, runtime);
  }

  async modifyProtectionRuleStatusWithOptions(request: ModifyProtectionRuleStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyProtectionRuleStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyProtectionRuleStatusResponse>(await this.doRPCRequest("ModifyProtectionRuleStatus", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyProtectionRuleStatusResponse({}));
  }

  async modifyProtectionRuleStatus(request: ModifyProtectionRuleStatusRequest): Promise<ModifyProtectionRuleStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyProtectionRuleStatusWithOptions(request, runtime);
  }

  async modifyWafSwitchWithOptions(request: ModifyWafSwitchRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWafSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWafSwitchResponse>(await this.doRPCRequest("ModifyWafSwitch", "2018-01-17", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWafSwitchResponse({}));
  }

  async modifyWafSwitch(request: ModifyWafSwitchRequest): Promise<ModifyWafSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWafSwitchWithOptions(request, runtime);
  }

}
