// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddDcdnDomainRequest extends $tea.Model {
  checkUrl?: string;
  domainName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceGroupId?: string;
  scope?: string;
  securityToken?: string;
  sources?: string;
  tag?: AddDcdnDomainRequestTag[];
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      checkUrl: 'CheckUrl',
      domainName: 'DomainName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      scope: 'Scope',
      securityToken: 'SecurityToken',
      sources: 'Sources',
      tag: 'Tag',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkUrl: 'string',
      domainName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      scope: 'string',
      securityToken: 'string',
      sources: 'string',
      tag: { 'type': 'array', 'itemType': AddDcdnDomainRequestTag },
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDcdnDomainResponseBody extends $tea.Model {
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

export class AddDcdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDcdnDomainResponseBody;
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
      body: AddDcdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDcdnIpaDomainRequest extends $tea.Model {
  checkUrl?: string;
  domainName?: string;
  ownerAccount?: string;
  ownerId?: number;
  protocol?: string;
  resourceGroupId?: string;
  scope?: string;
  securityToken?: string;
  sources?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      checkUrl: 'CheckUrl',
      domainName: 'DomainName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      protocol: 'Protocol',
      resourceGroupId: 'ResourceGroupId',
      scope: 'Scope',
      securityToken: 'SecurityToken',
      sources: 'Sources',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkUrl: 'string',
      domainName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      protocol: 'string',
      resourceGroupId: 'string',
      scope: 'string',
      securityToken: 'string',
      sources: 'string',
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDcdnIpaDomainResponseBody extends $tea.Model {
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

export class AddDcdnIpaDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDcdnIpaDomainResponseBody;
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
      body: AddDcdnIpaDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddDcdnDomainRequest extends $tea.Model {
  checkUrl?: string;
  domainName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceGroupId?: string;
  scope?: string;
  securityToken?: string;
  sources?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      checkUrl: 'CheckUrl',
      domainName: 'DomainName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      scope: 'Scope',
      securityToken: 'SecurityToken',
      sources: 'Sources',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkUrl: 'string',
      domainName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      scope: 'string',
      securityToken: 'string',
      sources: 'string',
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddDcdnDomainResponseBody extends $tea.Model {
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

export class BatchAddDcdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchAddDcdnDomainResponseBody;
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
      body: BatchAddDcdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateDcdnWafRulesRequest extends $tea.Model {
  policyId?: number;
  ruleConfigs?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      ruleConfigs: 'RuleConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      ruleConfigs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateDcdnWafRulesResponseBody extends $tea.Model {
  requestId?: string;
  ruleIds?: BatchCreateDcdnWafRulesResponseBodyRuleIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleIds: BatchCreateDcdnWafRulesResponseBodyRuleIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateDcdnWafRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchCreateDcdnWafRulesResponseBody;
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
      body: BatchCreateDcdnWafRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDcdnDomainConfigsRequest extends $tea.Model {
  domainNames?: string;
  functionNames?: string;
  ownerAccount?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      functionNames: 'FunctionNames',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      functionNames: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDcdnDomainConfigsResponseBody extends $tea.Model {
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

export class BatchDeleteDcdnDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchDeleteDcdnDomainConfigsResponseBody;
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
      body: BatchDeleteDcdnDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDcdnWafRulesRequest extends $tea.Model {
  ruleIds?: string;
  static names(): { [key: string]: string } {
    return {
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDcdnWafRulesResponseBody extends $tea.Model {
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

export class BatchDeleteDcdnWafRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchDeleteDcdnWafRulesResponseBody;
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
      body: BatchDeleteDcdnWafRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchModifyDcdnWafRulesRequest extends $tea.Model {
  policyId?: number;
  ruleConfigs?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      ruleConfigs: 'RuleConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      ruleConfigs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchModifyDcdnWafRulesResponseBody extends $tea.Model {
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

export class BatchModifyDcdnWafRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchModifyDcdnWafRulesResponseBody;
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
      body: BatchModifyDcdnWafRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetDcdnDomainCertificateRequest extends $tea.Model {
  certName?: string;
  certType?: string;
  domainName?: string;
  ownerId?: number;
  region?: string;
  SSLPri?: string;
  SSLProtocol?: string;
  SSLPub?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certType: 'CertType',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      region: 'Region',
      SSLPri: 'SSLPri',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certType: 'string',
      domainName: 'string',
      ownerId: 'number',
      region: 'string',
      SSLPri: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetDcdnDomainCertificateResponseBody extends $tea.Model {
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

export class BatchSetDcdnDomainCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchSetDcdnDomainCertificateResponseBody;
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
      body: BatchSetDcdnDomainCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetDcdnDomainConfigsRequest extends $tea.Model {
  domainNames?: string;
  functions?: string;
  ownerAccount?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      functions: 'Functions',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      functions: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetDcdnDomainConfigsResponseBody extends $tea.Model {
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

export class BatchSetDcdnDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchSetDcdnDomainConfigsResponseBody;
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
      body: BatchSetDcdnDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetDcdnIpaDomainConfigsRequest extends $tea.Model {
  domainNames?: string;
  functions?: string;
  ownerAccount?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      functions: 'Functions',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      functions: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetDcdnIpaDomainConfigsResponseBody extends $tea.Model {
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

export class BatchSetDcdnIpaDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchSetDcdnIpaDomainConfigsResponseBody;
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
      body: BatchSetDcdnIpaDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetDcdnWafDomainConfigsRequest extends $tea.Model {
  clientIpTag?: string;
  defenseStatus?: string;
  domainNames?: string;
  static names(): { [key: string]: string } {
    return {
      clientIpTag: 'ClientIpTag',
      defenseStatus: 'DefenseStatus',
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIpTag: 'string',
      defenseStatus: 'string',
      domainNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetDcdnWafDomainConfigsResponseBody extends $tea.Model {
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

export class BatchSetDcdnWafDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchSetDcdnWafDomainConfigsResponseBody;
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
      body: BatchSetDcdnWafDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDcdnProjectExistRequest extends $tea.Model {
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDcdnProjectExistResponseBody extends $tea.Model {
  content?: CheckDcdnProjectExistResponseBodyContent;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: CheckDcdnProjectExistResponseBodyContent,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDcdnProjectExistResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckDcdnProjectExistResponseBody;
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
      body: CheckDcdnProjectExistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitStagingRoutineCodeRequest extends $tea.Model {
  codeDescription?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      codeDescription: 'CodeDescription',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeDescription: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitStagingRoutineCodeResponseBody extends $tea.Model {
  content?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitStagingRoutineCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CommitStagingRoutineCodeResponseBody;
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
      body: CommitStagingRoutineCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnDeliverTaskRequest extends $tea.Model {
  deliver?: string;
  domainName?: string;
  name?: string;
  reports?: string;
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      deliver: 'Deliver',
      domainName: 'DomainName',
      name: 'Name',
      reports: 'Reports',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliver: 'string',
      domainName: 'string',
      name: 'string',
      reports: 'string',
      schedule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnDeliverTaskResponseBody extends $tea.Model {
  deliverId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliverId: 'DeliverId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnDeliverTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDcdnDeliverTaskResponseBody;
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
      body: CreateDcdnDeliverTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnSLSRealTimeLogDeliveryRequest extends $tea.Model {
  businessType?: string;
  dataCenter?: string;
  domainName?: string;
  projectName?: string;
  SLSLogStore?: string;
  SLSProject?: string;
  SLSRegion?: string;
  samplingRate?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      domainName: 'DomainName',
      projectName: 'ProjectName',
      SLSLogStore: 'SLSLogStore',
      SLSProject: 'SLSProject',
      SLSRegion: 'SLSRegion',
      samplingRate: 'SamplingRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      domainName: 'string',
      projectName: 'string',
      SLSLogStore: 'string',
      SLSProject: 'string',
      SLSRegion: 'string',
      samplingRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnSLSRealTimeLogDeliveryResponseBody extends $tea.Model {
  content?: CreateDcdnSLSRealTimeLogDeliveryResponseBodyContent;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: CreateDcdnSLSRealTimeLogDeliveryResponseBodyContent,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnSLSRealTimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDcdnSLSRealTimeLogDeliveryResponseBody;
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
      body: CreateDcdnSLSRealTimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnSubTaskRequest extends $tea.Model {
  domainName?: string;
  reportIds?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      reportIds: 'ReportIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      reportIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnSubTaskResponseBody extends $tea.Model {
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

export class CreateDcdnSubTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDcdnSubTaskResponseBody;
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
      body: CreateDcdnSubTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnWafPolicyRequest extends $tea.Model {
  defenseScene?: string;
  policyName?: string;
  policyStatus?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      policyName: 'string',
      policyStatus: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnWafPolicyResponseBody extends $tea.Model {
  policyId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnWafPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDcdnWafPolicyResponseBody;
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
      body: CreateDcdnWafPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoutineRequest extends $tea.Model {
  description?: string;
  envConf?: { [key: string]: any };
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      envConf: 'EnvConf',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      envConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoutineShrinkRequest extends $tea.Model {
  description?: string;
  envConfShrink?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      envConfShrink: 'EnvConf',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      envConfShrink: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoutineResponseBody extends $tea.Model {
  content?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoutineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRoutineResponseBody;
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
      body: CreateRoutineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlrAndSlsProjectRequest extends $tea.Model {
  businessType?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlrAndSlsProjectResponseBody extends $tea.Model {
  requestId?: string;
  slsInfo?: CreateSlrAndSlsProjectResponseBodySlsInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsInfo: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsInfo: CreateSlrAndSlsProjectResponseBodySlsInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlrAndSlsProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSlrAndSlsProjectResponseBody;
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
      body: CreateSlrAndSlsProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnDeliverTaskRequest extends $tea.Model {
  deliverId?: number;
  static names(): { [key: string]: string } {
    return {
      deliverId: 'DeliverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnDeliverTaskResponseBody extends $tea.Model {
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

export class DeleteDcdnDeliverTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDcdnDeliverTaskResponseBody;
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
      body: DeleteDcdnDeliverTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnDomainRequest extends $tea.Model {
  domainName?: string;
  ownerAccount?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnDomainResponseBody extends $tea.Model {
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

export class DeleteDcdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDcdnDomainResponseBody;
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
      body: DeleteDcdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnIpaDomainRequest extends $tea.Model {
  domainName?: string;
  ownerAccount?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnIpaDomainResponseBody extends $tea.Model {
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

export class DeleteDcdnIpaDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDcdnIpaDomainResponseBody;
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
      body: DeleteDcdnIpaDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnIpaSpecificConfigRequest extends $tea.Model {
  configId?: string;
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnIpaSpecificConfigResponseBody extends $tea.Model {
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

export class DeleteDcdnIpaSpecificConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDcdnIpaSpecificConfigResponseBody;
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
      body: DeleteDcdnIpaSpecificConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnKvRequest extends $tea.Model {
  key?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnKvResponseBody extends $tea.Model {
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

export class DeleteDcdnKvResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDcdnKvResponseBody;
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
      body: DeleteDcdnKvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnRealTimeLogProjectRequest extends $tea.Model {
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnRealTimeLogProjectResponseBody extends $tea.Model {
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

export class DeleteDcdnRealTimeLogProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDcdnRealTimeLogProjectResponseBody;
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
      body: DeleteDcdnRealTimeLogProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnSpecificConfigRequest extends $tea.Model {
  configId?: string;
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnSpecificConfigResponseBody extends $tea.Model {
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

export class DeleteDcdnSpecificConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDcdnSpecificConfigResponseBody;
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
      body: DeleteDcdnSpecificConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnSpecificStagingConfigRequest extends $tea.Model {
  configId?: string;
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnSpecificStagingConfigResponseBody extends $tea.Model {
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

export class DeleteDcdnSpecificStagingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDcdnSpecificStagingConfigResponseBody;
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
      body: DeleteDcdnSpecificStagingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnSubTaskResponseBody extends $tea.Model {
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

export class DeleteDcdnSubTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDcdnSubTaskResponseBody;
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
      body: DeleteDcdnSubTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnWafPolicyRequest extends $tea.Model {
  policyId?: number;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnWafPolicyResponseBody extends $tea.Model {
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

export class DeleteDcdnWafPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDcdnWafPolicyResponseBody;
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
      body: DeleteDcdnWafPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoutineRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoutineResponseBody extends $tea.Model {
  content?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoutineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRoutineResponseBody;
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
      body: DeleteRoutineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoutineCodeRevisionRequest extends $tea.Model {
  name?: string;
  selectCodeRevision?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      selectCodeRevision: 'SelectCodeRevision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      selectCodeRevision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoutineCodeRevisionResponseBody extends $tea.Model {
  content?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoutineCodeRevisionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRoutineCodeRevisionResponseBody;
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
      body: DeleteRoutineCodeRevisionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoutineConfEnvsRequest extends $tea.Model {
  envs?: { [key: string]: any };
  name?: string;
  static names(): { [key: string]: string } {
    return {
      envs: 'Envs',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoutineConfEnvsShrinkRequest extends $tea.Model {
  envsShrink?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      envsShrink: 'Envs',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envsShrink: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoutineConfEnvsResponseBody extends $tea.Model {
  content?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoutineConfEnvsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRoutineConfEnvsResponseBody;
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
      body: DeleteRoutineConfEnvsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnAclFieldsRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnAclFieldsResponseBody extends $tea.Model {
  content?: DescribeDcdnAclFieldsResponseBodyContent[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeDcdnAclFieldsResponseBodyContent },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnAclFieldsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnAclFieldsResponseBody;
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
      body: DescribeDcdnAclFieldsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpBpsDataRequest extends $tea.Model {
  deviceName?: string;
  devicePort?: string;
  endTime?: string;
  interval?: string;
  isp?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      devicePort: 'DevicePort',
      endTime: 'EndTime',
      interval: 'Interval',
      isp: 'Isp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      devicePort: 'string',
      endTime: 'string',
      interval: 'string',
      isp: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpBpsDataResponseBody extends $tea.Model {
  bgpDataInterval?: DescribeDcdnBgpBpsDataResponseBodyBgpDataInterval[];
  endTime?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bgpDataInterval: 'BgpDataInterval',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpDataInterval: { 'type': 'array', 'itemType': DescribeDcdnBgpBpsDataResponseBodyBgpDataInterval },
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnBgpBpsDataResponseBody;
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
      body: DescribeDcdnBgpBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpTrafficDataRequest extends $tea.Model {
  endTime?: string;
  interval?: string;
  isp?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      isp: 'Isp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'string',
      isp: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpTrafficDataResponseBody extends $tea.Model {
  bgpDataInterval?: DescribeDcdnBgpTrafficDataResponseBodyBgpDataInterval[];
  endTime?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bgpDataInterval: 'BgpDataInterval',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpDataInterval: { 'type': 'array', 'itemType': DescribeDcdnBgpTrafficDataResponseBodyBgpDataInterval },
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnBgpTrafficDataResponseBody;
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
      body: DescribeDcdnBgpTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBlockedRegionsRequest extends $tea.Model {
  language?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBlockedRegionsResponseBody extends $tea.Model {
  infoList?: DescribeDcdnBlockedRegionsResponseBodyInfoList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      infoList: 'InfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoList: DescribeDcdnBlockedRegionsResponseBodyInfoList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBlockedRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnBlockedRegionsResponseBody;
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
      body: DescribeDcdnBlockedRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnCertificateDetailRequest extends $tea.Model {
  certName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnCertificateDetailResponseBody extends $tea.Model {
  cert?: string;
  certId?: number;
  certName?: string;
  key?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
      certId: 'CertId',
      certName: 'CertName',
      key: 'Key',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: 'string',
      certId: 'number',
      certName: 'string',
      key: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnCertificateDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnCertificateDetailResponseBody;
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
      body: DescribeDcdnCertificateDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnCertificateListRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnCertificateListResponseBody extends $tea.Model {
  certificateListModel?: DescribeDcdnCertificateListResponseBodyCertificateListModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateListModel: 'CertificateListModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateListModel: DescribeDcdnCertificateListResponseBodyCertificateListModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnCertificateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnCertificateListResponseBody;
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
      body: DescribeDcdnCertificateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDeletedDomainsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDeletedDomainsResponseBody extends $tea.Model {
  domains?: DescribeDcdnDeletedDomainsResponseBodyDomains;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeDcdnDeletedDomainsResponseBodyDomains,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDeletedDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDeletedDomainsResponseBody;
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
      body: DescribeDcdnDeletedDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDeliverListRequest extends $tea.Model {
  deliverId?: number;
  static names(): { [key: string]: string } {
    return {
      deliverId: 'DeliverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDeliverListResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDeliverListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDeliverListResponseBody;
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
      body: DescribeDcdnDeliverListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainBpsDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainBpsDataResponseBody extends $tea.Model {
  bpsDataPerInterval?: DescribeDcdnDomainBpsDataResponseBodyBpsDataPerInterval;
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataPerInterval: 'BpsDataPerInterval',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataPerInterval: DescribeDcdnDomainBpsDataResponseBodyBpsDataPerInterval,
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainBpsDataResponseBody;
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
      body: DescribeDcdnDomainBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainBpsDataByLayerRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  layer?: string;
  locationNameEn?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      layer: 'Layer',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      layer: 'string',
      locationNameEn: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainBpsDataByLayerResponseBody extends $tea.Model {
  bpsDataInterval?: DescribeDcdnDomainBpsDataByLayerResponseBodyBpsDataInterval;
  dataInterval?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataInterval: 'BpsDataInterval',
      dataInterval: 'DataInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataInterval: DescribeDcdnDomainBpsDataByLayerResponseBodyBpsDataInterval,
      dataInterval: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainBpsDataByLayerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainBpsDataByLayerResponseBody;
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
      body: DescribeDcdnDomainBpsDataByLayerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainByCertificateRequest extends $tea.Model {
  SSLPub?: string;
  SSLStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      SSLPub: 'SSLPub',
      SSLStatus: 'SSLStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SSLPub: 'string',
      SSLStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainByCertificateResponseBody extends $tea.Model {
  certInfos?: DescribeDcdnDomainByCertificateResponseBodyCertInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeDcdnDomainByCertificateResponseBodyCertInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainByCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainByCertificateResponseBody;
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
      body: DescribeDcdnDomainByCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCcActivityLogRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  ruleName?: string;
  startTime?: string;
  triggerObject?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleName: 'RuleName',
      startTime: 'StartTime',
      triggerObject: 'TriggerObject',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ruleName: 'string',
      startTime: 'string',
      triggerObject: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCcActivityLogResponseBody extends $tea.Model {
  activityLog?: DescribeDcdnDomainCcActivityLogResponseBodyActivityLog[];
  pageIndex?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      activityLog: 'ActivityLog',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityLog: { 'type': 'array', 'itemType': DescribeDcdnDomainCcActivityLogResponseBodyActivityLog },
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCcActivityLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainCcActivityLogResponseBody;
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
      body: DescribeDcdnDomainCcActivityLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCertificateInfoRequest extends $tea.Model {
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCertificateInfoResponseBody extends $tea.Model {
  certInfos?: DescribeDcdnDomainCertificateInfoResponseBodyCertInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeDcdnDomainCertificateInfoResponseBodyCertInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCertificateInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainCertificateInfoResponseBody;
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
      body: DescribeDcdnDomainCertificateInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCnameRequest extends $tea.Model {
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCnameResponseBody extends $tea.Model {
  cnameDatas?: DescribeDcdnDomainCnameResponseBodyCnameDatas;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cnameDatas: 'CnameDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnameDatas: DescribeDcdnDomainCnameResponseBodyCnameDatas,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCnameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainCnameResponseBody;
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
      body: DescribeDcdnDomainCnameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainConfigsRequest extends $tea.Model {
  configId?: string;
  domainName?: string;
  functionNames?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      domainName: 'string',
      functionNames: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainConfigsResponseBody extends $tea.Model {
  domainConfigs?: DescribeDcdnDomainConfigsResponseBodyDomainConfigs;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigs: 'DomainConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigs: DescribeDcdnDomainConfigsResponseBodyDomainConfigs,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainConfigsResponseBody;
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
      body: DescribeDcdnDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainDetailRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainDetailResponseBody extends $tea.Model {
  domainDetail?: DescribeDcdnDomainDetailResponseBodyDomainDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainDetail: 'DomainDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainDetail: DescribeDcdnDomainDetailResponseBodyDomainDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainDetailResponseBody;
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
      body: DescribeDcdnDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHitRateDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHitRateDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  hitRatePerInterval?: DescribeDcdnDomainHitRateDataResponseBodyHitRatePerInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      hitRatePerInterval: 'HitRatePerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      hitRatePerInterval: DescribeDcdnDomainHitRateDataResponseBodyHitRatePerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainHitRateDataResponseBody;
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
      body: DescribeDcdnDomainHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataResponseBody extends $tea.Model {
  dataInterval?: string;
  dataPerInterval?: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerInterval;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      dataPerInterval: 'DataPerInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      dataPerInterval: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerInterval,
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainHttpCodeDataResponseBody;
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
      body: DescribeDcdnDomainHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataByLayerRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  layer?: string;
  locationNameEn?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      layer: 'Layer',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      layer: 'string',
      locationNameEn: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataByLayerResponseBody extends $tea.Model {
  dataInterval?: string;
  httpCodeDataInterval?: DescribeDcdnDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      httpCodeDataInterval: 'HttpCodeDataInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      httpCodeDataInterval: DescribeDcdnDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataByLayerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainHttpCodeDataByLayerResponseBody;
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
      body: DescribeDcdnDomainHttpCodeDataByLayerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaBpsDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  fixTimeGap?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  timeMerge?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      fixTimeGap: 'FixTimeGap',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
      timeMerge: 'TimeMerge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      fixTimeGap: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
      timeMerge: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaBpsDataResponseBody extends $tea.Model {
  bpsDataPerInterval?: DescribeDcdnDomainIpaBpsDataResponseBodyBpsDataPerInterval;
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataPerInterval: 'BpsDataPerInterval',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataPerInterval: DescribeDcdnDomainIpaBpsDataResponseBodyBpsDataPerInterval,
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainIpaBpsDataResponseBody;
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
      body: DescribeDcdnDomainIpaBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaConnDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  splitBy?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      splitBy: 'SplitBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      splitBy: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaConnDataResponseBody extends $tea.Model {
  connectionDataPerInterval?: DescribeDcdnDomainIpaConnDataResponseBodyConnectionDataPerInterval;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      connectionDataPerInterval: 'ConnectionDataPerInterval',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDataPerInterval: DescribeDcdnDomainIpaConnDataResponseBodyConnectionDataPerInterval,
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaConnDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainIpaConnDataResponseBody;
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
      body: DescribeDcdnDomainIpaConnDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaTrafficDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  fixTimeGap?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  timeMerge?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      fixTimeGap: 'FixTimeGap',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
      timeMerge: 'TimeMerge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      fixTimeGap: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
      timeMerge: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaTrafficDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  trafficDataPerInterval?: DescribeDcdnDomainIpaTrafficDataResponseBodyTrafficDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      trafficDataPerInterval: 'TrafficDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      trafficDataPerInterval: DescribeDcdnDomainIpaTrafficDataResponseBodyTrafficDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainIpaTrafficDataResponseBody;
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
      body: DescribeDcdnDomainIpaTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIspDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIspDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  value?: DescribeDcdnDomainIspDataResponseBodyValue;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      value: DescribeDcdnDomainIspDataResponseBodyValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIspDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainIspDataResponseBody;
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
      body: DescribeDcdnDomainIspDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainLogRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainLogResponseBody extends $tea.Model {
  domainLogDetails?: DescribeDcdnDomainLogResponseBodyDomainLogDetails;
  domainName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainLogDetails: 'DomainLogDetails',
      domainName: 'DomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetails: DescribeDcdnDomainLogResponseBodyDomainLogDetails,
      domainName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainLogResponseBody;
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
      body: DescribeDcdnDomainLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  requestPerInterval?: DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerInterval;
  startTime?: string;
  trafficPerInterval?: DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      requestPerInterval: 'RequestPerInterval',
      startTime: 'StartTime',
      trafficPerInterval: 'TrafficPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      requestPerInterval: DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerInterval,
      startTime: 'string',
      trafficPerInterval: DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainMultiUsageDataResponseBody;
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
      body: DescribeDcdnDomainMultiUsageDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginBpsDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginBpsDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  originBpsDataPerInterval?: DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      originBpsDataPerInterval: 'OriginBpsDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      originBpsDataPerInterval: DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainOriginBpsDataResponseBody;
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
      body: DescribeDcdnDomainOriginBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginTrafficDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginTrafficDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  originTrafficDataPerInterval?: DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      originTrafficDataPerInterval: 'OriginTrafficDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      originTrafficDataPerInterval: DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainOriginTrafficDataResponseBody;
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
      body: DescribeDcdnDomainOriginTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainPropertyRequest extends $tea.Model {
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainPropertyResponseBody extends $tea.Model {
  domainName?: string;
  protocol?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      protocol: 'Protocol',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      protocol: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainPropertyResponseBody;
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
      body: DescribeDcdnDomainPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainPvDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainPvDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  pvDataInterval?: DescribeDcdnDomainPvDataResponseBodyPvDataInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      pvDataInterval: 'PvDataInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      pvDataInterval: DescribeDcdnDomainPvDataResponseBodyPvDataInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainPvDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainPvDataResponseBody;
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
      body: DescribeDcdnDomainPvDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainQpsDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainQpsDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  qpsDataPerInterval?: DescribeDcdnDomainQpsDataResponseBodyQpsDataPerInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      qpsDataPerInterval: 'QpsDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      qpsDataPerInterval: DescribeDcdnDomainQpsDataResponseBodyQpsDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainQpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainQpsDataResponseBody;
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
      body: DescribeDcdnDomainQpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainQpsDataByLayerRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  layer?: string;
  locationNameEn?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      layer: 'Layer',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      layer: 'string',
      locationNameEn: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainQpsDataByLayerResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  layer?: string;
  qpsDataInterval?: DescribeDcdnDomainQpsDataByLayerResponseBodyQpsDataInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      layer: 'Layer',
      qpsDataInterval: 'QpsDataInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      layer: 'string',
      qpsDataInterval: DescribeDcdnDomainQpsDataByLayerResponseBodyQpsDataInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainQpsDataByLayerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainQpsDataByLayerResponseBody;
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
      body: DescribeDcdnDomainQpsDataByLayerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeBpsDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeBpsDataResponseBody extends $tea.Model {
  data?: DescribeDcdnDomainRealTimeBpsDataResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDcdnDomainRealTimeBpsDataResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainRealTimeBpsDataResponseBody;
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
      body: DescribeDcdnDomainRealTimeBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeByteHitRateDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeByteHitRateDataResponseBody extends $tea.Model {
  data?: DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeByteHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainRealTimeByteHitRateDataResponseBody;
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
      body: DescribeDcdnDomainRealTimeByteHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeDetailDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  field?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  merge?: string;
  mergeLocIsp?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      field: 'Field',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      merge: 'Merge',
      mergeLocIsp: 'MergeLocIsp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      field: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      merge: 'string',
      mergeLocIsp: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeDetailDataResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeDetailDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainRealTimeDetailDataResponseBody;
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
      body: DescribeDcdnDomainRealTimeDetailDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeHttpCodeDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeHttpCodeDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  realTimeHttpCodeData?: DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      realTimeHttpCodeData: 'RealTimeHttpCodeData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      realTimeHttpCodeData: DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainRealTimeHttpCodeDataResponseBody;
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
      body: DescribeDcdnDomainRealTimeHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeQpsDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeQpsDataResponseBody extends $tea.Model {
  data?: DescribeDcdnDomainRealTimeQpsDataResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDcdnDomainRealTimeQpsDataResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeQpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainRealTimeQpsDataResponseBody;
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
      body: DescribeDcdnDomainRealTimeQpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeReqHitRateDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeReqHitRateDataResponseBody extends $tea.Model {
  data?: DescribeDcdnDomainRealTimeReqHitRateDataResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDcdnDomainRealTimeReqHitRateDataResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeReqHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainRealTimeReqHitRateDataResponseBody;
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
      body: DescribeDcdnDomainRealTimeReqHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcBpsDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcBpsDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  realTimeSrcBpsDataPerInterval?: DescribeDcdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      realTimeSrcBpsDataPerInterval: 'RealTimeSrcBpsDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      realTimeSrcBpsDataPerInterval: DescribeDcdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainRealTimeSrcBpsDataResponseBody;
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
      body: DescribeDcdnDomainRealTimeSrcBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcHttpCodeDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  realTimeSrcHttpCodeData?: DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      realTimeSrcHttpCodeData: 'RealTimeSrcHttpCodeData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      realTimeSrcHttpCodeData: DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBody;
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
      body: DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcTrafficDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcTrafficDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  realTimeSrcTrafficDataPerInterval?: DescribeDcdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      realTimeSrcTrafficDataPerInterval: 'RealTimeSrcTrafficDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      realTimeSrcTrafficDataPerInterval: DescribeDcdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainRealTimeSrcTrafficDataResponseBody;
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
      body: DescribeDcdnDomainRealTimeSrcTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeTrafficDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeTrafficDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  realTimeTrafficDataPerInterval?: DescribeDcdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      realTimeTrafficDataPerInterval: 'RealTimeTrafficDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      realTimeTrafficDataPerInterval: DescribeDcdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainRealTimeTrafficDataResponseBody;
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
      body: DescribeDcdnDomainRealTimeTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRegionDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRegionDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  value?: DescribeDcdnDomainRegionDataResponseBodyValue;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      value: DescribeDcdnDomainRegionDataResponseBodyValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRegionDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainRegionDataResponseBody;
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
      body: DescribeDcdnDomainRegionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainStagingConfigRequest extends $tea.Model {
  domainName?: string;
  functionNames?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      functionNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainStagingConfigResponseBody extends $tea.Model {
  domainConfigs?: DescribeDcdnDomainStagingConfigResponseBodyDomainConfigs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigs: 'DomainConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigs: { 'type': 'array', 'itemType': DescribeDcdnDomainStagingConfigResponseBodyDomainConfigs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainStagingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainStagingConfigResponseBody;
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
      body: DescribeDcdnDomainStagingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopReferVisitRequest extends $tea.Model {
  domainName?: string;
  sortBy?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      sortBy: 'SortBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      sortBy: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopReferVisitResponseBody extends $tea.Model {
  domainName?: string;
  requestId?: string;
  startTime?: string;
  topReferList?: DescribeDcdnDomainTopReferVisitResponseBodyTopReferList;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      requestId: 'RequestId',
      startTime: 'StartTime',
      topReferList: 'TopReferList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      requestId: 'string',
      startTime: 'string',
      topReferList: DescribeDcdnDomainTopReferVisitResponseBodyTopReferList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopReferVisitResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainTopReferVisitResponseBody;
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
      body: DescribeDcdnDomainTopReferVisitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitRequest extends $tea.Model {
  domainName?: string;
  sortBy?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      sortBy: 'SortBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      sortBy: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBody extends $tea.Model {
  allUrlList?: DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlList;
  domainName?: string;
  requestId?: string;
  startTime?: string;
  url200List?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl200List;
  url300List?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl300List;
  url400List?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl400List;
  url500List?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl500List;
  static names(): { [key: string]: string } {
    return {
      allUrlList: 'AllUrlList',
      domainName: 'DomainName',
      requestId: 'RequestId',
      startTime: 'StartTime',
      url200List: 'Url200List',
      url300List: 'Url300List',
      url400List: 'Url400List',
      url500List: 'Url500List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allUrlList: DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlList,
      domainName: 'string',
      requestId: 'string',
      startTime: 'string',
      url200List: DescribeDcdnDomainTopUrlVisitResponseBodyUrl200List,
      url300List: DescribeDcdnDomainTopUrlVisitResponseBodyUrl300List,
      url400List: DescribeDcdnDomainTopUrlVisitResponseBodyUrl400List,
      url500List: DescribeDcdnDomainTopUrlVisitResponseBodyUrl500List,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainTopUrlVisitResponseBody;
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
      body: DescribeDcdnDomainTopUrlVisitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTrafficDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTrafficDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  trafficDataPerInterval?: DescribeDcdnDomainTrafficDataResponseBodyTrafficDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      trafficDataPerInterval: 'TrafficDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      trafficDataPerInterval: DescribeDcdnDomainTrafficDataResponseBodyTrafficDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainTrafficDataResponseBody;
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
      body: DescribeDcdnDomainTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainUsageDataRequest extends $tea.Model {
  area?: string;
  dataProtocol?: string;
  domainName?: string;
  endTime?: string;
  field?: string;
  interval?: string;
  startTime?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      dataProtocol: 'DataProtocol',
      domainName: 'DomainName',
      endTime: 'EndTime',
      field: 'Field',
      interval: 'Interval',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      dataProtocol: 'string',
      domainName: 'string',
      endTime: 'string',
      field: 'string',
      interval: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainUsageDataResponseBody extends $tea.Model {
  area?: string;
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  type?: string;
  usageDataPerInterval?: DescribeDcdnDomainUsageDataResponseBodyUsageDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      type: 'Type',
      usageDataPerInterval: 'UsageDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      type: 'string',
      usageDataPerInterval: DescribeDcdnDomainUsageDataResponseBodyUsageDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainUsageDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainUsageDataResponseBody;
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
      body: DescribeDcdnDomainUsageDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainUvDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainUvDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  uvDataInterval?: DescribeDcdnDomainUvDataResponseBodyUvDataInterval;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      uvDataInterval: 'UvDataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      uvDataInterval: DescribeDcdnDomainUvDataResponseBodyUvDataInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainUvDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainUvDataResponseBody;
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
      body: DescribeDcdnDomainUvDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketBpsDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketBpsDataResponseBody extends $tea.Model {
  bpsDataPerInterval?: DescribeDcdnDomainWebsocketBpsDataResponseBodyBpsDataPerInterval;
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataPerInterval: 'BpsDataPerInterval',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataPerInterval: DescribeDcdnDomainWebsocketBpsDataResponseBodyBpsDataPerInterval,
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainWebsocketBpsDataResponseBody;
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
      body: DescribeDcdnDomainWebsocketBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketHttpCodeDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketHttpCodeDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  httpCodeDataPerInterval?: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      httpCodeDataPerInterval: 'HttpCodeDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      httpCodeDataPerInterval: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainWebsocketHttpCodeDataResponseBody;
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
      body: DescribeDcdnDomainWebsocketHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketTrafficDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketTrafficDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  trafficDataPerInterval?: DescribeDcdnDomainWebsocketTrafficDataResponseBodyTrafficDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      trafficDataPerInterval: 'TrafficDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      trafficDataPerInterval: DescribeDcdnDomainWebsocketTrafficDataResponseBodyTrafficDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnDomainWebsocketTrafficDataResponseBody;
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
      body: DescribeDcdnDomainWebsocketTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnErUsageDataRequest extends $tea.Model {
  endTime?: string;
  routineID?: string;
  spec?: string;
  splitBy?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      routineID: 'RoutineID',
      spec: 'Spec',
      splitBy: 'SplitBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      routineID: 'string',
      spec: 'string',
      splitBy: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnErUsageDataResponseBody extends $tea.Model {
  endTime?: string;
  erAccData?: DescribeDcdnErUsageDataResponseBodyErAccData;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      erAccData: 'ErAccData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      erAccData: DescribeDcdnErUsageDataResponseBodyErAccData,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnErUsageDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnErUsageDataResponseBody;
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
      body: DescribeDcdnErUsageDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnFullDomainsBlockIPConfigRequest extends $tea.Model {
  IPList?: string;
  static names(): { [key: string]: string } {
    return {
      IPList: 'IPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnFullDomainsBlockIPConfigResponseBody extends $tea.Model {
  code?: number;
  message?: string;
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

export class DescribeDcdnFullDomainsBlockIPConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnFullDomainsBlockIPConfigResponseBody;
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
      body: DescribeDcdnFullDomainsBlockIPConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnFullDomainsBlockIPHistoryRequest extends $tea.Model {
  endTime?: string;
  IPList?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      IPList: 'IPList',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      IPList: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnFullDomainsBlockIPHistoryResponseBody extends $tea.Model {
  code?: number;
  description?: string;
  IPBlockInfo?: DescribeDcdnFullDomainsBlockIPHistoryResponseBodyIPBlockInfo[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      IPBlockInfo: 'IPBlockInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      description: 'string',
      IPBlockInfo: { 'type': 'array', 'itemType': DescribeDcdnFullDomainsBlockIPHistoryResponseBodyIPBlockInfo },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnFullDomainsBlockIPHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnFullDomainsBlockIPHistoryResponseBody;
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
      body: DescribeDcdnFullDomainsBlockIPHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnHttpsDomainListRequest extends $tea.Model {
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnHttpsDomainListResponseBody extends $tea.Model {
  certInfos?: DescribeDcdnHttpsDomainListResponseBodyCertInfos;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeDcdnHttpsDomainListResponseBodyCertInfos,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnHttpsDomainListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnHttpsDomainListResponseBody;
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
      body: DescribeDcdnHttpsDomainListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpInfoRequest extends $tea.Model {
  IP?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpInfoResponseBody extends $tea.Model {
  dcdnIp?: string;
  ISP?: string;
  ispEname?: string;
  region?: string;
  regionEname?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dcdnIp: 'DcdnIp',
      ISP: 'ISP',
      ispEname: 'IspEname',
      region: 'Region',
      regionEname: 'RegionEname',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dcdnIp: 'string',
      ISP: 'string',
      ispEname: 'string',
      region: 'string',
      regionEname: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnIpInfoResponseBody;
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
      body: DescribeDcdnIpInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainConfigsRequest extends $tea.Model {
  domainName?: string;
  functionNames?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      functionNames: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainConfigsResponseBody extends $tea.Model {
  domainConfigs?: DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigs;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigs: 'DomainConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigs: DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigs,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnIpaDomainConfigsResponseBody;
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
      body: DescribeDcdnIpaDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainDetailRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainDetailResponseBody extends $tea.Model {
  domainDetail?: DescribeDcdnIpaDomainDetailResponseBodyDomainDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainDetail: 'DomainDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainDetail: DescribeDcdnIpaDomainDetailResponseBodyDomainDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnIpaDomainDetailResponseBody;
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
      body: DescribeDcdnIpaDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaServiceRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaServiceResponseBody extends $tea.Model {
  changingAffectTime?: string;
  changingChargeType?: string;
  instanceId?: string;
  internetChargeType?: string;
  openingTime?: string;
  operationLocks?: DescribeDcdnIpaServiceResponseBodyOperationLocks;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changingAffectTime: 'ChangingAffectTime',
      changingChargeType: 'ChangingChargeType',
      instanceId: 'InstanceId',
      internetChargeType: 'InternetChargeType',
      openingTime: 'OpeningTime',
      operationLocks: 'OperationLocks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changingAffectTime: 'string',
      changingChargeType: 'string',
      instanceId: 'string',
      internetChargeType: 'string',
      openingTime: 'string',
      operationLocks: DescribeDcdnIpaServiceResponseBodyOperationLocks,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnIpaServiceResponseBody;
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
      body: DescribeDcdnIpaServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaUserDomainsRequest extends $tea.Model {
  checkDomainShow?: boolean;
  domainName?: string;
  domainSearchType?: string;
  domainStatus?: string;
  funcFilter?: string;
  funcId?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  tag?: DescribeDcdnIpaUserDomainsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      checkDomainShow: 'CheckDomainShow',
      domainName: 'DomainName',
      domainSearchType: 'DomainSearchType',
      domainStatus: 'DomainStatus',
      funcFilter: 'FuncFilter',
      funcId: 'FuncId',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkDomainShow: 'boolean',
      domainName: 'string',
      domainSearchType: 'string',
      domainStatus: 'string',
      funcFilter: 'string',
      funcId: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDcdnIpaUserDomainsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaUserDomainsResponseBody extends $tea.Model {
  domains?: DescribeDcdnIpaUserDomainsResponseBodyDomains;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeDcdnIpaUserDomainsResponseBodyDomains,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaUserDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnIpaUserDomainsResponseBody;
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
      body: DescribeDcdnIpaUserDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnL2VipsRequest extends $tea.Model {
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnL2VipsResponseBody extends $tea.Model {
  domainName?: string;
  requestId?: string;
  vips?: string[];
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      requestId: 'RequestId',
      vips: 'Vips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      requestId: 'string',
      vips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnL2VipsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnL2VipsResponseBody;
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
      body: DescribeDcdnL2VipsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRealTimeDeliveryFieldRequest extends $tea.Model {
  businessType?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRealTimeDeliveryFieldResponseBody extends $tea.Model {
  content?: DescribeDcdnRealTimeDeliveryFieldResponseBodyContent;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: DescribeDcdnRealTimeDeliveryFieldResponseBodyContent,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRealTimeDeliveryFieldResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnRealTimeDeliveryFieldResponseBody;
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
      body: DescribeDcdnRealTimeDeliveryFieldResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshQuotaRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshQuotaResponseBody extends $tea.Model {
  blockQuota?: string;
  blockRemain?: string;
  dirQuota?: string;
  dirRemain?: string;
  ignoreParamsQuota?: string;
  ignoreParamsRemain?: string;
  preloadQuota?: string;
  preloadRemain?: string;
  regexQuota?: string;
  regexRemain?: string;
  requestId?: string;
  urlQuota?: string;
  urlRemain?: string;
  static names(): { [key: string]: string } {
    return {
      blockQuota: 'BlockQuota',
      blockRemain: 'BlockRemain',
      dirQuota: 'DirQuota',
      dirRemain: 'DirRemain',
      ignoreParamsQuota: 'IgnoreParamsQuota',
      ignoreParamsRemain: 'IgnoreParamsRemain',
      preloadQuota: 'PreloadQuota',
      preloadRemain: 'PreloadRemain',
      regexQuota: 'RegexQuota',
      regexRemain: 'RegexRemain',
      requestId: 'RequestId',
      urlQuota: 'UrlQuota',
      urlRemain: 'UrlRemain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockQuota: 'string',
      blockRemain: 'string',
      dirQuota: 'string',
      dirRemain: 'string',
      ignoreParamsQuota: 'string',
      ignoreParamsRemain: 'string',
      preloadQuota: 'string',
      preloadRemain: 'string',
      regexQuota: 'string',
      regexRemain: 'string',
      requestId: 'string',
      urlQuota: 'string',
      urlRemain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnRefreshQuotaResponseBody;
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
      body: DescribeDcdnRefreshQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshTaskByIdRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshTaskByIdResponseBody extends $tea.Model {
  requestId?: string;
  tasks?: DescribeDcdnRefreshTaskByIdResponseBodyTasks[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': DescribeDcdnRefreshTaskByIdResponseBodyTasks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshTaskByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnRefreshTaskByIdResponseBody;
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
      body: DescribeDcdnRefreshTaskByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshTasksRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  objectPath?: string;
  objectType?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  startTime?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      objectPath: 'ObjectPath',
      objectType: 'ObjectType',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      objectPath: 'string',
      objectType: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshTasksResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tasks?: DescribeDcdnRefreshTasksResponseBodyTasks;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: DescribeDcdnRefreshTasksResponseBodyTasks,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnRefreshTasksResponseBody;
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
      body: DescribeDcdnRefreshTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRegionAndIspRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRegionAndIspResponseBody extends $tea.Model {
  isps?: DescribeDcdnRegionAndIspResponseBodyIsps;
  regions?: DescribeDcdnRegionAndIspResponseBodyRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isps: 'Isps',
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isps: DescribeDcdnRegionAndIspResponseBodyIsps,
      regions: DescribeDcdnRegionAndIspResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRegionAndIspResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnRegionAndIspResponseBody;
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
      body: DescribeDcdnRegionAndIspResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnReportRequest extends $tea.Model {
  area?: string;
  domainName?: string;
  endTime?: string;
  httpCode?: string;
  isOverseas?: string;
  reportId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      domainName: 'DomainName',
      endTime: 'EndTime',
      httpCode: 'HttpCode',
      isOverseas: 'IsOverseas',
      reportId: 'ReportId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      domainName: 'string',
      endTime: 'string',
      httpCode: 'string',
      isOverseas: 'string',
      reportId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnReportResponseBody extends $tea.Model {
  content?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnReportResponseBody;
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
      body: DescribeDcdnReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnReportListRequest extends $tea.Model {
  reportId?: number;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnReportListResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnReportListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnReportListResponseBody;
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
      body: DescribeDcdnReportListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSLSRealtimeLogDeliveryRequest extends $tea.Model {
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSLSRealtimeLogDeliveryResponseBody extends $tea.Model {
  content?: DescribeDcdnSLSRealtimeLogDeliveryResponseBodyContent;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: DescribeDcdnSLSRealtimeLogDeliveryResponseBodyContent,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSLSRealtimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnSLSRealtimeLogDeliveryResponseBody;
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
      body: DescribeDcdnSLSRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSMCertificateDetailRequest extends $tea.Model {
  certIdentifier?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSMCertificateDetailResponseBody extends $tea.Model {
  certExpireTime?: string;
  certIdentifier?: string;
  certName?: string;
  certOrg?: string;
  commonName?: string;
  encryptCertificate?: string;
  requestId?: string;
  sans?: string;
  signCertificate?: string;
  static names(): { [key: string]: string } {
    return {
      certExpireTime: 'CertExpireTime',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      certOrg: 'CertOrg',
      commonName: 'CommonName',
      encryptCertificate: 'EncryptCertificate',
      requestId: 'RequestId',
      sans: 'Sans',
      signCertificate: 'SignCertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certExpireTime: 'string',
      certIdentifier: 'string',
      certName: 'string',
      certOrg: 'string',
      commonName: 'string',
      encryptCertificate: 'string',
      requestId: 'string',
      sans: 'string',
      signCertificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSMCertificateDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnSMCertificateDetailResponseBody;
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
      body: DescribeDcdnSMCertificateDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSMCertificateListRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSMCertificateListResponseBody extends $tea.Model {
  certificateListModel?: DescribeDcdnSMCertificateListResponseBodyCertificateListModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateListModel: 'CertificateListModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateListModel: DescribeDcdnSMCertificateListResponseBodyCertificateListModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSMCertificateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnSMCertificateListResponseBody;
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
      body: DescribeDcdnSMCertificateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSecFuncInfoRequest extends $tea.Model {
  lang?: string;
  secFuncType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      secFuncType: 'SecFuncType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      secFuncType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSecFuncInfoResponseBody extends $tea.Model {
  content?: DescribeDcdnSecFuncInfoResponseBodyContent[];
  description?: string;
  httpStatus?: string;
  requestId?: string;
  retCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      httpStatus: 'HttpStatus',
      requestId: 'RequestId',
      retCode: 'RetCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeDcdnSecFuncInfoResponseBodyContent },
      description: 'string',
      httpStatus: 'string',
      requestId: 'string',
      retCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSecFuncInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnSecFuncInfoResponseBody;
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
      body: DescribeDcdnSecFuncInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSecSpecInfoResponseBody extends $tea.Model {
  requestId?: string;
  specInfos?: DescribeDcdnSecSpecInfoResponseBodySpecInfos[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      specInfos: 'SpecInfos',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      specInfos: { 'type': 'array', 'itemType': DescribeDcdnSecSpecInfoResponseBodySpecInfos },
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSecSpecInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnSecSpecInfoResponseBody;
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
      body: DescribeDcdnSecSpecInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnServiceRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnServiceResponseBody extends $tea.Model {
  changingAffectTime?: string;
  changingChargeType?: string;
  instanceId?: string;
  internetChargeType?: string;
  openingTime?: string;
  operationLocks?: DescribeDcdnServiceResponseBodyOperationLocks;
  requestId?: string;
  websocketChangingTime?: string;
  websocketChangingType?: string;
  websocketType?: string;
  static names(): { [key: string]: string } {
    return {
      changingAffectTime: 'ChangingAffectTime',
      changingChargeType: 'ChangingChargeType',
      instanceId: 'InstanceId',
      internetChargeType: 'InternetChargeType',
      openingTime: 'OpeningTime',
      operationLocks: 'OperationLocks',
      requestId: 'RequestId',
      websocketChangingTime: 'WebsocketChangingTime',
      websocketChangingType: 'WebsocketChangingType',
      websocketType: 'WebsocketType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changingAffectTime: 'string',
      changingChargeType: 'string',
      instanceId: 'string',
      internetChargeType: 'string',
      openingTime: 'string',
      operationLocks: DescribeDcdnServiceResponseBodyOperationLocks,
      requestId: 'string',
      websocketChangingTime: 'string',
      websocketChangingType: 'string',
      websocketType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnServiceResponseBody;
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
      body: DescribeDcdnServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnStagingIpResponseBody extends $tea.Model {
  IPV4s?: DescribeDcdnStagingIpResponseBodyIPV4s;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      IPV4s: 'IPV4s',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPV4s: DescribeDcdnStagingIpResponseBodyIPV4s,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnStagingIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnStagingIpResponseBody;
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
      body: DescribeDcdnStagingIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSubListResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSubListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnSubListResponseBody;
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
      body: DescribeDcdnSubListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTagResourcesRequest extends $tea.Model {
  resourceId?: string[];
  resourceType?: string;
  tag?: DescribeDcdnTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDcdnTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  tagResources?: DescribeDcdnTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': DescribeDcdnTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnTagResourcesResponseBody;
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
      body: DescribeDcdnTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTopDomainsByFlowRequest extends $tea.Model {
  endTime?: string;
  limit?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      limit: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTopDomainsByFlowResponseBody extends $tea.Model {
  domainCount?: number;
  domainOnlineCount?: number;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  topDomains?: DescribeDcdnTopDomainsByFlowResponseBodyTopDomains;
  static names(): { [key: string]: string } {
    return {
      domainCount: 'DomainCount',
      domainOnlineCount: 'DomainOnlineCount',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      topDomains: 'TopDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCount: 'number',
      domainOnlineCount: 'number',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      topDomains: DescribeDcdnTopDomainsByFlowResponseBodyTopDomains,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTopDomainsByFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnTopDomainsByFlowResponseBody;
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
      body: DescribeDcdnTopDomainsByFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillHistoryRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillHistoryResponseBody extends $tea.Model {
  billHistoryData?: DescribeDcdnUserBillHistoryResponseBodyBillHistoryData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      billHistoryData: 'BillHistoryData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billHistoryData: DescribeDcdnUserBillHistoryResponseBodyBillHistoryData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnUserBillHistoryResponseBody;
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
      body: DescribeDcdnUserBillHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillTypeRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillTypeResponseBody extends $tea.Model {
  billTypeData?: DescribeDcdnUserBillTypeResponseBodyBillTypeData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      billTypeData: 'BillTypeData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billTypeData: DescribeDcdnUserBillTypeResponseBodyBillTypeData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnUserBillTypeResponseBody;
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
      body: DescribeDcdnUserBillTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserCertificateExpireCountResponseBody extends $tea.Model {
  expireWithin30DaysCount?: number;
  expiredCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      expireWithin30DaysCount: 'ExpireWithin30DaysCount',
      expiredCount: 'ExpiredCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireWithin30DaysCount: 'number',
      expiredCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserCertificateExpireCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnUserCertificateExpireCountResponseBody;
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
      body: DescribeDcdnUserCertificateExpireCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserConfigsRequest extends $tea.Model {
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserConfigsResponseBody extends $tea.Model {
  configs?: DescribeDcdnUserConfigsResponseBodyConfigs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': DescribeDcdnUserConfigsResponseBodyConfigs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnUserConfigsResponseBody;
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
      body: DescribeDcdnUserConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsRequest extends $tea.Model {
  changeEndTime?: string;
  changeStartTime?: string;
  checkDomainShow?: boolean;
  coverage?: string;
  domainName?: string;
  domainSearchType?: string;
  domainStatus?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  securityToken?: string;
  tag?: DescribeDcdnUserDomainsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      changeEndTime: 'ChangeEndTime',
      changeStartTime: 'ChangeStartTime',
      checkDomainShow: 'CheckDomainShow',
      coverage: 'Coverage',
      domainName: 'DomainName',
      domainSearchType: 'DomainSearchType',
      domainStatus: 'DomainStatus',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeEndTime: 'string',
      changeStartTime: 'string',
      checkDomainShow: 'boolean',
      coverage: 'string',
      domainName: 'string',
      domainSearchType: 'string',
      domainStatus: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDcdnUserDomainsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsResponseBody extends $tea.Model {
  domains?: DescribeDcdnUserDomainsResponseBodyDomains;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeDcdnUserDomainsResponseBodyDomains,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnUserDomainsResponseBody;
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
      body: DescribeDcdnUserDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsByFuncRequest extends $tea.Model {
  domainName?: string;
  funcFilter?: string;
  funcId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      funcFilter: 'FuncFilter',
      funcId: 'FuncId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      funcFilter: 'string',
      funcId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsByFuncResponseBody extends $tea.Model {
  domains?: DescribeDcdnUserDomainsByFuncResponseBodyDomains;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeDcdnUserDomainsByFuncResponseBodyDomains,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsByFuncResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnUserDomainsByFuncResponseBody;
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
      body: DescribeDcdnUserDomainsByFuncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserQuotaRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserQuotaResponseBody extends $tea.Model {
  blockQuota?: number;
  blockRemain?: number;
  domainQuota?: number;
  ignoreParamsQuota?: number;
  ignoreParamsRemain?: number;
  preloadQuota?: number;
  preloadRemain?: number;
  refreshDirQuota?: number;
  refreshDirRemain?: number;
  refreshUrlQuota?: number;
  refreshUrlRemain?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      blockQuota: 'BlockQuota',
      blockRemain: 'BlockRemain',
      domainQuota: 'DomainQuota',
      ignoreParamsQuota: 'IgnoreParamsQuota',
      ignoreParamsRemain: 'IgnoreParamsRemain',
      preloadQuota: 'PreloadQuota',
      preloadRemain: 'PreloadRemain',
      refreshDirQuota: 'RefreshDirQuota',
      refreshDirRemain: 'RefreshDirRemain',
      refreshUrlQuota: 'RefreshUrlQuota',
      refreshUrlRemain: 'RefreshUrlRemain',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockQuota: 'number',
      blockRemain: 'number',
      domainQuota: 'number',
      ignoreParamsQuota: 'number',
      ignoreParamsRemain: 'number',
      preloadQuota: 'number',
      preloadRemain: 'number',
      refreshDirQuota: 'number',
      refreshDirRemain: 'number',
      refreshUrlQuota: 'number',
      refreshUrlRemain: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnUserQuotaResponseBody;
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
      body: DescribeDcdnUserQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserRealTimeDeliveryFieldRequest extends $tea.Model {
  businessType?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserRealTimeDeliveryFieldResponseBody extends $tea.Model {
  content?: DescribeDcdnUserRealTimeDeliveryFieldResponseBodyContent;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: DescribeDcdnUserRealTimeDeliveryFieldResponseBodyContent,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserRealTimeDeliveryFieldResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnUserRealTimeDeliveryFieldResponseBody;
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
      body: DescribeDcdnUserRealTimeDeliveryFieldResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserResourcePackageRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserResourcePackageResponseBody extends $tea.Model {
  requestId?: string;
  resourcePackageInfos?: DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcePackageInfos: 'ResourcePackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcePackageInfos: DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserResourcePackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnUserResourcePackageResponseBody;
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
      body: DescribeDcdnUserResourcePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserSecDropRequest extends $tea.Model {
  data?: string;
  metric?: string;
  secFunc?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      metric: 'Metric',
      secFunc: 'SecFunc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      metric: 'string',
      secFunc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserSecDropResponseBody extends $tea.Model {
  drops?: number;
  msg?: string;
  requestId?: string;
  uuidStr?: string;
  static names(): { [key: string]: string } {
    return {
      drops: 'Drops',
      msg: 'Msg',
      requestId: 'RequestId',
      uuidStr: 'UuidStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drops: 'number',
      msg: 'string',
      requestId: 'string',
      uuidStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserSecDropResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnUserSecDropResponseBody;
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
      body: DescribeDcdnUserSecDropResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserSecDropByMinuteRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  lang?: string;
  object?: string;
  pageNumber?: number;
  pageSize?: number;
  ruleName?: string;
  secFunc?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      lang: 'Lang',
      object: 'Object',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleName: 'RuleName',
      secFunc: 'SecFunc',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      lang: 'string',
      object: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ruleName: 'string',
      secFunc: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserSecDropByMinuteResponseBody extends $tea.Model {
  description?: string;
  len?: number;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  rows?: DescribeDcdnUserSecDropByMinuteResponseBodyRows[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      len: 'Len',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rows: 'Rows',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      len: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rows: { 'type': 'array', 'itemType': DescribeDcdnUserSecDropByMinuteResponseBodyRows },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserSecDropByMinuteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnUserSecDropByMinuteResponseBody;
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
      body: DescribeDcdnUserSecDropByMinuteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserTagsResponseBody extends $tea.Model {
  requestId?: string;
  tags?: DescribeDcdnUserTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDcdnUserTagsResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnUserTagsResponseBody;
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
      body: DescribeDcdnUserTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnVerifyContentRequest extends $tea.Model {
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnVerifyContentResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnVerifyContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnVerifyContentResponseBody;
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
      body: DescribeDcdnVerifyContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainRequest extends $tea.Model {
  domainName?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainResponseBody extends $tea.Model {
  outPutDomains?: DescribeDcdnWafDomainResponseBodyOutPutDomains[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      outPutDomains: 'OutPutDomains',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outPutDomains: { 'type': 'array', 'itemType': DescribeDcdnWafDomainResponseBodyOutPutDomains },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnWafDomainResponseBody;
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
      body: DescribeDcdnWafDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainDetailRequest extends $tea.Model {
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainDetailResponseBody extends $tea.Model {
  domain?: DescribeDcdnWafDomainDetailResponseBodyDomain;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: DescribeDcdnWafDomainDetailResponseBodyDomain,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnWafDomainDetailResponseBody;
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
      body: DescribeDcdnWafDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  queryArgs?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryArgs: 'QueryArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      queryArgs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainsResponseBody extends $tea.Model {
  domains?: DescribeDcdnWafDomainsResponseBodyDomains[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeDcdnWafDomainsResponseBodyDomains },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnWafDomainsResponseBody;
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
      body: DescribeDcdnWafDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafFilterInfoRequest extends $tea.Model {
  defenseScenes?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScenes: 'DefenseScenes',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScenes: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafFilterInfoResponseBody extends $tea.Model {
  content?: DescribeDcdnWafFilterInfoResponseBodyContent[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeDcdnWafFilterInfoResponseBodyContent },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafFilterInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnWafFilterInfoResponseBody;
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
      body: DescribeDcdnWafFilterInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafGeoInfoRequest extends $tea.Model {
  language?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafGeoInfoResponseBody extends $tea.Model {
  content?: DescribeDcdnWafGeoInfoResponseBodyContent[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeDcdnWafGeoInfoResponseBodyContent },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafGeoInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnWafGeoInfoResponseBody;
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
      body: DescribeDcdnWafGeoInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafLogsRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafLogsResponseBody extends $tea.Model {
  domainLogDetails?: DescribeDcdnWafLogsResponseBodyDomainLogDetails[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainLogDetails: 'DomainLogDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetails: { 'type': 'array', 'itemType': DescribeDcdnWafLogsResponseBodyDomainLogDetails },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnWafLogsResponseBody;
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
      body: DescribeDcdnWafLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPoliciesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  queryArgs?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryArgs: 'QueryArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      queryArgs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPoliciesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  policies?: DescribeDcdnWafPoliciesResponseBodyPolicies[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policies: 'Policies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      policies: { 'type': 'array', 'itemType': DescribeDcdnWafPoliciesResponseBodyPolicies },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnWafPoliciesResponseBody;
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
      body: DescribeDcdnWafPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPolicyRequest extends $tea.Model {
  policyId?: number;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPolicyResponseBody extends $tea.Model {
  policy?: DescribeDcdnWafPolicyResponseBodyPolicy;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: DescribeDcdnWafPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnWafPolicyResponseBody;
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
      body: DescribeDcdnWafPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPolicyDomainsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  policyId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      policyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPolicyDomainsResponseBody extends $tea.Model {
  domains?: DescribeDcdnWafPolicyDomainsResponseBodyDomains[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeDcdnWafPolicyDomainsResponseBodyDomains },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPolicyDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnWafPolicyDomainsResponseBody;
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
      body: DescribeDcdnWafPolicyDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPolicyValidDomainsRequest extends $tea.Model {
  defenseScene?: string;
  domainNameLike?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      domainNameLike: 'DomainNameLike',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      domainNameLike: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPolicyValidDomainsResponseBody extends $tea.Model {
  domains?: DescribeDcdnWafPolicyValidDomainsResponseBodyDomains[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeDcdnWafPolicyValidDomainsResponseBodyDomains },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPolicyValidDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnWafPolicyValidDomainsResponseBody;
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
      body: DescribeDcdnWafPolicyValidDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafRuleRequest extends $tea.Model {
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafRuleResponseBody extends $tea.Model {
  requestId?: string;
  rule?: DescribeDcdnWafRuleResponseBodyRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rule: DescribeDcdnWafRuleResponseBodyRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnWafRuleResponseBody;
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
      body: DescribeDcdnWafRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafRulesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  queryArgs?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryArgs: 'QueryArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      queryArgs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafRulesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  rules?: DescribeDcdnWafRulesResponseBodyRules[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeDcdnWafRulesResponseBodyRules },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnWafRulesResponseBody;
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
      body: DescribeDcdnWafRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafScenesRequest extends $tea.Model {
  defenseScenes?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScenes: 'DefenseScenes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScenes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafScenesResponseBody extends $tea.Model {
  defenseScenes?: DescribeDcdnWafScenesResponseBodyDefenseScenes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScenes: 'DefenseScenes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScenes: { 'type': 'array', 'itemType': DescribeDcdnWafScenesResponseBodyDefenseScenes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafScenesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnWafScenesResponseBody;
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
      body: DescribeDcdnWafScenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafServiceRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafServiceResponseBody extends $tea.Model {
  edition?: string;
  enabled?: string;
  openingTime?: string;
  requestBillingType?: string;
  requestId?: string;
  ruleBillingType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      enabled: 'Enabled',
      openingTime: 'OpeningTime',
      requestBillingType: 'RequestBillingType',
      requestId: 'RequestId',
      ruleBillingType: 'RuleBillingType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'string',
      enabled: 'string',
      openingTime: 'string',
      requestBillingType: 'string',
      requestId: 'string',
      ruleBillingType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnWafServiceResponseBody;
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
      body: DescribeDcdnWafServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafSpecInfoResponseBody extends $tea.Model {
  edition?: string;
  requestId?: string;
  specInfos?: DescribeDcdnWafSpecInfoResponseBodySpecInfos[];
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      requestId: 'RequestId',
      specInfos: 'SpecInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'string',
      requestId: 'string',
      specInfos: { 'type': 'array', 'itemType': DescribeDcdnWafSpecInfoResponseBodySpecInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafSpecInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnWafSpecInfoResponseBody;
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
      body: DescribeDcdnWafSpecInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafUsageDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  splitBy?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      splitBy: 'SplitBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      splitBy: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafUsageDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  startTime?: string;
  wafUsageData?: DescribeDcdnWafUsageDataResponseBodyWafUsageData;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      wafUsageData: 'WafUsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      wafUsageData: DescribeDcdnWafUsageDataResponseBodyWafUsageData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafUsageDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnWafUsageDataResponseBody;
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
      body: DescribeDcdnWafUsageDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnsecServiceRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnsecServiceResponseBody extends $tea.Model {
  changingAffectTime?: string;
  changingChargeType?: string;
  domainNum?: string;
  endTime?: string;
  flowType?: string;
  instanceId?: string;
  internetChargeType?: string;
  operationLocks?: DescribeDcdnsecServiceResponseBodyOperationLocks;
  requestId?: string;
  requestType?: string;
  startTime?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      changingAffectTime: 'ChangingAffectTime',
      changingChargeType: 'ChangingChargeType',
      domainNum: 'DomainNum',
      endTime: 'EndTime',
      flowType: 'FlowType',
      instanceId: 'InstanceId',
      internetChargeType: 'InternetChargeType',
      operationLocks: 'OperationLocks',
      requestId: 'RequestId',
      requestType: 'RequestType',
      startTime: 'StartTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changingAffectTime: 'string',
      changingChargeType: 'string',
      domainNum: 'string',
      endTime: 'string',
      flowType: 'string',
      instanceId: 'string',
      internetChargeType: 'string',
      operationLocks: DescribeDcdnsecServiceResponseBodyOperationLocks,
      requestId: 'string',
      requestType: 'string',
      startTime: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnsecServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDcdnsecServiceResponseBody;
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
      body: DescribeDcdnsecServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDDomainConfigRequest extends $tea.Model {
  domainName?: string;
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      functionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDDomainConfigResponseBody extends $tea.Model {
  domainConfigs?: DescribeRDDomainConfigResponseBodyDomainConfigs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigs: 'DomainConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigs: { 'type': 'array', 'itemType': DescribeRDDomainConfigResponseBodyDomainConfigs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDDomainConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRDDomainConfigResponseBody;
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
      body: DescribeRDDomainConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDDomainsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDDomainsResponseBody extends $tea.Model {
  domains?: DescribeRDDomainsResponseBodyDomains;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeRDDomainsResponseBodyDomains,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRDDomainsResponseBody;
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
      body: DescribeRDDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoutineRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoutineResponseBody extends $tea.Model {
  content?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoutineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRoutineResponseBody;
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
      body: DescribeRoutineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoutineCanaryEnvsResponseBody extends $tea.Model {
  content?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoutineCanaryEnvsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRoutineCanaryEnvsResponseBody;
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
      body: DescribeRoutineCanaryEnvsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoutineCodeRevisionRequest extends $tea.Model {
  name?: string;
  selectCodeRevision?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      selectCodeRevision: 'SelectCodeRevision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      selectCodeRevision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoutineCodeRevisionResponseBody extends $tea.Model {
  content?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoutineCodeRevisionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRoutineCodeRevisionResponseBody;
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
      body: DescribeRoutineCodeRevisionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoutineSpecResponseBody extends $tea.Model {
  content?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoutineSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRoutineSpecResponseBody;
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
      body: DescribeRoutineSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoutineUserInfoResponseBody extends $tea.Model {
  content?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoutineUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRoutineUserInfoResponseBody;
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
      body: DescribeRoutineUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDcdnIpaStatusRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDcdnIpaStatusResponseBody extends $tea.Model {
  enabled?: boolean;
  inDebt?: boolean;
  inDebtOverdue?: boolean;
  onService?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      inDebt: 'InDebt',
      inDebtOverdue: 'InDebtOverdue',
      onService: 'OnService',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      inDebt: 'boolean',
      inDebtOverdue: 'boolean',
      onService: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDcdnIpaStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserDcdnIpaStatusResponseBody;
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
      body: DescribeUserDcdnIpaStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDcdnStatusRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDcdnStatusResponseBody extends $tea.Model {
  enabled?: boolean;
  inDebt?: boolean;
  inDebtOverdue?: boolean;
  onService?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      inDebt: 'InDebt',
      inDebtOverdue: 'InDebtOverdue',
      onService: 'OnService',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      inDebt: 'boolean',
      inDebtOverdue: 'boolean',
      onService: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDcdnStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserDcdnStatusResponseBody;
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
      body: DescribeUserDcdnStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserErStatusRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserErStatusResponseBody extends $tea.Model {
  enabled?: boolean;
  inDebt?: boolean;
  inDebtOverdue?: boolean;
  onService?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      inDebt: 'InDebt',
      inDebtOverdue: 'InDebtOverdue',
      onService: 'OnService',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      inDebt: 'boolean',
      inDebtOverdue: 'boolean',
      onService: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserErStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserErStatusResponseBody;
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
      body: DescribeUserErStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserLogserviceStatusRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserLogserviceStatusResponseBody extends $tea.Model {
  enabled?: boolean;
  inDebt?: boolean;
  inDebtOverdue?: boolean;
  onService?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      inDebt: 'InDebt',
      inDebtOverdue: 'InDebtOverdue',
      onService: 'OnService',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      inDebt: 'boolean',
      inDebtOverdue: 'boolean',
      onService: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserLogserviceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserLogserviceStatusResponseBody;
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
      body: DescribeUserLogserviceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditRoutineConfRequest extends $tea.Model {
  description?: string;
  envConf?: { [key: string]: any };
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      envConf: 'EnvConf',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      envConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditRoutineConfShrinkRequest extends $tea.Model {
  description?: string;
  envConfShrink?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      envConfShrink: 'EnvConf',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      envConfShrink: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditRoutineConfResponseBody extends $tea.Model {
  content?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditRoutineConfResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EditRoutineConfResponseBody;
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
      body: EditRoutineConfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDcdnKvRequest extends $tea.Model {
  key?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDcdnKvResponseBody extends $tea.Model {
  requestId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDcdnKvResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDcdnKvResponseBody;
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
      body: GetDcdnKvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDcdnRealTimeDeliveryProjectRequest extends $tea.Model {
  businessType?: string;
  domainName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      domainName: 'DomainName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      domainName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDcdnRealTimeDeliveryProjectResponseBody extends $tea.Model {
  content?: ListDcdnRealTimeDeliveryProjectResponseBodyContent;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ListDcdnRealTimeDeliveryProjectResponseBodyContent,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDcdnRealTimeDeliveryProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDcdnRealTimeDeliveryProjectResponseBody;
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
      body: ListDcdnRealTimeDeliveryProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDCdnDomainSchdmByPropertyRequest extends $tea.Model {
  domainName?: string;
  property?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      property: 'Property',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      property: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDCdnDomainSchdmByPropertyResponseBody extends $tea.Model {
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

export class ModifyDCdnDomainSchdmByPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDCdnDomainSchdmByPropertyResponseBody;
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
      body: ModifyDCdnDomainSchdmByPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDcdnWafPolicyRequest extends $tea.Model {
  policyId?: number;
  policyName?: string;
  policyStatus?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      policyName: 'string',
      policyStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDcdnWafPolicyResponseBody extends $tea.Model {
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

export class ModifyDcdnWafPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDcdnWafPolicyResponseBody;
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
      body: ModifyDcdnWafPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDcdnWafPolicyDomainsRequest extends $tea.Model {
  bindDomains?: string;
  method?: number;
  policyId?: number;
  unbindDomains?: string;
  static names(): { [key: string]: string } {
    return {
      bindDomains: 'BindDomains',
      method: 'Method',
      policyId: 'PolicyId',
      unbindDomains: 'UnbindDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindDomains: 'string',
      method: 'number',
      policyId: 'number',
      unbindDomains: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDcdnWafPolicyDomainsResponseBody extends $tea.Model {
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

export class ModifyDcdnWafPolicyDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDcdnWafPolicyDomainsResponseBody;
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
      body: ModifyDcdnWafPolicyDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDcdnWafRuleRequest extends $tea.Model {
  ruleConfig?: string;
  ruleId?: number;
  ruleName?: string;
  ruleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ruleConfig: 'RuleConfig',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleStatus: 'RuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleConfig: 'string',
      ruleId: 'number',
      ruleName: 'string',
      ruleStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDcdnWafRuleResponseBody extends $tea.Model {
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

export class ModifyDcdnWafRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDcdnWafRuleResponseBody;
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
      body: ModifyDcdnWafRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDcdnServiceRequest extends $tea.Model {
  billType?: string;
  ownerId?: number;
  securityToken?: string;
  websocketBillType?: string;
  static names(): { [key: string]: string } {
    return {
      billType: 'BillType',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      websocketBillType: 'WebsocketBillType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billType: 'string',
      ownerId: 'number',
      securityToken: 'string',
      websocketBillType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDcdnServiceResponseBody extends $tea.Model {
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

export class OpenDcdnServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenDcdnServiceResponseBody;
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
      body: OpenDcdnServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadDcdnObjectCachesRequest extends $tea.Model {
  area?: string;
  l2Preload?: boolean;
  objectPath?: string;
  ownerId?: number;
  securityToken?: string;
  withHeader?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      l2Preload: 'L2Preload',
      objectPath: 'ObjectPath',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      withHeader: 'WithHeader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      l2Preload: 'boolean',
      objectPath: 'string',
      ownerId: 'number',
      securityToken: 'string',
      withHeader: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadDcdnObjectCachesResponseBody extends $tea.Model {
  preloadTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      preloadTaskId: 'PreloadTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preloadTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadDcdnObjectCachesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PreloadDcdnObjectCachesResponseBody;
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
      body: PreloadDcdnObjectCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishDcdnStagingConfigToProductionRequest extends $tea.Model {
  domainName?: string;
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      functionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishDcdnStagingConfigToProductionResponseBody extends $tea.Model {
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

export class PublishDcdnStagingConfigToProductionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PublishDcdnStagingConfigToProductionResponseBody;
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
      body: PublishDcdnStagingConfigToProductionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRoutineCodeRevisionRequest extends $tea.Model {
  envs?: { [key: string]: any };
  name?: string;
  selectCodeRevision?: string;
  static names(): { [key: string]: string } {
    return {
      envs: 'Envs',
      name: 'Name',
      selectCodeRevision: 'SelectCodeRevision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      selectCodeRevision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRoutineCodeRevisionShrinkRequest extends $tea.Model {
  envsShrink?: string;
  name?: string;
  selectCodeRevision?: string;
  static names(): { [key: string]: string } {
    return {
      envsShrink: 'Envs',
      name: 'Name',
      selectCodeRevision: 'SelectCodeRevision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envsShrink: 'string',
      name: 'string',
      selectCodeRevision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRoutineCodeRevisionResponseBody extends $tea.Model {
  content?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRoutineCodeRevisionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PublishRoutineCodeRevisionResponseBody;
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
      body: PublishRoutineCodeRevisionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDcdnKvRequest extends $tea.Model {
  expiration?: number;
  expirationTtl?: number;
  key?: string;
  namespace?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expiration: 'Expiration',
      expirationTtl: 'ExpirationTtl',
      key: 'Key',
      namespace: 'Namespace',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiration: 'number',
      expirationTtl: 'number',
      key: 'string',
      namespace: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDcdnKvResponseBody extends $tea.Model {
  length?: number;
  requestId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      length: 'Length',
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'number',
      requestId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDcdnKvResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PutDcdnKvResponseBody;
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
      body: PutDcdnKvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDcdnObjectCachesRequest extends $tea.Model {
  objectPath?: string;
  objectType?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      objectPath: 'ObjectPath',
      objectType: 'ObjectType',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectPath: 'string',
      objectType: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDcdnObjectCachesResponseBody extends $tea.Model {
  refreshTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      refreshTaskId: 'RefreshTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDcdnObjectCachesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefreshDcdnObjectCachesResponseBody;
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
      body: RefreshDcdnObjectCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackDcdnStagingConfigRequest extends $tea.Model {
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackDcdnStagingConfigResponseBody extends $tea.Model {
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

export class RollbackDcdnStagingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RollbackDcdnStagingConfigResponseBody;
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
      body: RollbackDcdnStagingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnDomainCertificateRequest extends $tea.Model {
  certName?: string;
  certType?: string;
  domainName?: string;
  forceSet?: string;
  ownerId?: number;
  region?: string;
  SSLPri?: string;
  SSLProtocol?: string;
  SSLPub?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certType: 'CertType',
      domainName: 'DomainName',
      forceSet: 'ForceSet',
      ownerId: 'OwnerId',
      region: 'Region',
      SSLPri: 'SSLPri',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certType: 'string',
      domainName: 'string',
      forceSet: 'string',
      ownerId: 'number',
      region: 'string',
      SSLPri: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnDomainCertificateResponseBody extends $tea.Model {
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

export class SetDcdnDomainCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDcdnDomainCertificateResponseBody;
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
      body: SetDcdnDomainCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnDomainSMCertificateRequest extends $tea.Model {
  certIdentifier?: string;
  domainName?: string;
  ownerId?: number;
  SSLProtocol?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      SSLProtocol: 'SSLProtocol',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      domainName: 'string',
      ownerId: 'number',
      SSLProtocol: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnDomainSMCertificateResponseBody extends $tea.Model {
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

export class SetDcdnDomainSMCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDcdnDomainSMCertificateResponseBody;
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
      body: SetDcdnDomainSMCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnDomainSSLCertificateRequest extends $tea.Model {
  certId?: number;
  certName?: string;
  certRegion?: string;
  certType?: string;
  domainName?: string;
  ownerId?: number;
  SSLPri?: string;
  SSLProtocol?: string;
  SSLPub?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certName: 'CertName',
      certRegion: 'CertRegion',
      certType: 'CertType',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      SSLPri: 'SSLPri',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
      certName: 'string',
      certRegion: 'string',
      certType: 'string',
      domainName: 'string',
      ownerId: 'number',
      SSLPri: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnDomainSSLCertificateResponseBody extends $tea.Model {
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

export class SetDcdnDomainSSLCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDcdnDomainSSLCertificateResponseBody;
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
      body: SetDcdnDomainSSLCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnDomainStagingConfigRequest extends $tea.Model {
  domainName?: string;
  functions?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      functions: 'Functions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      functions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnDomainStagingConfigResponseBody extends $tea.Model {
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

export class SetDcdnDomainStagingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDcdnDomainStagingConfigResponseBody;
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
      body: SetDcdnDomainStagingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnFullDomainsBlockIPRequest extends $tea.Model {
  blockInterval?: number;
  IPList?: string;
  operationType?: string;
  updateType?: string;
  static names(): { [key: string]: string } {
    return {
      blockInterval: 'BlockInterval',
      IPList: 'IPList',
      operationType: 'OperationType',
      updateType: 'UpdateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockInterval: 'number',
      IPList: 'string',
      operationType: 'string',
      updateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnFullDomainsBlockIPResponseBody extends $tea.Model {
  code?: number;
  message?: string;
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

export class SetDcdnFullDomainsBlockIPResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDcdnFullDomainsBlockIPResponseBody;
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
      body: SetDcdnFullDomainsBlockIPResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnUserConfigRequest extends $tea.Model {
  configs?: string;
  functionId?: number;
  ownerAccount?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      functionId: 'FunctionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: 'string',
      functionId: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnUserConfigResponseBody extends $tea.Model {
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

export class SetDcdnUserConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDcdnUserConfigResponseBody;
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
      body: SetDcdnUserConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRoutineSubdomainRequest extends $tea.Model {
  subdomains?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      subdomains: 'Subdomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subdomains: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRoutineSubdomainShrinkRequest extends $tea.Model {
  subdomainsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      subdomainsShrink: 'Subdomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subdomainsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRoutineSubdomainResponseBody extends $tea.Model {
  content?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRoutineSubdomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetRoutineSubdomainResponseBody;
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
      body: SetRoutineSubdomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDcdnDomainRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDcdnDomainResponseBody extends $tea.Model {
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

export class StartDcdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartDcdnDomainResponseBody;
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
      body: StartDcdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDcdnIpaDomainRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDcdnIpaDomainResponseBody extends $tea.Model {
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

export class StartDcdnIpaDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartDcdnIpaDomainResponseBody;
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
      body: StartDcdnIpaDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDcdnDomainRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDcdnDomainResponseBody extends $tea.Model {
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

export class StopDcdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopDcdnDomainResponseBody;
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
      body: StopDcdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDcdnIpaDomainRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDcdnIpaDomainResponseBody extends $tea.Model {
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

export class StopDcdnIpaDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopDcdnIpaDomainResponseBody;
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
      body: StopDcdnIpaDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagDcdnResourcesRequest extends $tea.Model {
  resourceId?: string[];
  resourceType?: string;
  tag?: TagDcdnResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagDcdnResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagDcdnResourcesResponseBody extends $tea.Model {
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

export class TagDcdnResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TagDcdnResourcesResponseBody;
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
      body: TagDcdnResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagDcdnResourcesRequest extends $tea.Model {
  all?: boolean;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagDcdnResourcesResponseBody extends $tea.Model {
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

export class UntagDcdnResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagDcdnResourcesResponseBody;
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
      body: UntagDcdnResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDcdnDeliverTaskRequest extends $tea.Model {
  deliver?: string;
  deliverId?: number;
  domainName?: string;
  name?: string;
  reports?: string;
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      deliver: 'Deliver',
      deliverId: 'DeliverId',
      domainName: 'DomainName',
      name: 'Name',
      reports: 'Reports',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliver: 'string',
      deliverId: 'number',
      domainName: 'string',
      name: 'string',
      reports: 'string',
      schedule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDcdnDeliverTaskResponseBody extends $tea.Model {
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

export class UpdateDcdnDeliverTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDcdnDeliverTaskResponseBody;
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
      body: UpdateDcdnDeliverTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDcdnDomainRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  resourceGroupId?: string;
  securityToken?: string;
  sources?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      securityToken: 'SecurityToken',
      sources: 'Sources',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      securityToken: 'string',
      sources: 'string',
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDcdnDomainResponseBody extends $tea.Model {
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

export class UpdateDcdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDcdnDomainResponseBody;
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
      body: UpdateDcdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDcdnIpaDomainRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  resourceGroupId?: string;
  securityToken?: string;
  sources?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      securityToken: 'SecurityToken',
      sources: 'Sources',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      securityToken: 'string',
      sources: 'string',
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDcdnIpaDomainResponseBody extends $tea.Model {
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

export class UpdateDcdnIpaDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDcdnIpaDomainResponseBody;
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
      body: UpdateDcdnIpaDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDcdnSLSRealtimeLogDeliveryRequest extends $tea.Model {
  dataCenter?: string;
  domainName?: string;
  projectName?: string;
  SLSLogStore?: string;
  SLSProject?: string;
  SLSRegion?: string;
  samplingRate?: string;
  static names(): { [key: string]: string } {
    return {
      dataCenter: 'DataCenter',
      domainName: 'DomainName',
      projectName: 'ProjectName',
      SLSLogStore: 'SLSLogStore',
      SLSProject: 'SLSProject',
      SLSRegion: 'SLSRegion',
      samplingRate: 'SamplingRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCenter: 'string',
      domainName: 'string',
      projectName: 'string',
      SLSLogStore: 'string',
      SLSProject: 'string',
      SLSRegion: 'string',
      samplingRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDcdnSLSRealtimeLogDeliveryResponseBody extends $tea.Model {
  content?: UpdateDcdnSLSRealtimeLogDeliveryResponseBodyContent;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: UpdateDcdnSLSRealtimeLogDeliveryResponseBodyContent,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDcdnSLSRealtimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDcdnSLSRealtimeLogDeliveryResponseBody;
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
      body: UpdateDcdnSLSRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDcdnSubTaskRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  reportIds?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      reportIds: 'ReportIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      reportIds: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDcdnSubTaskResponseBody extends $tea.Model {
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

export class UpdateDcdnSubTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDcdnSubTaskResponseBody;
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
      body: UpdateDcdnSubTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDcdnUserRealTimeDeliveryFieldRequest extends $tea.Model {
  businessType?: string;
  fields?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      fields: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDcdnUserRealTimeDeliveryFieldResponseBody extends $tea.Model {
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

export class UpdateDcdnUserRealTimeDeliveryFieldResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDcdnUserRealTimeDeliveryFieldResponseBody;
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
      body: UpdateDcdnUserRealTimeDeliveryFieldResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRoutineCodeRequest extends $tea.Model {
  codeDescription?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      codeDescription: 'CodeDescription',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeDescription: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRoutineCodeResponseBody extends $tea.Model {
  content?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRoutineCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadRoutineCodeResponseBody;
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
      body: UploadRoutineCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadStagingRoutineCodeRequest extends $tea.Model {
  codeDescription?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      codeDescription: 'CodeDescription',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeDescription: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadStagingRoutineCodeResponseBody extends $tea.Model {
  content?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadStagingRoutineCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadStagingRoutineCodeResponseBody;
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
      body: UploadStagingRoutineCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDcdnDomainOwnerRequest extends $tea.Model {
  domainName?: string;
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      verifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDcdnDomainOwnerResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDcdnDomainOwnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyDcdnDomainOwnerResponseBody;
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
      body: VerifyDcdnDomainOwnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDcdnDomainRequestTag extends $tea.Model {
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

export class BatchCreateDcdnWafRulesResponseBodyRuleIds extends $tea.Model {
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDcdnProjectExistResponseBodyContent extends $tea.Model {
  exist?: string;
  static names(): { [key: string]: string } {
    return {
      exist: 'Exist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exist: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnSLSRealTimeLogDeliveryResponseBodyContentDomains extends $tea.Model {
  desc?: string;
  domainName?: string;
  region?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      domainName: 'DomainName',
      region: 'Region',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      domainName: 'string',
      region: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnSLSRealTimeLogDeliveryResponseBodyContent extends $tea.Model {
  domains?: CreateDcdnSLSRealTimeLogDeliveryResponseBodyContentDomains[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': CreateDcdnSLSRealTimeLogDeliveryResponseBodyContentDomains },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlrAndSlsProjectResponseBodySlsInfo extends $tea.Model {
  endPoint?: string;
  logStore?: string;
  project?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      endPoint: 'EndPoint',
      logStore: 'LogStore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endPoint: 'string',
      logStore: 'string',
      project: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnAclFieldsResponseBodyContent extends $tea.Model {
  fields?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpBpsDataResponseBodyBgpDataInterval extends $tea.Model {
  in?: number;
  out?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      in: 'In',
      out: 'Out',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      in: 'number',
      out: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpTrafficDataResponseBodyBgpDataInterval extends $tea.Model {
  in?: number;
  out?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      in: 'In',
      out: 'Out',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      in: 'number',
      out: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBlockedRegionsResponseBodyInfoListInfoItem extends $tea.Model {
  continent?: string;
  countriesAndRegions?: string;
  countriesAndRegionsName?: string;
  static names(): { [key: string]: string } {
    return {
      continent: 'Continent',
      countriesAndRegions: 'CountriesAndRegions',
      countriesAndRegionsName: 'CountriesAndRegionsName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continent: 'string',
      countriesAndRegions: 'string',
      countriesAndRegionsName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBlockedRegionsResponseBodyInfoList extends $tea.Model {
  infoItem?: DescribeDcdnBlockedRegionsResponseBodyInfoListInfoItem[];
  static names(): { [key: string]: string } {
    return {
      infoItem: 'InfoItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoItem: { 'type': 'array', 'itemType': DescribeDcdnBlockedRegionsResponseBodyInfoListInfoItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnCertificateListResponseBodyCertificateListModelCertListCert extends $tea.Model {
  certId?: number;
  certName?: string;
  common?: string;
  fingerprint?: string;
  issuer?: string;
  lastTime?: number;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certName: 'CertName',
      common: 'Common',
      fingerprint: 'Fingerprint',
      issuer: 'Issuer',
      lastTime: 'LastTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
      certName: 'string',
      common: 'string',
      fingerprint: 'string',
      issuer: 'string',
      lastTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnCertificateListResponseBodyCertificateListModelCertList extends $tea.Model {
  cert?: DescribeDcdnCertificateListResponseBodyCertificateListModelCertListCert[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: { 'type': 'array', 'itemType': DescribeDcdnCertificateListResponseBodyCertificateListModelCertListCert },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnCertificateListResponseBodyCertificateListModel extends $tea.Model {
  certList?: DescribeDcdnCertificateListResponseBodyCertificateListModelCertList;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: DescribeDcdnCertificateListResponseBodyCertificateListModelCertList,
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDeletedDomainsResponseBodyDomainsPageData extends $tea.Model {
  domainName?: string;
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDeletedDomainsResponseBodyDomains extends $tea.Model {
  pageData?: DescribeDcdnDeletedDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeDcdnDeletedDomainsResponseBodyDomainsPageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $tea.Model {
  bps?: number;
  dynamicHttpBps?: number;
  dynamicHttpsBps?: number;
  staticHttpBps?: number;
  staticHttpsBps?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      dynamicHttpBps: 'DynamicHttpBps',
      dynamicHttpsBps: 'DynamicHttpsBps',
      staticHttpBps: 'StaticHttpBps',
      staticHttpsBps: 'StaticHttpsBps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      dynamicHttpBps: 'number',
      dynamicHttpsBps: 'number',
      staticHttpBps: 'number',
      staticHttpsBps: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainBpsDataResponseBodyBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainBpsDataResponseBodyBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule extends $tea.Model {
  dynamicTrafficValue?: string;
  dynamicValue?: string;
  staticTrafficValue?: string;
  staticValue?: string;
  timeStamp?: string;
  trafficValue?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicTrafficValue: 'DynamicTrafficValue',
      dynamicValue: 'DynamicValue',
      staticTrafficValue: 'StaticTrafficValue',
      staticValue: 'StaticValue',
      timeStamp: 'TimeStamp',
      trafficValue: 'TrafficValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicTrafficValue: 'string',
      dynamicValue: 'string',
      staticTrafficValue: 'string',
      staticValue: 'string',
      timeStamp: 'string',
      trafficValue: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainBpsDataByLayerResponseBodyBpsDataInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainByCertificateResponseBodyCertInfosCertInfo extends $tea.Model {
  certCaIsLegacy?: string;
  certExpireTime?: string;
  certExpired?: string;
  certStartTime?: string;
  certSubjectCommonName?: string;
  certType?: string;
  domainList?: string;
  domainNames?: string;
  issuer?: string;
  static names(): { [key: string]: string } {
    return {
      certCaIsLegacy: 'CertCaIsLegacy',
      certExpireTime: 'CertExpireTime',
      certExpired: 'CertExpired',
      certStartTime: 'CertStartTime',
      certSubjectCommonName: 'CertSubjectCommonName',
      certType: 'CertType',
      domainList: 'DomainList',
      domainNames: 'DomainNames',
      issuer: 'Issuer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCaIsLegacy: 'string',
      certExpireTime: 'string',
      certExpired: 'string',
      certStartTime: 'string',
      certSubjectCommonName: 'string',
      certType: 'string',
      domainList: 'string',
      domainNames: 'string',
      issuer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainByCertificateResponseBodyCertInfos extends $tea.Model {
  certInfo?: DescribeDcdnDomainByCertificateResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeDcdnDomainByCertificateResponseBodyCertInfosCertInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCcActivityLogResponseBodyActivityLog extends $tea.Model {
  action?: string;
  domainName?: string;
  ruleName?: string;
  timeStamp?: string;
  triggerObject?: string;
  ttl?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      domainName: 'DomainName',
      ruleName: 'RuleName',
      timeStamp: 'TimeStamp',
      triggerObject: 'TriggerObject',
      ttl: 'Ttl',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      domainName: 'string',
      ruleName: 'string',
      timeStamp: 'string',
      triggerObject: 'string',
      ttl: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCertificateInfoResponseBodyCertInfosCertInfo extends $tea.Model {
  certDomainName?: string;
  certExpireTime?: string;
  certId?: string;
  certLife?: string;
  certName?: string;
  certOrg?: string;
  certRegion?: string;
  certType?: string;
  domainName?: string;
  SSLProtocol?: string;
  SSLPub?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certDomainName: 'CertDomainName',
      certExpireTime: 'CertExpireTime',
      certId: 'CertId',
      certLife: 'CertLife',
      certName: 'CertName',
      certOrg: 'CertOrg',
      certRegion: 'CertRegion',
      certType: 'CertType',
      domainName: 'DomainName',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDomainName: 'string',
      certExpireTime: 'string',
      certId: 'string',
      certLife: 'string',
      certName: 'string',
      certOrg: 'string',
      certRegion: 'string',
      certType: 'string',
      domainName: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCertificateInfoResponseBodyCertInfos extends $tea.Model {
  certInfo?: DescribeDcdnDomainCertificateInfoResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeDcdnDomainCertificateInfoResponseBodyCertInfosCertInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCnameResponseBodyCnameDatasData extends $tea.Model {
  cname?: string;
  domain?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCnameResponseBodyCnameDatas extends $tea.Model {
  data?: DescribeDcdnDomainCnameResponseBodyCnameDatasData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDcdnDomainCnameResponseBodyCnameDatasData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg extends $tea.Model {
  argName?: string;
  argValue?: string;
  static names(): { [key: string]: string } {
    return {
      argName: 'ArgName',
      argValue: 'ArgValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argName: 'string',
      argValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs extends $tea.Model {
  functionArg?: DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg[];
  static names(): { [key: string]: string } {
    return {
      functionArg: 'FunctionArg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArg: { 'type': 'array', 'itemType': DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfig extends $tea.Model {
  configId?: string;
  functionArgs?: DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs;
  functionName?: string;
  parentId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      functionArgs: 'FunctionArgs',
      functionName: 'FunctionName',
      parentId: 'ParentId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      functionArgs: DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs,
      functionName: 'string',
      parentId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainConfigsResponseBodyDomainConfigs extends $tea.Model {
  domainConfig?: DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfig[];
  static names(): { [key: string]: string } {
    return {
      domainConfig: 'DomainConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfig: { 'type': 'array', 'itemType': DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainDetailResponseBodyDomainDetailSourcesSource extends $tea.Model {
  content?: string;
  enabled?: string;
  port?: number;
  priority?: string;
  type?: string;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      enabled: 'Enabled',
      port: 'Port',
      priority: 'Priority',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      enabled: 'string',
      port: 'number',
      priority: 'string',
      type: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainDetailResponseBodyDomainDetailSources extends $tea.Model {
  source?: DescribeDcdnDomainDetailResponseBodyDomainDetailSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeDcdnDomainDetailResponseBodyDomainDetailSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainDetailResponseBodyDomainDetail extends $tea.Model {
  cname?: string;
  description?: string;
  domainName?: string;
  domainStatus?: string;
  gmtCreated?: string;
  gmtModified?: string;
  resourceGroupId?: string;
  SSLProtocol?: string;
  SSLPub?: string;
  scope?: string;
  sources?: DescribeDcdnDomainDetailResponseBodyDomainDetailSources;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      resourceGroupId: 'ResourceGroupId',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      scope: 'Scope',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      resourceGroupId: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      scope: 'string',
      sources: DescribeDcdnDomainDetailResponseBodyDomainDetailSources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHitRateDataResponseBodyHitRatePerIntervalDataModule extends $tea.Model {
  byteHitRate?: number;
  reqHitRate?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      byteHitRate: 'ByteHitRate',
      reqHitRate: 'ReqHitRate',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteHitRate: 'number',
      reqHitRate: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHitRateDataResponseBodyHitRatePerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainHitRateDataResponseBodyHitRatePerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainHitRateDataResponseBodyHitRatePerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerIntervalHttpCodeDataModule extends $tea.Model {
  code?: number;
  count?: number;
  proportion?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      proportion: 'Proportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      count: 'number',
      proportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerInterval extends $tea.Model {
  httpCodeDataModule?: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerIntervalHttpCodeDataModule[];
  static names(): { [key: string]: string } {
    return {
      httpCodeDataModule: 'HttpCodeDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCodeDataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerIntervalHttpCodeDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModule extends $tea.Model {
  httpCodeDataPerInterval?: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerInterval;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      httpCodeDataPerInterval: 'HttpCodeDataPerInterval',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCodeDataPerInterval: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerInterval,
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataResponseBodyDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataByLayerResponseBodyHttpCodeDataIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  totalValue?: string;
  value?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      totalValue: 'TotalValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      totalValue: 'string',
      value: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainHttpCodeDataByLayerResponseBodyHttpCodeDataIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainHttpCodeDataByLayerResponseBodyHttpCodeDataIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaBpsDataResponseBodyBpsDataPerIntervalDataModule extends $tea.Model {
  ipaBps?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      ipaBps: 'IpaBps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipaBps: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaBpsDataResponseBodyBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainIpaBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainIpaBpsDataResponseBodyBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaConnDataResponseBodyConnectionDataPerIntervalDataModule extends $tea.Model {
  connections?: number;
  domain?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      domain: 'Domain',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: 'number',
      domain: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaConnDataResponseBodyConnectionDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainIpaConnDataResponseBodyConnectionDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainIpaConnDataResponseBodyConnectionDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $tea.Model {
  ipaTraffic?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      ipaTraffic: 'IpaTraffic',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipaTraffic: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaTrafficDataResponseBodyTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainIpaTrafficDataResponseBodyTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainIpaTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIspDataResponseBodyValueIspProportionData extends $tea.Model {
  avgObjectSize?: string;
  avgResponseRate?: string;
  avgResponseTime?: string;
  bps?: string;
  bytesProportion?: string;
  isp?: string;
  ispEname?: string;
  proportion?: string;
  qps?: string;
  totalBytes?: string;
  totalQuery?: string;
  static names(): { [key: string]: string } {
    return {
      avgObjectSize: 'AvgObjectSize',
      avgResponseRate: 'AvgResponseRate',
      avgResponseTime: 'AvgResponseTime',
      bps: 'Bps',
      bytesProportion: 'BytesProportion',
      isp: 'Isp',
      ispEname: 'IspEname',
      proportion: 'Proportion',
      qps: 'Qps',
      totalBytes: 'TotalBytes',
      totalQuery: 'TotalQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgObjectSize: 'string',
      avgResponseRate: 'string',
      avgResponseTime: 'string',
      bps: 'string',
      bytesProportion: 'string',
      isp: 'string',
      ispEname: 'string',
      proportion: 'string',
      qps: 'string',
      totalBytes: 'string',
      totalQuery: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIspDataResponseBodyValue extends $tea.Model {
  ispProportionData?: DescribeDcdnDomainIspDataResponseBodyValueIspProportionData[];
  static names(): { [key: string]: string } {
    return {
      ispProportionData: 'IspProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispProportionData: { 'type': 'array', 'itemType': DescribeDcdnDomainIspDataResponseBodyValueIspProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail extends $tea.Model {
  endTime?: string;
  logName?: string;
  logPath?: string;
  logSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      logName: 'LogName',
      logPath: 'LogPath',
      logSize: 'LogSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      logName: 'string',
      logPath: 'string',
      logSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos extends $tea.Model {
  logInfoDetail?: DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail[];
  static names(): { [key: string]: string } {
    return {
      logInfoDetail: 'LogInfoDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfoDetail: { 'type': 'array', 'itemType': DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetail extends $tea.Model {
  logCount?: number;
  logInfos?: DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos;
  pageInfos?: DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos;
  static names(): { [key: string]: string } {
    return {
      logCount: 'LogCount',
      logInfos: 'LogInfos',
      pageInfos: 'PageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logCount: 'number',
      logInfos: DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos,
      pageInfos: DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainLogResponseBodyDomainLogDetails extends $tea.Model {
  domainLogDetail?: DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetail[];
  static names(): { [key: string]: string } {
    return {
      domainLogDetail: 'DomainLogDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetail: { 'type': 'array', 'itemType': DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule extends $tea.Model {
  domain?: string;
  request?: number;
  timeStamp?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      request: 'Request',
      timeStamp: 'TimeStamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      request: 'number',
      timeStamp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerInterval extends $tea.Model {
  requestDataModule?: DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule[];
  static names(): { [key: string]: string } {
    return {
      requestDataModule: 'RequestDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestDataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule extends $tea.Model {
  area?: string;
  bps?: number;
  domain?: string;
  timeStamp?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      bps: 'Bps',
      domain: 'Domain',
      timeStamp: 'TimeStamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      bps: 'number',
      domain: 'string',
      timeStamp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerInterval extends $tea.Model {
  trafficDataModule?: DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule[];
  static names(): { [key: string]: string } {
    return {
      trafficDataModule: 'TrafficDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficDataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerIntervalDataModule extends $tea.Model {
  dynamicHttpOriginBps?: number;
  dynamicHttpsOriginBps?: number;
  originBps?: number;
  staticHttpOriginBps?: number;
  staticHttpsOriginBps?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicHttpOriginBps: 'DynamicHttpOriginBps',
      dynamicHttpsOriginBps: 'DynamicHttpsOriginBps',
      originBps: 'OriginBps',
      staticHttpOriginBps: 'StaticHttpOriginBps',
      staticHttpsOriginBps: 'StaticHttpsOriginBps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicHttpOriginBps: 'number',
      dynamicHttpsOriginBps: 'number',
      originBps: 'number',
      staticHttpOriginBps: 'number',
      staticHttpsOriginBps: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerIntervalDataModule extends $tea.Model {
  dynamicHttpOriginTraffic?: number;
  dynamicHttpsOriginTraffic?: number;
  originTraffic?: number;
  staticHttpOriginTraffic?: number;
  staticHttpsOriginTraffic?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicHttpOriginTraffic: 'DynamicHttpOriginTraffic',
      dynamicHttpsOriginTraffic: 'DynamicHttpsOriginTraffic',
      originTraffic: 'OriginTraffic',
      staticHttpOriginTraffic: 'StaticHttpOriginTraffic',
      staticHttpsOriginTraffic: 'StaticHttpsOriginTraffic',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicHttpOriginTraffic: 'number',
      dynamicHttpsOriginTraffic: 'number',
      originTraffic: 'number',
      staticHttpOriginTraffic: 'number',
      staticHttpsOriginTraffic: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainPvDataResponseBodyPvDataIntervalUsageData extends $tea.Model {
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainPvDataResponseBodyPvDataInterval extends $tea.Model {
  usageData?: DescribeDcdnDomainPvDataResponseBodyPvDataIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDcdnDomainPvDataResponseBodyPvDataIntervalUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainQpsDataResponseBodyQpsDataPerIntervalDataModule extends $tea.Model {
  acc?: number;
  dynamicHttpAcc?: number;
  dynamicHttpQps?: number;
  dynamicHttpsAcc?: number;
  dynamicHttpsQps?: number;
  qps?: number;
  staticHttpAcc?: number;
  staticHttpQps?: number;
  staticHttpsAcc?: number;
  staticHttpsQps?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      dynamicHttpAcc: 'DynamicHttpAcc',
      dynamicHttpQps: 'DynamicHttpQps',
      dynamicHttpsAcc: 'DynamicHttpsAcc',
      dynamicHttpsQps: 'DynamicHttpsQps',
      qps: 'Qps',
      staticHttpAcc: 'StaticHttpAcc',
      staticHttpQps: 'StaticHttpQps',
      staticHttpsAcc: 'StaticHttpsAcc',
      staticHttpsQps: 'StaticHttpsQps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'number',
      dynamicHttpAcc: 'number',
      dynamicHttpQps: 'number',
      dynamicHttpsAcc: 'number',
      dynamicHttpsQps: 'number',
      qps: 'number',
      staticHttpAcc: 'number',
      staticHttpQps: 'number',
      staticHttpsAcc: 'number',
      staticHttpsQps: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainQpsDataResponseBodyQpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainQpsDataResponseBodyQpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainQpsDataResponseBodyQpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainQpsDataByLayerResponseBodyQpsDataIntervalDataModule extends $tea.Model {
  accDomesticValue?: string;
  accOverseasValue?: string;
  accValue?: string;
  domesticValue?: string;
  overseasValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      accDomesticValue: 'AccDomesticValue',
      accOverseasValue: 'AccOverseasValue',
      accValue: 'AccValue',
      domesticValue: 'DomesticValue',
      overseasValue: 'OverseasValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accDomesticValue: 'string',
      accOverseasValue: 'string',
      accValue: 'string',
      domesticValue: 'string',
      overseasValue: 'string',
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainQpsDataByLayerResponseBodyQpsDataInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainQpsDataByLayerResponseBodyQpsDataIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainQpsDataByLayerResponseBodyQpsDataIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeBpsDataResponseBodyDataBpsModel extends $tea.Model {
  bps?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeBpsDataResponseBodyData extends $tea.Model {
  bpsModel?: DescribeDcdnDomainRealTimeBpsDataResponseBodyDataBpsModel[];
  static names(): { [key: string]: string } {
    return {
      bpsModel: 'BpsModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsModel: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeBpsDataResponseBodyDataBpsModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel extends $tea.Model {
  byteHitRate?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      byteHitRate: 'ByteHitRate',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteHitRate: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyData extends $tea.Model {
  byteHitRateDataModel?: DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel[];
  static names(): { [key: string]: string } {
    return {
      byteHitRateDataModel: 'ByteHitRateDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteHitRateDataModel: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData extends $tea.Model {
  code?: string;
  count?: string;
  proportion?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      proportion: 'Proportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      proportion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue extends $tea.Model {
  realTimeCodeProportionData?: DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      realTimeCodeProportionData: 'RealTimeCodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeCodeProportionData: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData extends $tea.Model {
  timeStamp?: string;
  value?: DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData extends $tea.Model {
  usageData?: DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeQpsDataResponseBodyDataQpsModel extends $tea.Model {
  qps?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      qps: 'Qps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qps: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeQpsDataResponseBodyData extends $tea.Model {
  qpsModel?: DescribeDcdnDomainRealTimeQpsDataResponseBodyDataQpsModel[];
  static names(): { [key: string]: string } {
    return {
      qpsModel: 'QpsModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qpsModel: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeQpsDataResponseBodyDataQpsModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel extends $tea.Model {
  reqHitRate?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      reqHitRate: 'ReqHitRate',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqHitRate: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeReqHitRateDataResponseBodyData extends $tea.Model {
  reqHitRateDataModel?: DescribeDcdnDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel[];
  static names(): { [key: string]: string } {
    return {
      reqHitRateDataModel: 'ReqHitRateDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqHitRateDataModel: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData extends $tea.Model {
  code?: string;
  count?: string;
  proportion?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      proportion: 'Proportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      proportion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValue extends $tea.Model {
  realTimeSrcCodeProportionData?: DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      realTimeSrcCodeProportionData: 'RealTimeSrcCodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeSrcCodeProportionData: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData extends $tea.Model {
  timeStamp?: string;
  value?: DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValue;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData extends $tea.Model {
  usageData?: DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRegionDataResponseBodyValueRegionProportionData extends $tea.Model {
  avgObjectSize?: string;
  avgResponseRate?: string;
  avgResponseTime?: string;
  bps?: string;
  bytesProportion?: string;
  proportion?: string;
  qps?: string;
  region?: string;
  regionEname?: string;
  totalBytes?: string;
  totalQuery?: string;
  static names(): { [key: string]: string } {
    return {
      avgObjectSize: 'AvgObjectSize',
      avgResponseRate: 'AvgResponseRate',
      avgResponseTime: 'AvgResponseTime',
      bps: 'Bps',
      bytesProportion: 'BytesProportion',
      proportion: 'Proportion',
      qps: 'Qps',
      region: 'Region',
      regionEname: 'RegionEname',
      totalBytes: 'TotalBytes',
      totalQuery: 'TotalQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgObjectSize: 'string',
      avgResponseRate: 'string',
      avgResponseTime: 'string',
      bps: 'string',
      bytesProportion: 'string',
      proportion: 'string',
      qps: 'string',
      region: 'string',
      regionEname: 'string',
      totalBytes: 'string',
      totalQuery: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRegionDataResponseBodyValue extends $tea.Model {
  regionProportionData?: DescribeDcdnDomainRegionDataResponseBodyValueRegionProportionData[];
  static names(): { [key: string]: string } {
    return {
      regionProportionData: 'RegionProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionProportionData: { 'type': 'array', 'itemType': DescribeDcdnDomainRegionDataResponseBodyValueRegionProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs extends $tea.Model {
  argName?: string;
  argValue?: string;
  static names(): { [key: string]: string } {
    return {
      argName: 'ArgName',
      argValue: 'ArgValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argName: 'string',
      argValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainStagingConfigResponseBodyDomainConfigs extends $tea.Model {
  configId?: string;
  functionArgs?: DescribeDcdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs[];
  functionName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      functionArgs: 'FunctionArgs',
      functionName: 'FunctionName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      functionArgs: { 'type': 'array', 'itemType': DescribeDcdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs },
      functionName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopReferVisitResponseBodyTopReferListReferList extends $tea.Model {
  flow?: string;
  flowProportion?: number;
  referDetail?: string;
  visitData?: string;
  visitProportion?: number;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      flowProportion: 'FlowProportion',
      referDetail: 'ReferDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      flowProportion: 'number',
      referDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopReferVisitResponseBodyTopReferList extends $tea.Model {
  referList?: DescribeDcdnDomainTopReferVisitResponseBodyTopReferListReferList[];
  static names(): { [key: string]: string } {
    return {
      referList: 'ReferList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopReferVisitResponseBodyTopReferListReferList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlListUrlList extends $tea.Model {
  flow?: string;
  flowProportion?: number;
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      flowProportion: 'FlowProportion',
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      flowProportion: 'number',
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlList extends $tea.Model {
  urlList?: DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl200ListUrlList extends $tea.Model {
  flow?: string;
  flowProportion?: number;
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      flowProportion: 'FlowProportion',
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      flowProportion: 'number',
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl200List extends $tea.Model {
  urlList?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl200ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopUrlVisitResponseBodyUrl200ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl300ListUrlList extends $tea.Model {
  flow?: string;
  flowProportion?: number;
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      flowProportion: 'FlowProportion',
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      flowProportion: 'number',
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl300List extends $tea.Model {
  urlList?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl300ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopUrlVisitResponseBodyUrl300ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl400ListUrlList extends $tea.Model {
  flow?: string;
  flowProportion?: number;
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      flowProportion: 'FlowProportion',
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      flowProportion: 'number',
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl400List extends $tea.Model {
  urlList?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl400ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopUrlVisitResponseBodyUrl400ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl500ListUrlList extends $tea.Model {
  flow?: string;
  flowProportion?: number;
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      flowProportion: 'FlowProportion',
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      flowProportion: 'number',
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl500List extends $tea.Model {
  urlList?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl500ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopUrlVisitResponseBodyUrl500ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $tea.Model {
  dynamicHttpTraffic?: number;
  dynamicHttpsTraffic?: number;
  staticHttpTraffic?: number;
  staticHttpsTraffic?: number;
  timeStamp?: string;
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      dynamicHttpTraffic: 'DynamicHttpTraffic',
      dynamicHttpsTraffic: 'DynamicHttpsTraffic',
      staticHttpTraffic: 'StaticHttpTraffic',
      staticHttpsTraffic: 'StaticHttpsTraffic',
      timeStamp: 'TimeStamp',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicHttpTraffic: 'number',
      dynamicHttpsTraffic: 'number',
      staticHttpTraffic: 'number',
      staticHttpsTraffic: 'number',
      timeStamp: 'string',
      traffic: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTrafficDataResponseBodyTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainUsageDataResponseBodyUsageDataPerIntervalDataModule extends $tea.Model {
  peakTime?: string;
  specialValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      peakTime: 'PeakTime',
      specialValue: 'SpecialValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peakTime: 'string',
      specialValue: 'string',
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainUsageDataResponseBodyUsageDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainUsageDataResponseBodyUsageDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainUsageDataResponseBodyUsageDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainUvDataResponseBodyUvDataIntervalUsageData extends $tea.Model {
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainUvDataResponseBodyUvDataInterval extends $tea.Model {
  usageData?: DescribeDcdnDomainUvDataResponseBodyUvDataIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDcdnDomainUvDataResponseBodyUvDataIntervalUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketBpsDataResponseBodyBpsDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  websocketBps?: number;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      websocketBps: 'WebsocketBps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      websocketBps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketBpsDataResponseBodyBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainWebsocketBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainWebsocketBpsDataResponseBodyBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModuleWebsocketHttpCodeHttpCodeDataModule extends $tea.Model {
  code?: number;
  count?: number;
  proportion?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      proportion: 'Proportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      count: 'number',
      proportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModuleWebsocketHttpCode extends $tea.Model {
  httpCodeDataModule?: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModuleWebsocketHttpCodeHttpCodeDataModule[];
  static names(): { [key: string]: string } {
    return {
      httpCodeDataModule: 'HttpCodeDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCodeDataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModuleWebsocketHttpCodeHttpCodeDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  websocketHttpCode?: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModuleWebsocketHttpCode;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      websocketHttpCode: 'WebsocketHttpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      websocketHttpCode: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModuleWebsocketHttpCode,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyHttpCodeDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  websocketTraffic?: number;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      websocketTraffic: 'WebsocketTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      websocketTraffic: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketTrafficDataResponseBodyTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainWebsocketTrafficDataResponseBodyTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainWebsocketTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnErUsageDataResponseBodyErAccDataErAccItem extends $tea.Model {
  erAcc?: number;
  routine?: string;
  spec?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      erAcc: 'ErAcc',
      routine: 'Routine',
      spec: 'Spec',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erAcc: 'number',
      routine: 'string',
      spec: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnErUsageDataResponseBodyErAccData extends $tea.Model {
  erAccItem?: DescribeDcdnErUsageDataResponseBodyErAccDataErAccItem[];
  static names(): { [key: string]: string } {
    return {
      erAccItem: 'ErAccItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erAccItem: { 'type': 'array', 'itemType': DescribeDcdnErUsageDataResponseBodyErAccDataErAccItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnFullDomainsBlockIPHistoryResponseBodyIPBlockInfo extends $tea.Model {
  blockIP?: string;
  deliverTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      blockIP: 'BlockIP',
      deliverTime: 'DeliverTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockIP: 'string',
      deliverTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnHttpsDomainListResponseBodyCertInfosCertInfo extends $tea.Model {
  certCommonName?: string;
  certExpireTime?: string;
  certName?: string;
  certStartTime?: string;
  certStatus?: string;
  certType?: string;
  certUpdateTime?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      certCommonName: 'CertCommonName',
      certExpireTime: 'CertExpireTime',
      certName: 'CertName',
      certStartTime: 'CertStartTime',
      certStatus: 'CertStatus',
      certType: 'CertType',
      certUpdateTime: 'CertUpdateTime',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCommonName: 'string',
      certExpireTime: 'string',
      certName: 'string',
      certStartTime: 'string',
      certStatus: 'string',
      certType: 'string',
      certUpdateTime: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnHttpsDomainListResponseBodyCertInfos extends $tea.Model {
  certInfo?: DescribeDcdnHttpsDomainListResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeDcdnHttpsDomainListResponseBodyCertInfosCertInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg extends $tea.Model {
  argName?: string;
  argValue?: string;
  static names(): { [key: string]: string } {
    return {
      argName: 'ArgName',
      argValue: 'ArgValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argName: 'string',
      argValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs extends $tea.Model {
  functionArg?: DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg[];
  static names(): { [key: string]: string } {
    return {
      functionArg: 'FunctionArg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArg: { 'type': 'array', 'itemType': DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfig extends $tea.Model {
  configId?: string;
  functionArgs?: DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs;
  functionName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      functionArgs: 'FunctionArgs',
      functionName: 'FunctionName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      functionArgs: DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs,
      functionName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigs extends $tea.Model {
  domainConfig?: DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfig[];
  static names(): { [key: string]: string } {
    return {
      domainConfig: 'DomainConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfig: { 'type': 'array', 'itemType': DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSourcesSource extends $tea.Model {
  content?: string;
  enabled?: string;
  port?: number;
  priority?: string;
  type?: string;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      enabled: 'Enabled',
      port: 'Port',
      priority: 'Priority',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      enabled: 'string',
      port: 'number',
      priority: 'string',
      type: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSources extends $tea.Model {
  source?: DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainDetailResponseBodyDomainDetail extends $tea.Model {
  certName?: string;
  cname?: string;
  description?: string;
  domainName?: string;
  domainStatus?: string;
  gmtCreated?: string;
  gmtModified?: string;
  resourceGroupId?: string;
  SSLProtocol?: string;
  SSLPub?: string;
  scope?: string;
  sources?: DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSources;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      resourceGroupId: 'ResourceGroupId',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      scope: 'Scope',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      resourceGroupId: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      scope: 'string',
      sources: DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaServiceResponseBodyOperationLocksLockReason extends $tea.Model {
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaServiceResponseBodyOperationLocks extends $tea.Model {
  lockReason?: DescribeDcdnIpaServiceResponseBodyOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeDcdnIpaServiceResponseBodyOperationLocksLockReason },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaUserDomainsRequestTag extends $tea.Model {
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

export class DescribeDcdnIpaUserDomainsResponseBodyDomainsPageDataSourcesSource extends $tea.Model {
  content?: string;
  port?: number;
  priority?: string;
  type?: string;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      port: 'Port',
      priority: 'Priority',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      port: 'number',
      priority: 'string',
      type: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaUserDomainsResponseBodyDomainsPageDataSources extends $tea.Model {
  source?: DescribeDcdnIpaUserDomainsResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeDcdnIpaUserDomainsResponseBodyDomainsPageDataSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaUserDomainsResponseBodyDomainsPageData extends $tea.Model {
  cname?: string;
  description?: string;
  domainName?: string;
  domainStatus?: string;
  gmtCreated?: string;
  gmtModified?: string;
  resourceGroupId?: string;
  SSLProtocol?: string;
  sandbox?: string;
  sources?: DescribeDcdnIpaUserDomainsResponseBodyDomainsPageDataSources;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      resourceGroupId: 'ResourceGroupId',
      SSLProtocol: 'SSLProtocol',
      sandbox: 'Sandbox',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      resourceGroupId: 'string',
      SSLProtocol: 'string',
      sandbox: 'string',
      sources: DescribeDcdnIpaUserDomainsResponseBodyDomainsPageDataSources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaUserDomainsResponseBodyDomains extends $tea.Model {
  pageData?: DescribeDcdnIpaUserDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeDcdnIpaUserDomainsResponseBodyDomainsPageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRealTimeDeliveryFieldResponseBodyContentFields extends $tea.Model {
  description?: string;
  fieldName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fieldName: 'FieldName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fieldName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRealTimeDeliveryFieldResponseBodyContent extends $tea.Model {
  fields?: DescribeDcdnRealTimeDeliveryFieldResponseBodyContentFields[];
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': DescribeDcdnRealTimeDeliveryFieldResponseBodyContentFields },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshTaskByIdResponseBodyTasks extends $tea.Model {
  creationTime?: string;
  description?: string;
  objectPath?: string;
  objectType?: string;
  process?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      objectPath: 'ObjectPath',
      objectType: 'ObjectType',
      process: 'Process',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      objectPath: 'string',
      objectType: 'string',
      process: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshTasksResponseBodyTasksTask extends $tea.Model {
  creationTime?: string;
  description?: string;
  objectPath?: string;
  objectType?: string;
  process?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      objectPath: 'ObjectPath',
      objectType: 'ObjectType',
      process: 'Process',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      objectPath: 'string',
      objectType: 'string',
      process: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshTasksResponseBodyTasks extends $tea.Model {
  task?: DescribeDcdnRefreshTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeDcdnRefreshTasksResponseBodyTasksTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRegionAndIspResponseBodyIspsIsp extends $tea.Model {
  nameEn?: string;
  nameZh?: string;
  static names(): { [key: string]: string } {
    return {
      nameEn: 'NameEn',
      nameZh: 'NameZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameEn: 'string',
      nameZh: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRegionAndIspResponseBodyIsps extends $tea.Model {
  isp?: DescribeDcdnRegionAndIspResponseBodyIspsIsp[];
  static names(): { [key: string]: string } {
    return {
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isp: { 'type': 'array', 'itemType': DescribeDcdnRegionAndIspResponseBodyIspsIsp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRegionAndIspResponseBodyRegionsRegion extends $tea.Model {
  nameEn?: string;
  nameZh?: string;
  static names(): { [key: string]: string } {
    return {
      nameEn: 'NameEn',
      nameZh: 'NameZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameEn: 'string',
      nameZh: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRegionAndIspResponseBodyRegions extends $tea.Model {
  region?: DescribeDcdnRegionAndIspResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeDcdnRegionAndIspResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSLSRealtimeLogDeliveryResponseBodyContent extends $tea.Model {
  businessType?: string;
  dataCenter?: string;
  domainName?: string;
  fieldName?: string;
  projectName?: string;
  SLSLogStore?: string;
  SLSProject?: string;
  SLSRegion?: string;
  samplingRate?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      domainName: 'DomainName',
      fieldName: 'FieldName',
      projectName: 'ProjectName',
      SLSLogStore: 'SLSLogStore',
      SLSProject: 'SLSProject',
      SLSRegion: 'SLSRegion',
      samplingRate: 'SamplingRate',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      domainName: 'string',
      fieldName: 'string',
      projectName: 'string',
      SLSLogStore: 'string',
      SLSProject: 'string',
      SLSRegion: 'string',
      samplingRate: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSMCertificateListResponseBodyCertificateListModelCertList extends $tea.Model {
  certIdentifier?: string;
  certName?: string;
  common?: string;
  issuer?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      common: 'Common',
      issuer: 'Issuer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      certName: 'string',
      common: 'string',
      issuer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSMCertificateListResponseBodyCertificateListModel extends $tea.Model {
  certList?: DescribeDcdnSMCertificateListResponseBodyCertificateListModelCertList[];
  count?: number;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: { 'type': 'array', 'itemType': DescribeDcdnSMCertificateListResponseBodyCertificateListModelCertList },
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSecFuncInfoResponseBodyContent extends $tea.Model {
  label?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSecSpecInfoResponseBodySpecInfosRuleConfigs extends $tea.Model {
  code?: string;
  expr?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      expr: 'Expr',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      expr: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSecSpecInfoResponseBodySpecInfos extends $tea.Model {
  ruleCode?: string;
  ruleConfigs?: DescribeDcdnSecSpecInfoResponseBodySpecInfosRuleConfigs[];
  static names(): { [key: string]: string } {
    return {
      ruleCode: 'RuleCode',
      ruleConfigs: 'RuleConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleCode: 'string',
      ruleConfigs: { 'type': 'array', 'itemType': DescribeDcdnSecSpecInfoResponseBodySpecInfosRuleConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnServiceResponseBodyOperationLocksLockReason extends $tea.Model {
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnServiceResponseBodyOperationLocks extends $tea.Model {
  lockReason?: DescribeDcdnServiceResponseBodyOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeDcdnServiceResponseBodyOperationLocksLockReason },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnStagingIpResponseBodyIPV4s extends $tea.Model {
  IPV4?: string[];
  static names(): { [key: string]: string } {
    return {
      IPV4: 'IPV4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPV4: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTagResourcesRequestTag extends $tea.Model {
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

export class DescribeDcdnTagResourcesResponseBodyTagResourcesTag extends $tea.Model {
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

export class DescribeDcdnTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceId?: string;
  tag?: DescribeDcdnTagResourcesResponseBodyTagResourcesTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDcdnTagResourcesResponseBodyTagResourcesTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTopDomainsByFlowResponseBodyTopDomainsTopDomain extends $tea.Model {
  domainName?: string;
  maxBps?: number;
  maxBpsTime?: string;
  rank?: number;
  totalAccess?: number;
  totalTraffic?: string;
  trafficPercent?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      maxBps: 'MaxBps',
      maxBpsTime: 'MaxBpsTime',
      rank: 'Rank',
      totalAccess: 'TotalAccess',
      totalTraffic: 'TotalTraffic',
      trafficPercent: 'TrafficPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      maxBps: 'number',
      maxBpsTime: 'string',
      rank: 'number',
      totalAccess: 'number',
      totalTraffic: 'string',
      trafficPercent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTopDomainsByFlowResponseBodyTopDomains extends $tea.Model {
  topDomain?: DescribeDcdnTopDomainsByFlowResponseBodyTopDomainsTopDomain[];
  static names(): { [key: string]: string } {
    return {
      topDomain: 'TopDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomain: { 'type': 'array', 'itemType': DescribeDcdnTopDomainsByFlowResponseBodyTopDomainsTopDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem extends $tea.Model {
  bandwidth?: number;
  cdnRegion?: string;
  chargeType?: string;
  count?: number;
  flow?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cdnRegion: 'CdnRegion',
      chargeType: 'ChargeType',
      count: 'Count',
      flow: 'Flow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      cdnRegion: 'string',
      chargeType: 'string',
      count: 'number',
      flow: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData extends $tea.Model {
  billingDataItem?: DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem[];
  static names(): { [key: string]: string } {
    return {
      billingDataItem: 'BillingDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingDataItem: { 'type': 'array', 'itemType': DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem extends $tea.Model {
  billTime?: string;
  billType?: string;
  billingData?: DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData;
  dimension?: string;
  static names(): { [key: string]: string } {
    return {
      billTime: 'BillTime',
      billType: 'BillType',
      billingData: 'BillingData',
      dimension: 'Dimension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billTime: 'string',
      billType: 'string',
      billingData: DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData,
      dimension: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillHistoryResponseBodyBillHistoryData extends $tea.Model {
  billHistoryDataItem?: DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem[];
  static names(): { [key: string]: string } {
    return {
      billHistoryDataItem: 'BillHistoryDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billHistoryDataItem: { 'type': 'array', 'itemType': DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem extends $tea.Model {
  billType?: string;
  billingCycle?: string;
  dimension?: string;
  endTime?: string;
  product?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      billType: 'BillType',
      billingCycle: 'BillingCycle',
      dimension: 'Dimension',
      endTime: 'EndTime',
      product: 'Product',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billType: 'string',
      billingCycle: 'string',
      dimension: 'string',
      endTime: 'string',
      product: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillTypeResponseBodyBillTypeData extends $tea.Model {
  billTypeDataItem?: DescribeDcdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem[];
  static names(): { [key: string]: string } {
    return {
      billTypeDataItem: 'BillTypeDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billTypeDataItem: { 'type': 'array', 'itemType': DescribeDcdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserConfigsResponseBodyConfigs extends $tea.Model {
  argName?: string;
  argValue?: string;
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      argName: 'ArgName',
      argValue: 'ArgValue',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argName: 'string',
      argValue: 'string',
      functionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsRequestTag extends $tea.Model {
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

export class DescribeDcdnUserDomainsResponseBodyDomainsPageDataSourcesSource extends $tea.Model {
  content?: string;
  port?: number;
  priority?: string;
  type?: string;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      port: 'Port',
      priority: 'Priority',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      port: 'number',
      priority: 'string',
      type: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsResponseBodyDomainsPageDataSources extends $tea.Model {
  source?: DescribeDcdnUserDomainsResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeDcdnUserDomainsResponseBodyDomainsPageDataSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsResponseBodyDomainsPageData extends $tea.Model {
  cname?: string;
  description?: string;
  domainId?: number;
  domainName?: string;
  domainStatus?: string;
  gmtCreated?: string;
  gmtModified?: string;
  resourceGroupId?: string;
  SSLProtocol?: string;
  sandbox?: string;
  sources?: DescribeDcdnUserDomainsResponseBodyDomainsPageDataSources;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      description: 'Description',
      domainId: 'DomainId',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      resourceGroupId: 'ResourceGroupId',
      SSLProtocol: 'SSLProtocol',
      sandbox: 'Sandbox',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      description: 'string',
      domainId: 'number',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      resourceGroupId: 'string',
      SSLProtocol: 'string',
      sandbox: 'string',
      sources: DescribeDcdnUserDomainsResponseBodyDomainsPageDataSources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsResponseBodyDomains extends $tea.Model {
  pageData?: DescribeDcdnUserDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeDcdnUserDomainsResponseBodyDomainsPageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource extends $tea.Model {
  content?: string;
  port?: number;
  priority?: string;
  type?: string;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      port: 'Port',
      priority: 'Priority',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      port: 'number',
      priority: 'string',
      type: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageDataSources extends $tea.Model {
  source?: DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageData extends $tea.Model {
  cname?: string;
  description?: string;
  domainName?: string;
  domainStatus?: string;
  gmtCreated?: string;
  gmtModified?: string;
  resourceGroupId?: string;
  sandbox?: string;
  sources?: DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageDataSources;
  sslProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      resourceGroupId: 'ResourceGroupId',
      sandbox: 'Sandbox',
      sources: 'Sources',
      sslProtocol: 'SslProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      resourceGroupId: 'string',
      sandbox: 'string',
      sources: DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageDataSources,
      sslProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsByFuncResponseBodyDomains extends $tea.Model {
  pageData?: DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserRealTimeDeliveryFieldResponseBodyContentFields extends $tea.Model {
  description?: string;
  fieldName?: string;
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fieldName: 'FieldName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fieldName: 'string',
      selected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserRealTimeDeliveryFieldResponseBodyContent extends $tea.Model {
  fields?: DescribeDcdnUserRealTimeDeliveryFieldResponseBodyContentFields[];
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': DescribeDcdnUserRealTimeDeliveryFieldResponseBodyContentFields },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo extends $tea.Model {
  commodityCode?: string;
  currCapacity?: string;
  displayName?: string;
  endTime?: string;
  initCapacity?: string;
  instanceId?: string;
  startTime?: string;
  status?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      currCapacity: 'CurrCapacity',
      displayName: 'DisplayName',
      endTime: 'EndTime',
      initCapacity: 'InitCapacity',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      status: 'Status',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      currCapacity: 'string',
      displayName: 'string',
      endTime: 'string',
      initCapacity: 'string',
      instanceId: 'string',
      startTime: 'string',
      status: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfos extends $tea.Model {
  resourcePackageInfo?: DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo[];
  static names(): { [key: string]: string } {
    return {
      resourcePackageInfo: 'ResourcePackageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePackageInfo: { 'type': 'array', 'itemType': DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserSecDropByMinuteResponseBodyRows extends $tea.Model {
  domain?: string;
  drops?: number;
  object?: string;
  ruleName?: string;
  secFunc?: string;
  tmStr?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      drops: 'Drops',
      object: 'Object',
      ruleName: 'RuleName',
      secFunc: 'SecFunc',
      tmStr: 'TmStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      drops: 'number',
      object: 'string',
      ruleName: 'string',
      secFunc: 'string',
      tmStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserTagsResponseBodyTags extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainResponseBodyOutPutDomains extends $tea.Model {
  aclStatus?: number;
  ccStatus?: number;
  domain?: string;
  status?: number;
  wafStatus?: number;
  static names(): { [key: string]: string } {
    return {
      aclStatus: 'AclStatus',
      ccStatus: 'CcStatus',
      domain: 'Domain',
      status: 'Status',
      wafStatus: 'WafStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclStatus: 'number',
      ccStatus: 'number',
      domain: 'string',
      status: 'number',
      wafStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainDetailResponseBodyDomainDefenseScenes extends $tea.Model {
  defenseScene?: string;
  policyId?: number;
  policyIds?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      policyId: 'PolicyId',
      policyIds: 'PolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      policyId: 'number',
      policyIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainDetailResponseBodyDomain extends $tea.Model {
  defenseScenes?: DescribeDcdnWafDomainDetailResponseBodyDomainDefenseScenes[];
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScenes: 'DefenseScenes',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScenes: { 'type': 'array', 'itemType': DescribeDcdnWafDomainDetailResponseBodyDomainDefenseScenes },
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainsResponseBodyDomains extends $tea.Model {
  clientIpTag?: string;
  domainName?: string;
  policyCount?: number;
  static names(): { [key: string]: string } {
    return {
      clientIpTag: 'ClientIpTag',
      domainName: 'DomainName',
      policyCount: 'PolicyCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIpTag: 'string',
      domainName: 'string',
      policyCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafFilterInfoResponseBodyContentFieldsLogicalSymbolRegexp extends $tea.Model {
  errMsg?: string;
  pattern?: string;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      pattern: 'Pattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      pattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafFilterInfoResponseBodyContentFieldsLogicalSymbol extends $tea.Model {
  description?: string;
  maxLength?: number;
  regexp?: DescribeDcdnWafFilterInfoResponseBodyContentFieldsLogicalSymbolRegexp;
  symbol?: string;
  tip?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      maxLength: 'MaxLength',
      regexp: 'Regexp',
      symbol: 'Symbol',
      tip: 'Tip',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      maxLength: 'number',
      regexp: DescribeDcdnWafFilterInfoResponseBodyContentFieldsLogicalSymbolRegexp,
      symbol: 'string',
      tip: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafFilterInfoResponseBodyContentFields extends $tea.Model {
  extendField?: string;
  logicalSymbol?: DescribeDcdnWafFilterInfoResponseBodyContentFieldsLogicalSymbol[];
  matchField?: string;
  static names(): { [key: string]: string } {
    return {
      extendField: 'ExtendField',
      logicalSymbol: 'LogicalSymbol',
      matchField: 'MatchField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendField: 'string',
      logicalSymbol: { 'type': 'array', 'itemType': DescribeDcdnWafFilterInfoResponseBodyContentFieldsLogicalSymbol },
      matchField: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafFilterInfoResponseBodyContent extends $tea.Model {
  defenseScene?: string;
  fields?: DescribeDcdnWafFilterInfoResponseBodyContentFields[];
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      fields: { 'type': 'array', 'itemType': DescribeDcdnWafFilterInfoResponseBodyContentFields },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafGeoInfoResponseBodyContentContinentsRegions extends $tea.Model {
  name?: string;
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

export class DescribeDcdnWafGeoInfoResponseBodyContentContinents extends $tea.Model {
  name?: string;
  regions?: DescribeDcdnWafGeoInfoResponseBodyContentContinentsRegions[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regions: { 'type': 'array', 'itemType': DescribeDcdnWafGeoInfoResponseBodyContentContinentsRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafGeoInfoResponseBodyContent extends $tea.Model {
  continents?: DescribeDcdnWafGeoInfoResponseBodyContentContinents[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      continents: 'Continents',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continents: { 'type': 'array', 'itemType': DescribeDcdnWafGeoInfoResponseBodyContentContinents },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafLogsResponseBodyDomainLogDetailsLogInfos extends $tea.Model {
  endTime?: string;
  logName?: string;
  logPath?: string;
  logSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      logName: 'LogName',
      logPath: 'LogPath',
      logSize: 'LogSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      logName: 'string',
      logPath: 'string',
      logSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafLogsResponseBodyDomainLogDetailsPageInfos extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafLogsResponseBodyDomainLogDetails extends $tea.Model {
  domainName?: string;
  logCount?: number;
  logInfos?: DescribeDcdnWafLogsResponseBodyDomainLogDetailsLogInfos[];
  pageInfos?: DescribeDcdnWafLogsResponseBodyDomainLogDetailsPageInfos;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      logCount: 'LogCount',
      logInfos: 'LogInfos',
      pageInfos: 'PageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      logCount: 'number',
      logInfos: { 'type': 'array', 'itemType': DescribeDcdnWafLogsResponseBodyDomainLogDetailsLogInfos },
      pageInfos: DescribeDcdnWafLogsResponseBodyDomainLogDetailsPageInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPoliciesResponseBodyPolicies extends $tea.Model {
  defenseScene?: string;
  domainCount?: number;
  gmtModified?: string;
  policyId?: number;
  policyName?: string;
  policyStatus?: string;
  policyType?: string;
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      domainCount: 'DomainCount',
      gmtModified: 'GmtModified',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
      policyType: 'PolicyType',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      domainCount: 'number',
      gmtModified: 'string',
      policyId: 'number',
      policyName: 'string',
      policyStatus: 'string',
      policyType: 'string',
      ruleCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPolicyResponseBodyPolicy extends $tea.Model {
  defenseScene?: string;
  domainCount?: number;
  gmtModified?: string;
  policyId?: number;
  policyName?: string;
  policyStatus?: string;
  policyType?: string;
  ruleConfigs?: string;
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      domainCount: 'DomainCount',
      gmtModified: 'GmtModified',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
      policyType: 'PolicyType',
      ruleConfigs: 'RuleConfigs',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      domainCount: 'number',
      gmtModified: 'string',
      policyId: 'number',
      policyName: 'string',
      policyStatus: 'string',
      policyType: 'string',
      ruleConfigs: 'string',
      ruleCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPolicyDomainsResponseBodyDomains extends $tea.Model {
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPolicyValidDomainsResponseBodyDomainsPolicies extends $tea.Model {
  id?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafPolicyValidDomainsResponseBodyDomains extends $tea.Model {
  domainName?: string;
  policies?: DescribeDcdnWafPolicyValidDomainsResponseBodyDomainsPolicies[];
  policyId?: number;
  policyName?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      policies: 'Policies',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      policies: { 'type': 'array', 'itemType': DescribeDcdnWafPolicyValidDomainsResponseBodyDomainsPolicies },
      policyId: 'number',
      policyName: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafRuleResponseBodyRule extends $tea.Model {
  defenseScene?: string;
  gmtModified?: string;
  policyId?: number;
  ruleConfig?: string;
  ruleId?: number;
  ruleName?: string;
  ruleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      gmtModified: 'GmtModified',
      policyId: 'PolicyId',
      ruleConfig: 'RuleConfig',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleStatus: 'RuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      gmtModified: 'string',
      policyId: 'number',
      ruleConfig: 'string',
      ruleId: 'number',
      ruleName: 'string',
      ruleStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafRulesResponseBodyRules extends $tea.Model {
  defenseScene?: string;
  gmtModified?: string;
  policyId?: number;
  ruleConfig?: string;
  ruleId?: number;
  ruleName?: string;
  ruleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      gmtModified: 'GmtModified',
      policyId: 'PolicyId',
      ruleConfig: 'RuleConfig',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleStatus: 'RuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      gmtModified: 'string',
      policyId: 'number',
      ruleConfig: 'string',
      ruleId: 'number',
      ruleName: 'string',
      ruleStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafScenesResponseBodyDefenseScenes extends $tea.Model {
  defenseScene?: string;
  policyCount?: number;
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      policyCount: 'PolicyCount',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      policyCount: 'number',
      ruleCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafSpecInfoResponseBodySpecInfosConfigs extends $tea.Model {
  config?: string;
  expr?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      expr: 'Expr',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      expr: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafSpecInfoResponseBodySpecInfos extends $tea.Model {
  configs?: DescribeDcdnWafSpecInfoResponseBodySpecInfosConfigs[];
  defenseScene?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      defenseScene: 'DefenseScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': DescribeDcdnWafSpecInfoResponseBodySpecInfosConfigs },
      defenseScene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafUsageDataResponseBodyWafUsageDataWafUsageDataItem extends $tea.Model {
  accessCnt?: number;
  blockCnt?: number;
  domain?: string;
  observeCnt?: number;
  secCu?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      accessCnt: 'AccessCnt',
      blockCnt: 'BlockCnt',
      domain: 'Domain',
      observeCnt: 'ObserveCnt',
      secCu: 'SecCu',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCnt: 'number',
      blockCnt: 'number',
      domain: 'string',
      observeCnt: 'number',
      secCu: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafUsageDataResponseBodyWafUsageData extends $tea.Model {
  wafUsageDataItem?: DescribeDcdnWafUsageDataResponseBodyWafUsageDataWafUsageDataItem[];
  static names(): { [key: string]: string } {
    return {
      wafUsageDataItem: 'WafUsageDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wafUsageDataItem: { 'type': 'array', 'itemType': DescribeDcdnWafUsageDataResponseBodyWafUsageDataWafUsageDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnsecServiceResponseBodyOperationLocksLockReason extends $tea.Model {
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnsecServiceResponseBodyOperationLocks extends $tea.Model {
  lockReason?: DescribeDcdnsecServiceResponseBodyOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeDcdnsecServiceResponseBodyOperationLocksLockReason },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDDomainConfigResponseBodyDomainConfigsFunctionArgs extends $tea.Model {
  argName?: string;
  argValue?: string;
  static names(): { [key: string]: string } {
    return {
      argName: 'ArgName',
      argValue: 'ArgValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argName: 'string',
      argValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDDomainConfigResponseBodyDomainConfigs extends $tea.Model {
  configId?: number;
  functionArgs?: DescribeRDDomainConfigResponseBodyDomainConfigsFunctionArgs[];
  functionName?: string;
  parentId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      functionArgs: 'FunctionArgs',
      functionName: 'FunctionName',
      parentId: 'ParentId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      functionArgs: { 'type': 'array', 'itemType': DescribeRDDomainConfigResponseBodyDomainConfigsFunctionArgs },
      functionName: 'string',
      parentId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDDomainsResponseBodyDomainsPageDataSourcesSource extends $tea.Model {
  content?: string;
  port?: number;
  priority?: string;
  type?: string;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      port: 'Port',
      priority: 'Priority',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      port: 'number',
      priority: 'string',
      type: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDDomainsResponseBodyDomainsPageDataSources extends $tea.Model {
  source?: DescribeRDDomainsResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeRDDomainsResponseBodyDomainsPageDataSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDDomainsResponseBodyDomainsPageData extends $tea.Model {
  bizName?: string;
  cname?: string;
  description?: string;
  domainName?: string;
  domainStatus?: string;
  gmtCreated?: string;
  gmtModified?: string;
  resourceGroupId?: string;
  sandbox?: string;
  serviceCode?: string;
  sources?: DescribeRDDomainsResponseBodyDomainsPageDataSources;
  sslProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      resourceGroupId: 'ResourceGroupId',
      sandbox: 'Sandbox',
      serviceCode: 'ServiceCode',
      sources: 'Sources',
      sslProtocol: 'SslProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      resourceGroupId: 'string',
      sandbox: 'string',
      serviceCode: 'string',
      sources: DescribeRDDomainsResponseBodyDomainsPageDataSources,
      sslProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDDomainsResponseBodyDomains extends $tea.Model {
  pageData?: DescribeRDDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeRDDomainsResponseBodyDomainsPageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDcdnRealTimeDeliveryProjectResponseBodyContentProjects extends $tea.Model {
  businessType?: string;
  dataCenter?: string;
  domainName?: string;
  fieldName?: string;
  projectName?: string;
  SLSLogStore?: string;
  SLSProject?: string;
  SLSRegion?: string;
  samplingRate?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      domainName: 'DomainName',
      fieldName: 'FieldName',
      projectName: 'ProjectName',
      SLSLogStore: 'SLSLogStore',
      SLSProject: 'SLSProject',
      SLSRegion: 'SLSRegion',
      samplingRate: 'SamplingRate',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      domainName: 'string',
      fieldName: 'string',
      projectName: 'string',
      SLSLogStore: 'string',
      SLSProject: 'string',
      SLSRegion: 'string',
      samplingRate: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDcdnRealTimeDeliveryProjectResponseBodyContent extends $tea.Model {
  projects?: ListDcdnRealTimeDeliveryProjectResponseBodyContentProjects[];
  static names(): { [key: string]: string } {
    return {
      projects: 'Projects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projects: { 'type': 'array', 'itemType': ListDcdnRealTimeDeliveryProjectResponseBodyContentProjects },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagDcdnResourcesRequestTag extends $tea.Model {
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

export class UpdateDcdnSLSRealtimeLogDeliveryResponseBodyContentDomains extends $tea.Model {
  desc?: string;
  domainName?: string;
  region?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      domainName: 'DomainName',
      region: 'Region',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      domainName: 'string',
      region: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDcdnSLSRealtimeLogDeliveryResponseBodyContent extends $tea.Model {
  domains?: UpdateDcdnSLSRealtimeLogDeliveryResponseBodyContentDomains[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': UpdateDcdnSLSRealtimeLogDeliveryResponseBodyContentDomains },
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
      'ap-northeast-1': "dcdn.aliyuncs.com",
      'ap-northeast-2-pop': "dcdn.aliyuncs.com",
      'ap-south-1': "dcdn.aliyuncs.com",
      'ap-southeast-1': "dcdn.aliyuncs.com",
      'ap-southeast-2': "dcdn.aliyuncs.com",
      'ap-southeast-3': "dcdn.aliyuncs.com",
      'ap-southeast-5': "dcdn.aliyuncs.com",
      'cn-beijing': "dcdn.aliyuncs.com",
      'cn-beijing-finance-1': "dcdn.aliyuncs.com",
      'cn-beijing-finance-pop': "dcdn.aliyuncs.com",
      'cn-beijing-gov-1': "dcdn.aliyuncs.com",
      'cn-beijing-nu16-b01': "dcdn.aliyuncs.com",
      'cn-chengdu': "dcdn.aliyuncs.com",
      'cn-edge-1': "dcdn.aliyuncs.com",
      'cn-fujian': "dcdn.aliyuncs.com",
      'cn-haidian-cm12-c01': "dcdn.aliyuncs.com",
      'cn-hangzhou': "dcdn.aliyuncs.com",
      'cn-hangzhou-bj-b01': "dcdn.aliyuncs.com",
      'cn-hangzhou-finance': "dcdn.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "dcdn.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "dcdn.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "dcdn.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "dcdn.aliyuncs.com",
      'cn-hangzhou-test-306': "dcdn.aliyuncs.com",
      'cn-hongkong': "dcdn.aliyuncs.com",
      'cn-hongkong-finance-pop': "dcdn.aliyuncs.com",
      'cn-huhehaote': "dcdn.aliyuncs.com",
      'cn-north-2-gov-1': "dcdn.aliyuncs.com",
      'cn-qingdao': "dcdn.aliyuncs.com",
      'cn-qingdao-nebula': "dcdn.aliyuncs.com",
      'cn-shanghai': "dcdn.aliyuncs.com",
      'cn-shanghai-et15-b01': "dcdn.aliyuncs.com",
      'cn-shanghai-et2-b01': "dcdn.aliyuncs.com",
      'cn-shanghai-finance-1': "dcdn.aliyuncs.com",
      'cn-shanghai-inner': "dcdn.aliyuncs.com",
      'cn-shanghai-internal-test-1': "dcdn.aliyuncs.com",
      'cn-shenzhen': "dcdn.aliyuncs.com",
      'cn-shenzhen-finance-1': "dcdn.aliyuncs.com",
      'cn-shenzhen-inner': "dcdn.aliyuncs.com",
      'cn-shenzhen-st4-d01': "dcdn.aliyuncs.com",
      'cn-shenzhen-su18-b01': "dcdn.aliyuncs.com",
      'cn-wuhan': "dcdn.aliyuncs.com",
      'cn-yushanfang': "dcdn.aliyuncs.com",
      'cn-zhangbei-na61-b01': "dcdn.aliyuncs.com",
      'cn-zhangjiakou': "dcdn.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "dcdn.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "dcdn.aliyuncs.com",
      'eu-central-1': "dcdn.aliyuncs.com",
      'eu-west-1': "dcdn.aliyuncs.com",
      'eu-west-1-oxs': "dcdn.aliyuncs.com",
      'me-east-1': "dcdn.aliyuncs.com",
      'rus-west-1-pop': "dcdn.aliyuncs.com",
      'us-east-1': "dcdn.aliyuncs.com",
      'us-west-1': "dcdn.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dcdn", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
    * > 
    * *   Dynamic Content Delivery Network (DCDN) is activated.
    * *   Internet content provider (ICP) filing is complete for the accelerated domain name.
    * *   If the content of the origin server is not stored on Alibaba Cloud, the content must be reviewed. After you submit the request, the review is complete by the end of the following business day.
    * *   You can call this operation up to 30 times per second per account.
    *
    * @param request AddDcdnDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddDcdnDomainResponse
   */
  async addDcdnDomainWithOptions(request: AddDcdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddDcdnDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkUrl)) {
      query["CheckUrl"] = request.checkUrl;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDcdnDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDcdnDomainResponse>(await this.callApi(params, req, runtime), new AddDcdnDomainResponse({}));
  }

  /**
    * > 
    * *   Dynamic Content Delivery Network (DCDN) is activated.
    * *   Internet content provider (ICP) filing is complete for the accelerated domain name.
    * *   If the content of the origin server is not stored on Alibaba Cloud, the content must be reviewed. After you submit the request, the review is complete by the end of the following business day.
    * *   You can call this operation up to 30 times per second per account.
    *
    * @param request AddDcdnDomainRequest
    * @return AddDcdnDomainResponse
   */
  async addDcdnDomain(request: AddDcdnDomainRequest): Promise<AddDcdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDcdnDomainWithOptions(request, runtime);
  }

  /**
    * > 
    * *   Make sure that the IPA service is activated before you add a domain name to accelerate.
    * *   Make sure that the Internet content provider (ICP) filling is complete for the domain name to accelerate.
    * *   If the content on the origin server is not stored on Alibaba Cloud, the content must be reviewed. The review is complete by the end of the next business day after you submit the request.
    * *   You can call this operation up to 10 times per second per user.
    *
    * @param request AddDcdnIpaDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddDcdnIpaDomainResponse
   */
  async addDcdnIpaDomainWithOptions(request: AddDcdnIpaDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddDcdnIpaDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkUrl)) {
      query["CheckUrl"] = request.checkUrl;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!Util.isUnset(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDcdnIpaDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDcdnIpaDomainResponse>(await this.callApi(params, req, runtime), new AddDcdnIpaDomainResponse({}));
  }

  /**
    * > 
    * *   Make sure that the IPA service is activated before you add a domain name to accelerate.
    * *   Make sure that the Internet content provider (ICP) filling is complete for the domain name to accelerate.
    * *   If the content on the origin server is not stored on Alibaba Cloud, the content must be reviewed. The review is complete by the end of the next business day after you submit the request.
    * *   You can call this operation up to 10 times per second per user.
    *
    * @param request AddDcdnIpaDomainRequest
    * @return AddDcdnIpaDomainResponse
   */
  async addDcdnIpaDomain(request: AddDcdnIpaDomainRequest): Promise<AddDcdnIpaDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDcdnIpaDomainWithOptions(request, runtime);
  }

  /**
    * **Prerequisites**:
    * *   The [DCDN service is activated](~~64926~~).
    * *   Internet content provider (ICP) filing is complete for the accelerated domain names.
    * > 
    * *   If the content of the origin server is not stored on Alibaba Cloud, the content must be reviewed. After you submit the request, the review is complete by the end of the following business day.
    * *   You can specify up to 50 domain names in each request.
    * *   You can call this operation up to 30 times per second per account.
    *
    * @param request BatchAddDcdnDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchAddDcdnDomainResponse
   */
  async batchAddDcdnDomainWithOptions(request: BatchAddDcdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchAddDcdnDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkUrl)) {
      query["CheckUrl"] = request.checkUrl;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!Util.isUnset(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchAddDcdnDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchAddDcdnDomainResponse>(await this.callApi(params, req, runtime), new BatchAddDcdnDomainResponse({}));
  }

  /**
    * **Prerequisites**:
    * *   The [DCDN service is activated](~~64926~~).
    * *   Internet content provider (ICP) filing is complete for the accelerated domain names.
    * > 
    * *   If the content of the origin server is not stored on Alibaba Cloud, the content must be reviewed. After you submit the request, the review is complete by the end of the following business day.
    * *   You can specify up to 50 domain names in each request.
    * *   You can call this operation up to 30 times per second per account.
    *
    * @param request BatchAddDcdnDomainRequest
    * @return BatchAddDcdnDomainResponse
   */
  async batchAddDcdnDomain(request: BatchAddDcdnDomainRequest): Promise<BatchAddDcdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAddDcdnDomainWithOptions(request, runtime);
  }

  /**
    * The ID of the request.
    *
    * @param request BatchCreateDcdnWafRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchCreateDcdnWafRulesResponse
   */
  async batchCreateDcdnWafRulesWithOptions(request: BatchCreateDcdnWafRulesRequest, runtime: $Util.RuntimeOptions): Promise<BatchCreateDcdnWafRulesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.ruleConfigs)) {
      body["RuleConfigs"] = request.ruleConfigs;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchCreateDcdnWafRules",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchCreateDcdnWafRulesResponse>(await this.callApi(params, req, runtime), new BatchCreateDcdnWafRulesResponse({}));
  }

  /**
    * The ID of the request.
    *
    * @param request BatchCreateDcdnWafRulesRequest
    * @return BatchCreateDcdnWafRulesResponse
   */
  async batchCreateDcdnWafRules(request: BatchCreateDcdnWafRulesRequest): Promise<BatchCreateDcdnWafRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchCreateDcdnWafRulesWithOptions(request, runtime);
  }

  /**
    * **
    * ****
    * *
    * *
    *
    * @param request BatchDeleteDcdnDomainConfigsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchDeleteDcdnDomainConfigsResponse
   */
  async batchDeleteDcdnDomainConfigsWithOptions(request: BatchDeleteDcdnDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteDcdnDomainConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!Util.isUnset(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteDcdnDomainConfigs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteDcdnDomainConfigsResponse>(await this.callApi(params, req, runtime), new BatchDeleteDcdnDomainConfigsResponse({}));
  }

  /**
    * **
    * ****
    * *
    * *
    *
    * @param request BatchDeleteDcdnDomainConfigsRequest
    * @return BatchDeleteDcdnDomainConfigsResponse
   */
  async batchDeleteDcdnDomainConfigs(request: BatchDeleteDcdnDomainConfigsRequest): Promise<BatchDeleteDcdnDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteDcdnDomainConfigsWithOptions(request, runtime);
  }

  /**
    * # Usage notes
    * *   You can call this operation up to 20 times per second per account.
    * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
    *
    * @param request BatchDeleteDcdnWafRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchDeleteDcdnWafRulesResponse
   */
  async batchDeleteDcdnWafRulesWithOptions(request: BatchDeleteDcdnWafRulesRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteDcdnWafRulesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ruleIds)) {
      body["RuleIds"] = request.ruleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteDcdnWafRules",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteDcdnWafRulesResponse>(await this.callApi(params, req, runtime), new BatchDeleteDcdnWafRulesResponse({}));
  }

  /**
    * # Usage notes
    * *   You can call this operation up to 20 times per second per account.
    * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
    *
    * @param request BatchDeleteDcdnWafRulesRequest
    * @return BatchDeleteDcdnWafRulesResponse
   */
  async batchDeleteDcdnWafRules(request: BatchDeleteDcdnWafRulesRequest): Promise<BatchDeleteDcdnWafRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteDcdnWafRulesWithOptions(request, runtime);
  }

  /**
    * ##
    *
    * @param request BatchModifyDcdnWafRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchModifyDcdnWafRulesResponse
   */
  async batchModifyDcdnWafRulesWithOptions(request: BatchModifyDcdnWafRulesRequest, runtime: $Util.RuntimeOptions): Promise<BatchModifyDcdnWafRulesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.ruleConfigs)) {
      body["RuleConfigs"] = request.ruleConfigs;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchModifyDcdnWafRules",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchModifyDcdnWafRulesResponse>(await this.callApi(params, req, runtime), new BatchModifyDcdnWafRulesResponse({}));
  }

  /**
    * ##
    *
    * @param request BatchModifyDcdnWafRulesRequest
    * @return BatchModifyDcdnWafRulesResponse
   */
  async batchModifyDcdnWafRules(request: BatchModifyDcdnWafRulesRequest): Promise<BatchModifyDcdnWafRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchModifyDcdnWafRulesWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 10 times per second per account.
    *
    * @param request BatchSetDcdnDomainCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchSetDcdnDomainCertificateResponse
   */
  async batchSetDcdnDomainCertificateWithOptions(request: BatchSetDcdnDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetDcdnDomainCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.SSLPri)) {
      query["SSLPri"] = request.SSLPri;
    }

    if (!Util.isUnset(request.SSLProtocol)) {
      query["SSLProtocol"] = request.SSLProtocol;
    }

    if (!Util.isUnset(request.SSLPub)) {
      query["SSLPub"] = request.SSLPub;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchSetDcdnDomainCertificate",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchSetDcdnDomainCertificateResponse>(await this.callApi(params, req, runtime), new BatchSetDcdnDomainCertificateResponse({}));
  }

  /**
    * > You can call this operation up to 10 times per second per account.
    *
    * @param request BatchSetDcdnDomainCertificateRequest
    * @return BatchSetDcdnDomainCertificateResponse
   */
  async batchSetDcdnDomainCertificate(request: BatchSetDcdnDomainCertificateRequest): Promise<BatchSetDcdnDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetDcdnDomainCertificateWithOptions(request, runtime);
  }

  /**
    * The accelerated domain names. Specify multiple accelerated domain names with commas (,).
    *
    * @param request BatchSetDcdnDomainConfigsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchSetDcdnDomainConfigsResponse
   */
  async batchSetDcdnDomainConfigsWithOptions(request: BatchSetDcdnDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetDcdnDomainConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!Util.isUnset(request.functions)) {
      query["Functions"] = request.functions;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchSetDcdnDomainConfigs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchSetDcdnDomainConfigsResponse>(await this.callApi(params, req, runtime), new BatchSetDcdnDomainConfigsResponse({}));
  }

  /**
    * The accelerated domain names. Specify multiple accelerated domain names with commas (,).
    *
    * @param request BatchSetDcdnDomainConfigsRequest
    * @return BatchSetDcdnDomainConfigsResponse
   */
  async batchSetDcdnDomainConfigs(request: BatchSetDcdnDomainConfigsRequest): Promise<BatchSetDcdnDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetDcdnDomainConfigsWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 20 times per second per account.
    *
    * @param request BatchSetDcdnIpaDomainConfigsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchSetDcdnIpaDomainConfigsResponse
   */
  async batchSetDcdnIpaDomainConfigsWithOptions(request: BatchSetDcdnIpaDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetDcdnIpaDomainConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!Util.isUnset(request.functions)) {
      query["Functions"] = request.functions;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchSetDcdnIpaDomainConfigs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchSetDcdnIpaDomainConfigsResponse>(await this.callApi(params, req, runtime), new BatchSetDcdnIpaDomainConfigsResponse({}));
  }

  /**
    * > You can call this operation up to 20 times per second per account.
    *
    * @param request BatchSetDcdnIpaDomainConfigsRequest
    * @return BatchSetDcdnIpaDomainConfigsResponse
   */
  async batchSetDcdnIpaDomainConfigs(request: BatchSetDcdnIpaDomainConfigsRequest): Promise<BatchSetDcdnIpaDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetDcdnIpaDomainConfigsWithOptions(request, runtime);
  }

  /**
    * #
    * *   You can call this operation up to 20 times per second.
    * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
    *
    * @param request BatchSetDcdnWafDomainConfigsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchSetDcdnWafDomainConfigsResponse
   */
  async batchSetDcdnWafDomainConfigsWithOptions(request: BatchSetDcdnWafDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetDcdnWafDomainConfigsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientIpTag)) {
      body["ClientIpTag"] = request.clientIpTag;
    }

    if (!Util.isUnset(request.defenseStatus)) {
      body["DefenseStatus"] = request.defenseStatus;
    }

    if (!Util.isUnset(request.domainNames)) {
      body["DomainNames"] = request.domainNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchSetDcdnWafDomainConfigs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchSetDcdnWafDomainConfigsResponse>(await this.callApi(params, req, runtime), new BatchSetDcdnWafDomainConfigsResponse({}));
  }

  /**
    * #
    * *   You can call this operation up to 20 times per second.
    * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
    *
    * @param request BatchSetDcdnWafDomainConfigsRequest
    * @return BatchSetDcdnWafDomainConfigsResponse
   */
  async batchSetDcdnWafDomainConfigs(request: BatchSetDcdnWafDomainConfigsRequest): Promise<BatchSetDcdnWafDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetDcdnWafDomainConfigsWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request CheckDcdnProjectExistRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CheckDcdnProjectExistResponse
   */
  async checkDcdnProjectExistWithOptions(request: CheckDcdnProjectExistRequest, runtime: $Util.RuntimeOptions): Promise<CheckDcdnProjectExistResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDcdnProjectExist",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDcdnProjectExistResponse>(await this.callApi(params, req, runtime), new CheckDcdnProjectExistResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request CheckDcdnProjectExistRequest
    * @return CheckDcdnProjectExistResponse
   */
  async checkDcdnProjectExist(request: CheckDcdnProjectExistRequest): Promise<CheckDcdnProjectExistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDcdnProjectExistWithOptions(request, runtime);
  }

  /**
    * **
    * ****
    *
    * @param request CommitStagingRoutineCodeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CommitStagingRoutineCodeResponse
   */
  async commitStagingRoutineCodeWithOptions(request: CommitStagingRoutineCodeRequest, runtime: $Util.RuntimeOptions): Promise<CommitStagingRoutineCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.codeDescription)) {
      body["CodeDescription"] = request.codeDescription;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CommitStagingRoutineCode",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CommitStagingRoutineCodeResponse>(await this.callApi(params, req, runtime), new CommitStagingRoutineCodeResponse({}));
  }

  /**
    * **
    * ****
    *
    * @param request CommitStagingRoutineCodeRequest
    * @return CommitStagingRoutineCodeResponse
   */
  async commitStagingRoutineCode(request: CommitStagingRoutineCodeRequest): Promise<CommitStagingRoutineCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.commitStagingRoutineCodeWithOptions(request, runtime);
  }

  /**
    * The ID of the tracking task.
    *
    * @param request CreateDcdnDeliverTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDcdnDeliverTaskResponse
   */
  async createDcdnDeliverTaskWithOptions(request: CreateDcdnDeliverTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDcdnDeliverTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deliver)) {
      body["Deliver"] = request.deliver;
    }

    if (!Util.isUnset(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.reports)) {
      body["Reports"] = request.reports;
    }

    if (!Util.isUnset(request.schedule)) {
      body["Schedule"] = request.schedule;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDcdnDeliverTask",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDcdnDeliverTaskResponse>(await this.callApi(params, req, runtime), new CreateDcdnDeliverTaskResponse({}));
  }

  /**
    * The ID of the tracking task.
    *
    * @param request CreateDcdnDeliverTaskRequest
    * @return CreateDcdnDeliverTaskResponse
   */
  async createDcdnDeliverTask(request: CreateDcdnDeliverTaskRequest): Promise<CreateDcdnDeliverTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDcdnDeliverTaskWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request CreateDcdnSLSRealTimeLogDeliveryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDcdnSLSRealTimeLogDeliveryResponse
   */
  async createDcdnSLSRealTimeLogDeliveryWithOptions(request: CreateDcdnSLSRealTimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<CreateDcdnSLSRealTimeLogDeliveryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessType)) {
      body["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.dataCenter)) {
      body["DataCenter"] = request.dataCenter;
    }

    if (!Util.isUnset(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.SLSLogStore)) {
      body["SLSLogStore"] = request.SLSLogStore;
    }

    if (!Util.isUnset(request.SLSProject)) {
      body["SLSProject"] = request.SLSProject;
    }

    if (!Util.isUnset(request.SLSRegion)) {
      body["SLSRegion"] = request.SLSRegion;
    }

    if (!Util.isUnset(request.samplingRate)) {
      body["SamplingRate"] = request.samplingRate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDcdnSLSRealTimeLogDelivery",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDcdnSLSRealTimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new CreateDcdnSLSRealTimeLogDeliveryResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request CreateDcdnSLSRealTimeLogDeliveryRequest
    * @return CreateDcdnSLSRealTimeLogDeliveryResponse
   */
  async createDcdnSLSRealTimeLogDelivery(request: CreateDcdnSLSRealTimeLogDeliveryRequest): Promise<CreateDcdnSLSRealTimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDcdnSLSRealTimeLogDeliveryWithOptions(request, runtime);
  }

  /**
    * > 
    * *   This operation allows you to customize an operations report for a specific domain name. You can view the statistics about the domain name in the report.
    * *   You can call this operation up to three times per second per account.
    *
    * @param request CreateDcdnSubTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDcdnSubTaskResponse
   */
  async createDcdnSubTaskWithOptions(request: CreateDcdnSubTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDcdnSubTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.reportIds)) {
      body["ReportIds"] = request.reportIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDcdnSubTask",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDcdnSubTaskResponse>(await this.callApi(params, req, runtime), new CreateDcdnSubTaskResponse({}));
  }

  /**
    * > 
    * *   This operation allows you to customize an operations report for a specific domain name. You can view the statistics about the domain name in the report.
    * *   You can call this operation up to three times per second per account.
    *
    * @param request CreateDcdnSubTaskRequest
    * @return CreateDcdnSubTaskResponse
   */
  async createDcdnSubTask(request: CreateDcdnSubTaskRequest): Promise<CreateDcdnSubTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDcdnSubTaskWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation up to 20 times per second per user.
    * *   Alibaba Cloud Dynamic Route for CDN (DCDN) supports POST requests.
    *
    * @param request CreateDcdnWafPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDcdnWafPolicyResponse
   */
  async createDcdnWafPolicyWithOptions(request: CreateDcdnWafPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateDcdnWafPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.defenseScene)) {
      body["DefenseScene"] = request.defenseScene;
    }

    if (!Util.isUnset(request.policyName)) {
      body["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.policyStatus)) {
      body["PolicyStatus"] = request.policyStatus;
    }

    if (!Util.isUnset(request.policyType)) {
      body["PolicyType"] = request.policyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDcdnWafPolicy",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDcdnWafPolicyResponse>(await this.callApi(params, req, runtime), new CreateDcdnWafPolicyResponse({}));
  }

  /**
    * *   You can call this operation up to 20 times per second per user.
    * *   Alibaba Cloud Dynamic Route for CDN (DCDN) supports POST requests.
    *
    * @param request CreateDcdnWafPolicyRequest
    * @return CreateDcdnWafPolicyResponse
   */
  async createDcdnWafPolicy(request: CreateDcdnWafPolicyRequest): Promise<CreateDcdnWafPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDcdnWafPolicyWithOptions(request, runtime);
  }

  /**
    * > 
    * *   The parameters must comply with the rules of EnvConf. The description of a routine cannot exceed 50 characters in length.
    * *   This operation creates a routine that contains only production and staging environments.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param tmpReq CreateRoutineRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateRoutineResponse
   */
  async createRoutineWithOptions(tmpReq: CreateRoutineRequest, runtime: $Util.RuntimeOptions): Promise<CreateRoutineResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateRoutineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.envConf)) {
      request.envConfShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.envConf, "EnvConf", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.envConfShrink)) {
      body["EnvConf"] = request.envConfShrink;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRoutine",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRoutineResponse>(await this.callApi(params, req, runtime), new CreateRoutineResponse({}));
  }

  /**
    * > 
    * *   The parameters must comply with the rules of EnvConf. The description of a routine cannot exceed 50 characters in length.
    * *   This operation creates a routine that contains only production and staging environments.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request CreateRoutineRequest
    * @return CreateRoutineResponse
   */
  async createRoutine(request: CreateRoutineRequest): Promise<CreateRoutineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRoutineWithOptions(request, runtime);
  }

  /**
    * **
    * ****
    *
    * @param request CreateSlrAndSlsProjectRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateSlrAndSlsProjectResponse
   */
  async createSlrAndSlsProjectWithOptions(request: CreateSlrAndSlsProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateSlrAndSlsProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessType)) {
      body["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSlrAndSlsProject",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSlrAndSlsProjectResponse>(await this.callApi(params, req, runtime), new CreateSlrAndSlsProjectResponse({}));
  }

  /**
    * **
    * ****
    *
    * @param request CreateSlrAndSlsProjectRequest
    * @return CreateSlrAndSlsProjectResponse
   */
  async createSlrAndSlsProject(request: CreateSlrAndSlsProjectRequest): Promise<CreateSlrAndSlsProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSlrAndSlsProjectWithOptions(request, runtime);
  }

  /**
    * **
    * ****
    *
    * @param request DeleteDcdnDeliverTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDcdnDeliverTaskResponse
   */
  async deleteDcdnDeliverTaskWithOptions(request: DeleteDcdnDeliverTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDcdnDeliverTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deliverId)) {
      query["DeliverId"] = request.deliverId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDcdnDeliverTask",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDcdnDeliverTaskResponse>(await this.callApi(params, req, runtime), new DeleteDcdnDeliverTaskResponse({}));
  }

  /**
    * **
    * ****
    *
    * @param request DeleteDcdnDeliverTaskRequest
    * @return DeleteDcdnDeliverTaskResponse
   */
  async deleteDcdnDeliverTask(request: DeleteDcdnDeliverTaskRequest): Promise<DeleteDcdnDeliverTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDcdnDeliverTaskWithOptions(request, runtime);
  }

  /**
    * **
    * ****
    * *
    * *   ****[](~~130622~~)
    * *
    *
    * @param request DeleteDcdnDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDcdnDomainResponse
   */
  async deleteDcdnDomainWithOptions(request: DeleteDcdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDcdnDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDcdnDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDcdnDomainResponse>(await this.callApi(params, req, runtime), new DeleteDcdnDomainResponse({}));
  }

  /**
    * **
    * ****
    * *
    * *   ****[](~~130622~~)
    * *
    *
    * @param request DeleteDcdnDomainRequest
    * @return DeleteDcdnDomainResponse
   */
  async deleteDcdnDomain(request: DeleteDcdnDomainRequest): Promise<DeleteDcdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDcdnDomainWithOptions(request, runtime);
  }

  /**
    * > 
    * *   Before you delete your domain name, we recommend that you request the Domain Name System (DNS) provider to restore the A record of the domain name. Otherwise, the domain name may become inaccessible after you delete it.
    * *   This operation deletes all records of the specified accelerated domain name. If you want to temporarily disable an accelerated domain name, call the **StopDcdnIpaDomain** operation.****
    * *   You can call this operation up to 10 times per second per account.
    *
    * @param request DeleteDcdnIpaDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDcdnIpaDomainResponse
   */
  async deleteDcdnIpaDomainWithOptions(request: DeleteDcdnIpaDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDcdnIpaDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDcdnIpaDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDcdnIpaDomainResponse>(await this.callApi(params, req, runtime), new DeleteDcdnIpaDomainResponse({}));
  }

  /**
    * > 
    * *   Before you delete your domain name, we recommend that you request the Domain Name System (DNS) provider to restore the A record of the domain name. Otherwise, the domain name may become inaccessible after you delete it.
    * *   This operation deletes all records of the specified accelerated domain name. If you want to temporarily disable an accelerated domain name, call the **StopDcdnIpaDomain** operation.****
    * *   You can call this operation up to 10 times per second per account.
    *
    * @param request DeleteDcdnIpaDomainRequest
    * @return DeleteDcdnIpaDomainResponse
   */
  async deleteDcdnIpaDomain(request: DeleteDcdnIpaDomainRequest): Promise<DeleteDcdnIpaDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDcdnIpaDomainWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 10 times per second per account.
    *
    * @param request DeleteDcdnIpaSpecificConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDcdnIpaSpecificConfigResponse
   */
  async deleteDcdnIpaSpecificConfigWithOptions(request: DeleteDcdnIpaSpecificConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDcdnIpaSpecificConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDcdnIpaSpecificConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDcdnIpaSpecificConfigResponse>(await this.callApi(params, req, runtime), new DeleteDcdnIpaSpecificConfigResponse({}));
  }

  /**
    * > You can call this operation up to 10 times per second per account.
    *
    * @param request DeleteDcdnIpaSpecificConfigRequest
    * @return DeleteDcdnIpaSpecificConfigResponse
   */
  async deleteDcdnIpaSpecificConfig(request: DeleteDcdnIpaSpecificConfigRequest): Promise<DeleteDcdnIpaSpecificConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDcdnIpaSpecificConfigWithOptions(request, runtime);
  }

  async deleteDcdnKvWithOptions(request: DeleteDcdnKvRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDcdnKvResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDcdnKv",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDcdnKvResponse>(await this.callApi(params, req, runtime), new DeleteDcdnKvResponse({}));
  }

  async deleteDcdnKv(request: DeleteDcdnKvRequest): Promise<DeleteDcdnKvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDcdnKvWithOptions(request, runtime);
  }

  /**
    * >  You can call this operation up to 100 times per second per account.
    *
    * @param request DeleteDcdnRealTimeLogProjectRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDcdnRealTimeLogProjectResponse
   */
  async deleteDcdnRealTimeLogProjectWithOptions(request: DeleteDcdnRealTimeLogProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDcdnRealTimeLogProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDcdnRealTimeLogProject",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDcdnRealTimeLogProjectResponse>(await this.callApi(params, req, runtime), new DeleteDcdnRealTimeLogProjectResponse({}));
  }

  /**
    * >  You can call this operation up to 100 times per second per account.
    *
    * @param request DeleteDcdnRealTimeLogProjectRequest
    * @return DeleteDcdnRealTimeLogProjectResponse
   */
  async deleteDcdnRealTimeLogProject(request: DeleteDcdnRealTimeLogProjectRequest): Promise<DeleteDcdnRealTimeLogProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDcdnRealTimeLogProjectWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DeleteDcdnSpecificConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDcdnSpecificConfigResponse
   */
  async deleteDcdnSpecificConfigWithOptions(request: DeleteDcdnSpecificConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDcdnSpecificConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDcdnSpecificConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDcdnSpecificConfigResponse>(await this.callApi(params, req, runtime), new DeleteDcdnSpecificConfigResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DeleteDcdnSpecificConfigRequest
    * @return DeleteDcdnSpecificConfigResponse
   */
  async deleteDcdnSpecificConfig(request: DeleteDcdnSpecificConfigRequest): Promise<DeleteDcdnSpecificConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDcdnSpecificConfigWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 20 times per second per account.
    *
    * @param request DeleteDcdnSpecificStagingConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDcdnSpecificStagingConfigResponse
   */
  async deleteDcdnSpecificStagingConfigWithOptions(request: DeleteDcdnSpecificStagingConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDcdnSpecificStagingConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDcdnSpecificStagingConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDcdnSpecificStagingConfigResponse>(await this.callApi(params, req, runtime), new DeleteDcdnSpecificStagingConfigResponse({}));
  }

  /**
    * > You can call this operation up to 20 times per second per account.
    *
    * @param request DeleteDcdnSpecificStagingConfigRequest
    * @return DeleteDcdnSpecificStagingConfigResponse
   */
  async deleteDcdnSpecificStagingConfig(request: DeleteDcdnSpecificStagingConfigRequest): Promise<DeleteDcdnSpecificStagingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDcdnSpecificStagingConfigWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 3 times per second per account.
    *
    * @param request DeleteDcdnSubTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDcdnSubTaskResponse
   */
  async deleteDcdnSubTaskWithOptions(runtime: $Util.RuntimeOptions): Promise<DeleteDcdnSubTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DeleteDcdnSubTask",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDcdnSubTaskResponse>(await this.callApi(params, req, runtime), new DeleteDcdnSubTaskResponse({}));
  }

  /**
    * > You can call this operation up to 3 times per second per account.
    *
    * @return DeleteDcdnSubTaskResponse
   */
  async deleteDcdnSubTask(): Promise<DeleteDcdnSubTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDcdnSubTaskWithOptions(runtime);
  }

  /**
    * #
    * *   You can call this operation up to 20 times per second.
    * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
    *
    * @param request DeleteDcdnWafPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDcdnWafPolicyResponse
   */
  async deleteDcdnWafPolicyWithOptions(request: DeleteDcdnWafPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDcdnWafPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDcdnWafPolicy",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDcdnWafPolicyResponse>(await this.callApi(params, req, runtime), new DeleteDcdnWafPolicyResponse({}));
  }

  /**
    * #
    * *   You can call this operation up to 20 times per second.
    * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
    *
    * @param request DeleteDcdnWafPolicyRequest
    * @return DeleteDcdnWafPolicyResponse
   */
  async deleteDcdnWafPolicy(request: DeleteDcdnWafPolicyRequest): Promise<DeleteDcdnWafPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDcdnWafPolicyWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DeleteRoutineRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteRoutineResponse
   */
  async deleteRoutineWithOptions(request: DeleteRoutineRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRoutineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRoutine",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRoutineResponse>(await this.callApi(params, req, runtime), new DeleteRoutineResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DeleteRoutineRequest
    * @return DeleteRoutineResponse
   */
  async deleteRoutine(request: DeleteRoutineRequest): Promise<DeleteRoutineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRoutineWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DeleteRoutineCodeRevisionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteRoutineCodeRevisionResponse
   */
  async deleteRoutineCodeRevisionWithOptions(request: DeleteRoutineCodeRevisionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRoutineCodeRevisionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.selectCodeRevision)) {
      body["SelectCodeRevision"] = request.selectCodeRevision;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRoutineCodeRevision",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRoutineCodeRevisionResponse>(await this.callApi(params, req, runtime), new DeleteRoutineCodeRevisionResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DeleteRoutineCodeRevisionRequest
    * @return DeleteRoutineCodeRevisionResponse
   */
  async deleteRoutineCodeRevision(request: DeleteRoutineCodeRevisionRequest): Promise<DeleteRoutineCodeRevisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRoutineCodeRevisionWithOptions(request, runtime);
  }

  /**
    * > 
    * *   This operation deletes only custom preset canary release environments. You cannot delete production or staging environments.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param tmpReq DeleteRoutineConfEnvsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteRoutineConfEnvsResponse
   */
  async deleteRoutineConfEnvsWithOptions(tmpReq: DeleteRoutineConfEnvsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRoutineConfEnvsResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteRoutineConfEnvsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.envs)) {
      request.envsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.envs, "Envs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envsShrink)) {
      body["Envs"] = request.envsShrink;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRoutineConfEnvs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRoutineConfEnvsResponse>(await this.callApi(params, req, runtime), new DeleteRoutineConfEnvsResponse({}));
  }

  /**
    * > 
    * *   This operation deletes only custom preset canary release environments. You cannot delete production or staging environments.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DeleteRoutineConfEnvsRequest
    * @return DeleteRoutineConfEnvsResponse
   */
  async deleteRoutineConfEnvs(request: DeleteRoutineConfEnvsRequest): Promise<DeleteRoutineConfEnvsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRoutineConfEnvsWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to three times per second per account.
    *
    * @param request DescribeDcdnAclFieldsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnAclFieldsResponse
   */
  async describeDcdnAclFieldsWithOptions(request: DescribeDcdnAclFieldsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnAclFieldsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnAclFields",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnAclFieldsResponse>(await this.callApi(params, req, runtime), new DescribeDcdnAclFieldsResponse({}));
  }

  /**
    * > You can call this operation up to three times per second per account.
    *
    * @param request DescribeDcdnAclFieldsRequest
    * @return DescribeDcdnAclFieldsResponse
   */
  async describeDcdnAclFields(request: DescribeDcdnAclFieldsRequest): Promise<DescribeDcdnAclFieldsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnAclFieldsWithOptions(request, runtime);
  }

  /**
    * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range. You must set both parameters or leave both of them empty.
    * *   If you specify multiple Internet service providers (ISPs), the data for the ISPs is aggregated.
    * *   You can query data in the last 90 days.
    * *   The maximum time range from the start time to the end time is 31 days. The start time is specified by the StartTime parameter and the end time is specified by the EndTime parameter.
    * *   If the time range from the start time to the end time is 72 hours or shorter, you can specify the interval as 5 minutes. If the time range is longer than 72 hours, you must specify the interval as 1 hour.
    * *   You can call this operation up to five times per second per account.
    *
    * @param request DescribeDcdnBgpBpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnBgpBpsDataResponse
   */
  async describeDcdnBgpBpsDataWithOptions(request: DescribeDcdnBgpBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnBgpBpsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.devicePort)) {
      query["DevicePort"] = request.devicePort;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnBgpBpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnBgpBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnBgpBpsDataResponse({}));
  }

  /**
    * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range. You must set both parameters or leave both of them empty.
    * *   If you specify multiple Internet service providers (ISPs), the data for the ISPs is aggregated.
    * *   You can query data in the last 90 days.
    * *   The maximum time range from the start time to the end time is 31 days. The start time is specified by the StartTime parameter and the end time is specified by the EndTime parameter.
    * *   If the time range from the start time to the end time is 72 hours or shorter, you can specify the interval as 5 minutes. If the time range is longer than 72 hours, you must specify the interval as 1 hour.
    * *   You can call this operation up to five times per second per account.
    *
    * @param request DescribeDcdnBgpBpsDataRequest
    * @return DescribeDcdnBgpBpsDataResponse
   */
  async describeDcdnBgpBpsData(request: DescribeDcdnBgpBpsDataRequest): Promise<DescribeDcdnBgpBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnBgpBpsDataWithOptions(request, runtime);
  }

  /**
    * The timestamp of the data returned.
    *
    * @param request DescribeDcdnBgpTrafficDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnBgpTrafficDataResponse
   */
  async describeDcdnBgpTrafficDataWithOptions(request: DescribeDcdnBgpTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnBgpTrafficDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnBgpTrafficData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnBgpTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnBgpTrafficDataResponse({}));
  }

  /**
    * The timestamp of the data returned.
    *
    * @param request DescribeDcdnBgpTrafficDataRequest
    * @return DescribeDcdnBgpTrafficDataResponse
   */
  async describeDcdnBgpTrafficData(request: DescribeDcdnBgpTrafficDataRequest): Promise<DescribeDcdnBgpTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnBgpTrafficDataWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeDcdnBlockedRegionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnBlockedRegionsResponse
   */
  async describeDcdnBlockedRegionsWithOptions(request: DescribeDcdnBlockedRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnBlockedRegionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnBlockedRegions",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnBlockedRegionsResponse>(await this.callApi(params, req, runtime), new DescribeDcdnBlockedRegionsResponse({}));
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeDcdnBlockedRegionsRequest
    * @return DescribeDcdnBlockedRegionsResponse
   */
  async describeDcdnBlockedRegions(request: DescribeDcdnBlockedRegionsRequest): Promise<DescribeDcdnBlockedRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnBlockedRegionsWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnCertificateDetailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnCertificateDetailResponse
   */
  async describeDcdnCertificateDetailWithOptions(request: DescribeDcdnCertificateDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnCertificateDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnCertificateDetail",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnCertificateDetailResponse>(await this.callApi(params, req, runtime), new DescribeDcdnCertificateDetailResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnCertificateDetailRequest
    * @return DescribeDcdnCertificateDetailResponse
   */
  async describeDcdnCertificateDetail(request: DescribeDcdnCertificateDetailRequest): Promise<DescribeDcdnCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnCertificateDetailWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnCertificateListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnCertificateListResponse
   */
  async describeDcdnCertificateListWithOptions(request: DescribeDcdnCertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnCertificateListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnCertificateList",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnCertificateListResponse>(await this.callApi(params, req, runtime), new DescribeDcdnCertificateListResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnCertificateListRequest
    * @return DescribeDcdnCertificateListResponse
   */
  async describeDcdnCertificateList(request: DescribeDcdnCertificateListRequest): Promise<DescribeDcdnCertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnCertificateListWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 10 times per second per account.
    *
    * @param request DescribeDcdnDeletedDomainsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDeletedDomainsResponse
   */
  async describeDcdnDeletedDomainsWithOptions(request: DescribeDcdnDeletedDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDeletedDomainsResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "DescribeDcdnDeletedDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDeletedDomainsResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDeletedDomainsResponse({}));
  }

  /**
    * > You can call this operation up to 10 times per second per account.
    *
    * @param request DescribeDcdnDeletedDomainsRequest
    * @return DescribeDcdnDeletedDomainsResponse
   */
  async describeDcdnDeletedDomains(request: DescribeDcdnDeletedDomainsRequest): Promise<DescribeDcdnDeletedDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDeletedDomainsWithOptions(request, runtime);
  }

  /**
    * **
    * **You can call this operation up to three times per second.
    *
    * @param request DescribeDcdnDeliverListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDeliverListResponse
   */
  async describeDcdnDeliverListWithOptions(request: DescribeDcdnDeliverListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDeliverListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deliverId)) {
      query["DeliverId"] = request.deliverId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDeliverList",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDeliverListResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDeliverListResponse({}));
  }

  /**
    * **
    * **You can call this operation up to three times per second.
    *
    * @param request DescribeDcdnDeliverListRequest
    * @return DescribeDcdnDeliverListResponse
   */
  async describeDcdnDeliverList(request: DescribeDcdnDeliverListRequest): Promise<DescribeDcdnDeliverListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDeliverListWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDcdnDomainBpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainBpsDataResponse
   */
  async describeDcdnDomainBpsDataWithOptions(request: DescribeDcdnDomainBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainBpsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainBpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainBpsDataResponse({}));
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDcdnDomainBpsDataRequest
    * @return DescribeDcdnDomainBpsDataResponse
   */
  async describeDcdnDomainBpsData(request: DescribeDcdnDomainBpsDataRequest): Promise<DescribeDcdnDomainBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainBpsDataWithOptions(request, runtime);
  }

  /**
    * #
    * *
    * *   ****************
    * ****| -------------- | -------------- | ------
    *
    * @param request DescribeDcdnDomainBpsDataByLayerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainBpsDataByLayerResponse
   */
  async describeDcdnDomainBpsDataByLayerWithOptions(request: DescribeDcdnDomainBpsDataByLayerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainBpsDataByLayerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.layer)) {
      query["Layer"] = request.layer;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainBpsDataByLayer",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainBpsDataByLayerResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainBpsDataByLayerResponse({}));
  }

  /**
    * #
    * *
    * *   ****************
    * ****| -------------- | -------------- | ------
    *
    * @param request DescribeDcdnDomainBpsDataByLayerRequest
    * @return DescribeDcdnDomainBpsDataByLayerResponse
   */
  async describeDcdnDomainBpsDataByLayer(request: DescribeDcdnDomainBpsDataByLayerRequest): Promise<DescribeDcdnDomainBpsDataByLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainBpsDataByLayerWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnDomainByCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainByCertificateResponse
   */
  async describeDcdnDomainByCertificateWithOptions(request: DescribeDcdnDomainByCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainByCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.SSLPub)) {
      query["SSLPub"] = request.SSLPub;
    }

    if (!Util.isUnset(request.SSLStatus)) {
      query["SSLStatus"] = request.SSLStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainByCertificate",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainByCertificateResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainByCertificateResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnDomainByCertificateRequest
    * @return DescribeDcdnDomainByCertificateResponse
   */
  async describeDcdnDomainByCertificate(request: DescribeDcdnDomainByCertificateRequest): Promise<DescribeDcdnDomainByCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainByCertificateWithOptions(request, runtime);
  }

  /**
    * > 
    * *   If you do not configure the StartTime or EndTime parameter, data collected over the last 24 hours is queried. If you configure both the StartTime and EndTime parameters, data collected within the specified time range is queried.
    * *   You can query data collected over the last 30 days.
    * *   You can call this operation up to 50 times per second per user.
    *
    * @param request DescribeDcdnDomainCcActivityLogRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainCcActivityLogResponse
   */
  async describeDcdnDomainCcActivityLogWithOptions(request: DescribeDcdnDomainCcActivityLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainCcActivityLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
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

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.triggerObject)) {
      query["TriggerObject"] = request.triggerObject;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainCcActivityLog",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainCcActivityLogResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainCcActivityLogResponse({}));
  }

  /**
    * > 
    * *   If you do not configure the StartTime or EndTime parameter, data collected over the last 24 hours is queried. If you configure both the StartTime and EndTime parameters, data collected within the specified time range is queried.
    * *   You can query data collected over the last 30 days.
    * *   You can call this operation up to 50 times per second per user.
    *
    * @param request DescribeDcdnDomainCcActivityLogRequest
    * @return DescribeDcdnDomainCcActivityLogResponse
   */
  async describeDcdnDomainCcActivityLog(request: DescribeDcdnDomainCcActivityLogRequest): Promise<DescribeDcdnDomainCcActivityLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainCcActivityLogWithOptions(request, runtime);
  }

  /**
    * The ID of the request.
    *
    * @param request DescribeDcdnDomainCertificateInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainCertificateInfoResponse
   */
  async describeDcdnDomainCertificateInfoWithOptions(request: DescribeDcdnDomainCertificateInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainCertificateInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainCertificateInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainCertificateInfoResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainCertificateInfoResponse({}));
  }

  /**
    * The ID of the request.
    *
    * @param request DescribeDcdnDomainCertificateInfoRequest
    * @return DescribeDcdnDomainCertificateInfoResponse
   */
  async describeDcdnDomainCertificateInfo(request: DescribeDcdnDomainCertificateInfoRequest): Promise<DescribeDcdnDomainCertificateInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainCertificateInfoWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 80 times per second per account.
    *
    * @param request DescribeDcdnDomainCnameRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainCnameResponse
   */
  async describeDcdnDomainCnameWithOptions(request: DescribeDcdnDomainCnameRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainCnameResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainCname",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainCnameResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainCnameResponse({}));
  }

  /**
    * > You can call this operation up to 80 times per second per account.
    *
    * @param request DescribeDcdnDomainCnameRequest
    * @return DescribeDcdnDomainCnameResponse
   */
  async describeDcdnDomainCname(request: DescribeDcdnDomainCnameRequest): Promise<DescribeDcdnDomainCnameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainCnameWithOptions(request, runtime);
  }

  /**
    * **
    * ****
    * *
    * *
    *
    * @param request DescribeDcdnDomainConfigsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainConfigsResponse
   */
  async describeDcdnDomainConfigsWithOptions(request: DescribeDcdnDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainConfigs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainConfigsResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainConfigsResponse({}));
  }

  /**
    * **
    * ****
    * *
    * *
    *
    * @param request DescribeDcdnDomainConfigsRequest
    * @return DescribeDcdnDomainConfigsResponse
   */
  async describeDcdnDomainConfigs(request: DescribeDcdnDomainConfigsRequest): Promise<DescribeDcdnDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainConfigsWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnDomainDetailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainDetailResponse
   */
  async describeDcdnDomainDetailWithOptions(request: DescribeDcdnDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainDetail",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainDetailResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainDetailResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnDomainDetailRequest
    * @return DescribeDcdnDomainDetailResponse
   */
  async describeDcdnDomainDetail(request: DescribeDcdnDomainDetailRequest): Promise<DescribeDcdnDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainDetailWithOptions(request, runtime);
  }

  /**
    * #
    * *   You can call this operation up to 100 times per second per account.
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity** The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table. |Time granularity |Maximum time range per query |Historical data available |Data delay | -------------- | -------------- | ------ |5 minutes |3 days |93 days |15 minutes |1 hour |31 days |186 days |4 hours |1 day |366 days |366 days |04:00 on the next day
    *
    * @param request DescribeDcdnDomainHitRateDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainHitRateDataResponse
   */
  async describeDcdnDomainHitRateDataWithOptions(request: DescribeDcdnDomainHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainHitRateDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainHitRateData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainHitRateDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainHitRateDataResponse({}));
  }

  /**
    * #
    * *   You can call this operation up to 100 times per second per account.
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity** The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table. |Time granularity |Maximum time range per query |Historical data available |Data delay | -------------- | -------------- | ------ |5 minutes |3 days |93 days |15 minutes |1 hour |31 days |186 days |4 hours |1 day |366 days |366 days |04:00 on the next day
    *
    * @param request DescribeDcdnDomainHitRateDataRequest
    * @return DescribeDcdnDomainHitRateDataResponse
   */
  async describeDcdnDomainHitRateData(request: DescribeDcdnDomainHitRateDataRequest): Promise<DescribeDcdnDomainHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainHitRateDataWithOptions(request, runtime);
  }

  /**
    * Queries the total number and proportions of HTTP status codes returned from one or more accelerated domain names. Data is collected every 5 minutes. You can query data in the last 90 days.
    *
    * @param request DescribeDcdnDomainHttpCodeDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainHttpCodeDataResponse
   */
  async describeDcdnDomainHttpCodeDataWithOptions(request: DescribeDcdnDomainHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainHttpCodeDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainHttpCodeData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainHttpCodeDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainHttpCodeDataResponse({}));
  }

  /**
    * Queries the total number and proportions of HTTP status codes returned from one or more accelerated domain names. Data is collected every 5 minutes. You can query data in the last 90 days.
    *
    * @param request DescribeDcdnDomainHttpCodeDataRequest
    * @return DescribeDcdnDomainHttpCodeDataResponse
   */
  async describeDcdnDomainHttpCodeData(request: DescribeDcdnDomainHttpCodeDataRequest): Promise<DescribeDcdnDomainHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainHttpCodeDataWithOptions(request, runtime);
  }

  /**
    * #
    * *   You can call this operation up to 20 times per second per account.
    * *   You cannot query the distribution of HTTP status codes by IP protocol.
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity** The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table. |Time granularity |Maximum time range per query |Historical data available |Data delay | -------------- | -------------- | ------ |5 minutes |3 days |93 days |15 minutes |1 hour |31 days |186 days |4 hours |1 day |366 days |366 days |04:00 on the next day
    *
    * @param request DescribeDcdnDomainHttpCodeDataByLayerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainHttpCodeDataByLayerResponse
   */
  async describeDcdnDomainHttpCodeDataByLayerWithOptions(request: DescribeDcdnDomainHttpCodeDataByLayerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainHttpCodeDataByLayerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.layer)) {
      query["Layer"] = request.layer;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainHttpCodeDataByLayer",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainHttpCodeDataByLayerResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainHttpCodeDataByLayerResponse({}));
  }

  /**
    * #
    * *   You can call this operation up to 20 times per second per account.
    * *   You cannot query the distribution of HTTP status codes by IP protocol.
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity** The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table. |Time granularity |Maximum time range per query |Historical data available |Data delay | -------------- | -------------- | ------ |5 minutes |3 days |93 days |15 minutes |1 hour |31 days |186 days |4 hours |1 day |366 days |366 days |04:00 on the next day
    *
    * @param request DescribeDcdnDomainHttpCodeDataByLayerRequest
    * @return DescribeDcdnDomainHttpCodeDataByLayerResponse
   */
  async describeDcdnDomainHttpCodeDataByLayer(request: DescribeDcdnDomainHttpCodeDataByLayerRequest): Promise<DescribeDcdnDomainHttpCodeDataByLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainHttpCodeDataByLayerWithOptions(request, runtime);
  }

  /**
    * > 
    * *   The bandwidth is measured in bit/s.
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnDomainIpaBpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainIpaBpsDataResponse
   */
  async describeDcdnDomainIpaBpsDataWithOptions(request: DescribeDcdnDomainIpaBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainIpaBpsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.fixTimeGap)) {
      query["FixTimeGap"] = request.fixTimeGap;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timeMerge)) {
      query["TimeMerge"] = request.timeMerge;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainIpaBpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainIpaBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainIpaBpsDataResponse({}));
  }

  /**
    * > 
    * *   The bandwidth is measured in bit/s.
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnDomainIpaBpsDataRequest
    * @return DescribeDcdnDomainIpaBpsDataResponse
   */
  async describeDcdnDomainIpaBpsData(request: DescribeDcdnDomainIpaBpsDataRequest): Promise<DescribeDcdnDomainIpaBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainIpaBpsDataWithOptions(request, runtime);
  }

  /**
    * #
    * *   You can call this operation up to 10 times per second per account.
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * *   The minimum time granularity at which the data is queried is 5 minutes. The maximum time range for a single query is 31 days. The period within which historical data is available is 366 days. The data latency is no more than 10 minutes.
    *
    * @param request DescribeDcdnDomainIpaConnDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainIpaConnDataResponse
   */
  async describeDcdnDomainIpaConnDataWithOptions(request: DescribeDcdnDomainIpaConnDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainIpaConnDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.splitBy)) {
      query["SplitBy"] = request.splitBy;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainIpaConnData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainIpaConnDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainIpaConnDataResponse({}));
  }

  /**
    * #
    * *   You can call this operation up to 10 times per second per account.
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * *   The minimum time granularity at which the data is queried is 5 minutes. The maximum time range for a single query is 31 days. The period within which historical data is available is 366 days. The data latency is no more than 10 minutes.
    *
    * @param request DescribeDcdnDomainIpaConnDataRequest
    * @return DescribeDcdnDomainIpaConnDataResponse
   */
  async describeDcdnDomainIpaConnData(request: DescribeDcdnDomainIpaConnDataRequest): Promise<DescribeDcdnDomainIpaConnDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainIpaConnDataWithOptions(request, runtime);
  }

  /**
    * > 
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * *   Unit: bytes.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnDomainIpaTrafficDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainIpaTrafficDataResponse
   */
  async describeDcdnDomainIpaTrafficDataWithOptions(request: DescribeDcdnDomainIpaTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainIpaTrafficDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.fixTimeGap)) {
      query["FixTimeGap"] = request.fixTimeGap;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timeMerge)) {
      query["TimeMerge"] = request.timeMerge;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainIpaTrafficData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainIpaTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainIpaTrafficDataResponse({}));
  }

  /**
    * > 
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * *   Unit: bytes.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnDomainIpaTrafficDataRequest
    * @return DescribeDcdnDomainIpaTrafficDataResponse
   */
  async describeDcdnDomainIpaTrafficData(request: DescribeDcdnDomainIpaTrafficDataRequest): Promise<DescribeDcdnDomainIpaTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainIpaTrafficDataWithOptions(request, runtime);
  }

  /**
    * > 
    * *   You can call this operation up to 100 times per second per account.
    * *   If **StartTime** is set but **EndTime** is not set, the data within the hour that starts from **StartTime** is queried.
    * *   If **EndTime** is set but **StartTime** is not set, the data within the last hour that precedes **EndTime** is queried.
    * *   You can query data of a domain name or all domain names that belong to your account.
    * *   You can view data that is collected over the last seven days. The interval at which data is queried is based on the time range specified by **StartTime** and **EndTime**.
    *     *   **If the time range is shorter than or equal to one hour**, data is queried every minute.
    *     *   **If the time range is longer than 1 hour but shorter than or equal to three days**, data is queried every five minutes.
    *     *   **If the time range is longer than three days but shorter than or equal to seven days**, data is queried every hour.
    *
    * @param request DescribeDcdnDomainIspDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainIspDataResponse
   */
  async describeDcdnDomainIspDataWithOptions(request: DescribeDcdnDomainIspDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainIspDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

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
      action: "DescribeDcdnDomainIspData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainIspDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainIspDataResponse({}));
  }

  /**
    * > 
    * *   You can call this operation up to 100 times per second per account.
    * *   If **StartTime** is set but **EndTime** is not set, the data within the hour that starts from **StartTime** is queried.
    * *   If **EndTime** is set but **StartTime** is not set, the data within the last hour that precedes **EndTime** is queried.
    * *   You can query data of a domain name or all domain names that belong to your account.
    * *   You can view data that is collected over the last seven days. The interval at which data is queried is based on the time range specified by **StartTime** and **EndTime**.
    *     *   **If the time range is shorter than or equal to one hour**, data is queried every minute.
    *     *   **If the time range is longer than 1 hour but shorter than or equal to three days**, data is queried every five minutes.
    *     *   **If the time range is longer than three days but shorter than or equal to seven days**, data is queried every hour.
    *
    * @param request DescribeDcdnDomainIspDataRequest
    * @return DescribeDcdnDomainIspDataResponse
   */
  async describeDcdnDomainIspData(request: DescribeDcdnDomainIspDataRequest): Promise<DescribeDcdnDomainIspDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainIspDataWithOptions(request, runtime);
  }

  /**
    * > 
    * *   If you specify neither the **StartTime** parameter nor the **EndTime** parameter, the data in the last 24 hours is returned. If you specify the **StartTime** and **EndTime** parameters, the data within the specified time range is returned.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnDomainLogRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainLogResponse
   */
  async describeDcdnDomainLogWithOptions(request: DescribeDcdnDomainLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainLog",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainLogResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainLogResponse({}));
  }

  /**
    * > 
    * *   If you specify neither the **StartTime** parameter nor the **EndTime** parameter, the data in the last 24 hours is returned. If you specify the **StartTime** and **EndTime** parameters, the data within the specified time range is returned.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnDomainLogRequest
    * @return DescribeDcdnDomainLogResponse
   */
  async describeDcdnDomainLog(request: DescribeDcdnDomainLogRequest): Promise<DescribeDcdnDomainLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainLogWithOptions(request, runtime);
  }

  /**
    * When you call this operation, take note of the following rules:
    * *   If you do not set the StartTime or EndTime parameter, data within the last 10 minutes is queried. You can set both the StartTime and EndTime parameters to specify a time range.
    * *   You can specify one or more accelerated domain names. Separate domain names with commas (,).
    * *   You can query data within the last 90 days.
    * *   The time range cannot exceed 1 hour.
    *
    * @param request DescribeDcdnDomainMultiUsageDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainMultiUsageDataResponse
   */
  async describeDcdnDomainMultiUsageDataWithOptions(request: DescribeDcdnDomainMultiUsageDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainMultiUsageDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

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
      action: "DescribeDcdnDomainMultiUsageData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainMultiUsageDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainMultiUsageDataResponse({}));
  }

  /**
    * When you call this operation, take note of the following rules:
    * *   If you do not set the StartTime or EndTime parameter, data within the last 10 minutes is queried. You can set both the StartTime and EndTime parameters to specify a time range.
    * *   You can specify one or more accelerated domain names. Separate domain names with commas (,).
    * *   You can query data within the last 90 days.
    * *   The time range cannot exceed 1 hour.
    *
    * @param request DescribeDcdnDomainMultiUsageDataRequest
    * @return DescribeDcdnDomainMultiUsageDataResponse
   */
  async describeDcdnDomainMultiUsageData(request: DescribeDcdnDomainMultiUsageDataRequest): Promise<DescribeDcdnDomainMultiUsageDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainMultiUsageDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDcdnDomainOriginBpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainOriginBpsDataResponse
   */
  async describeDcdnDomainOriginBpsDataWithOptions(request: DescribeDcdnDomainOriginBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainOriginBpsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainOriginBpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainOriginBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainOriginBpsDataResponse({}));
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDcdnDomainOriginBpsDataRequest
    * @return DescribeDcdnDomainOriginBpsDataResponse
   */
  async describeDcdnDomainOriginBpsData(request: DescribeDcdnDomainOriginBpsDataRequest): Promise<DescribeDcdnDomainOriginBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainOriginBpsDataWithOptions(request, runtime);
  }

  /**
    * - You can call this operation up to 100 times per second per account.
    * - If you do not set the **StartTime** or **EndTime** parameters, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity**The time granularity supported by the Interval parameter varies with the maximum time range per query. The following table describes the time period within which historical data is available and the data delay. 
    * | Time granularity | Maximum time range per query | Historical data available | Data delay |
    * | ---------------- | ---------------------------- | ------------------------- | ---------- |
    * | 5 minutes | 3 days | 93 days | 15 minutes |
    * | 1 hour | 31 days | 186 days | 4 hours |
    * | 1 day | 366 days | 366 days | 04:00 on the next day |
    *
    * @param request DescribeDcdnDomainOriginTrafficDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainOriginTrafficDataResponse
   */
  async describeDcdnDomainOriginTrafficDataWithOptions(request: DescribeDcdnDomainOriginTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainOriginTrafficDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainOriginTrafficData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainOriginTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainOriginTrafficDataResponse({}));
  }

  /**
    * - You can call this operation up to 100 times per second per account.
    * - If you do not set the **StartTime** or **EndTime** parameters, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity**The time granularity supported by the Interval parameter varies with the maximum time range per query. The following table describes the time period within which historical data is available and the data delay. 
    * | Time granularity | Maximum time range per query | Historical data available | Data delay |
    * | ---------------- | ---------------------------- | ------------------------- | ---------- |
    * | 5 minutes | 3 days | 93 days | 15 minutes |
    * | 1 hour | 31 days | 186 days | 4 hours |
    * | 1 day | 366 days | 366 days | 04:00 on the next day |
    *
    * @param request DescribeDcdnDomainOriginTrafficDataRequest
    * @return DescribeDcdnDomainOriginTrafficDataResponse
   */
  async describeDcdnDomainOriginTrafficData(request: DescribeDcdnDomainOriginTrafficDataRequest): Promise<DescribeDcdnDomainOriginTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainOriginTrafficDataWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 10 times per second per account.
    *
    * @param request DescribeDcdnDomainPropertyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainPropertyResponse
   */
  async describeDcdnDomainPropertyWithOptions(request: DescribeDcdnDomainPropertyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainPropertyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainProperty",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainPropertyResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainPropertyResponse({}));
  }

  /**
    * > You can call this operation up to 10 times per second per account.
    *
    * @param request DescribeDcdnDomainPropertyRequest
    * @return DescribeDcdnDomainPropertyResponse
   */
  async describeDcdnDomainProperty(request: DescribeDcdnDomainPropertyRequest): Promise<DescribeDcdnDomainPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainPropertyWithOptions(request, runtime);
  }

  async describeDcdnDomainPvDataWithOptions(request: DescribeDcdnDomainPvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainPvDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

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
      action: "DescribeDcdnDomainPvData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainPvDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainPvDataResponse({}));
  }

  async describeDcdnDomainPvData(request: DescribeDcdnDomainPvDataRequest): Promise<DescribeDcdnDomainPvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainPvDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDcdnDomainQpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainQpsDataResponse
   */
  async describeDcdnDomainQpsDataWithOptions(request: DescribeDcdnDomainQpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainQpsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainQpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainQpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainQpsDataResponse({}));
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDcdnDomainQpsDataRequest
    * @return DescribeDcdnDomainQpsDataResponse
   */
  async describeDcdnDomainQpsData(request: DescribeDcdnDomainQpsDataRequest): Promise<DescribeDcdnDomainQpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainQpsDataWithOptions(request, runtime);
  }

  /**
    * - You can call this operation up to 20 times per second per account.
    * - If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity**The time granularity supported by the Interval parameter varies with the maximum time range per query. The following table describes the time period within which historical data is available and the data delay. 
    * | Time granularity | Maximum time range per query | Historical data available | Data delay |
    * | ---------------- | ---------------------------- | ------------------------- | ---------- |
    * | 5 minutes | 3 days | 93 days | 15 minutes |
    * | 1 hour | 31 days | 186 days | 4 hours |
    * | 1 day | 366 days | 366 days | 04:00 on the next day |
    *
    * @param request DescribeDcdnDomainQpsDataByLayerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainQpsDataByLayerResponse
   */
  async describeDcdnDomainQpsDataByLayerWithOptions(request: DescribeDcdnDomainQpsDataByLayerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainQpsDataByLayerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.layer)) {
      query["Layer"] = request.layer;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainQpsDataByLayer",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainQpsDataByLayerResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainQpsDataByLayerResponse({}));
  }

  /**
    * - You can call this operation up to 20 times per second per account.
    * - If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity**The time granularity supported by the Interval parameter varies with the maximum time range per query. The following table describes the time period within which historical data is available and the data delay. 
    * | Time granularity | Maximum time range per query | Historical data available | Data delay |
    * | ---------------- | ---------------------------- | ------------------------- | ---------- |
    * | 5 minutes | 3 days | 93 days | 15 minutes |
    * | 1 hour | 31 days | 186 days | 4 hours |
    * | 1 day | 366 days | 366 days | 04:00 on the next day |
    *
    * @param request DescribeDcdnDomainQpsDataByLayerRequest
    * @return DescribeDcdnDomainQpsDataByLayerResponse
   */
  async describeDcdnDomainQpsDataByLayer(request: DescribeDcdnDomainQpsDataByLayerRequest): Promise<DescribeDcdnDomainQpsDataByLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainQpsDataByLayerWithOptions(request, runtime);
  }

  /**
    * The name of the region.
    * You can call the [DescribeDcdnRegionAndIsp](~~207199~~) operation to query regions.
    *
    * @param request DescribeDcdnDomainRealTimeBpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainRealTimeBpsDataResponse
   */
  async describeDcdnDomainRealTimeBpsDataWithOptions(request: DescribeDcdnDomainRealTimeBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeBpsDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainRealTimeBpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainRealTimeBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainRealTimeBpsDataResponse({}));
  }

  /**
    * The name of the region.
    * You can call the [DescribeDcdnRegionAndIsp](~~207199~~) operation to query regions.
    *
    * @param request DescribeDcdnDomainRealTimeBpsDataRequest
    * @return DescribeDcdnDomainRealTimeBpsDataResponse
   */
  async describeDcdnDomainRealTimeBpsData(request: DescribeDcdnDomainRealTimeBpsDataRequest): Promise<DescribeDcdnDomainRealTimeBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeBpsDataWithOptions(request, runtime);
  }

  /**
    * # Usage notes
    * *   You can call this operation up to 10 times per second per account.
    * *   The network traffic destined for different domain names may be redirected to the same origin server. Therefore, the byte hit ratios may be inaccurate. The accuracy of query results is based on the actual configurations.
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last hour. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity** The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay. | Time granularity | Maximum time range per query | Historical data available | Data delay | |---------------|--------| | 1 minute | 1 hour | 7 days | 5 minutes | | 5 minutes | 3 days | 93 days | 15 minutes | | 1 hour | 31 days | 186 days | 4 hours |
    *
    * @param request DescribeDcdnDomainRealTimeByteHitRateDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainRealTimeByteHitRateDataResponse
   */
  async describeDcdnDomainRealTimeByteHitRateDataWithOptions(request: DescribeDcdnDomainRealTimeByteHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeByteHitRateDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainRealTimeByteHitRateData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainRealTimeByteHitRateDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainRealTimeByteHitRateDataResponse({}));
  }

  /**
    * # Usage notes
    * *   You can call this operation up to 10 times per second per account.
    * *   The network traffic destined for different domain names may be redirected to the same origin server. Therefore, the byte hit ratios may be inaccurate. The accuracy of query results is based on the actual configurations.
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last hour. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity** The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay. | Time granularity | Maximum time range per query | Historical data available | Data delay | |---------------|--------| | 1 minute | 1 hour | 7 days | 5 minutes | | 5 minutes | 3 days | 93 days | 15 minutes | | 1 hour | 31 days | 186 days | 4 hours |
    *
    * @param request DescribeDcdnDomainRealTimeByteHitRateDataRequest
    * @return DescribeDcdnDomainRealTimeByteHitRateDataResponse
   */
  async describeDcdnDomainRealTimeByteHitRateData(request: DescribeDcdnDomainRealTimeByteHitRateDataRequest): Promise<DescribeDcdnDomainRealTimeByteHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeByteHitRateDataWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 10 times per second per account.
    *
    * @param request DescribeDcdnDomainRealTimeDetailDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainRealTimeDetailDataResponse
   */
  async describeDcdnDomainRealTimeDetailDataWithOptions(request: DescribeDcdnDomainRealTimeDetailDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeDetailDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainRealTimeDetailData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainRealTimeDetailDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainRealTimeDetailDataResponse({}));
  }

  /**
    * > You can call this operation up to 10 times per second per account.
    *
    * @param request DescribeDcdnDomainRealTimeDetailDataRequest
    * @return DescribeDcdnDomainRealTimeDetailDataResponse
   */
  async describeDcdnDomainRealTimeDetailData(request: DescribeDcdnDomainRealTimeDetailDataRequest): Promise<DescribeDcdnDomainRealTimeDetailDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeDetailDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 10 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |1 minute|1 hour|7 days|5 minutes|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDcdnDomainRealTimeHttpCodeDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainRealTimeHttpCodeDataResponse
   */
  async describeDcdnDomainRealTimeHttpCodeDataWithOptions(request: DescribeDcdnDomainRealTimeHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeHttpCodeDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainRealTimeHttpCodeData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainRealTimeHttpCodeDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainRealTimeHttpCodeDataResponse({}));
  }

  /**
    * * You can call this operation up to 10 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |1 minute|1 hour|7 days|5 minutes|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDcdnDomainRealTimeHttpCodeDataRequest
    * @return DescribeDcdnDomainRealTimeHttpCodeDataResponse
   */
  async describeDcdnDomainRealTimeHttpCodeData(request: DescribeDcdnDomainRealTimeHttpCodeDataRequest): Promise<DescribeDcdnDomainRealTimeHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeHttpCodeDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 10 times per second per account.
    * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |1 minute|1 hour|7 days|5 minutes|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDcdnDomainRealTimeQpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainRealTimeQpsDataResponse
   */
  async describeDcdnDomainRealTimeQpsDataWithOptions(request: DescribeDcdnDomainRealTimeQpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeQpsDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainRealTimeQpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainRealTimeQpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainRealTimeQpsDataResponse({}));
  }

  /**
    * * You can call this operation up to 10 times per second per account.
    * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |1 minute|1 hour|7 days|5 minutes|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDcdnDomainRealTimeQpsDataRequest
    * @return DescribeDcdnDomainRealTimeQpsDataResponse
   */
  async describeDcdnDomainRealTimeQpsData(request: DescribeDcdnDomainRealTimeQpsDataRequest): Promise<DescribeDcdnDomainRealTimeQpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeQpsDataWithOptions(request, runtime);
  }

  /**
    * #
    * *   You can call this operation up to 10 times per second per account.
    * *   The network traffic destined for different domain names may be redirected to the same origin server. Therefore, the byte hit ratios may be inaccurate. The accuracy of query results is based on the actual configurations.
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last hour. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity** The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay. |Time granularity |Maximum time range per query |Historical data available|Data delay| |---------------|--------| |1 minute|1 hour|7 days|5 minutes| |5 minutes|3 days|93 days|15 minutes| |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDcdnDomainRealTimeReqHitRateDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainRealTimeReqHitRateDataResponse
   */
  async describeDcdnDomainRealTimeReqHitRateDataWithOptions(request: DescribeDcdnDomainRealTimeReqHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeReqHitRateDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainRealTimeReqHitRateData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainRealTimeReqHitRateDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainRealTimeReqHitRateDataResponse({}));
  }

  /**
    * #
    * *   You can call this operation up to 10 times per second per account.
    * *   The network traffic destined for different domain names may be redirected to the same origin server. Therefore, the byte hit ratios may be inaccurate. The accuracy of query results is based on the actual configurations.
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last hour. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity** The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay. |Time granularity |Maximum time range per query |Historical data available|Data delay| |---------------|--------| |1 minute|1 hour|7 days|5 minutes| |5 minutes|3 days|93 days|15 minutes| |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDcdnDomainRealTimeReqHitRateDataRequest
    * @return DescribeDcdnDomainRealTimeReqHitRateDataResponse
   */
  async describeDcdnDomainRealTimeReqHitRateData(request: DescribeDcdnDomainRealTimeReqHitRateDataRequest): Promise<DescribeDcdnDomainRealTimeReqHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeReqHitRateDataWithOptions(request, runtime);
  }

  /**
    * #
    * *   You can call this operation up to 10 times per second per account.
    * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the parameters, the request returns the data collected within the specified time range.
    * **Time granularity** The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay. | Time granularity | Maximum time range per query | Historical data available | Data delay | |---------------|--------| | 1 minute | 1 hour | 7 days | 5 minutes | | 5 minutes | 3 days | 93 days | 15 minutes | | 1 hour | 31 days | 186 days | 4 hours |
    *
    * @param request DescribeDcdnDomainRealTimeSrcBpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainRealTimeSrcBpsDataResponse
   */
  async describeDcdnDomainRealTimeSrcBpsDataWithOptions(request: DescribeDcdnDomainRealTimeSrcBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeSrcBpsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

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
      action: "DescribeDcdnDomainRealTimeSrcBpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainRealTimeSrcBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainRealTimeSrcBpsDataResponse({}));
  }

  /**
    * #
    * *   You can call this operation up to 10 times per second per account.
    * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the parameters, the request returns the data collected within the specified time range.
    * **Time granularity** The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay. | Time granularity | Maximum time range per query | Historical data available | Data delay | |---------------|--------| | 1 minute | 1 hour | 7 days | 5 minutes | | 5 minutes | 3 days | 93 days | 15 minutes | | 1 hour | 31 days | 186 days | 4 hours |
    *
    * @param request DescribeDcdnDomainRealTimeSrcBpsDataRequest
    * @return DescribeDcdnDomainRealTimeSrcBpsDataResponse
   */
  async describeDcdnDomainRealTimeSrcBpsData(request: DescribeDcdnDomainRealTimeSrcBpsDataRequest): Promise<DescribeDcdnDomainRealTimeSrcBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeSrcBpsDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 10 times per second per account.
    * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |1 minute|1 hour|7 days|5 minutes|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDcdnDomainRealTimeSrcHttpCodeDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse
   */
  async describeDcdnDomainRealTimeSrcHttpCodeDataWithOptions(request: DescribeDcdnDomainRealTimeSrcHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainRealTimeSrcHttpCodeData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse({}));
  }

  /**
    * * You can call this operation up to 10 times per second per account.
    * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |1 minute|1 hour|7 days|5 minutes|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDcdnDomainRealTimeSrcHttpCodeDataRequest
    * @return DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse
   */
  async describeDcdnDomainRealTimeSrcHttpCodeData(request: DescribeDcdnDomainRealTimeSrcHttpCodeDataRequest): Promise<DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeSrcHttpCodeDataWithOptions(request, runtime);
  }

  /**
    * The timestamp of the returned data.
    *
    * @param request DescribeDcdnDomainRealTimeSrcTrafficDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainRealTimeSrcTrafficDataResponse
   */
  async describeDcdnDomainRealTimeSrcTrafficDataWithOptions(request: DescribeDcdnDomainRealTimeSrcTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeSrcTrafficDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

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
      action: "DescribeDcdnDomainRealTimeSrcTrafficData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainRealTimeSrcTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainRealTimeSrcTrafficDataResponse({}));
  }

  /**
    * The timestamp of the returned data.
    *
    * @param request DescribeDcdnDomainRealTimeSrcTrafficDataRequest
    * @return DescribeDcdnDomainRealTimeSrcTrafficDataResponse
   */
  async describeDcdnDomainRealTimeSrcTrafficData(request: DescribeDcdnDomainRealTimeSrcTrafficDataRequest): Promise<DescribeDcdnDomainRealTimeSrcTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeSrcTrafficDataWithOptions(request, runtime);
  }

  /**
    * #
    * You can call this operation up to 50 times per second per user.
    * **Time granularity** The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay. |Time granularity |Maximum time range per query |Historical data available|Data delay| |---------------|--------| |1 minute|1 hour|7 days|5 minutes| |5 minutes|3 days|93 days|15 minutes| |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDcdnDomainRealTimeTrafficDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainRealTimeTrafficDataResponse
   */
  async describeDcdnDomainRealTimeTrafficDataWithOptions(request: DescribeDcdnDomainRealTimeTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeTrafficDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

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
      action: "DescribeDcdnDomainRealTimeTrafficData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainRealTimeTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainRealTimeTrafficDataResponse({}));
  }

  /**
    * #
    * You can call this operation up to 50 times per second per user.
    * **Time granularity** The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay. |Time granularity |Maximum time range per query |Historical data available|Data delay| |---------------|--------| |1 minute|1 hour|7 days|5 minutes| |5 minutes|3 days|93 days|15 minutes| |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDcdnDomainRealTimeTrafficDataRequest
    * @return DescribeDcdnDomainRealTimeTrafficDataResponse
   */
  async describeDcdnDomainRealTimeTrafficData(request: DescribeDcdnDomainRealTimeTrafficDataRequest): Promise<DescribeDcdnDomainRealTimeTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeTrafficDataWithOptions(request, runtime);
  }

  /**
    * > 
    * *   If you do not specify the StartTime and EndTime parameters, the data within the last 24 hours is queried. If you specify the StartTime and EndTime parameters, the data within the specified time range is queried.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnDomainRegionDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainRegionDataResponse
   */
  async describeDcdnDomainRegionDataWithOptions(request: DescribeDcdnDomainRegionDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRegionDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

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
      action: "DescribeDcdnDomainRegionData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainRegionDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainRegionDataResponse({}));
  }

  /**
    * > 
    * *   If you do not specify the StartTime and EndTime parameters, the data within the last 24 hours is queried. If you specify the StartTime and EndTime parameters, the data within the specified time range is queried.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnDomainRegionDataRequest
    * @return DescribeDcdnDomainRegionDataResponse
   */
  async describeDcdnDomainRegionData(request: DescribeDcdnDomainRegionDataRequest): Promise<DescribeDcdnDomainRegionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRegionDataWithOptions(request, runtime);
  }

  /**
    * The name of the accelerated domain.
    *
    * @param request DescribeDcdnDomainStagingConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainStagingConfigResponse
   */
  async describeDcdnDomainStagingConfigWithOptions(request: DescribeDcdnDomainStagingConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainStagingConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainStagingConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainStagingConfigResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainStagingConfigResponse({}));
  }

  /**
    * The name of the accelerated domain.
    *
    * @param request DescribeDcdnDomainStagingConfigRequest
    * @return DescribeDcdnDomainStagingConfigResponse
   */
  async describeDcdnDomainStagingConfig(request: DescribeDcdnDomainStagingConfigRequest): Promise<DescribeDcdnDomainStagingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainStagingConfigWithOptions(request, runtime);
  }

  /**
    * **Before you call this operation, take note of the following rules:**
    * *   If you do not set the StartTime parameter, the data on the previous day is queried.
    * *   You can specify only one domain name.
    *
    * @param request DescribeDcdnDomainTopReferVisitRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainTopReferVisitResponse
   */
  async describeDcdnDomainTopReferVisitWithOptions(request: DescribeDcdnDomainTopReferVisitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainTopReferVisitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainTopReferVisit",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainTopReferVisitResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainTopReferVisitResponse({}));
  }

  /**
    * **Before you call this operation, take note of the following rules:**
    * *   If you do not set the StartTime parameter, the data on the previous day is queried.
    * *   You can specify only one domain name.
    *
    * @param request DescribeDcdnDomainTopReferVisitRequest
    * @return DescribeDcdnDomainTopReferVisitResponse
   */
  async describeDcdnDomainTopReferVisit(request: DescribeDcdnDomainTopReferVisitRequest): Promise<DescribeDcdnDomainTopReferVisitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainTopReferVisitWithOptions(request, runtime);
  }

  /**
    * > You can query data in the last seven days.
    *
    * @param request DescribeDcdnDomainTopUrlVisitRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainTopUrlVisitResponse
   */
  async describeDcdnDomainTopUrlVisitWithOptions(request: DescribeDcdnDomainTopUrlVisitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainTopUrlVisitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainTopUrlVisit",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainTopUrlVisitResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainTopUrlVisitResponse({}));
  }

  /**
    * > You can query data in the last seven days.
    *
    * @param request DescribeDcdnDomainTopUrlVisitRequest
    * @return DescribeDcdnDomainTopUrlVisitResponse
   */
  async describeDcdnDomainTopUrlVisit(request: DescribeDcdnDomainTopUrlVisitRequest): Promise<DescribeDcdnDomainTopUrlVisitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainTopUrlVisitWithOptions(request, runtime);
  }

  /**
    * Queries the monitoring data of network traffic for one or more accelerated domain names. You can query data in the last 90 days.
    *
    * @param request DescribeDcdnDomainTrafficDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainTrafficDataResponse
   */
  async describeDcdnDomainTrafficDataWithOptions(request: DescribeDcdnDomainTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainTrafficDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainTrafficData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainTrafficDataResponse({}));
  }

  /**
    * Queries the monitoring data of network traffic for one or more accelerated domain names. You can query data in the last 90 days.
    *
    * @param request DescribeDcdnDomainTrafficDataRequest
    * @return DescribeDcdnDomainTrafficDataResponse
   */
  async describeDcdnDomainTrafficData(request: DescribeDcdnDomainTrafficDataRequest): Promise<DescribeDcdnDomainTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainTrafficDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 10 times per second per account.
    * * Usage data includes traffic (measured in bytes), bandwidth values (measured in bit/s), and the number of requests.
    * **Time granularity**:
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDcdnDomainUsageDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainUsageDataResponse
   */
  async describeDcdnDomainUsageDataWithOptions(request: DescribeDcdnDomainUsageDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainUsageDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.area)) {
      query["Area"] = request.area;
    }

    if (!Util.isUnset(request.dataProtocol)) {
      query["DataProtocol"] = request.dataProtocol;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.field)) {
      query["Field"] = request.field;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainUsageData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainUsageDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainUsageDataResponse({}));
  }

  /**
    * * You can call this operation up to 10 times per second per account.
    * * Usage data includes traffic (measured in bytes), bandwidth values (measured in bit/s), and the number of requests.
    * **Time granularity**:
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDcdnDomainUsageDataRequest
    * @return DescribeDcdnDomainUsageDataResponse
   */
  async describeDcdnDomainUsageData(request: DescribeDcdnDomainUsageDataRequest): Promise<DescribeDcdnDomainUsageDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainUsageDataWithOptions(request, runtime);
  }

  /**
    * ****
    * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * *   You can specify only one accelerated domain name or all the accelerated domain names that belong to your Alibaba Cloud account.
    *
    * @param request DescribeDcdnDomainUvDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainUvDataResponse
   */
  async describeDcdnDomainUvDataWithOptions(request: DescribeDcdnDomainUvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainUvDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

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
      action: "DescribeDcdnDomainUvData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainUvDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainUvDataResponse({}));
  }

  /**
    * ****
    * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * *   You can specify only one accelerated domain name or all the accelerated domain names that belong to your Alibaba Cloud account.
    *
    * @param request DescribeDcdnDomainUvDataRequest
    * @return DescribeDcdnDomainUvDataResponse
   */
  async describeDcdnDomainUvData(request: DescribeDcdnDomainUvDataRequest): Promise<DescribeDcdnDomainUvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainUvDataWithOptions(request, runtime);
  }

  /**
    * #
    * *   You can call this operation up to 100 times per second per account.
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity** The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table. |Time granularity |Maximum time range per query |Historical data available |Data delay | -------------- | -------------- | ------ |5 minutes |3 days |93 days |15 minutes |1 hour |31 days |186 days |4 hours |1 day |366 days |366 days |04:00 on the next day
    *
    * @param request DescribeDcdnDomainWebsocketBpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainWebsocketBpsDataResponse
   */
  async describeDcdnDomainWebsocketBpsDataWithOptions(request: DescribeDcdnDomainWebsocketBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainWebsocketBpsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainWebsocketBpsData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainWebsocketBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainWebsocketBpsDataResponse({}));
  }

  /**
    * #
    * *   You can call this operation up to 100 times per second per account.
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity** The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table. |Time granularity |Maximum time range per query |Historical data available |Data delay | -------------- | -------------- | ------ |5 minutes |3 days |93 days |15 minutes |1 hour |31 days |186 days |4 hours |1 day |366 days |366 days |04:00 on the next day
    *
    * @param request DescribeDcdnDomainWebsocketBpsDataRequest
    * @return DescribeDcdnDomainWebsocketBpsDataResponse
   */
  async describeDcdnDomainWebsocketBpsData(request: DescribeDcdnDomainWebsocketBpsDataRequest): Promise<DescribeDcdnDomainWebsocketBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainWebsocketBpsDataWithOptions(request, runtime);
  }

  /**
    * #
    * You can call this operation up to 100 times per second per account.
    * **Time granularity** The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table. |Time granularity |Maximum time range per query |Historical data available |Data delay | -------------- | -------------- | ------ |5 minutes |3 days |93 days |15 minutes |1 hour |31 days |186 days |4 hours |1 day |366 days |366 days |04:00 on the next day
    *
    * @param request DescribeDcdnDomainWebsocketHttpCodeDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainWebsocketHttpCodeDataResponse
   */
  async describeDcdnDomainWebsocketHttpCodeDataWithOptions(request: DescribeDcdnDomainWebsocketHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainWebsocketHttpCodeDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainWebsocketHttpCodeData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainWebsocketHttpCodeDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainWebsocketHttpCodeDataResponse({}));
  }

  /**
    * #
    * You can call this operation up to 100 times per second per account.
    * **Time granularity** The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table. |Time granularity |Maximum time range per query |Historical data available |Data delay | -------------- | -------------- | ------ |5 minutes |3 days |93 days |15 minutes |1 hour |31 days |186 days |4 hours |1 day |366 days |366 days |04:00 on the next day
    *
    * @param request DescribeDcdnDomainWebsocketHttpCodeDataRequest
    * @return DescribeDcdnDomainWebsocketHttpCodeDataResponse
   */
  async describeDcdnDomainWebsocketHttpCodeData(request: DescribeDcdnDomainWebsocketHttpCodeDataRequest): Promise<DescribeDcdnDomainWebsocketHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainWebsocketHttpCodeDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDcdnDomainWebsocketTrafficDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnDomainWebsocketTrafficDataResponse
   */
  async describeDcdnDomainWebsocketTrafficDataWithOptions(request: DescribeDcdnDomainWebsocketTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainWebsocketTrafficDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnDomainWebsocketTrafficData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnDomainWebsocketTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnDomainWebsocketTrafficDataResponse({}));
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the last 24 hours. If you set both the **StartTime** and **EndTime** parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDcdnDomainWebsocketTrafficDataRequest
    * @return DescribeDcdnDomainWebsocketTrafficDataResponse
   */
  async describeDcdnDomainWebsocketTrafficData(request: DescribeDcdnDomainWebsocketTrafficDataRequest): Promise<DescribeDcdnDomainWebsocketTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainWebsocketTrafficDataWithOptions(request, runtime);
  }

  /**
    * # Usage notes
    * *   You can call this operation up to 10 times per second per account.
    * *   The minimum time granularity for a query is 1 hour. The maximum time span for a query is 24 hours. The time period within which historical data is available for a query is 366 days.
    *
    * @param request DescribeDcdnErUsageDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnErUsageDataResponse
   */
  async describeDcdnErUsageDataWithOptions(request: DescribeDcdnErUsageDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnErUsageDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.routineID)) {
      query["RoutineID"] = request.routineID;
    }

    if (!Util.isUnset(request.spec)) {
      query["Spec"] = request.spec;
    }

    if (!Util.isUnset(request.splitBy)) {
      query["SplitBy"] = request.splitBy;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnErUsageData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnErUsageDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnErUsageDataResponse({}));
  }

  /**
    * # Usage notes
    * *   You can call this operation up to 10 times per second per account.
    * *   The minimum time granularity for a query is 1 hour. The maximum time span for a query is 24 hours. The time period within which historical data is available for a query is 366 days.
    *
    * @param request DescribeDcdnErUsageDataRequest
    * @return DescribeDcdnErUsageDataResponse
   */
  async describeDcdnErUsageData(request: DescribeDcdnErUsageDataRequest): Promise<DescribeDcdnErUsageDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnErUsageDataWithOptions(request, runtime);
  }

  async describeDcdnFullDomainsBlockIPConfigWithOptions(request: DescribeDcdnFullDomainsBlockIPConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnFullDomainsBlockIPConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnFullDomainsBlockIPConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnFullDomainsBlockIPConfigResponse>(await this.callApi(params, req, runtime), new DescribeDcdnFullDomainsBlockIPConfigResponse({}));
  }

  async describeDcdnFullDomainsBlockIPConfig(request: DescribeDcdnFullDomainsBlockIPConfigRequest): Promise<DescribeDcdnFullDomainsBlockIPConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnFullDomainsBlockIPConfigWithOptions(request, runtime);
  }

  async describeDcdnFullDomainsBlockIPHistoryWithOptions(request: DescribeDcdnFullDomainsBlockIPHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnFullDomainsBlockIPHistoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.IPList)) {
      body["IPList"] = request.IPList;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnFullDomainsBlockIPHistory",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnFullDomainsBlockIPHistoryResponse>(await this.callApi(params, req, runtime), new DescribeDcdnFullDomainsBlockIPHistoryResponse({}));
  }

  async describeDcdnFullDomainsBlockIPHistory(request: DescribeDcdnFullDomainsBlockIPHistoryRequest): Promise<DescribeDcdnFullDomainsBlockIPHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnFullDomainsBlockIPHistoryWithOptions(request, runtime);
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DescribeDcdnHttpsDomainListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnHttpsDomainListResponse
   */
  async describeDcdnHttpsDomainListWithOptions(request: DescribeDcdnHttpsDomainListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnHttpsDomainListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
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
      action: "DescribeDcdnHttpsDomainList",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnHttpsDomainListResponse>(await this.callApi(params, req, runtime), new DescribeDcdnHttpsDomainListResponse({}));
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DescribeDcdnHttpsDomainListRequest
    * @return DescribeDcdnHttpsDomainListResponse
   */
  async describeDcdnHttpsDomainList(request: DescribeDcdnHttpsDomainListRequest): Promise<DescribeDcdnHttpsDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnHttpsDomainListWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeDcdnIpInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnIpInfoResponse
   */
  async describeDcdnIpInfoWithOptions(request: DescribeDcdnIpInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnIpInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.IP)) {
      query["IP"] = request.IP;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnIpInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnIpInfoResponse>(await this.callApi(params, req, runtime), new DescribeDcdnIpInfoResponse({}));
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeDcdnIpInfoRequest
    * @return DescribeDcdnIpInfoResponse
   */
  async describeDcdnIpInfo(request: DescribeDcdnIpInfoRequest): Promise<DescribeDcdnIpInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnIpInfoWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnIpaDomainConfigsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnIpaDomainConfigsResponse
   */
  async describeDcdnIpaDomainConfigsWithOptions(request: DescribeDcdnIpaDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnIpaDomainConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnIpaDomainConfigs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnIpaDomainConfigsResponse>(await this.callApi(params, req, runtime), new DescribeDcdnIpaDomainConfigsResponse({}));
  }

  /**
    * > You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnIpaDomainConfigsRequest
    * @return DescribeDcdnIpaDomainConfigsResponse
   */
  async describeDcdnIpaDomainConfigs(request: DescribeDcdnIpaDomainConfigsRequest): Promise<DescribeDcdnIpaDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnIpaDomainConfigsWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnIpaDomainDetailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnIpaDomainDetailResponse
   */
  async describeDcdnIpaDomainDetailWithOptions(request: DescribeDcdnIpaDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnIpaDomainDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnIpaDomainDetail",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnIpaDomainDetailResponse>(await this.callApi(params, req, runtime), new DescribeDcdnIpaDomainDetailResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnIpaDomainDetailRequest
    * @return DescribeDcdnIpaDomainDetailResponse
   */
  async describeDcdnIpaDomainDetail(request: DescribeDcdnIpaDomainDetailRequest): Promise<DescribeDcdnIpaDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnIpaDomainDetailWithOptions(request, runtime);
  }

  /**
    * **
    * **The maximum number of times that each user can call this operation per second is 20.
    *
    * @param request DescribeDcdnIpaServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnIpaServiceResponse
   */
  async describeDcdnIpaServiceWithOptions(request: DescribeDcdnIpaServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnIpaServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnIpaService",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnIpaServiceResponse>(await this.callApi(params, req, runtime), new DescribeDcdnIpaServiceResponse({}));
  }

  /**
    * **
    * **The maximum number of times that each user can call this operation per second is 20.
    *
    * @param request DescribeDcdnIpaServiceRequest
    * @return DescribeDcdnIpaServiceResponse
   */
  async describeDcdnIpaService(request: DescribeDcdnIpaServiceRequest): Promise<DescribeDcdnIpaServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnIpaServiceWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnIpaUserDomainsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnIpaUserDomainsResponse
   */
  async describeDcdnIpaUserDomainsWithOptions(request: DescribeDcdnIpaUserDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnIpaUserDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkDomainShow)) {
      query["CheckDomainShow"] = request.checkDomainShow;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainSearchType)) {
      query["DomainSearchType"] = request.domainSearchType;
    }

    if (!Util.isUnset(request.domainStatus)) {
      query["DomainStatus"] = request.domainStatus;
    }

    if (!Util.isUnset(request.funcFilter)) {
      query["FuncFilter"] = request.funcFilter;
    }

    if (!Util.isUnset(request.funcId)) {
      query["FuncId"] = request.funcId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnIpaUserDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnIpaUserDomainsResponse>(await this.callApi(params, req, runtime), new DescribeDcdnIpaUserDomainsResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnIpaUserDomainsRequest
    * @return DescribeDcdnIpaUserDomainsResponse
   */
  async describeDcdnIpaUserDomains(request: DescribeDcdnIpaUserDomainsRequest): Promise<DescribeDcdnIpaUserDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnIpaUserDomainsWithOptions(request, runtime);
  }

  async describeDcdnL2VipsWithOptions(request: DescribeDcdnL2VipsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnL2VipsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnL2Vips",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnL2VipsResponse>(await this.callApi(params, req, runtime), new DescribeDcdnL2VipsResponse({}));
  }

  async describeDcdnL2Vips(request: DescribeDcdnL2VipsRequest): Promise<DescribeDcdnL2VipsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnL2VipsWithOptions(request, runtime);
  }

  /**
    * >  You can call this API operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnRealTimeDeliveryFieldRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnRealTimeDeliveryFieldResponse
   */
  async describeDcdnRealTimeDeliveryFieldWithOptions(request: DescribeDcdnRealTimeDeliveryFieldRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnRealTimeDeliveryFieldResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnRealTimeDeliveryField",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnRealTimeDeliveryFieldResponse>(await this.callApi(params, req, runtime), new DescribeDcdnRealTimeDeliveryFieldResponse({}));
  }

  /**
    * >  You can call this API operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnRealTimeDeliveryFieldRequest
    * @return DescribeDcdnRealTimeDeliveryFieldResponse
   */
  async describeDcdnRealTimeDeliveryField(request: DescribeDcdnRealTimeDeliveryFieldRequest): Promise<DescribeDcdnRealTimeDeliveryFieldResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnRealTimeDeliveryFieldWithOptions(request, runtime);
  }

  /**
    * > 
    * *   You can call the **RefreshDcdnObjectCaches** operation to refresh content and call the **PreloadDcdnObjectCaches** operation to prefetch content.
    * *   You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnRefreshQuotaRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnRefreshQuotaResponse
   */
  async describeDcdnRefreshQuotaWithOptions(request: DescribeDcdnRefreshQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnRefreshQuotaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnRefreshQuota",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnRefreshQuotaResponse>(await this.callApi(params, req, runtime), new DescribeDcdnRefreshQuotaResponse({}));
  }

  /**
    * > 
    * *   You can call the **RefreshDcdnObjectCaches** operation to refresh content and call the **PreloadDcdnObjectCaches** operation to prefetch content.
    * *   You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnRefreshQuotaRequest
    * @return DescribeDcdnRefreshQuotaResponse
   */
  async describeDcdnRefreshQuota(request: DescribeDcdnRefreshQuotaRequest): Promise<DescribeDcdnRefreshQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnRefreshQuotaWithOptions(request, runtime);
  }

  /**
    * > 
    * *   You can query data within the last three days.
    * *   You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnRefreshTaskByIdRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnRefreshTaskByIdResponse
   */
  async describeDcdnRefreshTaskByIdWithOptions(request: DescribeDcdnRefreshTaskByIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnRefreshTaskByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnRefreshTaskById",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnRefreshTaskByIdResponse>(await this.callApi(params, req, runtime), new DescribeDcdnRefreshTaskByIdResponse({}));
  }

  /**
    * > 
    * *   You can query data within the last three days.
    * *   You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnRefreshTaskByIdRequest
    * @return DescribeDcdnRefreshTaskByIdResponse
   */
  async describeDcdnRefreshTaskById(request: DescribeDcdnRefreshTaskByIdRequest): Promise<DescribeDcdnRefreshTaskByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnRefreshTaskByIdWithOptions(request, runtime);
  }

  /**
    * > 
    * *   You can query the refresh or prefetch tasks by ID or URL.
    * *   You can set both **TaskId** and **ObjectPath** in a request. If you do not set **TaskId** or **ObjectPath**, the data in the last 3 days on the first page is returned. By default, a maximum of 20 entries can be displayed on each page.
    * *   If you specify **DomainName** or **Status**, you must also specify **ObjectType**.
    * *   You can call this operation up to 10 times per second per account.
    *
    * @param request DescribeDcdnRefreshTasksRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnRefreshTasksResponse
   */
  async describeDcdnRefreshTasksWithOptions(request: DescribeDcdnRefreshTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnRefreshTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!Util.isUnset(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnRefreshTasks",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnRefreshTasksResponse>(await this.callApi(params, req, runtime), new DescribeDcdnRefreshTasksResponse({}));
  }

  /**
    * > 
    * *   You can query the refresh or prefetch tasks by ID or URL.
    * *   You can set both **TaskId** and **ObjectPath** in a request. If you do not set **TaskId** or **ObjectPath**, the data in the last 3 days on the first page is returned. By default, a maximum of 20 entries can be displayed on each page.
    * *   If you specify **DomainName** or **Status**, you must also specify **ObjectType**.
    * *   You can call this operation up to 10 times per second per account.
    *
    * @param request DescribeDcdnRefreshTasksRequest
    * @return DescribeDcdnRefreshTasksResponse
   */
  async describeDcdnRefreshTasks(request: DescribeDcdnRefreshTasksRequest): Promise<DescribeDcdnRefreshTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnRefreshTasksWithOptions(request, runtime);
  }

  /**
    * **
    * ****
    *
    * @param request DescribeDcdnRegionAndIspRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnRegionAndIspResponse
   */
  async describeDcdnRegionAndIspWithOptions(request: DescribeDcdnRegionAndIspRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnRegionAndIspResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnRegionAndIsp",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnRegionAndIspResponse>(await this.callApi(params, req, runtime), new DescribeDcdnRegionAndIspResponse({}));
  }

  /**
    * **
    * ****
    *
    * @param request DescribeDcdnRegionAndIspRequest
    * @return DescribeDcdnRegionAndIspResponse
   */
  async describeDcdnRegionAndIsp(request: DescribeDcdnRegionAndIspRequest): Promise<DescribeDcdnRegionAndIspResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnRegionAndIspWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to three times per second per account.
    *
    * @param request DescribeDcdnReportRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnReportResponse
   */
  async describeDcdnReportWithOptions(request: DescribeDcdnReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.area)) {
      query["Area"] = request.area;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.httpCode)) {
      query["HttpCode"] = request.httpCode;
    }

    if (!Util.isUnset(request.isOverseas)) {
      query["IsOverseas"] = request.isOverseas;
    }

    if (!Util.isUnset(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnReport",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnReportResponse>(await this.callApi(params, req, runtime), new DescribeDcdnReportResponse({}));
  }

  /**
    * > You can call this operation up to three times per second per account.
    *
    * @param request DescribeDcdnReportRequest
    * @return DescribeDcdnReportResponse
   */
  async describeDcdnReport(request: DescribeDcdnReportRequest): Promise<DescribeDcdnReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnReportWithOptions(request, runtime);
  }

  /**
    * > 
    * *   This operation queries the metadata of all operations reports. The statistics in the reports are not returned.
    * *   You can call this API operation up to three times per second per account.
    *
    * @param request DescribeDcdnReportListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnReportListResponse
   */
  async describeDcdnReportListWithOptions(request: DescribeDcdnReportListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnReportListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnReportList",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnReportListResponse>(await this.callApi(params, req, runtime), new DescribeDcdnReportListResponse({}));
  }

  /**
    * > 
    * *   This operation queries the metadata of all operations reports. The statistics in the reports are not returned.
    * *   You can call this API operation up to three times per second per account.
    *
    * @param request DescribeDcdnReportListRequest
    * @return DescribeDcdnReportListResponse
   */
  async describeDcdnReportList(request: DescribeDcdnReportListRequest): Promise<DescribeDcdnReportListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnReportListWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnSLSRealtimeLogDeliveryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnSLSRealtimeLogDeliveryResponse
   */
  async describeDcdnSLSRealtimeLogDeliveryWithOptions(request: DescribeDcdnSLSRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnSLSRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnSLSRealtimeLogDelivery",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnSLSRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new DescribeDcdnSLSRealtimeLogDeliveryResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnSLSRealtimeLogDeliveryRequest
    * @return DescribeDcdnSLSRealtimeLogDeliveryResponse
   */
  async describeDcdnSLSRealtimeLogDelivery(request: DescribeDcdnSLSRealtimeLogDeliveryRequest): Promise<DescribeDcdnSLSRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnSLSRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnSMCertificateDetailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnSMCertificateDetailResponse
   */
  async describeDcdnSMCertificateDetailWithOptions(request: DescribeDcdnSMCertificateDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnSMCertificateDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnSMCertificateDetail",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnSMCertificateDetailResponse>(await this.callApi(params, req, runtime), new DescribeDcdnSMCertificateDetailResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnSMCertificateDetailRequest
    * @return DescribeDcdnSMCertificateDetailResponse
   */
  async describeDcdnSMCertificateDetail(request: DescribeDcdnSMCertificateDetailRequest): Promise<DescribeDcdnSMCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnSMCertificateDetailWithOptions(request, runtime);
  }

  /**
    * **
    * ****
    *
    * @param request DescribeDcdnSMCertificateListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnSMCertificateListResponse
   */
  async describeDcdnSMCertificateListWithOptions(request: DescribeDcdnSMCertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnSMCertificateListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnSMCertificateList",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnSMCertificateListResponse>(await this.callApi(params, req, runtime), new DescribeDcdnSMCertificateListResponse({}));
  }

  /**
    * **
    * ****
    *
    * @param request DescribeDcdnSMCertificateListRequest
    * @return DescribeDcdnSMCertificateListResponse
   */
  async describeDcdnSMCertificateList(request: DescribeDcdnSMCertificateListRequest): Promise<DescribeDcdnSMCertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnSMCertificateListWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeDcdnSecFuncInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnSecFuncInfoResponse
   */
  async describeDcdnSecFuncInfoWithOptions(request: DescribeDcdnSecFuncInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnSecFuncInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.secFuncType)) {
      query["SecFuncType"] = request.secFuncType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnSecFuncInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnSecFuncInfoResponse>(await this.callApi(params, req, runtime), new DescribeDcdnSecFuncInfoResponse({}));
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeDcdnSecFuncInfoRequest
    * @return DescribeDcdnSecFuncInfoResponse
   */
  async describeDcdnSecFuncInfo(request: DescribeDcdnSecFuncInfoRequest): Promise<DescribeDcdnSecFuncInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnSecFuncInfoWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeDcdnSecSpecInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnSecSpecInfoResponse
   */
  async describeDcdnSecSpecInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeDcdnSecSpecInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnSecSpecInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnSecSpecInfoResponse>(await this.callApi(params, req, runtime), new DescribeDcdnSecSpecInfoResponse({}));
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @return DescribeDcdnSecSpecInfoResponse
   */
  async describeDcdnSecSpecInfo(): Promise<DescribeDcdnSecSpecInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnSecSpecInfoWithOptions(runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnServiceResponse
   */
  async describeDcdnServiceWithOptions(request: DescribeDcdnServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnService",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnServiceResponse>(await this.callApi(params, req, runtime), new DescribeDcdnServiceResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnServiceRequest
    * @return DescribeDcdnServiceResponse
   */
  async describeDcdnService(request: DescribeDcdnServiceRequest): Promise<DescribeDcdnServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnServiceWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnStagingIpRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnStagingIpResponse
   */
  async describeDcdnStagingIpWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeDcdnStagingIpResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnStagingIp",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnStagingIpResponse>(await this.callApi(params, req, runtime), new DescribeDcdnStagingIpResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @return DescribeDcdnStagingIpResponse
   */
  async describeDcdnStagingIp(): Promise<DescribeDcdnStagingIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnStagingIpWithOptions(runtime);
  }

  /**
    * > 
    * *   By default, this operation queries all custom operations reports. However, only one operations report can be displayed. Therefore, only one operations report is returned.
    * *   You can call this operation up to three times per second per account.
    *
    * @param request DescribeDcdnSubListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnSubListResponse
   */
  async describeDcdnSubListWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeDcdnSubListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnSubList",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnSubListResponse>(await this.callApi(params, req, runtime), new DescribeDcdnSubListResponse({}));
  }

  /**
    * > 
    * *   By default, this operation queries all custom operations reports. However, only one operations report can be displayed. Therefore, only one operations report is returned.
    * *   You can call this operation up to three times per second per account.
    *
    * @return DescribeDcdnSubListResponse
   */
  async describeDcdnSubList(): Promise<DescribeDcdnSubListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnSubListWithOptions(runtime);
  }

  /**
    * > You can call this operation up to 10 times per second per account.
    *
    * @param request DescribeDcdnTagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnTagResourcesResponse
   */
  async describeDcdnTagResourcesWithOptions(request: DescribeDcdnTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnTagResources",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnTagResourcesResponse>(await this.callApi(params, req, runtime), new DescribeDcdnTagResourcesResponse({}));
  }

  /**
    * > You can call this operation up to 10 times per second per account.
    *
    * @param request DescribeDcdnTagResourcesRequest
    * @return DescribeDcdnTagResourcesResponse
   */
  async describeDcdnTagResources(request: DescribeDcdnTagResourcesRequest): Promise<DescribeDcdnTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnTagResourcesWithOptions(request, runtime);
  }

  /**
    * \\*\\*Before you call this operation, pay attention to the following considerations:\\*\\* If you do not specify the StartTime and EndTime parameters, the data within the current month is queried by default. If you specify the StartTime and EndTime parameters, the data within the specified time range is queried.
    *
    * @param request DescribeDcdnTopDomainsByFlowRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnTopDomainsByFlowResponse
   */
  async describeDcdnTopDomainsByFlowWithOptions(request: DescribeDcdnTopDomainsByFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnTopDomainsByFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnTopDomainsByFlow",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnTopDomainsByFlowResponse>(await this.callApi(params, req, runtime), new DescribeDcdnTopDomainsByFlowResponse({}));
  }

  /**
    * \\*\\*Before you call this operation, pay attention to the following considerations:\\*\\* If you do not specify the StartTime and EndTime parameters, the data within the current month is queried by default. If you specify the StartTime and EndTime parameters, the data within the specified time range is queried.
    *
    * @param request DescribeDcdnTopDomainsByFlowRequest
    * @return DescribeDcdnTopDomainsByFlowResponse
   */
  async describeDcdnTopDomainsByFlow(request: DescribeDcdnTopDomainsByFlowRequest): Promise<DescribeDcdnTopDomainsByFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnTopDomainsByFlowWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnUserBillHistoryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnUserBillHistoryResponse
   */
  async describeDcdnUserBillHistoryWithOptions(request: DescribeDcdnUserBillHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserBillHistoryResponse> {
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
      action: "DescribeDcdnUserBillHistory",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnUserBillHistoryResponse>(await this.callApi(params, req, runtime), new DescribeDcdnUserBillHistoryResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnUserBillHistoryRequest
    * @return DescribeDcdnUserBillHistoryResponse
   */
  async describeDcdnUserBillHistory(request: DescribeDcdnUserBillHistoryRequest): Promise<DescribeDcdnUserBillHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserBillHistoryWithOptions(request, runtime);
  }

  async describeDcdnUserBillTypeWithOptions(request: DescribeDcdnUserBillTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserBillTypeResponse> {
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
      action: "DescribeDcdnUserBillType",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnUserBillTypeResponse>(await this.callApi(params, req, runtime), new DescribeDcdnUserBillTypeResponse({}));
  }

  async describeDcdnUserBillType(request: DescribeDcdnUserBillTypeRequest): Promise<DescribeDcdnUserBillTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserBillTypeWithOptions(request, runtime);
  }

  /**
    * # Usage notes
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnUserCertificateExpireCountRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnUserCertificateExpireCountResponse
   */
  async describeDcdnUserCertificateExpireCountWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserCertificateExpireCountResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnUserCertificateExpireCount",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnUserCertificateExpireCountResponse>(await this.callApi(params, req, runtime), new DescribeDcdnUserCertificateExpireCountResponse({}));
  }

  /**
    * # Usage notes
    * > You can call this operation up to 100 times per second per account.
    *
    * @return DescribeDcdnUserCertificateExpireCountResponse
   */
  async describeDcdnUserCertificateExpireCount(): Promise<DescribeDcdnUserCertificateExpireCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserCertificateExpireCountWithOptions(runtime);
  }

  /**
    * You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnUserConfigsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnUserConfigsResponse
   */
  async describeDcdnUserConfigsWithOptions(request: DescribeDcdnUserConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnUserConfigs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnUserConfigsResponse>(await this.callApi(params, req, runtime), new DescribeDcdnUserConfigsResponse({}));
  }

  /**
    * You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDcdnUserConfigsRequest
    * @return DescribeDcdnUserConfigsResponse
   */
  async describeDcdnUserConfigs(request: DescribeDcdnUserConfigsRequest): Promise<DescribeDcdnUserConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserConfigsWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 80 times per second per account.
    *
    * @param request DescribeDcdnUserDomainsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnUserDomainsResponse
   */
  async describeDcdnUserDomainsWithOptions(request: DescribeDcdnUserDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeEndTime)) {
      query["ChangeEndTime"] = request.changeEndTime;
    }

    if (!Util.isUnset(request.changeStartTime)) {
      query["ChangeStartTime"] = request.changeStartTime;
    }

    if (!Util.isUnset(request.checkDomainShow)) {
      query["CheckDomainShow"] = request.checkDomainShow;
    }

    if (!Util.isUnset(request.coverage)) {
      query["Coverage"] = request.coverage;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainSearchType)) {
      query["DomainSearchType"] = request.domainSearchType;
    }

    if (!Util.isUnset(request.domainStatus)) {
      query["DomainStatus"] = request.domainStatus;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnUserDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnUserDomainsResponse>(await this.callApi(params, req, runtime), new DescribeDcdnUserDomainsResponse({}));
  }

  /**
    * > You can call this operation up to 80 times per second per account.
    *
    * @param request DescribeDcdnUserDomainsRequest
    * @return DescribeDcdnUserDomainsResponse
   */
  async describeDcdnUserDomains(request: DescribeDcdnUserDomainsRequest): Promise<DescribeDcdnUserDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserDomainsWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnUserDomainsByFuncRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnUserDomainsByFuncResponse
   */
  async describeDcdnUserDomainsByFuncWithOptions(request: DescribeDcdnUserDomainsByFuncRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserDomainsByFuncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.funcFilter)) {
      query["FuncFilter"] = request.funcFilter;
    }

    if (!Util.isUnset(request.funcId)) {
      query["FuncId"] = request.funcId;
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
      action: "DescribeDcdnUserDomainsByFunc",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnUserDomainsByFuncResponse>(await this.callApi(params, req, runtime), new DescribeDcdnUserDomainsByFuncResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnUserDomainsByFuncRequest
    * @return DescribeDcdnUserDomainsByFuncResponse
   */
  async describeDcdnUserDomainsByFunc(request: DescribeDcdnUserDomainsByFuncRequest): Promise<DescribeDcdnUserDomainsByFuncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserDomainsByFuncWithOptions(request, runtime);
  }

  /**
    * **
    * ****
    *
    * @param request DescribeDcdnUserQuotaRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnUserQuotaResponse
   */
  async describeDcdnUserQuotaWithOptions(request: DescribeDcdnUserQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserQuotaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnUserQuota",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnUserQuotaResponse>(await this.callApi(params, req, runtime), new DescribeDcdnUserQuotaResponse({}));
  }

  /**
    * **
    * ****
    *
    * @param request DescribeDcdnUserQuotaRequest
    * @return DescribeDcdnUserQuotaResponse
   */
  async describeDcdnUserQuota(request: DescribeDcdnUserQuotaRequest): Promise<DescribeDcdnUserQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserQuotaWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnUserRealTimeDeliveryFieldRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnUserRealTimeDeliveryFieldResponse
   */
  async describeDcdnUserRealTimeDeliveryFieldWithOptions(request: DescribeDcdnUserRealTimeDeliveryFieldRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserRealTimeDeliveryFieldResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnUserRealTimeDeliveryField",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnUserRealTimeDeliveryFieldResponse>(await this.callApi(params, req, runtime), new DescribeDcdnUserRealTimeDeliveryFieldResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnUserRealTimeDeliveryFieldRequest
    * @return DescribeDcdnUserRealTimeDeliveryFieldResponse
   */
  async describeDcdnUserRealTimeDeliveryField(request: DescribeDcdnUserRealTimeDeliveryFieldRequest): Promise<DescribeDcdnUserRealTimeDeliveryFieldResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserRealTimeDeliveryFieldWithOptions(request, runtime);
  }

  /**
    * **
    * **The maximum number of times that each user can call this operation per second is 30.
    *
    * @param request DescribeDcdnUserResourcePackageRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnUserResourcePackageResponse
   */
  async describeDcdnUserResourcePackageWithOptions(request: DescribeDcdnUserResourcePackageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserResourcePackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnUserResourcePackage",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnUserResourcePackageResponse>(await this.callApi(params, req, runtime), new DescribeDcdnUserResourcePackageResponse({}));
  }

  /**
    * **
    * **The maximum number of times that each user can call this operation per second is 30.
    *
    * @param request DescribeDcdnUserResourcePackageRequest
    * @return DescribeDcdnUserResourcePackageResponse
   */
  async describeDcdnUserResourcePackage(request: DescribeDcdnUserResourcePackageRequest): Promise<DescribeDcdnUserResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserResourcePackageWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeDcdnUserSecDropRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnUserSecDropResponse
   */
  async describeDcdnUserSecDropWithOptions(request: DescribeDcdnUserSecDropRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserSecDropResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    if (!Util.isUnset(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!Util.isUnset(request.secFunc)) {
      query["SecFunc"] = request.secFunc;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnUserSecDrop",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnUserSecDropResponse>(await this.callApi(params, req, runtime), new DescribeDcdnUserSecDropResponse({}));
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeDcdnUserSecDropRequest
    * @return DescribeDcdnUserSecDropResponse
   */
  async describeDcdnUserSecDrop(request: DescribeDcdnUserSecDropRequest): Promise<DescribeDcdnUserSecDropResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserSecDropWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeDcdnUserSecDropByMinuteRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnUserSecDropByMinuteResponse
   */
  async describeDcdnUserSecDropByMinuteWithOptions(request: DescribeDcdnUserSecDropByMinuteRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserSecDropByMinuteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.object)) {
      query["Object"] = request.object;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.secFunc)) {
      query["SecFunc"] = request.secFunc;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnUserSecDropByMinute",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnUserSecDropByMinuteResponse>(await this.callApi(params, req, runtime), new DescribeDcdnUserSecDropByMinuteResponse({}));
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeDcdnUserSecDropByMinuteRequest
    * @return DescribeDcdnUserSecDropByMinuteResponse
   */
  async describeDcdnUserSecDropByMinute(request: DescribeDcdnUserSecDropByMinuteRequest): Promise<DescribeDcdnUserSecDropByMinuteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserSecDropByMinuteWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnUserTagsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnUserTagsResponse
   */
  async describeDcdnUserTagsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserTagsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnUserTags",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnUserTagsResponse>(await this.callApi(params, req, runtime), new DescribeDcdnUserTagsResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @return DescribeDcdnUserTagsResponse
   */
  async describeDcdnUserTags(): Promise<DescribeDcdnUserTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserTagsWithOptions(runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnVerifyContentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnVerifyContentResponse
   */
  async describeDcdnVerifyContentWithOptions(request: DescribeDcdnVerifyContentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnVerifyContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnVerifyContent",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnVerifyContentResponse>(await this.callApi(params, req, runtime), new DescribeDcdnVerifyContentResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnVerifyContentRequest
    * @return DescribeDcdnVerifyContentResponse
   */
  async describeDcdnVerifyContent(request: DescribeDcdnVerifyContentRequest): Promise<DescribeDcdnVerifyContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnVerifyContentWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeDcdnWafDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnWafDomainResponse
   */
  async describeDcdnWafDomainWithOptions(request: DescribeDcdnWafDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnWafDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnWafDomainResponse>(await this.callApi(params, req, runtime), new DescribeDcdnWafDomainResponse({}));
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeDcdnWafDomainRequest
    * @return DescribeDcdnWafDomainResponse
   */
  async describeDcdnWafDomain(request: DescribeDcdnWafDomainRequest): Promise<DescribeDcdnWafDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafDomainWithOptions(request, runtime);
  }

  /**
    * # Usage notes
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafDomainDetailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnWafDomainDetailResponse
   */
  async describeDcdnWafDomainDetailWithOptions(request: DescribeDcdnWafDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafDomainDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnWafDomainDetail",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnWafDomainDetailResponse>(await this.callApi(params, req, runtime), new DescribeDcdnWafDomainDetailResponse({}));
  }

  /**
    * # Usage notes
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafDomainDetailRequest
    * @return DescribeDcdnWafDomainDetailResponse
   */
  async describeDcdnWafDomainDetail(request: DescribeDcdnWafDomainDetailRequest): Promise<DescribeDcdnWafDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafDomainDetailWithOptions(request, runtime);
  }

  /**
    * #
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafDomainsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnWafDomainsResponse
   */
  async describeDcdnWafDomainsWithOptions(request: DescribeDcdnWafDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryArgs)) {
      query["QueryArgs"] = request.queryArgs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnWafDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnWafDomainsResponse>(await this.callApi(params, req, runtime), new DescribeDcdnWafDomainsResponse({}));
  }

  /**
    * #
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafDomainsRequest
    * @return DescribeDcdnWafDomainsResponse
   */
  async describeDcdnWafDomains(request: DescribeDcdnWafDomainsRequest): Promise<DescribeDcdnWafDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafDomainsWithOptions(request, runtime);
  }

  /**
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafFilterInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnWafFilterInfoResponse
   */
  async describeDcdnWafFilterInfoWithOptions(request: DescribeDcdnWafFilterInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafFilterInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseScenes)) {
      query["DefenseScenes"] = request.defenseScenes;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnWafFilterInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnWafFilterInfoResponse>(await this.callApi(params, req, runtime), new DescribeDcdnWafFilterInfoResponse({}));
  }

  /**
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafFilterInfoRequest
    * @return DescribeDcdnWafFilterInfoResponse
   */
  async describeDcdnWafFilterInfo(request: DescribeDcdnWafFilterInfoRequest): Promise<DescribeDcdnWafFilterInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafFilterInfoWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafGeoInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnWafGeoInfoResponse
   */
  async describeDcdnWafGeoInfoWithOptions(request: DescribeDcdnWafGeoInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafGeoInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnWafGeoInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnWafGeoInfoResponse>(await this.callApi(params, req, runtime), new DescribeDcdnWafGeoInfoResponse({}));
  }

  /**
    * > You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafGeoInfoRequest
    * @return DescribeDcdnWafGeoInfoResponse
   */
  async describeDcdnWafGeoInfo(request: DescribeDcdnWafGeoInfoRequest): Promise<DescribeDcdnWafGeoInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafGeoInfoWithOptions(request, runtime);
  }

  /**
    * > 
    * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * *   The log data is collected every hour.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnWafLogsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnWafLogsResponse
   */
  async describeDcdnWafLogsWithOptions(request: DescribeDcdnWafLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnWafLogs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnWafLogsResponse>(await this.callApi(params, req, runtime), new DescribeDcdnWafLogsResponse({}));
  }

  /**
    * > 
    * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * *   The log data is collected every hour.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDcdnWafLogsRequest
    * @return DescribeDcdnWafLogsResponse
   */
  async describeDcdnWafLogs(request: DescribeDcdnWafLogsRequest): Promise<DescribeDcdnWafLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafLogsWithOptions(request, runtime);
  }

  /**
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafPoliciesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnWafPoliciesResponse
   */
  async describeDcdnWafPoliciesWithOptions(request: DescribeDcdnWafPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryArgs)) {
      query["QueryArgs"] = request.queryArgs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnWafPolicies",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnWafPoliciesResponse>(await this.callApi(params, req, runtime), new DescribeDcdnWafPoliciesResponse({}));
  }

  /**
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafPoliciesRequest
    * @return DescribeDcdnWafPoliciesResponse
   */
  async describeDcdnWafPolicies(request: DescribeDcdnWafPoliciesRequest): Promise<DescribeDcdnWafPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafPoliciesWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnWafPolicyResponse
   */
  async describeDcdnWafPolicyWithOptions(request: DescribeDcdnWafPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnWafPolicy",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnWafPolicyResponse>(await this.callApi(params, req, runtime), new DescribeDcdnWafPolicyResponse({}));
  }

  /**
    * > You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafPolicyRequest
    * @return DescribeDcdnWafPolicyResponse
   */
  async describeDcdnWafPolicy(request: DescribeDcdnWafPolicyRequest): Promise<DescribeDcdnWafPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafPolicyWithOptions(request, runtime);
  }

  /**
    * You can call this operation up to 20 times per second per user.
    *
    * @param request DescribeDcdnWafPolicyDomainsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnWafPolicyDomainsResponse
   */
  async describeDcdnWafPolicyDomainsWithOptions(request: DescribeDcdnWafPolicyDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafPolicyDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnWafPolicyDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnWafPolicyDomainsResponse>(await this.callApi(params, req, runtime), new DescribeDcdnWafPolicyDomainsResponse({}));
  }

  /**
    * You can call this operation up to 20 times per second per user.
    *
    * @param request DescribeDcdnWafPolicyDomainsRequest
    * @return DescribeDcdnWafPolicyDomainsResponse
   */
  async describeDcdnWafPolicyDomains(request: DescribeDcdnWafPolicyDomainsRequest): Promise<DescribeDcdnWafPolicyDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafPolicyDomainsWithOptions(request, runtime);
  }

  /**
    * #
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafPolicyValidDomainsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnWafPolicyValidDomainsResponse
   */
  async describeDcdnWafPolicyValidDomainsWithOptions(request: DescribeDcdnWafPolicyValidDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafPolicyValidDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!Util.isUnset(request.domainNameLike)) {
      query["DomainNameLike"] = request.domainNameLike;
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
      action: "DescribeDcdnWafPolicyValidDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnWafPolicyValidDomainsResponse>(await this.callApi(params, req, runtime), new DescribeDcdnWafPolicyValidDomainsResponse({}));
  }

  /**
    * #
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafPolicyValidDomainsRequest
    * @return DescribeDcdnWafPolicyValidDomainsResponse
   */
  async describeDcdnWafPolicyValidDomains(request: DescribeDcdnWafPolicyValidDomainsRequest): Promise<DescribeDcdnWafPolicyValidDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafPolicyValidDomainsWithOptions(request, runtime);
  }

  /**
    * #
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnWafRuleResponse
   */
  async describeDcdnWafRuleWithOptions(request: DescribeDcdnWafRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnWafRule",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnWafRuleResponse>(await this.callApi(params, req, runtime), new DescribeDcdnWafRuleResponse({}));
  }

  /**
    * #
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafRuleRequest
    * @return DescribeDcdnWafRuleResponse
   */
  async describeDcdnWafRule(request: DescribeDcdnWafRuleRequest): Promise<DescribeDcdnWafRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafRuleWithOptions(request, runtime);
  }

  /**
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnWafRulesResponse
   */
  async describeDcdnWafRulesWithOptions(request: DescribeDcdnWafRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryArgs)) {
      query["QueryArgs"] = request.queryArgs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnWafRules",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnWafRulesResponse>(await this.callApi(params, req, runtime), new DescribeDcdnWafRulesResponse({}));
  }

  /**
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafRulesRequest
    * @return DescribeDcdnWafRulesResponse
   */
  async describeDcdnWafRules(request: DescribeDcdnWafRulesRequest): Promise<DescribeDcdnWafRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafRulesWithOptions(request, runtime);
  }

  /**
    * You can call this operation up to 20 times per second per user.
    *
    * @param request DescribeDcdnWafScenesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnWafScenesResponse
   */
  async describeDcdnWafScenesWithOptions(request: DescribeDcdnWafScenesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafScenesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseScenes)) {
      query["DefenseScenes"] = request.defenseScenes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnWafScenes",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnWafScenesResponse>(await this.callApi(params, req, runtime), new DescribeDcdnWafScenesResponse({}));
  }

  /**
    * You can call this operation up to 20 times per second per user.
    *
    * @param request DescribeDcdnWafScenesRequest
    * @return DescribeDcdnWafScenesResponse
   */
  async describeDcdnWafScenes(request: DescribeDcdnWafScenesRequest): Promise<DescribeDcdnWafScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafScenesWithOptions(request, runtime);
  }

  /**
    * # Usage notes
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnWafServiceResponse
   */
  async describeDcdnWafServiceWithOptions(request: DescribeDcdnWafServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnWafService",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnWafServiceResponse>(await this.callApi(params, req, runtime), new DescribeDcdnWafServiceResponse({}));
  }

  /**
    * # Usage notes
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafServiceRequest
    * @return DescribeDcdnWafServiceResponse
   */
  async describeDcdnWafService(request: DescribeDcdnWafServiceRequest): Promise<DescribeDcdnWafServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafServiceWithOptions(request, runtime);
  }

  /**
    * You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnWafSpecInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnWafSpecInfoResponse
   */
  async describeDcdnWafSpecInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafSpecInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnWafSpecInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnWafSpecInfoResponse>(await this.callApi(params, req, runtime), new DescribeDcdnWafSpecInfoResponse({}));
  }

  /**
    * You can call this operation up to 20 times per second per account.
    *
    * @return DescribeDcdnWafSpecInfoResponse
   */
  async describeDcdnWafSpecInfo(): Promise<DescribeDcdnWafSpecInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafSpecInfoWithOptions(runtime);
  }

  /**
    * >*   You can call this operation up to 10 times per second per account.
    * *   The minimum time granularity for a query is 5 minutes. The maximum time span for a query is 31 days. The time period within which historical data is available for a query is 90 days.
    *
    * @param request DescribeDcdnWafUsageDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnWafUsageDataResponse
   */
  async describeDcdnWafUsageDataWithOptions(request: DescribeDcdnWafUsageDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafUsageDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.splitBy)) {
      query["SplitBy"] = request.splitBy;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnWafUsageData",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnWafUsageDataResponse>(await this.callApi(params, req, runtime), new DescribeDcdnWafUsageDataResponse({}));
  }

  /**
    * >*   You can call this operation up to 10 times per second per account.
    * *   The minimum time granularity for a query is 5 minutes. The maximum time span for a query is 31 days. The time period within which historical data is available for a query is 90 days.
    *
    * @param request DescribeDcdnWafUsageDataRequest
    * @return DescribeDcdnWafUsageDataResponse
   */
  async describeDcdnWafUsageData(request: DescribeDcdnWafUsageDataRequest): Promise<DescribeDcdnWafUsageDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafUsageDataWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnsecServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDcdnsecServiceResponse
   */
  async describeDcdnsecServiceWithOptions(request: DescribeDcdnsecServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnsecServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDcdnsecService",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDcdnsecServiceResponse>(await this.callApi(params, req, runtime), new DescribeDcdnsecServiceResponse({}));
  }

  /**
    * > You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDcdnsecServiceRequest
    * @return DescribeDcdnsecServiceResponse
   */
  async describeDcdnsecService(request: DescribeDcdnsecServiceRequest): Promise<DescribeDcdnsecServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnsecServiceWithOptions(request, runtime);
  }

  async describeRDDomainConfigWithOptions(request: DescribeRDDomainConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRDDomainConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRDDomainConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRDDomainConfigResponse>(await this.callApi(params, req, runtime), new DescribeRDDomainConfigResponse({}));
  }

  async describeRDDomainConfig(request: DescribeRDDomainConfigRequest): Promise<DescribeRDDomainConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRDDomainConfigWithOptions(request, runtime);
  }

  /**
    * A domain name can be in one of the following states:
    * *   online
    * *   offline
    * *   configuring
    * *   configure_failed
    * *   checking
    * *   check_failed
    *
    * @param request DescribeRDDomainsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRDDomainsResponse
   */
  async describeRDDomainsWithOptions(request: DescribeRDDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRDDomainsResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "DescribeRDDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRDDomainsResponse>(await this.callApi(params, req, runtime), new DescribeRDDomainsResponse({}));
  }

  /**
    * A domain name can be in one of the following states:
    * *   online
    * *   offline
    * *   configuring
    * *   configure_failed
    * *   checking
    * *   check_failed
    *
    * @param request DescribeRDDomainsRequest
    * @return DescribeRDDomainsResponse
   */
  async describeRDDomains(request: DescribeRDDomainsRequest): Promise<DescribeRDDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRDDomainsWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeRoutineRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRoutineResponse
   */
  async describeRoutineWithOptions(request: DescribeRoutineRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRoutineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRoutine",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRoutineResponse>(await this.callApi(params, req, runtime), new DescribeRoutineResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeRoutineRequest
    * @return DescribeRoutineResponse
   */
  async describeRoutine(request: DescribeRoutineRequest): Promise<DescribeRoutineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRoutineWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeRoutineCanaryEnvsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRoutineCanaryEnvsResponse
   */
  async describeRoutineCanaryEnvsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRoutineCanaryEnvsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeRoutineCanaryEnvs",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRoutineCanaryEnvsResponse>(await this.callApi(params, req, runtime), new DescribeRoutineCanaryEnvsResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @return DescribeRoutineCanaryEnvsResponse
   */
  async describeRoutineCanaryEnvs(): Promise<DescribeRoutineCanaryEnvsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRoutineCanaryEnvsWithOptions(runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeRoutineCodeRevisionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRoutineCodeRevisionResponse
   */
  async describeRoutineCodeRevisionWithOptions(request: DescribeRoutineCodeRevisionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRoutineCodeRevisionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.selectCodeRevision)) {
      body["SelectCodeRevision"] = request.selectCodeRevision;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRoutineCodeRevision",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRoutineCodeRevisionResponse>(await this.callApi(params, req, runtime), new DescribeRoutineCodeRevisionResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeRoutineCodeRevisionRequest
    * @return DescribeRoutineCodeRevisionResponse
   */
  async describeRoutineCodeRevision(request: DescribeRoutineCodeRevisionRequest): Promise<DescribeRoutineCodeRevisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRoutineCodeRevisionWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeRoutineSpecRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRoutineSpecResponse
   */
  async describeRoutineSpecWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRoutineSpecResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeRoutineSpec",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRoutineSpecResponse>(await this.callApi(params, req, runtime), new DescribeRoutineSpecResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @return DescribeRoutineSpecResponse
   */
  async describeRoutineSpec(): Promise<DescribeRoutineSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRoutineSpecWithOptions(runtime);
  }

  /**
    * >  You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeRoutineUserInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRoutineUserInfoResponse
   */
  async describeRoutineUserInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRoutineUserInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeRoutineUserInfo",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRoutineUserInfoResponse>(await this.callApi(params, req, runtime), new DescribeRoutineUserInfoResponse({}));
  }

  /**
    * >  You can call this operation up to 100 times per second per account.
    *
    * @return DescribeRoutineUserInfoResponse
   */
  async describeRoutineUserInfo(): Promise<DescribeRoutineUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRoutineUserInfoWithOptions(runtime);
  }

  /**
    * **
    * **The maximum number of times that each user can call this operation per second is 20.
    *
    * @param request DescribeUserDcdnIpaStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeUserDcdnIpaStatusResponse
   */
  async describeUserDcdnIpaStatusWithOptions(request: DescribeUserDcdnIpaStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserDcdnIpaStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserDcdnIpaStatus",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserDcdnIpaStatusResponse>(await this.callApi(params, req, runtime), new DescribeUserDcdnIpaStatusResponse({}));
  }

  /**
    * **
    * **The maximum number of times that each user can call this operation per second is 20.
    *
    * @param request DescribeUserDcdnIpaStatusRequest
    * @return DescribeUserDcdnIpaStatusResponse
   */
  async describeUserDcdnIpaStatus(request: DescribeUserDcdnIpaStatusRequest): Promise<DescribeUserDcdnIpaStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserDcdnIpaStatusWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeUserDcdnStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeUserDcdnStatusResponse
   */
  async describeUserDcdnStatusWithOptions(request: DescribeUserDcdnStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserDcdnStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserDcdnStatus",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserDcdnStatusResponse>(await this.callApi(params, req, runtime), new DescribeUserDcdnStatusResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeUserDcdnStatusRequest
    * @return DescribeUserDcdnStatusResponse
   */
  async describeUserDcdnStatus(request: DescribeUserDcdnStatusRequest): Promise<DescribeUserDcdnStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserDcdnStatusWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeUserErStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeUserErStatusResponse
   */
  async describeUserErStatusWithOptions(request: DescribeUserErStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserErStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserErStatus",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserErStatusResponse>(await this.callApi(params, req, runtime), new DescribeUserErStatusResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeUserErStatusRequest
    * @return DescribeUserErStatusResponse
   */
  async describeUserErStatus(request: DescribeUserErStatusRequest): Promise<DescribeUserErStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserErStatusWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeUserLogserviceStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeUserLogserviceStatusResponse
   */
  async describeUserLogserviceStatusWithOptions(request: DescribeUserLogserviceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserLogserviceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserLogserviceStatus",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserLogserviceStatusResponse>(await this.callApi(params, req, runtime), new DescribeUserLogserviceStatusResponse({}));
  }

  /**
    * > You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeUserLogserviceStatusRequest
    * @return DescribeUserLogserviceStatusResponse
   */
  async describeUserLogserviceStatus(request: DescribeUserLogserviceStatusRequest): Promise<DescribeUserLogserviceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserLogserviceStatusWithOptions(request, runtime);
  }

  /**
    * > 
    * *   This operation modifies only the specified configurations. Other configurations remain unchanged.
    * *   If you want to delete a setting, delete the parameter value.
    * *   This operation can add canary release environments. Make sure that the environment names comply with the naming rules. Otherwise, you will fail to add the environments.
    * *   Dynamic Route for CDN (DCDN) provides 35 canary release environments. Among these environments, 34 are deployed in China and 1 is deployed outside China. The canary release environments are:
    *     *   Outside China: presetCanaryOverseas.
    *     *   In China: The 34 canary release environments are named in the format of presetCanaryXX. For example, presetCanaryBeijing represents the canary release environment in Beijing. A canary release environment is in each of the following regions: Anhui, Beijing, Chongqing, Fujian, Gansu, Guangdong, Guangxi, Guizhou, Hainan, Hebei, Heilongjiang, Henan, Hong Kong, Hubei, Hunan, Jiangsu, Jiangxi, Jilin, Liaoning, Macao, Neimenggu, Ningxia, Qinghai, Shaanxi, Shandong, Shanghai, Shanxi, Sichuan, Taiwan, Tianjin, Xinjiang, Xizang, Yunan, and Zhejiang.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param tmpReq EditRoutineConfRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EditRoutineConfResponse
   */
  async editRoutineConfWithOptions(tmpReq: EditRoutineConfRequest, runtime: $Util.RuntimeOptions): Promise<EditRoutineConfResponse> {
    Util.validateModel(tmpReq);
    let request = new EditRoutineConfShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.envConf)) {
      request.envConfShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.envConf, "EnvConf", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.envConfShrink)) {
      body["EnvConf"] = request.envConfShrink;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EditRoutineConf",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EditRoutineConfResponse>(await this.callApi(params, req, runtime), new EditRoutineConfResponse({}));
  }

  /**
    * > 
    * *   This operation modifies only the specified configurations. Other configurations remain unchanged.
    * *   If you want to delete a setting, delete the parameter value.
    * *   This operation can add canary release environments. Make sure that the environment names comply with the naming rules. Otherwise, you will fail to add the environments.
    * *   Dynamic Route for CDN (DCDN) provides 35 canary release environments. Among these environments, 34 are deployed in China and 1 is deployed outside China. The canary release environments are:
    *     *   Outside China: presetCanaryOverseas.
    *     *   In China: The 34 canary release environments are named in the format of presetCanaryXX. For example, presetCanaryBeijing represents the canary release environment in Beijing. A canary release environment is in each of the following regions: Anhui, Beijing, Chongqing, Fujian, Gansu, Guangdong, Guangxi, Guizhou, Hainan, Hebei, Heilongjiang, Henan, Hong Kong, Hubei, Hunan, Jiangsu, Jiangxi, Jilin, Liaoning, Macao, Neimenggu, Ningxia, Qinghai, Shaanxi, Shandong, Shanghai, Shanxi, Sichuan, Taiwan, Tianjin, Xinjiang, Xizang, Yunan, and Zhejiang.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request EditRoutineConfRequest
    * @return EditRoutineConfResponse
   */
  async editRoutineConf(request: EditRoutineConfRequest): Promise<EditRoutineConfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editRoutineConfWithOptions(request, runtime);
  }

  async getDcdnKvWithOptions(request: GetDcdnKvRequest, runtime: $Util.RuntimeOptions): Promise<GetDcdnKvResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDcdnKv",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDcdnKvResponse>(await this.callApi(params, req, runtime), new GetDcdnKvResponse({}));
  }

  async getDcdnKv(request: GetDcdnKvRequest): Promise<GetDcdnKvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDcdnKvWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request ListDcdnRealTimeDeliveryProjectRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDcdnRealTimeDeliveryProjectResponse
   */
  async listDcdnRealTimeDeliveryProjectWithOptions(request: ListDcdnRealTimeDeliveryProjectRequest, runtime: $Util.RuntimeOptions): Promise<ListDcdnRealTimeDeliveryProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
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
      action: "ListDcdnRealTimeDeliveryProject",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDcdnRealTimeDeliveryProjectResponse>(await this.callApi(params, req, runtime), new ListDcdnRealTimeDeliveryProjectResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request ListDcdnRealTimeDeliveryProjectRequest
    * @return ListDcdnRealTimeDeliveryProjectResponse
   */
  async listDcdnRealTimeDeliveryProject(request: ListDcdnRealTimeDeliveryProjectRequest): Promise<ListDcdnRealTimeDeliveryProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDcdnRealTimeDeliveryProjectWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request ModifyDCdnDomainSchdmByPropertyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDCdnDomainSchdmByPropertyResponse
   */
  async modifyDCdnDomainSchdmByPropertyWithOptions(request: ModifyDCdnDomainSchdmByPropertyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDCdnDomainSchdmByPropertyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.property)) {
      query["Property"] = request.property;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDCdnDomainSchdmByProperty",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDCdnDomainSchdmByPropertyResponse>(await this.callApi(params, req, runtime), new ModifyDCdnDomainSchdmByPropertyResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request ModifyDCdnDomainSchdmByPropertyRequest
    * @return ModifyDCdnDomainSchdmByPropertyResponse
   */
  async modifyDCdnDomainSchdmByProperty(request: ModifyDCdnDomainSchdmByPropertyRequest): Promise<ModifyDCdnDomainSchdmByPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDCdnDomainSchdmByPropertyWithOptions(request, runtime);
  }

  /**
    * #
    * *   You can call this operation up to 20 times per second per account.
    * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
    *
    * @param request ModifyDcdnWafPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDcdnWafPolicyResponse
   */
  async modifyDcdnWafPolicyWithOptions(request: ModifyDcdnWafPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDcdnWafPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.policyName)) {
      body["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.policyStatus)) {
      body["PolicyStatus"] = request.policyStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDcdnWafPolicy",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDcdnWafPolicyResponse>(await this.callApi(params, req, runtime), new ModifyDcdnWafPolicyResponse({}));
  }

  /**
    * #
    * *   You can call this operation up to 20 times per second per account.
    * *   Alibaba Cloud Dynamic Content Delivery Network (DCDN) supports POST requests.
    *
    * @param request ModifyDcdnWafPolicyRequest
    * @return ModifyDcdnWafPolicyResponse
   */
  async modifyDcdnWafPolicy(request: ModifyDcdnWafPolicyRequest): Promise<ModifyDcdnWafPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDcdnWafPolicyWithOptions(request, runtime);
  }

  /**
    * # Usage notes
    * *   You can call this operation up to 20 times per second per account.
    * *   Alibaba Cloud Dynamic Route for CDN (DCDN) supports POST requests.
    *
    * @param request ModifyDcdnWafPolicyDomainsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDcdnWafPolicyDomainsResponse
   */
  async modifyDcdnWafPolicyDomainsWithOptions(request: ModifyDcdnWafPolicyDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDcdnWafPolicyDomainsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bindDomains)) {
      body["BindDomains"] = request.bindDomains;
    }

    if (!Util.isUnset(request.method)) {
      body["Method"] = request.method;
    }

    if (!Util.isUnset(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.unbindDomains)) {
      body["UnbindDomains"] = request.unbindDomains;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDcdnWafPolicyDomains",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDcdnWafPolicyDomainsResponse>(await this.callApi(params, req, runtime), new ModifyDcdnWafPolicyDomainsResponse({}));
  }

  /**
    * # Usage notes
    * *   You can call this operation up to 20 times per second per account.
    * *   Alibaba Cloud Dynamic Route for CDN (DCDN) supports POST requests.
    *
    * @param request ModifyDcdnWafPolicyDomainsRequest
    * @return ModifyDcdnWafPolicyDomainsResponse
   */
  async modifyDcdnWafPolicyDomains(request: ModifyDcdnWafPolicyDomainsRequest): Promise<ModifyDcdnWafPolicyDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDcdnWafPolicyDomainsWithOptions(request, runtime);
  }

  /**
    * #
    * *   You can call this operation up to 20 times per second.
    * *   Alibaba Cloud Dynamic Route for CDN (DCDN) supports POST requests.
    * *   You must configure at least one of the **RuleStatus**, **RuleName** and **RuleConfig** parameters.
    *
    * @param request ModifyDcdnWafRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDcdnWafRuleResponse
   */
  async modifyDcdnWafRuleWithOptions(request: ModifyDcdnWafRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDcdnWafRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ruleConfig)) {
      body["RuleConfig"] = request.ruleConfig;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.ruleStatus)) {
      body["RuleStatus"] = request.ruleStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDcdnWafRule",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDcdnWafRuleResponse>(await this.callApi(params, req, runtime), new ModifyDcdnWafRuleResponse({}));
  }

  /**
    * #
    * *   You can call this operation up to 20 times per second.
    * *   Alibaba Cloud Dynamic Route for CDN (DCDN) supports POST requests.
    * *   You must configure at least one of the **RuleStatus**, **RuleName** and **RuleConfig** parameters.
    *
    * @param request ModifyDcdnWafRuleRequest
    * @return ModifyDcdnWafRuleResponse
   */
  async modifyDcdnWafRule(request: ModifyDcdnWafRuleRequest): Promise<ModifyDcdnWafRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDcdnWafRuleWithOptions(request, runtime);
  }

  /**
    * OpenDcdnService
    *
    * @param request OpenDcdnServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OpenDcdnServiceResponse
   */
  async openDcdnServiceWithOptions(request: OpenDcdnServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenDcdnServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billType)) {
      query["BillType"] = request.billType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.websocketBillType)) {
      query["WebsocketBillType"] = request.websocketBillType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenDcdnService",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenDcdnServiceResponse>(await this.callApi(params, req, runtime), new OpenDcdnServiceResponse({}));
  }

  /**
    * OpenDcdnService
    *
    * @param request OpenDcdnServiceRequest
    * @return OpenDcdnServiceResponse
   */
  async openDcdnService(request: OpenDcdnServiceRequest): Promise<OpenDcdnServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openDcdnServiceWithOptions(request, runtime);
  }

  /**
    * #
    * *   You can call the [RefreshDcdnObjectCaches](~~130620~~) operation to refresh content and call the [PreloadDcdnObjectCaches](~~130636~~) operation to prefetch content.
    * *   Dynamic Content Delivery Network (DCDN) supports POST requests in which parameters are sent as a form.
    * *   By default, each Alibaba Cloud account can submit up to 1,000 URLs per day. If the daily peak bandwidth value of your workloads exceeds 200 Mbit/s, you can [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//ticket-intl.console.aliyun.com/%23/ticket/createIndex) to increase your daily quota. Alibaba Cloud reviews your application and then increases the quota accordingly.
    * *   You can specify at most 100 URLs in each prefetch request.
    * *   The prefetch queue of each Alibaba Cloud account can contain up to 50,000 URLs. DCDN executes prefetch tasks based on the time at which you submit the URLs.
    * *   You can call this operation up to 15 times per second per account.
    * # Usage notes
    * *   After a refresh task is submitted and completed, the POPs immediately start to retrieve resources from the origin server. Therefore, a large number of refresh tasks cause a large number of concurrent download tasks. This increases the number of requests that are redirected to the origin server. The back-to-origin routing process consumes more bandwidth resources and the origin server may be overwhelmed.
    * *   The time required for a prefetch task to complete is proportional to the size of the prefetched file. In actual practice, most prefetch tasks require 5 to 30 minutes to complete. A task with a smaller average file size requires less time.
    * *   To allow RAM users to perform this operation, you need to first grant them the required permissions. For more information, see [Authorize a RAM user to prefetch and refresh resources](~~445051~~).
    *
    * @param request PreloadDcdnObjectCachesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PreloadDcdnObjectCachesResponse
   */
  async preloadDcdnObjectCachesWithOptions(request: PreloadDcdnObjectCachesRequest, runtime: $Util.RuntimeOptions): Promise<PreloadDcdnObjectCachesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.area)) {
      query["Area"] = request.area;
    }

    if (!Util.isUnset(request.l2Preload)) {
      query["L2Preload"] = request.l2Preload;
    }

    if (!Util.isUnset(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.withHeader)) {
      query["WithHeader"] = request.withHeader;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PreloadDcdnObjectCaches",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PreloadDcdnObjectCachesResponse>(await this.callApi(params, req, runtime), new PreloadDcdnObjectCachesResponse({}));
  }

  /**
    * #
    * *   You can call the [RefreshDcdnObjectCaches](~~130620~~) operation to refresh content and call the [PreloadDcdnObjectCaches](~~130636~~) operation to prefetch content.
    * *   Dynamic Content Delivery Network (DCDN) supports POST requests in which parameters are sent as a form.
    * *   By default, each Alibaba Cloud account can submit up to 1,000 URLs per day. If the daily peak bandwidth value of your workloads exceeds 200 Mbit/s, you can [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//ticket-intl.console.aliyun.com/%23/ticket/createIndex) to increase your daily quota. Alibaba Cloud reviews your application and then increases the quota accordingly.
    * *   You can specify at most 100 URLs in each prefetch request.
    * *   The prefetch queue of each Alibaba Cloud account can contain up to 50,000 URLs. DCDN executes prefetch tasks based on the time at which you submit the URLs.
    * *   You can call this operation up to 15 times per second per account.
    * # Usage notes
    * *   After a refresh task is submitted and completed, the POPs immediately start to retrieve resources from the origin server. Therefore, a large number of refresh tasks cause a large number of concurrent download tasks. This increases the number of requests that are redirected to the origin server. The back-to-origin routing process consumes more bandwidth resources and the origin server may be overwhelmed.
    * *   The time required for a prefetch task to complete is proportional to the size of the prefetched file. In actual practice, most prefetch tasks require 5 to 30 minutes to complete. A task with a smaller average file size requires less time.
    * *   To allow RAM users to perform this operation, you need to first grant them the required permissions. For more information, see [Authorize a RAM user to prefetch and refresh resources](~~445051~~).
    *
    * @param request PreloadDcdnObjectCachesRequest
    * @return PreloadDcdnObjectCachesResponse
   */
  async preloadDcdnObjectCaches(request: PreloadDcdnObjectCachesRequest): Promise<PreloadDcdnObjectCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.preloadDcdnObjectCachesWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request PublishDcdnStagingConfigToProductionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PublishDcdnStagingConfigToProductionResponse
   */
  async publishDcdnStagingConfigToProductionWithOptions(request: PublishDcdnStagingConfigToProductionRequest, runtime: $Util.RuntimeOptions): Promise<PublishDcdnStagingConfigToProductionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PublishDcdnStagingConfigToProduction",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishDcdnStagingConfigToProductionResponse>(await this.callApi(params, req, runtime), new PublishDcdnStagingConfigToProductionResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request PublishDcdnStagingConfigToProductionRequest
    * @return PublishDcdnStagingConfigToProductionResponse
   */
  async publishDcdnStagingConfigToProduction(request: PublishDcdnStagingConfigToProductionRequest): Promise<PublishDcdnStagingConfigToProductionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishDcdnStagingConfigToProductionWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param tmpReq PublishRoutineCodeRevisionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PublishRoutineCodeRevisionResponse
   */
  async publishRoutineCodeRevisionWithOptions(tmpReq: PublishRoutineCodeRevisionRequest, runtime: $Util.RuntimeOptions): Promise<PublishRoutineCodeRevisionResponse> {
    Util.validateModel(tmpReq);
    let request = new PublishRoutineCodeRevisionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.envs)) {
      request.envsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.envs, "Envs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envsShrink)) {
      body["Envs"] = request.envsShrink;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.selectCodeRevision)) {
      body["SelectCodeRevision"] = request.selectCodeRevision;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublishRoutineCodeRevision",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishRoutineCodeRevisionResponse>(await this.callApi(params, req, runtime), new PublishRoutineCodeRevisionResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request PublishRoutineCodeRevisionRequest
    * @return PublishRoutineCodeRevisionResponse
   */
  async publishRoutineCodeRevision(request: PublishRoutineCodeRevisionRequest): Promise<PublishRoutineCodeRevisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishRoutineCodeRevisionWithOptions(request, runtime);
  }

  async putDcdnKvWithOptions(request: PutDcdnKvRequest, runtime: $Util.RuntimeOptions): Promise<PutDcdnKvResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.expirationTtl)) {
      query["ExpirationTtl"] = request.expirationTtl;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutDcdnKv",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutDcdnKvResponse>(await this.callApi(params, req, runtime), new PutDcdnKvResponse({}));
  }

  async putDcdnKv(request: PutDcdnKvRequest): Promise<PutDcdnKvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putDcdnKvWithOptions(request, runtime);
  }

  /**
    * #
    * *   DCDN supports POST requests in which parameters are sent as a form.
    * *   You can call the [RefreshDcdnObjectCaches](~~130620~~) operation to refresh content and call the [PreloadDcdnObjectCaches](~~130636~~) operation to prefetch content.
    * *   By default, each Alibaba Cloud account can refresh content from a maximum of 10,000 URLs and 100 directories per day, including subdirectories. If the daily peak bandwidth value exceeds 200 Mbit/s, you can [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//ticket-intl.console.aliyun.com/%23/ticket/createIndex) to request a quota increase. DCDN evaluates your application based on your workloads.
    * *   You can specify up to 1,000 URLs or 100 directories that you want to refresh in each request.
    * *   You can refresh up to 1,000 URLs per minute for each domain name.
    * *   You can call this operation up to 30 times per second per account.
    * # Precautions
    * *   After a refresh task is submitted and completed, your resources that are stored on DCDN POPs are removed. When a POP receives a request to your resources, the request is redirected to the origin server to retrieve the resources. Then, the resources are returned to the client and cached on the POP. If you frequently run refresh tasks, more requests will be redirected back to the origin server for resources, which result in high bandwidth costs and undue pressure on the origin server.
    * *   A refresh task takes effect 5 to 6 minutes after being submitted. This means that if the resource you want to refresh has a TTL of less than five minutes, you wait for it to expire instead of manually running a refresh task.
    * *   If you want to use RAM users to refresh or prefetch resources, you need to obtain the required permissions. For more information, see [Authorize a RAM user to prefetch and refresh resources](~~445051~~).
    *
    * @param request RefreshDcdnObjectCachesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RefreshDcdnObjectCachesResponse
   */
  async refreshDcdnObjectCachesWithOptions(request: RefreshDcdnObjectCachesRequest, runtime: $Util.RuntimeOptions): Promise<RefreshDcdnObjectCachesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!Util.isUnset(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshDcdnObjectCaches",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshDcdnObjectCachesResponse>(await this.callApi(params, req, runtime), new RefreshDcdnObjectCachesResponse({}));
  }

  /**
    * #
    * *   DCDN supports POST requests in which parameters are sent as a form.
    * *   You can call the [RefreshDcdnObjectCaches](~~130620~~) operation to refresh content and call the [PreloadDcdnObjectCaches](~~130636~~) operation to prefetch content.
    * *   By default, each Alibaba Cloud account can refresh content from a maximum of 10,000 URLs and 100 directories per day, including subdirectories. If the daily peak bandwidth value exceeds 200 Mbit/s, you can [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//ticket-intl.console.aliyun.com/%23/ticket/createIndex) to request a quota increase. DCDN evaluates your application based on your workloads.
    * *   You can specify up to 1,000 URLs or 100 directories that you want to refresh in each request.
    * *   You can refresh up to 1,000 URLs per minute for each domain name.
    * *   You can call this operation up to 30 times per second per account.
    * # Precautions
    * *   After a refresh task is submitted and completed, your resources that are stored on DCDN POPs are removed. When a POP receives a request to your resources, the request is redirected to the origin server to retrieve the resources. Then, the resources are returned to the client and cached on the POP. If you frequently run refresh tasks, more requests will be redirected back to the origin server for resources, which result in high bandwidth costs and undue pressure on the origin server.
    * *   A refresh task takes effect 5 to 6 minutes after being submitted. This means that if the resource you want to refresh has a TTL of less than five minutes, you wait for it to expire instead of manually running a refresh task.
    * *   If you want to use RAM users to refresh or prefetch resources, you need to obtain the required permissions. For more information, see [Authorize a RAM user to prefetch and refresh resources](~~445051~~).
    *
    * @param request RefreshDcdnObjectCachesRequest
    * @return RefreshDcdnObjectCachesResponse
   */
  async refreshDcdnObjectCaches(request: RefreshDcdnObjectCachesRequest): Promise<RefreshDcdnObjectCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshDcdnObjectCachesWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request RollbackDcdnStagingConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RollbackDcdnStagingConfigResponse
   */
  async rollbackDcdnStagingConfigWithOptions(request: RollbackDcdnStagingConfigRequest, runtime: $Util.RuntimeOptions): Promise<RollbackDcdnStagingConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RollbackDcdnStagingConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RollbackDcdnStagingConfigResponse>(await this.callApi(params, req, runtime), new RollbackDcdnStagingConfigResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request RollbackDcdnStagingConfigRequest
    * @return RollbackDcdnStagingConfigResponse
   */
  async rollbackDcdnStagingConfig(request: RollbackDcdnStagingConfigRequest): Promise<RollbackDcdnStagingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackDcdnStagingConfigWithOptions(request, runtime);
  }

  /**
    * @deprecated : SetDcdnDomainCertificate is deprecated, please use dcdn::2018-01-15::SetDcdnDomainSSLCertificate instead.
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request SetDcdnDomainCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetDcdnDomainCertificateResponse
   */
  // Deprecated
  async setDcdnDomainCertificateWithOptions(request: SetDcdnDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetDcdnDomainCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.forceSet)) {
      query["ForceSet"] = request.forceSet;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.SSLPri)) {
      query["SSLPri"] = request.SSLPri;
    }

    if (!Util.isUnset(request.SSLProtocol)) {
      query["SSLProtocol"] = request.SSLProtocol;
    }

    if (!Util.isUnset(request.SSLPub)) {
      query["SSLPub"] = request.SSLPub;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDcdnDomainCertificate",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDcdnDomainCertificateResponse>(await this.callApi(params, req, runtime), new SetDcdnDomainCertificateResponse({}));
  }

  /**
    * @deprecated : SetDcdnDomainCertificate is deprecated, please use dcdn::2018-01-15::SetDcdnDomainSSLCertificate instead.
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request SetDcdnDomainCertificateRequest
    * @return SetDcdnDomainCertificateResponse
   */
  // Deprecated
  async setDcdnDomainCertificate(request: SetDcdnDomainCertificateRequest): Promise<SetDcdnDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDcdnDomainCertificateWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request SetDcdnDomainSMCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetDcdnDomainSMCertificateResponse
   */
  async setDcdnDomainSMCertificateWithOptions(request: SetDcdnDomainSMCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetDcdnDomainSMCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.SSLProtocol)) {
      query["SSLProtocol"] = request.SSLProtocol;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDcdnDomainSMCertificate",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDcdnDomainSMCertificateResponse>(await this.callApi(params, req, runtime), new SetDcdnDomainSMCertificateResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request SetDcdnDomainSMCertificateRequest
    * @return SetDcdnDomainSMCertificateResponse
   */
  async setDcdnDomainSMCertificate(request: SetDcdnDomainSMCertificateRequest): Promise<SetDcdnDomainSMCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDcdnDomainSMCertificateWithOptions(request, runtime);
  }

  async setDcdnDomainSSLCertificateWithOptions(request: SetDcdnDomainSSLCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetDcdnDomainSSLCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!Util.isUnset(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.certRegion)) {
      query["CertRegion"] = request.certRegion;
    }

    if (!Util.isUnset(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.SSLPri)) {
      query["SSLPri"] = request.SSLPri;
    }

    if (!Util.isUnset(request.SSLProtocol)) {
      query["SSLProtocol"] = request.SSLProtocol;
    }

    if (!Util.isUnset(request.SSLPub)) {
      query["SSLPub"] = request.SSLPub;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDcdnDomainSSLCertificate",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDcdnDomainSSLCertificateResponse>(await this.callApi(params, req, runtime), new SetDcdnDomainSSLCertificateResponse({}));
  }

  async setDcdnDomainSSLCertificate(request: SetDcdnDomainSSLCertificateRequest): Promise<SetDcdnDomainSSLCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDcdnDomainSSLCertificateWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request SetDcdnDomainStagingConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetDcdnDomainStagingConfigResponse
   */
  async setDcdnDomainStagingConfigWithOptions(request: SetDcdnDomainStagingConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetDcdnDomainStagingConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.functions)) {
      query["Functions"] = request.functions;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDcdnDomainStagingConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDcdnDomainStagingConfigResponse>(await this.callApi(params, req, runtime), new SetDcdnDomainStagingConfigResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request SetDcdnDomainStagingConfigRequest
    * @return SetDcdnDomainStagingConfigResponse
   */
  async setDcdnDomainStagingConfig(request: SetDcdnDomainStagingConfigRequest): Promise<SetDcdnDomainStagingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDcdnDomainStagingConfigWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 10 times per second per account.
    *
    * @param request SetDcdnFullDomainsBlockIPRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetDcdnFullDomainsBlockIPResponse
   */
  async setDcdnFullDomainsBlockIPWithOptions(request: SetDcdnFullDomainsBlockIPRequest, runtime: $Util.RuntimeOptions): Promise<SetDcdnFullDomainsBlockIPResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.blockInterval)) {
      body["BlockInterval"] = request.blockInterval;
    }

    if (!Util.isUnset(request.IPList)) {
      body["IPList"] = request.IPList;
    }

    if (!Util.isUnset(request.operationType)) {
      body["OperationType"] = request.operationType;
    }

    if (!Util.isUnset(request.updateType)) {
      body["UpdateType"] = request.updateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetDcdnFullDomainsBlockIP",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDcdnFullDomainsBlockIPResponse>(await this.callApi(params, req, runtime), new SetDcdnFullDomainsBlockIPResponse({}));
  }

  /**
    * > You can call this operation up to 10 times per second per account.
    *
    * @param request SetDcdnFullDomainsBlockIPRequest
    * @return SetDcdnFullDomainsBlockIPResponse
   */
  async setDcdnFullDomainsBlockIP(request: SetDcdnFullDomainsBlockIPRequest): Promise<SetDcdnFullDomainsBlockIPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDcdnFullDomainsBlockIPWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request SetDcdnUserConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetDcdnUserConfigResponse
   */
  async setDcdnUserConfigWithOptions(request: SetDcdnUserConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetDcdnUserConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configs)) {
      query["Configs"] = request.configs;
    }

    if (!Util.isUnset(request.functionId)) {
      query["FunctionId"] = request.functionId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDcdnUserConfig",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDcdnUserConfigResponse>(await this.callApi(params, req, runtime), new SetDcdnUserConfigResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request SetDcdnUserConfigRequest
    * @return SetDcdnUserConfigResponse
   */
  async setDcdnUserConfig(request: SetDcdnUserConfigRequest): Promise<SetDcdnUserConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDcdnUserConfigWithOptions(request, runtime);
  }

  /**
    * > 
    * *   Each subdomain is globally unique. Resource Access Management (RAM) users cannot create duplicate subdomains.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param tmpReq SetRoutineSubdomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetRoutineSubdomainResponse
   */
  async setRoutineSubdomainWithOptions(tmpReq: SetRoutineSubdomainRequest, runtime: $Util.RuntimeOptions): Promise<SetRoutineSubdomainResponse> {
    Util.validateModel(tmpReq);
    let request = new SetRoutineSubdomainShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.subdomains)) {
      request.subdomainsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subdomains, "Subdomains", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.subdomainsShrink)) {
      body["Subdomains"] = request.subdomainsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetRoutineSubdomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetRoutineSubdomainResponse>(await this.callApi(params, req, runtime), new SetRoutineSubdomainResponse({}));
  }

  /**
    * > 
    * *   Each subdomain is globally unique. Resource Access Management (RAM) users cannot create duplicate subdomains.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request SetRoutineSubdomainRequest
    * @return SetRoutineSubdomainResponse
   */
  async setRoutineSubdomain(request: SetRoutineSubdomainRequest): Promise<SetRoutineSubdomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setRoutineSubdomainWithOptions(request, runtime);
  }

  /**
    * **
    * ****
    * *
    * *
    *
    * @param request StartDcdnDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartDcdnDomainResponse
   */
  async startDcdnDomainWithOptions(request: StartDcdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<StartDcdnDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartDcdnDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartDcdnDomainResponse>(await this.callApi(params, req, runtime), new StartDcdnDomainResponse({}));
  }

  /**
    * **
    * ****
    * *
    * *
    *
    * @param request StartDcdnDomainRequest
    * @return StartDcdnDomainResponse
   */
  async startDcdnDomain(request: StartDcdnDomainRequest): Promise<StartDcdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDcdnDomainWithOptions(request, runtime);
  }

  /**
    * *   If an accelerated domain name is in invalid state or your account has an overdue payment, the accelerated domain name cannot be enabled.
    * *   You can call this operation up to 20 times per second per account.
    *
    * @param request StartDcdnIpaDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartDcdnIpaDomainResponse
   */
  async startDcdnIpaDomainWithOptions(request: StartDcdnIpaDomainRequest, runtime: $Util.RuntimeOptions): Promise<StartDcdnIpaDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartDcdnIpaDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartDcdnIpaDomainResponse>(await this.callApi(params, req, runtime), new StartDcdnIpaDomainResponse({}));
  }

  /**
    * *   If an accelerated domain name is in invalid state or your account has an overdue payment, the accelerated domain name cannot be enabled.
    * *   You can call this operation up to 20 times per second per account.
    *
    * @param request StartDcdnIpaDomainRequest
    * @return StartDcdnIpaDomainResponse
   */
  async startDcdnIpaDomain(request: StartDcdnIpaDomainRequest): Promise<StartDcdnIpaDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDcdnIpaDomainWithOptions(request, runtime);
  }

  /**
    * **
    * ****
    * *
    * *
    *
    * @param request StopDcdnDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopDcdnDomainResponse
   */
  async stopDcdnDomainWithOptions(request: StopDcdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<StopDcdnDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopDcdnDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopDcdnDomainResponse>(await this.callApi(params, req, runtime), new StopDcdnDomainResponse({}));
  }

  /**
    * **
    * ****
    * *
    * *
    *
    * @param request StopDcdnDomainRequest
    * @return StopDcdnDomainResponse
   */
  async stopDcdnDomain(request: StopDcdnDomainRequest): Promise<StopDcdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDcdnDomainWithOptions(request, runtime);
  }

  /**
    * > 
    * *   If you disable an accelerated domain, the configurations of the accelerated domain are still retained. The system automatically forwards all the requests that are destined for this domain to the origin.
    * *   You can call this operation up to 20 times per second per account.
    *
    * @param request StopDcdnIpaDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopDcdnIpaDomainResponse
   */
  async stopDcdnIpaDomainWithOptions(request: StopDcdnIpaDomainRequest, runtime: $Util.RuntimeOptions): Promise<StopDcdnIpaDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopDcdnIpaDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopDcdnIpaDomainResponse>(await this.callApi(params, req, runtime), new StopDcdnIpaDomainResponse({}));
  }

  /**
    * > 
    * *   If you disable an accelerated domain, the configurations of the accelerated domain are still retained. The system automatically forwards all the requests that are destined for this domain to the origin.
    * *   You can call this operation up to 20 times per second per account.
    *
    * @param request StopDcdnIpaDomainRequest
    * @return StopDcdnIpaDomainResponse
   */
  async stopDcdnIpaDomain(request: StopDcdnIpaDomainRequest): Promise<StopDcdnIpaDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDcdnIpaDomainWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request TagDcdnResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TagDcdnResourcesResponse
   */
  async tagDcdnResourcesWithOptions(request: TagDcdnResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagDcdnResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagDcdnResources",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagDcdnResourcesResponse>(await this.callApi(params, req, runtime), new TagDcdnResourcesResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request TagDcdnResourcesRequest
    * @return TagDcdnResourcesResponse
   */
  async tagDcdnResources(request: TagDcdnResourcesRequest): Promise<TagDcdnResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagDcdnResourcesWithOptions(request, runtime);
  }

  /**
    * Removes one or more tags from the specified resources.
    *
    * @param request UntagDcdnResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UntagDcdnResourcesResponse
   */
  async untagDcdnResourcesWithOptions(request: UntagDcdnResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagDcdnResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      action: "UntagDcdnResources",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagDcdnResourcesResponse>(await this.callApi(params, req, runtime), new UntagDcdnResourcesResponse({}));
  }

  /**
    * Removes one or more tags from the specified resources.
    *
    * @param request UntagDcdnResourcesRequest
    * @return UntagDcdnResourcesResponse
   */
  async untagDcdnResources(request: UntagDcdnResourcesRequest): Promise<UntagDcdnResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagDcdnResourcesWithOptions(request, runtime);
  }

  /**
    * The parameters that specify the time interval at which the tracking task sends operations reports. The settings must be escaped in JSON.
    *
    * @param request UpdateDcdnDeliverTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateDcdnDeliverTaskResponse
   */
  async updateDcdnDeliverTaskWithOptions(request: UpdateDcdnDeliverTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDcdnDeliverTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deliver)) {
      body["Deliver"] = request.deliver;
    }

    if (!Util.isUnset(request.deliverId)) {
      body["DeliverId"] = request.deliverId;
    }

    if (!Util.isUnset(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.reports)) {
      body["Reports"] = request.reports;
    }

    if (!Util.isUnset(request.schedule)) {
      body["Schedule"] = request.schedule;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDcdnDeliverTask",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDcdnDeliverTaskResponse>(await this.callApi(params, req, runtime), new UpdateDcdnDeliverTaskResponse({}));
  }

  /**
    * The parameters that specify the time interval at which the tracking task sends operations reports. The settings must be escaped in JSON.
    *
    * @param request UpdateDcdnDeliverTaskRequest
    * @return UpdateDcdnDeliverTaskResponse
   */
  async updateDcdnDeliverTask(request: UpdateDcdnDeliverTaskRequest): Promise<UpdateDcdnDeliverTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDcdnDeliverTaskWithOptions(request, runtime);
  }

  /**
    * >  You can call this operation up to 30 times per second per account.
    *
    * @param request UpdateDcdnDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateDcdnDomainResponse
   */
  async updateDcdnDomainWithOptions(request: UpdateDcdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDcdnDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!Util.isUnset(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDcdnDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDcdnDomainResponse>(await this.callApi(params, req, runtime), new UpdateDcdnDomainResponse({}));
  }

  /**
    * >  You can call this operation up to 30 times per second per account.
    *
    * @param request UpdateDcdnDomainRequest
    * @return UpdateDcdnDomainResponse
   */
  async updateDcdnDomain(request: UpdateDcdnDomainRequest): Promise<UpdateDcdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDcdnDomainWithOptions(request, runtime);
  }

  /**
    * **
    * ****
    *
    * @param request UpdateDcdnIpaDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateDcdnIpaDomainResponse
   */
  async updateDcdnIpaDomainWithOptions(request: UpdateDcdnIpaDomainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDcdnIpaDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!Util.isUnset(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDcdnIpaDomain",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDcdnIpaDomainResponse>(await this.callApi(params, req, runtime), new UpdateDcdnIpaDomainResponse({}));
  }

  /**
    * **
    * ****
    *
    * @param request UpdateDcdnIpaDomainRequest
    * @return UpdateDcdnIpaDomainResponse
   */
  async updateDcdnIpaDomain(request: UpdateDcdnIpaDomainRequest): Promise<UpdateDcdnIpaDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDcdnIpaDomainWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request UpdateDcdnSLSRealtimeLogDeliveryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateDcdnSLSRealtimeLogDeliveryResponse
   */
  async updateDcdnSLSRealtimeLogDeliveryWithOptions(request: UpdateDcdnSLSRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDcdnSLSRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataCenter)) {
      body["DataCenter"] = request.dataCenter;
    }

    if (!Util.isUnset(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.SLSLogStore)) {
      body["SLSLogStore"] = request.SLSLogStore;
    }

    if (!Util.isUnset(request.SLSProject)) {
      body["SLSProject"] = request.SLSProject;
    }

    if (!Util.isUnset(request.SLSRegion)) {
      body["SLSRegion"] = request.SLSRegion;
    }

    if (!Util.isUnset(request.samplingRate)) {
      body["SamplingRate"] = request.samplingRate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDcdnSLSRealtimeLogDelivery",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDcdnSLSRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new UpdateDcdnSLSRealtimeLogDeliveryResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request UpdateDcdnSLSRealtimeLogDeliveryRequest
    * @return UpdateDcdnSLSRealtimeLogDeliveryResponse
   */
  async updateDcdnSLSRealtimeLogDelivery(request: UpdateDcdnSLSRealtimeLogDeliveryRequest): Promise<UpdateDcdnSLSRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDcdnSLSRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
    * The ID of the request.
    *
    * @param request UpdateDcdnSubTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateDcdnSubTaskResponse
   */
  async updateDcdnSubTaskWithOptions(request: UpdateDcdnSubTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDcdnSubTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.reportIds)) {
      body["ReportIds"] = request.reportIds;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDcdnSubTask",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDcdnSubTaskResponse>(await this.callApi(params, req, runtime), new UpdateDcdnSubTaskResponse({}));
  }

  /**
    * The ID of the request.
    *
    * @param request UpdateDcdnSubTaskRequest
    * @return UpdateDcdnSubTaskResponse
   */
  async updateDcdnSubTask(request: UpdateDcdnSubTaskRequest): Promise<UpdateDcdnSubTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDcdnSubTaskWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request UpdateDcdnUserRealTimeDeliveryFieldRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateDcdnUserRealTimeDeliveryFieldResponse
   */
  async updateDcdnUserRealTimeDeliveryFieldWithOptions(request: UpdateDcdnUserRealTimeDeliveryFieldRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDcdnUserRealTimeDeliveryFieldResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDcdnUserRealTimeDeliveryField",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDcdnUserRealTimeDeliveryFieldResponse>(await this.callApi(params, req, runtime), new UpdateDcdnUserRealTimeDeliveryFieldResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request UpdateDcdnUserRealTimeDeliveryFieldRequest
    * @return UpdateDcdnUserRealTimeDeliveryFieldResponse
   */
  async updateDcdnUserRealTimeDeliveryField(request: UpdateDcdnUserRealTimeDeliveryFieldRequest): Promise<UpdateDcdnUserRealTimeDeliveryFieldResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDcdnUserRealTimeDeliveryFieldWithOptions(request, runtime);
  }

  /**
    * > 
    * *   Each time you submit code, a version of the code is generated. You can manage and publish code by version.
    * *   Each routine can retain at most 10 versions. If the upper limit is reached, you must call the DeleteRoutineCodeRevision operation to manually delete versions that are no longer needed before new versions can be saved.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request UploadRoutineCodeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UploadRoutineCodeResponse
   */
  async uploadRoutineCodeWithOptions(request: UploadRoutineCodeRequest, runtime: $Util.RuntimeOptions): Promise<UploadRoutineCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.codeDescription)) {
      body["CodeDescription"] = request.codeDescription;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UploadRoutineCode",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadRoutineCodeResponse>(await this.callApi(params, req, runtime), new UploadRoutineCodeResponse({}));
  }

  /**
    * > 
    * *   Each time you submit code, a version of the code is generated. You can manage and publish code by version.
    * *   Each routine can retain at most 10 versions. If the upper limit is reached, you must call the DeleteRoutineCodeRevision operation to manually delete versions that are no longer needed before new versions can be saved.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request UploadRoutineCodeRequest
    * @return UploadRoutineCodeResponse
   */
  async uploadRoutineCode(request: UploadRoutineCodeRequest): Promise<UploadRoutineCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadRoutineCodeWithOptions(request, runtime);
  }

  /**
    * > 
    * *   Each time you upload code to a routine, a version is generated. The number of versions is counted by CodeRev. The uploaded code is used only for testing.
    * *   The code is automatically published to a staging environment.
    * *   Each routine can retain at most 10 versions. If the upper limit is reached, you need to call the DeleteRoutineCodeRevision operation to manually delete versions that are no longer needed before new versions can be saved.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request UploadStagingRoutineCodeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UploadStagingRoutineCodeResponse
   */
  async uploadStagingRoutineCodeWithOptions(request: UploadStagingRoutineCodeRequest, runtime: $Util.RuntimeOptions): Promise<UploadStagingRoutineCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.codeDescription)) {
      body["CodeDescription"] = request.codeDescription;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UploadStagingRoutineCode",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadStagingRoutineCodeResponse>(await this.callApi(params, req, runtime), new UploadStagingRoutineCodeResponse({}));
  }

  /**
    * > 
    * *   Each time you upload code to a routine, a version is generated. The number of versions is counted by CodeRev. The uploaded code is used only for testing.
    * *   The code is automatically published to a staging environment.
    * *   Each routine can retain at most 10 versions. If the upper limit is reached, you need to call the DeleteRoutineCodeRevision operation to manually delete versions that are no longer needed before new versions can be saved.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request UploadStagingRoutineCodeRequest
    * @return UploadStagingRoutineCodeResponse
   */
  async uploadStagingRoutineCode(request: UploadStagingRoutineCodeRequest): Promise<UploadStagingRoutineCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadStagingRoutineCodeWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request VerifyDcdnDomainOwnerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return VerifyDcdnDomainOwnerResponse
   */
  async verifyDcdnDomainOwnerWithOptions(request: VerifyDcdnDomainOwnerRequest, runtime: $Util.RuntimeOptions): Promise<VerifyDcdnDomainOwnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.verifyType)) {
      query["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyDcdnDomainOwner",
      version: "2018-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyDcdnDomainOwnerResponse>(await this.callApi(params, req, runtime), new VerifyDcdnDomainOwnerResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request VerifyDcdnDomainOwnerRequest
    * @return VerifyDcdnDomainOwnerResponse
   */
  async verifyDcdnDomainOwner(request: VerifyDcdnDomainOwnerRequest): Promise<VerifyDcdnDomainOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyDcdnDomainOwnerWithOptions(request, runtime);
  }

}
