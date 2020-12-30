// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddGroupMemberRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMemberResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: AddGroupMemberResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': AddGroupMemberResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddGroupMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRepositoryMemberResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: AddRepositoryMemberResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': AddRepositoryMemberResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRepositoryMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddRepositoryMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: AddWebhookResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: AddWebhookResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWebhookResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddWebhookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class CreateBranchResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: CreateBranchResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: CreateBranchResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBranchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBranchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: CreateFileResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: CreateFileResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: CreateMergeRequestResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: CreateMergeRequestResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMergeRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMergeRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryRequest extends $tea.Model {
  accessToken?: string;
  sync?: boolean;
  createParentPath?: boolean;
  organizationId?: string;
  subUserId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      sync: 'Sync',
      createParentPath: 'CreateParentPath',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      sync: 'boolean',
      createParentPath: 'boolean',
      organizationId: 'string',
      subUserId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  errorMessage?: string;
  success?: boolean;
  result?: CreateRepositoryResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      errorMessage: 'string',
      success: 'boolean',
      result: CreateRepositoryResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRepositoryResponseBody,
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
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  errorMessage?: string;
  success?: boolean;
  result?: CreateRepositoryGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      errorMessage: 'string',
      success: 'boolean',
      result: CreateRepositoryGroupResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRepositoryGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRepositoryGroupResponseBody,
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: CreateTagResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: CreateTagResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: DeleteBranchResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: DeleteBranchResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBranchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBranchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBranchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  branchName?: string;
  filePath?: string;
  commitMessage?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      branchName: 'BranchName',
      filePath: 'FilePath',
      commitMessage: 'CommitMessage',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      branchName: 'string',
      filePath: 'string',
      commitMessage: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: DeleteFileResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: DeleteFileResponseBodyResult,
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: DeleteGroupMemberResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: DeleteGroupMemberResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGroupMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: DeleteRepositoryResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: DeleteRepositoryResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: DeleteRepositoryGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: DeleteRepositoryGroupResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRepositoryGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: DeleteRepositoryMemberResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: DeleteRepositoryMemberResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRepositoryMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRepositoryMemberResponseBody,
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: DeleteRepositoryTagResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: DeleteRepositoryTagResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRepositoryTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRepositoryTagResponseBody,
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: DeleteRepositoryWebhookResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: DeleteRepositoryWebhookResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryWebhookResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRepositoryWebhookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRepositoryWebhookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBranchInfoRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  subUserId?: string;
  branchName?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
      branchName: 'BranchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
      branchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBranchInfoResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: GetBranchInfoResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: GetBranchInfoResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBranchInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBranchInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBranchInfoResponseBody,
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: GetCodeupOrganizationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: GetCodeupOrganizationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeupOrganizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCodeupOrganizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCodeupOrganizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileBlobsRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  filePath?: string;
  ref?: string;
  from?: number;
  to?: number;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      filePath: 'FilePath',
      ref: 'Ref',
      from: 'From',
      to: 'To',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      filePath: 'string',
      ref: 'string',
      from: 'number',
      to: 'number',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileBlobsResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: GetFileBlobsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: GetFileBlobsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileBlobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFileBlobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFileBlobsResponseBody,
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: GetGroupDetailResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: GetGroupDetailResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetGroupDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetGroupDetailResponseBody,
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: GetProjectMemberResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: GetProjectMemberResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProjectMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProjectMemberResponseBody,
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
  requestId?: string;
  errorCode?: number;
  errorMessage?: string;
  success?: boolean;
  result?: GetRepositoryInfoResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      errorMessage: 'string',
      success: 'boolean',
      result: GetRepositoryInfoResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRepositoryInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: GetRepositoryTagResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: GetRepositoryTagResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRepositoryTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRepositoryTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoRequest extends $tea.Model {
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

export class GetUserInfoResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: GetUserInfoResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: GetUserInfoResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserInfoResponseBody,
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
  requestId?: string;
  total?: number;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: ListGroupMemberResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': ListGroupMemberResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListGroupMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListGroupMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupRepositoriesRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  isMember?: boolean;
  subUserId?: string;
  search?: string;
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      isMember: 'IsMember',
      subUserId: 'SubUserId',
      search: 'Search',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      isMember: 'boolean',
      subUserId: 'string',
      search: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupRepositoriesResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: ListGroupRepositoriesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': ListGroupRepositoriesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupRepositoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListGroupRepositoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListGroupRepositoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsRequest extends $tea.Model {
  accessToken?: string;
  search?: string;
  organizationId?: string;
  page?: number;
  pageSize?: number;
  subUserId?: string;
  includePersonal?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      search: 'Search',
      organizationId: 'OrganizationId',
      page: 'Page',
      pageSize: 'PageSize',
      subUserId: 'SubUserId',
      includePersonal: 'IncludePersonal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      search: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      subUserId: 'string',
      includePersonal: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: ListGroupsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': ListGroupsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationsRequest extends $tea.Model {
  accessToken?: string;
  accessLevel?: number;
  minAccessLevel?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      accessLevel: 'AccessLevel',
      minAccessLevel: 'MinAccessLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      accessLevel: 'number',
      minAccessLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationsResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: ListOrganizationsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': ListOrganizationsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOrganizationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOrganizationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoriesRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  page?: number;
  pageSize?: number;
  order?: string;
  sort?: string;
  search?: string;
  archive?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      page: 'Page',
      pageSize: 'PageSize',
      order: 'Order',
      sort: 'Sort',
      search: 'Search',
      archive: 'Archive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      order: 'string',
      sort: 'string',
      search: 'string',
      archive: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoriesResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  errorCode?: number;
  errorMessage?: string;
  success?: boolean;
  result?: ListRepositoriesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      errorCode: 'number',
      errorMessage: 'string',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': ListRepositoriesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepositoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  subUserId?: string;
  page?: number;
  pageSize?: number;
  search?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
      page: 'Page',
      pageSize: 'PageSize',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      subUserId: 'string',
      page: 'number',
      pageSize: 'number',
      search: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryBranchesResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: ListRepositoryBranchesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': ListRepositoryBranchesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryBranchesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepositoryBranchesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepositoryBranchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryMemberRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  query?: string;
  page?: number;
  pageSize?: number;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      query: 'Query',
      page: 'Page',
      pageSize: 'PageSize',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      query: 'string',
      page: 'number',
      pageSize: 'number',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryMemberResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: ListRepositoryMemberResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': ListRepositoryMemberResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepositoryMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepositoryMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTagsRequest extends $tea.Model {
  accessToken?: string;
  search?: string;
  organizationId?: string;
  page?: number;
  pageSize?: number;
  sort?: string;
  showSignature?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      search: 'Search',
      organizationId: 'OrganizationId',
      page: 'Page',
      pageSize: 'PageSize',
      sort: 'Sort',
      showSignature: 'ShowSignature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      search: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      sort: 'string',
      showSignature: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTagsResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: ListRepositoryTagsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': ListRepositoryTagsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepositoryTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  type?: string;
  refName?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      path: 'Path',
      type: 'Type',
      refName: 'RefName',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      path: 'string',
      type: 'string',
      refName: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTreeResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: ListRepositoryTreeResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': ListRepositoryTreeResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTreeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepositoryTreeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  total?: number;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: ListRepositoryWebhookResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': ListRepositoryWebhookResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryWebhookResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepositoryWebhookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: MergeMergeRequestResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: MergeMergeRequestResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MergeMergeRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MergeMergeRequestResponseBody,
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: UpdateFileResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: UpdateFileResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: UpdateGroupMemberResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: UpdateGroupMemberResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateGroupMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateGroupMemberResponseBody,
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
  requestId?: string;
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  result?: UpdateRepositoryMemberResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      result: UpdateRepositoryMemberResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRepositoryMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRepositoryMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMemberResponseBodyResult extends $tea.Model {
  externUserId?: string;
  email?: string;
  avatarUrl?: string;
  state?: string;
  accessLevel?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      email: 'Email',
      avatarUrl: 'AvatarUrl',
      state: 'State',
      accessLevel: 'AccessLevel',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      email: 'string',
      avatarUrl: 'string',
      state: 'string',
      accessLevel: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRepositoryMemberResponseBodyResult extends $tea.Model {
  externUserId?: string;
  email?: string;
  avatarUrl?: string;
  state?: string;
  accessLevel?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      email: 'Email',
      avatarUrl: 'AvatarUrl',
      state: 'State',
      accessLevel: 'AccessLevel',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      email: 'string',
      avatarUrl: 'string',
      state: 'string',
      accessLevel: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWebhookResponseBodyResult extends $tea.Model {
  pushEvents?: boolean;
  buildEvents?: boolean;
  projectId?: number;
  createdAt?: string;
  tagPushEvents?: boolean;
  issuesEvents?: boolean;
  url?: string;
  lastTestResult?: string;
  mergeRequestsEvents?: boolean;
  description?: string;
  noteEvents?: boolean;
  secretToken?: string;
  id?: number;
  enableSslVerification?: boolean;
  static names(): { [key: string]: string } {
    return {
      pushEvents: 'PushEvents',
      buildEvents: 'BuildEvents',
      projectId: 'ProjectId',
      createdAt: 'CreatedAt',
      tagPushEvents: 'TagPushEvents',
      issuesEvents: 'IssuesEvents',
      url: 'Url',
      lastTestResult: 'LastTestResult',
      mergeRequestsEvents: 'MergeRequestsEvents',
      description: 'Description',
      noteEvents: 'NoteEvents',
      secretToken: 'SecretToken',
      id: 'Id',
      enableSslVerification: 'EnableSslVerification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushEvents: 'boolean',
      buildEvents: 'boolean',
      projectId: 'number',
      createdAt: 'string',
      tagPushEvents: 'boolean',
      issuesEvents: 'boolean',
      url: 'string',
      lastTestResult: 'string',
      mergeRequestsEvents: 'boolean',
      description: 'string',
      noteEvents: 'boolean',
      secretToken: 'string',
      id: 'number',
      enableSslVerification: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBranchResponseBodyResultCommitInfo extends $tea.Model {
  shortId?: string;
  authorDate?: string;
  createdAt?: string;
  message?: string;
  parentIds?: string[];
  authorName?: string;
  committerName?: string;
  title?: string;
  authorEmail?: string;
  committerEmail?: string;
  id?: string;
  committedDate?: string;
  static names(): { [key: string]: string } {
    return {
      shortId: 'ShortId',
      authorDate: 'AuthorDate',
      createdAt: 'CreatedAt',
      message: 'Message',
      parentIds: 'ParentIds',
      authorName: 'AuthorName',
      committerName: 'CommitterName',
      title: 'Title',
      authorEmail: 'AuthorEmail',
      committerEmail: 'CommitterEmail',
      id: 'Id',
      committedDate: 'CommittedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shortId: 'string',
      authorDate: 'string',
      createdAt: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      authorName: 'string',
      committerName: 'string',
      title: 'string',
      authorEmail: 'string',
      committerEmail: 'string',
      id: 'string',
      committedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBranchResponseBodyResult extends $tea.Model {
  protectedBranch?: boolean;
  commitInfo?: CreateBranchResponseBodyResultCommitInfo;
  branchName?: string;
  static names(): { [key: string]: string } {
    return {
      protectedBranch: 'ProtectedBranch',
      commitInfo: 'CommitInfo',
      branchName: 'BranchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectedBranch: 'boolean',
      commitInfo: CreateBranchResponseBodyResultCommitInfo,
      branchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileResponseBodyResult extends $tea.Model {
  filePath?: string;
  branchName?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      branchName: 'BranchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      branchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultAssigneeList extends $tea.Model {
  externUserId?: string;
  avatarUrl?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      avatarUrl: 'AvatarUrl',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      avatarUrl: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultAuthor extends $tea.Model {
  externUserId?: string;
  avatarUrl?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      avatarUrl: 'AvatarUrl',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      avatarUrl: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers extends $tea.Model {
  externUserId?: string;
  avatarUrl?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      avatarUrl: 'AvatarUrl',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      avatarUrl: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults extends $tea.Model {
  satisfiedItems?: string[];
  checkStatus?: string;
  checkType?: string;
  unsatisfiedItems?: string[];
  extraUsers?: CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers[];
  checkName?: string;
  static names(): { [key: string]: string } {
    return {
      satisfiedItems: 'SatisfiedItems',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      unsatisfiedItems: 'UnsatisfiedItems',
      extraUsers: 'ExtraUsers',
      checkName: 'CheckName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
      checkStatus: 'string',
      checkType: 'string',
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
      extraUsers: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers },
      checkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers extends $tea.Model {
  externUserId?: string;
  avatarUrl?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      avatarUrl: 'AvatarUrl',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      avatarUrl: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults extends $tea.Model {
  satisfiedItems?: string[];
  checkStatus?: string;
  checkType?: string;
  unsatisfiedItems?: string[];
  extraUsers?: CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers[];
  checkName?: string;
  static names(): { [key: string]: string } {
    return {
      satisfiedItems: 'SatisfiedItems',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      unsatisfiedItems: 'UnsatisfiedItems',
      extraUsers: 'ExtraUsers',
      checkName: 'CheckName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
      checkStatus: 'string',
      checkType: 'string',
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
      extraUsers: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers },
      checkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultApproveCheckResult extends $tea.Model {
  totalCheckResult?: string;
  unsatisfiedCheckResults?: CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults[];
  satisfiedCheckResults?: CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults[];
  static names(): { [key: string]: string } {
    return {
      totalCheckResult: 'TotalCheckResult',
      unsatisfiedCheckResults: 'UnsatisfiedCheckResults',
      satisfiedCheckResults: 'SatisfiedCheckResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCheckResult: 'string',
      unsatisfiedCheckResults: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults },
      satisfiedCheckResults: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResult extends $tea.Model {
  state?: string;
  behindCommitCount?: number;
  projectId?: number;
  assigneeList?: CreateMergeRequestResponseBodyResultAssigneeList[];
  createdAt?: string;
  author?: CreateMergeRequestResponseBodyResultAuthor;
  acceptedRevision?: string;
  approveCheckResult?: CreateMergeRequestResponseBodyResultApproveCheckResult;
  sourceBranch?: string;
  webUrl?: string;
  description?: string;
  mergeType?: string;
  nameWithNamespace?: string;
  targetBranch?: string;
  aheadCommitCount?: number;
  updatedAt?: string;
  title?: string;
  mergeError?: string;
  mergedRevision?: string;
  id?: number;
  mergeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      behindCommitCount: 'BehindCommitCount',
      projectId: 'ProjectId',
      assigneeList: 'AssigneeList',
      createdAt: 'CreatedAt',
      author: 'Author',
      acceptedRevision: 'AcceptedRevision',
      approveCheckResult: 'ApproveCheckResult',
      sourceBranch: 'SourceBranch',
      webUrl: 'WebUrl',
      description: 'Description',
      mergeType: 'MergeType',
      nameWithNamespace: 'NameWithNamespace',
      targetBranch: 'TargetBranch',
      aheadCommitCount: 'AheadCommitCount',
      updatedAt: 'UpdatedAt',
      title: 'Title',
      mergeError: 'MergeError',
      mergedRevision: 'MergedRevision',
      id: 'Id',
      mergeStatus: 'MergeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      behindCommitCount: 'number',
      projectId: 'number',
      assigneeList: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultAssigneeList },
      createdAt: 'string',
      author: CreateMergeRequestResponseBodyResultAuthor,
      acceptedRevision: 'string',
      approveCheckResult: CreateMergeRequestResponseBodyResultApproveCheckResult,
      sourceBranch: 'string',
      webUrl: 'string',
      description: 'string',
      mergeType: 'string',
      nameWithNamespace: 'string',
      targetBranch: 'string',
      aheadCommitCount: 'number',
      updatedAt: 'string',
      title: 'string',
      mergeError: 'string',
      mergedRevision: 'string',
      id: 'number',
      mergeStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponseBodyResultNamespace extends $tea.Model {
  avatar?: string;
  description?: string;
  state?: string;
  public?: boolean;
  visibilityLevel?: string;
  createdAt?: string;
  path?: string;
  updatedAt?: string;
  name?: string;
  ownerId?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      description: 'Description',
      state: 'State',
      public: 'Public',
      visibilityLevel: 'VisibilityLevel',
      createdAt: 'CreatedAt',
      path: 'Path',
      updatedAt: 'UpdatedAt',
      name: 'Name',
      ownerId: 'OwnerId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      description: 'string',
      state: 'string',
      public: 'boolean',
      visibilityLevel: 'string',
      createdAt: 'string',
      path: 'string',
      updatedAt: 'string',
      name: 'string',
      ownerId: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponseBodyResult extends $tea.Model {
  defaultBranch?: string;
  snippetsEnableStatus?: boolean;
  createdAt?: string;
  buildsEnableStatus?: boolean;
  webUrl?: string;
  description?: string;
  tagList?: string[];
  public?: boolean;
  pathWithNamespace?: string;
  visibilityLevel?: string;
  wikiEnableStatus?: boolean;
  name?: string;
  lastActivityAt?: string;
  avatarUrl?: string;
  archive?: boolean;
  namespace?: CreateRepositoryResponseBodyResultNamespace;
  issuesEnableStatus?: boolean;
  demoProjectStatus?: boolean;
  creatorId?: number;
  httpUrlToRepo?: string;
  nameWithNamespace?: string;
  mergeRequestEnableStatus?: boolean;
  path?: string;
  sshUrlToRepo?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      defaultBranch: 'DefaultBranch',
      snippetsEnableStatus: 'SnippetsEnableStatus',
      createdAt: 'CreatedAt',
      buildsEnableStatus: 'BuildsEnableStatus',
      webUrl: 'WebUrl',
      description: 'Description',
      tagList: 'TagList',
      public: 'Public',
      pathWithNamespace: 'PathWithNamespace',
      visibilityLevel: 'VisibilityLevel',
      wikiEnableStatus: 'WikiEnableStatus',
      name: 'Name',
      lastActivityAt: 'LastActivityAt',
      avatarUrl: 'AvatarUrl',
      archive: 'Archive',
      namespace: 'Namespace',
      issuesEnableStatus: 'IssuesEnableStatus',
      demoProjectStatus: 'DemoProjectStatus',
      creatorId: 'CreatorId',
      httpUrlToRepo: 'HttpUrlToRepo',
      nameWithNamespace: 'NameWithNamespace',
      mergeRequestEnableStatus: 'MergeRequestEnableStatus',
      path: 'Path',
      sshUrlToRepo: 'SshUrlToRepo',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultBranch: 'string',
      snippetsEnableStatus: 'boolean',
      createdAt: 'string',
      buildsEnableStatus: 'boolean',
      webUrl: 'string',
      description: 'string',
      tagList: { 'type': 'array', 'itemType': 'string' },
      public: 'boolean',
      pathWithNamespace: 'string',
      visibilityLevel: 'string',
      wikiEnableStatus: 'boolean',
      name: 'string',
      lastActivityAt: 'string',
      avatarUrl: 'string',
      archive: 'boolean',
      namespace: CreateRepositoryResponseBodyResultNamespace,
      issuesEnableStatus: 'boolean',
      demoProjectStatus: 'boolean',
      creatorId: 'number',
      httpUrlToRepo: 'string',
      nameWithNamespace: 'string',
      mergeRequestEnableStatus: 'boolean',
      path: 'string',
      sshUrlToRepo: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryGroupResponseBodyResult extends $tea.Model {
  type?: string;
  avatarUrl?: string;
  ownerId?: number;
  parentId?: number;
  webUrl?: string;
  description?: string;
  nameWithNamespace?: string;
  pathWithNamespace?: string;
  path?: string;
  visibilityLevel?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      avatarUrl: 'AvatarUrl',
      ownerId: 'OwnerId',
      parentId: 'ParentId',
      webUrl: 'WebUrl',
      description: 'Description',
      nameWithNamespace: 'NameWithNamespace',
      pathWithNamespace: 'PathWithNamespace',
      path: 'Path',
      visibilityLevel: 'VisibilityLevel',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      avatarUrl: 'string',
      ownerId: 'number',
      parentId: 'number',
      webUrl: 'string',
      description: 'string',
      nameWithNamespace: 'string',
      pathWithNamespace: 'string',
      path: 'string',
      visibilityLevel: 'string',
      name: 'string',
      id: 'number',
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

export class CreateTagResponseBodyResultCommitInfo extends $tea.Model {
  shortId?: string;
  createdAt?: string;
  message?: string;
  authoredDate?: string;
  parentIds?: string[];
  authorName?: string;
  committerName?: string;
  title?: string;
  authorEmail?: string;
  committerEmail?: string;
  id?: string;
  committedDate?: string;
  static names(): { [key: string]: string } {
    return {
      shortId: 'ShortId',
      createdAt: 'CreatedAt',
      message: 'Message',
      authoredDate: 'AuthoredDate',
      parentIds: 'ParentIds',
      authorName: 'AuthorName',
      committerName: 'CommitterName',
      title: 'Title',
      authorEmail: 'AuthorEmail',
      committerEmail: 'CommitterEmail',
      id: 'Id',
      committedDate: 'CommittedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shortId: 'string',
      createdAt: 'string',
      message: 'string',
      authoredDate: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      authorName: 'string',
      committerName: 'string',
      title: 'string',
      authorEmail: 'string',
      committerEmail: 'string',
      id: 'string',
      committedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponseBodyResult extends $tea.Model {
  release?: CreateTagResponseBodyResultRelease;
  message?: string;
  commitInfo?: CreateTagResponseBodyResultCommitInfo;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      release: 'Release',
      message: 'Message',
      commitInfo: 'CommitInfo',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      release: CreateTagResponseBodyResultRelease,
      message: 'string',
      commitInfo: CreateTagResponseBodyResultCommitInfo,
      name: 'string',
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
  filePath?: string;
  branchName?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      branchName: 'BranchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      branchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupMemberResponseBodyResult extends $tea.Model {
  externUserId?: string;
  email?: string;
  avatarUrl?: string;
  state?: string;
  accessLevel?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      email: 'Email',
      avatarUrl: 'AvatarUrl',
      state: 'State',
      accessLevel: 'AccessLevel',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      email: 'string',
      avatarUrl: 'string',
      state: 'string',
      accessLevel: 'number',
      id: 'number',
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
  userId?: number;
  sourceType?: string;
  createdAt?: string;
  message?: string;
  accessLevel?: number;
  updatedAt?: string;
  sourceId?: number;
  notificationLevel?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      sourceType: 'SourceType',
      createdAt: 'CreatedAt',
      message: 'Message',
      accessLevel: 'AccessLevel',
      updatedAt: 'UpdatedAt',
      sourceId: 'SourceId',
      notificationLevel: 'NotificationLevel',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      sourceType: 'string',
      createdAt: 'string',
      message: 'string',
      accessLevel: 'number',
      updatedAt: 'string',
      sourceId: 'number',
      notificationLevel: 'number',
      id: 'number',
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

export class DeleteRepositoryWebhookResponseBodyResult extends $tea.Model {
  pushEvents?: boolean;
  projectId?: number;
  createdAt?: string;
  tagPushEvents?: boolean;
  url?: string;
  lastTestResult?: string;
  description?: string;
  mergeRequestsEvents?: boolean;
  secretToken?: string;
  noteEvents?: boolean;
  enableSslVerification?: boolean;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      pushEvents: 'PushEvents',
      projectId: 'ProjectId',
      createdAt: 'CreatedAt',
      tagPushEvents: 'TagPushEvents',
      url: 'Url',
      lastTestResult: 'LastTestResult',
      description: 'Description',
      mergeRequestsEvents: 'MergeRequestsEvents',
      secretToken: 'SecretToken',
      noteEvents: 'NoteEvents',
      enableSslVerification: 'EnableSslVerification',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushEvents: 'boolean',
      projectId: 'number',
      createdAt: 'string',
      tagPushEvents: 'boolean',
      url: 'string',
      lastTestResult: 'string',
      description: 'string',
      mergeRequestsEvents: 'boolean',
      secretToken: 'string',
      noteEvents: 'boolean',
      enableSslVerification: 'boolean',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBranchInfoResponseBodyResultCommitInfo extends $tea.Model {
  shortId?: string;
  authorDate?: string;
  createdAt?: string;
  message?: string;
  parentIds?: string[];
  authorName?: string;
  committerName?: string;
  title?: string;
  authorEmail?: string;
  committerEmail?: string;
  id?: string;
  committedDate?: string;
  static names(): { [key: string]: string } {
    return {
      shortId: 'ShortId',
      authorDate: 'AuthorDate',
      createdAt: 'CreatedAt',
      message: 'Message',
      parentIds: 'ParentIds',
      authorName: 'AuthorName',
      committerName: 'CommitterName',
      title: 'Title',
      authorEmail: 'AuthorEmail',
      committerEmail: 'CommitterEmail',
      id: 'Id',
      committedDate: 'CommittedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shortId: 'string',
      authorDate: 'string',
      createdAt: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      authorName: 'string',
      committerName: 'string',
      title: 'string',
      authorEmail: 'string',
      committerEmail: 'string',
      id: 'string',
      committedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBranchInfoResponseBodyResult extends $tea.Model {
  protectedBranch?: boolean;
  commitInfo?: GetBranchInfoResponseBodyResultCommitInfo;
  branchName?: string;
  static names(): { [key: string]: string } {
    return {
      protectedBranch: 'ProtectedBranch',
      commitInfo: 'CommitInfo',
      branchName: 'BranchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectedBranch: 'boolean',
      commitInfo: GetBranchInfoResponseBodyResultCommitInfo,
      branchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeupOrganizationResponseBodyResult extends $tea.Model {
  namespaceId?: number;
  userRole?: string;
  path?: string;
  createdAt?: string;
  updatedAt?: string;
  id?: number;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      userRole: 'UserRole',
      path: 'Path',
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
      id: 'Id',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'number',
      userRole: 'string',
      path: 'string',
      createdAt: 'string',
      updatedAt: 'string',
      id: 'number',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileBlobsResponseBodyResult extends $tea.Model {
  totalLines?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      totalLines: 'TotalLines',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalLines: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupDetailResponseBodyResult extends $tea.Model {
  type?: string;
  avatarUrl?: string;
  ownerId?: number;
  parentId?: number;
  webUrl?: string;
  description?: string;
  nameWithNamespace?: string;
  pathWithNamespace?: string;
  visibilityLevel?: string;
  path?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      avatarUrl: 'AvatarUrl',
      ownerId: 'OwnerId',
      parentId: 'ParentId',
      webUrl: 'WebUrl',
      description: 'Description',
      nameWithNamespace: 'NameWithNamespace',
      pathWithNamespace: 'PathWithNamespace',
      visibilityLevel: 'VisibilityLevel',
      path: 'Path',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      avatarUrl: 'string',
      ownerId: 'number',
      parentId: 'number',
      webUrl: 'string',
      description: 'string',
      nameWithNamespace: 'string',
      pathWithNamespace: 'string',
      visibilityLevel: 'string',
      path: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMemberResponseBodyResult extends $tea.Model {
  externUserId?: string;
  avatarUrl?: string;
  accessLevel?: number;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      avatarUrl: 'AvatarUrl',
      accessLevel: 'AccessLevel',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      avatarUrl: 'string',
      accessLevel: 'number',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryInfoResponseBodyResultNamespace extends $tea.Model {
  avatar?: string;
  description?: string;
  state?: string;
  public?: boolean;
  visibilityLevel?: string;
  createdAt?: string;
  path?: string;
  updatedAt?: string;
  name?: string;
  ownerId?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      description: 'Description',
      state: 'State',
      public: 'Public',
      visibilityLevel: 'VisibilityLevel',
      createdAt: 'CreatedAt',
      path: 'Path',
      updatedAt: 'UpdatedAt',
      name: 'Name',
      ownerId: 'OwnerId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      description: 'string',
      state: 'string',
      public: 'boolean',
      visibilityLevel: 'string',
      createdAt: 'string',
      path: 'string',
      updatedAt: 'string',
      name: 'string',
      ownerId: 'number',
      id: 'number',
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

export class GetRepositoryInfoResponseBodyResultPermissions extends $tea.Model {
  projectAccess?: GetRepositoryInfoResponseBodyResultPermissionsProjectAccess;
  groupAccess?: GetRepositoryInfoResponseBodyResultPermissionsGroupAccess;
  static names(): { [key: string]: string } {
    return {
      projectAccess: 'ProjectAccess',
      groupAccess: 'GroupAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectAccess: GetRepositoryInfoResponseBodyResultPermissionsProjectAccess,
      groupAccess: GetRepositoryInfoResponseBodyResultPermissionsGroupAccess,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryInfoResponseBodyResult extends $tea.Model {
  defaultBranch?: string;
  importUrl?: string;
  createdAt?: string;
  webUrl?: string;
  tagList?: string[];
  description?: string;
  public?: boolean;
  pathWithNamespace?: string;
  visibilityLevel?: string;
  name?: string;
  lastActivityAt?: string;
  avatarUrl?: string;
  archive?: boolean;
  namespace?: GetRepositoryInfoResponseBodyResultNamespace;
  demoProjectStatus?: boolean;
  creatorId?: number;
  importStatus?: string;
  httpUrlToRepo?: string;
  permissions?: GetRepositoryInfoResponseBodyResultPermissions;
  nameWithNamespace?: string;
  path?: string;
  accessLevel?: number;
  importFromSubversion?: boolean;
  sshUrlToRepo?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      defaultBranch: 'DefaultBranch',
      importUrl: 'ImportUrl',
      createdAt: 'CreatedAt',
      webUrl: 'WebUrl',
      tagList: 'TagList',
      description: 'Description',
      public: 'Public',
      pathWithNamespace: 'PathWithNamespace',
      visibilityLevel: 'VisibilityLevel',
      name: 'Name',
      lastActivityAt: 'LastActivityAt',
      avatarUrl: 'AvatarUrl',
      archive: 'Archive',
      namespace: 'Namespace',
      demoProjectStatus: 'DemoProjectStatus',
      creatorId: 'CreatorId',
      importStatus: 'ImportStatus',
      httpUrlToRepo: 'HttpUrlToRepo',
      permissions: 'Permissions',
      nameWithNamespace: 'NameWithNamespace',
      path: 'Path',
      accessLevel: 'AccessLevel',
      importFromSubversion: 'ImportFromSubversion',
      sshUrlToRepo: 'SshUrlToRepo',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultBranch: 'string',
      importUrl: 'string',
      createdAt: 'string',
      webUrl: 'string',
      tagList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      public: 'boolean',
      pathWithNamespace: 'string',
      visibilityLevel: 'string',
      name: 'string',
      lastActivityAt: 'string',
      avatarUrl: 'string',
      archive: 'boolean',
      namespace: GetRepositoryInfoResponseBodyResultNamespace,
      demoProjectStatus: 'boolean',
      creatorId: 'number',
      importStatus: 'string',
      httpUrlToRepo: 'string',
      permissions: GetRepositoryInfoResponseBodyResultPermissions,
      nameWithNamespace: 'string',
      path: 'string',
      accessLevel: 'number',
      importFromSubversion: 'boolean',
      sshUrlToRepo: 'string',
      id: 'number',
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
  shortId?: string;
  createdAt?: string;
  message?: string;
  authoredDate?: string;
  signature?: GetRepositoryTagResponseBodyResultCommitSignature;
  parentIds?: string[];
  authorName?: string;
  committerName?: string;
  title?: string;
  authorEmail?: string;
  committerEmail?: string;
  id?: string;
  committedDate?: string;
  static names(): { [key: string]: string } {
    return {
      shortId: 'ShortId',
      createdAt: 'CreatedAt',
      message: 'Message',
      authoredDate: 'AuthoredDate',
      signature: 'Signature',
      parentIds: 'ParentIds',
      authorName: 'AuthorName',
      committerName: 'CommitterName',
      title: 'Title',
      authorEmail: 'AuthorEmail',
      committerEmail: 'CommitterEmail',
      id: 'Id',
      committedDate: 'CommittedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shortId: 'string',
      createdAt: 'string',
      message: 'string',
      authoredDate: 'string',
      signature: GetRepositoryTagResponseBodyResultCommitSignature,
      parentIds: { 'type': 'array', 'itemType': 'string' },
      authorName: 'string',
      committerName: 'string',
      title: 'string',
      authorEmail: 'string',
      committerEmail: 'string',
      id: 'string',
      committedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagResponseBodyResult extends $tea.Model {
  signature?: GetRepositoryTagResponseBodyResultSignature;
  commit?: GetRepositoryTagResponseBodyResultCommit;
  message?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      signature: 'Signature',
      commit: 'Commit',
      message: 'Message',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signature: GetRepositoryTagResponseBodyResultSignature,
      commit: GetRepositoryTagResponseBodyResultCommit,
      message: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponseBodyResult extends $tea.Model {
  email?: string;
  avatarUrl?: string;
  externalUserId?: string;
  name?: string;
  id?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      avatarUrl: 'AvatarUrl',
      externalUserId: 'ExternalUserId',
      name: 'Name',
      id: 'Id',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      avatarUrl: 'string',
      externalUserId: 'string',
      name: 'string',
      id: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMemberResponseBodyResult extends $tea.Model {
  externUserId?: string;
  email?: string;
  avatarUrl?: string;
  state?: string;
  accessLevel?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      email: 'Email',
      avatarUrl: 'AvatarUrl',
      state: 'State',
      accessLevel: 'AccessLevel',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      email: 'string',
      avatarUrl: 'string',
      state: 'string',
      accessLevel: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupRepositoriesResponseBodyResult extends $tea.Model {
  lastActivityAt?: string;
  namespaceId?: number;
  httpCloneUrl?: string;
  archive?: boolean;
  createdAt?: string;
  sshCloneUrl?: string;
  creatorId?: number;
  importStatus?: string;
  webUrl?: string;
  nameWithNamespace?: string;
  pathWithNamespace?: string;
  visibilityLevel?: number;
  path?: string;
  updatedAt?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      lastActivityAt: 'LastActivityAt',
      namespaceId: 'NamespaceId',
      httpCloneUrl: 'HttpCloneUrl',
      archive: 'Archive',
      createdAt: 'CreatedAt',
      sshCloneUrl: 'SshCloneUrl',
      creatorId: 'CreatorId',
      importStatus: 'ImportStatus',
      webUrl: 'WebUrl',
      nameWithNamespace: 'NameWithNamespace',
      pathWithNamespace: 'PathWithNamespace',
      visibilityLevel: 'VisibilityLevel',
      path: 'Path',
      updatedAt: 'UpdatedAt',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastActivityAt: 'string',
      namespaceId: 'number',
      httpCloneUrl: 'string',
      archive: 'boolean',
      createdAt: 'string',
      sshCloneUrl: 'string',
      creatorId: 'number',
      importStatus: 'string',
      webUrl: 'string',
      nameWithNamespace: 'string',
      pathWithNamespace: 'string',
      visibilityLevel: 'number',
      path: 'string',
      updatedAt: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyResult extends $tea.Model {
  type?: string;
  createdAt?: string;
  ownerId?: number;
  parentId?: number;
  webUrl?: string;
  description?: string;
  nameWithNamespace?: string;
  pathWithNamespace?: string;
  path?: string;
  visibilityLevel?: string;
  accessLevel?: number;
  updatedAt?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      createdAt: 'CreatedAt',
      ownerId: 'OwnerId',
      parentId: 'ParentId',
      webUrl: 'WebUrl',
      description: 'Description',
      nameWithNamespace: 'NameWithNamespace',
      pathWithNamespace: 'PathWithNamespace',
      path: 'Path',
      visibilityLevel: 'VisibilityLevel',
      accessLevel: 'AccessLevel',
      updatedAt: 'UpdatedAt',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      createdAt: 'string',
      ownerId: 'number',
      parentId: 'number',
      webUrl: 'string',
      description: 'string',
      nameWithNamespace: 'string',
      pathWithNamespace: 'string',
      path: 'string',
      visibilityLevel: 'string',
      accessLevel: 'number',
      updatedAt: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationsResponseBodyResult extends $tea.Model {
  organizationRole?: string;
  accessLevel?: number;
  organizationName?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationRole: 'OrganizationRole',
      accessLevel: 'AccessLevel',
      organizationName: 'OrganizationName',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationRole: 'string',
      accessLevel: 'number',
      organizationName: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoriesResponseBodyResult extends $tea.Model {
  lastActivityAt?: string;
  namespaceId?: number;
  avatarUrl?: string;
  starCount?: number;
  archive?: boolean;
  createdAt?: string;
  demoProjectStatus?: boolean;
  star?: boolean;
  importStatus?: string;
  webUrl?: string;
  description?: string;
  nameWithNamespace?: string;
  pathWithNamespace?: string;
  path?: string;
  visibilityLevel?: string;
  accessLevel?: number;
  updatedAt?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      lastActivityAt: 'LastActivityAt',
      namespaceId: 'NamespaceId',
      avatarUrl: 'AvatarUrl',
      starCount: 'StarCount',
      archive: 'Archive',
      createdAt: 'CreatedAt',
      demoProjectStatus: 'DemoProjectStatus',
      star: 'Star',
      importStatus: 'ImportStatus',
      webUrl: 'WebUrl',
      description: 'Description',
      nameWithNamespace: 'NameWithNamespace',
      pathWithNamespace: 'PathWithNamespace',
      path: 'Path',
      visibilityLevel: 'VisibilityLevel',
      accessLevel: 'AccessLevel',
      updatedAt: 'UpdatedAt',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastActivityAt: 'string',
      namespaceId: 'number',
      avatarUrl: 'string',
      starCount: 'number',
      archive: 'boolean',
      createdAt: 'string',
      demoProjectStatus: 'boolean',
      star: 'boolean',
      importStatus: 'string',
      webUrl: 'string',
      description: 'string',
      nameWithNamespace: 'string',
      pathWithNamespace: 'string',
      path: 'string',
      visibilityLevel: 'string',
      accessLevel: 'number',
      updatedAt: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryBranchesResponseBodyResultCommitInfo extends $tea.Model {
  shortId?: string;
  authorDate?: string;
  createdAt?: string;
  message?: string;
  parentIds?: string[];
  authorName?: string;
  committerName?: string;
  title?: string;
  authorEmail?: string;
  committerEmail?: string;
  id?: string;
  committedDate?: string;
  static names(): { [key: string]: string } {
    return {
      shortId: 'ShortId',
      authorDate: 'AuthorDate',
      createdAt: 'CreatedAt',
      message: 'Message',
      parentIds: 'ParentIds',
      authorName: 'AuthorName',
      committerName: 'CommitterName',
      title: 'Title',
      authorEmail: 'AuthorEmail',
      committerEmail: 'CommitterEmail',
      id: 'Id',
      committedDate: 'CommittedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shortId: 'string',
      authorDate: 'string',
      createdAt: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      authorName: 'string',
      committerName: 'string',
      title: 'string',
      authorEmail: 'string',
      committerEmail: 'string',
      id: 'string',
      committedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryBranchesResponseBodyResult extends $tea.Model {
  protectedBranch?: boolean;
  commitInfo?: ListRepositoryBranchesResponseBodyResultCommitInfo;
  branchName?: string;
  static names(): { [key: string]: string } {
    return {
      protectedBranch: 'ProtectedBranch',
      commitInfo: 'CommitInfo',
      branchName: 'BranchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectedBranch: 'boolean',
      commitInfo: ListRepositoryBranchesResponseBodyResultCommitInfo,
      branchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryMemberResponseBodyResult extends $tea.Model {
  externUserId?: string;
  email?: string;
  avatarUrl?: string;
  state?: string;
  accessLevel?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      email: 'Email',
      avatarUrl: 'AvatarUrl',
      state: 'State',
      accessLevel: 'AccessLevel',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      email: 'string',
      avatarUrl: 'string',
      state: 'string',
      accessLevel: 'number',
      id: 'number',
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
  shortId?: string;
  createdAt?: string;
  message?: string;
  authoredDate?: string;
  signature?: ListRepositoryTagsResponseBodyResultCommitSignature;
  parentIds?: string[];
  authorName?: string;
  committerName?: string;
  title?: string;
  authorEmail?: string;
  committerEmail?: string;
  id?: string;
  committedDate?: string;
  static names(): { [key: string]: string } {
    return {
      shortId: 'ShortId',
      createdAt: 'CreatedAt',
      message: 'Message',
      authoredDate: 'AuthoredDate',
      signature: 'Signature',
      parentIds: 'ParentIds',
      authorName: 'AuthorName',
      committerName: 'CommitterName',
      title: 'Title',
      authorEmail: 'AuthorEmail',
      committerEmail: 'CommitterEmail',
      id: 'Id',
      committedDate: 'CommittedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shortId: 'string',
      createdAt: 'string',
      message: 'string',
      authoredDate: 'string',
      signature: ListRepositoryTagsResponseBodyResultCommitSignature,
      parentIds: { 'type': 'array', 'itemType': 'string' },
      authorName: 'string',
      committerName: 'string',
      title: 'string',
      authorEmail: 'string',
      committerEmail: 'string',
      id: 'string',
      committedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTagsResponseBodyResult extends $tea.Model {
  signature?: ListRepositoryTagsResponseBodyResultSignature;
  commit?: ListRepositoryTagsResponseBodyResultCommit;
  message?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      signature: 'Signature',
      commit: 'Commit',
      message: 'Message',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signature: ListRepositoryTagsResponseBodyResultSignature,
      commit: ListRepositoryTagsResponseBodyResultCommit,
      message: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTreeResponseBodyResult extends $tea.Model {
  type?: string;
  path?: string;
  mode?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      path: 'Path',
      mode: 'Mode',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      path: 'string',
      mode: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryWebhookResponseBodyResult extends $tea.Model {
  pushEvents?: boolean;
  projectId?: number;
  createdAt?: string;
  tagPushEvents?: boolean;
  url?: string;
  lastTestResult?: string;
  description?: string;
  mergeRequestsEvents?: boolean;
  secretToken?: string;
  noteEvents?: boolean;
  enableSslVerification?: boolean;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      pushEvents: 'PushEvents',
      projectId: 'ProjectId',
      createdAt: 'CreatedAt',
      tagPushEvents: 'TagPushEvents',
      url: 'Url',
      lastTestResult: 'LastTestResult',
      description: 'Description',
      mergeRequestsEvents: 'MergeRequestsEvents',
      secretToken: 'SecretToken',
      noteEvents: 'NoteEvents',
      enableSslVerification: 'EnableSslVerification',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushEvents: 'boolean',
      projectId: 'number',
      createdAt: 'string',
      tagPushEvents: 'boolean',
      url: 'string',
      lastTestResult: 'string',
      description: 'string',
      mergeRequestsEvents: 'boolean',
      secretToken: 'string',
      noteEvents: 'boolean',
      enableSslVerification: 'boolean',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultAssigneeList extends $tea.Model {
  externUserId?: string;
  avatarUrl?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      avatarUrl: 'AvatarUrl',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      avatarUrl: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultAuthor extends $tea.Model {
  externUserId?: string;
  avatarUrl?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      avatarUrl: 'AvatarUrl',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      avatarUrl: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers extends $tea.Model {
  externUserId?: string;
  avatarUrl?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      avatarUrl: 'AvatarUrl',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      avatarUrl: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults extends $tea.Model {
  satisfiedItems?: string[];
  checkStatus?: string;
  checkType?: string;
  unsatisfiedItems?: string[];
  extraUsers?: MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers[];
  checkName?: string;
  static names(): { [key: string]: string } {
    return {
      satisfiedItems: 'SatisfiedItems',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      unsatisfiedItems: 'UnsatisfiedItems',
      extraUsers: 'ExtraUsers',
      checkName: 'CheckName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
      checkStatus: 'string',
      checkType: 'string',
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
      extraUsers: { 'type': 'array', 'itemType': MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers },
      checkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers extends $tea.Model {
  externUserId?: string;
  avatarUrl?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      avatarUrl: 'AvatarUrl',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      avatarUrl: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults extends $tea.Model {
  satisfiedItems?: string[];
  checkStatus?: string;
  checkType?: string;
  unsatisfiedItems?: string[];
  extraUsers?: MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers[];
  checkName?: string;
  static names(): { [key: string]: string } {
    return {
      satisfiedItems: 'SatisfiedItems',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      unsatisfiedItems: 'UnsatisfiedItems',
      extraUsers: 'ExtraUsers',
      checkName: 'CheckName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
      checkStatus: 'string',
      checkType: 'string',
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
      extraUsers: { 'type': 'array', 'itemType': MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers },
      checkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultApproveCheckResult extends $tea.Model {
  totalCheckResult?: string;
  unsatisfiedCheckResults?: MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults[];
  satisfiedCheckResults?: MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults[];
  static names(): { [key: string]: string } {
    return {
      totalCheckResult: 'TotalCheckResult',
      unsatisfiedCheckResults: 'UnsatisfiedCheckResults',
      satisfiedCheckResults: 'SatisfiedCheckResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCheckResult: 'string',
      unsatisfiedCheckResults: { 'type': 'array', 'itemType': MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults },
      satisfiedCheckResults: { 'type': 'array', 'itemType': MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResult extends $tea.Model {
  state?: string;
  behindCommitCount?: number;
  projectId?: number;
  assigneeList?: MergeMergeRequestResponseBodyResultAssigneeList[];
  createdAt?: string;
  author?: MergeMergeRequestResponseBodyResultAuthor;
  acceptedRevision?: string;
  approveCheckResult?: MergeMergeRequestResponseBodyResultApproveCheckResult;
  sourceBranch?: string;
  webUrl?: string;
  description?: string;
  mergeType?: string;
  nameWithNamespace?: string;
  targetBranch?: string;
  aheadCommitCount?: number;
  updatedAt?: string;
  title?: string;
  mergeError?: string;
  mergedRevision?: string;
  id?: number;
  mergeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      behindCommitCount: 'BehindCommitCount',
      projectId: 'ProjectId',
      assigneeList: 'AssigneeList',
      createdAt: 'CreatedAt',
      author: 'Author',
      acceptedRevision: 'AcceptedRevision',
      approveCheckResult: 'ApproveCheckResult',
      sourceBranch: 'SourceBranch',
      webUrl: 'WebUrl',
      description: 'Description',
      mergeType: 'MergeType',
      nameWithNamespace: 'NameWithNamespace',
      targetBranch: 'TargetBranch',
      aheadCommitCount: 'AheadCommitCount',
      updatedAt: 'UpdatedAt',
      title: 'Title',
      mergeError: 'MergeError',
      mergedRevision: 'MergedRevision',
      id: 'Id',
      mergeStatus: 'MergeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      behindCommitCount: 'number',
      projectId: 'number',
      assigneeList: { 'type': 'array', 'itemType': MergeMergeRequestResponseBodyResultAssigneeList },
      createdAt: 'string',
      author: MergeMergeRequestResponseBodyResultAuthor,
      acceptedRevision: 'string',
      approveCheckResult: MergeMergeRequestResponseBodyResultApproveCheckResult,
      sourceBranch: 'string',
      webUrl: 'string',
      description: 'string',
      mergeType: 'string',
      nameWithNamespace: 'string',
      targetBranch: 'string',
      aheadCommitCount: 'number',
      updatedAt: 'string',
      title: 'string',
      mergeError: 'string',
      mergedRevision: 'string',
      id: 'number',
      mergeStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileResponseBodyResult extends $tea.Model {
  filePath?: string;
  branchName?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      branchName: 'BranchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      branchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupMemberResponseBodyResult extends $tea.Model {
  externUserId?: string;
  email?: string;
  avatarUrl?: string;
  state?: string;
  accessLevel?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      email: 'Email',
      avatarUrl: 'AvatarUrl',
      state: 'State',
      accessLevel: 'AccessLevel',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      email: 'string',
      avatarUrl: 'string',
      state: 'string',
      accessLevel: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryMemberResponseBodyResult extends $tea.Model {
  externUserId?: string;
  email?: string;
  avatarUrl?: string;
  state?: string;
  accessLevel?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      email: 'Email',
      avatarUrl: 'AvatarUrl',
      state: 'State',
      accessLevel: 'AccessLevel',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      email: 'string',
      avatarUrl: 'string',
      state: 'string',
      accessLevel: 'number',
      id: 'number',
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

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<AddGroupMemberResponse>(await this.doROARequest("AddGroupMember", "2020-04-14", "HTTPS", "POST", "AK", `/api/v4/groups/${GroupId}/members`, "json", req, runtime), new AddGroupMemberResponse({}));
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

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<AddRepositoryMemberResponse>(await this.doROARequest("AddRepositoryMember", "2020-04-14", "HTTPS", "POST", "AK", `/api/v4/projects/${ProjectId}/members`, "json", req, runtime), new AddRepositoryMemberResponse({}));
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
    return $tea.cast<AddWebhookResponse>(await this.doROARequest("AddWebhook", "2020-04-14", "HTTPS", "POST", "AK", `/api/v3/projects/${ProjectId}/hooks`, "json", req, runtime), new AddWebhookResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateBranchResponse>(await this.doROARequest("CreateBranch", "2020-04-14", "HTTPS", "POST", "AK", `/api/v3/projects/${ProjectId}/repository/branches`, "json", req, runtime), new CreateBranchResponse({}));
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

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateFileResponse>(await this.doROARequest("CreateFile", "2020-04-14", "HTTPS", "POST", "AK", `/api/v3/projects/${ProjectId}/repository/files`, "json", req, runtime), new CreateFileResponse({}));
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
    return $tea.cast<CreateMergeRequestResponse>(await this.doROARequest("CreateMergeRequest", "2020-04-14", "HTTPS", "POST", "AK", `/api/v4/projects/${ProjectId}/merge_requests`, "json", req, runtime), new CreateMergeRequestResponse({}));
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

    if (!Util.isUnset(request.sync)) {
      query["Sync"] = request.sync;
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

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateRepositoryResponse>(await this.doROARequest("CreateRepository", "2020-04-14", "HTTPS", "POST", "AK", `/api/v3/projects`, "json", req, runtime), new CreateRepositoryResponse({}));
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

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateRepositoryGroupResponse>(await this.doROARequest("CreateRepositoryGroup", "2020-04-14", "HTTPS", "POST", "AK", `/api/v3/groups`, "json", req, runtime), new CreateRepositoryGroupResponse({}));
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
    return $tea.cast<CreateTagResponse>(await this.doROARequest("CreateTag", "2020-04-14", "HTTPS", "POST", "AK", `/api/v3/projects/${ProjectId}/repository/tags`, "json", req, runtime), new CreateTagResponse({}));
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
    return $tea.cast<DeleteBranchResponse>(await this.doROARequest("DeleteBranch", "2020-04-14", "HTTPS", "DELETE", "AK", `/api/v3/projects/${ProjectId}/repository/branches/delete`, "json", req, runtime), new DeleteBranchResponse({}));
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

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.commitMessage)) {
      query["CommitMessage"] = request.commitMessage;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteFileResponse>(await this.doROARequest("DeleteFile", "2020-04-14", "HTTPS", "DELETE", "AK", `/api/v3/projects/${ProjectId}/repository/files`, "json", req, runtime), new DeleteFileResponse({}));
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
    return $tea.cast<DeleteGroupMemberResponse>(await this.doROARequest("DeleteGroupMember", "2020-04-14", "HTTPS", "DELETE", "AK", `/api/v3/groups/${GroupId}/members/{UserId}`, "json", req, runtime), new DeleteGroupMemberResponse({}));
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
    return $tea.cast<DeleteRepositoryResponse>(await this.doROARequest("DeleteRepository", "2020-04-14", "HTTPS", "POST", "AK", `/api/v3/projects/${ProjectId}/remove`, "json", req, runtime), new DeleteRepositoryResponse({}));
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
    return $tea.cast<DeleteRepositoryGroupResponse>(await this.doROARequest("DeleteRepositoryGroup", "2020-04-14", "HTTPS", "POST", "AK", `/api/v3/groups/${GroupId}/remove`, "json", req, runtime), new DeleteRepositoryGroupResponse({}));
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
    return $tea.cast<DeleteRepositoryMemberResponse>(await this.doROARequest("DeleteRepositoryMember", "2020-04-14", "HTTPS", "DELETE", "AK", `/api/v3/projects/${ProjectId}/members/{UserId}`, "json", req, runtime), new DeleteRepositoryMemberResponse({}));
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
    return $tea.cast<DeleteRepositoryTagResponse>(await this.doROARequest("DeleteRepositoryTag", "2020-04-14", "HTTPS", "DELETE", "AK", `/api/v3/projects/${ProjectId}/repository/tags/{TagName}`, "json", req, runtime), new DeleteRepositoryTagResponse({}));
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
    return $tea.cast<DeleteRepositoryWebhookResponse>(await this.doROARequest("DeleteRepositoryWebhook", "2020-04-14", "HTTPS", "DELETE", "AK", `/api/v3/projects/${ProjectId}/hooks/{WebhookId}`, "json", req, runtime), new DeleteRepositoryWebhookResponse({}));
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

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    if (!Util.isUnset(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetBranchInfoResponse>(await this.doROARequest("GetBranchInfo", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/projects/${ProjectId}/repository/branches/detail`, "json", req, runtime), new GetBranchInfoResponse({}));
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
    return $tea.cast<GetCodeupOrganizationResponse>(await this.doROARequest("GetCodeupOrganization", "2020-04-14", "HTTPS", "GET", "AK", `/api/v4/organization/${OrganizationIdentity}`, "json", req, runtime), new GetCodeupOrganizationResponse({}));
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

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.ref)) {
      query["Ref"] = request.ref;
    }

    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.to)) {
      query["To"] = request.to;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetFileBlobsResponse>(await this.doROARequest("GetFileBlobs", "2020-04-14", "HTTPS", "GET", "AK", `/api/v4/projects/${ProjectId}/repository/blobs`, "json", req, runtime), new GetFileBlobsResponse({}));
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
    return $tea.cast<GetGroupDetailResponse>(await this.doROARequest("GetGroupDetail", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/groups/detail`, "json", req, runtime), new GetGroupDetailResponse({}));
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
    return $tea.cast<GetProjectMemberResponse>(await this.doROARequest("GetProjectMember", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/projects/${ProjectId}/members/{UserId}`, "json", req, runtime), new GetProjectMemberResponse({}));
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
    return $tea.cast<GetRepositoryInfoResponse>(await this.doROARequest("GetRepositoryInfo", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/projects/info`, "json", req, runtime), new GetRepositoryInfoResponse({}));
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
    return $tea.cast<GetRepositoryTagResponse>(await this.doROARequest("GetRepositoryTag", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/projects/${ProjectId}/repository/tags/{TagName}`, "json", req, runtime), new GetRepositoryTagResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetUserInfoResponse>(await this.doROARequest("GetUserInfo", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/user/current`, "json", req, runtime), new GetUserInfoResponse({}));
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
    return $tea.cast<ListGroupMemberResponse>(await this.doROARequest("ListGroupMember", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/groups/${GroupId}/members`, "json", req, runtime), new ListGroupMemberResponse({}));
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

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.isMember)) {
      query["IsMember"] = request.isMember;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
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
    return $tea.cast<ListGroupRepositoriesResponse>(await this.doROARequest("ListGroupRepositories", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/groups/${Identity}/projects`, "json", req, runtime), new ListGroupRepositoriesResponse({}));
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

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
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

    if (!Util.isUnset(request.includePersonal)) {
      query["IncludePersonal"] = request.includePersonal;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListGroupsResponse>(await this.doROARequest("ListGroups", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/groups/all`, "json", req, runtime), new ListGroupsResponse({}));
  }

  async listOrganizations(request: ListOrganizationsRequest): Promise<ListOrganizationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOrganizationsWithOptions(request, headers, runtime);
  }

  async listOrganizationsWithOptions(request: ListOrganizationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOrganizationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.accessLevel)) {
      query["AccessLevel"] = request.accessLevel;
    }

    if (!Util.isUnset(request.minAccessLevel)) {
      query["MinAccessLevel"] = request.minAccessLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListOrganizationsResponse>(await this.doROARequest("ListOrganizations", "2020-04-14", "HTTPS", "GET", "AK", `/api/v4/organization`, "json", req, runtime), new ListOrganizationsResponse({}));
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

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
    }

    if (!Util.isUnset(request.archive)) {
      query["Archive"] = request.archive;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListRepositoriesResponse>(await this.doROARequest("ListRepositories", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/projects/all`, "json", req, runtime), new ListRepositoriesResponse({}));
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

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListRepositoryBranchesResponse>(await this.doROARequest("ListRepositoryBranches", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/projects/${ProjectId}/repository/branches`, "json", req, runtime), new ListRepositoryBranchesResponse({}));
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

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
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
    return $tea.cast<ListRepositoryMemberResponse>(await this.doROARequest("ListRepositoryMember", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/projects/${ProjectId}/members`, "json", req, runtime), new ListRepositoryMemberResponse({}));
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

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
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

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.showSignature)) {
      query["ShowSignature"] = request.showSignature;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListRepositoryTagsResponse>(await this.doROARequest("ListRepositoryTags", "2020-04-14", "HTTPS", "GET", "AK", `/api/v4/projects/${ProjectId}/repository/tags`, "json", req, runtime), new ListRepositoryTagsResponse({}));
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

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.refName)) {
      query["RefName"] = request.refName;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListRepositoryTreeResponse>(await this.doROARequest("ListRepositoryTree", "2020-04-14", "HTTPS", "GET", "AK", `/api/v4/projects/${ProjectId}/repository/tree`, "json", req, runtime), new ListRepositoryTreeResponse({}));
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
    return $tea.cast<ListRepositoryWebhookResponse>(await this.doROARequest("ListRepositoryWebhook", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/projects/${ProjectId}/hooks`, "json", req, runtime), new ListRepositoryWebhookResponse({}));
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
    return $tea.cast<MergeMergeRequestResponse>(await this.doROARequest("MergeMergeRequest", "2020-04-14", "HTTPS", "PUT", "AK", `/api/v3/projects/${ProjectId}/mergeRequest/{MergeRequestId}/merge`, "json", req, runtime), new MergeMergeRequestResponse({}));
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
    return $tea.cast<UpdateFileResponse>(await this.doROARequest("UpdateFile", "2020-04-14", "HTTPS", "PUT", "AK", `/api/v4/projects/${ProjectId}/repository/files`, "json", req, runtime), new UpdateFileResponse({}));
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
    return $tea.cast<UpdateGroupMemberResponse>(await this.doROARequest("UpdateGroupMember", "2020-04-14", "HTTPS", "PUT", "AK", `/api/v3/groups/${GroupId}/members/{UserId}`, "json", req, runtime), new UpdateGroupMemberResponse({}));
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
    return $tea.cast<UpdateRepositoryMemberResponse>(await this.doROARequest("UpdateRepositoryMember", "2020-04-14", "HTTPS", "PUT", "AK", `/api/v3/projects/${ProjectId}/members/{UserId}`, "json", req, runtime), new UpdateRepositoryMemberResponse({}));
  }

}
