// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
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

export class AttachSmsSignRequest extends $tea.Model {
  spaceId?: string;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSmsSignResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSmsSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachSmsSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachSmsSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachWebHostingCertificateRequest extends $tea.Model {
  spaceId?: string;
  domain?: string;
  certType?: string;
  certName?: string;
  serverCertificate?: string;
  privateKey?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      domain: 'Domain',
      certType: 'CertType',
      certName: 'CertName',
      serverCertificate: 'ServerCertificate',
      privateKey: 'PrivateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      domain: 'string',
      certType: 'string',
      certName: 'string',
      serverCertificate: 'string',
      privateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachWebHostingCertificateResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
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
  spaceId?: string;
  filePaths?: string[];
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      filePaths: 'FilePaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      filePaths: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteWebHostingFilesResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
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
  spaceId?: string;
  customDomain?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      customDomain: 'CustomDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      customDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindWebHostingCustomDomainResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
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
  requestId?: string;
  exists?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      exists: 'Exists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      exists: 'boolean',
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

export class CheckSmsHasAuthorizedToMPSRequest extends $tea.Model {
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

export class CheckSmsHasAuthorizedToMPSResponseBody extends $tea.Model {
  requestId?: string;
  isAuthorized?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isAuthorized: 'IsAuthorized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isAuthorized: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSmsHasAuthorizedToMPSResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckSmsHasAuthorizedToMPSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckSmsHasAuthorizedToMPSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBuiltinFunctionTemplateRequest extends $tea.Model {
  builtinFunctionTemplateCategoryId?: string;
  static names(): { [key: string]: string } {
    return {
      builtinFunctionTemplateCategoryId: 'BuiltinFunctionTemplateCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      builtinFunctionTemplateCategoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBuiltinFunctionTemplateResponseBody extends $tea.Model {
  requestId?: string;
  bizId?: string;
  artifactUploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bizId: 'BizId',
      artifactUploadUrl: 'ArtifactUploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bizId: 'string',
      artifactUploadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBuiltinFunctionTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBuiltinFunctionTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBuiltinFunctionTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBExportTaskRequest extends $tea.Model {
  spaceId?: string;
  collection?: string;
  fileType?: string;
  fields?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      collection: 'Collection',
      fileType: 'FileType',
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      collection: 'string',
      fileType: 'string',
      fields: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBExportTaskResponseBody extends $tea.Model {
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
  spaceId?: string;
  collection?: string;
  fileType?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      collection: 'Collection',
      fileType: 'FileType',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      collection: 'string',
      fileType: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBImportTaskResponseBody extends $tea.Model {
  policy?: string;
  fileKey?: string;
  taskId?: string;
  requestId?: string;
  accessKeyId?: string;
  signature?: string;
  host?: string;
  expireTime?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      fileKey: 'FileKey',
      taskId: 'TaskId',
      requestId: 'RequestId',
      accessKeyId: 'AccessKeyId',
      signature: 'Signature',
      host: 'Host',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      fileKey: 'string',
      taskId: 'string',
      requestId: 'string',
      accessKeyId: 'string',
      signature: 'string',
      host: 'string',
      expireTime: 'string',
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
  spaceId?: string;
  backupId?: string;
  originCollections?: string;
  newCollections?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      backupId: 'BackupId',
      originCollections: 'OriginCollections',
      newCollections: 'NewCollections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      backupId: 'string',
      originCollections: 'string',
      newCollections: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBRestoreTaskResponseBody extends $tea.Model {
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
  name?: string;
  desc?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      desc: 'Desc',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      desc: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResponseBody extends $tea.Model {
  modifiedAt?: string;
  desc?: string;
  requestId?: string;
  createdAt?: string;
  spec?: CreateFunctionResponseBodySpec;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedAt: 'ModifiedAt',
      desc: 'Desc',
      requestId: 'RequestId',
      createdAt: 'CreatedAt',
      spec: 'Spec',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedAt: 'string',
      desc: 'string',
      requestId: 'string',
      createdAt: 'string',
      spec: CreateFunctionResponseBodySpec,
      name: 'string',
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

export class CreateSmsSignRequest extends $tea.Model {
  signName?: string;
  remark?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      signName: 'SignName',
      remark: 'Remark',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signName: 'string',
      remark: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsSignResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSmsSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSmsSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsTemplateRequest extends $tea.Model {
  spaceId?: string;
  templateType?: number;
  templateName?: string;
  templateContent?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      templateType: 'TemplateType',
      templateName: 'TemplateName',
      templateContent: 'TemplateContent',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      templateType: 'number',
      templateName: 'string',
      templateContent: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsTemplateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSmsTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSmsTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSpaceRequest extends $tea.Model {
  name?: string;
  desc?: string;
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      desc: 'Desc',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      desc: 'string',
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
  spaceId?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      appId: 'string',
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
  spaceId?: string;
  body?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBCollectionResponseBody extends $tea.Model {
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

export class DeleteSmsSignRequest extends $tea.Model {
  spaceId?: string;
  signId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      signId: 'SignId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      signId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsSignResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSmsSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSmsSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsTemplateRequest extends $tea.Model {
  templateCode?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      templateCode: 'TemplateCode',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateCode: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsTemplateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmsTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSmsTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSmsTemplateResponseBody,
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
  spaceId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebHostingCertificateResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
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
  spaceId?: string;
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      filePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebHostingFileResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
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
  spaceId?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      appId: 'string',
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
  status?: string;
  requestId?: string;
  isAuthorized?: boolean;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      isAuthorized: 'IsAuthorized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      isAuthorized: 'boolean',
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

export class DescribeFileRequest extends $tea.Model {
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

export class DescribeFileResponseBody extends $tea.Model {
  type?: string;
  gmtCreate?: string;
  requestId?: string;
  size?: number;
  gmtModified?: string;
  id?: string;
  url?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      gmtCreate: 'GmtCreate',
      requestId: 'RequestId',
      size: 'Size',
      gmtModified: 'GmtModified',
      id: 'Id',
      url: 'Url',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      gmtCreate: 'string',
      requestId: 'string',
      size: 'number',
      gmtModified: 'string',
      id: 'string',
      url: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileUploadSignedUrlRequest extends $tea.Model {
  filename?: string;
  size?: number;
  targetPath?: string;
  spaceId?: string;
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      filename: 'Filename',
      size: 'Size',
      targetPath: 'TargetPath',
      spaceId: 'SpaceId',
      contentType: 'ContentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filename: 'string',
      size: 'number',
      targetPath: 'string',
      spaceId: 'string',
      contentType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileUploadSignedUrlResponseBody extends $tea.Model {
  signUrl?: string;
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      signUrl: 'SignUrl',
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signUrl: 'string',
      requestId: 'string',
      id: 'string',
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
  function?: DescribeFunctionResponseBodyFunction;
  requestId?: string;
  deployment?: DescribeFunctionResponseBodyDeployment;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      requestId: 'RequestId',
      deployment: 'Deployment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: DescribeFunctionResponseBodyFunction,
      requestId: 'string',
      deployment: DescribeFunctionResponseBodyDeployment,
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
  requestId?: string;
  defaultEndpoint?: string;
  enableService?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      defaultEndpoint: 'DefaultEndpoint',
      enableService: 'EnableService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      defaultEndpoint: 'string',
      enableService: 'boolean',
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

export class DescribeISVFileUploadSignedUrlRequest extends $tea.Model {
  filename?: string;
  bucketName?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      filename: 'Filename',
      bucketName: 'BucketName',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filename: 'string',
      bucketName: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeISVFileUploadSignedUrlResponseBody extends $tea.Model {
  signUrl?: string;
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      signUrl: 'SignUrl',
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signUrl: 'string',
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeISVFileUploadSignedUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeISVFileUploadSignedUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeISVFileUploadSignedUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductOpenStatusRequest extends $tea.Model {
  name?: string;
  desc?: string;
  labels?: DescribeProductOpenStatusRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      desc: 'Desc',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      desc: 'string',
      labels: { 'type': 'array', 'itemType': DescribeProductOpenStatusRequestLabels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductOpenStatusResponseBody extends $tea.Model {
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

export class DescribeProductOpenStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProductOpenStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProductOpenStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServicePolicyRequest extends $tea.Model {
  spaceId?: string;
  serviceName?: string;
  collectionName?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      serviceName: 'ServiceName',
      collectionName: 'CollectionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      serviceName: 'string',
      collectionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServicePolicyResponseBody extends $tea.Model {
  policy?: string;
  requestId?: string;
  serviceName?: string;
  collectionName?: string;
  policyName?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
      collectionName: 'CollectionName',
      policyName: 'PolicyName',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      requestId: 'string',
      serviceName: 'string',
      collectionName: 'string',
      policyName: 'string',
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

export class DescribeSmsOpenStatusResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  isAuthorized?: boolean;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      isAuthorized: 'IsAuthorized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      isAuthorized: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsOpenStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSmsOpenStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSmsOpenStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsSignRequest extends $tea.Model {
  signId?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      signId: 'SignId',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signId: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsSignResponseBody extends $tea.Model {
  requestId?: string;
  createTime?: string;
  spaceId?: string;
  updateTime?: string;
  signName?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      createTime: 'CreateTime',
      spaceId: 'SpaceId',
      updateTime: 'UpdateTime',
      signName: 'SignName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      createTime: 'string',
      spaceId: 'string',
      updateTime: 'string',
      signName: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSmsSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSmsSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsSignStatusRequest extends $tea.Model {
  spaceId?: string;
  signIds?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      signIds: 'SignIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      signIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsSignStatusResponseBody extends $tea.Model {
  signStatuses?: DescribeSmsSignStatusResponseBodySignStatuses[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      signStatuses: 'SignStatuses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signStatuses: { 'type': 'array', 'itemType': DescribeSmsSignStatusResponseBodySignStatuses },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsSignStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSmsSignStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSmsSignStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsTemplateRequest extends $tea.Model {
  templateCode?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      templateCode: 'TemplateCode',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateCode: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateContent?: string;
  createTime?: string;
  updateTime?: string;
  templateName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateContent: 'TemplateContent',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateContent: 'string',
      createTime: 'string',
      updateTime: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSmsTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSmsTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsTemplateStatusRequest extends $tea.Model {
  templateCodes?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      templateCodes: 'TemplateCodes',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateCodes: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsTemplateStatusResponseBody extends $tea.Model {
  requestId?: string;
  templateStatuses?: DescribeSmsTemplateStatusResponseBodyTemplateStatuses[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateStatuses: 'TemplateStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateStatuses: { 'type': 'array', 'itemType': DescribeSmsTemplateStatusResponseBodyTemplateStatuses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsTemplateStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSmsTemplateStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSmsTemplateStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpaceRequest extends $tea.Model {
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

export class DescribeSpaceResponseBody extends $tea.Model {
  status?: string;
  desc?: string;
  gmtCreate?: string;
  requestId?: string;
  spaceId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      desc: 'Desc',
      gmtCreate: 'GmtCreate',
      requestId: 'RequestId',
      spaceId: 'SpaceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      desc: 'string',
      gmtCreate: 'string',
      requestId: 'string',
      spaceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSpaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSpaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpaceClientConfigRequest extends $tea.Model {
  spaceId?: string;
  detail?: string;
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      detail: 'Detail',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      detail: 'string',
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpaceClientConfigResponseBody extends $tea.Model {
  apiKey?: string;
  privateKey?: string;
  requestId?: string;
  spaceId?: string;
  name?: string;
  endpoint?: string;
  fileUploadEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      privateKey: 'PrivateKey',
      requestId: 'RequestId',
      spaceId: 'SpaceId',
      name: 'Name',
      endpoint: 'Endpoint',
      fileUploadEndpoint: 'FileUploadEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      privateKey: 'string',
      requestId: 'string',
      spaceId: 'string',
      name: 'string',
      endpoint: 'string',
      fileUploadEndpoint: 'string',
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
  spaceId?: string;
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      filePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebHostingFileResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeWebHostingFileResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeWebHostingFileResponseBodyData,
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

export class EnableSmsServiceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSmsServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableSmsServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableSmsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingCertificateDetailRequest extends $tea.Model {
  spaceId?: string;
  customDomain?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      customDomain: 'CustomDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      customDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingCertificateDetailResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetWebHostingCertificateDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetWebHostingCertificateDetailResponseBodyData,
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
  requestId?: string;
  data?: GetWebHostingConfigResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetWebHostingConfigResponseBodyData,
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
  spaceId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingDomainVerificationContentResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetWebHostingDomainVerificationContentResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetWebHostingDomainVerificationContentResponseBodyData,
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
  requestId?: string;
  data?: GetWebHostingStatusResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetWebHostingStatusResponseBodyData,
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
  spaceId?: string;
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      filePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingUploadCredentialResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetWebHostingUploadCredentialResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetWebHostingUploadCredentialResponseBodyData,
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
  spaceId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableCertificatesResponseBody extends $tea.Model {
  requestId?: string;
  data?: ListAvailableCertificatesResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListAvailableCertificatesResponseBodyData },
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
  requestId?: string;
  configs?: ListDingtalkOpenPlatformConfigsResponseBodyConfigs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configs: { 'type': 'array', 'itemType': ListDingtalkOpenPlatformConfigsResponseBodyConfigs },
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
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  extensions?: ListExtensionsResponseBodyExtensions[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      extensions: { 'type': 'array', 'itemType': ListExtensionsResponseBodyExtensions },
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
  spaceId?: string;
  pageNum?: number;
  pageSize?: number;
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileResponseBody extends $tea.Model {
  dataList?: ListFileResponseBodyDataList[];
  requestId?: string;
  paginator?: ListFileResponseBodyPaginator;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      paginator: 'Paginator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListFileResponseBodyDataList },
      requestId: 'string',
      paginator: ListFileResponseBodyPaginator,
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
  pageNum?: number;
  pageSize?: number;
  filterBy?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      filterBy: 'FilterBy',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      filterBy: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionResponseBody extends $tea.Model {
  dataList?: ListFunctionResponseBodyDataList[];
  requestId?: string;
  paginator?: ListFunctionResponseBodyPaginator;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      paginator: 'Paginator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListFunctionResponseBodyDataList },
      requestId: 'string',
      paginator: ListFunctionResponseBodyPaginator,
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
  pageNum?: number;
  pageSize?: number;
  name?: string;
  spaceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      name: 'Name',
      spaceId: 'SpaceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      name: 'string',
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
  requestId?: string;
  paginator?: ListFunctionDeploymentResponseBodyPaginator;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      paginator: 'Paginator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListFunctionDeploymentResponseBodyDataList },
      requestId: 'string',
      paginator: ListFunctionDeploymentResponseBodyPaginator,
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
  pageNum?: number;
  pageSize?: number;
  name?: string;
  spaceId?: string;
  logRequestId?: string;
  fromDate?: number;
  toDate?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      name: 'Name',
      spaceId: 'SpaceId',
      logRequestId: 'LogRequestId',
      fromDate: 'FromDate',
      toDate: 'ToDate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      name: 'string',
      spaceId: 'string',
      logRequestId: 'string',
      fromDate: 'number',
      toDate: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionLogResponseBody extends $tea.Model {
  dataList?: ListFunctionLogResponseBodyDataList[];
  requestId?: string;
  paginator?: ListFunctionLogResponseBodyPaginator;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      paginator: 'Paginator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListFunctionLogResponseBodyDataList },
      requestId: 'string',
      paginator: ListFunctionLogResponseBodyPaginator,
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

export class ListFunctionSpecResponseBody extends $tea.Model {
  requestId?: string;
  runtimeList?: ListFunctionSpecResponseBodyRuntimeList[];
  memoryList?: ListFunctionSpecResponseBodyMemoryList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      runtimeList: 'RuntimeList',
      memoryList: 'MemoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      runtimeList: { 'type': 'array', 'itemType': ListFunctionSpecResponseBodyRuntimeList },
      memoryList: { 'type': 'array', 'itemType': ListFunctionSpecResponseBodyMemoryList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFunctionSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFunctionSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenPlatformConfigRequest extends $tea.Model {
  spaceId?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      platform: 'string',
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

export class ListSmsSignsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmsSignsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  smsSigns?: ListSmsSignsResponseBodySmsSigns[];
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      smsSigns: 'SmsSigns',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      smsSigns: { 'type': 'array', 'itemType': ListSmsSignsResponseBodySmsSigns },
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmsSignsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSmsSignsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSmsSignsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmsSignsForAccountRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmsSignsForAccountResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  smsSigns?: ListSmsSignsForAccountResponseBodySmsSigns[];
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      smsSigns: 'SmsSigns',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      smsSigns: { 'type': 'array', 'itemType': ListSmsSignsForAccountResponseBodySmsSigns },
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmsSignsForAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSmsSignsForAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSmsSignsForAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmsTemplatesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmsTemplatesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  smsTemplates?: ListSmsTemplatesResponseBodySmsTemplates[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      smsTemplates: 'SmsTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      smsTemplates: { 'type': 'array', 'itemType': ListSmsTemplatesResponseBodySmsTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmsTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSmsTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSmsTemplatesResponseBody,
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
  gmtCreate?: string;
  requestId?: string;
  spaces?: ListSpaceResponseBodySpaces[];
  count?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      requestId: 'RequestId',
      spaces: 'Spaces',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      requestId: 'string',
      spaces: { 'type': 'array', 'itemType': ListSpaceResponseBodySpaces },
      count: 'number',
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
  requestId?: string;
  data?: ListWebHostingCustomDomainsResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListWebHostingCustomDomainsResponseBodyData },
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
  spaceId?: string;
  prefix?: string;
  marker?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      prefix: 'Prefix',
      marker: 'Marker',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      prefix: 'string',
      marker: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebHostingFilesResponseBody extends $tea.Model {
  requestId?: string;
  data?: ListWebHostingFilesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListWebHostingFilesResponseBodyData,
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
  spaceId?: string;
  indexPath?: string;
  errorPath?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      indexPath: 'IndexPath',
      errorPath: 'ErrorPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      indexPath: 'string',
      errorPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebHostingConfigResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
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

export class MoveWebHostingFileRequest extends $tea.Model {
  spaceId?: string;
  sourceFilePath?: string;
  targetFilePath?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      sourceFilePath: 'SourceFilePath',
      targetFilePath: 'TargetFilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      sourceFilePath: 'string',
      targetFilePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveWebHostingFileResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveWebHostingFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MoveWebHostingFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MoveWebHostingFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenProductRequest extends $tea.Model {
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenProductResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      synchro: 'synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      synchro: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenServiceRequest extends $tea.Model {
  spaceId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenServiceResponseBody extends $tea.Model {
  requestId?: string;
  serviceStatus?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceStatus: 'ServiceStatus',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceStatus: 'string',
      count: 'number',
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
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
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
  spaceId?: string;
  backupId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      backupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDBBackupCollectionsResponseBody extends $tea.Model {
  requestId?: string;
  collections?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      collections: 'Collections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      collections: { 'type': 'array', 'itemType': 'string' },
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
  requestId?: string;
  backupDumpTimes?: QueryDBBackupDumpTimesResponseBodyBackupDumpTimes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      backupDumpTimes: 'BackupDumpTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      backupDumpTimes: { 'type': 'array', 'itemType': QueryDBBackupDumpTimesResponseBodyBackupDumpTimes },
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
  exportedCount?: string;
  status?: string;
  requestId?: string;
  detailMessage?: string;
  downloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      exportedCount: 'ExportedCount',
      status: 'Status',
      requestId: 'RequestId',
      detailMessage: 'DetailMessage',
      downloadUrl: 'DownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportedCount: 'string',
      status: 'string',
      requestId: 'string',
      detailMessage: 'string',
      downloadUrl: 'string',
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
  status?: string;
  requestId?: string;
  failedCount?: string;
  detailMessage?: string;
  successCount?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      failedCount: 'FailedCount',
      detailMessage: 'DetailMessage',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      failedCount: 'string',
      detailMessage: 'string',
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
  status?: string;
  requestId?: string;
  failedCount?: number;
  detailMessage?: string;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      failedCount: 'FailedCount',
      detailMessage: 'DetailMessage',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      failedCount: 'number',
      detailMessage: 'string',
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
  spaceId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServiceStatusResponseBody extends $tea.Model {
  requestId?: string;
  serviceStatus?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceStatus: 'ServiceStatus',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceStatus: 'string',
      count: 'number',
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

export class ReleaseBuiltinFunctionTemplateRequest extends $tea.Model {
  builtinFunctionTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      builtinFunctionTemplateId: 'BuiltinFunctionTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      builtinFunctionTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseBuiltinFunctionTemplateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseBuiltinFunctionTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseBuiltinFunctionTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseBuiltinFunctionTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameDBCollectionRequest extends $tea.Model {
  spaceId?: string;
  originCollection?: string;
  newCollection?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      originCollection: 'OriginCollection',
      newCollection: 'NewCollection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      originCollection: 'string',
      newCollection: 'string',
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
  spaceId?: string;
  body?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      body: 'string',
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
  spaceId?: string;
  body?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunFunctionResponseBody extends $tea.Model {
  requestId?: string;
  runtimeMeta?: RunFunctionResponseBodyRuntimeMeta;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      runtimeMeta: 'RuntimeMeta',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      runtimeMeta: RunFunctionResponseBodyRuntimeMeta,
      result: 'string',
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
  spaceId?: string;
  appId?: string;
  publicKey?: string;
  privateKey?: string;
  signMode?: string;
  appCert?: string;
  publicCert?: string;
  rootCert?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      appId: 'AppId',
      publicKey: 'PublicKey',
      privateKey: 'PrivateKey',
      signMode: 'SignMode',
      appCert: 'AppCert',
      publicCert: 'PublicCert',
      rootCert: 'RootCert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      appId: 'string',
      publicKey: 'string',
      privateKey: 'string',
      signMode: 'string',
      appCert: 'string',
      publicCert: 'string',
      rootCert: 'string',
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
  spaceId?: string;
  isvAppId?: string;
  appId?: string;
  appAuthToken?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      isvAppId: 'IsvAppId',
      appId: 'AppId',
      appAuthToken: 'AppAuthToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      isvAppId: 'string',
      appId: 'string',
      appAuthToken: 'string',
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

export class SaveBuiltinFunctionTemplateRequest extends $tea.Model {
  bizId?: string;
  builtinFunctionTemplateCategoryId?: string;
  builtinFunctionTemplateProfile?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      builtinFunctionTemplateCategoryId: 'BuiltinFunctionTemplateCategoryId',
      builtinFunctionTemplateProfile: 'BuiltinFunctionTemplateProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      builtinFunctionTemplateCategoryId: 'string',
      builtinFunctionTemplateProfile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBuiltinFunctionTemplateResponseBody extends $tea.Model {
  requestId?: string;
  builtinFunctionTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      builtinFunctionTemplateId: 'BuiltinFunctionTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      builtinFunctionTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBuiltinFunctionTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveBuiltinFunctionTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveBuiltinFunctionTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebHostingCustomDomainConfigRequest extends $tea.Model {
  spaceId?: string;
  forceRedirectType?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      forceRedirectType: 'ForceRedirectType',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      forceRedirectType: 'string',
      domainName: 'string',
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

export class SaveWechatOpenPlatformConfigRequest extends $tea.Model {
  spaceId?: string;
  appId?: string;
  appSecret?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      appId: 'AppId',
      appSecret: 'AppSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      appId: 'string',
      appSecret: 'string',
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
  spaceId?: string;
  customDomain?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      customDomain: 'CustomDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      customDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindWebHostingCustomDomainResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
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
  name?: string;
  spaceId?: string;
  memory?: number;
  timeout?: number;
  httpTriggerPath?: string;
  timingTriggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      name: 'Name',
      spaceId: 'SpaceId',
      memory: 'Memory',
      timeout: 'Timeout',
      httpTriggerPath: 'HttpTriggerPath',
      timingTriggerConfig: 'TimingTriggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      name: 'string',
      spaceId: 'string',
      memory: 'number',
      timeout: 'number',
      httpTriggerPath: 'string',
      timingTriggerConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResponseBody extends $tea.Model {
  modifiedAt?: string;
  desc?: string;
  requestId?: string;
  timingTriggerConfig?: string;
  createdAt?: string;
  httpTriggerPath?: string;
  spec?: UpdateFunctionResponseBodySpec;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedAt: 'ModifiedAt',
      desc: 'Desc',
      requestId: 'RequestId',
      timingTriggerConfig: 'TimingTriggerConfig',
      createdAt: 'CreatedAt',
      httpTriggerPath: 'HttpTriggerPath',
      spec: 'Spec',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedAt: 'string',
      desc: 'string',
      requestId: 'string',
      timingTriggerConfig: 'string',
      createdAt: 'string',
      httpTriggerPath: 'string',
      spec: UpdateFunctionResponseBodySpec,
      name: 'string',
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
  enableService?: boolean;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      enableService: 'EnableService',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableService: 'boolean',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpTriggerConfigResponseBody extends $tea.Model {
  requestId?: string;
  defaultEndpoint?: string;
  enableService?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      defaultEndpoint: 'DefaultEndpoint',
      enableService: 'EnableService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      defaultEndpoint: 'string',
      enableService: 'boolean',
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
  spaceId?: string;
  serviceName?: string;
  policy?: string;
  collectionName?: string;
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      serviceName: 'ServiceName',
      policy: 'Policy',
      collectionName: 'CollectionName',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      serviceName: 'string',
      policy: 'string',
      collectionName: 'string',
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServicePolicyResponseBody extends $tea.Model {
  policy?: string;
  requestId?: string;
  serviceName?: string;
  collectionName?: string;
  policyName?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
      collectionName: 'CollectionName',
      policyName: 'PolicyName',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      requestId: 'string',
      serviceName: 'string',
      collectionName: 'string',
      policyName: 'string',
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

export class UpdateSmsSignRequest extends $tea.Model {
  signId?: string;
  remark?: string;
  spaceId?: string;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      signId: 'SignId',
      remark: 'Remark',
      spaceId: 'SpaceId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signId: 'string',
      remark: 'string',
      spaceId: 'string',
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsSignResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSmsSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSmsSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsTemplateRequest extends $tea.Model {
  spaceId?: string;
  templateCode?: string;
  templateType?: string;
  templateName?: string;
  templateContent?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      templateCode: 'TemplateCode',
      templateType: 'TemplateType',
      templateName: 'TemplateName',
      templateContent: 'TemplateContent',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      templateCode: 'string',
      templateType: 'string',
      templateName: 'string',
      templateContent: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsTemplateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmsTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSmsTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSmsTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSpaceRequest extends $tea.Model {
  spaceId?: string;
  desc?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      desc: 'Desc',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      desc: 'string',
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

export class VerifyBuiltinFunctionTemplateRequest extends $tea.Model {
  builtinFunctionTemplateId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      builtinFunctionTemplateId: 'BuiltinFunctionTemplateId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      builtinFunctionTemplateId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyBuiltinFunctionTemplateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyBuiltinFunctionTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifyBuiltinFunctionTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyBuiltinFunctionTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWebHostingDomainOwnerRequest extends $tea.Model {
  spaceId?: string;
  domain?: string;
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      domain: 'Domain',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      domain: 'string',
      verifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWebHostingDomainOwnerResponseBody extends $tea.Model {
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
  timeout?: string;
  runtime?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      timeout: 'Timeout',
      runtime: 'Runtime',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeout: 'string',
      runtime: 'string',
      memory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFunctionResponseBodyFunctionSpec extends $tea.Model {
  timeout?: string;
  runtime?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      timeout: 'Timeout',
      runtime: 'Runtime',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeout: 'string',
      runtime: 'string',
      memory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFunctionResponseBodyFunction extends $tea.Model {
  timingTriggerConfig?: string;
  spec?: DescribeFunctionResponseBodyFunctionSpec;
  httpTriggerPath?: string;
  createdAt?: string;
  name?: string;
  modifiedAt?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      timingTriggerConfig: 'TimingTriggerConfig',
      spec: 'Spec',
      httpTriggerPath: 'HttpTriggerPath',
      createdAt: 'CreatedAt',
      name: 'Name',
      modifiedAt: 'ModifiedAt',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timingTriggerConfig: 'string',
      spec: DescribeFunctionResponseBodyFunctionSpec,
      httpTriggerPath: 'string',
      createdAt: 'string',
      name: 'string',
      modifiedAt: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFunctionResponseBodyDeployment extends $tea.Model {
  deploymentId?: string;
  createdAt?: string;
  downloadSignedUrl?: string;
  versionNo?: string;
  modifiedAt?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'DeploymentId',
      createdAt: 'CreatedAt',
      downloadSignedUrl: 'DownloadSignedUrl',
      versionNo: 'VersionNo',
      modifiedAt: 'ModifiedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      createdAt: 'string',
      downloadSignedUrl: 'string',
      versionNo: 'string',
      modifiedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductOpenStatusRequestLabels extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsSignStatusResponseBodySignStatuses extends $tea.Model {
  signStatus?: number;
  signId?: string;
  reason?: string;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      signStatus: 'SignStatus',
      signId: 'SignId',
      reason: 'Reason',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signStatus: 'number',
      signId: 'string',
      reason: 'string',
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmsTemplateStatusResponseBodyTemplateStatuses extends $tea.Model {
  templateCode?: string;
  templateStatus?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      templateCode: 'TemplateCode',
      templateStatus: 'TemplateStatus',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateCode: 'string',
      templateStatus: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebHostingFileResponseBodyData extends $tea.Model {
  filePath?: string;
  contentType?: string;
  ETag?: string;
  size?: number;
  exists?: boolean;
  lastModifiedTime?: number;
  signedUrl?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      contentType: 'ContentType',
      ETag: 'ETag',
      size: 'Size',
      exists: 'Exists',
      lastModifiedTime: 'LastModifiedTime',
      signedUrl: 'SignedUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      contentType: 'string',
      ETag: 'string',
      size: 'number',
      exists: 'boolean',
      lastModifiedTime: 'number',
      signedUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingCertificateDetailResponseBodyData extends $tea.Model {
  certLife?: string;
  certType?: string;
  certDomainName?: string;
  serverCertificateStatus?: string;
  certName?: string;
  certExpiredTime?: number;
  static names(): { [key: string]: string } {
    return {
      certLife: 'CertLife',
      certType: 'CertType',
      certDomainName: 'CertDomainName',
      serverCertificateStatus: 'ServerCertificateStatus',
      certName: 'CertName',
      certExpiredTime: 'CertExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certLife: 'string',
      certType: 'string',
      certDomainName: 'string',
      serverCertificateStatus: 'string',
      certName: 'string',
      certExpiredTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingConfigResponseBodyData extends $tea.Model {
  spaceId?: string;
  defaultDomain?: string;
  indexPath?: string;
  errorPath?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      defaultDomain: 'DefaultDomain',
      indexPath: 'IndexPath',
      errorPath: 'ErrorPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      defaultDomain: 'string',
      indexPath: 'string',
      errorPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingDomainVerificationContentResponseBodyData extends $tea.Model {
  domain?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingStatusResponseBodyData extends $tea.Model {
  status?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebHostingUploadCredentialResponseBodyData extends $tea.Model {
  filePath?: string;
  signature?: string;
  policy?: string;
  securityToken?: string;
  expiredTime?: number;
  endpoint?: string;
  accessKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      signature: 'Signature',
      policy: 'Policy',
      securityToken: 'SecurityToken',
      expiredTime: 'ExpiredTime',
      endpoint: 'Endpoint',
      accessKeyId: 'AccessKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      signature: 'string',
      policy: 'string',
      securityToken: 'string',
      expiredTime: 'number',
      endpoint: 'string',
      accessKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableCertificatesResponseBodyData extends $tea.Model {
  statusCode?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      statusCode: 'StatusCode',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusCode: 'string',
      name: 'string',
      id: 'string',
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
  updateTime?: string;
  appSecret?: string;
  appId?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      appSecret: 'AppSecret',
      appId: 'AppId',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      appSecret: 'string',
      appId: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExtensionsResponseBodyExtensions extends $tea.Model {
  extensionId?: string;
  enabled?: string;
  extensionDocumentationLink?: string;
  extensionDesc?: string;
  extensionName?: string;
  static names(): { [key: string]: string } {
    return {
      extensionId: 'ExtensionId',
      enabled: 'Enabled',
      extensionDocumentationLink: 'ExtensionDocumentationLink',
      extensionDesc: 'ExtensionDesc',
      extensionName: 'ExtensionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensionId: 'string',
      enabled: 'string',
      extensionDocumentationLink: 'string',
      extensionDesc: 'string',
      extensionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileResponseBodyDataList extends $tea.Model {
  type?: string;
  size?: number;
  gmtCreate?: string;
  url?: string;
  gmtModified?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      size: 'Size',
      gmtCreate: 'GmtCreate',
      url: 'Url',
      gmtModified: 'GmtModified',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      size: 'number',
      gmtCreate: 'string',
      url: 'string',
      gmtModified: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileResponseBodyPaginator extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  total?: number;
  pageCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
      pageCount: 'PageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
      pageCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionResponseBodyDataListSpec extends $tea.Model {
  timeout?: string;
  runtime?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      timeout: 'Timeout',
      runtime: 'Runtime',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeout: 'string',
      runtime: 'string',
      memory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionResponseBodyDataList extends $tea.Model {
  timingTriggerConfig?: string;
  spec?: ListFunctionResponseBodyDataListSpec;
  httpTriggerPath?: string;
  createdAt?: string;
  modifiedAt?: string;
  name?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      timingTriggerConfig: 'TimingTriggerConfig',
      spec: 'Spec',
      httpTriggerPath: 'HttpTriggerPath',
      createdAt: 'CreatedAt',
      modifiedAt: 'ModifiedAt',
      name: 'Name',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timingTriggerConfig: 'string',
      spec: ListFunctionResponseBodyDataListSpec,
      httpTriggerPath: 'string',
      createdAt: 'string',
      modifiedAt: 'string',
      name: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionResponseBodyPaginator extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  total?: number;
  pageCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
      pageCount: 'PageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
      pageCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionDeploymentResponseBodyDataListStatus extends $tea.Model {
  status?: string;
  message?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      message: 'Message',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      message: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionDeploymentResponseBodyDataList extends $tea.Model {
  status?: ListFunctionDeploymentResponseBodyDataListStatus;
  deploymentId?: string;
  createdAt?: string;
  downloadSignedUrl?: string;
  versionNo?: string;
  modifiedAt?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      deploymentId: 'DeploymentId',
      createdAt: 'CreatedAt',
      downloadSignedUrl: 'DownloadSignedUrl',
      versionNo: 'VersionNo',
      modifiedAt: 'ModifiedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: ListFunctionDeploymentResponseBodyDataListStatus,
      deploymentId: 'string',
      createdAt: 'string',
      downloadSignedUrl: 'string',
      versionNo: 'string',
      modifiedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionDeploymentResponseBodyPaginator extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  total?: number;
  pageCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
      pageCount: 'PageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
      pageCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionLogResponseBodyDataList extends $tea.Model {
  status?: string;
  timestamps?: string[];
  spaceId?: string;
  requestId?: string;
  functionName?: string;
  contents?: string[];
  levels?: string[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      timestamps: 'Timestamps',
      spaceId: 'SpaceId',
      requestId: 'RequestId',
      functionName: 'FunctionName',
      contents: 'Contents',
      levels: 'Levels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      timestamps: { 'type': 'array', 'itemType': 'string' },
      spaceId: 'string',
      requestId: 'string',
      functionName: 'string',
      contents: { 'type': 'array', 'itemType': 'string' },
      levels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionLogResponseBodyPaginator extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  total?: number;
  pageCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
      pageCount: 'PageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
      pageCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionSpecResponseBodyRuntimeList extends $tea.Model {
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

export class ListFunctionSpecResponseBodyMemoryList extends $tea.Model {
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

export class ListOpenPlatformConfigResponseBodySecretList extends $tea.Model {
  spaceId?: string;
  appSecret?: string;
  publicCert?: string;
  appCert?: string;
  privateKey?: string;
  appId?: string;
  rootCert?: string;
  publicKey?: string;
  platform?: string;
  signMode?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      appSecret: 'AppSecret',
      publicCert: 'PublicCert',
      appCert: 'AppCert',
      privateKey: 'PrivateKey',
      appId: 'AppId',
      rootCert: 'RootCert',
      publicKey: 'PublicKey',
      platform: 'Platform',
      signMode: 'SignMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      appSecret: 'string',
      publicCert: 'string',
      appCert: 'string',
      privateKey: 'string',
      appId: 'string',
      rootCert: 'string',
      publicKey: 'string',
      platform: 'string',
      signMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmsSignsResponseBodySmsSigns extends $tea.Model {
  updateTime?: string;
  remark?: string;
  createTime?: string;
  signId?: string;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      remark: 'Remark',
      createTime: 'CreateTime',
      signId: 'SignId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      remark: 'string',
      createTime: 'string',
      signId: 'string',
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmsSignsForAccountResponseBodySmsSigns extends $tea.Model {
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmsTemplatesResponseBodySmsTemplates extends $tea.Model {
  updateTime?: string;
  templateContent?: string;
  remark?: string;
  templateCode?: string;
  createTime?: string;
  templateType?: number;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      templateContent: 'TemplateContent',
      remark: 'Remark',
      templateCode: 'TemplateCode',
      createTime: 'CreateTime',
      templateType: 'TemplateType',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      templateContent: 'string',
      remark: 'string',
      templateCode: 'string',
      createTime: 'string',
      templateType: 'number',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpaceResponseBodySpaces extends $tea.Model {
  status?: string;
  spaceId?: string;
  gmtCreate?: number;
  name?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      spaceId: 'SpaceId',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      spaceId: 'string',
      gmtCreate: 'number',
      name: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebHostingCustomDomainsResponseBodyData extends $tea.Model {
  status?: string;
  domain?: string;
  updateTime?: number;
  sslProtocol?: string;
  forceRedirectType?: string;
  description?: string;
  createTime?: number;
  cname?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      domain: 'Domain',
      updateTime: 'UpdateTime',
      sslProtocol: 'SslProtocol',
      forceRedirectType: 'ForceRedirectType',
      description: 'Description',
      createTime: 'CreateTime',
      cname: 'Cname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      domain: 'string',
      updateTime: 'number',
      sslProtocol: 'string',
      forceRedirectType: 'string',
      description: 'string',
      createTime: 'number',
      cname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebHostingFilesResponseBodyDataWebHostingFiles extends $tea.Model {
  filePath?: string;
  contentType?: string;
  ETag?: string;
  size?: number;
  lastModifiedTime?: number;
  signedUrl?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      contentType: 'ContentType',
      ETag: 'ETag',
      size: 'Size',
      lastModifiedTime: 'LastModifiedTime',
      signedUrl: 'SignedUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      contentType: 'string',
      ETag: 'string',
      size: 'number',
      lastModifiedTime: 'number',
      signedUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebHostingFilesResponseBodyData extends $tea.Model {
  webHostingFiles?: ListWebHostingFilesResponseBodyDataWebHostingFiles[];
  nextMarker?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      webHostingFiles: 'WebHostingFiles',
      nextMarker: 'NextMarker',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webHostingFiles: { 'type': 'array', 'itemType': ListWebHostingFilesResponseBodyDataWebHostingFiles },
      nextMarker: 'string',
      count: 'number',
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
  invocationDuration?: number;
  requestId?: string;
  billingDuration?: number;
  maxMemoryUsage?: number;
  static names(): { [key: string]: string } {
    return {
      invocationDuration: 'InvocationDuration',
      requestId: 'RequestId',
      billingDuration: 'BillingDuration',
      maxMemoryUsage: 'MaxMemoryUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationDuration: 'number',
      requestId: 'string',
      billingDuration: 'number',
      maxMemoryUsage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResponseBodySpec extends $tea.Model {
  timeout?: string;
  runtime?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      timeout: 'Timeout',
      runtime: 'Runtime',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeout: 'string',
      runtime: 'string',
      memory: 'string',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddCorsDomainResponse>(await this.doRPCRequest("AddCorsDomain", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddCorsDomainResponse({}));
  }

  async addCorsDomain(request: AddCorsDomainRequest): Promise<AddCorsDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCorsDomainWithOptions(request, runtime);
  }

  async addDingtalkOpenPlatformConfigWithOptions(request: AddDingtalkOpenPlatformConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddDingtalkOpenPlatformConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddDingtalkOpenPlatformConfigResponse>(await this.doRPCRequest("AddDingtalkOpenPlatformConfig", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddDingtalkOpenPlatformConfigResponse({}));
  }

  async addDingtalkOpenPlatformConfig(request: AddDingtalkOpenPlatformConfigRequest): Promise<AddDingtalkOpenPlatformConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDingtalkOpenPlatformConfigWithOptions(request, runtime);
  }

  async attachSmsSignWithOptions(request: AttachSmsSignRequest, runtime: $Util.RuntimeOptions): Promise<AttachSmsSignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachSmsSignResponse>(await this.doRPCRequest("AttachSmsSign", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new AttachSmsSignResponse({}));
  }

  async attachSmsSign(request: AttachSmsSignRequest): Promise<AttachSmsSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachSmsSignWithOptions(request, runtime);
  }

  async attachWebHostingCertificateWithOptions(request: AttachWebHostingCertificateRequest, runtime: $Util.RuntimeOptions): Promise<AttachWebHostingCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachWebHostingCertificateResponse>(await this.doRPCRequest("AttachWebHostingCertificate", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new AttachWebHostingCertificateResponse({}));
  }

  async attachWebHostingCertificate(request: AttachWebHostingCertificateRequest): Promise<AttachWebHostingCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachWebHostingCertificateWithOptions(request, runtime);
  }

  async batchDeleteWebHostingFilesWithOptions(request: BatchDeleteWebHostingFilesRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteWebHostingFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchDeleteWebHostingFilesResponse>(await this.doRPCRequest("BatchDeleteWebHostingFiles", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new BatchDeleteWebHostingFilesResponse({}));
  }

  async batchDeleteWebHostingFiles(request: BatchDeleteWebHostingFilesRequest): Promise<BatchDeleteWebHostingFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteWebHostingFilesWithOptions(request, runtime);
  }

  async bindWebHostingCustomDomainWithOptions(request: BindWebHostingCustomDomainRequest, runtime: $Util.RuntimeOptions): Promise<BindWebHostingCustomDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindWebHostingCustomDomainResponse>(await this.doRPCRequest("BindWebHostingCustomDomain", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new BindWebHostingCustomDomainResponse({}));
  }

  async bindWebHostingCustomDomain(request: BindWebHostingCustomDomainRequest): Promise<BindWebHostingCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindWebHostingCustomDomainWithOptions(request, runtime);
  }

  async checkMpServerlessRoleExistsWithOptions(request: CheckMpServerlessRoleExistsRequest, runtime: $Util.RuntimeOptions): Promise<CheckMpServerlessRoleExistsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckMpServerlessRoleExistsResponse>(await this.doRPCRequest("CheckMpServerlessRoleExists", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new CheckMpServerlessRoleExistsResponse({}));
  }

  async checkMpServerlessRoleExists(request: CheckMpServerlessRoleExistsRequest): Promise<CheckMpServerlessRoleExistsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMpServerlessRoleExistsWithOptions(request, runtime);
  }

  async checkSmsHasAuthorizedToMPSWithOptions(request: CheckSmsHasAuthorizedToMPSRequest, runtime: $Util.RuntimeOptions): Promise<CheckSmsHasAuthorizedToMPSResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckSmsHasAuthorizedToMPSResponse>(await this.doRPCRequest("CheckSmsHasAuthorizedToMPS", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new CheckSmsHasAuthorizedToMPSResponse({}));
  }

  async checkSmsHasAuthorizedToMPS(request: CheckSmsHasAuthorizedToMPSRequest): Promise<CheckSmsHasAuthorizedToMPSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkSmsHasAuthorizedToMPSWithOptions(request, runtime);
  }

  async createBuiltinFunctionTemplateWithOptions(request: CreateBuiltinFunctionTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateBuiltinFunctionTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBuiltinFunctionTemplateResponse>(await this.doRPCRequest("CreateBuiltinFunctionTemplate", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBuiltinFunctionTemplateResponse({}));
  }

  async createBuiltinFunctionTemplate(request: CreateBuiltinFunctionTemplateRequest): Promise<CreateBuiltinFunctionTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBuiltinFunctionTemplateWithOptions(request, runtime);
  }

  async createDBExportTaskWithOptions(request: CreateDBExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBExportTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDBExportTaskResponse>(await this.doRPCRequest("CreateDBExportTask", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDBExportTaskResponse({}));
  }

  async createDBExportTask(request: CreateDBExportTaskRequest): Promise<CreateDBExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBExportTaskWithOptions(request, runtime);
  }

  async createDBImportTaskWithOptions(request: CreateDBImportTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBImportTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDBImportTaskResponse>(await this.doRPCRequest("CreateDBImportTask", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDBImportTaskResponse({}));
  }

  async createDBImportTask(request: CreateDBImportTaskRequest): Promise<CreateDBImportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBImportTaskWithOptions(request, runtime);
  }

  async createDBRestoreTaskWithOptions(request: CreateDBRestoreTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBRestoreTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDBRestoreTaskResponse>(await this.doRPCRequest("CreateDBRestoreTask", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDBRestoreTaskResponse({}));
  }

  async createDBRestoreTask(request: CreateDBRestoreTaskRequest): Promise<CreateDBRestoreTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBRestoreTaskWithOptions(request, runtime);
  }

  async createFunctionWithOptions(request: CreateFunctionRequest, runtime: $Util.RuntimeOptions): Promise<CreateFunctionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFunctionResponse>(await this.doRPCRequest("CreateFunction", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFunctionResponse({}));
  }

  async createFunction(request: CreateFunctionRequest): Promise<CreateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFunctionWithOptions(request, runtime);
  }

  async createFunctionDeploymentWithOptions(request: CreateFunctionDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<CreateFunctionDeploymentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFunctionDeploymentResponse>(await this.doRPCRequest("CreateFunctionDeployment", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFunctionDeploymentResponse({}));
  }

  async createFunctionDeployment(request: CreateFunctionDeploymentRequest): Promise<CreateFunctionDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFunctionDeploymentWithOptions(request, runtime);
  }

  async createSmsSignWithOptions(request: CreateSmsSignRequest, runtime: $Util.RuntimeOptions): Promise<CreateSmsSignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSmsSignResponse>(await this.doRPCRequest("CreateSmsSign", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSmsSignResponse({}));
  }

  async createSmsSign(request: CreateSmsSignRequest): Promise<CreateSmsSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSmsSignWithOptions(request, runtime);
  }

  async createSmsTemplateWithOptions(request: CreateSmsTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateSmsTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSmsTemplateResponse>(await this.doRPCRequest("CreateSmsTemplate", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSmsTemplateResponse({}));
  }

  async createSmsTemplate(request: CreateSmsTemplateRequest): Promise<CreateSmsTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSmsTemplateWithOptions(request, runtime);
  }

  async createSpaceWithOptions(request: CreateSpaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateSpaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSpaceResponse>(await this.doRPCRequest("CreateSpace", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSpaceResponse({}));
  }

  async createSpace(request: CreateSpaceRequest): Promise<CreateSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSpaceWithOptions(request, runtime);
  }

  async deleteAntOpenPlatformConfigWithOptions(request: DeleteAntOpenPlatformConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAntOpenPlatformConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAntOpenPlatformConfigResponse>(await this.doRPCRequest("DeleteAntOpenPlatformConfig", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAntOpenPlatformConfigResponse({}));
  }

  async deleteAntOpenPlatformConfig(request: DeleteAntOpenPlatformConfigRequest): Promise<DeleteAntOpenPlatformConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAntOpenPlatformConfigWithOptions(request, runtime);
  }

  async deleteCorsDomainWithOptions(request: DeleteCorsDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCorsDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCorsDomainResponse>(await this.doRPCRequest("DeleteCorsDomain", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCorsDomainResponse({}));
  }

  async deleteCorsDomain(request: DeleteCorsDomainRequest): Promise<DeleteCorsDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCorsDomainWithOptions(request, runtime);
  }

  async deleteDBCollectionWithOptions(request: DeleteDBCollectionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBCollectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDBCollectionResponse>(await this.doRPCRequest("DeleteDBCollection", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDBCollectionResponse({}));
  }

  async deleteDBCollection(request: DeleteDBCollectionRequest): Promise<DeleteDBCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBCollectionWithOptions(request, runtime);
  }

  async deleteDingtalkOpenPlatformConfigWithOptions(request: DeleteDingtalkOpenPlatformConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDingtalkOpenPlatformConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDingtalkOpenPlatformConfigResponse>(await this.doRPCRequest("DeleteDingtalkOpenPlatformConfig", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDingtalkOpenPlatformConfigResponse({}));
  }

  async deleteDingtalkOpenPlatformConfig(request: DeleteDingtalkOpenPlatformConfigRequest): Promise<DeleteDingtalkOpenPlatformConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDingtalkOpenPlatformConfigWithOptions(request, runtime);
  }

  async deleteFileWithOptions(request: DeleteFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFileResponse>(await this.doRPCRequest("DeleteFile", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFileResponse({}));
  }

  async deleteFile(request: DeleteFileRequest): Promise<DeleteFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFileWithOptions(request, runtime);
  }

  async deleteFunctionWithOptions(request: DeleteFunctionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFunctionResponse>(await this.doRPCRequest("DeleteFunction", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFunctionResponse({}));
  }

  async deleteFunction(request: DeleteFunctionRequest): Promise<DeleteFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFunctionWithOptions(request, runtime);
  }

  async deleteSmsSignWithOptions(request: DeleteSmsSignRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSmsSignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSmsSignResponse>(await this.doRPCRequest("DeleteSmsSign", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSmsSignResponse({}));
  }

  async deleteSmsSign(request: DeleteSmsSignRequest): Promise<DeleteSmsSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSmsSignWithOptions(request, runtime);
  }

  async deleteSmsTemplateWithOptions(request: DeleteSmsTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSmsTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSmsTemplateResponse>(await this.doRPCRequest("DeleteSmsTemplate", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSmsTemplateResponse({}));
  }

  async deleteSmsTemplate(request: DeleteSmsTemplateRequest): Promise<DeleteSmsTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSmsTemplateWithOptions(request, runtime);
  }

  async deleteSpaceWithOptions(request: DeleteSpaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSpaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSpaceResponse>(await this.doRPCRequest("DeleteSpace", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSpaceResponse({}));
  }

  async deleteSpace(request: DeleteSpaceRequest): Promise<DeleteSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSpaceWithOptions(request, runtime);
  }

  async deleteWebHostingCertificateWithOptions(request: DeleteWebHostingCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWebHostingCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteWebHostingCertificateResponse>(await this.doRPCRequest("DeleteWebHostingCertificate", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteWebHostingCertificateResponse({}));
  }

  async deleteWebHostingCertificate(request: DeleteWebHostingCertificateRequest): Promise<DeleteWebHostingCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWebHostingCertificateWithOptions(request, runtime);
  }

  async deleteWebHostingFileWithOptions(request: DeleteWebHostingFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWebHostingFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteWebHostingFileResponse>(await this.doRPCRequest("DeleteWebHostingFile", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteWebHostingFileResponse({}));
  }

  async deleteWebHostingFile(request: DeleteWebHostingFileRequest): Promise<DeleteWebHostingFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWebHostingFileWithOptions(request, runtime);
  }

  async deleteWechatOpenPlatformConfigWithOptions(request: DeleteWechatOpenPlatformConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWechatOpenPlatformConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteWechatOpenPlatformConfigResponse>(await this.doRPCRequest("DeleteWechatOpenPlatformConfig", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteWechatOpenPlatformConfigResponse({}));
  }

  async deleteWechatOpenPlatformConfig(request: DeleteWechatOpenPlatformConfigRequest): Promise<DeleteWechatOpenPlatformConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWechatOpenPlatformConfigWithOptions(request, runtime);
  }

  async deployFunctionWithOptions(request: DeployFunctionRequest, runtime: $Util.RuntimeOptions): Promise<DeployFunctionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeployFunctionResponse>(await this.doRPCRequest("DeployFunction", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeployFunctionResponse({}));
  }

  async deployFunction(request: DeployFunctionRequest): Promise<DeployFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployFunctionWithOptions(request, runtime);
  }

  async describeFCOpenStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeFCOpenStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeFCOpenStatusResponse>(await this.doRPCRequest("DescribeFCOpenStatus", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFCOpenStatusResponse({}));
  }

  async describeFCOpenStatus(): Promise<DescribeFCOpenStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFCOpenStatusWithOptions(runtime);
  }

  async describeFileWithOptions(request: DescribeFileRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFileResponse>(await this.doRPCRequest("DescribeFile", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFileResponse({}));
  }

  async describeFile(request: DescribeFileRequest): Promise<DescribeFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFileWithOptions(request, runtime);
  }

  async describeFileUploadSignedUrlWithOptions(request: DescribeFileUploadSignedUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFileUploadSignedUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFileUploadSignedUrlResponse>(await this.doRPCRequest("DescribeFileUploadSignedUrl", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFileUploadSignedUrlResponse({}));
  }

  async describeFileUploadSignedUrl(request: DescribeFileUploadSignedUrlRequest): Promise<DescribeFileUploadSignedUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFileUploadSignedUrlWithOptions(request, runtime);
  }

  async describeFunctionWithOptions(request: DescribeFunctionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFunctionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFunctionResponse>(await this.doRPCRequest("DescribeFunction", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFunctionResponse({}));
  }

  async describeFunction(request: DescribeFunctionRequest): Promise<DescribeFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFunctionWithOptions(request, runtime);
  }

  async describeHttpTriggerConfigWithOptions(request: DescribeHttpTriggerConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHttpTriggerConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHttpTriggerConfigResponse>(await this.doRPCRequest("DescribeHttpTriggerConfig", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHttpTriggerConfigResponse({}));
  }

  async describeHttpTriggerConfig(request: DescribeHttpTriggerConfigRequest): Promise<DescribeHttpTriggerConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHttpTriggerConfigWithOptions(request, runtime);
  }

  async describeISVFileUploadSignedUrlWithOptions(request: DescribeISVFileUploadSignedUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeISVFileUploadSignedUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeISVFileUploadSignedUrlResponse>(await this.doRPCRequest("DescribeISVFileUploadSignedUrl", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeISVFileUploadSignedUrlResponse({}));
  }

  async describeISVFileUploadSignedUrl(request: DescribeISVFileUploadSignedUrlRequest): Promise<DescribeISVFileUploadSignedUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeISVFileUploadSignedUrlWithOptions(request, runtime);
  }

  async describeProductOpenStatusWithOptions(request: DescribeProductOpenStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProductOpenStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeProductOpenStatusResponse>(await this.doRPCRequest("DescribeProductOpenStatus", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProductOpenStatusResponse({}));
  }

  async describeProductOpenStatus(request: DescribeProductOpenStatusRequest): Promise<DescribeProductOpenStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductOpenStatusWithOptions(request, runtime);
  }

  async describeServicePolicyWithOptions(request: DescribeServicePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServicePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeServicePolicyResponse>(await this.doRPCRequest("DescribeServicePolicy", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeServicePolicyResponse({}));
  }

  async describeServicePolicy(request: DescribeServicePolicyRequest): Promise<DescribeServicePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServicePolicyWithOptions(request, runtime);
  }

  async describeSmsOpenStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeSmsOpenStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeSmsOpenStatusResponse>(await this.doRPCRequest("DescribeSmsOpenStatus", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSmsOpenStatusResponse({}));
  }

  async describeSmsOpenStatus(): Promise<DescribeSmsOpenStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmsOpenStatusWithOptions(runtime);
  }

  async describeSmsSignWithOptions(request: DescribeSmsSignRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmsSignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSmsSignResponse>(await this.doRPCRequest("DescribeSmsSign", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSmsSignResponse({}));
  }

  async describeSmsSign(request: DescribeSmsSignRequest): Promise<DescribeSmsSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmsSignWithOptions(request, runtime);
  }

  async describeSmsSignStatusWithOptions(request: DescribeSmsSignStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmsSignStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSmsSignStatusResponse>(await this.doRPCRequest("DescribeSmsSignStatus", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSmsSignStatusResponse({}));
  }

  async describeSmsSignStatus(request: DescribeSmsSignStatusRequest): Promise<DescribeSmsSignStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmsSignStatusWithOptions(request, runtime);
  }

  async describeSmsTemplateWithOptions(request: DescribeSmsTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmsTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSmsTemplateResponse>(await this.doRPCRequest("DescribeSmsTemplate", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSmsTemplateResponse({}));
  }

  async describeSmsTemplate(request: DescribeSmsTemplateRequest): Promise<DescribeSmsTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmsTemplateWithOptions(request, runtime);
  }

  async describeSmsTemplateStatusWithOptions(request: DescribeSmsTemplateStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmsTemplateStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSmsTemplateStatusResponse>(await this.doRPCRequest("DescribeSmsTemplateStatus", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSmsTemplateStatusResponse({}));
  }

  async describeSmsTemplateStatus(request: DescribeSmsTemplateStatusRequest): Promise<DescribeSmsTemplateStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmsTemplateStatusWithOptions(request, runtime);
  }

  async describeSpaceWithOptions(request: DescribeSpaceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSpaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSpaceResponse>(await this.doRPCRequest("DescribeSpace", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSpaceResponse({}));
  }

  async describeSpace(request: DescribeSpaceRequest): Promise<DescribeSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSpaceWithOptions(request, runtime);
  }

  async describeSpaceClientConfigWithOptions(request: DescribeSpaceClientConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSpaceClientConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSpaceClientConfigResponse>(await this.doRPCRequest("DescribeSpaceClientConfig", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSpaceClientConfigResponse({}));
  }

  async describeSpaceClientConfig(request: DescribeSpaceClientConfigRequest): Promise<DescribeSpaceClientConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSpaceClientConfigWithOptions(request, runtime);
  }

  async describeWebHostingFileWithOptions(request: DescribeWebHostingFileRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebHostingFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebHostingFileResponse>(await this.doRPCRequest("DescribeWebHostingFile", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebHostingFileResponse({}));
  }

  async describeWebHostingFile(request: DescribeWebHostingFileRequest): Promise<DescribeWebHostingFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebHostingFileWithOptions(request, runtime);
  }

  async enableExtensionWithOptions(request: EnableExtensionRequest, runtime: $Util.RuntimeOptions): Promise<EnableExtensionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableExtensionResponse>(await this.doRPCRequest("EnableExtension", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new EnableExtensionResponse({}));
  }

  async enableExtension(request: EnableExtensionRequest): Promise<EnableExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableExtensionWithOptions(request, runtime);
  }

  async enableSmsServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<EnableSmsServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<EnableSmsServiceResponse>(await this.doRPCRequest("EnableSmsService", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new EnableSmsServiceResponse({}));
  }

  async enableSmsService(): Promise<EnableSmsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSmsServiceWithOptions(runtime);
  }

  async getWebHostingCertificateDetailWithOptions(request: GetWebHostingCertificateDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetWebHostingCertificateDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetWebHostingCertificateDetailResponse>(await this.doRPCRequest("GetWebHostingCertificateDetail", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetWebHostingCertificateDetailResponse({}));
  }

  async getWebHostingCertificateDetail(request: GetWebHostingCertificateDetailRequest): Promise<GetWebHostingCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWebHostingCertificateDetailWithOptions(request, runtime);
  }

  async getWebHostingConfigWithOptions(request: GetWebHostingConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetWebHostingConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetWebHostingConfigResponse>(await this.doRPCRequest("GetWebHostingConfig", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetWebHostingConfigResponse({}));
  }

  async getWebHostingConfig(request: GetWebHostingConfigRequest): Promise<GetWebHostingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWebHostingConfigWithOptions(request, runtime);
  }

  async getWebHostingDomainVerificationContentWithOptions(request: GetWebHostingDomainVerificationContentRequest, runtime: $Util.RuntimeOptions): Promise<GetWebHostingDomainVerificationContentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetWebHostingDomainVerificationContentResponse>(await this.doRPCRequest("GetWebHostingDomainVerificationContent", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetWebHostingDomainVerificationContentResponse({}));
  }

  async getWebHostingDomainVerificationContent(request: GetWebHostingDomainVerificationContentRequest): Promise<GetWebHostingDomainVerificationContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWebHostingDomainVerificationContentWithOptions(request, runtime);
  }

  async getWebHostingStatusWithOptions(request: GetWebHostingStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetWebHostingStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetWebHostingStatusResponse>(await this.doRPCRequest("GetWebHostingStatus", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetWebHostingStatusResponse({}));
  }

  async getWebHostingStatus(request: GetWebHostingStatusRequest): Promise<GetWebHostingStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWebHostingStatusWithOptions(request, runtime);
  }

  async getWebHostingUploadCredentialWithOptions(request: GetWebHostingUploadCredentialRequest, runtime: $Util.RuntimeOptions): Promise<GetWebHostingUploadCredentialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetWebHostingUploadCredentialResponse>(await this.doRPCRequest("GetWebHostingUploadCredential", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetWebHostingUploadCredentialResponse({}));
  }

  async getWebHostingUploadCredential(request: GetWebHostingUploadCredentialRequest): Promise<GetWebHostingUploadCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWebHostingUploadCredentialWithOptions(request, runtime);
  }

  async listAvailableCertificatesWithOptions(request: ListAvailableCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<ListAvailableCertificatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAvailableCertificatesResponse>(await this.doRPCRequest("ListAvailableCertificates", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListAvailableCertificatesResponse({}));
  }

  async listAvailableCertificates(request: ListAvailableCertificatesRequest): Promise<ListAvailableCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAvailableCertificatesWithOptions(request, runtime);
  }

  async listCorsDomainsWithOptions(request: ListCorsDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListCorsDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCorsDomainsResponse>(await this.doRPCRequest("ListCorsDomains", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListCorsDomainsResponse({}));
  }

  async listCorsDomains(request: ListCorsDomainsRequest): Promise<ListCorsDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCorsDomainsWithOptions(request, runtime);
  }

  async listDingtalkOpenPlatformConfigsWithOptions(request: ListDingtalkOpenPlatformConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListDingtalkOpenPlatformConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDingtalkOpenPlatformConfigsResponse>(await this.doRPCRequest("ListDingtalkOpenPlatformConfigs", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListDingtalkOpenPlatformConfigsResponse({}));
  }

  async listDingtalkOpenPlatformConfigs(request: ListDingtalkOpenPlatformConfigsRequest): Promise<ListDingtalkOpenPlatformConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDingtalkOpenPlatformConfigsWithOptions(request, runtime);
  }

  async listExtensionsWithOptions(request: ListExtensionsRequest, runtime: $Util.RuntimeOptions): Promise<ListExtensionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListExtensionsResponse>(await this.doRPCRequest("ListExtensions", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListExtensionsResponse({}));
  }

  async listExtensions(request: ListExtensionsRequest): Promise<ListExtensionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExtensionsWithOptions(request, runtime);
  }

  async listFileWithOptions(request: ListFileRequest, runtime: $Util.RuntimeOptions): Promise<ListFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFileResponse>(await this.doRPCRequest("ListFile", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListFileResponse({}));
  }

  async listFile(request: ListFileRequest): Promise<ListFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFileWithOptions(request, runtime);
  }

  async listFunctionWithOptions(request: ListFunctionRequest, runtime: $Util.RuntimeOptions): Promise<ListFunctionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFunctionResponse>(await this.doRPCRequest("ListFunction", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListFunctionResponse({}));
  }

  async listFunction(request: ListFunctionRequest): Promise<ListFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFunctionWithOptions(request, runtime);
  }

  async listFunctionDeploymentWithOptions(request: ListFunctionDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<ListFunctionDeploymentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFunctionDeploymentResponse>(await this.doRPCRequest("ListFunctionDeployment", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListFunctionDeploymentResponse({}));
  }

  async listFunctionDeployment(request: ListFunctionDeploymentRequest): Promise<ListFunctionDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFunctionDeploymentWithOptions(request, runtime);
  }

  async listFunctionLogWithOptions(request: ListFunctionLogRequest, runtime: $Util.RuntimeOptions): Promise<ListFunctionLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFunctionLogResponse>(await this.doRPCRequest("ListFunctionLog", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListFunctionLogResponse({}));
  }

  async listFunctionLog(request: ListFunctionLogRequest): Promise<ListFunctionLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFunctionLogWithOptions(request, runtime);
  }

  async listFunctionSpecWithOptions(runtime: $Util.RuntimeOptions): Promise<ListFunctionSpecResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListFunctionSpecResponse>(await this.doRPCRequest("ListFunctionSpec", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListFunctionSpecResponse({}));
  }

  async listFunctionSpec(): Promise<ListFunctionSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFunctionSpecWithOptions(runtime);
  }

  async listOpenPlatformConfigWithOptions(request: ListOpenPlatformConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListOpenPlatformConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOpenPlatformConfigResponse>(await this.doRPCRequest("ListOpenPlatformConfig", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListOpenPlatformConfigResponse({}));
  }

  async listOpenPlatformConfig(request: ListOpenPlatformConfigRequest): Promise<ListOpenPlatformConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOpenPlatformConfigWithOptions(request, runtime);
  }

  async listSmsSignsWithOptions(request: ListSmsSignsRequest, runtime: $Util.RuntimeOptions): Promise<ListSmsSignsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSmsSignsResponse>(await this.doRPCRequest("ListSmsSigns", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListSmsSignsResponse({}));
  }

  async listSmsSigns(request: ListSmsSignsRequest): Promise<ListSmsSignsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSmsSignsWithOptions(request, runtime);
  }

  async listSmsSignsForAccountWithOptions(request: ListSmsSignsForAccountRequest, runtime: $Util.RuntimeOptions): Promise<ListSmsSignsForAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSmsSignsForAccountResponse>(await this.doRPCRequest("ListSmsSignsForAccount", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListSmsSignsForAccountResponse({}));
  }

  async listSmsSignsForAccount(request: ListSmsSignsForAccountRequest): Promise<ListSmsSignsForAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSmsSignsForAccountWithOptions(request, runtime);
  }

  async listSmsTemplatesWithOptions(request: ListSmsTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListSmsTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSmsTemplatesResponse>(await this.doRPCRequest("ListSmsTemplates", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListSmsTemplatesResponse({}));
  }

  async listSmsTemplates(request: ListSmsTemplatesRequest): Promise<ListSmsTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSmsTemplatesWithOptions(request, runtime);
  }

  async listSpaceWithOptions(request: ListSpaceRequest, runtime: $Util.RuntimeOptions): Promise<ListSpaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSpaceResponse>(await this.doRPCRequest("ListSpace", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListSpaceResponse({}));
  }

  async listSpace(request: ListSpaceRequest): Promise<ListSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSpaceWithOptions(request, runtime);
  }

  async listWebHostingCustomDomainsWithOptions(request: ListWebHostingCustomDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListWebHostingCustomDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListWebHostingCustomDomainsResponse>(await this.doRPCRequest("ListWebHostingCustomDomains", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListWebHostingCustomDomainsResponse({}));
  }

  async listWebHostingCustomDomains(request: ListWebHostingCustomDomainsRequest): Promise<ListWebHostingCustomDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWebHostingCustomDomainsWithOptions(request, runtime);
  }

  async listWebHostingFilesWithOptions(request: ListWebHostingFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListWebHostingFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListWebHostingFilesResponse>(await this.doRPCRequest("ListWebHostingFiles", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListWebHostingFilesResponse({}));
  }

  async listWebHostingFiles(request: ListWebHostingFilesRequest): Promise<ListWebHostingFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWebHostingFilesWithOptions(request, runtime);
  }

  async modifyWebHostingConfigWithOptions(request: ModifyWebHostingConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebHostingConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebHostingConfigResponse>(await this.doRPCRequest("ModifyWebHostingConfig", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebHostingConfigResponse({}));
  }

  async modifyWebHostingConfig(request: ModifyWebHostingConfigRequest): Promise<ModifyWebHostingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebHostingConfigWithOptions(request, runtime);
  }

  async moveWebHostingFileWithOptions(request: MoveWebHostingFileRequest, runtime: $Util.RuntimeOptions): Promise<MoveWebHostingFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveWebHostingFileResponse>(await this.doRPCRequest("MoveWebHostingFile", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new MoveWebHostingFileResponse({}));
  }

  async moveWebHostingFile(request: MoveWebHostingFileRequest): Promise<MoveWebHostingFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveWebHostingFileWithOptions(request, runtime);
  }

  async openProductWithOptions(request: OpenProductRequest, runtime: $Util.RuntimeOptions): Promise<OpenProductResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenProductResponse>(await this.doRPCRequest("OpenProduct", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new OpenProductResponse({}));
  }

  async openProduct(request: OpenProductRequest): Promise<OpenProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openProductWithOptions(request, runtime);
  }

  async openServiceWithOptions(request: OpenServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenServiceResponse>(await this.doRPCRequest("OpenService", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new OpenServiceResponse({}));
  }

  async openService(request: OpenServiceRequest): Promise<OpenServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openServiceWithOptions(request, runtime);
  }

  async openWebHostingServiceWithOptions(request: OpenWebHostingServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenWebHostingServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenWebHostingServiceResponse>(await this.doRPCRequest("OpenWebHostingService", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new OpenWebHostingServiceResponse({}));
  }

  async openWebHostingService(request: OpenWebHostingServiceRequest): Promise<OpenWebHostingServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openWebHostingServiceWithOptions(request, runtime);
  }

  async queryDBBackupCollectionsWithOptions(request: QueryDBBackupCollectionsRequest, runtime: $Util.RuntimeOptions): Promise<QueryDBBackupCollectionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDBBackupCollectionsResponse>(await this.doRPCRequest("QueryDBBackupCollections", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDBBackupCollectionsResponse({}));
  }

  async queryDBBackupCollections(request: QueryDBBackupCollectionsRequest): Promise<QueryDBBackupCollectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDBBackupCollectionsWithOptions(request, runtime);
  }

  async queryDBBackupDumpTimesWithOptions(request: QueryDBBackupDumpTimesRequest, runtime: $Util.RuntimeOptions): Promise<QueryDBBackupDumpTimesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDBBackupDumpTimesResponse>(await this.doRPCRequest("QueryDBBackupDumpTimes", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDBBackupDumpTimesResponse({}));
  }

  async queryDBBackupDumpTimes(request: QueryDBBackupDumpTimesRequest): Promise<QueryDBBackupDumpTimesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDBBackupDumpTimesWithOptions(request, runtime);
  }

  async queryDBExportTaskStatusWithOptions(request: QueryDBExportTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryDBExportTaskStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDBExportTaskStatusResponse>(await this.doRPCRequest("QueryDBExportTaskStatus", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDBExportTaskStatusResponse({}));
  }

  async queryDBExportTaskStatus(request: QueryDBExportTaskStatusRequest): Promise<QueryDBExportTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDBExportTaskStatusWithOptions(request, runtime);
  }

  async queryDBImportTaskStatusWithOptions(request: QueryDBImportTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryDBImportTaskStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDBImportTaskStatusResponse>(await this.doRPCRequest("QueryDBImportTaskStatus", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDBImportTaskStatusResponse({}));
  }

  async queryDBImportTaskStatus(request: QueryDBImportTaskStatusRequest): Promise<QueryDBImportTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDBImportTaskStatusWithOptions(request, runtime);
  }

  async queryDBRestoreTaskStatusWithOptions(request: QueryDBRestoreTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryDBRestoreTaskStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDBRestoreTaskStatusResponse>(await this.doRPCRequest("QueryDBRestoreTaskStatus", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDBRestoreTaskStatusResponse({}));
  }

  async queryDBRestoreTaskStatus(request: QueryDBRestoreTaskStatusRequest): Promise<QueryDBRestoreTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDBRestoreTaskStatusWithOptions(request, runtime);
  }

  async queryServiceStatusWithOptions(request: QueryServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryServiceStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryServiceStatusResponse>(await this.doRPCRequest("QueryServiceStatus", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new QueryServiceStatusResponse({}));
  }

  async queryServiceStatus(request: QueryServiceStatusRequest): Promise<QueryServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryServiceStatusWithOptions(request, runtime);
  }

  async registerFileWithOptions(request: RegisterFileRequest, runtime: $Util.RuntimeOptions): Promise<RegisterFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegisterFileResponse>(await this.doRPCRequest("RegisterFile", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new RegisterFileResponse({}));
  }

  async registerFile(request: RegisterFileRequest): Promise<RegisterFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerFileWithOptions(request, runtime);
  }

  async releaseBuiltinFunctionTemplateWithOptions(request: ReleaseBuiltinFunctionTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseBuiltinFunctionTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseBuiltinFunctionTemplateResponse>(await this.doRPCRequest("ReleaseBuiltinFunctionTemplate", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseBuiltinFunctionTemplateResponse({}));
  }

  async releaseBuiltinFunctionTemplate(request: ReleaseBuiltinFunctionTemplateRequest): Promise<ReleaseBuiltinFunctionTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseBuiltinFunctionTemplateWithOptions(request, runtime);
  }

  async renameDBCollectionWithOptions(request: RenameDBCollectionRequest, runtime: $Util.RuntimeOptions): Promise<RenameDBCollectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenameDBCollectionResponse>(await this.doRPCRequest("RenameDBCollection", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new RenameDBCollectionResponse({}));
  }

  async renameDBCollection(request: RenameDBCollectionRequest): Promise<RenameDBCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameDBCollectionWithOptions(request, runtime);
  }

  async resetServerSecretWithOptions(request: ResetServerSecretRequest, runtime: $Util.RuntimeOptions): Promise<ResetServerSecretResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetServerSecretResponse>(await this.doRPCRequest("ResetServerSecret", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new ResetServerSecretResponse({}));
  }

  async resetServerSecret(request: ResetServerSecretRequest): Promise<ResetServerSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetServerSecretWithOptions(request, runtime);
  }

  async runDBCommandWithOptions(request: RunDBCommandRequest, runtime: $Util.RuntimeOptions): Promise<RunDBCommandResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RunDBCommandResponse>(await this.doRPCRequest("RunDBCommand", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new RunDBCommandResponse({}));
  }

  async runDBCommand(request: RunDBCommandRequest): Promise<RunDBCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runDBCommandWithOptions(request, runtime);
  }

  async runFunctionWithOptions(request: RunFunctionRequest, runtime: $Util.RuntimeOptions): Promise<RunFunctionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RunFunctionResponse>(await this.doRPCRequest("RunFunction", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new RunFunctionResponse({}));
  }

  async runFunction(request: RunFunctionRequest): Promise<RunFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runFunctionWithOptions(request, runtime);
  }

  async saveAntOpenPlatformConfigWithOptions(request: SaveAntOpenPlatformConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveAntOpenPlatformConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveAntOpenPlatformConfigResponse>(await this.doRPCRequest("SaveAntOpenPlatformConfig", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new SaveAntOpenPlatformConfigResponse({}));
  }

  async saveAntOpenPlatformConfig(request: SaveAntOpenPlatformConfigRequest): Promise<SaveAntOpenPlatformConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveAntOpenPlatformConfigWithOptions(request, runtime);
  }

  async saveAppAuthTokenWithOptions(request: SaveAppAuthTokenRequest, runtime: $Util.RuntimeOptions): Promise<SaveAppAuthTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveAppAuthTokenResponse>(await this.doRPCRequest("SaveAppAuthToken", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new SaveAppAuthTokenResponse({}));
  }

  async saveAppAuthToken(request: SaveAppAuthTokenRequest): Promise<SaveAppAuthTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveAppAuthTokenWithOptions(request, runtime);
  }

  async saveBuiltinFunctionTemplateWithOptions(request: SaveBuiltinFunctionTemplateRequest, runtime: $Util.RuntimeOptions): Promise<SaveBuiltinFunctionTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveBuiltinFunctionTemplateResponse>(await this.doRPCRequest("SaveBuiltinFunctionTemplate", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new SaveBuiltinFunctionTemplateResponse({}));
  }

  async saveBuiltinFunctionTemplate(request: SaveBuiltinFunctionTemplateRequest): Promise<SaveBuiltinFunctionTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBuiltinFunctionTemplateWithOptions(request, runtime);
  }

  async saveWebHostingCustomDomainConfigWithOptions(request: SaveWebHostingCustomDomainConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveWebHostingCustomDomainConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveWebHostingCustomDomainConfigResponse>(await this.doRPCRequest("SaveWebHostingCustomDomainConfig", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new SaveWebHostingCustomDomainConfigResponse({}));
  }

  async saveWebHostingCustomDomainConfig(request: SaveWebHostingCustomDomainConfigRequest): Promise<SaveWebHostingCustomDomainConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveWebHostingCustomDomainConfigWithOptions(request, runtime);
  }

  async saveWechatOpenPlatformConfigWithOptions(request: SaveWechatOpenPlatformConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveWechatOpenPlatformConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveWechatOpenPlatformConfigResponse>(await this.doRPCRequest("SaveWechatOpenPlatformConfig", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new SaveWechatOpenPlatformConfigResponse({}));
  }

  async saveWechatOpenPlatformConfig(request: SaveWechatOpenPlatformConfigRequest): Promise<SaveWechatOpenPlatformConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveWechatOpenPlatformConfigWithOptions(request, runtime);
  }

  async unbindWebHostingCustomDomainWithOptions(request: UnbindWebHostingCustomDomainRequest, runtime: $Util.RuntimeOptions): Promise<UnbindWebHostingCustomDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindWebHostingCustomDomainResponse>(await this.doRPCRequest("UnbindWebHostingCustomDomain", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindWebHostingCustomDomainResponse({}));
  }

  async unbindWebHostingCustomDomain(request: UnbindWebHostingCustomDomainRequest): Promise<UnbindWebHostingCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindWebHostingCustomDomainWithOptions(request, runtime);
  }

  async updateDingtalkOpenPlatformConfigWithOptions(request: UpdateDingtalkOpenPlatformConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDingtalkOpenPlatformConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDingtalkOpenPlatformConfigResponse>(await this.doRPCRequest("UpdateDingtalkOpenPlatformConfig", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDingtalkOpenPlatformConfigResponse({}));
  }

  async updateDingtalkOpenPlatformConfig(request: UpdateDingtalkOpenPlatformConfigRequest): Promise<UpdateDingtalkOpenPlatformConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDingtalkOpenPlatformConfigWithOptions(request, runtime);
  }

  async updateFunctionWithOptions(request: UpdateFunctionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFunctionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFunctionResponse>(await this.doRPCRequest("UpdateFunction", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFunctionResponse({}));
  }

  async updateFunction(request: UpdateFunctionRequest): Promise<UpdateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFunctionWithOptions(request, runtime);
  }

  async updateHttpTriggerConfigWithOptions(request: UpdateHttpTriggerConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateHttpTriggerConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateHttpTriggerConfigResponse>(await this.doRPCRequest("UpdateHttpTriggerConfig", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateHttpTriggerConfigResponse({}));
  }

  async updateHttpTriggerConfig(request: UpdateHttpTriggerConfigRequest): Promise<UpdateHttpTriggerConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateHttpTriggerConfigWithOptions(request, runtime);
  }

  async updateServicePolicyWithOptions(request: UpdateServicePolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServicePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateServicePolicyResponse>(await this.doRPCRequest("UpdateServicePolicy", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateServicePolicyResponse({}));
  }

  async updateServicePolicy(request: UpdateServicePolicyRequest): Promise<UpdateServicePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServicePolicyWithOptions(request, runtime);
  }

  async updateSmsSignWithOptions(request: UpdateSmsSignRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmsSignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSmsSignResponse>(await this.doRPCRequest("UpdateSmsSign", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSmsSignResponse({}));
  }

  async updateSmsSign(request: UpdateSmsSignRequest): Promise<UpdateSmsSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmsSignWithOptions(request, runtime);
  }

  async updateSmsTemplateWithOptions(request: UpdateSmsTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmsTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSmsTemplateResponse>(await this.doRPCRequest("UpdateSmsTemplate", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSmsTemplateResponse({}));
  }

  async updateSmsTemplate(request: UpdateSmsTemplateRequest): Promise<UpdateSmsTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmsTemplateWithOptions(request, runtime);
  }

  async updateSpaceWithOptions(request: UpdateSpaceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSpaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSpaceResponse>(await this.doRPCRequest("UpdateSpace", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSpaceResponse({}));
  }

  async updateSpace(request: UpdateSpaceRequest): Promise<UpdateSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSpaceWithOptions(request, runtime);
  }

  async verifyBuiltinFunctionTemplateWithOptions(request: VerifyBuiltinFunctionTemplateRequest, runtime: $Util.RuntimeOptions): Promise<VerifyBuiltinFunctionTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyBuiltinFunctionTemplateResponse>(await this.doRPCRequest("VerifyBuiltinFunctionTemplate", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyBuiltinFunctionTemplateResponse({}));
  }

  async verifyBuiltinFunctionTemplate(request: VerifyBuiltinFunctionTemplateRequest): Promise<VerifyBuiltinFunctionTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyBuiltinFunctionTemplateWithOptions(request, runtime);
  }

  async verifyWebHostingDomainOwnerWithOptions(request: VerifyWebHostingDomainOwnerRequest, runtime: $Util.RuntimeOptions): Promise<VerifyWebHostingDomainOwnerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyWebHostingDomainOwnerResponse>(await this.doRPCRequest("VerifyWebHostingDomainOwner", "2019-06-15", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyWebHostingDomainOwnerResponse({}));
  }

  async verifyWebHostingDomainOwner(request: VerifyWebHostingDomainOwnerRequest): Promise<VerifyWebHostingDomainOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyWebHostingDomainOwnerWithOptions(request, runtime);
  }

}
