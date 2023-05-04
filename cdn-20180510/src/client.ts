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
  cdnType?: string;
  checkUrl?: string;
  domainName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceGroupId?: string;
  scope?: string;
  securityToken?: string;
  sources?: string;
  tag?: AddCdnDomainRequestTag[];
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
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
      cdnType: 'string',
      checkUrl: 'string',
      domainName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      scope: 'string',
      securityToken: 'string',
      sources: 'string',
      tag: { 'type': 'array', 'itemType': AddCdnDomainRequestTag },
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
  statusCode: number;
  body: AddCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFCTriggerRequest extends $tea.Model {
  eventMetaName?: string;
  eventMetaVersion?: string;
  functionARN?: string;
  notes?: string;
  roleARN?: string;
  sourceARN?: string;
  triggerARN?: string;
  static names(): { [key: string]: string } {
    return {
      eventMetaName: 'EventMetaName',
      eventMetaVersion: 'EventMetaVersion',
      functionARN: 'FunctionARN',
      notes: 'Notes',
      roleARN: 'RoleARN',
      sourceARN: 'SourceARN',
      triggerARN: 'TriggerARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventMetaName: 'string',
      eventMetaVersion: 'string',
      functionARN: 'string',
      notes: 'string',
      roleARN: 'string',
      sourceARN: 'string',
      triggerARN: 'string',
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
  statusCode: number;
  body: AddFCTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddFCTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddCdnDomainRequest extends $tea.Model {
  cdnType?: string;
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
      cdnType: 'CdnType',
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
      cdnType: 'string',
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
  statusCode: number;
  body: BatchAddCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchAddCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteCdnDomainConfigRequest extends $tea.Model {
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

export class BatchDeleteCdnDomainConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteCdnDomainConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchDeleteCdnDomainConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchDeleteCdnDomainConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetCdnDomainConfigRequest extends $tea.Model {
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

export class BatchSetCdnDomainConfigResponseBody extends $tea.Model {
  domainConfigList?: BatchSetCdnDomainConfigResponseBodyDomainConfigList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigList: 'DomainConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigList: BatchSetCdnDomainConfigResponseBodyDomainConfigList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetCdnDomainConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchSetCdnDomainConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchSetCdnDomainConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetCdnDomainServerCertificateRequest extends $tea.Model {
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
  statusCode: number;
  body: BatchSetCdnDomainServerCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchSetCdnDomainServerCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartCdnDomainRequest extends $tea.Model {
  domainNames?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      ownerId: 'number',
      securityToken: 'string',
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
  statusCode: number;
  body: BatchStartCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchStartCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopCdnDomainRequest extends $tea.Model {
  domainNames?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      ownerId: 'number',
      securityToken: 'string',
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
  statusCode: number;
  body: BatchStopCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchStopCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateCdnDomainRequest extends $tea.Model {
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
  statusCode: number;
  body: BatchUpdateCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchUpdateCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdnCertificateSigningRequestRequest extends $tea.Model {
  city?: string;
  commonName?: string;
  country?: string;
  email?: string;
  organization?: string;
  organizationUnit?: string;
  SANs?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      commonName: 'CommonName',
      country: 'Country',
      email: 'Email',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      SANs: 'SANs',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      commonName: 'string',
      country: 'string',
      email: 'string',
      organization: 'string',
      organizationUnit: 'string',
      SANs: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdnCertificateSigningRequestResponseBody extends $tea.Model {
  commonName?: string;
  csr?: string;
  pubMd5?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      csr: 'Csr',
      pubMd5: 'PubMd5',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      csr: 'string',
      pubMd5: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdnCertificateSigningRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCdnCertificateSigningRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCdnCertificateSigningRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdnDeliverTaskRequest extends $tea.Model {
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

export class CreateCdnDeliverTaskResponseBody extends $tea.Model {
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

export class CreateCdnDeliverTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCdnDeliverTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCdnDeliverTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdnSubTaskRequest extends $tea.Model {
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

export class CreateCdnSubTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCdnSubTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCdnSubTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCdnSubTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIllegalUrlExportTaskRequest extends $tea.Model {
  taskName?: string;
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIllegalUrlExportTaskResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIllegalUrlExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateIllegalUrlExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIllegalUrlExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRealTimeLogDeliveryRequest extends $tea.Model {
  domain?: string;
  logstore?: string;
  project?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      logstore: 'string',
      project: 'string',
      region: 'string',
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
  statusCode: number;
  body: CreateRealTimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRealTimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsageDetailDataExportTaskRequest extends $tea.Model {
  domainNames?: string;
  endTime?: string;
  group?: string;
  language?: string;
  startTime?: string;
  taskName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      endTime: 'EndTime',
      group: 'Group',
      language: 'Language',
      startTime: 'StartTime',
      taskName: 'TaskName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      endTime: 'string',
      group: 'string',
      language: 'string',
      startTime: 'string',
      taskName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsageDetailDataExportTaskResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  startTime?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsageDetailDataExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUsageDetailDataExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUsageDetailDataExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserUsageDataExportTaskRequest extends $tea.Model {
  endTime?: string;
  language?: string;
  startTime?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      language: 'Language',
      startTime: 'StartTime',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      language: 'string',
      startTime: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserUsageDataExportTaskResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  startTime?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserUsageDataExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUserUsageDataExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUserUsageDataExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCdnDeliverTaskRequest extends $tea.Model {
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

export class DeleteCdnDeliverTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCdnDeliverTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCdnDeliverTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCdnDeliverTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCdnDomainRequest extends $tea.Model {
  domainName?: string;
  ownerAccount?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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
  statusCode: number;
  body: DeleteCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCdnSubTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCdnSubTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCdnSubTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCdnSubTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFCTriggerRequest extends $tea.Model {
  triggerARN?: string;
  static names(): { [key: string]: string } {
    return {
      triggerARN: 'TriggerARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  statusCode: number;
  body: DeleteFCTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFCTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRealTimeLogLogstoreRequest extends $tea.Model {
  logstore?: string;
  project?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRealTimeLogLogstoreResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRealTimeLogLogstoreResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRealTimeLogLogstoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRealTimeLogLogstoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRealtimeLogDeliveryRequest extends $tea.Model {
  domain?: string;
  logstore?: string;
  project?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      logstore: 'string',
      project: 'string',
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
  statusCode: number;
  body: DeleteRealtimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSpecificConfigRequest extends $tea.Model {
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
  statusCode: number;
  body: DeleteSpecificConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSpecificConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSpecificStagingConfigRequest extends $tea.Model {
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
  statusCode: number;
  body: DeleteSpecificStagingConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSpecificStagingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsageDetailDataExportTaskRequest extends $tea.Model {
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
  statusCode: number;
  body: DeleteUsageDetailDataExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUsageDetailDataExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserUsageDataExportTaskRequest extends $tea.Model {
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
  statusCode: number;
  body: DeleteUserUsageDataExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserUsageDataExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockedRegionsRequest extends $tea.Model {
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

export class DescribeBlockedRegionsResponseBody extends $tea.Model {
  infoList?: DescribeBlockedRegionsResponseBodyInfoList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      infoList: 'InfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoList: DescribeBlockedRegionsResponseBodyInfoList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockedRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBlockedRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBlockedRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnCertificateDetailRequest extends $tea.Model {
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

export class DescribeCdnCertificateDetailResponseBody extends $tea.Model {
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

export class DescribeCdnCertificateDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnCertificateDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnCertificateDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnCertificateListRequest extends $tea.Model {
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

export class DescribeCdnCertificateListResponseBody extends $tea.Model {
  certificateListModel?: DescribeCdnCertificateListResponseBodyCertificateListModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateListModel: 'CertificateListModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateListModel: DescribeCdnCertificateListResponseBodyCertificateListModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnCertificateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnCertificateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnCertificateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDeletedDomainsRequest extends $tea.Model {
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

export class DescribeCdnDeletedDomainsResponseBody extends $tea.Model {
  domains?: DescribeCdnDeletedDomainsResponseBodyDomains;
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
      domains: DescribeCdnDeletedDomainsResponseBodyDomains,
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

export class DescribeCdnDeletedDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnDeletedDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnDeletedDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDeliverListRequest extends $tea.Model {
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

export class DescribeCdnDeliverListResponseBody extends $tea.Model {
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

export class DescribeCdnDeliverListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnDeliverListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnDeliverListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainByCertificateRequest extends $tea.Model {
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
  statusCode: number;
  body: DescribeCdnDomainByCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnDomainByCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainConfigsRequest extends $tea.Model {
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

export class DescribeCdnDomainConfigsResponseBody extends $tea.Model {
  domainConfigs?: DescribeCdnDomainConfigsResponseBodyDomainConfigs;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigs: 'DomainConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigs: DescribeCdnDomainConfigsResponseBodyDomainConfigs,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailRequest extends $tea.Model {
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

export class DescribeCdnDomainDetailResponseBody extends $tea.Model {
  getDomainDetailModel?: DescribeCdnDomainDetailResponseBodyGetDomainDetailModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      getDomainDetailModel: 'GetDomainDetailModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getDomainDetailModel: DescribeCdnDomainDetailResponseBodyGetDomainDetailModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnDomainDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsRequest extends $tea.Model {
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

export class DescribeCdnDomainLogsResponseBody extends $tea.Model {
  domainLogDetails?: DescribeCdnDomainLogsResponseBodyDomainLogDetails;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainLogDetails: 'DomainLogDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetails: DescribeCdnDomainLogsResponseBodyDomainLogDetails,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnDomainLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnDomainLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainStagingConfigRequest extends $tea.Model {
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

export class DescribeCdnDomainStagingConfigResponseBody extends $tea.Model {
  domainConfigs?: DescribeCdnDomainStagingConfigResponseBodyDomainConfigs[];
  domainName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigs: 'DomainConfigs',
      domainName: 'DomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigs: { 'type': 'array', 'itemType': DescribeCdnDomainStagingConfigResponseBodyDomainConfigs },
      domainName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainStagingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnDomainStagingConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnDomainStagingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnHttpsDomainListRequest extends $tea.Model {
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

export class DescribeCdnHttpsDomainListResponseBody extends $tea.Model {
  certInfos?: DescribeCdnHttpsDomainListResponseBodyCertInfos;
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
      certInfos: DescribeCdnHttpsDomainListResponseBodyCertInfos,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnHttpsDomainListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnHttpsDomainListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnHttpsDomainListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnOrderCommodityCodeRequest extends $tea.Model {
  commodityCode?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnOrderCommodityCodeResponseBody extends $tea.Model {
  orderCommodityCode?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderCommodityCode: 'OrderCommodityCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderCommodityCode: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnOrderCommodityCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnOrderCommodityCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnOrderCommodityCodeResponseBody,
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
  isps?: DescribeCdnRegionAndIspResponseBodyIsps;
  regions?: DescribeCdnRegionAndIspResponseBodyRegions;
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
      isps: DescribeCdnRegionAndIspResponseBodyIsps,
      regions: DescribeCdnRegionAndIspResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnRegionAndIspResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnRegionAndIspResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnRegionAndIspResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnReportRequest extends $tea.Model {
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

export class DescribeCdnReportResponseBody extends $tea.Model {
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

export class DescribeCdnReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnReportListRequest extends $tea.Model {
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

export class DescribeCdnReportListResponseBody extends $tea.Model {
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

export class DescribeCdnReportListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnReportListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnReportListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnSMCertificateDetailRequest extends $tea.Model {
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

export class DescribeCdnSMCertificateDetailResponseBody extends $tea.Model {
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

export class DescribeCdnSMCertificateDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnSMCertificateDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnSMCertificateDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnSMCertificateListRequest extends $tea.Model {
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

export class DescribeCdnSMCertificateListResponseBody extends $tea.Model {
  certificateListModel?: DescribeCdnSMCertificateListResponseBodyCertificateListModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateListModel: 'CertificateListModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateListModel: DescribeCdnSMCertificateListResponseBodyCertificateListModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnSMCertificateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnSMCertificateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnSMCertificateListResponseBody,
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
  changingAffectTime?: string;
  changingChargeType?: string;
  instanceId?: string;
  internetChargeType?: string;
  openingTime?: string;
  operationLocks?: DescribeCdnServiceResponseBodyOperationLocks;
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
      operationLocks: DescribeCdnServiceResponseBodyOperationLocks,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnSubListResponseBody extends $tea.Model {
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

export class DescribeCdnSubListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnSubListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnSubListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillHistoryRequest extends $tea.Model {
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

export class DescribeCdnUserBillHistoryResponseBody extends $tea.Model {
  billHistoryData?: DescribeCdnUserBillHistoryResponseBodyBillHistoryData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      billHistoryData: 'BillHistoryData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billHistoryData: DescribeCdnUserBillHistoryResponseBodyBillHistoryData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnUserBillHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnUserBillHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillPredictionRequest extends $tea.Model {
  area?: string;
  dimension?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      dimension: 'Dimension',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      dimension: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillPredictionResponseBody extends $tea.Model {
  billPredictionData?: DescribeCdnUserBillPredictionResponseBodyBillPredictionData;
  billType?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      billPredictionData: 'BillPredictionData',
      billType: 'BillType',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billPredictionData: DescribeCdnUserBillPredictionResponseBodyBillPredictionData,
      billType: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillPredictionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnUserBillPredictionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnUserBillPredictionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillTypeRequest extends $tea.Model {
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

export class DescribeCdnUserBillTypeResponseBody extends $tea.Model {
  billTypeData?: DescribeCdnUserBillTypeResponseBodyBillTypeData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      billTypeData: 'BillTypeData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billTypeData: DescribeCdnUserBillTypeResponseBodyBillTypeData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnUserBillTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnUserBillTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserConfigsRequest extends $tea.Model {
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

export class DescribeCdnUserConfigsResponseBody extends $tea.Model {
  configs?: DescribeCdnUserConfigsResponseBodyConfigs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': DescribeCdnUserConfigsResponseBodyConfigs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnUserConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnUserConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserDomainsByFuncRequest extends $tea.Model {
  funcId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      funcId: 'FuncId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      domains: DescribeCdnUserDomainsByFuncResponseBodyDomains,
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

export class DescribeCdnUserDomainsByFuncResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnUserDomainsByFuncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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

export class DescribeCdnUserQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnUserQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: DescribeCdnUserResourcePackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnUserResourcePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnWafDomainRequest extends $tea.Model {
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

export class DescribeCdnWafDomainResponseBody extends $tea.Model {
  outPutDomains?: DescribeCdnWafDomainResponseBodyOutPutDomains[];
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
      outPutDomains: { 'type': 'array', 'itemType': DescribeCdnWafDomainResponseBodyOutPutDomains },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnWafDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnWafDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCdnWafDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateInfoByIDRequest extends $tea.Model {
  certId?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  statusCode: number;
  body: DescribeCertificateInfoByIDResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCertificateInfoByIDResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLogConfigRequest extends $tea.Model {
  configId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLogConfigResponseBody extends $tea.Model {
  remark?: string;
  requestId?: string;
  sample?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      requestId: 'RequestId',
      sample: 'Sample',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      requestId: 'string',
      sample: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCustomLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCustomLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAverageResponseTimeRequest extends $tea.Model {
  domainName?: string;
  domainType?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  timeMerge?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainType: 'DomainType',
      endTime: 'EndTime',
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
      domainType: 'string',
      endTime: 'string',
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

export class DescribeDomainAverageResponseTimeResponseBody extends $tea.Model {
  avgRTPerInterval?: DescribeDomainAverageResponseTimeResponseBodyAvgRTPerInterval;
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgRTPerInterval: 'AvgRTPerInterval',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgRTPerInterval: DescribeDomainAverageResponseTimeResponseBodyAvgRTPerInterval,
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

export class DescribeDomainAverageResponseTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainAverageResponseTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainAverageResponseTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataRequest extends $tea.Model {
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

export class DescribeDomainBpsDataResponseBody extends $tea.Model {
  bpsDataPerInterval?: DescribeDomainBpsDataResponseBodyBpsDataPerInterval;
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataPerInterval: 'BpsDataPerInterval',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataPerInterval: DescribeDomainBpsDataResponseBodyBpsDataPerInterval,
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByLayerRequest extends $tea.Model {
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

export class DescribeDomainBpsDataByLayerResponseBody extends $tea.Model {
  bpsDataInterval?: DescribeDomainBpsDataByLayerResponseBodyBpsDataInterval;
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
      bpsDataInterval: DescribeDomainBpsDataByLayerResponseBodyBpsDataInterval,
      dataInterval: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByLayerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainBpsDataByLayerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainBpsDataByLayerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByTimeStampRequest extends $tea.Model {
  domainName?: string;
  ispNames?: string;
  locationNames?: string;
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ispNames: 'IspNames',
      locationNames: 'LocationNames',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ispNames: 'string',
      locationNames: 'string',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByTimeStampResponseBody extends $tea.Model {
  bpsDataList?: DescribeDomainBpsDataByTimeStampResponseBodyBpsDataList;
  domainName?: string;
  requestId?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataList: 'BpsDataList',
      domainName: 'DomainName',
      requestId: 'RequestId',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataList: DescribeDomainBpsDataByTimeStampResponseBodyBpsDataList,
      domainName: 'string',
      requestId: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByTimeStampResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainBpsDataByTimeStampResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainBpsDataByTimeStampResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCcActivityLogRequest extends $tea.Model {
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

export class DescribeDomainCcActivityLogResponseBody extends $tea.Model {
  activityLog?: DescribeDomainCcActivityLogResponseBodyActivityLog[];
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
      activityLog: { 'type': 'array', 'itemType': DescribeDomainCcActivityLogResponseBodyActivityLog },
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

export class DescribeDomainCcActivityLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainCcActivityLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainCcActivityLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCertificateInfoRequest extends $tea.Model {
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
  statusCode: number;
  body: DescribeDomainCertificateInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainCertificateInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCnameRequest extends $tea.Model {
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

export class DescribeDomainCnameResponseBody extends $tea.Model {
  cnameDatas?: DescribeDomainCnameResponseBodyCnameDatas;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cnameDatas: 'CnameDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnameDatas: DescribeDomainCnameResponseBodyCnameDatas,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCnameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainCnameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainCnameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCustomLogConfigRequest extends $tea.Model {
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

export class DescribeDomainCustomLogConfigResponseBody extends $tea.Model {
  configId?: string;
  remark?: string;
  requestId?: string;
  sample?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      remark: 'Remark',
      requestId: 'RequestId',
      sample: 'Sample',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      remark: 'string',
      requestId: 'string',
      sample: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCustomLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainCustomLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainCustomLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailDataByLayerRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  field?: string;
  ispNameEn?: string;
  layer?: string;
  locationNameEn?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      field: 'Field',
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
      field: 'string',
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

export class DescribeDomainDetailDataByLayerResponseBody extends $tea.Model {
  data?: DescribeDomainDetailDataByLayerResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDomainDetailDataByLayerResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailDataByLayerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainDetailDataByLayerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainDetailDataByLayerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHitRateDataRequest extends $tea.Model {
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

export class DescribeDomainHitRateDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  hitRateInterval?: DescribeDomainHitRateDataResponseBodyHitRateInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      hitRateInterval: 'HitRateInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      hitRateInterval: DescribeDomainHitRateDataResponseBodyHitRateInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainHitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataRequest extends $tea.Model {
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

export class DescribeDomainHttpCodeDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  httpCodeData?: DescribeDomainHttpCodeDataResponseBodyHttpCodeData;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      httpCodeData: 'HttpCodeData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      httpCodeData: DescribeDomainHttpCodeDataResponseBodyHttpCodeData,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainHttpCodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataByLayerRequest extends $tea.Model {
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

export class DescribeDomainHttpCodeDataByLayerResponseBody extends $tea.Model {
  dataInterval?: string;
  httpCodeDataInterval?: DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval;
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
      httpCodeDataInterval: DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataByLayerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainHttpCodeDataByLayerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainHttpCodeDataByLayerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainISPDataRequest extends $tea.Model {
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

export class DescribeDomainISPDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  value?: DescribeDomainISPDataResponseBodyValue;
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
      value: DescribeDomainISPDataResponseBodyValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainISPDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainISPDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainISPDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainMax95BpsDataRequest extends $tea.Model {
  cycle?: string;
  domainName?: string;
  endTime?: string;
  startTime?: string;
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      cycle: 'Cycle',
      domainName: 'DomainName',
      endTime: 'EndTime',
      startTime: 'StartTime',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycle: 'string',
      domainName: 'string',
      endTime: 'string',
      startTime: 'string',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainMax95BpsDataResponseBody extends $tea.Model {
  detailData?: DescribeDomainMax95BpsDataResponseBodyDetailData;
  domainName?: string;
  domesticMax95Bps?: string;
  endTime?: string;
  max95Bps?: string;
  overseasMax95Bps?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      detailData: 'DetailData',
      domainName: 'DomainName',
      domesticMax95Bps: 'DomesticMax95Bps',
      endTime: 'EndTime',
      max95Bps: 'Max95Bps',
      overseasMax95Bps: 'OverseasMax95Bps',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailData: DescribeDomainMax95BpsDataResponseBodyDetailData,
      domainName: 'string',
      domesticMax95Bps: 'string',
      endTime: 'string',
      max95Bps: 'string',
      overseasMax95Bps: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainMax95BpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainMax95BpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainMax95BpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainMultiUsageDataRequest extends $tea.Model {
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

export class DescribeDomainMultiUsageDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  requestPerInterval?: DescribeDomainMultiUsageDataResponseBodyRequestPerInterval;
  startTime?: string;
  trafficPerInterval?: DescribeDomainMultiUsageDataResponseBodyTrafficPerInterval;
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
      requestPerInterval: DescribeDomainMultiUsageDataResponseBodyRequestPerInterval,
      startTime: 'string',
      trafficPerInterval: DescribeDomainMultiUsageDataResponseBodyTrafficPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainMultiUsageDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainMultiUsageDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainMultiUsageDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPathDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  path?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      path: 'Path',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      path: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPathDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  pathDataPerInterval?: DescribeDomainPathDataResponseBodyPathDataPerInterval;
  startTime?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pathDataPerInterval: 'PathDataPerInterval',
      startTime: 'StartTime',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pathDataPerInterval: DescribeDomainPathDataResponseBodyPathDataPerInterval,
      startTime: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPathDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainPathDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainPathDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPvDataRequest extends $tea.Model {
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

export class DescribeDomainPvDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  pvDataInterval?: DescribeDomainPvDataResponseBodyPvDataInterval;
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
      pvDataInterval: DescribeDomainPvDataResponseBodyPvDataInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPvDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainPvDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainPvDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataRequest extends $tea.Model {
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

export class DescribeDomainQpsDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  qpsDataInterval?: DescribeDomainQpsDataResponseBodyQpsDataInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
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
      qpsDataInterval: DescribeDomainQpsDataResponseBodyQpsDataInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainQpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainQpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataByLayerRequest extends $tea.Model {
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

export class DescribeDomainQpsDataByLayerResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  layer?: string;
  qpsDataInterval?: DescribeDomainQpsDataByLayerResponseBodyQpsDataInterval;
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
      qpsDataInterval: DescribeDomainQpsDataByLayerResponseBodyQpsDataInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataByLayerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainQpsDataByLayerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainQpsDataByLayerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeBpsDataRequest extends $tea.Model {
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

export class DescribeDomainRealTimeBpsDataResponseBody extends $tea.Model {
  data?: DescribeDomainRealTimeBpsDataResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDomainRealTimeBpsDataResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainRealTimeBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainRealTimeBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeByteHitRateDataRequest extends $tea.Model {
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

export class DescribeDomainRealTimeByteHitRateDataResponseBody extends $tea.Model {
  data?: DescribeDomainRealTimeByteHitRateDataResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDomainRealTimeByteHitRateDataResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeByteHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainRealTimeByteHitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainRealTimeByteHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeDetailDataRequest extends $tea.Model {
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

export class DescribeDomainRealTimeDetailDataResponseBody extends $tea.Model {
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

export class DescribeDomainRealTimeDetailDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainRealTimeDetailDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainRealTimeDetailDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeHttpCodeDataRequest extends $tea.Model {
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

export class DescribeDomainRealTimeHttpCodeDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  realTimeHttpCodeData?: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData;
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
      realTimeHttpCodeData: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainRealTimeHttpCodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainRealTimeHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeQpsDataRequest extends $tea.Model {
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

export class DescribeDomainRealTimeQpsDataResponseBody extends $tea.Model {
  data?: DescribeDomainRealTimeQpsDataResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDomainRealTimeQpsDataResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeQpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainRealTimeQpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainRealTimeQpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeReqHitRateDataRequest extends $tea.Model {
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

export class DescribeDomainRealTimeReqHitRateDataResponseBody extends $tea.Model {
  data?: DescribeDomainRealTimeReqHitRateDataResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDomainRealTimeReqHitRateDataResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeReqHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainRealTimeReqHitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainRealTimeReqHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcBpsDataRequest extends $tea.Model {
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

export class DescribeDomainRealTimeSrcBpsDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  realTimeSrcBpsDataPerInterval?: DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval;
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
      realTimeSrcBpsDataPerInterval: DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainRealTimeSrcBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainRealTimeSrcBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcHttpCodeDataRequest extends $tea.Model {
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

export class DescribeDomainRealTimeSrcHttpCodeDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  realTimeSrcHttpCodeData?: DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData;
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
      realTimeSrcHttpCodeData: DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainRealTimeSrcHttpCodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainRealTimeSrcHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcTrafficDataRequest extends $tea.Model {
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

export class DescribeDomainRealTimeSrcTrafficDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  realTimeSrcTrafficDataPerInterval?: DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval;
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
      realTimeSrcTrafficDataPerInterval: DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeSrcTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainRealTimeSrcTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainRealTimeSrcTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeTrafficDataRequest extends $tea.Model {
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

export class DescribeDomainRealTimeTrafficDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  realTimeTrafficDataPerInterval?: DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval;
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
      realTimeTrafficDataPerInterval: DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainRealTimeTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainRealTimeTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealtimeLogDeliveryRequest extends $tea.Model {
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

export class DescribeDomainRealtimeLogDeliveryResponseBody extends $tea.Model {
  logstore?: string;
  project?: string;
  region?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      region: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealtimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainRealtimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRegionDataRequest extends $tea.Model {
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

export class DescribeDomainRegionDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  value?: DescribeDomainRegionDataResponseBodyValue;
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
      value: DescribeDomainRegionDataResponseBodyValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRegionDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainRegionDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainRegionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainReqHitRateDataRequest extends $tea.Model {
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

export class DescribeDomainReqHitRateDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  reqHitRateInterval?: DescribeDomainReqHitRateDataResponseBodyReqHitRateInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      reqHitRateInterval: 'ReqHitRateInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      reqHitRateInterval: DescribeDomainReqHitRateDataResponseBodyReqHitRateInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainReqHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainReqHitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainReqHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcBpsDataRequest extends $tea.Model {
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

export class DescribeDomainSrcBpsDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  srcBpsDataPerInterval?: DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerInterval;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      srcBpsDataPerInterval: 'SrcBpsDataPerInterval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      srcBpsDataPerInterval: DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerInterval,
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainSrcBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainSrcBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcHttpCodeDataRequest extends $tea.Model {
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

export class DescribeDomainSrcHttpCodeDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  httpCodeData?: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeData;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      httpCodeData: 'HttpCodeData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      httpCodeData: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeData,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainSrcHttpCodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainSrcHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcQpsDataRequest extends $tea.Model {
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

export class DescribeDomainSrcQpsDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  srcQpsDataPerInterval?: DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerInterval;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      srcQpsDataPerInterval: 'SrcQpsDataPerInterval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      srcQpsDataPerInterval: DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerInterval,
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcQpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainSrcQpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainSrcQpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTopUrlVisitRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  sortBy?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      sortBy: 'SortBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      sortBy: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTopUrlVisitResponseBody extends $tea.Model {
  allUrlList?: DescribeDomainSrcTopUrlVisitResponseBodyAllUrlList;
  domainName?: string;
  requestId?: string;
  startTime?: string;
  url200List?: DescribeDomainSrcTopUrlVisitResponseBodyUrl200List;
  url300List?: DescribeDomainSrcTopUrlVisitResponseBodyUrl300List;
  url400List?: DescribeDomainSrcTopUrlVisitResponseBodyUrl400List;
  url500List?: DescribeDomainSrcTopUrlVisitResponseBodyUrl500List;
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
      allUrlList: DescribeDomainSrcTopUrlVisitResponseBodyAllUrlList,
      domainName: 'string',
      requestId: 'string',
      startTime: 'string',
      url200List: DescribeDomainSrcTopUrlVisitResponseBodyUrl200List,
      url300List: DescribeDomainSrcTopUrlVisitResponseBodyUrl300List,
      url400List: DescribeDomainSrcTopUrlVisitResponseBodyUrl400List,
      url500List: DescribeDomainSrcTopUrlVisitResponseBodyUrl500List,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTopUrlVisitResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainSrcTopUrlVisitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainSrcTopUrlVisitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTrafficDataRequest extends $tea.Model {
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

export class DescribeDomainSrcTrafficDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  srcTrafficDataPerInterval?: DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerInterval;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      srcTrafficDataPerInterval: 'SrcTrafficDataPerInterval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      srcTrafficDataPerInterval: DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerInterval,
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainSrcTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainSrcTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopClientIpVisitRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  limit?: string;
  locationNameEn?: string;
  sortBy?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      limit: 'Limit',
      locationNameEn: 'LocationNameEn',
      sortBy: 'SortBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      limit: 'string',
      locationNameEn: 'string',
      sortBy: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopClientIpVisitResponseBody extends $tea.Model {
  clientIpList?: DescribeDomainTopClientIpVisitResponseBodyClientIpList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientIpList: 'ClientIpList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIpList: { 'type': 'array', 'itemType': DescribeDomainTopClientIpVisitResponseBodyClientIpList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopClientIpVisitResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainTopClientIpVisitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainTopClientIpVisitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopReferVisitRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  sortBy?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      sortBy: 'SortBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      sortBy: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopReferVisitResponseBody extends $tea.Model {
  domainName?: string;
  requestId?: string;
  startTime?: string;
  topReferList?: DescribeDomainTopReferVisitResponseBodyTopReferList;
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
      topReferList: DescribeDomainTopReferVisitResponseBodyTopReferList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopReferVisitResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainTopReferVisitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainTopReferVisitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUrlVisitRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  sortBy?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      sortBy: 'SortBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      sortBy: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUrlVisitResponseBody extends $tea.Model {
  allUrlList?: DescribeDomainTopUrlVisitResponseBodyAllUrlList;
  domainName?: string;
  requestId?: string;
  startTime?: string;
  url200List?: DescribeDomainTopUrlVisitResponseBodyUrl200List;
  url300List?: DescribeDomainTopUrlVisitResponseBodyUrl300List;
  url400List?: DescribeDomainTopUrlVisitResponseBodyUrl400List;
  url500List?: DescribeDomainTopUrlVisitResponseBodyUrl500List;
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
      allUrlList: DescribeDomainTopUrlVisitResponseBodyAllUrlList,
      domainName: 'string',
      requestId: 'string',
      startTime: 'string',
      url200List: DescribeDomainTopUrlVisitResponseBodyUrl200List,
      url300List: DescribeDomainTopUrlVisitResponseBodyUrl300List,
      url400List: DescribeDomainTopUrlVisitResponseBodyUrl400List,
      url500List: DescribeDomainTopUrlVisitResponseBodyUrl500List,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUrlVisitResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainTopUrlVisitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainTopUrlVisitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTrafficDataRequest extends $tea.Model {
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

export class DescribeDomainTrafficDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  trafficDataPerInterval?: DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval;
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
      trafficDataPerInterval: DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUsageDataRequest extends $tea.Model {
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

export class DescribeDomainUsageDataResponseBody extends $tea.Model {
  area?: string;
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  type?: string;
  usageDataPerInterval?: DescribeDomainUsageDataResponseBodyUsageDataPerInterval;
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
      usageDataPerInterval: DescribeDomainUsageDataResponseBodyUsageDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUsageDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainUsageDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainUsageDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUvDataRequest extends $tea.Model {
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

export class DescribeDomainUvDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  uvDataInterval?: DescribeDomainUvDataResponseBodyUvDataInterval;
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
      uvDataInterval: DescribeDomainUvDataResponseBodyUvDataInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUvDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainUvDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainUvDataResponseBody,
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
  domainsList?: DescribeDomainsBySourceResponseBodyDomainsList;
  requestId?: string;
  sources?: string;
  static names(): { [key: string]: string } {
    return {
      domainsList: 'DomainsList',
      requestId: 'RequestId',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainsList: DescribeDomainsBySourceResponseBodyDomainsList,
      requestId: 'string',
      sources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainsBySourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainsBySourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsUsageByDayRequest extends $tea.Model {
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

export class DescribeDomainsUsageByDayResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  usageByDays?: DescribeDomainsUsageByDayResponseBodyUsageByDays;
  usageTotal?: DescribeDomainsUsageByDayResponseBodyUsageTotal;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      usageByDays: 'UsageByDays',
      usageTotal: 'UsageTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      usageByDays: DescribeDomainsUsageByDayResponseBodyUsageByDays,
      usageTotal: DescribeDomainsUsageByDayResponseBodyUsageTotal,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsUsageByDayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainsUsageByDayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainsUsageByDayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEsExceptionDataRequest extends $tea.Model {
  endTime?: string;
  ruleId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ruleId: 'RuleId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ruleId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEsExceptionDataResponseBody extends $tea.Model {
  contents?: DescribeEsExceptionDataResponseBodyContents[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': DescribeEsExceptionDataResponseBodyContents },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEsExceptionDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEsExceptionDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEsExceptionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEsExecuteDataRequest extends $tea.Model {
  endTime?: string;
  ruleId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ruleId: 'RuleId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ruleId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEsExecuteDataResponseBody extends $tea.Model {
  contents?: DescribeEsExecuteDataResponseBodyContents[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': DescribeEsExecuteDataResponseBodyContents },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEsExecuteDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEsExecuteDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEsExecuteDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFCTriggerRequest extends $tea.Model {
  triggerARN?: string;
  static names(): { [key: string]: string } {
    return {
      triggerARN: 'TriggerARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerARN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFCTriggerResponseBody extends $tea.Model {
  FCTrigger?: DescribeFCTriggerResponseBodyFCTrigger;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      FCTrigger: 'FCTrigger',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FCTrigger: DescribeFCTriggerResponseBodyFCTrigger,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFCTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFCTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFCTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIllegalUrlExportTaskRequest extends $tea.Model {
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

export class DescribeIllegalUrlExportTaskResponseBody extends $tea.Model {
  downloadUrl?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIllegalUrlExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIllegalUrlExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeIllegalUrlExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpInfoRequest extends $tea.Model {
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

export class DescribeIpInfoResponseBody extends $tea.Model {
  cdnIp?: string;
  ISP?: string;
  ispEname?: string;
  region?: string;
  regionEname?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cdnIp: 'CdnIp',
      ISP: 'ISP',
      ispEname: 'IspEname',
      region: 'Region',
      regionEname: 'RegionEname',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnIp: 'string',
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

export class DescribeIpInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIpInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeIpInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpStatusRequest extends $tea.Model {
  ips?: string;
  static names(): { [key: string]: string } {
    return {
      ips: 'Ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpStatusResponseBody extends $tea.Model {
  ipStatus?: DescribeIpStatusResponseBodyIpStatus[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipStatus: 'IpStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipStatus: { 'type': 'array', 'itemType': DescribeIpStatusResponseBodyIpStatus },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIpStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeIpStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL2VipsByDomainRequest extends $tea.Model {
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

export class DescribeL2VipsByDomainResponseBody extends $tea.Model {
  domainName?: string;
  requestId?: string;
  vips?: DescribeL2VipsByDomainResponseBodyVips;
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
      vips: DescribeL2VipsByDomainResponseBodyVips,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL2VipsByDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeL2VipsByDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeL2VipsByDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreloadDetailByIdRequest extends $tea.Model {
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

export class DescribePreloadDetailByIdResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  urlDetails?: DescribePreloadDetailByIdResponseBodyUrlDetails[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      urlDetails: 'UrlDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      urlDetails: { 'type': 'array', 'itemType': DescribePreloadDetailByIdResponseBodyUrlDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreloadDetailByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePreloadDetailByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePreloadDetailByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRangeDataByLocateAndIspServiceRequest extends $tea.Model {
  domainNames?: string;
  endTime?: string;
  ispNames?: string;
  locationNames?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      endTime: 'EndTime',
      ispNames: 'IspNames',
      locationNames: 'LocationNames',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      endTime: 'string',
      ispNames: 'string',
      locationNames: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRangeDataByLocateAndIspServiceResponseBody extends $tea.Model {
  jsonResult?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jsonResult: 'JsonResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonResult: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRangeDataByLocateAndIspServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRangeDataByLocateAndIspServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRangeDataByLocateAndIspServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRealtimeDeliveryAccRequest extends $tea.Model {
  endTime?: string;
  interval?: string;
  logStore?: string;
  project?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      logStore: 'LogStore',
      project: 'Project',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'string',
      logStore: 'string',
      project: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRealtimeDeliveryAccResponseBody extends $tea.Model {
  reatTimeDeliveryAccData?: DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      reatTimeDeliveryAccData: 'ReatTimeDeliveryAccData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reatTimeDeliveryAccData: DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRealtimeDeliveryAccResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRealtimeDeliveryAccResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  blockQuota?: string;
  blockRemain?: string;
  dirQuota?: string;
  dirRemain?: string;
  ignoreParamsQuota?: string;
  ignoreParamsRemain?: string;
  preloadEdgeQuota?: string;
  preloadEdgeRemain?: string;
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
      preloadEdgeQuota: 'PreloadEdgeQuota',
      preloadEdgeRemain: 'PreloadEdgeRemain',
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
      preloadEdgeQuota: 'string',
      preloadEdgeRemain: 'string',
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

export class DescribeRefreshQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRefreshQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRefreshQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshTaskByIdRequest extends $tea.Model {
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

export class DescribeRefreshTaskByIdResponseBody extends $tea.Model {
  requestId?: string;
  tasks?: DescribeRefreshTaskByIdResponseBodyTasks[];
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
      tasks: { 'type': 'array', 'itemType': DescribeRefreshTaskByIdResponseBodyTasks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshTaskByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRefreshTaskByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRefreshTaskByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshTasksRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  objectPath?: string;
  objectType?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
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
      resourceGroupId: 'ResourceGroupId',
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
      resourceGroupId: 'string',
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

export class DescribeRefreshTasksResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tasks?: DescribeRefreshTasksResponseBodyTasks;
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
      tasks: DescribeRefreshTasksResponseBodyTasks,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRefreshTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRefreshTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStagingIpResponseBody extends $tea.Model {
  IPV4s?: DescribeStagingIpResponseBodyIPV4s;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      IPV4s: 'IPV4s',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPV4s: DescribeStagingIpResponseBodyIPV4s,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStagingIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeStagingIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeStagingIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagResourcesRequest extends $tea.Model {
  resourceId?: string[];
  resourceType?: string;
  tag?: DescribeTagResourcesRequestTag[];
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
  statusCode: number;
  body: DescribeTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeTopDomainsByFlowRequest extends $tea.Model {
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

export class DescribeTopDomainsByFlowResponseBody extends $tea.Model {
  domainCount?: number;
  domainOnlineCount?: number;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  topDomains?: DescribeTopDomainsByFlowResponseBodyTopDomains;
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
      topDomains: DescribeTopDomainsByFlowResponseBodyTopDomains,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopDomainsByFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTopDomainsByFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTopDomainsByFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserCertificateExpireCountResponseBody extends $tea.Model {
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

export class DescribeUserCertificateExpireCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserCertificateExpireCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserCertificateExpireCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConfigsRequest extends $tea.Model {
  config?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConfigsResponseBody extends $tea.Model {
  configs?: DescribeUserConfigsResponseBodyConfigs;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: DescribeUserConfigsResponseBodyConfigs,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDomainsRequest extends $tea.Model {
  cdnType?: string;
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
  source?: string;
  tag?: DescribeUserDomainsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
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
      source: 'Source',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: 'string',
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
      source: 'string',
      tag: { 'type': 'array', 'itemType': DescribeUserDomainsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDomainsResponseBody extends $tea.Model {
  domains?: DescribeUserDomainsResponseBodyDomains;
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
      domains: DescribeUserDomainsResponseBodyDomains,
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

export class DescribeUserDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserDomainsResponseBody,
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
  statusCode: number;
  body: DescribeUserTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDataExportTaskRequest extends $tea.Model {
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
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
  statusCode: number;
  body: DescribeUserUsageDataExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserUsageDataExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserUsageDetailDataExportTaskRequest extends $tea.Model {
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
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
  statusCode: number;
  body: DescribeUserUsageDetailDataExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserUsageDetailDataExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVipsByDomainRequest extends $tea.Model {
  available?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVipsByDomainResponseBody extends $tea.Model {
  domainName?: string;
  requestId?: string;
  vips?: DescribeUserVipsByDomainResponseBodyVips;
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
      vips: DescribeUserVipsByDomainResponseBodyVips,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVipsByDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserVipsByDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserVipsByDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyContentRequest extends $tea.Model {
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

export class DescribeVerifyContentResponseBody extends $tea.Model {
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

export class DescribeVerifyContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVerifyContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVerifyContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableRealtimeLogDeliveryRequest extends $tea.Model {
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
  statusCode: number;
  body: DisableRealtimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRealtimeLogDeliveryRequest extends $tea.Model {
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
  statusCode: number;
  body: EnableRealtimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsByLogConfigIdRequest extends $tea.Model {
  configId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  statusCode: number;
  body: ListDomainsByLogConfigIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDomainsByLogConfigIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFCTriggerRequest extends $tea.Model {
  eventMetaName?: string;
  eventMetaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      eventMetaName: 'EventMetaName',
      eventMetaVersion: 'EventMetaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventMetaName: 'string',
      eventMetaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFCTriggerResponseBody extends $tea.Model {
  FCTriggers?: ListFCTriggerResponseBodyFCTriggers[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      FCTriggers: 'FCTriggers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FCTriggers: { 'type': 'array', 'itemType': ListFCTriggerResponseBodyFCTriggers },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFCTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFCTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFCTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryDomainsRequest extends $tea.Model {
  logstore?: string;
  project?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryDomainsResponseBody extends $tea.Model {
  content?: ListRealtimeLogDeliveryDomainsResponseBodyContent;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ListRealtimeLogDeliveryDomainsResponseBodyContent,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRealtimeLogDeliveryDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRealtimeLogDeliveryDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryInfosResponseBody extends $tea.Model {
  content?: ListRealtimeLogDeliveryInfosResponseBodyContent;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ListRealtimeLogDeliveryInfosResponseBodyContent,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRealtimeLogDeliveryInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRealtimeLogDeliveryInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserCustomLogConfigResponseBody extends $tea.Model {
  configIds?: ListUserCustomLogConfigResponseBodyConfigIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configIds: 'ConfigIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configIds: ListUserCustomLogConfigResponseBodyConfigIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserCustomLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserCustomLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserCustomLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCdnDomainRequest extends $tea.Model {
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
  statusCode: number;
  body: ModifyCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCdnDomainSchdmByPropertyRequest extends $tea.Model {
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
  statusCode: number;
  body: ModifyCdnDomainSchdmByPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyCdnDomainSchdmByPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRealtimeLogDeliveryRequest extends $tea.Model {
  domain?: string;
  logstore?: string;
  project?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      logstore: 'string',
      project: 'string',
      region: 'string',
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
  statusCode: number;
  body: ModifyRealtimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdnServiceRequest extends $tea.Model {
  internetChargeType?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      internetChargeType: 'InternetChargeType',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetChargeType: 'string',
      ownerId: 'number',
      securityToken: 'string',
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
  statusCode: number;
  body: OpenCdnServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenCdnServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishStagingConfigToProductionRequest extends $tea.Model {
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
  statusCode: number;
  body: PublishStagingConfigToProductionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PublishStagingConfigToProductionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushObjectCacheRequest extends $tea.Model {
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

export class PushObjectCacheResponseBody extends $tea.Model {
  pushTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pushTaskId: 'PushTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushObjectCacheResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PushObjectCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushObjectCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshObjectCachesRequest extends $tea.Model {
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

export class RefreshObjectCachesResponseBody extends $tea.Model {
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

export class RefreshObjectCachesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefreshObjectCachesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshObjectCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackStagingConfigRequest extends $tea.Model {
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
  statusCode: number;
  body: RollbackStagingConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RollbackStagingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCdnDomainCSRCertificateRequest extends $tea.Model {
  domainName?: string;
  serverCertificate?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      serverCertificate: 'ServerCertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      serverCertificate: 'string',
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
  statusCode: number;
  body: SetCdnDomainCSRCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetCdnDomainCSRCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCdnDomainSMCertificateRequest extends $tea.Model {
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

export class SetCdnDomainSMCertificateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCdnDomainSMCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetCdnDomainSMCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetCdnDomainSMCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCdnDomainSSLCertificateRequest extends $tea.Model {
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

export class SetCdnDomainSSLCertificateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCdnDomainSSLCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetCdnDomainSSLCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetCdnDomainSSLCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCdnDomainStagingConfigRequest extends $tea.Model {
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

export class SetCdnDomainStagingConfigResponseBody extends $tea.Model {
  domainConfigList?: SetCdnDomainStagingConfigResponseBodyDomainConfigList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigList: 'DomainConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigList: { 'type': 'array', 'itemType': SetCdnDomainStagingConfigResponseBodyDomainConfigList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCdnDomainStagingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetCdnDomainStagingConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetCdnDomainStagingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainServerCertificateRequest extends $tea.Model {
  certName?: string;
  certType?: string;
  domainName?: string;
  forceSet?: string;
  ownerId?: number;
  privateKey?: string;
  securityToken?: string;
  serverCertificate?: string;
  serverCertificateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certType: 'CertType',
      domainName: 'DomainName',
      forceSet: 'ForceSet',
      ownerId: 'OwnerId',
      privateKey: 'PrivateKey',
      securityToken: 'SecurityToken',
      serverCertificate: 'ServerCertificate',
      serverCertificateStatus: 'ServerCertificateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certType: 'string',
      domainName: 'string',
      forceSet: 'string',
      ownerId: 'number',
      privateKey: 'string',
      securityToken: 'string',
      serverCertificate: 'string',
      serverCertificateStatus: 'string',
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
  statusCode: number;
  body: SetDomainServerCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDomainServerCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetReqHeaderConfigRequest extends $tea.Model {
  configId?: number;
  domainName?: string;
  key?: string;
  ownerId?: number;
  securityToken?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      domainName: 'DomainName',
      key: 'Key',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      domainName: 'string',
      key: 'string',
      ownerId: 'number',
      securityToken: 'string',
      value: 'string',
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
  statusCode: number;
  body: SetReqHeaderConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetReqHeaderConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetWaitingRoomConfigRequest extends $tea.Model {
  allowPct?: number;
  domainName?: string;
  gapTime?: number;
  maxTimeWait?: number;
  waitUri?: string;
  waitUrl?: string;
  static names(): { [key: string]: string } {
    return {
      allowPct: 'AllowPct',
      domainName: 'DomainName',
      gapTime: 'GapTime',
      maxTimeWait: 'MaxTimeWait',
      waitUri: 'WaitUri',
      waitUrl: 'WaitUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPct: 'number',
      domainName: 'string',
      gapTime: 'number',
      maxTimeWait: 'number',
      waitUri: 'string',
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
  statusCode: number;
  body: SetWaitingRoomConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetWaitingRoomConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCdnDomainRequest extends $tea.Model {
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
  statusCode: number;
  body: StartCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCdnDomainRequest extends $tea.Model {
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
  statusCode: number;
  body: StopCdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
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
  statusCode: number;
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  statusCode: number;
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateCdnDeliverTaskRequest extends $tea.Model {
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

export class UpdateCdnDeliverTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCdnDeliverTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateCdnDeliverTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCdnDeliverTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCdnSubTaskRequest extends $tea.Model {
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

export class UpdateCdnSubTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCdnSubTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateCdnSubTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCdnSubTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFCTriggerRequest extends $tea.Model {
  functionARN?: string;
  notes?: string;
  roleARN?: string;
  sourceARN?: string;
  triggerARN?: string;
  static names(): { [key: string]: string } {
    return {
      functionARN: 'FunctionARN',
      notes: 'Notes',
      roleARN: 'RoleARN',
      sourceARN: 'SourceARN',
      triggerARN: 'TriggerARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionARN: 'string',
      notes: 'string',
      roleARN: 'string',
      sourceARN: 'string',
      triggerARN: 'string',
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
  statusCode: number;
  body: UpdateFCTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFCTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDomainOwnerRequest extends $tea.Model {
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

export class VerifyDomainOwnerResponseBody extends $tea.Model {
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

export class VerifyDomainOwnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyDomainOwnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyDomainOwnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCdnDomainRequestTag extends $tea.Model {
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

export class BatchSetCdnDomainConfigResponseBodyDomainConfigListDomainConfigModel extends $tea.Model {
  configId?: number;
  domainName?: string;
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      domainName: 'DomainName',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      domainName: 'string',
      functionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetCdnDomainConfigResponseBodyDomainConfigList extends $tea.Model {
  domainConfigModel?: BatchSetCdnDomainConfigResponseBodyDomainConfigListDomainConfigModel[];
  static names(): { [key: string]: string } {
    return {
      domainConfigModel: 'DomainConfigModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigModel: { 'type': 'array', 'itemType': BatchSetCdnDomainConfigResponseBodyDomainConfigListDomainConfigModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockedRegionsResponseBodyInfoListInfoItem extends $tea.Model {
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

export class DescribeBlockedRegionsResponseBodyInfoList extends $tea.Model {
  infoItem?: DescribeBlockedRegionsResponseBodyInfoListInfoItem[];
  static names(): { [key: string]: string } {
    return {
      infoItem: 'InfoItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoItem: { 'type': 'array', 'itemType': DescribeBlockedRegionsResponseBodyInfoListInfoItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnCertificateListResponseBodyCertificateListModelCertListCert extends $tea.Model {
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

export class DescribeCdnDeletedDomainsResponseBodyDomainsPageData extends $tea.Model {
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

export class DescribeCdnDeletedDomainsResponseBodyDomains extends $tea.Model {
  pageData?: DescribeCdnDeletedDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeCdnDeletedDomainsResponseBodyDomainsPageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainByCertificateResponseBodyCertInfosCertInfo extends $tea.Model {
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
  configId?: string;
  functionArgs?: DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs;
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
      functionArgs: DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs,
      functionName: 'string',
      parentId: 'string',
      status: 'string',
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
  cdnType?: string;
  cname?: string;
  description?: string;
  domainName?: string;
  domainStatus?: string;
  gmtCreated?: string;
  gmtModified?: string;
  httpsCname?: string;
  resourceGroupId?: string;
  scope?: string;
  serverCertificateStatus?: string;
  sourceModels?: DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels;
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      httpsCname: 'HttpsCname',
      resourceGroupId: 'ResourceGroupId',
      scope: 'Scope',
      serverCertificateStatus: 'ServerCertificateStatus',
      sourceModels: 'SourceModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: 'string',
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      httpsCname: 'string',
      resourceGroupId: 'string',
      scope: 'string',
      serverCertificateStatus: 'string',
      sourceModels: DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail extends $tea.Model {
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

export class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos extends $tea.Model {
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

export class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetail extends $tea.Model {
  domainName?: string;
  logCount?: number;
  logInfos?: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos;
  pageInfos?: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos;
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
      logInfos: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos,
      pageInfos: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos,
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
  configId?: string;
  functionArgs?: DescribeCdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs[];
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
      functionArgs: { 'type': 'array', 'itemType': DescribeCdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs },
      functionName: 'string',
      parentId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnHttpsDomainListResponseBodyCertInfosCertInfo extends $tea.Model {
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

export class DescribeCdnSMCertificateListResponseBodyCertificateListModelCertListCert extends $tea.Model {
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

export class DescribeCdnSMCertificateListResponseBodyCertificateListModelCertList extends $tea.Model {
  cert?: DescribeCdnSMCertificateListResponseBodyCertificateListModelCertListCert[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: { 'type': 'array', 'itemType': DescribeCdnSMCertificateListResponseBodyCertificateListModelCertListCert },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnSMCertificateListResponseBodyCertificateListModel extends $tea.Model {
  certList?: DescribeCdnSMCertificateListResponseBodyCertificateListModelCertList;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: DescribeCdnSMCertificateListResponseBodyCertificateListModelCertList,
      count: 'number',
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
  billTime?: string;
  billType?: string;
  billingData?: DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData;
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
      billingData: DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData,
      dimension: 'string',
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
  area?: string;
  timeStp?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      timeStp: 'TimeStp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      timeStp: 'string',
      value: 'number',
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

export class DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource extends $tea.Model {
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
  cdnType?: string;
  cname?: string;
  description?: string;
  domainName?: string;
  domainStatus?: string;
  gmtCreated?: string;
  gmtModified?: string;
  resourceGroupId?: string;
  sources?: DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources;
  sslProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      resourceGroupId: 'ResourceGroupId',
      sources: 'Sources',
      sslProtocol: 'SslProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: 'string',
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      resourceGroupId: 'string',
      sources: DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources,
      sslProtocol: 'string',
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
  aclStatus?: string;
  ccStatus?: string;
  domain?: string;
  status?: string;
  wafStatus?: string;
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
      aclStatus: 'string',
      ccStatus: 'string',
      domain: 'string',
      status: 'string',
      wafStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateInfoByIDResponseBodyCertInfosCertInfo extends $tea.Model {
  certExpireTime?: string;
  certId?: string;
  certName?: string;
  certType?: string;
  createTime?: string;
  domainList?: string;
  httpsCrt?: string;
  static names(): { [key: string]: string } {
    return {
      certExpireTime: 'CertExpireTime',
      certId: 'CertId',
      certName: 'CertName',
      certType: 'CertType',
      createTime: 'CreateTime',
      domainList: 'DomainList',
      httpsCrt: 'HttpsCrt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certExpireTime: 'string',
      certId: 'string',
      certName: 'string',
      certType: 'string',
      createTime: 'string',
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

export class DescribeDomainAverageResponseTimeResponseBodyAvgRTPerIntervalDataModule extends $tea.Model {
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
  domesticValue?: string;
  httpsDomesticValue?: string;
  httpsOverseasValue?: string;
  httpsValue?: string;
  overseasValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domesticValue: 'DomesticValue',
      httpsDomesticValue: 'HttpsDomesticValue',
      httpsOverseasValue: 'HttpsOverseasValue',
      httpsValue: 'HttpsValue',
      overseasValue: 'OverseasValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domesticValue: 'string',
      httpsDomesticValue: 'string',
      httpsOverseasValue: 'string',
      httpsValue: 'string',
      overseasValue: 'string',
      timeStamp: 'string',
      value: 'string',
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
  timeStamp?: string;
  trafficValue?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      trafficValue: 'TrafficValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      trafficValue: 'string',
      value: 'string',
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
  bps?: number;
  ispName?: string;
  locationName?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      ispName: 'IspName',
      locationName: 'LocationName',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      ispName: 'string',
      locationName: 'string',
      timeStamp: 'string',
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

export class DescribeDomainCertificateInfoResponseBodyCertInfosCertInfo extends $tea.Model {
  certDomainName?: string;
  certExpireTime?: string;
  certId?: string;
  certLife?: string;
  certName?: string;
  certOrg?: string;
  certRegion?: string;
  certStartTime?: string;
  certType?: string;
  certUpdateTime?: string;
  domainCnameStatus?: string;
  domainName?: string;
  serverCertificate?: string;
  serverCertificateStatus?: string;
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
      certStartTime: 'CertStartTime',
      certType: 'CertType',
      certUpdateTime: 'CertUpdateTime',
      domainCnameStatus: 'DomainCnameStatus',
      domainName: 'DomainName',
      serverCertificate: 'ServerCertificate',
      serverCertificateStatus: 'ServerCertificateStatus',
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
      certStartTime: 'string',
      certType: 'string',
      certUpdateTime: 'string',
      domainCnameStatus: 'string',
      domainName: 'string',
      serverCertificate: 'string',
      serverCertificateStatus: 'string',
      status: 'string',
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

export class DescribeDomainCnameResponseBodyCnameDatasData extends $tea.Model {
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

export class DescribeDomainCnameResponseBodyCnameDatas extends $tea.Model {
  data?: DescribeDomainCnameResponseBodyCnameDatasData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDomainCnameResponseBodyCnameDatasData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailDataByLayerResponseBodyDataDataModule extends $tea.Model {
  acc?: number;
  bps?: number;
  domainName?: string;
  httpCode?: string;
  ipv6Acc?: number;
  ipv6Bps?: number;
  ipv6Qps?: number;
  ipv6Traf?: number;
  qps?: number;
  timeStamp?: string;
  traf?: number;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      bps: 'Bps',
      domainName: 'DomainName',
      httpCode: 'HttpCode',
      ipv6Acc: 'Ipv6Acc',
      ipv6Bps: 'Ipv6Bps',
      ipv6Qps: 'Ipv6Qps',
      ipv6Traf: 'Ipv6Traf',
      qps: 'Qps',
      timeStamp: 'TimeStamp',
      traf: 'Traf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'number',
      bps: 'number',
      domainName: 'string',
      httpCode: 'string',
      ipv6Acc: 'number',
      ipv6Bps: 'number',
      ipv6Qps: 'number',
      ipv6Traf: 'number',
      qps: 'number',
      timeStamp: 'string',
      traf: 'number',
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

export class DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule extends $tea.Model {
  httpsValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      httpsValue: 'HttpsValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsValue: 'string',
      timeStamp: 'string',
      value: 'string',
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
  timeStamp?: string;
  value?: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue,
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
  timeStamp?: string;
  totalValue?: string;
  value?: string;
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
      value: 'string',
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
  avgObjectSize?: string;
  avgResponseRate?: string;
  avgResponseTime?: string;
  bps?: string;
  bytesProportion?: string;
  ISP?: string;
  ispEname?: string;
  proportion?: string;
  qps?: string;
  reqErrRate?: string;
  totalBytes?: string;
  totalQuery?: string;
  static names(): { [key: string]: string } {
    return {
      avgObjectSize: 'AvgObjectSize',
      avgResponseRate: 'AvgResponseRate',
      avgResponseTime: 'AvgResponseTime',
      bps: 'Bps',
      bytesProportion: 'BytesProportion',
      ISP: 'ISP',
      ispEname: 'IspEname',
      proportion: 'Proportion',
      qps: 'Qps',
      reqErrRate: 'ReqErrRate',
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
      ISP: 'string',
      ispEname: 'string',
      proportion: 'string',
      qps: 'string',
      reqErrRate: 'string',
      totalBytes: 'string',
      totalQuery: 'string',
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

export class DescribeDomainMax95BpsDataResponseBodyDetailDataMax95Detail extends $tea.Model {
  area?: string;
  max95Bps?: number;
  max95BpsPeakTime?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      max95Bps: 'Max95Bps',
      max95BpsPeakTime: 'Max95BpsPeakTime',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      max95Bps: 'number',
      max95BpsPeakTime: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainMax95BpsDataResponseBodyDetailData extends $tea.Model {
  max95Detail?: DescribeDomainMax95BpsDataResponseBodyDetailDataMax95Detail[];
  static names(): { [key: string]: string } {
    return {
      max95Detail: 'Max95Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max95Detail: { 'type': 'array', 'itemType': DescribeDomainMax95BpsDataResponseBodyDetailDataMax95Detail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule extends $tea.Model {
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

export class DescribeDomainMultiUsageDataResponseBodyRequestPerInterval extends $tea.Model {
  requestDataModule?: DescribeDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule[];
  static names(): { [key: string]: string } {
    return {
      requestDataModule: 'RequestDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestDataModule: { 'type': 'array', 'itemType': DescribeDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule extends $tea.Model {
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

export class DescribeDomainMultiUsageDataResponseBodyTrafficPerInterval extends $tea.Model {
  trafficDataModule?: DescribeDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule[];
  static names(): { [key: string]: string } {
    return {
      trafficDataModule: 'TrafficDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficDataModule: { 'type': 'array', 'itemType': DescribeDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainPathDataResponseBodyPathDataPerIntervalUsageData extends $tea.Model {
  acc?: number;
  path?: string;
  time?: string;
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      path: 'Path',
      time: 'Time',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'number',
      path: 'string',
      time: 'string',
      traffic: 'number',
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
  accDomesticValue?: string;
  accOverseasValue?: string;
  accValue?: string;
  domesticValue?: string;
  httpsAccDomesticValue?: string;
  httpsAccOverseasValue?: string;
  httpsAccValue?: string;
  httpsDomesticValue?: string;
  httpsOverseasValue?: string;
  httpsValue?: string;
  overseasValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      accDomesticValue: 'AccDomesticValue',
      accOverseasValue: 'AccOverseasValue',
      accValue: 'AccValue',
      domesticValue: 'DomesticValue',
      httpsAccDomesticValue: 'HttpsAccDomesticValue',
      httpsAccOverseasValue: 'HttpsAccOverseasValue',
      httpsAccValue: 'HttpsAccValue',
      httpsDomesticValue: 'HttpsDomesticValue',
      httpsOverseasValue: 'HttpsOverseasValue',
      httpsValue: 'HttpsValue',
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
      httpsAccDomesticValue: 'string',
      httpsAccOverseasValue: 'string',
      httpsAccValue: 'string',
      httpsDomesticValue: 'string',
      httpsOverseasValue: 'string',
      httpsValue: 'string',
      overseasValue: 'string',
      timeStamp: 'string',
      value: 'string',
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
  timeStamp?: string;
  value?: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue,
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
  timeStamp?: string;
  value?: DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValue;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValue,
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
  avgObjectSize?: string;
  avgResponseRate?: string;
  avgResponseTime?: string;
  bps?: string;
  bytesProportion?: string;
  proportion?: string;
  qps?: string;
  region?: string;
  regionEname?: string;
  reqErrRate?: string;
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
      reqErrRate: 'ReqErrRate',
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
      reqErrRate: 'string',
      totalBytes: 'string',
      totalQuery: 'string',
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
  httpsValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      httpsValue: 'HttpsValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsValue: 'string',
      timeStamp: 'string',
      value: 'string',
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

export class DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerIntervalDataModule extends $tea.Model {
  httpsValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      httpsValue: 'HttpsValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsValue: 'string',
      timeStamp: 'string',
      value: 'string',
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
  timeStamp?: string;
  value?: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue,
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

export class DescribeDomainSrcTopUrlVisitResponseBodyAllUrlListUrlList extends $tea.Model {
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

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl200ListUrlList extends $tea.Model {
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

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl300ListUrlList extends $tea.Model {
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

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl400ListUrlList extends $tea.Model {
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

export class DescribeDomainSrcTopUrlVisitResponseBodyUrl500ListUrlList extends $tea.Model {
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

export class DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerIntervalDataModule extends $tea.Model {
  httpsValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      httpsValue: 'HttpsValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsValue: 'string',
      timeStamp: 'string',
      value: 'string',
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

export class DescribeDomainTopClientIpVisitResponseBodyClientIpList extends $tea.Model {
  acc?: number;
  clientIp?: string;
  rank?: number;
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      clientIp: 'ClientIp',
      rank: 'Rank',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'number',
      clientIp: 'string',
      rank: 'number',
      traffic: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopReferVisitResponseBodyTopReferListReferList extends $tea.Model {
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

export class DescribeDomainTopUrlVisitResponseBodyAllUrlListUrlList extends $tea.Model {
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

export class DescribeDomainTopUrlVisitResponseBodyUrl200ListUrlList extends $tea.Model {
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

export class DescribeDomainTopUrlVisitResponseBodyUrl300ListUrlList extends $tea.Model {
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

export class DescribeDomainTopUrlVisitResponseBodyUrl400ListUrlList extends $tea.Model {
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

export class DescribeDomainTopUrlVisitResponseBodyUrl500ListUrlList extends $tea.Model {
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

export class DescribeDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $tea.Model {
  domesticValue?: string;
  httpsDomesticValue?: string;
  httpsOverseasValue?: string;
  httpsValue?: string;
  overseasValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domesticValue: 'DomesticValue',
      httpsDomesticValue: 'HttpsDomesticValue',
      httpsOverseasValue: 'HttpsOverseasValue',
      httpsValue: 'HttpsValue',
      overseasValue: 'OverseasValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domesticValue: 'string',
      httpsDomesticValue: 'string',
      httpsOverseasValue: 'string',
      httpsValue: 'string',
      overseasValue: 'string',
      timeStamp: 'string',
      value: 'string',
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

export class DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo extends $tea.Model {
  cdnType?: string;
  createTime?: string;
  domainCname?: string;
  domainName?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
      createTime: 'CreateTime',
      domainCname: 'DomainCname',
      domainName: 'DomainName',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: 'string',
      createTime: 'string',
      domainCname: 'string',
      domainName: 'string',
      status: 'string',
      updateTime: 'string',
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

export class DescribeDomainsBySourceResponseBodyDomainsListDomainsData extends $tea.Model {
  domainInfos?: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos;
  domains?: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      domainInfos: 'DomainInfos',
      domains: 'Domains',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfos: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos,
      domains: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains,
      source: 'string',
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

export class DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay extends $tea.Model {
  bytesHitRate?: string;
  maxBps?: string;
  maxBpsTime?: string;
  maxSrcBps?: string;
  maxSrcBpsTime?: string;
  qps?: string;
  requestHitRate?: string;
  timeStamp?: string;
  totalAccess?: string;
  totalTraffic?: string;
  static names(): { [key: string]: string } {
    return {
      bytesHitRate: 'BytesHitRate',
      maxBps: 'MaxBps',
      maxBpsTime: 'MaxBpsTime',
      maxSrcBps: 'MaxSrcBps',
      maxSrcBpsTime: 'MaxSrcBpsTime',
      qps: 'Qps',
      requestHitRate: 'RequestHitRate',
      timeStamp: 'TimeStamp',
      totalAccess: 'TotalAccess',
      totalTraffic: 'TotalTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesHitRate: 'string',
      maxBps: 'string',
      maxBpsTime: 'string',
      maxSrcBps: 'string',
      maxSrcBpsTime: 'string',
      qps: 'string',
      requestHitRate: 'string',
      timeStamp: 'string',
      totalAccess: 'string',
      totalTraffic: 'string',
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

export class DescribeDomainsUsageByDayResponseBodyUsageTotal extends $tea.Model {
  bytesHitRate?: string;
  maxBps?: string;
  maxBpsTime?: string;
  maxSrcBps?: string;
  maxSrcBpsTime?: string;
  requestHitRate?: string;
  totalAccess?: string;
  totalTraffic?: string;
  static names(): { [key: string]: string } {
    return {
      bytesHitRate: 'BytesHitRate',
      maxBps: 'MaxBps',
      maxBpsTime: 'MaxBpsTime',
      maxSrcBps: 'MaxSrcBps',
      maxSrcBpsTime: 'MaxSrcBpsTime',
      requestHitRate: 'RequestHitRate',
      totalAccess: 'TotalAccess',
      totalTraffic: 'TotalTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesHitRate: 'string',
      maxBps: 'string',
      maxBpsTime: 'string',
      maxSrcBps: 'string',
      maxSrcBpsTime: 'string',
      requestHitRate: 'string',
      totalAccess: 'string',
      totalTraffic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEsExceptionDataResponseBodyContentsPoints extends $tea.Model {
  points?: string[];
  static names(): { [key: string]: string } {
    return {
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      points: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEsExceptionDataResponseBodyContents extends $tea.Model {
  columns?: string[];
  name?: string;
  points?: DescribeEsExceptionDataResponseBodyContentsPoints[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      name: 'Name',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      points: { 'type': 'array', 'itemType': DescribeEsExceptionDataResponseBodyContentsPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEsExecuteDataResponseBodyContents extends $tea.Model {
  columns?: string[];
  name?: string;
  points?: string[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      name: 'Name',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      points: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFCTriggerResponseBodyFCTrigger extends $tea.Model {
  eventMetaName?: string;
  eventMetaVersion?: string;
  notes?: string;
  roleARN?: string;
  sourceArn?: string;
  triggerARN?: string;
  static names(): { [key: string]: string } {
    return {
      eventMetaName: 'EventMetaName',
      eventMetaVersion: 'EventMetaVersion',
      notes: 'Notes',
      roleARN: 'RoleARN',
      sourceArn: 'SourceArn',
      triggerARN: 'TriggerARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventMetaName: 'string',
      eventMetaVersion: 'string',
      notes: 'string',
      roleARN: 'string',
      sourceArn: 'string',
      triggerARN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpStatusResponseBodyIpStatus extends $tea.Model {
  ip?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      status: 'string',
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

export class DescribePreloadDetailByIdResponseBodyUrlDetailsUrls extends $tea.Model {
  description?: string;
  success?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      success: 'Success',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      success: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreloadDetailByIdResponseBodyUrlDetails extends $tea.Model {
  creationTime?: string;
  domain?: string;
  endTime?: string;
  process?: string;
  retCode?: string;
  status?: string;
  taskId?: string;
  urls?: DescribePreloadDetailByIdResponseBodyUrlDetailsUrls[];
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      domain: 'Domain',
      endTime: 'EndTime',
      process: 'Process',
      retCode: 'RetCode',
      status: 'Status',
      taskId: 'TaskId',
      urls: 'Urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      domain: 'string',
      endTime: 'string',
      process: 'string',
      retCode: 'string',
      status: 'string',
      taskId: 'string',
      urls: { 'type': 'array', 'itemType': DescribePreloadDetailByIdResponseBodyUrlDetailsUrls },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRealtimeDeliveryAccResponseBodyReatTimeDeliveryAccDataAccData extends $tea.Model {
  failedNum?: number;
  successNum?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      failedNum: 'FailedNum',
      successNum: 'SuccessNum',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedNum: 'number',
      successNum: 'number',
      timeStamp: 'string',
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

export class DescribeRefreshTasksResponseBodyTasksCDNTask extends $tea.Model {
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
  resourceId?: string;
  tag?: DescribeTagResourcesResponseBodyTagResourcesTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeTagResourcesResponseBodyTagResourcesTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain extends $tea.Model {
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
  bucket?: string;
  enable?: string;
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      enable: 'Enable',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      enable: 'string',
      prefix: 'string',
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
  wafConfig?: DescribeUserConfigsResponseBodyConfigsWafConfig;
  static names(): { [key: string]: string } {
    return {
      ossLogConfig: 'OssLogConfig',
      wafConfig: 'WafConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossLogConfig: DescribeUserConfigsResponseBodyConfigsOssLogConfig,
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
  cdnType?: string;
  cname?: string;
  coverage?: string;
  description?: string;
  domainId?: number;
  domainName?: string;
  domainStatus?: string;
  gmtCreated?: string;
  gmtModified?: string;
  resourceGroupId?: string;
  sandbox?: string;
  sources?: DescribeUserDomainsResponseBodyDomainsPageDataSources;
  sslProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
      cname: 'Cname',
      coverage: 'Coverage',
      description: 'Description',
      domainId: 'DomainId',
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
      cdnType: 'string',
      cname: 'string',
      coverage: 'string',
      description: 'string',
      domainId: 'number',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      resourceGroupId: 'string',
      sandbox: 'string',
      sources: DescribeUserDomainsResponseBodyDomainsPageDataSources,
      sslProtocol: 'string',
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
  createTime?: string;
  downloadUrl?: string;
  status?: string;
  taskConfig?: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig;
  taskId?: string;
  taskName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      downloadUrl: 'DownloadUrl',
      status: 'Status',
      taskConfig: 'TaskConfig',
      taskId: 'TaskId',
      taskName: 'TaskName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      downloadUrl: 'string',
      status: 'string',
      taskConfig: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig,
      taskId: 'string',
      taskName: 'string',
      updateTime: 'string',
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
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageData,
      pageNumber: 'number',
      pageSize: 'number',
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
  createTime?: string;
  downloadUrl?: string;
  status?: string;
  taskConfig?: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig;
  taskId?: string;
  taskName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      downloadUrl: 'DownloadUrl',
      status: 'Status',
      taskConfig: 'TaskConfig',
      taskId: 'TaskId',
      taskName: 'TaskName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      downloadUrl: 'string',
      status: 'string',
      taskConfig: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig,
      taskId: 'string',
      taskName: 'string',
      updateTime: 'string',
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
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageData,
      pageNumber: 'number',
      pageSize: 'number',
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
  eventMetaName?: string;
  eventMetaVersion?: string;
  notes?: string;
  roleARN?: string;
  sourceArn?: string;
  triggerARN?: string;
  static names(): { [key: string]: string } {
    return {
      eventMetaName: 'EventMetaName',
      eventMetaVersion: 'EventMetaVersion',
      notes: 'Notes',
      roleARN: 'RoleARN',
      sourceArn: 'SourceArn',
      triggerARN: 'TriggerARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventMetaName: 'string',
      eventMetaVersion: 'string',
      notes: 'string',
      roleARN: 'string',
      sourceArn: 'string',
      triggerARN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryDomainsResponseBodyContentDomains extends $tea.Model {
  domainName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      status: 'string',
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
  logstore?: string;
  project?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      region: 'string',
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

export class SetCdnDomainStagingConfigResponseBodyDomainConfigList extends $tea.Model {
  configId?: number;
  domainName?: string;
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      domainName: 'DomainName',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      domainName: 'string',
      functionName: 'string',
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
    let query = { };
    if (!Util.isUnset(request.cdnType)) {
      query["CdnType"] = request.cdnType;
    }

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
      action: "AddCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCdnDomainResponse>(await this.callApi(params, req, runtime), new AddCdnDomainResponse({}));
  }

  async addCdnDomain(request: AddCdnDomainRequest): Promise<AddCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCdnDomainWithOptions(request, runtime);
  }

  async addFCTriggerWithOptions(request: AddFCTriggerRequest, runtime: $Util.RuntimeOptions): Promise<AddFCTriggerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.triggerARN)) {
      query["TriggerARN"] = request.triggerARN;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eventMetaName)) {
      body["EventMetaName"] = request.eventMetaName;
    }

    if (!Util.isUnset(request.eventMetaVersion)) {
      body["EventMetaVersion"] = request.eventMetaVersion;
    }

    if (!Util.isUnset(request.functionARN)) {
      body["FunctionARN"] = request.functionARN;
    }

    if (!Util.isUnset(request.notes)) {
      body["Notes"] = request.notes;
    }

    if (!Util.isUnset(request.roleARN)) {
      body["RoleARN"] = request.roleARN;
    }

    if (!Util.isUnset(request.sourceARN)) {
      body["SourceARN"] = request.sourceARN;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddFCTrigger",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddFCTriggerResponse>(await this.callApi(params, req, runtime), new AddFCTriggerResponse({}));
  }

  async addFCTrigger(request: AddFCTriggerRequest): Promise<AddFCTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFCTriggerWithOptions(request, runtime);
  }

  /**
    * The top-level domain.
    *
    * @param request BatchAddCdnDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchAddCdnDomainResponse
   */
  async batchAddCdnDomainWithOptions(request: BatchAddCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchAddCdnDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdnType)) {
      query["CdnType"] = request.cdnType;
    }

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
      action: "BatchAddCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchAddCdnDomainResponse>(await this.callApi(params, req, runtime), new BatchAddCdnDomainResponse({}));
  }

  /**
    * The top-level domain.
    *
    * @param request BatchAddCdnDomainRequest
    * @return BatchAddCdnDomainResponse
   */
  async batchAddCdnDomain(request: BatchAddCdnDomainRequest): Promise<BatchAddCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAddCdnDomainWithOptions(request, runtime);
  }

  /**
    * *   You can specify up to 50 domain names in each request.
    * *   You can call this operation up to 30 times per second per account.
    *
    * @param request BatchDeleteCdnDomainConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchDeleteCdnDomainConfigResponse
   */
  async batchDeleteCdnDomainConfigWithOptions(request: BatchDeleteCdnDomainConfigRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteCdnDomainConfigResponse> {
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
      action: "BatchDeleteCdnDomainConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteCdnDomainConfigResponse>(await this.callApi(params, req, runtime), new BatchDeleteCdnDomainConfigResponse({}));
  }

  /**
    * *   You can specify up to 50 domain names in each request.
    * *   You can call this operation up to 30 times per second per account.
    *
    * @param request BatchDeleteCdnDomainConfigRequest
    * @return BatchDeleteCdnDomainConfigResponse
   */
  async batchDeleteCdnDomainConfig(request: BatchDeleteCdnDomainConfigRequest): Promise<BatchDeleteCdnDomainConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteCdnDomainConfigWithOptions(request, runtime);
  }

  /**
    * The features that you want to configure. Format:
    * *   **functionName**: the name of the feature. This parameter is required. Separate multiple values with commas (,). For more information, see [A list of features](~~388460~~).
    * *   **argName**: the feature parameter for **functionName**. This parameter is required. You can specify multiple feature parameters.
    * *   **argValue**: the parameter value that is specified for **functionName**. This parameter is required.
    * *   **parentid**: the rule condition ID. This parameter is optional. You can use the **condition** rule engine to create a rule condition. For information, see [BatchSetCdnDomainConfig and SetCdnDomainStagingConfig](~~388460~~). A rule condition can identify parameters that are included in requests and filter requests based on the identified parameters. After you create a rule condition, a [configid](~~388994~~) is generated. configid can be used as parentId that is referenced by other features. This way, you can combine rule conditions and features for flexible configurations.
    * If you set **parentId** to **-1**, the existing rule conditions in the configurations are deleted.
    *     [{
    *        "functionArgs": [{
    *          "argName": "Parameter A", 
    *          "argValue": Value of parameter A"
    *         }, 
    *       {
    *         "argName": "Parameter B", 
    *         "argValue": "Value of parameter B"
    *          }], 
    *      "functionName": "Feature name"
    *      "parentId": "Optional, which corresponds to configid of the referenced rule condition"
    *     }]
    * The following code shows a sample configuration if **parentId** is not used.
    * In this example, the **origin_request_header** feature is used to add back-to-origin HTTP headers, and the rule condition whose configuration ID is **222728944812032** is referenced.
    *     [{
    *             "functionArgs": [{
    *                 "argName": "header_operation_type",
    *                 "argValue": "add"
    *             }, {
    *                 "argName": "header_name",
    *                 "argValue": "Accept-Encoding"
    *             }, {
    *                 "argName": "header_value",
    *                 "argValue": "gzip"
    *             }, {
    *                 "argName": "duplicate",
    *                 "argValue": "off"
    *             }],
    *             "functionName": "origin_request_header"
    *     }]
    * The following code shows a sample configuration if **parentId** is used.
    * In this example, the **origin_request_header** feature is used to add back-to-origin HTTP headers, and the rule condition whose configuration ID is **222728944812032** is referenced.
    *     [{
    *             "functionArgs": [{
    *                 "argName": "header_operation_type",
    *                 "argValue": "add"
    *             }, {
    *                 "argName": "header_name",
    *                 "argValue": "Accept-Encoding"
    *             }, {
    *                 "argName": "header_value",
    *                 "argValue": "gzip"
    *             }, {
    *                 "argName": "duplicate",
    *                 "argValue": "off"
    *             }],
    *             "functionName": "origin_request_header",
    *             "parentId": "222728944812032"
    *     }]
    *
    * @param request BatchSetCdnDomainConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchSetCdnDomainConfigResponse
   */
  async batchSetCdnDomainConfigWithOptions(request: BatchSetCdnDomainConfigRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetCdnDomainConfigResponse> {
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
      action: "BatchSetCdnDomainConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchSetCdnDomainConfigResponse>(await this.callApi(params, req, runtime), new BatchSetCdnDomainConfigResponse({}));
  }

  /**
    * The features that you want to configure. Format:
    * *   **functionName**: the name of the feature. This parameter is required. Separate multiple values with commas (,). For more information, see [A list of features](~~388460~~).
    * *   **argName**: the feature parameter for **functionName**. This parameter is required. You can specify multiple feature parameters.
    * *   **argValue**: the parameter value that is specified for **functionName**. This parameter is required.
    * *   **parentid**: the rule condition ID. This parameter is optional. You can use the **condition** rule engine to create a rule condition. For information, see [BatchSetCdnDomainConfig and SetCdnDomainStagingConfig](~~388460~~). A rule condition can identify parameters that are included in requests and filter requests based on the identified parameters. After you create a rule condition, a [configid](~~388994~~) is generated. configid can be used as parentId that is referenced by other features. This way, you can combine rule conditions and features for flexible configurations.
    * If you set **parentId** to **-1**, the existing rule conditions in the configurations are deleted.
    *     [{
    *        "functionArgs": [{
    *          "argName": "Parameter A", 
    *          "argValue": Value of parameter A"
    *         }, 
    *       {
    *         "argName": "Parameter B", 
    *         "argValue": "Value of parameter B"
    *          }], 
    *      "functionName": "Feature name"
    *      "parentId": "Optional, which corresponds to configid of the referenced rule condition"
    *     }]
    * The following code shows a sample configuration if **parentId** is not used.
    * In this example, the **origin_request_header** feature is used to add back-to-origin HTTP headers, and the rule condition whose configuration ID is **222728944812032** is referenced.
    *     [{
    *             "functionArgs": [{
    *                 "argName": "header_operation_type",
    *                 "argValue": "add"
    *             }, {
    *                 "argName": "header_name",
    *                 "argValue": "Accept-Encoding"
    *             }, {
    *                 "argName": "header_value",
    *                 "argValue": "gzip"
    *             }, {
    *                 "argName": "duplicate",
    *                 "argValue": "off"
    *             }],
    *             "functionName": "origin_request_header"
    *     }]
    * The following code shows a sample configuration if **parentId** is used.
    * In this example, the **origin_request_header** feature is used to add back-to-origin HTTP headers, and the rule condition whose configuration ID is **222728944812032** is referenced.
    *     [{
    *             "functionArgs": [{
    *                 "argName": "header_operation_type",
    *                 "argValue": "add"
    *             }, {
    *                 "argName": "header_name",
    *                 "argValue": "Accept-Encoding"
    *             }, {
    *                 "argName": "header_value",
    *                 "argValue": "gzip"
    *             }, {
    *                 "argName": "duplicate",
    *                 "argValue": "off"
    *             }],
    *             "functionName": "origin_request_header",
    *             "parentId": "222728944812032"
    *     }]
    *
    * @param request BatchSetCdnDomainConfigRequest
    * @return BatchSetCdnDomainConfigResponse
   */
  async batchSetCdnDomainConfig(request: BatchSetCdnDomainConfigRequest): Promise<BatchSetCdnDomainConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetCdnDomainConfigWithOptions(request, runtime);
  }

  /**
    * The content of the SSL certificate. Specify the content of the certificate only if you want to enable the SSL certificate.
    *
    * @param request BatchSetCdnDomainServerCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchSetCdnDomainServerCertificateResponse
   */
  async batchSetCdnDomainServerCertificateWithOptions(request: BatchSetCdnDomainServerCertificateRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetCdnDomainServerCertificateResponse> {
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
      action: "BatchSetCdnDomainServerCertificate",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchSetCdnDomainServerCertificateResponse>(await this.callApi(params, req, runtime), new BatchSetCdnDomainServerCertificateResponse({}));
  }

  /**
    * The content of the SSL certificate. Specify the content of the certificate only if you want to enable the SSL certificate.
    *
    * @param request BatchSetCdnDomainServerCertificateRequest
    * @return BatchSetCdnDomainServerCertificateResponse
   */
  async batchSetCdnDomainServerCertificate(request: BatchSetCdnDomainServerCertificateRequest): Promise<BatchSetCdnDomainServerCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetCdnDomainServerCertificateWithOptions(request, runtime);
  }

  /**
    * The domain names that you want to enable. Separate multiple domain names with commas (,).
    *
    * @param request BatchStartCdnDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchStartCdnDomainResponse
   */
  async batchStartCdnDomainWithOptions(request: BatchStartCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchStartCdnDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
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
      action: "BatchStartCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchStartCdnDomainResponse>(await this.callApi(params, req, runtime), new BatchStartCdnDomainResponse({}));
  }

  /**
    * The domain names that you want to enable. Separate multiple domain names with commas (,).
    *
    * @param request BatchStartCdnDomainRequest
    * @return BatchStartCdnDomainResponse
   */
  async batchStartCdnDomain(request: BatchStartCdnDomainRequest): Promise<BatchStartCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStartCdnDomainWithOptions(request, runtime);
  }

  /**
    * *   After an accelerated domain name is disabled, Alibaba Cloud CDN retains its information and reroutes all the requests that are destined for the accelerated domain name to the origin.
    * *   If you need to temporarily disable CDN acceleration for a domain name, we recommend that you call the StopDomain operation.
    * *   You can call this operation up to 30 times per second per account.
    * *   You can specify up to 50 domain names in each request.
    *
    * @param request BatchStopCdnDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchStopCdnDomainResponse
   */
  async batchStopCdnDomainWithOptions(request: BatchStopCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchStopCdnDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
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
      action: "BatchStopCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchStopCdnDomainResponse>(await this.callApi(params, req, runtime), new BatchStopCdnDomainResponse({}));
  }

  /**
    * *   After an accelerated domain name is disabled, Alibaba Cloud CDN retains its information and reroutes all the requests that are destined for the accelerated domain name to the origin.
    * *   If you need to temporarily disable CDN acceleration for a domain name, we recommend that you call the StopDomain operation.
    * *   You can call this operation up to 30 times per second per account.
    * *   You can specify up to 50 domain names in each request.
    *
    * @param request BatchStopCdnDomainRequest
    * @return BatchStopCdnDomainResponse
   */
  async batchStopCdnDomain(request: BatchStopCdnDomainRequest): Promise<BatchStopCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStopCdnDomainWithOptions(request, runtime);
  }

  /**
    * > - The maximum number of times that each user can call this operation per second is 30.
    * - You can specify multiple domain names (no more than 50) and separate them with commas (,).
    *
    * @param request BatchUpdateCdnDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchUpdateCdnDomainResponse
   */
  async batchUpdateCdnDomainWithOptions(request: BatchUpdateCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchUpdateCdnDomainResponse> {
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
      action: "BatchUpdateCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchUpdateCdnDomainResponse>(await this.callApi(params, req, runtime), new BatchUpdateCdnDomainResponse({}));
  }

  /**
    * > - The maximum number of times that each user can call this operation per second is 30.
    * - You can specify multiple domain names (no more than 50) and separate them with commas (,).
    *
    * @param request BatchUpdateCdnDomainRequest
    * @return BatchUpdateCdnDomainResponse
   */
  async batchUpdateCdnDomain(request: BatchUpdateCdnDomainRequest): Promise<BatchUpdateCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUpdateCdnDomainWithOptions(request, runtime);
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request CreateCdnCertificateSigningRequestRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCdnCertificateSigningRequestResponse
   */
  async createCdnCertificateSigningRequestWithOptions(request: CreateCdnCertificateSigningRequestRequest, runtime: $Util.RuntimeOptions): Promise<CreateCdnCertificateSigningRequestResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!Util.isUnset(request.country)) {
      query["Country"] = request.country;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!Util.isUnset(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
    }

    if (!Util.isUnset(request.SANs)) {
      query["SANs"] = request.SANs;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCdnCertificateSigningRequest",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCdnCertificateSigningRequestResponse>(await this.callApi(params, req, runtime), new CreateCdnCertificateSigningRequestResponse({}));
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request CreateCdnCertificateSigningRequestRequest
    * @return CreateCdnCertificateSigningRequestResponse
   */
  async createCdnCertificateSigningRequest(request: CreateCdnCertificateSigningRequestRequest): Promise<CreateCdnCertificateSigningRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCdnCertificateSigningRequestWithOptions(request, runtime);
  }

  /**
    * The ID of the tracking task.
    *
    * @param request CreateCdnDeliverTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCdnDeliverTaskResponse
   */
  async createCdnDeliverTaskWithOptions(request: CreateCdnDeliverTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateCdnDeliverTaskResponse> {
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
      action: "CreateCdnDeliverTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCdnDeliverTaskResponse>(await this.callApi(params, req, runtime), new CreateCdnDeliverTaskResponse({}));
  }

  /**
    * The ID of the tracking task.
    *
    * @param request CreateCdnDeliverTaskRequest
    * @return CreateCdnDeliverTaskResponse
   */
  async createCdnDeliverTask(request: CreateCdnDeliverTaskRequest): Promise<CreateCdnDeliverTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCdnDeliverTaskWithOptions(request, runtime);
  }

  /**
    * *   This operation allows you to create a custom operations report for a specific domain name. You can view the statistics about the domain name in the report.
    * *   You can call this operation up to three times per second per account.
    *
    * @param request CreateCdnSubTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCdnSubTaskResponse
   */
  async createCdnSubTaskWithOptions(request: CreateCdnSubTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateCdnSubTaskResponse> {
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
      action: "CreateCdnSubTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCdnSubTaskResponse>(await this.callApi(params, req, runtime), new CreateCdnSubTaskResponse({}));
  }

  /**
    * *   This operation allows you to create a custom operations report for a specific domain name. You can view the statistics about the domain name in the report.
    * *   You can call this operation up to three times per second per account.
    *
    * @param request CreateCdnSubTaskRequest
    * @return CreateCdnSubTaskResponse
   */
  async createCdnSubTask(request: CreateCdnSubTaskRequest): Promise<CreateCdnSubTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCdnSubTaskWithOptions(request, runtime);
  }

  /**
    * *   You can query data only by day. You can query data within the last 31 days.
    * *   Typically, a file that contains invalid URLs is generated five minutes after you create an export task. You can call the [DescribeIllegalUrlExportTask](~~156506~~) operation to query the URL from which you can download the file.
    * *   You can call this operation only once per second per account.
    *
    * @param request CreateIllegalUrlExportTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateIllegalUrlExportTaskResponse
   */
  async createIllegalUrlExportTaskWithOptions(request: CreateIllegalUrlExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateIllegalUrlExportTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.timePoint)) {
      query["TimePoint"] = request.timePoint;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateIllegalUrlExportTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIllegalUrlExportTaskResponse>(await this.callApi(params, req, runtime), new CreateIllegalUrlExportTaskResponse({}));
  }

  /**
    * *   You can query data only by day. You can query data within the last 31 days.
    * *   Typically, a file that contains invalid URLs is generated five minutes after you create an export task. You can call the [DescribeIllegalUrlExportTask](~~156506~~) operation to query the URL from which you can download the file.
    * *   You can call this operation only once per second per account.
    *
    * @param request CreateIllegalUrlExportTaskRequest
    * @return CreateIllegalUrlExportTaskResponse
   */
  async createIllegalUrlExportTask(request: CreateIllegalUrlExportTaskRequest): Promise<CreateIllegalUrlExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIllegalUrlExportTaskWithOptions(request, runtime);
  }

  /**
    * >  You can call this API operation up to 100 times per second per account.
    *
    * @param request CreateRealTimeLogDeliveryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateRealTimeLogDeliveryResponse
   */
  async createRealTimeLogDeliveryWithOptions(request: CreateRealTimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<CreateRealTimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRealTimeLogDelivery",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRealTimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new CreateRealTimeLogDeliveryResponse({}));
  }

  /**
    * >  You can call this API operation up to 100 times per second per account.
    *
    * @param request CreateRealTimeLogDeliveryRequest
    * @return CreateRealTimeLogDeliveryResponse
   */
  async createRealTimeLogDelivery(request: CreateRealTimeLogDeliveryRequest): Promise<CreateRealTimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRealTimeLogDeliveryWithOptions(request, runtime);
  }

  /**
    * *   You can create a task to query data in the last year. The maximum time range that can be queried is one month.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request CreateUsageDetailDataExportTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateUsageDetailDataExportTaskResponse
   */
  async createUsageDetailDataExportTaskWithOptions(request: CreateUsageDetailDataExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateUsageDetailDataExportTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUsageDetailDataExportTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUsageDetailDataExportTaskResponse>(await this.callApi(params, req, runtime), new CreateUsageDetailDataExportTaskResponse({}));
  }

  /**
    * *   You can create a task to query data in the last year. The maximum time range that can be queried is one month.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request CreateUsageDetailDataExportTaskRequest
    * @return CreateUsageDetailDataExportTaskResponse
   */
  async createUsageDetailDataExportTask(request: CreateUsageDetailDataExportTaskRequest): Promise<CreateUsageDetailDataExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUsageDetailDataExportTaskWithOptions(request, runtime);
  }

  /**
    * *   You can create a task to query data in the last year. The maximum time range that can be queried is one month.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request CreateUserUsageDataExportTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateUserUsageDataExportTaskResponse
   */
  async createUserUsageDataExportTaskWithOptions(request: CreateUserUsageDataExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserUsageDataExportTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUserUsageDataExportTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserUsageDataExportTaskResponse>(await this.callApi(params, req, runtime), new CreateUserUsageDataExportTaskResponse({}));
  }

  /**
    * *   You can create a task to query data in the last year. The maximum time range that can be queried is one month.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request CreateUserUsageDataExportTaskRequest
    * @return CreateUserUsageDataExportTaskResponse
   */
  async createUserUsageDataExportTask(request: CreateUserUsageDataExportTaskRequest): Promise<CreateUserUsageDataExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserUsageDataExportTaskWithOptions(request, runtime);
  }

  /**
    * >  You can call this operation up to three times per second per account.
    *
    * @param request DeleteCdnDeliverTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteCdnDeliverTaskResponse
   */
  async deleteCdnDeliverTaskWithOptions(request: DeleteCdnDeliverTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCdnDeliverTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deliverId)) {
      query["DeliverId"] = request.deliverId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCdnDeliverTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCdnDeliverTaskResponse>(await this.callApi(params, req, runtime), new DeleteCdnDeliverTaskResponse({}));
  }

  /**
    * >  You can call this operation up to three times per second per account.
    *
    * @param request DeleteCdnDeliverTaskRequest
    * @return DeleteCdnDeliverTaskResponse
   */
  async deleteCdnDeliverTask(request: DeleteCdnDeliverTaskRequest): Promise<DeleteCdnDeliverTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCdnDeliverTaskWithOptions(request, runtime);
  }

  /**
    * The accelerated domain name that you want to delete. You can specify only one domain name in each call.
    *
    * @param request DeleteCdnDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteCdnDomainResponse
   */
  async deleteCdnDomainWithOptions(request: DeleteCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCdnDomainResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCdnDomainResponse>(await this.callApi(params, req, runtime), new DeleteCdnDomainResponse({}));
  }

  /**
    * The accelerated domain name that you want to delete. You can specify only one domain name in each call.
    *
    * @param request DeleteCdnDomainRequest
    * @return DeleteCdnDomainResponse
   */
  async deleteCdnDomain(request: DeleteCdnDomainRequest): Promise<DeleteCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCdnDomainWithOptions(request, runtime);
  }

  /**
    * >  You can call this API operation up to three times per second per account.
    *
    * @param request DeleteCdnSubTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteCdnSubTaskResponse
   */
  async deleteCdnSubTaskWithOptions(runtime: $Util.RuntimeOptions): Promise<DeleteCdnSubTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DeleteCdnSubTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCdnSubTaskResponse>(await this.callApi(params, req, runtime), new DeleteCdnSubTaskResponse({}));
  }

  /**
    * >  You can call this API operation up to three times per second per account.
    *
    * @return DeleteCdnSubTaskResponse
   */
  async deleteCdnSubTask(): Promise<DeleteCdnSubTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCdnSubTaskWithOptions(runtime);
  }

  async deleteFCTriggerWithOptions(request: DeleteFCTriggerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFCTriggerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.triggerARN)) {
      query["TriggerARN"] = request.triggerARN;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFCTrigger",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFCTriggerResponse>(await this.callApi(params, req, runtime), new DeleteFCTriggerResponse({}));
  }

  async deleteFCTrigger(request: DeleteFCTriggerRequest): Promise<DeleteFCTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFCTriggerWithOptions(request, runtime);
  }

  /**
    * >  You can call this operation up to 100 times per second per account.
    *
    * @param request DeleteRealTimeLogLogstoreRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteRealTimeLogLogstoreResponse
   */
  async deleteRealTimeLogLogstoreWithOptions(request: DeleteRealTimeLogLogstoreRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRealTimeLogLogstoreResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRealTimeLogLogstore",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRealTimeLogLogstoreResponse>(await this.callApi(params, req, runtime), new DeleteRealTimeLogLogstoreResponse({}));
  }

  /**
    * >  You can call this operation up to 100 times per second per account.
    *
    * @param request DeleteRealTimeLogLogstoreRequest
    * @return DeleteRealTimeLogLogstoreResponse
   */
  async deleteRealTimeLogLogstore(request: DeleteRealTimeLogLogstoreRequest): Promise<DeleteRealTimeLogLogstoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRealTimeLogLogstoreWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DeleteRealtimeLogDeliveryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteRealtimeLogDeliveryResponse
   */
  async deleteRealtimeLogDeliveryWithOptions(request: DeleteRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRealtimeLogDelivery",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new DeleteRealtimeLogDeliveryResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DeleteRealtimeLogDeliveryRequest
    * @return DeleteRealtimeLogDeliveryResponse
   */
  async deleteRealtimeLogDelivery(request: DeleteRealtimeLogDeliveryRequest): Promise<DeleteRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DeleteSpecificConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteSpecificConfigResponse
   */
  async deleteSpecificConfigWithOptions(request: DeleteSpecificConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSpecificConfigResponse> {
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
      action: "DeleteSpecificConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSpecificConfigResponse>(await this.callApi(params, req, runtime), new DeleteSpecificConfigResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DeleteSpecificConfigRequest
    * @return DeleteSpecificConfigResponse
   */
  async deleteSpecificConfig(request: DeleteSpecificConfigRequest): Promise<DeleteSpecificConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSpecificConfigWithOptions(request, runtime);
  }

  /**
    * > The maximum number of times that each user can call this operation per second is 20.
    *
    * @param request DeleteSpecificStagingConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteSpecificStagingConfigResponse
   */
  async deleteSpecificStagingConfigWithOptions(request: DeleteSpecificStagingConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSpecificStagingConfigResponse> {
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
      action: "DeleteSpecificStagingConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSpecificStagingConfigResponse>(await this.callApi(params, req, runtime), new DeleteSpecificStagingConfigResponse({}));
  }

  /**
    * > The maximum number of times that each user can call this operation per second is 20.
    *
    * @param request DeleteSpecificStagingConfigRequest
    * @return DeleteSpecificStagingConfigResponse
   */
  async deleteSpecificStagingConfig(request: DeleteSpecificStagingConfigRequest): Promise<DeleteSpecificStagingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSpecificStagingConfigWithOptions(request, runtime);
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DeleteUsageDetailDataExportTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteUsageDetailDataExportTaskResponse
   */
  async deleteUsageDetailDataExportTaskWithOptions(request: DeleteUsageDetailDataExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUsageDetailDataExportTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUsageDetailDataExportTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUsageDetailDataExportTaskResponse>(await this.callApi(params, req, runtime), new DeleteUsageDetailDataExportTaskResponse({}));
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DeleteUsageDetailDataExportTaskRequest
    * @return DeleteUsageDetailDataExportTaskResponse
   */
  async deleteUsageDetailDataExportTask(request: DeleteUsageDetailDataExportTaskRequest): Promise<DeleteUsageDetailDataExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUsageDetailDataExportTaskWithOptions(request, runtime);
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DeleteUserUsageDataExportTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteUserUsageDataExportTaskResponse
   */
  async deleteUserUsageDataExportTaskWithOptions(request: DeleteUserUsageDataExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserUsageDataExportTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserUsageDataExportTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserUsageDataExportTaskResponse>(await this.callApi(params, req, runtime), new DeleteUserUsageDataExportTaskResponse({}));
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DeleteUserUsageDataExportTaskRequest
    * @return DeleteUserUsageDataExportTaskResponse
   */
  async deleteUserUsageDataExportTask(request: DeleteUserUsageDataExportTaskRequest): Promise<DeleteUserUsageDataExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserUsageDataExportTaskWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeBlockedRegionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeBlockedRegionsResponse
   */
  async describeBlockedRegionsWithOptions(request: DescribeBlockedRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBlockedRegionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBlockedRegions",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBlockedRegionsResponse>(await this.callApi(params, req, runtime), new DescribeBlockedRegionsResponse({}));
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeBlockedRegionsRequest
    * @return DescribeBlockedRegionsResponse
   */
  async describeBlockedRegions(request: DescribeBlockedRegionsRequest): Promise<DescribeBlockedRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBlockedRegionsWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeCdnCertificateDetailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnCertificateDetailResponse
   */
  async describeCdnCertificateDetailWithOptions(request: DescribeCdnCertificateDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnCertificateDetailResponse> {
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
      action: "DescribeCdnCertificateDetail",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnCertificateDetailResponse>(await this.callApi(params, req, runtime), new DescribeCdnCertificateDetailResponse({}));
  }

  /**
    * > You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeCdnCertificateDetailRequest
    * @return DescribeCdnCertificateDetailResponse
   */
  async describeCdnCertificateDetail(request: DescribeCdnCertificateDetailRequest): Promise<DescribeCdnCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnCertificateDetailWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeCdnCertificateListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnCertificateListResponse
   */
  async describeCdnCertificateListWithOptions(request: DescribeCdnCertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnCertificateListResponse> {
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
      action: "DescribeCdnCertificateList",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnCertificateListResponse>(await this.callApi(params, req, runtime), new DescribeCdnCertificateListResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeCdnCertificateListRequest
    * @return DescribeCdnCertificateListResponse
   */
  async describeCdnCertificateList(request: DescribeCdnCertificateListRequest): Promise<DescribeCdnCertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnCertificateListWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 10 times per second per account.
    *
    * @param request DescribeCdnDeletedDomainsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnDeletedDomainsResponse
   */
  async describeCdnDeletedDomainsWithOptions(request: DescribeCdnDeletedDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnDeletedDomainsResponse> {
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
      action: "DescribeCdnDeletedDomains",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnDeletedDomainsResponse>(await this.callApi(params, req, runtime), new DescribeCdnDeletedDomainsResponse({}));
  }

  /**
    * > You can call this operation up to 10 times per second per account.
    *
    * @param request DescribeCdnDeletedDomainsRequest
    * @return DescribeCdnDeletedDomainsResponse
   */
  async describeCdnDeletedDomains(request: DescribeCdnDeletedDomainsRequest): Promise<DescribeCdnDeletedDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnDeletedDomainsWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 3 times per second per account.
    *
    * @param request DescribeCdnDeliverListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnDeliverListResponse
   */
  async describeCdnDeliverListWithOptions(request: DescribeCdnDeliverListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnDeliverListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deliverId)) {
      query["DeliverId"] = request.deliverId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCdnDeliverList",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnDeliverListResponse>(await this.callApi(params, req, runtime), new DescribeCdnDeliverListResponse({}));
  }

  /**
    * > You can call this operation up to 3 times per second per account.
    *
    * @param request DescribeCdnDeliverListRequest
    * @return DescribeCdnDeliverListResponse
   */
  async describeCdnDeliverList(request: DescribeCdnDeliverListRequest): Promise<DescribeCdnDeliverListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnDeliverListWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeCdnDomainByCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnDomainByCertificateResponse
   */
  async describeCdnDomainByCertificateWithOptions(request: DescribeCdnDomainByCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnDomainByCertificateResponse> {
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
      action: "DescribeCdnDomainByCertificate",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnDomainByCertificateResponse>(await this.callApi(params, req, runtime), new DescribeCdnDomainByCertificateResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeCdnDomainByCertificateRequest
    * @return DescribeCdnDomainByCertificateResponse
   */
  async describeCdnDomainByCertificate(request: DescribeCdnDomainByCertificateRequest): Promise<DescribeCdnDomainByCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnDomainByCertificateWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeCdnDomainConfigsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnDomainConfigsResponse
   */
  async describeCdnDomainConfigsWithOptions(request: DescribeCdnDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnDomainConfigsResponse> {
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
      action: "DescribeCdnDomainConfigs",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnDomainConfigsResponse>(await this.callApi(params, req, runtime), new DescribeCdnDomainConfigsResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeCdnDomainConfigsRequest
    * @return DescribeCdnDomainConfigsResponse
   */
  async describeCdnDomainConfigs(request: DescribeCdnDomainConfigsRequest): Promise<DescribeCdnDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnDomainConfigsWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeCdnDomainDetailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnDomainDetailResponse
   */
  async describeCdnDomainDetailWithOptions(request: DescribeCdnDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnDomainDetailResponse> {
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
      action: "DescribeCdnDomainDetail",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnDomainDetailResponse>(await this.callApi(params, req, runtime), new DescribeCdnDomainDetailResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeCdnDomainDetailRequest
    * @return DescribeCdnDomainDetailResponse
   */
  async describeCdnDomainDetail(request: DescribeCdnDomainDetailRequest): Promise<DescribeCdnDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnDomainDetailWithOptions(request, runtime);
  }

  /**
    * *   If you do not set **StartTime** or **EndTime**, the request returns the data collected in the last 24 hours. If you set both **StartTime** and **EndTime**, the request returns the data collected within the specified time range.
    * *   The log data is collected every hour.
    * *   You can call this operation up to 100 times per second per account.
    * *   You can query only logs in the last month. The start time and the current time cannot exceed 31 days.
    *
    * @param request DescribeCdnDomainLogsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnDomainLogsResponse
   */
  async describeCdnDomainLogsWithOptions(request: DescribeCdnDomainLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnDomainLogsResponse> {
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
      action: "DescribeCdnDomainLogs",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnDomainLogsResponse>(await this.callApi(params, req, runtime), new DescribeCdnDomainLogsResponse({}));
  }

  /**
    * *   If you do not set **StartTime** or **EndTime**, the request returns the data collected in the last 24 hours. If you set both **StartTime** and **EndTime**, the request returns the data collected within the specified time range.
    * *   The log data is collected every hour.
    * *   You can call this operation up to 100 times per second per account.
    * *   You can query only logs in the last month. The start time and the current time cannot exceed 31 days.
    *
    * @param request DescribeCdnDomainLogsRequest
    * @return DescribeCdnDomainLogsResponse
   */
  async describeCdnDomainLogs(request: DescribeCdnDomainLogsRequest): Promise<DescribeCdnDomainLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnDomainLogsWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeCdnDomainStagingConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnDomainStagingConfigResponse
   */
  async describeCdnDomainStagingConfigWithOptions(request: DescribeCdnDomainStagingConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnDomainStagingConfigResponse> {
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
      action: "DescribeCdnDomainStagingConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnDomainStagingConfigResponse>(await this.callApi(params, req, runtime), new DescribeCdnDomainStagingConfigResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeCdnDomainStagingConfigRequest
    * @return DescribeCdnDomainStagingConfigResponse
   */
  async describeCdnDomainStagingConfig(request: DescribeCdnDomainStagingConfigRequest): Promise<DescribeCdnDomainStagingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnDomainStagingConfigWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeCdnHttpsDomainListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnHttpsDomainListResponse
   */
  async describeCdnHttpsDomainListWithOptions(request: DescribeCdnHttpsDomainListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnHttpsDomainListResponse> {
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
      action: "DescribeCdnHttpsDomainList",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnHttpsDomainListResponse>(await this.callApi(params, req, runtime), new DescribeCdnHttpsDomainListResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeCdnHttpsDomainListRequest
    * @return DescribeCdnHttpsDomainListResponse
   */
  async describeCdnHttpsDomainList(request: DescribeCdnHttpsDomainListRequest): Promise<DescribeCdnHttpsDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnHttpsDomainListWithOptions(request, runtime);
  }

  async describeCdnOrderCommodityCodeWithOptions(request: DescribeCdnOrderCommodityCodeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnOrderCommodityCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
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
      action: "DescribeCdnOrderCommodityCode",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnOrderCommodityCodeResponse>(await this.callApi(params, req, runtime), new DescribeCdnOrderCommodityCodeResponse({}));
  }

  async describeCdnOrderCommodityCode(request: DescribeCdnOrderCommodityCodeRequest): Promise<DescribeCdnOrderCommodityCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnOrderCommodityCodeWithOptions(request, runtime);
  }

  /**
    * *   The lists of ISPs and regions that are supported by Alibaba Cloud CDN are updated and published on the Alibaba Cloud International site.
    * *   You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeCdnRegionAndIspRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnRegionAndIspResponse
   */
  async describeCdnRegionAndIspWithOptions(request: DescribeCdnRegionAndIspRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnRegionAndIspResponse> {
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
      action: "DescribeCdnRegionAndIsp",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnRegionAndIspResponse>(await this.callApi(params, req, runtime), new DescribeCdnRegionAndIspResponse({}));
  }

  /**
    * *   The lists of ISPs and regions that are supported by Alibaba Cloud CDN are updated and published on the Alibaba Cloud International site.
    * *   You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeCdnRegionAndIspRequest
    * @return DescribeCdnRegionAndIspResponse
   */
  async describeCdnRegionAndIsp(request: DescribeCdnRegionAndIspRequest): Promise<DescribeCdnRegionAndIspResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnRegionAndIspWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to three times per second per account.
    *
    * @param request DescribeCdnReportRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnReportResponse
   */
  async describeCdnReportWithOptions(request: DescribeCdnReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnReportResponse> {
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
      action: "DescribeCdnReport",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnReportResponse>(await this.callApi(params, req, runtime), new DescribeCdnReportResponse({}));
  }

  /**
    * > You can call this operation up to three times per second per account.
    *
    * @param request DescribeCdnReportRequest
    * @return DescribeCdnReportResponse
   */
  async describeCdnReport(request: DescribeCdnReportRequest): Promise<DescribeCdnReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnReportWithOptions(request, runtime);
  }

  /**
    * *   This operation queries the metadata of all operations reports. The statistics in the reports are not returned.
    * *   You can call this operation up to three times per second per account.
    *
    * @param request DescribeCdnReportListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnReportListResponse
   */
  async describeCdnReportListWithOptions(request: DescribeCdnReportListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnReportListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCdnReportList",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnReportListResponse>(await this.callApi(params, req, runtime), new DescribeCdnReportListResponse({}));
  }

  /**
    * *   This operation queries the metadata of all operations reports. The statistics in the reports are not returned.
    * *   You can call this operation up to three times per second per account.
    *
    * @param request DescribeCdnReportListRequest
    * @return DescribeCdnReportListResponse
   */
  async describeCdnReportList(request: DescribeCdnReportListRequest): Promise<DescribeCdnReportListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnReportListWithOptions(request, runtime);
  }

  /**
    * >  You can call this operation up to 20 times per second.
    *
    * @param request DescribeCdnSMCertificateDetailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnSMCertificateDetailResponse
   */
  async describeCdnSMCertificateDetailWithOptions(request: DescribeCdnSMCertificateDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnSMCertificateDetailResponse> {
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
      action: "DescribeCdnSMCertificateDetail",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnSMCertificateDetailResponse>(await this.callApi(params, req, runtime), new DescribeCdnSMCertificateDetailResponse({}));
  }

  /**
    * >  You can call this operation up to 20 times per second.
    *
    * @param request DescribeCdnSMCertificateDetailRequest
    * @return DescribeCdnSMCertificateDetailResponse
   */
  async describeCdnSMCertificateDetail(request: DescribeCdnSMCertificateDetailRequest): Promise<DescribeCdnSMCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnSMCertificateDetailWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeCdnSMCertificateListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnSMCertificateListResponse
   */
  async describeCdnSMCertificateListWithOptions(request: DescribeCdnSMCertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnSMCertificateListResponse> {
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
      action: "DescribeCdnSMCertificateList",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnSMCertificateListResponse>(await this.callApi(params, req, runtime), new DescribeCdnSMCertificateListResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeCdnSMCertificateListRequest
    * @return DescribeCdnSMCertificateListResponse
   */
  async describeCdnSMCertificateList(request: DescribeCdnSMCertificateListRequest): Promise<DescribeCdnSMCertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnSMCertificateListWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeCdnServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnServiceResponse
   */
  async describeCdnServiceWithOptions(request: DescribeCdnServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnServiceResponse> {
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
      action: "DescribeCdnService",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnServiceResponse>(await this.callApi(params, req, runtime), new DescribeCdnServiceResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeCdnServiceRequest
    * @return DescribeCdnServiceResponse
   */
  async describeCdnService(request: DescribeCdnServiceRequest): Promise<DescribeCdnServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnServiceWithOptions(request, runtime);
  }

  /**
    * {"RequestId":"3250A51D-C11D-46BA-B6B3-95348EEDE652","Description":"Successful","Content":{"data":\\[{"subId":5,"reportId":\\[1,2,3],"createTime":"2020-09-25T09:39:33Z","domains"\\["www.example.com","www.example.com"],"effectiveFrom":"2020-09-17T00:00:00Z","effectiveEnd":"2020-11-17T00:00:00Z","status":"enable"}]}}
    *
    * @param request DescribeCdnSubListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnSubListResponse
   */
  async describeCdnSubListWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeCdnSubListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeCdnSubList",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnSubListResponse>(await this.callApi(params, req, runtime), new DescribeCdnSubListResponse({}));
  }

  /**
    * {"RequestId":"3250A51D-C11D-46BA-B6B3-95348EEDE652","Description":"Successful","Content":{"data":\\[{"subId":5,"reportId":\\[1,2,3],"createTime":"2020-09-25T09:39:33Z","domains"\\["www.example.com","www.example.com"],"effectiveFrom":"2020-09-17T00:00:00Z","effectiveEnd":"2020-11-17T00:00:00Z","status":"enable"}]}}
    *
    * @return DescribeCdnSubListResponse
   */
  async describeCdnSubList(): Promise<DescribeCdnSubListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnSubListWithOptions(runtime);
  }

  /**
    * *   You can query billing history up to the last one month.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeCdnUserBillHistoryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnUserBillHistoryResponse
   */
  async describeCdnUserBillHistoryWithOptions(request: DescribeCdnUserBillHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnUserBillHistoryResponse> {
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
      action: "DescribeCdnUserBillHistory",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnUserBillHistoryResponse>(await this.callApi(params, req, runtime), new DescribeCdnUserBillHistoryResponse({}));
  }

  /**
    * *   You can query billing history up to the last one month.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeCdnUserBillHistoryRequest
    * @return DescribeCdnUserBillHistoryResponse
   */
  async describeCdnUserBillHistory(request: DescribeCdnUserBillHistoryRequest): Promise<DescribeCdnUserBillHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnUserBillHistoryWithOptions(request, runtime);
  }

  /**
    * You can call this operation to estimate resource usage of the current month based on the metering method that is specified on the first day of the current month. You can call this operation to estimate resource usage only of the current month within your Alibaba Cloud account. The time range used for the estimation starts at 00:00 on the first day of the current month and ends 2 hours earlier than the current time.
    * *   Pay by monthly 95th percentile: The top 5% values between the start time and end time are excluded. The estimated value is the highest value among the remaining values.
    * *   Pay by average daily peak bandwidth per month: Estimated value = Sum of daily peak bandwidth values/Number of days. The current day is excluded.
    * *   Pay by 4th peak bandwidth per month: The estimated value is the 4th peak bandwidth value between the start time and end time. If the time range is less than four days, the estimated value is 0.
    * *   Pay by average daily 95th percentile bandwidth per month: Estimated value = Sum of daily 95th percentile bandwidth values/Number of days. The current day is excluded.
    * *   Pay by 95th percentile bandwidth with 50% off from 00:00 to 08:00: The top 5% values between the start time and end time are excluded. The estimated value is the highest value among the remaining values.
    * > You can call this operation only once per second per account.
    *
    * @param request DescribeCdnUserBillPredictionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnUserBillPredictionResponse
   */
  async describeCdnUserBillPredictionWithOptions(request: DescribeCdnUserBillPredictionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnUserBillPredictionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.area)) {
      query["Area"] = request.area;
    }

    if (!Util.isUnset(request.dimension)) {
      query["Dimension"] = request.dimension;
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
      action: "DescribeCdnUserBillPrediction",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnUserBillPredictionResponse>(await this.callApi(params, req, runtime), new DescribeCdnUserBillPredictionResponse({}));
  }

  /**
    * You can call this operation to estimate resource usage of the current month based on the metering method that is specified on the first day of the current month. You can call this operation to estimate resource usage only of the current month within your Alibaba Cloud account. The time range used for the estimation starts at 00:00 on the first day of the current month and ends 2 hours earlier than the current time.
    * *   Pay by monthly 95th percentile: The top 5% values between the start time and end time are excluded. The estimated value is the highest value among the remaining values.
    * *   Pay by average daily peak bandwidth per month: Estimated value = Sum of daily peak bandwidth values/Number of days. The current day is excluded.
    * *   Pay by 4th peak bandwidth per month: The estimated value is the 4th peak bandwidth value between the start time and end time. If the time range is less than four days, the estimated value is 0.
    * *   Pay by average daily 95th percentile bandwidth per month: Estimated value = Sum of daily 95th percentile bandwidth values/Number of days. The current day is excluded.
    * *   Pay by 95th percentile bandwidth with 50% off from 00:00 to 08:00: The top 5% values between the start time and end time are excluded. The estimated value is the highest value among the remaining values.
    * > You can call this operation only once per second per account.
    *
    * @param request DescribeCdnUserBillPredictionRequest
    * @return DescribeCdnUserBillPredictionResponse
   */
  async describeCdnUserBillPrediction(request: DescribeCdnUserBillPredictionRequest): Promise<DescribeCdnUserBillPredictionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnUserBillPredictionWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeCdnUserBillTypeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnUserBillTypeResponse
   */
  async describeCdnUserBillTypeWithOptions(request: DescribeCdnUserBillTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnUserBillTypeResponse> {
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
      action: "DescribeCdnUserBillType",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnUserBillTypeResponse>(await this.callApi(params, req, runtime), new DescribeCdnUserBillTypeResponse({}));
  }

  /**
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeCdnUserBillTypeRequest
    * @return DescribeCdnUserBillTypeResponse
   */
  async describeCdnUserBillType(request: DescribeCdnUserBillTypeRequest): Promise<DescribeCdnUserBillTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnUserBillTypeWithOptions(request, runtime);
  }

  /**
    * The value of the configuration. Valid values:
    * *   **cc_rule**: HTTP flood protection rules
    * *   **ddos_dispatch**: integration with Anti-DDoS
    * *   **edge_safe**: application security settings on edge nodes
    * *   **blocked_regions**: blocked regions
    * *   **http\\_acl\\_policy**: access control list (ACL) rules
    * *   **bot_manager**: bot traffic management
    * *   **ip_reputation**: IP reputation library
    *
    * @param request DescribeCdnUserConfigsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnUserConfigsResponse
   */
  async describeCdnUserConfigsWithOptions(request: DescribeCdnUserConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnUserConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCdnUserConfigs",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnUserConfigsResponse>(await this.callApi(params, req, runtime), new DescribeCdnUserConfigsResponse({}));
  }

  /**
    * The value of the configuration. Valid values:
    * *   **cc_rule**: HTTP flood protection rules
    * *   **ddos_dispatch**: integration with Anti-DDoS
    * *   **edge_safe**: application security settings on edge nodes
    * *   **blocked_regions**: blocked regions
    * *   **http\\_acl\\_policy**: access control list (ACL) rules
    * *   **bot_manager**: bot traffic management
    * *   **ip_reputation**: IP reputation library
    *
    * @param request DescribeCdnUserConfigsRequest
    * @return DescribeCdnUserConfigsResponse
   */
  async describeCdnUserConfigs(request: DescribeCdnUserConfigsRequest): Promise<DescribeCdnUserConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnUserConfigsWithOptions(request, runtime);
  }

  async describeCdnUserDomainsByFuncWithOptions(request: DescribeCdnUserDomainsByFuncRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnUserDomainsByFuncResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "DescribeCdnUserDomainsByFunc",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnUserDomainsByFuncResponse>(await this.callApi(params, req, runtime), new DescribeCdnUserDomainsByFuncResponse({}));
  }

  async describeCdnUserDomainsByFunc(request: DescribeCdnUserDomainsByFuncRequest): Promise<DescribeCdnUserDomainsByFuncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnUserDomainsByFuncWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeCdnUserQuotaRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnUserQuotaResponse
   */
  async describeCdnUserQuotaWithOptions(request: DescribeCdnUserQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnUserQuotaResponse> {
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
      action: "DescribeCdnUserQuota",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnUserQuotaResponse>(await this.callApi(params, req, runtime), new DescribeCdnUserQuotaResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeCdnUserQuotaRequest
    * @return DescribeCdnUserQuotaResponse
   */
  async describeCdnUserQuota(request: DescribeCdnUserQuotaRequest): Promise<DescribeCdnUserQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnUserQuotaWithOptions(request, runtime);
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 30.
    *
    * @param request DescribeCdnUserResourcePackageRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnUserResourcePackageResponse
   */
  async describeCdnUserResourcePackageWithOptions(request: DescribeCdnUserResourcePackageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnUserResourcePackageResponse> {
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
      action: "DescribeCdnUserResourcePackage",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnUserResourcePackageResponse>(await this.callApi(params, req, runtime), new DescribeCdnUserResourcePackageResponse({}));
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 30.
    *
    * @param request DescribeCdnUserResourcePackageRequest
    * @return DescribeCdnUserResourcePackageResponse
   */
  async describeCdnUserResourcePackage(request: DescribeCdnUserResourcePackageRequest): Promise<DescribeCdnUserResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnUserResourcePackageWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 150 times per second per account.
    *
    * @param request DescribeCdnWafDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCdnWafDomainResponse
   */
  async describeCdnWafDomainWithOptions(request: DescribeCdnWafDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnWafDomainResponse> {
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
      action: "DescribeCdnWafDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnWafDomainResponse>(await this.callApi(params, req, runtime), new DescribeCdnWafDomainResponse({}));
  }

  /**
    * > You can call this operation up to 150 times per second per account.
    *
    * @param request DescribeCdnWafDomainRequest
    * @return DescribeCdnWafDomainResponse
   */
  async describeCdnWafDomain(request: DescribeCdnWafDomainRequest): Promise<DescribeCdnWafDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnWafDomainWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation up to 100 times per second per account.
    * *   If a certificate is associated with a domain name but the certificate is not enabled, the result of this operation shows that the certificate does not exist.
    *
    * @param request DescribeCertificateInfoByIDRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCertificateInfoByIDResponse
   */
  async describeCertificateInfoByIDWithOptions(request: DescribeCertificateInfoByIDRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertificateInfoByIDResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCertificateInfoByID",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCertificateInfoByIDResponse>(await this.callApi(params, req, runtime), new DescribeCertificateInfoByIDResponse({}));
  }

  /**
    * *   You can call this operation up to 100 times per second per account.
    * *   If a certificate is associated with a domain name but the certificate is not enabled, the result of this operation shows that the certificate does not exist.
    *
    * @param request DescribeCertificateInfoByIDRequest
    * @return DescribeCertificateInfoByIDResponse
   */
  async describeCertificateInfoByID(request: DescribeCertificateInfoByIDRequest): Promise<DescribeCertificateInfoByIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertificateInfoByIDWithOptions(request, runtime);
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DescribeCustomLogConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCustomLogConfigResponse
   */
  async describeCustomLogConfigWithOptions(request: DescribeCustomLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomLogConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomLogConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomLogConfigResponse>(await this.callApi(params, req, runtime), new DescribeCustomLogConfigResponse({}));
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DescribeCustomLogConfigRequest
    * @return DescribeCustomLogConfigResponse
   */
  async describeCustomLogConfig(request: DescribeCustomLogConfigRequest): Promise<DescribeCustomLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomLogConfigWithOptions(request, runtime);
  }

  /**
    * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
    *
    * @param request DescribeDomainAverageResponseTimeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainAverageResponseTimeResponse
   */
  async describeDomainAverageResponseTimeWithOptions(request: DescribeDomainAverageResponseTimeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainAverageResponseTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainType)) {
      query["DomainType"] = request.domainType;
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

    if (!Util.isUnset(request.timeMerge)) {
      query["TimeMerge"] = request.timeMerge;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainAverageResponseTime",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainAverageResponseTimeResponse>(await this.callApi(params, req, runtime), new DescribeDomainAverageResponseTimeResponse({}));
  }

  /**
    * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
    *
    * @param request DescribeDomainAverageResponseTimeRequest
    * @return DescribeDomainAverageResponseTimeResponse
   */
  async describeDomainAverageResponseTime(request: DescribeDomainAverageResponseTimeRequest): Promise<DescribeDomainAverageResponseTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainAverageResponseTimeWithOptions(request, runtime);
  }

  /**
    * The bandwidth value in the Chinese mainland. When the bandwidth data is queried by ISP, this parameter is empty.
    *
    * @param request DescribeDomainBpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainBpsDataResponse
   */
  async describeDomainBpsDataWithOptions(request: DescribeDomainBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainBpsDataResponse> {
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
      action: "DescribeDomainBpsData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainBpsDataResponse({}));
  }

  /**
    * The bandwidth value in the Chinese mainland. When the bandwidth data is queried by ISP, this parameter is empty.
    *
    * @param request DescribeDomainBpsDataRequest
    * @return DescribeDomainBpsDataResponse
   */
  async describeDomainBpsData(request: DescribeDomainBpsDataRequest): Promise<DescribeDomainBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainBpsDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 20 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainBpsDataByLayerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainBpsDataByLayerResponse
   */
  async describeDomainBpsDataByLayerWithOptions(request: DescribeDomainBpsDataByLayerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainBpsDataByLayerResponse> {
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
      action: "DescribeDomainBpsDataByLayer",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainBpsDataByLayerResponse>(await this.callApi(params, req, runtime), new DescribeDomainBpsDataByLayerResponse({}));
  }

  /**
    * * You can call this operation up to 20 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainBpsDataByLayerRequest
    * @return DescribeDomainBpsDataByLayerResponse
   */
  async describeDomainBpsDataByLayer(request: DescribeDomainBpsDataByLayerRequest): Promise<DescribeDomainBpsDataByLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainBpsDataByLayerWithOptions(request, runtime);
  }

  /**
    * *   The bandwidth is measured in bit/s.
    * *   You can specify only one accelerated domain name in each request.
    * *   The data is collected every 5 minutes.
    * *   You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDomainBpsDataByTimeStampRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainBpsDataByTimeStampResponse
   */
  async describeDomainBpsDataByTimeStampWithOptions(request: DescribeDomainBpsDataByTimeStampRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainBpsDataByTimeStampResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ispNames)) {
      query["IspNames"] = request.ispNames;
    }

    if (!Util.isUnset(request.locationNames)) {
      query["LocationNames"] = request.locationNames;
    }

    if (!Util.isUnset(request.timePoint)) {
      query["TimePoint"] = request.timePoint;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainBpsDataByTimeStamp",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainBpsDataByTimeStampResponse>(await this.callApi(params, req, runtime), new DescribeDomainBpsDataByTimeStampResponse({}));
  }

  /**
    * *   The bandwidth is measured in bit/s.
    * *   You can specify only one accelerated domain name in each request.
    * *   The data is collected every 5 minutes.
    * *   You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeDomainBpsDataByTimeStampRequest
    * @return DescribeDomainBpsDataByTimeStampResponse
   */
  async describeDomainBpsDataByTimeStamp(request: DescribeDomainBpsDataByTimeStampRequest): Promise<DescribeDomainBpsDataByTimeStampResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainBpsDataByTimeStampWithOptions(request, runtime);
  }

  /**
    * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range. You must set both parameters or leave both parameters empty.
    * *   You can specify up to 20 domain names in reach request. If you specify multiple domain names, separate them with commas (,).
    * *   You can query data collected over the last 30 days.
    * *   You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeDomainCcActivityLogRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainCcActivityLogResponse
   */
  async describeDomainCcActivityLogWithOptions(request: DescribeDomainCcActivityLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainCcActivityLogResponse> {
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
      action: "DescribeDomainCcActivityLog",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainCcActivityLogResponse>(await this.callApi(params, req, runtime), new DescribeDomainCcActivityLogResponse({}));
  }

  /**
    * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range. You must set both parameters or leave both parameters empty.
    * *   You can specify up to 20 domain names in reach request. If you specify multiple domain names, separate them with commas (,).
    * *   You can query data collected over the last 30 days.
    * *   You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeDomainCcActivityLogRequest
    * @return DescribeDomainCcActivityLogResponse
   */
  async describeDomainCcActivityLog(request: DescribeDomainCcActivityLogRequest): Promise<DescribeDomainCcActivityLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainCcActivityLogWithOptions(request, runtime);
  }

  /**
    * The ID of the request.
    *
    * @param request DescribeDomainCertificateInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainCertificateInfoResponse
   */
  async describeDomainCertificateInfoWithOptions(request: DescribeDomainCertificateInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainCertificateInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainCertificateInfo",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainCertificateInfoResponse>(await this.callApi(params, req, runtime), new DescribeDomainCertificateInfoResponse({}));
  }

  /**
    * The ID of the request.
    *
    * @param request DescribeDomainCertificateInfoRequest
    * @return DescribeDomainCertificateInfoResponse
   */
  async describeDomainCertificateInfo(request: DescribeDomainCertificateInfoRequest): Promise<DescribeDomainCertificateInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainCertificateInfoWithOptions(request, runtime);
  }

  async describeDomainCnameWithOptions(request: DescribeDomainCnameRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainCnameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainCname",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainCnameResponse>(await this.callApi(params, req, runtime), new DescribeDomainCnameResponse({}));
  }

  async describeDomainCname(request: DescribeDomainCnameRequest): Promise<DescribeDomainCnameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainCnameWithOptions(request, runtime);
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DescribeDomainCustomLogConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainCustomLogConfigResponse
   */
  async describeDomainCustomLogConfigWithOptions(request: DescribeDomainCustomLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainCustomLogConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainCustomLogConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainCustomLogConfigResponse>(await this.callApi(params, req, runtime), new DescribeDomainCustomLogConfigResponse({}));
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DescribeDomainCustomLogConfigRequest
    * @return DescribeDomainCustomLogConfigResponse
   */
  async describeDomainCustomLogConfig(request: DescribeDomainCustomLogConfigRequest): Promise<DescribeDomainCustomLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainCustomLogConfigWithOptions(request, runtime);
  }

  /**
    * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
    *
    * @param request DescribeDomainDetailDataByLayerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainDetailDataByLayerResponse
   */
  async describeDomainDetailDataByLayerWithOptions(request: DescribeDomainDetailDataByLayerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainDetailDataByLayerResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainDetailDataByLayer",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainDetailDataByLayerResponse>(await this.callApi(params, req, runtime), new DescribeDomainDetailDataByLayerResponse({}));
  }

  /**
    * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
    *
    * @param request DescribeDomainDetailDataByLayerRequest
    * @return DescribeDomainDetailDataByLayerResponse
   */
  async describeDomainDetailDataByLayer(request: DescribeDomainDetailDataByLayerRequest): Promise<DescribeDomainDetailDataByLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainDetailDataByLayerWithOptions(request, runtime);
  }

  /**
    * The byte hit ratio of HTTPS requests.
    *
    * @param request DescribeDomainHitRateDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainHitRateDataResponse
   */
  async describeDomainHitRateDataWithOptions(request: DescribeDomainHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainHitRateDataResponse> {
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
      action: "DescribeDomainHitRateData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainHitRateDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainHitRateDataResponse({}));
  }

  /**
    * The byte hit ratio of HTTPS requests.
    *
    * @param request DescribeDomainHitRateDataRequest
    * @return DescribeDomainHitRateDataResponse
   */
  async describeDomainHitRateData(request: DescribeDomainHitRateDataRequest): Promise<DescribeDomainHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainHitRateDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainHttpCodeDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainHttpCodeDataResponse
   */
  async describeDomainHttpCodeDataWithOptions(request: DescribeDomainHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainHttpCodeDataResponse> {
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
      action: "DescribeDomainHttpCodeData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainHttpCodeDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainHttpCodeDataResponse({}));
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainHttpCodeDataRequest
    * @return DescribeDomainHttpCodeDataResponse
   */
  async describeDomainHttpCodeData(request: DescribeDomainHttpCodeDataRequest): Promise<DescribeDomainHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainHttpCodeDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 20 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * ### Time granularity
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainHttpCodeDataByLayerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainHttpCodeDataByLayerResponse
   */
  async describeDomainHttpCodeDataByLayerWithOptions(request: DescribeDomainHttpCodeDataByLayerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainHttpCodeDataByLayerResponse> {
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
      action: "DescribeDomainHttpCodeDataByLayer",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainHttpCodeDataByLayerResponse>(await this.callApi(params, req, runtime), new DescribeDomainHttpCodeDataByLayerResponse({}));
  }

  /**
    * * You can call this operation up to 20 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * ### Time granularity
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainHttpCodeDataByLayerRequest
    * @return DescribeDomainHttpCodeDataByLayerResponse
   */
  async describeDomainHttpCodeDataByLayer(request: DescribeDomainHttpCodeDataByLayerRequest): Promise<DescribeDomainHttpCodeDataByLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainHttpCodeDataByLayerWithOptions(request, runtime);
  }

  /**
    * The end of the time range that was queried.
    *
    * @param request DescribeDomainISPDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainISPDataResponse
   */
  async describeDomainISPDataWithOptions(request: DescribeDomainISPDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainISPDataResponse> {
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
      action: "DescribeDomainISPData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainISPDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainISPDataResponse({}));
  }

  /**
    * The end of the time range that was queried.
    *
    * @param request DescribeDomainISPDataRequest
    * @return DescribeDomainISPDataResponse
   */
  async describeDomainISPData(request: DescribeDomainISPDataRequest): Promise<DescribeDomainISPDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainISPDataWithOptions(request, runtime);
  }

  /**
    * *   The unit of the bandwidth is bit/s.
    * *   The time granularity of the queried data is 5 minutes.
    * *   You can query data in the last 90 days.
    * *   You can specify the StartTime and EndTime parameters, or the TimePoint and Cycle parameters to query the 95th percentile bandwidth data. If you specify the StartTime and EndTime parameters and the time range that is specified by these parameters is less than or equal to 24 hours, the 95th percentile bandwidth data on the day of the start time is returned. If the time range that is specified by these parameters is more than 24 hours, the 95th percentile bandwidth data in the month of the start time is returned. If you specify the TimePoint and Cycle parameters, the 95th percentile bandwidth data of the cycle is returned. If you do not specify parameters as previously mentioned, the 95th percentile bandwidth data in the last 24 hours is returned.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDomainMax95BpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainMax95BpsDataResponse
   */
  async describeDomainMax95BpsDataWithOptions(request: DescribeDomainMax95BpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainMax95BpsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cycle)) {
      query["Cycle"] = request.cycle;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timePoint)) {
      query["TimePoint"] = request.timePoint;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainMax95BpsData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainMax95BpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainMax95BpsDataResponse({}));
  }

  /**
    * *   The unit of the bandwidth is bit/s.
    * *   The time granularity of the queried data is 5 minutes.
    * *   You can query data in the last 90 days.
    * *   You can specify the StartTime and EndTime parameters, or the TimePoint and Cycle parameters to query the 95th percentile bandwidth data. If you specify the StartTime and EndTime parameters and the time range that is specified by these parameters is less than or equal to 24 hours, the 95th percentile bandwidth data on the day of the start time is returned. If the time range that is specified by these parameters is more than 24 hours, the 95th percentile bandwidth data in the month of the start time is returned. If you specify the TimePoint and Cycle parameters, the 95th percentile bandwidth data of the cycle is returned. If you do not specify parameters as previously mentioned, the 95th percentile bandwidth data in the last 24 hours is returned.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDomainMax95BpsDataRequest
    * @return DescribeDomainMax95BpsDataResponse
   */
  async describeDomainMax95BpsData(request: DescribeDomainMax95BpsDataRequest): Promise<DescribeDomainMax95BpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainMax95BpsDataWithOptions(request, runtime);
  }

  /**
    * The end of the time range that was queried.
    *
    * @param request DescribeDomainMultiUsageDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainMultiUsageDataResponse
   */
  async describeDomainMultiUsageDataWithOptions(request: DescribeDomainMultiUsageDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainMultiUsageDataResponse> {
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
      action: "DescribeDomainMultiUsageData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainMultiUsageDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainMultiUsageDataResponse({}));
  }

  /**
    * The end of the time range that was queried.
    *
    * @param request DescribeDomainMultiUsageDataRequest
    * @return DescribeDomainMultiUsageDataResponse
   */
  async describeDomainMultiUsageData(request: DescribeDomainMultiUsageDataRequest): Promise<DescribeDomainMultiUsageDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainMultiUsageDataWithOptions(request, runtime);
  }

  /**
    * *   This operation is available only to users that are on the whitelist. If the daily peak bandwidth value of your workloads reaches 10 Gbit/s, you can [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex) to apply to be included in the whitelist.
    * *   You can call this API operation up to 6,000 times per second per account.
    * *   Data collection by directory is available only to specified domain names within your Alibaba Cloud account. It cannot be enabled for all domain names within your Alibaba Cloud account.
    * *   The average size of the files that belong to the domain name must be larger than 1 MB.
    * *   The number of directories specified for a single domain name cannot exceed 100. If the number of directories exceeds 100, the data accuracy reduces.
    * *   If you do not set StartTime or EndTime, data collected within the last 24 hours is queried. If you set both StartTime and EndTime, data within the specified time range is queried.
    * *   You can query data collected within the last 30 days.
    *
    * @param request DescribeDomainPathDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainPathDataResponse
   */
  async describeDomainPathDataWithOptions(request: DescribeDomainPathDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainPathDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainPathData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainPathDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainPathDataResponse({}));
  }

  /**
    * *   This operation is available only to users that are on the whitelist. If the daily peak bandwidth value of your workloads reaches 10 Gbit/s, you can [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex) to apply to be included in the whitelist.
    * *   You can call this API operation up to 6,000 times per second per account.
    * *   Data collection by directory is available only to specified domain names within your Alibaba Cloud account. It cannot be enabled for all domain names within your Alibaba Cloud account.
    * *   The average size of the files that belong to the domain name must be larger than 1 MB.
    * *   The number of directories specified for a single domain name cannot exceed 100. If the number of directories exceeds 100, the data accuracy reduces.
    * *   If you do not set StartTime or EndTime, data collected within the last 24 hours is queried. If you set both StartTime and EndTime, data within the specified time range is queried.
    * *   You can query data collected within the last 30 days.
    *
    * @param request DescribeDomainPathDataRequest
    * @return DescribeDomainPathDataResponse
   */
  async describeDomainPathData(request: DescribeDomainPathDataRequest): Promise<DescribeDomainPathDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainPathDataWithOptions(request, runtime);
  }

  /**
    * The end of the time range during which data was queried.
    *
    * @param request DescribeDomainPvDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainPvDataResponse
   */
  async describeDomainPvDataWithOptions(request: DescribeDomainPvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainPvDataResponse> {
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
      action: "DescribeDomainPvData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainPvDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainPvDataResponse({}));
  }

  /**
    * The end of the time range during which data was queried.
    *
    * @param request DescribeDomainPvDataRequest
    * @return DescribeDomainPvDataResponse
   */
  async describeDomainPvData(request: DescribeDomainPvDataRequest): Promise<DescribeDomainPvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainPvDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainQpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainQpsDataResponse
   */
  async describeDomainQpsDataWithOptions(request: DescribeDomainQpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainQpsDataResponse> {
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
      action: "DescribeDomainQpsData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainQpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainQpsDataResponse({}));
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainQpsDataRequest
    * @return DescribeDomainQpsDataResponse
   */
  async describeDomainQpsData(request: DescribeDomainQpsDataRequest): Promise<DescribeDomainQpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainQpsDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 20 times per second per user.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter varies with the maximum time range per query. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainQpsDataByLayerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainQpsDataByLayerResponse
   */
  async describeDomainQpsDataByLayerWithOptions(request: DescribeDomainQpsDataByLayerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainQpsDataByLayerResponse> {
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
      action: "DescribeDomainQpsDataByLayer",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainQpsDataByLayerResponse>(await this.callApi(params, req, runtime), new DescribeDomainQpsDataByLayerResponse({}));
  }

  /**
    * * You can call this operation up to 20 times per second per user.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter varies with the maximum time range per query. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainQpsDataByLayerRequest
    * @return DescribeDomainQpsDataByLayerResponse
   */
  async describeDomainQpsDataByLayer(request: DescribeDomainQpsDataByLayerRequest): Promise<DescribeDomainQpsDataByLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainQpsDataByLayerWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity** The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |1 minute|1 hour|7 days|5 minutes|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDomainRealTimeBpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainRealTimeBpsDataResponse
   */
  async describeDomainRealTimeBpsDataWithOptions(request: DescribeDomainRealTimeBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeBpsDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainRealTimeBpsData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainRealTimeBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainRealTimeBpsDataResponse({}));
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity** The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |1 minute|1 hour|7 days|5 minutes|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDomainRealTimeBpsDataRequest
    * @return DescribeDomainRealTimeBpsDataResponse
   */
  async describeDomainRealTimeBpsData(request: DescribeDomainRealTimeBpsDataRequest): Promise<DescribeDomainRealTimeBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeBpsDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 10 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
    * * The network traffic destined for different domain names may be redirected to the same origin server. Therefore, the byte hit ratios may be inaccurate. The accuracy of query results is based on the actual configurations.
    * **Time granularity**
    * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |1 minute|1 hour|7 days|5 minutes|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDomainRealTimeByteHitRateDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainRealTimeByteHitRateDataResponse
   */
  async describeDomainRealTimeByteHitRateDataWithOptions(request: DescribeDomainRealTimeByteHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeByteHitRateDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainRealTimeByteHitRateData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainRealTimeByteHitRateDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainRealTimeByteHitRateDataResponse({}));
  }

  /**
    * * You can call this operation up to 10 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
    * * The network traffic destined for different domain names may be redirected to the same origin server. Therefore, the byte hit ratios may be inaccurate. The accuracy of query results is based on the actual configurations.
    * **Time granularity**
    * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |1 minute|1 hour|7 days|5 minutes|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDomainRealTimeByteHitRateDataRequest
    * @return DescribeDomainRealTimeByteHitRateDataResponse
   */
  async describeDomainRealTimeByteHitRateData(request: DescribeDomainRealTimeByteHitRateDataRequest): Promise<DescribeDomainRealTimeByteHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeByteHitRateDataWithOptions(request, runtime);
  }

  /**
    * The beginning of the time range to query.
    * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2019-11-30T05:33:00Z.
    *
    * @param request DescribeDomainRealTimeDetailDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainRealTimeDetailDataResponse
   */
  async describeDomainRealTimeDetailDataWithOptions(request: DescribeDomainRealTimeDetailDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeDetailDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainRealTimeDetailData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainRealTimeDetailDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainRealTimeDetailDataResponse({}));
  }

  /**
    * The beginning of the time range to query.
    * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2019-11-30T05:33:00Z.
    *
    * @param request DescribeDomainRealTimeDetailDataRequest
    * @return DescribeDomainRealTimeDetailDataResponse
   */
  async describeDomainRealTimeDetailData(request: DescribeDomainRealTimeDetailDataRequest): Promise<DescribeDomainRealTimeDetailDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeDetailDataWithOptions(request, runtime);
  }

  /**
    * The total number of entries.
    *
    * @param request DescribeDomainRealTimeHttpCodeDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainRealTimeHttpCodeDataResponse
   */
  async describeDomainRealTimeHttpCodeDataWithOptions(request: DescribeDomainRealTimeHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeHttpCodeDataResponse> {
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
      action: "DescribeDomainRealTimeHttpCodeData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainRealTimeHttpCodeDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainRealTimeHttpCodeDataResponse({}));
  }

  /**
    * The total number of entries.
    *
    * @param request DescribeDomainRealTimeHttpCodeDataRequest
    * @return DescribeDomainRealTimeHttpCodeDataResponse
   */
  async describeDomainRealTimeHttpCodeData(request: DescribeDomainRealTimeHttpCodeDataRequest): Promise<DescribeDomainRealTimeHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeHttpCodeDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 10 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |1 minute|1 hour|7 days|5 minutes|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDomainRealTimeQpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainRealTimeQpsDataResponse
   */
  async describeDomainRealTimeQpsDataWithOptions(request: DescribeDomainRealTimeQpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeQpsDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainRealTimeQpsData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainRealTimeQpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainRealTimeQpsDataResponse({}));
  }

  /**
    * * You can call this operation up to 10 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |1 minute|1 hour|7 days|5 minutes|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDomainRealTimeQpsDataRequest
    * @return DescribeDomainRealTimeQpsDataResponse
   */
  async describeDomainRealTimeQpsData(request: DescribeDomainRealTimeQpsDataRequest): Promise<DescribeDomainRealTimeQpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeQpsDataWithOptions(request, runtime);
  }

  /**
    * The ID of the request.
    *
    * @param request DescribeDomainRealTimeReqHitRateDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainRealTimeReqHitRateDataResponse
   */
  async describeDomainRealTimeReqHitRateDataWithOptions(request: DescribeDomainRealTimeReqHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeReqHitRateDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainRealTimeReqHitRateData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainRealTimeReqHitRateDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainRealTimeReqHitRateDataResponse({}));
  }

  /**
    * The ID of the request.
    *
    * @param request DescribeDomainRealTimeReqHitRateDataRequest
    * @return DescribeDomainRealTimeReqHitRateDataResponse
   */
  async describeDomainRealTimeReqHitRateData(request: DescribeDomainRealTimeReqHitRateDataRequest): Promise<DescribeDomainRealTimeReqHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeReqHitRateDataWithOptions(request, runtime);
  }

  /**
    * The timestamp of the returned data.
    *
    * @param request DescribeDomainRealTimeSrcBpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainRealTimeSrcBpsDataResponse
   */
  async describeDomainRealTimeSrcBpsDataWithOptions(request: DescribeDomainRealTimeSrcBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeSrcBpsDataResponse> {
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
      action: "DescribeDomainRealTimeSrcBpsData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainRealTimeSrcBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainRealTimeSrcBpsDataResponse({}));
  }

  /**
    * The timestamp of the returned data.
    *
    * @param request DescribeDomainRealTimeSrcBpsDataRequest
    * @return DescribeDomainRealTimeSrcBpsDataResponse
   */
  async describeDomainRealTimeSrcBpsData(request: DescribeDomainRealTimeSrcBpsDataRequest): Promise<DescribeDomainRealTimeSrcBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeSrcBpsDataWithOptions(request, runtime);
  }

  /**
    * The count of each HTTP status code.
    *
    * @param request DescribeDomainRealTimeSrcHttpCodeDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainRealTimeSrcHttpCodeDataResponse
   */
  async describeDomainRealTimeSrcHttpCodeDataWithOptions(request: DescribeDomainRealTimeSrcHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeSrcHttpCodeDataResponse> {
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
      action: "DescribeDomainRealTimeSrcHttpCodeData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainRealTimeSrcHttpCodeDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainRealTimeSrcHttpCodeDataResponse({}));
  }

  /**
    * The count of each HTTP status code.
    *
    * @param request DescribeDomainRealTimeSrcHttpCodeDataRequest
    * @return DescribeDomainRealTimeSrcHttpCodeDataResponse
   */
  async describeDomainRealTimeSrcHttpCodeData(request: DescribeDomainRealTimeSrcHttpCodeDataRequest): Promise<DescribeDomainRealTimeSrcHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeSrcHttpCodeDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 10 times per second per account.
    * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last hour by default. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |1 minute|1 hour|7 days|5 minutes|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDomainRealTimeSrcTrafficDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainRealTimeSrcTrafficDataResponse
   */
  async describeDomainRealTimeSrcTrafficDataWithOptions(request: DescribeDomainRealTimeSrcTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeSrcTrafficDataResponse> {
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
      action: "DescribeDomainRealTimeSrcTrafficData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainRealTimeSrcTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainRealTimeSrcTrafficDataResponse({}));
  }

  /**
    * * You can call this operation up to 10 times per second per account.
    * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last hour by default. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |1 minute|1 hour|7 days|5 minutes|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDomainRealTimeSrcTrafficDataRequest
    * @return DescribeDomainRealTimeSrcTrafficDataResponse
   */
  async describeDomainRealTimeSrcTrafficData(request: DescribeDomainRealTimeSrcTrafficDataRequest): Promise<DescribeDomainRealTimeSrcTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeSrcTrafficDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 50 times per second per account.
    * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |1 minute|1 hour|7 days|5 minutes|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDomainRealTimeTrafficDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainRealTimeTrafficDataResponse
   */
  async describeDomainRealTimeTrafficDataWithOptions(request: DescribeDomainRealTimeTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealTimeTrafficDataResponse> {
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
      action: "DescribeDomainRealTimeTrafficData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainRealTimeTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainRealTimeTrafficDataResponse({}));
  }

  /**
    * * You can call this operation up to 50 times per second per account.
    * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |1 minute|1 hour|7 days|5 minutes|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    *
    * @param request DescribeDomainRealTimeTrafficDataRequest
    * @return DescribeDomainRealTimeTrafficDataResponse
   */
  async describeDomainRealTimeTrafficData(request: DescribeDomainRealTimeTrafficDataRequest): Promise<DescribeDomainRealTimeTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealTimeTrafficDataWithOptions(request, runtime);
  }

  /**
    * The name of the Log Service project that is used for real-time log delivery.
    *
    * @param request DescribeDomainRealtimeLogDeliveryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainRealtimeLogDeliveryResponse
   */
  async describeDomainRealtimeLogDeliveryWithOptions(request: DescribeDomainRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainRealtimeLogDelivery",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new DescribeDomainRealtimeLogDeliveryResponse({}));
  }

  /**
    * The name of the Log Service project that is used for real-time log delivery.
    *
    * @param request DescribeDomainRealtimeLogDeliveryRequest
    * @return DescribeDomainRealtimeLogDeliveryResponse
   */
  async describeDomainRealtimeLogDelivery(request: DescribeDomainRealtimeLogDeliveryRequest): Promise<DescribeDomainRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
    * The beginning of the time range that was queried.
    *
    * @param request DescribeDomainRegionDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainRegionDataResponse
   */
  async describeDomainRegionDataWithOptions(request: DescribeDomainRegionDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRegionDataResponse> {
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
      action: "DescribeDomainRegionData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainRegionDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainRegionDataResponse({}));
  }

  /**
    * The beginning of the time range that was queried.
    *
    * @param request DescribeDomainRegionDataRequest
    * @return DescribeDomainRegionDataResponse
   */
  async describeDomainRegionData(request: DescribeDomainRegionDataRequest): Promise<DescribeDomainRegionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRegionDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainReqHitRateDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainReqHitRateDataResponse
   */
  async describeDomainReqHitRateDataWithOptions(request: DescribeDomainReqHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainReqHitRateDataResponse> {
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
      action: "DescribeDomainReqHitRateData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainReqHitRateDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainReqHitRateDataResponse({}));
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainReqHitRateDataRequest
    * @return DescribeDomainReqHitRateDataResponse
   */
  async describeDomainReqHitRateData(request: DescribeDomainReqHitRateDataRequest): Promise<DescribeDomainReqHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainReqHitRateDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the time range to query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainSrcBpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainSrcBpsDataResponse
   */
  async describeDomainSrcBpsDataWithOptions(request: DescribeDomainSrcBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainSrcBpsDataResponse> {
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
      action: "DescribeDomainSrcBpsData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainSrcBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainSrcBpsDataResponse({}));
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the time range to query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainSrcBpsDataRequest
    * @return DescribeDomainSrcBpsDataResponse
   */
  async describeDomainSrcBpsData(request: DescribeDomainSrcBpsDataRequest): Promise<DescribeDomainSrcBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainSrcBpsDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter varies with the maximum time range per query. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainSrcHttpCodeDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainSrcHttpCodeDataResponse
   */
  async describeDomainSrcHttpCodeDataWithOptions(request: DescribeDomainSrcHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainSrcHttpCodeDataResponse> {
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
      action: "DescribeDomainSrcHttpCodeData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainSrcHttpCodeDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainSrcHttpCodeDataResponse({}));
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter varies with the maximum time range per query. The following table describes the time period within which historical data is available and the data delay.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainSrcHttpCodeDataRequest
    * @return DescribeDomainSrcHttpCodeDataResponse
   */
  async describeDomainSrcHttpCodeData(request: DescribeDomainSrcHttpCodeDataRequest): Promise<DescribeDomainSrcHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainSrcHttpCodeDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * ### Time granularity
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainSrcQpsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainSrcQpsDataResponse
   */
  async describeDomainSrcQpsDataWithOptions(request: DescribeDomainSrcQpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainSrcQpsDataResponse> {
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
      action: "DescribeDomainSrcQpsData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainSrcQpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainSrcQpsDataResponse({}));
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * ### Time granularity
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainSrcQpsDataRequest
    * @return DescribeDomainSrcQpsDataResponse
   */
  async describeDomainSrcQpsData(request: DescribeDomainSrcQpsDataRequest): Promise<DescribeDomainSrcQpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainSrcQpsDataWithOptions(request, runtime);
  }

  /**
    * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://www.alibabacloud.com/help/en/alibaba-cloud-cdn/latest/customize-an-operations-report-template-and-create-a-tracking-task) feature to for data analysis.  
    * > - The data is collected at an interval of 5 minutes.
    * - You can call this operation up to 10 times per second per account.
    *
    * @param request DescribeDomainSrcTopUrlVisitRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainSrcTopUrlVisitResponse
   */
  async describeDomainSrcTopUrlVisitWithOptions(request: DescribeDomainSrcTopUrlVisitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainSrcTopUrlVisitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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
      action: "DescribeDomainSrcTopUrlVisit",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainSrcTopUrlVisitResponse>(await this.callApi(params, req, runtime), new DescribeDomainSrcTopUrlVisitResponse({}));
  }

  /**
    * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://www.alibabacloud.com/help/en/alibaba-cloud-cdn/latest/customize-an-operations-report-template-and-create-a-tracking-task) feature to for data analysis.  
    * > - The data is collected at an interval of 5 minutes.
    * - You can call this operation up to 10 times per second per account.
    *
    * @param request DescribeDomainSrcTopUrlVisitRequest
    * @return DescribeDomainSrcTopUrlVisitResponse
   */
  async describeDomainSrcTopUrlVisit(request: DescribeDomainSrcTopUrlVisitRequest): Promise<DescribeDomainSrcTopUrlVisitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainSrcTopUrlVisitWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainSrcTrafficDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainSrcTrafficDataResponse
   */
  async describeDomainSrcTrafficDataWithOptions(request: DescribeDomainSrcTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainSrcTrafficDataResponse> {
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
      action: "DescribeDomainSrcTrafficData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainSrcTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainSrcTrafficDataResponse({}));
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainSrcTrafficDataRequest
    * @return DescribeDomainSrcTrafficDataResponse
   */
  async describeDomainSrcTrafficData(request: DescribeDomainSrcTrafficDataRequest): Promise<DescribeDomainSrcTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainSrcTrafficDataWithOptions(request, runtime);
  }

  /**
    * The name of the region. Separate multiple region names with commas (,).
    * You can call the [DescribeCdnRegionAndIsp](~~91077~~) operation to query regions.
    *
    * @param request DescribeDomainTopClientIpVisitRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainTopClientIpVisitResponse
   */
  async describeDomainTopClientIpVisitWithOptions(request: DescribeDomainTopClientIpVisitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainTopClientIpVisitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
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
      action: "DescribeDomainTopClientIpVisit",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainTopClientIpVisitResponse>(await this.callApi(params, req, runtime), new DescribeDomainTopClientIpVisitResponse({}));
  }

  /**
    * The name of the region. Separate multiple region names with commas (,).
    * You can call the [DescribeCdnRegionAndIsp](~~91077~~) operation to query regions.
    *
    * @param request DescribeDomainTopClientIpVisitRequest
    * @return DescribeDomainTopClientIpVisitResponse
   */
  async describeDomainTopClientIpVisit(request: DescribeDomainTopClientIpVisitRequest): Promise<DescribeDomainTopClientIpVisitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainTopClientIpVisitWithOptions(request, runtime);
  }

  /**
    * The sorting method. Valid values:
    * *   **traf**: by network traffic.
    * *   **pv**: by the number of page views. This is the default value.
    *
    * @param request DescribeDomainTopReferVisitRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainTopReferVisitResponse
   */
  async describeDomainTopReferVisitWithOptions(request: DescribeDomainTopReferVisitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainTopReferVisitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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
      action: "DescribeDomainTopReferVisit",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainTopReferVisitResponse>(await this.callApi(params, req, runtime), new DescribeDomainTopReferVisitResponse({}));
  }

  /**
    * The sorting method. Valid values:
    * *   **traf**: by network traffic.
    * *   **pv**: by the number of page views. This is the default value.
    *
    * @param request DescribeDomainTopReferVisitRequest
    * @return DescribeDomainTopReferVisitResponse
   */
  async describeDomainTopReferVisit(request: DescribeDomainTopReferVisitRequest): Promise<DescribeDomainTopReferVisitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainTopReferVisitWithOptions(request, runtime);
  }

  /**
    * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](~~279577~~) feature for data analysis.
    * > 
    * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * *   You can query data collected in the last 90 days.
    * *   You can specify only one domain name in each call.
    * *   You can call this operation up to 10 times per second per account.
    *
    * @param request DescribeDomainTopUrlVisitRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainTopUrlVisitResponse
   */
  async describeDomainTopUrlVisitWithOptions(request: DescribeDomainTopUrlVisitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainTopUrlVisitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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
      action: "DescribeDomainTopUrlVisit",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainTopUrlVisitResponse>(await this.callApi(params, req, runtime), new DescribeDomainTopUrlVisitResponse({}));
  }

  /**
    * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](~~279577~~) feature for data analysis.
    * > 
    * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * *   You can query data collected in the last 90 days.
    * *   You can specify only one domain name in each call.
    * *   You can call this operation up to 10 times per second per account.
    *
    * @param request DescribeDomainTopUrlVisitRequest
    * @return DescribeDomainTopUrlVisitResponse
   */
  async describeDomainTopUrlVisit(request: DescribeDomainTopUrlVisitRequest): Promise<DescribeDomainTopUrlVisitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainTopUrlVisitWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366|04:00 on the next day|
    *
    * @param request DescribeDomainTrafficDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainTrafficDataResponse
   */
  async describeDomainTrafficDataWithOptions(request: DescribeDomainTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainTrafficDataResponse> {
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
      action: "DescribeDomainTrafficData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainTrafficDataResponse({}));
  }

  /**
    * * You can call this operation up to 100 times per second per account.
    * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * **Time granularity**
    * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|366 days|366|04:00 on the next day|
    *
    * @param request DescribeDomainTrafficDataRequest
    * @return DescribeDomainTrafficDataResponse
   */
  async describeDomainTrafficData(request: DescribeDomainTrafficDataRequest): Promise<DescribeDomainTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainTrafficDataWithOptions(request, runtime);
  }

  /**
    * * You can call this operation up to 10 times per second per account.
    * * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|90 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainUsageDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainUsageDataResponse
   */
  async describeDomainUsageDataWithOptions(request: DescribeDomainUsageDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainUsageDataResponse> {
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
      action: "DescribeDomainUsageData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainUsageDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainUsageDataResponse({}));
  }

  /**
    * * You can call this operation up to 10 times per second per account.
    * * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
    * |Time granularity|Maximum time range per query|Historical data available|Data delay|
    * |---|---|---|---|
    * |5 minutes|3 days|93 days|15 minutes|
    * |1 hour|31 days|186 days|4 hours|
    * |1 day|90 days|366 days|04:00 on the next day|
    *
    * @param request DescribeDomainUsageDataRequest
    * @return DescribeDomainUsageDataResponse
   */
  async describeDomainUsageData(request: DescribeDomainUsageDataRequest): Promise<DescribeDomainUsageDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainUsageDataWithOptions(request, runtime);
  }

  /**
    * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](~~279577~~) feature for data analysis.
    * > 
    * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * *   You can specify only one accelerated domain name or all accelerated domain names in your Alibaba Cloud account.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDomainUvDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainUvDataResponse
   */
  async describeDomainUvDataWithOptions(request: DescribeDomainUvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainUvDataResponse> {
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
      action: "DescribeDomainUvData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainUvDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainUvDataResponse({}));
  }

  /**
    * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](~~279577~~) feature for data analysis.
    * > 
    * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    * *   You can specify only one accelerated domain name or all accelerated domain names in your Alibaba Cloud account.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeDomainUvDataRequest
    * @return DescribeDomainUvDataResponse
   */
  async describeDomainUvData(request: DescribeDomainUvDataRequest): Promise<DescribeDomainUvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainUvDataWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDomainsBySourceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainsBySourceResponse
   */
  async describeDomainsBySourceWithOptions(request: DescribeDomainsBySourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsBySourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sources)) {
      query["Sources"] = request.sources;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainsBySource",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainsBySourceResponse>(await this.callApi(params, req, runtime), new DescribeDomainsBySourceResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeDomainsBySourceRequest
    * @return DescribeDomainsBySourceResponse
   */
  async describeDomainsBySource(request: DescribeDomainsBySourceRequest): Promise<DescribeDomainsBySourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsBySourceWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation up to 10 times per second per account.
    * *   If you do not set StartTime or EndTime, data within the last 24 hours is queried. If you set both StartTime and EndTime, data within the specified time range is queried.
    * *   You can query the monitoring data of a specific accelerated domain name or all accelerated domain names that belong to your Alibaba Cloud account.
    *
    * @param request DescribeDomainsUsageByDayRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainsUsageByDayResponse
   */
  async describeDomainsUsageByDayWithOptions(request: DescribeDomainsUsageByDayRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsUsageByDayResponse> {
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
      action: "DescribeDomainsUsageByDay",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainsUsageByDayResponse>(await this.callApi(params, req, runtime), new DescribeDomainsUsageByDayResponse({}));
  }

  /**
    * *   You can call this operation up to 10 times per second per account.
    * *   If you do not set StartTime or EndTime, data within the last 24 hours is queried. If you set both StartTime and EndTime, data within the specified time range is queried.
    * *   You can query the monitoring data of a specific accelerated domain name or all accelerated domain names that belong to your Alibaba Cloud account.
    *
    * @param request DescribeDomainsUsageByDayRequest
    * @return DescribeDomainsUsageByDayResponse
   */
  async describeDomainsUsageByDay(request: DescribeDomainsUsageByDayRequest): Promise<DescribeDomainsUsageByDayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsUsageByDayWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeEsExceptionDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeEsExceptionDataResponse
   */
  async describeEsExceptionDataWithOptions(request: DescribeEsExceptionDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEsExceptionDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEsExceptionData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEsExceptionDataResponse>(await this.callApi(params, req, runtime), new DescribeEsExceptionDataResponse({}));
  }

  /**
    * *   You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeEsExceptionDataRequest
    * @return DescribeEsExceptionDataResponse
   */
  async describeEsExceptionData(request: DescribeEsExceptionDataRequest): Promise<DescribeEsExceptionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEsExceptionDataWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeEsExecuteDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeEsExecuteDataResponse
   */
  async describeEsExecuteDataWithOptions(request: DescribeEsExecuteDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEsExecuteDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEsExecuteData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEsExecuteDataResponse>(await this.callApi(params, req, runtime), new DescribeEsExecuteDataResponse({}));
  }

  /**
    * *   You can call this operation up to 30 times per second per account.
    *
    * @param request DescribeEsExecuteDataRequest
    * @return DescribeEsExecuteDataResponse
   */
  async describeEsExecuteData(request: DescribeEsExecuteDataRequest): Promise<DescribeEsExecuteDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEsExecuteDataWithOptions(request, runtime);
  }

  async describeFCTriggerWithOptions(request: DescribeFCTriggerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFCTriggerResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFCTrigger",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFCTriggerResponse>(await this.callApi(params, req, runtime), new DescribeFCTriggerResponse({}));
  }

  async describeFCTrigger(request: DescribeFCTriggerRequest): Promise<DescribeFCTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFCTriggerWithOptions(request, runtime);
  }

  /**
    * The URL where you can download the file that contains invalid URLs. This parameter is valid only if the export task is successful.
    *
    * @param request DescribeIllegalUrlExportTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeIllegalUrlExportTaskResponse
   */
  async describeIllegalUrlExportTaskWithOptions(request: DescribeIllegalUrlExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIllegalUrlExportTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIllegalUrlExportTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIllegalUrlExportTaskResponse>(await this.callApi(params, req, runtime), new DescribeIllegalUrlExportTaskResponse({}));
  }

  /**
    * The URL where you can download the file that contains invalid URLs. This parameter is valid only if the export task is successful.
    *
    * @param request DescribeIllegalUrlExportTaskRequest
    * @return DescribeIllegalUrlExportTaskResponse
   */
  async describeIllegalUrlExportTask(request: DescribeIllegalUrlExportTaskRequest): Promise<DescribeIllegalUrlExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIllegalUrlExportTaskWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeIpInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeIpInfoResponse
   */
  async describeIpInfoWithOptions(request: DescribeIpInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.IP)) {
      query["IP"] = request.IP;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIpInfo",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIpInfoResponse>(await this.callApi(params, req, runtime), new DescribeIpInfoResponse({}));
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeIpInfoRequest
    * @return DescribeIpInfoResponse
   */
  async describeIpInfo(request: DescribeIpInfoRequest): Promise<DescribeIpInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpInfoWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeIpStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeIpStatusResponse
   */
  async describeIpStatusWithOptions(request: DescribeIpStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIpStatus",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIpStatusResponse>(await this.callApi(params, req, runtime), new DescribeIpStatusResponse({}));
  }

  /**
    * > You can call this operation up to 50 times per second per account.
    *
    * @param request DescribeIpStatusRequest
    * @return DescribeIpStatusResponse
   */
  async describeIpStatus(request: DescribeIpStatusRequest): Promise<DescribeIpStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpStatusWithOptions(request, runtime);
  }

  /**
    * *   This operation is available only to users whose daily peak bandwidth value is higher than 1 Gbit/s. If you meet this requirement, you can [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex) to apply for permissions to use this operation.
    * *   You can call this operation up to 40 times per second per account.
    *
    * @param request DescribeL2VipsByDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeL2VipsByDomainResponse
   */
  async describeL2VipsByDomainWithOptions(request: DescribeL2VipsByDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeL2VipsByDomainResponse> {
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
      action: "DescribeL2VipsByDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeL2VipsByDomainResponse>(await this.callApi(params, req, runtime), new DescribeL2VipsByDomainResponse({}));
  }

  /**
    * *   This operation is available only to users whose daily peak bandwidth value is higher than 1 Gbit/s. If you meet this requirement, you can [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex) to apply for permissions to use this operation.
    * *   You can call this operation up to 40 times per second per account.
    *
    * @param request DescribeL2VipsByDomainRequest
    * @return DescribeL2VipsByDomainResponse
   */
  async describeL2VipsByDomain(request: DescribeL2VipsByDomainRequest): Promise<DescribeL2VipsByDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeL2VipsByDomainWithOptions(request, runtime);
  }

  async describePreloadDetailByIdWithOptions(request: DescribePreloadDetailByIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribePreloadDetailByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePreloadDetailById",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePreloadDetailByIdResponse>(await this.callApi(params, req, runtime), new DescribePreloadDetailByIdResponse({}));
  }

  async describePreloadDetailById(request: DescribePreloadDetailByIdRequest): Promise<DescribePreloadDetailByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePreloadDetailByIdWithOptions(request, runtime);
  }

  /**
    * *   The data is collected every 5 minutes.
    * *   You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeRangeDataByLocateAndIspServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRangeDataByLocateAndIspServiceResponse
   */
  async describeRangeDataByLocateAndIspServiceWithOptions(request: DescribeRangeDataByLocateAndIspServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRangeDataByLocateAndIspServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ispNames)) {
      query["IspNames"] = request.ispNames;
    }

    if (!Util.isUnset(request.locationNames)) {
      query["LocationNames"] = request.locationNames;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRangeDataByLocateAndIspService",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRangeDataByLocateAndIspServiceResponse>(await this.callApi(params, req, runtime), new DescribeRangeDataByLocateAndIspServiceResponse({}));
  }

  /**
    * *   The data is collected every 5 minutes.
    * *   You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeRangeDataByLocateAndIspServiceRequest
    * @return DescribeRangeDataByLocateAndIspServiceResponse
   */
  async describeRangeDataByLocateAndIspService(request: DescribeRangeDataByLocateAndIspServiceRequest): Promise<DescribeRangeDataByLocateAndIspServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRangeDataByLocateAndIspServiceWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeRealtimeDeliveryAccRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRealtimeDeliveryAccResponse
   */
  async describeRealtimeDeliveryAccWithOptions(request: DescribeRealtimeDeliveryAccRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRealtimeDeliveryAccResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.logStore)) {
      query["LogStore"] = request.logStore;
    }

    if (!Util.isUnset(request.project)) {
      query["Project"] = request.project;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRealtimeDeliveryAcc",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRealtimeDeliveryAccResponse>(await this.callApi(params, req, runtime), new DescribeRealtimeDeliveryAccResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeRealtimeDeliveryAccRequest
    * @return DescribeRealtimeDeliveryAccResponse
   */
  async describeRealtimeDeliveryAcc(request: DescribeRealtimeDeliveryAccRequest): Promise<DescribeRealtimeDeliveryAccResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRealtimeDeliveryAccWithOptions(request, runtime);
  }

  /**
    * *   You can call the [RefreshObjectCaches](~~448057~~) operation to refresh content and call the [PushObjectCache](~~448058~~) operation to prefetch content.
    * *   You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeRefreshQuotaRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRefreshQuotaResponse
   */
  async describeRefreshQuotaWithOptions(request: DescribeRefreshQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRefreshQuotaResponse> {
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
      action: "DescribeRefreshQuota",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRefreshQuotaResponse>(await this.callApi(params, req, runtime), new DescribeRefreshQuotaResponse({}));
  }

  /**
    * *   You can call the [RefreshObjectCaches](~~448057~~) operation to refresh content and call the [PushObjectCache](~~448058~~) operation to prefetch content.
    * *   You can call this operation up to 20 times per second per account.
    *
    * @param request DescribeRefreshQuotaRequest
    * @return DescribeRefreshQuotaResponse
   */
  async describeRefreshQuota(request: DescribeRefreshQuotaRequest): Promise<DescribeRefreshQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRefreshQuotaWithOptions(request, runtime);
  }

  /**
    * The tasks.
    *
    * @param request DescribeRefreshTaskByIdRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRefreshTaskByIdResponse
   */
  async describeRefreshTaskByIdWithOptions(request: DescribeRefreshTaskByIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRefreshTaskByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRefreshTaskById",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRefreshTaskByIdResponse>(await this.callApi(params, req, runtime), new DescribeRefreshTaskByIdResponse({}));
  }

  /**
    * The tasks.
    *
    * @param request DescribeRefreshTaskByIdRequest
    * @return DescribeRefreshTaskByIdResponse
   */
  async describeRefreshTaskById(request: DescribeRefreshTaskByIdRequest): Promise<DescribeRefreshTaskByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRefreshTaskByIdWithOptions(request, runtime);
  }

  /**
    * The ID of the task.
    *
    * @param request DescribeRefreshTasksRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRefreshTasksResponse
   */
  async describeRefreshTasksWithOptions(request: DescribeRefreshTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRefreshTasksResponse> {
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      action: "DescribeRefreshTasks",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRefreshTasksResponse>(await this.callApi(params, req, runtime), new DescribeRefreshTasksResponse({}));
  }

  /**
    * The ID of the task.
    *
    * @param request DescribeRefreshTasksRequest
    * @return DescribeRefreshTasksResponse
   */
  async describeRefreshTasks(request: DescribeRefreshTasksRequest): Promise<DescribeRefreshTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRefreshTasksWithOptions(request, runtime);
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 30.
    *
    * @param request DescribeStagingIpRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeStagingIpResponse
   */
  async describeStagingIpWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeStagingIpResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeStagingIp",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStagingIpResponse>(await this.callApi(params, req, runtime), new DescribeStagingIpResponse({}));
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 30.
    *
    * @return DescribeStagingIpResponse
   */
  async describeStagingIp(): Promise<DescribeStagingIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStagingIpWithOptions(runtime);
  }

  async describeTagResourcesWithOptions(request: DescribeTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagResourcesResponse> {
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
      action: "DescribeTagResources",
      version: "2018-05-10",
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

  async describeTagResources(request: DescribeTagResourcesRequest): Promise<DescribeTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagResourcesWithOptions(request, runtime);
  }

  /**
    * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](~~279577~~) feature for data analysis.
    * > 
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the current month. If you set both these parameters, the request returns the data collected within the specified time range.********
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeTopDomainsByFlowRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeTopDomainsByFlowResponse
   */
  async describeTopDomainsByFlowWithOptions(request: DescribeTopDomainsByFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTopDomainsByFlowResponse> {
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
      action: "DescribeTopDomainsByFlow",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTopDomainsByFlowResponse>(await this.callApi(params, req, runtime), new DescribeTopDomainsByFlowResponse({}));
  }

  /**
    * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](~~279577~~) feature for data analysis.
    * > 
    * *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the current month. If you set both these parameters, the request returns the data collected within the specified time range.********
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request DescribeTopDomainsByFlowRequest
    * @return DescribeTopDomainsByFlowResponse
   */
  async describeTopDomainsByFlow(request: DescribeTopDomainsByFlowRequest): Promise<DescribeTopDomainsByFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTopDomainsByFlowWithOptions(request, runtime);
  }

  /**
    * The number of domain names whose SSL certificates are about to expire within 30 days.
    *
    * @param request DescribeUserCertificateExpireCountRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeUserCertificateExpireCountResponse
   */
  async describeUserCertificateExpireCountWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeUserCertificateExpireCountResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeUserCertificateExpireCount",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserCertificateExpireCountResponse>(await this.callApi(params, req, runtime), new DescribeUserCertificateExpireCountResponse({}));
  }

  /**
    * The number of domain names whose SSL certificates are about to expire within 30 days.
    *
    * @return DescribeUserCertificateExpireCountResponse
   */
  async describeUserCertificateExpireCount(): Promise<DescribeUserCertificateExpireCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserCertificateExpireCountWithOptions(runtime);
  }

  /**
    * @deprecated
    *
    * @param request DescribeUserConfigsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeUserConfigsResponse
   */
  // Deprecated
  async describeUserConfigsWithOptions(request: DescribeUserConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
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
      action: "DescribeUserConfigs",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserConfigsResponse>(await this.callApi(params, req, runtime), new DescribeUserConfigsResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request DescribeUserConfigsRequest
    * @return DescribeUserConfigsResponse
   */
  // Deprecated
  async describeUserConfigs(request: DescribeUserConfigsRequest): Promise<DescribeUserConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserConfigsWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation up to 100 times per second per account.
    * *   You can specify up to 50 domain names in each request. Separate multiple domain names with commas (,).
    *
    * @param request DescribeUserDomainsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeUserDomainsResponse
   */
  async describeUserDomainsWithOptions(request: DescribeUserDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdnType)) {
      query["CdnType"] = request.cdnType;
    }

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

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserDomains",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserDomainsResponse>(await this.callApi(params, req, runtime), new DescribeUserDomainsResponse({}));
  }

  /**
    * *   You can call this operation up to 100 times per second per account.
    * *   You can specify up to 50 domain names in each request. Separate multiple domain names with commas (,).
    *
    * @param request DescribeUserDomainsRequest
    * @return DescribeUserDomainsResponse
   */
  async describeUserDomains(request: DescribeUserDomainsRequest): Promise<DescribeUserDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserDomainsWithOptions(request, runtime);
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DescribeUserTagsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeUserTagsResponse
   */
  async describeUserTagsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeUserTagsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeUserTags",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserTagsResponse>(await this.callApi(params, req, runtime), new DescribeUserTagsResponse({}));
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @return DescribeUserTagsResponse
   */
  async describeUserTags(): Promise<DescribeUserTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserTagsWithOptions(runtime);
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DescribeUserUsageDataExportTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeUserUsageDataExportTaskResponse
   */
  async describeUserUsageDataExportTaskWithOptions(request: DescribeUserUsageDataExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserUsageDataExportTaskResponse> {
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
      action: "DescribeUserUsageDataExportTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserUsageDataExportTaskResponse>(await this.callApi(params, req, runtime), new DescribeUserUsageDataExportTaskResponse({}));
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DescribeUserUsageDataExportTaskRequest
    * @return DescribeUserUsageDataExportTaskResponse
   */
  async describeUserUsageDataExportTask(request: DescribeUserUsageDataExportTaskRequest): Promise<DescribeUserUsageDataExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserUsageDataExportTaskWithOptions(request, runtime);
  }

  /**
    * - This operation has been available since July 20, 2018. You can query information about resource usage collected within the last three months.
    * - The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DescribeUserUsageDetailDataExportTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeUserUsageDetailDataExportTaskResponse
   */
  async describeUserUsageDetailDataExportTaskWithOptions(request: DescribeUserUsageDetailDataExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserUsageDetailDataExportTaskResponse> {
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
      action: "DescribeUserUsageDetailDataExportTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserUsageDetailDataExportTaskResponse>(await this.callApi(params, req, runtime), new DescribeUserUsageDetailDataExportTaskResponse({}));
  }

  /**
    * - This operation has been available since July 20, 2018. You can query information about resource usage collected within the last three months.
    * - The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DescribeUserUsageDetailDataExportTaskRequest
    * @return DescribeUserUsageDetailDataExportTaskResponse
   */
  async describeUserUsageDetailDataExportTask(request: DescribeUserUsageDetailDataExportTaskRequest): Promise<DescribeUserUsageDetailDataExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserUsageDetailDataExportTaskWithOptions(request, runtime);
  }

  /**
    * The ID of the request.
    *
    * @param request DescribeUserVipsByDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeUserVipsByDomainResponse
   */
  async describeUserVipsByDomainWithOptions(request: DescribeUserVipsByDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserVipsByDomainResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserVipsByDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserVipsByDomainResponse>(await this.callApi(params, req, runtime), new DescribeUserVipsByDomainResponse({}));
  }

  /**
    * The ID of the request.
    *
    * @param request DescribeUserVipsByDomainRequest
    * @return DescribeUserVipsByDomainResponse
   */
  async describeUserVipsByDomain(request: DescribeUserVipsByDomainRequest): Promise<DescribeUserVipsByDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserVipsByDomainWithOptions(request, runtime);
  }

  async describeVerifyContentWithOptions(request: DescribeVerifyContentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVerifyContent",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVerifyContentResponse>(await this.callApi(params, req, runtime), new DescribeVerifyContentResponse({}));
  }

  async describeVerifyContent(request: DescribeVerifyContentRequest): Promise<DescribeVerifyContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyContentWithOptions(request, runtime);
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DisableRealtimeLogDeliveryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableRealtimeLogDeliveryResponse
   */
  async disableRealtimeLogDeliveryWithOptions(request: DisableRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<DisableRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableRealtimeLogDelivery",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new DisableRealtimeLogDeliveryResponse({}));
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request DisableRealtimeLogDeliveryRequest
    * @return DisableRealtimeLogDeliveryResponse
   */
  async disableRealtimeLogDelivery(request: DisableRealtimeLogDeliveryRequest): Promise<DisableRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request EnableRealtimeLogDeliveryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EnableRealtimeLogDeliveryResponse
   */
  async enableRealtimeLogDeliveryWithOptions(request: EnableRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<EnableRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableRealtimeLogDelivery",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new EnableRealtimeLogDeliveryResponse({}));
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request EnableRealtimeLogDeliveryRequest
    * @return EnableRealtimeLogDeliveryResponse
   */
  async enableRealtimeLogDelivery(request: EnableRealtimeLogDeliveryRequest): Promise<EnableRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request ListDomainsByLogConfigIdRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDomainsByLogConfigIdResponse
   */
  async listDomainsByLogConfigIdWithOptions(request: ListDomainsByLogConfigIdRequest, runtime: $Util.RuntimeOptions): Promise<ListDomainsByLogConfigIdResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDomainsByLogConfigId",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDomainsByLogConfigIdResponse>(await this.callApi(params, req, runtime), new ListDomainsByLogConfigIdResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request ListDomainsByLogConfigIdRequest
    * @return ListDomainsByLogConfigIdResponse
   */
  async listDomainsByLogConfigId(request: ListDomainsByLogConfigIdRequest): Promise<ListDomainsByLogConfigIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDomainsByLogConfigIdWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request ListFCTriggerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListFCTriggerResponse
   */
  async listFCTriggerWithOptions(request: ListFCTriggerRequest, runtime: $Util.RuntimeOptions): Promise<ListFCTriggerResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFCTrigger",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFCTriggerResponse>(await this.callApi(params, req, runtime), new ListFCTriggerResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request ListFCTriggerRequest
    * @return ListFCTriggerResponse
   */
  async listFCTrigger(request: ListFCTriggerRequest): Promise<ListFCTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFCTriggerWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request ListRealtimeLogDeliveryDomainsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListRealtimeLogDeliveryDomainsResponse
   */
  async listRealtimeLogDeliveryDomainsWithOptions(request: ListRealtimeLogDeliveryDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListRealtimeLogDeliveryDomainsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRealtimeLogDeliveryDomains",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRealtimeLogDeliveryDomainsResponse>(await this.callApi(params, req, runtime), new ListRealtimeLogDeliveryDomainsResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request ListRealtimeLogDeliveryDomainsRequest
    * @return ListRealtimeLogDeliveryDomainsResponse
   */
  async listRealtimeLogDeliveryDomains(request: ListRealtimeLogDeliveryDomainsRequest): Promise<ListRealtimeLogDeliveryDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRealtimeLogDeliveryDomainsWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request ListRealtimeLogDeliveryInfosRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListRealtimeLogDeliveryInfosResponse
   */
  async listRealtimeLogDeliveryInfosWithOptions(runtime: $Util.RuntimeOptions): Promise<ListRealtimeLogDeliveryInfosResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListRealtimeLogDeliveryInfos",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRealtimeLogDeliveryInfosResponse>(await this.callApi(params, req, runtime), new ListRealtimeLogDeliveryInfosResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @return ListRealtimeLogDeliveryInfosResponse
   */
  async listRealtimeLogDeliveryInfos(): Promise<ListRealtimeLogDeliveryInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRealtimeLogDeliveryInfosWithOptions(runtime);
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request ListUserCustomLogConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListUserCustomLogConfigResponse
   */
  async listUserCustomLogConfigWithOptions(runtime: $Util.RuntimeOptions): Promise<ListUserCustomLogConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListUserCustomLogConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserCustomLogConfigResponse>(await this.callApi(params, req, runtime), new ListUserCustomLogConfigResponse({}));
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @return ListUserCustomLogConfigResponse
   */
  async listUserCustomLogConfig(): Promise<ListUserCustomLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserCustomLogConfigWithOptions(runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request ModifyCdnDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyCdnDomainResponse
   */
  async modifyCdnDomainWithOptions(request: ModifyCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCdnDomainResponse> {
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
      action: "ModifyCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyCdnDomainResponse>(await this.callApi(params, req, runtime), new ModifyCdnDomainResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request ModifyCdnDomainRequest
    * @return ModifyCdnDomainResponse
   */
  async modifyCdnDomain(request: ModifyCdnDomainRequest): Promise<ModifyCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCdnDomainWithOptions(request, runtime);
  }

  /**
    * The ID of the request.
    *
    * @param request ModifyCdnDomainSchdmByPropertyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyCdnDomainSchdmByPropertyResponse
   */
  async modifyCdnDomainSchdmByPropertyWithOptions(request: ModifyCdnDomainSchdmByPropertyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCdnDomainSchdmByPropertyResponse> {
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
      action: "ModifyCdnDomainSchdmByProperty",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyCdnDomainSchdmByPropertyResponse>(await this.callApi(params, req, runtime), new ModifyCdnDomainSchdmByPropertyResponse({}));
  }

  /**
    * The ID of the request.
    *
    * @param request ModifyCdnDomainSchdmByPropertyRequest
    * @return ModifyCdnDomainSchdmByPropertyResponse
   */
  async modifyCdnDomainSchdmByProperty(request: ModifyCdnDomainSchdmByPropertyRequest): Promise<ModifyCdnDomainSchdmByPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCdnDomainSchdmByPropertyWithOptions(request, runtime);
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request ModifyRealtimeLogDeliveryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyRealtimeLogDeliveryResponse
   */
  async modifyRealtimeLogDeliveryWithOptions(request: ModifyRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRealtimeLogDelivery",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new ModifyRealtimeLogDeliveryResponse({}));
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request ModifyRealtimeLogDeliveryRequest
    * @return ModifyRealtimeLogDeliveryResponse
   */
  async modifyRealtimeLogDelivery(request: ModifyRealtimeLogDeliveryRequest): Promise<ModifyRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
    * *   Alibaba Cloud CDN can be activated only once per Alibaba Cloud account. The Alibaba Cloud account must complete real-name verification to activate Alibaba Cloud CDN.
    * *   You can call this operation up to five times per second per user.
    *
    * @param request OpenCdnServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OpenCdnServiceResponse
   */
  async openCdnServiceWithOptions(request: OpenCdnServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenCdnServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
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
      action: "OpenCdnService",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenCdnServiceResponse>(await this.callApi(params, req, runtime), new OpenCdnServiceResponse({}));
  }

  /**
    * *   Alibaba Cloud CDN can be activated only once per Alibaba Cloud account. The Alibaba Cloud account must complete real-name verification to activate Alibaba Cloud CDN.
    * *   You can call this operation up to five times per second per user.
    *
    * @param request OpenCdnServiceRequest
    * @return OpenCdnServiceResponse
   */
  async openCdnService(request: OpenCdnServiceRequest): Promise<OpenCdnServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openCdnServiceWithOptions(request, runtime);
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 30.
    *
    * @param request PublishStagingConfigToProductionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PublishStagingConfigToProductionResponse
   */
  async publishStagingConfigToProductionWithOptions(request: PublishStagingConfigToProductionRequest, runtime: $Util.RuntimeOptions): Promise<PublishStagingConfigToProductionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PublishStagingConfigToProduction",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishStagingConfigToProductionResponse>(await this.callApi(params, req, runtime), new PublishStagingConfigToProductionResponse({}));
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 30.
    *
    * @param request PublishStagingConfigToProductionRequest
    * @return PublishStagingConfigToProductionResponse
   */
  async publishStagingConfigToProduction(request: PublishStagingConfigToProductionRequest): Promise<PublishStagingConfigToProductionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishStagingConfigToProductionWithOptions(request, runtime);
  }

  /**
    * *   Alibaba Cloud CDN supports POST requests in which parameters are sent as a form.
    * *   You can call the [RefreshObjectCaches](~~91164~~) operation to refresh content and call the [PushObjectCache](~~91161~~) operation to prefetch content.
    * *   By default, each Alibaba Cloud account can submit up to 1,000 URLs per day. If the daily peak bandwidth value of your workloads exceeds 200 Mbit/s, you can [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//ticket-intl.console.aliyun.com/%23/ticket/createIndex) to increase your daily quota. Alibaba Cloud reviews your application and then increases the quota accordingly.
    * *   You can specify at most 100 URLs in each prefetch request.
    * *   For each Alibaba Cloud account, the prefetch queue can contain up to 50,000 URLs. Content is prefetched based on the time when the URLs are submitted. The URL that is submitted the earliest has the highest priority. If the number of URLs in the queue reaches 50,000, you cannot submit more URLs until the number drops below 50,000.
    * *   You can call this operation up to 50 times per second per account.
    * *   For more information about how to automate refresh or prefetch tasks, see [Run scripts to refresh and prefetch content](~~151829~~).
    * ## Precautions
    * *   After a prefetch task is submitted and completed, the POPs immediately start to retrieve resources from the origin server. Therefore, a large number of refresh tasks cause a large number of concurrent download tasks. This increases the number of requests that are redirected to the origin server. The back-to-origin routing process consumes more bandwidth resources and the origin server may be overwhelmed.
    * *   The time required for a prefetch task to complete is proportional to the size of the prefetched file. In actual practice, most prefetch tasks require 5 to 30 minutes to complete. A task with a smaller average file size requires less time.
    * *   To allow RAM users to perform this operation, you must first grant them the required permissions. For more information, see [Authorize a RAM user to prefetch and refresh resources](~~260300~~).
    *
    * @param request PushObjectCacheRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PushObjectCacheResponse
   */
  async pushObjectCacheWithOptions(request: PushObjectCacheRequest, runtime: $Util.RuntimeOptions): Promise<PushObjectCacheResponse> {
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
      action: "PushObjectCache",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushObjectCacheResponse>(await this.callApi(params, req, runtime), new PushObjectCacheResponse({}));
  }

  /**
    * *   Alibaba Cloud CDN supports POST requests in which parameters are sent as a form.
    * *   You can call the [RefreshObjectCaches](~~91164~~) operation to refresh content and call the [PushObjectCache](~~91161~~) operation to prefetch content.
    * *   By default, each Alibaba Cloud account can submit up to 1,000 URLs per day. If the daily peak bandwidth value of your workloads exceeds 200 Mbit/s, you can [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//ticket-intl.console.aliyun.com/%23/ticket/createIndex) to increase your daily quota. Alibaba Cloud reviews your application and then increases the quota accordingly.
    * *   You can specify at most 100 URLs in each prefetch request.
    * *   For each Alibaba Cloud account, the prefetch queue can contain up to 50,000 URLs. Content is prefetched based on the time when the URLs are submitted. The URL that is submitted the earliest has the highest priority. If the number of URLs in the queue reaches 50,000, you cannot submit more URLs until the number drops below 50,000.
    * *   You can call this operation up to 50 times per second per account.
    * *   For more information about how to automate refresh or prefetch tasks, see [Run scripts to refresh and prefetch content](~~151829~~).
    * ## Precautions
    * *   After a prefetch task is submitted and completed, the POPs immediately start to retrieve resources from the origin server. Therefore, a large number of refresh tasks cause a large number of concurrent download tasks. This increases the number of requests that are redirected to the origin server. The back-to-origin routing process consumes more bandwidth resources and the origin server may be overwhelmed.
    * *   The time required for a prefetch task to complete is proportional to the size of the prefetched file. In actual practice, most prefetch tasks require 5 to 30 minutes to complete. A task with a smaller average file size requires less time.
    * *   To allow RAM users to perform this operation, you must first grant them the required permissions. For more information, see [Authorize a RAM user to prefetch and refresh resources](~~260300~~).
    *
    * @param request PushObjectCacheRequest
    * @return PushObjectCacheResponse
   */
  async pushObjectCache(request: PushObjectCacheRequest): Promise<PushObjectCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushObjectCacheWithOptions(request, runtime);
  }

  /**
    * *   Alibaba Cloud CDN supports POST requests in which parameters are sent as a form.
    * *   You can call the [RefreshObjectCaches](~~91164~~) operation to refresh content and call the [PushObjectCache](~~91161~~) operation to prefetch content.
    * *   You can call the RefreshObjectCaches operation up to 50 times per second per account.
    * *   For more information about how to automatically refresh or prefetch tasks, see [Run scripts to refresh and prefetch content](~~151829~~).
    * ## Precautions
    * *   After a refresh task is submitted and completed, specific resources are removed from POPs. When a POP receives a request for the removed resources, the POP forwards the request to the origin server to retrieve the resources. The retrieved resources are returned to the client and cached on the POP. Multiple refresh tasks may cause a large number of resources to be removed from the POPs. This increases the number of requests that are forwarded to the origin server. The back-to-origin routing process consumes more bandwidth resources and the origin server may be overwhelmed.
    * *   A refresh task takes effect 5 to 6 minutes after being submitted. This means that if the resource you want to refresh has a TTL of less than five minutes, you wait for it to expire instead of manually running a refresh task.
    * *   If you want to use RAM users to refresh or prefetch resources, you must obtain the required permissions. For more information, see [Authorize a RAM user to prefetch and refresh resources](~~260300~~).
    * ### Refresh quota
    * *   By default, each Alibaba Cloud account can refresh content from up to 10,000 URLs and 100 directories per day. The directories include subdirectories. If the daily peak bandwidth value exceeds 200 Mbit/s, you can [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//ticket-intl.console.aliyun.com/%23/ticket/createIndex) to request a quota increase. Alibaba Cloud CDN evaluates your application based on your workloads.
    * *   By default, each Alibaba Cloud account can submit up to 20 refresh rules that contain regular expressions per day. If the daily peak bandwidth of your Alibaba Cloud account exceeds 10 Gbit/s, you can [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex) to request a quota increase.
    * *   You can specify up to 1,000 URL refresh rules, 100 directory refresh rules, or 1 refresh rule that contains regular expressions in each call.
    * *   You can refresh up to 1,000 URLs per minute for each domain name.
    *
    * @param request RefreshObjectCachesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RefreshObjectCachesResponse
   */
  async refreshObjectCachesWithOptions(request: RefreshObjectCachesRequest, runtime: $Util.RuntimeOptions): Promise<RefreshObjectCachesResponse> {
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
      action: "RefreshObjectCaches",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshObjectCachesResponse>(await this.callApi(params, req, runtime), new RefreshObjectCachesResponse({}));
  }

  /**
    * *   Alibaba Cloud CDN supports POST requests in which parameters are sent as a form.
    * *   You can call the [RefreshObjectCaches](~~91164~~) operation to refresh content and call the [PushObjectCache](~~91161~~) operation to prefetch content.
    * *   You can call the RefreshObjectCaches operation up to 50 times per second per account.
    * *   For more information about how to automatically refresh or prefetch tasks, see [Run scripts to refresh and prefetch content](~~151829~~).
    * ## Precautions
    * *   After a refresh task is submitted and completed, specific resources are removed from POPs. When a POP receives a request for the removed resources, the POP forwards the request to the origin server to retrieve the resources. The retrieved resources are returned to the client and cached on the POP. Multiple refresh tasks may cause a large number of resources to be removed from the POPs. This increases the number of requests that are forwarded to the origin server. The back-to-origin routing process consumes more bandwidth resources and the origin server may be overwhelmed.
    * *   A refresh task takes effect 5 to 6 minutes after being submitted. This means that if the resource you want to refresh has a TTL of less than five minutes, you wait for it to expire instead of manually running a refresh task.
    * *   If you want to use RAM users to refresh or prefetch resources, you must obtain the required permissions. For more information, see [Authorize a RAM user to prefetch and refresh resources](~~260300~~).
    * ### Refresh quota
    * *   By default, each Alibaba Cloud account can refresh content from up to 10,000 URLs and 100 directories per day. The directories include subdirectories. If the daily peak bandwidth value exceeds 200 Mbit/s, you can [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//ticket-intl.console.aliyun.com/%23/ticket/createIndex) to request a quota increase. Alibaba Cloud CDN evaluates your application based on your workloads.
    * *   By default, each Alibaba Cloud account can submit up to 20 refresh rules that contain regular expressions per day. If the daily peak bandwidth of your Alibaba Cloud account exceeds 10 Gbit/s, you can [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex) to request a quota increase.
    * *   You can specify up to 1,000 URL refresh rules, 100 directory refresh rules, or 1 refresh rule that contains regular expressions in each call.
    * *   You can refresh up to 1,000 URLs per minute for each domain name.
    *
    * @param request RefreshObjectCachesRequest
    * @return RefreshObjectCachesResponse
   */
  async refreshObjectCaches(request: RefreshObjectCachesRequest): Promise<RefreshObjectCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshObjectCachesWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request RollbackStagingConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RollbackStagingConfigResponse
   */
  async rollbackStagingConfigWithOptions(request: RollbackStagingConfigRequest, runtime: $Util.RuntimeOptions): Promise<RollbackStagingConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RollbackStagingConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RollbackStagingConfigResponse>(await this.callApi(params, req, runtime), new RollbackStagingConfigResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request RollbackStagingConfigRequest
    * @return RollbackStagingConfigResponse
   */
  async rollbackStagingConfig(request: RollbackStagingConfigRequest): Promise<RollbackStagingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackStagingConfigWithOptions(request, runtime);
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request SetCdnDomainCSRCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetCdnDomainCSRCertificateResponse
   */
  async setCdnDomainCSRCertificateWithOptions(request: SetCdnDomainCSRCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetCdnDomainCSRCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.serverCertificate)) {
      query["ServerCertificate"] = request.serverCertificate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetCdnDomainCSRCertificate",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetCdnDomainCSRCertificateResponse>(await this.callApi(params, req, runtime), new SetCdnDomainCSRCertificateResponse({}));
  }

  /**
    * >  The maximum number of times that each user can call this operation per second is 100.
    *
    * @param request SetCdnDomainCSRCertificateRequest
    * @return SetCdnDomainCSRCertificateResponse
   */
  async setCdnDomainCSRCertificate(request: SetCdnDomainCSRCertificateRequest): Promise<SetCdnDomainCSRCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCdnDomainCSRCertificateWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request SetCdnDomainSMCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetCdnDomainSMCertificateResponse
   */
  async setCdnDomainSMCertificateWithOptions(request: SetCdnDomainSMCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetCdnDomainSMCertificateResponse> {
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
      action: "SetCdnDomainSMCertificate",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetCdnDomainSMCertificateResponse>(await this.callApi(params, req, runtime), new SetCdnDomainSMCertificateResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request SetCdnDomainSMCertificateRequest
    * @return SetCdnDomainSMCertificateResponse
   */
  async setCdnDomainSMCertificate(request: SetCdnDomainSMCertificateRequest): Promise<SetCdnDomainSMCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCdnDomainSMCertificateWithOptions(request, runtime);
  }

  async setCdnDomainSSLCertificateWithOptions(request: SetCdnDomainSSLCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetCdnDomainSSLCertificateResponse> {
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
      action: "SetCdnDomainSSLCertificate",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetCdnDomainSSLCertificateResponse>(await this.callApi(params, req, runtime), new SetCdnDomainSSLCertificateResponse({}));
  }

  async setCdnDomainSSLCertificate(request: SetCdnDomainSSLCertificateRequest): Promise<SetCdnDomainSSLCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCdnDomainSSLCertificateWithOptions(request, runtime);
  }

  /**
    * The features that you want to configure. Format:
    * > - **functionName**: The name of the feature. Separate multiple values with commas (,).
    * > - **argName**: The feature parameters for **functionName**.
    * > - **argValue**: The parameter values set for **functionName**.
    * ```
    *         [
    *          {
    *            "functionArgs": [
    *             {
    *              "argName": "Parameter A", 
    *              "argValue": "Parameter value"
    *             }, 
    *           {
    *             "argName": "Parameter B", 
    *             "argValue": "Parameter value"
    *              }
    *          ], 
    *          "functionName": "Feature name"
    *             }
    *         ]
    *  ```
    *
    * @param request SetCdnDomainStagingConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetCdnDomainStagingConfigResponse
   */
  async setCdnDomainStagingConfigWithOptions(request: SetCdnDomainStagingConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetCdnDomainStagingConfigResponse> {
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
      action: "SetCdnDomainStagingConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetCdnDomainStagingConfigResponse>(await this.callApi(params, req, runtime), new SetCdnDomainStagingConfigResponse({}));
  }

  /**
    * The features that you want to configure. Format:
    * > - **functionName**: The name of the feature. Separate multiple values with commas (,).
    * > - **argName**: The feature parameters for **functionName**.
    * > - **argValue**: The parameter values set for **functionName**.
    * ```
    *         [
    *          {
    *            "functionArgs": [
    *             {
    *              "argName": "Parameter A", 
    *              "argValue": "Parameter value"
    *             }, 
    *           {
    *             "argName": "Parameter B", 
    *             "argValue": "Parameter value"
    *              }
    *          ], 
    *          "functionName": "Feature name"
    *             }
    *         ]
    *  ```
    *
    * @param request SetCdnDomainStagingConfigRequest
    * @return SetCdnDomainStagingConfigResponse
   */
  async setCdnDomainStagingConfig(request: SetCdnDomainStagingConfigRequest): Promise<SetCdnDomainStagingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCdnDomainStagingConfigWithOptions(request, runtime);
  }

  /**
    * The content of the SSL certificate. Specify the content of the SSL certificate only if you want to enable the SSL certificate.
    *
    * @param request SetDomainServerCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetDomainServerCertificateResponse
   */
  async setDomainServerCertificateWithOptions(request: SetDomainServerCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainServerCertificateResponse> {
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

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serverCertificate)) {
      query["ServerCertificate"] = request.serverCertificate;
    }

    if (!Util.isUnset(request.serverCertificateStatus)) {
      query["ServerCertificateStatus"] = request.serverCertificateStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDomainServerCertificate",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDomainServerCertificateResponse>(await this.callApi(params, req, runtime), new SetDomainServerCertificateResponse({}));
  }

  /**
    * The content of the SSL certificate. Specify the content of the SSL certificate only if you want to enable the SSL certificate.
    *
    * @param request SetDomainServerCertificateRequest
    * @return SetDomainServerCertificateResponse
   */
  async setDomainServerCertificate(request: SetDomainServerCertificateRequest): Promise<SetDomainServerCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainServerCertificateWithOptions(request, runtime);
  }

  async setReqHeaderConfigWithOptions(request: SetReqHeaderConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetReqHeaderConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetReqHeaderConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetReqHeaderConfigResponse>(await this.callApi(params, req, runtime), new SetReqHeaderConfigResponse({}));
  }

  async setReqHeaderConfig(request: SetReqHeaderConfigRequest): Promise<SetReqHeaderConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setReqHeaderConfigWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request SetWaitingRoomConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetWaitingRoomConfigResponse
   */
  async setWaitingRoomConfigWithOptions(request: SetWaitingRoomConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetWaitingRoomConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowPct)) {
      query["AllowPct"] = request.allowPct;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.gapTime)) {
      query["GapTime"] = request.gapTime;
    }

    if (!Util.isUnset(request.maxTimeWait)) {
      query["MaxTimeWait"] = request.maxTimeWait;
    }

    if (!Util.isUnset(request.waitUri)) {
      query["WaitUri"] = request.waitUri;
    }

    if (!Util.isUnset(request.waitUrl)) {
      query["WaitUrl"] = request.waitUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetWaitingRoomConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetWaitingRoomConfigResponse>(await this.callApi(params, req, runtime), new SetWaitingRoomConfigResponse({}));
  }

  /**
    * > You can call this operation up to 30 times per second per account.
    *
    * @param request SetWaitingRoomConfigRequest
    * @return SetWaitingRoomConfigResponse
   */
  async setWaitingRoomConfig(request: SetWaitingRoomConfigRequest): Promise<SetWaitingRoomConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setWaitingRoomConfigWithOptions(request, runtime);
  }

  /**
    * *   If the domain name is in an invalid state or you have an overdue payment in your account, the domain name cannot be enabled.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request StartCdnDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartCdnDomainResponse
   */
  async startCdnDomainWithOptions(request: StartCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<StartCdnDomainResponse> {
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
      action: "StartCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartCdnDomainResponse>(await this.callApi(params, req, runtime), new StartCdnDomainResponse({}));
  }

  /**
    * *   If the domain name is in an invalid state or you have an overdue payment in your account, the domain name cannot be enabled.
    * *   You can call this operation up to 100 times per second per account.
    *
    * @param request StartCdnDomainRequest
    * @return StartCdnDomainResponse
   */
  async startCdnDomain(request: StartCdnDomainRequest): Promise<StartCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCdnDomainWithOptions(request, runtime);
  }

  /**
    * *   After an accelerated domain is disabled, Alibaba Cloud CDN retains its information and routes all the requests that are destined for the accelerated domain to the origin server.
    * *   You can call this operation up to 40 times per second per account.
    *
    * @param request StopCdnDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopCdnDomainResponse
   */
  async stopCdnDomainWithOptions(request: StopCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<StopCdnDomainResponse> {
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
      action: "StopCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopCdnDomainResponse>(await this.callApi(params, req, runtime), new StopCdnDomainResponse({}));
  }

  /**
    * *   After an accelerated domain is disabled, Alibaba Cloud CDN retains its information and routes all the requests that are destined for the accelerated domain to the origin server.
    * *   You can call this operation up to 40 times per second per account.
    *
    * @param request StopCdnDomainRequest
    * @return StopCdnDomainResponse
   */
  async stopCdnDomain(request: StopCdnDomainRequest): Promise<StopCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopCdnDomainWithOptions(request, runtime);
  }

  /**
    * The ID of the request.
    *
    * @param request TagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
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
      action: "TagResources",
      version: "2018-05-10",
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
    * The ID of the request.
    *
    * @param request TagResourcesRequest
    * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
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
      version: "2018-05-10",
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
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request UntagResourcesRequest
    * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to three times per second per account.
    *
    * @param request UpdateCdnDeliverTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateCdnDeliverTaskResponse
   */
  async updateCdnDeliverTaskWithOptions(request: UpdateCdnDeliverTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCdnDeliverTaskResponse> {
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
      action: "UpdateCdnDeliverTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCdnDeliverTaskResponse>(await this.callApi(params, req, runtime), new UpdateCdnDeliverTaskResponse({}));
  }

  /**
    * > You can call this operation up to three times per second per account.
    *
    * @param request UpdateCdnDeliverTaskRequest
    * @return UpdateCdnDeliverTaskResponse
   */
  async updateCdnDeliverTask(request: UpdateCdnDeliverTaskRequest): Promise<UpdateCdnDeliverTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCdnDeliverTaskWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to three times per second per account.
    *
    * @param request UpdateCdnSubTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateCdnSubTaskResponse
   */
  async updateCdnSubTaskWithOptions(request: UpdateCdnSubTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCdnSubTaskResponse> {
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
      action: "UpdateCdnSubTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCdnSubTaskResponse>(await this.callApi(params, req, runtime), new UpdateCdnSubTaskResponse({}));
  }

  /**
    * > You can call this operation up to three times per second per account.
    *
    * @param request UpdateCdnSubTaskRequest
    * @return UpdateCdnSubTaskResponse
   */
  async updateCdnSubTask(request: UpdateCdnSubTaskRequest): Promise<UpdateCdnSubTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCdnSubTaskWithOptions(request, runtime);
  }

  async updateFCTriggerWithOptions(request: UpdateFCTriggerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFCTriggerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.triggerARN)) {
      query["TriggerARN"] = request.triggerARN;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.functionARN)) {
      body["FunctionARN"] = request.functionARN;
    }

    if (!Util.isUnset(request.notes)) {
      body["Notes"] = request.notes;
    }

    if (!Util.isUnset(request.roleARN)) {
      body["RoleARN"] = request.roleARN;
    }

    if (!Util.isUnset(request.sourceARN)) {
      body["SourceARN"] = request.sourceARN;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFCTrigger",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFCTriggerResponse>(await this.callApi(params, req, runtime), new UpdateFCTriggerResponse({}));
  }

  async updateFCTrigger(request: UpdateFCTriggerRequest): Promise<UpdateFCTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFCTriggerWithOptions(request, runtime);
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request VerifyDomainOwnerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return VerifyDomainOwnerResponse
   */
  async verifyDomainOwnerWithOptions(request: VerifyDomainOwnerRequest, runtime: $Util.RuntimeOptions): Promise<VerifyDomainOwnerResponse> {
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
      action: "VerifyDomainOwner",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyDomainOwnerResponse>(await this.callApi(params, req, runtime), new VerifyDomainOwnerResponse({}));
  }

  /**
    * > You can call this operation up to 100 times per second per account.
    *
    * @param request VerifyDomainOwnerRequest
    * @return VerifyDomainOwnerResponse
   */
  async verifyDomainOwner(request: VerifyDomainOwnerRequest): Promise<VerifyDomainOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyDomainOwnerWithOptions(request, runtime);
  }

}
