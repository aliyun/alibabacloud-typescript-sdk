// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AcceptHandshakeRequest extends $tea.Model {
  handshakeId?: string;
  static names(): { [key: string]: string } {
    return {
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptHandshakeResponseBody extends $tea.Model {
  handshake?: AcceptHandshakeResponseBodyHandshake;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      handshake: 'Handshake',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: AcceptHandshakeResponseBodyHandshake,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptHandshakeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AcceptHandshakeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AcceptHandshakeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachControlPolicyRequest extends $tea.Model {
  policyId?: string;
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      targetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachControlPolicyResponseBody extends $tea.Model {
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

export class AttachControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSecureMobilePhoneRequest extends $tea.Model {
  accountId?: string;
  secureMobilePhone?: string;
  verificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      secureMobilePhone: 'SecureMobilePhone',
      verificationCode: 'VerificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      secureMobilePhone: 'string',
      verificationCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSecureMobilePhoneResponseBody extends $tea.Model {
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

export class BindSecureMobilePhoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindSecureMobilePhoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindSecureMobilePhoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelChangeAccountEmailRequest extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelChangeAccountEmailResponseBody extends $tea.Model {
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

export class CancelChangeAccountEmailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelChangeAccountEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelChangeAccountEmailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelHandshakeRequest extends $tea.Model {
  handshakeId?: string;
  static names(): { [key: string]: string } {
    return {
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelHandshakeResponseBody extends $tea.Model {
  handshake?: CancelHandshakeResponseBodyHandshake;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      handshake: 'Handshake',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: CancelHandshakeResponseBodyHandshake,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelHandshakeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelHandshakeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelHandshakeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAccountEmailRequest extends $tea.Model {
  accountId?: string;
  email?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      email: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAccountEmailResponseBody extends $tea.Model {
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

export class ChangeAccountEmailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeAccountEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeAccountEmailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountDeleteRequest extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountDeleteResponseBody extends $tea.Model {
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

export class CheckAccountDeleteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckAccountDeleteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckAccountDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateControlPolicyRequest extends $tea.Model {
  description?: string;
  effectScope?: string;
  policyDocument?: string;
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      effectScope: 'EffectScope',
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      effectScope: 'string',
      policyDocument: 'string',
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateControlPolicyResponseBody extends $tea.Model {
  controlPolicy?: CreateControlPolicyResponseBodyControlPolicy;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      controlPolicy: 'ControlPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicy: CreateControlPolicyResponseBodyControlPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderRequest extends $tea.Model {
  folderName?: string;
  parentFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderName: 'string',
      parentFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponseBody extends $tea.Model {
  folder?: CreateFolderResponseBodyFolder;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: CreateFolderResponseBodyFolder,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceAccountRequest extends $tea.Model {
  accountNamePrefix?: string;
  displayName?: string;
  parentFolderId?: string;
  payerAccountId?: string;
  resellAccountType?: string;
  tag?: CreateResourceAccountRequestTag[];
  static names(): { [key: string]: string } {
    return {
      accountNamePrefix: 'AccountNamePrefix',
      displayName: 'DisplayName',
      parentFolderId: 'ParentFolderId',
      payerAccountId: 'PayerAccountId',
      resellAccountType: 'ResellAccountType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNamePrefix: 'string',
      displayName: 'string',
      parentFolderId: 'string',
      payerAccountId: 'string',
      resellAccountType: 'string',
      tag: { 'type': 'array', 'itemType': CreateResourceAccountRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceAccountResponseBody extends $tea.Model {
  account?: CreateResourceAccountResponseBodyAccount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: CreateResourceAccountResponseBodyAccount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateResourceAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateResourceAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeclineHandshakeRequest extends $tea.Model {
  handshakeId?: string;
  static names(): { [key: string]: string } {
    return {
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeclineHandshakeResponseBody extends $tea.Model {
  handshake?: DeclineHandshakeResponseBodyHandshake;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      handshake: 'Handshake',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: DeclineHandshakeResponseBodyHandshake,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeclineHandshakeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeclineHandshakeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeclineHandshakeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountRequest extends $tea.Model {
  abandonableCheckId?: string[];
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      abandonableCheckId: 'AbandonableCheckId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonableCheckId: { 'type': 'array', 'itemType': 'string' },
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountShrinkRequest extends $tea.Model {
  abandonableCheckIdShrink?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      abandonableCheckIdShrink: 'AbandonableCheckId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonableCheckIdShrink: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponseBody extends $tea.Model {
  deletionType?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deletionType: 'DeletionType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionType: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteControlPolicyRequest extends $tea.Model {
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteControlPolicyResponseBody extends $tea.Model {
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

export class DeleteControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderRequest extends $tea.Model {
  folderId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponseBody extends $tea.Model {
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

export class DeleteFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterDelegatedAdministratorRequest extends $tea.Model {
  accountId?: string;
  servicePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      servicePrincipal: 'ServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      servicePrincipal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterDelegatedAdministratorResponseBody extends $tea.Model {
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

export class DeregisterDelegatedAdministratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeregisterDelegatedAdministratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeregisterDelegatedAdministratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyResourceDirectoryResponseBody extends $tea.Model {
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

export class DestroyResourceDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DestroyResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DestroyResourceDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachControlPolicyRequest extends $tea.Model {
  policyId?: string;
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      targetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachControlPolicyResponseBody extends $tea.Model {
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

export class DetachControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetachControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableControlPolicyResponseBody extends $tea.Model {
  enablementStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enablementStatus: 'EnablementStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablementStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableControlPolicyResponseBody extends $tea.Model {
  enablementStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enablementStatus: 'EnablementStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablementStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableResourceDirectoryRequest extends $tea.Model {
  enableMode?: string;
  MAName?: string;
  MASecureMobilePhone?: string;
  verificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      enableMode: 'EnableMode',
      MAName: 'MAName',
      MASecureMobilePhone: 'MASecureMobilePhone',
      verificationCode: 'VerificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMode: 'string',
      MAName: 'string',
      MASecureMobilePhone: 'string',
      verificationCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableResourceDirectoryResponseBody extends $tea.Model {
  requestId?: string;
  resourceDirectory?: EnableResourceDirectoryResponseBodyResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceDirectory: 'ResourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceDirectory: EnableResourceDirectoryResponseBodyResourceDirectory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableResourceDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableResourceDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountRequest extends $tea.Model {
  accountId?: string;
  includeTags?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      includeTags: 'IncludeTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      includeTags: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountResponseBody extends $tea.Model {
  account?: GetAccountResponseBodyAccount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: GetAccountResponseBodyAccount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionCheckResultRequest extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionCheckResultResponseBody extends $tea.Model {
  accountDeletionCheckResultInfo?: GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDeletionCheckResultInfo: 'AccountDeletionCheckResultInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDeletionCheckResultInfo: GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionCheckResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccountDeletionCheckResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAccountDeletionCheckResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionStatusRequest extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionStatusResponseBody extends $tea.Model {
  rdAccountDeletionStatus?: GetAccountDeletionStatusResponseBodyRdAccountDeletionStatus;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      rdAccountDeletionStatus: 'RdAccountDeletionStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdAccountDeletionStatus: GetAccountDeletionStatusResponseBodyRdAccountDeletionStatus,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccountDeletionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAccountDeletionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlPolicyRequest extends $tea.Model {
  language?: string;
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlPolicyResponseBody extends $tea.Model {
  controlPolicy?: GetControlPolicyResponseBodyControlPolicy;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      controlPolicy: 'ControlPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicy: GetControlPolicyResponseBodyControlPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlPolicyEnablementStatusResponseBody extends $tea.Model {
  enablementStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enablementStatus: 'EnablementStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablementStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlPolicyEnablementStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetControlPolicyEnablementStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetControlPolicyEnablementStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderRequest extends $tea.Model {
  folderId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponseBody extends $tea.Model {
  folder?: GetFolderResponseBodyFolder;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: GetFolderResponseBodyFolder,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHandshakeRequest extends $tea.Model {
  handshakeId?: string;
  static names(): { [key: string]: string } {
    return {
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHandshakeResponseBody extends $tea.Model {
  handshake?: GetHandshakeResponseBodyHandshake;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      handshake: 'Handshake',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: GetHandshakeResponseBodyHandshake,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHandshakeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHandshakeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHandshakeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayerForAccountRequest extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayerForAccountResponseBody extends $tea.Model {
  payerAccountId?: string;
  payerAccountName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      payerAccountId: 'PayerAccountId',
      payerAccountName: 'PayerAccountName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payerAccountId: 'string',
      payerAccountName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayerForAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPayerForAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPayerForAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryResponseBody extends $tea.Model {
  requestId?: string;
  resourceDirectory?: GetResourceDirectoryResponseBodyResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceDirectory: 'ResourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceDirectory: GetResourceDirectoryResponseBodyResourceDirectory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteAccountToResourceDirectoryRequest extends $tea.Model {
  note?: string;
  tag?: InviteAccountToResourceDirectoryRequestTag[];
  targetEntity?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      note: 'Note',
      tag: 'Tag',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
      tag: { 'type': 'array', 'itemType': InviteAccountToResourceDirectoryRequestTag },
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteAccountToResourceDirectoryResponseBody extends $tea.Model {
  handshake?: InviteAccountToResourceDirectoryResponseBodyHandshake;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      handshake: 'Handshake',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: InviteAccountToResourceDirectoryResponseBodyHandshake,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteAccountToResourceDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InviteAccountToResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InviteAccountToResourceDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsRequest extends $tea.Model {
  includeTags?: boolean;
  pageNumber?: number;
  pageSize?: number;
  queryKeyword?: string;
  tag?: ListAccountsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      includeTags: 'IncludeTags',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeyword: 'QueryKeyword',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeTags: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeyword: 'string',
      tag: { 'type': 'array', 'itemType': ListAccountsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsResponseBody extends $tea.Model {
  accounts?: ListAccountsResponseBodyAccounts;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: ListAccountsResponseBodyAccounts,
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

export class ListAccountsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentRequest extends $tea.Model {
  includeTags?: boolean;
  pageNumber?: number;
  pageSize?: number;
  parentFolderId?: string;
  queryKeyword?: string;
  tag?: ListAccountsForParentRequestTag[];
  static names(): { [key: string]: string } {
    return {
      includeTags: 'IncludeTags',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentFolderId: 'ParentFolderId',
      queryKeyword: 'QueryKeyword',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeTags: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      parentFolderId: 'string',
      queryKeyword: 'string',
      tag: { 'type': 'array', 'itemType': ListAccountsForParentRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentResponseBody extends $tea.Model {
  accounts?: ListAccountsForParentResponseBodyAccounts;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: ListAccountsForParentResponseBodyAccounts,
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

export class ListAccountsForParentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAccountsForParentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAccountsForParentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsRequest extends $tea.Model {
  childId?: string;
  static names(): { [key: string]: string } {
    return {
      childId: 'ChildId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsResponseBody extends $tea.Model {
  folders?: ListAncestorsResponseBodyFolders;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folders: 'Folders',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folders: ListAncestorsResponseBodyFolders,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAncestorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAncestorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPoliciesRequest extends $tea.Model {
  language?: string;
  pageNumber?: number;
  pageSize?: number;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPoliciesResponseBody extends $tea.Model {
  controlPolicies?: ListControlPoliciesResponseBodyControlPolicies;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      controlPolicies: 'ControlPolicies',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicies: ListControlPoliciesResponseBodyControlPolicies,
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

export class ListControlPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListControlPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListControlPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPolicyAttachmentsForTargetRequest extends $tea.Model {
  language?: string;
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      targetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPolicyAttachmentsForTargetResponseBody extends $tea.Model {
  controlPolicyAttachments?: ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachments;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      controlPolicyAttachments: 'ControlPolicyAttachments',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicyAttachments: ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachments,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPolicyAttachmentsForTargetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListControlPolicyAttachmentsForTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListControlPolicyAttachmentsForTargetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedAdministratorsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  servicePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      servicePrincipal: 'ServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      servicePrincipal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedAdministratorsResponseBody extends $tea.Model {
  accounts?: ListDelegatedAdministratorsResponseBodyAccounts;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: ListDelegatedAdministratorsResponseBodyAccounts,
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

export class ListDelegatedAdministratorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDelegatedAdministratorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDelegatedAdministratorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedServicesForAccountRequest extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedServicesForAccountResponseBody extends $tea.Model {
  delegatedServices?: ListDelegatedServicesForAccountResponseBodyDelegatedServices;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      delegatedServices: 'DelegatedServices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegatedServices: ListDelegatedServicesForAccountResponseBodyDelegatedServices,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedServicesForAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDelegatedServicesForAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDelegatedServicesForAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  parentFolderId?: string;
  queryKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentFolderId: 'ParentFolderId',
      queryKeyword: 'QueryKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parentFolderId: 'string',
      queryKeyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentResponseBody extends $tea.Model {
  folders?: ListFoldersForParentResponseBodyFolders;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      folders: 'Folders',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folders: ListFoldersForParentResponseBodyFolders,
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

export class ListFoldersForParentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFoldersForParentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFoldersForParentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForAccountRequest extends $tea.Model {
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

export class ListHandshakesForAccountResponseBody extends $tea.Model {
  handshakes?: ListHandshakesForAccountResponseBodyHandshakes;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      handshakes: 'Handshakes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakes: ListHandshakesForAccountResponseBodyHandshakes,
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

export class ListHandshakesForAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListHandshakesForAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHandshakesForAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForResourceDirectoryRequest extends $tea.Model {
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

export class ListHandshakesForResourceDirectoryResponseBody extends $tea.Model {
  handshakes?: ListHandshakesForResourceDirectoryResponseBodyHandshakes;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      handshakes: 'Handshakes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakes: ListHandshakesForResourceDirectoryResponseBodyHandshakes,
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

export class ListHandshakesForResourceDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListHandshakesForResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHandshakesForResourceDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListTargetAttachmentsForControlPolicyRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  policyId?: string;
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
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetAttachmentsForControlPolicyResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  targetAttachments?: ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachments;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      targetAttachments: 'TargetAttachments',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      targetAttachments: ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachments,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetAttachmentsForControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTargetAttachmentsForControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTargetAttachmentsForControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusRequest extends $tea.Model {
  adminAccountId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      adminAccountId: 'AdminAccountId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminAccountId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusResponseBody extends $tea.Model {
  enabledServicePrincipals?: ListTrustedServiceStatusResponseBodyEnabledServicePrincipals;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      enabledServicePrincipals: 'EnabledServicePrincipals',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledServicePrincipals: ListTrustedServiceStatusResponseBodyEnabledServicePrincipals,
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

export class ListTrustedServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTrustedServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrustedServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAccountRequest extends $tea.Model {
  accountId?: string;
  destinationFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      destinationFolderId: 'DestinationFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      destinationFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAccountResponseBody extends $tea.Model {
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

export class MoveAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: MoveAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDelegatedAdministratorRequest extends $tea.Model {
  accountId?: string;
  servicePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      servicePrincipal: 'ServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      servicePrincipal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDelegatedAdministratorResponseBody extends $tea.Model {
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

export class RegisterDelegatedAdministratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RegisterDelegatedAdministratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterDelegatedAdministratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveCloudAccountRequest extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveCloudAccountResponseBody extends $tea.Model {
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

export class RemoveCloudAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveCloudAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveCloudAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryChangeAccountEmailRequest extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryChangeAccountEmailResponseBody extends $tea.Model {
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

export class RetryChangeAccountEmailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RetryChangeAccountEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RetryChangeAccountEmailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationCodeForBindSecureMobilePhoneRequest extends $tea.Model {
  accountId?: string;
  secureMobilePhone?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      secureMobilePhone: 'SecureMobilePhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      secureMobilePhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationCodeForBindSecureMobilePhoneResponseBody extends $tea.Model {
  expirationDate?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      expirationDate: 'ExpirationDate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationDate: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationCodeForBindSecureMobilePhoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendVerificationCodeForBindSecureMobilePhoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendVerificationCodeForBindSecureMobilePhoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationCodeForEnableRDRequest extends $tea.Model {
  secureMobilePhone?: string;
  static names(): { [key: string]: string } {
    return {
      secureMobilePhone: 'SecureMobilePhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secureMobilePhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationCodeForEnableRDResponseBody extends $tea.Model {
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

export class SendVerificationCodeForEnableRDResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendVerificationCodeForEnableRDResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendVerificationCodeForEnableRDResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMemberDeletionPermissionRequest extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMemberDeletionPermissionResponseBody extends $tea.Model {
  managementAccountId?: string;
  memberDeletionStatus?: string;
  requestId?: string;
  resourceDirectoryId?: string;
  static names(): { [key: string]: string } {
    return {
      managementAccountId: 'ManagementAccountId',
      memberDeletionStatus: 'MemberDeletionStatus',
      requestId: 'RequestId',
      resourceDirectoryId: 'ResourceDirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managementAccountId: 'string',
      memberDeletionStatus: 'string',
      requestId: 'string',
      resourceDirectoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMemberDeletionPermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetMemberDeletionPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetMemberDeletionPermissionResponseBody,
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

export class UpdateAccountRequest extends $tea.Model {
  accountId?: string;
  newAccountType?: string;
  newDisplayName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      newAccountType: 'NewAccountType',
      newDisplayName: 'NewDisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      newAccountType: 'string',
      newDisplayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountResponseBody extends $tea.Model {
  account?: UpdateAccountResponseBodyAccount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: UpdateAccountResponseBodyAccount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateControlPolicyRequest extends $tea.Model {
  newDescription?: string;
  newPolicyDocument?: string;
  newPolicyName?: string;
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      newDescription: 'NewDescription',
      newPolicyDocument: 'NewPolicyDocument',
      newPolicyName: 'NewPolicyName',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newDescription: 'string',
      newPolicyDocument: 'string',
      newPolicyName: 'string',
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateControlPolicyResponseBody extends $tea.Model {
  controlPolicy?: UpdateControlPolicyResponseBodyControlPolicy;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      controlPolicy: 'ControlPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicy: UpdateControlPolicyResponseBodyControlPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderRequest extends $tea.Model {
  folderId?: string;
  newFolderName?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      newFolderName: 'NewFolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      newFolderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponseBody extends $tea.Model {
  folder?: UpdateFolderResponseBodyFolder;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: UpdateFolderResponseBodyFolder,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptHandshakeResponseBodyHandshake extends $tea.Model {
  createTime?: string;
  expireTime?: string;
  handshakeId?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  modifyTime?: string;
  note?: string;
  resourceDirectoryId?: string;
  status?: string;
  targetEntity?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      handshakeId: 'HandshakeId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      note: 'Note',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      handshakeId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      note: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelHandshakeResponseBodyHandshake extends $tea.Model {
  createTime?: string;
  expireTime?: string;
  handshakeId?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  modifyTime?: string;
  note?: string;
  resourceDirectoryId?: string;
  status?: string;
  targetEntity?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      handshakeId: 'HandshakeId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      note: 'Note',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      handshakeId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      note: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateControlPolicyResponseBodyControlPolicy extends $tea.Model {
  attachmentCount?: string;
  createDate?: string;
  description?: string;
  effectScope?: string;
  policyId?: string;
  policyName?: string;
  policyType?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      description: 'Description',
      effectScope: 'EffectScope',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'string',
      createDate: 'string',
      description: 'string',
      effectScope: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponseBodyFolder extends $tea.Model {
  createTime?: string;
  folderId?: string;
  folderName?: string;
  parentFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
      parentFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceAccountRequestTag extends $tea.Model {
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

export class CreateResourceAccountResponseBodyAccount extends $tea.Model {
  accountId?: string;
  accountName?: string;
  displayName?: string;
  folderId?: string;
  joinMethod?: string;
  joinTime?: string;
  modifyTime?: string;
  resourceDirectoryId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      displayName: 'string',
      folderId: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeclineHandshakeResponseBodyHandshake extends $tea.Model {
  createTime?: string;
  expireTime?: string;
  handshakeId?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  modifyTime?: string;
  note?: string;
  resourceDirectoryId?: string;
  status?: string;
  targetEntity?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      handshakeId: 'HandshakeId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      note: 'Note',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      handshakeId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      note: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableResourceDirectoryResponseBodyResourceDirectory extends $tea.Model {
  createTime?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  resourceDirectoryId?: string;
  rootFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      resourceDirectoryId: 'ResourceDirectoryId',
      rootFolderId: 'RootFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      resourceDirectoryId: 'string',
      rootFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountResponseBodyAccountTags extends $tea.Model {
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

export class GetAccountResponseBodyAccount extends $tea.Model {
  accountId?: string;
  accountName?: string;
  displayName?: string;
  emailStatus?: string;
  folderId?: string;
  identityInformation?: string;
  joinMethod?: string;
  joinTime?: string;
  location?: string;
  modifyTime?: string;
  resourceDirectoryId?: string;
  resourceDirectoryPath?: string;
  status?: string;
  tags?: GetAccountResponseBodyAccountTags[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      displayName: 'DisplayName',
      emailStatus: 'EmailStatus',
      folderId: 'FolderId',
      identityInformation: 'IdentityInformation',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      location: 'Location',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      resourceDirectoryPath: 'ResourceDirectoryPath',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      displayName: 'string',
      emailStatus: 'string',
      folderId: 'string',
      identityInformation: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      location: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      resourceDirectoryPath: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetAccountResponseBodyAccountTags },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoAbandonableChecks extends $tea.Model {
  checkId?: string;
  checkName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkName: 'CheckName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      checkName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoNotAllowReason extends $tea.Model {
  checkId?: string;
  checkName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkName: 'CheckName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      checkName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfo extends $tea.Model {
  abandonableChecks?: GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoAbandonableChecks[];
  allowDelete?: string;
  notAllowReason?: GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoNotAllowReason[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      abandonableChecks: 'AbandonableChecks',
      allowDelete: 'AllowDelete',
      notAllowReason: 'NotAllowReason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonableChecks: { 'type': 'array', 'itemType': GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoAbandonableChecks },
      allowDelete: 'string',
      notAllowReason: { 'type': 'array', 'itemType': GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoNotAllowReason },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionStatusResponseBodyRdAccountDeletionStatusFailReasonList extends $tea.Model {
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionStatusResponseBodyRdAccountDeletionStatus extends $tea.Model {
  accountId?: string;
  createTime?: string;
  deletionTime?: string;
  deletionType?: string;
  failReasonList?: GetAccountDeletionStatusResponseBodyRdAccountDeletionStatusFailReasonList[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createTime: 'CreateTime',
      deletionTime: 'DeletionTime',
      deletionType: 'DeletionType',
      failReasonList: 'FailReasonList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createTime: 'string',
      deletionTime: 'string',
      deletionType: 'string',
      failReasonList: { 'type': 'array', 'itemType': GetAccountDeletionStatusResponseBodyRdAccountDeletionStatusFailReasonList },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlPolicyResponseBodyControlPolicy extends $tea.Model {
  attachmentCount?: string;
  createDate?: string;
  description?: string;
  effectScope?: string;
  policyDocument?: string;
  policyId?: string;
  policyName?: string;
  policyType?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      description: 'Description',
      effectScope: 'EffectScope',
      policyDocument: 'PolicyDocument',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'string',
      createDate: 'string',
      description: 'string',
      effectScope: 'string',
      policyDocument: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponseBodyFolder extends $tea.Model {
  createTime?: string;
  folderId?: string;
  folderName?: string;
  parentFolderId?: string;
  resourceDirectoryPath?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
      resourceDirectoryPath: 'ResourceDirectoryPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
      parentFolderId: 'string',
      resourceDirectoryPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHandshakeResponseBodyHandshake extends $tea.Model {
  createTime?: string;
  expireTime?: string;
  handshakeId?: string;
  invitedAccountRealName?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  masterAccountRealName?: string;
  modifyTime?: string;
  note?: string;
  resourceDirectoryId?: string;
  status?: string;
  targetEntity?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      handshakeId: 'HandshakeId',
      invitedAccountRealName: 'InvitedAccountRealName',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      masterAccountRealName: 'MasterAccountRealName',
      modifyTime: 'ModifyTime',
      note: 'Note',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      handshakeId: 'string',
      invitedAccountRealName: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      masterAccountRealName: 'string',
      modifyTime: 'string',
      note: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryResponseBodyResourceDirectory extends $tea.Model {
  controlPolicyStatus?: string;
  createTime?: string;
  identityInformation?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  memberDeletionStatus?: string;
  resourceDirectoryId?: string;
  rootFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      controlPolicyStatus: 'ControlPolicyStatus',
      createTime: 'CreateTime',
      identityInformation: 'IdentityInformation',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      memberDeletionStatus: 'MemberDeletionStatus',
      resourceDirectoryId: 'ResourceDirectoryId',
      rootFolderId: 'RootFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicyStatus: 'string',
      createTime: 'string',
      identityInformation: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      memberDeletionStatus: 'string',
      resourceDirectoryId: 'string',
      rootFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteAccountToResourceDirectoryRequestTag extends $tea.Model {
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

export class InviteAccountToResourceDirectoryResponseBodyHandshake extends $tea.Model {
  createTime?: string;
  expireTime?: string;
  handshakeId?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  modifyTime?: string;
  note?: string;
  resourceDirectoryId?: string;
  status?: string;
  targetEntity?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      handshakeId: 'HandshakeId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      note: 'Note',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      handshakeId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      note: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsRequestTag extends $tea.Model {
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

export class ListAccountsResponseBodyAccountsAccountTagsTag extends $tea.Model {
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

export class ListAccountsResponseBodyAccountsAccountTags extends $tea.Model {
  tag?: ListAccountsResponseBodyAccountsAccountTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListAccountsResponseBodyAccountsAccountTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsResponseBodyAccountsAccount extends $tea.Model {
  accountId?: string;
  accountName?: string;
  displayName?: string;
  folderId?: string;
  joinMethod?: string;
  joinTime?: string;
  modifyTime?: string;
  resourceDirectoryId?: string;
  resourceDirectoryPath?: string;
  status?: string;
  tags?: ListAccountsResponseBodyAccountsAccountTags;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      resourceDirectoryPath: 'ResourceDirectoryPath',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      displayName: 'string',
      folderId: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      resourceDirectoryPath: 'string',
      status: 'string',
      tags: ListAccountsResponseBodyAccountsAccountTags,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsResponseBodyAccounts extends $tea.Model {
  account?: ListAccountsResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': ListAccountsResponseBodyAccountsAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentRequestTag extends $tea.Model {
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

export class ListAccountsForParentResponseBodyAccountsAccountTagsTag extends $tea.Model {
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

export class ListAccountsForParentResponseBodyAccountsAccountTags extends $tea.Model {
  tag?: ListAccountsForParentResponseBodyAccountsAccountTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListAccountsForParentResponseBodyAccountsAccountTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentResponseBodyAccountsAccount extends $tea.Model {
  accountId?: string;
  accountName?: string;
  displayName?: string;
  folderId?: string;
  joinMethod?: string;
  joinTime?: string;
  modifyTime?: string;
  resourceDirectoryId?: string;
  status?: string;
  tags?: ListAccountsForParentResponseBodyAccountsAccountTags;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      displayName: 'string',
      folderId: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      tags: ListAccountsForParentResponseBodyAccountsAccountTags,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentResponseBodyAccounts extends $tea.Model {
  account?: ListAccountsForParentResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': ListAccountsForParentResponseBodyAccountsAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsResponseBodyFoldersFolder extends $tea.Model {
  createTime?: string;
  folderId?: string;
  folderName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsResponseBodyFolders extends $tea.Model {
  folder?: ListAncestorsResponseBodyFoldersFolder[];
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: { 'type': 'array', 'itemType': ListAncestorsResponseBodyFoldersFolder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPoliciesResponseBodyControlPoliciesControlPolicy extends $tea.Model {
  attachmentCount?: string;
  createDate?: string;
  description?: string;
  effectScope?: string;
  policyId?: string;
  policyName?: string;
  policyType?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      description: 'Description',
      effectScope: 'EffectScope',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'string',
      createDate: 'string',
      description: 'string',
      effectScope: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPoliciesResponseBodyControlPolicies extends $tea.Model {
  controlPolicy?: ListControlPoliciesResponseBodyControlPoliciesControlPolicy[];
  static names(): { [key: string]: string } {
    return {
      controlPolicy: 'ControlPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicy: { 'type': 'array', 'itemType': ListControlPoliciesResponseBodyControlPoliciesControlPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachmentsControlPolicyAttachment extends $tea.Model {
  attachDate?: string;
  description?: string;
  effectScope?: string;
  policyId?: string;
  policyName?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      description: 'Description',
      effectScope: 'EffectScope',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      description: 'string',
      effectScope: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachments extends $tea.Model {
  controlPolicyAttachment?: ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachmentsControlPolicyAttachment[];
  static names(): { [key: string]: string } {
    return {
      controlPolicyAttachment: 'ControlPolicyAttachment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicyAttachment: { 'type': 'array', 'itemType': ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachmentsControlPolicyAttachment },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedAdministratorsResponseBodyAccountsAccount extends $tea.Model {
  accountId?: string;
  delegationEnabledTime?: string;
  displayName?: string;
  joinMethod?: string;
  servicePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      delegationEnabledTime: 'DelegationEnabledTime',
      displayName: 'DisplayName',
      joinMethod: 'JoinMethod',
      servicePrincipal: 'ServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      delegationEnabledTime: 'string',
      displayName: 'string',
      joinMethod: 'string',
      servicePrincipal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedAdministratorsResponseBodyAccounts extends $tea.Model {
  account?: ListDelegatedAdministratorsResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': ListDelegatedAdministratorsResponseBodyAccountsAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedServicesForAccountResponseBodyDelegatedServicesDelegatedService extends $tea.Model {
  delegationEnabledTime?: string;
  servicePrincipal?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      delegationEnabledTime: 'DelegationEnabledTime',
      servicePrincipal: 'ServicePrincipal',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegationEnabledTime: 'string',
      servicePrincipal: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedServicesForAccountResponseBodyDelegatedServices extends $tea.Model {
  delegatedService?: ListDelegatedServicesForAccountResponseBodyDelegatedServicesDelegatedService[];
  static names(): { [key: string]: string } {
    return {
      delegatedService: 'DelegatedService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegatedService: { 'type': 'array', 'itemType': ListDelegatedServicesForAccountResponseBodyDelegatedServicesDelegatedService },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentResponseBodyFoldersFolder extends $tea.Model {
  createTime?: string;
  folderId?: string;
  folderName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentResponseBodyFolders extends $tea.Model {
  folder?: ListFoldersForParentResponseBodyFoldersFolder[];
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: { 'type': 'array', 'itemType': ListFoldersForParentResponseBodyFoldersFolder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForAccountResponseBodyHandshakesHandshake extends $tea.Model {
  createTime?: string;
  expireTime?: string;
  handshakeId?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  modifyTime?: string;
  note?: string;
  resourceDirectoryId?: string;
  status?: string;
  targetEntity?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      handshakeId: 'HandshakeId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      note: 'Note',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      handshakeId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      note: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForAccountResponseBodyHandshakes extends $tea.Model {
  handshake?: ListHandshakesForAccountResponseBodyHandshakesHandshake[];
  static names(): { [key: string]: string } {
    return {
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: { 'type': 'array', 'itemType': ListHandshakesForAccountResponseBodyHandshakesHandshake },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForResourceDirectoryResponseBodyHandshakesHandshake extends $tea.Model {
  createTime?: string;
  expireTime?: string;
  handshakeId?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  modifyTime?: string;
  note?: string;
  resourceDirectoryId?: string;
  status?: string;
  targetEntity?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      handshakeId: 'HandshakeId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      note: 'Note',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      handshakeId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      note: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForResourceDirectoryResponseBodyHandshakes extends $tea.Model {
  handshake?: ListHandshakesForResourceDirectoryResponseBodyHandshakesHandshake[];
  static names(): { [key: string]: string } {
    return {
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: { 'type': 'array', 'itemType': ListHandshakesForResourceDirectoryResponseBodyHandshakesHandshake },
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

export class ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachmentsTargetAttachment extends $tea.Model {
  attachDate?: string;
  targetId?: string;
  targetName?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      targetId: 'string',
      targetName: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachments extends $tea.Model {
  targetAttachment?: ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachmentsTargetAttachment[];
  static names(): { [key: string]: string } {
    return {
      targetAttachment: 'TargetAttachment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetAttachment: { 'type': 'array', 'itemType': ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachmentsTargetAttachment },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusResponseBodyEnabledServicePrincipalsEnabledServicePrincipal extends $tea.Model {
  enableTime?: string;
  servicePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      enableTime: 'EnableTime',
      servicePrincipal: 'ServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTime: 'string',
      servicePrincipal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusResponseBodyEnabledServicePrincipals extends $tea.Model {
  enabledServicePrincipal?: ListTrustedServiceStatusResponseBodyEnabledServicePrincipalsEnabledServicePrincipal[];
  static names(): { [key: string]: string } {
    return {
      enabledServicePrincipal: 'EnabledServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledServicePrincipal: { 'type': 'array', 'itemType': ListTrustedServiceStatusResponseBodyEnabledServicePrincipalsEnabledServicePrincipal },
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

export class UpdateAccountResponseBodyAccount extends $tea.Model {
  accountId?: string;
  accountName?: string;
  displayName?: string;
  folderId?: string;
  joinMethod?: string;
  joinTime?: string;
  modifyTime?: string;
  resourceDirectoryId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      displayName: 'string',
      folderId: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateControlPolicyResponseBodyControlPolicy extends $tea.Model {
  attachmentCount?: string;
  createDate?: string;
  description?: string;
  effectScope?: string;
  policyId?: string;
  policyName?: string;
  policyType?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      description: 'Description',
      effectScope: 'EffectScope',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'string',
      createDate: 'string',
      description: 'string',
      effectScope: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponseBodyFolder extends $tea.Model {
  createTime?: string;
  folderId?: string;
  folderName?: string;
  parentFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
      parentFolderId: 'string',
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
    this._endpoint = this.getEndpoint("resourcedirectorymaster", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async acceptHandshakeWithOptions(request: AcceptHandshakeRequest, runtime: $Util.RuntimeOptions): Promise<AcceptHandshakeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.handshakeId)) {
      query["HandshakeId"] = request.handshakeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AcceptHandshake",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AcceptHandshakeResponse>(await this.callApi(params, req, runtime), new AcceptHandshakeResponse({}));
  }

  async acceptHandshake(request: AcceptHandshakeRequest): Promise<AcceptHandshakeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acceptHandshakeWithOptions(request, runtime);
  }

  async attachControlPolicyWithOptions(request: AttachControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<AttachControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachControlPolicyResponse>(await this.callApi(params, req, runtime), new AttachControlPolicyResponse({}));
  }

  async attachControlPolicy(request: AttachControlPolicyRequest): Promise<AttachControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachControlPolicyWithOptions(request, runtime);
  }

  async bindSecureMobilePhoneWithOptions(request: BindSecureMobilePhoneRequest, runtime: $Util.RuntimeOptions): Promise<BindSecureMobilePhoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.secureMobilePhone)) {
      query["SecureMobilePhone"] = request.secureMobilePhone;
    }

    if (!Util.isUnset(request.verificationCode)) {
      query["VerificationCode"] = request.verificationCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindSecureMobilePhone",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindSecureMobilePhoneResponse>(await this.callApi(params, req, runtime), new BindSecureMobilePhoneResponse({}));
  }

  async bindSecureMobilePhone(request: BindSecureMobilePhoneRequest): Promise<BindSecureMobilePhoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindSecureMobilePhoneWithOptions(request, runtime);
  }

  async cancelChangeAccountEmailWithOptions(request: CancelChangeAccountEmailRequest, runtime: $Util.RuntimeOptions): Promise<CancelChangeAccountEmailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelChangeAccountEmail",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelChangeAccountEmailResponse>(await this.callApi(params, req, runtime), new CancelChangeAccountEmailResponse({}));
  }

  async cancelChangeAccountEmail(request: CancelChangeAccountEmailRequest): Promise<CancelChangeAccountEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelChangeAccountEmailWithOptions(request, runtime);
  }

  async cancelHandshakeWithOptions(request: CancelHandshakeRequest, runtime: $Util.RuntimeOptions): Promise<CancelHandshakeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.handshakeId)) {
      query["HandshakeId"] = request.handshakeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelHandshake",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelHandshakeResponse>(await this.callApi(params, req, runtime), new CancelHandshakeResponse({}));
  }

  async cancelHandshake(request: CancelHandshakeRequest): Promise<CancelHandshakeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelHandshakeWithOptions(request, runtime);
  }

  async changeAccountEmailWithOptions(request: ChangeAccountEmailRequest, runtime: $Util.RuntimeOptions): Promise<ChangeAccountEmailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeAccountEmail",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeAccountEmailResponse>(await this.callApi(params, req, runtime), new ChangeAccountEmailResponse({}));
  }

  async changeAccountEmail(request: ChangeAccountEmailRequest): Promise<ChangeAccountEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeAccountEmailWithOptions(request, runtime);
  }

  async checkAccountDeleteWithOptions(request: CheckAccountDeleteRequest, runtime: $Util.RuntimeOptions): Promise<CheckAccountDeleteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckAccountDelete",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckAccountDeleteResponse>(await this.callApi(params, req, runtime), new CheckAccountDeleteResponse({}));
  }

  async checkAccountDelete(request: CheckAccountDeleteRequest): Promise<CheckAccountDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkAccountDeleteWithOptions(request, runtime);
  }

  async createControlPolicyWithOptions(request: CreateControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.effectScope)) {
      query["EffectScope"] = request.effectScope;
    }

    if (!Util.isUnset(request.policyDocument)) {
      query["PolicyDocument"] = request.policyDocument;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateControlPolicyResponse>(await this.callApi(params, req, runtime), new CreateControlPolicyResponse({}));
  }

  async createControlPolicy(request: CreateControlPolicyRequest): Promise<CreateControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createControlPolicyWithOptions(request, runtime);
  }

  async createFolderWithOptions(request: CreateFolderRequest, runtime: $Util.RuntimeOptions): Promise<CreateFolderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.folderName)) {
      query["FolderName"] = request.folderName;
    }

    if (!Util.isUnset(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFolder",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFolderResponse>(await this.callApi(params, req, runtime), new CreateFolderResponse({}));
  }

  async createFolder(request: CreateFolderRequest): Promise<CreateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFolderWithOptions(request, runtime);
  }

  async createResourceAccountWithOptions(request: CreateResourceAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountNamePrefix)) {
      query["AccountNamePrefix"] = request.accountNamePrefix;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!Util.isUnset(request.payerAccountId)) {
      query["PayerAccountId"] = request.payerAccountId;
    }

    if (!Util.isUnset(request.resellAccountType)) {
      query["ResellAccountType"] = request.resellAccountType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateResourceAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceAccountResponse>(await this.callApi(params, req, runtime), new CreateResourceAccountResponse({}));
  }

  async createResourceAccount(request: CreateResourceAccountRequest): Promise<CreateResourceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceAccountWithOptions(request, runtime);
  }

  async declineHandshakeWithOptions(request: DeclineHandshakeRequest, runtime: $Util.RuntimeOptions): Promise<DeclineHandshakeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.handshakeId)) {
      query["HandshakeId"] = request.handshakeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeclineHandshake",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeclineHandshakeResponse>(await this.callApi(params, req, runtime), new DeclineHandshakeResponse({}));
  }

  async declineHandshake(request: DeclineHandshakeRequest): Promise<DeclineHandshakeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.declineHandshakeWithOptions(request, runtime);
  }

  async deleteAccountWithOptions(tmpReq: DeleteAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccountResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteAccountShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.abandonableCheckId)) {
      request.abandonableCheckIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.abandonableCheckId, "AbandonableCheckId", "json");
    }

    let query = { };
    if (!Util.isUnset(request.abandonableCheckIdShrink)) {
      query["AbandonableCheckId"] = request.abandonableCheckIdShrink;
    }

    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccountResponse>(await this.callApi(params, req, runtime), new DeleteAccountResponse({}));
  }

  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  async deleteControlPolicyWithOptions(request: DeleteControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteControlPolicyResponse>(await this.callApi(params, req, runtime), new DeleteControlPolicyResponse({}));
  }

  async deleteControlPolicy(request: DeleteControlPolicyRequest): Promise<DeleteControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteControlPolicyWithOptions(request, runtime);
  }

  async deleteFolderWithOptions(request: DeleteFolderRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFolderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFolder",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFolderResponse>(await this.callApi(params, req, runtime), new DeleteFolderResponse({}));
  }

  async deleteFolder(request: DeleteFolderRequest): Promise<DeleteFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFolderWithOptions(request, runtime);
  }

  async deregisterDelegatedAdministratorWithOptions(request: DeregisterDelegatedAdministratorRequest, runtime: $Util.RuntimeOptions): Promise<DeregisterDelegatedAdministratorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.servicePrincipal)) {
      query["ServicePrincipal"] = request.servicePrincipal;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeregisterDelegatedAdministrator",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeregisterDelegatedAdministratorResponse>(await this.callApi(params, req, runtime), new DeregisterDelegatedAdministratorResponse({}));
  }

  async deregisterDelegatedAdministrator(request: DeregisterDelegatedAdministratorRequest): Promise<DeregisterDelegatedAdministratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deregisterDelegatedAdministratorWithOptions(request, runtime);
  }

  async destroyResourceDirectoryWithOptions(runtime: $Util.RuntimeOptions): Promise<DestroyResourceDirectoryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DestroyResourceDirectory",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DestroyResourceDirectoryResponse>(await this.callApi(params, req, runtime), new DestroyResourceDirectoryResponse({}));
  }

  async destroyResourceDirectory(): Promise<DestroyResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.destroyResourceDirectoryWithOptions(runtime);
  }

  async detachControlPolicyWithOptions(request: DetachControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DetachControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachControlPolicyResponse>(await this.callApi(params, req, runtime), new DetachControlPolicyResponse({}));
  }

  async detachControlPolicy(request: DetachControlPolicyRequest): Promise<DetachControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachControlPolicyWithOptions(request, runtime);
  }

  async disableControlPolicyWithOptions(runtime: $Util.RuntimeOptions): Promise<DisableControlPolicyResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DisableControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableControlPolicyResponse>(await this.callApi(params, req, runtime), new DisableControlPolicyResponse({}));
  }

  async disableControlPolicy(): Promise<DisableControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableControlPolicyWithOptions(runtime);
  }

  async enableControlPolicyWithOptions(runtime: $Util.RuntimeOptions): Promise<EnableControlPolicyResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "EnableControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableControlPolicyResponse>(await this.callApi(params, req, runtime), new EnableControlPolicyResponse({}));
  }

  async enableControlPolicy(): Promise<EnableControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableControlPolicyWithOptions(runtime);
  }

  async enableResourceDirectoryWithOptions(request: EnableResourceDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<EnableResourceDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enableMode)) {
      query["EnableMode"] = request.enableMode;
    }

    if (!Util.isUnset(request.MAName)) {
      query["MAName"] = request.MAName;
    }

    if (!Util.isUnset(request.MASecureMobilePhone)) {
      query["MASecureMobilePhone"] = request.MASecureMobilePhone;
    }

    if (!Util.isUnset(request.verificationCode)) {
      query["VerificationCode"] = request.verificationCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableResourceDirectory",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableResourceDirectoryResponse>(await this.callApi(params, req, runtime), new EnableResourceDirectoryResponse({}));
  }

  async enableResourceDirectory(request: EnableResourceDirectoryRequest): Promise<EnableResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableResourceDirectoryWithOptions(request, runtime);
  }

  async getAccountWithOptions(request: GetAccountRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccountResponse>(await this.callApi(params, req, runtime), new GetAccountResponse({}));
  }

  async getAccount(request: GetAccountRequest): Promise<GetAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountWithOptions(request, runtime);
  }

  async getAccountDeletionCheckResultWithOptions(request: GetAccountDeletionCheckResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountDeletionCheckResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccountDeletionCheckResult",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccountDeletionCheckResultResponse>(await this.callApi(params, req, runtime), new GetAccountDeletionCheckResultResponse({}));
  }

  async getAccountDeletionCheckResult(request: GetAccountDeletionCheckResultRequest): Promise<GetAccountDeletionCheckResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountDeletionCheckResultWithOptions(request, runtime);
  }

  async getAccountDeletionStatusWithOptions(request: GetAccountDeletionStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountDeletionStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccountDeletionStatus",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccountDeletionStatusResponse>(await this.callApi(params, req, runtime), new GetAccountDeletionStatusResponse({}));
  }

  async getAccountDeletionStatus(request: GetAccountDeletionStatusRequest): Promise<GetAccountDeletionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountDeletionStatusWithOptions(request, runtime);
  }

  async getControlPolicyWithOptions(request: GetControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetControlPolicyResponse>(await this.callApi(params, req, runtime), new GetControlPolicyResponse({}));
  }

  async getControlPolicy(request: GetControlPolicyRequest): Promise<GetControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getControlPolicyWithOptions(request, runtime);
  }

  async getControlPolicyEnablementStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<GetControlPolicyEnablementStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetControlPolicyEnablementStatus",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetControlPolicyEnablementStatusResponse>(await this.callApi(params, req, runtime), new GetControlPolicyEnablementStatusResponse({}));
  }

  async getControlPolicyEnablementStatus(): Promise<GetControlPolicyEnablementStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getControlPolicyEnablementStatusWithOptions(runtime);
  }

  async getFolderWithOptions(request: GetFolderRequest, runtime: $Util.RuntimeOptions): Promise<GetFolderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFolder",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFolderResponse>(await this.callApi(params, req, runtime), new GetFolderResponse({}));
  }

  async getFolder(request: GetFolderRequest): Promise<GetFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFolderWithOptions(request, runtime);
  }

  async getHandshakeWithOptions(request: GetHandshakeRequest, runtime: $Util.RuntimeOptions): Promise<GetHandshakeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.handshakeId)) {
      query["HandshakeId"] = request.handshakeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHandshake",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHandshakeResponse>(await this.callApi(params, req, runtime), new GetHandshakeResponse({}));
  }

  async getHandshake(request: GetHandshakeRequest): Promise<GetHandshakeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHandshakeWithOptions(request, runtime);
  }

  async getPayerForAccountWithOptions(request: GetPayerForAccountRequest, runtime: $Util.RuntimeOptions): Promise<GetPayerForAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPayerForAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPayerForAccountResponse>(await this.callApi(params, req, runtime), new GetPayerForAccountResponse({}));
  }

  async getPayerForAccount(request: GetPayerForAccountRequest): Promise<GetPayerForAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPayerForAccountWithOptions(request, runtime);
  }

  async getResourceDirectoryWithOptions(runtime: $Util.RuntimeOptions): Promise<GetResourceDirectoryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetResourceDirectory",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceDirectoryResponse>(await this.callApi(params, req, runtime), new GetResourceDirectoryResponse({}));
  }

  async getResourceDirectory(): Promise<GetResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceDirectoryWithOptions(runtime);
  }

  async inviteAccountToResourceDirectoryWithOptions(request: InviteAccountToResourceDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<InviteAccountToResourceDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.targetEntity)) {
      query["TargetEntity"] = request.targetEntity;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InviteAccountToResourceDirectory",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InviteAccountToResourceDirectoryResponse>(await this.callApi(params, req, runtime), new InviteAccountToResourceDirectoryResponse({}));
  }

  async inviteAccountToResourceDirectory(request: InviteAccountToResourceDirectoryRequest): Promise<InviteAccountToResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inviteAccountToResourceDirectoryWithOptions(request, runtime);
  }

  async listAccountsWithOptions(request: ListAccountsRequest, runtime: $Util.RuntimeOptions): Promise<ListAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryKeyword)) {
      query["QueryKeyword"] = request.queryKeyword;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccounts",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccountsResponse>(await this.callApi(params, req, runtime), new ListAccountsResponse({}));
  }

  async listAccounts(request: ListAccountsRequest): Promise<ListAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountsWithOptions(request, runtime);
  }

  async listAccountsForParentWithOptions(request: ListAccountsForParentRequest, runtime: $Util.RuntimeOptions): Promise<ListAccountsForParentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!Util.isUnset(request.queryKeyword)) {
      query["QueryKeyword"] = request.queryKeyword;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccountsForParent",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccountsForParentResponse>(await this.callApi(params, req, runtime), new ListAccountsForParentResponse({}));
  }

  async listAccountsForParent(request: ListAccountsForParentRequest): Promise<ListAccountsForParentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountsForParentWithOptions(request, runtime);
  }

  async listAncestorsWithOptions(request: ListAncestorsRequest, runtime: $Util.RuntimeOptions): Promise<ListAncestorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.childId)) {
      query["ChildId"] = request.childId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAncestors",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAncestorsResponse>(await this.callApi(params, req, runtime), new ListAncestorsResponse({}));
  }

  async listAncestors(request: ListAncestorsRequest): Promise<ListAncestorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAncestorsWithOptions(request, runtime);
  }

  async listControlPoliciesWithOptions(request: ListControlPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListControlPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListControlPolicies",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListControlPoliciesResponse>(await this.callApi(params, req, runtime), new ListControlPoliciesResponse({}));
  }

  async listControlPolicies(request: ListControlPoliciesRequest): Promise<ListControlPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listControlPoliciesWithOptions(request, runtime);
  }

  async listControlPolicyAttachmentsForTargetWithOptions(request: ListControlPolicyAttachmentsForTargetRequest, runtime: $Util.RuntimeOptions): Promise<ListControlPolicyAttachmentsForTargetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListControlPolicyAttachmentsForTarget",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListControlPolicyAttachmentsForTargetResponse>(await this.callApi(params, req, runtime), new ListControlPolicyAttachmentsForTargetResponse({}));
  }

  async listControlPolicyAttachmentsForTarget(request: ListControlPolicyAttachmentsForTargetRequest): Promise<ListControlPolicyAttachmentsForTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listControlPolicyAttachmentsForTargetWithOptions(request, runtime);
  }

  async listDelegatedAdministratorsWithOptions(request: ListDelegatedAdministratorsRequest, runtime: $Util.RuntimeOptions): Promise<ListDelegatedAdministratorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.servicePrincipal)) {
      query["ServicePrincipal"] = request.servicePrincipal;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDelegatedAdministrators",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDelegatedAdministratorsResponse>(await this.callApi(params, req, runtime), new ListDelegatedAdministratorsResponse({}));
  }

  async listDelegatedAdministrators(request: ListDelegatedAdministratorsRequest): Promise<ListDelegatedAdministratorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDelegatedAdministratorsWithOptions(request, runtime);
  }

  async listDelegatedServicesForAccountWithOptions(request: ListDelegatedServicesForAccountRequest, runtime: $Util.RuntimeOptions): Promise<ListDelegatedServicesForAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDelegatedServicesForAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDelegatedServicesForAccountResponse>(await this.callApi(params, req, runtime), new ListDelegatedServicesForAccountResponse({}));
  }

  async listDelegatedServicesForAccount(request: ListDelegatedServicesForAccountRequest): Promise<ListDelegatedServicesForAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDelegatedServicesForAccountWithOptions(request, runtime);
  }

  async listFoldersForParentWithOptions(request: ListFoldersForParentRequest, runtime: $Util.RuntimeOptions): Promise<ListFoldersForParentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!Util.isUnset(request.queryKeyword)) {
      query["QueryKeyword"] = request.queryKeyword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFoldersForParent",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFoldersForParentResponse>(await this.callApi(params, req, runtime), new ListFoldersForParentResponse({}));
  }

  async listFoldersForParent(request: ListFoldersForParentRequest): Promise<ListFoldersForParentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFoldersForParentWithOptions(request, runtime);
  }

  async listHandshakesForAccountWithOptions(request: ListHandshakesForAccountRequest, runtime: $Util.RuntimeOptions): Promise<ListHandshakesForAccountResponse> {
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
      action: "ListHandshakesForAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHandshakesForAccountResponse>(await this.callApi(params, req, runtime), new ListHandshakesForAccountResponse({}));
  }

  async listHandshakesForAccount(request: ListHandshakesForAccountRequest): Promise<ListHandshakesForAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHandshakesForAccountWithOptions(request, runtime);
  }

  async listHandshakesForResourceDirectoryWithOptions(request: ListHandshakesForResourceDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<ListHandshakesForResourceDirectoryResponse> {
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
      action: "ListHandshakesForResourceDirectory",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHandshakesForResourceDirectoryResponse>(await this.callApi(params, req, runtime), new ListHandshakesForResourceDirectoryResponse({}));
  }

  async listHandshakesForResourceDirectory(request: ListHandshakesForResourceDirectoryRequest): Promise<ListHandshakesForResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHandshakesForResourceDirectoryWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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
      version: "2022-04-19",
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

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listTargetAttachmentsForControlPolicyWithOptions(request: ListTargetAttachmentsForControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ListTargetAttachmentsForControlPolicyResponse> {
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
      action: "ListTargetAttachmentsForControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTargetAttachmentsForControlPolicyResponse>(await this.callApi(params, req, runtime), new ListTargetAttachmentsForControlPolicyResponse({}));
  }

  async listTargetAttachmentsForControlPolicy(request: ListTargetAttachmentsForControlPolicyRequest): Promise<ListTargetAttachmentsForControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTargetAttachmentsForControlPolicyWithOptions(request, runtime);
  }

  async listTrustedServiceStatusWithOptions(request: ListTrustedServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListTrustedServiceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adminAccountId)) {
      query["AdminAccountId"] = request.adminAccountId;
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
      action: "ListTrustedServiceStatus",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTrustedServiceStatusResponse>(await this.callApi(params, req, runtime), new ListTrustedServiceStatusResponse({}));
  }

  async listTrustedServiceStatus(request: ListTrustedServiceStatusRequest): Promise<ListTrustedServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTrustedServiceStatusWithOptions(request, runtime);
  }

  async moveAccountWithOptions(request: MoveAccountRequest, runtime: $Util.RuntimeOptions): Promise<MoveAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.destinationFolderId)) {
      query["DestinationFolderId"] = request.destinationFolderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveAccountResponse>(await this.callApi(params, req, runtime), new MoveAccountResponse({}));
  }

  async moveAccount(request: MoveAccountRequest): Promise<MoveAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveAccountWithOptions(request, runtime);
  }

  async registerDelegatedAdministratorWithOptions(request: RegisterDelegatedAdministratorRequest, runtime: $Util.RuntimeOptions): Promise<RegisterDelegatedAdministratorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.servicePrincipal)) {
      query["ServicePrincipal"] = request.servicePrincipal;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterDelegatedAdministrator",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterDelegatedAdministratorResponse>(await this.callApi(params, req, runtime), new RegisterDelegatedAdministratorResponse({}));
  }

  async registerDelegatedAdministrator(request: RegisterDelegatedAdministratorRequest): Promise<RegisterDelegatedAdministratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerDelegatedAdministratorWithOptions(request, runtime);
  }

  async removeCloudAccountWithOptions(request: RemoveCloudAccountRequest, runtime: $Util.RuntimeOptions): Promise<RemoveCloudAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveCloudAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveCloudAccountResponse>(await this.callApi(params, req, runtime), new RemoveCloudAccountResponse({}));
  }

  async removeCloudAccount(request: RemoveCloudAccountRequest): Promise<RemoveCloudAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeCloudAccountWithOptions(request, runtime);
  }

  async retryChangeAccountEmailWithOptions(request: RetryChangeAccountEmailRequest, runtime: $Util.RuntimeOptions): Promise<RetryChangeAccountEmailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RetryChangeAccountEmail",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RetryChangeAccountEmailResponse>(await this.callApi(params, req, runtime), new RetryChangeAccountEmailResponse({}));
  }

  async retryChangeAccountEmail(request: RetryChangeAccountEmailRequest): Promise<RetryChangeAccountEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryChangeAccountEmailWithOptions(request, runtime);
  }

  async sendVerificationCodeForBindSecureMobilePhoneWithOptions(request: SendVerificationCodeForBindSecureMobilePhoneRequest, runtime: $Util.RuntimeOptions): Promise<SendVerificationCodeForBindSecureMobilePhoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.secureMobilePhone)) {
      query["SecureMobilePhone"] = request.secureMobilePhone;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendVerificationCodeForBindSecureMobilePhone",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendVerificationCodeForBindSecureMobilePhoneResponse>(await this.callApi(params, req, runtime), new SendVerificationCodeForBindSecureMobilePhoneResponse({}));
  }

  async sendVerificationCodeForBindSecureMobilePhone(request: SendVerificationCodeForBindSecureMobilePhoneRequest): Promise<SendVerificationCodeForBindSecureMobilePhoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendVerificationCodeForBindSecureMobilePhoneWithOptions(request, runtime);
  }

  async sendVerificationCodeForEnableRDWithOptions(request: SendVerificationCodeForEnableRDRequest, runtime: $Util.RuntimeOptions): Promise<SendVerificationCodeForEnableRDResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.secureMobilePhone)) {
      query["SecureMobilePhone"] = request.secureMobilePhone;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendVerificationCodeForEnableRD",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendVerificationCodeForEnableRDResponse>(await this.callApi(params, req, runtime), new SendVerificationCodeForEnableRDResponse({}));
  }

  async sendVerificationCodeForEnableRD(request: SendVerificationCodeForEnableRDRequest): Promise<SendVerificationCodeForEnableRDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendVerificationCodeForEnableRDWithOptions(request, runtime);
  }

  async setMemberDeletionPermissionWithOptions(request: SetMemberDeletionPermissionRequest, runtime: $Util.RuntimeOptions): Promise<SetMemberDeletionPermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetMemberDeletionPermission",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetMemberDeletionPermissionResponse>(await this.callApi(params, req, runtime), new SetMemberDeletionPermissionResponse({}));
  }

  async setMemberDeletionPermission(request: SetMemberDeletionPermissionRequest): Promise<SetMemberDeletionPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setMemberDeletionPermissionWithOptions(request, runtime);
  }

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
      version: "2022-04-19",
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

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

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
      version: "2022-04-19",
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

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateAccountWithOptions(request: UpdateAccountRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.newAccountType)) {
      query["NewAccountType"] = request.newAccountType;
    }

    if (!Util.isUnset(request.newDisplayName)) {
      query["NewDisplayName"] = request.newDisplayName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAccountResponse>(await this.callApi(params, req, runtime), new UpdateAccountResponse({}));
  }

  async updateAccount(request: UpdateAccountRequest): Promise<UpdateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccountWithOptions(request, runtime);
  }

  async updateControlPolicyWithOptions(request: UpdateControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!Util.isUnset(request.newPolicyDocument)) {
      query["NewPolicyDocument"] = request.newPolicyDocument;
    }

    if (!Util.isUnset(request.newPolicyName)) {
      query["NewPolicyName"] = request.newPolicyName;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateControlPolicyResponse>(await this.callApi(params, req, runtime), new UpdateControlPolicyResponse({}));
  }

  async updateControlPolicy(request: UpdateControlPolicyRequest): Promise<UpdateControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateControlPolicyWithOptions(request, runtime);
  }

  async updateFolderWithOptions(request: UpdateFolderRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFolderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    if (!Util.isUnset(request.newFolderName)) {
      query["NewFolderName"] = request.newFolderName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFolder",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFolderResponse>(await this.callApi(params, req, runtime), new UpdateFolderResponse({}));
  }

  async updateFolder(request: UpdateFolderRequest): Promise<UpdateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFolderWithOptions(request, runtime);
  }

}
