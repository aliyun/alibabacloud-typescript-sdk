// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: DeleteRepositoryMemberResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: CreateRepositoryProtectedBranchResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: CreateRepositoryProtectedBranchResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryProtectedBranchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRepositoryProtectedBranchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRepositoryProtectedBranchResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: CreateMergeRequestResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: DeleteRepositoryResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: GetRepositoryTagResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: UpdateMergeRequestResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: UpdateMergeRequestResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateMergeRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMergeRequestResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: UpdateRepositoryResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: UpdateRepositoryResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRepositoryResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: UpdateMergeRequestCommentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: UpdateMergeRequestCommentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestCommentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateMergeRequestCommentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMergeRequestCommentResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: DeleteBranchResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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

export class ListRepositoryCommitDiffRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  contextLine?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      contextLine: 'ContextLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      contextLine: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCommitDiffResponseBody extends $tea.Model {
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: ListRepositoryCommitDiffResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: { 'type': 'array', 'itemType': ListRepositoryCommitDiffResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCommitDiffResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepositoryCommitDiffResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepositoryCommitDiffResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: number;
  result?: GetRepositoryInfoResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'number',
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: AcceptMergeRequestResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: AcceptMergeRequestResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AcceptMergeRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AcceptMergeRequestResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: DeleteFileResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: DeleteRepositoryProtectedBranchResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: DeleteRepositoryProtectedBranchResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryProtectedBranchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRepositoryProtectedBranchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRepositoryProtectedBranchResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: DeleteRepositoryTagV2ResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: DeleteRepositoryTagV2ResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryTagV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRepositoryTagV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRepositoryTagV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileLastCommitRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  sha?: string;
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      sha: 'Sha',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      sha: 'string',
      filePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileLastCommitResponseBody extends $tea.Model {
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: GetFileLastCommitResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: GetFileLastCommitResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileLastCommitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFileLastCommitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFileLastCommitResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: UpdateFileResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: UpdateRepositoryMemberResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: AddRepositoryMemberResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: CreateSshKeyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: CreateSshKeyResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSshKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSshKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSshKeyResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  total?: number;
  success?: boolean;
  errorCode?: string;
  result?: ListRepositoryTagsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      total: 'Total',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      total: 'number',
      success: 'boolean',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: AddWebhookResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: EnableRepositoryDeployKeyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: EnableRepositoryDeployKeyResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRepositoryDeployKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableRepositoryDeployKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableRepositoryDeployKeyResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: GetUserInfoResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: ListRepositoryTreeResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: DeleteRepositoryGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: DeleteRepositoryWebhookResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  total?: number;
  success?: boolean;
  errorCode?: string;
  result?: ListRepositoryMemberResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      total: 'Total',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      total: 'number',
      success: 'boolean',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: CreateTagResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: GetRepositoryCommitResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: GetRepositoryCommitResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryCommitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRepositoryCommitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRepositoryCommitResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: AddGroupMemberResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: GetBranchInfoResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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

export class ListMergeRequestCommentsRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  fromCommit?: string;
  toCommit?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      fromCommit: 'FromCommit',
      toCommit: 'ToCommit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      fromCommit: 'string',
      toCommit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestCommentsResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  total?: number;
  success?: boolean;
  errorCode?: string;
  result?: ListMergeRequestCommentsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      total: 'number',
      success: 'boolean',
      errorCode: 'string',
      result: { 'type': 'array', 'itemType': ListMergeRequestCommentsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestCommentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMergeRequestCommentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMergeRequestCommentsResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: number;
  result?: CreateRepositoryGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'number',
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: GetMergeRequestDetailResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: GetMergeRequestDetailResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMergeRequestDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMergeRequestDetailResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  total?: number;
  success?: boolean;
  errorCode?: string;
  result?: ListGroupsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      total: 'Total',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      total: 'number',
      success: 'boolean',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: ListRepositoryProtectedBranchResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: { 'type': 'array', 'itemType': ListRepositoryProtectedBranchResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryProtectedBranchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepositoryProtectedBranchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepositoryProtectedBranchResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: ListOrganizationsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: GetProjectMemberResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: CreateFileResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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

export class ListRepositoryCommitsRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  page?: number;
  pageSize?: number;
  search?: string;
  path?: string;
  refName?: string;
  showSignature?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      page: 'Page',
      pageSize: 'PageSize',
      search: 'Search',
      path: 'Path',
      refName: 'RefName',
      showSignature: 'ShowSignature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      search: 'string',
      path: 'string',
      refName: 'string',
      showSignature: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCommitsResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  total?: number;
  success?: boolean;
  errorCode?: string;
  result?: ListRepositoryCommitsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      total: 'number',
      success: 'boolean',
      errorCode: 'string',
      result: { 'type': 'array', 'itemType': ListRepositoryCommitsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCommitsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepositoryCommitsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepositoryCommitsResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: GetMergeRequestApproveStatusResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: GetMergeRequestApproveStatusResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestApproveStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMergeRequestApproveStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMergeRequestApproveStatusResponseBody,
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
  errorMessage?: string;
  total?: number;
  success?: boolean;
  errorCode?: number;
  result?: ListRepositoriesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      total: 'number',
      success: 'boolean',
      errorCode: 'number',
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: UpdateMergeRequestSettingResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: UpdateMergeRequestSettingResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateMergeRequestSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMergeRequestSettingResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  total?: number;
  success?: boolean;
  errorCode?: string;
  result?: ListGroupMemberResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      total: 'Total',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      total: 'number',
      success: 'boolean',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: UpdateGroupMemberResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: CreateMergeRequestCommentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: CreateMergeRequestCommentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestCommentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMergeRequestCommentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMergeRequestCommentResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: CreateRepositoryDeployKeyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: CreateRepositoryDeployKeyResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryDeployKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRepositoryDeployKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRepositoryDeployKeyResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: DeleteRepositoryTagResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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

export class CreateRepositoryRequest extends $tea.Model {
  accessToken?: string;
  sync?: boolean;
  createParentPath?: boolean;
  organizationId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      sync: 'Sync',
      createParentPath: 'CreateParentPath',
      organizationId: 'OrganizationId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      sync: 'boolean',
      createParentPath: 'boolean',
      organizationId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponseBody extends $tea.Model {
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: number;
  result?: CreateRepositoryResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'number',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: GetCodeCompletionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
      result: GetCodeCompletionResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeCompletionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCodeCompletionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCodeCompletionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsRequest extends $tea.Model {
  accessToken?: string;
  organizationId?: string;
  page?: number;
  pageSize?: number;
  groupIdList?: string;
  projectIdList?: string;
  authorCodeupIdList?: string;
  authorIdList?: string;
  assigneeCodeupIdList?: string;
  assigneeIdList?: string;
  subscriberCodeupIdList?: string;
  state?: string;
  search?: string;
  order?: string;
  afterDate?: string;
  beforeDate?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      organizationId: 'OrganizationId',
      page: 'Page',
      pageSize: 'PageSize',
      groupIdList: 'GroupIdList',
      projectIdList: 'ProjectIdList',
      authorCodeupIdList: 'AuthorCodeupIdList',
      authorIdList: 'AuthorIdList',
      assigneeCodeupIdList: 'AssigneeCodeupIdList',
      assigneeIdList: 'AssigneeIdList',
      subscriberCodeupIdList: 'SubscriberCodeupIdList',
      state: 'State',
      search: 'Search',
      order: 'Order',
      afterDate: 'AfterDate',
      beforeDate: 'BeforeDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      groupIdList: 'string',
      projectIdList: 'string',
      authorCodeupIdList: 'string',
      authorIdList: 'string',
      assigneeCodeupIdList: 'string',
      assigneeIdList: 'string',
      subscriberCodeupIdList: 'string',
      state: 'string',
      search: 'string',
      order: 'string',
      afterDate: 'string',
      beforeDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  total?: number;
  success?: boolean;
  errorCode?: string;
  result?: ListMergeRequestsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      total: 'number',
      success: 'boolean',
      errorCode: 'string',
      result: { 'type': 'array', 'itemType': ListMergeRequestsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMergeRequestsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: ListOrganizationSecurityScoresResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: { 'type': 'array', 'itemType': ListOrganizationSecurityScoresResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationSecurityScoresResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOrganizationSecurityScoresResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOrganizationSecurityScoresResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: GetFileBlobsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: MergeMergeRequestResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: DeleteGroupMemberResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: ListRepositoryMemberWithInheritedResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': ListRepositoryMemberWithInheritedResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryMemberWithInheritedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepositoryMemberWithInheritedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepositoryMemberWithInheritedResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: GetGroupDetailResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: GetCodeupOrganizationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: GetOrganizationSecurityCenterStatusResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: GetOrganizationSecurityCenterStatusResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationSecurityCenterStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOrganizationSecurityCenterStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOrganizationSecurityCenterStatusResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  total?: number;
  success?: boolean;
  errorCode?: string;
  result?: ListRepositoryBranchesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      total: 'Total',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      total: 'number',
      success: 'boolean',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  result?: CreateBranchResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  total?: number;
  success?: boolean;
  errorCode?: string;
  result?: ListGroupRepositoriesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      total: 'Total',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      total: 'number',
      success: 'boolean',
      errorCode: 'string',
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: GetRepositoryTagV2ResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: GetRepositoryTagV2ResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRepositoryTagV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRepositoryTagV2ResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: string;
  result?: GetMergeRequestSettingResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      result: GetMergeRequestSettingResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMergeRequestSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMergeRequestSettingResponseBody,
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
  errorMessage?: string;
  requestId?: string;
  total?: number;
  success?: boolean;
  errorCode?: string;
  result?: ListRepositoryWebhookResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      total: 'Total',
      success: 'Success',
      errorCode: 'ErrorCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      total: 'number',
      success: 'boolean',
      errorCode: 'string',
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

export class CreateRepositoryProtectedBranchResponseBodyResultMergeRequestSetting extends $tea.Model {
  mergeRequestMode?: string;
  allowSelfApproval?: boolean;
  isRequireDiscussionProcessed?: boolean;
  required?: boolean;
  isResetApprovalWhenNewPush?: boolean;
  minimualApproval?: number;
  defaultAssignees?: string[];
  allowMergeRequestRoles?: number[];
  static names(): { [key: string]: string } {
    return {
      mergeRequestMode: 'MergeRequestMode',
      allowSelfApproval: 'AllowSelfApproval',
      isRequireDiscussionProcessed: 'IsRequireDiscussionProcessed',
      required: 'Required',
      isResetApprovalWhenNewPush: 'IsResetApprovalWhenNewPush',
      minimualApproval: 'MinimualApproval',
      defaultAssignees: 'DefaultAssignees',
      allowMergeRequestRoles: 'AllowMergeRequestRoles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mergeRequestMode: 'string',
      allowSelfApproval: 'boolean',
      isRequireDiscussionProcessed: 'boolean',
      required: 'boolean',
      isResetApprovalWhenNewPush: 'boolean',
      minimualApproval: 'number',
      defaultAssignees: { 'type': 'array', 'itemType': 'string' },
      allowMergeRequestRoles: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryProtectedBranchResponseBodyResultTestSettingCodingGuidelinesDetection extends $tea.Model {
  message?: string;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryProtectedBranchResponseBodyResultTestSettingSensitiveInfoDetection extends $tea.Model {
  message?: string;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      enabled: 'boolean',
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

export class CreateRepositoryProtectedBranchResponseBodyResultTestSetting extends $tea.Model {
  required?: boolean;
  codingGuidelinesDetection?: CreateRepositoryProtectedBranchResponseBodyResultTestSettingCodingGuidelinesDetection;
  sensitiveInfoDetection?: CreateRepositoryProtectedBranchResponseBodyResultTestSettingSensitiveInfoDetection;
  checkConfig?: CreateRepositoryProtectedBranchResponseBodyResultTestSettingCheckConfig;
  static names(): { [key: string]: string } {
    return {
      required: 'Required',
      codingGuidelinesDetection: 'CodingGuidelinesDetection',
      sensitiveInfoDetection: 'SensitiveInfoDetection',
      checkConfig: 'CheckConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      required: 'boolean',
      codingGuidelinesDetection: CreateRepositoryProtectedBranchResponseBodyResultTestSettingCodingGuidelinesDetection,
      sensitiveInfoDetection: CreateRepositoryProtectedBranchResponseBodyResultTestSettingSensitiveInfoDetection,
      checkConfig: CreateRepositoryProtectedBranchResponseBodyResultTestSettingCheckConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryProtectedBranchResponseBodyResult extends $tea.Model {
  branch?: string;
  id?: number;
  allowPushRoles?: number[];
  allowMergeRoles?: number[];
  mergeRequestSetting?: CreateRepositoryProtectedBranchResponseBodyResultMergeRequestSetting;
  testSetting?: CreateRepositoryProtectedBranchResponseBodyResultTestSetting;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      id: 'Id',
      allowPushRoles: 'AllowPushRoles',
      allowMergeRoles: 'AllowMergeRoles',
      mergeRequestSetting: 'MergeRequestSetting',
      testSetting: 'TestSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      id: 'number',
      allowPushRoles: { 'type': 'array', 'itemType': 'number' },
      allowMergeRoles: { 'type': 'array', 'itemType': 'number' },
      mergeRequestSetting: CreateRepositoryProtectedBranchResponseBodyResultMergeRequestSetting,
      testSetting: CreateRepositoryProtectedBranchResponseBodyResultTestSetting,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultAssigneeList extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultAuthor extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults extends $tea.Model {
  checkStatus?: string;
  checkType?: string;
  checkName?: string;
  extraUsers?: CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers[];
  unsatisfiedItems?: string[];
  satisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      checkName: 'CheckName',
      extraUsers: 'ExtraUsers',
      unsatisfiedItems: 'UnsatisfiedItems',
      satisfiedItems: 'SatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkType: 'string',
      checkName: 'string',
      extraUsers: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults extends $tea.Model {
  checkStatus?: string;
  checkType?: string;
  checkName?: string;
  extraUsers?: CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers[];
  unsatisfiedItems?: string[];
  satisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      checkName: 'CheckName',
      extraUsers: 'ExtraUsers',
      unsatisfiedItems: 'UnsatisfiedItems',
      satisfiedItems: 'SatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkType: 'string',
      checkName: 'string',
      extraUsers: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResultApproveCheckResult extends $tea.Model {
  totalCheckResult?: string;
  satisfiedCheckResults?: CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults[];
  unsatisfiedCheckResults?: CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults[];
  static names(): { [key: string]: string } {
    return {
      totalCheckResult: 'TotalCheckResult',
      satisfiedCheckResults: 'SatisfiedCheckResults',
      unsatisfiedCheckResults: 'UnsatisfiedCheckResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCheckResult: 'string',
      satisfiedCheckResults: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults },
      unsatisfiedCheckResults: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestResponseBodyResult extends $tea.Model {
  behindCommitCount?: number;
  state?: string;
  projectId?: number;
  createdAt?: string;
  acceptedRevision?: string;
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
  assigneeList?: CreateMergeRequestResponseBodyResultAssigneeList[];
  author?: CreateMergeRequestResponseBodyResultAuthor;
  approveCheckResult?: CreateMergeRequestResponseBodyResultApproveCheckResult;
  static names(): { [key: string]: string } {
    return {
      behindCommitCount: 'BehindCommitCount',
      state: 'State',
      projectId: 'ProjectId',
      createdAt: 'CreatedAt',
      acceptedRevision: 'AcceptedRevision',
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
      assigneeList: 'AssigneeList',
      author: 'Author',
      approveCheckResult: 'ApproveCheckResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      behindCommitCount: 'number',
      state: 'string',
      projectId: 'number',
      createdAt: 'string',
      acceptedRevision: 'string',
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
      assigneeList: { 'type': 'array', 'itemType': CreateMergeRequestResponseBodyResultAssigneeList },
      author: CreateMergeRequestResponseBodyResultAuthor,
      approveCheckResult: CreateMergeRequestResponseBodyResultApproveCheckResult,
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

export class GetRepositoryTagResponseBodyResultCommitSignature extends $tea.Model {
  verificationStatus?: string;
  gpgKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      verificationStatus: 'VerificationStatus',
      gpgKeyId: 'GpgKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationStatus: 'string',
      gpgKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagResponseBodyResultCommit extends $tea.Model {
  shortId?: string;
  authorName?: string;
  createdAt?: string;
  message?: string;
  authoredDate?: string;
  committerName?: string;
  title?: string;
  authorEmail?: string;
  committerEmail?: string;
  id?: string;
  committedDate?: string;
  parentIds?: string[];
  signature?: GetRepositoryTagResponseBodyResultCommitSignature;
  static names(): { [key: string]: string } {
    return {
      shortId: 'ShortId',
      authorName: 'AuthorName',
      createdAt: 'CreatedAt',
      message: 'Message',
      authoredDate: 'AuthoredDate',
      committerName: 'CommitterName',
      title: 'Title',
      authorEmail: 'AuthorEmail',
      committerEmail: 'CommitterEmail',
      id: 'Id',
      committedDate: 'CommittedDate',
      parentIds: 'ParentIds',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shortId: 'string',
      authorName: 'string',
      createdAt: 'string',
      message: 'string',
      authoredDate: 'string',
      committerName: 'string',
      title: 'string',
      authorEmail: 'string',
      committerEmail: 'string',
      id: 'string',
      committedDate: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      signature: GetRepositoryTagResponseBodyResultCommitSignature,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagResponseBodyResultSignature extends $tea.Model {
  verificationStatus?: string;
  gpgKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      verificationStatus: 'VerificationStatus',
      gpgKeyId: 'GpgKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationStatus: 'string',
      gpgKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagResponseBodyResult extends $tea.Model {
  message?: string;
  name?: string;
  id?: string;
  commit?: GetRepositoryTagResponseBodyResultCommit;
  signature?: GetRepositoryTagResponseBodyResultSignature;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      id: 'Id',
      commit: 'Commit',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      id: 'string',
      commit: GetRepositoryTagResponseBodyResultCommit,
      signature: GetRepositoryTagResponseBodyResultSignature,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBodyResultAssigneeList extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults extends $tea.Model {
  checkStatus?: string;
  checkType?: string;
  checkName?: string;
  extraUsers?: UpdateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers[];
  unsatisfiedItems?: string[];
  satisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      checkName: 'CheckName',
      extraUsers: 'ExtraUsers',
      unsatisfiedItems: 'UnsatisfiedItems',
      satisfiedItems: 'SatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkType: 'string',
      checkName: 'string',
      extraUsers: { 'type': 'array', 'itemType': UpdateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults extends $tea.Model {
  checkStatus?: string;
  checkType?: string;
  checkName?: string;
  extraUsers?: UpdateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers[];
  unsatisfiedItems?: string[];
  satisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      checkName: 'CheckName',
      extraUsers: 'ExtraUsers',
      unsatisfiedItems: 'UnsatisfiedItems',
      satisfiedItems: 'SatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkType: 'string',
      checkName: 'string',
      extraUsers: { 'type': 'array', 'itemType': UpdateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBodyResultApproveCheckResult extends $tea.Model {
  totalCheckResult?: string;
  satisfiedCheckResults?: UpdateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults[];
  unsatisfiedCheckResults?: UpdateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults[];
  static names(): { [key: string]: string } {
    return {
      totalCheckResult: 'TotalCheckResult',
      satisfiedCheckResults: 'SatisfiedCheckResults',
      unsatisfiedCheckResults: 'UnsatisfiedCheckResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCheckResult: 'string',
      satisfiedCheckResults: { 'type': 'array', 'itemType': UpdateMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults },
      unsatisfiedCheckResults: { 'type': 'array', 'itemType': UpdateMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBodyResultAuthor extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMergeRequestResponseBodyResult extends $tea.Model {
  state?: string;
  behindCommitCount?: number;
  projectId?: number;
  createdAt?: string;
  acceptedRevision?: string;
  sourceBranch?: string;
  webUrl?: string;
  description?: string;
  nameWithNamespace?: string;
  mergeType?: string;
  targetBranch?: string;
  aheadCommitCount?: number;
  updatedAt?: string;
  title?: string;
  mergeError?: string;
  mergedRevision?: string;
  id?: number;
  mergeStatus?: string;
  assigneeList?: UpdateMergeRequestResponseBodyResultAssigneeList[];
  approveCheckResult?: UpdateMergeRequestResponseBodyResultApproveCheckResult;
  author?: UpdateMergeRequestResponseBodyResultAuthor;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      behindCommitCount: 'BehindCommitCount',
      projectId: 'ProjectId',
      createdAt: 'CreatedAt',
      acceptedRevision: 'AcceptedRevision',
      sourceBranch: 'SourceBranch',
      webUrl: 'WebUrl',
      description: 'Description',
      nameWithNamespace: 'NameWithNamespace',
      mergeType: 'MergeType',
      targetBranch: 'TargetBranch',
      aheadCommitCount: 'AheadCommitCount',
      updatedAt: 'UpdatedAt',
      title: 'Title',
      mergeError: 'MergeError',
      mergedRevision: 'MergedRevision',
      id: 'Id',
      mergeStatus: 'MergeStatus',
      assigneeList: 'AssigneeList',
      approveCheckResult: 'ApproveCheckResult',
      author: 'Author',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      behindCommitCount: 'number',
      projectId: 'number',
      createdAt: 'string',
      acceptedRevision: 'string',
      sourceBranch: 'string',
      webUrl: 'string',
      description: 'string',
      nameWithNamespace: 'string',
      mergeType: 'string',
      targetBranch: 'string',
      aheadCommitCount: 'number',
      updatedAt: 'string',
      title: 'string',
      mergeError: 'string',
      mergedRevision: 'string',
      id: 'number',
      mergeStatus: 'string',
      assigneeList: { 'type': 'array', 'itemType': UpdateMergeRequestResponseBodyResultAssigneeList },
      approveCheckResult: UpdateMergeRequestResponseBodyResultApproveCheckResult,
      author: UpdateMergeRequestResponseBodyResultAuthor,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryResponseBodyResultNamespace extends $tea.Model {
  avatar?: string;
  description?: string;
  public?: boolean;
  visibilityLevel?: string;
  path?: string;
  createdAt?: string;
  updatedAt?: string;
  name?: string;
  ownerId?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      description: 'Description',
      public: 'Public',
      visibilityLevel: 'VisibilityLevel',
      path: 'Path',
      createdAt: 'CreatedAt',
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
      public: 'boolean',
      visibilityLevel: 'string',
      path: 'string',
      createdAt: 'string',
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

export class UpdateRepositoryResponseBodyResult extends $tea.Model {
  lastActivityAt?: string;
  defaultBranch?: string;
  avatarUrl?: string;
  archive?: boolean;
  createdAt?: string;
  creatorId?: number;
  httpUrlToRepo?: string;
  webUrl?: string;
  description?: string;
  nameWithNamespace?: string;
  pathWithNamespace?: string;
  visibilityLevel?: string;
  path?: string;
  sshUrlToRepo?: string;
  name?: string;
  id?: number;
  namespace?: UpdateRepositoryResponseBodyResultNamespace;
  static names(): { [key: string]: string } {
    return {
      lastActivityAt: 'LastActivityAt',
      defaultBranch: 'DefaultBranch',
      avatarUrl: 'AvatarUrl',
      archive: 'Archive',
      createdAt: 'CreatedAt',
      creatorId: 'CreatorId',
      httpUrlToRepo: 'HttpUrlToRepo',
      webUrl: 'WebUrl',
      description: 'Description',
      nameWithNamespace: 'NameWithNamespace',
      pathWithNamespace: 'PathWithNamespace',
      visibilityLevel: 'VisibilityLevel',
      path: 'Path',
      sshUrlToRepo: 'SshUrlToRepo',
      name: 'Name',
      id: 'Id',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastActivityAt: 'string',
      defaultBranch: 'string',
      avatarUrl: 'string',
      archive: 'boolean',
      createdAt: 'string',
      creatorId: 'number',
      httpUrlToRepo: 'string',
      webUrl: 'string',
      description: 'string',
      nameWithNamespace: 'string',
      pathWithNamespace: 'string',
      visibilityLevel: 'string',
      path: 'string',
      sshUrlToRepo: 'string',
      name: 'string',
      id: 'number',
      namespace: UpdateRepositoryResponseBodyResultNamespace,
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

export class ListRepositoryCommitDiffResponseBodyResult extends $tea.Model {
  deletedFile?: boolean;
  diff?: string;
  oldPath?: string;
  oldId?: string;
  BMode?: string;
  isOldLfs?: boolean;
  isNewLfs?: boolean;
  renamedFile?: boolean;
  newFile?: boolean;
  newId?: string;
  isBinary?: boolean;
  newPath?: string;
  AMode?: string;
  static names(): { [key: string]: string } {
    return {
      deletedFile: 'DeletedFile',
      diff: 'Diff',
      oldPath: 'OldPath',
      oldId: 'OldId',
      BMode: 'BMode',
      isOldLfs: 'IsOldLfs',
      isNewLfs: 'IsNewLfs',
      renamedFile: 'RenamedFile',
      newFile: 'NewFile',
      newId: 'NewId',
      isBinary: 'IsBinary',
      newPath: 'NewPath',
      AMode: 'AMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletedFile: 'boolean',
      diff: 'string',
      oldPath: 'string',
      oldId: 'string',
      BMode: 'string',
      isOldLfs: 'boolean',
      isNewLfs: 'boolean',
      renamedFile: 'boolean',
      newFile: 'boolean',
      newId: 'string',
      isBinary: 'boolean',
      newPath: 'string',
      AMode: 'string',
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
  lastActivityAt?: string;
  defaultBranch?: string;
  avatarUrl?: string;
  archive?: boolean;
  importUrl?: string;
  createdAt?: string;
  demoProjectStatus?: boolean;
  creatorId?: number;
  importStatus?: string;
  httpUrlToRepo?: string;
  webUrl?: string;
  description?: string;
  nameWithNamespace?: string;
  public?: boolean;
  pathWithNamespace?: string;
  path?: string;
  visibilityLevel?: string;
  accessLevel?: number;
  importFromSubversion?: boolean;
  sshUrlToRepo?: string;
  name?: string;
  id?: number;
  tagList?: string[];
  namespace?: GetRepositoryInfoResponseBodyResultNamespace;
  permissions?: GetRepositoryInfoResponseBodyResultPermissions;
  static names(): { [key: string]: string } {
    return {
      lastActivityAt: 'LastActivityAt',
      defaultBranch: 'DefaultBranch',
      avatarUrl: 'AvatarUrl',
      archive: 'Archive',
      importUrl: 'ImportUrl',
      createdAt: 'CreatedAt',
      demoProjectStatus: 'DemoProjectStatus',
      creatorId: 'CreatorId',
      importStatus: 'ImportStatus',
      httpUrlToRepo: 'HttpUrlToRepo',
      webUrl: 'WebUrl',
      description: 'Description',
      nameWithNamespace: 'NameWithNamespace',
      public: 'Public',
      pathWithNamespace: 'PathWithNamespace',
      path: 'Path',
      visibilityLevel: 'VisibilityLevel',
      accessLevel: 'AccessLevel',
      importFromSubversion: 'ImportFromSubversion',
      sshUrlToRepo: 'SshUrlToRepo',
      name: 'Name',
      id: 'Id',
      tagList: 'TagList',
      namespace: 'Namespace',
      permissions: 'Permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastActivityAt: 'string',
      defaultBranch: 'string',
      avatarUrl: 'string',
      archive: 'boolean',
      importUrl: 'string',
      createdAt: 'string',
      demoProjectStatus: 'boolean',
      creatorId: 'number',
      importStatus: 'string',
      httpUrlToRepo: 'string',
      webUrl: 'string',
      description: 'string',
      nameWithNamespace: 'string',
      public: 'boolean',
      pathWithNamespace: 'string',
      path: 'string',
      visibilityLevel: 'string',
      accessLevel: 'number',
      importFromSubversion: 'boolean',
      sshUrlToRepo: 'string',
      name: 'string',
      id: 'number',
      tagList: { 'type': 'array', 'itemType': 'string' },
      namespace: GetRepositoryInfoResponseBodyResultNamespace,
      permissions: GetRepositoryInfoResponseBodyResultPermissions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBodyResultAssigneeList extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults extends $tea.Model {
  checkStatus?: string;
  checkType?: string;
  checkName?: string;
  extraUsers?: AcceptMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers[];
  unsatisfiedItems?: string[];
  satisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      checkName: 'CheckName',
      extraUsers: 'ExtraUsers',
      unsatisfiedItems: 'UnsatisfiedItems',
      satisfiedItems: 'SatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkType: 'string',
      checkName: 'string',
      extraUsers: { 'type': 'array', 'itemType': AcceptMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults extends $tea.Model {
  checkStatus?: string;
  checkType?: string;
  checkName?: string;
  extraUsers?: AcceptMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers[];
  unsatisfiedItems?: string[];
  satisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      checkName: 'CheckName',
      extraUsers: 'ExtraUsers',
      unsatisfiedItems: 'UnsatisfiedItems',
      satisfiedItems: 'SatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkType: 'string',
      checkName: 'string',
      extraUsers: { 'type': 'array', 'itemType': AcceptMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBodyResultApproveCheckResult extends $tea.Model {
  totalCheckResult?: string;
  satisfiedCheckResults?: AcceptMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults[];
  unsatisfiedCheckResults?: AcceptMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults[];
  static names(): { [key: string]: string } {
    return {
      totalCheckResult: 'TotalCheckResult',
      satisfiedCheckResults: 'SatisfiedCheckResults',
      unsatisfiedCheckResults: 'UnsatisfiedCheckResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCheckResult: 'string',
      satisfiedCheckResults: { 'type': 'array', 'itemType': AcceptMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults },
      unsatisfiedCheckResults: { 'type': 'array', 'itemType': AcceptMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBodyResultAuthor extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMergeRequestResponseBodyResult extends $tea.Model {
  state?: string;
  behindCommitCount?: number;
  projectId?: number;
  createdAt?: string;
  acceptedRevision?: string;
  sourceBranch?: string;
  webUrl?: string;
  description?: string;
  nameWithNamespace?: string;
  mergeType?: string;
  targetBranch?: string;
  aheadCommitCount?: number;
  updatedAt?: string;
  title?: string;
  mergeError?: string;
  mergedRevision?: string;
  id?: number;
  mergeStatus?: string;
  assigneeList?: AcceptMergeRequestResponseBodyResultAssigneeList[];
  approveCheckResult?: AcceptMergeRequestResponseBodyResultApproveCheckResult;
  author?: AcceptMergeRequestResponseBodyResultAuthor;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      behindCommitCount: 'BehindCommitCount',
      projectId: 'ProjectId',
      createdAt: 'CreatedAt',
      acceptedRevision: 'AcceptedRevision',
      sourceBranch: 'SourceBranch',
      webUrl: 'WebUrl',
      description: 'Description',
      nameWithNamespace: 'NameWithNamespace',
      mergeType: 'MergeType',
      targetBranch: 'TargetBranch',
      aheadCommitCount: 'AheadCommitCount',
      updatedAt: 'UpdatedAt',
      title: 'Title',
      mergeError: 'MergeError',
      mergedRevision: 'MergedRevision',
      id: 'Id',
      mergeStatus: 'MergeStatus',
      assigneeList: 'AssigneeList',
      approveCheckResult: 'ApproveCheckResult',
      author: 'Author',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      behindCommitCount: 'number',
      projectId: 'number',
      createdAt: 'string',
      acceptedRevision: 'string',
      sourceBranch: 'string',
      webUrl: 'string',
      description: 'string',
      nameWithNamespace: 'string',
      mergeType: 'string',
      targetBranch: 'string',
      aheadCommitCount: 'number',
      updatedAt: 'string',
      title: 'string',
      mergeError: 'string',
      mergedRevision: 'string',
      id: 'number',
      mergeStatus: 'string',
      assigneeList: { 'type': 'array', 'itemType': AcceptMergeRequestResponseBodyResultAssigneeList },
      approveCheckResult: AcceptMergeRequestResponseBodyResultApproveCheckResult,
      author: AcceptMergeRequestResponseBodyResultAuthor,
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

export class GetFileLastCommitResponseBodyResultSignature extends $tea.Model {
  verificationStatus?: string;
  gpgKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      verificationStatus: 'VerificationStatus',
      gpgKeyId: 'GpgKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationStatus: 'string',
      gpgKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileLastCommitResponseBodyResult extends $tea.Model {
  shortId?: string;
  authorName?: string;
  authorDate?: string;
  createdAt?: string;
  message?: string;
  title?: string;
  committerName?: string;
  authorEmail?: string;
  id?: string;
  committerEmail?: string;
  committedDate?: string;
  parentIds?: string[];
  signature?: GetFileLastCommitResponseBodyResultSignature;
  static names(): { [key: string]: string } {
    return {
      shortId: 'ShortId',
      authorName: 'AuthorName',
      authorDate: 'AuthorDate',
      createdAt: 'CreatedAt',
      message: 'Message',
      title: 'Title',
      committerName: 'CommitterName',
      authorEmail: 'AuthorEmail',
      id: 'Id',
      committerEmail: 'CommitterEmail',
      committedDate: 'CommittedDate',
      parentIds: 'ParentIds',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shortId: 'string',
      authorName: 'string',
      authorDate: 'string',
      createdAt: 'string',
      message: 'string',
      title: 'string',
      committerName: 'string',
      authorEmail: 'string',
      id: 'string',
      committerEmail: 'string',
      committedDate: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      signature: GetFileLastCommitResponseBodyResultSignature,
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

export class CreateSshKeyResponseBodyResult extends $tea.Model {
  key?: string;
  fingerPrint?: string;
  createdAt?: string;
  title?: string;
  keyScope?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      fingerPrint: 'FingerPrint',
      createdAt: 'CreatedAt',
      title: 'Title',
      keyScope: 'KeyScope',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      fingerPrint: 'string',
      createdAt: 'string',
      title: 'string',
      keyScope: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTagsResponseBodyResultCommitSignature extends $tea.Model {
  verificationStatus?: string;
  gpgKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      verificationStatus: 'VerificationStatus',
      gpgKeyId: 'GpgKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationStatus: 'string',
      gpgKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTagsResponseBodyResultCommit extends $tea.Model {
  shortId?: string;
  authorName?: string;
  createdAt?: string;
  message?: string;
  authoredDate?: string;
  committerName?: string;
  title?: string;
  authorEmail?: string;
  committerEmail?: string;
  id?: string;
  committedDate?: string;
  parentIds?: string[];
  signature?: ListRepositoryTagsResponseBodyResultCommitSignature;
  static names(): { [key: string]: string } {
    return {
      shortId: 'ShortId',
      authorName: 'AuthorName',
      createdAt: 'CreatedAt',
      message: 'Message',
      authoredDate: 'AuthoredDate',
      committerName: 'CommitterName',
      title: 'Title',
      authorEmail: 'AuthorEmail',
      committerEmail: 'CommitterEmail',
      id: 'Id',
      committedDate: 'CommittedDate',
      parentIds: 'ParentIds',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shortId: 'string',
      authorName: 'string',
      createdAt: 'string',
      message: 'string',
      authoredDate: 'string',
      committerName: 'string',
      title: 'string',
      authorEmail: 'string',
      committerEmail: 'string',
      id: 'string',
      committedDate: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      signature: ListRepositoryTagsResponseBodyResultCommitSignature,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTagsResponseBodyResultSignature extends $tea.Model {
  verificationStatus?: string;
  gpgKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      verificationStatus: 'VerificationStatus',
      gpgKeyId: 'GpgKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationStatus: 'string',
      gpgKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryTagsResponseBodyResult extends $tea.Model {
  message?: string;
  name?: string;
  id?: string;
  commit?: ListRepositoryTagsResponseBodyResultCommit;
  signature?: ListRepositoryTagsResponseBodyResultSignature;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      id: 'Id',
      commit: 'Commit',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      id: 'string',
      commit: ListRepositoryTagsResponseBodyResultCommit,
      signature: ListRepositoryTagsResponseBodyResultSignature,
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
  url?: string;
  issuesEvents?: boolean;
  tagPushEvents?: boolean;
  lastTestResult?: string;
  description?: string;
  mergeRequestsEvents?: boolean;
  secretToken?: string;
  noteEvents?: boolean;
  id?: number;
  enableSslVerification?: boolean;
  static names(): { [key: string]: string } {
    return {
      pushEvents: 'PushEvents',
      buildEvents: 'BuildEvents',
      projectId: 'ProjectId',
      createdAt: 'CreatedAt',
      url: 'Url',
      issuesEvents: 'IssuesEvents',
      tagPushEvents: 'TagPushEvents',
      lastTestResult: 'LastTestResult',
      description: 'Description',
      mergeRequestsEvents: 'MergeRequestsEvents',
      secretToken: 'SecretToken',
      noteEvents: 'NoteEvents',
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
      url: 'string',
      issuesEvents: 'boolean',
      tagPushEvents: 'boolean',
      lastTestResult: 'string',
      description: 'string',
      mergeRequestsEvents: 'boolean',
      secretToken: 'string',
      noteEvents: 'boolean',
      id: 'number',
      enableSslVerification: 'boolean',
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

export class DeleteRepositoryWebhookResponseBodyResult extends $tea.Model {
  pushEvents?: boolean;
  projectId?: number;
  createdAt?: string;
  url?: string;
  tagPushEvents?: boolean;
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
      projectId: 'ProjectId',
      createdAt: 'CreatedAt',
      url: 'Url',
      tagPushEvents: 'TagPushEvents',
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
      projectId: 'number',
      createdAt: 'string',
      url: 'string',
      tagPushEvents: 'boolean',
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

export class ListRepositoryMemberResponseBodyResult extends $tea.Model {
  externUserId?: string;
  email?: string;
  avatarUrl?: string;
  state?: string;
  accessLevel?: number;
  name?: string;
  id?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      email: 'Email',
      avatarUrl: 'AvatarUrl',
      state: 'State',
      accessLevel: 'AccessLevel',
      name: 'Name',
      id: 'Id',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      email: 'string',
      avatarUrl: 'string',
      state: 'string',
      accessLevel: 'number',
      name: 'string',
      id: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponseBodyResultCommitInfo extends $tea.Model {
  shortId?: string;
  authorName?: string;
  createdAt?: string;
  message?: string;
  authoredDate?: string;
  committerName?: string;
  title?: string;
  authorEmail?: string;
  committerEmail?: string;
  id?: string;
  committedDate?: string;
  parentIds?: string[];
  static names(): { [key: string]: string } {
    return {
      shortId: 'ShortId',
      authorName: 'AuthorName',
      createdAt: 'CreatedAt',
      message: 'Message',
      authoredDate: 'AuthoredDate',
      committerName: 'CommitterName',
      title: 'Title',
      authorEmail: 'AuthorEmail',
      committerEmail: 'CommitterEmail',
      id: 'Id',
      committedDate: 'CommittedDate',
      parentIds: 'ParentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shortId: 'string',
      authorName: 'string',
      createdAt: 'string',
      message: 'string',
      authoredDate: 'string',
      committerName: 'string',
      title: 'string',
      authorEmail: 'string',
      committerEmail: 'string',
      id: 'string',
      committedDate: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
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
  name?: string;
  message?: string;
  commitInfo?: CreateTagResponseBodyResultCommitInfo;
  release?: CreateTagResponseBodyResultRelease;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      message: 'Message',
      commitInfo: 'CommitInfo',
      release: 'Release',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      message: 'string',
      commitInfo: CreateTagResponseBodyResultCommitInfo,
      release: CreateTagResponseBodyResultRelease,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryCommitResponseBodyResultSignature extends $tea.Model {
  verificationStatus?: string;
  gpgKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      verificationStatus: 'VerificationStatus',
      gpgKeyId: 'GpgKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationStatus: 'string',
      gpgKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryCommitResponseBodyResult extends $tea.Model {
  shortId?: string;
  authorName?: string;
  authorDate?: string;
  createdAt?: string;
  message?: string;
  title?: string;
  committerName?: string;
  authorEmail?: string;
  id?: string;
  committerEmail?: string;
  committedDate?: string;
  parentIds?: string[];
  signature?: GetRepositoryCommitResponseBodyResultSignature;
  static names(): { [key: string]: string } {
    return {
      shortId: 'ShortId',
      authorName: 'AuthorName',
      authorDate: 'AuthorDate',
      createdAt: 'CreatedAt',
      message: 'Message',
      title: 'Title',
      committerName: 'CommitterName',
      authorEmail: 'AuthorEmail',
      id: 'Id',
      committerEmail: 'CommitterEmail',
      committedDate: 'CommittedDate',
      parentIds: 'ParentIds',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shortId: 'string',
      authorName: 'string',
      authorDate: 'string',
      createdAt: 'string',
      message: 'string',
      title: 'string',
      committerName: 'string',
      authorEmail: 'string',
      id: 'string',
      committerEmail: 'string',
      committedDate: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      signature: GetRepositoryCommitResponseBodyResultSignature,
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

export class GetBranchInfoResponseBodyResultCommitInfo extends $tea.Model {
  shortId?: string;
  authorName?: string;
  authorDate?: string;
  createdAt?: string;
  message?: string;
  committerName?: string;
  title?: string;
  authorEmail?: string;
  committerEmail?: string;
  id?: string;
  committedDate?: string;
  parentIds?: string[];
  static names(): { [key: string]: string } {
    return {
      shortId: 'ShortId',
      authorName: 'AuthorName',
      authorDate: 'AuthorDate',
      createdAt: 'CreatedAt',
      message: 'Message',
      committerName: 'CommitterName',
      title: 'Title',
      authorEmail: 'AuthorEmail',
      committerEmail: 'CommitterEmail',
      id: 'Id',
      committedDate: 'CommittedDate',
      parentIds: 'ParentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shortId: 'string',
      authorName: 'string',
      authorDate: 'string',
      createdAt: 'string',
      message: 'string',
      committerName: 'string',
      title: 'string',
      authorEmail: 'string',
      committerEmail: 'string',
      id: 'string',
      committedDate: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBranchInfoResponseBodyResult extends $tea.Model {
  protectedBranch?: boolean;
  branchName?: string;
  commitInfo?: GetBranchInfoResponseBodyResultCommitInfo;
  static names(): { [key: string]: string } {
    return {
      protectedBranch: 'ProtectedBranch',
      branchName: 'BranchName',
      commitInfo: 'CommitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectedBranch: 'boolean',
      branchName: 'string',
      commitInfo: GetBranchInfoResponseBodyResultCommitInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestCommentsResponseBodyResultAuthor extends $tea.Model {
  externUserId?: string;
  email?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      email: 'Email',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      email: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestCommentsResponseBodyResult extends $tea.Model {
  outDated?: boolean;
  projectId?: number;
  rangeContext?: string;
  createdAt?: string;
  parentNoteId?: number;
  isDraft?: boolean;
  closed?: number;
  line?: number;
  side?: string;
  path?: string;
  note?: string;
  updatedAt?: string;
  id?: number;
  author?: ListMergeRequestCommentsResponseBodyResultAuthor;
  static names(): { [key: string]: string } {
    return {
      outDated: 'OutDated',
      projectId: 'ProjectId',
      rangeContext: 'RangeContext',
      createdAt: 'CreatedAt',
      parentNoteId: 'ParentNoteId',
      isDraft: 'IsDraft',
      closed: 'Closed',
      line: 'Line',
      side: 'Side',
      path: 'Path',
      note: 'Note',
      updatedAt: 'UpdatedAt',
      id: 'Id',
      author: 'Author',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outDated: 'boolean',
      projectId: 'number',
      rangeContext: 'string',
      createdAt: 'string',
      parentNoteId: 'number',
      isDraft: 'boolean',
      closed: 'number',
      line: 'number',
      side: 'string',
      path: 'string',
      note: 'string',
      updatedAt: 'string',
      id: 'number',
      author: ListMergeRequestCommentsResponseBodyResultAuthor,
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
  webUrl?: string;
  parentId?: number;
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
      webUrl: 'WebUrl',
      parentId: 'ParentId',
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
      webUrl: 'string',
      parentId: 'number',
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

export class GetMergeRequestDetailResponseBodyResultAssigneeList extends $tea.Model {
  status?: string;
  externUserId?: string;
  email?: string;
  avatarUrl?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      externUserId: 'ExternUserId',
      email: 'Email',
      avatarUrl: 'AvatarUrl',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      externUserId: 'string',
      email: 'string',
      avatarUrl: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponseBodyResultApproveCheckResultSatisfiedCheckResults extends $tea.Model {
  checkStatus?: string;
  checkType?: string;
  checkName?: string;
  extraUsers?: GetMergeRequestDetailResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers[];
  unsatisfiedItems?: string[];
  satisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      checkName: 'CheckName',
      extraUsers: 'ExtraUsers',
      unsatisfiedItems: 'UnsatisfiedItems',
      satisfiedItems: 'SatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkType: 'string',
      checkName: 'string',
      extraUsers: { 'type': 'array', 'itemType': GetMergeRequestDetailResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponseBodyResultApproveCheckResultUnsatisfiedCheckResults extends $tea.Model {
  checkStatus?: string;
  checkType?: string;
  checkName?: string;
  extraUsers?: GetMergeRequestDetailResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers[];
  unsatisfiedItems?: string[];
  satisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      checkName: 'CheckName',
      extraUsers: 'ExtraUsers',
      unsatisfiedItems: 'UnsatisfiedItems',
      satisfiedItems: 'SatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkType: 'string',
      checkName: 'string',
      extraUsers: { 'type': 'array', 'itemType': GetMergeRequestDetailResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponseBodyResultApproveCheckResult extends $tea.Model {
  totalCheckResult?: string;
  satisfiedCheckResults?: GetMergeRequestDetailResponseBodyResultApproveCheckResultSatisfiedCheckResults[];
  unsatisfiedCheckResults?: GetMergeRequestDetailResponseBodyResultApproveCheckResultUnsatisfiedCheckResults[];
  static names(): { [key: string]: string } {
    return {
      totalCheckResult: 'TotalCheckResult',
      satisfiedCheckResults: 'SatisfiedCheckResults',
      unsatisfiedCheckResults: 'UnsatisfiedCheckResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCheckResult: 'string',
      satisfiedCheckResults: { 'type': 'array', 'itemType': GetMergeRequestDetailResponseBodyResultApproveCheckResultSatisfiedCheckResults },
      unsatisfiedCheckResults: { 'type': 'array', 'itemType': GetMergeRequestDetailResponseBodyResultApproveCheckResultUnsatisfiedCheckResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponseBodyResultAuthor extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestDetailResponseBodyResult extends $tea.Model {
  isSupportMerge?: boolean;
  state?: string;
  behindCommitCount?: number;
  projectId?: number;
  createdAt?: string;
  acceptedRevision?: string;
  sourceBranch?: string;
  webUrl?: string;
  description?: string;
  nameWithNamespace?: string;
  mergeType?: string;
  targetBranch?: string;
  aheadCommitCount?: number;
  updatedAt?: string;
  title?: string;
  mergeError?: string;
  mergedRevision?: string;
  id?: number;
  mergeStatus?: string;
  assigneeList?: GetMergeRequestDetailResponseBodyResultAssigneeList[];
  approveCheckResult?: GetMergeRequestDetailResponseBodyResultApproveCheckResult;
  author?: GetMergeRequestDetailResponseBodyResultAuthor;
  static names(): { [key: string]: string } {
    return {
      isSupportMerge: 'IsSupportMerge',
      state: 'State',
      behindCommitCount: 'BehindCommitCount',
      projectId: 'ProjectId',
      createdAt: 'CreatedAt',
      acceptedRevision: 'AcceptedRevision',
      sourceBranch: 'SourceBranch',
      webUrl: 'WebUrl',
      description: 'Description',
      nameWithNamespace: 'NameWithNamespace',
      mergeType: 'MergeType',
      targetBranch: 'TargetBranch',
      aheadCommitCount: 'AheadCommitCount',
      updatedAt: 'UpdatedAt',
      title: 'Title',
      mergeError: 'MergeError',
      mergedRevision: 'MergedRevision',
      id: 'Id',
      mergeStatus: 'MergeStatus',
      assigneeList: 'AssigneeList',
      approveCheckResult: 'ApproveCheckResult',
      author: 'Author',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSupportMerge: 'boolean',
      state: 'string',
      behindCommitCount: 'number',
      projectId: 'number',
      createdAt: 'string',
      acceptedRevision: 'string',
      sourceBranch: 'string',
      webUrl: 'string',
      description: 'string',
      nameWithNamespace: 'string',
      mergeType: 'string',
      targetBranch: 'string',
      aheadCommitCount: 'number',
      updatedAt: 'string',
      title: 'string',
      mergeError: 'string',
      mergedRevision: 'string',
      id: 'number',
      mergeStatus: 'string',
      assigneeList: { 'type': 'array', 'itemType': GetMergeRequestDetailResponseBodyResultAssigneeList },
      approveCheckResult: GetMergeRequestDetailResponseBodyResultApproveCheckResult,
      author: GetMergeRequestDetailResponseBodyResultAuthor,
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
  webUrl?: string;
  parentId?: number;
  description?: string;
  nameWithNamespace?: string;
  pathWithNamespace?: string;
  visibilityLevel?: string;
  path?: string;
  accessLevel?: number;
  updatedAt?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      createdAt: 'CreatedAt',
      ownerId: 'OwnerId',
      webUrl: 'WebUrl',
      parentId: 'ParentId',
      description: 'Description',
      nameWithNamespace: 'NameWithNamespace',
      pathWithNamespace: 'PathWithNamespace',
      visibilityLevel: 'VisibilityLevel',
      path: 'Path',
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
      webUrl: 'string',
      parentId: 'number',
      description: 'string',
      nameWithNamespace: 'string',
      pathWithNamespace: 'string',
      visibilityLevel: 'string',
      path: 'string',
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

export class ListRepositoryProtectedBranchResponseBodyResultMergeRequestSettingDefaultAssignees extends $tea.Model {
  name?: string;
  externUid?: string;
  avatarUrl?: string;
  id?: number;
  email?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      externUid: 'ExternUid',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      externUid: 'string',
      avatarUrl: 'string',
      id: 'number',
      email: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryProtectedBranchResponseBodyResultMergeRequestSetting extends $tea.Model {
  mergeRequestMode?: string;
  allowSelfApproval?: boolean;
  isRequireDiscussionProcessed?: boolean;
  required?: boolean;
  minimumApproval?: number;
  defaultAssignees?: ListRepositoryProtectedBranchResponseBodyResultMergeRequestSettingDefaultAssignees[];
  allowMergeRequestRoles?: number[];
  whiteList?: string;
  static names(): { [key: string]: string } {
    return {
      mergeRequestMode: 'MergeRequestMode',
      allowSelfApproval: 'AllowSelfApproval',
      isRequireDiscussionProcessed: 'IsRequireDiscussionProcessed',
      required: 'Required',
      minimumApproval: 'MinimumApproval',
      defaultAssignees: 'DefaultAssignees',
      allowMergeRequestRoles: 'AllowMergeRequestRoles',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mergeRequestMode: 'string',
      allowSelfApproval: 'boolean',
      isRequireDiscussionProcessed: 'boolean',
      required: 'boolean',
      minimumApproval: 'number',
      defaultAssignees: { 'type': 'array', 'itemType': ListRepositoryProtectedBranchResponseBodyResultMergeRequestSettingDefaultAssignees },
      allowMergeRequestRoles: { 'type': 'array', 'itemType': 'number' },
      whiteList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryProtectedBranchResponseBodyResultTestSettingCodingGuidelinesDetection extends $tea.Model {
  message?: string;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryProtectedBranchResponseBodyResultTestSettingSensitiveInfoDetection extends $tea.Model {
  message?: string;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      enabled: 'boolean',
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

export class ListRepositoryProtectedBranchResponseBodyResultTestSetting extends $tea.Model {
  required?: boolean;
  codingGuidelinesDetection?: ListRepositoryProtectedBranchResponseBodyResultTestSettingCodingGuidelinesDetection;
  sensitiveInfoDetection?: ListRepositoryProtectedBranchResponseBodyResultTestSettingSensitiveInfoDetection;
  checkConfig?: ListRepositoryProtectedBranchResponseBodyResultTestSettingCheckConfig;
  static names(): { [key: string]: string } {
    return {
      required: 'Required',
      codingGuidelinesDetection: 'CodingGuidelinesDetection',
      sensitiveInfoDetection: 'SensitiveInfoDetection',
      checkConfig: 'CheckConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      required: 'boolean',
      codingGuidelinesDetection: ListRepositoryProtectedBranchResponseBodyResultTestSettingCodingGuidelinesDetection,
      sensitiveInfoDetection: ListRepositoryProtectedBranchResponseBodyResultTestSettingSensitiveInfoDetection,
      checkConfig: ListRepositoryProtectedBranchResponseBodyResultTestSettingCheckConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryProtectedBranchResponseBodyResult extends $tea.Model {
  branch?: string;
  id?: number;
  allowPushRoles?: number[];
  allowMergeRoles?: number[];
  mergeRequestSetting?: ListRepositoryProtectedBranchResponseBodyResultMergeRequestSetting;
  testSetting?: ListRepositoryProtectedBranchResponseBodyResultTestSetting;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      id: 'Id',
      allowPushRoles: 'AllowPushRoles',
      allowMergeRoles: 'AllowMergeRoles',
      mergeRequestSetting: 'MergeRequestSetting',
      testSetting: 'TestSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      id: 'number',
      allowPushRoles: { 'type': 'array', 'itemType': 'number' },
      allowMergeRoles: { 'type': 'array', 'itemType': 'number' },
      mergeRequestSetting: ListRepositoryProtectedBranchResponseBodyResultMergeRequestSetting,
      testSetting: ListRepositoryProtectedBranchResponseBodyResultTestSetting,
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

export class GetProjectMemberResponseBodyResult extends $tea.Model {
  accessLevel?: number;
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
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

export class ListRepositoryCommitsResponseBodyResultSignature extends $tea.Model {
  verificationStatus?: string;
  gpgKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      verificationStatus: 'VerificationStatus',
      gpgKeyId: 'GpgKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationStatus: 'string',
      gpgKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCommitsResponseBodyResult extends $tea.Model {
  shortId?: string;
  authorName?: string;
  authorDate?: string;
  createdAt?: string;
  message?: string;
  title?: string;
  committerName?: string;
  authorEmail?: string;
  id?: string;
  committerEmail?: string;
  committedDate?: string;
  parentIds?: string[];
  signature?: ListRepositoryCommitsResponseBodyResultSignature;
  static names(): { [key: string]: string } {
    return {
      shortId: 'ShortId',
      authorName: 'AuthorName',
      authorDate: 'AuthorDate',
      createdAt: 'CreatedAt',
      message: 'Message',
      title: 'Title',
      committerName: 'CommitterName',
      authorEmail: 'AuthorEmail',
      id: 'Id',
      committerEmail: 'CommitterEmail',
      committedDate: 'CommittedDate',
      parentIds: 'ParentIds',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shortId: 'string',
      authorName: 'string',
      authorDate: 'string',
      createdAt: 'string',
      message: 'string',
      title: 'string',
      committerName: 'string',
      authorEmail: 'string',
      id: 'string',
      committerEmail: 'string',
      committedDate: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      signature: ListRepositoryCommitsResponseBodyResultSignature,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMergeRequestApproveStatusResponseBodyResult extends $tea.Model {
  message?: string;
  approveStatus?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      approveStatus: 'ApproveStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      approveStatus: 'string',
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
  star?: boolean;
  demoProjectStatus?: boolean;
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
      star: 'Star',
      demoProjectStatus: 'DemoProjectStatus',
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
      star: 'boolean',
      demoProjectStatus: 'boolean',
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

export class CreateMergeRequestCommentResponseBodyResultAuthor extends $tea.Model {
  externUserId?: string;
  email?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      email: 'Email',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      email: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeRequestCommentResponseBodyResult extends $tea.Model {
  outDated?: boolean;
  projectId?: number;
  rangeContext?: string;
  createdAt?: string;
  parentNoteId?: number;
  isDraft?: boolean;
  closed?: number;
  line?: number;
  side?: string;
  path?: string;
  note?: string;
  updatedAt?: string;
  id?: number;
  author?: CreateMergeRequestCommentResponseBodyResultAuthor;
  static names(): { [key: string]: string } {
    return {
      outDated: 'OutDated',
      projectId: 'ProjectId',
      rangeContext: 'RangeContext',
      createdAt: 'CreatedAt',
      parentNoteId: 'ParentNoteId',
      isDraft: 'IsDraft',
      closed: 'Closed',
      line: 'Line',
      side: 'Side',
      path: 'Path',
      note: 'Note',
      updatedAt: 'UpdatedAt',
      id: 'Id',
      author: 'Author',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outDated: 'boolean',
      projectId: 'number',
      rangeContext: 'string',
      createdAt: 'string',
      parentNoteId: 'number',
      isDraft: 'boolean',
      closed: 'number',
      line: 'number',
      side: 'string',
      path: 'string',
      note: 'string',
      updatedAt: 'string',
      id: 'number',
      author: CreateMergeRequestCommentResponseBodyResultAuthor,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryDeployKeyResponseBodyResult extends $tea.Model {
  createdAt?: string;
  key?: string;
  title?: string;
  id?: number;
  fingerPrint?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      key: 'Key',
      title: 'Title',
      id: 'Id',
      fingerPrint: 'FingerPrint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      key: 'string',
      title: 'string',
      id: 'number',
      fingerPrint: 'string',
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
  lastActivityAt?: string;
  defaultBranch?: string;
  avatarUrl?: string;
  archive?: boolean;
  snippetsEnableStatus?: boolean;
  createdAt?: string;
  issuesEnableStatus?: boolean;
  demoProjectStatus?: boolean;
  creatorId?: number;
  buildsEnableStatus?: boolean;
  httpUrlToRepo?: string;
  webUrl?: string;
  description?: string;
  nameWithNamespace?: string;
  public?: boolean;
  pathWithNamespace?: string;
  mergeRequestEnableStatus?: boolean;
  path?: string;
  visibilityLevel?: string;
  wikiEnableStatus?: boolean;
  sshUrlToRepo?: string;
  name?: string;
  id?: number;
  tagList?: string[];
  namespace?: CreateRepositoryResponseBodyResultNamespace;
  static names(): { [key: string]: string } {
    return {
      lastActivityAt: 'LastActivityAt',
      defaultBranch: 'DefaultBranch',
      avatarUrl: 'AvatarUrl',
      archive: 'Archive',
      snippetsEnableStatus: 'SnippetsEnableStatus',
      createdAt: 'CreatedAt',
      issuesEnableStatus: 'IssuesEnableStatus',
      demoProjectStatus: 'DemoProjectStatus',
      creatorId: 'CreatorId',
      buildsEnableStatus: 'BuildsEnableStatus',
      httpUrlToRepo: 'HttpUrlToRepo',
      webUrl: 'WebUrl',
      description: 'Description',
      nameWithNamespace: 'NameWithNamespace',
      public: 'Public',
      pathWithNamespace: 'PathWithNamespace',
      mergeRequestEnableStatus: 'MergeRequestEnableStatus',
      path: 'Path',
      visibilityLevel: 'VisibilityLevel',
      wikiEnableStatus: 'WikiEnableStatus',
      sshUrlToRepo: 'SshUrlToRepo',
      name: 'Name',
      id: 'Id',
      tagList: 'TagList',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastActivityAt: 'string',
      defaultBranch: 'string',
      avatarUrl: 'string',
      archive: 'boolean',
      snippetsEnableStatus: 'boolean',
      createdAt: 'string',
      issuesEnableStatus: 'boolean',
      demoProjectStatus: 'boolean',
      creatorId: 'number',
      buildsEnableStatus: 'boolean',
      httpUrlToRepo: 'string',
      webUrl: 'string',
      description: 'string',
      nameWithNamespace: 'string',
      public: 'boolean',
      pathWithNamespace: 'string',
      mergeRequestEnableStatus: 'boolean',
      path: 'string',
      visibilityLevel: 'string',
      wikiEnableStatus: 'boolean',
      sshUrlToRepo: 'string',
      name: 'string',
      id: 'number',
      tagList: { 'type': 'array', 'itemType': 'string' },
      namespace: CreateRepositoryResponseBodyResultNamespace,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeCompletionResponseBodyResult extends $tea.Model {
  clientTimestamp?: string;
  receiveTimestamp?: string;
  rspTimestamp?: string;
  invokeTimestamp?: string;
  body?: string;
  fetchTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      clientTimestamp: 'ClientTimestamp',
      receiveTimestamp: 'ReceiveTimestamp',
      rspTimestamp: 'RspTimestamp',
      invokeTimestamp: 'InvokeTimestamp',
      body: 'Body',
      fetchTimestamp: 'FetchTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientTimestamp: 'string',
      receiveTimestamp: 'string',
      rspTimestamp: 'string',
      invokeTimestamp: 'string',
      body: 'string',
      fetchTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResultAssigneeList extends $tea.Model {
  status?: string;
  externUserId?: string;
  email?: string;
  avatarUrl?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      externUserId: 'ExternUserId',
      email: 'Email',
      avatarUrl: 'AvatarUrl',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      externUserId: 'string',
      email: 'string',
      avatarUrl: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResultApproveCheckResultSatisfiedCheckResults extends $tea.Model {
  checkStatus?: string;
  checkType?: string;
  checkName?: string;
  extraUsers?: ListMergeRequestsResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers[];
  unsatisfiedItems?: string[];
  satisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      checkName: 'CheckName',
      extraUsers: 'ExtraUsers',
      unsatisfiedItems: 'UnsatisfiedItems',
      satisfiedItems: 'SatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkType: 'string',
      checkName: 'string',
      extraUsers: { 'type': 'array', 'itemType': ListMergeRequestsResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResultApproveCheckResultUnsatisfiedCheckResults extends $tea.Model {
  checkStatus?: string;
  checkType?: string;
  checkName?: string;
  extraUsers?: ListMergeRequestsResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers[];
  unsatisfiedItems?: string[];
  satisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      checkName: 'CheckName',
      extraUsers: 'ExtraUsers',
      unsatisfiedItems: 'UnsatisfiedItems',
      satisfiedItems: 'SatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkType: 'string',
      checkName: 'string',
      extraUsers: { 'type': 'array', 'itemType': ListMergeRequestsResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResultApproveCheckResult extends $tea.Model {
  totalCheckResult?: string;
  satisfiedCheckResults?: ListMergeRequestsResponseBodyResultApproveCheckResultSatisfiedCheckResults[];
  unsatisfiedCheckResults?: ListMergeRequestsResponseBodyResultApproveCheckResultUnsatisfiedCheckResults[];
  static names(): { [key: string]: string } {
    return {
      totalCheckResult: 'TotalCheckResult',
      satisfiedCheckResults: 'SatisfiedCheckResults',
      unsatisfiedCheckResults: 'UnsatisfiedCheckResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCheckResult: 'string',
      satisfiedCheckResults: { 'type': 'array', 'itemType': ListMergeRequestsResponseBodyResultApproveCheckResultSatisfiedCheckResults },
      unsatisfiedCheckResults: { 'type': 'array', 'itemType': ListMergeRequestsResponseBodyResultApproveCheckResultUnsatisfiedCheckResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResultAuthor extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestsResponseBodyResult extends $tea.Model {
  isSupportMerge?: boolean;
  state?: string;
  behindCommitCount?: number;
  projectId?: number;
  createdAt?: string;
  acceptedRevision?: string;
  sourceBranch?: string;
  webUrl?: string;
  description?: string;
  nameWithNamespace?: string;
  mergeType?: string;
  targetBranch?: string;
  aheadCommitCount?: number;
  updatedAt?: string;
  title?: string;
  mergeError?: string;
  mergedRevision?: string;
  id?: number;
  mergeStatus?: string;
  assigneeList?: ListMergeRequestsResponseBodyResultAssigneeList[];
  approveCheckResult?: ListMergeRequestsResponseBodyResultApproveCheckResult;
  author?: ListMergeRequestsResponseBodyResultAuthor;
  static names(): { [key: string]: string } {
    return {
      isSupportMerge: 'IsSupportMerge',
      state: 'State',
      behindCommitCount: 'BehindCommitCount',
      projectId: 'ProjectId',
      createdAt: 'CreatedAt',
      acceptedRevision: 'AcceptedRevision',
      sourceBranch: 'SourceBranch',
      webUrl: 'WebUrl',
      description: 'Description',
      nameWithNamespace: 'NameWithNamespace',
      mergeType: 'MergeType',
      targetBranch: 'TargetBranch',
      aheadCommitCount: 'AheadCommitCount',
      updatedAt: 'UpdatedAt',
      title: 'Title',
      mergeError: 'MergeError',
      mergedRevision: 'MergedRevision',
      id: 'Id',
      mergeStatus: 'MergeStatus',
      assigneeList: 'AssigneeList',
      approveCheckResult: 'ApproveCheckResult',
      author: 'Author',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSupportMerge: 'boolean',
      state: 'string',
      behindCommitCount: 'number',
      projectId: 'number',
      createdAt: 'string',
      acceptedRevision: 'string',
      sourceBranch: 'string',
      webUrl: 'string',
      description: 'string',
      nameWithNamespace: 'string',
      mergeType: 'string',
      targetBranch: 'string',
      aheadCommitCount: 'number',
      updatedAt: 'string',
      title: 'string',
      mergeError: 'string',
      mergedRevision: 'string',
      id: 'number',
      mergeStatus: 'string',
      assigneeList: { 'type': 'array', 'itemType': ListMergeRequestsResponseBodyResultAssigneeList },
      approveCheckResult: ListMergeRequestsResponseBodyResultApproveCheckResult,
      author: ListMergeRequestsResponseBodyResultAuthor,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationSecurityScoresResponseBodyResultOrganizationSecurityScore extends $tea.Model {
  codeContentScore?: number;
  memberBehaviorScore?: number;
  authorityControlScore?: number;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      codeContentScore: 'CodeContentScore',
      memberBehaviorScore: 'MemberBehaviorScore',
      authorityControlScore: 'AuthorityControlScore',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeContentScore: 'number',
      memberBehaviorScore: 'number',
      authorityControlScore: 'number',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationSecurityScoresResponseBodyResult extends $tea.Model {
  id?: number;
  enable?: boolean;
  organizationId?: string;
  organizationSecurityScore?: ListOrganizationSecurityScoresResponseBodyResultOrganizationSecurityScore;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      enable: 'Enable',
      organizationId: 'OrganizationId',
      organizationSecurityScore: 'OrganizationSecurityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      enable: 'boolean',
      organizationId: 'string',
      organizationSecurityScore: ListOrganizationSecurityScoresResponseBodyResultOrganizationSecurityScore,
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

export class MergeMergeRequestResponseBodyResultAssigneeList extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultAuthor extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults extends $tea.Model {
  checkStatus?: string;
  checkType?: string;
  checkName?: string;
  extraUsers?: MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers[];
  unsatisfiedItems?: string[];
  satisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      checkName: 'CheckName',
      extraUsers: 'ExtraUsers',
      unsatisfiedItems: 'UnsatisfiedItems',
      satisfiedItems: 'SatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkType: 'string',
      checkName: 'string',
      extraUsers: { 'type': 'array', 'itemType': MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResultsExtraUsers },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers extends $tea.Model {
  externUserId?: string;
  name?: string;
  avatarUrl?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      name: 'Name',
      avatarUrl: 'AvatarUrl',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      name: 'string',
      avatarUrl: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults extends $tea.Model {
  checkStatus?: string;
  checkType?: string;
  checkName?: string;
  extraUsers?: MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers[];
  unsatisfiedItems?: string[];
  satisfiedItems?: string[];
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      checkName: 'CheckName',
      extraUsers: 'ExtraUsers',
      unsatisfiedItems: 'UnsatisfiedItems',
      satisfiedItems: 'SatisfiedItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkType: 'string',
      checkName: 'string',
      extraUsers: { 'type': 'array', 'itemType': MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResultsExtraUsers },
      unsatisfiedItems: { 'type': 'array', 'itemType': 'string' },
      satisfiedItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResultApproveCheckResult extends $tea.Model {
  totalCheckResult?: string;
  satisfiedCheckResults?: MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults[];
  unsatisfiedCheckResults?: MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults[];
  static names(): { [key: string]: string } {
    return {
      totalCheckResult: 'TotalCheckResult',
      satisfiedCheckResults: 'SatisfiedCheckResults',
      unsatisfiedCheckResults: 'UnsatisfiedCheckResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCheckResult: 'string',
      satisfiedCheckResults: { 'type': 'array', 'itemType': MergeMergeRequestResponseBodyResultApproveCheckResultSatisfiedCheckResults },
      unsatisfiedCheckResults: { 'type': 'array', 'itemType': MergeMergeRequestResponseBodyResultApproveCheckResultUnsatisfiedCheckResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeMergeRequestResponseBodyResult extends $tea.Model {
  behindCommitCount?: number;
  state?: string;
  projectId?: number;
  createdAt?: string;
  acceptedRevision?: string;
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
  assigneeList?: MergeMergeRequestResponseBodyResultAssigneeList[];
  author?: MergeMergeRequestResponseBodyResultAuthor;
  approveCheckResult?: MergeMergeRequestResponseBodyResultApproveCheckResult;
  static names(): { [key: string]: string } {
    return {
      behindCommitCount: 'BehindCommitCount',
      state: 'State',
      projectId: 'ProjectId',
      createdAt: 'CreatedAt',
      acceptedRevision: 'AcceptedRevision',
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
      assigneeList: 'AssigneeList',
      author: 'Author',
      approveCheckResult: 'ApproveCheckResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      behindCommitCount: 'number',
      state: 'string',
      projectId: 'number',
      createdAt: 'string',
      acceptedRevision: 'string',
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
      assigneeList: { 'type': 'array', 'itemType': MergeMergeRequestResponseBodyResultAssigneeList },
      author: MergeMergeRequestResponseBodyResultAuthor,
      approveCheckResult: MergeMergeRequestResponseBodyResultApproveCheckResult,
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

export class ListRepositoryMemberWithInheritedResponseBodyResultInherited extends $tea.Model {
  type?: string;
  nameWithNamespace?: string;
  pathWithNamespace?: string;
  visibilityLevel?: string;
  path?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
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

export class ListRepositoryMemberWithInheritedResponseBodyResult extends $tea.Model {
  externUserId?: string;
  email?: string;
  avatarUrl?: string;
  state?: string;
  accessLevel?: number;
  name?: string;
  id?: number;
  username?: string;
  inherited?: ListRepositoryMemberWithInheritedResponseBodyResultInherited;
  static names(): { [key: string]: string } {
    return {
      externUserId: 'ExternUserId',
      email: 'Email',
      avatarUrl: 'AvatarUrl',
      state: 'State',
      accessLevel: 'AccessLevel',
      name: 'Name',
      id: 'Id',
      username: 'Username',
      inherited: 'Inherited',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externUserId: 'string',
      email: 'string',
      avatarUrl: 'string',
      state: 'string',
      accessLevel: 'number',
      name: 'string',
      id: 'number',
      username: 'string',
      inherited: ListRepositoryMemberWithInheritedResponseBodyResultInherited,
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
  webUrl?: string;
  parentId?: number;
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
      webUrl: 'WebUrl',
      parentId: 'ParentId',
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
      webUrl: 'string',
      parentId: 'number',
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

export class ListRepositoryBranchesResponseBodyResultCommitInfo extends $tea.Model {
  shortId?: string;
  authorName?: string;
  authorDate?: string;
  createdAt?: string;
  message?: string;
  committerName?: string;
  title?: string;
  authorEmail?: string;
  committerEmail?: string;
  id?: string;
  committedDate?: string;
  parentIds?: string[];
  static names(): { [key: string]: string } {
    return {
      shortId: 'ShortId',
      authorName: 'AuthorName',
      authorDate: 'AuthorDate',
      createdAt: 'CreatedAt',
      message: 'Message',
      committerName: 'CommitterName',
      title: 'Title',
      authorEmail: 'AuthorEmail',
      committerEmail: 'CommitterEmail',
      id: 'Id',
      committedDate: 'CommittedDate',
      parentIds: 'ParentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shortId: 'string',
      authorName: 'string',
      authorDate: 'string',
      createdAt: 'string',
      message: 'string',
      committerName: 'string',
      title: 'string',
      authorEmail: 'string',
      committerEmail: 'string',
      id: 'string',
      committedDate: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryBranchesResponseBodyResult extends $tea.Model {
  protectedBranch?: boolean;
  branchName?: string;
  commitInfo?: ListRepositoryBranchesResponseBodyResultCommitInfo;
  static names(): { [key: string]: string } {
    return {
      protectedBranch: 'ProtectedBranch',
      branchName: 'BranchName',
      commitInfo: 'CommitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectedBranch: 'boolean',
      branchName: 'string',
      commitInfo: ListRepositoryBranchesResponseBodyResultCommitInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBranchResponseBodyResultCommitInfo extends $tea.Model {
  shortId?: string;
  authorName?: string;
  authorDate?: string;
  createdAt?: string;
  message?: string;
  committerName?: string;
  title?: string;
  authorEmail?: string;
  committerEmail?: string;
  id?: string;
  committedDate?: string;
  parentIds?: string[];
  static names(): { [key: string]: string } {
    return {
      shortId: 'ShortId',
      authorName: 'AuthorName',
      authorDate: 'AuthorDate',
      createdAt: 'CreatedAt',
      message: 'Message',
      committerName: 'CommitterName',
      title: 'Title',
      authorEmail: 'AuthorEmail',
      committerEmail: 'CommitterEmail',
      id: 'Id',
      committedDate: 'CommittedDate',
      parentIds: 'ParentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shortId: 'string',
      authorName: 'string',
      authorDate: 'string',
      createdAt: 'string',
      message: 'string',
      committerName: 'string',
      title: 'string',
      authorEmail: 'string',
      committerEmail: 'string',
      id: 'string',
      committedDate: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBranchResponseBodyResult extends $tea.Model {
  protectedBranch?: boolean;
  branchName?: string;
  commitInfo?: CreateBranchResponseBodyResultCommitInfo;
  static names(): { [key: string]: string } {
    return {
      protectedBranch: 'ProtectedBranch',
      branchName: 'BranchName',
      commitInfo: 'CommitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectedBranch: 'boolean',
      branchName: 'string',
      commitInfo: CreateBranchResponseBodyResultCommitInfo,
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
  sshCloneUrl?: string;
  createdAt?: string;
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
      sshCloneUrl: 'SshCloneUrl',
      createdAt: 'CreatedAt',
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
      sshCloneUrl: 'string',
      createdAt: 'string',
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

export class GetRepositoryTagV2ResponseBodyResultCommitSignature extends $tea.Model {
  verificationStatus?: string;
  gpgKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      verificationStatus: 'VerificationStatus',
      gpgKeyId: 'GpgKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationStatus: 'string',
      gpgKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagV2ResponseBodyResultCommit extends $tea.Model {
  shortId?: string;
  authorName?: string;
  createdAt?: string;
  message?: string;
  authoredDate?: string;
  title?: string;
  committerName?: string;
  authorEmail?: string;
  id?: string;
  committerEmail?: string;
  committedDate?: string;
  parentIds?: string[];
  signature?: GetRepositoryTagV2ResponseBodyResultCommitSignature;
  static names(): { [key: string]: string } {
    return {
      shortId: 'ShortId',
      authorName: 'AuthorName',
      createdAt: 'CreatedAt',
      message: 'Message',
      authoredDate: 'AuthoredDate',
      title: 'Title',
      committerName: 'CommitterName',
      authorEmail: 'AuthorEmail',
      id: 'Id',
      committerEmail: 'CommitterEmail',
      committedDate: 'CommittedDate',
      parentIds: 'ParentIds',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shortId: 'string',
      authorName: 'string',
      createdAt: 'string',
      message: 'string',
      authoredDate: 'string',
      title: 'string',
      committerName: 'string',
      authorEmail: 'string',
      id: 'string',
      committerEmail: 'string',
      committedDate: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      signature: GetRepositoryTagV2ResponseBodyResultCommitSignature,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagV2ResponseBodyResultSignature extends $tea.Model {
  verificationStatus?: string;
  gpgKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      verificationStatus: 'VerificationStatus',
      gpgKeyId: 'GpgKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationStatus: 'string',
      gpgKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryTagV2ResponseBodyResult extends $tea.Model {
  message?: string;
  name?: string;
  id?: string;
  commit?: GetRepositoryTagV2ResponseBodyResultCommit;
  signature?: GetRepositoryTagV2ResponseBodyResultSignature;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      id: 'Id',
      commit: 'Commit',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      id: 'string',
      commit: GetRepositoryTagV2ResponseBodyResultCommit,
      signature: GetRepositoryTagV2ResponseBodyResultSignature,
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

export class ListRepositoryWebhookResponseBodyResult extends $tea.Model {
  pushEvents?: boolean;
  projectId?: number;
  createdAt?: string;
  url?: string;
  tagPushEvents?: boolean;
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
      projectId: 'ProjectId',
      createdAt: 'CreatedAt',
      url: 'Url',
      tagPushEvents: 'TagPushEvents',
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
      projectId: 'number',
      createdAt: 'string',
      url: 'string',
      tagPushEvents: 'boolean',
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
    return $tea.cast<DeleteRepositoryMemberResponse>(await this.doROARequest("DeleteRepositoryMember", "2020-04-14", "HTTPS", "DELETE", "AK", `/api/v3/projects/${ProjectId}/members/${UserId}`, "json", req, runtime), new DeleteRepositoryMemberResponse({}));
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
    return $tea.cast<CreateRepositoryProtectedBranchResponse>(await this.doROARequest("CreateRepositoryProtectedBranch", "2020-04-14", "HTTPS", "POST", "AK", `/api/v4/projects/${ProjectId}/repository/protect_branches`, "json", req, runtime), new CreateRepositoryProtectedBranchResponse({}));
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
    return $tea.cast<GetRepositoryTagResponse>(await this.doROARequest("GetRepositoryTag", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/projects/${ProjectId}/repository/tags/${TagName}`, "json", req, runtime), new GetRepositoryTagResponse({}));
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
    return $tea.cast<UpdateMergeRequestResponse>(await this.doROARequest("UpdateMergeRequest", "2020-04-14", "HTTPS", "PUT", "AK", `/api/v3/projects/${ProjectId}/merge_request/${MergeRequestId}`, "json", req, runtime), new UpdateMergeRequestResponse({}));
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
    return $tea.cast<UpdateRepositoryResponse>(await this.doROARequest("UpdateRepository", "2020-04-14", "HTTPS", "PUT", "AK", `/api/v3/projects/${ProjectId}`, "json", req, runtime), new UpdateRepositoryResponse({}));
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
    return $tea.cast<UpdateMergeRequestCommentResponse>(await this.doROARequest("UpdateMergeRequestComment", "2020-04-14", "HTTPS", "PUT", "AK", `/api/v3/projects/${ProjectId}/merge_requests/${MergeRequestId}/notes/${NoteId}`, "json", req, runtime), new UpdateMergeRequestCommentResponse({}));
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

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.contextLine)) {
      query["ContextLine"] = request.contextLine;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListRepositoryCommitDiffResponse>(await this.doROARequest("ListRepositoryCommitDiff", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/projects/${ProjectId}/repository/commits/${Sha}/diff`, "json", req, runtime), new ListRepositoryCommitDiffResponse({}));
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
    return $tea.cast<AcceptMergeRequestResponse>(await this.doROARequest("AcceptMergeRequest", "2020-04-14", "HTTPS", "PUT", "AK", `/api/v3/projects/${ProjectId}/merge_request/${MergeRequestId}/accept`, "json", req, runtime), new AcceptMergeRequestResponse({}));
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
    return $tea.cast<DeleteRepositoryProtectedBranchResponse>(await this.doROARequest("DeleteRepositoryProtectedBranch", "2020-04-14", "HTTPS", "DELETE", "AK", `/api/v4/projects/${ProjectId}/repository/protect_branches/${ProtectedBranchId}`, "json", req, runtime), new DeleteRepositoryProtectedBranchResponse({}));
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
    return $tea.cast<DeleteRepositoryTagV2Response>(await this.doROARequest("DeleteRepositoryTagV2", "2020-04-14", "HTTPS", "DELETE", "AK", `/api/v3/projects/${ProjectId}/repository/tag/delete`, "json", req, runtime), new DeleteRepositoryTagV2Response({}));
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

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.sha)) {
      query["Sha"] = request.sha;
    }

    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetFileLastCommitResponse>(await this.doROARequest("GetFileLastCommit", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/projects/${ProjectId}/repository/files/last_commit`, "json", req, runtime), new GetFileLastCommitResponse({}));
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
    return $tea.cast<UpdateRepositoryMemberResponse>(await this.doROARequest("UpdateRepositoryMember", "2020-04-14", "HTTPS", "PUT", "AK", `/api/v3/projects/${ProjectId}/members/${UserId}`, "json", req, runtime), new UpdateRepositoryMemberResponse({}));
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
    return $tea.cast<AddRepositoryMemberResponse>(await this.doROARequest("AddRepositoryMember", "2020-04-14", "HTTPS", "POST", "AK", `/api/v4/projects/${ProjectId}/members`, "json", req, runtime), new AddRepositoryMemberResponse({}));
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
    return $tea.cast<CreateSshKeyResponse>(await this.doROARequest("CreateSshKey", "2020-04-14", "HTTPS", "POST", "AK", `/api/v3/user/keys`, "json", req, runtime), new CreateSshKeyResponse({}));
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
    return $tea.cast<EnableRepositoryDeployKeyResponse>(await this.doROARequest("EnableRepositoryDeployKey", "2020-04-14", "HTTPS", "POST", "AK", `/api/v3/projects/${ProjectId}/keys/${KeyId}/enable`, "json", req, runtime), new EnableRepositoryDeployKeyResponse({}));
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
    return $tea.cast<GetUserInfoResponse>(await this.doROARequest("GetUserInfo", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/user/current`, "json", req, runtime), new GetUserInfoResponse({}));
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
    return $tea.cast<DeleteRepositoryWebhookResponse>(await this.doROARequest("DeleteRepositoryWebhook", "2020-04-14", "HTTPS", "DELETE", "AK", `/api/v3/projects/${ProjectId}/hooks/${WebhookId}`, "json", req, runtime), new DeleteRepositoryWebhookResponse({}));
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
    return $tea.cast<GetRepositoryCommitResponse>(await this.doROARequest("GetRepositoryCommit", "2020-04-14", "HTTPS", "GET", "AK", `/api/v4/projects/${ProjectId}/repository/commits/${Sha}`, "json", req, runtime), new GetRepositoryCommitResponse({}));
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
    return $tea.cast<AddGroupMemberResponse>(await this.doROARequest("AddGroupMember", "2020-04-14", "HTTPS", "POST", "AK", `/api/v4/groups/${GroupId}/members`, "json", req, runtime), new AddGroupMemberResponse({}));
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

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.fromCommit)) {
      query["FromCommit"] = request.fromCommit;
    }

    if (!Util.isUnset(request.toCommit)) {
      query["ToCommit"] = request.toCommit;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListMergeRequestCommentsResponse>(await this.doROARequest("ListMergeRequestComments", "2020-04-14", "HTTPS", "GET", "AK", `/api/v4/projects/${ProjectId}/merge_request/${MergeRequestId}/comments`, "json", req, runtime), new ListMergeRequestCommentsResponse({}));
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
    return $tea.cast<CreateRepositoryGroupResponse>(await this.doROARequest("CreateRepositoryGroup", "2020-04-14", "HTTPS", "POST", "AK", `/api/v3/groups`, "json", req, runtime), new CreateRepositoryGroupResponse({}));
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
    return $tea.cast<GetMergeRequestDetailResponse>(await this.doROARequest("GetMergeRequestDetail", "2020-04-14", "HTTPS", "GET", "AK", `/api/v4/projects/${ProjectId}/merge_request/${MergeRequestId}`, "json", req, runtime), new GetMergeRequestDetailResponse({}));
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
    return $tea.cast<ListRepositoryProtectedBranchResponse>(await this.doROARequest("ListRepositoryProtectedBranch", "2020-04-14", "HTTPS", "GET", "AK", `/api/v4/projects/${ProjectId}/repository/protect_branches`, "json", req, runtime), new ListRepositoryProtectedBranchResponse({}));
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
    return $tea.cast<GetProjectMemberResponse>(await this.doROARequest("GetProjectMember", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/projects/${ProjectId}/members/${UserId}`, "json", req, runtime), new GetProjectMemberResponse({}));
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
    return $tea.cast<CreateFileResponse>(await this.doROARequest("CreateFile", "2020-04-14", "HTTPS", "POST", "AK", `/api/v3/projects/${ProjectId}/repository/files`, "json", req, runtime), new CreateFileResponse({}));
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

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.refName)) {
      query["RefName"] = request.refName;
    }

    if (!Util.isUnset(request.showSignature)) {
      query["ShowSignature"] = request.showSignature;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListRepositoryCommitsResponse>(await this.doROARequest("ListRepositoryCommits", "2020-04-14", "HTTPS", "GET", "AK", `/api/v4/projects/${ProjectId}/repository/commits`, "json", req, runtime), new ListRepositoryCommitsResponse({}));
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
    return $tea.cast<GetMergeRequestApproveStatusResponse>(await this.doROARequest("GetMergeRequestApproveStatus", "2020-04-14", "HTTPS", "GET", "AK", `/api/v4/projects/${ProjectId}/merge_request/${MergeRequestId}/approve_status`, "json", req, runtime), new GetMergeRequestApproveStatusResponse({}));
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
    return $tea.cast<UpdateMergeRequestSettingResponse>(await this.doROARequest("UpdateMergeRequestSetting", "2020-04-14", "HTTPS", "PUT", "AK", `/api/v4/projects/${ProjectId}/settings/merge_requests`, "json", req, runtime), new UpdateMergeRequestSettingResponse({}));
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
    return $tea.cast<UpdateGroupMemberResponse>(await this.doROARequest("UpdateGroupMember", "2020-04-14", "HTTPS", "PUT", "AK", `/api/v3/groups/${GroupId}/members/${UserId}`, "json", req, runtime), new UpdateGroupMemberResponse({}));
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
    return $tea.cast<CreateMergeRequestCommentResponse>(await this.doROARequest("CreateMergeRequestComment", "2020-04-14", "HTTPS", "POST", "AK", `/api/v4/projects/${ProjectId}/merge_request/${MergeRequestId}/comments`, "json", req, runtime), new CreateMergeRequestCommentResponse({}));
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
    return $tea.cast<CreateRepositoryDeployKeyResponse>(await this.doROARequest("CreateRepositoryDeployKey", "2020-04-14", "HTTPS", "POST", "AK", `/api/v3/projects/${ProjectId}/keys`, "json", req, runtime), new CreateRepositoryDeployKeyResponse({}));
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
    return $tea.cast<DeleteRepositoryTagResponse>(await this.doROARequest("DeleteRepositoryTag", "2020-04-14", "HTTPS", "DELETE", "AK", `/api/v3/projects/${ProjectId}/repository/tags/${TagName}`, "json", req, runtime), new DeleteRepositoryTagResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateRepositoryResponse>(await this.doROARequest("CreateRepository", "2020-04-14", "HTTPS", "POST", "AK", `/api/v3/projects`, "json", req, runtime), new CreateRepositoryResponse({}));
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
    return $tea.cast<GetCodeCompletionResponse>(await this.doROARequest("GetCodeCompletion", "2020-04-14", "HTTPS", "POST", "AK", `/api/v2/service/invoke/${ServiceName}`, "json", req, runtime), new GetCodeCompletionResponse({}));
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

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.groupIdList)) {
      query["GroupIdList"] = request.groupIdList;
    }

    if (!Util.isUnset(request.projectIdList)) {
      query["ProjectIdList"] = request.projectIdList;
    }

    if (!Util.isUnset(request.authorCodeupIdList)) {
      query["AuthorCodeupIdList"] = request.authorCodeupIdList;
    }

    if (!Util.isUnset(request.authorIdList)) {
      query["AuthorIdList"] = request.authorIdList;
    }

    if (!Util.isUnset(request.assigneeCodeupIdList)) {
      query["AssigneeCodeupIdList"] = request.assigneeCodeupIdList;
    }

    if (!Util.isUnset(request.assigneeIdList)) {
      query["AssigneeIdList"] = request.assigneeIdList;
    }

    if (!Util.isUnset(request.subscriberCodeupIdList)) {
      query["SubscriberCodeupIdList"] = request.subscriberCodeupIdList;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.afterDate)) {
      query["AfterDate"] = request.afterDate;
    }

    if (!Util.isUnset(request.beforeDate)) {
      query["BeforeDate"] = request.beforeDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListMergeRequestsResponse>(await this.doROARequest("ListMergeRequests", "2020-04-14", "HTTPS", "GET", "AK", `/api/v4/merge_requests/advanced_search`, "json", req, runtime), new ListMergeRequestsResponse({}));
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
    return $tea.cast<ListOrganizationSecurityScoresResponse>(await this.doROARequest("ListOrganizationSecurityScores", "2020-04-14", "HTTPS", "GET", "AK", `/api/v4/organization/security/scores`, "json", req, runtime), new ListOrganizationSecurityScoresResponse({}));
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
    return $tea.cast<MergeMergeRequestResponse>(await this.doROARequest("MergeMergeRequest", "2020-04-14", "HTTPS", "PUT", "AK", `/api/v3/projects/${ProjectId}/merge_request/${MergeRequestId}/merge`, "json", req, runtime), new MergeMergeRequestResponse({}));
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
    return $tea.cast<DeleteGroupMemberResponse>(await this.doROARequest("DeleteGroupMember", "2020-04-14", "HTTPS", "DELETE", "AK", `/api/v3/groups/${GroupId}/members/${UserId}`, "json", req, runtime), new DeleteGroupMemberResponse({}));
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
    return $tea.cast<ListRepositoryMemberWithInheritedResponse>(await this.doROARequest("ListRepositoryMemberWithInherited", "2020-04-14", "HTTPS", "GET", "AK", `/api/v4/projects/${ProjectId}/all_members`, "json", req, runtime), new ListRepositoryMemberWithInheritedResponse({}));
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
    return $tea.cast<GetOrganizationSecurityCenterStatusResponse>(await this.doROARequest("GetOrganizationSecurityCenterStatus", "2020-04-14", "HTTPS", "GET", "AK", `/api/v4/organization/security/status`, "json", req, runtime), new GetOrganizationSecurityCenterStatusResponse({}));
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
    return $tea.cast<GetRepositoryTagV2Response>(await this.doROARequest("GetRepositoryTagV2", "2020-04-14", "HTTPS", "GET", "AK", `/api/v3/projects/${ProjectId}/repository/tag/info`, "json", req, runtime), new GetRepositoryTagV2Response({}));
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
    return $tea.cast<GetMergeRequestSettingResponse>(await this.doROARequest("GetMergeRequestSetting", "2020-04-14", "HTTPS", "GET", "AK", `/api/v4/projects/${ProjectId}/settings/merge_requests`, "json", req, runtime), new GetMergeRequestSettingResponse({}));
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

}
