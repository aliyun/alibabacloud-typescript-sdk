// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddCorsDomainRequest extends $tea.Model {
  domain?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCorsDomainResponseBody extends $tea.Model {
  domainId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCorsDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddCorsDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddCorsDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDingtalkOpenPlatformConfigRequest extends $tea.Model {
  appId?: string;
  appSecret?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecret: 'AppSecret',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecret: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDingtalkOpenPlatformConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDingtalkOpenPlatformConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDingtalkOpenPlatformConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDingtalkOpenPlatformConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachWebHostingCertificateRequest extends $tea.Model {
  certName?: string;
  certType?: string;
  domain?: string;
  privateKey?: string;
  serverCertificate?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certType: 'CertType',
      domain: 'Domain',
      privateKey: 'PrivateKey',
      serverCertificate: 'ServerCertificate',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certType: 'string',
      domain: 'string',
      privateKey: 'string',
      serverCertificate: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachWebHostingCertificateResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachWebHostingCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachWebHostingCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachWebHostingCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteWebHostingFilesRequest extends $tea.Model {
  filePaths?: string[];
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      filePaths: 'FilePaths',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePaths: { 'type': 'array', 'itemType': 'string' },
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteWebHostingFilesResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteWebHostingFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchDeleteWebHostingFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchDeleteWebHostingFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindWebHostingCustomDomainRequest extends $tea.Model {
  customDomain?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      customDomain: 'CustomDomain',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomain: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindWebHostingCustomDomainResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindWebHostingCustomDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindWebHostingCustomDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindWebHostingCustomDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMpServerlessRoleExistsRequest extends $tea.Model {
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMpServerlessRoleExistsResponseBody extends $tea.Model {
  exists?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exists: 'Exists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exists: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMpServerlessRoleExistsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckMpServerlessRoleExistsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckMpServerlessRoleExistsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBExportTaskRequest extends $tea.Model {
  collection?: string;
  fields?: string;
  fileType?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      fields: 'Fields',
      fileType: 'FileType',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      fields: 'string',
      fileType: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBExportTaskResponseBody extends $tea.Model {
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

export class CreateDBExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDBExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDBExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBImportTaskRequest extends $tea.Model {
  collection?: string;
  fileType?: string;
  mode?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      fileType: 'FileType',
      mode: 'Mode',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      fileType: 'string',
      mode: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBImportTaskResponseBody extends $tea.Model {
  accessKeyId?: string;
  expireTime?: string;
  fileKey?: string;
  host?: string;
  policy?: string;
  requestId?: string;
  signature?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      expireTime: 'ExpireTime',
      fileKey: 'FileKey',
      host: 'Host',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      expireTime: 'string',
      fileKey: 'string',
      host: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBImportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDBImportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDBImportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBRestoreTaskRequest extends $tea.Model {
  backupId?: string;
  newCollections?: string;
  originCollections?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      newCollections: 'NewCollections',
      originCollections: 'OriginCollections',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      newCollections: 'string',
      originCollections: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBRestoreTaskResponseBody extends $tea.Model {
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

export class CreateDBRestoreTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDBRestoreTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDBRestoreTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionRequest extends $tea.Model {
  desc?: string;
  name?: string;
  runtime?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      name: 'Name',
      runtime: 'Runtime',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      name: 'string',
      runtime: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResponseBody extends $tea.Model {
  createdAt?: string;
  desc?: string;
  modifiedAt?: string;
  name?: string;
  requestId?: string;
  spec?: CreateFunctionResponseBodySpec;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      desc: 'Desc',
      modifiedAt: 'ModifiedAt',
      name: 'Name',
      requestId: 'RequestId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      desc: 'string',
      modifiedAt: 'string',
      name: 'string',
      requestId: 'string',
      spec: CreateFunctionResponseBodySpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionDeploymentRequest extends $tea.Model {
  name?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionDeploymentResponseBody extends $tea.Model {
  deploymentId?: string;
  requestId?: string;
  uploadSignedUrl?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'DeploymentId',
      requestId: 'RequestId',
      uploadSignedUrl: 'UploadSignedUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      requestId: 'string',
      uploadSignedUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFunctionDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFunctionDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSpaceRequest extends $tea.Model {
  desc?: string;
  name?: string;
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      name: 'Name',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      name: 'string',
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSpaceResponseBody extends $tea.Model {
  requestId?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSpaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSpaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSpaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAntOpenPlatformConfigRequest extends $tea.Model {
  appId?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAntOpenPlatformConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAntOpenPlatformConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAntOpenPlatformConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAntOpenPlatformConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCorsDomainRequest extends $tea.Model {
  domainId?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCorsDomainResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCorsDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCorsDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCorsDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBCollectionRequest extends $tea.Model {
  body?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBCollectionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBCollectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDBCollectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDBCollectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDingtalkOpenPlatformConfigRequest extends $tea.Model {
  appId?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDingtalkOpenPlatformConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDingtalkOpenPlatformConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDingtalkOpenPlatformConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDingtalkOpenPlatformConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileRequest extends $tea.Model {
  id?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionRequest extends $tea.Model {
  name?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSpaceRequest extends $tea.Model {
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSpaceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSpaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSpaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSpaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebHostingCertificateRequest extends $tea.Model {
  domain?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebHostingCertificateResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebHostingCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteWebHostingCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteWebHostingCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebHostingFileRequest extends $tea.Model {
  filePath?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebHostingFileResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebHostingFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteWebHostingFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteWebHostingFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWechatOpenPlatformConfigRequest extends $tea.Model {
  appId?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWechatOpenPlatformConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWechatOpenPlatformConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteWechatOpenPlatformConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteWechatOpenPlatformConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFunctionRequest extends $tea.Model {
  deploymentId?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'DeploymentId',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFunctionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFunctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeployFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeployFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFCOpenStatusResponseBody extends $tea.Model {
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFCOpenStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFCOpenStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFCOpenStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileUploadSignedUrlRequest extends $tea.Model {
  contentType?: string;
  filename?: string;
  size?: number;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      filename: 'Filename',
      size: 'Size',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      filename: 'string',
      size: 'number',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileUploadSignedUrlResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  signUrl?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
      signUrl: 'SignUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
      signUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileUploadSignedUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFileUploadSignedUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFileUploadSignedUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFunctionRequest extends $tea.Model {
  name?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFunctionResponseBody extends $tea.Model {
  deployment?: DescribeFunctionResponseBodyDeployment;
  function?: DescribeFunctionResponseBodyFunction;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deployment: 'Deployment',
      function: 'Function',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployment: DescribeFunctionResponseBodyDeployment,
      function: DescribeFunctionResponseBodyFunction,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFunctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHttpTriggerConfigRequest extends $tea.Model {
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHttpTriggerConfigResponseBody extends $tea.Model {
  customDomain?: string;
  customDomainCertificateInfo?: string;
  customDomainCname?: string;
  defaultEndpoint?: string;
  enableService?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customDomain: 'CustomDomain',
      customDomainCertificateInfo: 'CustomDomainCertificateInfo',
      customDomainCname: 'CustomDomainCname',
      defaultEndpoint: 'DefaultEndpoint',
      enableService: 'EnableService',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomain: 'string',
      customDomainCertificateInfo: 'string',
      customDomainCname: 'string',
      defaultEndpoint: 'string',
      enableService: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHttpTriggerConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHttpTriggerConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHttpTriggerConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceQuotaRequest extends $tea.Model {
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceQuotaResponseBody extends $tea.Model {
  cloudStorageDataSizeQuota?: number;
  requestId?: string;
  staticWebDataSizeQuota?: number;
  static names(): { [key: string]: string } {
    return {
      cloudStorageDataSizeQuota: 'CloudStorageDataSizeQuota',
      requestId: 'RequestId',
      staticWebDataSizeQuota: 'StaticWebDataSizeQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudStorageDataSizeQuota: 'number',
      requestId: 'string',
      staticWebDataSizeQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeResourceQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeResourceQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageRequest extends $tea.Model {
  endTime?: string;
  format?: string;
  pageNumber?: number;
  pageSize?: number;
  spaceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      format: 'Format',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      spaceId: 'SpaceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      format: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      spaceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageResponseBody extends $tea.Model {
  code?: string;
  dataList?: DescribeResourceUsageResponseBodyDataList[];
  httpStatusCode?: string;
  message?: string;
  paginator?: DescribeResourceUsageResponseBodyPaginator;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataList: 'DataList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      paginator: 'Paginator',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataList: { 'type': 'array', 'itemType': DescribeResourceUsageResponseBodyDataList },
      httpStatusCode: 'string',
      message: 'string',
      paginator: DescribeResourceUsageResponseBodyPaginator,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeResourceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeResourceUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServicePolicyRequest extends $tea.Model {
  collectionName?: string;
  serviceName?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collectionName: 'CollectionName',
      serviceName: 'ServiceName',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionName: 'string',
      serviceName: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServicePolicyResponseBody extends $tea.Model {
  collectionName?: string;
  policy?: string;
  policyName?: string;
  requestId?: string;
  serviceName?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collectionName: 'CollectionName',
      policy: 'Policy',
      policyName: 'PolicyName',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionName: 'string',
      policy: 'string',
      policyName: 'string',
      requestId: 'string',
      serviceName: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServicePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeServicePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeServicePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpaceClientConfigRequest extends $tea.Model {
  detail?: string;
  spaceId?: string;
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      spaceId: 'SpaceId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      spaceId: 'string',
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpaceClientConfigResponseBody extends $tea.Model {
  apiKey?: string;
  endpoint?: string;
  fileUploadEndpoint?: string;
  name?: string;
  privateKey?: string;
  requestId?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      endpoint: 'Endpoint',
      fileUploadEndpoint: 'FileUploadEndpoint',
      name: 'Name',
      privateKey: 'PrivateKey',
      requestId: 'RequestId',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      endpoint: 'string',
      fileUploadEndpoint: 'string',
      name: 'string',
      privateKey: 'string',
      requestId: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpaceClientConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSpaceClientConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSpaceClientConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebHostingFileRequest extends $tea.Model {
  filePath?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebHostingFileResponseBody extends $tea.Model {
  data?: DescribeWebHostingFileResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeWebHostingFileResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebHostingFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebHostingFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebHostingFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableExtensionRequest extends $tea.Model {
  extensionId?: string;
  static names(): { [key: string]: string } {
    return {
      extensionId: 'ExtensionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableExtensionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableExtensionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableExtensionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableExtensionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingCertificateDetailRequest extends $tea.Model {
  customDomain?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      customDomain: 'CustomDomain',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomain: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingCertificateDetailResponseBody extends $tea.Model {
  data?: GetWebHostingCertificateDetailResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetWebHostingCertificateDetailResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingCertificateDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWebHostingCertificateDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWebHostingCertificateDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingConfigRequest extends $tea.Model {
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingConfigResponseBody extends $tea.Model {
  data?: GetWebHostingConfigResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetWebHostingConfigResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWebHostingConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWebHostingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingDomainVerificationContentRequest extends $tea.Model {
  domain?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingDomainVerificationContentResponseBody extends $tea.Model {
  data?: GetWebHostingDomainVerificationContentResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetWebHostingDomainVerificationContentResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingDomainVerificationContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWebHostingDomainVerificationContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWebHostingDomainVerificationContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingStatusRequest extends $tea.Model {
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingStatusResponseBody extends $tea.Model {
  data?: GetWebHostingStatusResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetWebHostingStatusResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWebHostingStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWebHostingStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingUploadCredentialRequest extends $tea.Model {
  filePath?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingUploadCredentialResponseBody extends $tea.Model {
  data?: GetWebHostingUploadCredentialResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetWebHostingUploadCredentialResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingUploadCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWebHostingUploadCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWebHostingUploadCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableCertificatesRequest extends $tea.Model {
  domain?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableCertificatesResponseBody extends $tea.Model {
  data?: ListAvailableCertificatesResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAvailableCertificatesResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableCertificatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAvailableCertificatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAvailableCertificatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorsDomainsRequest extends $tea.Model {
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorsDomainsResponseBody extends $tea.Model {
  domains?: ListCorsDomainsResponseBodyDomains[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': ListCorsDomainsResponseBodyDomains },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorsDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCorsDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCorsDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDingtalkOpenPlatformConfigsRequest extends $tea.Model {
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDingtalkOpenPlatformConfigsResponseBody extends $tea.Model {
  configs?: ListDingtalkOpenPlatformConfigsResponseBodyConfigs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListDingtalkOpenPlatformConfigsResponseBodyConfigs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDingtalkOpenPlatformConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDingtalkOpenPlatformConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDingtalkOpenPlatformConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExtensionsRequest extends $tea.Model {
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

export class ListExtensionsResponseBody extends $tea.Model {
  extensions?: ListExtensionsResponseBodyExtensions[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      extensions: 'Extensions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensions: { 'type': 'array', 'itemType': ListExtensionsResponseBodyExtensions },
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

export class ListExtensionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListExtensionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListExtensionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileRequest extends $tea.Model {
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileResponseBody extends $tea.Model {
  dataList?: ListFileResponseBodyDataList[];
  paginator?: ListFileResponseBodyPaginator;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      paginator: 'Paginator',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListFileResponseBodyDataList },
      paginator: ListFileResponseBodyPaginator,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionRequest extends $tea.Model {
  filterBy?: string;
  pageNum?: number;
  pageSize?: number;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      filterBy: 'FilterBy',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterBy: 'string',
      pageNum: 'number',
      pageSize: 'number',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionResponseBody extends $tea.Model {
  dataList?: ListFunctionResponseBodyDataList[];
  paginator?: ListFunctionResponseBodyPaginator;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      paginator: 'Paginator',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListFunctionResponseBodyDataList },
      paginator: ListFunctionResponseBodyPaginator,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionDeploymentRequest extends $tea.Model {
  name?: string;
  pageNum?: number;
  pageSize?: number;
  spaceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      spaceId: 'SpaceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      spaceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionDeploymentResponseBody extends $tea.Model {
  dataList?: ListFunctionDeploymentResponseBodyDataList[];
  paginator?: ListFunctionDeploymentResponseBodyPaginator;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      paginator: 'Paginator',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListFunctionDeploymentResponseBodyDataList },
      paginator: ListFunctionDeploymentResponseBodyPaginator,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFunctionDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFunctionDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionLogRequest extends $tea.Model {
  fromDate?: number;
  logRequestId?: string;
  name?: string;
  pageNum?: number;
  pageSize?: number;
  spaceId?: string;
  status?: string;
  toDate?: number;
  static names(): { [key: string]: string } {
    return {
      fromDate: 'FromDate',
      logRequestId: 'LogRequestId',
      name: 'Name',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      spaceId: 'SpaceId',
      status: 'Status',
      toDate: 'ToDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromDate: 'number',
      logRequestId: 'string',
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      spaceId: 'string',
      status: 'string',
      toDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionLogResponseBody extends $tea.Model {
  dataList?: ListFunctionLogResponseBodyDataList[];
  paginator?: ListFunctionLogResponseBodyPaginator;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      paginator: 'Paginator',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListFunctionLogResponseBodyDataList },
      paginator: ListFunctionLogResponseBodyPaginator,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFunctionLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFunctionLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenPlatformConfigRequest extends $tea.Model {
  platform?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      platform: 'Platform',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platform: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenPlatformConfigResponseBody extends $tea.Model {
  requestId?: string;
  secretList?: ListOpenPlatformConfigResponseBodySecretList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretList: 'SecretList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretList: { 'type': 'array', 'itemType': ListOpenPlatformConfigResponseBodySecretList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenPlatformConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOpenPlatformConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOpenPlatformConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpaceRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpaceResponseBody extends $tea.Model {
  count?: number;
  gmtCreate?: string;
  requestId?: string;
  spaces?: ListSpaceResponseBodySpaces[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      gmtCreate: 'GmtCreate',
      requestId: 'RequestId',
      spaces: 'Spaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      gmtCreate: 'string',
      requestId: 'string',
      spaces: { 'type': 'array', 'itemType': ListSpaceResponseBodySpaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSpaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSpaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebHostingCustomDomainsRequest extends $tea.Model {
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebHostingCustomDomainsResponseBody extends $tea.Model {
  data?: ListWebHostingCustomDomainsResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListWebHostingCustomDomainsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebHostingCustomDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListWebHostingCustomDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListWebHostingCustomDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebHostingFilesRequest extends $tea.Model {
  marker?: string;
  pageSize?: number;
  prefix?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      pageSize: 'PageSize',
      prefix: 'Prefix',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      pageSize: 'number',
      prefix: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebHostingFilesResponseBody extends $tea.Model {
  data?: ListWebHostingFilesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListWebHostingFilesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebHostingFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListWebHostingFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListWebHostingFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebHostingConfigRequest extends $tea.Model {
  allowedIps?: string;
  errorPath?: string;
  historyModePath?: string;
  indexPath?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      allowedIps: 'AllowedIps',
      errorPath: 'ErrorPath',
      historyModePath: 'HistoryModePath',
      indexPath: 'IndexPath',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedIps: 'string',
      errorPath: 'string',
      historyModePath: 'string',
      indexPath: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebHostingConfigResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebHostingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebHostingConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebHostingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenServiceRequest extends $tea.Model {
  serviceName?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'ServiceName',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenServiceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenWebHostingServiceRequest extends $tea.Model {
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenWebHostingServiceResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenWebHostingServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenWebHostingServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenWebHostingServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBBackupCollectionsRequest extends $tea.Model {
  backupId?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBBackupCollectionsResponseBody extends $tea.Model {
  collections?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      collections: 'Collections',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collections: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBBackupCollectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDBBackupCollectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDBBackupCollectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBBackupDumpTimesRequest extends $tea.Model {
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBBackupDumpTimesResponseBody extends $tea.Model {
  backupDumpTimes?: QueryDBBackupDumpTimesResponseBodyBackupDumpTimes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupDumpTimes: 'BackupDumpTimes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDumpTimes: { 'type': 'array', 'itemType': QueryDBBackupDumpTimesResponseBodyBackupDumpTimes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBBackupDumpTimesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDBBackupDumpTimesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDBBackupDumpTimesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBExportTaskStatusRequest extends $tea.Model {
  spaceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBExportTaskStatusResponseBody extends $tea.Model {
  detailMessage?: string;
  downloadUrl?: string;
  exportedCount?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detailMessage: 'DetailMessage',
      downloadUrl: 'DownloadUrl',
      exportedCount: 'ExportedCount',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailMessage: 'string',
      downloadUrl: 'string',
      exportedCount: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBExportTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDBExportTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDBExportTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBImportTaskStatusRequest extends $tea.Model {
  spaceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBImportTaskStatusResponseBody extends $tea.Model {
  detailMessage?: string;
  failedCount?: string;
  requestId?: string;
  status?: string;
  successCount?: string;
  static names(): { [key: string]: string } {
    return {
      detailMessage: 'DetailMessage',
      failedCount: 'FailedCount',
      requestId: 'RequestId',
      status: 'Status',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailMessage: 'string',
      failedCount: 'string',
      requestId: 'string',
      status: 'string',
      successCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBImportTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDBImportTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDBImportTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBRestoreTaskStatusRequest extends $tea.Model {
  spaceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBRestoreTaskStatusResponseBody extends $tea.Model {
  detailMessage?: string;
  failedCount?: number;
  requestId?: string;
  status?: string;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      detailMessage: 'DetailMessage',
      failedCount: 'FailedCount',
      requestId: 'RequestId',
      status: 'Status',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailMessage: 'string',
      failedCount: 'number',
      requestId: 'string',
      status: 'string',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBRestoreTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDBRestoreTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDBRestoreTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServiceStatusRequest extends $tea.Model {
  serviceName?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'ServiceName',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServiceStatusResponseBody extends $tea.Model {
  requestId?: string;
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterFileRequest extends $tea.Model {
  id?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterFileResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameDBCollectionRequest extends $tea.Model {
  newCollection?: string;
  originCollection?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      newCollection: 'NewCollection',
      originCollection: 'OriginCollection',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newCollection: 'string',
      originCollection: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameDBCollectionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameDBCollectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenameDBCollectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenameDBCollectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetServerSecretRequest extends $tea.Model {
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetServerSecretResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetServerSecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetServerSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetServerSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDBCommandRequest extends $tea.Model {
  body?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDBCommandResponseBody extends $tea.Model {
  affectedDocs?: number;
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      affectedDocs: 'AffectedDocs',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedDocs: 'number',
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDBCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunDBCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunDBCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunFunctionRequest extends $tea.Model {
  body?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunFunctionResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  runtimeMeta?: RunFunctionResponseBodyRuntimeMeta;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      runtimeMeta: 'RuntimeMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      runtimeMeta: RunFunctionResponseBodyRuntimeMeta,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunFunctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAntOpenPlatformConfigRequest extends $tea.Model {
  appCert?: string;
  appId?: string;
  privateKey?: string;
  publicCert?: string;
  publicKey?: string;
  rootCert?: string;
  signMode?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appCert: 'AppCert',
      appId: 'AppId',
      privateKey: 'PrivateKey',
      publicCert: 'PublicCert',
      publicKey: 'PublicKey',
      rootCert: 'RootCert',
      signMode: 'SignMode',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCert: 'string',
      appId: 'string',
      privateKey: 'string',
      publicCert: 'string',
      publicKey: 'string',
      rootCert: 'string',
      signMode: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAntOpenPlatformConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAntOpenPlatformConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveAntOpenPlatformConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveAntOpenPlatformConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAppAuthTokenRequest extends $tea.Model {
  appAuthToken?: string;
  appId?: string;
  isvAppId?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appAuthToken: 'AppAuthToken',
      appId: 'AppId',
      isvAppId: 'IsvAppId',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appAuthToken: 'string',
      appId: 'string',
      isvAppId: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAppAuthTokenResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAppAuthTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveAppAuthTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveAppAuthTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebHostingCustomDomainConfigRequest extends $tea.Model {
  domainName?: string;
  forceRedirectType?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      forceRedirectType: 'ForceRedirectType',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      forceRedirectType: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebHostingCustomDomainConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebHostingCustomDomainConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveWebHostingCustomDomainConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveWebHostingCustomDomainConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebHostingCustomDomainCorsConfigRequest extends $tea.Model {
  accessControlAllowOrigin?: string;
  domainName?: string;
  enableCors?: boolean;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessControlAllowOrigin: 'AccessControlAllowOrigin',
      domainName: 'DomainName',
      enableCors: 'EnableCors',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlAllowOrigin: 'string',
      domainName: 'string',
      enableCors: 'boolean',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebHostingCustomDomainCorsConfigResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebHostingCustomDomainCorsConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveWebHostingCustomDomainCorsConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveWebHostingCustomDomainCorsConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWechatOpenPlatformConfigRequest extends $tea.Model {
  appId?: string;
  appSecret?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecret: 'AppSecret',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecret: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWechatOpenPlatformConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWechatOpenPlatformConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveWechatOpenPlatformConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveWechatOpenPlatformConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindWebHostingCustomDomainRequest extends $tea.Model {
  customDomain?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      customDomain: 'CustomDomain',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomain: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindWebHostingCustomDomainResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindWebHostingCustomDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindWebHostingCustomDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindWebHostingCustomDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDingtalkOpenPlatformConfigRequest extends $tea.Model {
  appId?: string;
  appSecret?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecret: 'AppSecret',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecret: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDingtalkOpenPlatformConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDingtalkOpenPlatformConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDingtalkOpenPlatformConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDingtalkOpenPlatformConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionRequest extends $tea.Model {
  desc?: string;
  httpTriggerPath?: string;
  instanceConcurrency?: number;
  memory?: number;
  name?: string;
  runtime?: string;
  spaceId?: string;
  timeout?: number;
  timingTriggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      httpTriggerPath: 'HttpTriggerPath',
      instanceConcurrency: 'InstanceConcurrency',
      memory: 'Memory',
      name: 'Name',
      runtime: 'Runtime',
      spaceId: 'SpaceId',
      timeout: 'Timeout',
      timingTriggerConfig: 'TimingTriggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      httpTriggerPath: 'string',
      instanceConcurrency: 'number',
      memory: 'number',
      name: 'string',
      runtime: 'string',
      spaceId: 'string',
      timeout: 'number',
      timingTriggerConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResponseBody extends $tea.Model {
  createdAt?: string;
  desc?: string;
  httpTriggerPath?: string;
  modifiedAt?: string;
  name?: string;
  requestId?: string;
  spec?: UpdateFunctionResponseBodySpec;
  timingTriggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      desc: 'Desc',
      httpTriggerPath: 'HttpTriggerPath',
      modifiedAt: 'ModifiedAt',
      name: 'Name',
      requestId: 'RequestId',
      spec: 'Spec',
      timingTriggerConfig: 'TimingTriggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      desc: 'string',
      httpTriggerPath: 'string',
      modifiedAt: 'string',
      name: 'string',
      requestId: 'string',
      spec: UpdateFunctionResponseBodySpec,
      timingTriggerConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpTriggerConfigRequest extends $tea.Model {
  customDomain?: string;
  customDomainCertificate?: string;
  customDomainPrivateKey?: string;
  enableService?: boolean;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      customDomain: 'CustomDomain',
      customDomainCertificate: 'CustomDomainCertificate',
      customDomainPrivateKey: 'CustomDomainPrivateKey',
      enableService: 'EnableService',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomain: 'string',
      customDomainCertificate: 'string',
      customDomainPrivateKey: 'string',
      enableService: 'boolean',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpTriggerConfigResponseBody extends $tea.Model {
  customDomain?: string;
  customDomainCertificateInfo?: string;
  customDomainCname?: string;
  defaultEndpoint?: string;
  enableService?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customDomain: 'CustomDomain',
      customDomainCertificateInfo: 'CustomDomainCertificateInfo',
      customDomainCname: 'CustomDomainCname',
      defaultEndpoint: 'DefaultEndpoint',
      enableService: 'EnableService',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomain: 'string',
      customDomainCertificateInfo: 'string',
      customDomainCname: 'string',
      defaultEndpoint: 'string',
      enableService: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpTriggerConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateHttpTriggerConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateHttpTriggerConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServicePolicyRequest extends $tea.Model {
  collectionName?: string;
  policy?: string;
  policyName?: string;
  serviceName?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collectionName: 'CollectionName',
      policy: 'Policy',
      policyName: 'PolicyName',
      serviceName: 'ServiceName',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionName: 'string',
      policy: 'string',
      policyName: 'string',
      serviceName: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServicePolicyResponseBody extends $tea.Model {
  collectionName?: string;
  policy?: string;
  policyName?: string;
  requestId?: string;
  serviceName?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collectionName: 'CollectionName',
      policy: 'Policy',
      policyName: 'PolicyName',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionName: 'string',
      policy: 'string',
      policyName: 'string',
      requestId: 'string',
      serviceName: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServicePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateServicePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateServicePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSpaceRequest extends $tea.Model {
  desc?: string;
  spaceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      spaceId: 'SpaceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      spaceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSpaceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSpaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSpaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSpaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWebHostingDomainOwnerRequest extends $tea.Model {
  domain?: string;
  spaceId?: string;
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      spaceId: 'SpaceId',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      spaceId: 'string',
      verifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWebHostingDomainOwnerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWebHostingDomainOwnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifyWebHostingDomainOwnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyWebHostingDomainOwnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResponseBodySpec extends $tea.Model {
  instanceConcurrency?: string;
  memory?: string;
  runtime?: string;
  timeout?: string;
  static names(): { [key: string]: string } {
    return {
      instanceConcurrency: 'InstanceConcurrency',
      memory: 'Memory',
      runtime: 'Runtime',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConcurrency: 'string',
      memory: 'string',
      runtime: 'string',
      timeout: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFunctionResponseBodyDeployment extends $tea.Model {
  createdAt?: string;
  deploymentId?: string;
  downloadSignedUrl?: string;
  modifiedAt?: string;
  versionNo?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      deploymentId: 'DeploymentId',
      downloadSignedUrl: 'DownloadSignedUrl',
      modifiedAt: 'ModifiedAt',
      versionNo: 'VersionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      deploymentId: 'string',
      downloadSignedUrl: 'string',
      modifiedAt: 'string',
      versionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFunctionResponseBodyFunctionSpec extends $tea.Model {
  instanceConcurrency?: number;
  memory?: string;
  runtime?: string;
  timeout?: string;
  static names(): { [key: string]: string } {
    return {
      instanceConcurrency: 'InstanceConcurrency',
      memory: 'Memory',
      runtime: 'Runtime',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConcurrency: 'number',
      memory: 'string',
      runtime: 'string',
      timeout: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFunctionResponseBodyFunction extends $tea.Model {
  createdAt?: string;
  desc?: string;
  httpTriggerPath?: string;
  modifiedAt?: string;
  name?: string;
  spec?: DescribeFunctionResponseBodyFunctionSpec;
  timingTriggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      desc: 'Desc',
      httpTriggerPath: 'HttpTriggerPath',
      modifiedAt: 'ModifiedAt',
      name: 'Name',
      spec: 'Spec',
      timingTriggerConfig: 'TimingTriggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      desc: 'string',
      httpTriggerPath: 'string',
      modifiedAt: 'string',
      name: 'string',
      spec: DescribeFunctionResponseBodyFunctionSpec,
      timingTriggerConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageResponseBodyDataListCloudDB extends $tea.Model {
  dataSize?: number;
  read?: number;
  write?: number;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      read: 'Read',
      write: 'Write',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'number',
      read: 'number',
      write: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageResponseBodyDataListCloudFunction extends $tea.Model {
  compute?: number;
  count?: number;
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      compute: 'Compute',
      count: 'Count',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: 'number',
      count: 'number',
      traffic: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageResponseBodyDataListCloudStorage extends $tea.Model {
  dataSize?: number;
  download?: number;
  traffic?: number;
  upload?: number;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      download: 'Download',
      traffic: 'Traffic',
      upload: 'Upload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'number',
      download: 'number',
      traffic: 'number',
      upload: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageResponseBodyDataListStaticWeb extends $tea.Model {
  dataSize?: number;
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'number',
      traffic: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageResponseBodyDataList extends $tea.Model {
  cloudDB?: DescribeResourceUsageResponseBodyDataListCloudDB;
  cloudFunction?: DescribeResourceUsageResponseBodyDataListCloudFunction;
  cloudStorage?: DescribeResourceUsageResponseBodyDataListCloudStorage;
  endTime?: string;
  startTime?: string;
  staticWeb?: DescribeResourceUsageResponseBodyDataListStaticWeb;
  static names(): { [key: string]: string } {
    return {
      cloudDB: 'CloudDB',
      cloudFunction: 'CloudFunction',
      cloudStorage: 'CloudStorage',
      endTime: 'EndTime',
      startTime: 'StartTime',
      staticWeb: 'StaticWeb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudDB: DescribeResourceUsageResponseBodyDataListCloudDB,
      cloudFunction: DescribeResourceUsageResponseBodyDataListCloudFunction,
      cloudStorage: DescribeResourceUsageResponseBodyDataListCloudStorage,
      endTime: 'string',
      startTime: 'string',
      staticWeb: DescribeResourceUsageResponseBodyDataListStaticWeb,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageResponseBodyPaginator extends $tea.Model {
  pageCount?: number;
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebHostingFileResponseBodyData extends $tea.Model {
  contentType?: string;
  ETag?: string;
  exists?: boolean;
  filePath?: string;
  lastModifiedTime?: number;
  signedUrl?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      ETag: 'ETag',
      exists: 'Exists',
      filePath: 'FilePath',
      lastModifiedTime: 'LastModifiedTime',
      signedUrl: 'SignedUrl',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      ETag: 'string',
      exists: 'boolean',
      filePath: 'string',
      lastModifiedTime: 'number',
      signedUrl: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingCertificateDetailResponseBodyData extends $tea.Model {
  certDomainName?: string;
  certExpiredTime?: number;
  certLife?: string;
  certName?: string;
  certType?: string;
  serverCertificateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      certDomainName: 'CertDomainName',
      certExpiredTime: 'CertExpiredTime',
      certLife: 'CertLife',
      certName: 'CertName',
      certType: 'CertType',
      serverCertificateStatus: 'ServerCertificateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDomainName: 'string',
      certExpiredTime: 'number',
      certLife: 'string',
      certName: 'string',
      certType: 'string',
      serverCertificateStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingConfigResponseBodyData extends $tea.Model {
  allowedIps?: string;
  defaultDomain?: string;
  errorPath?: string;
  historyModePath?: string;
  indexPath?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      allowedIps: 'AllowedIps',
      defaultDomain: 'DefaultDomain',
      errorPath: 'ErrorPath',
      historyModePath: 'HistoryModePath',
      indexPath: 'IndexPath',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedIps: 'string',
      defaultDomain: 'string',
      errorPath: 'string',
      historyModePath: 'string',
      indexPath: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingDomainVerificationContentResponseBodyData extends $tea.Model {
  content?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingStatusResponseBodyData extends $tea.Model {
  spaceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingUploadCredentialResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  endpoint?: string;
  expiredTime?: number;
  filePath?: string;
  policy?: string;
  securityToken?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      endpoint: 'Endpoint',
      expiredTime: 'ExpiredTime',
      filePath: 'FilePath',
      policy: 'Policy',
      securityToken: 'SecurityToken',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      endpoint: 'string',
      expiredTime: 'number',
      filePath: 'string',
      policy: 'string',
      securityToken: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableCertificatesResponseBodyData extends $tea.Model {
  id?: string;
  name?: string;
  statusCode?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      statusCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorsDomainsResponseBodyDomains extends $tea.Model {
  domain?: string;
  domainId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      domainId: 'DomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      domainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDingtalkOpenPlatformConfigsResponseBodyConfigs extends $tea.Model {
  appId?: string;
  appSecret?: string;
  createTime?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecret: 'AppSecret',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecret: 'string',
      createTime: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExtensionsResponseBodyExtensions extends $tea.Model {
  enabled?: string;
  extensionDesc?: string;
  extensionDocumentationLink?: string;
  extensionId?: string;
  extensionName?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      extensionDesc: 'ExtensionDesc',
      extensionDocumentationLink: 'ExtensionDocumentationLink',
      extensionId: 'ExtensionId',
      extensionName: 'ExtensionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'string',
      extensionDesc: 'string',
      extensionDocumentationLink: 'string',
      extensionId: 'string',
      extensionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileResponseBodyDataList extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  id?: string;
  name?: string;
  size?: number;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      size: 'Size',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      name: 'string',
      size: 'number',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileResponseBodyPaginator extends $tea.Model {
  pageCount?: number;
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionResponseBodyDataListSpec extends $tea.Model {
  instanceConcurrency?: number;
  memory?: string;
  runtime?: string;
  timeout?: string;
  static names(): { [key: string]: string } {
    return {
      instanceConcurrency: 'InstanceConcurrency',
      memory: 'Memory',
      runtime: 'Runtime',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConcurrency: 'number',
      memory: 'string',
      runtime: 'string',
      timeout: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionResponseBodyDataList extends $tea.Model {
  createdAt?: string;
  desc?: string;
  httpTriggerPath?: string;
  modifiedAt?: string;
  name?: string;
  spec?: ListFunctionResponseBodyDataListSpec;
  timingTriggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      desc: 'Desc',
      httpTriggerPath: 'HttpTriggerPath',
      modifiedAt: 'ModifiedAt',
      name: 'Name',
      spec: 'Spec',
      timingTriggerConfig: 'TimingTriggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      desc: 'string',
      httpTriggerPath: 'string',
      modifiedAt: 'string',
      name: 'string',
      spec: ListFunctionResponseBodyDataListSpec,
      timingTriggerConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionResponseBodyPaginator extends $tea.Model {
  pageCount?: number;
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionDeploymentResponseBodyDataListStatus extends $tea.Model {
  label?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionDeploymentResponseBodyDataList extends $tea.Model {
  createdAt?: string;
  deploymentId?: string;
  downloadSignedUrl?: string;
  modifiedAt?: string;
  status?: ListFunctionDeploymentResponseBodyDataListStatus;
  versionNo?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      deploymentId: 'DeploymentId',
      downloadSignedUrl: 'DownloadSignedUrl',
      modifiedAt: 'ModifiedAt',
      status: 'Status',
      versionNo: 'VersionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      deploymentId: 'string',
      downloadSignedUrl: 'string',
      modifiedAt: 'string',
      status: ListFunctionDeploymentResponseBodyDataListStatus,
      versionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionDeploymentResponseBodyPaginator extends $tea.Model {
  pageCount?: number;
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionLogResponseBodyDataList extends $tea.Model {
  contents?: string[];
  functionName?: string;
  levels?: string[];
  requestId?: string;
  spaceId?: string;
  status?: string;
  timestamps?: string[];
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
      functionName: 'FunctionName',
      levels: 'Levels',
      requestId: 'RequestId',
      spaceId: 'SpaceId',
      status: 'Status',
      timestamps: 'Timestamps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': 'string' },
      functionName: 'string',
      levels: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      spaceId: 'string',
      status: 'string',
      timestamps: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionLogResponseBodyPaginator extends $tea.Model {
  pageCount?: number;
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenPlatformConfigResponseBodySecretList extends $tea.Model {
  appCert?: string;
  appId?: string;
  appSecret?: string;
  platform?: string;
  privateKey?: string;
  publicCert?: string;
  publicKey?: string;
  rootCert?: string;
  signMode?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appCert: 'AppCert',
      appId: 'AppId',
      appSecret: 'AppSecret',
      platform: 'Platform',
      privateKey: 'PrivateKey',
      publicCert: 'PublicCert',
      publicKey: 'PublicKey',
      rootCert: 'RootCert',
      signMode: 'SignMode',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCert: 'string',
      appId: 'string',
      appSecret: 'string',
      platform: 'string',
      privateKey: 'string',
      publicCert: 'string',
      publicKey: 'string',
      rootCert: 'string',
      signMode: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpaceResponseBodySpaces extends $tea.Model {
  desc?: string;
  gmtCreate?: number;
  name?: string;
  spaceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      spaceId: 'SpaceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      gmtCreate: 'number',
      name: 'string',
      spaceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebHostingCustomDomainsResponseBodyData extends $tea.Model {
  accessControlAllowOrigin?: string;
  cname?: string;
  createTime?: number;
  description?: string;
  domain?: string;
  enableCors?: boolean;
  forceRedirectType?: string;
  sslProtocol?: string;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessControlAllowOrigin: 'AccessControlAllowOrigin',
      cname: 'Cname',
      createTime: 'CreateTime',
      description: 'Description',
      domain: 'Domain',
      enableCors: 'EnableCors',
      forceRedirectType: 'ForceRedirectType',
      sslProtocol: 'SslProtocol',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlAllowOrigin: 'string',
      cname: 'string',
      createTime: 'number',
      description: 'string',
      domain: 'string',
      enableCors: 'boolean',
      forceRedirectType: 'string',
      sslProtocol: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebHostingFilesResponseBodyDataWebHostingFiles extends $tea.Model {
  contentType?: string;
  ETag?: string;
  filePath?: string;
  lastModifiedTime?: number;
  signedUrl?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      ETag: 'ETag',
      filePath: 'FilePath',
      lastModifiedTime: 'LastModifiedTime',
      signedUrl: 'SignedUrl',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      ETag: 'string',
      filePath: 'string',
      lastModifiedTime: 'number',
      signedUrl: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebHostingFilesResponseBodyData extends $tea.Model {
  count?: number;
  nextMarker?: string;
  webHostingFiles?: ListWebHostingFilesResponseBodyDataWebHostingFiles[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      nextMarker: 'NextMarker',
      webHostingFiles: 'WebHostingFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      nextMarker: 'string',
      webHostingFiles: { 'type': 'array', 'itemType': ListWebHostingFilesResponseBodyDataWebHostingFiles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBBackupDumpTimesResponseBodyBackupDumpTimes extends $tea.Model {
  backupId?: string;
  dumpTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      dumpTime: 'DumpTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      dumpTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunFunctionResponseBodyRuntimeMeta extends $tea.Model {
  billingDuration?: number;
  invocationDuration?: number;
  maxMemoryUsage?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      billingDuration: 'BillingDuration',
      invocationDuration: 'InvocationDuration',
      maxMemoryUsage: 'MaxMemoryUsage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingDuration: 'number',
      invocationDuration: 'number',
      maxMemoryUsage: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResponseBodySpec extends $tea.Model {
  instanceConcurrency?: number;
  memory?: string;
  runtime?: string;
  timeout?: string;
  static names(): { [key: string]: string } {
    return {
      instanceConcurrency: 'InstanceConcurrency',
      memory: 'Memory',
      runtime: 'Runtime',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConcurrency: 'number',
      memory: 'string',
      runtime: 'string',
      timeout: 'string',
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
    this._endpoint = this.getEndpoint("mpserverless", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addCorsDomainWithOptions(request: AddCorsDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddCorsDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddCorsDomain",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCorsDomainResponse>(await this.callApi(params, req, runtime), new AddCorsDomainResponse({}));
  }

  async addCorsDomain(request: AddCorsDomainRequest): Promise<AddCorsDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCorsDomainWithOptions(request, runtime);
  }

  async addDingtalkOpenPlatformConfigWithOptions(request: AddDingtalkOpenPlatformConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddDingtalkOpenPlatformConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appSecret)) {
      body["AppSecret"] = request.appSecret;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddDingtalkOpenPlatformConfig",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDingtalkOpenPlatformConfigResponse>(await this.callApi(params, req, runtime), new AddDingtalkOpenPlatformConfigResponse({}));
  }

  async addDingtalkOpenPlatformConfig(request: AddDingtalkOpenPlatformConfigRequest): Promise<AddDingtalkOpenPlatformConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDingtalkOpenPlatformConfigWithOptions(request, runtime);
  }

  async attachWebHostingCertificateWithOptions(request: AttachWebHostingCertificateRequest, runtime: $Util.RuntimeOptions): Promise<AttachWebHostingCertificateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certName)) {
      body["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.certType)) {
      body["CertType"] = request.certType;
    }

    if (!Util.isUnset(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.privateKey)) {
      body["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.serverCertificate)) {
      body["ServerCertificate"] = request.serverCertificate;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AttachWebHostingCertificate",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachWebHostingCertificateResponse>(await this.callApi(params, req, runtime), new AttachWebHostingCertificateResponse({}));
  }

  async attachWebHostingCertificate(request: AttachWebHostingCertificateRequest): Promise<AttachWebHostingCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachWebHostingCertificateWithOptions(request, runtime);
  }

  async batchDeleteWebHostingFilesWithOptions(request: BatchDeleteWebHostingFilesRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteWebHostingFilesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filePaths)) {
      body["FilePaths"] = request.filePaths;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteWebHostingFiles",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteWebHostingFilesResponse>(await this.callApi(params, req, runtime), new BatchDeleteWebHostingFilesResponse({}));
  }

  async batchDeleteWebHostingFiles(request: BatchDeleteWebHostingFilesRequest): Promise<BatchDeleteWebHostingFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteWebHostingFilesWithOptions(request, runtime);
  }

  async bindWebHostingCustomDomainWithOptions(request: BindWebHostingCustomDomainRequest, runtime: $Util.RuntimeOptions): Promise<BindWebHostingCustomDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customDomain)) {
      body["CustomDomain"] = request.customDomain;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BindWebHostingCustomDomain",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindWebHostingCustomDomainResponse>(await this.callApi(params, req, runtime), new BindWebHostingCustomDomainResponse({}));
  }

  async bindWebHostingCustomDomain(request: BindWebHostingCustomDomainRequest): Promise<BindWebHostingCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindWebHostingCustomDomainWithOptions(request, runtime);
  }

  async checkMpServerlessRoleExistsWithOptions(request: CheckMpServerlessRoleExistsRequest, runtime: $Util.RuntimeOptions): Promise<CheckMpServerlessRoleExistsResponse> {
    Util.validateModel(request);
    let query = { };
    query["RoleName"] = request.roleName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckMpServerlessRoleExists",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckMpServerlessRoleExistsResponse>(await this.callApi(params, req, runtime), new CheckMpServerlessRoleExistsResponse({}));
  }

  async checkMpServerlessRoleExists(request: CheckMpServerlessRoleExistsRequest): Promise<CheckMpServerlessRoleExistsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMpServerlessRoleExistsWithOptions(request, runtime);
  }

  async createDBExportTaskWithOptions(request: CreateDBExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBExportTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.collection)) {
      body["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!Util.isUnset(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDBExportTask",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBExportTaskResponse>(await this.callApi(params, req, runtime), new CreateDBExportTaskResponse({}));
  }

  async createDBExportTask(request: CreateDBExportTaskRequest): Promise<CreateDBExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBExportTaskWithOptions(request, runtime);
  }

  async createDBImportTaskWithOptions(request: CreateDBImportTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBImportTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.collection)) {
      body["Collection"] = request.collection;
    }

    if (!Util.isUnset(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDBImportTask",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBImportTaskResponse>(await this.callApi(params, req, runtime), new CreateDBImportTaskResponse({}));
  }

  async createDBImportTask(request: CreateDBImportTaskRequest): Promise<CreateDBImportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBImportTaskWithOptions(request, runtime);
  }

  async createDBRestoreTaskWithOptions(request: CreateDBRestoreTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBRestoreTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.backupId)) {
      body["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.newCollections)) {
      body["NewCollections"] = request.newCollections;
    }

    if (!Util.isUnset(request.originCollections)) {
      body["OriginCollections"] = request.originCollections;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDBRestoreTask",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBRestoreTaskResponse>(await this.callApi(params, req, runtime), new CreateDBRestoreTaskResponse({}));
  }

  async createDBRestoreTask(request: CreateDBRestoreTaskRequest): Promise<CreateDBRestoreTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBRestoreTaskWithOptions(request, runtime);
  }

  async createFunctionWithOptions(request: CreateFunctionRequest, runtime: $Util.RuntimeOptions): Promise<CreateFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.desc)) {
      body["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.runtime)) {
      body["Runtime"] = request.runtime;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFunction",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFunctionResponse>(await this.callApi(params, req, runtime), new CreateFunctionResponse({}));
  }

  async createFunction(request: CreateFunctionRequest): Promise<CreateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFunctionWithOptions(request, runtime);
  }

  async createFunctionDeploymentWithOptions(request: CreateFunctionDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<CreateFunctionDeploymentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFunctionDeployment",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFunctionDeploymentResponse>(await this.callApi(params, req, runtime), new CreateFunctionDeploymentResponse({}));
  }

  async createFunctionDeployment(request: CreateFunctionDeploymentRequest): Promise<CreateFunctionDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFunctionDeploymentWithOptions(request, runtime);
  }

  async createSpaceWithOptions(request: CreateSpaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateSpaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.desc)) {
      body["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSpace",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSpaceResponse>(await this.callApi(params, req, runtime), new CreateSpaceResponse({}));
  }

  async createSpace(request: CreateSpaceRequest): Promise<CreateSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSpaceWithOptions(request, runtime);
  }

  async deleteAntOpenPlatformConfigWithOptions(request: DeleteAntOpenPlatformConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAntOpenPlatformConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAntOpenPlatformConfig",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAntOpenPlatformConfigResponse>(await this.callApi(params, req, runtime), new DeleteAntOpenPlatformConfigResponse({}));
  }

  async deleteAntOpenPlatformConfig(request: DeleteAntOpenPlatformConfigRequest): Promise<DeleteAntOpenPlatformConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAntOpenPlatformConfigWithOptions(request, runtime);
  }

  async deleteCorsDomainWithOptions(request: DeleteCorsDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCorsDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domainId)) {
      body["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCorsDomain",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCorsDomainResponse>(await this.callApi(params, req, runtime), new DeleteCorsDomainResponse({}));
  }

  async deleteCorsDomain(request: DeleteCorsDomainRequest): Promise<DeleteCorsDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCorsDomainWithOptions(request, runtime);
  }

  async deleteDBCollectionWithOptions(request: DeleteDBCollectionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBCollectionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["Body"] = request.body;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDBCollection",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBCollectionResponse>(await this.callApi(params, req, runtime), new DeleteDBCollectionResponse({}));
  }

  async deleteDBCollection(request: DeleteDBCollectionRequest): Promise<DeleteDBCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBCollectionWithOptions(request, runtime);
  }

  async deleteDingtalkOpenPlatformConfigWithOptions(request: DeleteDingtalkOpenPlatformConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDingtalkOpenPlatformConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDingtalkOpenPlatformConfig",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDingtalkOpenPlatformConfigResponse>(await this.callApi(params, req, runtime), new DeleteDingtalkOpenPlatformConfigResponse({}));
  }

  async deleteDingtalkOpenPlatformConfig(request: DeleteDingtalkOpenPlatformConfigRequest): Promise<DeleteDingtalkOpenPlatformConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDingtalkOpenPlatformConfigWithOptions(request, runtime);
  }

  async deleteFileWithOptions(request: DeleteFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFile",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFileResponse>(await this.callApi(params, req, runtime), new DeleteFileResponse({}));
  }

  async deleteFile(request: DeleteFileRequest): Promise<DeleteFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFileWithOptions(request, runtime);
  }

  async deleteFunctionWithOptions(request: DeleteFunctionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFunction",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFunctionResponse>(await this.callApi(params, req, runtime), new DeleteFunctionResponse({}));
  }

  async deleteFunction(request: DeleteFunctionRequest): Promise<DeleteFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFunctionWithOptions(request, runtime);
  }

  async deleteSpaceWithOptions(request: DeleteSpaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSpaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSpace",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSpaceResponse>(await this.callApi(params, req, runtime), new DeleteSpaceResponse({}));
  }

  async deleteSpace(request: DeleteSpaceRequest): Promise<DeleteSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSpaceWithOptions(request, runtime);
  }

  async deleteWebHostingCertificateWithOptions(request: DeleteWebHostingCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWebHostingCertificateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWebHostingCertificate",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWebHostingCertificateResponse>(await this.callApi(params, req, runtime), new DeleteWebHostingCertificateResponse({}));
  }

  async deleteWebHostingCertificate(request: DeleteWebHostingCertificateRequest): Promise<DeleteWebHostingCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWebHostingCertificateWithOptions(request, runtime);
  }

  async deleteWebHostingFileWithOptions(request: DeleteWebHostingFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWebHostingFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWebHostingFile",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWebHostingFileResponse>(await this.callApi(params, req, runtime), new DeleteWebHostingFileResponse({}));
  }

  async deleteWebHostingFile(request: DeleteWebHostingFileRequest): Promise<DeleteWebHostingFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWebHostingFileWithOptions(request, runtime);
  }

  async deleteWechatOpenPlatformConfigWithOptions(request: DeleteWechatOpenPlatformConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWechatOpenPlatformConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWechatOpenPlatformConfig",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWechatOpenPlatformConfigResponse>(await this.callApi(params, req, runtime), new DeleteWechatOpenPlatformConfigResponse({}));
  }

  async deleteWechatOpenPlatformConfig(request: DeleteWechatOpenPlatformConfigRequest): Promise<DeleteWechatOpenPlatformConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWechatOpenPlatformConfigWithOptions(request, runtime);
  }

  async deployFunctionWithOptions(request: DeployFunctionRequest, runtime: $Util.RuntimeOptions): Promise<DeployFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deploymentId)) {
      body["DeploymentId"] = request.deploymentId;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeployFunction",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployFunctionResponse>(await this.callApi(params, req, runtime), new DeployFunctionResponse({}));
  }

  async deployFunction(request: DeployFunctionRequest): Promise<DeployFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployFunctionWithOptions(request, runtime);
  }

  async describeFCOpenStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeFCOpenStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeFCOpenStatus",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFCOpenStatusResponse>(await this.callApi(params, req, runtime), new DescribeFCOpenStatusResponse({}));
  }

  async describeFCOpenStatus(): Promise<DescribeFCOpenStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFCOpenStatusWithOptions(runtime);
  }

  async describeFileUploadSignedUrlWithOptions(request: DescribeFileUploadSignedUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFileUploadSignedUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contentType)) {
      body["ContentType"] = request.contentType;
    }

    if (!Util.isUnset(request.filename)) {
      body["Filename"] = request.filename;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFileUploadSignedUrl",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFileUploadSignedUrlResponse>(await this.callApi(params, req, runtime), new DescribeFileUploadSignedUrlResponse({}));
  }

  async describeFileUploadSignedUrl(request: DescribeFileUploadSignedUrlRequest): Promise<DescribeFileUploadSignedUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFileUploadSignedUrlWithOptions(request, runtime);
  }

  async describeFunctionWithOptions(request: DescribeFunctionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFunction",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFunctionResponse>(await this.callApi(params, req, runtime), new DescribeFunctionResponse({}));
  }

  async describeFunction(request: DescribeFunctionRequest): Promise<DescribeFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFunctionWithOptions(request, runtime);
  }

  async describeHttpTriggerConfigWithOptions(request: DescribeHttpTriggerConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHttpTriggerConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHttpTriggerConfig",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHttpTriggerConfigResponse>(await this.callApi(params, req, runtime), new DescribeHttpTriggerConfigResponse({}));
  }

  async describeHttpTriggerConfig(request: DescribeHttpTriggerConfigRequest): Promise<DescribeHttpTriggerConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHttpTriggerConfigWithOptions(request, runtime);
  }

  async describeResourceQuotaWithOptions(request: DescribeResourceQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceQuotaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceQuota",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceQuotaResponse>(await this.callApi(params, req, runtime), new DescribeResourceQuotaResponse({}));
  }

  async describeResourceQuota(request: DescribeResourceQuotaRequest): Promise<DescribeResourceQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceQuotaWithOptions(request, runtime);
  }

  async describeResourceUsageWithOptions(request: DescribeResourceUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceUsageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.format)) {
      body["Format"] = request.format;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceUsage",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceUsageResponse>(await this.callApi(params, req, runtime), new DescribeResourceUsageResponse({}));
  }

  async describeResourceUsage(request: DescribeResourceUsageRequest): Promise<DescribeResourceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceUsageWithOptions(request, runtime);
  }

  async describeServicePolicyWithOptions(request: DescribeServicePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServicePolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.collectionName)) {
      body["CollectionName"] = request.collectionName;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServicePolicy",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServicePolicyResponse>(await this.callApi(params, req, runtime), new DescribeServicePolicyResponse({}));
  }

  async describeServicePolicy(request: DescribeServicePolicyRequest): Promise<DescribeServicePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServicePolicyWithOptions(request, runtime);
  }

  async describeSpaceClientConfigWithOptions(request: DescribeSpaceClientConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSpaceClientConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.detail)) {
      body["Detail"] = request.detail;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSpaceClientConfig",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSpaceClientConfigResponse>(await this.callApi(params, req, runtime), new DescribeSpaceClientConfigResponse({}));
  }

  async describeSpaceClientConfig(request: DescribeSpaceClientConfigRequest): Promise<DescribeSpaceClientConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSpaceClientConfigWithOptions(request, runtime);
  }

  async describeWebHostingFileWithOptions(request: DescribeWebHostingFileRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebHostingFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebHostingFile",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebHostingFileResponse>(await this.callApi(params, req, runtime), new DescribeWebHostingFileResponse({}));
  }

  async describeWebHostingFile(request: DescribeWebHostingFileRequest): Promise<DescribeWebHostingFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebHostingFileWithOptions(request, runtime);
  }

  async enableExtensionWithOptions(request: EnableExtensionRequest, runtime: $Util.RuntimeOptions): Promise<EnableExtensionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extensionId)) {
      body["ExtensionId"] = request.extensionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableExtension",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableExtensionResponse>(await this.callApi(params, req, runtime), new EnableExtensionResponse({}));
  }

  async enableExtension(request: EnableExtensionRequest): Promise<EnableExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableExtensionWithOptions(request, runtime);
  }

  async getWebHostingCertificateDetailWithOptions(request: GetWebHostingCertificateDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetWebHostingCertificateDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customDomain)) {
      body["CustomDomain"] = request.customDomain;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWebHostingCertificateDetail",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWebHostingCertificateDetailResponse>(await this.callApi(params, req, runtime), new GetWebHostingCertificateDetailResponse({}));
  }

  async getWebHostingCertificateDetail(request: GetWebHostingCertificateDetailRequest): Promise<GetWebHostingCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWebHostingCertificateDetailWithOptions(request, runtime);
  }

  async getWebHostingConfigWithOptions(request: GetWebHostingConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetWebHostingConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWebHostingConfig",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWebHostingConfigResponse>(await this.callApi(params, req, runtime), new GetWebHostingConfigResponse({}));
  }

  async getWebHostingConfig(request: GetWebHostingConfigRequest): Promise<GetWebHostingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWebHostingConfigWithOptions(request, runtime);
  }

  async getWebHostingDomainVerificationContentWithOptions(request: GetWebHostingDomainVerificationContentRequest, runtime: $Util.RuntimeOptions): Promise<GetWebHostingDomainVerificationContentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWebHostingDomainVerificationContent",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWebHostingDomainVerificationContentResponse>(await this.callApi(params, req, runtime), new GetWebHostingDomainVerificationContentResponse({}));
  }

  async getWebHostingDomainVerificationContent(request: GetWebHostingDomainVerificationContentRequest): Promise<GetWebHostingDomainVerificationContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWebHostingDomainVerificationContentWithOptions(request, runtime);
  }

  async getWebHostingStatusWithOptions(request: GetWebHostingStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetWebHostingStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWebHostingStatus",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWebHostingStatusResponse>(await this.callApi(params, req, runtime), new GetWebHostingStatusResponse({}));
  }

  async getWebHostingStatus(request: GetWebHostingStatusRequest): Promise<GetWebHostingStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWebHostingStatusWithOptions(request, runtime);
  }

  async getWebHostingUploadCredentialWithOptions(request: GetWebHostingUploadCredentialRequest, runtime: $Util.RuntimeOptions): Promise<GetWebHostingUploadCredentialResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWebHostingUploadCredential",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWebHostingUploadCredentialResponse>(await this.callApi(params, req, runtime), new GetWebHostingUploadCredentialResponse({}));
  }

  async getWebHostingUploadCredential(request: GetWebHostingUploadCredentialRequest): Promise<GetWebHostingUploadCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWebHostingUploadCredentialWithOptions(request, runtime);
  }

  async listAvailableCertificatesWithOptions(request: ListAvailableCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<ListAvailableCertificatesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAvailableCertificates",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAvailableCertificatesResponse>(await this.callApi(params, req, runtime), new ListAvailableCertificatesResponse({}));
  }

  async listAvailableCertificates(request: ListAvailableCertificatesRequest): Promise<ListAvailableCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAvailableCertificatesWithOptions(request, runtime);
  }

  async listCorsDomainsWithOptions(request: ListCorsDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListCorsDomainsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCorsDomains",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCorsDomainsResponse>(await this.callApi(params, req, runtime), new ListCorsDomainsResponse({}));
  }

  async listCorsDomains(request: ListCorsDomainsRequest): Promise<ListCorsDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCorsDomainsWithOptions(request, runtime);
  }

  async listDingtalkOpenPlatformConfigsWithOptions(request: ListDingtalkOpenPlatformConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListDingtalkOpenPlatformConfigsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDingtalkOpenPlatformConfigs",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDingtalkOpenPlatformConfigsResponse>(await this.callApi(params, req, runtime), new ListDingtalkOpenPlatformConfigsResponse({}));
  }

  async listDingtalkOpenPlatformConfigs(request: ListDingtalkOpenPlatformConfigsRequest): Promise<ListDingtalkOpenPlatformConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDingtalkOpenPlatformConfigsWithOptions(request, runtime);
  }

  async listExtensionsWithOptions(request: ListExtensionsRequest, runtime: $Util.RuntimeOptions): Promise<ListExtensionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListExtensions",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExtensionsResponse>(await this.callApi(params, req, runtime), new ListExtensionsResponse({}));
  }

  async listExtensions(request: ListExtensionsRequest): Promise<ListExtensionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExtensionsWithOptions(request, runtime);
  }

  async listFileWithOptions(request: ListFileRequest, runtime: $Util.RuntimeOptions): Promise<ListFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFile",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFileResponse>(await this.callApi(params, req, runtime), new ListFileResponse({}));
  }

  async listFile(request: ListFileRequest): Promise<ListFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFileWithOptions(request, runtime);
  }

  async listFunctionWithOptions(request: ListFunctionRequest, runtime: $Util.RuntimeOptions): Promise<ListFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filterBy)) {
      body["FilterBy"] = request.filterBy;
    }

    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFunction",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionResponse>(await this.callApi(params, req, runtime), new ListFunctionResponse({}));
  }

  async listFunction(request: ListFunctionRequest): Promise<ListFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFunctionWithOptions(request, runtime);
  }

  async listFunctionDeploymentWithOptions(request: ListFunctionDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<ListFunctionDeploymentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFunctionDeployment",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionDeploymentResponse>(await this.callApi(params, req, runtime), new ListFunctionDeploymentResponse({}));
  }

  async listFunctionDeployment(request: ListFunctionDeploymentRequest): Promise<ListFunctionDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFunctionDeploymentWithOptions(request, runtime);
  }

  async listFunctionLogWithOptions(request: ListFunctionLogRequest, runtime: $Util.RuntimeOptions): Promise<ListFunctionLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fromDate)) {
      body["FromDate"] = request.fromDate;
    }

    if (!Util.isUnset(request.logRequestId)) {
      body["LogRequestId"] = request.logRequestId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.toDate)) {
      body["ToDate"] = request.toDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFunctionLog",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionLogResponse>(await this.callApi(params, req, runtime), new ListFunctionLogResponse({}));
  }

  async listFunctionLog(request: ListFunctionLogRequest): Promise<ListFunctionLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFunctionLogWithOptions(request, runtime);
  }

  async listOpenPlatformConfigWithOptions(request: ListOpenPlatformConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListOpenPlatformConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListOpenPlatformConfig",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOpenPlatformConfigResponse>(await this.callApi(params, req, runtime), new ListOpenPlatformConfigResponse({}));
  }

  async listOpenPlatformConfig(request: ListOpenPlatformConfigRequest): Promise<ListOpenPlatformConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOpenPlatformConfigWithOptions(request, runtime);
  }

  async listSpaceWithOptions(request: ListSpaceRequest, runtime: $Util.RuntimeOptions): Promise<ListSpaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSpace",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSpaceResponse>(await this.callApi(params, req, runtime), new ListSpaceResponse({}));
  }

  async listSpace(request: ListSpaceRequest): Promise<ListSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSpaceWithOptions(request, runtime);
  }

  async listWebHostingCustomDomainsWithOptions(request: ListWebHostingCustomDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListWebHostingCustomDomainsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListWebHostingCustomDomains",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWebHostingCustomDomainsResponse>(await this.callApi(params, req, runtime), new ListWebHostingCustomDomainsResponse({}));
  }

  async listWebHostingCustomDomains(request: ListWebHostingCustomDomainsRequest): Promise<ListWebHostingCustomDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWebHostingCustomDomainsWithOptions(request, runtime);
  }

  async listWebHostingFilesWithOptions(request: ListWebHostingFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListWebHostingFilesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.marker)) {
      body["Marker"] = request.marker;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.prefix)) {
      body["Prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListWebHostingFiles",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWebHostingFilesResponse>(await this.callApi(params, req, runtime), new ListWebHostingFilesResponse({}));
  }

  async listWebHostingFiles(request: ListWebHostingFilesRequest): Promise<ListWebHostingFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWebHostingFilesWithOptions(request, runtime);
  }

  async modifyWebHostingConfigWithOptions(request: ModifyWebHostingConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebHostingConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allowedIps)) {
      body["AllowedIps"] = request.allowedIps;
    }

    if (!Util.isUnset(request.errorPath)) {
      body["ErrorPath"] = request.errorPath;
    }

    if (!Util.isUnset(request.historyModePath)) {
      body["HistoryModePath"] = request.historyModePath;
    }

    if (!Util.isUnset(request.indexPath)) {
      body["IndexPath"] = request.indexPath;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebHostingConfig",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebHostingConfigResponse>(await this.callApi(params, req, runtime), new ModifyWebHostingConfigResponse({}));
  }

  async modifyWebHostingConfig(request: ModifyWebHostingConfigRequest): Promise<ModifyWebHostingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebHostingConfigWithOptions(request, runtime);
  }

  async openServiceWithOptions(request: OpenServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OpenService",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenServiceResponse>(await this.callApi(params, req, runtime), new OpenServiceResponse({}));
  }

  async openService(request: OpenServiceRequest): Promise<OpenServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openServiceWithOptions(request, runtime);
  }

  async openWebHostingServiceWithOptions(request: OpenWebHostingServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenWebHostingServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OpenWebHostingService",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenWebHostingServiceResponse>(await this.callApi(params, req, runtime), new OpenWebHostingServiceResponse({}));
  }

  async openWebHostingService(request: OpenWebHostingServiceRequest): Promise<OpenWebHostingServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openWebHostingServiceWithOptions(request, runtime);
  }

  async queryDBBackupCollectionsWithOptions(request: QueryDBBackupCollectionsRequest, runtime: $Util.RuntimeOptions): Promise<QueryDBBackupCollectionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.backupId)) {
      body["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryDBBackupCollections",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDBBackupCollectionsResponse>(await this.callApi(params, req, runtime), new QueryDBBackupCollectionsResponse({}));
  }

  async queryDBBackupCollections(request: QueryDBBackupCollectionsRequest): Promise<QueryDBBackupCollectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDBBackupCollectionsWithOptions(request, runtime);
  }

  async queryDBBackupDumpTimesWithOptions(request: QueryDBBackupDumpTimesRequest, runtime: $Util.RuntimeOptions): Promise<QueryDBBackupDumpTimesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryDBBackupDumpTimes",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDBBackupDumpTimesResponse>(await this.callApi(params, req, runtime), new QueryDBBackupDumpTimesResponse({}));
  }

  async queryDBBackupDumpTimes(request: QueryDBBackupDumpTimesRequest): Promise<QueryDBBackupDumpTimesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDBBackupDumpTimesWithOptions(request, runtime);
  }

  async queryDBExportTaskStatusWithOptions(request: QueryDBExportTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryDBExportTaskStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryDBExportTaskStatus",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDBExportTaskStatusResponse>(await this.callApi(params, req, runtime), new QueryDBExportTaskStatusResponse({}));
  }

  async queryDBExportTaskStatus(request: QueryDBExportTaskStatusRequest): Promise<QueryDBExportTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDBExportTaskStatusWithOptions(request, runtime);
  }

  async queryDBImportTaskStatusWithOptions(request: QueryDBImportTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryDBImportTaskStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryDBImportTaskStatus",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDBImportTaskStatusResponse>(await this.callApi(params, req, runtime), new QueryDBImportTaskStatusResponse({}));
  }

  async queryDBImportTaskStatus(request: QueryDBImportTaskStatusRequest): Promise<QueryDBImportTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDBImportTaskStatusWithOptions(request, runtime);
  }

  async queryDBRestoreTaskStatusWithOptions(request: QueryDBRestoreTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryDBRestoreTaskStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryDBRestoreTaskStatus",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDBRestoreTaskStatusResponse>(await this.callApi(params, req, runtime), new QueryDBRestoreTaskStatusResponse({}));
  }

  async queryDBRestoreTaskStatus(request: QueryDBRestoreTaskStatusRequest): Promise<QueryDBRestoreTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDBRestoreTaskStatusWithOptions(request, runtime);
  }

  async queryServiceStatusWithOptions(request: QueryServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryServiceStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryServiceStatus",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryServiceStatusResponse>(await this.callApi(params, req, runtime), new QueryServiceStatusResponse({}));
  }

  async queryServiceStatus(request: QueryServiceStatusRequest): Promise<QueryServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryServiceStatusWithOptions(request, runtime);
  }

  async registerFileWithOptions(request: RegisterFileRequest, runtime: $Util.RuntimeOptions): Promise<RegisterFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RegisterFile",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterFileResponse>(await this.callApi(params, req, runtime), new RegisterFileResponse({}));
  }

  async registerFile(request: RegisterFileRequest): Promise<RegisterFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerFileWithOptions(request, runtime);
  }

  async renameDBCollectionWithOptions(request: RenameDBCollectionRequest, runtime: $Util.RuntimeOptions): Promise<RenameDBCollectionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.newCollection)) {
      body["NewCollection"] = request.newCollection;
    }

    if (!Util.isUnset(request.originCollection)) {
      body["OriginCollection"] = request.originCollection;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenameDBCollection",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameDBCollectionResponse>(await this.callApi(params, req, runtime), new RenameDBCollectionResponse({}));
  }

  async renameDBCollection(request: RenameDBCollectionRequest): Promise<RenameDBCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameDBCollectionWithOptions(request, runtime);
  }

  async resetServerSecretWithOptions(request: ResetServerSecretRequest, runtime: $Util.RuntimeOptions): Promise<ResetServerSecretResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResetServerSecret",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetServerSecretResponse>(await this.callApi(params, req, runtime), new ResetServerSecretResponse({}));
  }

  async resetServerSecret(request: ResetServerSecretRequest): Promise<ResetServerSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetServerSecretWithOptions(request, runtime);
  }

  async runDBCommandWithOptions(request: RunDBCommandRequest, runtime: $Util.RuntimeOptions): Promise<RunDBCommandResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["Body"] = request.body;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunDBCommand",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunDBCommandResponse>(await this.callApi(params, req, runtime), new RunDBCommandResponse({}));
  }

  async runDBCommand(request: RunDBCommandRequest): Promise<RunDBCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runDBCommandWithOptions(request, runtime);
  }

  async runFunctionWithOptions(request: RunFunctionRequest, runtime: $Util.RuntimeOptions): Promise<RunFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["Body"] = request.body;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunFunction",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunFunctionResponse>(await this.callApi(params, req, runtime), new RunFunctionResponse({}));
  }

  async runFunction(request: RunFunctionRequest): Promise<RunFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runFunctionWithOptions(request, runtime);
  }

  async saveAntOpenPlatformConfigWithOptions(request: SaveAntOpenPlatformConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveAntOpenPlatformConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appCert)) {
      body["AppCert"] = request.appCert;
    }

    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.privateKey)) {
      body["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.publicCert)) {
      body["PublicCert"] = request.publicCert;
    }

    if (!Util.isUnset(request.publicKey)) {
      body["PublicKey"] = request.publicKey;
    }

    if (!Util.isUnset(request.rootCert)) {
      body["RootCert"] = request.rootCert;
    }

    if (!Util.isUnset(request.signMode)) {
      body["SignMode"] = request.signMode;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveAntOpenPlatformConfig",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveAntOpenPlatformConfigResponse>(await this.callApi(params, req, runtime), new SaveAntOpenPlatformConfigResponse({}));
  }

  async saveAntOpenPlatformConfig(request: SaveAntOpenPlatformConfigRequest): Promise<SaveAntOpenPlatformConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveAntOpenPlatformConfigWithOptions(request, runtime);
  }

  async saveAppAuthTokenWithOptions(request: SaveAppAuthTokenRequest, runtime: $Util.RuntimeOptions): Promise<SaveAppAuthTokenResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appAuthToken)) {
      body["AppAuthToken"] = request.appAuthToken;
    }

    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.isvAppId)) {
      body["IsvAppId"] = request.isvAppId;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveAppAuthToken",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveAppAuthTokenResponse>(await this.callApi(params, req, runtime), new SaveAppAuthTokenResponse({}));
  }

  async saveAppAuthToken(request: SaveAppAuthTokenRequest): Promise<SaveAppAuthTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveAppAuthTokenWithOptions(request, runtime);
  }

  async saveWebHostingCustomDomainConfigWithOptions(request: SaveWebHostingCustomDomainConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveWebHostingCustomDomainConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.forceRedirectType)) {
      body["ForceRedirectType"] = request.forceRedirectType;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveWebHostingCustomDomainConfig",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveWebHostingCustomDomainConfigResponse>(await this.callApi(params, req, runtime), new SaveWebHostingCustomDomainConfigResponse({}));
  }

  async saveWebHostingCustomDomainConfig(request: SaveWebHostingCustomDomainConfigRequest): Promise<SaveWebHostingCustomDomainConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveWebHostingCustomDomainConfigWithOptions(request, runtime);
  }

  async saveWebHostingCustomDomainCorsConfigWithOptions(request: SaveWebHostingCustomDomainCorsConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveWebHostingCustomDomainCorsConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessControlAllowOrigin)) {
      body["AccessControlAllowOrigin"] = request.accessControlAllowOrigin;
    }

    if (!Util.isUnset(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.enableCors)) {
      body["EnableCors"] = request.enableCors;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveWebHostingCustomDomainCorsConfig",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveWebHostingCustomDomainCorsConfigResponse>(await this.callApi(params, req, runtime), new SaveWebHostingCustomDomainCorsConfigResponse({}));
  }

  async saveWebHostingCustomDomainCorsConfig(request: SaveWebHostingCustomDomainCorsConfigRequest): Promise<SaveWebHostingCustomDomainCorsConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveWebHostingCustomDomainCorsConfigWithOptions(request, runtime);
  }

  async saveWechatOpenPlatformConfigWithOptions(request: SaveWechatOpenPlatformConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveWechatOpenPlatformConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appSecret)) {
      body["AppSecret"] = request.appSecret;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveWechatOpenPlatformConfig",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveWechatOpenPlatformConfigResponse>(await this.callApi(params, req, runtime), new SaveWechatOpenPlatformConfigResponse({}));
  }

  async saveWechatOpenPlatformConfig(request: SaveWechatOpenPlatformConfigRequest): Promise<SaveWechatOpenPlatformConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveWechatOpenPlatformConfigWithOptions(request, runtime);
  }

  async unbindWebHostingCustomDomainWithOptions(request: UnbindWebHostingCustomDomainRequest, runtime: $Util.RuntimeOptions): Promise<UnbindWebHostingCustomDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customDomain)) {
      body["CustomDomain"] = request.customDomain;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnbindWebHostingCustomDomain",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindWebHostingCustomDomainResponse>(await this.callApi(params, req, runtime), new UnbindWebHostingCustomDomainResponse({}));
  }

  async unbindWebHostingCustomDomain(request: UnbindWebHostingCustomDomainRequest): Promise<UnbindWebHostingCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindWebHostingCustomDomainWithOptions(request, runtime);
  }

  async updateDingtalkOpenPlatformConfigWithOptions(request: UpdateDingtalkOpenPlatformConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDingtalkOpenPlatformConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appSecret)) {
      body["AppSecret"] = request.appSecret;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDingtalkOpenPlatformConfig",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDingtalkOpenPlatformConfigResponse>(await this.callApi(params, req, runtime), new UpdateDingtalkOpenPlatformConfigResponse({}));
  }

  async updateDingtalkOpenPlatformConfig(request: UpdateDingtalkOpenPlatformConfigRequest): Promise<UpdateDingtalkOpenPlatformConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDingtalkOpenPlatformConfigWithOptions(request, runtime);
  }

  async updateFunctionWithOptions(request: UpdateFunctionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.desc)) {
      body["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.httpTriggerPath)) {
      body["HttpTriggerPath"] = request.httpTriggerPath;
    }

    if (!Util.isUnset(request.instanceConcurrency)) {
      body["InstanceConcurrency"] = request.instanceConcurrency;
    }

    if (!Util.isUnset(request.memory)) {
      body["Memory"] = request.memory;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.runtime)) {
      body["Runtime"] = request.runtime;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!Util.isUnset(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.timingTriggerConfig)) {
      body["TimingTriggerConfig"] = request.timingTriggerConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFunction",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFunctionResponse>(await this.callApi(params, req, runtime), new UpdateFunctionResponse({}));
  }

  async updateFunction(request: UpdateFunctionRequest): Promise<UpdateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFunctionWithOptions(request, runtime);
  }

  async updateHttpTriggerConfigWithOptions(request: UpdateHttpTriggerConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateHttpTriggerConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customDomain)) {
      body["CustomDomain"] = request.customDomain;
    }

    if (!Util.isUnset(request.customDomainCertificate)) {
      body["CustomDomainCertificate"] = request.customDomainCertificate;
    }

    if (!Util.isUnset(request.customDomainPrivateKey)) {
      body["CustomDomainPrivateKey"] = request.customDomainPrivateKey;
    }

    if (!Util.isUnset(request.enableService)) {
      body["EnableService"] = request.enableService;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHttpTriggerConfig",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateHttpTriggerConfigResponse>(await this.callApi(params, req, runtime), new UpdateHttpTriggerConfigResponse({}));
  }

  async updateHttpTriggerConfig(request: UpdateHttpTriggerConfigRequest): Promise<UpdateHttpTriggerConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateHttpTriggerConfigWithOptions(request, runtime);
  }

  async updateServicePolicyWithOptions(request: UpdateServicePolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServicePolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.collectionName)) {
      body["CollectionName"] = request.collectionName;
    }

    if (!Util.isUnset(request.policy)) {
      body["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.policyName)) {
      body["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServicePolicy",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServicePolicyResponse>(await this.callApi(params, req, runtime), new UpdateServicePolicyResponse({}));
  }

  async updateServicePolicy(request: UpdateServicePolicyRequest): Promise<UpdateServicePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServicePolicyWithOptions(request, runtime);
  }

  async updateSpaceWithOptions(request: UpdateSpaceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSpaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.desc)) {
      body["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSpace",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSpaceResponse>(await this.callApi(params, req, runtime), new UpdateSpaceResponse({}));
  }

  async updateSpace(request: UpdateSpaceRequest): Promise<UpdateSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSpaceWithOptions(request, runtime);
  }

  async verifyWebHostingDomainOwnerWithOptions(request: VerifyWebHostingDomainOwnerRequest, runtime: $Util.RuntimeOptions): Promise<VerifyWebHostingDomainOwnerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!Util.isUnset(request.verifyType)) {
      body["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VerifyWebHostingDomainOwner",
      version: "2019-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyWebHostingDomainOwnerResponse>(await this.callApi(params, req, runtime), new VerifyWebHostingDomainOwnerResponse({}));
  }

  async verifyWebHostingDomainOwner(request: VerifyWebHostingDomainOwnerRequest): Promise<VerifyWebHostingDomainOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyWebHostingDomainOwnerWithOptions(request, runtime);
  }

}
