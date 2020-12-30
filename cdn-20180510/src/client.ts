// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddCdnDomainRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  cdnType?: string;
  domainName?: string;
  resourceGroupId?: string;
  sources?: string;
  checkUrl?: string;
  scope?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      cdnType: 'CdnType',
      domainName: 'DomainName',
      resourceGroupId: 'ResourceGroupId',
      sources: 'Sources',
      checkUrl: 'CheckUrl',
      scope: 'Scope',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      cdnType: 'string',
      domainName: 'string',
      resourceGroupId: 'string',
      sources: 'string',
      checkUrl: 'string',
      scope: 'string',
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCdnDomainResponseBody extends $tea.Model {
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

export class AddCdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFCTriggerRequest extends $tea.Model {
  ownerId?: number;
  triggerARN?: string;
  eventMetaName?: string;
  eventMetaVersion?: string;
  sourceARN?: string;
  functionARN?: string;
  roleARN?: string;
  notes?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      triggerARN: 'TriggerARN',
      eventMetaName: 'EventMetaName',
      eventMetaVersion: 'EventMetaVersion',
      sourceARN: 'SourceARN',
      functionARN: 'FunctionARN',
      roleARN: 'RoleARN',
      notes: 'Notes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      triggerARN: 'string',
      eventMetaName: 'string',
      eventMetaVersion: 'string',
      sourceARN: 'string',
      functionARN: 'string',
      roleARN: 'string',
      notes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFCTriggerResponseBody extends $tea.Model {
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

export class AddFCTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddFCTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddFCTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddCdnDomainRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  cdnType?: string;
  domainName?: string;
  resourceGroupId?: string;
  sources?: string;
  checkUrl?: string;
  scope?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      cdnType: 'CdnType',
      domainName: 'DomainName',
      resourceGroupId: 'ResourceGroupId',
      sources: 'Sources',
      checkUrl: 'CheckUrl',
      scope: 'Scope',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      cdnType: 'string',
      domainName: 'string',
      resourceGroupId: 'string',
      sources: 'string',
      checkUrl: 'string',
      scope: 'string',
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddCdnDomainResponseBody extends $tea.Model {
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

export class BatchAddCdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchAddCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchAddCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetCdnDomainConfigRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  domainNames?: string;
  functions?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      domainNames: 'DomainNames',
      functions: 'Functions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      domainNames: 'string',
      functions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetCdnDomainConfigResponseBody extends $tea.Model {
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

export class BatchSetCdnDomainConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchSetCdnDomainConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchSetCdnDomainConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetCdnDomainServerCertificateRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  certName?: string;
  certType?: string;
  SSLProtocol?: string;
  SSLPub?: string;
  SSLPri?: string;
  region?: string;
  forceSet?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      certName: 'CertName',
      certType: 'CertType',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      SSLPri: 'SSLPri',
      region: 'Region',
      forceSet: 'ForceSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      certName: 'string',
      certType: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      SSLPri: 'string',
      region: 'string',
      forceSet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetCdnDomainServerCertificateResponseBody extends $tea.Model {
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

export class BatchSetCdnDomainServerCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchSetCdnDomainServerCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchSetCdnDomainServerCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartCdnDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartCdnDomainResponseBody extends $tea.Model {
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

export class BatchStartCdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchStartCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchStartCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopCdnDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopCdnDomainResponseBody extends $tea.Model {
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

export class BatchStopCdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchStopCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchStopCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateCdnDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  sources?: string;
  resourceGroupId?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      sources: 'Sources',
      resourceGroupId: 'ResourceGroupId',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      sources: 'string',
      resourceGroupId: 'string',
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateCdnDomainResponseBody extends $tea.Model {
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

export class BatchUpdateCdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchUpdateCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchUpdateCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdnCertificateSigningRequestRequest extends $tea.Model {
  ownerId?: number;
  commonName?: string;
  SANs?: string;
  organization?: string;
  organizationUnit?: string;
  country?: string;
  state?: string;
  city?: string;
  email?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      commonName: 'CommonName',
      SANs: 'SANs',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      country: 'Country',
      state: 'State',
      city: 'City',
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      commonName: 'string',
      SANs: 'string',
      organization: 'string',
      organizationUnit: 'string',
      country: 'string',
      state: 'string',
      city: 'string',
      email: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdnCertificateSigningRequestResponseBody extends $tea.Model {
  pubMd5?: string;
  csr?: string;
  requestId?: string;
  commonName?: string;
  static names(): { [key: string]: string } {
    return {
      pubMd5: 'PubMd5',
      csr: 'Csr',
      requestId: 'RequestId',
      commonName: 'CommonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubMd5: 'string',
      csr: 'string',
      requestId: 'string',
      commonName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdnCertificateSigningRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCdnCertificateSigningRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCdnCertificateSigningRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIllegalUrlExportTaskRequest extends $tea.Model {
  ownerId?: number;
  timePoint?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      timePoint: 'TimePoint',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      timePoint: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIllegalUrlExportTaskResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIllegalUrlExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIllegalUrlExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIllegalUrlExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRealTimeLogDeliveryRequest extends $tea.Model {
  ownerId?: number;
  project?: string;
  logstore?: string;
  region?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      project: 'Project',
      logstore: 'Logstore',
      region: 'Region',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      project: 'string',
      logstore: 'string',
      region: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRealTimeLogDeliveryResponseBody extends $tea.Model {
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

export class CreateRealTimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRealTimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRealTimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsageDetailDataExportTaskRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  group?: string;
  domainNames?: string;
  type?: string;
  taskName?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      group: 'Group',
      domainNames: 'DomainNames',
      type: 'Type',
      taskName: 'TaskName',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
      group: 'string',
      domainNames: 'string',
      type: 'string',
      taskName: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsageDetailDataExportTaskResponseBody extends $tea.Model {
  taskId?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsageDetailDataExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUsageDetailDataExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUsageDetailDataExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserUsageDataExportTaskRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  taskName?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      taskName: 'TaskName',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
      taskName: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserUsageDataExportTaskResponseBody extends $tea.Model {
  taskId?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserUsageDataExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUserUsageDataExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUserUsageDataExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCdnDomainRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCdnDomainResponseBody extends $tea.Model {
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

export class DeleteCdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFCTriggerRequest extends $tea.Model {
  ownerId?: number;
  triggerARN?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      triggerARN: 'TriggerARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      triggerARN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFCTriggerResponseBody extends $tea.Model {
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

export class DeleteFCTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFCTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFCTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRealtimeLogDeliveryRequest extends $tea.Model {
  ownerId?: number;
  domain?: string;
  project?: string;
  logstore?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domain: 'Domain',
      project: 'Project',
      logstore: 'Logstore',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domain: 'string',
      project: 'string',
      logstore: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRealtimeLogDeliveryResponseBody extends $tea.Model {
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

export class DeleteRealtimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRealtimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSpecificConfigRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  configId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      configId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSpecificConfigResponseBody extends $tea.Model {
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

export class DeleteSpecificConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSpecificConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSpecificConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSpecificStagingConfigRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  configId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      configId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSpecificStagingConfigResponseBody extends $tea.Model {
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

export class DeleteSpecificStagingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSpecificStagingConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSpecificStagingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsageDetailDataExportTaskRequest extends $tea.Model {
  ownerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsageDetailDataExportTaskResponseBody extends $tea.Model {
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

export class DeleteUsageDetailDataExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUsageDetailDataExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUsageDetailDataExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserUsageDataExportTaskRequest extends $tea.Model {
  ownerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserUsageDataExportTaskResponseBody extends $tea.Model {
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

export class DeleteUserUsageDataExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserUsageDataExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserUsageDataExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveVersionOfConfigGroupRequest extends $tea.Model {
  ownerId?: number;
  configGroupId?: string;
  env?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      configGroupId: 'ConfigGroupId',
      env: 'Env',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      configGroupId: 'string',
      env: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveVersionOfConfigGroupResponseBody extends $tea.Model {
  status?: string;
  versionId?: string;
  operator?: string;
  configGroupId?: string;
  baseVersionId?: string;
  description?: string;
  requestId?: string;
  createTime?: string;
  updateTime?: string;
  seqId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      versionId: 'VersionId',
      operator: 'Operator',
      configGroupId: 'ConfigGroupId',
      baseVersionId: 'BaseVersionId',
      description: 'Description',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      seqId: 'SeqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      versionId: 'string',
      operator: 'string',
      configGroupId: 'string',
      baseVersionId: 'string',
      description: 'string',
      requestId: 'string',
      createTime: 'string',
      updateTime: 'string',
      seqId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveVersionOfConfigGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeActiveVersionOfConfigGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeActiveVersionOfConfigGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnCertificateDetailRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  certName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      certName: 'CertName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      certName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnCertificateDetailResponseBody extends $tea.Model {
  requestId?: string;
  certId?: number;
  certName?: string;
  cert?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certId: 'CertId',
      certName: 'CertName',
      cert: 'Cert',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class DescribeCdnCertificateDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnCertificateDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnCertificateDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnCertificateListRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnCertificateListResponseBody extends $tea.Model {
  requestId?: string;
  certificateListModel?: DescribeCdnCertificateListResponseBodyCertificateListModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificateListModel: 'CertificateListModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificateListModel: DescribeCdnCertificateListResponseBodyCertificateListModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnCertificateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnCertificateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnCertificateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainByCertificateRequest extends $tea.Model {
  ownerId?: number;
  SSLPub?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      SSLPub: 'SSLPub',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      SSLPub: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainByCertificateResponseBody extends $tea.Model {
  certInfos?: DescribeCdnDomainByCertificateResponseBodyCertInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeCdnDomainByCertificateResponseBodyCertInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainByCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnDomainByCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnDomainByCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainConfigsRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  functionNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      functionNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainConfigsResponseBody extends $tea.Model {
  requestId?: string;
  domainConfigs?: DescribeCdnDomainConfigsResponseBodyDomainConfigs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainConfigs: 'DomainConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainConfigs: DescribeCdnDomainConfigsResponseBodyDomainConfigs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailResponseBody extends $tea.Model {
  requestId?: string;
  getDomainDetailModel?: DescribeCdnDomainDetailResponseBodyGetDomainDetailModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      getDomainDetailModel: 'GetDomainDetailModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      getDomainDetailModel: DescribeCdnDomainDetailResponseBodyGetDomainDetailModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnDomainDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  pageSize?: number;
  pageNumber?: number;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsResponseBody extends $tea.Model {
  requestId?: string;
  domainLogDetails?: DescribeCdnDomainLogsResponseBodyDomainLogDetails;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainLogDetails: 'DomainLogDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainLogDetails: DescribeCdnDomainLogsResponseBodyDomainLogDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnDomainLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnDomainLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainStagingConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  functionNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      functionNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainStagingConfigResponseBody extends $tea.Model {
  requestId?: string;
  domainConfigs?: DescribeCdnDomainStagingConfigResponseBodyDomainConfigs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainConfigs: 'DomainConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainConfigs: { 'type': 'array', 'itemType': DescribeCdnDomainStagingConfigResponseBodyDomainConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainStagingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnDomainStagingConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnDomainStagingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnHttpsDomainListRequest extends $tea.Model {
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnHttpsDomainListResponseBody extends $tea.Model {
  certInfos?: DescribeCdnHttpsDomainListResponseBodyCertInfos;
  totalCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeCdnHttpsDomainListResponseBodyCertInfos,
      totalCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnHttpsDomainListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnHttpsDomainListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnHttpsDomainListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnRegionAndIspRequest extends $tea.Model {
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

export class DescribeCdnRegionAndIspResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeCdnRegionAndIspResponseBodyRegions;
  isps?: DescribeCdnRegionAndIspResponseBodyIsps;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
      isps: 'Isps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeCdnRegionAndIspResponseBodyRegions,
      isps: DescribeCdnRegionAndIspResponseBodyIsps,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnRegionAndIspResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnRegionAndIspResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnRegionAndIspResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnServiceRequest extends $tea.Model {
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

export class DescribeCdnServiceResponseBody extends $tea.Model {
  changingChargeType?: string;
  requestId?: string;
  instanceId?: string;
  openingTime?: string;
  changingAffectTime?: string;
  operationLocks?: DescribeCdnServiceResponseBodyOperationLocks;
  internetChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      changingChargeType: 'ChangingChargeType',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      openingTime: 'OpeningTime',
      changingAffectTime: 'ChangingAffectTime',
      operationLocks: 'OperationLocks',
      internetChargeType: 'InternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changingChargeType: 'string',
      requestId: 'string',
      instanceId: 'string',
      openingTime: 'string',
      changingAffectTime: 'string',
      operationLocks: DescribeCdnServiceResponseBodyOperationLocks,
      internetChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillHistoryRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillHistoryResponseBody extends $tea.Model {
  requestId?: string;
  billHistoryData?: DescribeCdnUserBillHistoryResponseBodyBillHistoryData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      billHistoryData: 'BillHistoryData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      billHistoryData: DescribeCdnUserBillHistoryResponseBodyBillHistoryData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnUserBillHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnUserBillHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillPredictionRequest extends $tea.Model {
  ownerId?: number;
  dimension?: string;
  area?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      dimension: 'Dimension',
      area: 'Area',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      dimension: 'string',
      area: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillPredictionResponseBody extends $tea.Model {
  billType?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  billPredictionData?: DescribeCdnUserBillPredictionResponseBodyBillPredictionData;
  static names(): { [key: string]: string } {
    return {
      billType: 'BillType',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      billPredictionData: 'BillPredictionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billType: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      billPredictionData: DescribeCdnUserBillPredictionResponseBodyBillPredictionData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillPredictionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnUserBillPredictionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnUserBillPredictionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillTypeRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillTypeResponseBody extends $tea.Model {
  requestId?: string;
  billTypeData?: DescribeCdnUserBillTypeResponseBodyBillTypeData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      billTypeData: 'BillTypeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      billTypeData: DescribeCdnUserBillTypeResponseBodyBillTypeData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnUserBillTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnUserBillTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserConfigsRequest extends $tea.Model {
  ownerId?: number;
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      functionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserConfigsResponseBody extends $tea.Model {
  requestId?: string;
  configs?: DescribeCdnUserConfigsResponseBodyConfigs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configs: { 'type': 'array', 'itemType': DescribeCdnUserConfigsResponseBodyConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnUserConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnUserConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserDomainsByFuncRequest extends $tea.Model {
  ownerId?: number;
  funcId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      funcId: 'FuncId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
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

export class DescribeCdnUserDomainsByFuncResponseBody extends $tea.Model {
  domains?: DescribeCdnUserDomainsByFuncResponseBodyDomains;
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeCdnUserDomainsByFuncResponseBodyDomains,
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserDomainsByFuncResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnUserDomainsByFuncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnUserDomainsByFuncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserQuotaRequest extends $tea.Model {
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

export class DescribeCdnUserQuotaResponseBody extends $tea.Model {
  requestId?: string;
  refreshUrlQuota?: number;
  blockRemain?: number;
  preloadRemain?: number;
  refreshDirRemain?: number;
  blockQuota?: number;
  refreshDirQuota?: number;
  domainQuota?: number;
  refreshUrlRemain?: number;
  preloadQuota?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      refreshUrlQuota: 'RefreshUrlQuota',
      blockRemain: 'BlockRemain',
      preloadRemain: 'PreloadRemain',
      refreshDirRemain: 'RefreshDirRemain',
      blockQuota: 'BlockQuota',
      refreshDirQuota: 'RefreshDirQuota',
      domainQuota: 'DomainQuota',
      refreshUrlRemain: 'RefreshUrlRemain',
      preloadQuota: 'PreloadQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      refreshUrlQuota: 'number',
      blockRemain: 'number',
      preloadRemain: 'number',
      refreshDirRemain: 'number',
      blockQuota: 'number',
      refreshDirQuota: 'number',
      domainQuota: 'number',
      refreshUrlRemain: 'number',
      preloadQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnUserQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnUserQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserResourcePackageRequest extends $tea.Model {
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

export class DescribeCdnUserResourcePackageResponseBody extends $tea.Model {
  requestId?: string;
  resourcePackageInfos?: DescribeCdnUserResourcePackageResponseBodyResourcePackageInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcePackageInfos: 'ResourcePackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcePackageInfos: DescribeCdnUserResourcePackageResponseBodyResourcePackageInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserResourcePackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnUserResourcePackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnUserResourcePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnWafDomainRequest extends $tea.Model {
  ownerId?: number;
  regionId?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnWafDomainResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  outPutDomains?: DescribeCdnWafDomainResponseBodyOutPutDomains[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      outPutDomains: 'OutPutDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      outPutDomains: { 'type': 'array', 'itemType': DescribeCdnWafDomainResponseBodyOutPutDomains },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnWafDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCdnWafDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCdnWafDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateInfoByIDRequest extends $tea.Model {
  ownerId?: number;
  certId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      certId: 'CertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      certId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateInfoByIDResponseBody extends $tea.Model {
  certInfos?: DescribeCertificateInfoByIDResponseBodyCertInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeCertificateInfoByIDResponseBodyCertInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateInfoByIDResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCertificateInfoByIDResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCertificateInfoByIDResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigOfVersionRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  versionId?: string;
  functionId?: number;
  functionName?: string;
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      versionId: 'VersionId',
      functionId: 'FunctionId',
      functionName: 'FunctionName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      versionId: 'string',
      functionId: 'number',
      functionName: 'string',
      groupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigOfVersionResponseBody extends $tea.Model {
  requestId?: string;
  versionConfigs?: DescribeConfigOfVersionResponseBodyVersionConfigs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionConfigs: 'VersionConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionConfigs: DescribeConfigOfVersionResponseBodyVersionConfigs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigOfVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConfigOfVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConfigOfVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLogConfigRequest extends $tea.Model {
  ownerId?: number;
  configId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      configId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLogConfigResponseBody extends $tea.Model {
  requestId?: string;
  sample?: string;
  tag?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sample: 'Sample',
      tag: 'Tag',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sample: 'string',
      tag: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCustomLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCustomLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAverageResponseTimeRequest extends $tea.Model {
  ownerId?: number;
  timeMerge?: string;
  domainType?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      timeMerge: 'TimeMerge',
      domainType: 'DomainType',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      timeMerge: 'string',
      domainType: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAverageResponseTimeResponseBody extends $tea.Model {
  avgRTPerInterval?: DescribeDomainAverageResponseTimeResponseBodyAvgRTPerInterval;
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      avgRTPerInterval: 'AvgRTPerInterval',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgRTPerInterval: DescribeDomainAverageResponseTimeResponseBodyAvgRTPerInterval,
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAverageResponseTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainAverageResponseTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainAverageResponseTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataResponseBody extends $tea.Model {
  ispNameEn?: string;
  endTime?: string;
  requestId?: string;
  domainName?: string;
  locationNameEn?: string;
  startTime?: string;
  dataInterval?: string;
  bpsDataPerInterval?: DescribeDomainBpsDataResponseBodyBpsDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      ispNameEn: 'IspNameEn',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      bpsDataPerInterval: 'BpsDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispNameEn: 'string',
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      locationNameEn: 'string',
      startTime: 'string',
      dataInterval: 'string',
      bpsDataPerInterval: DescribeDomainBpsDataResponseBodyBpsDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByLayerRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  layer?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      layer: 'Layer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      layer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByLayerResponseBody extends $tea.Model {
  requestId?: string;
  dataInterval?: string;
  bpsDataInterval?: DescribeDomainBpsDataByLayerResponseBodyBpsDataInterval;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dataInterval: 'DataInterval',
      bpsDataInterval: 'BpsDataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dataInterval: 'string',
      bpsDataInterval: DescribeDomainBpsDataByLayerResponseBodyBpsDataInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByLayerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainBpsDataByLayerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainBpsDataByLayerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByTimeStampRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  timePoint?: string;
  ispNames?: string;
  locationNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      timePoint: 'TimePoint',
      ispNames: 'IspNames',
      locationNames: 'LocationNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      timePoint: 'string',
      ispNames: 'string',
      locationNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByTimeStampResponseBody extends $tea.Model {
  bpsDataList?: DescribeDomainBpsDataByTimeStampResponseBodyBpsDataList;
  requestId?: string;
  domainName?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataList: 'BpsDataList',
      requestId: 'RequestId',
      domainName: 'DomainName',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataList: DescribeDomainBpsDataByTimeStampResponseBodyBpsDataList,
      requestId: 'string',
      domainName: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByTimeStampResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainBpsDataByTimeStampResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainBpsDataByTimeStampResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCcActivityLogRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  triggerObject?: string;
  value?: string;
  ruleName?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      triggerObject: 'TriggerObject',
      value: 'Value',
      ruleName: 'RuleName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      triggerObject: 'string',
      value: 'string',
      ruleName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCcActivityLogResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  total?: number;
  activityLog?: DescribeDomainCcActivityLogResponseBodyActivityLog[];
  pageIndex?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      total: 'Total',
      activityLog: 'ActivityLog',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      total: 'number',
      activityLog: { 'type': 'array', 'itemType': DescribeDomainCcActivityLogResponseBodyActivityLog },
      pageIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCcActivityLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainCcActivityLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainCcActivityLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCertificateInfoRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCertificateInfoResponseBody extends $tea.Model {
  certInfos?: DescribeDomainCertificateInfoResponseBodyCertInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeDomainCertificateInfoResponseBodyCertInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCertificateInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainCertificateInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainCertificateInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCustomLogConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCustomLogConfigResponseBody extends $tea.Model {
  requestId?: string;
  sample?: string;
  configId?: string;
  tag?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sample: 'Sample',
      configId: 'ConfigId',
      tag: 'Tag',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sample: 'string',
      configId: 'string',
      tag: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCustomLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainCustomLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainCustomLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailDataByLayerRequest extends $tea.Model {
  ownerId?: number;
  field?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  layer?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      field: 'Field',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      layer: 'Layer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      field: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      layer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailDataByLayerResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeDomainDetailDataByLayerResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDomainDetailDataByLayerResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailDataByLayerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainDetailDataByLayerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainDetailDataByLayerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFileSizeProportionDataRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFileSizeProportionDataResponseBody extends $tea.Model {
  fileSizeProportionDataInterval?: DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataInterval;
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      fileSizeProportionDataInterval: 'FileSizeProportionDataInterval',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSizeProportionDataInterval: DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataInterval,
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFileSizeProportionDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainFileSizeProportionDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainFileSizeProportionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHitRateDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHitRateDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  hitRateInterval?: DescribeDomainHitRateDataResponseBodyHitRateInterval;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      hitRateInterval: 'HitRateInterval',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      hitRateInterval: DescribeDomainHitRateDataResponseBodyHitRateInterval,
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainHitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  httpCodeData?: DescribeDomainHttpCodeDataResponseBodyHttpCodeData;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      httpCodeData: 'HttpCodeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      httpCodeData: DescribeDomainHttpCodeDataResponseBodyHttpCodeData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainHttpCodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataByLayerRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  layer?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      layer: 'Layer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      layer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataByLayerResponseBody extends $tea.Model {
  requestId?: string;
  dataInterval?: string;
  httpCodeDataInterval?: DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dataInterval: 'DataInterval',
      httpCodeDataInterval: 'HttpCodeDataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dataInterval: 'string',
      httpCodeDataInterval: DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataByLayerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainHttpCodeDataByLayerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainHttpCodeDataByLayerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainISPDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainISPDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  value?: DescribeDomainISPDataResponseBodyValue;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      value: DescribeDomainISPDataResponseBodyValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainISPDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainISPDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainISPDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainMax95BpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  timePoint?: string;
  cycle?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      timePoint: 'TimePoint',
      cycle: 'Cycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      timePoint: 'string',
      cycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainMax95BpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  domesticMax95Bps?: string;
  max95Bps?: string;
  overseasMax95Bps?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      domesticMax95Bps: 'DomesticMax95Bps',
      max95Bps: 'Max95Bps',
      overseasMax95Bps: 'OverseasMax95Bps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      domesticMax95Bps: 'string',
      max95Bps: 'string',
      overseasMax95Bps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainMax95BpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainMax95BpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainMax95BpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNamesOfVersionRequest extends $tea.Model {
  ownerId?: number;
  versionId?: string;
  pageIndex?: number;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      versionId: 'VersionId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      versionId: 'string',
      pageIndex: 'number',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNamesOfVersionResponseBody extends $tea.Model {
  totalCount?: number;
  contents?: DescribeDomainNamesOfVersionResponseBodyContents[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      contents: 'Contents',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      contents: { 'type': 'array', 'itemType': DescribeDomainNamesOfVersionResponseBodyContents },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNamesOfVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainNamesOfVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainNamesOfVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPathDataRequest extends $tea.Model {
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  path?: string;
  startTime?: string;
  endTime?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      path: 'Path',
      startTime: 'StartTime',
      endTime: 'EndTime',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      path: 'string',
      startTime: 'string',
      endTime: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPathDataResponseBody extends $tea.Model {
  totalCount?: number;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  domainName?: string;
  pathDataPerInterval?: DescribeDomainPathDataResponseBodyPathDataPerInterval;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      domainName: 'DomainName',
      pathDataPerInterval: 'PathDataPerInterval',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      domainName: 'string',
      pathDataPerInterval: DescribeDomainPathDataResponseBodyPathDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPathDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainPathDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainPathDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPvDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPvDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  pvDataInterval?: DescribeDomainPvDataResponseBodyPvDataInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      pvDataInterval: 'PvDataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      pvDataInterval: DescribeDomainPvDataResponseBodyPvDataInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPvDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainPvDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainPvDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  qpsDataInterval?: DescribeDomainQpsDataResponseBodyQpsDataInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      qpsDataInterval: 'QpsDataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      qpsDataInterval: DescribeDomainQpsDataResponseBodyQpsDataInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainQpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainQpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataByLayerRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  layer?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      layer: 'Layer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      layer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataByLayerResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  qpsDataInterval?: DescribeDomainQpsDataByLayerResponseBodyQpsDataInterval;
  layer?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      qpsDataInterval: 'QpsDataInterval',
      layer: 'Layer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      qpsDataInterval: DescribeDomainQpsDataByLayerResponseBodyQpsDataInterval,
      layer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataByLayerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainQpsDataByLayerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainQpsDataByLayerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeBpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeBpsDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeDomainRealTimeBpsDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDomainRealTimeBpsDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainRealTimeBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainRealTimeBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeByteHitRateDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeByteHitRateDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeDomainRealTimeByteHitRateDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDomainRealTimeByteHitRateDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeByteHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainRealTimeByteHitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainRealTimeByteHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeDetailDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  field?: string;
  locationNameEn?: string;
  ispNameEn?: string;
  merge?: string;
  mergeLocIsp?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      field: 'Field',
      locationNameEn: 'LocationNameEn',
      ispNameEn: 'IspNameEn',
      merge: 'Merge',
      mergeLocIsp: 'MergeLocIsp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      field: 'string',
      locationNameEn: 'string',
      ispNameEn: 'string',
      merge: 'string',
      mergeLocIsp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeDetailDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeDetailDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainRealTimeDetailDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainRealTimeDetailDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeHttpCodeDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeHttpCodeDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  realTimeHttpCodeData?: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      realTimeHttpCodeData: 'RealTimeHttpCodeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      realTimeHttpCodeData: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainRealTimeHttpCodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainRealTimeHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealtimeLogDeliveryRequest extends $tea.Model {
  ownerId?: number;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealtimeLogDeliveryResponseBody extends $tea.Model {
  status?: string;
  project?: string;
  requestId?: string;
  logstore?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      project: 'Project',
      requestId: 'RequestId',
      logstore: 'Logstore',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      project: 'string',
      requestId: 'string',
      logstore: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealtimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainRealtimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeQpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeQpsDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeDomainRealTimeQpsDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDomainRealTimeQpsDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeQpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainRealTimeQpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainRealTimeQpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeReqHitRateDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeReqHitRateDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeDomainRealTimeReqHitRateDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDomainRealTimeReqHitRateDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeReqHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainRealTimeReqHitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainRealTimeReqHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcBpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcBpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  realTimeSrcBpsDataPerInterval?: DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      realTimeSrcBpsDataPerInterval: 'RealTimeSrcBpsDataPerInterval',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      realTimeSrcBpsDataPerInterval: DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainRealTimeSrcBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainRealTimeSrcBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcHttpCodeDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcHttpCodeDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  realTimeSrcHttpCodeData?: DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      realTimeSrcHttpCodeData: 'RealTimeSrcHttpCodeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      realTimeSrcHttpCodeData: DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainRealTimeSrcHttpCodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainRealTimeSrcHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcTrafficDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  realTimeSrcTrafficDataPerInterval?: DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      realTimeSrcTrafficDataPerInterval: 'RealTimeSrcTrafficDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      realTimeSrcTrafficDataPerInterval: DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainRealTimeSrcTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainRealTimeSrcTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeTrafficDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  realTimeTrafficDataPerInterval?: DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      realTimeTrafficDataPerInterval: 'RealTimeTrafficDataPerInterval',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      realTimeTrafficDataPerInterval: DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainRealTimeTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainRealTimeTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRegionDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRegionDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  value?: DescribeDomainRegionDataResponseBodyValue;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      value: DescribeDomainRegionDataResponseBodyValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRegionDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainRegionDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainRegionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainReqHitRateDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainReqHitRateDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  reqHitRateInterval?: DescribeDomainReqHitRateDataResponseBodyReqHitRateInterval;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      reqHitRateInterval: 'ReqHitRateInterval',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      reqHitRateInterval: DescribeDomainReqHitRateDataResponseBodyReqHitRateInterval,
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainReqHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainReqHitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainReqHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  sources?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      sources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponseBody extends $tea.Model {
  requestId?: string;
  domainsList?: DescribeDomainsBySourceResponseBodyDomainsList;
  sources?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainsList: 'DomainsList',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainsList: DescribeDomainsBySourceResponseBodyDomainsList,
      sources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainsBySourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainsBySourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcBpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcBpsDataResponseBody extends $tea.Model {
  srcBpsDataPerInterval?: DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerInterval;
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      srcBpsDataPerInterval: 'SrcBpsDataPerInterval',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcBpsDataPerInterval: DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerInterval,
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainSrcBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainSrcBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcHttpCodeDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcHttpCodeDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  httpCodeData?: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeData;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      httpCodeData: 'HttpCodeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      httpCodeData: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainSrcHttpCodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainSrcHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcQpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcQpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  srcQpsDataPerInterval?: DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      srcQpsDataPerInterval: 'SrcQpsDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      srcQpsDataPerInterval: DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcQpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainSrcQpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainSrcQpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTopUrlVisitRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTopUrlVisitResponseBody extends $tea.Model {
  url500List?: DescribeDomainSrcTopUrlVisitResponseBodyUrl500List;
  url200List?: DescribeDomainSrcTopUrlVisitResponseBodyUrl200List;
  url400List?: DescribeDomainSrcTopUrlVisitResponseBodyUrl400List;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  url300List?: DescribeDomainSrcTopUrlVisitResponseBodyUrl300List;
  allUrlList?: DescribeDomainSrcTopUrlVisitResponseBodyAllUrlList;
  static names(): { [key: string]: string } {
    return {
      url500List: 'Url500List',
      url200List: 'Url200List',
      url400List: 'Url400List',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      url300List: 'Url300List',
      allUrlList: 'AllUrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url500List: DescribeDomainSrcTopUrlVisitResponseBodyUrl500List,
      url200List: DescribeDomainSrcTopUrlVisitResponseBodyUrl200List,
      url400List: DescribeDomainSrcTopUrlVisitResponseBodyUrl400List,
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      url300List: DescribeDomainSrcTopUrlVisitResponseBodyUrl300List,
      allUrlList: DescribeDomainSrcTopUrlVisitResponseBodyAllUrlList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTopUrlVisitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainSrcTopUrlVisitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainSrcTopUrlVisitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTrafficDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  srcTrafficDataPerInterval?: DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      srcTrafficDataPerInterval: 'SrcTrafficDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      srcTrafficDataPerInterval: DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainSrcTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainSrcTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsUsageByDayRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsUsageByDayResponseBody extends $tea.Model {
  usageTotal?: DescribeDomainsUsageByDayResponseBodyUsageTotal;
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  usageByDays?: DescribeDomainsUsageByDayResponseBodyUsageByDays;
  static names(): { [key: string]: string } {
    return {
      usageTotal: 'UsageTotal',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      usageByDays: 'UsageByDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageTotal: DescribeDomainsUsageByDayResponseBodyUsageTotal,
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      usageByDays: DescribeDomainsUsageByDayResponseBodyUsageByDays,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsUsageByDayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainsUsageByDayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainsUsageByDayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopClientIpVisitRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  locationNameEn?: string;
  startTime?: string;
  endTime?: string;
  sortBy?: string;
  limit?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
      endTime: 'EndTime',
      sortBy: 'SortBy',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      locationNameEn: 'string',
      startTime: 'string',
      endTime: 'string',
      sortBy: 'string',
      limit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopClientIpVisitResponseBody extends $tea.Model {
  requestId?: string;
  clientIpList?: DescribeDomainTopClientIpVisitResponseBodyClientIpList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clientIpList: 'ClientIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clientIpList: { 'type': 'array', 'itemType': DescribeDomainTopClientIpVisitResponseBodyClientIpList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopClientIpVisitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainTopClientIpVisitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainTopClientIpVisitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopReferVisitRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  sortBy?: string;
  percent?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      sortBy: 'SortBy',
      percent: 'Percent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      sortBy: 'string',
      percent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopReferVisitResponseBody extends $tea.Model {
  requestId?: string;
  domainName?: string;
  startTime?: string;
  topReferList?: DescribeDomainTopReferVisitResponseBodyTopReferList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      topReferList: 'TopReferList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      topReferList: DescribeDomainTopReferVisitResponseBodyTopReferList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopReferVisitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainTopReferVisitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainTopReferVisitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUrlVisitRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUrlVisitResponseBody extends $tea.Model {
  url500List?: DescribeDomainTopUrlVisitResponseBodyUrl500List;
  url200List?: DescribeDomainTopUrlVisitResponseBodyUrl200List;
  url400List?: DescribeDomainTopUrlVisitResponseBodyUrl400List;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  url300List?: DescribeDomainTopUrlVisitResponseBodyUrl300List;
  allUrlList?: DescribeDomainTopUrlVisitResponseBodyAllUrlList;
  static names(): { [key: string]: string } {
    return {
      url500List: 'Url500List',
      url200List: 'Url200List',
      url400List: 'Url400List',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      url300List: 'Url300List',
      allUrlList: 'AllUrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url500List: DescribeDomainTopUrlVisitResponseBodyUrl500List,
      url200List: DescribeDomainTopUrlVisitResponseBodyUrl200List,
      url400List: DescribeDomainTopUrlVisitResponseBodyUrl400List,
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      url300List: DescribeDomainTopUrlVisitResponseBodyUrl300List,
      allUrlList: DescribeDomainTopUrlVisitResponseBodyAllUrlList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUrlVisitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainTopUrlVisitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainTopUrlVisitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTrafficDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  trafficDataPerInterval?: DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      trafficDataPerInterval: 'TrafficDataPerInterval',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      trafficDataPerInterval: DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUsageDataRequest extends $tea.Model {
  ownerId?: number;
  dataProtocol?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  area?: string;
  field?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      dataProtocol: 'DataProtocol',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      area: 'Area',
      field: 'Field',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      dataProtocol: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      area: 'string',
      field: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUsageDataResponseBody extends $tea.Model {
  usageDataPerInterval?: DescribeDomainUsageDataResponseBodyUsageDataPerInterval;
  type?: string;
  area?: string;
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      usageDataPerInterval: 'UsageDataPerInterval',
      type: 'Type',
      area: 'Area',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageDataPerInterval: DescribeDomainUsageDataResponseBodyUsageDataPerInterval,
      type: 'string',
      area: 'string',
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUsageDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainUsageDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainUsageDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUvDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUvDataResponseBody extends $tea.Model {
  uvDataInterval?: DescribeDomainUvDataResponseBodyUvDataInterval;
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      uvDataInterval: 'UvDataInterval',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uvDataInterval: DescribeDomainUvDataResponseBodyUvDataInterval,
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUvDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainUvDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainUvDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFCTriggerRequest extends $tea.Model {
  ownerId?: number;
  triggerARN?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      triggerARN: 'TriggerARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      triggerARN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFCTriggerResponseBody extends $tea.Model {
  requestId?: string;
  FCTrigger?: DescribeFCTriggerResponseBodyFCTrigger;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      FCTrigger: 'FCTrigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      FCTrigger: DescribeFCTriggerResponseBodyFCTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFCTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFCTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFCTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIllegalUrlExportTaskRequest extends $tea.Model {
  ownerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIllegalUrlExportTaskResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  downloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      downloadUrl: 'DownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      downloadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIllegalUrlExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIllegalUrlExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIllegalUrlExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpInfoRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  IP?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      IP: 'IP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      IP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpInfoResponseBody extends $tea.Model {
  requestId?: string;
  ISP?: string;
  region?: string;
  ispEname?: string;
  cdnIp?: string;
  regionEname?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ISP: 'ISP',
      region: 'Region',
      ispEname: 'IspEname',
      cdnIp: 'CdnIp',
      regionEname: 'RegionEname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ISP: 'string',
      region: 'string',
      ispEname: 'string',
      cdnIp: 'string',
      regionEname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIpInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIpInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL2VipsByDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL2VipsByDomainResponseBody extends $tea.Model {
  requestId?: string;
  domainName?: string;
  vips?: DescribeL2VipsByDomainResponseBodyVips;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
      vips: 'Vips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
      vips: DescribeL2VipsByDomainResponseBodyVips,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL2VipsByDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeL2VipsByDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeL2VipsByDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRangeDataByLocateAndIspServiceRequest extends $tea.Model {
  ownerId?: number;
  domainNames?: string;
  startTime?: string;
  endTime?: string;
  ispNames?: string;
  locationNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainNames: 'DomainNames',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ispNames: 'IspNames',
      locationNames: 'LocationNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainNames: 'string',
      startTime: 'string',
      endTime: 'string',
      ispNames: 'string',
      locationNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRangeDataByLocateAndIspServiceResponseBody extends $tea.Model {
  requestId?: string;
  jsonResult?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jsonResult: 'JsonResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jsonResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRangeDataByLocateAndIspServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRangeDataByLocateAndIspServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRangeDataByLocateAndIspServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRealtimeDeliveryAccRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  interval?: string;
  project?: string;
  logStore?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      project: 'Project',
      logStore: 'LogStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      project: 'string',
      logStore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRealtimeDeliveryAccResponseBody extends $tea.Model {
  requestId?: string;
  reatTimeDeliveryAccData?: DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      reatTimeDeliveryAccData: 'ReatTimeDeliveryAccData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      reatTimeDeliveryAccData: DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRealtimeDeliveryAccResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRealtimeDeliveryAccResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRealtimeDeliveryAccResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshQuotaRequest extends $tea.Model {
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

export class DescribeRefreshQuotaResponseBody extends $tea.Model {
  requestId?: string;
  blockRemain?: string;
  regexRemain?: string;
  dirRemain?: string;
  urlQuota?: string;
  preloadQuota?: string;
  preloadEdgeQuota?: string;
  urlRemain?: string;
  preloadEdgeRemain?: string;
  preloadRemain?: string;
  blockQuota?: string;
  regexQuota?: string;
  dirQuota?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      blockRemain: 'BlockRemain',
      regexRemain: 'RegexRemain',
      dirRemain: 'DirRemain',
      urlQuota: 'UrlQuota',
      preloadQuota: 'PreloadQuota',
      preloadEdgeQuota: 'PreloadEdgeQuota',
      urlRemain: 'UrlRemain',
      preloadEdgeRemain: 'PreloadEdgeRemain',
      preloadRemain: 'PreloadRemain',
      blockQuota: 'BlockQuota',
      regexQuota: 'RegexQuota',
      dirQuota: 'DirQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      blockRemain: 'string',
      regexRemain: 'string',
      dirRemain: 'string',
      urlQuota: 'string',
      preloadQuota: 'string',
      preloadEdgeQuota: 'string',
      urlRemain: 'string',
      preloadEdgeRemain: 'string',
      preloadRemain: 'string',
      blockQuota: 'string',
      regexQuota: 'string',
      dirQuota: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRefreshQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRefreshQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshTaskByIdRequest extends $tea.Model {
  ownerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshTaskByIdResponseBody extends $tea.Model {
  totalCount?: number;
  tasks?: DescribeRefreshTaskByIdResponseBodyTasks[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      tasks: 'Tasks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      tasks: { 'type': 'array', 'itemType': DescribeRefreshTaskByIdResponseBodyTasks },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshTaskByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRefreshTaskByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRefreshTaskByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshTasksRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  taskId?: string;
  objectPath?: string;
  pageNumber?: number;
  objectType?: string;
  domainName?: string;
  status?: string;
  pageSize?: number;
  startTime?: string;
  endTime?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      taskId: 'TaskId',
      objectPath: 'ObjectPath',
      pageNumber: 'PageNumber',
      objectType: 'ObjectType',
      domainName: 'DomainName',
      status: 'Status',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      taskId: 'string',
      objectPath: 'string',
      pageNumber: 'number',
      objectType: 'string',
      domainName: 'string',
      status: 'string',
      pageSize: 'number',
      startTime: 'string',
      endTime: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshTasksResponseBody extends $tea.Model {
  totalCount?: number;
  tasks?: DescribeRefreshTasksResponseBodyTasks;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      tasks: 'Tasks',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      tasks: DescribeRefreshTasksResponseBodyTasks,
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRefreshTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRefreshTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStagingIpRequest extends $tea.Model {
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

export class DescribeStagingIpResponseBody extends $tea.Model {
  requestId?: string;
  IPV4s?: DescribeStagingIpResponseBodyIPV4s;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      IPV4s: 'IPV4s',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      IPV4s: DescribeStagingIpResponseBodyIPV4s,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStagingIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStagingIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStagingIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceType?: string;
  scope?: string;
  resourceId?: string[];
  tag?: DescribeTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceType: 'string',
      scope: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': DescribeTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  tagResources?: DescribeTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': DescribeTagResourcesResponseBodyTagResources },
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

export class DescribeTopDomainsByFlowRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopDomainsByFlowResponseBody extends $tea.Model {
  topDomains?: DescribeTopDomainsByFlowResponseBodyTopDomains;
  endTime?: string;
  requestId?: string;
  domainOnlineCount?: number;
  startTime?: string;
  domainCount?: number;
  static names(): { [key: string]: string } {
    return {
      topDomains: 'TopDomains',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainOnlineCount: 'DomainOnlineCount',
      startTime: 'StartTime',
      domainCount: 'DomainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomains: DescribeTopDomainsByFlowResponseBodyTopDomains,
      endTime: 'string',
      requestId: 'string',
      domainOnlineCount: 'number',
      startTime: 'string',
      domainCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopDomainsByFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTopDomainsByFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTopDomainsByFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserCertificateExpireCountRequest extends $tea.Model {
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

export class DescribeUserCertificateExpireCountResponseBody extends $tea.Model {
  requestId?: string;
  expireWithin30DaysCount?: number;
  expiredCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      expireWithin30DaysCount: 'ExpireWithin30DaysCount',
      expiredCount: 'ExpiredCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      expireWithin30DaysCount: 'number',
      expiredCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserCertificateExpireCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserCertificateExpireCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserCertificateExpireCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConfigsRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConfigsResponseBody extends $tea.Model {
  requestId?: string;
  configs?: DescribeUserConfigsResponseBodyConfigs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configs: DescribeUserConfigsResponseBodyConfigs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDomainsRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  pageSize?: number;
  pageNumber?: number;
  domainName?: string;
  domainStatus?: string;
  domainSearchType?: string;
  cdnType?: string;
  checkDomainShow?: boolean;
  resourceGroupId?: string;
  changeStartTime?: string;
  changeEndTime?: string;
  funcId?: string;
  funcFilter?: string;
  coverage?: string;
  tag?: DescribeUserDomainsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      domainSearchType: 'DomainSearchType',
      cdnType: 'CdnType',
      checkDomainShow: 'CheckDomainShow',
      resourceGroupId: 'ResourceGroupId',
      changeStartTime: 'ChangeStartTime',
      changeEndTime: 'ChangeEndTime',
      funcId: 'FuncId',
      funcFilter: 'FuncFilter',
      coverage: 'Coverage',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      domainName: 'string',
      domainStatus: 'string',
      domainSearchType: 'string',
      cdnType: 'string',
      checkDomainShow: 'boolean',
      resourceGroupId: 'string',
      changeStartTime: 'string',
      changeEndTime: 'string',
      funcId: 'string',
      funcFilter: 'string',
      coverage: 'string',
      tag: { 'type': 'array', 'itemType': DescribeUserDomainsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDomainsResponseBody extends $tea.Model {
  domains?: DescribeUserDomainsResponseBodyDomains;
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeUserDomainsResponseBodyDomains,
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTagsRequest extends $tea.Model {
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

export class DescribeUserTagsResponseBody extends $tea.Model {
  requestId?: string;
  tags?: DescribeUserTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeUserTagsResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDataExportTaskRequest extends $tea.Model {
  ownerId?: number;
  pageSize?: string;
  pageNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageSize: 'string',
      pageNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDataExportTaskResponseBody extends $tea.Model {
  requestId?: string;
  usageDataPerPage?: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPage;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageDataPerPage: 'UsageDataPerPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageDataPerPage: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDataExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserUsageDataExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserUsageDataExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDetailDataExportTaskRequest extends $tea.Model {
  ownerId?: number;
  pageSize?: string;
  pageNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageSize: 'string',
      pageNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDetailDataExportTaskResponseBody extends $tea.Model {
  requestId?: string;
  usageDataPerPage?: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPage;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageDataPerPage: 'UsageDataPerPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageDataPerPage: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDetailDataExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserUsageDetailDataExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserUsageDetailDataExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVipsByDomainRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  available?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      available: 'Available',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      available: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVipsByDomainResponseBody extends $tea.Model {
  requestId?: string;
  domainName?: string;
  vips?: DescribeUserVipsByDomainResponseBodyVips;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
      vips: 'Vips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
      vips: DescribeUserVipsByDomainResponseBodyVips,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVipsByDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserVipsByDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserVipsByDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyContentRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyContentResponseBody extends $tea.Model {
  requestId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVerifyContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVerifyContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableRealtimeLogDeliveryRequest extends $tea.Model {
  ownerId?: number;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableRealtimeLogDeliveryResponseBody extends $tea.Model {
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

export class DisableRealtimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableRealtimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRealtimeLogDeliveryRequest extends $tea.Model {
  ownerId?: number;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRealtimeLogDeliveryResponseBody extends $tea.Model {
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

export class EnableRealtimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableRealtimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsByLogConfigIdRequest extends $tea.Model {
  ownerId?: number;
  configId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      configId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsByLogConfigIdResponseBody extends $tea.Model {
  domains?: ListDomainsByLogConfigIdResponseBodyDomains;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: ListDomainsByLogConfigIdResponseBodyDomains,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsByLogConfigIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDomainsByLogConfigIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDomainsByLogConfigIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFCTriggerRequest extends $tea.Model {
  ownerId?: number;
  eventMetaName?: string;
  eventMetaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      eventMetaName: 'EventMetaName',
      eventMetaVersion: 'EventMetaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      eventMetaName: 'string',
      eventMetaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFCTriggerResponseBody extends $tea.Model {
  requestId?: string;
  FCTriggers?: ListFCTriggerResponseBodyFCTriggers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      FCTriggers: 'FCTriggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      FCTriggers: { 'type': 'array', 'itemType': ListFCTriggerResponseBodyFCTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFCTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFCTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFCTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryDomainsRequest extends $tea.Model {
  ownerId?: number;
  project?: string;
  logstore?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      project: 'Project',
      logstore: 'Logstore',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      project: 'string',
      logstore: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryDomainsResponseBody extends $tea.Model {
  requestId?: string;
  content?: ListRealtimeLogDeliveryDomainsResponseBodyContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: ListRealtimeLogDeliveryDomainsResponseBodyContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRealtimeLogDeliveryDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRealtimeLogDeliveryDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryInfosRequest extends $tea.Model {
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

export class ListRealtimeLogDeliveryInfosResponseBody extends $tea.Model {
  requestId?: string;
  content?: ListRealtimeLogDeliveryInfosResponseBodyContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: ListRealtimeLogDeliveryInfosResponseBodyContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRealtimeLogDeliveryInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRealtimeLogDeliveryInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserCustomLogConfigRequest extends $tea.Model {
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

export class ListUserCustomLogConfigResponseBody extends $tea.Model {
  requestId?: string;
  configIds?: ListUserCustomLogConfigResponseBodyConfigIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configIds: 'ConfigIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configIds: ListUserCustomLogConfigResponseBodyConfigIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserCustomLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserCustomLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserCustomLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCdnDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  sources?: string;
  resourceGroupId?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      sources: 'Sources',
      resourceGroupId: 'ResourceGroupId',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      sources: 'string',
      resourceGroupId: 'string',
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCdnDomainResponseBody extends $tea.Model {
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

export class ModifyCdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCdnDomainSchdmByPropertyRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  property?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      property: 'Property',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      property: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCdnDomainSchdmByPropertyResponseBody extends $tea.Model {
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

export class ModifyCdnDomainSchdmByPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCdnDomainSchdmByPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCdnDomainSchdmByPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCdnServiceRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  internetChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      internetChargeType: 'InternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      internetChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCdnServiceResponseBody extends $tea.Model {
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

export class ModifyCdnServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCdnServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCdnServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainCustomLogConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  configId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      configId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainCustomLogConfigResponseBody extends $tea.Model {
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

export class ModifyDomainCustomLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDomainCustomLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDomainCustomLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRealtimeLogDeliveryRequest extends $tea.Model {
  ownerId?: number;
  project?: string;
  logstore?: string;
  region?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      project: 'Project',
      logstore: 'Logstore',
      region: 'Region',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      project: 'string',
      logstore: 'string',
      region: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRealtimeLogDeliveryResponseBody extends $tea.Model {
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

export class ModifyRealtimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyRealtimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserCustomLogConfigRequest extends $tea.Model {
  ownerId?: number;
  configId?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      configId: 'ConfigId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      configId: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserCustomLogConfigResponseBody extends $tea.Model {
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

export class ModifyUserCustomLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyUserCustomLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUserCustomLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdnServiceRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  internetChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      internetChargeType: 'InternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      internetChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdnServiceResponseBody extends $tea.Model {
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

export class OpenCdnServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenCdnServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenCdnServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishStagingConfigToProductionRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      functionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishStagingConfigToProductionResponseBody extends $tea.Model {
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

export class PublishStagingConfigToProductionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishStagingConfigToProductionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishStagingConfigToProductionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushObjectCacheRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  objectPath?: string;
  area?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      objectPath: 'ObjectPath',
      area: 'Area',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      objectPath: 'string',
      area: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushObjectCacheResponseBody extends $tea.Model {
  requestId?: string;
  pushTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pushTaskId: 'PushTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pushTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushObjectCacheResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushObjectCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PushObjectCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshObjectCachesRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  objectPath?: string;
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      objectPath: 'ObjectPath',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      objectPath: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshObjectCachesResponseBody extends $tea.Model {
  requestId?: string;
  refreshTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      refreshTaskId: 'RefreshTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      refreshTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshObjectCachesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshObjectCachesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshObjectCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackStagingConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      functionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackStagingConfigResponseBody extends $tea.Model {
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

export class RollbackStagingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RollbackStagingConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RollbackStagingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCcConfigRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  allowIps?: string;
  blockIps?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      allowIps: 'AllowIps',
      blockIps: 'BlockIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      allowIps: 'string',
      blockIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCcConfigResponseBody extends $tea.Model {
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

export class SetCcConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetCcConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetCcConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCdnDomainCSRCertificateRequest extends $tea.Model {
  ownerId?: number;
  serverCertificate?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      serverCertificate: 'ServerCertificate',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      serverCertificate: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCdnDomainCSRCertificateResponseBody extends $tea.Model {
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

export class SetCdnDomainCSRCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetCdnDomainCSRCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetCdnDomainCSRCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCdnDomainStagingConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  functions?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      functions: 'Functions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      functions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCdnDomainStagingConfigResponseBody extends $tea.Model {
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

export class SetCdnDomainStagingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetCdnDomainStagingConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetCdnDomainStagingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetConfigOfVersionRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  versionId?: string;
  configId?: string;
  functionId?: number;
  functionName?: string;
  functionArgs?: string;
  functionMatches?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      versionId: 'VersionId',
      configId: 'ConfigId',
      functionId: 'FunctionId',
      functionName: 'FunctionName',
      functionArgs: 'FunctionArgs',
      functionMatches: 'FunctionMatches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      versionId: 'string',
      configId: 'string',
      functionId: 'number',
      functionName: 'string',
      functionArgs: 'string',
      functionMatches: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetConfigOfVersionResponseBody extends $tea.Model {
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

export class SetConfigOfVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetConfigOfVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetConfigOfVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainGreenManagerConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  enable?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      enable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainGreenManagerConfigResponseBody extends $tea.Model {
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

export class SetDomainGreenManagerConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDomainGreenManagerConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDomainGreenManagerConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainServerCertificateRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  certName?: string;
  certType?: string;
  serverCertificateStatus?: string;
  serverCertificate?: string;
  privateKey?: string;
  forceSet?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      certName: 'CertName',
      certType: 'CertType',
      serverCertificateStatus: 'ServerCertificateStatus',
      serverCertificate: 'ServerCertificate',
      privateKey: 'PrivateKey',
      forceSet: 'ForceSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      certName: 'string',
      certType: 'string',
      serverCertificateStatus: 'string',
      serverCertificate: 'string',
      privateKey: 'string',
      forceSet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainServerCertificateResponseBody extends $tea.Model {
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

export class SetDomainServerCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDomainServerCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDomainServerCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetErrorPageConfigRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  pageType?: string;
  customPageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      pageType: 'PageType',
      customPageUrl: 'CustomPageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      pageType: 'string',
      customPageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetErrorPageConfigResponseBody extends $tea.Model {
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

export class SetErrorPageConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetErrorPageConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetErrorPageConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFileCacheExpiredConfigRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  cacheContent?: string;
  TTL?: string;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      cacheContent: 'CacheContent',
      TTL: 'TTL',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      cacheContent: 'string',
      TTL: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFileCacheExpiredConfigResponseBody extends $tea.Model {
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

export class SetFileCacheExpiredConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetFileCacheExpiredConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetFileCacheExpiredConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetForceRedirectConfigRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  redirectType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      redirectType: 'RedirectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      redirectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetForceRedirectConfigResponseBody extends $tea.Model {
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

export class SetForceRedirectConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetForceRedirectConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetForceRedirectConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetForwardSchemeConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  configId?: number;
  enable?: string;
  schemeOrigin?: string;
  schemeOriginPort?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      configId: 'ConfigId',
      enable: 'Enable',
      schemeOrigin: 'SchemeOrigin',
      schemeOriginPort: 'SchemeOriginPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      configId: 'number',
      enable: 'string',
      schemeOrigin: 'string',
      schemeOriginPort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetForwardSchemeConfigResponseBody extends $tea.Model {
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

export class SetForwardSchemeConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetForwardSchemeConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetForwardSchemeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetHttpErrorPageConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  errorCode?: string;
  pageUrl?: string;
  configId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      errorCode: 'ErrorCode',
      pageUrl: 'PageUrl',
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      errorCode: 'string',
      pageUrl: 'string',
      configId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetHttpErrorPageConfigResponseBody extends $tea.Model {
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

export class SetHttpErrorPageConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetHttpErrorPageConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetHttpErrorPageConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetHttpHeaderConfigRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  headerKey?: string;
  headerValue?: string;
  configId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      headerKey: 'HeaderKey',
      headerValue: 'HeaderValue',
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      headerKey: 'string',
      headerValue: 'string',
      configId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetHttpHeaderConfigResponseBody extends $tea.Model {
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

export class SetHttpHeaderConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetHttpHeaderConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetHttpHeaderConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetHttpsOptionConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  configId?: number;
  http2?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      configId: 'ConfigId',
      http2: 'Http2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      configId: 'number',
      http2: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetHttpsOptionConfigResponseBody extends $tea.Model {
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

export class SetHttpsOptionConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetHttpsOptionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetHttpsOptionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIgnoreQueryStringConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  configId?: number;
  enable?: string;
  hashKeyArgs?: string;
  keepOssArgs?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      configId: 'ConfigId',
      enable: 'Enable',
      hashKeyArgs: 'HashKeyArgs',
      keepOssArgs: 'KeepOssArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      configId: 'number',
      enable: 'string',
      hashKeyArgs: 'string',
      keepOssArgs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIgnoreQueryStringConfigResponseBody extends $tea.Model {
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

export class SetIgnoreQueryStringConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetIgnoreQueryStringConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetIgnoreQueryStringConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIpAllowListConfigRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  allowIps?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      allowIps: 'AllowIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      allowIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIpAllowListConfigResponseBody extends $tea.Model {
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

export class SetIpAllowListConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetIpAllowListConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetIpAllowListConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIpBlackListConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  blockIps?: string;
  configId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      blockIps: 'BlockIps',
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      blockIps: 'string',
      configId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIpBlackListConfigResponseBody extends $tea.Model {
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

export class SetIpBlackListConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetIpBlackListConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetIpBlackListConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetOptimizeConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  configId?: number;
  enable?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      configId: 'ConfigId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      configId: 'number',
      enable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetOptimizeConfigResponseBody extends $tea.Model {
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

export class SetOptimizeConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetOptimizeConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetOptimizeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPageCompressConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  configId?: number;
  enable?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      configId: 'ConfigId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      configId: 'number',
      enable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPageCompressConfigResponseBody extends $tea.Model {
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

export class SetPageCompressConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetPageCompressConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetPageCompressConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRangeConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  enable?: string;
  configId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      enable: 'Enable',
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      enable: 'string',
      configId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRangeConfigResponseBody extends $tea.Model {
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

export class SetRangeConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetRangeConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetRangeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRefererConfigRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  referType?: string;
  referList?: string;
  allowEmpty?: string;
  disableAst?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      referType: 'ReferType',
      referList: 'ReferList',
      allowEmpty: 'AllowEmpty',
      disableAst: 'DisableAst',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      referType: 'string',
      referList: 'string',
      allowEmpty: 'string',
      disableAst: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRefererConfigResponseBody extends $tea.Model {
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

export class SetRefererConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetRefererConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetRefererConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRemoveQueryStringConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  configId?: number;
  aliRemoveArgs?: string;
  keepOssArgs?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      configId: 'ConfigId',
      aliRemoveArgs: 'AliRemoveArgs',
      keepOssArgs: 'KeepOssArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      configId: 'number',
      aliRemoveArgs: 'string',
      keepOssArgs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRemoveQueryStringConfigResponseBody extends $tea.Model {
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

export class SetRemoveQueryStringConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetRemoveQueryStringConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetRemoveQueryStringConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetReqAuthConfigRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  authType?: string;
  key1?: string;
  key2?: string;
  timeOut?: string;
  authRemoteDesc?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      authType: 'AuthType',
      key1: 'Key1',
      key2: 'Key2',
      timeOut: 'TimeOut',
      authRemoteDesc: 'AuthRemoteDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      authType: 'string',
      key1: 'string',
      key2: 'string',
      timeOut: 'string',
      authRemoteDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetReqAuthConfigResponseBody extends $tea.Model {
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

export class SetReqAuthConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetReqAuthConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetReqAuthConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetReqHeaderConfigRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  key?: string;
  value?: string;
  configId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      key: 'Key',
      value: 'Value',
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      key: 'string',
      value: 'string',
      configId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetReqHeaderConfigResponseBody extends $tea.Model {
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

export class SetReqHeaderConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetReqHeaderConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetReqHeaderConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSourceHostConfigRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  enable?: string;
  backSrcDomain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      enable: 'Enable',
      backSrcDomain: 'BackSrcDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      enable: 'string',
      backSrcDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSourceHostConfigResponseBody extends $tea.Model {
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

export class SetSourceHostConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetSourceHostConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetSourceHostConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetWaitingRoomConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  waitUri?: string;
  allowPct?: number;
  maxTimeWait?: number;
  gapTime?: number;
  waitUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      waitUri: 'WaitUri',
      allowPct: 'AllowPct',
      maxTimeWait: 'MaxTimeWait',
      gapTime: 'GapTime',
      waitUrl: 'WaitUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      waitUri: 'string',
      allowPct: 'number',
      maxTimeWait: 'number',
      gapTime: 'number',
      waitUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetWaitingRoomConfigResponseBody extends $tea.Model {
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

export class SetWaitingRoomConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetWaitingRoomConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetWaitingRoomConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCdnDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCdnDomainResponseBody extends $tea.Model {
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

export class StartCdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCdnDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCdnDomainResponseBody extends $tea.Model {
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

export class StopCdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
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
  ownerId?: number;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
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

export class UpdateFCTriggerRequest extends $tea.Model {
  ownerId?: number;
  triggerARN?: string;
  sourceARN?: string;
  functionARN?: string;
  roleARN?: string;
  notes?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      triggerARN: 'TriggerARN',
      sourceARN: 'SourceARN',
      functionARN: 'FunctionARN',
      roleARN: 'RoleARN',
      notes: 'Notes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      triggerARN: 'string',
      sourceARN: 'string',
      functionARN: 'string',
      roleARN: 'string',
      notes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFCTriggerResponseBody extends $tea.Model {
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

export class UpdateFCTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFCTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFCTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDomainOwnerRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      verifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDomainOwnerResponseBody extends $tea.Model {
  requestId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDomainOwnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifyDomainOwnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyDomainOwnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnCertificateListResponseBodyCertificateListModelCertListCert extends $tea.Model {
  lastTime?: number;
  fingerprint?: string;
  certName?: string;
  issuer?: string;
  certId?: number;
  common?: string;
  static names(): { [key: string]: string } {
    return {
      lastTime: 'LastTime',
      fingerprint: 'Fingerprint',
      certName: 'CertName',
      issuer: 'Issuer',
      certId: 'CertId',
      common: 'Common',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTime: 'number',
      fingerprint: 'string',
      certName: 'string',
      issuer: 'string',
      certId: 'number',
      common: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnCertificateListResponseBodyCertificateListModelCertList extends $tea.Model {
  cert?: DescribeCdnCertificateListResponseBodyCertificateListModelCertListCert[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: { 'type': 'array', 'itemType': DescribeCdnCertificateListResponseBodyCertificateListModelCertListCert },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnCertificateListResponseBodyCertificateListModel extends $tea.Model {
  certList?: DescribeCdnCertificateListResponseBodyCertificateListModelCertList;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: DescribeCdnCertificateListResponseBodyCertificateListModelCertList,
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainByCertificateResponseBodyCertInfosCertInfo extends $tea.Model {
  certStartTime?: string;
  certExpireTime?: string;
  certCaIsLegacy?: string;
  certSubjectCommonName?: string;
  certType?: string;
  domainNames?: string;
  certExpired?: string;
  issuer?: string;
  domainList?: string;
  static names(): { [key: string]: string } {
    return {
      certStartTime: 'CertStartTime',
      certExpireTime: 'CertExpireTime',
      certCaIsLegacy: 'CertCaIsLegacy',
      certSubjectCommonName: 'CertSubjectCommonName',
      certType: 'CertType',
      domainNames: 'DomainNames',
      certExpired: 'CertExpired',
      issuer: 'Issuer',
      domainList: 'DomainList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certStartTime: 'string',
      certExpireTime: 'string',
      certCaIsLegacy: 'string',
      certSubjectCommonName: 'string',
      certType: 'string',
      domainNames: 'string',
      certExpired: 'string',
      issuer: 'string',
      domainList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainByCertificateResponseBodyCertInfos extends $tea.Model {
  certInfo?: DescribeCdnDomainByCertificateResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeCdnDomainByCertificateResponseBodyCertInfosCertInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg extends $tea.Model {
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

export class DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs extends $tea.Model {
  functionArg?: DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg[];
  static names(): { [key: string]: string } {
    return {
      functionArg: 'FunctionArg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArg: { 'type': 'array', 'itemType': DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfig extends $tea.Model {
  status?: string;
  configId?: string;
  functionName?: string;
  functionArgs?: DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      configId: 'ConfigId',
      functionName: 'FunctionName',
      functionArgs: 'FunctionArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      configId: 'string',
      functionName: 'string',
      functionArgs: DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainConfigsResponseBodyDomainConfigs extends $tea.Model {
  domainConfig?: DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfig[];
  static names(): { [key: string]: string } {
    return {
      domainConfig: 'DomainConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfig: { 'type': 'array', 'itemType': DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel extends $tea.Model {
  type?: string;
  weight?: string;
  enabled?: string;
  priority?: string;
  port?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      enabled: 'Enabled',
      priority: 'Priority',
      port: 'Port',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'string',
      enabled: 'string',
      priority: 'string',
      port: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels extends $tea.Model {
  sourceModel?: DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel[];
  static names(): { [key: string]: string } {
    return {
      sourceModel: 'SourceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceModel: { 'type': 'array', 'itemType': DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailResponseBodyGetDomainDetailModel extends $tea.Model {
  httpsCname?: string;
  serverCertificateStatus?: string;
  gmtModified?: string;
  domainName?: string;
  gmtCreated?: string;
  description?: string;
  resourceGroupId?: string;
  scope?: string;
  domainStatus?: string;
  cname?: string;
  cdnType?: string;
  sourceModels?: DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels;
  static names(): { [key: string]: string } {
    return {
      httpsCname: 'HttpsCname',
      serverCertificateStatus: 'ServerCertificateStatus',
      gmtModified: 'GmtModified',
      domainName: 'DomainName',
      gmtCreated: 'GmtCreated',
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      scope: 'Scope',
      domainStatus: 'DomainStatus',
      cname: 'Cname',
      cdnType: 'CdnType',
      sourceModels: 'SourceModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsCname: 'string',
      serverCertificateStatus: 'string',
      gmtModified: 'string',
      domainName: 'string',
      gmtCreated: 'string',
      description: 'string',
      resourceGroupId: 'string',
      scope: 'string',
      domainStatus: 'string',
      cname: 'string',
      cdnType: 'string',
      sourceModels: DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfosPageInfoDetail extends $tea.Model {
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

export class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos extends $tea.Model {
  pageInfoDetail?: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfosPageInfoDetail[];
  static names(): { [key: string]: string } {
    return {
      pageInfoDetail: 'PageInfoDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfoDetail: { 'type': 'array', 'itemType': DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfosPageInfoDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail extends $tea.Model {
  endTime?: string;
  startTime?: string;
  logPath?: string;
  logSize?: number;
  logName?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      logPath: 'LogPath',
      logSize: 'LogSize',
      logName: 'LogName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      logPath: 'string',
      logSize: 'number',
      logName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos extends $tea.Model {
  logInfoDetail?: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail[];
  static names(): { [key: string]: string } {
    return {
      logInfoDetail: 'LogInfoDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfoDetail: { 'type': 'array', 'itemType': DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetail extends $tea.Model {
  pageInfos?: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos;
  logCount?: number;
  domainName?: string;
  logInfos?: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos;
  static names(): { [key: string]: string } {
    return {
      pageInfos: 'PageInfos',
      logCount: 'LogCount',
      domainName: 'DomainName',
      logInfos: 'LogInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfos: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos,
      logCount: 'number',
      domainName: 'string',
      logInfos: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsResponseBodyDomainLogDetails extends $tea.Model {
  domainLogDetail?: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetail[];
  static names(): { [key: string]: string } {
    return {
      domainLogDetail: 'DomainLogDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetail: { 'type': 'array', 'itemType': DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs extends $tea.Model {
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

export class DescribeCdnDomainStagingConfigResponseBodyDomainConfigs extends $tea.Model {
  status?: string;
  configId?: string;
  functionName?: string;
  functionArgs?: DescribeCdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      configId: 'ConfigId',
      functionName: 'FunctionName',
      functionArgs: 'FunctionArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      configId: 'string',
      functionName: 'string',
      functionArgs: { 'type': 'array', 'itemType': DescribeCdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnHttpsDomainListResponseBodyCertInfosCertInfo extends $tea.Model {
  certStartTime?: string;
  certExpireTime?: string;
  certUpdateTime?: string;
  certType?: string;
  certName?: string;
  certStatus?: string;
  domainName?: string;
  certCommonName?: string;
  static names(): { [key: string]: string } {
    return {
      certStartTime: 'CertStartTime',
      certExpireTime: 'CertExpireTime',
      certUpdateTime: 'CertUpdateTime',
      certType: 'CertType',
      certName: 'CertName',
      certStatus: 'CertStatus',
      domainName: 'DomainName',
      certCommonName: 'CertCommonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certStartTime: 'string',
      certExpireTime: 'string',
      certUpdateTime: 'string',
      certType: 'string',
      certName: 'string',
      certStatus: 'string',
      domainName: 'string',
      certCommonName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnHttpsDomainListResponseBodyCertInfos extends $tea.Model {
  certInfo?: DescribeCdnHttpsDomainListResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeCdnHttpsDomainListResponseBodyCertInfosCertInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnRegionAndIspResponseBodyRegionsRegion extends $tea.Model {
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

export class DescribeCdnRegionAndIspResponseBodyRegions extends $tea.Model {
  region?: DescribeCdnRegionAndIspResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeCdnRegionAndIspResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnRegionAndIspResponseBodyIspsIsp extends $tea.Model {
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

export class DescribeCdnRegionAndIspResponseBodyIsps extends $tea.Model {
  isp?: DescribeCdnRegionAndIspResponseBodyIspsIsp[];
  static names(): { [key: string]: string } {
    return {
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isp: { 'type': 'array', 'itemType': DescribeCdnRegionAndIspResponseBodyIspsIsp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnServiceResponseBodyOperationLocksLockReason extends $tea.Model {
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

export class DescribeCdnServiceResponseBodyOperationLocks extends $tea.Model {
  lockReason?: DescribeCdnServiceResponseBodyOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeCdnServiceResponseBodyOperationLocksLockReason },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem extends $tea.Model {
  bandwidth?: number;
  chargeType?: string;
  flow?: number;
  count?: number;
  cdnRegion?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      chargeType: 'ChargeType',
      flow: 'Flow',
      count: 'Count',
      cdnRegion: 'CdnRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      chargeType: 'string',
      flow: 'number',
      count: 'number',
      cdnRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData extends $tea.Model {
  billingDataItem?: DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem[];
  static names(): { [key: string]: string } {
    return {
      billingDataItem: 'BillingDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingDataItem: { 'type': 'array', 'itemType': DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem extends $tea.Model {
  billingData?: DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData;
  billType?: string;
  dimension?: string;
  billTime?: string;
  static names(): { [key: string]: string } {
    return {
      billingData: 'BillingData',
      billType: 'BillType',
      dimension: 'Dimension',
      billTime: 'BillTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingData: DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData,
      billType: 'string',
      dimension: 'string',
      billTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillHistoryResponseBodyBillHistoryData extends $tea.Model {
  billHistoryDataItem?: DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem[];
  static names(): { [key: string]: string } {
    return {
      billHistoryDataItem: 'BillHistoryDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billHistoryDataItem: { 'type': 'array', 'itemType': DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem extends $tea.Model {
  value?: number;
  timeStp?: string;
  area?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStp: 'TimeStp',
      area: 'Area',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
      timeStp: 'string',
      area: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillPredictionResponseBodyBillPredictionData extends $tea.Model {
  billPredictionDataItem?: DescribeCdnUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem[];
  static names(): { [key: string]: string } {
    return {
      billPredictionDataItem: 'BillPredictionDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billPredictionDataItem: { 'type': 'array', 'itemType': DescribeCdnUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem extends $tea.Model {
  endTime?: string;
  startTime?: string;
  billingCycle?: string;
  product?: string;
  billType?: string;
  dimension?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      billingCycle: 'BillingCycle',
      product: 'Product',
      billType: 'BillType',
      dimension: 'Dimension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      billingCycle: 'string',
      product: 'string',
      billType: 'string',
      dimension: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillTypeResponseBodyBillTypeData extends $tea.Model {
  billTypeDataItem?: DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem[];
  static names(): { [key: string]: string } {
    return {
      billTypeDataItem: 'BillTypeDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billTypeDataItem: { 'type': 'array', 'itemType': DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserConfigsResponseBodyConfigs extends $tea.Model {
  argName?: string;
  functionName?: string;
  argValue?: string;
  static names(): { [key: string]: string } {
    return {
      argName: 'ArgName',
      functionName: 'FunctionName',
      argValue: 'ArgValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argName: 'string',
      functionName: 'string',
      argValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource extends $tea.Model {
  type?: string;
  weight?: string;
  priority?: string;
  port?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      priority: 'Priority',
      port: 'Port',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'string',
      priority: 'string',
      port: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources extends $tea.Model {
  source?: DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserDomainsByFuncResponseBodyDomainsPageData extends $tea.Model {
  gmtCreated?: string;
  sslProtocol?: string;
  description?: string;
  resourceGroupId?: string;
  sandbox?: string;
  domainStatus?: string;
  cname?: string;
  sources?: DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources;
  gmtModified?: string;
  cdnType?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      sslProtocol: 'SslProtocol',
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      sandbox: 'Sandbox',
      domainStatus: 'DomainStatus',
      cname: 'Cname',
      sources: 'Sources',
      gmtModified: 'GmtModified',
      cdnType: 'CdnType',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      sslProtocol: 'string',
      description: 'string',
      resourceGroupId: 'string',
      sandbox: 'string',
      domainStatus: 'string',
      cname: 'string',
      sources: DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources,
      gmtModified: 'string',
      cdnType: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserDomainsByFuncResponseBodyDomains extends $tea.Model {
  pageData?: DescribeCdnUserDomainsByFuncResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeCdnUserDomainsByFuncResponseBodyDomainsPageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo extends $tea.Model {
  endTime?: string;
  status?: string;
  displayName?: string;
  startTime?: string;
  commodityCode?: string;
  currCapacity?: string;
  initCapacity?: string;
  instanceId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      status: 'Status',
      displayName: 'DisplayName',
      startTime: 'StartTime',
      commodityCode: 'CommodityCode',
      currCapacity: 'CurrCapacity',
      initCapacity: 'InitCapacity',
      instanceId: 'InstanceId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      status: 'string',
      displayName: 'string',
      startTime: 'string',
      commodityCode: 'string',
      currCapacity: 'string',
      initCapacity: 'string',
      instanceId: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserResourcePackageResponseBodyResourcePackageInfos extends $tea.Model {
  resourcePackageInfo?: DescribeCdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo[];
  static names(): { [key: string]: string } {
    return {
      resourcePackageInfo: 'ResourcePackageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePackageInfo: { 'type': 'array', 'itemType': DescribeCdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnWafDomainResponseBodyOutPutDomains extends $tea.Model {
  status?: string;
  domain?: string;
  ccStatus?: string;
  aclStatus?: string;
  wafStatus?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      domain: 'Domain',
      ccStatus: 'CcStatus',
      aclStatus: 'AclStatus',
      wafStatus: 'WafStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      domain: 'string',
      ccStatus: 'string',
      aclStatus: 'string',
      wafStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateInfoByIDResponseBodyCertInfosCertInfo extends $tea.Model {
  certExpireTime?: string;
  createTime?: string;
  certType?: string;
  certName?: string;
  certId?: string;
  domainList?: string;
  httpsCrt?: string;
  static names(): { [key: string]: string } {
    return {
      certExpireTime: 'CertExpireTime',
      createTime: 'CreateTime',
      certType: 'CertType',
      certName: 'CertName',
      certId: 'CertId',
      domainList: 'DomainList',
      httpsCrt: 'HttpsCrt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certExpireTime: 'string',
      createTime: 'string',
      certType: 'string',
      certName: 'string',
      certId: 'string',
      domainList: 'string',
      httpsCrt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateInfoByIDResponseBodyCertInfos extends $tea.Model {
  certInfo?: DescribeCertificateInfoByIDResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeCertificateInfoByIDResponseBodyCertInfosCertInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgsFunctionArg extends $tea.Model {
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

export class DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgs extends $tea.Model {
  functionArg?: DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgsFunctionArg[];
  static names(): { [key: string]: string } {
    return {
      functionArg: 'FunctionArg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArg: { 'type': 'array', 'itemType': DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgsFunctionArg },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfig extends $tea.Model {
  status?: string;
  configId?: string;
  functionName?: string;
  functionArgs?: DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgs;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      configId: 'ConfigId',
      functionName: 'FunctionName',
      functionArgs: 'FunctionArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      configId: 'string',
      functionName: 'string',
      functionArgs: DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigOfVersionResponseBodyVersionConfigs extends $tea.Model {
  versionConfig?: DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfig[];
  static names(): { [key: string]: string } {
    return {
      versionConfig: 'VersionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionConfig: { 'type': 'array', 'itemType': DescribeConfigOfVersionResponseBodyVersionConfigsVersionConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAverageResponseTimeResponseBodyAvgRTPerIntervalDataModule extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAverageResponseTimeResponseBodyAvgRTPerInterval extends $tea.Model {
  dataModule?: DescribeDomainAverageResponseTimeResponseBodyAvgRTPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainAverageResponseTimeResponseBodyAvgRTPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $tea.Model {
  httpsDomesticValue?: string;
  value?: string;
  overseasValue?: string;
  httpsValue?: string;
  httpsOverseasValue?: string;
  timeStamp?: string;
  domesticValue?: string;
  static names(): { [key: string]: string } {
    return {
      httpsDomesticValue: 'HttpsDomesticValue',
      value: 'Value',
      overseasValue: 'OverseasValue',
      httpsValue: 'HttpsValue',
      httpsOverseasValue: 'HttpsOverseasValue',
      timeStamp: 'TimeStamp',
      domesticValue: 'DomesticValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsDomesticValue: 'string',
      value: 'string',
      overseasValue: 'string',
      httpsValue: 'string',
      httpsOverseasValue: 'string',
      timeStamp: 'string',
      domesticValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataResponseBodyBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule extends $tea.Model {
  value?: string;
  trafficValue?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      trafficValue: 'TrafficValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      trafficValue: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByLayerResponseBodyBpsDataInterval extends $tea.Model {
  dataModule?: DescribeDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel extends $tea.Model {
  locationName?: string;
  timeStamp?: string;
  ispName?: string;
  bps?: number;
  static names(): { [key: string]: string } {
    return {
      locationName: 'LocationName',
      timeStamp: 'TimeStamp',
      ispName: 'IspName',
      bps: 'Bps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationName: 'string',
      timeStamp: 'string',
      ispName: 'string',
      bps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByTimeStampResponseBodyBpsDataList extends $tea.Model {
  bpsDataModel?: DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel[];
  static names(): { [key: string]: string } {
    return {
      bpsDataModel: 'BpsDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataModel: { 'type': 'array', 'itemType': DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCcActivityLogResponseBodyActivityLog extends $tea.Model {
  value?: string;
  ttl?: number;
  action?: string;
  triggerObject?: string;
  timeStamp?: string;
  domainName?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      ttl: 'Ttl',
      action: 'Action',
      triggerObject: 'TriggerObject',
      timeStamp: 'TimeStamp',
      domainName: 'DomainName',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      ttl: 'number',
      action: 'string',
      triggerObject: 'string',
      timeStamp: 'string',
      domainName: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCertificateInfoResponseBodyCertInfosCertInfo extends $tea.Model {
  status?: string;
  certLife?: string;
  certExpireTime?: string;
  certUpdateTime?: string;
  serverCertificateStatus?: string;
  certDomainName?: string;
  certOrg?: string;
  domainName?: string;
  certStartTime?: string;
  certType?: string;
  certName?: string;
  domainCnameStatus?: string;
  serverCertificate?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      certLife: 'CertLife',
      certExpireTime: 'CertExpireTime',
      certUpdateTime: 'CertUpdateTime',
      serverCertificateStatus: 'ServerCertificateStatus',
      certDomainName: 'CertDomainName',
      certOrg: 'CertOrg',
      domainName: 'DomainName',
      certStartTime: 'CertStartTime',
      certType: 'CertType',
      certName: 'CertName',
      domainCnameStatus: 'DomainCnameStatus',
      serverCertificate: 'ServerCertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      certLife: 'string',
      certExpireTime: 'string',
      certUpdateTime: 'string',
      serverCertificateStatus: 'string',
      certDomainName: 'string',
      certOrg: 'string',
      domainName: 'string',
      certStartTime: 'string',
      certType: 'string',
      certName: 'string',
      domainCnameStatus: 'string',
      serverCertificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCertificateInfoResponseBodyCertInfos extends $tea.Model {
  certInfo?: DescribeDomainCertificateInfoResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeDomainCertificateInfoResponseBodyCertInfosCertInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailDataByLayerResponseBodyDataDataModule extends $tea.Model {
  traf?: number;
  qps?: number;
  ipv6Qps?: number;
  ipv6Bps?: number;
  acc?: number;
  ipv6Traf?: number;
  ipv6Acc?: number;
  timeStamp?: string;
  httpCode?: string;
  bps?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      traf: 'Traf',
      qps: 'Qps',
      ipv6Qps: 'Ipv6Qps',
      ipv6Bps: 'Ipv6Bps',
      acc: 'Acc',
      ipv6Traf: 'Ipv6Traf',
      ipv6Acc: 'Ipv6Acc',
      timeStamp: 'TimeStamp',
      httpCode: 'HttpCode',
      bps: 'Bps',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traf: 'number',
      qps: 'number',
      ipv6Qps: 'number',
      ipv6Bps: 'number',
      acc: 'number',
      ipv6Traf: 'number',
      ipv6Acc: 'number',
      timeStamp: 'string',
      httpCode: 'string',
      bps: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailDataByLayerResponseBodyData extends $tea.Model {
  dataModule?: DescribeDomainDetailDataByLayerResponseBodyDataDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainDetailDataByLayerResponseBodyDataDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValueFileSizeProportionData extends $tea.Model {
  proportion?: string;
  fileSize?: string;
  static names(): { [key: string]: string } {
    return {
      proportion: 'Proportion',
      fileSize: 'FileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proportion: 'string',
      fileSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValue extends $tea.Model {
  fileSizeProportionData?: DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValueFileSizeProportionData[];
  static names(): { [key: string]: string } {
    return {
      fileSizeProportionData: 'FileSizeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSizeProportionData: { 'type': 'array', 'itemType': DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValueFileSizeProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageData extends $tea.Model {
  value?: DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValue;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValue,
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataInterval extends $tea.Model {
  usageData?: DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule extends $tea.Model {
  value?: string;
  httpsValue?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      httpsValue: 'HttpsValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      httpsValue: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHitRateDataResponseBodyHitRateInterval extends $tea.Model {
  dataModule?: DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData extends $tea.Model {
  code?: string;
  proportion?: string;
  count?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      proportion: 'Proportion',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      proportion: 'string',
      count: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue extends $tea.Model {
  codeProportionData?: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      codeProportionData: 'CodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeProportionData: { 'type': 'array', 'itemType': DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData extends $tea.Model {
  value?: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue,
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataResponseBodyHttpCodeData extends $tea.Model {
  usageData?: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataIntervalDataModule extends $tea.Model {
  value?: string;
  timeStamp?: string;
  totalValue?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
      totalValue: 'TotalValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
      totalValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval extends $tea.Model {
  dataModule?: DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainISPDataResponseBodyValueISPProportionData extends $tea.Model {
  totalQuery?: string;
  totalBytes?: string;
  avgResponseRate?: string;
  avgResponseTime?: string;
  reqErrRate?: string;
  avgObjectSize?: string;
  bps?: string;
  qps?: string;
  proportion?: string;
  ispEname?: string;
  ISP?: string;
  bytesProportion?: string;
  static names(): { [key: string]: string } {
    return {
      totalQuery: 'TotalQuery',
      totalBytes: 'TotalBytes',
      avgResponseRate: 'AvgResponseRate',
      avgResponseTime: 'AvgResponseTime',
      reqErrRate: 'ReqErrRate',
      avgObjectSize: 'AvgObjectSize',
      bps: 'Bps',
      qps: 'Qps',
      proportion: 'Proportion',
      ispEname: 'IspEname',
      ISP: 'ISP',
      bytesProportion: 'BytesProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalQuery: 'string',
      totalBytes: 'string',
      avgResponseRate: 'string',
      avgResponseTime: 'string',
      reqErrRate: 'string',
      avgObjectSize: 'string',
      bps: 'string',
      qps: 'string',
      proportion: 'string',
      ispEname: 'string',
      ISP: 'string',
      bytesProportion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainISPDataResponseBodyValue extends $tea.Model {
  ISPProportionData?: DescribeDomainISPDataResponseBodyValueISPProportionData[];
  static names(): { [key: string]: string } {
    return {
      ISPProportionData: 'ISPProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ISPProportionData: { 'type': 'array', 'itemType': DescribeDomainISPDataResponseBodyValueISPProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNamesOfVersionResponseBodyContents extends $tea.Model {
  domainName?: string;
  domainId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainId: 'DomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPathDataResponseBodyPathDataPerIntervalUsageData extends $tea.Model {
  time?: string;
  acc?: number;
  traffic?: number;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      acc: 'Acc',
      traffic: 'Traffic',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      acc: 'number',
      traffic: 'number',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPathDataResponseBodyPathDataPerInterval extends $tea.Model {
  usageData?: DescribeDomainPathDataResponseBodyPathDataPerIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainPathDataResponseBodyPathDataPerIntervalUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPvDataResponseBodyPvDataIntervalUsageData extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPvDataResponseBodyPvDataInterval extends $tea.Model {
  usageData?: DescribeDomainPvDataResponseBodyPvDataIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainPvDataResponseBodyPvDataIntervalUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataResponseBodyQpsDataIntervalDataModule extends $tea.Model {
  accValue?: string;
  accDomesticValue?: string;
  httpsValue?: string;
  accOverseasValue?: string;
  httpsOverseasValue?: string;
  domesticValue?: string;
  httpsAccOverseasValue?: string;
  httpsAccValue?: string;
  httpsDomesticValue?: string;
  value?: string;
  overseasValue?: string;
  timeStamp?: string;
  httpsAccDomesticValue?: string;
  static names(): { [key: string]: string } {
    return {
      accValue: 'AccValue',
      accDomesticValue: 'AccDomesticValue',
      httpsValue: 'HttpsValue',
      accOverseasValue: 'AccOverseasValue',
      httpsOverseasValue: 'HttpsOverseasValue',
      domesticValue: 'DomesticValue',
      httpsAccOverseasValue: 'HttpsAccOverseasValue',
      httpsAccValue: 'HttpsAccValue',
      httpsDomesticValue: 'HttpsDomesticValue',
      value: 'Value',
      overseasValue: 'OverseasValue',
      timeStamp: 'TimeStamp',
      httpsAccDomesticValue: 'HttpsAccDomesticValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accValue: 'string',
      accDomesticValue: 'string',
      httpsValue: 'string',
      accOverseasValue: 'string',
      httpsOverseasValue: 'string',
      domesticValue: 'string',
      httpsAccOverseasValue: 'string',
      httpsAccValue: 'string',
      httpsDomesticValue: 'string',
      value: 'string',
      overseasValue: 'string',
      timeStamp: 'string',
      httpsAccDomesticValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataResponseBodyQpsDataInterval extends $tea.Model {
  dataModule?: DescribeDomainQpsDataResponseBodyQpsDataIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainQpsDataResponseBodyQpsDataIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataByLayerResponseBodyQpsDataIntervalDataModule extends $tea.Model {
  value?: string;
  accValue?: string;
  accDomesticValue?: string;
  overseasValue?: string;
  accOverseasValue?: string;
  timeStamp?: string;
  domesticValue?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      accValue: 'AccValue',
      accDomesticValue: 'AccDomesticValue',
      overseasValue: 'OverseasValue',
      accOverseasValue: 'AccOverseasValue',
      timeStamp: 'TimeStamp',
      domesticValue: 'DomesticValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      accValue: 'string',
      accDomesticValue: 'string',
      overseasValue: 'string',
      accOverseasValue: 'string',
      timeStamp: 'string',
      domesticValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataByLayerResponseBodyQpsDataInterval extends $tea.Model {
  dataModule?: DescribeDomainQpsDataByLayerResponseBodyQpsDataIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainQpsDataByLayerResponseBodyQpsDataIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeBpsDataResponseBodyDataBpsModel extends $tea.Model {
  timeStamp?: string;
  bps?: number;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      bps: 'Bps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      bps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeBpsDataResponseBodyData extends $tea.Model {
  bpsModel?: DescribeDomainRealTimeBpsDataResponseBodyDataBpsModel[];
  static names(): { [key: string]: string } {
    return {
      bpsModel: 'BpsModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsModel: { 'type': 'array', 'itemType': DescribeDomainRealTimeBpsDataResponseBodyDataBpsModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel extends $tea.Model {
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

export class DescribeDomainRealTimeByteHitRateDataResponseBodyData extends $tea.Model {
  byteHitRateDataModel?: DescribeDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel[];
  static names(): { [key: string]: string } {
    return {
      byteHitRateDataModel: 'ByteHitRateDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteHitRateDataModel: { 'type': 'array', 'itemType': DescribeDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData extends $tea.Model {
  code?: string;
  proportion?: string;
  count?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      proportion: 'Proportion',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      proportion: 'string',
      count: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue extends $tea.Model {
  realTimeCodeProportionData?: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      realTimeCodeProportionData: 'RealTimeCodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeCodeProportionData: { 'type': 'array', 'itemType': DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData extends $tea.Model {
  value?: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue,
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData extends $tea.Model {
  usageData?: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeQpsDataResponseBodyDataQpsModel extends $tea.Model {
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

export class DescribeDomainRealTimeQpsDataResponseBodyData extends $tea.Model {
  qpsModel?: DescribeDomainRealTimeQpsDataResponseBodyDataQpsModel[];
  static names(): { [key: string]: string } {
    return {
      qpsModel: 'QpsModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qpsModel: { 'type': 'array', 'itemType': DescribeDomainRealTimeQpsDataResponseBodyDataQpsModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel extends $tea.Model {
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

export class DescribeDomainRealTimeReqHitRateDataResponseBodyData extends $tea.Model {
  reqHitRateDataModel?: DescribeDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel[];
  static names(): { [key: string]: string } {
    return {
      reqHitRateDataModel: 'ReqHitRateDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqHitRateDataModel: { 'type': 'array', 'itemType': DescribeDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData extends $tea.Model {
  code?: string;
  proportion?: string;
  count?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      proportion: 'Proportion',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      proportion: 'string',
      count: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValue extends $tea.Model {
  realTimeSrcCodeProportionData?: DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      realTimeSrcCodeProportionData: 'RealTimeSrcCodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeSrcCodeProportionData: { 'type': 'array', 'itemType': DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData extends $tea.Model {
  value?: DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValue;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValue,
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData extends $tea.Model {
  usageData?: DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRegionDataResponseBodyValueRegionProportionData extends $tea.Model {
  totalQuery?: string;
  totalBytes?: string;
  avgResponseRate?: string;
  avgResponseTime?: string;
  reqErrRate?: string;
  avgObjectSize?: string;
  bps?: string;
  qps?: string;
  regionEname?: string;
  region?: string;
  proportion?: string;
  bytesProportion?: string;
  static names(): { [key: string]: string } {
    return {
      totalQuery: 'TotalQuery',
      totalBytes: 'TotalBytes',
      avgResponseRate: 'AvgResponseRate',
      avgResponseTime: 'AvgResponseTime',
      reqErrRate: 'ReqErrRate',
      avgObjectSize: 'AvgObjectSize',
      bps: 'Bps',
      qps: 'Qps',
      regionEname: 'RegionEname',
      region: 'Region',
      proportion: 'Proportion',
      bytesProportion: 'BytesProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalQuery: 'string',
      totalBytes: 'string',
      avgResponseRate: 'string',
      avgResponseTime: 'string',
      reqErrRate: 'string',
      avgObjectSize: 'string',
      bps: 'string',
      qps: 'string',
      regionEname: 'string',
      region: 'string',
      proportion: 'string',
      bytesProportion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRegionDataResponseBodyValue extends $tea.Model {
  regionProportionData?: DescribeDomainRegionDataResponseBodyValueRegionProportionData[];
  static names(): { [key: string]: string } {
    return {
      regionProportionData: 'RegionProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionProportionData: { 'type': 'array', 'itemType': DescribeDomainRegionDataResponseBodyValueRegionProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainReqHitRateDataResponseBodyReqHitRateIntervalDataModule extends $tea.Model {
  value?: string;
  httpsValue?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      httpsValue: 'HttpsValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      httpsValue: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainReqHitRateDataResponseBodyReqHitRateInterval extends $tea.Model {
  dataModule?: DescribeDomainReqHitRateDataResponseBodyReqHitRateIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainReqHitRateDataResponseBodyReqHitRateIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains extends $tea.Model {
  domainNames?: string[];
  static names(): { [key: string]: string } {
    return {
      domainNames: 'domainNames',
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

export class DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo extends $tea.Model {
  status?: string;
  updateTime?: string;
  createTime?: string;
  domainCname?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      domainCname: 'DomainCname',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      updateTime: 'string',
      createTime: 'string',
      domainCname: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos extends $tea.Model {
  domainInfo?: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo[];
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'domainInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: { 'type': 'array', 'itemType': DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponseBodyDomainsListDomainsData extends $tea.Model {
  domains?: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains;
  source?: string;
  domainInfos?: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      source: 'Source',
      domainInfos: 'DomainInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains,
      source: 'string',
      domainInfos: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponseBodyDomainsList extends $tea.Model {
  domainsData?: DescribeDomainsBySourceResponseBodyDomainsListDomainsData[];
  static names(): { [key: string]: string } {
    return {
      domainsData: 'DomainsData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainsData: { 'type': 'array', 'itemType': DescribeDomainsBySourceResponseBodyDomainsListDomainsData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerIntervalDataModule extends $tea.Model {
  value?: string;
  httpsValue?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      httpsValue: 'HttpsValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      httpsValue: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData extends $tea.Model {
  code?: string;
  proportion?: string;
  count?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      proportion: 'Proportion',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      proportion: 'string',
      count: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue extends $tea.Model {
  codeProportionData?: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      codeProportionData: 'CodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeProportionData: { 'type': 'array', 'itemType': DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageData extends $tea.Model {
  value?: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue,
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeData extends $tea.Model {
  usageData?: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerIntervalDataModule extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl500ListUrlList extends $tea.Model {
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl500List extends $tea.Model {
  urlList?: DescribeDomainSrcTopUrlVisitResponseBodyUrl500ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyUrl500ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl200ListUrlList extends $tea.Model {
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl200List extends $tea.Model {
  urlList?: DescribeDomainSrcTopUrlVisitResponseBodyUrl200ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyUrl200ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl400ListUrlList extends $tea.Model {
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl400List extends $tea.Model {
  urlList?: DescribeDomainSrcTopUrlVisitResponseBodyUrl400ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyUrl400ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl300ListUrlList extends $tea.Model {
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl300List extends $tea.Model {
  urlList?: DescribeDomainSrcTopUrlVisitResponseBodyUrl300ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyUrl300ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTopUrlVisitResponseBodyAllUrlListUrlList extends $tea.Model {
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTopUrlVisitResponseBodyAllUrlList extends $tea.Model {
  urlList?: DescribeDomainSrcTopUrlVisitResponseBodyAllUrlListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyAllUrlListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerIntervalDataModule extends $tea.Model {
  value?: string;
  httpsValue?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      httpsValue: 'HttpsValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      httpsValue: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsUsageByDayResponseBodyUsageTotal extends $tea.Model {
  maxSrcBpsTime?: string;
  requestHitRate?: string;
  maxBps?: string;
  totalAccess?: string;
  bytesHitRate?: string;
  totalTraffic?: string;
  maxBpsTime?: string;
  maxSrcBps?: string;
  static names(): { [key: string]: string } {
    return {
      maxSrcBpsTime: 'MaxSrcBpsTime',
      requestHitRate: 'RequestHitRate',
      maxBps: 'MaxBps',
      totalAccess: 'TotalAccess',
      bytesHitRate: 'BytesHitRate',
      totalTraffic: 'TotalTraffic',
      maxBpsTime: 'MaxBpsTime',
      maxSrcBps: 'MaxSrcBps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSrcBpsTime: 'string',
      requestHitRate: 'string',
      maxBps: 'string',
      totalAccess: 'string',
      bytesHitRate: 'string',
      totalTraffic: 'string',
      maxBpsTime: 'string',
      maxSrcBps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay extends $tea.Model {
  maxSrcBpsTime?: string;
  qps?: string;
  requestHitRate?: string;
  maxBps?: string;
  totalAccess?: string;
  timeStamp?: string;
  bytesHitRate?: string;
  totalTraffic?: string;
  maxSrcBps?: string;
  maxBpsTime?: string;
  static names(): { [key: string]: string } {
    return {
      maxSrcBpsTime: 'MaxSrcBpsTime',
      qps: 'Qps',
      requestHitRate: 'RequestHitRate',
      maxBps: 'MaxBps',
      totalAccess: 'TotalAccess',
      timeStamp: 'TimeStamp',
      bytesHitRate: 'BytesHitRate',
      totalTraffic: 'TotalTraffic',
      maxSrcBps: 'MaxSrcBps',
      maxBpsTime: 'MaxBpsTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSrcBpsTime: 'string',
      qps: 'string',
      requestHitRate: 'string',
      maxBps: 'string',
      totalAccess: 'string',
      timeStamp: 'string',
      bytesHitRate: 'string',
      totalTraffic: 'string',
      maxSrcBps: 'string',
      maxBpsTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsUsageByDayResponseBodyUsageByDays extends $tea.Model {
  usageByDay?: DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay[];
  static names(): { [key: string]: string } {
    return {
      usageByDay: 'UsageByDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageByDay: { 'type': 'array', 'itemType': DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopClientIpVisitResponseBodyClientIpList extends $tea.Model {
  acc?: number;
  traffic?: number;
  rank?: number;
  clientIp?: string;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      traffic: 'Traffic',
      rank: 'Rank',
      clientIp: 'ClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'number',
      traffic: 'number',
      rank: 'number',
      clientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopReferVisitResponseBodyTopReferListReferList extends $tea.Model {
  visitData?: string;
  referDetail?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      visitData: 'VisitData',
      referDetail: 'ReferDetail',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      visitData: 'string',
      referDetail: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopReferVisitResponseBodyTopReferList extends $tea.Model {
  referList?: DescribeDomainTopReferVisitResponseBodyTopReferListReferList[];
  static names(): { [key: string]: string } {
    return {
      referList: 'ReferList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referList: { 'type': 'array', 'itemType': DescribeDomainTopReferVisitResponseBodyTopReferListReferList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUrlVisitResponseBodyUrl500ListUrlList extends $tea.Model {
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUrlVisitResponseBodyUrl500List extends $tea.Model {
  urlList?: DescribeDomainTopUrlVisitResponseBodyUrl500ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyUrl500ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUrlVisitResponseBodyUrl200ListUrlList extends $tea.Model {
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUrlVisitResponseBodyUrl200List extends $tea.Model {
  urlList?: DescribeDomainTopUrlVisitResponseBodyUrl200ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyUrl200ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUrlVisitResponseBodyUrl400ListUrlList extends $tea.Model {
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUrlVisitResponseBodyUrl400List extends $tea.Model {
  urlList?: DescribeDomainTopUrlVisitResponseBodyUrl400ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyUrl400ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUrlVisitResponseBodyUrl300ListUrlList extends $tea.Model {
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUrlVisitResponseBodyUrl300List extends $tea.Model {
  urlList?: DescribeDomainTopUrlVisitResponseBodyUrl300ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyUrl300ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUrlVisitResponseBodyAllUrlListUrlList extends $tea.Model {
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUrlVisitResponseBodyAllUrlList extends $tea.Model {
  urlList?: DescribeDomainTopUrlVisitResponseBodyAllUrlListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyAllUrlListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $tea.Model {
  httpsDomesticValue?: string;
  value?: string;
  overseasValue?: string;
  httpsValue?: string;
  httpsOverseasValue?: string;
  timeStamp?: string;
  domesticValue?: string;
  static names(): { [key: string]: string } {
    return {
      httpsDomesticValue: 'HttpsDomesticValue',
      value: 'Value',
      overseasValue: 'OverseasValue',
      httpsValue: 'HttpsValue',
      httpsOverseasValue: 'HttpsOverseasValue',
      timeStamp: 'TimeStamp',
      domesticValue: 'DomesticValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsDomesticValue: 'string',
      value: 'string',
      overseasValue: 'string',
      httpsValue: 'string',
      httpsOverseasValue: 'string',
      timeStamp: 'string',
      domesticValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUsageDataResponseBodyUsageDataPerIntervalDataModule extends $tea.Model {
  value?: string;
  peakTime?: string;
  timeStamp?: string;
  specialValue?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      peakTime: 'PeakTime',
      timeStamp: 'TimeStamp',
      specialValue: 'SpecialValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      peakTime: 'string',
      timeStamp: 'string',
      specialValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUsageDataResponseBodyUsageDataPerInterval extends $tea.Model {
  dataModule?: DescribeDomainUsageDataResponseBodyUsageDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainUsageDataResponseBodyUsageDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUvDataResponseBodyUvDataIntervalUsageData extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUvDataResponseBodyUvDataInterval extends $tea.Model {
  usageData?: DescribeDomainUvDataResponseBodyUvDataIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainUvDataResponseBodyUvDataIntervalUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFCTriggerResponseBodyFCTrigger extends $tea.Model {
  triggerARN?: string;
  roleARN?: string;
  sourceArn?: string;
  notes?: string;
  eventMetaName?: string;
  eventMetaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      triggerARN: 'TriggerARN',
      roleARN: 'RoleARN',
      sourceArn: 'SourceArn',
      notes: 'Notes',
      eventMetaName: 'EventMetaName',
      eventMetaVersion: 'EventMetaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerARN: 'string',
      roleARN: 'string',
      sourceArn: 'string',
      notes: 'string',
      eventMetaName: 'string',
      eventMetaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL2VipsByDomainResponseBodyVips extends $tea.Model {
  vip?: string[];
  static names(): { [key: string]: string } {
    return {
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccDataAccData extends $tea.Model {
  failedNum?: number;
  timeStamp?: string;
  successNum?: number;
  static names(): { [key: string]: string } {
    return {
      failedNum: 'FailedNum',
      timeStamp: 'TimeStamp',
      successNum: 'SuccessNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedNum: 'number',
      timeStamp: 'string',
      successNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccData extends $tea.Model {
  accData?: DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccDataAccData[];
  static names(): { [key: string]: string } {
    return {
      accData: 'AccData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accData: { 'type': 'array', 'itemType': DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccDataAccData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshTaskByIdResponseBodyTasks extends $tea.Model {
  status?: string;
  creationTime?: string;
  objectType?: string;
  process?: string;
  description?: string;
  objectPath?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      objectType: 'ObjectType',
      process: 'Process',
      description: 'Description',
      objectPath: 'ObjectPath',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      objectType: 'string',
      process: 'string',
      description: 'string',
      objectPath: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshTasksResponseBodyTasksCDNTask extends $tea.Model {
  status?: string;
  creationTime?: string;
  objectType?: string;
  process?: string;
  description?: string;
  objectPath?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      objectType: 'ObjectType',
      process: 'Process',
      description: 'Description',
      objectPath: 'ObjectPath',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      objectType: 'string',
      process: 'string',
      description: 'string',
      objectPath: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshTasksResponseBodyTasks extends $tea.Model {
  CDNTask?: DescribeRefreshTasksResponseBodyTasksCDNTask[];
  static names(): { [key: string]: string } {
    return {
      CDNTask: 'CDNTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CDNTask: { 'type': 'array', 'itemType': DescribeRefreshTasksResponseBodyTasksCDNTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStagingIpResponseBodyIPV4s extends $tea.Model {
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

export class DescribeTagResourcesRequestTag extends $tea.Model {
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

export class DescribeTagResourcesResponseBodyTagResourcesTag extends $tea.Model {
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

export class DescribeTagResourcesResponseBodyTagResources extends $tea.Model {
  tag?: DescribeTagResourcesResponseBodyTagResourcesTag[];
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeTagResourcesResponseBodyTagResourcesTag },
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain extends $tea.Model {
  maxBps?: number;
  rank?: number;
  totalAccess?: number;
  trafficPercent?: string;
  domainName?: string;
  totalTraffic?: string;
  maxBpsTime?: string;
  static names(): { [key: string]: string } {
    return {
      maxBps: 'MaxBps',
      rank: 'Rank',
      totalAccess: 'TotalAccess',
      trafficPercent: 'TrafficPercent',
      domainName: 'DomainName',
      totalTraffic: 'TotalTraffic',
      maxBpsTime: 'MaxBpsTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxBps: 'number',
      rank: 'number',
      totalAccess: 'number',
      trafficPercent: 'string',
      domainName: 'string',
      totalTraffic: 'string',
      maxBpsTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopDomainsByFlowResponseBodyTopDomains extends $tea.Model {
  topDomain?: DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain[];
  static names(): { [key: string]: string } {
    return {
      topDomain: 'TopDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomain: { 'type': 'array', 'itemType': DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConfigsResponseBodyConfigsOssLogConfig extends $tea.Model {
  prefix?: string;
  enable?: string;
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      prefix: 'Prefix',
      enable: 'Enable',
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefix: 'string',
      enable: 'string',
      bucket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConfigsResponseBodyConfigsGreenManagerConfig extends $tea.Model {
  quota?: string;
  ratio?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      ratio: 'Ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'string',
      ratio: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConfigsResponseBodyConfigsWafConfig extends $tea.Model {
  enable?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConfigsResponseBodyConfigs extends $tea.Model {
  ossLogConfig?: DescribeUserConfigsResponseBodyConfigsOssLogConfig;
  greenManagerConfig?: DescribeUserConfigsResponseBodyConfigsGreenManagerConfig;
  wafConfig?: DescribeUserConfigsResponseBodyConfigsWafConfig;
  static names(): { [key: string]: string } {
    return {
      ossLogConfig: 'OssLogConfig',
      greenManagerConfig: 'GreenManagerConfig',
      wafConfig: 'WafConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossLogConfig: DescribeUserConfigsResponseBodyConfigsOssLogConfig,
      greenManagerConfig: DescribeUserConfigsResponseBodyConfigsGreenManagerConfig,
      wafConfig: DescribeUserConfigsResponseBodyConfigsWafConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDomainsRequestTag extends $tea.Model {
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

export class DescribeUserDomainsResponseBodyDomainsPageDataSourcesSource extends $tea.Model {
  type?: string;
  weight?: string;
  priority?: string;
  port?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      priority: 'Priority',
      port: 'Port',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'string',
      priority: 'string',
      port: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDomainsResponseBodyDomainsPageDataSources extends $tea.Model {
  source?: DescribeUserDomainsResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeUserDomainsResponseBodyDomainsPageDataSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDomainsResponseBodyDomainsPageData extends $tea.Model {
  sslProtocol?: string;
  sandbox?: string;
  sources?: DescribeUserDomainsResponseBodyDomainsPageDataSources;
  gmtModified?: string;
  domainName?: string;
  gmtCreated?: string;
  description?: string;
  coverage?: string;
  resourceGroupId?: string;
  domainStatus?: string;
  cname?: string;
  cdnType?: string;
  static names(): { [key: string]: string } {
    return {
      sslProtocol: 'SslProtocol',
      sandbox: 'Sandbox',
      sources: 'Sources',
      gmtModified: 'GmtModified',
      domainName: 'DomainName',
      gmtCreated: 'GmtCreated',
      description: 'Description',
      coverage: 'Coverage',
      resourceGroupId: 'ResourceGroupId',
      domainStatus: 'DomainStatus',
      cname: 'Cname',
      cdnType: 'CdnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sslProtocol: 'string',
      sandbox: 'string',
      sources: DescribeUserDomainsResponseBodyDomainsPageDataSources,
      gmtModified: 'string',
      domainName: 'string',
      gmtCreated: 'string',
      description: 'string',
      coverage: 'string',
      resourceGroupId: 'string',
      domainStatus: 'string',
      cname: 'string',
      cdnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDomainsResponseBodyDomains extends $tea.Model {
  pageData?: DescribeUserDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeUserDomainsResponseBodyDomainsPageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTagsResponseBodyTags extends $tea.Model {
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

export class DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig extends $tea.Model {
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

export class DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItem extends $tea.Model {
  status?: string;
  updateTime?: string;
  downloadUrl?: string;
  createTime?: string;
  taskName?: string;
  taskConfig?: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      updateTime: 'UpdateTime',
      downloadUrl: 'DownloadUrl',
      createTime: 'CreateTime',
      taskName: 'TaskName',
      taskConfig: 'TaskConfig',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      updateTime: 'string',
      downloadUrl: 'string',
      createTime: 'string',
      taskName: 'string',
      taskConfig: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig,
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageData extends $tea.Model {
  dataItem?: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItem[];
  static names(): { [key: string]: string } {
    return {
      dataItem: 'DataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataItem: { 'type': 'array', 'itemType': DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPage extends $tea.Model {
  data?: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageData;
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageData,
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig extends $tea.Model {
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

export class DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItem extends $tea.Model {
  status?: string;
  updateTime?: string;
  downloadUrl?: string;
  createTime?: string;
  taskName?: string;
  taskConfig?: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      updateTime: 'UpdateTime',
      downloadUrl: 'DownloadUrl',
      createTime: 'CreateTime',
      taskName: 'TaskName',
      taskConfig: 'TaskConfig',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      updateTime: 'string',
      downloadUrl: 'string',
      createTime: 'string',
      taskName: 'string',
      taskConfig: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig,
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageData extends $tea.Model {
  dataItem?: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItem[];
  static names(): { [key: string]: string } {
    return {
      dataItem: 'DataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataItem: { 'type': 'array', 'itemType': DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPage extends $tea.Model {
  data?: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageData;
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageData,
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVipsByDomainResponseBodyVips extends $tea.Model {
  vip?: string[];
  static names(): { [key: string]: string } {
    return {
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsByLogConfigIdResponseBodyDomains extends $tea.Model {
  domain?: string[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFCTriggerResponseBodyFCTriggers extends $tea.Model {
  triggerARN?: string;
  roleARN?: string;
  sourceArn?: string;
  notes?: string;
  eventMetaName?: string;
  eventMetaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      triggerARN: 'TriggerARN',
      roleARN: 'RoleARN',
      sourceArn: 'SourceArn',
      notes: 'Notes',
      eventMetaName: 'EventMetaName',
      eventMetaVersion: 'EventMetaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerARN: 'string',
      roleARN: 'string',
      sourceArn: 'string',
      notes: 'string',
      eventMetaName: 'string',
      eventMetaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryDomainsResponseBodyContentDomains extends $tea.Model {
  status?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryDomainsResponseBodyContent extends $tea.Model {
  domains?: ListRealtimeLogDeliveryDomainsResponseBodyContentDomains[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': ListRealtimeLogDeliveryDomainsResponseBodyContentDomains },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos extends $tea.Model {
  region?: string;
  logstore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      logstore: 'Logstore',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      logstore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryInfosResponseBodyContent extends $tea.Model {
  realtimeLogDeliveryInfos?: ListRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos[];
  static names(): { [key: string]: string } {
    return {
      realtimeLogDeliveryInfos: 'RealtimeLogDeliveryInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realtimeLogDeliveryInfos: { 'type': 'array', 'itemType': ListRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserCustomLogConfigResponseBodyConfigIds extends $tea.Model {
  configId?: string[];
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: { 'type': 'array', 'itemType': 'string' },
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
    this._endpointRule = "central";
    this._endpointMap = {
      'ap-northeast-1': "cdn.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "cdn.ap-southeast-1.aliyuncs.com",
      'ap-southeast-1': "cdn.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "cdn.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "cdn.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "cdn.ap-southeast-1.aliyuncs.com",
      'eu-central-1': "cdn.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "cdn.ap-southeast-1.aliyuncs.com",
      'me-east-1': "cdn.ap-southeast-1.aliyuncs.com",
      'us-east-1': "cdn.ap-southeast-1.aliyuncs.com",
      'us-west-1': "cdn.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cdn", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addCdnDomainWithOptions(request: AddCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddCdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddCdnDomainResponse>(await this.doRPCRequest("AddCdnDomain", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new AddCdnDomainResponse({}));
  }

  async addCdnDomain(request: AddCdnDomainRequest): Promise<AddCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCdnDomainWithOptions(request, runtime);
  }

  async addFCTriggerWithOptions(request: AddFCTriggerRequest, runtime: $Util.RuntimeOptions): Promise<AddFCTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddFCTriggerResponse>(await this.doRPCRequest("AddFCTrigger", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new AddFCTriggerResponse({}));
  }

  async addFCTrigger(request: AddFCTriggerRequest): Promise<AddFCTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFCTriggerWithOptions(request, runtime);
  }

  async batchAddCdnDomainWithOptions(request: BatchAddCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchAddCdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchAddCdnDomainResponse>(await this.doRPCRequest("BatchAddCdnDomain", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new BatchAddCdnDomainResponse({}));
  }

  async batchAddCdnDomain(request: BatchAddCdnDomainRequest): Promise<BatchAddCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAddCdnDomainWithOptions(request, runtime);
  }

  async batchSetCdnDomainConfigWithOptions(request: BatchSetCdnDomainConfigRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetCdnDomainConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchSetCdnDomainConfigResponse>(await this.doRPCRequest("BatchSetCdnDomainConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new BatchSetCdnDomainConfigResponse({}));
  }

  async batchSetCdnDomainConfig(request: BatchSetCdnDomainConfigRequest): Promise<BatchSetCdnDomainConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetCdnDomainConfigWithOptions(request, runtime);
  }

  async batchSetCdnDomainServerCertificateWithOptions(request: BatchSetCdnDomainServerCertificateRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetCdnDomainServerCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchSetCdnDomainServerCertificateResponse>(await this.doRPCRequest("BatchSetCdnDomainServerCertificate", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new BatchSetCdnDomainServerCertificateResponse({}));
  }

  async batchSetCdnDomainServerCertificate(request: BatchSetCdnDomainServerCertificateRequest): Promise<BatchSetCdnDomainServerCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetCdnDomainServerCertificateWithOptions(request, runtime);
  }

  async batchStartCdnDomainWithOptions(request: BatchStartCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchStartCdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchStartCdnDomainResponse>(await this.doRPCRequest("BatchStartCdnDomain", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new BatchStartCdnDomainResponse({}));
  }

  async batchStartCdnDomain(request: BatchStartCdnDomainRequest): Promise<BatchStartCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStartCdnDomainWithOptions(request, runtime);
  }

  async batchStopCdnDomainWithOptions(request: BatchStopCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchStopCdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchStopCdnDomainResponse>(await this.doRPCRequest("BatchStopCdnDomain", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new BatchStopCdnDomainResponse({}));
  }

  async batchStopCdnDomain(request: BatchStopCdnDomainRequest): Promise<BatchStopCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStopCdnDomainWithOptions(request, runtime);
  }

  async batchUpdateCdnDomainWithOptions(request: BatchUpdateCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchUpdateCdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchUpdateCdnDomainResponse>(await this.doRPCRequest("BatchUpdateCdnDomain", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new BatchUpdateCdnDomainResponse({}));
  }

  async batchUpdateCdnDomain(request: BatchUpdateCdnDomainRequest): Promise<BatchUpdateCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUpdateCdnDomainWithOptions(request, runtime);
  }

  async createCdnCertificateSigningRequestWithOptions(request: CreateCdnCertificateSigningRequestRequest, runtime: $Util.RuntimeOptions): Promise<CreateCdnCertificateSigningRequestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCdnCertificateSigningRequestResponse>(await this.doRPCRequest("CreateCdnCertificateSigningRequest", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCdnCertificateSigningRequestResponse({}));
  }

  async createCdnCertificateSigningRequest(request: CreateCdnCertificateSigningRequestRequest): Promise<CreateCdnCertificateSigningRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCdnCertificateSigningRequestWithOptions(request, runtime);
  }

  async createIllegalUrlExportTaskWithOptions(request: CreateIllegalUrlExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateIllegalUrlExportTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIllegalUrlExportTaskResponse>(await this.doRPCRequest("CreateIllegalUrlExportTask", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIllegalUrlExportTaskResponse({}));
  }

  async createIllegalUrlExportTask(request: CreateIllegalUrlExportTaskRequest): Promise<CreateIllegalUrlExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIllegalUrlExportTaskWithOptions(request, runtime);
  }

  async createRealTimeLogDeliveryWithOptions(request: CreateRealTimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<CreateRealTimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CreateRealTimeLogDeliveryResponse>(await this.doRPCRequest("CreateRealTimeLogDelivery", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new CreateRealTimeLogDeliveryResponse({}));
  }

  async createRealTimeLogDelivery(request: CreateRealTimeLogDeliveryRequest): Promise<CreateRealTimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRealTimeLogDeliveryWithOptions(request, runtime);
  }

  async createUsageDetailDataExportTaskWithOptions(request: CreateUsageDetailDataExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateUsageDetailDataExportTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUsageDetailDataExportTaskResponse>(await this.doRPCRequest("CreateUsageDetailDataExportTask", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUsageDetailDataExportTaskResponse({}));
  }

  async createUsageDetailDataExportTask(request: CreateUsageDetailDataExportTaskRequest): Promise<CreateUsageDetailDataExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUsageDetailDataExportTaskWithOptions(request, runtime);
  }

  async createUserUsageDataExportTaskWithOptions(request: CreateUserUsageDataExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserUsageDataExportTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUserUsageDataExportTaskResponse>(await this.doRPCRequest("CreateUserUsageDataExportTask", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUserUsageDataExportTaskResponse({}));
  }

  async createUserUsageDataExportTask(request: CreateUserUsageDataExportTaskRequest): Promise<CreateUserUsageDataExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserUsageDataExportTaskWithOptions(request, runtime);
  }

  async deleteCdnDomainWithOptions(request: DeleteCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCdnDomainResponse>(await this.doRPCRequest("DeleteCdnDomain", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCdnDomainResponse({}));
  }

  async deleteCdnDomain(request: DeleteCdnDomainRequest): Promise<DeleteCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCdnDomainWithOptions(request, runtime);
  }

  async deleteFCTriggerWithOptions(request: DeleteFCTriggerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFCTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFCTriggerResponse>(await this.doRPCRequest("DeleteFCTrigger", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFCTriggerResponse({}));
  }

  async deleteFCTrigger(request: DeleteFCTriggerRequest): Promise<DeleteFCTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFCTriggerWithOptions(request, runtime);
  }

  async deleteRealtimeLogDeliveryWithOptions(request: DeleteRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteRealtimeLogDeliveryResponse>(await this.doRPCRequest("DeleteRealtimeLogDelivery", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteRealtimeLogDeliveryResponse({}));
  }

  async deleteRealtimeLogDelivery(request: DeleteRealtimeLogDeliveryRequest): Promise<DeleteRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async deleteSpecificConfigWithOptions(request: DeleteSpecificConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSpecificConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSpecificConfigResponse>(await this.doRPCRequest("DeleteSpecificConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSpecificConfigResponse({}));
  }

  async deleteSpecificConfig(request: DeleteSpecificConfigRequest): Promise<DeleteSpecificConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSpecificConfigWithOptions(request, runtime);
  }

  async deleteSpecificStagingConfigWithOptions(request: DeleteSpecificStagingConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSpecificStagingConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSpecificStagingConfigResponse>(await this.doRPCRequest("DeleteSpecificStagingConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSpecificStagingConfigResponse({}));
  }

  async deleteSpecificStagingConfig(request: DeleteSpecificStagingConfigRequest): Promise<DeleteSpecificStagingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSpecificStagingConfigWithOptions(request, runtime);
  }

  async deleteUsageDetailDataExportTaskWithOptions(request: DeleteUsageDetailDataExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUsageDetailDataExportTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUsageDetailDataExportTaskResponse>(await this.doRPCRequest("DeleteUsageDetailDataExportTask", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUsageDetailDataExportTaskResponse({}));
  }

  async deleteUsageDetailDataExportTask(request: DeleteUsageDetailDataExportTaskRequest): Promise<DeleteUsageDetailDataExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUsageDetailDataExportTaskWithOptions(request, runtime);
  }

  async deleteUserUsageDataExportTaskWithOptions(request: DeleteUserUsageDataExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserUsageDataExportTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserUsageDataExportTaskResponse>(await this.doRPCRequest("DeleteUserUsageDataExportTask", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserUsageDataExportTaskResponse({}));
  }

  async deleteUserUsageDataExportTask(request: DeleteUserUsageDataExportTaskRequest): Promise<DeleteUserUsageDataExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserUsageDataExportTaskWithOptions(request, runtime);
  }

  async describeActiveVersionOfConfigGroupWithOptions(request: DescribeActiveVersionOfConfigGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActiveVersionOfConfigGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeActiveVersionOfConfigGroupResponse>(await this.doRPCRequest("DescribeActiveVersionOfConfigGroup", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeActiveVersionOfConfigGroupResponse({}));
  }

  async describeActiveVersionOfConfigGroup(request: DescribeActiveVersionOfConfigGroupRequest): Promise<DescribeActiveVersionOfConfigGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveVersionOfConfigGroupWithOptions(request, runtime);
  }

  async describeCdnCertificateDetailWithOptions(request: DescribeCdnCertificateDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnCertificateDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnCertificateDetailResponse>(await this.doRPCRequest("DescribeCdnCertificateDetail", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnCertificateDetailResponse({}));
  }

  async describeCdnCertificateDetail(request: DescribeCdnCertificateDetailRequest): Promise<DescribeCdnCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnCertificateDetailWithOptions(request, runtime);
  }

  async describeCdnCertificateListWithOptions(request: DescribeCdnCertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnCertificateListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnCertificateListResponse>(await this.doRPCRequest("DescribeCdnCertificateList", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnCertificateListResponse({}));
  }

  async describeCdnCertificateList(request: DescribeCdnCertificateListRequest): Promise<DescribeCdnCertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnCertificateListWithOptions(request, runtime);
  }

  async describeCdnDomainByCertificateWithOptions(request: DescribeCdnDomainByCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnDomainByCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnDomainByCertificateResponse>(await this.doRPCRequest("DescribeCdnDomainByCertificate", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnDomainByCertificateResponse({}));
  }

  async describeCdnDomainByCertificate(request: DescribeCdnDomainByCertificateRequest): Promise<DescribeCdnDomainByCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnDomainByCertificateWithOptions(request, runtime);
  }

  async describeCdnDomainConfigsWithOptions(request: DescribeCdnDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnDomainConfigsResponse>(await this.doRPCRequest("DescribeCdnDomainConfigs", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnDomainConfigsResponse({}));
  }

  async describeCdnDomainConfigs(request: DescribeCdnDomainConfigsRequest): Promise<DescribeCdnDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnDomainConfigsWithOptions(request, runtime);
  }

  async describeCdnDomainDetailWithOptions(request: DescribeCdnDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnDomainDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnDomainDetailResponse>(await this.doRPCRequest("DescribeCdnDomainDetail", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnDomainDetailResponse({}));
  }

  async describeCdnDomainDetail(request: DescribeCdnDomainDetailRequest): Promise<DescribeCdnDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnDomainDetailWithOptions(request, runtime);
  }

  async describeCdnDomainLogsWithOptions(request: DescribeCdnDomainLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnDomainLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnDomainLogsResponse>(await this.doRPCRequest("DescribeCdnDomainLogs", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnDomainLogsResponse({}));
  }

  async describeCdnDomainLogs(request: DescribeCdnDomainLogsRequest): Promise<DescribeCdnDomainLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnDomainLogsWithOptions(request, runtime);
  }

  async describeCdnDomainStagingConfigWithOptions(request: DescribeCdnDomainStagingConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnDomainStagingConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnDomainStagingConfigResponse>(await this.doRPCRequest("DescribeCdnDomainStagingConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnDomainStagingConfigResponse({}));
  }

  async describeCdnDomainStagingConfig(request: DescribeCdnDomainStagingConfigRequest): Promise<DescribeCdnDomainStagingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnDomainStagingConfigWithOptions(request, runtime);
  }

  async describeCdnHttpsDomainListWithOptions(request: DescribeCdnHttpsDomainListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnHttpsDomainListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnHttpsDomainListResponse>(await this.doRPCRequest("DescribeCdnHttpsDomainList", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnHttpsDomainListResponse({}));
  }

  async describeCdnHttpsDomainList(request: DescribeCdnHttpsDomainListRequest): Promise<DescribeCdnHttpsDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnHttpsDomainListWithOptions(request, runtime);
  }

  async describeCdnRegionAndIspWithOptions(request: DescribeCdnRegionAndIspRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnRegionAndIspResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnRegionAndIspResponse>(await this.doRPCRequest("DescribeCdnRegionAndIsp", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnRegionAndIspResponse({}));
  }

  async describeCdnRegionAndIsp(request: DescribeCdnRegionAndIspRequest): Promise<DescribeCdnRegionAndIspResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnRegionAndIspWithOptions(request, runtime);
  }

  async describeCdnServiceWithOptions(request: DescribeCdnServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnServiceResponse>(await this.doRPCRequest("DescribeCdnService", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnServiceResponse({}));
  }

  async describeCdnService(request: DescribeCdnServiceRequest): Promise<DescribeCdnServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnServiceWithOptions(request, runtime);
  }

  async describeCdnUserBillHistoryWithOptions(request: DescribeCdnUserBillHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnUserBillHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnUserBillHistoryResponse>(await this.doRPCRequest("DescribeCdnUserBillHistory", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnUserBillHistoryResponse({}));
  }

  async describeCdnUserBillHistory(request: DescribeCdnUserBillHistoryRequest): Promise<DescribeCdnUserBillHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnUserBillHistoryWithOptions(request, runtime);
  }

  async describeCdnUserBillPredictionWithOptions(request: DescribeCdnUserBillPredictionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnUserBillPredictionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnUserBillPredictionResponse>(await this.doRPCRequest("DescribeCdnUserBillPrediction", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnUserBillPredictionResponse({}));
  }

  async describeCdnUserBillPrediction(request: DescribeCdnUserBillPredictionRequest): Promise<DescribeCdnUserBillPredictionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnUserBillPredictionWithOptions(request, runtime);
  }

  async describeCdnUserBillTypeWithOptions(request: DescribeCdnUserBillTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnUserBillTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnUserBillTypeResponse>(await this.doRPCRequest("DescribeCdnUserBillType", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnUserBillTypeResponse({}));
  }

  async describeCdnUserBillType(request: DescribeCdnUserBillTypeRequest): Promise<DescribeCdnUserBillTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnUserBillTypeWithOptions(request, runtime);
  }

  async describeCdnUserConfigsWithOptions(request: DescribeCdnUserConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnUserConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnUserConfigsResponse>(await this.doRPCRequest("DescribeCdnUserConfigs", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnUserConfigsResponse({}));
  }

  async describeCdnUserConfigs(request: DescribeCdnUserConfigsRequest): Promise<DescribeCdnUserConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnUserConfigsWithOptions(request, runtime);
  }

  async describeCdnUserDomainsByFuncWithOptions(request: DescribeCdnUserDomainsByFuncRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnUserDomainsByFuncResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnUserDomainsByFuncResponse>(await this.doRPCRequest("DescribeCdnUserDomainsByFunc", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnUserDomainsByFuncResponse({}));
  }

  async describeCdnUserDomainsByFunc(request: DescribeCdnUserDomainsByFuncRequest): Promise<DescribeCdnUserDomainsByFuncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnUserDomainsByFuncWithOptions(request, runtime);
  }

  async describeCdnUserQuotaWithOptions(request: DescribeCdnUserQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnUserQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnUserQuotaResponse>(await this.doRPCRequest("DescribeCdnUserQuota", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnUserQuotaResponse({}));
  }

  async describeCdnUserQuota(request: DescribeCdnUserQuotaRequest): Promise<DescribeCdnUserQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnUserQuotaWithOptions(request, runtime);
  }

  async describeCdnUserResourcePackageWithOptions(request: DescribeCdnUserResourcePackageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnUserResourcePackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnUserResourcePackageResponse>(await this.doRPCRequest("DescribeCdnUserResourcePackage", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnUserResourcePackageResponse({}));
  }

  async describeCdnUserResourcePackage(request: DescribeCdnUserResourcePackageRequest): Promise<DescribeCdnUserResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnUserResourcePackageWithOptions(request, runtime);
  }

  async describeCdnWafDomainWithOptions(request: DescribeCdnWafDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnWafDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCdnWafDomainResponse>(await this.doRPCRequest("DescribeCdnWafDomain", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCdnWafDomainResponse({}));
  }

  async describeCdnWafDomain(request: DescribeCdnWafDomainRequest): Promise<DescribeCdnWafDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnWafDomainWithOptions(request, runtime);
  }

  async describeCertificateInfoByIDWithOptions(request: DescribeCertificateInfoByIDRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertificateInfoByIDResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeCertificateInfoByIDResponse>(await this.doRPCRequest("DescribeCertificateInfoByID", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeCertificateInfoByIDResponse({}));
  }

  async describeCertificateInfoByID(request: DescribeCertificateInfoByIDRequest): Promise<DescribeCertificateInfoByIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertificateInfoByIDWithOptions(request, runtime);
  }

  async describeConfigOfVersionWithOptions(request: DescribeConfigOfVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConfigOfVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeConfigOfVersionResponse>(await this.doRPCRequest("DescribeConfigOfVersion", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeConfigOfVersionResponse({}));
  }

  async describeConfigOfVersion(request: DescribeConfigOfVersionRequest): Promise<DescribeConfigOfVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConfigOfVersionWithOptions(request, runtime);
  }

  async describeCustomLogConfigWithOptions(request: DescribeCustomLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomLogConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeCustomLogConfigResponse>(await this.doRPCRequest("DescribeCustomLogConfig", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeCustomLogConfigResponse({}));
  }

  async describeCustomLogConfig(request: DescribeCustomLogConfigRequest): Promise<DescribeCustomLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomLogConfigWithOptions(request, runtime);
  }

  async describeDomainAverageResponseTimeWithOptions(request: DescribeDomainAverageResponseTimeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainAverageResponseTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainAverageResponseTimeResponse>(await this.doRPCRequest("DescribeDomainAverageResponseTime", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainAverageResponseTimeResponse({}));
  }

  async describeDomainAverageResponseTime(request: DescribeDomainAverageResponseTimeRequest): Promise<DescribeDomainAverageResponseTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainAverageResponseTimeWithOptions(request, runtime);
  }

  async describeDomainBpsDataWithOptions(request: DescribeDomainBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainBpsDataResponse>(await this.doRPCRequest("DescribeDomainBpsData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainBpsDataResponse({}));
  }

  async describeDomainBpsData(request: DescribeDomainBpsDataRequest): Promise<DescribeDomainBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainBpsDataWithOptions(request, runtime);
  }

  async describeDomainBpsDataByLayerWithOptions(request: DescribeDomainBpsDataByLayerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainBpsDataByLayerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainBpsDataByLayerResponse>(await this.doRPCRequest("DescribeDomainBpsDataByLayer", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainBpsDataByLayerResponse({}));
  }

  async describeDomainBpsDataByLayer(request: DescribeDomainBpsDataByLayerRequest): Promise<DescribeDomainBpsDataByLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainBpsDataByLayerWithOptions(request, runtime);
  }

  async describeDomainBpsDataByTimeStampWithOptions(request: DescribeDomainBpsDataByTimeStampRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainBpsDataByTimeStampResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainBpsDataByTimeStampResponse>(await this.doRPCRequest("DescribeDomainBpsDataByTimeStamp", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainBpsDataByTimeStampResponse({}));
  }

  async describeDomainBpsDataByTimeStamp(request: DescribeDomainBpsDataByTimeStampRequest): Promise<DescribeDomainBpsDataByTimeStampResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainBpsDataByTimeStampWithOptions(request, runtime);
  }

  async describeDomainCcActivityLogWithOptions(request: DescribeDomainCcActivityLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainCcActivityLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainCcActivityLogResponse>(await this.doRPCRequest("DescribeDomainCcActivityLog", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainCcActivityLogResponse({}));
  }

  async describeDomainCcActivityLog(request: DescribeDomainCcActivityLogRequest): Promise<DescribeDomainCcActivityLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainCcActivityLogWithOptions(request, runtime);
  }

  async describeDomainCertificateInfoWithOptions(request: DescribeDomainCertificateInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainCertificateInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainCertificateInfoResponse>(await this.doRPCRequest("DescribeDomainCertificateInfo", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainCertificateInfoResponse({}));
  }

  async describeDomainCertificateInfo(request: DescribeDomainCertificateInfoRequest): Promise<DescribeDomainCertificateInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainCertificateInfoWithOptions(request, runtime);
  }

  async describeDomainCustomLogConfigWithOptions(request: DescribeDomainCustomLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainCustomLogConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDomainCustomLogConfigResponse>(await this.doRPCRequest("DescribeDomainCustomLogConfig", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDomainCustomLogConfigResponse({}));
  }

  async describeDomainCustomLogConfig(request: DescribeDomainCustomLogConfigRequest): Promise<DescribeDomainCustomLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainCustomLogConfigWithOptions(request, runtime);
  }

  async describeDomainDetailDataByLayerWithOptions(request: DescribeDomainDetailDataByLayerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainDetailDataByLayerResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDomainDetailDataByLayerResponse>(await this.doRPCRequest("DescribeDomainDetailDataByLayer", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDomainDetailDataByLayerResponse({}));
  }

  async describeDomainDetailDataByLayer(request: DescribeDomainDetailDataByLayerRequest): Promise<DescribeDomainDetailDataByLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainDetailDataByLayerWithOptions(request, runtime);
  }

  async describeDomainFileSizeProportionDataWithOptions(request: DescribeDomainFileSizeProportionDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainFileSizeProportionDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainFileSizeProportionDataResponse>(await this.doRPCRequest("DescribeDomainFileSizeProportionData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainFileSizeProportionDataResponse({}));
  }

  async describeDomainFileSizeProportionData(request: DescribeDomainFileSizeProportionDataRequest): Promise<DescribeDomainFileSizeProportionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainFileSizeProportionDataWithOptions(request, runtime);
  }

  async describeDomainHitRateDataWithOptions(request: DescribeDomainHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainHitRateDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainHitRateDataResponse>(await this.doRPCRequest("DescribeDomainHitRateData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainHitRateDataResponse({}));
  }

  async describeDomainHitRateData(request: DescribeDomainHitRateDataRequest): Promise<DescribeDomainHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainHitRateDataWithOptions(request, runtime);
  }

  async describeDomainHttpCodeDataWithOptions(request: DescribeDomainHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainHttpCodeDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainHttpCodeDataResponse>(await this.doRPCRequest("DescribeDomainHttpCodeData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainHttpCodeDataResponse({}));
  }

  async describeDomainHttpCodeData(request: DescribeDomainHttpCodeDataRequest): Promise<DescribeDomainHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainHttpCodeDataWithOptions(request, runtime);
  }

  async describeDomainHttpCodeDataByLayerWithOptions(request: DescribeDomainHttpCodeDataByLayerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainHttpCodeDataByLayerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainHttpCodeDataByLayerResponse>(await this.doRPCRequest("DescribeDomainHttpCodeDataByLayer", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainHttpCodeDataByLayerResponse({}));
  }

  async describeDomainHttpCodeDataByLayer(request: DescribeDomainHttpCodeDataByLayerRequest): Promise<DescribeDomainHttpCodeDataByLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainHttpCodeDataByLayerWithOptions(request, runtime);
  }

  async describeDomainISPDataWithOptions(request: DescribeDomainISPDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainISPDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainISPDataResponse>(await this.doRPCRequest("DescribeDomainISPData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainISPDataResponse({}));
  }

  async describeDomainISPData(request: DescribeDomainISPDataRequest): Promise<DescribeDomainISPDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainISPDataWithOptions(request, runtime);
  }

  async describeDomainMax95BpsDataWithOptions(request: DescribeDomainMax95BpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainMax95BpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainMax95BpsDataResponse>(await this.doRPCRequest("DescribeDomainMax95BpsData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainMax95BpsDataResponse({}));
  }

  async describeDomainMax95BpsData(request: DescribeDomainMax95BpsDataRequest): Promise<DescribeDomainMax95BpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainMax95BpsDataWithOptions(request, runtime);
  }

  async describeDomainNamesOfVersionWithOptions(request: DescribeDomainNamesOfVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainNamesOfVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainNamesOfVersionResponse>(await this.doRPCRequest("DescribeDomainNamesOfVersion", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainNamesOfVersionResponse({}));
  }

  async describeDomainNamesOfVersion(request: DescribeDomainNamesOfVersionRequest): Promise<DescribeDomainNamesOfVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainNamesOfVersionWithOptions(request, runtime);
  }

  async describeDomainPathDataWithOptions(request: DescribeDomainPathDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainPathDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDomainPathDataResponse>(await this.doRPCRequest("DescribeDomainPathData", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDomainPathDataResponse({}));
  }

  async describeDomainPathData(request: DescribeDomainPathDataRequest): Promise<DescribeDomainPathDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainPathDataWithOptions(request, runtime);
  }

  async describeDomainPvDataWithOptions(request: DescribeDomainPvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainPvDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainPvDataResponse>(await this.doRPCRequest("DescribeDomainPvData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainPvDataResponse({}));
  }

  async describeDomainPvData(request: DescribeDomainPvDataRequest): Promise<DescribeDomainPvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainPvDataWithOptions(request, runtime);
  }

  async describeDomainQpsDataWithOptions(request: DescribeDomainQpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainQpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainQpsDataResponse>(await this.doRPCRequest("DescribeDomainQpsData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainQpsDataResponse({}));
  }

  async describeDomainQpsData(request: DescribeDomainQpsDataRequest): Promise<DescribeDomainQpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainQpsDataWithOptions(request, runtime);
  }

  async describeDomainQpsDataByLayerWithOptions(request: DescribeDomainQpsDataByLayerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainQpsDataByLayerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainQpsDataByLayerResponse>(await this.doRPCRequest("DescribeDomainQpsDataByLayer", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainQpsDataByLayerResponse({}));
  }

  async describeDomainQpsDataByLayer(request: DescribeDomainQpsDataByLayerRequest): Promise<DescribeDomainQpsDataByLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainQpsDataByLayerWithOptions(request, runtime);
  }

  async describeDomainRealTimeBpsDataWithOptions(request: DescribeDomainRealTimeBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeBpsDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDomainRealTimeBpsDataResponse>(await this.doRPCRequest("DescribeDomainRealTimeBpsData", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDomainRealTimeBpsDataResponse({}));
  }

  async describeDomainRealTimeBpsData(request: DescribeDomainRealTimeBpsDataRequest): Promise<DescribeDomainRealTimeBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeBpsDataWithOptions(request, runtime);
  }

  async describeDomainRealTimeByteHitRateDataWithOptions(request: DescribeDomainRealTimeByteHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeByteHitRateDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDomainRealTimeByteHitRateDataResponse>(await this.doRPCRequest("DescribeDomainRealTimeByteHitRateData", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDomainRealTimeByteHitRateDataResponse({}));
  }

  async describeDomainRealTimeByteHitRateData(request: DescribeDomainRealTimeByteHitRateDataRequest): Promise<DescribeDomainRealTimeByteHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeByteHitRateDataWithOptions(request, runtime);
  }

  async describeDomainRealTimeDetailDataWithOptions(request: DescribeDomainRealTimeDetailDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeDetailDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDomainRealTimeDetailDataResponse>(await this.doRPCRequest("DescribeDomainRealTimeDetailData", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDomainRealTimeDetailDataResponse({}));
  }

  async describeDomainRealTimeDetailData(request: DescribeDomainRealTimeDetailDataRequest): Promise<DescribeDomainRealTimeDetailDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeDetailDataWithOptions(request, runtime);
  }

  async describeDomainRealTimeHttpCodeDataWithOptions(request: DescribeDomainRealTimeHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeHttpCodeDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainRealTimeHttpCodeDataResponse>(await this.doRPCRequest("DescribeDomainRealTimeHttpCodeData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainRealTimeHttpCodeDataResponse({}));
  }

  async describeDomainRealTimeHttpCodeData(request: DescribeDomainRealTimeHttpCodeDataRequest): Promise<DescribeDomainRealTimeHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeHttpCodeDataWithOptions(request, runtime);
  }

  async describeDomainRealtimeLogDeliveryWithOptions(request: DescribeDomainRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDomainRealtimeLogDeliveryResponse>(await this.doRPCRequest("DescribeDomainRealtimeLogDelivery", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDomainRealtimeLogDeliveryResponse({}));
  }

  async describeDomainRealtimeLogDelivery(request: DescribeDomainRealtimeLogDeliveryRequest): Promise<DescribeDomainRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async describeDomainRealTimeQpsDataWithOptions(request: DescribeDomainRealTimeQpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeQpsDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDomainRealTimeQpsDataResponse>(await this.doRPCRequest("DescribeDomainRealTimeQpsData", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDomainRealTimeQpsDataResponse({}));
  }

  async describeDomainRealTimeQpsData(request: DescribeDomainRealTimeQpsDataRequest): Promise<DescribeDomainRealTimeQpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeQpsDataWithOptions(request, runtime);
  }

  async describeDomainRealTimeReqHitRateDataWithOptions(request: DescribeDomainRealTimeReqHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeReqHitRateDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDomainRealTimeReqHitRateDataResponse>(await this.doRPCRequest("DescribeDomainRealTimeReqHitRateData", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDomainRealTimeReqHitRateDataResponse({}));
  }

  async describeDomainRealTimeReqHitRateData(request: DescribeDomainRealTimeReqHitRateDataRequest): Promise<DescribeDomainRealTimeReqHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeReqHitRateDataWithOptions(request, runtime);
  }

  async describeDomainRealTimeSrcBpsDataWithOptions(request: DescribeDomainRealTimeSrcBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeSrcBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainRealTimeSrcBpsDataResponse>(await this.doRPCRequest("DescribeDomainRealTimeSrcBpsData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainRealTimeSrcBpsDataResponse({}));
  }

  async describeDomainRealTimeSrcBpsData(request: DescribeDomainRealTimeSrcBpsDataRequest): Promise<DescribeDomainRealTimeSrcBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeSrcBpsDataWithOptions(request, runtime);
  }

  async describeDomainRealTimeSrcHttpCodeDataWithOptions(request: DescribeDomainRealTimeSrcHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeSrcHttpCodeDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainRealTimeSrcHttpCodeDataResponse>(await this.doRPCRequest("DescribeDomainRealTimeSrcHttpCodeData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainRealTimeSrcHttpCodeDataResponse({}));
  }

  async describeDomainRealTimeSrcHttpCodeData(request: DescribeDomainRealTimeSrcHttpCodeDataRequest): Promise<DescribeDomainRealTimeSrcHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeSrcHttpCodeDataWithOptions(request, runtime);
  }

  async describeDomainRealTimeSrcTrafficDataWithOptions(request: DescribeDomainRealTimeSrcTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeSrcTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainRealTimeSrcTrafficDataResponse>(await this.doRPCRequest("DescribeDomainRealTimeSrcTrafficData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainRealTimeSrcTrafficDataResponse({}));
  }

  async describeDomainRealTimeSrcTrafficData(request: DescribeDomainRealTimeSrcTrafficDataRequest): Promise<DescribeDomainRealTimeSrcTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeSrcTrafficDataWithOptions(request, runtime);
  }

  async describeDomainRealTimeTrafficDataWithOptions(request: DescribeDomainRealTimeTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainRealTimeTrafficDataResponse>(await this.doRPCRequest("DescribeDomainRealTimeTrafficData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainRealTimeTrafficDataResponse({}));
  }

  async describeDomainRealTimeTrafficData(request: DescribeDomainRealTimeTrafficDataRequest): Promise<DescribeDomainRealTimeTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeTrafficDataWithOptions(request, runtime);
  }

  async describeDomainRegionDataWithOptions(request: DescribeDomainRegionDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRegionDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainRegionDataResponse>(await this.doRPCRequest("DescribeDomainRegionData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainRegionDataResponse({}));
  }

  async describeDomainRegionData(request: DescribeDomainRegionDataRequest): Promise<DescribeDomainRegionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRegionDataWithOptions(request, runtime);
  }

  async describeDomainReqHitRateDataWithOptions(request: DescribeDomainReqHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainReqHitRateDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainReqHitRateDataResponse>(await this.doRPCRequest("DescribeDomainReqHitRateData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainReqHitRateDataResponse({}));
  }

  async describeDomainReqHitRateData(request: DescribeDomainReqHitRateDataRequest): Promise<DescribeDomainReqHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainReqHitRateDataWithOptions(request, runtime);
  }

  async describeDomainsBySourceWithOptions(request: DescribeDomainsBySourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsBySourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainsBySourceResponse>(await this.doRPCRequest("DescribeDomainsBySource", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainsBySourceResponse({}));
  }

  async describeDomainsBySource(request: DescribeDomainsBySourceRequest): Promise<DescribeDomainsBySourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsBySourceWithOptions(request, runtime);
  }

  async describeDomainSrcBpsDataWithOptions(request: DescribeDomainSrcBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainSrcBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainSrcBpsDataResponse>(await this.doRPCRequest("DescribeDomainSrcBpsData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainSrcBpsDataResponse({}));
  }

  async describeDomainSrcBpsData(request: DescribeDomainSrcBpsDataRequest): Promise<DescribeDomainSrcBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainSrcBpsDataWithOptions(request, runtime);
  }

  async describeDomainSrcHttpCodeDataWithOptions(request: DescribeDomainSrcHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainSrcHttpCodeDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainSrcHttpCodeDataResponse>(await this.doRPCRequest("DescribeDomainSrcHttpCodeData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainSrcHttpCodeDataResponse({}));
  }

  async describeDomainSrcHttpCodeData(request: DescribeDomainSrcHttpCodeDataRequest): Promise<DescribeDomainSrcHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainSrcHttpCodeDataWithOptions(request, runtime);
  }

  async describeDomainSrcQpsDataWithOptions(request: DescribeDomainSrcQpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainSrcQpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainSrcQpsDataResponse>(await this.doRPCRequest("DescribeDomainSrcQpsData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainSrcQpsDataResponse({}));
  }

  async describeDomainSrcQpsData(request: DescribeDomainSrcQpsDataRequest): Promise<DescribeDomainSrcQpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainSrcQpsDataWithOptions(request, runtime);
  }

  async describeDomainSrcTopUrlVisitWithOptions(request: DescribeDomainSrcTopUrlVisitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainSrcTopUrlVisitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainSrcTopUrlVisitResponse>(await this.doRPCRequest("DescribeDomainSrcTopUrlVisit", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainSrcTopUrlVisitResponse({}));
  }

  async describeDomainSrcTopUrlVisit(request: DescribeDomainSrcTopUrlVisitRequest): Promise<DescribeDomainSrcTopUrlVisitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainSrcTopUrlVisitWithOptions(request, runtime);
  }

  async describeDomainSrcTrafficDataWithOptions(request: DescribeDomainSrcTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainSrcTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainSrcTrafficDataResponse>(await this.doRPCRequest("DescribeDomainSrcTrafficData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainSrcTrafficDataResponse({}));
  }

  async describeDomainSrcTrafficData(request: DescribeDomainSrcTrafficDataRequest): Promise<DescribeDomainSrcTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainSrcTrafficDataWithOptions(request, runtime);
  }

  async describeDomainsUsageByDayWithOptions(request: DescribeDomainsUsageByDayRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsUsageByDayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainsUsageByDayResponse>(await this.doRPCRequest("DescribeDomainsUsageByDay", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainsUsageByDayResponse({}));
  }

  async describeDomainsUsageByDay(request: DescribeDomainsUsageByDayRequest): Promise<DescribeDomainsUsageByDayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsUsageByDayWithOptions(request, runtime);
  }

  async describeDomainTopClientIpVisitWithOptions(request: DescribeDomainTopClientIpVisitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainTopClientIpVisitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainTopClientIpVisitResponse>(await this.doRPCRequest("DescribeDomainTopClientIpVisit", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainTopClientIpVisitResponse({}));
  }

  async describeDomainTopClientIpVisit(request: DescribeDomainTopClientIpVisitRequest): Promise<DescribeDomainTopClientIpVisitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainTopClientIpVisitWithOptions(request, runtime);
  }

  async describeDomainTopReferVisitWithOptions(request: DescribeDomainTopReferVisitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainTopReferVisitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainTopReferVisitResponse>(await this.doRPCRequest("DescribeDomainTopReferVisit", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainTopReferVisitResponse({}));
  }

  async describeDomainTopReferVisit(request: DescribeDomainTopReferVisitRequest): Promise<DescribeDomainTopReferVisitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainTopReferVisitWithOptions(request, runtime);
  }

  async describeDomainTopUrlVisitWithOptions(request: DescribeDomainTopUrlVisitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainTopUrlVisitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainTopUrlVisitResponse>(await this.doRPCRequest("DescribeDomainTopUrlVisit", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainTopUrlVisitResponse({}));
  }

  async describeDomainTopUrlVisit(request: DescribeDomainTopUrlVisitRequest): Promise<DescribeDomainTopUrlVisitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainTopUrlVisitWithOptions(request, runtime);
  }

  async describeDomainTrafficDataWithOptions(request: DescribeDomainTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainTrafficDataResponse>(await this.doRPCRequest("DescribeDomainTrafficData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainTrafficDataResponse({}));
  }

  async describeDomainTrafficData(request: DescribeDomainTrafficDataRequest): Promise<DescribeDomainTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainTrafficDataWithOptions(request, runtime);
  }

  async describeDomainUsageDataWithOptions(request: DescribeDomainUsageDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainUsageDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainUsageDataResponse>(await this.doRPCRequest("DescribeDomainUsageData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainUsageDataResponse({}));
  }

  async describeDomainUsageData(request: DescribeDomainUsageDataRequest): Promise<DescribeDomainUsageDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainUsageDataWithOptions(request, runtime);
  }

  async describeDomainUvDataWithOptions(request: DescribeDomainUvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainUvDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainUvDataResponse>(await this.doRPCRequest("DescribeDomainUvData", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainUvDataResponse({}));
  }

  async describeDomainUvData(request: DescribeDomainUvDataRequest): Promise<DescribeDomainUvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainUvDataWithOptions(request, runtime);
  }

  async describeFCTriggerWithOptions(request: DescribeFCTriggerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFCTriggerResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeFCTriggerResponse>(await this.doRPCRequest("DescribeFCTrigger", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeFCTriggerResponse({}));
  }

  async describeFCTrigger(request: DescribeFCTriggerRequest): Promise<DescribeFCTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFCTriggerWithOptions(request, runtime);
  }

  async describeIllegalUrlExportTaskWithOptions(request: DescribeIllegalUrlExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIllegalUrlExportTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIllegalUrlExportTaskResponse>(await this.doRPCRequest("DescribeIllegalUrlExportTask", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIllegalUrlExportTaskResponse({}));
  }

  async describeIllegalUrlExportTask(request: DescribeIllegalUrlExportTaskRequest): Promise<DescribeIllegalUrlExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIllegalUrlExportTaskWithOptions(request, runtime);
  }

  async describeIpInfoWithOptions(request: DescribeIpInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIpInfoResponse>(await this.doRPCRequest("DescribeIpInfo", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIpInfoResponse({}));
  }

  async describeIpInfo(request: DescribeIpInfoRequest): Promise<DescribeIpInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpInfoWithOptions(request, runtime);
  }

  async describeL2VipsByDomainWithOptions(request: DescribeL2VipsByDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeL2VipsByDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeL2VipsByDomainResponse>(await this.doRPCRequest("DescribeL2VipsByDomain", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeL2VipsByDomainResponse({}));
  }

  async describeL2VipsByDomain(request: DescribeL2VipsByDomainRequest): Promise<DescribeL2VipsByDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeL2VipsByDomainWithOptions(request, runtime);
  }

  async describeRangeDataByLocateAndIspServiceWithOptions(request: DescribeRangeDataByLocateAndIspServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRangeDataByLocateAndIspServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRangeDataByLocateAndIspServiceResponse>(await this.doRPCRequest("DescribeRangeDataByLocateAndIspService", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRangeDataByLocateAndIspServiceResponse({}));
  }

  async describeRangeDataByLocateAndIspService(request: DescribeRangeDataByLocateAndIspServiceRequest): Promise<DescribeRangeDataByLocateAndIspServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRangeDataByLocateAndIspServiceWithOptions(request, runtime);
  }

  async describeRealtimeDeliveryAccWithOptions(request: DescribeRealtimeDeliveryAccRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRealtimeDeliveryAccResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRealtimeDeliveryAccResponse>(await this.doRPCRequest("DescribeRealtimeDeliveryAcc", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRealtimeDeliveryAccResponse({}));
  }

  async describeRealtimeDeliveryAcc(request: DescribeRealtimeDeliveryAccRequest): Promise<DescribeRealtimeDeliveryAccResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRealtimeDeliveryAccWithOptions(request, runtime);
  }

  async describeRefreshQuotaWithOptions(request: DescribeRefreshQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRefreshQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRefreshQuotaResponse>(await this.doRPCRequest("DescribeRefreshQuota", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRefreshQuotaResponse({}));
  }

  async describeRefreshQuota(request: DescribeRefreshQuotaRequest): Promise<DescribeRefreshQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRefreshQuotaWithOptions(request, runtime);
  }

  async describeRefreshTaskByIdWithOptions(request: DescribeRefreshTaskByIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRefreshTaskByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRefreshTaskByIdResponse>(await this.doRPCRequest("DescribeRefreshTaskById", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRefreshTaskByIdResponse({}));
  }

  async describeRefreshTaskById(request: DescribeRefreshTaskByIdRequest): Promise<DescribeRefreshTaskByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRefreshTaskByIdWithOptions(request, runtime);
  }

  async describeRefreshTasksWithOptions(request: DescribeRefreshTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRefreshTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRefreshTasksResponse>(await this.doRPCRequest("DescribeRefreshTasks", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRefreshTasksResponse({}));
  }

  async describeRefreshTasks(request: DescribeRefreshTasksRequest): Promise<DescribeRefreshTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRefreshTasksWithOptions(request, runtime);
  }

  async describeStagingIpWithOptions(request: DescribeStagingIpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStagingIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStagingIpResponse>(await this.doRPCRequest("DescribeStagingIp", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStagingIpResponse({}));
  }

  async describeStagingIp(request: DescribeStagingIpRequest): Promise<DescribeStagingIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStagingIpWithOptions(request, runtime);
  }

  async describeTagResourcesWithOptions(request: DescribeTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTagResourcesResponse>(await this.doRPCRequest("DescribeTagResources", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTagResourcesResponse({}));
  }

  async describeTagResources(request: DescribeTagResourcesRequest): Promise<DescribeTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagResourcesWithOptions(request, runtime);
  }

  async describeTopDomainsByFlowWithOptions(request: DescribeTopDomainsByFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTopDomainsByFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTopDomainsByFlowResponse>(await this.doRPCRequest("DescribeTopDomainsByFlow", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTopDomainsByFlowResponse({}));
  }

  async describeTopDomainsByFlow(request: DescribeTopDomainsByFlowRequest): Promise<DescribeTopDomainsByFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTopDomainsByFlowWithOptions(request, runtime);
  }

  async describeUserCertificateExpireCountWithOptions(request: DescribeUserCertificateExpireCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserCertificateExpireCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserCertificateExpireCountResponse>(await this.doRPCRequest("DescribeUserCertificateExpireCount", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserCertificateExpireCountResponse({}));
  }

  async describeUserCertificateExpireCount(request: DescribeUserCertificateExpireCountRequest): Promise<DescribeUserCertificateExpireCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserCertificateExpireCountWithOptions(request, runtime);
  }

  async describeUserConfigsWithOptions(request: DescribeUserConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserConfigsResponse>(await this.doRPCRequest("DescribeUserConfigs", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserConfigsResponse({}));
  }

  async describeUserConfigs(request: DescribeUserConfigsRequest): Promise<DescribeUserConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserConfigsWithOptions(request, runtime);
  }

  async describeUserDomainsWithOptions(request: DescribeUserDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserDomainsResponse>(await this.doRPCRequest("DescribeUserDomains", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserDomainsResponse({}));
  }

  async describeUserDomains(request: DescribeUserDomainsRequest): Promise<DescribeUserDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserDomainsWithOptions(request, runtime);
  }

  async describeUserTagsWithOptions(request: DescribeUserTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserTagsResponse>(await this.doRPCRequest("DescribeUserTags", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserTagsResponse({}));
  }

  async describeUserTags(request: DescribeUserTagsRequest): Promise<DescribeUserTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserTagsWithOptions(request, runtime);
  }

  async describeUserUsageDataExportTaskWithOptions(request: DescribeUserUsageDataExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserUsageDataExportTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserUsageDataExportTaskResponse>(await this.doRPCRequest("DescribeUserUsageDataExportTask", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserUsageDataExportTaskResponse({}));
  }

  async describeUserUsageDataExportTask(request: DescribeUserUsageDataExportTaskRequest): Promise<DescribeUserUsageDataExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserUsageDataExportTaskWithOptions(request, runtime);
  }

  async describeUserUsageDetailDataExportTaskWithOptions(request: DescribeUserUsageDetailDataExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserUsageDetailDataExportTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserUsageDetailDataExportTaskResponse>(await this.doRPCRequest("DescribeUserUsageDetailDataExportTask", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserUsageDetailDataExportTaskResponse({}));
  }

  async describeUserUsageDetailDataExportTask(request: DescribeUserUsageDetailDataExportTaskRequest): Promise<DescribeUserUsageDetailDataExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserUsageDetailDataExportTaskWithOptions(request, runtime);
  }

  async describeUserVipsByDomainWithOptions(request: DescribeUserVipsByDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserVipsByDomainResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeUserVipsByDomainResponse>(await this.doRPCRequest("DescribeUserVipsByDomain", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeUserVipsByDomainResponse({}));
  }

  async describeUserVipsByDomain(request: DescribeUserVipsByDomainRequest): Promise<DescribeUserVipsByDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserVipsByDomainWithOptions(request, runtime);
  }

  async describeVerifyContentWithOptions(request: DescribeVerifyContentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyContentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVerifyContentResponse>(await this.doRPCRequest("DescribeVerifyContent", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVerifyContentResponse({}));
  }

  async describeVerifyContent(request: DescribeVerifyContentRequest): Promise<DescribeVerifyContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyContentWithOptions(request, runtime);
  }

  async disableRealtimeLogDeliveryWithOptions(request: DisableRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<DisableRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DisableRealtimeLogDeliveryResponse>(await this.doRPCRequest("DisableRealtimeLogDelivery", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new DisableRealtimeLogDeliveryResponse({}));
  }

  async disableRealtimeLogDelivery(request: DisableRealtimeLogDeliveryRequest): Promise<DisableRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async enableRealtimeLogDeliveryWithOptions(request: EnableRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<EnableRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<EnableRealtimeLogDeliveryResponse>(await this.doRPCRequest("EnableRealtimeLogDelivery", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new EnableRealtimeLogDeliveryResponse({}));
  }

  async enableRealtimeLogDelivery(request: EnableRealtimeLogDeliveryRequest): Promise<EnableRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async listDomainsByLogConfigIdWithOptions(request: ListDomainsByLogConfigIdRequest, runtime: $Util.RuntimeOptions): Promise<ListDomainsByLogConfigIdResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDomainsByLogConfigIdResponse>(await this.doRPCRequest("ListDomainsByLogConfigId", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new ListDomainsByLogConfigIdResponse({}));
  }

  async listDomainsByLogConfigId(request: ListDomainsByLogConfigIdRequest): Promise<ListDomainsByLogConfigIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDomainsByLogConfigIdWithOptions(request, runtime);
  }

  async listFCTriggerWithOptions(request: ListFCTriggerRequest, runtime: $Util.RuntimeOptions): Promise<ListFCTriggerResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListFCTriggerResponse>(await this.doRPCRequest("ListFCTrigger", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new ListFCTriggerResponse({}));
  }

  async listFCTrigger(request: ListFCTriggerRequest): Promise<ListFCTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFCTriggerWithOptions(request, runtime);
  }

  async listRealtimeLogDeliveryDomainsWithOptions(request: ListRealtimeLogDeliveryDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListRealtimeLogDeliveryDomainsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListRealtimeLogDeliveryDomainsResponse>(await this.doRPCRequest("ListRealtimeLogDeliveryDomains", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new ListRealtimeLogDeliveryDomainsResponse({}));
  }

  async listRealtimeLogDeliveryDomains(request: ListRealtimeLogDeliveryDomainsRequest): Promise<ListRealtimeLogDeliveryDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRealtimeLogDeliveryDomainsWithOptions(request, runtime);
  }

  async listRealtimeLogDeliveryInfosWithOptions(request: ListRealtimeLogDeliveryInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListRealtimeLogDeliveryInfosResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListRealtimeLogDeliveryInfosResponse>(await this.doRPCRequest("ListRealtimeLogDeliveryInfos", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new ListRealtimeLogDeliveryInfosResponse({}));
  }

  async listRealtimeLogDeliveryInfos(request: ListRealtimeLogDeliveryInfosRequest): Promise<ListRealtimeLogDeliveryInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRealtimeLogDeliveryInfosWithOptions(request, runtime);
  }

  async listUserCustomLogConfigWithOptions(request: ListUserCustomLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListUserCustomLogConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListUserCustomLogConfigResponse>(await this.doRPCRequest("ListUserCustomLogConfig", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new ListUserCustomLogConfigResponse({}));
  }

  async listUserCustomLogConfig(request: ListUserCustomLogConfigRequest): Promise<ListUserCustomLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserCustomLogConfigWithOptions(request, runtime);
  }

  async modifyCdnDomainWithOptions(request: ModifyCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCdnDomainResponse>(await this.doRPCRequest("ModifyCdnDomain", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCdnDomainResponse({}));
  }

  async modifyCdnDomain(request: ModifyCdnDomainRequest): Promise<ModifyCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCdnDomainWithOptions(request, runtime);
  }

  async modifyCdnDomainSchdmByPropertyWithOptions(request: ModifyCdnDomainSchdmByPropertyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCdnDomainSchdmByPropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCdnDomainSchdmByPropertyResponse>(await this.doRPCRequest("ModifyCdnDomainSchdmByProperty", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCdnDomainSchdmByPropertyResponse({}));
  }

  async modifyCdnDomainSchdmByProperty(request: ModifyCdnDomainSchdmByPropertyRequest): Promise<ModifyCdnDomainSchdmByPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCdnDomainSchdmByPropertyWithOptions(request, runtime);
  }

  async modifyCdnServiceWithOptions(request: ModifyCdnServiceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCdnServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCdnServiceResponse>(await this.doRPCRequest("ModifyCdnService", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCdnServiceResponse({}));
  }

  async modifyCdnService(request: ModifyCdnServiceRequest): Promise<ModifyCdnServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCdnServiceWithOptions(request, runtime);
  }

  async modifyDomainCustomLogConfigWithOptions(request: ModifyDomainCustomLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDomainCustomLogConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ModifyDomainCustomLogConfigResponse>(await this.doRPCRequest("ModifyDomainCustomLogConfig", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new ModifyDomainCustomLogConfigResponse({}));
  }

  async modifyDomainCustomLogConfig(request: ModifyDomainCustomLogConfigRequest): Promise<ModifyDomainCustomLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDomainCustomLogConfigWithOptions(request, runtime);
  }

  async modifyRealtimeLogDeliveryWithOptions(request: ModifyRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ModifyRealtimeLogDeliveryResponse>(await this.doRPCRequest("ModifyRealtimeLogDelivery", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new ModifyRealtimeLogDeliveryResponse({}));
  }

  async modifyRealtimeLogDelivery(request: ModifyRealtimeLogDeliveryRequest): Promise<ModifyRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async modifyUserCustomLogConfigWithOptions(request: ModifyUserCustomLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserCustomLogConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ModifyUserCustomLogConfigResponse>(await this.doRPCRequest("ModifyUserCustomLogConfig", "2018-05-10", "HTTPS", "GET", "AK", "json", req, runtime), new ModifyUserCustomLogConfigResponse({}));
  }

  async modifyUserCustomLogConfig(request: ModifyUserCustomLogConfigRequest): Promise<ModifyUserCustomLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserCustomLogConfigWithOptions(request, runtime);
  }

  async openCdnServiceWithOptions(request: OpenCdnServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenCdnServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenCdnServiceResponse>(await this.doRPCRequest("OpenCdnService", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new OpenCdnServiceResponse({}));
  }

  async openCdnService(request: OpenCdnServiceRequest): Promise<OpenCdnServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openCdnServiceWithOptions(request, runtime);
  }

  async publishStagingConfigToProductionWithOptions(request: PublishStagingConfigToProductionRequest, runtime: $Util.RuntimeOptions): Promise<PublishStagingConfigToProductionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishStagingConfigToProductionResponse>(await this.doRPCRequest("PublishStagingConfigToProduction", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new PublishStagingConfigToProductionResponse({}));
  }

  async publishStagingConfigToProduction(request: PublishStagingConfigToProductionRequest): Promise<PublishStagingConfigToProductionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishStagingConfigToProductionWithOptions(request, runtime);
  }

  async pushObjectCacheWithOptions(request: PushObjectCacheRequest, runtime: $Util.RuntimeOptions): Promise<PushObjectCacheResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PushObjectCacheResponse>(await this.doRPCRequest("PushObjectCache", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new PushObjectCacheResponse({}));
  }

  async pushObjectCache(request: PushObjectCacheRequest): Promise<PushObjectCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushObjectCacheWithOptions(request, runtime);
  }

  async refreshObjectCachesWithOptions(request: RefreshObjectCachesRequest, runtime: $Util.RuntimeOptions): Promise<RefreshObjectCachesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshObjectCachesResponse>(await this.doRPCRequest("RefreshObjectCaches", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshObjectCachesResponse({}));
  }

  async refreshObjectCaches(request: RefreshObjectCachesRequest): Promise<RefreshObjectCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshObjectCachesWithOptions(request, runtime);
  }

  async rollbackStagingConfigWithOptions(request: RollbackStagingConfigRequest, runtime: $Util.RuntimeOptions): Promise<RollbackStagingConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RollbackStagingConfigResponse>(await this.doRPCRequest("RollbackStagingConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new RollbackStagingConfigResponse({}));
  }

  async rollbackStagingConfig(request: RollbackStagingConfigRequest): Promise<RollbackStagingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackStagingConfigWithOptions(request, runtime);
  }

  async setCcConfigWithOptions(request: SetCcConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetCcConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetCcConfigResponse>(await this.doRPCRequest("SetCcConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetCcConfigResponse({}));
  }

  async setCcConfig(request: SetCcConfigRequest): Promise<SetCcConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCcConfigWithOptions(request, runtime);
  }

  async setCdnDomainCSRCertificateWithOptions(request: SetCdnDomainCSRCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetCdnDomainCSRCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetCdnDomainCSRCertificateResponse>(await this.doRPCRequest("SetCdnDomainCSRCertificate", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetCdnDomainCSRCertificateResponse({}));
  }

  async setCdnDomainCSRCertificate(request: SetCdnDomainCSRCertificateRequest): Promise<SetCdnDomainCSRCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCdnDomainCSRCertificateWithOptions(request, runtime);
  }

  async setCdnDomainStagingConfigWithOptions(request: SetCdnDomainStagingConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetCdnDomainStagingConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetCdnDomainStagingConfigResponse>(await this.doRPCRequest("SetCdnDomainStagingConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetCdnDomainStagingConfigResponse({}));
  }

  async setCdnDomainStagingConfig(request: SetCdnDomainStagingConfigRequest): Promise<SetCdnDomainStagingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCdnDomainStagingConfigWithOptions(request, runtime);
  }

  async setConfigOfVersionWithOptions(request: SetConfigOfVersionRequest, runtime: $Util.RuntimeOptions): Promise<SetConfigOfVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetConfigOfVersionResponse>(await this.doRPCRequest("SetConfigOfVersion", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetConfigOfVersionResponse({}));
  }

  async setConfigOfVersion(request: SetConfigOfVersionRequest): Promise<SetConfigOfVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setConfigOfVersionWithOptions(request, runtime);
  }

  async setDomainGreenManagerConfigWithOptions(request: SetDomainGreenManagerConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainGreenManagerConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDomainGreenManagerConfigResponse>(await this.doRPCRequest("SetDomainGreenManagerConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetDomainGreenManagerConfigResponse({}));
  }

  async setDomainGreenManagerConfig(request: SetDomainGreenManagerConfigRequest): Promise<SetDomainGreenManagerConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainGreenManagerConfigWithOptions(request, runtime);
  }

  async setDomainServerCertificateWithOptions(request: SetDomainServerCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainServerCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDomainServerCertificateResponse>(await this.doRPCRequest("SetDomainServerCertificate", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetDomainServerCertificateResponse({}));
  }

  async setDomainServerCertificate(request: SetDomainServerCertificateRequest): Promise<SetDomainServerCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainServerCertificateWithOptions(request, runtime);
  }

  async setErrorPageConfigWithOptions(request: SetErrorPageConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetErrorPageConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetErrorPageConfigResponse>(await this.doRPCRequest("SetErrorPageConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetErrorPageConfigResponse({}));
  }

  async setErrorPageConfig(request: SetErrorPageConfigRequest): Promise<SetErrorPageConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setErrorPageConfigWithOptions(request, runtime);
  }

  async setFileCacheExpiredConfigWithOptions(request: SetFileCacheExpiredConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetFileCacheExpiredConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetFileCacheExpiredConfigResponse>(await this.doRPCRequest("SetFileCacheExpiredConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetFileCacheExpiredConfigResponse({}));
  }

  async setFileCacheExpiredConfig(request: SetFileCacheExpiredConfigRequest): Promise<SetFileCacheExpiredConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setFileCacheExpiredConfigWithOptions(request, runtime);
  }

  async setForceRedirectConfigWithOptions(request: SetForceRedirectConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetForceRedirectConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetForceRedirectConfigResponse>(await this.doRPCRequest("SetForceRedirectConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetForceRedirectConfigResponse({}));
  }

  async setForceRedirectConfig(request: SetForceRedirectConfigRequest): Promise<SetForceRedirectConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setForceRedirectConfigWithOptions(request, runtime);
  }

  async setForwardSchemeConfigWithOptions(request: SetForwardSchemeConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetForwardSchemeConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetForwardSchemeConfigResponse>(await this.doRPCRequest("SetForwardSchemeConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetForwardSchemeConfigResponse({}));
  }

  async setForwardSchemeConfig(request: SetForwardSchemeConfigRequest): Promise<SetForwardSchemeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setForwardSchemeConfigWithOptions(request, runtime);
  }

  async setHttpErrorPageConfigWithOptions(request: SetHttpErrorPageConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetHttpErrorPageConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetHttpErrorPageConfigResponse>(await this.doRPCRequest("SetHttpErrorPageConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetHttpErrorPageConfigResponse({}));
  }

  async setHttpErrorPageConfig(request: SetHttpErrorPageConfigRequest): Promise<SetHttpErrorPageConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setHttpErrorPageConfigWithOptions(request, runtime);
  }

  async setHttpHeaderConfigWithOptions(request: SetHttpHeaderConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetHttpHeaderConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetHttpHeaderConfigResponse>(await this.doRPCRequest("SetHttpHeaderConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetHttpHeaderConfigResponse({}));
  }

  async setHttpHeaderConfig(request: SetHttpHeaderConfigRequest): Promise<SetHttpHeaderConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setHttpHeaderConfigWithOptions(request, runtime);
  }

  async setHttpsOptionConfigWithOptions(request: SetHttpsOptionConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetHttpsOptionConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetHttpsOptionConfigResponse>(await this.doRPCRequest("SetHttpsOptionConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetHttpsOptionConfigResponse({}));
  }

  async setHttpsOptionConfig(request: SetHttpsOptionConfigRequest): Promise<SetHttpsOptionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setHttpsOptionConfigWithOptions(request, runtime);
  }

  async setIgnoreQueryStringConfigWithOptions(request: SetIgnoreQueryStringConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetIgnoreQueryStringConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetIgnoreQueryStringConfigResponse>(await this.doRPCRequest("SetIgnoreQueryStringConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetIgnoreQueryStringConfigResponse({}));
  }

  async setIgnoreQueryStringConfig(request: SetIgnoreQueryStringConfigRequest): Promise<SetIgnoreQueryStringConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setIgnoreQueryStringConfigWithOptions(request, runtime);
  }

  async setIpAllowListConfigWithOptions(request: SetIpAllowListConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetIpAllowListConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetIpAllowListConfigResponse>(await this.doRPCRequest("SetIpAllowListConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetIpAllowListConfigResponse({}));
  }

  async setIpAllowListConfig(request: SetIpAllowListConfigRequest): Promise<SetIpAllowListConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setIpAllowListConfigWithOptions(request, runtime);
  }

  async setIpBlackListConfigWithOptions(request: SetIpBlackListConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetIpBlackListConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetIpBlackListConfigResponse>(await this.doRPCRequest("SetIpBlackListConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetIpBlackListConfigResponse({}));
  }

  async setIpBlackListConfig(request: SetIpBlackListConfigRequest): Promise<SetIpBlackListConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setIpBlackListConfigWithOptions(request, runtime);
  }

  async setOptimizeConfigWithOptions(request: SetOptimizeConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetOptimizeConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetOptimizeConfigResponse>(await this.doRPCRequest("SetOptimizeConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetOptimizeConfigResponse({}));
  }

  async setOptimizeConfig(request: SetOptimizeConfigRequest): Promise<SetOptimizeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setOptimizeConfigWithOptions(request, runtime);
  }

  async setPageCompressConfigWithOptions(request: SetPageCompressConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetPageCompressConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetPageCompressConfigResponse>(await this.doRPCRequest("SetPageCompressConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetPageCompressConfigResponse({}));
  }

  async setPageCompressConfig(request: SetPageCompressConfigRequest): Promise<SetPageCompressConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPageCompressConfigWithOptions(request, runtime);
  }

  async setRangeConfigWithOptions(request: SetRangeConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetRangeConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetRangeConfigResponse>(await this.doRPCRequest("SetRangeConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetRangeConfigResponse({}));
  }

  async setRangeConfig(request: SetRangeConfigRequest): Promise<SetRangeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setRangeConfigWithOptions(request, runtime);
  }

  async setRefererConfigWithOptions(request: SetRefererConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetRefererConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetRefererConfigResponse>(await this.doRPCRequest("SetRefererConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetRefererConfigResponse({}));
  }

  async setRefererConfig(request: SetRefererConfigRequest): Promise<SetRefererConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setRefererConfigWithOptions(request, runtime);
  }

  async setRemoveQueryStringConfigWithOptions(request: SetRemoveQueryStringConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetRemoveQueryStringConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetRemoveQueryStringConfigResponse>(await this.doRPCRequest("SetRemoveQueryStringConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetRemoveQueryStringConfigResponse({}));
  }

  async setRemoveQueryStringConfig(request: SetRemoveQueryStringConfigRequest): Promise<SetRemoveQueryStringConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setRemoveQueryStringConfigWithOptions(request, runtime);
  }

  async setReqAuthConfigWithOptions(request: SetReqAuthConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetReqAuthConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetReqAuthConfigResponse>(await this.doRPCRequest("SetReqAuthConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetReqAuthConfigResponse({}));
  }

  async setReqAuthConfig(request: SetReqAuthConfigRequest): Promise<SetReqAuthConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setReqAuthConfigWithOptions(request, runtime);
  }

  async setReqHeaderConfigWithOptions(request: SetReqHeaderConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetReqHeaderConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetReqHeaderConfigResponse>(await this.doRPCRequest("SetReqHeaderConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetReqHeaderConfigResponse({}));
  }

  async setReqHeaderConfig(request: SetReqHeaderConfigRequest): Promise<SetReqHeaderConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setReqHeaderConfigWithOptions(request, runtime);
  }

  async setSourceHostConfigWithOptions(request: SetSourceHostConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetSourceHostConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetSourceHostConfigResponse>(await this.doRPCRequest("SetSourceHostConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetSourceHostConfigResponse({}));
  }

  async setSourceHostConfig(request: SetSourceHostConfigRequest): Promise<SetSourceHostConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSourceHostConfigWithOptions(request, runtime);
  }

  async setWaitingRoomConfigWithOptions(request: SetWaitingRoomConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetWaitingRoomConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetWaitingRoomConfigResponse>(await this.doRPCRequest("SetWaitingRoomConfig", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetWaitingRoomConfigResponse({}));
  }

  async setWaitingRoomConfig(request: SetWaitingRoomConfigRequest): Promise<SetWaitingRoomConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setWaitingRoomConfigWithOptions(request, runtime);
  }

  async startCdnDomainWithOptions(request: StartCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<StartCdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartCdnDomainResponse>(await this.doRPCRequest("StartCdnDomain", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new StartCdnDomainResponse({}));
  }

  async startCdnDomain(request: StartCdnDomainRequest): Promise<StartCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCdnDomainWithOptions(request, runtime);
  }

  async stopCdnDomainWithOptions(request: StopCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<StopCdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopCdnDomainResponse>(await this.doRPCRequest("StopCdnDomain", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new StopCdnDomainResponse({}));
  }

  async stopCdnDomain(request: StopCdnDomainRequest): Promise<StopCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopCdnDomainWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
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
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateFCTriggerWithOptions(request: UpdateFCTriggerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFCTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFCTriggerResponse>(await this.doRPCRequest("UpdateFCTrigger", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFCTriggerResponse({}));
  }

  async updateFCTrigger(request: UpdateFCTriggerRequest): Promise<UpdateFCTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFCTriggerWithOptions(request, runtime);
  }

  async verifyDomainOwnerWithOptions(request: VerifyDomainOwnerRequest, runtime: $Util.RuntimeOptions): Promise<VerifyDomainOwnerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyDomainOwnerResponse>(await this.doRPCRequest("VerifyDomainOwner", "2018-05-10", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyDomainOwnerResponse({}));
  }

  async verifyDomainOwner(request: VerifyDomainOwnerRequest): Promise<VerifyDomainOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyDomainOwnerWithOptions(request, runtime);
  }

}
