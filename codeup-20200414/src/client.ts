// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AcceptMergeRequestRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: AcceptMergeRequestResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: AcceptMergeRequestResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AcceptMergeRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AcceptMergeRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMemberRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMemberResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: AddGroupMemberResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': AddGroupMemberResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddGroupMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddGroupMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRepositoryMemberRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRepositoryMemberResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: AddRepositoryMemberResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': AddRepositoryMemberResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRepositoryMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddRepositoryMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddRepositoryMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWebhookRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWebhookResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: AddWebhookResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: AddWebhookResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWebhookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddWebhookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddWebhookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBranchRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  branchName?: string;
  ref?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
      branchName: 'branchName',
      ref: 'ref',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
      branchName: 'string',
      ref: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBranchResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: CreateBranchResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: CreateBranchResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBranchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateBranchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBranchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: CreateFileResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: CreateFileResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: CreateMergeRequestResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: CreateMergeRequestResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMergeRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMergeRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestCommentRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestCommentResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: CreateMergeRequestCommentResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: CreateMergeRequestCommentResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestCommentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMergeRequestCommentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMergeRequestCommentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryRequest extends $tea.Model {
  accessToken?: string;
  createParentPath?: boolean;
  organizationId?: string;
  subUserId?: string;
  sync?: boolean;
  avatarUrl?: string;
  description?: string;
  gitignoreType?: string;
  importAccount?: string;
  importDemoProject?: boolean;
  importRepoType?: string;
  importToken?: string;
  importTokenEncrypted?: string;
  importUrl?: string;
  initStandardService?: boolean;
  isCryptoEnabled?: boolean;
  localImportUrl?: string;
  name?: string;
  namespaceId?: number;
  path?: string;
  readmeType?: string;
  visibilityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      createParentPath: 'CreateParentPath',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
      sync: 'Sync',
      avatarUrl: 'avatarUrl',
      description: 'description',
      gitignoreType: 'gitignoreType',
      importAccount: 'importAccount',
      importDemoProject: 'importDemoProject',
      importRepoType: 'importRepoType',
      importToken: 'importToken',
      importTokenEncrypted: 'importTokenEncrypted',
      importUrl: 'importUrl',
      initStandardService: 'initStandardService',
      isCryptoEnabled: 'isCryptoEnabled',
      localImportUrl: 'localImportUrl',
      name: 'name',
      namespaceId: 'namespaceId',
      path: 'path',
      readmeType: 'readmeType',
      visibilityLevel: 'visibilityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      createParentPath: 'boolean',
      organizationId: 'string',
      subUserId: 'string',
      sync: 'boolean',
      avatarUrl: 'string',
      description: 'string',
      gitignoreType: 'string',
      importAccount: 'string',
      importDemoProject: 'boolean',
      importRepoType: 'string',
      importToken: 'string',
      importTokenEncrypted: 'string',
      importUrl: 'string',
      initStandardService: 'boolean',
      isCryptoEnabled: 'boolean',
      localImportUrl: 'string',
      name: 'string',
      namespaceId: 'number',
      path: 'string',
      readmeType: 'string',
      visibilityLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponseBody extends $tea.Model {
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  result?: CreateRepositoryResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      result: CreateRepositoryResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRepositoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryDeployKeyRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryDeployKeyResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: CreateRepositoryDeployKeyResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: CreateRepositoryDeployKeyResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryDeployKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRepositoryDeployKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRepositoryDeployKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryGroupRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryGroupResponseBody extends $tea.Model {
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  result?: CreateRepositoryGroupResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      result: CreateRepositoryGroupResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRepositoryGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRepositoryGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryProtectedBranchRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryProtectedBranchResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: CreateRepositoryProtectedBranchResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: CreateRepositoryProtectedBranchResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryProtectedBranchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRepositoryProtectedBranchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRepositoryProtectedBranchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSshKeyRequest extends $tea.Model {
  accessToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSshKeyResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: CreateSshKeyResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: CreateSshKeyResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSshKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSshKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSshKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: CreateTagResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: CreateTagResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBranchRequest extends $tea.Model {
  accessToken?: string;
  branchName?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      branchName: 'BranchName',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      branchName: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBranchResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: DeleteBranchResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: DeleteBranchResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBranchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteBranchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBranchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileRequest extends $tea.Model {
  accessToken?: string;
  branchName?: string;
  commitMessage?: string;
  filePath?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      branchName: 'BranchName',
      commitMessage: 'CommitMessage',
      filePath: 'FilePath',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      branchName: 'string',
      commitMessage: 'string',
      filePath: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: DeleteFileResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: DeleteFileResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupMemberRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupMemberResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: DeleteGroupMemberResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: DeleteGroupMemberResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGroupMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGroupMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: DeleteRepositoryResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: DeleteRepositoryResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRepositoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryGroupRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryGroupResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: DeleteRepositoryGroupResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: DeleteRepositoryGroupResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRepositoryGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRepositoryGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryMemberRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryMemberResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: DeleteRepositoryMemberResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: DeleteRepositoryMemberResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRepositoryMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRepositoryMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryMemberWithExternUidRequest extends $tea.Model {
  accessToken?: string;
  externUserId?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      externUserId: 'ExternUserId',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      externUserId: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryMemberWithExternUidResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: DeleteRepositoryMemberWithExternUidResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: DeleteRepositoryMemberWithExternUidResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryMemberWithExternUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRepositoryMemberWithExternUidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRepositoryMemberWithExternUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryProtectedBranchRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryProtectedBranchResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: DeleteRepositoryProtectedBranchResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: DeleteRepositoryProtectedBranchResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryProtectedBranchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRepositoryProtectedBranchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRepositoryProtectedBranchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryTagRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryTagResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: DeleteRepositoryTagResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: DeleteRepositoryTagResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRepositoryTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRepositoryTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryTagV2Request extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryTagV2ResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: DeleteRepositoryTagV2ResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: DeleteRepositoryTagV2ResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryTagV2Response extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRepositoryTagV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRepositoryTagV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryWebhookRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryWebhookResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: DeleteRepositoryWebhookResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: DeleteRepositoryWebhookResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryWebhookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRepositoryWebhookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRepositoryWebhookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRepositoryDeployKeyRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRepositoryDeployKeyResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: EnableRepositoryDeployKeyResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: EnableRepositoryDeployKeyResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRepositoryDeployKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableRepositoryDeployKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableRepositoryDeployKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBranchInfoRequest extends $tea.Model {
  accessToken?: string;
  branchName?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      branchName: 'BranchName',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      branchName: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBranchInfoResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: GetBranchInfoResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetBranchInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBranchInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBranchInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBranchInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeCompletionRequest extends $tea.Model {
  fetchKeys?: string;
  isEncrypted?: boolean;
  static names(): { [key: string]: string } {
    return {
      fetchKeys: 'FetchKeys',
      isEncrypted: 'IsEncrypted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchKeys: 'string',
      isEncrypted: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeCompletionResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: GetCodeCompletionResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetCodeCompletionResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeCompletionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCodeCompletionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCodeCompletionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeupOrganizationRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeupOrganizationResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: GetCodeupOrganizationResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetCodeupOrganizationResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeupOrganizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCodeupOrganizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCodeupOrganizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileBlobsRequest extends $tea.Model {
  accessToken?: string;
  filePath?: string;
  from?: number;
  organizationId?: string;
  ref?: string;
  subUserId?: string;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      filePath: 'FilePath',
      from: 'From',
      organizationId: 'OrganizationId',
      ref: 'Ref',
      subUserId: 'SubUserId',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      filePath: 'string',
      from: 'number',
      organizationId: 'string',
      ref: 'string',
      subUserId: 'string',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileBlobsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: GetFileBlobsResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetFileBlobsResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileBlobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFileBlobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFileBlobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileLastCommitRequest extends $tea.Model {
  accessToken?: string;
  filePath?: string;
  organizationId?: string;
  sha?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      filePath: 'FilePath',
      organizationId: 'OrganizationId',
      sha: 'Sha',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      filePath: 'string',
      organizationId: 'string',
      sha: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileLastCommitResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: GetFileLastCommitResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetFileLastCommitResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileLastCommitResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFileLastCommitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFileLastCommitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupDetailRequest extends $tea.Model {
  accessToken?: string;
  groupId?: number;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      groupId: 'GroupId',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      groupId: 'number',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupDetailResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: GetGroupDetailResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetGroupDetailResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGroupDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGroupDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestApproveStatusRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestApproveStatusResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: GetMergeRequestApproveStatusResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetMergeRequestApproveStatusResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestApproveStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMergeRequestApproveStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMergeRequestApproveStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: GetMergeRequestDetailResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetMergeRequestDetailResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMergeRequestDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMergeRequestDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestSettingRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestSettingResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: GetMergeRequestSettingResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetMergeRequestSettingResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMergeRequestSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMergeRequestSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationRepositorySettingRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationRepositorySettingResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: GetOrganizationRepositorySettingResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetOrganizationRepositorySettingResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationRepositorySettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOrganizationRepositorySettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOrganizationRepositorySettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationSecurityCenterStatusRequest extends $tea.Model {
  accessToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationSecurityCenterStatusResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: GetOrganizationSecurityCenterStatusResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetOrganizationSecurityCenterStatusResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationSecurityCenterStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOrganizationSecurityCenterStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOrganizationSecurityCenterStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMemberRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMemberResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: GetProjectMemberResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetProjectMemberResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProjectMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryCommitRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryCommitResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: GetRepositoryCommitResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetRepositoryCommitResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryCommitResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRepositoryCommitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRepositoryCommitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryInfoRequest extends $tea.Model {
  accessToken?: string;
  identity?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      identity: 'Identity',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      identity: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryInfoResponseBody extends $tea.Model {
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  result?: GetRepositoryInfoResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      result: GetRepositoryInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRepositoryInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRepositoryInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: GetRepositoryTagResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetRepositoryTagResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRepositoryTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRepositoryTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagV2Request extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagV2ResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: GetRepositoryTagV2ResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetRepositoryTagV2ResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagV2Response extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRepositoryTagV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRepositoryTagV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: GetUserInfoResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: GetUserInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsSlsUserAuthrizedCodeupRequest extends $tea.Model {
  organizationId?: string;
  aliyunSubUserId?: string;
  aliyunUserId?: string;
  codeupProjectId?: number;
  slsLogStore?: string;
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      aliyunSubUserId: 'aliyunSubUserId',
      aliyunUserId: 'aliyunUserId',
      codeupProjectId: 'codeupProjectId',
      slsLogStore: 'slsLogStore',
      slsProject: 'slsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      aliyunSubUserId: 'string',
      aliyunUserId: 'string',
      codeupProjectId: 'number',
      slsLogStore: 'string',
      slsProject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsSlsUserAuthrizedCodeupResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: IsSlsUserAuthrizedCodeupResponseBodyResult;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: IsSlsUserAuthrizedCodeupResponseBodyResult,
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsSlsUserAuthrizedCodeupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: IsSlsUserAuthrizedCodeupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IsSlsUserAuthrizedCodeupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMemberRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  page?: number;
  pageSize?: number;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      page: 'Page',
      pageSize: 'PageSize',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMemberResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListGroupMemberResponseBodyResult[];
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListGroupMemberResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGroupMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupRepositoriesRequest extends $tea.Model {
  accessToken?: string;
  isMember?: boolean;
  organizationId?: string;
  page?: number;
  pageSize?: number;
  search?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      isMember: 'IsMember',
      organizationId: 'OrganizationId',
      page: 'Page',
      pageSize: 'PageSize',
      search: 'Search',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      isMember: 'boolean',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      search: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupRepositoriesResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListGroupRepositoriesResponseBodyResult[];
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListGroupRepositoriesResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupRepositoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGroupRepositoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupRepositoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsRequest extends $tea.Model {
  accessToken?: string;
  includePersonal?: boolean;
  organizationId?: string;
  page?: number;
  pageSize?: number;
  search?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      includePersonal: 'IncludePersonal',
      organizationId: 'OrganizationId',
      page: 'Page',
      pageSize: 'PageSize',
      search: 'Search',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      includePersonal: 'boolean',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      search: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListGroupsResponseBodyResult[];
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListGroupsResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestCommentsRequest extends $tea.Model {
  accessToken?: string;
  fromCommit?: string;
  organizationId?: string;
  toCommit?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      fromCommit: 'FromCommit',
      organizationId: 'OrganizationId',
      toCommit: 'ToCommit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      fromCommit: 'string',
      organizationId: 'string',
      toCommit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestCommentsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListMergeRequestCommentsResponseBodyResult[];
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListMergeRequestCommentsResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestCommentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMergeRequestCommentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMergeRequestCommentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsRequest extends $tea.Model {
  accessToken?: string;
  afterDate?: string;
  assigneeCodeupIdList?: string;
  assigneeIdList?: string;
  authorCodeupIdList?: string;
  authorIdList?: string;
  beforeDate?: string;
  groupIdList?: string;
  order?: string;
  organizationId?: string;
  page?: number;
  pageSize?: number;
  projectIdList?: string;
  search?: string;
  state?: string;
  subscriberCodeupIdList?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      afterDate: 'AfterDate',
      assigneeCodeupIdList: 'AssigneeCodeupIdList',
      assigneeIdList: 'AssigneeIdList',
      authorCodeupIdList: 'AuthorCodeupIdList',
      authorIdList: 'AuthorIdList',
      beforeDate: 'BeforeDate',
      groupIdList: 'GroupIdList',
      order: 'Order',
      organizationId: 'OrganizationId',
      page: 'Page',
      pageSize: 'PageSize',
      projectIdList: 'ProjectIdList',
      search: 'Search',
      state: 'State',
      subscriberCodeupIdList: 'SubscriberCodeupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      afterDate: 'string',
      assigneeCodeupIdList: 'string',
      assigneeIdList: 'string',
      authorCodeupIdList: 'string',
      authorIdList: 'string',
      beforeDate: 'string',
      groupIdList: 'string',
      order: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      projectIdList: 'string',
      search: 'string',
      state: 'string',
      subscriberCodeupIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListMergeRequestsResponseBodyResult[];
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListMergeRequestsResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMergeRequestsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMergeRequestsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationSecurityScoresRequest extends $tea.Model {
  accessToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationSecurityScoresResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListOrganizationSecurityScoresResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListOrganizationSecurityScoresResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationSecurityScoresResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListOrganizationSecurityScoresResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOrganizationSecurityScoresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationsRequest extends $tea.Model {
  accessLevel?: number;
  accessToken?: string;
  minAccessLevel?: number;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      accessToken: 'AccessToken',
      minAccessLevel: 'MinAccessLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      accessToken: 'string',
      minAccessLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListOrganizationsResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListOrganizationsResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListOrganizationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOrganizationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoriesRequest extends $tea.Model {
  accessToken?: string;
  archive?: boolean;
  order?: string;
  organizationId?: string;
  page?: number;
  pageSize?: number;
  search?: string;
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      archive: 'Archive',
      order: 'Order',
      organizationId: 'OrganizationId',
      page: 'Page',
      pageSize: 'PageSize',
      search: 'Search',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      archive: 'boolean',
      order: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      search: 'string',
      sort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoriesResponseBody extends $tea.Model {
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  result?: ListRepositoriesResponseBodyResult[];
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRepositoriesResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRepositoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepositoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryBranchesRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  page?: number;
  pageSize?: number;
  search?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      page: 'Page',
      pageSize: 'PageSize',
      search: 'Search',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      search: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryBranchesResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListRepositoryBranchesResponseBodyResult[];
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRepositoryBranchesResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryBranchesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRepositoryBranchesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepositoryBranchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCodeRequest extends $tea.Model {
  organizationId?: string;
  filePath?: ListRepositoryCodeRequestFilePath;
  isCodeBlock?: boolean;
  keyWord?: string;
  language?: string;
  order?: string;
  page?: number;
  pageSize?: number;
  repositoryPath?: ListRepositoryCodeRequestRepositoryPath;
  scope?: string;
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      filePath: 'FilePath',
      isCodeBlock: 'IsCodeBlock',
      keyWord: 'KeyWord',
      language: 'Language',
      order: 'Order',
      page: 'Page',
      pageSize: 'PageSize',
      repositoryPath: 'RepositoryPath',
      scope: 'Scope',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      filePath: ListRepositoryCodeRequestFilePath,
      isCodeBlock: 'boolean',
      keyWord: 'string',
      language: 'string',
      order: 'string',
      page: 'number',
      pageSize: 'number',
      repositoryPath: ListRepositoryCodeRequestRepositoryPath,
      scope: 'string',
      sort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCodeResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListRepositoryCodeResponseBodyResult[];
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRepositoryCodeResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRepositoryCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepositoryCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCommitDiffRequest extends $tea.Model {
  accessToken?: string;
  contextLine?: number;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      contextLine: 'ContextLine',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      contextLine: 'number',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCommitDiffResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListRepositoryCommitDiffResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRepositoryCommitDiffResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCommitDiffResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRepositoryCommitDiffResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepositoryCommitDiffResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCommitsRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  page?: number;
  pageSize?: number;
  path?: string;
  refName?: string;
  search?: string;
  showSignature?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      page: 'Page',
      pageSize: 'PageSize',
      path: 'Path',
      refName: 'RefName',
      search: 'Search',
      showSignature: 'ShowSignature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      path: 'string',
      refName: 'string',
      search: 'string',
      showSignature: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCommitsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListRepositoryCommitsResponseBodyResult[];
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRepositoryCommitsResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCommitsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRepositoryCommitsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepositoryCommitsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryMemberRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  page?: number;
  pageSize?: number;
  query?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      page: 'Page',
      pageSize: 'PageSize',
      query: 'Query',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      query: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryMemberResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListRepositoryMemberResponseBodyResult[];
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRepositoryMemberResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRepositoryMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepositoryMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryMemberWithInheritedRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryMemberWithInheritedResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListRepositoryMemberWithInheritedResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRepositoryMemberWithInheritedResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryMemberWithInheritedResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRepositoryMemberWithInheritedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepositoryMemberWithInheritedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryProtectedBranchRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryProtectedBranchResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListRepositoryProtectedBranchResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRepositoryProtectedBranchResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryProtectedBranchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRepositoryProtectedBranchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepositoryProtectedBranchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTagsRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  page?: number;
  pageSize?: number;
  search?: string;
  showSignature?: boolean;
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      page: 'Page',
      pageSize: 'PageSize',
      search: 'Search',
      showSignature: 'ShowSignature',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      search: 'string',
      showSignature: 'boolean',
      sort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTagsResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListRepositoryTagsResponseBodyResult[];
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRepositoryTagsResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRepositoryTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepositoryTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTreeRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  path?: string;
  refName?: string;
  subUserId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      path: 'Path',
      refName: 'RefName',
      subUserId: 'SubUserId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      path: 'string',
      refName: 'string',
      subUserId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTreeResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListRepositoryTreeResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRepositoryTreeResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTreeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRepositoryTreeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepositoryTreeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryWebhookRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryWebhookResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListRepositoryWebhookResponseBodyResult[];
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRepositoryWebhookResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryWebhookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRepositoryWebhookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepositoryWebhookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: MergeMergeRequestResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: MergeMergeRequestResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: MergeMergeRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MergeMergeRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlsRelationRequest extends $tea.Model {
  organizationId?: string;
  aliyunUserId?: string;
  codeupProjectId?: number;
  slsLogStore?: string;
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      aliyunUserId: 'aliyunUserId',
      codeupProjectId: 'codeupProjectId',
      slsLogStore: 'slsLogStore',
      slsProject: 'slsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      aliyunUserId: 'string',
      codeupProjectId: 'number',
      slsLogStore: 'string',
      slsProject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlsRelationResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: QuerySlsRelationResponseBodyResult[];
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QuerySlsRelationResponseBodyResult },
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlsRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySlsRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySlsRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelatedSlsLogStoreRequest extends $tea.Model {
  organizationId?: string;
  aliyunUserId?: string;
  codeupProjectId?: number;
  defaultViewer?: boolean;
  slsLogStore?: string;
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      aliyunUserId: 'aliyunUserId',
      codeupProjectId: 'codeupProjectId',
      defaultViewer: 'defaultViewer',
      slsLogStore: 'slsLogStore',
      slsProject: 'slsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      aliyunUserId: 'string',
      codeupProjectId: 'number',
      defaultViewer: 'boolean',
      slsLogStore: 'string',
      slsProject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelatedSlsLogStoreResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: RelatedSlsLogStoreResponseBodyResult;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: RelatedSlsLogStoreResponseBodyResult,
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelatedSlsLogStoreResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RelatedSlsLogStoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RelatedSlsLogStoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerRepositoryMirrorSyncRequest extends $tea.Model {
  accessToken?: string;
  account?: string;
  organizationId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      account: 'Account',
      organizationId: 'OrganizationId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      account: 'string',
      organizationId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerRepositoryMirrorSyncResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: TriggerRepositoryMirrorSyncResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: TriggerRepositoryMirrorSyncResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerRepositoryMirrorSyncResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TriggerRepositoryMirrorSyncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TriggerRepositoryMirrorSyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnRelatedSlsLogStoreRequest extends $tea.Model {
  organizationId?: string;
  aliyunUserId?: string;
  codeupProjectId?: number;
  slsLogStore?: string;
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      aliyunUserId: 'aliyunUserId',
      codeupProjectId: 'codeupProjectId',
      slsLogStore: 'slsLogStore',
      slsProject: 'slsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      aliyunUserId: 'string',
      codeupProjectId: 'number',
      slsLogStore: 'string',
      slsProject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnRelatedSlsLogStoreResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: UnRelatedSlsLogStoreResponseBodyResult;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: UnRelatedSlsLogStoreResponseBodyResult,
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnRelatedSlsLogStoreResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnRelatedSlsLogStoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnRelatedSlsLogStoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: UpdateFileResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: UpdateFileResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupMemberRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupMemberResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: UpdateGroupMemberResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: UpdateGroupMemberResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGroupMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGroupMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: UpdateMergeRequestResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: UpdateMergeRequestResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMergeRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMergeRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestCommentRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestCommentResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: UpdateMergeRequestCommentResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: UpdateMergeRequestCommentResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestCommentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMergeRequestCommentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMergeRequestCommentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestSettingRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestSettingResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: UpdateMergeRequestSettingResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: UpdateMergeRequestSettingResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMergeRequestSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMergeRequestSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: UpdateRepositoryResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: UpdateRepositoryResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRepositoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryMemberRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryMemberResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: UpdateRepositoryMemberResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: UpdateRepositoryMemberResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateRepositoryMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRepositoryMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults extends $tea.Model {
  checkName?: string;
  checkStatus?: string;
  checkType?: string;
  extraUsers?: AcceptMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers[];
  satisfiedItems?: string[];
  unsatisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      extraUsers: 'ExtraUsers',
      satisfiedItems: 'SatisfiedItems',
      unsatisfiedItems: 'UnsatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkStatus: 'string',
      checkType: 'string',
      extraUsers: { 'type': 'array', 'itemType': AcceptMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults extends $tea.Model {
  checkName?: string;
  checkStatus?: string;
  checkType?: string;
  extraUsers?: AcceptMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers[];
  satisfiedItems?: string[];
  unsatisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      extraUsers: 'ExtraUsers',
      satisfiedItems: 'SatisfiedItems',
      unsatisfiedItems: 'UnsatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkStatus: 'string',
      checkType: 'string',
      extraUsers: { 'type': 'array', 'itemType': AcceptMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBodyResultApproveCheckResult extends $tea.Model {
  satisfiedCheckResults?: AcceptMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults[];
  totalCheckResult?: string;
  unsatisfiedCheckResults?: AcceptMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults[];
  static names(): { [key: string]: string } {
    return {
      satisfiedCheckResults: 'SatisfiedCheckResults',
      totalCheckResult: 'TotalCheckResult',
      unsatisfiedCheckResults: 'UnsatisfiedCheckResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      satisfiedCheckResults: { 'type': 'array', 'itemType': AcceptMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults },
      totalCheckResult: 'string',
      unsatisfiedCheckResults: { 'type': 'array', 'itemType': AcceptMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBodyResultAssigneeList extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBodyResultAuthor extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBodyResult extends $tea.Model {
  acceptedRevision?: string;
  aheadCommitCount?: number;
  approveCheckResult?: AcceptMergeRequestResponseBodyResultApproveCheckResult;
  assigneeList?: AcceptMergeRequestResponseBodyResultAssigneeList[];
  author?: AcceptMergeRequestResponseBodyResultAuthor;
  behindCommitCount?: number;
  createdAt?: string;
  description?: string;
  id?: number;
  mergeError?: string;
  mergeStatus?: string;
  mergeType?: string;
  mergedRevision?: string;
  nameWithNamespace?: string;
  projectId?: number;
  sourceBranch?: string;
  state?: string;
  targetBranch?: string;
  title?: string;
  updatedAt?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      acceptedRevision: 'AcceptedRevision',
      aheadCommitCount: 'AheadCommitCount',
      approveCheckResult: 'ApproveCheckResult',
      assigneeList: 'AssigneeList',
      author: 'Author',
      behindCommitCount: 'BehindCommitCount',
      createdAt: 'CreatedAt',
      description: 'Description',
      id: 'Id',
      mergeError: 'MergeError',
      mergeStatus: 'MergeStatus',
      mergeType: 'MergeType',
      mergedRevision: 'MergedRevision',
      nameWithNamespace: 'NameWithNamespace',
      projectId: 'ProjectId',
      sourceBranch: 'SourceBranch',
      state: 'State',
      targetBranch: 'TargetBranch',
      title: 'Title',
      updatedAt: 'UpdatedAt',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptedRevision: 'string',
      aheadCommitCount: 'number',
      approveCheckResult: AcceptMergeRequestResponseBodyResultApproveCheckResult,
      assigneeList: { 'type': 'array', 'itemType': AcceptMergeRequestResponseBodyResultAssigneeList },
      author: AcceptMergeRequestResponseBodyResultAuthor,
      behindCommitCount: 'number',
      createdAt: 'string',
      description: 'string',
      id: 'number',
      mergeError: 'string',
      mergeStatus: 'string',
      mergeType: 'string',
      mergedRevision: 'string',
      nameWithNamespace: 'string',
      projectId: 'number',
      sourceBranch: 'string',
      state: 'string',
      targetBranch: 'string',
      title: 'string',
      updatedAt: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMemberResponseBodyResult extends $tea.Model {
  accessLevel?: number;
  avatarUrl?: string;
  email?: string;
  externUserId?: string;
  id?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      avatarUrl: 'AvatarUrl',
      email: 'Email',
      externUserId: 'ExternUserId',
      id: 'Id',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      avatarUrl: 'string',
      email: 'string',
      externUserId: 'string',
      id: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRepositoryMemberResponseBodyResult extends $tea.Model {
  accessLevel?: number;
  avatarUrl?: string;
  email?: string;
  externUserId?: string;
  id?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      avatarUrl: 'AvatarUrl',
      email: 'Email',
      externUserId: 'ExternUserId',
      id: 'Id',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      avatarUrl: 'string',
      email: 'string',
      externUserId: 'string',
      id: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWebhookResponseBodyResult extends $tea.Model {
  buildEvents?: boolean;
  createdAt?: string;
  description?: string;
  enableSslVerification?: boolean;
  id?: number;
  issuesEvents?: boolean;
  lastTestResult?: string;
  mergeRequestsEvents?: boolean;
  noteEvents?: boolean;
  projectId?: number;
  pushEvents?: boolean;
  secretToken?: string;
  tagPushEvents?: boolean;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      buildEvents: 'BuildEvents',
      createdAt: 'CreatedAt',
      description: 'Description',
      enableSslVerification: 'EnableSslVerification',
      id: 'Id',
      issuesEvents: 'IssuesEvents',
      lastTestResult: 'LastTestResult',
      mergeRequestsEvents: 'MergeRequestsEvents',
      noteEvents: 'NoteEvents',
      projectId: 'ProjectId',
      pushEvents: 'PushEvents',
      secretToken: 'SecretToken',
      tagPushEvents: 'TagPushEvents',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildEvents: 'boolean',
      createdAt: 'string',
      description: 'string',
      enableSslVerification: 'boolean',
      id: 'number',
      issuesEvents: 'boolean',
      lastTestResult: 'string',
      mergeRequestsEvents: 'boolean',
      noteEvents: 'boolean',
      projectId: 'number',
      pushEvents: 'boolean',
      secretToken: 'string',
      tagPushEvents: 'boolean',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBranchResponseBodyResultCommitInfo extends $tea.Model {
  authorDate?: string;
  authorEmail?: string;
  authorName?: string;
  committedDate?: string;
  committerEmail?: string;
  committerName?: string;
  createdAt?: string;
  id?: string;
  message?: string;
  parentIds?: string[];
  shortId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorDate: 'AuthorDate',
      authorEmail: 'AuthorEmail',
      authorName: 'AuthorName',
      committedDate: 'CommittedDate',
      committerEmail: 'CommitterEmail',
      committerName: 'CommitterName',
      createdAt: 'CreatedAt',
      id: 'Id',
      message: 'Message',
      parentIds: 'ParentIds',
      shortId: 'ShortId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorDate: 'string',
      authorEmail: 'string',
      authorName: 'string',
      committedDate: 'string',
      committerEmail: 'string',
      committerName: 'string',
      createdAt: 'string',
      id: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      shortId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBranchResponseBodyResult extends $tea.Model {
  branchName?: string;
  commitInfo?: CreateBranchResponseBodyResultCommitInfo;
  protectedBranch?: boolean;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      commitInfo: 'CommitInfo',
      protectedBranch: 'ProtectedBranch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      commitInfo: CreateBranchResponseBodyResultCommitInfo,
      protectedBranch: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileResponseBodyResult extends $tea.Model {
  branchName?: string;
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      filePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults extends $tea.Model {
  checkName?: string;
  checkStatus?: string;
  checkType?: string;
  extraUsers?: CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers[];
  satisfiedItems?: string[];
  unsatisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      extraUsers: 'ExtraUsers',
      satisfiedItems: 'SatisfiedItems',
      unsatisfiedItems: 'UnsatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkStatus: 'string',
      checkType: 'string',
      extraUsers: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults extends $tea.Model {
  checkName?: string;
  checkStatus?: string;
  checkType?: string;
  extraUsers?: CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers[];
  satisfiedItems?: string[];
  unsatisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      extraUsers: 'ExtraUsers',
      satisfiedItems: 'SatisfiedItems',
      unsatisfiedItems: 'UnsatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkStatus: 'string',
      checkType: 'string',
      extraUsers: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultApproveCheckResult extends $tea.Model {
  satisfiedCheckResults?: CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults[];
  totalCheckResult?: string;
  unsatisfiedCheckResults?: CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults[];
  static names(): { [key: string]: string } {
    return {
      satisfiedCheckResults: 'SatisfiedCheckResults',
      totalCheckResult: 'TotalCheckResult',
      unsatisfiedCheckResults: 'UnsatisfiedCheckResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      satisfiedCheckResults: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults },
      totalCheckResult: 'string',
      unsatisfiedCheckResults: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultAssigneeList extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultAuthor extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResult extends $tea.Model {
  acceptedRevision?: string;
  aheadCommitCount?: number;
  approveCheckResult?: CreateMergeRequestResponseBodyResultApproveCheckResult;
  assigneeList?: CreateMergeRequestResponseBodyResultAssigneeList[];
  author?: CreateMergeRequestResponseBodyResultAuthor;
  behindCommitCount?: number;
  createdAt?: string;
  description?: string;
  id?: number;
  mergeError?: string;
  mergeStatus?: string;
  mergeType?: string;
  mergedRevision?: string;
  nameWithNamespace?: string;
  projectId?: number;
  sourceBranch?: string;
  state?: string;
  targetBranch?: string;
  title?: string;
  updatedAt?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      acceptedRevision: 'AcceptedRevision',
      aheadCommitCount: 'AheadCommitCount',
      approveCheckResult: 'ApproveCheckResult',
      assigneeList: 'AssigneeList',
      author: 'Author',
      behindCommitCount: 'BehindCommitCount',
      createdAt: 'CreatedAt',
      description: 'Description',
      id: 'Id',
      mergeError: 'MergeError',
      mergeStatus: 'MergeStatus',
      mergeType: 'MergeType',
      mergedRevision: 'MergedRevision',
      nameWithNamespace: 'NameWithNamespace',
      projectId: 'ProjectId',
      sourceBranch: 'SourceBranch',
      state: 'State',
      targetBranch: 'TargetBranch',
      title: 'Title',
      updatedAt: 'UpdatedAt',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptedRevision: 'string',
      aheadCommitCount: 'number',
      approveCheckResult: CreateMergeRequestResponseBodyResultApproveCheckResult,
      assigneeList: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultAssigneeList },
      author: CreateMergeRequestResponseBodyResultAuthor,
      behindCommitCount: 'number',
      createdAt: 'string',
      description: 'string',
      id: 'number',
      mergeError: 'string',
      mergeStatus: 'string',
      mergeType: 'string',
      mergedRevision: 'string',
      nameWithNamespace: 'string',
      projectId: 'number',
      sourceBranch: 'string',
      state: 'string',
      targetBranch: 'string',
      title: 'string',
      updatedAt: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestCommentResponseBodyResultAuthor extends $tea.Model {
  avatarUrl?: string;
  email?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      email: 'Email',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      email: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestCommentResponseBodyResult extends $tea.Model {
  author?: CreateMergeRequestCommentResponseBodyResultAuthor;
  closed?: number;
  createdAt?: string;
  id?: number;
  isDraft?: boolean;
  line?: number;
  note?: string;
  outDated?: boolean;
  parentNoteId?: number;
  path?: string;
  projectId?: number;
  rangeContext?: string;
  side?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      closed: 'Closed',
      createdAt: 'CreatedAt',
      id: 'Id',
      isDraft: 'IsDraft',
      line: 'Line',
      note: 'Note',
      outDated: 'OutDated',
      parentNoteId: 'ParentNoteId',
      path: 'Path',
      projectId: 'ProjectId',
      rangeContext: 'RangeContext',
      side: 'Side',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: CreateMergeRequestCommentResponseBodyResultAuthor,
      closed: 'number',
      createdAt: 'string',
      id: 'number',
      isDraft: 'boolean',
      line: 'number',
      note: 'string',
      outDated: 'boolean',
      parentNoteId: 'number',
      path: 'string',
      projectId: 'number',
      rangeContext: 'string',
      side: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponseBodyResultNamespace extends $tea.Model {
  avatar?: string;
  createdAt?: string;
  description?: string;
  id?: number;
  name?: string;
  ownerId?: number;
  path?: string;
  public?: boolean;
  state?: string;
  updatedAt?: string;
  visibilityLevel?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      createdAt: 'CreatedAt',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      path: 'Path',
      public: 'Public',
      state: 'State',
      updatedAt: 'UpdatedAt',
      visibilityLevel: 'VisibilityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      createdAt: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
      ownerId: 'number',
      path: 'string',
      public: 'boolean',
      state: 'string',
      updatedAt: 'string',
      visibilityLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponseBodyResult extends $tea.Model {
  archive?: boolean;
  avatarUrl?: string;
  buildsEnableStatus?: boolean;
  createdAt?: string;
  creatorId?: number;
  defaultBranch?: string;
  demoProjectStatus?: boolean;
  description?: string;
  httpUrlToRepo?: string;
  id?: number;
  issuesEnableStatus?: boolean;
  lastActivityAt?: string;
  mergeRequestEnableStatus?: boolean;
  name?: string;
  nameWithNamespace?: string;
  namespace?: CreateRepositoryResponseBodyResultNamespace;
  path?: string;
  pathWithNamespace?: string;
  public?: boolean;
  snippetsEnableStatus?: boolean;
  sshUrlToRepo?: string;
  tagList?: string[];
  visibilityLevel?: string;
  webUrl?: string;
  wikiEnableStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      archive: 'Archive',
      avatarUrl: 'AvatarUrl',
      buildsEnableStatus: 'BuildsEnableStatus',
      createdAt: 'CreatedAt',
      creatorId: 'CreatorId',
      defaultBranch: 'DefaultBranch',
      demoProjectStatus: 'DemoProjectStatus',
      description: 'Description',
      httpUrlToRepo: 'HttpUrlToRepo',
      id: 'Id',
      issuesEnableStatus: 'IssuesEnableStatus',
      lastActivityAt: 'LastActivityAt',
      mergeRequestEnableStatus: 'MergeRequestEnableStatus',
      name: 'Name',
      nameWithNamespace: 'NameWithNamespace',
      namespace: 'Namespace',
      path: 'Path',
      pathWithNamespace: 'PathWithNamespace',
      public: 'Public',
      snippetsEnableStatus: 'SnippetsEnableStatus',
      sshUrlToRepo: 'SshUrlToRepo',
      tagList: 'TagList',
      visibilityLevel: 'VisibilityLevel',
      webUrl: 'WebUrl',
      wikiEnableStatus: 'WikiEnableStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archive: 'boolean',
      avatarUrl: 'string',
      buildsEnableStatus: 'boolean',
      createdAt: 'string',
      creatorId: 'number',
      defaultBranch: 'string',
      demoProjectStatus: 'boolean',
      description: 'string',
      httpUrlToRepo: 'string',
      id: 'number',
      issuesEnableStatus: 'boolean',
      lastActivityAt: 'string',
      mergeRequestEnableStatus: 'boolean',
      name: 'string',
      nameWithNamespace: 'string',
      namespace: CreateRepositoryResponseBodyResultNamespace,
      path: 'string',
      pathWithNamespace: 'string',
      public: 'boolean',
      snippetsEnableStatus: 'boolean',
      sshUrlToRepo: 'string',
      tagList: { 'type': 'array', 'itemType': 'string' },
      visibilityLevel: 'string',
      webUrl: 'string',
      wikiEnableStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryDeployKeyResponseBodyResult extends $tea.Model {
  createdAt?: string;
  fingerPrint?: string;
  id?: number;
  key?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      fingerPrint: 'FingerPrint',
      id: 'Id',
      key: 'Key',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      fingerPrint: 'string',
      id: 'number',
      key: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryGroupResponseBodyResult extends $tea.Model {
  avatarUrl?: string;
  description?: string;
  id?: number;
  name?: string;
  nameWithNamespace?: string;
  ownerId?: number;
  parentId?: number;
  path?: string;
  pathWithNamespace?: string;
  type?: string;
  visibilityLevel?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      nameWithNamespace: 'NameWithNamespace',
      ownerId: 'OwnerId',
      parentId: 'ParentId',
      path: 'Path',
      pathWithNamespace: 'PathWithNamespace',
      type: 'Type',
      visibilityLevel: 'VisibilityLevel',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
      nameWithNamespace: 'string',
      ownerId: 'number',
      parentId: 'number',
      path: 'string',
      pathWithNamespace: 'string',
      type: 'string',
      visibilityLevel: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryProtectedBranchResponseBodyResultMergeRequestSetting extends $tea.Model {
  allowMergeRequestRoles?: number[];
  allowSelfApproval?: boolean;
  defaultAssignees?: string[];
  isRequireDiscussionProcessed?: boolean;
  isResetApprovalWhenNewPush?: boolean;
  mergeRequestMode?: string;
  minimualApproval?: number;
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowMergeRequestRoles: 'AllowMergeRequestRoles',
      allowSelfApproval: 'AllowSelfApproval',
      defaultAssignees: 'DefaultAssignees',
      isRequireDiscussionProcessed: 'IsRequireDiscussionProcessed',
      isResetApprovalWhenNewPush: 'IsResetApprovalWhenNewPush',
      mergeRequestMode: 'MergeRequestMode',
      minimualApproval: 'MinimualApproval',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowMergeRequestRoles: { 'type': 'array', 'itemType': 'number' },
      allowSelfApproval: 'boolean',
      defaultAssignees: { 'type': 'array', 'itemType': 'string' },
      isRequireDiscussionProcessed: 'boolean',
      isResetApprovalWhenNewPush: 'boolean',
      mergeRequestMode: 'string',
      minimualApproval: 'number',
      required: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryProtectedBranchResponseBodyResultTestSettingCheckConfigCheckItems extends $tea.Model {
  name?: string;
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      required: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryProtectedBranchResponseBodyResultTestSettingCheckConfig extends $tea.Model {
  checkItems?: CreateRepositoryProtectedBranchResponseBodyResultTestSettingCheckConfigCheckItems[];
  static names(): { [key: string]: string } {
    return {
      checkItems: 'CheckItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItems: { 'type': 'array', 'itemType': CreateRepositoryProtectedBranchResponseBodyResultTestSettingCheckConfigCheckItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryProtectedBranchResponseBodyResultTestSettingCodingGuidelinesDetection extends $tea.Model {
  enabled?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryProtectedBranchResponseBodyResultTestSettingSensitiveInfoDetection extends $tea.Model {
  enabled?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryProtectedBranchResponseBodyResultTestSetting extends $tea.Model {
  checkConfig?: CreateRepositoryProtectedBranchResponseBodyResultTestSettingCheckConfig;
  codingGuidelinesDetection?: CreateRepositoryProtectedBranchResponseBodyResultTestSettingCodingGuidelinesDetection;
  required?: boolean;
  sensitiveInfoDetection?: CreateRepositoryProtectedBranchResponseBodyResultTestSettingSensitiveInfoDetection;
  static names(): { [key: string]: string } {
    return {
      checkConfig: 'CheckConfig',
      codingGuidelinesDetection: 'CodingGuidelinesDetection',
      required: 'Required',
      sensitiveInfoDetection: 'SensitiveInfoDetection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkConfig: CreateRepositoryProtectedBranchResponseBodyResultTestSettingCheckConfig,
      codingGuidelinesDetection: CreateRepositoryProtectedBranchResponseBodyResultTestSettingCodingGuidelinesDetection,
      required: 'boolean',
      sensitiveInfoDetection: CreateRepositoryProtectedBranchResponseBodyResultTestSettingSensitiveInfoDetection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryProtectedBranchResponseBodyResult extends $tea.Model {
  allowMergeRoles?: number[];
  allowPushRoles?: number[];
  branch?: string;
  id?: number;
  mergeRequestSetting?: CreateRepositoryProtectedBranchResponseBodyResultMergeRequestSetting;
  testSetting?: CreateRepositoryProtectedBranchResponseBodyResultTestSetting;
  static names(): { [key: string]: string } {
    return {
      allowMergeRoles: 'AllowMergeRoles',
      allowPushRoles: 'AllowPushRoles',
      branch: 'Branch',
      id: 'Id',
      mergeRequestSetting: 'MergeRequestSetting',
      testSetting: 'TestSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowMergeRoles: { 'type': 'array', 'itemType': 'number' },
      allowPushRoles: { 'type': 'array', 'itemType': 'number' },
      branch: 'string',
      id: 'number',
      mergeRequestSetting: CreateRepositoryProtectedBranchResponseBodyResultMergeRequestSetting,
      testSetting: CreateRepositoryProtectedBranchResponseBodyResultTestSetting,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSshKeyResponseBodyResult extends $tea.Model {
  createdAt?: string;
  fingerPrint?: string;
  id?: number;
  key?: string;
  keyScope?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      fingerPrint: 'FingerPrint',
      id: 'Id',
      key: 'Key',
      keyScope: 'KeyScope',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      fingerPrint: 'string',
      id: 'number',
      key: 'string',
      keyScope: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponseBodyResultCommitInfo extends $tea.Model {
  authorEmail?: string;
  authorName?: string;
  authoredDate?: string;
  committedDate?: string;
  committerEmail?: string;
  committerName?: string;
  createdAt?: string;
  id?: string;
  message?: string;
  parentIds?: string[];
  shortId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorEmail: 'AuthorEmail',
      authorName: 'AuthorName',
      authoredDate: 'AuthoredDate',
      committedDate: 'CommittedDate',
      committerEmail: 'CommitterEmail',
      committerName: 'CommitterName',
      createdAt: 'CreatedAt',
      id: 'Id',
      message: 'Message',
      parentIds: 'ParentIds',
      shortId: 'ShortId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorEmail: 'string',
      authorName: 'string',
      authoredDate: 'string',
      committedDate: 'string',
      committerEmail: 'string',
      committerName: 'string',
      createdAt: 'string',
      id: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      shortId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponseBodyResultRelease extends $tea.Model {
  description?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponseBodyResult extends $tea.Model {
  commitInfo?: CreateTagResponseBodyResultCommitInfo;
  message?: string;
  name?: string;
  release?: CreateTagResponseBodyResultRelease;
  static names(): { [key: string]: string } {
    return {
      commitInfo: 'CommitInfo',
      message: 'Message',
      name: 'Name',
      release: 'Release',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitInfo: CreateTagResponseBodyResultCommitInfo,
      message: 'string',
      name: 'string',
      release: CreateTagResponseBodyResultRelease,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBranchResponseBodyResult extends $tea.Model {
  branchName?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponseBodyResult extends $tea.Model {
  branchName?: string;
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      filePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupMemberResponseBodyResult extends $tea.Model {
  accessLevel?: number;
  avatarUrl?: string;
  email?: string;
  externUserId?: string;
  id?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      avatarUrl: 'AvatarUrl',
      email: 'Email',
      externUserId: 'ExternUserId',
      id: 'Id',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      avatarUrl: 'string',
      email: 'string',
      externUserId: 'string',
      id: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryResponseBodyResult extends $tea.Model {
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryGroupResponseBodyResult extends $tea.Model {
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryMemberResponseBodyResult extends $tea.Model {
  accessLevel?: number;
  createdAt?: string;
  id?: number;
  message?: string;
  notificationLevel?: number;
  sourceId?: number;
  sourceType?: string;
  updatedAt?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      createdAt: 'CreatedAt',
      id: 'Id',
      message: 'Message',
      notificationLevel: 'NotificationLevel',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      updatedAt: 'UpdatedAt',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      createdAt: 'string',
      id: 'number',
      message: 'string',
      notificationLevel: 'number',
      sourceId: 'number',
      sourceType: 'string',
      updatedAt: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryMemberWithExternUidResponseBodyResult extends $tea.Model {
  accessLevel?: number;
  createdAt?: string;
  id?: number;
  sourceId?: number;
  sourceType?: string;
  updatedAt?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      createdAt: 'CreatedAt',
      id: 'Id',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      updatedAt: 'UpdatedAt',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      createdAt: 'string',
      id: 'number',
      sourceId: 'number',
      sourceType: 'string',
      updatedAt: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryProtectedBranchResponseBodyResult extends $tea.Model {
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryTagResponseBodyResult extends $tea.Model {
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryTagV2ResponseBodyResult extends $tea.Model {
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryWebhookResponseBodyResult extends $tea.Model {
  createdAt?: string;
  description?: string;
  enableSslVerification?: boolean;
  id?: number;
  lastTestResult?: string;
  mergeRequestsEvents?: boolean;
  noteEvents?: boolean;
  projectId?: number;
  pushEvents?: boolean;
  secretToken?: string;
  tagPushEvents?: boolean;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      description: 'Description',
      enableSslVerification: 'EnableSslVerification',
      id: 'Id',
      lastTestResult: 'LastTestResult',
      mergeRequestsEvents: 'MergeRequestsEvents',
      noteEvents: 'NoteEvents',
      projectId: 'ProjectId',
      pushEvents: 'PushEvents',
      secretToken: 'SecretToken',
      tagPushEvents: 'TagPushEvents',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      enableSslVerification: 'boolean',
      id: 'number',
      lastTestResult: 'string',
      mergeRequestsEvents: 'boolean',
      noteEvents: 'boolean',
      projectId: 'number',
      pushEvents: 'boolean',
      secretToken: 'string',
      tagPushEvents: 'boolean',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRepositoryDeployKeyResponseBodyResult extends $tea.Model {
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBranchInfoResponseBodyResultCommitInfo extends $tea.Model {
  authorDate?: string;
  authorEmail?: string;
  authorName?: string;
  committedDate?: string;
  committerEmail?: string;
  committerName?: string;
  createdAt?: string;
  id?: string;
  message?: string;
  parentIds?: string[];
  shortId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorDate: 'AuthorDate',
      authorEmail: 'AuthorEmail',
      authorName: 'AuthorName',
      committedDate: 'CommittedDate',
      committerEmail: 'CommitterEmail',
      committerName: 'CommitterName',
      createdAt: 'CreatedAt',
      id: 'Id',
      message: 'Message',
      parentIds: 'ParentIds',
      shortId: 'ShortId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorDate: 'string',
      authorEmail: 'string',
      authorName: 'string',
      committedDate: 'string',
      committerEmail: 'string',
      committerName: 'string',
      createdAt: 'string',
      id: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      shortId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBranchInfoResponseBodyResult extends $tea.Model {
  branchName?: string;
  commitInfo?: GetBranchInfoResponseBodyResultCommitInfo;
  protectedBranch?: boolean;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      commitInfo: 'CommitInfo',
      protectedBranch: 'ProtectedBranch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      commitInfo: GetBranchInfoResponseBodyResultCommitInfo,
      protectedBranch: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeCompletionResponseBodyResult extends $tea.Model {
  body?: string;
  clientTimestamp?: string;
  fetchTimestamp?: string;
  invokeTimestamp?: string;
  receiveTimestamp?: string;
  rspTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      clientTimestamp: 'ClientTimestamp',
      fetchTimestamp: 'FetchTimestamp',
      invokeTimestamp: 'InvokeTimestamp',
      receiveTimestamp: 'ReceiveTimestamp',
      rspTimestamp: 'RspTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      clientTimestamp: 'string',
      fetchTimestamp: 'string',
      invokeTimestamp: 'string',
      receiveTimestamp: 'string',
      rspTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeupOrganizationResponseBodyResult extends $tea.Model {
  createdAt?: string;
  id?: number;
  namespaceId?: number;
  organizationId?: string;
  path?: string;
  updatedAt?: string;
  userRole?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
      namespaceId: 'NamespaceId',
      organizationId: 'OrganizationId',
      path: 'Path',
      updatedAt: 'UpdatedAt',
      userRole: 'UserRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'number',
      namespaceId: 'number',
      organizationId: 'string',
      path: 'string',
      updatedAt: 'string',
      userRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileBlobsResponseBodyResult extends $tea.Model {
  content?: string;
  totalLines?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      totalLines: 'TotalLines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      totalLines: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileLastCommitResponseBodyResultSignature extends $tea.Model {
  gpgKeyId?: string;
  verificationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      gpgKeyId: 'GpgKeyId',
      verificationStatus: 'VerificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpgKeyId: 'string',
      verificationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileLastCommitResponseBodyResult extends $tea.Model {
  authorDate?: string;
  authorEmail?: string;
  authorName?: string;
  committedDate?: string;
  committerEmail?: string;
  committerName?: string;
  createdAt?: string;
  id?: string;
  message?: string;
  parentIds?: string[];
  shortId?: string;
  signature?: GetFileLastCommitResponseBodyResultSignature;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorDate: 'AuthorDate',
      authorEmail: 'AuthorEmail',
      authorName: 'AuthorName',
      committedDate: 'CommittedDate',
      committerEmail: 'CommitterEmail',
      committerName: 'CommitterName',
      createdAt: 'CreatedAt',
      id: 'Id',
      message: 'Message',
      parentIds: 'ParentIds',
      shortId: 'ShortId',
      signature: 'Signature',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorDate: 'string',
      authorEmail: 'string',
      authorName: 'string',
      committedDate: 'string',
      committerEmail: 'string',
      committerName: 'string',
      createdAt: 'string',
      id: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      shortId: 'string',
      signature: GetFileLastCommitResponseBodyResultSignature,
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupDetailResponseBodyResult extends $tea.Model {
  avatarUrl?: string;
  description?: string;
  id?: number;
  name?: string;
  nameWithNamespace?: string;
  ownerId?: number;
  parentId?: number;
  path?: string;
  pathWithNamespace?: string;
  type?: string;
  visibilityLevel?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      nameWithNamespace: 'NameWithNamespace',
      ownerId: 'OwnerId',
      parentId: 'ParentId',
      path: 'Path',
      pathWithNamespace: 'PathWithNamespace',
      type: 'Type',
      visibilityLevel: 'VisibilityLevel',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
      nameWithNamespace: 'string',
      ownerId: 'number',
      parentId: 'number',
      path: 'string',
      pathWithNamespace: 'string',
      type: 'string',
      visibilityLevel: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestApproveStatusResponseBodyResult extends $tea.Model {
  approveStatus?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      approveStatus: 'ApproveStatus',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveStatus: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponseBodyResultApproveCheckResultSatisfiedCheckResults extends $tea.Model {
  checkName?: string;
  checkStatus?: string;
  checkType?: string;
  extraUsers?: GetMergeRequestDetailResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers[];
  satisfiedItems?: string[];
  unsatisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      extraUsers: 'ExtraUsers',
      satisfiedItems: 'SatisfiedItems',
      unsatisfiedItems: 'UnsatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkStatus: 'string',
      checkType: 'string',
      extraUsers: { 'type': 'array', 'itemType': GetMergeRequestDetailResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponseBodyResultApproveCheckResultUnsatisfiedCheckResults extends $tea.Model {
  checkName?: string;
  checkStatus?: string;
  checkType?: string;
  extraUsers?: GetMergeRequestDetailResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers[];
  satisfiedItems?: string[];
  unsatisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      extraUsers: 'ExtraUsers',
      satisfiedItems: 'SatisfiedItems',
      unsatisfiedItems: 'UnsatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkStatus: 'string',
      checkType: 'string',
      extraUsers: { 'type': 'array', 'itemType': GetMergeRequestDetailResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponseBodyResultApproveCheckResult extends $tea.Model {
  satisfiedCheckResults?: GetMergeRequestDetailResponseBodyResultApproveCheckResultSatisfiedCheckResults[];
  totalCheckResult?: string;
  unsatisfiedCheckResults?: GetMergeRequestDetailResponseBodyResultApproveCheckResultUnsatisfiedCheckResults[];
  static names(): { [key: string]: string } {
    return {
      satisfiedCheckResults: 'SatisfiedCheckResults',
      totalCheckResult: 'TotalCheckResult',
      unsatisfiedCheckResults: 'UnsatisfiedCheckResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      satisfiedCheckResults: { 'type': 'array', 'itemType': GetMergeRequestDetailResponseBodyResultApproveCheckResultSatisfiedCheckResults },
      totalCheckResult: 'string',
      unsatisfiedCheckResults: { 'type': 'array', 'itemType': GetMergeRequestDetailResponseBodyResultApproveCheckResultUnsatisfiedCheckResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponseBodyResultAssigneeList extends $tea.Model {
  avatarUrl?: string;
  email?: string;
  externUserId?: string;
  id?: string;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      email: 'Email',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      email: 'string',
      externUserId: 'string',
      id: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponseBodyResultAuthor extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponseBodyResult extends $tea.Model {
  acceptedRevision?: string;
  aheadCommitCount?: number;
  approveCheckResult?: GetMergeRequestDetailResponseBodyResultApproveCheckResult;
  assigneeList?: GetMergeRequestDetailResponseBodyResultAssigneeList[];
  author?: GetMergeRequestDetailResponseBodyResultAuthor;
  behindCommitCount?: number;
  createdAt?: string;
  description?: string;
  id?: number;
  isSupportMerge?: boolean;
  mergeError?: string;
  mergeStatus?: string;
  mergeType?: string;
  mergedRevision?: string;
  nameWithNamespace?: string;
  projectId?: number;
  sourceBranch?: string;
  state?: string;
  targetBranch?: string;
  title?: string;
  updatedAt?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      acceptedRevision: 'AcceptedRevision',
      aheadCommitCount: 'AheadCommitCount',
      approveCheckResult: 'ApproveCheckResult',
      assigneeList: 'AssigneeList',
      author: 'Author',
      behindCommitCount: 'BehindCommitCount',
      createdAt: 'CreatedAt',
      description: 'Description',
      id: 'Id',
      isSupportMerge: 'IsSupportMerge',
      mergeError: 'MergeError',
      mergeStatus: 'MergeStatus',
      mergeType: 'MergeType',
      mergedRevision: 'MergedRevision',
      nameWithNamespace: 'NameWithNamespace',
      projectId: 'ProjectId',
      sourceBranch: 'SourceBranch',
      state: 'State',
      targetBranch: 'TargetBranch',
      title: 'Title',
      updatedAt: 'UpdatedAt',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptedRevision: 'string',
      aheadCommitCount: 'number',
      approveCheckResult: GetMergeRequestDetailResponseBodyResultApproveCheckResult,
      assigneeList: { 'type': 'array', 'itemType': GetMergeRequestDetailResponseBodyResultAssigneeList },
      author: GetMergeRequestDetailResponseBodyResultAuthor,
      behindCommitCount: 'number',
      createdAt: 'string',
      description: 'string',
      id: 'number',
      isSupportMerge: 'boolean',
      mergeError: 'string',
      mergeStatus: 'string',
      mergeType: 'string',
      mergedRevision: 'string',
      nameWithNamespace: 'string',
      projectId: 'number',
      sourceBranch: 'string',
      state: 'string',
      targetBranch: 'string',
      title: 'string',
      updatedAt: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestSettingResponseBodyResult extends $tea.Model {
  isEnableSmartCodeReview?: boolean;
  mergeTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      isEnableSmartCodeReview: 'IsEnableSmartCodeReview',
      mergeTypes: 'MergeTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEnableSmartCodeReview: 'boolean',
      mergeTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationRepositorySettingResponseBodyResultOrgCloneDownloadMethodList extends $tea.Model {
  allowed?: boolean;
  permissionCode?: string;
  static names(): { [key: string]: string } {
    return {
      allowed: 'Allowed',
      permissionCode: 'PermissionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowed: 'boolean',
      permissionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationRepositorySettingResponseBodyResultOrgCloneDownloadRoleList extends $tea.Model {
  allowed?: boolean;
  roleCode?: number;
  static names(): { [key: string]: string } {
    return {
      allowed: 'Allowed',
      roleCode: 'RoleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowed: 'boolean',
      roleCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationRepositorySettingResponseBodyResult extends $tea.Model {
  forcePushForbidden?: boolean;
  groupRequired?: boolean;
  openCloneDownloadControl?: boolean;
  orgCloneDownloadMethodList?: GetOrganizationRepositorySettingResponseBodyResultOrgCloneDownloadMethodList[];
  orgCloneDownloadRoleList?: GetOrganizationRepositorySettingResponseBodyResultOrgCloneDownloadRoleList[];
  repoAdminAccessVisibilityLevel?: number[];
  repoAdminOperation?: number[];
  repoCreatorIdentity?: number[];
  repoVisibilityLevel?: number[];
  static names(): { [key: string]: string } {
    return {
      forcePushForbidden: 'ForcePushForbidden',
      groupRequired: 'GroupRequired',
      openCloneDownloadControl: 'OpenCloneDownloadControl',
      orgCloneDownloadMethodList: 'OrgCloneDownloadMethodList',
      orgCloneDownloadRoleList: 'OrgCloneDownloadRoleList',
      repoAdminAccessVisibilityLevel: 'RepoAdminAccessVisibilityLevel',
      repoAdminOperation: 'RepoAdminOperation',
      repoCreatorIdentity: 'RepoCreatorIdentity',
      repoVisibilityLevel: 'RepoVisibilityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forcePushForbidden: 'boolean',
      groupRequired: 'boolean',
      openCloneDownloadControl: 'boolean',
      orgCloneDownloadMethodList: { 'type': 'array', 'itemType': GetOrganizationRepositorySettingResponseBodyResultOrgCloneDownloadMethodList },
      orgCloneDownloadRoleList: { 'type': 'array', 'itemType': GetOrganizationRepositorySettingResponseBodyResultOrgCloneDownloadRoleList },
      repoAdminAccessVisibilityLevel: { 'type': 'array', 'itemType': 'number' },
      repoAdminOperation: { 'type': 'array', 'itemType': 'number' },
      repoCreatorIdentity: { 'type': 'array', 'itemType': 'number' },
      repoVisibilityLevel: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationSecurityCenterStatusResponseBodyResult extends $tea.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMemberResponseBodyResult extends $tea.Model {
  accessLevel?: number;
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryCommitResponseBodyResultSignature extends $tea.Model {
  gpgKeyId?: string;
  verificationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      gpgKeyId: 'GpgKeyId',
      verificationStatus: 'VerificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpgKeyId: 'string',
      verificationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryCommitResponseBodyResult extends $tea.Model {
  authorDate?: string;
  authorEmail?: string;
  authorName?: string;
  committedDate?: string;
  committerEmail?: string;
  committerName?: string;
  createdAt?: string;
  id?: string;
  message?: string;
  parentIds?: string[];
  shortId?: string;
  signature?: GetRepositoryCommitResponseBodyResultSignature;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorDate: 'AuthorDate',
      authorEmail: 'AuthorEmail',
      authorName: 'AuthorName',
      committedDate: 'CommittedDate',
      committerEmail: 'CommitterEmail',
      committerName: 'CommitterName',
      createdAt: 'CreatedAt',
      id: 'Id',
      message: 'Message',
      parentIds: 'ParentIds',
      shortId: 'ShortId',
      signature: 'Signature',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorDate: 'string',
      authorEmail: 'string',
      authorName: 'string',
      committedDate: 'string',
      committerEmail: 'string',
      committerName: 'string',
      createdAt: 'string',
      id: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      shortId: 'string',
      signature: GetRepositoryCommitResponseBodyResultSignature,
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryInfoResponseBodyResultNamespace extends $tea.Model {
  avatar?: string;
  createdAt?: string;
  description?: string;
  id?: number;
  name?: string;
  ownerId?: number;
  path?: string;
  public?: boolean;
  state?: string;
  updatedAt?: string;
  visibilityLevel?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      createdAt: 'CreatedAt',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      path: 'Path',
      public: 'Public',
      state: 'State',
      updatedAt: 'UpdatedAt',
      visibilityLevel: 'VisibilityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      createdAt: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
      ownerId: 'number',
      path: 'string',
      public: 'boolean',
      state: 'string',
      updatedAt: 'string',
      visibilityLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryInfoResponseBodyResultPermissionsGroupAccess extends $tea.Model {
  accessLevel?: number;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryInfoResponseBodyResultPermissionsProjectAccess extends $tea.Model {
  accessLevel?: number;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryInfoResponseBodyResultPermissions extends $tea.Model {
  groupAccess?: GetRepositoryInfoResponseBodyResultPermissionsGroupAccess;
  projectAccess?: GetRepositoryInfoResponseBodyResultPermissionsProjectAccess;
  static names(): { [key: string]: string } {
    return {
      groupAccess: 'GroupAccess',
      projectAccess: 'ProjectAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupAccess: GetRepositoryInfoResponseBodyResultPermissionsGroupAccess,
      projectAccess: GetRepositoryInfoResponseBodyResultPermissionsProjectAccess,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryInfoResponseBodyResult extends $tea.Model {
  accessLevel?: number;
  archive?: boolean;
  avatarUrl?: string;
  createdAt?: string;
  creatorId?: number;
  defaultBranch?: string;
  demoProjectStatus?: boolean;
  description?: string;
  httpUrlToRepo?: string;
  id?: number;
  importFromSubversion?: boolean;
  importStatus?: string;
  importUrl?: string;
  lastActivityAt?: string;
  name?: string;
  nameWithNamespace?: string;
  namespace?: GetRepositoryInfoResponseBodyResultNamespace;
  path?: string;
  pathWithNamespace?: string;
  permissions?: GetRepositoryInfoResponseBodyResultPermissions;
  public?: boolean;
  sshUrlToRepo?: string;
  tagList?: string[];
  visibilityLevel?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      archive: 'Archive',
      avatarUrl: 'AvatarUrl',
      createdAt: 'CreatedAt',
      creatorId: 'CreatorId',
      defaultBranch: 'DefaultBranch',
      demoProjectStatus: 'DemoProjectStatus',
      description: 'Description',
      httpUrlToRepo: 'HttpUrlToRepo',
      id: 'Id',
      importFromSubversion: 'ImportFromSubversion',
      importStatus: 'ImportStatus',
      importUrl: 'ImportUrl',
      lastActivityAt: 'LastActivityAt',
      name: 'Name',
      nameWithNamespace: 'NameWithNamespace',
      namespace: 'Namespace',
      path: 'Path',
      pathWithNamespace: 'PathWithNamespace',
      permissions: 'Permissions',
      public: 'Public',
      sshUrlToRepo: 'SshUrlToRepo',
      tagList: 'TagList',
      visibilityLevel: 'VisibilityLevel',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      archive: 'boolean',
      avatarUrl: 'string',
      createdAt: 'string',
      creatorId: 'number',
      defaultBranch: 'string',
      demoProjectStatus: 'boolean',
      description: 'string',
      httpUrlToRepo: 'string',
      id: 'number',
      importFromSubversion: 'boolean',
      importStatus: 'string',
      importUrl: 'string',
      lastActivityAt: 'string',
      name: 'string',
      nameWithNamespace: 'string',
      namespace: GetRepositoryInfoResponseBodyResultNamespace,
      path: 'string',
      pathWithNamespace: 'string',
      permissions: GetRepositoryInfoResponseBodyResultPermissions,
      public: 'boolean',
      sshUrlToRepo: 'string',
      tagList: { 'type': 'array', 'itemType': 'string' },
      visibilityLevel: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagResponseBodyResultCommitSignature extends $tea.Model {
  gpgKeyId?: string;
  verificationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      gpgKeyId: 'GpgKeyId',
      verificationStatus: 'VerificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpgKeyId: 'string',
      verificationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagResponseBodyResultCommit extends $tea.Model {
  authorEmail?: string;
  authorName?: string;
  authoredDate?: string;
  committedDate?: string;
  committerEmail?: string;
  committerName?: string;
  createdAt?: string;
  id?: string;
  message?: string;
  parentIds?: string[];
  shortId?: string;
  signature?: GetRepositoryTagResponseBodyResultCommitSignature;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorEmail: 'AuthorEmail',
      authorName: 'AuthorName',
      authoredDate: 'AuthoredDate',
      committedDate: 'CommittedDate',
      committerEmail: 'CommitterEmail',
      committerName: 'CommitterName',
      createdAt: 'CreatedAt',
      id: 'Id',
      message: 'Message',
      parentIds: 'ParentIds',
      shortId: 'ShortId',
      signature: 'Signature',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorEmail: 'string',
      authorName: 'string',
      authoredDate: 'string',
      committedDate: 'string',
      committerEmail: 'string',
      committerName: 'string',
      createdAt: 'string',
      id: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      shortId: 'string',
      signature: GetRepositoryTagResponseBodyResultCommitSignature,
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagResponseBodyResultSignature extends $tea.Model {
  gpgKeyId?: string;
  verificationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      gpgKeyId: 'GpgKeyId',
      verificationStatus: 'VerificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpgKeyId: 'string',
      verificationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagResponseBodyResult extends $tea.Model {
  commit?: GetRepositoryTagResponseBodyResultCommit;
  id?: string;
  message?: string;
  name?: string;
  signature?: GetRepositoryTagResponseBodyResultSignature;
  static names(): { [key: string]: string } {
    return {
      commit: 'Commit',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commit: GetRepositoryTagResponseBodyResultCommit,
      id: 'string',
      message: 'string',
      name: 'string',
      signature: GetRepositoryTagResponseBodyResultSignature,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagV2ResponseBodyResultCommitSignature extends $tea.Model {
  gpgKeyId?: string;
  verificationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      gpgKeyId: 'GpgKeyId',
      verificationStatus: 'VerificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpgKeyId: 'string',
      verificationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagV2ResponseBodyResultCommit extends $tea.Model {
  authorEmail?: string;
  authorName?: string;
  authoredDate?: string;
  committedDate?: string;
  committerEmail?: string;
  committerName?: string;
  createdAt?: string;
  id?: string;
  message?: string;
  parentIds?: string[];
  shortId?: string;
  signature?: GetRepositoryTagV2ResponseBodyResultCommitSignature;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorEmail: 'AuthorEmail',
      authorName: 'AuthorName',
      authoredDate: 'AuthoredDate',
      committedDate: 'CommittedDate',
      committerEmail: 'CommitterEmail',
      committerName: 'CommitterName',
      createdAt: 'CreatedAt',
      id: 'Id',
      message: 'Message',
      parentIds: 'ParentIds',
      shortId: 'ShortId',
      signature: 'Signature',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorEmail: 'string',
      authorName: 'string',
      authoredDate: 'string',
      committedDate: 'string',
      committerEmail: 'string',
      committerName: 'string',
      createdAt: 'string',
      id: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      shortId: 'string',
      signature: GetRepositoryTagV2ResponseBodyResultCommitSignature,
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagV2ResponseBodyResultSignature extends $tea.Model {
  gpgKeyId?: string;
  verificationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      gpgKeyId: 'GpgKeyId',
      verificationStatus: 'VerificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpgKeyId: 'string',
      verificationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagV2ResponseBodyResult extends $tea.Model {
  commit?: GetRepositoryTagV2ResponseBodyResultCommit;
  id?: string;
  message?: string;
  name?: string;
  signature?: GetRepositoryTagV2ResponseBodyResultSignature;
  static names(): { [key: string]: string } {
    return {
      commit: 'Commit',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commit: GetRepositoryTagV2ResponseBodyResultCommit,
      id: 'string',
      message: 'string',
      name: 'string',
      signature: GetRepositoryTagV2ResponseBodyResultSignature,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponseBodyResult extends $tea.Model {
  avatarUrl?: string;
  email?: string;
  externalUserId?: string;
  id?: number;
  name?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      email: 'Email',
      externalUserId: 'ExternalUserId',
      id: 'Id',
      name: 'Name',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      email: 'string',
      externalUserId: 'string',
      id: 'number',
      name: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsSlsUserAuthrizedCodeupResponseBodyResult extends $tea.Model {
  authrized?: boolean;
  static names(): { [key: string]: string } {
    return {
      authrized: 'authrized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authrized: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMemberResponseBodyResult extends $tea.Model {
  accessLevel?: number;
  avatarUrl?: string;
  email?: string;
  externUserId?: string;
  id?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      avatarUrl: 'AvatarUrl',
      email: 'Email',
      externUserId: 'ExternUserId',
      id: 'Id',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      avatarUrl: 'string',
      email: 'string',
      externUserId: 'string',
      id: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupRepositoriesResponseBodyResult extends $tea.Model {
  archive?: boolean;
  createdAt?: string;
  creatorId?: number;
  httpCloneUrl?: string;
  id?: number;
  importStatus?: string;
  lastActivityAt?: string;
  name?: string;
  nameWithNamespace?: string;
  namespaceId?: number;
  path?: string;
  pathWithNamespace?: string;
  sshCloneUrl?: string;
  updatedAt?: string;
  visibilityLevel?: number;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      archive: 'Archive',
      createdAt: 'CreatedAt',
      creatorId: 'CreatorId',
      httpCloneUrl: 'HttpCloneUrl',
      id: 'Id',
      importStatus: 'ImportStatus',
      lastActivityAt: 'LastActivityAt',
      name: 'Name',
      nameWithNamespace: 'NameWithNamespace',
      namespaceId: 'NamespaceId',
      path: 'Path',
      pathWithNamespace: 'PathWithNamespace',
      sshCloneUrl: 'SshCloneUrl',
      updatedAt: 'UpdatedAt',
      visibilityLevel: 'VisibilityLevel',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archive: 'boolean',
      createdAt: 'string',
      creatorId: 'number',
      httpCloneUrl: 'string',
      id: 'number',
      importStatus: 'string',
      lastActivityAt: 'string',
      name: 'string',
      nameWithNamespace: 'string',
      namespaceId: 'number',
      path: 'string',
      pathWithNamespace: 'string',
      sshCloneUrl: 'string',
      updatedAt: 'string',
      visibilityLevel: 'number',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyResult extends $tea.Model {
  accessLevel?: number;
  createdAt?: string;
  description?: string;
  id?: number;
  name?: string;
  nameWithNamespace?: string;
  ownerId?: number;
  parentId?: number;
  path?: string;
  pathWithNamespace?: string;
  type?: string;
  updatedAt?: string;
  visibilityLevel?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      createdAt: 'CreatedAt',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      nameWithNamespace: 'NameWithNamespace',
      ownerId: 'OwnerId',
      parentId: 'ParentId',
      path: 'Path',
      pathWithNamespace: 'PathWithNamespace',
      type: 'Type',
      updatedAt: 'UpdatedAt',
      visibilityLevel: 'VisibilityLevel',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      createdAt: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
      nameWithNamespace: 'string',
      ownerId: 'number',
      parentId: 'number',
      path: 'string',
      pathWithNamespace: 'string',
      type: 'string',
      updatedAt: 'string',
      visibilityLevel: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestCommentsResponseBodyResultAuthor extends $tea.Model {
  avatarUrl?: string;
  email?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      email: 'Email',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      email: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestCommentsResponseBodyResult extends $tea.Model {
  author?: ListMergeRequestCommentsResponseBodyResultAuthor;
  closed?: number;
  createdAt?: string;
  id?: number;
  isDraft?: boolean;
  line?: number;
  note?: string;
  outDated?: boolean;
  parentNoteId?: number;
  path?: string;
  projectId?: number;
  rangeContext?: string;
  side?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      closed: 'Closed',
      createdAt: 'CreatedAt',
      id: 'Id',
      isDraft: 'IsDraft',
      line: 'Line',
      note: 'Note',
      outDated: 'OutDated',
      parentNoteId: 'ParentNoteId',
      path: 'Path',
      projectId: 'ProjectId',
      rangeContext: 'RangeContext',
      side: 'Side',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: ListMergeRequestCommentsResponseBodyResultAuthor,
      closed: 'number',
      createdAt: 'string',
      id: 'number',
      isDraft: 'boolean',
      line: 'number',
      note: 'string',
      outDated: 'boolean',
      parentNoteId: 'number',
      path: 'string',
      projectId: 'number',
      rangeContext: 'string',
      side: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResultApproveCheckResultSatisfiedCheckResults extends $tea.Model {
  checkName?: string;
  checkStatus?: string;
  checkType?: string;
  extraUsers?: ListMergeRequestsResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers[];
  satisfiedItems?: string[];
  unsatisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      extraUsers: 'ExtraUsers',
      satisfiedItems: 'SatisfiedItems',
      unsatisfiedItems: 'UnsatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkStatus: 'string',
      checkType: 'string',
      extraUsers: { 'type': 'array', 'itemType': ListMergeRequestsResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResultApproveCheckResultUnsatisfiedCheckResults extends $tea.Model {
  checkName?: string;
  checkStatus?: string;
  checkType?: string;
  extraUsers?: ListMergeRequestsResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers[];
  satisfiedItems?: string[];
  unsatisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      extraUsers: 'ExtraUsers',
      satisfiedItems: 'SatisfiedItems',
      unsatisfiedItems: 'UnsatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkStatus: 'string',
      checkType: 'string',
      extraUsers: { 'type': 'array', 'itemType': ListMergeRequestsResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResultApproveCheckResult extends $tea.Model {
  satisfiedCheckResults?: ListMergeRequestsResponseBodyResultApproveCheckResultSatisfiedCheckResults[];
  totalCheckResult?: string;
  unsatisfiedCheckResults?: ListMergeRequestsResponseBodyResultApproveCheckResultUnsatisfiedCheckResults[];
  static names(): { [key: string]: string } {
    return {
      satisfiedCheckResults: 'SatisfiedCheckResults',
      totalCheckResult: 'TotalCheckResult',
      unsatisfiedCheckResults: 'UnsatisfiedCheckResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      satisfiedCheckResults: { 'type': 'array', 'itemType': ListMergeRequestsResponseBodyResultApproveCheckResultSatisfiedCheckResults },
      totalCheckResult: 'string',
      unsatisfiedCheckResults: { 'type': 'array', 'itemType': ListMergeRequestsResponseBodyResultApproveCheckResultUnsatisfiedCheckResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResultAssigneeList extends $tea.Model {
  avatarUrl?: string;
  email?: string;
  externUserId?: string;
  id?: string;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      email: 'Email',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      email: 'string',
      externUserId: 'string',
      id: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResultAuthor extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResult extends $tea.Model {
  acceptedRevision?: string;
  aheadCommitCount?: number;
  approveCheckResult?: ListMergeRequestsResponseBodyResultApproveCheckResult;
  assigneeList?: ListMergeRequestsResponseBodyResultAssigneeList[];
  author?: ListMergeRequestsResponseBodyResultAuthor;
  behindCommitCount?: number;
  createdAt?: string;
  description?: string;
  id?: number;
  isSupportMerge?: boolean;
  mergeError?: string;
  mergeStatus?: string;
  mergeType?: string;
  mergedRevision?: string;
  nameWithNamespace?: string;
  projectId?: number;
  sourceBranch?: string;
  state?: string;
  targetBranch?: string;
  title?: string;
  updatedAt?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      acceptedRevision: 'AcceptedRevision',
      aheadCommitCount: 'AheadCommitCount',
      approveCheckResult: 'ApproveCheckResult',
      assigneeList: 'AssigneeList',
      author: 'Author',
      behindCommitCount: 'BehindCommitCount',
      createdAt: 'CreatedAt',
      description: 'Description',
      id: 'Id',
      isSupportMerge: 'IsSupportMerge',
      mergeError: 'MergeError',
      mergeStatus: 'MergeStatus',
      mergeType: 'MergeType',
      mergedRevision: 'MergedRevision',
      nameWithNamespace: 'NameWithNamespace',
      projectId: 'ProjectId',
      sourceBranch: 'SourceBranch',
      state: 'State',
      targetBranch: 'TargetBranch',
      title: 'Title',
      updatedAt: 'UpdatedAt',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptedRevision: 'string',
      aheadCommitCount: 'number',
      approveCheckResult: ListMergeRequestsResponseBodyResultApproveCheckResult,
      assigneeList: { 'type': 'array', 'itemType': ListMergeRequestsResponseBodyResultAssigneeList },
      author: ListMergeRequestsResponseBodyResultAuthor,
      behindCommitCount: 'number',
      createdAt: 'string',
      description: 'string',
      id: 'number',
      isSupportMerge: 'boolean',
      mergeError: 'string',
      mergeStatus: 'string',
      mergeType: 'string',
      mergedRevision: 'string',
      nameWithNamespace: 'string',
      projectId: 'number',
      sourceBranch: 'string',
      state: 'string',
      targetBranch: 'string',
      title: 'string',
      updatedAt: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationSecurityScoresResponseBodyResultOrganizationSecurityScore extends $tea.Model {
  authorityControlScore?: number;
  codeContentScore?: number;
  level?: string;
  memberBehaviorScore?: number;
  static names(): { [key: string]: string } {
    return {
      authorityControlScore: 'AuthorityControlScore',
      codeContentScore: 'CodeContentScore',
      level: 'Level',
      memberBehaviorScore: 'MemberBehaviorScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityControlScore: 'number',
      codeContentScore: 'number',
      level: 'string',
      memberBehaviorScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationSecurityScoresResponseBodyResult extends $tea.Model {
  enable?: boolean;
  id?: number;
  organizationId?: string;
  organizationSecurityScore?: ListOrganizationSecurityScoresResponseBodyResultOrganizationSecurityScore;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      id: 'Id',
      organizationId: 'OrganizationId',
      organizationSecurityScore: 'OrganizationSecurityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      id: 'number',
      organizationId: 'string',
      organizationSecurityScore: ListOrganizationSecurityScoresResponseBodyResultOrganizationSecurityScore,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationsResponseBodyResult extends $tea.Model {
  accessLevel?: number;
  organizationId?: string;
  organizationName?: string;
  organizationRole?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      organizationId: 'OrganizationId',
      organizationName: 'OrganizationName',
      organizationRole: 'OrganizationRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      organizationId: 'string',
      organizationName: 'string',
      organizationRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoriesResponseBodyResult extends $tea.Model {
  accessLevel?: number;
  archive?: boolean;
  avatarUrl?: string;
  createdAt?: string;
  demoProjectStatus?: boolean;
  description?: string;
  id?: number;
  importStatus?: string;
  lastActivityAt?: string;
  name?: string;
  nameWithNamespace?: string;
  namespaceId?: number;
  path?: string;
  pathWithNamespace?: string;
  star?: boolean;
  starCount?: number;
  updatedAt?: string;
  visibilityLevel?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      archive: 'Archive',
      avatarUrl: 'AvatarUrl',
      createdAt: 'CreatedAt',
      demoProjectStatus: 'DemoProjectStatus',
      description: 'Description',
      id: 'Id',
      importStatus: 'ImportStatus',
      lastActivityAt: 'LastActivityAt',
      name: 'Name',
      nameWithNamespace: 'NameWithNamespace',
      namespaceId: 'NamespaceId',
      path: 'Path',
      pathWithNamespace: 'PathWithNamespace',
      star: 'Star',
      starCount: 'StarCount',
      updatedAt: 'UpdatedAt',
      visibilityLevel: 'VisibilityLevel',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      archive: 'boolean',
      avatarUrl: 'string',
      createdAt: 'string',
      demoProjectStatus: 'boolean',
      description: 'string',
      id: 'number',
      importStatus: 'string',
      lastActivityAt: 'string',
      name: 'string',
      nameWithNamespace: 'string',
      namespaceId: 'number',
      path: 'string',
      pathWithNamespace: 'string',
      star: 'boolean',
      starCount: 'number',
      updatedAt: 'string',
      visibilityLevel: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryBranchesResponseBodyResultCommitInfo extends $tea.Model {
  authorDate?: string;
  authorEmail?: string;
  authorName?: string;
  committedDate?: string;
  committerEmail?: string;
  committerName?: string;
  createdAt?: string;
  id?: string;
  message?: string;
  parentIds?: string[];
  shortId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorDate: 'AuthorDate',
      authorEmail: 'AuthorEmail',
      authorName: 'AuthorName',
      committedDate: 'CommittedDate',
      committerEmail: 'CommitterEmail',
      committerName: 'CommitterName',
      createdAt: 'CreatedAt',
      id: 'Id',
      message: 'Message',
      parentIds: 'ParentIds',
      shortId: 'ShortId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorDate: 'string',
      authorEmail: 'string',
      authorName: 'string',
      committedDate: 'string',
      committerEmail: 'string',
      committerName: 'string',
      createdAt: 'string',
      id: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      shortId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryBranchesResponseBodyResult extends $tea.Model {
  branchName?: string;
  commitInfo?: ListRepositoryBranchesResponseBodyResultCommitInfo;
  protectedBranch?: boolean;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      commitInfo: 'CommitInfo',
      protectedBranch: 'ProtectedBranch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      commitInfo: ListRepositoryBranchesResponseBodyResultCommitInfo,
      protectedBranch: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCodeRequestFilePath extends $tea.Model {
  matchType?: string;
  name?: string;
  operatorType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      matchType: 'MatchType',
      name: 'Name',
      operatorType: 'OperatorType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      name: 'string',
      operatorType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCodeRequestRepositoryPath extends $tea.Model {
  matchType?: string;
  name?: string;
  operatorType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      matchType: 'MatchType',
      name: 'Name',
      operatorType: 'OperatorType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      name: 'string',
      operatorType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCodeResponseBodyResultSource extends $tea.Model {
  branch?: string;
  checkinDate?: string;
  fileName?: string;
  filePath?: string;
  language?: string;
  organizationId?: string;
  repoPath?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      checkinDate: 'CheckinDate',
      fileName: 'FileName',
      filePath: 'FilePath',
      language: 'Language',
      organizationId: 'OrganizationId',
      repoPath: 'RepoPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      checkinDate: 'string',
      fileName: 'string',
      filePath: 'string',
      language: 'string',
      organizationId: 'string',
      repoPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCodeResponseBodyResult extends $tea.Model {
  docId?: string;
  highlightTextMap?: { [key: string]: any };
  source?: ListRepositoryCodeResponseBodyResultSource;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      highlightTextMap: 'HighlightTextMap',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      highlightTextMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      source: ListRepositoryCodeResponseBodyResultSource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCommitDiffResponseBodyResult extends $tea.Model {
  AMode?: string;
  BMode?: string;
  deletedFile?: boolean;
  diff?: string;
  isBinary?: boolean;
  isNewLfs?: boolean;
  isOldLfs?: boolean;
  newFile?: boolean;
  newId?: string;
  newPath?: string;
  oldId?: string;
  oldPath?: string;
  renamedFile?: boolean;
  static names(): { [key: string]: string } {
    return {
      AMode: 'AMode',
      BMode: 'BMode',
      deletedFile: 'DeletedFile',
      diff: 'Diff',
      isBinary: 'IsBinary',
      isNewLfs: 'IsNewLfs',
      isOldLfs: 'IsOldLfs',
      newFile: 'NewFile',
      newId: 'NewId',
      newPath: 'NewPath',
      oldId: 'OldId',
      oldPath: 'OldPath',
      renamedFile: 'RenamedFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AMode: 'string',
      BMode: 'string',
      deletedFile: 'boolean',
      diff: 'string',
      isBinary: 'boolean',
      isNewLfs: 'boolean',
      isOldLfs: 'boolean',
      newFile: 'boolean',
      newId: 'string',
      newPath: 'string',
      oldId: 'string',
      oldPath: 'string',
      renamedFile: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCommitsResponseBodyResultSignature extends $tea.Model {
  gpgKeyId?: string;
  verificationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      gpgKeyId: 'GpgKeyId',
      verificationStatus: 'VerificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpgKeyId: 'string',
      verificationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCommitsResponseBodyResult extends $tea.Model {
  authorDate?: string;
  authorEmail?: string;
  authorName?: string;
  committedDate?: string;
  committerEmail?: string;
  committerName?: string;
  createdAt?: string;
  id?: string;
  message?: string;
  parentIds?: string[];
  shortId?: string;
  signature?: ListRepositoryCommitsResponseBodyResultSignature;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorDate: 'AuthorDate',
      authorEmail: 'AuthorEmail',
      authorName: 'AuthorName',
      committedDate: 'CommittedDate',
      committerEmail: 'CommitterEmail',
      committerName: 'CommitterName',
      createdAt: 'CreatedAt',
      id: 'Id',
      message: 'Message',
      parentIds: 'ParentIds',
      shortId: 'ShortId',
      signature: 'Signature',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorDate: 'string',
      authorEmail: 'string',
      authorName: 'string',
      committedDate: 'string',
      committerEmail: 'string',
      committerName: 'string',
      createdAt: 'string',
      id: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      shortId: 'string',
      signature: ListRepositoryCommitsResponseBodyResultSignature,
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryMemberResponseBodyResult extends $tea.Model {
  accessLevel?: number;
  avatarUrl?: string;
  email?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  state?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      avatarUrl: 'AvatarUrl',
      email: 'Email',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
      state: 'State',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      avatarUrl: 'string',
      email: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
      state: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryMemberWithInheritedResponseBodyResultInherited extends $tea.Model {
  id?: number;
  name?: string;
  nameWithNamespace?: string;
  path?: string;
  pathWithNamespace?: string;
  type?: string;
  visibilityLevel?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      nameWithNamespace: 'NameWithNamespace',
      path: 'Path',
      pathWithNamespace: 'PathWithNamespace',
      type: 'Type',
      visibilityLevel: 'VisibilityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      nameWithNamespace: 'string',
      path: 'string',
      pathWithNamespace: 'string',
      type: 'string',
      visibilityLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryMemberWithInheritedResponseBodyResult extends $tea.Model {
  accessLevel?: number;
  avatarUrl?: string;
  email?: string;
  externUserId?: string;
  id?: number;
  inherited?: ListRepositoryMemberWithInheritedResponseBodyResultInherited;
  name?: string;
  state?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      avatarUrl: 'AvatarUrl',
      email: 'Email',
      externUserId: 'ExternUserId',
      id: 'Id',
      inherited: 'Inherited',
      name: 'Name',
      state: 'State',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      avatarUrl: 'string',
      email: 'string',
      externUserId: 'string',
      id: 'number',
      inherited: ListRepositoryMemberWithInheritedResponseBodyResultInherited,
      name: 'string',
      state: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryProtectedBranchResponseBodyResultMergeRequestSettingDefaultAssignees extends $tea.Model {
  avatarUrl?: string;
  email?: string;
  externUid?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      email: 'Email',
      externUid: 'ExternUid',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      email: 'string',
      externUid: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryProtectedBranchResponseBodyResultMergeRequestSetting extends $tea.Model {
  allowMergeRequestRoles?: number[];
  allowSelfApproval?: boolean;
  defaultAssignees?: ListRepositoryProtectedBranchResponseBodyResultMergeRequestSettingDefaultAssignees[];
  isRequireDiscussionProcessed?: boolean;
  mergeRequestMode?: string;
  minimumApproval?: number;
  required?: boolean;
  whiteList?: string;
  static names(): { [key: string]: string } {
    return {
      allowMergeRequestRoles: 'AllowMergeRequestRoles',
      allowSelfApproval: 'AllowSelfApproval',
      defaultAssignees: 'DefaultAssignees',
      isRequireDiscussionProcessed: 'IsRequireDiscussionProcessed',
      mergeRequestMode: 'MergeRequestMode',
      minimumApproval: 'MinimumApproval',
      required: 'Required',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowMergeRequestRoles: { 'type': 'array', 'itemType': 'number' },
      allowSelfApproval: 'boolean',
      defaultAssignees: { 'type': 'array', 'itemType': ListRepositoryProtectedBranchResponseBodyResultMergeRequestSettingDefaultAssignees },
      isRequireDiscussionProcessed: 'boolean',
      mergeRequestMode: 'string',
      minimumApproval: 'number',
      required: 'boolean',
      whiteList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryProtectedBranchResponseBodyResultTestSettingCheckConfigCheckItems extends $tea.Model {
  name?: string;
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      required: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryProtectedBranchResponseBodyResultTestSettingCheckConfig extends $tea.Model {
  checkItems?: ListRepositoryProtectedBranchResponseBodyResultTestSettingCheckConfigCheckItems[];
  static names(): { [key: string]: string } {
    return {
      checkItems: 'CheckItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItems: { 'type': 'array', 'itemType': ListRepositoryProtectedBranchResponseBodyResultTestSettingCheckConfigCheckItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryProtectedBranchResponseBodyResultTestSettingCodingGuidelinesDetection extends $tea.Model {
  enabled?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryProtectedBranchResponseBodyResultTestSettingSensitiveInfoDetection extends $tea.Model {
  enabled?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryProtectedBranchResponseBodyResultTestSetting extends $tea.Model {
  checkConfig?: ListRepositoryProtectedBranchResponseBodyResultTestSettingCheckConfig;
  codingGuidelinesDetection?: ListRepositoryProtectedBranchResponseBodyResultTestSettingCodingGuidelinesDetection;
  required?: boolean;
  sensitiveInfoDetection?: ListRepositoryProtectedBranchResponseBodyResultTestSettingSensitiveInfoDetection;
  static names(): { [key: string]: string } {
    return {
      checkConfig: 'CheckConfig',
      codingGuidelinesDetection: 'CodingGuidelinesDetection',
      required: 'Required',
      sensitiveInfoDetection: 'SensitiveInfoDetection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkConfig: ListRepositoryProtectedBranchResponseBodyResultTestSettingCheckConfig,
      codingGuidelinesDetection: ListRepositoryProtectedBranchResponseBodyResultTestSettingCodingGuidelinesDetection,
      required: 'boolean',
      sensitiveInfoDetection: ListRepositoryProtectedBranchResponseBodyResultTestSettingSensitiveInfoDetection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryProtectedBranchResponseBodyResult extends $tea.Model {
  allowMergeRoles?: number[];
  allowPushRoles?: number[];
  branch?: string;
  id?: number;
  mergeRequestSetting?: ListRepositoryProtectedBranchResponseBodyResultMergeRequestSetting;
  testSetting?: ListRepositoryProtectedBranchResponseBodyResultTestSetting;
  static names(): { [key: string]: string } {
    return {
      allowMergeRoles: 'AllowMergeRoles',
      allowPushRoles: 'AllowPushRoles',
      branch: 'Branch',
      id: 'Id',
      mergeRequestSetting: 'MergeRequestSetting',
      testSetting: 'TestSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowMergeRoles: { 'type': 'array', 'itemType': 'number' },
      allowPushRoles: { 'type': 'array', 'itemType': 'number' },
      branch: 'string',
      id: 'number',
      mergeRequestSetting: ListRepositoryProtectedBranchResponseBodyResultMergeRequestSetting,
      testSetting: ListRepositoryProtectedBranchResponseBodyResultTestSetting,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTagsResponseBodyResultCommitSignature extends $tea.Model {
  gpgKeyId?: string;
  verificationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      gpgKeyId: 'GpgKeyId',
      verificationStatus: 'VerificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpgKeyId: 'string',
      verificationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTagsResponseBodyResultCommit extends $tea.Model {
  authorEmail?: string;
  authorName?: string;
  authoredDate?: string;
  committedDate?: string;
  committerEmail?: string;
  committerName?: string;
  createdAt?: string;
  id?: string;
  message?: string;
  parentIds?: string[];
  shortId?: string;
  signature?: ListRepositoryTagsResponseBodyResultCommitSignature;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorEmail: 'AuthorEmail',
      authorName: 'AuthorName',
      authoredDate: 'AuthoredDate',
      committedDate: 'CommittedDate',
      committerEmail: 'CommitterEmail',
      committerName: 'CommitterName',
      createdAt: 'CreatedAt',
      id: 'Id',
      message: 'Message',
      parentIds: 'ParentIds',
      shortId: 'ShortId',
      signature: 'Signature',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorEmail: 'string',
      authorName: 'string',
      authoredDate: 'string',
      committedDate: 'string',
      committerEmail: 'string',
      committerName: 'string',
      createdAt: 'string',
      id: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      shortId: 'string',
      signature: ListRepositoryTagsResponseBodyResultCommitSignature,
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTagsResponseBodyResultSignature extends $tea.Model {
  gpgKeyId?: string;
  verificationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      gpgKeyId: 'GpgKeyId',
      verificationStatus: 'VerificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpgKeyId: 'string',
      verificationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTagsResponseBodyResult extends $tea.Model {
  commit?: ListRepositoryTagsResponseBodyResultCommit;
  id?: string;
  message?: string;
  name?: string;
  signature?: ListRepositoryTagsResponseBodyResultSignature;
  static names(): { [key: string]: string } {
    return {
      commit: 'Commit',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commit: ListRepositoryTagsResponseBodyResultCommit,
      id: 'string',
      message: 'string',
      name: 'string',
      signature: ListRepositoryTagsResponseBodyResultSignature,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTreeResponseBodyResult extends $tea.Model {
  id?: string;
  mode?: string;
  name?: string;
  path?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      mode: 'Mode',
      name: 'Name',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      mode: 'string',
      name: 'string',
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryWebhookResponseBodyResult extends $tea.Model {
  createdAt?: string;
  description?: string;
  enableSslVerification?: boolean;
  id?: number;
  lastTestResult?: string;
  mergeRequestsEvents?: boolean;
  noteEvents?: boolean;
  projectId?: number;
  pushEvents?: boolean;
  secretToken?: string;
  tagPushEvents?: boolean;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      description: 'Description',
      enableSslVerification: 'EnableSslVerification',
      id: 'Id',
      lastTestResult: 'LastTestResult',
      mergeRequestsEvents: 'MergeRequestsEvents',
      noteEvents: 'NoteEvents',
      projectId: 'ProjectId',
      pushEvents: 'PushEvents',
      secretToken: 'SecretToken',
      tagPushEvents: 'TagPushEvents',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      enableSslVerification: 'boolean',
      id: 'number',
      lastTestResult: 'string',
      mergeRequestsEvents: 'boolean',
      noteEvents: 'boolean',
      projectId: 'number',
      pushEvents: 'boolean',
      secretToken: 'string',
      tagPushEvents: 'boolean',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults extends $tea.Model {
  checkName?: string;
  checkStatus?: string;
  checkType?: string;
  extraUsers?: MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers[];
  satisfiedItems?: string[];
  unsatisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      extraUsers: 'ExtraUsers',
      satisfiedItems: 'SatisfiedItems',
      unsatisfiedItems: 'UnsatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkStatus: 'string',
      checkType: 'string',
      extraUsers: { 'type': 'array', 'itemType': MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults extends $tea.Model {
  checkName?: string;
  checkStatus?: string;
  checkType?: string;
  extraUsers?: MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers[];
  satisfiedItems?: string[];
  unsatisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      extraUsers: 'ExtraUsers',
      satisfiedItems: 'SatisfiedItems',
      unsatisfiedItems: 'UnsatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkStatus: 'string',
      checkType: 'string',
      extraUsers: { 'type': 'array', 'itemType': MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultApproveCheckResult extends $tea.Model {
  satisfiedCheckResults?: MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults[];
  totalCheckResult?: string;
  unsatisfiedCheckResults?: MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults[];
  static names(): { [key: string]: string } {
    return {
      satisfiedCheckResults: 'SatisfiedCheckResults',
      totalCheckResult: 'TotalCheckResult',
      unsatisfiedCheckResults: 'UnsatisfiedCheckResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      satisfiedCheckResults: { 'type': 'array', 'itemType': MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults },
      totalCheckResult: 'string',
      unsatisfiedCheckResults: { 'type': 'array', 'itemType': MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultAssigneeList extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultAuthor extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResult extends $tea.Model {
  acceptedRevision?: string;
  aheadCommitCount?: number;
  approveCheckResult?: MergeMergeRequestResponseBodyResultApproveCheckResult;
  assigneeList?: MergeMergeRequestResponseBodyResultAssigneeList[];
  author?: MergeMergeRequestResponseBodyResultAuthor;
  behindCommitCount?: number;
  createdAt?: string;
  description?: string;
  id?: number;
  mergeError?: string;
  mergeStatus?: string;
  mergeType?: string;
  mergedRevision?: string;
  nameWithNamespace?: string;
  projectId?: number;
  sourceBranch?: string;
  state?: string;
  targetBranch?: string;
  title?: string;
  updatedAt?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      acceptedRevision: 'AcceptedRevision',
      aheadCommitCount: 'AheadCommitCount',
      approveCheckResult: 'ApproveCheckResult',
      assigneeList: 'AssigneeList',
      author: 'Author',
      behindCommitCount: 'BehindCommitCount',
      createdAt: 'CreatedAt',
      description: 'Description',
      id: 'Id',
      mergeError: 'MergeError',
      mergeStatus: 'MergeStatus',
      mergeType: 'MergeType',
      mergedRevision: 'MergedRevision',
      nameWithNamespace: 'NameWithNamespace',
      projectId: 'ProjectId',
      sourceBranch: 'SourceBranch',
      state: 'State',
      targetBranch: 'TargetBranch',
      title: 'Title',
      updatedAt: 'UpdatedAt',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptedRevision: 'string',
      aheadCommitCount: 'number',
      approveCheckResult: MergeMergeRequestResponseBodyResultApproveCheckResult,
      assigneeList: { 'type': 'array', 'itemType': MergeMergeRequestResponseBodyResultAssigneeList },
      author: MergeMergeRequestResponseBodyResultAuthor,
      behindCommitCount: 'number',
      createdAt: 'string',
      description: 'string',
      id: 'number',
      mergeError: 'string',
      mergeStatus: 'string',
      mergeType: 'string',
      mergedRevision: 'string',
      nameWithNamespace: 'string',
      projectId: 'number',
      sourceBranch: 'string',
      state: 'string',
      targetBranch: 'string',
      title: 'string',
      updatedAt: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlsRelationResponseBodyResult extends $tea.Model {
  aliyunUserId?: string;
  codeupProjectId?: number;
  defaultViewer?: boolean;
  organizationId?: string;
  slsLogStore?: string;
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUserId: 'aliyunUserId',
      codeupProjectId: 'codeupProjectId',
      defaultViewer: 'defaultViewer',
      organizationId: 'organizationId',
      slsLogStore: 'slsLogStore',
      slsProject: 'slsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUserId: 'string',
      codeupProjectId: 'number',
      defaultViewer: 'boolean',
      organizationId: 'string',
      slsLogStore: 'string',
      slsProject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelatedSlsLogStoreResponseBodyResult extends $tea.Model {
  relatedResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      relatedResult: 'RelatedResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerRepositoryMirrorSyncResponseBodyResult extends $tea.Model {
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnRelatedSlsLogStoreResponseBodyResult extends $tea.Model {
  unRelatedResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      unRelatedResult: 'UnRelatedResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unRelatedResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileResponseBodyResult extends $tea.Model {
  branchName?: string;
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      filePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupMemberResponseBodyResult extends $tea.Model {
  accessLevel?: number;
  avatarUrl?: string;
  email?: string;
  externUserId?: string;
  id?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      avatarUrl: 'AvatarUrl',
      email: 'Email',
      externUserId: 'ExternUserId',
      id: 'Id',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      avatarUrl: 'string',
      email: 'string',
      externUserId: 'string',
      id: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults extends $tea.Model {
  checkName?: string;
  checkStatus?: string;
  checkType?: string;
  extraUsers?: UpdateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers[];
  satisfiedItems?: string[];
  unsatisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      extraUsers: 'ExtraUsers',
      satisfiedItems: 'SatisfiedItems',
      unsatisfiedItems: 'UnsatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkStatus: 'string',
      checkType: 'string',
      extraUsers: { 'type': 'array', 'itemType': UpdateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults extends $tea.Model {
  checkName?: string;
  checkStatus?: string;
  checkType?: string;
  extraUsers?: UpdateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers[];
  satisfiedItems?: string[];
  unsatisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      extraUsers: 'ExtraUsers',
      satisfiedItems: 'SatisfiedItems',
      unsatisfiedItems: 'UnsatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkStatus: 'string',
      checkType: 'string',
      extraUsers: { 'type': 'array', 'itemType': UpdateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBodyResultApproveCheckResult extends $tea.Model {
  satisfiedCheckResults?: UpdateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults[];
  totalCheckResult?: string;
  unsatisfiedCheckResults?: UpdateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults[];
  static names(): { [key: string]: string } {
    return {
      satisfiedCheckResults: 'SatisfiedCheckResults',
      totalCheckResult: 'TotalCheckResult',
      unsatisfiedCheckResults: 'UnsatisfiedCheckResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      satisfiedCheckResults: { 'type': 'array', 'itemType': UpdateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults },
      totalCheckResult: 'string',
      unsatisfiedCheckResults: { 'type': 'array', 'itemType': UpdateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBodyResultAssigneeList extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBodyResultAuthor extends $tea.Model {
  avatarUrl?: string;
  externUserId?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      externUserId: 'ExternUserId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      externUserId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBodyResult extends $tea.Model {
  acceptedRevision?: string;
  aheadCommitCount?: number;
  approveCheckResult?: UpdateMergeRequestResponseBodyResultApproveCheckResult;
  assigneeList?: UpdateMergeRequestResponseBodyResultAssigneeList[];
  author?: UpdateMergeRequestResponseBodyResultAuthor;
  behindCommitCount?: number;
  createdAt?: string;
  description?: string;
  id?: number;
  mergeError?: string;
  mergeStatus?: string;
  mergeType?: string;
  mergedRevision?: string;
  nameWithNamespace?: string;
  projectId?: number;
  sourceBranch?: string;
  state?: string;
  targetBranch?: string;
  title?: string;
  updatedAt?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      acceptedRevision: 'AcceptedRevision',
      aheadCommitCount: 'AheadCommitCount',
      approveCheckResult: 'ApproveCheckResult',
      assigneeList: 'AssigneeList',
      author: 'Author',
      behindCommitCount: 'BehindCommitCount',
      createdAt: 'CreatedAt',
      description: 'Description',
      id: 'Id',
      mergeError: 'MergeError',
      mergeStatus: 'MergeStatus',
      mergeType: 'MergeType',
      mergedRevision: 'MergedRevision',
      nameWithNamespace: 'NameWithNamespace',
      projectId: 'ProjectId',
      sourceBranch: 'SourceBranch',
      state: 'State',
      targetBranch: 'TargetBranch',
      title: 'Title',
      updatedAt: 'UpdatedAt',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptedRevision: 'string',
      aheadCommitCount: 'number',
      approveCheckResult: UpdateMergeRequestResponseBodyResultApproveCheckResult,
      assigneeList: { 'type': 'array', 'itemType': UpdateMergeRequestResponseBodyResultAssigneeList },
      author: UpdateMergeRequestResponseBodyResultAuthor,
      behindCommitCount: 'number',
      createdAt: 'string',
      description: 'string',
      id: 'number',
      mergeError: 'string',
      mergeStatus: 'string',
      mergeType: 'string',
      mergedRevision: 'string',
      nameWithNamespace: 'string',
      projectId: 'number',
      sourceBranch: 'string',
      state: 'string',
      targetBranch: 'string',
      title: 'string',
      updatedAt: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestCommentResponseBodyResult extends $tea.Model {
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestSettingResponseBodyResult extends $tea.Model {
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryResponseBodyResultNamespace extends $tea.Model {
  avatar?: string;
  createdAt?: string;
  description?: string;
  id?: number;
  name?: string;
  ownerId?: number;
  path?: string;
  public?: boolean;
  updatedAt?: string;
  visibilityLevel?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      createdAt: 'CreatedAt',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      path: 'Path',
      public: 'Public',
      updatedAt: 'UpdatedAt',
      visibilityLevel: 'VisibilityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      createdAt: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
      ownerId: 'number',
      path: 'string',
      public: 'boolean',
      updatedAt: 'string',
      visibilityLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryResponseBodyResult extends $tea.Model {
  archive?: boolean;
  avatarUrl?: string;
  createdAt?: string;
  creatorId?: number;
  defaultBranch?: string;
  description?: string;
  httpUrlToRepo?: string;
  id?: number;
  lastActivityAt?: string;
  name?: string;
  nameWithNamespace?: string;
  namespace?: UpdateRepositoryResponseBodyResultNamespace;
  path?: string;
  pathWithNamespace?: string;
  sshUrlToRepo?: string;
  visibilityLevel?: string;
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      archive: 'Archive',
      avatarUrl: 'AvatarUrl',
      createdAt: 'CreatedAt',
      creatorId: 'CreatorId',
      defaultBranch: 'DefaultBranch',
      description: 'Description',
      httpUrlToRepo: 'HttpUrlToRepo',
      id: 'Id',
      lastActivityAt: 'LastActivityAt',
      name: 'Name',
      nameWithNamespace: 'NameWithNamespace',
      namespace: 'Namespace',
      path: 'Path',
      pathWithNamespace: 'PathWithNamespace',
      sshUrlToRepo: 'SshUrlToRepo',
      visibilityLevel: 'VisibilityLevel',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archive: 'boolean',
      avatarUrl: 'string',
      createdAt: 'string',
      creatorId: 'number',
      defaultBranch: 'string',
      description: 'string',
      httpUrlToRepo: 'string',
      id: 'number',
      lastActivityAt: 'string',
      name: 'string',
      nameWithNamespace: 'string',
      namespace: UpdateRepositoryResponseBodyResultNamespace,
      path: 'string',
      pathWithNamespace: 'string',
      sshUrlToRepo: 'string',
      visibilityLevel: 'string',
      webUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryMemberResponseBodyResult extends $tea.Model {
  accessLevel?: number;
  avatarUrl?: string;
  email?: string;
  externUserId?: string;
  id?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      avatarUrl: 'AvatarUrl',
      email: 'Email',
      externUserId: 'ExternUserId',
      id: 'Id',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      avatarUrl: 'string',
      email: 'string',
      externUserId: 'string',
      id: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("codeup", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async acceptMergeRequest(ProjectId: string, MergeRequestId: string, request: AcceptMergeRequestRequest): Promise<AcceptMergeRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.acceptMergeRequestWithOptions(ProjectId, MergeRequestId, request, headers, runtime);
  }

  async acceptMergeRequestWithOptions(ProjectId: string, MergeRequestId: string, request: AcceptMergeRequestRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AcceptMergeRequestResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AcceptMergeRequest",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/merge_request/${OpenApiUtil.getEncodeParam(MergeRequestId)}/accept`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AcceptMergeRequestResponse>(await this.callApi(params, req, runtime), new AcceptMergeRequestResponse({}));
  }

  async addGroupMember(GroupId: string, request: AddGroupMemberRequest): Promise<AddGroupMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addGroupMemberWithOptions(GroupId, request, headers, runtime);
  }

  async addGroupMemberWithOptions(GroupId: string, request: AddGroupMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddGroupMemberResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddGroupMember",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/groups/${OpenApiUtil.getEncodeParam(GroupId)}/members`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddGroupMemberResponse>(await this.callApi(params, req, runtime), new AddGroupMemberResponse({}));
  }

  async addRepositoryMember(ProjectId: string, request: AddRepositoryMemberRequest): Promise<AddRepositoryMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addRepositoryMemberWithOptions(ProjectId, request, headers, runtime);
  }

  async addRepositoryMemberWithOptions(ProjectId: string, request: AddRepositoryMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddRepositoryMemberResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddRepositoryMember",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/members`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddRepositoryMemberResponse>(await this.callApi(params, req, runtime), new AddRepositoryMemberResponse({}));
  }

  async addWebhook(ProjectId: string, request: AddWebhookRequest): Promise<AddWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addWebhookWithOptions(ProjectId, request, headers, runtime);
  }

  async addWebhookWithOptions(ProjectId: string, request: AddWebhookRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddWebhookResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddWebhook",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/hooks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddWebhookResponse>(await this.callApi(params, req, runtime), new AddWebhookResponse({}));
  }

  async createBranch(ProjectId: string, request: CreateBranchRequest): Promise<CreateBranchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createBranchWithOptions(ProjectId, request, headers, runtime);
  }

  async createBranchWithOptions(ProjectId: string, request: CreateBranchRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateBranchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.branchName)) {
      body["branchName"] = request.branchName;
    }

    if (!Util.isUnset(request.ref)) {
      body["ref"] = request.ref;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateBranch",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/branches`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateBranchResponse>(await this.callApi(params, req, runtime), new CreateBranchResponse({}));
  }

  async createFile(ProjectId: string, request: CreateFileRequest): Promise<CreateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFileWithOptions(ProjectId, request, headers, runtime);
  }

  async createFileWithOptions(ProjectId: string, request: CreateFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFileResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFile",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/files`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFileResponse>(await this.callApi(params, req, runtime), new CreateFileResponse({}));
  }

  async createMergeRequest(ProjectId: string, request: CreateMergeRequestRequest): Promise<CreateMergeRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMergeRequestWithOptions(ProjectId, request, headers, runtime);
  }

  async createMergeRequestWithOptions(ProjectId: string, request: CreateMergeRequestRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateMergeRequestResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMergeRequest",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/merge_requests`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateMergeRequestResponse>(await this.callApi(params, req, runtime), new CreateMergeRequestResponse({}));
  }

  async createMergeRequestComment(ProjectId: string, MergeRequestId: string, request: CreateMergeRequestCommentRequest): Promise<CreateMergeRequestCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMergeRequestCommentWithOptions(ProjectId, MergeRequestId, request, headers, runtime);
  }

  async createMergeRequestCommentWithOptions(ProjectId: string, MergeRequestId: string, request: CreateMergeRequestCommentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateMergeRequestCommentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMergeRequestComment",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/merge_request/${OpenApiUtil.getEncodeParam(MergeRequestId)}/comments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateMergeRequestCommentResponse>(await this.callApi(params, req, runtime), new CreateMergeRequestCommentResponse({}));
  }

  async createRepository(request: CreateRepositoryRequest): Promise<CreateRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRepositoryWithOptions(request, headers, runtime);
  }

  async createRepositoryWithOptions(request: CreateRepositoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRepositoryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.createParentPath)) {
      query["CreateParentPath"] = request.createParentPath;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    if (!Util.isUnset(request.sync)) {
      query["Sync"] = request.sync;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.avatarUrl)) {
      body["avatarUrl"] = request.avatarUrl;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.gitignoreType)) {
      body["gitignoreType"] = request.gitignoreType;
    }

    if (!Util.isUnset(request.importAccount)) {
      body["importAccount"] = request.importAccount;
    }

    if (!Util.isUnset(request.importDemoProject)) {
      body["importDemoProject"] = request.importDemoProject;
    }

    if (!Util.isUnset(request.importRepoType)) {
      body["importRepoType"] = request.importRepoType;
    }

    if (!Util.isUnset(request.importToken)) {
      body["importToken"] = request.importToken;
    }

    if (!Util.isUnset(request.importTokenEncrypted)) {
      body["importTokenEncrypted"] = request.importTokenEncrypted;
    }

    if (!Util.isUnset(request.importUrl)) {
      body["importUrl"] = request.importUrl;
    }

    if (!Util.isUnset(request.initStandardService)) {
      body["initStandardService"] = request.initStandardService;
    }

    if (!Util.isUnset(request.isCryptoEnabled)) {
      body["isCryptoEnabled"] = request.isCryptoEnabled;
    }

    if (!Util.isUnset(request.localImportUrl)) {
      body["localImportUrl"] = request.localImportUrl;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.namespaceId)) {
      body["namespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.path)) {
      body["path"] = request.path;
    }

    if (!Util.isUnset(request.readmeType)) {
      body["readmeType"] = request.readmeType;
    }

    if (!Util.isUnset(request.visibilityLevel)) {
      body["visibilityLevel"] = request.visibilityLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRepository",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRepositoryResponse>(await this.callApi(params, req, runtime), new CreateRepositoryResponse({}));
  }

  async createRepositoryDeployKey(ProjectId: string, request: CreateRepositoryDeployKeyRequest): Promise<CreateRepositoryDeployKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRepositoryDeployKeyWithOptions(ProjectId, request, headers, runtime);
  }

  async createRepositoryDeployKeyWithOptions(ProjectId: string, request: CreateRepositoryDeployKeyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRepositoryDeployKeyResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRepositoryDeployKey",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/keys`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRepositoryDeployKeyResponse>(await this.callApi(params, req, runtime), new CreateRepositoryDeployKeyResponse({}));
  }

  async createRepositoryGroup(request: CreateRepositoryGroupRequest): Promise<CreateRepositoryGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRepositoryGroupWithOptions(request, headers, runtime);
  }

  async createRepositoryGroupWithOptions(request: CreateRepositoryGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRepositoryGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRepositoryGroup",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRepositoryGroupResponse>(await this.callApi(params, req, runtime), new CreateRepositoryGroupResponse({}));
  }

  async createRepositoryProtectedBranch(ProjectId: string, request: CreateRepositoryProtectedBranchRequest): Promise<CreateRepositoryProtectedBranchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRepositoryProtectedBranchWithOptions(ProjectId, request, headers, runtime);
  }

  async createRepositoryProtectedBranchWithOptions(ProjectId: string, request: CreateRepositoryProtectedBranchRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRepositoryProtectedBranchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRepositoryProtectedBranch",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/protect_branches`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRepositoryProtectedBranchResponse>(await this.callApi(params, req, runtime), new CreateRepositoryProtectedBranchResponse({}));
  }

  async createSshKey(request: CreateSshKeyRequest): Promise<CreateSshKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSshKeyWithOptions(request, headers, runtime);
  }

  async createSshKeyWithOptions(request: CreateSshKeyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSshKeyResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSshKey",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/user/keys`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSshKeyResponse>(await this.callApi(params, req, runtime), new CreateSshKeyResponse({}));
  }

  async createTag(ProjectId: string, request: CreateTagRequest): Promise<CreateTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTagWithOptions(ProjectId, request, headers, runtime);
  }

  async createTagWithOptions(ProjectId: string, request: CreateTagRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTagResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTag",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTagResponse>(await this.callApi(params, req, runtime), new CreateTagResponse({}));
  }

  async deleteBranch(ProjectId: string, request: DeleteBranchRequest): Promise<DeleteBranchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBranchWithOptions(ProjectId, request, headers, runtime);
  }

  async deleteBranchWithOptions(ProjectId: string, request: DeleteBranchRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteBranchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBranch",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/branches/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteBranchResponse>(await this.callApi(params, req, runtime), new DeleteBranchResponse({}));
  }

  async deleteFile(ProjectId: string, request: DeleteFileRequest): Promise<DeleteFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFileWithOptions(ProjectId, request, headers, runtime);
  }

  async deleteFileWithOptions(ProjectId: string, request: DeleteFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFileResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!Util.isUnset(request.commitMessage)) {
      query["CommitMessage"] = request.commitMessage;
    }

    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFile",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/files`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFileResponse>(await this.callApi(params, req, runtime), new DeleteFileResponse({}));
  }

  async deleteGroupMember(GroupId: string, UserId: string, request: DeleteGroupMemberRequest): Promise<DeleteGroupMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGroupMemberWithOptions(GroupId, UserId, request, headers, runtime);
  }

  async deleteGroupMemberWithOptions(GroupId: string, UserId: string, request: DeleteGroupMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteGroupMemberResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGroupMember",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/groups/${OpenApiUtil.getEncodeParam(GroupId)}/members/${OpenApiUtil.getEncodeParam(UserId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupMemberResponse>(await this.callApi(params, req, runtime), new DeleteGroupMemberResponse({}));
  }

  async deleteRepository(ProjectId: string, request: DeleteRepositoryRequest): Promise<DeleteRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepositoryWithOptions(ProjectId, request, headers, runtime);
  }

  async deleteRepositoryWithOptions(ProjectId: string, request: DeleteRepositoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRepositoryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepository",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRepositoryResponse>(await this.callApi(params, req, runtime), new DeleteRepositoryResponse({}));
  }

  async deleteRepositoryGroup(GroupId: string, request: DeleteRepositoryGroupRequest): Promise<DeleteRepositoryGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepositoryGroupWithOptions(GroupId, request, headers, runtime);
  }

  async deleteRepositoryGroupWithOptions(GroupId: string, request: DeleteRepositoryGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRepositoryGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepositoryGroup",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/groups/${OpenApiUtil.getEncodeParam(GroupId)}/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRepositoryGroupResponse>(await this.callApi(params, req, runtime), new DeleteRepositoryGroupResponse({}));
  }

  async deleteRepositoryMember(ProjectId: string, UserId: string, request: DeleteRepositoryMemberRequest): Promise<DeleteRepositoryMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepositoryMemberWithOptions(ProjectId, UserId, request, headers, runtime);
  }

  async deleteRepositoryMemberWithOptions(ProjectId: string, UserId: string, request: DeleteRepositoryMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRepositoryMemberResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepositoryMember",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/members/${OpenApiUtil.getEncodeParam(UserId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRepositoryMemberResponse>(await this.callApi(params, req, runtime), new DeleteRepositoryMemberResponse({}));
  }

  async deleteRepositoryMemberWithExternUid(ProjectId: string, request: DeleteRepositoryMemberWithExternUidRequest): Promise<DeleteRepositoryMemberWithExternUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepositoryMemberWithExternUidWithOptions(ProjectId, request, headers, runtime);
  }

  async deleteRepositoryMemberWithExternUidWithOptions(ProjectId: string, request: DeleteRepositoryMemberWithExternUidRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRepositoryMemberWithExternUidResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.externUserId)) {
      query["ExternUserId"] = request.externUserId;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepositoryMemberWithExternUid",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/members/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRepositoryMemberWithExternUidResponse>(await this.callApi(params, req, runtime), new DeleteRepositoryMemberWithExternUidResponse({}));
  }

  async deleteRepositoryProtectedBranch(ProjectId: string, ProtectedBranchId: string, request: DeleteRepositoryProtectedBranchRequest): Promise<DeleteRepositoryProtectedBranchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepositoryProtectedBranchWithOptions(ProjectId, ProtectedBranchId, request, headers, runtime);
  }

  async deleteRepositoryProtectedBranchWithOptions(ProjectId: string, ProtectedBranchId: string, request: DeleteRepositoryProtectedBranchRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRepositoryProtectedBranchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepositoryProtectedBranch",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/protect_branches/${OpenApiUtil.getEncodeParam(ProtectedBranchId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRepositoryProtectedBranchResponse>(await this.callApi(params, req, runtime), new DeleteRepositoryProtectedBranchResponse({}));
  }

  async deleteRepositoryTag(ProjectId: string, TagName: string, request: DeleteRepositoryTagRequest): Promise<DeleteRepositoryTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepositoryTagWithOptions(ProjectId, TagName, request, headers, runtime);
  }

  async deleteRepositoryTagWithOptions(ProjectId: string, TagName: string, request: DeleteRepositoryTagRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRepositoryTagResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepositoryTag",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/tags/${OpenApiUtil.getEncodeParam(TagName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRepositoryTagResponse>(await this.callApi(params, req, runtime), new DeleteRepositoryTagResponse({}));
  }

  async deleteRepositoryTagV2(ProjectId: string, request: DeleteRepositoryTagV2Request): Promise<DeleteRepositoryTagV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepositoryTagV2WithOptions(ProjectId, request, headers, runtime);
  }

  async deleteRepositoryTagV2WithOptions(ProjectId: string, request: DeleteRepositoryTagV2Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRepositoryTagV2Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepositoryTagV2",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/tag/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRepositoryTagV2Response>(await this.callApi(params, req, runtime), new DeleteRepositoryTagV2Response({}));
  }

  async deleteRepositoryWebhook(ProjectId: string, WebhookId: string, request: DeleteRepositoryWebhookRequest): Promise<DeleteRepositoryWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepositoryWebhookWithOptions(ProjectId, WebhookId, request, headers, runtime);
  }

  async deleteRepositoryWebhookWithOptions(ProjectId: string, WebhookId: string, request: DeleteRepositoryWebhookRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRepositoryWebhookResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepositoryWebhook",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/hooks/${OpenApiUtil.getEncodeParam(WebhookId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRepositoryWebhookResponse>(await this.callApi(params, req, runtime), new DeleteRepositoryWebhookResponse({}));
  }

  async enableRepositoryDeployKey(ProjectId: string, KeyId: string, request: EnableRepositoryDeployKeyRequest): Promise<EnableRepositoryDeployKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableRepositoryDeployKeyWithOptions(ProjectId, KeyId, request, headers, runtime);
  }

  async enableRepositoryDeployKeyWithOptions(ProjectId: string, KeyId: string, request: EnableRepositoryDeployKeyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableRepositoryDeployKeyResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableRepositoryDeployKey",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/keys/${OpenApiUtil.getEncodeParam(KeyId)}/enable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EnableRepositoryDeployKeyResponse>(await this.callApi(params, req, runtime), new EnableRepositoryDeployKeyResponse({}));
  }

  async getBranchInfo(ProjectId: string, request: GetBranchInfoRequest): Promise<GetBranchInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBranchInfoWithOptions(ProjectId, request, headers, runtime);
  }

  async getBranchInfoWithOptions(ProjectId: string, request: GetBranchInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetBranchInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBranchInfo",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/branches/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetBranchInfoResponse>(await this.callApi(params, req, runtime), new GetBranchInfoResponse({}));
  }

  async getCodeCompletion(ServiceName: string, request: GetCodeCompletionRequest): Promise<GetCodeCompletionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCodeCompletionWithOptions(ServiceName, request, headers, runtime);
  }

  async getCodeCompletionWithOptions(ServiceName: string, request: GetCodeCompletionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCodeCompletionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fetchKeys)) {
      query["FetchKeys"] = request.fetchKeys;
    }

    if (!Util.isUnset(request.isEncrypted)) {
      query["IsEncrypted"] = request.isEncrypted;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCodeCompletion",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v2/service/invoke/${OpenApiUtil.getEncodeParam(ServiceName)}`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCodeCompletionResponse>(await this.callApi(params, req, runtime), new GetCodeCompletionResponse({}));
  }

  async getCodeupOrganization(OrganizationIdentity: string, request: GetCodeupOrganizationRequest): Promise<GetCodeupOrganizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCodeupOrganizationWithOptions(OrganizationIdentity, request, headers, runtime);
  }

  async getCodeupOrganizationWithOptions(OrganizationIdentity: string, request: GetCodeupOrganizationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCodeupOrganizationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCodeupOrganization",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/organization/${OpenApiUtil.getEncodeParam(OrganizationIdentity)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCodeupOrganizationResponse>(await this.callApi(params, req, runtime), new GetCodeupOrganizationResponse({}));
  }

  async getFileBlobs(ProjectId: string, request: GetFileBlobsRequest): Promise<GetFileBlobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFileBlobsWithOptions(ProjectId, request, headers, runtime);
  }

  async getFileBlobsWithOptions(ProjectId: string, request: GetFileBlobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFileBlobsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.ref)) {
      query["Ref"] = request.ref;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    if (!Util.isUnset(request.to)) {
      query["To"] = request.to;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFileBlobs",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/blobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFileBlobsResponse>(await this.callApi(params, req, runtime), new GetFileBlobsResponse({}));
  }

  async getFileLastCommit(ProjectId: string, request: GetFileLastCommitRequest): Promise<GetFileLastCommitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFileLastCommitWithOptions(ProjectId, request, headers, runtime);
  }

  async getFileLastCommitWithOptions(ProjectId: string, request: GetFileLastCommitRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFileLastCommitResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.sha)) {
      query["Sha"] = request.sha;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFileLastCommit",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/files/last_commit`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFileLastCommitResponse>(await this.callApi(params, req, runtime), new GetFileLastCommitResponse({}));
  }

  async getGroupDetail(request: GetGroupDetailRequest): Promise<GetGroupDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGroupDetailWithOptions(request, headers, runtime);
  }

  async getGroupDetailWithOptions(request: GetGroupDetailRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGroupDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGroupDetail",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/groups/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGroupDetailResponse>(await this.callApi(params, req, runtime), new GetGroupDetailResponse({}));
  }

  async getMergeRequestApproveStatus(ProjectId: string, MergeRequestId: string, request: GetMergeRequestApproveStatusRequest): Promise<GetMergeRequestApproveStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMergeRequestApproveStatusWithOptions(ProjectId, MergeRequestId, request, headers, runtime);
  }

  async getMergeRequestApproveStatusWithOptions(ProjectId: string, MergeRequestId: string, request: GetMergeRequestApproveStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMergeRequestApproveStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMergeRequestApproveStatus",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/merge_request/${OpenApiUtil.getEncodeParam(MergeRequestId)}/approve_status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMergeRequestApproveStatusResponse>(await this.callApi(params, req, runtime), new GetMergeRequestApproveStatusResponse({}));
  }

  async getMergeRequestDetail(ProjectId: string, MergeRequestId: string, request: GetMergeRequestDetailRequest): Promise<GetMergeRequestDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMergeRequestDetailWithOptions(ProjectId, MergeRequestId, request, headers, runtime);
  }

  async getMergeRequestDetailWithOptions(ProjectId: string, MergeRequestId: string, request: GetMergeRequestDetailRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMergeRequestDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMergeRequestDetail",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/merge_request/${OpenApiUtil.getEncodeParam(MergeRequestId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMergeRequestDetailResponse>(await this.callApi(params, req, runtime), new GetMergeRequestDetailResponse({}));
  }

  async getMergeRequestSetting(ProjectId: string, request: GetMergeRequestSettingRequest): Promise<GetMergeRequestSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMergeRequestSettingWithOptions(ProjectId, request, headers, runtime);
  }

  async getMergeRequestSettingWithOptions(ProjectId: string, request: GetMergeRequestSettingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMergeRequestSettingResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMergeRequestSetting",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/settings/merge_requests`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMergeRequestSettingResponse>(await this.callApi(params, req, runtime), new GetMergeRequestSettingResponse({}));
  }

  async getOrganizationRepositorySetting(request: GetOrganizationRepositorySettingRequest): Promise<GetOrganizationRepositorySettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrganizationRepositorySettingWithOptions(request, headers, runtime);
  }

  async getOrganizationRepositorySettingWithOptions(request: GetOrganizationRepositorySettingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOrganizationRepositorySettingResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOrganizationRepositorySetting",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/organization/settings/repo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOrganizationRepositorySettingResponse>(await this.callApi(params, req, runtime), new GetOrganizationRepositorySettingResponse({}));
  }

  async getOrganizationSecurityCenterStatus(request: GetOrganizationSecurityCenterStatusRequest): Promise<GetOrganizationSecurityCenterStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrganizationSecurityCenterStatusWithOptions(request, headers, runtime);
  }

  async getOrganizationSecurityCenterStatusWithOptions(request: GetOrganizationSecurityCenterStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOrganizationSecurityCenterStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOrganizationSecurityCenterStatus",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/organization/security/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOrganizationSecurityCenterStatusResponse>(await this.callApi(params, req, runtime), new GetOrganizationSecurityCenterStatusResponse({}));
  }

  async getProjectMember(ProjectId: string, UserId: string, request: GetProjectMemberRequest): Promise<GetProjectMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectMemberWithOptions(ProjectId, UserId, request, headers, runtime);
  }

  async getProjectMemberWithOptions(ProjectId: string, UserId: string, request: GetProjectMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectMemberResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProjectMember",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/members/${OpenApiUtil.getEncodeParam(UserId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectMemberResponse>(await this.callApi(params, req, runtime), new GetProjectMemberResponse({}));
  }

  async getRepositoryCommit(ProjectId: string, Sha: string, request: GetRepositoryCommitRequest): Promise<GetRepositoryCommitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepositoryCommitWithOptions(ProjectId, Sha, request, headers, runtime);
  }

  async getRepositoryCommitWithOptions(ProjectId: string, Sha: string, request: GetRepositoryCommitRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepositoryCommitResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepositoryCommit",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/commits/${OpenApiUtil.getEncodeParam(Sha)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRepositoryCommitResponse>(await this.callApi(params, req, runtime), new GetRepositoryCommitResponse({}));
  }

  async getRepositoryInfo(request: GetRepositoryInfoRequest): Promise<GetRepositoryInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepositoryInfoWithOptions(request, headers, runtime);
  }

  async getRepositoryInfoWithOptions(request: GetRepositoryInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepositoryInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.identity)) {
      query["Identity"] = request.identity;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepositoryInfo",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/info`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRepositoryInfoResponse>(await this.callApi(params, req, runtime), new GetRepositoryInfoResponse({}));
  }

  async getRepositoryTag(ProjectId: string, TagName: string, request: GetRepositoryTagRequest): Promise<GetRepositoryTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepositoryTagWithOptions(ProjectId, TagName, request, headers, runtime);
  }

  async getRepositoryTagWithOptions(ProjectId: string, TagName: string, request: GetRepositoryTagRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepositoryTagResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepositoryTag",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/tags/${OpenApiUtil.getEncodeParam(TagName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRepositoryTagResponse>(await this.callApi(params, req, runtime), new GetRepositoryTagResponse({}));
  }

  async getRepositoryTagV2(ProjectId: string, request: GetRepositoryTagV2Request): Promise<GetRepositoryTagV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepositoryTagV2WithOptions(ProjectId, request, headers, runtime);
  }

  async getRepositoryTagV2WithOptions(ProjectId: string, request: GetRepositoryTagV2Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepositoryTagV2Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepositoryTagV2",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/tag/info`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRepositoryTagV2Response>(await this.callApi(params, req, runtime), new GetRepositoryTagV2Response({}));
  }

  async getUserInfo(request: GetUserInfoRequest): Promise<GetUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserInfoWithOptions(request, headers, runtime);
  }

  async getUserInfoWithOptions(request: GetUserInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUserInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserInfo",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/user/current`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserInfoResponse>(await this.callApi(params, req, runtime), new GetUserInfoResponse({}));
  }

  async isSlsUserAuthrizedCodeup(request: IsSlsUserAuthrizedCodeupRequest): Promise<IsSlsUserAuthrizedCodeupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.isSlsUserAuthrizedCodeupWithOptions(request, headers, runtime);
  }

  async isSlsUserAuthrizedCodeupWithOptions(request: IsSlsUserAuthrizedCodeupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<IsSlsUserAuthrizedCodeupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliyunSubUserId)) {
      body["aliyunSubUserId"] = request.aliyunSubUserId;
    }

    if (!Util.isUnset(request.aliyunUserId)) {
      body["aliyunUserId"] = request.aliyunUserId;
    }

    if (!Util.isUnset(request.codeupProjectId)) {
      body["codeupProjectId"] = request.codeupProjectId;
    }

    if (!Util.isUnset(request.slsLogStore)) {
      body["slsLogStore"] = request.slsLogStore;
    }

    if (!Util.isUnset(request.slsProject)) {
      body["slsProject"] = request.slsProject;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "IsSlsUserAuthrizedCodeup",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/repository/is_codeup_authrized`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<IsSlsUserAuthrizedCodeupResponse>(await this.callApi(params, req, runtime), new IsSlsUserAuthrizedCodeupResponse({}));
  }

  async listGroupMember(GroupId: string, request: ListGroupMemberRequest): Promise<ListGroupMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupMemberWithOptions(GroupId, request, headers, runtime);
  }

  async listGroupMemberWithOptions(GroupId: string, request: ListGroupMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListGroupMemberResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGroupMember",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/groups/${OpenApiUtil.getEncodeParam(GroupId)}/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGroupMemberResponse>(await this.callApi(params, req, runtime), new ListGroupMemberResponse({}));
  }

  async listGroupRepositories(Identity: string, request: ListGroupRepositoriesRequest): Promise<ListGroupRepositoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupRepositoriesWithOptions(Identity, request, headers, runtime);
  }

  async listGroupRepositoriesWithOptions(Identity: string, request: ListGroupRepositoriesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListGroupRepositoriesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.isMember)) {
      query["IsMember"] = request.isMember;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGroupRepositories",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/groups/${OpenApiUtil.getEncodeParam(Identity)}/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGroupRepositoriesResponse>(await this.callApi(params, req, runtime), new ListGroupRepositoriesResponse({}));
  }

  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupsWithOptions(request, headers, runtime);
  }

  async listGroupsWithOptions(request: ListGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.includePersonal)) {
      query["IncludePersonal"] = request.includePersonal;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGroups",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/groups/all`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGroupsResponse>(await this.callApi(params, req, runtime), new ListGroupsResponse({}));
  }

  async listMergeRequestComments(ProjectId: string, MergeRequestId: string, request: ListMergeRequestCommentsRequest): Promise<ListMergeRequestCommentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMergeRequestCommentsWithOptions(ProjectId, MergeRequestId, request, headers, runtime);
  }

  async listMergeRequestCommentsWithOptions(ProjectId: string, MergeRequestId: string, request: ListMergeRequestCommentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMergeRequestCommentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.fromCommit)) {
      query["FromCommit"] = request.fromCommit;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.toCommit)) {
      query["ToCommit"] = request.toCommit;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMergeRequestComments",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/merge_request/${OpenApiUtil.getEncodeParam(MergeRequestId)}/comments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMergeRequestCommentsResponse>(await this.callApi(params, req, runtime), new ListMergeRequestCommentsResponse({}));
  }

  async listMergeRequests(request: ListMergeRequestsRequest): Promise<ListMergeRequestsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMergeRequestsWithOptions(request, headers, runtime);
  }

  async listMergeRequestsWithOptions(request: ListMergeRequestsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMergeRequestsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.afterDate)) {
      query["AfterDate"] = request.afterDate;
    }

    if (!Util.isUnset(request.assigneeCodeupIdList)) {
      query["AssigneeCodeupIdList"] = request.assigneeCodeupIdList;
    }

    if (!Util.isUnset(request.assigneeIdList)) {
      query["AssigneeIdList"] = request.assigneeIdList;
    }

    if (!Util.isUnset(request.authorCodeupIdList)) {
      query["AuthorCodeupIdList"] = request.authorCodeupIdList;
    }

    if (!Util.isUnset(request.authorIdList)) {
      query["AuthorIdList"] = request.authorIdList;
    }

    if (!Util.isUnset(request.beforeDate)) {
      query["BeforeDate"] = request.beforeDate;
    }

    if (!Util.isUnset(request.groupIdList)) {
      query["GroupIdList"] = request.groupIdList;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectIdList)) {
      query["ProjectIdList"] = request.projectIdList;
    }

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.subscriberCodeupIdList)) {
      query["SubscriberCodeupIdList"] = request.subscriberCodeupIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMergeRequests",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/merge_requests/advanced_search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMergeRequestsResponse>(await this.callApi(params, req, runtime), new ListMergeRequestsResponse({}));
  }

  async listOrganizationSecurityScores(request: ListOrganizationSecurityScoresRequest): Promise<ListOrganizationSecurityScoresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOrganizationSecurityScoresWithOptions(request, headers, runtime);
  }

  async listOrganizationSecurityScoresWithOptions(request: ListOrganizationSecurityScoresRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOrganizationSecurityScoresResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOrganizationSecurityScores",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/organization/security/scores`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListOrganizationSecurityScoresResponse>(await this.callApi(params, req, runtime), new ListOrganizationSecurityScoresResponse({}));
  }

  async listOrganizations(request: ListOrganizationsRequest): Promise<ListOrganizationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOrganizationsWithOptions(request, headers, runtime);
  }

  async listOrganizationsWithOptions(request: ListOrganizationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOrganizationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessLevel)) {
      query["AccessLevel"] = request.accessLevel;
    }

    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.minAccessLevel)) {
      query["MinAccessLevel"] = request.minAccessLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOrganizations",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/organization`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListOrganizationsResponse>(await this.callApi(params, req, runtime), new ListOrganizationsResponse({}));
  }

  async listRepositories(request: ListRepositoriesRequest): Promise<ListRepositoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoriesWithOptions(request, headers, runtime);
  }

  async listRepositoriesWithOptions(request: ListRepositoriesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRepositoriesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.archive)) {
      query["Archive"] = request.archive;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepositories",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/all`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRepositoriesResponse>(await this.callApi(params, req, runtime), new ListRepositoriesResponse({}));
  }

  async listRepositoryBranches(ProjectId: string, request: ListRepositoryBranchesRequest): Promise<ListRepositoryBranchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryBranchesWithOptions(ProjectId, request, headers, runtime);
  }

  async listRepositoryBranchesWithOptions(ProjectId: string, request: ListRepositoryBranchesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRepositoryBranchesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepositoryBranches",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/branches`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRepositoryBranchesResponse>(await this.callApi(params, req, runtime), new ListRepositoryBranchesResponse({}));
  }

  async listRepositoryCode(request: ListRepositoryCodeRequest): Promise<ListRepositoryCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryCodeWithOptions(request, headers, runtime);
  }

  async listRepositoryCodeWithOptions(request: ListRepositoryCodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRepositoryCodeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.filePath))) {
      body["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.isCodeBlock)) {
      body["IsCodeBlock"] = request.isCodeBlock;
    }

    if (!Util.isUnset(request.keyWord)) {
      body["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.order)) {
      body["Order"] = request.order;
    }

    if (!Util.isUnset(request.page)) {
      body["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset($tea.toMap(request.repositoryPath))) {
      body["RepositoryPath"] = request.repositoryPath;
    }

    if (!Util.isUnset(request.scope)) {
      body["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.sort)) {
      body["Sort"] = request.sort;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRepositoryCode",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/search/v3/code`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRepositoryCodeResponse>(await this.callApi(params, req, runtime), new ListRepositoryCodeResponse({}));
  }

  async listRepositoryCommitDiff(ProjectId: string, Sha: string, request: ListRepositoryCommitDiffRequest): Promise<ListRepositoryCommitDiffResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryCommitDiffWithOptions(ProjectId, Sha, request, headers, runtime);
  }

  async listRepositoryCommitDiffWithOptions(ProjectId: string, Sha: string, request: ListRepositoryCommitDiffRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRepositoryCommitDiffResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.contextLine)) {
      query["ContextLine"] = request.contextLine;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepositoryCommitDiff",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/commits/${OpenApiUtil.getEncodeParam(Sha)}/diff`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRepositoryCommitDiffResponse>(await this.callApi(params, req, runtime), new ListRepositoryCommitDiffResponse({}));
  }

  async listRepositoryCommits(ProjectId: string, request: ListRepositoryCommitsRequest): Promise<ListRepositoryCommitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryCommitsWithOptions(ProjectId, request, headers, runtime);
  }

  async listRepositoryCommitsWithOptions(ProjectId: string, request: ListRepositoryCommitsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRepositoryCommitsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.refName)) {
      query["RefName"] = request.refName;
    }

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
    }

    if (!Util.isUnset(request.showSignature)) {
      query["ShowSignature"] = request.showSignature;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepositoryCommits",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/commits`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRepositoryCommitsResponse>(await this.callApi(params, req, runtime), new ListRepositoryCommitsResponse({}));
  }

  async listRepositoryMember(ProjectId: string, request: ListRepositoryMemberRequest): Promise<ListRepositoryMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryMemberWithOptions(ProjectId, request, headers, runtime);
  }

  async listRepositoryMemberWithOptions(ProjectId: string, request: ListRepositoryMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRepositoryMemberResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepositoryMember",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRepositoryMemberResponse>(await this.callApi(params, req, runtime), new ListRepositoryMemberResponse({}));
  }

  async listRepositoryMemberWithInherited(ProjectId: string, request: ListRepositoryMemberWithInheritedRequest): Promise<ListRepositoryMemberWithInheritedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryMemberWithInheritedWithOptions(ProjectId, request, headers, runtime);
  }

  async listRepositoryMemberWithInheritedWithOptions(ProjectId: string, request: ListRepositoryMemberWithInheritedRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRepositoryMemberWithInheritedResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepositoryMemberWithInherited",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/all_members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRepositoryMemberWithInheritedResponse>(await this.callApi(params, req, runtime), new ListRepositoryMemberWithInheritedResponse({}));
  }

  async listRepositoryProtectedBranch(ProjectId: string, request: ListRepositoryProtectedBranchRequest): Promise<ListRepositoryProtectedBranchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryProtectedBranchWithOptions(ProjectId, request, headers, runtime);
  }

  async listRepositoryProtectedBranchWithOptions(ProjectId: string, request: ListRepositoryProtectedBranchRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRepositoryProtectedBranchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepositoryProtectedBranch",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/protect_branches`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRepositoryProtectedBranchResponse>(await this.callApi(params, req, runtime), new ListRepositoryProtectedBranchResponse({}));
  }

  async listRepositoryTags(ProjectId: string, request: ListRepositoryTagsRequest): Promise<ListRepositoryTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryTagsWithOptions(ProjectId, request, headers, runtime);
  }

  async listRepositoryTagsWithOptions(ProjectId: string, request: ListRepositoryTagsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRepositoryTagsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
    }

    if (!Util.isUnset(request.showSignature)) {
      query["ShowSignature"] = request.showSignature;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepositoryTags",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRepositoryTagsResponse>(await this.callApi(params, req, runtime), new ListRepositoryTagsResponse({}));
  }

  async listRepositoryTree(ProjectId: string, request: ListRepositoryTreeRequest): Promise<ListRepositoryTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryTreeWithOptions(ProjectId, request, headers, runtime);
  }

  async listRepositoryTreeWithOptions(ProjectId: string, request: ListRepositoryTreeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRepositoryTreeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.refName)) {
      query["RefName"] = request.refName;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepositoryTree",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/tree`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRepositoryTreeResponse>(await this.callApi(params, req, runtime), new ListRepositoryTreeResponse({}));
  }

  async listRepositoryWebhook(ProjectId: string, request: ListRepositoryWebhookRequest): Promise<ListRepositoryWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryWebhookWithOptions(ProjectId, request, headers, runtime);
  }

  async listRepositoryWebhookWithOptions(ProjectId: string, request: ListRepositoryWebhookRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRepositoryWebhookResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRepositoryWebhook",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/hooks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRepositoryWebhookResponse>(await this.callApi(params, req, runtime), new ListRepositoryWebhookResponse({}));
  }

  async mergeMergeRequest(ProjectId: string, MergeRequestId: string, request: MergeMergeRequestRequest): Promise<MergeMergeRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.mergeMergeRequestWithOptions(ProjectId, MergeRequestId, request, headers, runtime);
  }

  async mergeMergeRequestWithOptions(ProjectId: string, MergeRequestId: string, request: MergeMergeRequestRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<MergeMergeRequestResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MergeMergeRequest",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/merge_request/${OpenApiUtil.getEncodeParam(MergeRequestId)}/merge`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<MergeMergeRequestResponse>(await this.callApi(params, req, runtime), new MergeMergeRequestResponse({}));
  }

  async querySlsRelation(request: QuerySlsRelationRequest): Promise<QuerySlsRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.querySlsRelationWithOptions(request, headers, runtime);
  }

  async querySlsRelationWithOptions(request: QuerySlsRelationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QuerySlsRelationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliyunUserId)) {
      body["aliyunUserId"] = request.aliyunUserId;
    }

    if (!Util.isUnset(request.codeupProjectId)) {
      body["codeupProjectId"] = request.codeupProjectId;
    }

    if (!Util.isUnset(request.slsLogStore)) {
      body["slsLogStore"] = request.slsLogStore;
    }

    if (!Util.isUnset(request.slsProject)) {
      body["slsProject"] = request.slsProject;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QuerySlsRelation",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/repository/query_sls_relation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QuerySlsRelationResponse>(await this.callApi(params, req, runtime), new QuerySlsRelationResponse({}));
  }

  async relatedSlsLogStore(request: RelatedSlsLogStoreRequest): Promise<RelatedSlsLogStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.relatedSlsLogStoreWithOptions(request, headers, runtime);
  }

  async relatedSlsLogStoreWithOptions(request: RelatedSlsLogStoreRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RelatedSlsLogStoreResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliyunUserId)) {
      body["aliyunUserId"] = request.aliyunUserId;
    }

    if (!Util.isUnset(request.codeupProjectId)) {
      body["codeupProjectId"] = request.codeupProjectId;
    }

    if (!Util.isUnset(request.defaultViewer)) {
      body["defaultViewer"] = request.defaultViewer;
    }

    if (!Util.isUnset(request.slsLogStore)) {
      body["slsLogStore"] = request.slsLogStore;
    }

    if (!Util.isUnset(request.slsProject)) {
      body["slsProject"] = request.slsProject;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RelatedSlsLogStore",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/repository/related_to_sls_log_store`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RelatedSlsLogStoreResponse>(await this.callApi(params, req, runtime), new RelatedSlsLogStoreResponse({}));
  }

  async triggerRepositoryMirrorSync(ProjectId: string, request: TriggerRepositoryMirrorSyncRequest): Promise<TriggerRepositoryMirrorSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.triggerRepositoryMirrorSyncWithOptions(ProjectId, request, headers, runtime);
  }

  async triggerRepositoryMirrorSyncWithOptions(ProjectId: string, request: TriggerRepositoryMirrorSyncRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TriggerRepositoryMirrorSyncResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TriggerRepositoryMirrorSync",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/mirror`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TriggerRepositoryMirrorSyncResponse>(await this.callApi(params, req, runtime), new TriggerRepositoryMirrorSyncResponse({}));
  }

  async unRelatedSlsLogStore(request: UnRelatedSlsLogStoreRequest): Promise<UnRelatedSlsLogStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unRelatedSlsLogStoreWithOptions(request, headers, runtime);
  }

  async unRelatedSlsLogStoreWithOptions(request: UnRelatedSlsLogStoreRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UnRelatedSlsLogStoreResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliyunUserId)) {
      body["aliyunUserId"] = request.aliyunUserId;
    }

    if (!Util.isUnset(request.codeupProjectId)) {
      body["codeupProjectId"] = request.codeupProjectId;
    }

    if (!Util.isUnset(request.slsLogStore)) {
      body["slsLogStore"] = request.slsLogStore;
    }

    if (!Util.isUnset(request.slsProject)) {
      body["slsProject"] = request.slsProject;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnRelatedSlsLogStore",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/repository/unrelated_to_sls_log_store`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UnRelatedSlsLogStoreResponse>(await this.callApi(params, req, runtime), new UnRelatedSlsLogStoreResponse({}));
  }

  async updateFile(ProjectId: string, request: UpdateFileRequest): Promise<UpdateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFileWithOptions(ProjectId, request, headers, runtime);
  }

  async updateFileWithOptions(ProjectId: string, request: UpdateFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateFileResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFile",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/repository/files`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateFileResponse>(await this.callApi(params, req, runtime), new UpdateFileResponse({}));
  }

  async updateGroupMember(GroupId: string, UserId: string, request: UpdateGroupMemberRequest): Promise<UpdateGroupMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGroupMemberWithOptions(GroupId, UserId, request, headers, runtime);
  }

  async updateGroupMemberWithOptions(GroupId: string, UserId: string, request: UpdateGroupMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateGroupMemberResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGroupMember",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/groups/${OpenApiUtil.getEncodeParam(GroupId)}/members/${OpenApiUtil.getEncodeParam(UserId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateGroupMemberResponse>(await this.callApi(params, req, runtime), new UpdateGroupMemberResponse({}));
  }

  async updateMergeRequest(ProjectId: string, MergeRequestId: string, request: UpdateMergeRequestRequest): Promise<UpdateMergeRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMergeRequestWithOptions(ProjectId, MergeRequestId, request, headers, runtime);
  }

  async updateMergeRequestWithOptions(ProjectId: string, MergeRequestId: string, request: UpdateMergeRequestRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateMergeRequestResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMergeRequest",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/merge_request/${OpenApiUtil.getEncodeParam(MergeRequestId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateMergeRequestResponse>(await this.callApi(params, req, runtime), new UpdateMergeRequestResponse({}));
  }

  async updateMergeRequestComment(ProjectId: string, MergeRequestId: string, NoteId: string, request: UpdateMergeRequestCommentRequest): Promise<UpdateMergeRequestCommentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMergeRequestCommentWithOptions(ProjectId, MergeRequestId, NoteId, request, headers, runtime);
  }

  async updateMergeRequestCommentWithOptions(ProjectId: string, MergeRequestId: string, NoteId: string, request: UpdateMergeRequestCommentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateMergeRequestCommentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMergeRequestComment",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/merge_requests/${OpenApiUtil.getEncodeParam(MergeRequestId)}/notes/${OpenApiUtil.getEncodeParam(NoteId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateMergeRequestCommentResponse>(await this.callApi(params, req, runtime), new UpdateMergeRequestCommentResponse({}));
  }

  async updateMergeRequestSetting(ProjectId: string, request: UpdateMergeRequestSettingRequest): Promise<UpdateMergeRequestSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMergeRequestSettingWithOptions(ProjectId, request, headers, runtime);
  }

  async updateMergeRequestSettingWithOptions(ProjectId: string, request: UpdateMergeRequestSettingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateMergeRequestSettingResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMergeRequestSetting",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/settings/merge_requests`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateMergeRequestSettingResponse>(await this.callApi(params, req, runtime), new UpdateMergeRequestSettingResponse({}));
  }

  async updateRepository(ProjectId: string, request: UpdateRepositoryRequest): Promise<UpdateRepositoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRepositoryWithOptions(ProjectId, request, headers, runtime);
  }

  async updateRepositoryWithOptions(ProjectId: string, request: UpdateRepositoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRepositoryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRepository",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateRepositoryResponse>(await this.callApi(params, req, runtime), new UpdateRepositoryResponse({}));
  }

  async updateRepositoryMember(ProjectId: string, UserId: string, request: UpdateRepositoryMemberRequest): Promise<UpdateRepositoryMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRepositoryMemberWithOptions(ProjectId, UserId, request, headers, runtime);
  }

  async updateRepositoryMemberWithOptions(ProjectId: string, UserId: string, request: UpdateRepositoryMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRepositoryMemberResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRepositoryMember",
      version: "2020-04-14",
      protocol: "HTTPS",
      pathname: `/api/v3/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/members/${OpenApiUtil.getEncodeParam(UserId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateRepositoryMemberResponse>(await this.callApi(params, req, runtime), new UpdateRepositoryMemberResponse({}));
  }

}
