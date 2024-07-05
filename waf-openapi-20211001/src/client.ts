// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ClearMajorProtectionBlackIpRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  ruleId?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearMajorProtectionBlackIpResponseBody extends $tea.Model {
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

export class ClearMajorProtectionBlackIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ClearMajorProtectionBlackIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ClearMajorProtectionBlackIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDefenseTemplateRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDefenseTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDefenseTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CopyDefenseTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CopyDefenseTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseResourceGroupRequest extends $tea.Model {
  addList?: string;
  description?: string;
  groupName?: string;
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      addList: 'AddList',
      description: 'Description',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addList: 'string',
      description: 'string',
      groupName: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseResourceGroupResponseBody extends $tea.Model {
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

export class CreateDefenseResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDefenseResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDefenseResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseRuleRequest extends $tea.Model {
  defenseScene?: string;
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  rules?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      rules: 'Rules',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      rules: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseRuleResponseBody extends $tea.Model {
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

export class CreateDefenseRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDefenseRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDefenseRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseTemplateRequest extends $tea.Model {
  defenseScene?: string;
  description?: string;
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  templateName?: string;
  templateOrigin?: string;
  templateStatus?: number;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      description: 'Description',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateName: 'TemplateName',
      templateOrigin: 'TemplateOrigin',
      templateStatus: 'TemplateStatus',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      description: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateName: 'string',
      templateOrigin: 'string',
      templateStatus: 'number',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefenseTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDefenseTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDefenseTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequest extends $tea.Model {
  accessType?: string;
  domain?: string;
  instanceId?: string;
  listen?: CreateDomainRequestListen;
  redirect?: CreateDomainRequestRedirect;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      listen: 'Listen',
      redirect: 'Redirect',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      domain: 'string',
      instanceId: 'string',
      listen: CreateDomainRequestListen,
      redirect: CreateDomainRequestRedirect,
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainShrinkRequest extends $tea.Model {
  accessType?: string;
  domain?: string;
  instanceId?: string;
  listenShrink?: string;
  redirectShrink?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      listenShrink: 'Listen',
      redirectShrink: 'Redirect',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      domain: 'string',
      instanceId: 'string',
      listenShrink: 'string',
      redirectShrink: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBody extends $tea.Model {
  domainInfo?: CreateDomainResponseBodyDomainInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'DomainInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: CreateDomainResponseBodyDomainInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMajorProtectionBlackIpRequest extends $tea.Model {
  description?: string;
  expiredTime?: number;
  instanceId?: string;
  ipList?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  ruleId?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expiredTime: 'ExpiredTime',
      instanceId: 'InstanceId',
      ipList: 'IpList',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expiredTime: 'number',
      instanceId: 'string',
      ipList: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMajorProtectionBlackIpResponseBody extends $tea.Model {
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

export class CreateMajorProtectionBlackIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMajorProtectionBlackIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMajorProtectionBlackIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberAccountsRequest extends $tea.Model {
  instanceId?: string;
  memberAccountIds?: string[];
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      memberAccountIds: 'MemberAccountIds',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      memberAccountIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberAccountsResponseBody extends $tea.Model {
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

export class CreateMemberAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMemberAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMemberAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostpaidInstanceRequest extends $tea.Model {
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostpaidInstanceResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePostpaidInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePostpaidInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePostpaidInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSM2CertRequest extends $tea.Model {
  certName?: string;
  encryptCertificate?: string;
  encryptPrivateKey?: string;
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  signCertificate?: string;
  signPrivateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      encryptCertificate: 'EncryptCertificate',
      encryptPrivateKey: 'EncryptPrivateKey',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      signCertificate: 'SignCertificate',
      signPrivateKey: 'SignPrivateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      encryptCertificate: 'string',
      encryptPrivateKey: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      signCertificate: 'string',
      signPrivateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSM2CertResponseBody extends $tea.Model {
  certIdentifier?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSM2CertResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSM2CertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSM2CertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApisecAbnormalRequest extends $tea.Model {
  abnormalId?: string;
  clusterId?: string;
  instanceId?: string;
  region?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalId: 'AbnormalId',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      region: 'Region',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalId: 'string',
      clusterId: 'string',
      instanceId: 'string',
      region: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApisecAbnormalResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApisecAbnormalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApisecAbnormalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteApisecAbnormalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApisecEventRequest extends $tea.Model {
  clusterId?: string;
  eventId?: string;
  instanceId?: string;
  region?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      eventId: 'EventId',
      instanceId: 'InstanceId',
      region: 'Region',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      eventId: 'string',
      instanceId: 'string',
      region: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApisecEventResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApisecEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApisecEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteApisecEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDefenseResourceGroupRequest extends $tea.Model {
  groupName?: string;
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDefenseResourceGroupResponseBody extends $tea.Model {
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

export class DeleteDefenseResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDefenseResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDefenseResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDefenseRuleRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  ruleIds?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleIds: 'RuleIds',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleIds: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDefenseRuleResponseBody extends $tea.Model {
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

export class DeleteDefenseRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDefenseRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDefenseRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDefenseTemplateRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDefenseTemplateResponseBody extends $tea.Model {
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

export class DeleteDefenseTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDefenseTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDefenseTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  accessType?: string;
  domain?: string;
  domainId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      domain: 'Domain',
      domainId: 'DomainId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      domain: 'string',
      domainId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponseBody extends $tea.Model {
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

export class DeleteDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMajorProtectionBlackIpRequest extends $tea.Model {
  instanceId?: string;
  ipList?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  ruleId?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipList: 'IpList',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipList: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMajorProtectionBlackIpResponseBody extends $tea.Model {
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

export class DeleteMajorProtectionBlackIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMajorProtectionBlackIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMajorProtectionBlackIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemberAccountRequest extends $tea.Model {
  instanceId?: string;
  memberAccountId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      memberAccountId: 'MemberAccountId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      memberAccountId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemberAccountResponseBody extends $tea.Model {
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

export class DeleteMemberAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMemberAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMemberAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountDelegatedStatusRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountDelegatedStatusResponseBody extends $tea.Model {
  accountId?: string;
  accountName?: string;
  delegatedStatus?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      delegatedStatus: 'DelegatedStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      delegatedStatus: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountDelegatedStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountDelegatedStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAccountDelegatedStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAbnormalDomainStatisticRequest extends $tea.Model {
  clusterId?: string;
  endTime?: number;
  instanceId?: string;
  orderWay?: string;
  pageNumber?: number;
  pageSize?: number;
  region?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      orderWay: 'OrderWay',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endTime: 'number',
      instanceId: 'string',
      orderWay: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAbnormalDomainStatisticResponseBody extends $tea.Model {
  data?: DescribeApisecAbnormalDomainStatisticResponseBodyData[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecAbnormalDomainStatisticResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAbnormalDomainStatisticResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApisecAbnormalDomainStatisticResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApisecAbnormalDomainStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAssetTrendRequest extends $tea.Model {
  clusterId?: string;
  endTime?: number;
  instanceId?: string;
  region?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      region: 'Region',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endTime: 'number',
      instanceId: 'string',
      region: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAssetTrendResponseBody extends $tea.Model {
  data?: DescribeApisecAssetTrendResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecAssetTrendResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAssetTrendResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApisecAssetTrendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApisecAssetTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecEventDomainStatisticRequest extends $tea.Model {
  clusterId?: string;
  endTime?: number;
  instanceId?: string;
  orderWay?: string;
  pageNumber?: number;
  pageSize?: number;
  region?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      orderWay: 'OrderWay',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endTime: 'number',
      instanceId: 'string',
      orderWay: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecEventDomainStatisticResponseBody extends $tea.Model {
  data?: DescribeApisecEventDomainStatisticResponseBodyData[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecEventDomainStatisticResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecEventDomainStatisticResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApisecEventDomainStatisticResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApisecEventDomainStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecLogDeliveriesRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecLogDeliveriesResponseBody extends $tea.Model {
  deliveryConfigs?: DescribeApisecLogDeliveriesResponseBodyDeliveryConfigs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryConfigs: 'DeliveryConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryConfigs: { 'type': 'array', 'itemType': DescribeApisecLogDeliveriesResponseBodyDeliveryConfigs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecLogDeliveriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApisecLogDeliveriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApisecLogDeliveriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSensitiveDomainStatisticRequest extends $tea.Model {
  clusterId?: string;
  endTime?: number;
  instanceId?: string;
  orderWay?: string;
  pageNumber?: number;
  pageSize?: number;
  region?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  startTime?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      orderWay: 'OrderWay',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endTime: 'number',
      instanceId: 'string',
      orderWay: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTime: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSensitiveDomainStatisticResponseBody extends $tea.Model {
  data?: DescribeApisecSensitiveDomainStatisticResponseBodyData[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecSensitiveDomainStatisticResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSensitiveDomainStatisticResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApisecSensitiveDomainStatisticResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApisecSensitiveDomainStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSlsLogStoresRequest extends $tea.Model {
  instanceId?: string;
  logRegionId?: string;
  projectName?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      logRegionId: 'LogRegionId',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      logRegionId: 'string',
      projectName: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSlsLogStoresResponseBody extends $tea.Model {
  logStores?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logStores: 'LogStores',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStores: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSlsLogStoresResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApisecSlsLogStoresResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApisecSlsLogStoresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSlsProjectsRequest extends $tea.Model {
  instanceId?: string;
  logRegionId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      logRegionId: 'LogRegionId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      logRegionId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSlsProjectsResponseBody extends $tea.Model {
  projects?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projects: 'Projects',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projects: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSlsProjectsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApisecSlsProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApisecSlsProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertDetailRequest extends $tea.Model {
  certIdentifier?: string;
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertDetailResponseBody extends $tea.Model {
  certDetail?: DescribeCertDetailResponseBodyCertDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certDetail: 'CertDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDetail: DescribeCertDetailResponseBodyCertDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCertDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCertDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertsRequest extends $tea.Model {
  algorithm?: string;
  domain?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      domain: 'Domain',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      domain: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertsResponseBody extends $tea.Model {
  certs?: DescribeCertsResponseBodyCerts[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certs: 'Certs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certs: { 'type': 'array', 'itemType': DescribeCertsResponseBodyCerts },
      requestId: 'string',
      totalCount: 'number',
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

export class DescribeCloudResourcesRequest extends $tea.Model {
  instanceId?: string;
  ownerUserId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceDomain?: string;
  resourceFunction?: string;
  resourceInstanceId?: string;
  resourceManagerResourceGroupId?: string;
  resourceName?: string;
  resourceProduct?: string;
  resourceRegionId?: string;
  resourceRouteName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerUserId: 'OwnerUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceDomain: 'ResourceDomain',
      resourceFunction: 'ResourceFunction',
      resourceInstanceId: 'ResourceInstanceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceName: 'ResourceName',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
      resourceRouteName: 'ResourceRouteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerUserId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceDomain: 'string',
      resourceFunction: 'string',
      resourceInstanceId: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceName: 'string',
      resourceProduct: 'string',
      resourceRegionId: 'string',
      resourceRouteName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourcesResponseBody extends $tea.Model {
  cloudResources?: DescribeCloudResourcesResponseBodyCloudResources[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudResources: 'CloudResources',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResources: { 'type': 'array', 'itemType': DescribeCloudResourcesResponseBodyCloudResources },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCloudResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSStatusRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSStatusResponseBody extends $tea.Model {
  DDoSStatus?: DescribeDDoSStatusResponseBodyDDoSStatus[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DDoSStatus: 'DDoSStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDoSStatus: { 'type': 'array', 'itemType': DescribeDDoSStatusResponseBodyDDoSStatus },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDDoSStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDDoSStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resource?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceResponseBody extends $tea.Model {
  requestId?: string;
  resource?: DescribeDefenseResourceResponseBodyResource;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resource: DescribeDefenseResourceResponseBodyResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDefenseResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupRequest extends $tea.Model {
  groupName?: string;
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupResponseBody extends $tea.Model {
  group?: DescribeDefenseResourceGroupResponseBodyGroup;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: DescribeDefenseResourceGroupResponseBodyGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDefenseResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupNamesRequest extends $tea.Model {
  groupNameLike?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupNameLike: 'GroupNameLike',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupNameLike: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupNamesResponseBody extends $tea.Model {
  groupNames?: string[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groupNames: 'GroupNames',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupNamesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseResourceGroupNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDefenseResourceGroupNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupsRequest extends $tea.Model {
  groupNameLike?: string;
  groupNames?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupNameLike: 'GroupNameLike',
      groupNames: 'GroupNames',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupNameLike: 'string',
      groupNames: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupsResponseBody extends $tea.Model {
  groups?: DescribeDefenseResourceGroupsResponseBodyGroups[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': DescribeDefenseResourceGroupsResponseBodyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseResourceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDefenseResourceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceNamesRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resource?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceNamesResponseBody extends $tea.Model {
  requestId?: string;
  resources?: string[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceNamesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseResourceNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDefenseResourceNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceTemplatesRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resource?: string;
  resourceManagerResourceGroupId?: string;
  resourceType?: string;
  ruleId?: number;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceType: 'ResourceType',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceType: 'string',
      ruleId: 'number',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  templates?: DescribeDefenseResourceTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeDefenseResourceTemplatesResponseBodyTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseResourceTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDefenseResourceTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourcesRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  query?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  tag?: DescribeDefenseResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDefenseResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourcesResponseBody extends $tea.Model {
  requestId?: string;
  resources?: DescribeDefenseResourcesResponseBodyResources[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeDefenseResourcesResponseBodyResources },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDefenseResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRuleRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  ruleId?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRuleResponseBody extends $tea.Model {
  requestId?: string;
  rule?: DescribeDefenseRuleResponseBodyRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rule: DescribeDefenseRuleResponseBodyRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDefenseRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRulesRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  query?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRulesResponseBody extends $tea.Model {
  requestId?: string;
  rules?: DescribeDefenseRulesResponseBodyRules[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeDefenseRulesResponseBodyRules },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDefenseRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplateRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplateResponseBody extends $tea.Model {
  requestId?: string;
  template?: DescribeDefenseTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: DescribeDefenseTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDefenseTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplateValidGroupsRequest extends $tea.Model {
  defenseScene?: string;
  groupName?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      groupName: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplateValidGroupsResponseBody extends $tea.Model {
  groups?: string[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplateValidGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseTemplateValidGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDefenseTemplateValidGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplatesRequest extends $tea.Model {
  defenseScene?: string;
  defenseSubScene?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resource?: string;
  resourceManagerResourceGroupId?: string;
  resourceType?: string;
  templateId?: number;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      defenseSubScene: 'DefenseSubScene',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceType: 'ResourceType',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      defenseSubScene: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceType: 'string',
      templateId: 'number',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  templates?: DescribeDefenseTemplatesResponseBodyTemplates[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeDefenseTemplatesResponseBodyTemplates },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDefenseTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDNSRecordRequest extends $tea.Model {
  domain?: string;
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDNSRecordResponseBody extends $tea.Model {
  DNSStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DNSStatus: 'DNSStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNSStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDNSRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainDNSRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainDNSRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailRequest extends $tea.Model {
  domain?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBody extends $tea.Model {
  certDetail?: DescribeDomainDetailResponseBodyCertDetail;
  cname?: string;
  domain?: string;
  listen?: DescribeDomainDetailResponseBodyListen;
  redirect?: DescribeDomainDetailResponseBodyRedirect;
  requestId?: string;
  resourceManagerResourceGroupId?: string;
  SM2CertDetail?: DescribeDomainDetailResponseBodySM2CertDetail;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      certDetail: 'CertDetail',
      cname: 'Cname',
      domain: 'Domain',
      listen: 'Listen',
      redirect: 'Redirect',
      requestId: 'RequestId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      SM2CertDetail: 'SM2CertDetail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDetail: DescribeDomainDetailResponseBodyCertDetail,
      cname: 'string',
      domain: 'string',
      listen: DescribeDomainDetailResponseBodyListen,
      redirect: DescribeDomainDetailResponseBodyRedirect,
      requestId: 'string',
      resourceManagerResourceGroupId: 'string',
      SM2CertDetail: DescribeDomainDetailResponseBodySM2CertDetail,
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsRequest extends $tea.Model {
  backend?: string;
  domain?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  tag?: DescribeDomainsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      backend: 'Backend',
      domain: 'Domain',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: 'string',
      domain: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDomainsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBody extends $tea.Model {
  domains?: DescribeDomainsResponseBodyDomains[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomains },
      requestId: 'string',
      totalCount: 'number',
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

export class DescribeFlowChartRequest extends $tea.Model {
  endTimestamp?: string;
  instanceId?: string;
  interval?: string;
  regionId?: string;
  resource?: string;
  resourceManagerResourceGroupId?: string;
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      interval: 'Interval',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      interval: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowChartResponseBody extends $tea.Model {
  flowChart?: DescribeFlowChartResponseBodyFlowChart[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowChart: 'FlowChart',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowChart: { 'type': 'array', 'itemType': DescribeFlowChartResponseBodyFlowChart },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowChartResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFlowChartResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFlowChartResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTopResourceRequest extends $tea.Model {
  endTimestamp?: string;
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTopResourceResponseBody extends $tea.Model {
  requestId?: string;
  ruleHitsTopResource?: DescribeFlowTopResourceResponseBodyRuleHitsTopResource[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopResource: 'RuleHitsTopResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopResource: { 'type': 'array', 'itemType': DescribeFlowTopResourceResponseBodyRuleHitsTopResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTopResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFlowTopResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFlowTopResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTopUrlRequest extends $tea.Model {
  endTimestamp?: string;
  instanceId?: string;
  regionId?: string;
  resource?: string;
  resourceManagerResourceGroupId?: string;
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTopUrlResponseBody extends $tea.Model {
  requestId?: string;
  ruleHitsTopUrl?: DescribeFlowTopUrlResponseBodyRuleHitsTopUrl[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopUrl: 'RuleHitsTopUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopUrl: { 'type': 'array', 'itemType': DescribeFlowTopUrlResponseBodyRuleHitsTopUrl },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTopUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFlowTopUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFlowTopUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudGroupsRequest extends $tea.Model {
  clusterId?: number;
  clusterProxyType?: string;
  groupName?: number;
  groupType?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterProxyType: 'ClusterProxyType',
      groupName: 'GroupName',
      groupType: 'GroupType',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      clusterProxyType: 'string',
      groupName: 'number',
      groupType: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudGroupsResponseBody extends $tea.Model {
  groups?: DescribeHybridCloudGroupsResponseBodyGroups[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': DescribeHybridCloudGroupsResponseBodyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHybridCloudGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHybridCloudGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudResourcesRequest extends $tea.Model {
  backend?: string;
  cnameEnabled?: boolean;
  domain?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backend: 'Backend',
      cnameEnabled: 'CnameEnabled',
      domain: 'Domain',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: 'string',
      cnameEnabled: 'boolean',
      domain: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudResourcesResponseBody extends $tea.Model {
  domains?: DescribeHybridCloudResourcesResponseBodyDomains[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeHybridCloudResourcesResponseBodyDomains },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHybridCloudResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHybridCloudResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudUserRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudUserResponseBody extends $tea.Model {
  requestId?: string;
  userInfo?: DescribeHybridCloudUserResponseBodyUserInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userInfo: DescribeHybridCloudUserResponseBodyUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHybridCloudUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHybridCloudUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRequest extends $tea.Model {
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $tea.Model {
  details?: DescribeInstanceResponseBodyDetails;
  edition?: string;
  endTime?: number;
  inDebt?: string;
  instanceId?: string;
  payType?: string;
  regionId?: string;
  requestId?: string;
  startTime?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      edition: 'Edition',
      endTime: 'EndTime',
      inDebt: 'InDebt',
      instanceId: 'InstanceId',
      payType: 'PayType',
      regionId: 'RegionId',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: DescribeInstanceResponseBodyDetails,
      edition: 'string',
      endTime: 'number',
      inDebt: 'string',
      instanceId: 'string',
      payType: 'string',
      regionId: 'string',
      requestId: 'string',
      startTime: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMajorProtectionBlackIpsRequest extends $tea.Model {
  instanceId?: string;
  ipLike?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  ruleId?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipLike: 'IpLike',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipLike: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMajorProtectionBlackIpsResponseBody extends $tea.Model {
  ipList?: DescribeMajorProtectionBlackIpsResponseBodyIpList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipList: 'IpList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: { 'type': 'array', 'itemType': DescribeMajorProtectionBlackIpsResponseBodyIpList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMajorProtectionBlackIpsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMajorProtectionBlackIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMajorProtectionBlackIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMemberAccountsRequest extends $tea.Model {
  accountStatus?: string;
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'AccountStatus',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMemberAccountsResponseBody extends $tea.Model {
  accountInfos?: DescribeMemberAccountsResponseBodyAccountInfos[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountInfos: 'AccountInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfos: { 'type': 'array', 'itemType': DescribeMemberAccountsResponseBodyAccountInfos },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMemberAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMemberAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMemberAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePauseProtectionStatusRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePauseProtectionStatusResponseBody extends $tea.Model {
  pauseStatus?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pauseStatus: 'PauseStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pauseStatus: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePauseProtectionStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePauseProtectionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePauseProtectionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePeakTrendRequest extends $tea.Model {
  endTimestamp?: string;
  instanceId?: string;
  interval?: string;
  regionId?: string;
  resource?: string;
  resourceManagerResourceGroupId?: string;
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      interval: 'Interval',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      interval: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePeakTrendResponseBody extends $tea.Model {
  flowChart?: DescribePeakTrendResponseBodyFlowChart[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowChart: 'FlowChart',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowChart: { 'type': 'array', 'itemType': DescribePeakTrendResponseBodyFlowChart },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePeakTrendResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePeakTrendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePeakTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductInstancesRequest extends $tea.Model {
  instanceId?: string;
  ownerUserId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceInstanceId?: string;
  resourceIp?: string;
  resourceManagerResourceGroupId?: string;
  resourceName?: string;
  resourceProduct?: string;
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerUserId: 'OwnerUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceIp: 'ResourceIp',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceName: 'ResourceName',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerUserId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceInstanceId: 'string',
      resourceIp: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceName: 'string',
      resourceProduct: 'string',
      resourceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductInstancesResponseBody extends $tea.Model {
  productInstances?: DescribeProductInstancesResponseBodyProductInstances[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      productInstances: 'ProductInstances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInstances: { 'type': 'array', 'itemType': DescribeProductInstancesResponseBodyProductInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProductInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProductInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePunishedDomainsRequest extends $tea.Model {
  domains?: string[];
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePunishedDomainsResponseBody extends $tea.Model {
  punishedDomains?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      punishedDomains: 'PunishedDomains',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      punishedDomains: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePunishedDomainsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePunishedDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePunishedDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceInstanceCertsRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceInstanceId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceInstanceId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceInstanceCertsResponseBody extends $tea.Model {
  certs?: DescribeResourceInstanceCertsResponseBodyCerts[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certs: 'Certs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certs: { 'type': 'array', 'itemType': DescribeResourceInstanceCertsResponseBodyCerts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceInstanceCertsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceInstanceCertsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeResourceInstanceCertsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceLogStatusRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      resources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceLogStatusResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeResourceLogStatusResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeResourceLogStatusResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceLogStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceLogStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeResourceLogStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePortRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceInstanceId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceInstanceId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePortResponseBody extends $tea.Model {
  requestId?: string;
  resourcePorts?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcePorts: 'ResourcePorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcePorts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePortResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourcePortResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeResourcePortResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceRegionIdRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceRegionIdResponseBody extends $tea.Model {
  requestId?: string;
  resourceRegionIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRegionIds: 'ResourceRegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRegionIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceRegionIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceRegionIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeResourceRegionIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceSupportRegionsRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceSupportRegionsResponseBody extends $tea.Model {
  requestId?: string;
  supportRegions?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportRegions: 'SupportRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportRegions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceSupportRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceSupportRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeResourceSupportRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResponseCodeTrendGraphRequest extends $tea.Model {
  endTimestamp?: string;
  instanceId?: string;
  interval?: string;
  regionId?: string;
  resource?: string;
  resourceManagerResourceGroupId?: string;
  startTimestamp?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      interval: 'Interval',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      interval: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResponseCodeTrendGraphResponseBody extends $tea.Model {
  requestId?: string;
  responseCodes?: DescribeResponseCodeTrendGraphResponseBodyResponseCodes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseCodes: 'ResponseCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseCodes: { 'type': 'array', 'itemType': DescribeResponseCodeTrendGraphResponseBodyResponseCodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResponseCodeTrendGraphResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResponseCodeTrendGraphResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeResponseCodeTrendGraphResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleGroupsRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  searchType?: string;
  searchValue?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      searchType: 'SearchType',
      searchValue: 'SearchValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      searchType: 'string',
      searchValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleGroupsResponseBody extends $tea.Model {
  requestId?: string;
  ruleGroups?: DescribeRuleGroupsResponseBodyRuleGroups[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleGroups: 'RuleGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleGroups: { 'type': 'array', 'itemType': DescribeRuleGroupsResponseBodyRuleGroups },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRuleGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRuleGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopClientIpRequest extends $tea.Model {
  endTimestamp?: string;
  instanceId?: string;
  regionId?: string;
  resource?: string;
  resourceManagerResourceGroupId?: string;
  ruleType?: string;
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleType: 'RuleType',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleType: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopClientIpResponseBody extends $tea.Model {
  requestId?: string;
  ruleHitsTopClientIp?: DescribeRuleHitsTopClientIpResponseBodyRuleHitsTopClientIp[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopClientIp: 'RuleHitsTopClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopClientIp: { 'type': 'array', 'itemType': DescribeRuleHitsTopClientIpResponseBodyRuleHitsTopClientIp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopClientIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRuleHitsTopClientIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRuleHitsTopClientIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopResourceRequest extends $tea.Model {
  endTimestamp?: string;
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  ruleType?: string;
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleType: 'RuleType',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleType: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopResourceResponseBody extends $tea.Model {
  requestId?: string;
  ruleHitsTopResource?: DescribeRuleHitsTopResourceResponseBodyRuleHitsTopResource[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopResource: 'RuleHitsTopResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopResource: { 'type': 'array', 'itemType': DescribeRuleHitsTopResourceResponseBodyRuleHitsTopResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRuleHitsTopResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRuleHitsTopResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopRuleIdRequest extends $tea.Model {
  endTimestamp?: string;
  instanceId?: string;
  isGroupResource?: string;
  regionId?: string;
  resource?: string;
  resourceManagerResourceGroupId?: string;
  ruleType?: string;
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      isGroupResource: 'IsGroupResource',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleType: 'RuleType',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      isGroupResource: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleType: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopRuleIdResponseBody extends $tea.Model {
  requestId?: string;
  ruleHitsTopRuleId?: DescribeRuleHitsTopRuleIdResponseBodyRuleHitsTopRuleId[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopRuleId: 'RuleHitsTopRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopRuleId: { 'type': 'array', 'itemType': DescribeRuleHitsTopRuleIdResponseBodyRuleHitsTopRuleId },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopRuleIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRuleHitsTopRuleIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRuleHitsTopRuleIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopTuleTypeRequest extends $tea.Model {
  endTimestamp?: string;
  instanceId?: string;
  regionId?: string;
  resource?: string;
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopTuleTypeResponseBody extends $tea.Model {
  requestId?: string;
  ruleHitsTopTuleType?: DescribeRuleHitsTopTuleTypeResponseBodyRuleHitsTopTuleType[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopTuleType: 'RuleHitsTopTuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopTuleType: { 'type': 'array', 'itemType': DescribeRuleHitsTopTuleTypeResponseBodyRuleHitsTopTuleType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopTuleTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRuleHitsTopTuleTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRuleHitsTopTuleTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUaRequest extends $tea.Model {
  endTimestamp?: string;
  instanceId?: string;
  regionId?: string;
  resource?: string;
  resourceManagerResourceGroupId?: string;
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUaResponseBody extends $tea.Model {
  requestId?: string;
  ruleHitsTopUa?: DescribeRuleHitsTopUaResponseBodyRuleHitsTopUa[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopUa: 'RuleHitsTopUa',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopUa: { 'type': 'array', 'itemType': DescribeRuleHitsTopUaResponseBodyRuleHitsTopUa },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRuleHitsTopUaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRuleHitsTopUaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUrlRequest extends $tea.Model {
  endTimestamp?: string;
  instanceId?: string;
  regionId?: string;
  resource?: string;
  resourceManagerResourceGroupId?: string;
  ruleType?: string;
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleType: 'RuleType',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleType: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUrlResponseBody extends $tea.Model {
  requestId?: string;
  ruleHitsTopUrl?: DescribeRuleHitsTopUrlResponseBodyRuleHitsTopUrl[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopUrl: 'RuleHitsTopUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopUrl: { 'type': 'array', 'itemType': DescribeRuleHitsTopUrlResponseBodyRuleHitsTopUrl },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRuleHitsTopUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRuleHitsTopUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsAuthStatusRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsAuthStatusResponseBody extends $tea.Model {
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'boolean',
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

export class DescribeSlsLogStoreRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogStoreResponseBody extends $tea.Model {
  logStoreName?: string;
  projectName?: string;
  quota?: number;
  requestId?: string;
  ttl?: number;
  used?: number;
  static names(): { [key: string]: string } {
    return {
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      quota: 'Quota',
      requestId: 'RequestId',
      ttl: 'Ttl',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStoreName: 'string',
      projectName: 'string',
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

export class DescribeSlsLogStoreResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlsLogStoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSlsLogStoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogStoreStatusRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogStoreStatusResponseBody extends $tea.Model {
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

export class DescribeSlsLogStoreStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlsLogStoreStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSlsLogStoreStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResourceCountRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  templateIds?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResourceCountResponseBody extends $tea.Model {
  requestId?: string;
  resourceCount?: DescribeTemplateResourceCountResponseBodyResourceCount[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceCount: 'ResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceCount: { 'type': 'array', 'itemType': DescribeTemplateResourceCountResponseBodyResourceCount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResourceCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTemplateResourceCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTemplateResourceCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResourcesRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  resourceType?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceType: 'ResourceType',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceType: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResourcesResponseBody extends $tea.Model {
  requestId?: string;
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTemplateResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTemplateResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserSlsLogRegionsRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserSlsLogRegionsResponseBody extends $tea.Model {
  logRegions?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logRegions: 'LogRegions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRegions: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserSlsLogRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserSlsLogRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserSlsLogRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserWafLogStatusRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserWafLogStatusResponseBody extends $tea.Model {
  logRegionId?: string;
  logStatus?: string;
  requestId?: string;
  statusUpdateTime?: number;
  static names(): { [key: string]: string } {
    return {
      logRegionId: 'LogRegionId',
      logStatus: 'LogStatus',
      requestId: 'RequestId',
      statusUpdateTime: 'StatusUpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRegionId: 'string',
      logStatus: 'string',
      requestId: 'string',
      statusUpdateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserWafLogStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserWafLogStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserWafLogStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitTopIpRequest extends $tea.Model {
  endTimestamp?: string;
  instanceId?: string;
  regionId?: string;
  resource?: string;
  resourceManagerResourceGroupId?: string;
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitTopIpResponseBody extends $tea.Model {
  requestId?: string;
  topIp?: DescribeVisitTopIpResponseBodyTopIp[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topIp: 'TopIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topIp: { 'type': 'array', 'itemType': DescribeVisitTopIpResponseBodyTopIp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitTopIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVisitTopIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVisitTopIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitUasRequest extends $tea.Model {
  endTimestamp?: string;
  instanceId?: string;
  regionId?: string;
  resource?: string;
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      startTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitUasResponseBody extends $tea.Model {
  requestId?: string;
  uas?: DescribeVisitUasResponseBodyUas[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uas: 'Uas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uas: { 'type': 'array', 'itemType': DescribeVisitUasResponseBodyUas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitUasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVisitUasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVisitUasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentResponseBody extends $tea.Model {
  requestId?: string;
  wafSourceIp?: DescribeWafSourceIpSegmentResponseBodyWafSourceIp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      wafSourceIp: 'WafSourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      wafSourceIp: DescribeWafSourceIpSegmentResponseBodyWafSourceIp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWafSourceIpSegmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeWafSourceIpSegmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  instanceId?: string;
  nextToken?: string;
  regionId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  keys?: ListTagKeysResponseBodyKeys[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': ListTagKeysResponseBodyKeys },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
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
  tagResources?: ListTagResourcesResponseBodyTagResources[];
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
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequest extends $tea.Model {
  key?: string;
  nextToken?: string;
  regionId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagValuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApisecLogDeliveryRequest extends $tea.Model {
  assertKey?: string;
  instanceId?: string;
  logRegionId?: string;
  logStoreName?: string;
  projectName?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      assertKey: 'AssertKey',
      instanceId: 'InstanceId',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertKey: 'string',
      instanceId: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
      projectName: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApisecLogDeliveryResponseBody extends $tea.Model {
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

export class ModifyApisecLogDeliveryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyApisecLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyApisecLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApisecLogDeliveryStatusRequest extends $tea.Model {
  assertKey?: string;
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      assertKey: 'AssertKey',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertKey: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApisecLogDeliveryStatusResponseBody extends $tea.Model {
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

export class ModifyApisecLogDeliveryStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyApisecLogDeliveryStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyApisecLogDeliveryStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseResourceGroupRequest extends $tea.Model {
  addList?: string;
  deleteList?: string;
  description?: string;
  groupName?: string;
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      addList: 'AddList',
      deleteList: 'DeleteList',
      description: 'Description',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addList: 'string',
      deleteList: 'string',
      description: 'string',
      groupName: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseResourceGroupResponseBody extends $tea.Model {
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

export class ModifyDefenseResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefenseResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDefenseResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseResourceXffRequest extends $tea.Model {
  acwCookieStatus?: number;
  acwSecureStatus?: number;
  acwV3SecureStatus?: number;
  customHeaders?: string[];
  instanceId?: string;
  regionId?: string;
  resource?: string;
  resourceManagerResourceGroupId?: string;
  xffStatus?: number;
  static names(): { [key: string]: string } {
    return {
      acwCookieStatus: 'AcwCookieStatus',
      acwSecureStatus: 'AcwSecureStatus',
      acwV3SecureStatus: 'AcwV3SecureStatus',
      customHeaders: 'CustomHeaders',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      xffStatus: 'XffStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acwCookieStatus: 'number',
      acwSecureStatus: 'number',
      acwV3SecureStatus: 'number',
      customHeaders: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      xffStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseResourceXffResponseBody extends $tea.Model {
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

export class ModifyDefenseResourceXffResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefenseResourceXffResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDefenseResourceXffResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseRuleRequest extends $tea.Model {
  defenseScene?: string;
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  rules?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      rules: 'Rules',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      rules: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseRuleResponseBody extends $tea.Model {
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

export class ModifyDefenseRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefenseRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDefenseRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseRuleCacheRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  ruleId?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseRuleCacheResponseBody extends $tea.Model {
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

export class ModifyDefenseRuleCacheResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefenseRuleCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDefenseRuleCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseRuleStatusRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  ruleId?: number;
  ruleStatus?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      ruleStatus: 'RuleStatus',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      ruleStatus: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseRuleStatusResponseBody extends $tea.Model {
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

export class ModifyDefenseRuleStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefenseRuleStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDefenseRuleStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseTemplateRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  templateId?: number;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseTemplateResponseBody extends $tea.Model {
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

export class ModifyDefenseTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefenseTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDefenseTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseTemplateStatusRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  templateId?: number;
  templateStatus?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
      templateStatus: 'TemplateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
      templateStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseTemplateStatusResponseBody extends $tea.Model {
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

export class ModifyDefenseTemplateStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefenseTemplateStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDefenseTemplateStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainRequest extends $tea.Model {
  accessType?: string;
  domain?: string;
  instanceId?: string;
  listen?: ModifyDomainRequestListen;
  redirect?: ModifyDomainRequestRedirect;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      listen: 'Listen',
      redirect: 'Redirect',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      domain: 'string',
      instanceId: 'string',
      listen: ModifyDomainRequestListen,
      redirect: ModifyDomainRequestRedirect,
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainShrinkRequest extends $tea.Model {
  accessType?: string;
  domain?: string;
  instanceId?: string;
  listenShrink?: string;
  redirectShrink?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      listenShrink: 'Listen',
      redirectShrink: 'Redirect',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      domain: 'string',
      instanceId: 'string',
      listenShrink: 'string',
      redirectShrink: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainResponseBody extends $tea.Model {
  domainInfo?: ModifyDomainResponseBodyDomainInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'DomainInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: ModifyDomainResponseBodyDomainInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainPunishStatusRequest extends $tea.Model {
  domain?: string;
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainPunishStatusResponseBody extends $tea.Model {
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

export class ModifyDomainPunishStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDomainPunishStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDomainPunishStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudClusterBypassStatusRequest extends $tea.Model {
  clusterResourceId?: string;
  instanceId?: string;
  ruleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      clusterResourceId: 'ClusterResourceId',
      instanceId: 'InstanceId',
      ruleStatus: 'RuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterResourceId: 'string',
      instanceId: 'string',
      ruleStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridCloudClusterBypassStatusResponseBody extends $tea.Model {
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

export class ModifyHybridCloudClusterBypassStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHybridCloudClusterBypassStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyHybridCloudClusterBypassStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMajorProtectionBlackIpRequest extends $tea.Model {
  description?: string;
  expiredTime?: number;
  instanceId?: string;
  ipList?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  ruleId?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expiredTime: 'ExpiredTime',
      instanceId: 'InstanceId',
      ipList: 'IpList',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expiredTime: 'number',
      instanceId: 'string',
      ipList: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMajorProtectionBlackIpResponseBody extends $tea.Model {
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

export class ModifyMajorProtectionBlackIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMajorProtectionBlackIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyMajorProtectionBlackIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMemberAccountRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  memberAccountId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      memberAccountId: 'MemberAccountId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      memberAccountId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMemberAccountResponseBody extends $tea.Model {
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

export class ModifyMemberAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMemberAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyMemberAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPauseProtectionStatusRequest extends $tea.Model {
  instanceId?: string;
  pauseStatus?: number;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pauseStatus: 'PauseStatus',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pauseStatus: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPauseProtectionStatusResponseBody extends $tea.Model {
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

export class ModifyPauseProtectionStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPauseProtectionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPauseProtectionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceLogStatusRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resource?: string;
  resourceManagerResourceGroupId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceLogStatusResponseBody extends $tea.Model {
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceLogStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyResourceLogStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyResourceLogStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateResourcesRequest extends $tea.Model {
  bindResourceGroups?: string[];
  bindResources?: string[];
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  templateId?: number;
  unbindResourceGroups?: string[];
  unbindResources?: string[];
  static names(): { [key: string]: string } {
    return {
      bindResourceGroups: 'BindResourceGroups',
      bindResources: 'BindResources',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
      unbindResourceGroups: 'UnbindResourceGroups',
      unbindResources: 'UnbindResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindResourceGroups: { 'type': 'array', 'itemType': 'string' },
      bindResources: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
      unbindResourceGroups: { 'type': 'array', 'itemType': 'string' },
      unbindResources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateResourcesResponseBody extends $tea.Model {
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

export class ModifyTemplateResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTemplateResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTemplateResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
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

export class SyncProductInstanceRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncProductInstanceResponseBody extends $tea.Model {
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

export class SyncProductInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncProductInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SyncProductInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequestListen extends $tea.Model {
  certId?: string;
  cipherSuite?: number;
  customCiphers?: string[];
  enableTLSv3?: boolean;
  exclusiveIp?: boolean;
  focusHttps?: boolean;
  http2Enabled?: boolean;
  httpPorts?: number[];
  httpsPorts?: number[];
  IPv6Enabled?: boolean;
  protectionResource?: string;
  SM2AccessOnly?: boolean;
  SM2CertId?: string;
  SM2Enabled?: boolean;
  TLSVersion?: string;
  xffHeaderMode?: number;
  xffHeaders?: string[];
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      exclusiveIp: 'ExclusiveIp',
      focusHttps: 'FocusHttps',
      http2Enabled: 'Http2Enabled',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      IPv6Enabled: 'IPv6Enabled',
      protectionResource: 'ProtectionResource',
      SM2AccessOnly: 'SM2AccessOnly',
      SM2CertId: 'SM2CertId',
      SM2Enabled: 'SM2Enabled',
      TLSVersion: 'TLSVersion',
      xffHeaderMode: 'XffHeaderMode',
      xffHeaders: 'XffHeaders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      enableTLSv3: 'boolean',
      exclusiveIp: 'boolean',
      focusHttps: 'boolean',
      http2Enabled: 'boolean',
      httpPorts: { 'type': 'array', 'itemType': 'number' },
      httpsPorts: { 'type': 'array', 'itemType': 'number' },
      IPv6Enabled: 'boolean',
      protectionResource: 'string',
      SM2AccessOnly: 'boolean',
      SM2CertId: 'string',
      SM2Enabled: 'boolean',
      TLSVersion: 'string',
      xffHeaderMode: 'number',
      xffHeaders: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequestRedirectRequestHeaders extends $tea.Model {
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

export class CreateDomainRequestRedirect extends $tea.Model {
  backends?: string[];
  cnameEnabled?: boolean;
  connectTimeout?: number;
  focusHttpBackend?: boolean;
  keepalive?: boolean;
  keepaliveRequests?: number;
  keepaliveTimeout?: number;
  loadbalance?: string;
  readTimeout?: number;
  requestHeaders?: CreateDomainRequestRedirectRequestHeaders[];
  retry?: boolean;
  routingRules?: string;
  sniEnabled?: boolean;
  sniHost?: string;
  writeTimeout?: number;
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      backends: 'Backends',
      cnameEnabled: 'CnameEnabled',
      connectTimeout: 'ConnectTimeout',
      focusHttpBackend: 'FocusHttpBackend',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      loadbalance: 'Loadbalance',
      readTimeout: 'ReadTimeout',
      requestHeaders: 'RequestHeaders',
      retry: 'Retry',
      routingRules: 'RoutingRules',
      sniEnabled: 'SniEnabled',
      sniHost: 'SniHost',
      writeTimeout: 'WriteTimeout',
      xffProto: 'XffProto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backends: { 'type': 'array', 'itemType': 'string' },
      cnameEnabled: 'boolean',
      connectTimeout: 'number',
      focusHttpBackend: 'boolean',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      loadbalance: 'string',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': CreateDomainRequestRedirectRequestHeaders },
      retry: 'boolean',
      routingRules: 'string',
      sniEnabled: 'boolean',
      sniHost: 'string',
      writeTimeout: 'number',
      xffProto: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBodyDomainInfo extends $tea.Model {
  cname?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAbnormalDomainStatisticResponseBodyData extends $tea.Model {
  apiCount?: number;
  domain?: string;
  high?: number;
  low?: number;
  medium?: number;
  static names(): { [key: string]: string } {
    return {
      apiCount: 'ApiCount',
      domain: 'Domain',
      high: 'High',
      low: 'Low',
      medium: 'Medium',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCount: 'number',
      domain: 'string',
      high: 'number',
      low: 'number',
      medium: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAssetTrendResponseBodyData extends $tea.Model {
  assetActive?: number;
  assetCount?: number;
  assetOffline?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      assetActive: 'AssetActive',
      assetCount: 'AssetCount',
      assetOffline: 'AssetOffline',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetActive: 'number',
      assetCount: 'number',
      assetOffline: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecEventDomainStatisticResponseBodyData extends $tea.Model {
  apiCount?: number;
  domain?: string;
  high?: number;
  low?: number;
  medium?: number;
  static names(): { [key: string]: string } {
    return {
      apiCount: 'ApiCount',
      domain: 'Domain',
      high: 'High',
      low: 'Low',
      medium: 'Medium',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCount: 'number',
      domain: 'string',
      high: 'number',
      low: 'number',
      medium: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecLogDeliveriesResponseBodyDeliveryConfigs extends $tea.Model {
  assertKey?: string;
  logRegionId?: string;
  logStoreName?: string;
  projectName?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      assertKey: 'AssertKey',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertKey: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
      projectName: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSensitiveDomainStatisticResponseBodyData extends $tea.Model {
  apiCount?: number;
  domainCount?: number;
  sensitiveCode?: string;
  sensitiveLevel?: string;
  sensitiveName?: string;
  static names(): { [key: string]: string } {
    return {
      apiCount: 'ApiCount',
      domainCount: 'DomainCount',
      sensitiveCode: 'SensitiveCode',
      sensitiveLevel: 'SensitiveLevel',
      sensitiveName: 'SensitiveName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCount: 'number',
      domainCount: 'number',
      sensitiveCode: 'string',
      sensitiveLevel: 'string',
      sensitiveName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertDetailResponseBodyCertDetail extends $tea.Model {
  afterDate?: number;
  beforeDate?: number;
  certIdentifier?: string;
  certName?: string;
  commonName?: string;
  domain?: string;
  sans?: string[];
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      beforeDate: 'BeforeDate',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
      domain: 'Domain',
      sans: 'Sans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      beforeDate: 'number',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      domain: 'string',
      sans: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertsResponseBodyCerts extends $tea.Model {
  afterDate?: number;
  beforeDate?: number;
  certIdentifier?: string;
  certName?: string;
  commonName?: string;
  domain?: string;
  isChainCompleted?: boolean;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      beforeDate: 'BeforeDate',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
      domain: 'Domain',
      isChainCompleted: 'IsChainCompleted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      beforeDate: 'number',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      domain: 'string',
      isChainCompleted: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourcesResponseBodyCloudResources extends $tea.Model {
  ownerUserId?: string;
  resourceDomain?: string;
  resourceFunction?: string;
  resourceInstance?: string;
  resourceName?: string;
  resourceProduct?: string;
  resourceRegionId?: string;
  resourceRouteName?: string;
  resourceService?: string;
  static names(): { [key: string]: string } {
    return {
      ownerUserId: 'OwnerUserId',
      resourceDomain: 'ResourceDomain',
      resourceFunction: 'ResourceFunction',
      resourceInstance: 'ResourceInstance',
      resourceName: 'ResourceName',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
      resourceRouteName: 'ResourceRouteName',
      resourceService: 'ResourceService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUserId: 'string',
      resourceDomain: 'string',
      resourceFunction: 'string',
      resourceInstance: 'string',
      resourceName: 'string',
      resourceProduct: 'string',
      resourceRegionId: 'string',
      resourceRouteName: 'string',
      resourceService: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSStatusResponseBodyDDoSStatus extends $tea.Model {
  eventType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceResponseBodyResource extends $tea.Model {
  acwCookieStatus?: number;
  acwSecureStatus?: number;
  acwV3SecureStatus?: number;
  customHeaders?: string[];
  description?: string;
  detail?: { [key: string]: any };
  gmtCreate?: number;
  gmtModified?: number;
  ownerUserId?: string;
  pattern?: string;
  product?: string;
  resource?: string;
  resourceGroup?: string;
  resourceManagerResourceGroupId?: string;
  resourceOrigin?: string;
  xffStatus?: number;
  static names(): { [key: string]: string } {
    return {
      acwCookieStatus: 'AcwCookieStatus',
      acwSecureStatus: 'AcwSecureStatus',
      acwV3SecureStatus: 'AcwV3SecureStatus',
      customHeaders: 'CustomHeaders',
      description: 'Description',
      detail: 'Detail',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ownerUserId: 'OwnerUserId',
      pattern: 'Pattern',
      product: 'Product',
      resource: 'Resource',
      resourceGroup: 'ResourceGroup',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceOrigin: 'ResourceOrigin',
      xffStatus: 'XffStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acwCookieStatus: 'number',
      acwSecureStatus: 'number',
      acwV3SecureStatus: 'number',
      customHeaders: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'number',
      gmtModified: 'number',
      ownerUserId: 'string',
      pattern: 'string',
      product: 'string',
      resource: 'string',
      resourceGroup: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceOrigin: 'string',
      xffStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupResponseBodyGroup extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  gmtModified?: number;
  groupName?: string;
  resourceList?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupName: 'GroupName',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupName: 'string',
      resourceList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupsResponseBodyGroups extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  gmtModified?: number;
  groupName?: string;
  resourceList?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupName: 'GroupName',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupName: 'string',
      resourceList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceTemplatesResponseBodyTemplates extends $tea.Model {
  defenseScene?: string;
  defenseSubScene?: string;
  description?: string;
  gmtModified?: number;
  templateId?: number;
  templateName?: string;
  templateOrigin?: string;
  templateStatus?: number;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      defenseSubScene: 'DefenseSubScene',
      description: 'Description',
      gmtModified: 'GmtModified',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateOrigin: 'TemplateOrigin',
      templateStatus: 'TemplateStatus',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      defenseSubScene: 'string',
      description: 'string',
      gmtModified: 'number',
      templateId: 'number',
      templateName: 'string',
      templateOrigin: 'string',
      templateStatus: 'number',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourcesRequestTag extends $tea.Model {
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

export class DescribeDefenseResourcesResponseBodyResources extends $tea.Model {
  acwCookieStatus?: number;
  acwSecureStatus?: number;
  acwV3SecureStatus?: number;
  customHeaders?: string[];
  description?: string;
  detail?: { [key: string]: any };
  gmtCreate?: number;
  gmtModified?: number;
  ownerUserId?: string;
  pattern?: string;
  product?: string;
  resource?: string;
  resourceGroup?: string;
  resourceManagerResourceGroupId?: string;
  resourceOrigin?: string;
  xffStatus?: number;
  static names(): { [key: string]: string } {
    return {
      acwCookieStatus: 'AcwCookieStatus',
      acwSecureStatus: 'AcwSecureStatus',
      acwV3SecureStatus: 'AcwV3SecureStatus',
      customHeaders: 'CustomHeaders',
      description: 'Description',
      detail: 'Detail',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ownerUserId: 'OwnerUserId',
      pattern: 'Pattern',
      product: 'Product',
      resource: 'Resource',
      resourceGroup: 'ResourceGroup',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceOrigin: 'ResourceOrigin',
      xffStatus: 'XffStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acwCookieStatus: 'number',
      acwSecureStatus: 'number',
      acwV3SecureStatus: 'number',
      customHeaders: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'number',
      gmtModified: 'number',
      ownerUserId: 'string',
      pattern: 'string',
      product: 'string',
      resource: 'string',
      resourceGroup: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceOrigin: 'string',
      xffStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRuleResponseBodyRule extends $tea.Model {
  config?: string;
  defenseOrigin?: string;
  defenseScene?: string;
  gmtModified?: number;
  ruleId?: number;
  ruleName?: string;
  status?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      defenseOrigin: 'DefenseOrigin',
      defenseScene: 'DefenseScene',
      gmtModified: 'GmtModified',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      status: 'Status',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      defenseOrigin: 'string',
      defenseScene: 'string',
      gmtModified: 'number',
      ruleId: 'number',
      ruleName: 'string',
      status: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseRulesResponseBodyRules extends $tea.Model {
  config?: string;
  defenseOrigin?: string;
  defenseScene?: string;
  gmtModified?: number;
  ruleId?: number;
  ruleName?: string;
  status?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      defenseOrigin: 'DefenseOrigin',
      defenseScene: 'DefenseScene',
      gmtModified: 'GmtModified',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      status: 'Status',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      defenseOrigin: 'string',
      defenseScene: 'string',
      gmtModified: 'number',
      ruleId: 'number',
      ruleName: 'string',
      status: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplateResponseBodyTemplate extends $tea.Model {
  defenseScene?: string;
  defenseSubScene?: string;
  description?: string;
  gmtModified?: number;
  templateId?: number;
  templateName?: string;
  templateOrigin?: string;
  templateStatus?: number;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      defenseSubScene: 'DefenseSubScene',
      description: 'Description',
      gmtModified: 'GmtModified',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateOrigin: 'TemplateOrigin',
      templateStatus: 'TemplateStatus',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      defenseSubScene: 'string',
      description: 'string',
      gmtModified: 'number',
      templateId: 'number',
      templateName: 'string',
      templateOrigin: 'string',
      templateStatus: 'number',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplatesResponseBodyTemplates extends $tea.Model {
  defenseScene?: string;
  defenseSubScene?: string;
  description?: string;
  gmtModified?: number;
  templateId?: number;
  templateName?: string;
  templateOrigin?: string;
  templateStatus?: number;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      defenseSubScene: 'DefenseSubScene',
      description: 'Description',
      gmtModified: 'GmtModified',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateOrigin: 'TemplateOrigin',
      templateStatus: 'TemplateStatus',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      defenseSubScene: 'string',
      description: 'string',
      gmtModified: 'number',
      templateId: 'number',
      templateName: 'string',
      templateOrigin: 'string',
      templateStatus: 'number',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBodyCertDetail extends $tea.Model {
  commonName?: string;
  endTime?: number;
  id?: string;
  name?: string;
  sans?: string[];
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      endTime: 'EndTime',
      id: 'Id',
      name: 'Name',
      sans: 'Sans',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      endTime: 'number',
      id: 'string',
      name: 'string',
      sans: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBodyListen extends $tea.Model {
  certId?: number;
  cipherSuite?: number;
  customCiphers?: string[];
  enableTLSv3?: boolean;
  exclusiveIp?: boolean;
  focusHttps?: boolean;
  http2Enabled?: boolean;
  httpPorts?: number[];
  httpsPorts?: number[];
  IPv6Enabled?: boolean;
  protectionResource?: string;
  SM2AccessOnly?: boolean;
  SM2CertId?: string;
  SM2Enabled?: boolean;
  TLSVersion?: string;
  xffHeaderMode?: number;
  xffHeaders?: string[];
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      exclusiveIp: 'ExclusiveIp',
      focusHttps: 'FocusHttps',
      http2Enabled: 'Http2Enabled',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      IPv6Enabled: 'IPv6Enabled',
      protectionResource: 'ProtectionResource',
      SM2AccessOnly: 'SM2AccessOnly',
      SM2CertId: 'SM2CertId',
      SM2Enabled: 'SM2Enabled',
      TLSVersion: 'TLSVersion',
      xffHeaderMode: 'XffHeaderMode',
      xffHeaders: 'XffHeaders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      enableTLSv3: 'boolean',
      exclusiveIp: 'boolean',
      focusHttps: 'boolean',
      http2Enabled: 'boolean',
      httpPorts: { 'type': 'array', 'itemType': 'number' },
      httpsPorts: { 'type': 'array', 'itemType': 'number' },
      IPv6Enabled: 'boolean',
      protectionResource: 'string',
      SM2AccessOnly: 'boolean',
      SM2CertId: 'string',
      SM2Enabled: 'boolean',
      TLSVersion: 'string',
      xffHeaderMode: 'number',
      xffHeaders: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBodyRedirectBackends extends $tea.Model {
  backend?: string;
  static names(): { [key: string]: string } {
    return {
      backend: 'Backend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBodyRedirectRequestHeaders extends $tea.Model {
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

export class DescribeDomainDetailResponseBodyRedirect extends $tea.Model {
  backends?: DescribeDomainDetailResponseBodyRedirectBackends[];
  connectTimeout?: number;
  focusHttpBackend?: boolean;
  keepalive?: boolean;
  keepaliveRequests?: number;
  keepaliveTimeout?: number;
  loadbalance?: string;
  readTimeout?: number;
  requestHeaders?: DescribeDomainDetailResponseBodyRedirectRequestHeaders[];
  retry?: boolean;
  sniEnabled?: boolean;
  sniHost?: string;
  writeTimeout?: number;
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      backends: 'Backends',
      connectTimeout: 'ConnectTimeout',
      focusHttpBackend: 'FocusHttpBackend',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      loadbalance: 'Loadbalance',
      readTimeout: 'ReadTimeout',
      requestHeaders: 'RequestHeaders',
      retry: 'Retry',
      sniEnabled: 'SniEnabled',
      sniHost: 'SniHost',
      writeTimeout: 'WriteTimeout',
      xffProto: 'XffProto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backends: { 'type': 'array', 'itemType': DescribeDomainDetailResponseBodyRedirectBackends },
      connectTimeout: 'number',
      focusHttpBackend: 'boolean',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      loadbalance: 'string',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': DescribeDomainDetailResponseBodyRedirectRequestHeaders },
      retry: 'boolean',
      sniEnabled: 'boolean',
      sniHost: 'string',
      writeTimeout: 'number',
      xffProto: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBodySM2CertDetail extends $tea.Model {
  commonName?: string;
  endTime?: number;
  id?: string;
  name?: string;
  sans?: string[];
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      endTime: 'EndTime',
      id: 'Id',
      name: 'Name',
      sans: 'Sans',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      endTime: 'number',
      id: 'string',
      name: 'string',
      sans: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsRequestTag extends $tea.Model {
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

export class DescribeDomainsResponseBodyDomainsBackedsHttp extends $tea.Model {
  backend?: string;
  static names(): { [key: string]: string } {
    return {
      backend: 'Backend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsBackedsHttps extends $tea.Model {
  backend?: string;
  static names(): { [key: string]: string } {
    return {
      backend: 'Backend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsBackeds extends $tea.Model {
  http?: DescribeDomainsResponseBodyDomainsBackedsHttp[];
  https?: DescribeDomainsResponseBodyDomainsBackedsHttps[];
  static names(): { [key: string]: string } {
    return {
      http: 'Http',
      https: 'Https',
    };
  }

  static types(): { [key: string]: any } {
    return {
      http: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsBackedsHttp },
      https: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsBackedsHttps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsListenPorts extends $tea.Model {
  http?: number[];
  https?: number[];
  static names(): { [key: string]: string } {
    return {
      http: 'Http',
      https: 'Https',
    };
  }

  static types(): { [key: string]: any } {
    return {
      http: { 'type': 'array', 'itemType': 'number' },
      https: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomains extends $tea.Model {
  backeds?: DescribeDomainsResponseBodyDomainsBackeds;
  cname?: string;
  domain?: string;
  listenPorts?: DescribeDomainsResponseBodyDomainsListenPorts;
  resourceManagerResourceGroupId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      backeds: 'Backeds',
      cname: 'Cname',
      domain: 'Domain',
      listenPorts: 'ListenPorts',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backeds: DescribeDomainsResponseBodyDomainsBackeds,
      cname: 'string',
      domain: 'string',
      listenPorts: DescribeDomainsResponseBodyDomainsListenPorts,
      resourceManagerResourceGroupId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowChartResponseBodyFlowChart extends $tea.Model {
  aclCustomBlockSum?: number;
  aclCustomReportsSum?: number;
  antiScanBlockSum?: number;
  antibotBlockSum?: number;
  antibotReportSum?: string;
  antiscanReportsSum?: number;
  blacklistBlockSum?: string;
  blacklistReportsSum?: number;
  ccCustomBlockSum?: number;
  ccCustomReportsSum?: number;
  ccSystemBlocksSum?: number;
  ccSystemReportsSum?: number;
  count?: number;
  inBytes?: number;
  index?: number;
  maxPv?: number;
  outBytes?: number;
  ratelimitBlockSum?: number;
  ratelimitReportSum?: number;
  regionBlockBlocksSum?: number;
  regionBlockReportsSum?: number;
  robotCount?: number;
  wafBlockSum?: number;
  wafReportSum?: string;
  static names(): { [key: string]: string } {
    return {
      aclCustomBlockSum: 'AclCustomBlockSum',
      aclCustomReportsSum: 'AclCustomReportsSum',
      antiScanBlockSum: 'AntiScanBlockSum',
      antibotBlockSum: 'AntibotBlockSum',
      antibotReportSum: 'AntibotReportSum',
      antiscanReportsSum: 'AntiscanReportsSum',
      blacklistBlockSum: 'BlacklistBlockSum',
      blacklistReportsSum: 'BlacklistReportsSum',
      ccCustomBlockSum: 'CcCustomBlockSum',
      ccCustomReportsSum: 'CcCustomReportsSum',
      ccSystemBlocksSum: 'CcSystemBlocksSum',
      ccSystemReportsSum: 'CcSystemReportsSum',
      count: 'Count',
      inBytes: 'InBytes',
      index: 'Index',
      maxPv: 'MaxPv',
      outBytes: 'OutBytes',
      ratelimitBlockSum: 'RatelimitBlockSum',
      ratelimitReportSum: 'RatelimitReportSum',
      regionBlockBlocksSum: 'RegionBlockBlocksSum',
      regionBlockReportsSum: 'RegionBlockReportsSum',
      robotCount: 'RobotCount',
      wafBlockSum: 'WafBlockSum',
      wafReportSum: 'WafReportSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclCustomBlockSum: 'number',
      aclCustomReportsSum: 'number',
      antiScanBlockSum: 'number',
      antibotBlockSum: 'number',
      antibotReportSum: 'string',
      antiscanReportsSum: 'number',
      blacklistBlockSum: 'string',
      blacklistReportsSum: 'number',
      ccCustomBlockSum: 'number',
      ccCustomReportsSum: 'number',
      ccSystemBlocksSum: 'number',
      ccSystemReportsSum: 'number',
      count: 'number',
      inBytes: 'number',
      index: 'number',
      maxPv: 'number',
      outBytes: 'number',
      ratelimitBlockSum: 'number',
      ratelimitReportSum: 'number',
      regionBlockBlocksSum: 'number',
      regionBlockReportsSum: 'number',
      robotCount: 'number',
      wafBlockSum: 'number',
      wafReportSum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTopResourceResponseBodyRuleHitsTopResource extends $tea.Model {
  count?: number;
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTopUrlResponseBodyRuleHitsTopUrl extends $tea.Model {
  count?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudGroupsResponseBodyGroups extends $tea.Model {
  backSourceMark?: string;
  continentsValue?: number;
  groupId?: number;
  groupName?: string;
  groupType?: string;
  loadBalanceIp?: string;
  locationId?: number;
  operatorValue?: number;
  ports?: string;
  regionCodeValue?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      backSourceMark: 'BackSourceMark',
      continentsValue: 'ContinentsValue',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      loadBalanceIp: 'LoadBalanceIp',
      locationId: 'LocationId',
      operatorValue: 'OperatorValue',
      ports: 'Ports',
      regionCodeValue: 'RegionCodeValue',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backSourceMark: 'string',
      continentsValue: 'number',
      groupId: 'number',
      groupName: 'string',
      groupType: 'string',
      loadBalanceIp: 'string',
      locationId: 'number',
      operatorValue: 'number',
      ports: 'string',
      regionCodeValue: 'number',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudResourcesResponseBodyDomainsListen extends $tea.Model {
  certId?: string;
  cipherSuite?: number;
  customCiphers?: string[];
  enableTLSv3?: boolean;
  exclusiveIp?: boolean;
  focusHttps?: boolean;
  http2Enabled?: boolean;
  httpPorts?: number[];
  httpsPorts?: number[];
  IPv6Enabled?: boolean;
  protectionResource?: string;
  TLSVersion?: string;
  xffHeaderMode?: number;
  xffHeaders?: string[];
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      exclusiveIp: 'ExclusiveIp',
      focusHttps: 'FocusHttps',
      http2Enabled: 'Http2Enabled',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      IPv6Enabled: 'IPv6Enabled',
      protectionResource: 'ProtectionResource',
      TLSVersion: 'TLSVersion',
      xffHeaderMode: 'XffHeaderMode',
      xffHeaders: 'XffHeaders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      enableTLSv3: 'boolean',
      exclusiveIp: 'boolean',
      focusHttps: 'boolean',
      http2Enabled: 'boolean',
      httpPorts: { 'type': 'array', 'itemType': 'number' },
      httpsPorts: { 'type': 'array', 'itemType': 'number' },
      IPv6Enabled: 'boolean',
      protectionResource: 'string',
      TLSVersion: 'string',
      xffHeaderMode: 'number',
      xffHeaders: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudResourcesResponseBodyDomainsRedirectRequestHeaders extends $tea.Model {
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

export class DescribeHybridCloudResourcesResponseBodyDomainsRedirect extends $tea.Model {
  backends?: string[];
  cnameEnabled?: boolean;
  connectTimeout?: number;
  focusHttpBackend?: boolean;
  keepalive?: boolean;
  keepaliveRequests?: number;
  keepaliveTimeout?: number;
  loadbalance?: string;
  readTimeout?: number;
  requestHeaders?: DescribeHybridCloudResourcesResponseBodyDomainsRedirectRequestHeaders[];
  retry?: boolean;
  routingRules?: string;
  sniEnabled?: boolean;
  sniHost?: string;
  writeTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      backends: 'Backends',
      cnameEnabled: 'CnameEnabled',
      connectTimeout: 'ConnectTimeout',
      focusHttpBackend: 'FocusHttpBackend',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      loadbalance: 'Loadbalance',
      readTimeout: 'ReadTimeout',
      requestHeaders: 'RequestHeaders',
      retry: 'Retry',
      routingRules: 'RoutingRules',
      sniEnabled: 'SniEnabled',
      sniHost: 'SniHost',
      writeTimeout: 'WriteTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backends: { 'type': 'array', 'itemType': 'string' },
      cnameEnabled: 'boolean',
      connectTimeout: 'number',
      focusHttpBackend: 'boolean',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      loadbalance: 'string',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': DescribeHybridCloudResourcesResponseBodyDomainsRedirectRequestHeaders },
      retry: 'boolean',
      routingRules: 'string',
      sniEnabled: 'boolean',
      sniHost: 'string',
      writeTimeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudResourcesResponseBodyDomains extends $tea.Model {
  cname?: string;
  domain?: string;
  id?: number;
  listen?: DescribeHybridCloudResourcesResponseBodyDomainsListen;
  redirect?: DescribeHybridCloudResourcesResponseBodyDomainsRedirect;
  resourceManagerResourceGroupId?: string;
  status?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      id: 'Id',
      listen: 'Listen',
      redirect: 'Redirect',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      id: 'number',
      listen: DescribeHybridCloudResourcesResponseBodyDomainsListen,
      redirect: DescribeHybridCloudResourcesResponseBodyDomainsRedirect,
      resourceManagerResourceGroupId: 'string',
      status: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudUserResponseBodyUserInfo extends $tea.Model {
  httpPorts?: string;
  httpsPorts?: string;
  static names(): { [key: string]: string } {
    return {
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpPorts: 'string',
      httpsPorts: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyDetails extends $tea.Model {
  aclRuleMaxIpCount?: number;
  antiScan?: boolean;
  antiScanTemplateMaxCount?: number;
  backendMaxCount?: number;
  baseWafGroup?: boolean;
  baseWafGroupRuleInTemplateMaxCount?: number;
  baseWafGroupRuleTemplateMaxCount?: number;
  bot?: boolean;
  botApp?: string;
  botTemplateMaxCount?: number;
  botWeb?: string;
  cnameResourceMaxCount?: number;
  customResponse?: boolean;
  customResponseRuleInTemplateMaxCount?: number;
  customResponseTemplateMaxCount?: number;
  customRule?: boolean;
  customRuleAction?: string;
  customRuleCondition?: string;
  customRuleInTemplateMaxCount?: number;
  customRuleRatelimitor?: string;
  customRuleTemplateMaxCount?: number;
  defenseGroupMaxCount?: number;
  defenseObjectInGroupMaxCount?: number;
  defenseObjectInTemplateMaxCount?: number;
  defenseObjectMaxCount?: number;
  dlp?: boolean;
  dlpRuleInTemplateMaxCount?: number;
  dlpTemplateMaxCount?: number;
  exclusiveIp?: boolean;
  gslb?: boolean;
  httpPorts?: string;
  httpsPorts?: string;
  ipBlacklist?: boolean;
  ipBlacklistIpInRuleMaxCount?: number;
  ipBlacklistRuleInTemplateMaxCount?: number;
  ipBlacklistTemplateMaxCount?: number;
  ipv6?: boolean;
  logService?: boolean;
  majorProtection?: boolean;
  majorProtectionTemplateMaxCount?: number;
  tamperproof?: boolean;
  tamperproofRuleInTemplateMaxCount?: number;
  tamperproofTemplateMaxCount?: number;
  vastIpBlacklistInFileMaxCount?: number;
  vastIpBlacklistInOperationMaxCount?: number;
  vastIpBlacklistMaxCount?: number;
  whitelist?: boolean;
  whitelistLogical?: string;
  whitelistRuleCondition?: string;
  whitelistRuleInTemplateMaxCount?: number;
  whitelistTemplateMaxCount?: number;
  static names(): { [key: string]: string } {
    return {
      aclRuleMaxIpCount: 'AclRuleMaxIpCount',
      antiScan: 'AntiScan',
      antiScanTemplateMaxCount: 'AntiScanTemplateMaxCount',
      backendMaxCount: 'BackendMaxCount',
      baseWafGroup: 'BaseWafGroup',
      baseWafGroupRuleInTemplateMaxCount: 'BaseWafGroupRuleInTemplateMaxCount',
      baseWafGroupRuleTemplateMaxCount: 'BaseWafGroupRuleTemplateMaxCount',
      bot: 'Bot',
      botApp: 'BotApp',
      botTemplateMaxCount: 'BotTemplateMaxCount',
      botWeb: 'BotWeb',
      cnameResourceMaxCount: 'CnameResourceMaxCount',
      customResponse: 'CustomResponse',
      customResponseRuleInTemplateMaxCount: 'CustomResponseRuleInTemplateMaxCount',
      customResponseTemplateMaxCount: 'CustomResponseTemplateMaxCount',
      customRule: 'CustomRule',
      customRuleAction: 'CustomRuleAction',
      customRuleCondition: 'CustomRuleCondition',
      customRuleInTemplateMaxCount: 'CustomRuleInTemplateMaxCount',
      customRuleRatelimitor: 'CustomRuleRatelimitor',
      customRuleTemplateMaxCount: 'CustomRuleTemplateMaxCount',
      defenseGroupMaxCount: 'DefenseGroupMaxCount',
      defenseObjectInGroupMaxCount: 'DefenseObjectInGroupMaxCount',
      defenseObjectInTemplateMaxCount: 'DefenseObjectInTemplateMaxCount',
      defenseObjectMaxCount: 'DefenseObjectMaxCount',
      dlp: 'Dlp',
      dlpRuleInTemplateMaxCount: 'DlpRuleInTemplateMaxCount',
      dlpTemplateMaxCount: 'DlpTemplateMaxCount',
      exclusiveIp: 'ExclusiveIp',
      gslb: 'Gslb',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      ipBlacklist: 'IpBlacklist',
      ipBlacklistIpInRuleMaxCount: 'IpBlacklistIpInRuleMaxCount',
      ipBlacklistRuleInTemplateMaxCount: 'IpBlacklistRuleInTemplateMaxCount',
      ipBlacklistTemplateMaxCount: 'IpBlacklistTemplateMaxCount',
      ipv6: 'Ipv6',
      logService: 'LogService',
      majorProtection: 'MajorProtection',
      majorProtectionTemplateMaxCount: 'MajorProtectionTemplateMaxCount',
      tamperproof: 'Tamperproof',
      tamperproofRuleInTemplateMaxCount: 'TamperproofRuleInTemplateMaxCount',
      tamperproofTemplateMaxCount: 'TamperproofTemplateMaxCount',
      vastIpBlacklistInFileMaxCount: 'VastIpBlacklistInFileMaxCount',
      vastIpBlacklistInOperationMaxCount: 'VastIpBlacklistInOperationMaxCount',
      vastIpBlacklistMaxCount: 'VastIpBlacklistMaxCount',
      whitelist: 'Whitelist',
      whitelistLogical: 'WhitelistLogical',
      whitelistRuleCondition: 'WhitelistRuleCondition',
      whitelistRuleInTemplateMaxCount: 'WhitelistRuleInTemplateMaxCount',
      whitelistTemplateMaxCount: 'WhitelistTemplateMaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRuleMaxIpCount: 'number',
      antiScan: 'boolean',
      antiScanTemplateMaxCount: 'number',
      backendMaxCount: 'number',
      baseWafGroup: 'boolean',
      baseWafGroupRuleInTemplateMaxCount: 'number',
      baseWafGroupRuleTemplateMaxCount: 'number',
      bot: 'boolean',
      botApp: 'string',
      botTemplateMaxCount: 'number',
      botWeb: 'string',
      cnameResourceMaxCount: 'number',
      customResponse: 'boolean',
      customResponseRuleInTemplateMaxCount: 'number',
      customResponseTemplateMaxCount: 'number',
      customRule: 'boolean',
      customRuleAction: 'string',
      customRuleCondition: 'string',
      customRuleInTemplateMaxCount: 'number',
      customRuleRatelimitor: 'string',
      customRuleTemplateMaxCount: 'number',
      defenseGroupMaxCount: 'number',
      defenseObjectInGroupMaxCount: 'number',
      defenseObjectInTemplateMaxCount: 'number',
      defenseObjectMaxCount: 'number',
      dlp: 'boolean',
      dlpRuleInTemplateMaxCount: 'number',
      dlpTemplateMaxCount: 'number',
      exclusiveIp: 'boolean',
      gslb: 'boolean',
      httpPorts: 'string',
      httpsPorts: 'string',
      ipBlacklist: 'boolean',
      ipBlacklistIpInRuleMaxCount: 'number',
      ipBlacklistRuleInTemplateMaxCount: 'number',
      ipBlacklistTemplateMaxCount: 'number',
      ipv6: 'boolean',
      logService: 'boolean',
      majorProtection: 'boolean',
      majorProtectionTemplateMaxCount: 'number',
      tamperproof: 'boolean',
      tamperproofRuleInTemplateMaxCount: 'number',
      tamperproofTemplateMaxCount: 'number',
      vastIpBlacklistInFileMaxCount: 'number',
      vastIpBlacklistInOperationMaxCount: 'number',
      vastIpBlacklistMaxCount: 'number',
      whitelist: 'boolean',
      whitelistLogical: 'string',
      whitelistRuleCondition: 'string',
      whitelistRuleInTemplateMaxCount: 'number',
      whitelistTemplateMaxCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMajorProtectionBlackIpsResponseBodyIpList extends $tea.Model {
  description?: string;
  expiredTime?: number;
  gmtModified?: number;
  ip?: string;
  ruleId?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expiredTime: 'ExpiredTime',
      gmtModified: 'GmtModified',
      ip: 'Ip',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expiredTime: 'number',
      gmtModified: 'number',
      ip: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMemberAccountsResponseBodyAccountInfos extends $tea.Model {
  accountId?: string;
  accountName?: string;
  accountStatus?: string;
  description?: string;
  gmtCreate?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      description: 'Description',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      accountStatus: 'string',
      description: 'string',
      gmtCreate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePeakTrendResponseBodyFlowChart extends $tea.Model {
  aclSum?: number;
  antiScanSum?: number;
  ccSum?: number;
  count?: number;
  index?: number;
  wafSum?: number;
  static names(): { [key: string]: string } {
    return {
      aclSum: 'AclSum',
      antiScanSum: 'AntiScanSum',
      ccSum: 'CcSum',
      count: 'Count',
      index: 'Index',
      wafSum: 'WafSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclSum: 'number',
      antiScanSum: 'number',
      ccSum: 'number',
      count: 'number',
      index: 'number',
      wafSum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductInstancesResponseBodyProductInstancesResourcePortsCertificates extends $tea.Model {
  certificateId?: string;
  certificateName?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      certificateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductInstancesResponseBodyProductInstancesResourcePorts extends $tea.Model {
  certificates?: DescribeProductInstancesResponseBodyProductInstancesResourcePortsCertificates[];
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': DescribeProductInstancesResponseBodyProductInstancesResourcePortsCertificates },
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductInstancesResponseBodyProductInstances extends $tea.Model {
  ownerUserId?: string;
  resourceInstanceId?: string;
  resourceIp?: string;
  resourceName?: string;
  resourcePorts?: DescribeProductInstancesResponseBodyProductInstancesResourcePorts[];
  resourceProduct?: string;
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerUserId: 'OwnerUserId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceIp: 'ResourceIp',
      resourceName: 'ResourceName',
      resourcePorts: 'ResourcePorts',
      resourceProduct: 'ResourceProduct',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUserId: 'string',
      resourceInstanceId: 'string',
      resourceIp: 'string',
      resourceName: 'string',
      resourcePorts: { 'type': 'array', 'itemType': DescribeProductInstancesResponseBodyProductInstancesResourcePorts },
      resourceProduct: 'string',
      resourceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceInstanceCertsResponseBodyCerts extends $tea.Model {
  afterDate?: number;
  beforeDate?: number;
  certIdentifier?: string;
  certName?: string;
  commonName?: string;
  domain?: string;
  isChainCompleted?: boolean;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      beforeDate: 'BeforeDate',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
      domain: 'Domain',
      isChainCompleted: 'IsChainCompleted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      beforeDate: 'number',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      domain: 'string',
      isChainCompleted: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceLogStatusResponseBodyResult extends $tea.Model {
  resource?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResponseCodeTrendGraphResponseBodyResponseCodes extends $tea.Model {
  code302Pv?: number;
  code405Pv?: number;
  code444Pv?: number;
  code499Pv?: number;
  code5xxPv?: number;
  index?: number;
  static names(): { [key: string]: string } {
    return {
      code302Pv: '302Pv',
      code405Pv: '405Pv',
      code444Pv: '444Pv',
      code499Pv: '499Pv',
      code5xxPv: '5xxPv',
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code302Pv: 'number',
      code405Pv: 'number',
      code444Pv: 'number',
      code499Pv: 'number',
      code5xxPv: 'number',
      index: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleGroupsResponseBodyRuleGroups extends $tea.Model {
  gmtModified?: number;
  isSubscribe?: number;
  parentRuleGroupId?: number;
  ruleGroupId?: number;
  ruleGroupName?: string;
  ruleTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      isSubscribe: 'IsSubscribe',
      parentRuleGroupId: 'ParentRuleGroupId',
      ruleGroupId: 'RuleGroupId',
      ruleGroupName: 'RuleGroupName',
      ruleTotalCount: 'RuleTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'number',
      isSubscribe: 'number',
      parentRuleGroupId: 'number',
      ruleGroupId: 'number',
      ruleGroupName: 'string',
      ruleTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopClientIpResponseBodyRuleHitsTopClientIp extends $tea.Model {
  clientIp?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopResourceResponseBodyRuleHitsTopResource extends $tea.Model {
  count?: number;
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopRuleIdResponseBodyRuleHitsTopRuleId extends $tea.Model {
  count?: number;
  resource?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      resource: 'Resource',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      resource: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopTuleTypeResponseBodyRuleHitsTopTuleType extends $tea.Model {
  count?: number;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUaResponseBodyRuleHitsTopUa extends $tea.Model {
  count?: number;
  ua?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ua: 'Ua',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ua: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUrlResponseBodyRuleHitsTopUrl extends $tea.Model {
  count?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResourceCountResponseBodyResourceCount extends $tea.Model {
  groupCount?: number;
  singleCount?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      groupCount: 'GroupCount',
      singleCount: 'SingleCount',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupCount: 'number',
      singleCount: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitTopIpResponseBodyTopIp extends $tea.Model {
  area?: string;
  count?: number;
  ip?: string;
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      count: 'Count',
      ip: 'Ip',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      count: 'number',
      ip: 'string',
      isp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitUasResponseBodyUas extends $tea.Model {
  count?: number;
  ua?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ua: 'Ua',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ua: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentResponseBodyWafSourceIp extends $tea.Model {
  IPv4?: string[];
  IPv6?: string[];
  static names(): { [key: string]: string } {
    return {
      IPv4: 'IPv4',
      IPv6: 'IPv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv4: { 'type': 'array', 'itemType': 'string' },
      IPv6: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyKeys extends $tea.Model {
  category?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      key: 'string',
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
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

export class ModifyDomainRequestListen extends $tea.Model {
  certId?: string;
  cipherSuite?: number;
  customCiphers?: string[];
  enableTLSv3?: boolean;
  exclusiveIp?: boolean;
  focusHttps?: boolean;
  http2Enabled?: boolean;
  httpPorts?: number[];
  httpsPorts?: number[];
  IPv6Enabled?: boolean;
  protectionResource?: string;
  SM2AccessOnly?: boolean;
  SM2CertId?: string;
  SM2Enabled?: boolean;
  TLSVersion?: string;
  xffHeaderMode?: number;
  xffHeaders?: string[];
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      exclusiveIp: 'ExclusiveIp',
      focusHttps: 'FocusHttps',
      http2Enabled: 'Http2Enabled',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      IPv6Enabled: 'IPv6Enabled',
      protectionResource: 'ProtectionResource',
      SM2AccessOnly: 'SM2AccessOnly',
      SM2CertId: 'SM2CertId',
      SM2Enabled: 'SM2Enabled',
      TLSVersion: 'TLSVersion',
      xffHeaderMode: 'XffHeaderMode',
      xffHeaders: 'XffHeaders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      enableTLSv3: 'boolean',
      exclusiveIp: 'boolean',
      focusHttps: 'boolean',
      http2Enabled: 'boolean',
      httpPorts: { 'type': 'array', 'itemType': 'number' },
      httpsPorts: { 'type': 'array', 'itemType': 'number' },
      IPv6Enabled: 'boolean',
      protectionResource: 'string',
      SM2AccessOnly: 'boolean',
      SM2CertId: 'string',
      SM2Enabled: 'boolean',
      TLSVersion: 'string',
      xffHeaderMode: 'number',
      xffHeaders: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainRequestRedirectRequestHeaders extends $tea.Model {
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

export class ModifyDomainRequestRedirect extends $tea.Model {
  backends?: string[];
  cnameEnabled?: boolean;
  connectTimeout?: number;
  focusHttpBackend?: boolean;
  keepalive?: boolean;
  keepaliveRequests?: number;
  keepaliveTimeout?: number;
  loadbalance?: string;
  readTimeout?: number;
  requestHeaders?: ModifyDomainRequestRedirectRequestHeaders[];
  retry?: boolean;
  routingRules?: string;
  sniEnabled?: boolean;
  sniHost?: string;
  writeTimeout?: number;
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      backends: 'Backends',
      cnameEnabled: 'CnameEnabled',
      connectTimeout: 'ConnectTimeout',
      focusHttpBackend: 'FocusHttpBackend',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      loadbalance: 'Loadbalance',
      readTimeout: 'ReadTimeout',
      requestHeaders: 'RequestHeaders',
      retry: 'Retry',
      routingRules: 'RoutingRules',
      sniEnabled: 'SniEnabled',
      sniHost: 'SniHost',
      writeTimeout: 'WriteTimeout',
      xffProto: 'XffProto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backends: { 'type': 'array', 'itemType': 'string' },
      cnameEnabled: 'boolean',
      connectTimeout: 'number',
      focusHttpBackend: 'boolean',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      loadbalance: 'string',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': ModifyDomainRequestRedirectRequestHeaders },
      retry: 'boolean',
      routingRules: 'string',
      sniEnabled: 'boolean',
      sniHost: 'string',
      writeTimeout: 'number',
      xffProto: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainResponseBodyDomainInfo extends $tea.Model {
  cname?: string;
  domain?: string;
  domainId?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      domainId: 'DomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      domainId: 'string',
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

  /**
   * @summary Clears an IP address blacklist for major event protection.
   *
   * @param request ClearMajorProtectionBlackIpRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ClearMajorProtectionBlackIpResponse
   */
  async clearMajorProtectionBlackIpWithOptions(request: ClearMajorProtectionBlackIpRequest, runtime: $Util.RuntimeOptions): Promise<ClearMajorProtectionBlackIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ClearMajorProtectionBlackIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ClearMajorProtectionBlackIpResponse>(await this.callApi(params, req, runtime), new ClearMajorProtectionBlackIpResponse({}));
  }

  /**
   * @summary Clears an IP address blacklist for major event protection.
   *
   * @param request ClearMajorProtectionBlackIpRequest
   * @return ClearMajorProtectionBlackIpResponse
   */
  async clearMajorProtectionBlackIp(request: ClearMajorProtectionBlackIpRequest): Promise<ClearMajorProtectionBlackIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearMajorProtectionBlackIpWithOptions(request, runtime);
  }

  /**
   * @summary Creates a new protection template from the copy.
   *
   * @param request CopyDefenseTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CopyDefenseTemplateResponse
   */
  async copyDefenseTemplateWithOptions(request: CopyDefenseTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CopyDefenseTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CopyDefenseTemplate",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CopyDefenseTemplateResponse>(await this.callApi(params, req, runtime), new CopyDefenseTemplateResponse({}));
  }

  /**
   * @summary Creates a new protection template from the copy.
   *
   * @param request CopyDefenseTemplateRequest
   * @return CopyDefenseTemplateResponse
   */
  async copyDefenseTemplate(request: CopyDefenseTemplateRequest): Promise<CopyDefenseTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyDefenseTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Creates a protected object group.
   *
   * @param request CreateDefenseResourceGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDefenseResourceGroupResponse
   */
  async createDefenseResourceGroupWithOptions(request: CreateDefenseResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDefenseResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addList)) {
      query["AddList"] = request.addList;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDefenseResourceGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDefenseResourceGroupResponse>(await this.callApi(params, req, runtime), new CreateDefenseResourceGroupResponse({}));
  }

  /**
   * @summary Creates a protected object group.
   *
   * @param request CreateDefenseResourceGroupRequest
   * @return CreateDefenseResourceGroupResponse
   */
  async createDefenseResourceGroup(request: CreateDefenseResourceGroupRequest): Promise<CreateDefenseResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDefenseResourceGroupWithOptions(request, runtime);
  }

  /**
   * @summary Creates a protection rule.
   *
   * @param request CreateDefenseRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDefenseRuleResponse
   */
  async createDefenseRuleWithOptions(request: CreateDefenseRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateDefenseRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.rules)) {
      query["Rules"] = request.rules;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDefenseRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDefenseRuleResponse>(await this.callApi(params, req, runtime), new CreateDefenseRuleResponse({}));
  }

  /**
   * @summary Creates a protection rule.
   *
   * @param request CreateDefenseRuleRequest
   * @return CreateDefenseRuleResponse
   */
  async createDefenseRule(request: CreateDefenseRuleRequest): Promise<CreateDefenseRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDefenseRuleWithOptions(request, runtime);
  }

  /**
   * @summary Creates a protection rule template.
   *
   * @param request CreateDefenseTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDefenseTemplateResponse
   */
  async createDefenseTemplateWithOptions(request: CreateDefenseTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateDefenseTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateOrigin)) {
      query["TemplateOrigin"] = request.templateOrigin;
    }

    if (!Util.isUnset(request.templateStatus)) {
      query["TemplateStatus"] = request.templateStatus;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDefenseTemplate",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDefenseTemplateResponse>(await this.callApi(params, req, runtime), new CreateDefenseTemplateResponse({}));
  }

  /**
   * @summary Creates a protection rule template.
   *
   * @param request CreateDefenseTemplateRequest
   * @return CreateDefenseTemplateResponse
   */
  async createDefenseTemplate(request: CreateDefenseTemplateRequest): Promise<CreateDefenseTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDefenseTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Adds a domain name to Web Application Firewall (WAF).
   *
   * @param tmpReq CreateDomainRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDomainResponse
   */
  async createDomainWithOptions(tmpReq: CreateDomainRequest, runtime: $Util.RuntimeOptions): Promise<CreateDomainResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDomainShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listen)) {
      request.listenShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listen, "Listen", "json");
    }

    if (!Util.isUnset(tmpReq.redirect)) {
      request.redirectShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.redirect, "Redirect", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.listenShrink)) {
      query["Listen"] = request.listenShrink;
    }

    if (!Util.isUnset(request.redirectShrink)) {
      query["Redirect"] = request.redirectShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDomain",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDomainResponse>(await this.callApi(params, req, runtime), new CreateDomainResponse({}));
  }

  /**
   * @summary Adds a domain name to Web Application Firewall (WAF).
   *
   * @param request CreateDomainRequest
   * @return CreateDomainResponse
   */
  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  /**
   * @summary Creates an IP address blacklist for major event protection.
   *
   * @description This operation is available only on the China site (aliyun.com).
   *
   * @param request CreateMajorProtectionBlackIpRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateMajorProtectionBlackIpResponse
   */
  async createMajorProtectionBlackIpWithOptions(request: CreateMajorProtectionBlackIpRequest, runtime: $Util.RuntimeOptions): Promise<CreateMajorProtectionBlackIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ipList)) {
      query["IpList"] = request.ipList;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMajorProtectionBlackIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMajorProtectionBlackIpResponse>(await this.callApi(params, req, runtime), new CreateMajorProtectionBlackIpResponse({}));
  }

  /**
   * @summary Creates an IP address blacklist for major event protection.
   *
   * @description This operation is available only on the China site (aliyun.com).
   *
   * @param request CreateMajorProtectionBlackIpRequest
   * @return CreateMajorProtectionBlackIpResponse
   */
  async createMajorProtectionBlackIp(request: CreateMajorProtectionBlackIpRequest): Promise<CreateMajorProtectionBlackIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMajorProtectionBlackIpWithOptions(request, runtime);
  }

  /**
   * @summary Adds members to use the multi-account management feature of Web Application Firewall (WAF).
   *
   * @param request CreateMemberAccountsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateMemberAccountsResponse
   */
  async createMemberAccountsWithOptions(request: CreateMemberAccountsRequest, runtime: $Util.RuntimeOptions): Promise<CreateMemberAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.memberAccountIds)) {
      query["MemberAccountIds"] = request.memberAccountIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMemberAccounts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMemberAccountsResponse>(await this.callApi(params, req, runtime), new CreateMemberAccountsResponse({}));
  }

  /**
   * @summary Adds members to use the multi-account management feature of Web Application Firewall (WAF).
   *
   * @param request CreateMemberAccountsRequest
   * @return CreateMemberAccountsResponse
   */
  async createMemberAccounts(request: CreateMemberAccountsRequest): Promise<CreateMemberAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMemberAccountsWithOptions(request, runtime);
  }

  /**
   * @summary Creates a pay-as-you-go Web Application Firewall (WAF) 3.0 instance.
   *
   * @param request CreatePostpaidInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreatePostpaidInstanceResponse
   */
  async createPostpaidInstanceWithOptions(request: CreatePostpaidInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreatePostpaidInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePostpaidInstance",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePostpaidInstanceResponse>(await this.callApi(params, req, runtime), new CreatePostpaidInstanceResponse({}));
  }

  /**
   * @summary Creates a pay-as-you-go Web Application Firewall (WAF) 3.0 instance.
   *
   * @param request CreatePostpaidInstanceRequest
   * @return CreatePostpaidInstanceResponse
   */
  async createPostpaidInstance(request: CreatePostpaidInstanceRequest): Promise<CreatePostpaidInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPostpaidInstanceWithOptions(request, runtime);
  }

  /**
   * @summary Uploads a ShangMi (SM) certificate for a domain name that is added to Web Application Firewall (WAF) in CNAME record mode.
   *
   * @param request CreateSM2CertRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateSM2CertResponse
   */
  async createSM2CertWithOptions(request: CreateSM2CertRequest, runtime: $Util.RuntimeOptions): Promise<CreateSM2CertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.encryptCertificate)) {
      query["EncryptCertificate"] = request.encryptCertificate;
    }

    if (!Util.isUnset(request.encryptPrivateKey)) {
      query["EncryptPrivateKey"] = request.encryptPrivateKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.signCertificate)) {
      query["SignCertificate"] = request.signCertificate;
    }

    if (!Util.isUnset(request.signPrivateKey)) {
      query["SignPrivateKey"] = request.signPrivateKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSM2Cert",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSM2CertResponse>(await this.callApi(params, req, runtime), new CreateSM2CertResponse({}));
  }

  /**
   * @summary Uploads a ShangMi (SM) certificate for a domain name that is added to Web Application Firewall (WAF) in CNAME record mode.
   *
   * @param request CreateSM2CertRequest
   * @return CreateSM2CertResponse
   */
  async createSM2Cert(request: CreateSM2CertRequest): Promise<CreateSM2CertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSM2CertWithOptions(request, runtime);
  }

  /**
   * @summary 删除API安全风险
   *
   * @param request DeleteApisecAbnormalRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteApisecAbnormalResponse
   */
  async deleteApisecAbnormalWithOptions(request: DeleteApisecAbnormalRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApisecAbnormalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.abnormalId)) {
      query["AbnormalId"] = request.abnormalId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApisecAbnormal",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApisecAbnormalResponse>(await this.callApi(params, req, runtime), new DeleteApisecAbnormalResponse({}));
  }

  /**
   * @summary 删除API安全风险
   *
   * @param request DeleteApisecAbnormalRequest
   * @return DeleteApisecAbnormalResponse
   */
  async deleteApisecAbnormal(request: DeleteApisecAbnormalRequest): Promise<DeleteApisecAbnormalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApisecAbnormalWithOptions(request, runtime);
  }

  /**
   * @summary 删除API安全事件
   *
   * @param request DeleteApisecEventRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteApisecEventResponse
   */
  async deleteApisecEventWithOptions(request: DeleteApisecEventRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApisecEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApisecEvent",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApisecEventResponse>(await this.callApi(params, req, runtime), new DeleteApisecEventResponse({}));
  }

  /**
   * @summary 删除API安全事件
   *
   * @param request DeleteApisecEventRequest
   * @return DeleteApisecEventResponse
   */
  async deleteApisecEvent(request: DeleteApisecEventRequest): Promise<DeleteApisecEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApisecEventWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a protected object group.
   *
   * @param request DeleteDefenseResourceGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDefenseResourceGroupResponse
   */
  async deleteDefenseResourceGroupWithOptions(request: DeleteDefenseResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDefenseResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDefenseResourceGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDefenseResourceGroupResponse>(await this.callApi(params, req, runtime), new DeleteDefenseResourceGroupResponse({}));
  }

  /**
   * @summary Deletes a protected object group.
   *
   * @param request DeleteDefenseResourceGroupRequest
   * @return DeleteDefenseResourceGroupResponse
   */
  async deleteDefenseResourceGroup(request: DeleteDefenseResourceGroupRequest): Promise<DeleteDefenseResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDefenseResourceGroupWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a protection rule.
   *
   * @param request DeleteDefenseRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDefenseRuleResponse
   */
  async deleteDefenseRuleWithOptions(request: DeleteDefenseRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDefenseRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDefenseRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDefenseRuleResponse>(await this.callApi(params, req, runtime), new DeleteDefenseRuleResponse({}));
  }

  /**
   * @summary Deletes a protection rule.
   *
   * @param request DeleteDefenseRuleRequest
   * @return DeleteDefenseRuleResponse
   */
  async deleteDefenseRule(request: DeleteDefenseRuleRequest): Promise<DeleteDefenseRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDefenseRuleWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a protection rule template.
   *
   * @param request DeleteDefenseTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDefenseTemplateResponse
   */
  async deleteDefenseTemplateWithOptions(request: DeleteDefenseTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDefenseTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDefenseTemplate",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDefenseTemplateResponse>(await this.callApi(params, req, runtime), new DeleteDefenseTemplateResponse({}));
  }

  /**
   * @summary Deletes a protection rule template.
   *
   * @param request DeleteDefenseTemplateRequest
   * @return DeleteDefenseTemplateResponse
   */
  async deleteDefenseTemplate(request: DeleteDefenseTemplateRequest): Promise<DeleteDefenseTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDefenseTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a domain name that is added to Web Application Firewall (WAF).
   *
   * @param request DeleteDomainRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
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
      action: "DeleteDomain",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainResponse>(await this.callApi(params, req, runtime), new DeleteDomainResponse({}));
  }

  /**
   * @summary Deletes a domain name that is added to Web Application Firewall (WAF).
   *
   * @param request DeleteDomainRequest
   * @return DeleteDomainResponse
   */
  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an IP address blacklist for major event protection.
   *
   * @param request DeleteMajorProtectionBlackIpRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteMajorProtectionBlackIpResponse
   */
  async deleteMajorProtectionBlackIpWithOptions(request: DeleteMajorProtectionBlackIpRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMajorProtectionBlackIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ipList)) {
      query["IpList"] = request.ipList;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMajorProtectionBlackIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMajorProtectionBlackIpResponse>(await this.callApi(params, req, runtime), new DeleteMajorProtectionBlackIpResponse({}));
  }

  /**
   * @summary Deletes an IP address blacklist for major event protection.
   *
   * @param request DeleteMajorProtectionBlackIpRequest
   * @return DeleteMajorProtectionBlackIpResponse
   */
  async deleteMajorProtectionBlackIp(request: DeleteMajorProtectionBlackIpRequest): Promise<DeleteMajorProtectionBlackIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMajorProtectionBlackIpWithOptions(request, runtime);
  }

  /**
   * @summary Removes the members that are added for multi-account management in Web Application Firewall (WAF).
   *
   * @param request DeleteMemberAccountRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteMemberAccountResponse
   */
  async deleteMemberAccountWithOptions(request: DeleteMemberAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMemberAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.memberAccountId)) {
      query["MemberAccountId"] = request.memberAccountId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMemberAccount",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMemberAccountResponse>(await this.callApi(params, req, runtime), new DeleteMemberAccountResponse({}));
  }

  /**
   * @summary Removes the members that are added for multi-account management in Web Application Firewall (WAF).
   *
   * @param request DeleteMemberAccountRequest
   * @return DeleteMemberAccountResponse
   */
  async deleteMemberAccount(request: DeleteMemberAccountRequest): Promise<DeleteMemberAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMemberAccountWithOptions(request, runtime);
  }

  /**
   * @summary Queries whether an Alibaba Cloud account is the delegated administrator account of a Web Application Firewall (WAF) instance.
   *
   * @param request DescribeAccountDelegatedStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAccountDelegatedStatusResponse
   */
  async describeAccountDelegatedStatusWithOptions(request: DescribeAccountDelegatedStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountDelegatedStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccountDelegatedStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountDelegatedStatusResponse>(await this.callApi(params, req, runtime), new DescribeAccountDelegatedStatusResponse({}));
  }

  /**
   * @summary Queries whether an Alibaba Cloud account is the delegated administrator account of a Web Application Firewall (WAF) instance.
   *
   * @param request DescribeAccountDelegatedStatusRequest
   * @return DescribeAccountDelegatedStatusResponse
   */
  async describeAccountDelegatedStatus(request: DescribeAccountDelegatedStatusRequest): Promise<DescribeAccountDelegatedStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountDelegatedStatusWithOptions(request, runtime);
  }

  /**
   * @summary 查询API安全风险站点统计
   *
   * @param request DescribeApisecAbnormalDomainStatisticRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApisecAbnormalDomainStatisticResponse
   */
  async describeApisecAbnormalDomainStatisticWithOptions(request: DescribeApisecAbnormalDomainStatisticRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisecAbnormalDomainStatisticResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderWay)) {
      query["OrderWay"] = request.orderWay;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisecAbnormalDomainStatistic",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisecAbnormalDomainStatisticResponse>(await this.callApi(params, req, runtime), new DescribeApisecAbnormalDomainStatisticResponse({}));
  }

  /**
   * @summary 查询API安全风险站点统计
   *
   * @param request DescribeApisecAbnormalDomainStatisticRequest
   * @return DescribeApisecAbnormalDomainStatisticResponse
   */
  async describeApisecAbnormalDomainStatistic(request: DescribeApisecAbnormalDomainStatisticRequest): Promise<DescribeApisecAbnormalDomainStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisecAbnormalDomainStatisticWithOptions(request, runtime);
  }

  /**
   * @summary 查询API安全资产趋势图
   *
   * @param request DescribeApisecAssetTrendRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApisecAssetTrendResponse
   */
  async describeApisecAssetTrendWithOptions(request: DescribeApisecAssetTrendRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisecAssetTrendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisecAssetTrend",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisecAssetTrendResponse>(await this.callApi(params, req, runtime), new DescribeApisecAssetTrendResponse({}));
  }

  /**
   * @summary 查询API安全资产趋势图
   *
   * @param request DescribeApisecAssetTrendRequest
   * @return DescribeApisecAssetTrendResponse
   */
  async describeApisecAssetTrend(request: DescribeApisecAssetTrendRequest): Promise<DescribeApisecAssetTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisecAssetTrendWithOptions(request, runtime);
  }

  /**
   * @summary 查询API安全事件站点统计
   *
   * @param request DescribeApisecEventDomainStatisticRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApisecEventDomainStatisticResponse
   */
  async describeApisecEventDomainStatisticWithOptions(request: DescribeApisecEventDomainStatisticRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisecEventDomainStatisticResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderWay)) {
      query["OrderWay"] = request.orderWay;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisecEventDomainStatistic",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisecEventDomainStatisticResponse>(await this.callApi(params, req, runtime), new DescribeApisecEventDomainStatisticResponse({}));
  }

  /**
   * @summary 查询API安全事件站点统计
   *
   * @param request DescribeApisecEventDomainStatisticRequest
   * @return DescribeApisecEventDomainStatisticResponse
   */
  async describeApisecEventDomainStatistic(request: DescribeApisecEventDomainStatisticRequest): Promise<DescribeApisecEventDomainStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisecEventDomainStatisticWithOptions(request, runtime);
  }

  /**
   * @summary Queries the configurations of API security log subscription.
   *
   * @param request DescribeApisecLogDeliveriesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApisecLogDeliveriesResponse
   */
  async describeApisecLogDeliveriesWithOptions(request: DescribeApisecLogDeliveriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisecLogDeliveriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisecLogDeliveries",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisecLogDeliveriesResponse>(await this.callApi(params, req, runtime), new DescribeApisecLogDeliveriesResponse({}));
  }

  /**
   * @summary Queries the configurations of API security log subscription.
   *
   * @param request DescribeApisecLogDeliveriesRequest
   * @return DescribeApisecLogDeliveriesResponse
   */
  async describeApisecLogDeliveries(request: DescribeApisecLogDeliveriesRequest): Promise<DescribeApisecLogDeliveriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisecLogDeliveriesWithOptions(request, runtime);
  }

  /**
   * @summary 查询API安全敏感数据类型统计
   *
   * @param request DescribeApisecSensitiveDomainStatisticRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApisecSensitiveDomainStatisticResponse
   */
  async describeApisecSensitiveDomainStatisticWithOptions(request: DescribeApisecSensitiveDomainStatisticRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisecSensitiveDomainStatisticResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderWay)) {
      query["OrderWay"] = request.orderWay;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
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
      action: "DescribeApisecSensitiveDomainStatistic",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisecSensitiveDomainStatisticResponse>(await this.callApi(params, req, runtime), new DescribeApisecSensitiveDomainStatisticResponse({}));
  }

  /**
   * @summary 查询API安全敏感数据类型统计
   *
   * @param request DescribeApisecSensitiveDomainStatisticRequest
   * @return DescribeApisecSensitiveDomainStatisticResponse
   */
  async describeApisecSensitiveDomainStatistic(request: DescribeApisecSensitiveDomainStatisticRequest): Promise<DescribeApisecSensitiveDomainStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisecSensitiveDomainStatisticWithOptions(request, runtime);
  }

  /**
   * @summary Queries the Logstores whose names start with apisec- in Simple Log Service.
   *
   * @param request DescribeApisecSlsLogStoresRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApisecSlsLogStoresResponse
   */
  async describeApisecSlsLogStoresWithOptions(request: DescribeApisecSlsLogStoresRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisecSlsLogStoresResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.logRegionId)) {
      query["LogRegionId"] = request.logRegionId;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisecSlsLogStores",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisecSlsLogStoresResponse>(await this.callApi(params, req, runtime), new DescribeApisecSlsLogStoresResponse({}));
  }

  /**
   * @summary Queries the Logstores whose names start with apisec- in Simple Log Service.
   *
   * @param request DescribeApisecSlsLogStoresRequest
   * @return DescribeApisecSlsLogStoresResponse
   */
  async describeApisecSlsLogStores(request: DescribeApisecSlsLogStoresRequest): Promise<DescribeApisecSlsLogStoresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisecSlsLogStoresWithOptions(request, runtime);
  }

  /**
   * @summary Queries the projects whose names start with apisec- in Simple Log Service.
   *
   * @param request DescribeApisecSlsProjectsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApisecSlsProjectsResponse
   */
  async describeApisecSlsProjectsWithOptions(request: DescribeApisecSlsProjectsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApisecSlsProjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.logRegionId)) {
      query["LogRegionId"] = request.logRegionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApisecSlsProjects",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApisecSlsProjectsResponse>(await this.callApi(params, req, runtime), new DescribeApisecSlsProjectsResponse({}));
  }

  /**
   * @summary Queries the projects whose names start with apisec- in Simple Log Service.
   *
   * @param request DescribeApisecSlsProjectsRequest
   * @return DescribeApisecSlsProjectsResponse
   */
  async describeApisecSlsProjects(request: DescribeApisecSlsProjectsRequest): Promise<DescribeApisecSlsProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApisecSlsProjectsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of a certificate, such as the certificate name, expiration time, issuance time, and associated domain name.
   *
   * @param request DescribeCertDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCertDetailResponse
   */
  async describeCertDetailWithOptions(request: DescribeCertDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCertDetail",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCertDetailResponse>(await this.callApi(params, req, runtime), new DescribeCertDetailResponse({}));
  }

  /**
   * @summary Queries the details of a certificate, such as the certificate name, expiration time, issuance time, and associated domain name.
   *
   * @param request DescribeCertDetailRequest
   * @return DescribeCertDetailResponse
   */
  async describeCertDetail(request: DescribeCertDetailRequest): Promise<DescribeCertDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertDetailWithOptions(request, runtime);
  }

  /**
   * @summary Queries the certificates issued for your domain names that are added to Web Application Firewall (WAF).
   *
   * @param request DescribeCertsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCertsResponse
   */
  async describeCertsWithOptions(request: DescribeCertsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCerts",
      version: "2021-10-01",
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

  /**
   * @summary Queries the certificates issued for your domain names that are added to Web Application Firewall (WAF).
   *
   * @param request DescribeCertsRequest
   * @return DescribeCertsResponse
   */
  async describeCerts(request: DescribeCertsRequest): Promise<DescribeCertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertsWithOptions(request, runtime);
  }

  /**
   * @summary Queries cloud service resources that are added to Web Application Firewall (WAF).
   *
   * @param request DescribeCloudResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCloudResourcesResponse
   */
  async describeCloudResourcesWithOptions(request: DescribeCloudResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceDomain)) {
      query["ResourceDomain"] = request.resourceDomain;
    }

    if (!Util.isUnset(request.resourceFunction)) {
      query["ResourceFunction"] = request.resourceFunction;
    }

    if (!Util.isUnset(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!Util.isUnset(request.resourceRouteName)) {
      query["ResourceRouteName"] = request.resourceRouteName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudResourcesResponse>(await this.callApi(params, req, runtime), new DescribeCloudResourcesResponse({}));
  }

  /**
   * @summary Queries cloud service resources that are added to Web Application Firewall (WAF).
   *
   * @param request DescribeCloudResourcesRequest
   * @return DescribeCloudResourcesResponse
   */
  async describeCloudResources(request: DescribeCloudResourcesRequest): Promise<DescribeCloudResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Checks whether DDoS attacks occur on specific domain names protected by a Web Application Firewall (WAF) instance.
   *
   * @param request DescribeDDoSStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDDoSStatusResponse
   */
  async describeDDoSStatusWithOptions(request: DescribeDDoSStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDoSStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDDoSStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDDoSStatusResponse>(await this.callApi(params, req, runtime), new DescribeDDoSStatusResponse({}));
  }

  /**
   * @summary Checks whether DDoS attacks occur on specific domain names protected by a Web Application Firewall (WAF) instance.
   *
   * @param request DescribeDDoSStatusRequest
   * @return DescribeDDoSStatusResponse
   */
  async describeDDoSStatus(request: DescribeDDoSStatusRequest): Promise<DescribeDDoSStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDoSStatusWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about a protected object.
   *
   * @param request DescribeDefenseResourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDefenseResourceResponse
   */
  async describeDefenseResourceWithOptions(request: DescribeDefenseResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseResourceResponse>(await this.callApi(params, req, runtime), new DescribeDefenseResourceResponse({}));
  }

  /**
   * @summary Queries the information about a protected object.
   *
   * @param request DescribeDefenseResourceRequest
   * @return DescribeDefenseResourceResponse
   */
  async describeDefenseResource(request: DescribeDefenseResourceRequest): Promise<DescribeDefenseResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseResourceWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about a protected object group.
   *
   * @param request DescribeDefenseResourceGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDefenseResourceGroupResponse
   */
  async describeDefenseResourceGroupWithOptions(request: DescribeDefenseResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseResourceGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseResourceGroupResponse>(await this.callApi(params, req, runtime), new DescribeDefenseResourceGroupResponse({}));
  }

  /**
   * @summary Queries the information about a protected object group.
   *
   * @param request DescribeDefenseResourceGroupRequest
   * @return DescribeDefenseResourceGroupResponse
   */
  async describeDefenseResourceGroup(request: DescribeDefenseResourceGroupRequest): Promise<DescribeDefenseResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseResourceGroupWithOptions(request, runtime);
  }

  /**
   * @summary Queries the names of protected object groups.
   *
   * @param request DescribeDefenseResourceGroupNamesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDefenseResourceGroupNamesResponse
   */
  async describeDefenseResourceGroupNamesWithOptions(request: DescribeDefenseResourceGroupNamesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseResourceGroupNamesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupNameLike)) {
      query["GroupNameLike"] = request.groupNameLike;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseResourceGroupNames",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseResourceGroupNamesResponse>(await this.callApi(params, req, runtime), new DescribeDefenseResourceGroupNamesResponse({}));
  }

  /**
   * @summary Queries the names of protected object groups.
   *
   * @param request DescribeDefenseResourceGroupNamesRequest
   * @return DescribeDefenseResourceGroupNamesResponse
   */
  async describeDefenseResourceGroupNames(request: DescribeDefenseResourceGroupNamesRequest): Promise<DescribeDefenseResourceGroupNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseResourceGroupNamesWithOptions(request, runtime);
  }

  /**
   * @summary Performs a pagination query to retrieve the information about protected object groups.
   *
   * @param request DescribeDefenseResourceGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDefenseResourceGroupsResponse
   */
  async describeDefenseResourceGroupsWithOptions(request: DescribeDefenseResourceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseResourceGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupNameLike)) {
      query["GroupNameLike"] = request.groupNameLike;
    }

    if (!Util.isUnset(request.groupNames)) {
      query["GroupNames"] = request.groupNames;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseResourceGroups",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseResourceGroupsResponse>(await this.callApi(params, req, runtime), new DescribeDefenseResourceGroupsResponse({}));
  }

  /**
   * @summary Performs a pagination query to retrieve the information about protected object groups.
   *
   * @param request DescribeDefenseResourceGroupsRequest
   * @return DescribeDefenseResourceGroupsResponse
   */
  async describeDefenseResourceGroups(request: DescribeDefenseResourceGroupsRequest): Promise<DescribeDefenseResourceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseResourceGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Performs a pagination query to retrieve the names of protected objects.
   *
   * @param request DescribeDefenseResourceNamesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDefenseResourceNamesResponse
   */
  async describeDefenseResourceNamesWithOptions(request: DescribeDefenseResourceNamesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseResourceNamesResponse> {
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseResourceNames",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseResourceNamesResponse>(await this.callApi(params, req, runtime), new DescribeDefenseResourceNamesResponse({}));
  }

  /**
   * @summary Performs a pagination query to retrieve the names of protected objects.
   *
   * @param request DescribeDefenseResourceNamesRequest
   * @return DescribeDefenseResourceNamesResponse
   */
  async describeDefenseResourceNames(request: DescribeDefenseResourceNamesRequest): Promise<DescribeDefenseResourceNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseResourceNamesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the protection templates that are associated with a protected object or protected object group.
   *
   * @param request DescribeDefenseResourceTemplatesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDefenseResourceTemplatesResponse
   */
  async describeDefenseResourceTemplatesWithOptions(request: DescribeDefenseResourceTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseResourceTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseResourceTemplates",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseResourceTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeDefenseResourceTemplatesResponse({}));
  }

  /**
   * @summary Queries the protection templates that are associated with a protected object or protected object group.
   *
   * @param request DescribeDefenseResourceTemplatesRequest
   * @return DescribeDefenseResourceTemplatesResponse
   */
  async describeDefenseResourceTemplates(request: DescribeDefenseResourceTemplatesRequest): Promise<DescribeDefenseResourceTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseResourceTemplatesWithOptions(request, runtime);
  }

  /**
   * @summary Queries protected objects by page.
   *
   * @param request DescribeDefenseResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDefenseResourcesResponse
   */
  async describeDefenseResourcesWithOptions(request: DescribeDefenseResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseResourcesResponse> {
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

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseResourcesResponse>(await this.callApi(params, req, runtime), new DescribeDefenseResourcesResponse({}));
  }

  /**
   * @summary Queries protected objects by page.
   *
   * @param request DescribeDefenseResourcesRequest
   * @return DescribeDefenseResourcesResponse
   */
  async describeDefenseResources(request: DescribeDefenseResourcesRequest): Promise<DescribeDefenseResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Queries a protection rule.
   *
   * @param request DescribeDefenseRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDefenseRuleResponse
   */
  async describeDefenseRuleWithOptions(request: DescribeDefenseRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseRuleResponse>(await this.callApi(params, req, runtime), new DescribeDefenseRuleResponse({}));
  }

  /**
   * @summary Queries a protection rule.
   *
   * @param request DescribeDefenseRuleRequest
   * @return DescribeDefenseRuleResponse
   */
  async describeDefenseRule(request: DescribeDefenseRuleRequest): Promise<DescribeDefenseRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseRuleWithOptions(request, runtime);
  }

  /**
   * @summary Queries protection rules by page.
   *
   * @param request DescribeDefenseRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDefenseRulesResponse
   */
  async describeDefenseRulesWithOptions(request: DescribeDefenseRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseRulesResponse> {
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

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseRules",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseRulesResponse>(await this.callApi(params, req, runtime), new DescribeDefenseRulesResponse({}));
  }

  /**
   * @summary Queries protection rules by page.
   *
   * @param request DescribeDefenseRulesRequest
   * @return DescribeDefenseRulesResponse
   */
  async describeDefenseRules(request: DescribeDefenseRulesRequest): Promise<DescribeDefenseRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseRulesWithOptions(request, runtime);
  }

  /**
   * @summary Queries a protection rule template.
   *
   * @param request DescribeDefenseTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDefenseTemplateResponse
   */
  async describeDefenseTemplateWithOptions(request: DescribeDefenseTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseTemplate",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseTemplateResponse>(await this.callApi(params, req, runtime), new DescribeDefenseTemplateResponse({}));
  }

  /**
   * @summary Queries a protection rule template.
   *
   * @param request DescribeDefenseTemplateRequest
   * @return DescribeDefenseTemplateResponse
   */
  async describeDefenseTemplate(request: DescribeDefenseTemplateRequest): Promise<DescribeDefenseTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Queries the names of protected object groups for which a protection template can take effect.
   *
   * @param request DescribeDefenseTemplateValidGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDefenseTemplateValidGroupsResponse
   */
  async describeDefenseTemplateValidGroupsWithOptions(request: DescribeDefenseTemplateValidGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseTemplateValidGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseTemplateValidGroups",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseTemplateValidGroupsResponse>(await this.callApi(params, req, runtime), new DescribeDefenseTemplateValidGroupsResponse({}));
  }

  /**
   * @summary Queries the names of protected object groups for which a protection template can take effect.
   *
   * @param request DescribeDefenseTemplateValidGroupsRequest
   * @return DescribeDefenseTemplateValidGroupsResponse
   */
  async describeDefenseTemplateValidGroups(request: DescribeDefenseTemplateValidGroupsRequest): Promise<DescribeDefenseTemplateValidGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseTemplateValidGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Performs a paging query to retrieve protection templates.
   *
   * @param request DescribeDefenseTemplatesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDefenseTemplatesResponse
   */
  async describeDefenseTemplatesWithOptions(request: DescribeDefenseTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!Util.isUnset(request.defenseSubScene)) {
      query["DefenseSubScene"] = request.defenseSubScene;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefenseTemplates",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefenseTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeDefenseTemplatesResponse({}));
  }

  /**
   * @summary Performs a paging query to retrieve protection templates.
   *
   * @param request DescribeDefenseTemplatesRequest
   * @return DescribeDefenseTemplatesResponse
   */
  async describeDefenseTemplates(request: DescribeDefenseTemplatesRequest): Promise<DescribeDefenseTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseTemplatesWithOptions(request, runtime);
  }

  /**
   * @summary Checks whether the Domain Name System (DNS) settings of a domain name are properly configured.
   *
   * @param request DescribeDomainDNSRecordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDomainDNSRecordResponse
   */
  async describeDomainDNSRecordWithOptions(request: DescribeDomainDNSRecordRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainDNSRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainDNSRecord",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainDNSRecordResponse>(await this.callApi(params, req, runtime), new DescribeDomainDNSRecordResponse({}));
  }

  /**
   * @summary Checks whether the Domain Name System (DNS) settings of a domain name are properly configured.
   *
   * @param request DescribeDomainDNSRecordRequest
   * @return DescribeDomainDNSRecordResponse
   */
  async describeDomainDNSRecord(request: DescribeDomainDNSRecordRequest): Promise<DescribeDomainDNSRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainDNSRecordWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of a domain name that is added to Web Application Firewall (WAF).
   *
   * @param request DescribeDomainDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDomainDetailResponse
   */
  async describeDomainDetailWithOptions(request: DescribeDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
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
      action: "DescribeDomainDetail",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainDetailResponse>(await this.callApi(params, req, runtime), new DescribeDomainDetailResponse({}));
  }

  /**
   * @summary Queries the details of a domain name that is added to Web Application Firewall (WAF).
   *
   * @param request DescribeDomainDetailRequest
   * @return DescribeDomainDetailResponse
   */
  async describeDomainDetail(request: DescribeDomainDetailRequest): Promise<DescribeDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainDetailWithOptions(request, runtime);
  }

  /**
   * @summary Queries the domain names that are added to Web Application Firewall (WAF).
   *
   * @param request DescribeDomainsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDomainsResponse
   */
  async describeDomainsWithOptions(request: DescribeDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backend)) {
      query["Backend"] = request.backend;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomains",
      version: "2021-10-01",
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

  /**
   * @summary Queries the domain names that are added to Web Application Firewall (WAF).
   *
   * @param request DescribeDomainsRequest
   * @return DescribeDomainsResponse
   */
  async describeDomains(request: DescribeDomainsRequest): Promise<DescribeDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the traffic statistics of requests that are forwarded to Web Application Firewall (WAF).
   *
   * @param request DescribeFlowChartRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeFlowChartResponse
   */
  async describeFlowChartWithOptions(request: DescribeFlowChartRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowChartResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowChart",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowChartResponse>(await this.callApi(params, req, runtime), new DescribeFlowChartResponse({}));
  }

  /**
   * @summary Queries the traffic statistics of requests that are forwarded to Web Application Firewall (WAF).
   *
   * @param request DescribeFlowChartRequest
   * @return DescribeFlowChartResponse
   */
  async describeFlowChart(request: DescribeFlowChartRequest): Promise<DescribeFlowChartResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowChartWithOptions(request, runtime);
  }

  /**
   * @summary Queries the top 10 protected objects that receive requests.
   *
   * @param request DescribeFlowTopResourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeFlowTopResourceResponse
   */
  async describeFlowTopResourceWithOptions(request: DescribeFlowTopResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowTopResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowTopResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowTopResourceResponse>(await this.callApi(params, req, runtime), new DescribeFlowTopResourceResponse({}));
  }

  /**
   * @summary Queries the top 10 protected objects that receive requests.
   *
   * @param request DescribeFlowTopResourceRequest
   * @return DescribeFlowTopResourceResponse
   */
  async describeFlowTopResource(request: DescribeFlowTopResourceRequest): Promise<DescribeFlowTopResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowTopResourceWithOptions(request, runtime);
  }

  /**
   * @summary Queries the top 10 URLs that are used to initiate requests.
   *
   * @param request DescribeFlowTopUrlRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeFlowTopUrlResponse
   */
  async describeFlowTopUrlWithOptions(request: DescribeFlowTopUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowTopUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowTopUrl",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowTopUrlResponse>(await this.callApi(params, req, runtime), new DescribeFlowTopUrlResponse({}));
  }

  /**
   * @summary Queries the top 10 URLs that are used to initiate requests.
   *
   * @param request DescribeFlowTopUrlRequest
   * @return DescribeFlowTopUrlResponse
   */
  async describeFlowTopUrl(request: DescribeFlowTopUrlRequest): Promise<DescribeFlowTopUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowTopUrlWithOptions(request, runtime);
  }

  /**
   * @summary Queries the hybrid cloud node groups that are added to Web Application Firewall (WAF).
   *
   * @param request DescribeHybridCloudGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeHybridCloudGroupsResponse
   */
  async describeHybridCloudGroupsWithOptions(request: DescribeHybridCloudGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHybridCloudGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterProxyType)) {
      query["ClusterProxyType"] = request.clusterProxyType;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHybridCloudGroups",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHybridCloudGroupsResponse>(await this.callApi(params, req, runtime), new DescribeHybridCloudGroupsResponse({}));
  }

  /**
   * @summary Queries the hybrid cloud node groups that are added to Web Application Firewall (WAF).
   *
   * @param request DescribeHybridCloudGroupsRequest
   * @return DescribeHybridCloudGroupsResponse
   */
  async describeHybridCloudGroups(request: DescribeHybridCloudGroupsRequest): Promise<DescribeHybridCloudGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHybridCloudGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the domain names that are added to a Web Application Firewall (WAF) instance in hybrid cloud mode.
   *
   * @param request DescribeHybridCloudResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeHybridCloudResourcesResponse
   */
  async describeHybridCloudResourcesWithOptions(request: DescribeHybridCloudResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHybridCloudResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backend)) {
      query["Backend"] = request.backend;
    }

    if (!Util.isUnset(request.cnameEnabled)) {
      query["CnameEnabled"] = request.cnameEnabled;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHybridCloudResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHybridCloudResourcesResponse>(await this.callApi(params, req, runtime), new DescribeHybridCloudResourcesResponse({}));
  }

  /**
   * @summary Queries the domain names that are added to a Web Application Firewall (WAF) instance in hybrid cloud mode.
   *
   * @param request DescribeHybridCloudResourcesRequest
   * @return DescribeHybridCloudResourcesResponse
   */
  async describeHybridCloudResources(request: DescribeHybridCloudResourcesRequest): Promise<DescribeHybridCloudResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHybridCloudResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the HTTP and HTTPS ports that you can use when you add a domain name to Web Application Firewall (WAF) in hybrid cloud mode.
   *
   * @param request DescribeHybridCloudUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeHybridCloudUserResponse
   */
  async describeHybridCloudUserWithOptions(request: DescribeHybridCloudUserRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHybridCloudUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHybridCloudUser",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHybridCloudUserResponse>(await this.callApi(params, req, runtime), new DescribeHybridCloudUserResponse({}));
  }

  /**
   * @summary Queries the HTTP and HTTPS ports that you can use when you add a domain name to Web Application Firewall (WAF) in hybrid cloud mode.
   *
   * @param request DescribeHybridCloudUserRequest
   * @return DescribeHybridCloudUserResponse
   */
  async describeHybridCloudUser(request: DescribeHybridCloudUserRequest): Promise<DescribeHybridCloudUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHybridCloudUserWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of a Web Application Firewall (WAF) instance within the current Alibaba Cloud account.
   *
   * @param request DescribeInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstanceResponse
   */
  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstance",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceResponse>(await this.callApi(params, req, runtime), new DescribeInstanceResponse({}));
  }

  /**
   * @summary Queries the details of a Web Application Firewall (WAF) instance within the current Alibaba Cloud account.
   *
   * @param request DescribeInstanceRequest
   * @return DescribeInstanceResponse
   */
  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  /**
   * @summary Queries IP addresses in an IP address blacklist for major event protection by page.
   *
   * @param request DescribeMajorProtectionBlackIpsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeMajorProtectionBlackIpsResponse
   */
  async describeMajorProtectionBlackIpsWithOptions(request: DescribeMajorProtectionBlackIpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMajorProtectionBlackIpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ipLike)) {
      query["IpLike"] = request.ipLike;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMajorProtectionBlackIps",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMajorProtectionBlackIpsResponse>(await this.callApi(params, req, runtime), new DescribeMajorProtectionBlackIpsResponse({}));
  }

  /**
   * @summary Queries IP addresses in an IP address blacklist for major event protection by page.
   *
   * @param request DescribeMajorProtectionBlackIpsRequest
   * @return DescribeMajorProtectionBlackIpsResponse
   */
  async describeMajorProtectionBlackIps(request: DescribeMajorProtectionBlackIpsRequest): Promise<DescribeMajorProtectionBlackIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMajorProtectionBlackIpsWithOptions(request, runtime);
  }

  /**
   * @summary Queries information about members.
   *
   * @param request DescribeMemberAccountsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeMemberAccountsResponse
   */
  async describeMemberAccountsWithOptions(request: DescribeMemberAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMemberAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountStatus)) {
      query["AccountStatus"] = request.accountStatus;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMemberAccounts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMemberAccountsResponse>(await this.callApi(params, req, runtime), new DescribeMemberAccountsResponse({}));
  }

  /**
   * @summary Queries information about members.
   *
   * @param request DescribeMemberAccountsRequest
   * @return DescribeMemberAccountsResponse
   */
  async describeMemberAccounts(request: DescribeMemberAccountsRequest): Promise<DescribeMemberAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMemberAccountsWithOptions(request, runtime);
  }

  /**
   * @summary 获取用户暂停防护状态
   *
   * @param request DescribePauseProtectionStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePauseProtectionStatusResponse
   */
  async describePauseProtectionStatusWithOptions(request: DescribePauseProtectionStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribePauseProtectionStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePauseProtectionStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePauseProtectionStatusResponse>(await this.callApi(params, req, runtime), new DescribePauseProtectionStatusResponse({}));
  }

  /**
   * @summary 获取用户暂停防护状态
   *
   * @param request DescribePauseProtectionStatusRequest
   * @return DescribePauseProtectionStatusResponse
   */
  async describePauseProtectionStatus(request: DescribePauseProtectionStatusRequest): Promise<DescribePauseProtectionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePauseProtectionStatusWithOptions(request, runtime);
  }

  /**
   * @summary Queries the queries per second (QPS) statistics of a WAF instance.
   *
   * @param request DescribePeakTrendRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePeakTrendResponse
   */
  async describePeakTrendWithOptions(request: DescribePeakTrendRequest, runtime: $Util.RuntimeOptions): Promise<DescribePeakTrendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePeakTrend",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePeakTrendResponse>(await this.callApi(params, req, runtime), new DescribePeakTrendResponse({}));
  }

  /**
   * @summary Queries the queries per second (QPS) statistics of a WAF instance.
   *
   * @param request DescribePeakTrendRequest
   * @return DescribePeakTrendResponse
   */
  async describePeakTrend(request: DescribePeakTrendRequest): Promise<DescribePeakTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePeakTrendWithOptions(request, runtime);
  }

  /**
   * @summary Queries the cloud service instances to be added to Web Application Firewall (WAF) in transparent proxy mode.
   *
   * @param request DescribeProductInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeProductInstancesResponse
   */
  async describeProductInstancesWithOptions(request: DescribeProductInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProductInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!Util.isUnset(request.resourceIp)) {
      query["ResourceIp"] = request.resourceIp;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProductInstances",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProductInstancesResponse>(await this.callApi(params, req, runtime), new DescribeProductInstancesResponse({}));
  }

  /**
   * @summary Queries the cloud service instances to be added to Web Application Firewall (WAF) in transparent proxy mode.
   *
   * @param request DescribeProductInstancesRequest
   * @return DescribeProductInstancesResponse
   */
  async describeProductInstances(request: DescribeProductInstancesRequest): Promise<DescribeProductInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductInstancesWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of domain names that are added to Web Application Firewall (WAF) and penalized for failing to obtain an Internet Content Provider (ICP) filing.
   *
   * @param request DescribePunishedDomainsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePunishedDomainsResponse
   */
  async describePunishedDomainsWithOptions(request: DescribePunishedDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePunishedDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePunishedDomains",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePunishedDomainsResponse>(await this.callApi(params, req, runtime), new DescribePunishedDomainsResponse({}));
  }

  /**
   * @summary Queries a list of domain names that are added to Web Application Firewall (WAF) and penalized for failing to obtain an Internet Content Provider (ICP) filing.
   *
   * @param request DescribePunishedDomainsRequest
   * @return DescribePunishedDomainsResponse
   */
  async describePunishedDomains(request: DescribePunishedDomainsRequest): Promise<DescribePunishedDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePunishedDomainsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the certificates that are used in cloud service instances. The certificates returned include the certificates within the delegated administrator account and the certificates within members to which specific instances belong. For example, the delegated administrator account has certificate 1, instance lb-xx-1 belongs to member B, and member B has certificate 2. If you specify instance lb-xx-1 in the request, certificate 1 and certificate 2 are returned.
   *
   * @param request DescribeResourceInstanceCertsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeResourceInstanceCertsResponse
   */
  async describeResourceInstanceCertsWithOptions(request: DescribeResourceInstanceCertsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceInstanceCertsResponse> {
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceInstanceCerts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceInstanceCertsResponse>(await this.callApi(params, req, runtime), new DescribeResourceInstanceCertsResponse({}));
  }

  /**
   * @summary Queries the certificates that are used in cloud service instances. The certificates returned include the certificates within the delegated administrator account and the certificates within members to which specific instances belong. For example, the delegated administrator account has certificate 1, instance lb-xx-1 belongs to member B, and member B has certificate 2. If you specify instance lb-xx-1 in the request, certificate 1 and certificate 2 are returned.
   *
   * @param request DescribeResourceInstanceCertsRequest
   * @return DescribeResourceInstanceCertsResponse
   */
  async describeResourceInstanceCerts(request: DescribeResourceInstanceCertsRequest): Promise<DescribeResourceInstanceCertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceInstanceCertsWithOptions(request, runtime);
  }

  /**
   * @summary Queries whether the log collection feature is enabled for a protected object.
   *
   * @param request DescribeResourceLogStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeResourceLogStatusResponse
   */
  async describeResourceLogStatusWithOptions(request: DescribeResourceLogStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceLogStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceLogStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceLogStatusResponse>(await this.callApi(params, req, runtime), new DescribeResourceLogStatusResponse({}));
  }

  /**
   * @summary Queries whether the log collection feature is enabled for a protected object.
   *
   * @param request DescribeResourceLogStatusRequest
   * @return DescribeResourceLogStatusResponse
   */
  async describeResourceLogStatus(request: DescribeResourceLogStatusRequest): Promise<DescribeResourceLogStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceLogStatusWithOptions(request, runtime);
  }

  /**
   * @summary Queries the ports of a cloud service instance that are added to Web Application Firewall (WAF).
   *
   * @param request DescribeResourcePortRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeResourcePortResponse
   */
  async describeResourcePortWithOptions(request: DescribeResourcePortRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourcePortResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourcePort",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourcePortResponse>(await this.callApi(params, req, runtime), new DescribeResourcePortResponse({}));
  }

  /**
   * @summary Queries the ports of a cloud service instance that are added to Web Application Firewall (WAF).
   *
   * @param request DescribeResourcePortRequest
   * @return DescribeResourcePortResponse
   */
  async describeResourcePort(request: DescribeResourcePortRequest): Promise<DescribeResourcePortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourcePortWithOptions(request, runtime);
  }

  /**
   * @summary Queries the region IDs of the resources that are added to Web Application Firewall (WAF) in cloud native mode. The resources include Application Load Balancer (ALB) instances, Microservices Engine (MSE) instances, and custom domain names bound to web applications in Function Compute.
   *
   * @param request DescribeResourceRegionIdRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeResourceRegionIdResponse
   */
  async describeResourceRegionIdWithOptions(request: DescribeResourceRegionIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceRegionIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceRegionId",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceRegionIdResponse>(await this.callApi(params, req, runtime), new DescribeResourceRegionIdResponse({}));
  }

  /**
   * @summary Queries the region IDs of the resources that are added to Web Application Firewall (WAF) in cloud native mode. The resources include Application Load Balancer (ALB) instances, Microservices Engine (MSE) instances, and custom domain names bound to web applications in Function Compute.
   *
   * @param request DescribeResourceRegionIdRequest
   * @return DescribeResourceRegionIdResponse
   */
  async describeResourceRegionId(request: DescribeResourceRegionIdRequest): Promise<DescribeResourceRegionIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceRegionIdWithOptions(request, runtime);
  }

  /**
   * @summary Queries the region IDs of Classic Load Balancer (CLB) and Elastic Compute Service (ECS) instances that can be added to Web Application Firewall (WAF) in transparent proxy mode.
   *
   * @param request DescribeResourceSupportRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeResourceSupportRegionsResponse
   */
  async describeResourceSupportRegionsWithOptions(request: DescribeResourceSupportRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceSupportRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceSupportRegions",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceSupportRegionsResponse>(await this.callApi(params, req, runtime), new DescribeResourceSupportRegionsResponse({}));
  }

  /**
   * @summary Queries the region IDs of Classic Load Balancer (CLB) and Elastic Compute Service (ECS) instances that can be added to Web Application Firewall (WAF) in transparent proxy mode.
   *
   * @param request DescribeResourceSupportRegionsRequest
   * @return DescribeResourceSupportRegionsResponse
   */
  async describeResourceSupportRegions(request: DescribeResourceSupportRegionsRequest): Promise<DescribeResourceSupportRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceSupportRegionsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the trend of the number of error codes that are returned to clients or Web Application Firewall (WAF). The error codes include 302, 405, 444, 499, and 5XX.
   *
   * @param request DescribeResponseCodeTrendGraphRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeResponseCodeTrendGraphResponse
   */
  async describeResponseCodeTrendGraphWithOptions(request: DescribeResponseCodeTrendGraphRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResponseCodeTrendGraphResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResponseCodeTrendGraph",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResponseCodeTrendGraphResponse>(await this.callApi(params, req, runtime), new DescribeResponseCodeTrendGraphResponse({}));
  }

  /**
   * @summary Queries the trend of the number of error codes that are returned to clients or Web Application Firewall (WAF). The error codes include 302, 405, 444, 499, and 5XX.
   *
   * @param request DescribeResponseCodeTrendGraphRequest
   * @return DescribeResponseCodeTrendGraphResponse
   */
  async describeResponseCodeTrendGraph(request: DescribeResponseCodeTrendGraphRequest): Promise<DescribeResponseCodeTrendGraphResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResponseCodeTrendGraphWithOptions(request, runtime);
  }

  /**
   * @summary Queries regular expression rule groups by page.
   *
   * @param request DescribeRuleGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRuleGroupsResponse
   */
  async describeRuleGroupsWithOptions(request: DescribeRuleGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleGroupsResponse> {
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.searchType)) {
      query["SearchType"] = request.searchType;
    }

    if (!Util.isUnset(request.searchValue)) {
      query["SearchValue"] = request.searchValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRuleGroups",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleGroupsResponse>(await this.callApi(params, req, runtime), new DescribeRuleGroupsResponse({}));
  }

  /**
   * @summary Queries regular expression rule groups by page.
   *
   * @param request DescribeRuleGroupsRequest
   * @return DescribeRuleGroupsResponse
   */
  async describeRuleGroups(request: DescribeRuleGroupsRequest): Promise<DescribeRuleGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the top 10 IP addresses from which attacks are initiated.
   *
   * @param request DescribeRuleHitsTopClientIpRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRuleHitsTopClientIpResponse
   */
  async describeRuleHitsTopClientIpWithOptions(request: DescribeRuleHitsTopClientIpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleHitsTopClientIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRuleHitsTopClientIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleHitsTopClientIpResponse>(await this.callApi(params, req, runtime), new DescribeRuleHitsTopClientIpResponse({}));
  }

  /**
   * @summary Queries the top 10 IP addresses from which attacks are initiated.
   *
   * @param request DescribeRuleHitsTopClientIpRequest
   * @return DescribeRuleHitsTopClientIpResponse
   */
  async describeRuleHitsTopClientIp(request: DescribeRuleHitsTopClientIpRequest): Promise<DescribeRuleHitsTopClientIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleHitsTopClientIpWithOptions(request, runtime);
  }

  /**
   * @summary Queries the top 10 protected objects that trigger protection rules.
   *
   * @param request DescribeRuleHitsTopResourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRuleHitsTopResourceResponse
   */
  async describeRuleHitsTopResourceWithOptions(request: DescribeRuleHitsTopResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleHitsTopResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRuleHitsTopResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleHitsTopResourceResponse>(await this.callApi(params, req, runtime), new DescribeRuleHitsTopResourceResponse({}));
  }

  /**
   * @summary Queries the top 10 protected objects that trigger protection rules.
   *
   * @param request DescribeRuleHitsTopResourceRequest
   * @return DescribeRuleHitsTopResourceResponse
   */
  async describeRuleHitsTopResource(request: DescribeRuleHitsTopResourceRequest): Promise<DescribeRuleHitsTopResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleHitsTopResourceWithOptions(request, runtime);
  }

  /**
   * @summary Queries the IDs of the top 10 protection rules that are matched by requests.
   *
   * @param request DescribeRuleHitsTopRuleIdRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRuleHitsTopRuleIdResponse
   */
  async describeRuleHitsTopRuleIdWithOptions(request: DescribeRuleHitsTopRuleIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleHitsTopRuleIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isGroupResource)) {
      query["IsGroupResource"] = request.isGroupResource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRuleHitsTopRuleId",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleHitsTopRuleIdResponse>(await this.callApi(params, req, runtime), new DescribeRuleHitsTopRuleIdResponse({}));
  }

  /**
   * @summary Queries the IDs of the top 10 protection rules that are matched by requests.
   *
   * @param request DescribeRuleHitsTopRuleIdRequest
   * @return DescribeRuleHitsTopRuleIdResponse
   */
  async describeRuleHitsTopRuleId(request: DescribeRuleHitsTopRuleIdRequest): Promise<DescribeRuleHitsTopRuleIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleHitsTopRuleIdWithOptions(request, runtime);
  }

  /**
   * @summary Queries the top 10 protection modules that are matched.
   *
   * @param request DescribeRuleHitsTopTuleTypeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRuleHitsTopTuleTypeResponse
   */
  async describeRuleHitsTopTuleTypeWithOptions(request: DescribeRuleHitsTopTuleTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleHitsTopTuleTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRuleHitsTopTuleType",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleHitsTopTuleTypeResponse>(await this.callApi(params, req, runtime), new DescribeRuleHitsTopTuleTypeResponse({}));
  }

  /**
   * @summary Queries the top 10 protection modules that are matched.
   *
   * @param request DescribeRuleHitsTopTuleTypeRequest
   * @return DescribeRuleHitsTopTuleTypeResponse
   */
  async describeRuleHitsTopTuleType(request: DescribeRuleHitsTopTuleTypeRequest): Promise<DescribeRuleHitsTopTuleTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleHitsTopTuleTypeWithOptions(request, runtime);
  }

  /**
   * @summary Queries the top 10 user agents that are used to initiate attacks.
   *
   * @param request DescribeRuleHitsTopUaRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRuleHitsTopUaResponse
   */
  async describeRuleHitsTopUaWithOptions(request: DescribeRuleHitsTopUaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleHitsTopUaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRuleHitsTopUa",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleHitsTopUaResponse>(await this.callApi(params, req, runtime), new DescribeRuleHitsTopUaResponse({}));
  }

  /**
   * @summary Queries the top 10 user agents that are used to initiate attacks.
   *
   * @param request DescribeRuleHitsTopUaRequest
   * @return DescribeRuleHitsTopUaResponse
   */
  async describeRuleHitsTopUa(request: DescribeRuleHitsTopUaRequest): Promise<DescribeRuleHitsTopUaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleHitsTopUaWithOptions(request, runtime);
  }

  /**
   * @summary Queries the top 10 URLs that trigger protection rules.
   *
   * @param request DescribeRuleHitsTopUrlRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRuleHitsTopUrlResponse
   */
  async describeRuleHitsTopUrlWithOptions(request: DescribeRuleHitsTopUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleHitsTopUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRuleHitsTopUrl",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleHitsTopUrlResponse>(await this.callApi(params, req, runtime), new DescribeRuleHitsTopUrlResponse({}));
  }

  /**
   * @summary Queries the top 10 URLs that trigger protection rules.
   *
   * @param request DescribeRuleHitsTopUrlRequest
   * @return DescribeRuleHitsTopUrlResponse
   */
  async describeRuleHitsTopUrl(request: DescribeRuleHitsTopUrlRequest): Promise<DescribeRuleHitsTopUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleHitsTopUrlWithOptions(request, runtime);
  }

  /**
   * @summary Queries whether Web Application Firewall (WAF) is authorized to access Logstores.
   *
   * @param request DescribeSlsAuthStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSlsAuthStatusResponse
   */
  async describeSlsAuthStatusWithOptions(request: DescribeSlsAuthStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsAuthStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlsAuthStatus",
      version: "2021-10-01",
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

  /**
   * @summary Queries whether Web Application Firewall (WAF) is authorized to access Logstores.
   *
   * @param request DescribeSlsAuthStatusRequest
   * @return DescribeSlsAuthStatusResponse
   */
  async describeSlsAuthStatus(request: DescribeSlsAuthStatusRequest): Promise<DescribeSlsAuthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsAuthStatusWithOptions(request, runtime);
  }

  /**
   * @summary Queries information about a Logstore, such as the total capacity, storage duration, and used capacity.
   *
   * @param request DescribeSlsLogStoreRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSlsLogStoreResponse
   */
  async describeSlsLogStoreWithOptions(request: DescribeSlsLogStoreRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsLogStoreResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlsLogStore",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlsLogStoreResponse>(await this.callApi(params, req, runtime), new DescribeSlsLogStoreResponse({}));
  }

  /**
   * @summary Queries information about a Logstore, such as the total capacity, storage duration, and used capacity.
   *
   * @param request DescribeSlsLogStoreRequest
   * @return DescribeSlsLogStoreResponse
   */
  async describeSlsLogStore(request: DescribeSlsLogStoreRequest): Promise<DescribeSlsLogStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsLogStoreWithOptions(request, runtime);
  }

  /**
   * @summary Queries the status of a Simple Log Service Logstore.
   *
   * @param request DescribeSlsLogStoreStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSlsLogStoreStatusResponse
   */
  async describeSlsLogStoreStatusWithOptions(request: DescribeSlsLogStoreStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsLogStoreStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlsLogStoreStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlsLogStoreStatusResponse>(await this.callApi(params, req, runtime), new DescribeSlsLogStoreStatusResponse({}));
  }

  /**
   * @summary Queries the status of a Simple Log Service Logstore.
   *
   * @param request DescribeSlsLogStoreStatusRequest
   * @return DescribeSlsLogStoreStatusResponse
   */
  async describeSlsLogStoreStatus(request: DescribeSlsLogStoreStatusRequest): Promise<DescribeSlsLogStoreStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsLogStoreStatusWithOptions(request, runtime);
  }

  /**
   * @summary Queries the number of protected resources for which a protection template takes effect.
   *
   * @param request DescribeTemplateResourceCountRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTemplateResourceCountResponse
   */
  async describeTemplateResourceCountWithOptions(request: DescribeTemplateResourceCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTemplateResourceCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTemplateResourceCount",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTemplateResourceCountResponse>(await this.callApi(params, req, runtime), new DescribeTemplateResourceCountResponse({}));
  }

  /**
   * @summary Queries the number of protected resources for which a protection template takes effect.
   *
   * @param request DescribeTemplateResourceCountRequest
   * @return DescribeTemplateResourceCountResponse
   */
  async describeTemplateResourceCount(request: DescribeTemplateResourceCountRequest): Promise<DescribeTemplateResourceCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTemplateResourceCountWithOptions(request, runtime);
  }

  /**
   * @summary Queries the resources that are associated to a protection rule template.
   *
   * @param request DescribeTemplateResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTemplateResourcesResponse
   */
  async describeTemplateResourcesWithOptions(request: DescribeTemplateResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTemplateResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTemplateResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTemplateResourcesResponse>(await this.callApi(params, req, runtime), new DescribeTemplateResourcesResponse({}));
  }

  /**
   * @summary Queries the resources that are associated to a protection rule template.
   *
   * @param request DescribeTemplateResourcesRequest
   * @return DescribeTemplateResourcesResponse
   */
  async describeTemplateResources(request: DescribeTemplateResourcesRequest): Promise<DescribeTemplateResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTemplateResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Queries available regions for log storage.
   *
   * @param request DescribeUserSlsLogRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeUserSlsLogRegionsResponse
   */
  async describeUserSlsLogRegionsWithOptions(request: DescribeUserSlsLogRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserSlsLogRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserSlsLogRegions",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserSlsLogRegionsResponse>(await this.callApi(params, req, runtime), new DescribeUserSlsLogRegionsResponse({}));
  }

  /**
   * @summary Queries available regions for log storage.
   *
   * @param request DescribeUserSlsLogRegionsRequest
   * @return DescribeUserSlsLogRegionsResponse
   */
  async describeUserSlsLogRegions(request: DescribeUserSlsLogRegionsRequest): Promise<DescribeUserSlsLogRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserSlsLogRegionsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the status, region ID, and status modification time of Web Application Firewall (WAF) logs.
   *
   * @param request DescribeUserWafLogStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeUserWafLogStatusResponse
   */
  async describeUserWafLogStatusWithOptions(request: DescribeUserWafLogStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserWafLogStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserWafLogStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserWafLogStatusResponse>(await this.callApi(params, req, runtime), new DescribeUserWafLogStatusResponse({}));
  }

  /**
   * @summary Queries the status, region ID, and status modification time of Web Application Firewall (WAF) logs.
   *
   * @param request DescribeUserWafLogStatusRequest
   * @return DescribeUserWafLogStatusResponse
   */
  async describeUserWafLogStatus(request: DescribeUserWafLogStatusRequest): Promise<DescribeUserWafLogStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserWafLogStatusWithOptions(request, runtime);
  }

  /**
   * @summary Queries the top 10 IP addresses from which requests are sent.
   *
   * @param request DescribeVisitTopIpRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVisitTopIpResponse
   */
  async describeVisitTopIpWithOptions(request: DescribeVisitTopIpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVisitTopIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVisitTopIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVisitTopIpResponse>(await this.callApi(params, req, runtime), new DescribeVisitTopIpResponse({}));
  }

  /**
   * @summary Queries the top 10 IP addresses from which requests are sent.
   *
   * @param request DescribeVisitTopIpRequest
   * @return DescribeVisitTopIpResponse
   */
  async describeVisitTopIp(request: DescribeVisitTopIpRequest): Promise<DescribeVisitTopIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVisitTopIpWithOptions(request, runtime);
  }

  /**
   * @summary Queries the top 10 user agents that are used to initiate requests.
   *
   * @param request DescribeVisitUasRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVisitUasResponse
   */
  async describeVisitUasWithOptions(request: DescribeVisitUasRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVisitUasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVisitUas",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVisitUasResponse>(await this.callApi(params, req, runtime), new DescribeVisitUasResponse({}));
  }

  /**
   * @summary Queries the top 10 user agents that are used to initiate requests.
   *
   * @param request DescribeVisitUasRequest
   * @return DescribeVisitUasResponse
   */
  async describeVisitUas(request: DescribeVisitUasRequest): Promise<DescribeVisitUasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVisitUasWithOptions(request, runtime);
  }

  /**
   * @summary Queries the back-to-origin CIDR blocks of a Web Application Firewall (WAF) instance.
   *
   * @param request DescribeWafSourceIpSegmentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeWafSourceIpSegmentResponse
   */
  async describeWafSourceIpSegmentWithOptions(request: DescribeWafSourceIpSegmentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWafSourceIpSegmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWafSourceIpSegment",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWafSourceIpSegmentResponse>(await this.callApi(params, req, runtime), new DescribeWafSourceIpSegmentResponse({}));
  }

  /**
   * @summary Queries the back-to-origin CIDR blocks of a Web Application Firewall (WAF) instance.
   *
   * @param request DescribeWafSourceIpSegmentRequest
   * @return DescribeWafSourceIpSegmentResponse
   */
  async describeWafSourceIpSegment(request: DescribeWafSourceIpSegmentRequest): Promise<DescribeWafSourceIpSegmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWafSourceIpSegmentWithOptions(request, runtime);
  }

  /**
   * @summary Queries tag keys.
   *
   * @param request ListTagKeysRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagKeys",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
  }

  /**
   * @summary Queries tag keys.
   *
   * @param request ListTagKeysRequest
   * @return ListTagKeysResponse
   */
  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * @summary Queries the tags that are added to a resource.
   *
   * @param request ListTagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

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
      action: "ListTagResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * @summary Queries the tags that are added to a resource.
   *
   * @param request ListTagResourcesRequest
   * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the tag values of a tag key.
   *
   * @param request ListTagValuesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValuesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagValues",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagValuesResponse>(await this.callApi(params, req, runtime), new ListTagValuesResponse({}));
  }

  /**
   * @summary Queries the tag values of a tag key.
   *
   * @param request ListTagValuesRequest
   * @return ListTagValuesResponse
   */
  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the configurations of API security log subscription.
   *
   * @param request ModifyApisecLogDeliveryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyApisecLogDeliveryResponse
   */
  async modifyApisecLogDeliveryWithOptions(request: ModifyApisecLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApisecLogDeliveryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assertKey)) {
      query["AssertKey"] = request.assertKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.logRegionId)) {
      query["LogRegionId"] = request.logRegionId;
    }

    if (!Util.isUnset(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApisecLogDelivery",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyApisecLogDeliveryResponse>(await this.callApi(params, req, runtime), new ModifyApisecLogDeliveryResponse({}));
  }

  /**
   * @summary Modifies the configurations of API security log subscription.
   *
   * @param request ModifyApisecLogDeliveryRequest
   * @return ModifyApisecLogDeliveryResponse
   */
  async modifyApisecLogDelivery(request: ModifyApisecLogDeliveryRequest): Promise<ModifyApisecLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApisecLogDeliveryWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the status of API security log subscription.
   *
   * @param request ModifyApisecLogDeliveryStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyApisecLogDeliveryStatusResponse
   */
  async modifyApisecLogDeliveryStatusWithOptions(request: ModifyApisecLogDeliveryStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApisecLogDeliveryStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assertKey)) {
      query["AssertKey"] = request.assertKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApisecLogDeliveryStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyApisecLogDeliveryStatusResponse>(await this.callApi(params, req, runtime), new ModifyApisecLogDeliveryStatusResponse({}));
  }

  /**
   * @summary Modifies the status of API security log subscription.
   *
   * @param request ModifyApisecLogDeliveryStatusRequest
   * @return ModifyApisecLogDeliveryStatusResponse
   */
  async modifyApisecLogDeliveryStatus(request: ModifyApisecLogDeliveryStatusRequest): Promise<ModifyApisecLogDeliveryStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApisecLogDeliveryStatusWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the configurations of a protected object group.
   *
   * @param request ModifyDefenseResourceGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDefenseResourceGroupResponse
   */
  async modifyDefenseResourceGroupWithOptions(request: ModifyDefenseResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefenseResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addList)) {
      query["AddList"] = request.addList;
    }

    if (!Util.isUnset(request.deleteList)) {
      query["DeleteList"] = request.deleteList;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefenseResourceGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefenseResourceGroupResponse>(await this.callApi(params, req, runtime), new ModifyDefenseResourceGroupResponse({}));
  }

  /**
   * @summary Modifies the configurations of a protected object group.
   *
   * @param request ModifyDefenseResourceGroupRequest
   * @return ModifyDefenseResourceGroupResponse
   */
  async modifyDefenseResourceGroup(request: ModifyDefenseResourceGroupRequest): Promise<ModifyDefenseResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefenseResourceGroupWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the cookie settings of a protected object and the method to identify the originating IP addresses of clients.
   *
   * @param request ModifyDefenseResourceXffRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDefenseResourceXffResponse
   */
  async modifyDefenseResourceXffWithOptions(request: ModifyDefenseResourceXffRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefenseResourceXffResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acwCookieStatus)) {
      query["AcwCookieStatus"] = request.acwCookieStatus;
    }

    if (!Util.isUnset(request.acwSecureStatus)) {
      query["AcwSecureStatus"] = request.acwSecureStatus;
    }

    if (!Util.isUnset(request.acwV3SecureStatus)) {
      query["AcwV3SecureStatus"] = request.acwV3SecureStatus;
    }

    if (!Util.isUnset(request.customHeaders)) {
      query["CustomHeaders"] = request.customHeaders;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.xffStatus)) {
      query["XffStatus"] = request.xffStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefenseResourceXff",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefenseResourceXffResponse>(await this.callApi(params, req, runtime), new ModifyDefenseResourceXffResponse({}));
  }

  /**
   * @summary Modifies the cookie settings of a protected object and the method to identify the originating IP addresses of clients.
   *
   * @param request ModifyDefenseResourceXffRequest
   * @return ModifyDefenseResourceXffResponse
   */
  async modifyDefenseResourceXff(request: ModifyDefenseResourceXffRequest): Promise<ModifyDefenseResourceXffResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefenseResourceXffWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the configurations of a protection rule.
   *
   * @param request ModifyDefenseRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDefenseRuleResponse
   */
  async modifyDefenseRuleWithOptions(request: ModifyDefenseRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefenseRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.rules)) {
      query["Rules"] = request.rules;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefenseRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefenseRuleResponse>(await this.callApi(params, req, runtime), new ModifyDefenseRuleResponse({}));
  }

  /**
   * @summary Modifies the configurations of a protection rule.
   *
   * @param request ModifyDefenseRuleRequest
   * @return ModifyDefenseRuleResponse
   */
  async modifyDefenseRule(request: ModifyDefenseRuleRequest): Promise<ModifyDefenseRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefenseRuleWithOptions(request, runtime);
  }

  /**
   * @summary Updates the cached page of a website that is protected based on a website tamper-proofing rule.
   *
   * @param request ModifyDefenseRuleCacheRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDefenseRuleCacheResponse
   */
  async modifyDefenseRuleCacheWithOptions(request: ModifyDefenseRuleCacheRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefenseRuleCacheResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefenseRuleCache",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefenseRuleCacheResponse>(await this.callApi(params, req, runtime), new ModifyDefenseRuleCacheResponse({}));
  }

  /**
   * @summary Updates the cached page of a website that is protected based on a website tamper-proofing rule.
   *
   * @param request ModifyDefenseRuleCacheRequest
   * @return ModifyDefenseRuleCacheResponse
   */
  async modifyDefenseRuleCache(request: ModifyDefenseRuleCacheRequest): Promise<ModifyDefenseRuleCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefenseRuleCacheWithOptions(request, runtime);
  }

  /**
   * @summary Changes the status of a protection rule.
   *
   * @param request ModifyDefenseRuleStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDefenseRuleStatusResponse
   */
  async modifyDefenseRuleStatusWithOptions(request: ModifyDefenseRuleStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefenseRuleStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleStatus)) {
      query["RuleStatus"] = request.ruleStatus;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefenseRuleStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefenseRuleStatusResponse>(await this.callApi(params, req, runtime), new ModifyDefenseRuleStatusResponse({}));
  }

  /**
   * @summary Changes the status of a protection rule.
   *
   * @param request ModifyDefenseRuleStatusRequest
   * @return ModifyDefenseRuleStatusResponse
   */
  async modifyDefenseRuleStatus(request: ModifyDefenseRuleStatusRequest): Promise<ModifyDefenseRuleStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefenseRuleStatusWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the configurations of a protection rule template.
   *
   * @param request ModifyDefenseTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDefenseTemplateResponse
   */
  async modifyDefenseTemplateWithOptions(request: ModifyDefenseTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefenseTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefenseTemplate",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefenseTemplateResponse>(await this.callApi(params, req, runtime), new ModifyDefenseTemplateResponse({}));
  }

  /**
   * @summary Modifies the configurations of a protection rule template.
   *
   * @param request ModifyDefenseTemplateRequest
   * @return ModifyDefenseTemplateResponse
   */
  async modifyDefenseTemplate(request: ModifyDefenseTemplateRequest): Promise<ModifyDefenseTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefenseTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Changes the status of a protection rule template.
   *
   * @param request ModifyDefenseTemplateStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDefenseTemplateStatusResponse
   */
  async modifyDefenseTemplateStatusWithOptions(request: ModifyDefenseTemplateStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefenseTemplateStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateStatus)) {
      query["TemplateStatus"] = request.templateStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefenseTemplateStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefenseTemplateStatusResponse>(await this.callApi(params, req, runtime), new ModifyDefenseTemplateStatusResponse({}));
  }

  /**
   * @summary Changes the status of a protection rule template.
   *
   * @param request ModifyDefenseTemplateStatusRequest
   * @return ModifyDefenseTemplateStatusResponse
   */
  async modifyDefenseTemplateStatus(request: ModifyDefenseTemplateStatusRequest): Promise<ModifyDefenseTemplateStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefenseTemplateStatusWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the configurations of a domain name that is added to Web Application Firewall (WAF) in CNAME record mode.
   *
   * @param tmpReq ModifyDomainRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDomainResponse
   */
  async modifyDomainWithOptions(tmpReq: ModifyDomainRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDomainResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyDomainShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listen)) {
      request.listenShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listen, "Listen", "json");
    }

    if (!Util.isUnset(tmpReq.redirect)) {
      request.redirectShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.redirect, "Redirect", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.listenShrink)) {
      query["Listen"] = request.listenShrink;
    }

    if (!Util.isUnset(request.redirectShrink)) {
      query["Redirect"] = request.redirectShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDomain",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDomainResponse>(await this.callApi(params, req, runtime), new ModifyDomainResponse({}));
  }

  /**
   * @summary Modifies the configurations of a domain name that is added to Web Application Firewall (WAF) in CNAME record mode.
   *
   * @param request ModifyDomainRequest
   * @return ModifyDomainResponse
   */
  async modifyDomain(request: ModifyDomainRequest): Promise<ModifyDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDomainWithOptions(request, runtime);
  }

  /**
   * @summary Re-adds a domain name that is penalized for failing to obtain an Internet Content Provider (ICP) filing to Web Application Firewall (WAF).
   *
   * @param request ModifyDomainPunishStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDomainPunishStatusResponse
   */
  async modifyDomainPunishStatusWithOptions(request: ModifyDomainPunishStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDomainPunishStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDomainPunishStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDomainPunishStatusResponse>(await this.callApi(params, req, runtime), new ModifyDomainPunishStatusResponse({}));
  }

  /**
   * @summary Re-adds a domain name that is penalized for failing to obtain an Internet Content Provider (ICP) filing to Web Application Firewall (WAF).
   *
   * @param request ModifyDomainPunishStatusRequest
   * @return ModifyDomainPunishStatusResponse
   */
  async modifyDomainPunishStatus(request: ModifyDomainPunishStatusRequest): Promise<ModifyDomainPunishStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDomainPunishStatusWithOptions(request, runtime);
  }

  /**
   * @summary Enables or disables manual bypass for a hybrid cloud cluster of the SDK-based traffic mirroring mode.
   *
   * @param request ModifyHybridCloudClusterBypassStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyHybridCloudClusterBypassStatusResponse
   */
  async modifyHybridCloudClusterBypassStatusWithOptions(request: ModifyHybridCloudClusterBypassStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHybridCloudClusterBypassStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterResourceId)) {
      query["ClusterResourceId"] = request.clusterResourceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ruleStatus)) {
      query["RuleStatus"] = request.ruleStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHybridCloudClusterBypassStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHybridCloudClusterBypassStatusResponse>(await this.callApi(params, req, runtime), new ModifyHybridCloudClusterBypassStatusResponse({}));
  }

  /**
   * @summary Enables or disables manual bypass for a hybrid cloud cluster of the SDK-based traffic mirroring mode.
   *
   * @param request ModifyHybridCloudClusterBypassStatusRequest
   * @return ModifyHybridCloudClusterBypassStatusResponse
   */
  async modifyHybridCloudClusterBypassStatus(request: ModifyHybridCloudClusterBypassStatusRequest): Promise<ModifyHybridCloudClusterBypassStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHybridCloudClusterBypassStatusWithOptions(request, runtime);
  }

  /**
   * @summary Modifies an IP address blacklist for major event protection.
   *
   * @param request ModifyMajorProtectionBlackIpRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyMajorProtectionBlackIpResponse
   */
  async modifyMajorProtectionBlackIpWithOptions(request: ModifyMajorProtectionBlackIpRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMajorProtectionBlackIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ipList)) {
      query["IpList"] = request.ipList;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMajorProtectionBlackIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMajorProtectionBlackIpResponse>(await this.callApi(params, req, runtime), new ModifyMajorProtectionBlackIpResponse({}));
  }

  /**
   * @summary Modifies an IP address blacklist for major event protection.
   *
   * @param request ModifyMajorProtectionBlackIpRequest
   * @return ModifyMajorProtectionBlackIpResponse
   */
  async modifyMajorProtectionBlackIp(request: ModifyMajorProtectionBlackIpRequest): Promise<ModifyMajorProtectionBlackIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMajorProtectionBlackIpWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the information about members that are added for multi-account management.
   *
   * @param request ModifyMemberAccountRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyMemberAccountResponse
   */
  async modifyMemberAccountWithOptions(request: ModifyMemberAccountRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMemberAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.memberAccountId)) {
      query["MemberAccountId"] = request.memberAccountId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMemberAccount",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMemberAccountResponse>(await this.callApi(params, req, runtime), new ModifyMemberAccountResponse({}));
  }

  /**
   * @summary Modifies the information about members that are added for multi-account management.
   *
   * @param request ModifyMemberAccountRequest
   * @return ModifyMemberAccountResponse
   */
  async modifyMemberAccount(request: ModifyMemberAccountRequest): Promise<ModifyMemberAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMemberAccountWithOptions(request, runtime);
  }

  /**
   * @summary 修改用户暂停防护状态
   *
   * @param request ModifyPauseProtectionStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyPauseProtectionStatusResponse
   */
  async modifyPauseProtectionStatusWithOptions(request: ModifyPauseProtectionStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPauseProtectionStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pauseStatus)) {
      query["PauseStatus"] = request.pauseStatus;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPauseProtectionStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPauseProtectionStatusResponse>(await this.callApi(params, req, runtime), new ModifyPauseProtectionStatusResponse({}));
  }

  /**
   * @summary 修改用户暂停防护状态
   *
   * @param request ModifyPauseProtectionStatusRequest
   * @return ModifyPauseProtectionStatusResponse
   */
  async modifyPauseProtectionStatus(request: ModifyPauseProtectionStatusRequest): Promise<ModifyPauseProtectionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPauseProtectionStatusWithOptions(request, runtime);
  }

  /**
   * @summary Enables or disables the log collection feature for a protected object.
   *
   * @param request ModifyResourceLogStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyResourceLogStatusResponse
   */
  async modifyResourceLogStatusWithOptions(request: ModifyResourceLogStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyResourceLogStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyResourceLogStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyResourceLogStatusResponse>(await this.callApi(params, req, runtime), new ModifyResourceLogStatusResponse({}));
  }

  /**
   * @summary Enables or disables the log collection feature for a protected object.
   *
   * @param request ModifyResourceLogStatusRequest
   * @return ModifyResourceLogStatusResponse
   */
  async modifyResourceLogStatus(request: ModifyResourceLogStatusRequest): Promise<ModifyResourceLogStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyResourceLogStatusWithOptions(request, runtime);
  }

  /**
   * @summary Associates or disassociates a protected object or protected object group with or from a protection rule template.
   *
   * @param request ModifyTemplateResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyTemplateResourcesResponse
   */
  async modifyTemplateResourcesWithOptions(request: ModifyTemplateResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTemplateResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bindResourceGroups)) {
      query["BindResourceGroups"] = request.bindResourceGroups;
    }

    if (!Util.isUnset(request.bindResources)) {
      query["BindResources"] = request.bindResources;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.unbindResourceGroups)) {
      query["UnbindResourceGroups"] = request.unbindResourceGroups;
    }

    if (!Util.isUnset(request.unbindResources)) {
      query["UnbindResources"] = request.unbindResources;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTemplateResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTemplateResourcesResponse>(await this.callApi(params, req, runtime), new ModifyTemplateResourcesResponse({}));
  }

  /**
   * @summary Associates or disassociates a protected object or protected object group with or from a protection rule template.
   *
   * @param request ModifyTemplateResourcesRequest
   * @return ModifyTemplateResourcesResponse
   */
  async modifyTemplateResources(request: ModifyTemplateResourcesRequest): Promise<ModifyTemplateResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTemplateResourcesWithOptions(request, runtime);
  }

  /**
   * @summary 释放实例
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseInstance",
      version: "2021-10-01",
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
   * @summary 释放实例
   *
   * @param request ReleaseInstanceRequest
   * @return ReleaseInstanceResponse
   */
  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  /**
   * @summary Synchronizes Elastic Compute Service (ECS) instances and Classic Load Balancer (CLB) instances to Web Application Firewall (WAF).
   *
   * @description SyncProductInstance is an asynchronous operation. You can call the [DescribeProductInstances](https://help.aliyun.com/document_detail/2743168.html) operation to query the status of the task.
   *
   * @param request SyncProductInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SyncProductInstanceResponse
   */
  async syncProductInstanceWithOptions(request: SyncProductInstanceRequest, runtime: $Util.RuntimeOptions): Promise<SyncProductInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SyncProductInstance",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncProductInstanceResponse>(await this.callApi(params, req, runtime), new SyncProductInstanceResponse({}));
  }

  /**
   * @summary Synchronizes Elastic Compute Service (ECS) instances and Classic Load Balancer (CLB) instances to Web Application Firewall (WAF).
   *
   * @description SyncProductInstance is an asynchronous operation. You can call the [DescribeProductInstances](https://help.aliyun.com/document_detail/2743168.html) operation to query the status of the task.
   *
   * @param request SyncProductInstanceRequest
   * @return SyncProductInstanceResponse
   */
  async syncProductInstance(request: SyncProductInstanceRequest): Promise<SyncProductInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncProductInstanceWithOptions(request, runtime);
  }

  /**
   * @summary Adds tags to resources.
   *
   * @param request TagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

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
      action: "TagResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * @summary Adds tags to resources.
   *
   * @param request TagResourcesRequest
   * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Removes tags from resources and then deletes the tags.
   *
   * @param request UntagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "UntagResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * @summary Removes tags from resources and then deletes the tags.
   *
   * @param request UntagResourcesRequest
   * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
