// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AcceptFabricInvitationRequest extends $tea.Model {
  code?: string;
  isAccepted?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isAccepted: 'IsAccepted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isAccepted: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptFabricInvitationResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptFabricInvitationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AcceptFabricInvitationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AcceptFabricInvitationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAntChainCertificateRequest extends $tea.Model {
  antChainId?: string;
  uploadReq?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      uploadReq: 'UploadReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      uploadReq: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAntChainCertificateResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAntChainCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApplyAntChainCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApplyAntChainCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAntChainCertificateWithKeyAutoCreationRequest extends $tea.Model {
  antChainId?: string;
  consortiumId?: string;
  password?: string;
  countryName?: string;
  stateOrProvinceName?: string;
  localityName?: string;
  organizationName?: string;
  organizationUnitName?: string;
  commonName?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      consortiumId: 'ConsortiumId',
      password: 'Password',
      countryName: 'CountryName',
      stateOrProvinceName: 'StateOrProvinceName',
      localityName: 'LocalityName',
      organizationName: 'OrganizationName',
      organizationUnitName: 'OrganizationUnitName',
      commonName: 'CommonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      consortiumId: 'string',
      password: 'string',
      countryName: 'string',
      stateOrProvinceName: 'string',
      localityName: 'string',
      organizationName: 'string',
      organizationUnitName: 'string',
      commonName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAntChainCertificateWithKeyAutoCreationResponseBody extends $tea.Model {
  requestId?: string;
  result?: ApplyAntChainCertificateWithKeyAutoCreationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ApplyAntChainCertificateWithKeyAutoCreationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAntChainCertificateWithKeyAutoCreationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApplyAntChainCertificateWithKeyAutoCreationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApplyAntChainCertificateWithKeyAutoCreationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddAntChainMiniAppQRCodeAuthorizedUsersRequest extends $tea.Model {
  antChainId?: string;
  phoneList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      phoneList: 'PhoneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      phoneList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddAntChainMiniAppQRCodeAuthorizedUsersShrinkRequest extends $tea.Model {
  antChainId?: string;
  phoneListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      phoneListShrink: 'PhoneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      phoneListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddAntChainMiniAppQRCodeAuthorizedUsersResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddAntChainMiniAppQRCodeAuthorizedUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchAddAntChainMiniAppQRCodeAuthorizedUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchAddAntChainMiniAppQRCodeAuthorizedUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFabricConsortiumDomainRequest extends $tea.Model {
  domainCode?: string;
  static names(): { [key: string]: string } {
    return {
      domainCode: 'DomainCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFabricConsortiumDomainResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: CheckFabricConsortiumDomainResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: CheckFabricConsortiumDomainResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFabricConsortiumDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckFabricConsortiumDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckFabricConsortiumDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFabricOrganizationDomainRequest extends $tea.Model {
  domainCode?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domainCode: 'DomainCode',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCode: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFabricOrganizationDomainResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: CheckFabricOrganizationDomainResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: CheckFabricOrganizationDomainResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFabricOrganizationDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckFabricOrganizationDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckFabricOrganizationDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmFabricConsortiumMemberRequest extends $tea.Model {
  consortiumId?: string;
  organization?: ConfirmFabricConsortiumMemberRequestOrganization[];
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      organization: 'Organization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      organization: { 'type': 'array', 'itemType': ConfirmFabricConsortiumMemberRequestOrganization },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmFabricConsortiumMemberResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmFabricConsortiumMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfirmFabricConsortiumMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfirmFabricConsortiumMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyAntChainContractProjectRequest extends $tea.Model {
  projectId?: string;
  projectName?: string;
  projectVersion?: string;
  projectDescription?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
      projectDescription: 'ProjectDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      projectName: 'string',
      projectVersion: 'string',
      projectDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyAntChainContractProjectResponseBody extends $tea.Model {
  requestId?: string;
  result?: CopyAntChainContractProjectResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CopyAntChainContractProjectResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyAntChainContractProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CopyAntChainContractProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CopyAntChainContractProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainAccountRequest extends $tea.Model {
  antChainId?: string;
  account?: string;
  accountPubKey?: string;
  accountRecoverPubKey?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      account: 'Account',
      accountPubKey: 'AccountPubKey',
      accountRecoverPubKey: 'AccountRecoverPubKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      account: 'string',
      accountPubKey: 'string',
      accountRecoverPubKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainAccountResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateAntChainAccountResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateAntChainAccountResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAntChainAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAntChainAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainAccountWithKeyPairAutoCreationRequest extends $tea.Model {
  antChainId?: string;
  account?: string;
  password?: string;
  recoverPassword?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      account: 'Account',
      password: 'Password',
      recoverPassword: 'RecoverPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      account: 'string',
      password: 'string',
      recoverPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainAccountWithKeyPairAutoCreationResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateAntChainAccountWithKeyPairAutoCreationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateAntChainAccountWithKeyPairAutoCreationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainAccountWithKeyPairAutoCreationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAntChainAccountWithKeyPairAutoCreationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAntChainAccountWithKeyPairAutoCreationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainConsortiumRequest extends $tea.Model {
  consortiumName?: string;
  consortiumDescription?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumName: 'ConsortiumName',
      consortiumDescription: 'ConsortiumDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumName: 'string',
      consortiumDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainConsortiumResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateAntChainConsortiumResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateAntChainConsortiumResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainConsortiumResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAntChainConsortiumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAntChainConsortiumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainContractContentRequest extends $tea.Model {
  projectId?: string;
  parentContentId?: string;
  contentName?: string;
  isDirectory?: boolean;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      parentContentId: 'ParentContentId',
      contentName: 'ContentName',
      isDirectory: 'IsDirectory',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      parentContentId: 'string',
      contentName: 'string',
      isDirectory: 'boolean',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainContractContentResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateAntChainContractContentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateAntChainContractContentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainContractContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAntChainContractContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAntChainContractContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainContractProjectRequest extends $tea.Model {
  consortiumId?: string;
  projectName?: string;
  projectVersion?: string;
  projectDescription?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
      projectDescription: 'ProjectDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      projectName: 'string',
      projectVersion: 'string',
      projectDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainContractProjectResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateAntChainContractProjectResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateAntChainContractProjectResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainContractProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAntChainContractProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAntChainContractProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChaincodeRequest extends $tea.Model {
  organizationId?: string;
  channelId?: string;
  consortiumId?: string;
  ossBucket?: string;
  ossUrl?: string;
  endorsePolicy?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      channelId: 'ChannelId',
      consortiumId: 'ConsortiumId',
      ossBucket: 'OssBucket',
      ossUrl: 'OssUrl',
      endorsePolicy: 'EndorsePolicy',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      channelId: 'string',
      consortiumId: 'string',
      ossBucket: 'string',
      ossUrl: 'string',
      endorsePolicy: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChaincodeResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: CreateFabricChaincodeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: CreateFabricChaincodeResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChaincodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFabricChaincodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFabricChaincodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChannelRequest extends $tea.Model {
  consortiumId?: string;
  channelName?: string;
  batchTimeout?: number;
  maxMessageCount?: number;
  preferredMaxBytes?: number;
  organization?: CreateFabricChannelRequestOrganization[];
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      channelName: 'ChannelName',
      batchTimeout: 'BatchTimeout',
      maxMessageCount: 'MaxMessageCount',
      preferredMaxBytes: 'PreferredMaxBytes',
      organization: 'Organization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      channelName: 'string',
      batchTimeout: 'number',
      maxMessageCount: 'number',
      preferredMaxBytes: 'number',
      organization: { 'type': 'array', 'itemType': CreateFabricChannelRequestOrganization },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChannelResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: CreateFabricChannelResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: CreateFabricChannelResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFabricChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFabricChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChannelMemberRequest extends $tea.Model {
  channelId?: string;
  organization?: CreateFabricChannelMemberRequestOrganization[];
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      organization: 'Organization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      organization: { 'type': 'array', 'itemType': CreateFabricChannelMemberRequestOrganization },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChannelMemberResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChannelMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFabricChannelMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFabricChannelMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricConsortiumRequest extends $tea.Model {
  location?: string;
  ordererType?: string;
  zoneId?: string;
  consortiumName?: string;
  domain?: string;
  consortiumDescription?: string;
  channelPolicy?: string;
  specName?: string;
  orderersCount?: number;
  peersCount?: number;
  paymentDurationUnit?: string;
  paymentDuration?: number;
  organization?: CreateFabricConsortiumRequestOrganization[];
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      ordererType: 'OrdererType',
      zoneId: 'ZoneId',
      consortiumName: 'ConsortiumName',
      domain: 'Domain',
      consortiumDescription: 'ConsortiumDescription',
      channelPolicy: 'ChannelPolicy',
      specName: 'SpecName',
      orderersCount: 'OrderersCount',
      peersCount: 'PeersCount',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentDuration: 'PaymentDuration',
      organization: 'Organization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      ordererType: 'string',
      zoneId: 'string',
      consortiumName: 'string',
      domain: 'string',
      consortiumDescription: 'string',
      channelPolicy: 'string',
      specName: 'string',
      orderersCount: 'number',
      peersCount: 'number',
      paymentDurationUnit: 'string',
      paymentDuration: 'number',
      organization: { 'type': 'array', 'itemType': CreateFabricConsortiumRequestOrganization },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricConsortiumResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: CreateFabricConsortiumResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: CreateFabricConsortiumResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricConsortiumResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFabricConsortiumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFabricConsortiumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricConsortiumMemberRequest extends $tea.Model {
  consortiumId?: string;
  code?: string;
  organization?: CreateFabricConsortiumMemberRequestOrganization[];
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      code: 'Code',
      organization: 'Organization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      code: 'string',
      organization: { 'type': 'array', 'itemType': CreateFabricConsortiumMemberRequestOrganization },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricConsortiumMemberResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricConsortiumMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFabricConsortiumMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFabricConsortiumMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricOrganizationRequest extends $tea.Model {
  organizationName?: string;
  location?: string;
  domain?: string;
  description?: string;
  specName?: string;
  peersCount?: number;
  paymentDuration?: number;
  paymentDurationUnit?: string;
  static names(): { [key: string]: string } {
    return {
      organizationName: 'OrganizationName',
      location: 'Location',
      domain: 'Domain',
      description: 'Description',
      specName: 'SpecName',
      peersCount: 'PeersCount',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationName: 'string',
      location: 'string',
      domain: 'string',
      description: 'string',
      specName: 'string',
      peersCount: 'number',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricOrganizationResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: CreateFabricOrganizationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: CreateFabricOrganizationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricOrganizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFabricOrganizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFabricOrganizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricOrganizationUserRequest extends $tea.Model {
  organizationId?: string;
  username?: string;
  password?: string;
  attrs?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      username: 'Username',
      password: 'Password',
      attrs: 'Attrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      username: 'string',
      password: 'string',
      attrs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricOrganizationUserResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: CreateFabricOrganizationUserResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: CreateFabricOrganizationUserResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricOrganizationUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFabricOrganizationUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFabricOrganizationUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAntChainConsortiumRequest extends $tea.Model {
  consortiumId?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAntChainConsortiumResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAntChainConsortiumResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAntChainConsortiumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAntChainConsortiumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAntChainContractContentRequest extends $tea.Model {
  contentId?: string;
  static names(): { [key: string]: string } {
    return {
      contentId: 'ContentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAntChainContractContentResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAntChainContractContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAntChainContractContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAntChainContractContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAntChainContractProjectRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAntChainContractProjectResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAntChainContractProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAntChainContractProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAntChainContractProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAntChainMiniAppQRCodeAuthorizedUserRequest extends $tea.Model {
  antChainId?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAntChainMiniAppQRCodeAuthorizedUserResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAntChainMiniAppQRCodeAuthorizedUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAntChainMiniAppQRCodeAuthorizedUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAntChainMiniAppQRCodeAuthorizedUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFabricChaincodeRequest extends $tea.Model {
  chaincodeId?: string;
  static names(): { [key: string]: string } {
    return {
      chaincodeId: 'ChaincodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFabricChaincodeResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFabricChaincodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFabricChaincodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFabricChaincodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainAccountsRequest extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainAccountsResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainAccountsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAntChainAccountsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainAccountsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainBlockRequest extends $tea.Model {
  antChainId?: string;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainBlockResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainBlockResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAntChainBlockResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainBlockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainBlockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainBlockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainCertificateApplicationsRequest extends $tea.Model {
  antChainId?: string;
  status?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      status: 'Status',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      status: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainCertificateApplicationsResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainCertificateApplicationsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAntChainCertificateApplicationsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainCertificateApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainCertificateApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainCertificateApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainConsortiumsRequest extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainConsortiumsResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainConsortiumsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAntChainConsortiumsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainConsortiumsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainConsortiumsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainConsortiumsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectContentTreeRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectContentTreeResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainContractProjectContentTreeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAntChainContractProjectContentTreeResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectContentTreeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainContractProjectContentTreeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainContractProjectContentTreeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectsRequest extends $tea.Model {
  consortiumId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectsResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainContractProjectsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAntChainContractProjectsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainContractProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainContractProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainDownloadPathsRequest extends $tea.Model {
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainDownloadPathsResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainDownloadPathsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAntChainDownloadPathsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainDownloadPathsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainDownloadPathsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainDownloadPathsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainInformationRequest extends $tea.Model {
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainInformationResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainInformationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAntChainInformationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainInformationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainInformationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainInformationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainLatestBlocksRequest extends $tea.Model {
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainLatestBlocksResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainLatestBlocksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainLatestBlocksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainLatestBlocksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainLatestTransactionDigestsRequest extends $tea.Model {
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainLatestTransactionDigestsResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainLatestTransactionDigestsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainLatestTransactionDigestsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainLatestTransactionDigestsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMembersRequest extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  consortiumId?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      consortiumId: 'ConsortiumId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      consortiumId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMembersResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainMembersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAntChainMembersResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAccessLogRequest extends $tea.Model {
  antChainId?: string;
  QRCodeType?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      QRCodeType: 'QRCodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      QRCodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAccessLogResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainMiniAppBrowserQRCodeAccessLogResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAntChainMiniAppBrowserQRCodeAccessLogResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAccessLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainMiniAppBrowserQRCodeAccessLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainMiniAppBrowserQRCodeAccessLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersRequest extends $tea.Model {
  antChainId?: string;
  QRCodeType?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      QRCodeType: 'QRCodeType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      QRCodeType: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserTransactionQRCodeRequest extends $tea.Model {
  antChainId?: string;
  transactionHash?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      transactionHash: 'TransactionHash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      transactionHash: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserTransactionQRCodeResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainMiniAppBrowserTransactionQRCodeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAntChainMiniAppBrowserTransactionQRCodeResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserTransactionQRCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainMiniAppBrowserTransactionQRCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainMiniAppBrowserTransactionQRCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainNodesRequest extends $tea.Model {
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainNodesResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainQRCodeAuthorizationRequest extends $tea.Model {
  antChainId?: string;
  QRCodeType?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      QRCodeType: 'QRCodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      QRCodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainQRCodeAuthorizationResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainQRCodeAuthorizationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAntChainQRCodeAuthorizationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainQRCodeAuthorizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainQRCodeAuthorizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainQRCodeAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainsRequest extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  consortiumId?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      consortiumId: 'ConsortiumId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      consortiumId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainsResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAntChainsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionRequest extends $tea.Model {
  antChainId?: string;
  hash?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      hash: 'Hash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      hash: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainTransactionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAntChainTransactionResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainTransactionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainTransactionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionReceiptRequest extends $tea.Model {
  antChainId?: string;
  hash?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      hash: 'Hash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      hash: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionReceiptResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainTransactionReceiptResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAntChainTransactionReceiptResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionReceiptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainTransactionReceiptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainTransactionReceiptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionStatisticsRequest extends $tea.Model {
  antChainId?: string;
  start?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      start: 'Start',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      start: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAntChainTransactionStatisticsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeAntChainTransactionStatisticsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainTransactionStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainTransactionStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEthereumDeletableRequest extends $tea.Model {
  ethereumId?: string;
  static names(): { [key: string]: string } {
    return {
      ethereumId: 'EthereumId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ethereumId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEthereumDeletableResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeEthereumDeletableResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: DescribeEthereumDeletableResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEthereumDeletableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEthereumDeletableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEthereumDeletableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricCandidateOrganizationsRequest extends $tea.Model {
  location?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricCandidateOrganizationsResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricCandidateOrganizationsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeFabricCandidateOrganizationsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricCandidateOrganizationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricCandidateOrganizationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricCandidateOrganizationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricChaincodeUploadPolicyRequest extends $tea.Model {
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricChaincodeUploadPolicyResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricChaincodeUploadPolicyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: DescribeFabricChaincodeUploadPolicyResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricChaincodeUploadPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricChaincodeUploadPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricChaincodeUploadPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricChannelMembersRequest extends $tea.Model {
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricChannelMembersResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricChannelMembersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeFabricChannelMembersResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricChannelMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricChannelMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricChannelMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumAdminStatusRequest extends $tea.Model {
  location?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumAdminStatusResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricConsortiumAdminStatusResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeFabricConsortiumAdminStatusResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumAdminStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricConsortiumAdminStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricConsortiumAdminStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumChaincodesRequest extends $tea.Model {
  consortiumId?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumChaincodesResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricConsortiumChaincodesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeFabricConsortiumChaincodesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumChaincodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricConsortiumChaincodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricConsortiumChaincodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumChannelsRequest extends $tea.Model {
  consortiumId?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumChannelsResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricConsortiumChannelsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeFabricConsortiumChannelsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumChannelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricConsortiumChannelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricConsortiumChannelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumConfigResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricConsortiumConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: DescribeFabricConsortiumConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricConsortiumConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricConsortiumConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumDeletableRequest extends $tea.Model {
  consortiumId?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumDeletableResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricConsortiumDeletableResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: DescribeFabricConsortiumDeletableResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumDeletableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricConsortiumDeletableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricConsortiumDeletableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumMemberApprovalRequest extends $tea.Model {
  consortiumId?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumMemberApprovalResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricConsortiumMemberApprovalResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeFabricConsortiumMemberApprovalResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumMemberApprovalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricConsortiumMemberApprovalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricConsortiumMemberApprovalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumMembersRequest extends $tea.Model {
  consortiumId?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumMembersResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricConsortiumMembersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeFabricConsortiumMembersResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricConsortiumMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricConsortiumMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumOrderersRequest extends $tea.Model {
  consortiumId?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumOrderersResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricConsortiumOrderersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeFabricConsortiumOrderersResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumOrderersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricConsortiumOrderersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricConsortiumOrderersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumsRequest extends $tea.Model {
  consortiumId?: string;
  location?: string;
  tag?: DescribeFabricConsortiumsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      location: 'Location',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      location: 'string',
      tag: { 'type': 'array', 'itemType': DescribeFabricConsortiumsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumsResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricConsortiumsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeFabricConsortiumsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricConsortiumsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricConsortiumsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumSpecsResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricConsortiumSpecsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeFabricConsortiumSpecsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumSpecsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricConsortiumSpecsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricConsortiumSpecsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricExplorerRequest extends $tea.Model {
  organizationId?: string;
  exMethod?: string;
  exUrl?: string;
  exBody?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      exMethod: 'ExMethod',
      exUrl: 'ExUrl',
      exBody: 'ExBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      exMethod: 'string',
      exUrl: 'string',
      exBody: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricExplorerResponseBody extends $tea.Model {
  requestId?: string;
  dynamicCode?: string;
  errorCode?: number;
  dynamicMessage?: string;
  success?: boolean;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dynamicCode: 'DynamicCode',
      errorCode: 'ErrorCode',
      dynamicMessage: 'DynamicMessage',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dynamicCode: 'string',
      errorCode: 'number',
      dynamicMessage: 'string',
      success: 'boolean',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricExplorerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricExplorerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricExplorerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricInvitationCodeRequest extends $tea.Model {
  consortiumId?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricInvitationCodeResponseBody extends $tea.Model {
  requestId?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricInvitationCodeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: DescribeFabricInvitationCodeResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricInvitationCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricInvitationCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricInvitationCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricInviterRequest extends $tea.Model {
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricInviterResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricInviterResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: DescribeFabricInviterResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricInviterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricInviterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricInviterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrdererLogsRequest extends $tea.Model {
  consortiumId?: string;
  ordererName?: string;
  lines?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      ordererName: 'OrdererName',
      lines: 'Lines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      ordererName: 'string',
      lines: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrdererLogsResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrdererLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricOrdererLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricOrdererLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationRequest extends $tea.Model {
  organizationId?: string;
  location?: string;
  tag?: DescribeFabricOrganizationRequestTag[];
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      location: 'Location',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      location: 'string',
      tag: { 'type': 'array', 'itemType': DescribeFabricOrganizationRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricOrganizationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: DescribeFabricOrganizationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricOrganizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricOrganizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationChaincodesRequest extends $tea.Model {
  organizationId?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationChaincodesResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricOrganizationChaincodesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeFabricOrganizationChaincodesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationChaincodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricOrganizationChaincodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricOrganizationChaincodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationDeletableRequest extends $tea.Model {
  organizationId?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationDeletableResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricOrganizationDeletableResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: DescribeFabricOrganizationDeletableResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationDeletableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricOrganizationDeletableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricOrganizationDeletableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationMembersRequest extends $tea.Model {
  organizationId?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationMembersResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricOrganizationMembersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeFabricOrganizationMembersResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricOrganizationMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricOrganizationMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationPeersRequest extends $tea.Model {
  organizationId?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationPeersResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricOrganizationPeersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeFabricOrganizationPeersResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationPeersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricOrganizationPeersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricOrganizationPeersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationsRequest extends $tea.Model {
  location?: string;
  tag?: DescribeFabricOrganizationsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      tag: { 'type': 'array', 'itemType': DescribeFabricOrganizationsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationsResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricOrganizationsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeFabricOrganizationsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricOrganizationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricOrganizationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationSpecsResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricOrganizationSpecsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeFabricOrganizationSpecsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationSpecsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricOrganizationSpecsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricOrganizationSpecsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationUsersRequest extends $tea.Model {
  organizationId?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationUsersResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeFabricOrganizationUsersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeFabricOrganizationUsersResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricOrganizationUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricOrganizationUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricPeerLogsRequest extends $tea.Model {
  organizationId?: string;
  peerName?: string;
  lines?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      peerName: 'PeerName',
      lines: 'Lines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      peerName: 'string',
      lines: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricPeerLogsResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricPeerLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricPeerLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricPeerLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  regionId?: string;
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions[];
  errorCode?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      errorCode: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRootDomainResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRootDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRootDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRootDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBody extends $tea.Model {
  requestId?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: number;
  success?: boolean;
  result?: DescribeTasksResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DescribeTasksResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFabricOrganizationSDKRequest extends $tea.Model {
  organizationId?: string;
  username?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      username: 'Username',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      username: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFabricOrganizationSDKResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: DownloadFabricOrganizationSDKResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': DownloadFabricOrganizationSDKResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFabricOrganizationSDKResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadFabricOrganizationSDKResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadFabricOrganizationSDKResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreezeAntChainAccountRequest extends $tea.Model {
  antChainId?: string;
  account?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      account: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreezeAntChainAccountResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreezeAntChainAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FreezeAntChainAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FreezeAntChainAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallFabricChaincodeRequest extends $tea.Model {
  organizationId?: string;
  chaincodeId?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      chaincodeId: 'ChaincodeId',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      chaincodeId: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallFabricChaincodeResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: InstallFabricChaincodeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: InstallFabricChaincodeResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallFabricChaincodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstallFabricChaincodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstallFabricChaincodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstantiateFabricChaincodeRequest extends $tea.Model {
  organizationId?: string;
  chaincodeId?: string;
  endorsePolicy?: string;
  location?: string;
  collectionConfig?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      chaincodeId: 'ChaincodeId',
      endorsePolicy: 'EndorsePolicy',
      location: 'Location',
      collectionConfig: 'CollectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      chaincodeId: 'string',
      endorsePolicy: 'string',
      location: 'string',
      collectionConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstantiateFabricChaincodeResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: InstantiateFabricChaincodeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: InstantiateFabricChaincodeResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstantiateFabricChaincodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstantiateFabricChaincodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstantiateFabricChaincodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinFabricChannelRequest extends $tea.Model {
  channelId?: string;
  do?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      do: 'Do',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      do: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinFabricChannelResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: JoinFabricChannelResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': JoinFabricChannelResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinFabricChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: JoinFabricChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: JoinFabricChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAntChainCertificateRequest extends $tea.Model {
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAntChainCertificateResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAntChainCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetAntChainCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetAntChainCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAntChainUserCertificateRequest extends $tea.Model {
  antChainId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAntChainUserCertificateResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAntChainUserCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetAntChainUserCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetAntChainUserCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetFabricOrganizationUserPasswordRequest extends $tea.Model {
  organizationId?: string;
  username?: string;
  password?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      username: 'Username',
      password: 'Password',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      username: 'string',
      password: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetFabricOrganizationUserPasswordResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: ResetFabricOrganizationUserPasswordResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: ResetFabricOrganizationUserPasswordResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetFabricOrganizationUserPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetFabricOrganizationUserPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetFabricOrganizationUserPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeFabricChaincodeRequest extends $tea.Model {
  organizationId?: string;
  chaincodeId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      chaincodeId: 'ChaincodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      chaincodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeFabricChaincodeResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: SynchronizeFabricChaincodeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: SynchronizeFabricChaincodeResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeFabricChaincodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SynchronizeFabricChaincodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SynchronizeFabricChaincodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errorCode?: number;
  success?: boolean;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: 'boolean',
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

export class UnfreezeAntChainAccountRequest extends $tea.Model {
  antChainId?: string;
  account?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      account: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnfreezeAntChainAccountResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnfreezeAntChainAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnfreezeAntChainAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnfreezeAntChainAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  errorCode?: number;
  success?: boolean;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: 'boolean',
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

export class UpdateAntChainRequest extends $tea.Model {
  antChainId?: string;
  antChainName?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      antChainName: 'AntChainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      antChainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAntChainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAntChainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainConsortiumRequest extends $tea.Model {
  consortiumId?: string;
  consortiumName?: string;
  consortiumDescription?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      consortiumName: 'ConsortiumName',
      consortiumDescription: 'ConsortiumDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      consortiumName: 'string',
      consortiumDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainConsortiumResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainConsortiumResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAntChainConsortiumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAntChainConsortiumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainContractContentRequest extends $tea.Model {
  contentId?: string;
  parentContentId?: string;
  contentName?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      contentId: 'ContentId',
      parentContentId: 'ParentContentId',
      contentName: 'ContentName',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentId: 'string',
      parentContentId: 'string',
      contentName: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainContractContentResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainContractContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAntChainContractContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAntChainContractContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainContractProjectRequest extends $tea.Model {
  projectId?: string;
  projectName?: string;
  projectVersion?: string;
  projectDescription?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
      projectDescription: 'ProjectDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      projectName: 'string',
      projectVersion: 'string',
      projectDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainContractProjectResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainContractProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAntChainContractProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAntChainContractProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainMemberRequest extends $tea.Model {
  memberName?: string;
  consortiumId?: string;
  memberId?: string;
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      consortiumId: 'ConsortiumId',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      consortiumId: 'string',
      memberId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainMemberResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAntChainMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAntChainMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainQRCodeAuthorizationRequest extends $tea.Model {
  antChainId?: string;
  QRCodeType?: string;
  authorizationType?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      QRCodeType: 'QRCodeType',
      authorizationType: 'AuthorizationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      QRCodeType: 'string',
      authorizationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainQRCodeAuthorizationResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAntChainQRCodeAuthorizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAntChainQRCodeAuthorizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAntChainQRCodeAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeFabricChaincodeRequest extends $tea.Model {
  organizationId?: string;
  chaincodeId?: string;
  endorsePolicy?: string;
  location?: string;
  collectionConfig?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      chaincodeId: 'ChaincodeId',
      endorsePolicy: 'EndorsePolicy',
      location: 'Location',
      collectionConfig: 'CollectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      chaincodeId: 'string',
      endorsePolicy: 'string',
      location: 'string',
      collectionConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeFabricChaincodeResponseBody extends $tea.Model {
  requestId?: string;
  errorCode?: number;
  success?: boolean;
  result?: UpgradeFabricChaincodeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'number',
      success: 'boolean',
      result: UpgradeFabricChaincodeResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeFabricChaincodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeFabricChaincodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeFabricChaincodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAntChainCertificateWithKeyAutoCreationResponseBodyResultDownloadPath extends $tea.Model {
  caCrtUrl?: string;
  sdkUrl?: string;
  clientCrtUrl?: string;
  trustCaUrl?: string;
  static names(): { [key: string]: string } {
    return {
      caCrtUrl: 'CaCrtUrl',
      sdkUrl: 'SdkUrl',
      clientCrtUrl: 'ClientCrtUrl',
      trustCaUrl: 'TrustCaUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCrtUrl: 'string',
      sdkUrl: 'string',
      clientCrtUrl: 'string',
      trustCaUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAntChainCertificateWithKeyAutoCreationResponseBodyResult extends $tea.Model {
  privateKey?: string;
  downloadPath?: ApplyAntChainCertificateWithKeyAutoCreationResponseBodyResultDownloadPath;
  static names(): { [key: string]: string } {
    return {
      privateKey: 'PrivateKey',
      downloadPath: 'DownloadPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateKey: 'string',
      downloadPath: ApplyAntChainCertificateWithKeyAutoCreationResponseBodyResultDownloadPath,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFabricConsortiumDomainResponseBodyResult extends $tea.Model {
  domain?: string;
  valid?: boolean;
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      valid: 'Valid',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      valid: 'boolean',
      prompt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFabricOrganizationDomainResponseBodyResult extends $tea.Model {
  domain?: string;
  valid?: boolean;
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      valid: 'Valid',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      valid: 'boolean',
      prompt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmFabricConsortiumMemberRequestOrganization extends $tea.Model {
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyAntChainContractProjectResponseBodyResult extends $tea.Model {
  updateTime?: number;
  consortiumId?: string;
  createTime?: number;
  projectId?: string;
  projectName?: string;
  projectVersion?: string;
  projectDescription?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      consortiumId: 'ConsortiumId',
      createTime: 'CreateTime',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
      projectDescription: 'ProjectDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      consortiumId: 'string',
      createTime: 'number',
      projectId: 'string',
      projectName: 'string',
      projectVersion: 'string',
      projectDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainAccountResponseBodyResult extends $tea.Model {
  account?: string;
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainAccountWithKeyPairAutoCreationResponseBodyResult extends $tea.Model {
  accountPublicKey?: string;
  account?: string;
  accountRecoverPrivateKey?: string;
  accountRecoverPublicKey?: string;
  accountPrivateKey?: string;
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      accountPublicKey: 'AccountPublicKey',
      account: 'Account',
      accountRecoverPrivateKey: 'AccountRecoverPrivateKey',
      accountRecoverPublicKey: 'AccountRecoverPublicKey',
      accountPrivateKey: 'AccountPrivateKey',
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPublicKey: 'string',
      account: 'string',
      accountRecoverPrivateKey: 'string',
      accountRecoverPublicKey: 'string',
      accountPrivateKey: 'string',
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainConsortiumResponseBodyResult extends $tea.Model {
  consortiumId?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainContractContentResponseBodyResult extends $tea.Model {
  contentName?: string;
  parentContentId?: string;
  updateTime?: string;
  createTime?: string;
  projectId?: string;
  isDirectory?: boolean;
  content?: string;
  contentId?: string;
  static names(): { [key: string]: string } {
    return {
      contentName: 'ContentName',
      parentContentId: 'ParentContentId',
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      projectId: 'ProjectId',
      isDirectory: 'IsDirectory',
      content: 'Content',
      contentId: 'ContentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentName: 'string',
      parentContentId: 'string',
      updateTime: 'string',
      createTime: 'string',
      projectId: 'string',
      isDirectory: 'boolean',
      content: 'string',
      contentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainContractProjectResponseBodyResult extends $tea.Model {
  updateTime?: number;
  consortiumId?: string;
  createTime?: number;
  projectId?: string;
  projectName?: string;
  projectVersion?: string;
  projectDescription?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      consortiumId: 'ConsortiumId',
      createTime: 'CreateTime',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
      projectDescription: 'ProjectDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      consortiumId: 'string',
      createTime: 'number',
      projectId: 'string',
      projectName: 'string',
      projectVersion: 'string',
      projectDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChaincodeResponseBodyResult extends $tea.Model {
  type?: number;
  endorsePolicy?: string;
  state?: string;
  createTime?: string;
  chaincodeId?: string;
  message?: string;
  providerName?: string;
  chaincodeName?: string;
  install?: boolean;
  input?: string;
  providerId?: string;
  deployTime?: string;
  chaincodeVersion?: string;
  consortiumId?: string;
  channelName?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      endorsePolicy: 'EndorsePolicy',
      state: 'State',
      createTime: 'CreateTime',
      chaincodeId: 'ChaincodeId',
      message: 'Message',
      providerName: 'ProviderName',
      chaincodeName: 'ChaincodeName',
      install: 'Install',
      input: 'Input',
      providerId: 'ProviderId',
      deployTime: 'DeployTime',
      chaincodeVersion: 'ChaincodeVersion',
      consortiumId: 'ConsortiumId',
      channelName: 'ChannelName',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      endorsePolicy: 'string',
      state: 'string',
      createTime: 'string',
      chaincodeId: 'string',
      message: 'string',
      providerName: 'string',
      chaincodeName: 'string',
      install: 'boolean',
      input: 'string',
      providerId: 'string',
      deployTime: 'string',
      chaincodeVersion: 'string',
      consortiumId: 'string',
      channelName: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChannelRequestOrganization extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChannelResponseBodyResult extends $tea.Model {
  batchTimeout?: number;
  updateTime?: string;
  chaincodeCount?: number;
  state?: string;
  preferredMaxBytes?: number;
  createTime?: string;
  ownerName?: string;
  ownerUid?: number;
  ownerBid?: string;
  maxMessageCount?: number;
  memberCount?: number;
  requestId?: string;
  consortiumId?: string;
  channelName?: string;
  supportConfig?: boolean;
  channelId?: string;
  consortiumName?: string;
  blockCount?: number;
  static names(): { [key: string]: string } {
    return {
      batchTimeout: 'BatchTimeout',
      updateTime: 'UpdateTime',
      chaincodeCount: 'ChaincodeCount',
      state: 'State',
      preferredMaxBytes: 'PreferredMaxBytes',
      createTime: 'CreateTime',
      ownerName: 'OwnerName',
      ownerUid: 'OwnerUid',
      ownerBid: 'OwnerBid',
      maxMessageCount: 'MaxMessageCount',
      memberCount: 'MemberCount',
      requestId: 'RequestId',
      consortiumId: 'ConsortiumId',
      channelName: 'ChannelName',
      supportConfig: 'SupportConfig',
      channelId: 'ChannelId',
      consortiumName: 'ConsortiumName',
      blockCount: 'BlockCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchTimeout: 'number',
      updateTime: 'string',
      chaincodeCount: 'number',
      state: 'string',
      preferredMaxBytes: 'number',
      createTime: 'string',
      ownerName: 'string',
      ownerUid: 'number',
      ownerBid: 'string',
      maxMessageCount: 'number',
      memberCount: 'number',
      requestId: 'string',
      consortiumId: 'string',
      channelName: 'string',
      supportConfig: 'boolean',
      channelId: 'string',
      consortiumName: 'string',
      blockCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChannelMemberRequestOrganization extends $tea.Model {
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricConsortiumRequestOrganization extends $tea.Model {
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricConsortiumResponseBodyResult extends $tea.Model {
  channelCount?: number;
  domain?: string;
  createTime?: string;
  specName?: string;
  ordererCount?: number;
  serviceState?: string;
  ownerUid?: number;
  clusterState?: string;
  codeName?: string;
  ownerBid?: string;
  regionId?: string;
  memberCount?: number;
  channelPolicy?: string;
  ordererType?: string;
  description?: string;
  consortiumId?: string;
  zoneId?: string;
  consortiumName?: string;
  static names(): { [key: string]: string } {
    return {
      channelCount: 'ChannelCount',
      domain: 'Domain',
      createTime: 'CreateTime',
      specName: 'SpecName',
      ordererCount: 'OrdererCount',
      serviceState: 'ServiceState',
      ownerUid: 'OwnerUid',
      clusterState: 'ClusterState',
      codeName: 'CodeName',
      ownerBid: 'OwnerBid',
      regionId: 'RegionId',
      memberCount: 'MemberCount',
      channelPolicy: 'ChannelPolicy',
      ordererType: 'OrdererType',
      description: 'Description',
      consortiumId: 'ConsortiumId',
      zoneId: 'ZoneId',
      consortiumName: 'ConsortiumName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCount: 'number',
      domain: 'string',
      createTime: 'string',
      specName: 'string',
      ordererCount: 'number',
      serviceState: 'string',
      ownerUid: 'number',
      clusterState: 'string',
      codeName: 'string',
      ownerBid: 'string',
      regionId: 'string',
      memberCount: 'number',
      channelPolicy: 'string',
      ordererType: 'string',
      description: 'string',
      consortiumId: 'string',
      zoneId: 'string',
      consortiumName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricConsortiumMemberRequestOrganization extends $tea.Model {
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricOrganizationResponseBodyResult extends $tea.Model {
  domain?: string;
  peerCount?: number;
  createTime?: string;
  consortiumCount?: number;
  specName?: string;
  ownerName?: string;
  serviceState?: string;
  ownerUid?: number;
  clusterState?: string;
  codeName?: string;
  ownerBid?: string;
  organizationDescription?: string;
  regionId?: string;
  organizationId?: string;
  requestId?: string;
  zoneId?: string;
  userCount?: number;
  organizationName?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      peerCount: 'PeerCount',
      createTime: 'CreateTime',
      consortiumCount: 'ConsortiumCount',
      specName: 'SpecName',
      ownerName: 'OwnerName',
      serviceState: 'ServiceState',
      ownerUid: 'OwnerUid',
      clusterState: 'ClusterState',
      codeName: 'CodeName',
      ownerBid: 'OwnerBid',
      organizationDescription: 'OrganizationDescription',
      regionId: 'RegionId',
      organizationId: 'OrganizationId',
      requestId: 'RequestId',
      zoneId: 'ZoneId',
      userCount: 'UserCount',
      organizationName: 'OrganizationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      peerCount: 'number',
      createTime: 'string',
      consortiumCount: 'number',
      specName: 'string',
      ownerName: 'string',
      serviceState: 'string',
      ownerUid: 'number',
      clusterState: 'string',
      codeName: 'string',
      ownerBid: 'string',
      organizationDescription: 'string',
      regionId: 'string',
      organizationId: 'string',
      requestId: 'string',
      zoneId: 'string',
      userCount: 'number',
      organizationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricOrganizationUserResponseBodyResult extends $tea.Model {
  password?: string;
  expireTime?: string;
  createTime?: string;
  organizationId?: string;
  username?: string;
  fullname?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      expireTime: 'ExpireTime',
      createTime: 'CreateTime',
      organizationId: 'OrganizationId',
      username: 'Username',
      fullname: 'Fullname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      expireTime: 'string',
      createTime: 'string',
      organizationId: 'string',
      username: 'string',
      fullname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainAccountsResponseBodyResultPagination extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainAccountsResponseBodyResultAccounts extends $tea.Model {
  accountPublicKey?: string;
  account?: string;
  accountStatus?: string;
  accountRecoveryKey?: string;
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      accountPublicKey: 'AccountPublicKey',
      account: 'Account',
      accountStatus: 'AccountStatus',
      accountRecoveryKey: 'AccountRecoveryKey',
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPublicKey: 'string',
      account: 'string',
      accountStatus: 'string',
      accountRecoveryKey: 'string',
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainAccountsResponseBodyResult extends $tea.Model {
  pagination?: DescribeAntChainAccountsResponseBodyResultPagination;
  accounts?: DescribeAntChainAccountsResponseBodyResultAccounts[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: DescribeAntChainAccountsResponseBodyResultPagination,
      accounts: { 'type': 'array', 'itemType': DescribeAntChainAccountsResponseBodyResultAccounts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainBlockResponseBodyResult extends $tea.Model {
  previousHash?: string;
  version?: number;
  transactionSize?: number;
  createTime?: number;
  rootTxHash?: string;
  height?: number;
  blockHash?: string;
  antChainId?: string;
  transSummaryList?: string;
  static names(): { [key: string]: string } {
    return {
      previousHash: 'PreviousHash',
      version: 'Version',
      transactionSize: 'TransactionSize',
      createTime: 'CreateTime',
      rootTxHash: 'RootTxHash',
      height: 'Height',
      blockHash: 'BlockHash',
      antChainId: 'AntChainId',
      transSummaryList: 'TransSummaryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      previousHash: 'string',
      version: 'number',
      transactionSize: 'number',
      createTime: 'number',
      rootTxHash: 'string',
      height: 'number',
      blockHash: 'string',
      antChainId: 'string',
      transSummaryList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainCertificateApplicationsResponseBodyResultPagination extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainCertificateApplicationsResponseBodyResultCertificateApplications extends $tea.Model {
  status?: string;
  updatetime?: number;
  createtime?: number;
  bid?: string;
  antChainId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      updatetime: 'Updatetime',
      createtime: 'Createtime',
      bid: 'Bid',
      antChainId: 'AntChainId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      updatetime: 'number',
      createtime: 'number',
      bid: 'string',
      antChainId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainCertificateApplicationsResponseBodyResult extends $tea.Model {
  pagination?: DescribeAntChainCertificateApplicationsResponseBodyResultPagination;
  certificateApplications?: DescribeAntChainCertificateApplicationsResponseBodyResultCertificateApplications[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      certificateApplications: 'CertificateApplications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: DescribeAntChainCertificateApplicationsResponseBodyResultPagination,
      certificateApplications: { 'type': 'array', 'itemType': DescribeAntChainCertificateApplicationsResponseBodyResultCertificateApplications },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainConsortiumsResponseBodyResultAntConsortiums extends $tea.Model {
  consortiumDescription?: string;
  status?: string;
  consortiumId?: string;
  createTime?: number;
  memberNum?: number;
  role?: string;
  consortiumName?: string;
  chainNum?: number;
  static names(): { [key: string]: string } {
    return {
      consortiumDescription: 'ConsortiumDescription',
      status: 'Status',
      consortiumId: 'ConsortiumId',
      createTime: 'CreateTime',
      memberNum: 'MemberNum',
      role: 'Role',
      consortiumName: 'ConsortiumName',
      chainNum: 'ChainNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumDescription: 'string',
      status: 'string',
      consortiumId: 'string',
      createTime: 'number',
      memberNum: 'number',
      role: 'string',
      consortiumName: 'string',
      chainNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainConsortiumsResponseBodyResultPagination extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainConsortiumsResponseBodyResult extends $tea.Model {
  antConsortiums?: DescribeAntChainConsortiumsResponseBodyResultAntConsortiums[];
  pagination?: DescribeAntChainConsortiumsResponseBodyResultPagination;
  static names(): { [key: string]: string } {
    return {
      antConsortiums: 'AntConsortiums',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antConsortiums: { 'type': 'array', 'itemType': DescribeAntChainConsortiumsResponseBodyResultAntConsortiums },
      pagination: DescribeAntChainConsortiumsResponseBodyResultPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectContentTreeResponseBodyResult extends $tea.Model {
  children?: { [key: string]: any }[];
  projectId?: string;
  projectName?: string;
  projectVersion?: string;
  projectDescription?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
      projectDescription: 'ProjectDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      projectId: 'string',
      projectName: 'string',
      projectVersion: 'string',
      projectDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectsResponseBodyResultPagination extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectsResponseBodyResultContractProjects extends $tea.Model {
  updateTime?: number;
  consortiumId?: string;
  createTime?: number;
  projectId?: string;
  projectName?: string;
  projectVersion?: string;
  projectDescription?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      consortiumId: 'ConsortiumId',
      createTime: 'CreateTime',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
      projectDescription: 'ProjectDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      consortiumId: 'string',
      createTime: 'number',
      projectId: 'string',
      projectName: 'string',
      projectVersion: 'string',
      projectDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectsResponseBodyResult extends $tea.Model {
  pagination?: DescribeAntChainContractProjectsResponseBodyResultPagination;
  contractProjects?: DescribeAntChainContractProjectsResponseBodyResultContractProjects[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      contractProjects: 'ContractProjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: DescribeAntChainContractProjectsResponseBodyResultPagination,
      contractProjects: { 'type': 'array', 'itemType': DescribeAntChainContractProjectsResponseBodyResultContractProjects },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainDownloadPathsResponseBodyResult extends $tea.Model {
  caCrtUrl?: string;
  sdkUrl?: string;
  clientCrtUrl?: string;
  trustCaUrl?: string;
  static names(): { [key: string]: string } {
    return {
      caCrtUrl: 'CaCrtUrl',
      sdkUrl: 'SdkUrl',
      clientCrtUrl: 'ClientCrtUrl',
      trustCaUrl: 'TrustCaUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCrtUrl: 'string',
      sdkUrl: 'string',
      clientCrtUrl: 'string',
      trustCaUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainInformationResponseBodyResultNodeInfos extends $tea.Model {
  status?: boolean;
  nodeName?: string;
  version?: string;
  blockHeight?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      nodeName: 'NodeName',
      version: 'Version',
      blockHeight: 'BlockHeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      nodeName: 'string',
      version: 'string',
      blockHeight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainInformationResponseBodyResult extends $tea.Model {
  transactionSum?: number;
  version?: string;
  blockHeight?: number;
  createTime?: number;
  nodeNumber?: number;
  abnormalNodes?: number;
  nodeInfos?: DescribeAntChainInformationResponseBodyResultNodeInfos[];
  antChainId?: string;
  normal?: boolean;
  static names(): { [key: string]: string } {
    return {
      transactionSum: 'TransactionSum',
      version: 'Version',
      blockHeight: 'BlockHeight',
      createTime: 'CreateTime',
      nodeNumber: 'NodeNumber',
      abnormalNodes: 'AbnormalNodes',
      nodeInfos: 'NodeInfos',
      antChainId: 'AntChainId',
      normal: 'Normal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transactionSum: 'number',
      version: 'string',
      blockHeight: 'number',
      createTime: 'number',
      nodeNumber: 'number',
      abnormalNodes: 'number',
      nodeInfos: { 'type': 'array', 'itemType': DescribeAntChainInformationResponseBodyResultNodeInfos },
      antChainId: 'string',
      normal: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMembersResponseBodyResultMembers extends $tea.Model {
  status?: string;
  memberName?: string;
  joinTime?: number;
  memberId?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      memberName: 'MemberName',
      joinTime: 'JoinTime',
      memberId: 'MemberId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      memberName: 'string',
      joinTime: 'number',
      memberId: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMembersResponseBodyResultPagination extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMembersResponseBodyResult extends $tea.Model {
  members?: DescribeAntChainMembersResponseBodyResultMembers[];
  pagination?: DescribeAntChainMembersResponseBodyResultPagination;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': DescribeAntChainMembersResponseBodyResultMembers },
      pagination: DescribeAntChainMembersResponseBodyResultPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAccessLogResponseBodyResult extends $tea.Model {
  accessCount?: number;
  accessAlipayAccountCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'AccessCount',
      accessAlipayAccountCount: 'AccessAlipayAccountCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'number',
      accessAlipayAccountCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBodyResultPagination extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBodyResultAuthorizedUserList extends $tea.Model {
  gmtAuthorized?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      gmtAuthorized: 'GmtAuthorized',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtAuthorized: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBodyResult extends $tea.Model {
  QRCodeType?: string;
  pagination?: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBodyResultPagination;
  authorizationType?: string;
  authorizedUserList?: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBodyResultAuthorizedUserList[];
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      QRCodeType: 'QRCodeType',
      pagination: 'Pagination',
      authorizationType: 'AuthorizationType',
      authorizedUserList: 'AuthorizedUserList',
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      QRCodeType: 'string',
      pagination: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBodyResultPagination,
      authorizationType: 'string',
      authorizedUserList: { 'type': 'array', 'itemType': DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBodyResultAuthorizedUserList },
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserTransactionQRCodeResponseBodyResult extends $tea.Model {
  base64QRCodePNG?: string;
  transactionHash?: string;
  QRCodeContent?: string;
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      base64QRCodePNG: 'Base64QRCodePNG',
      transactionHash: 'TransactionHash',
      QRCodeContent: 'QRCodeContent',
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64QRCodePNG: 'string',
      transactionHash: 'string',
      QRCodeContent: 'string',
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainQRCodeAuthorizationResponseBodyResult extends $tea.Model {
  QRCodeType?: string;
  authorizationType?: string;
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      QRCodeType: 'QRCodeType',
      authorizationType: 'AuthorizationType',
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      QRCodeType: 'string',
      authorizationType: 'string',
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainsResponseBodyResultPagination extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainsResponseBodyResultAntChains extends $tea.Model {
  expireTime?: number;
  createTime?: number;
  chainType?: string;
  isAdmin?: boolean;
  merkleTreeSuit?: string;
  memberStatus?: string;
  regionId?: string;
  antChainName?: string;
  network?: string;
  tlsAlgo?: string;
  version?: string;
  cipherSuit?: string;
  resourceSize?: string;
  nodeNum?: number;
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      createTime: 'CreateTime',
      chainType: 'ChainType',
      isAdmin: 'IsAdmin',
      merkleTreeSuit: 'MerkleTreeSuit',
      memberStatus: 'MemberStatus',
      regionId: 'RegionId',
      antChainName: 'AntChainName',
      network: 'Network',
      tlsAlgo: 'TlsAlgo',
      version: 'Version',
      cipherSuit: 'CipherSuit',
      resourceSize: 'ResourceSize',
      nodeNum: 'NodeNum',
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      createTime: 'number',
      chainType: 'string',
      isAdmin: 'boolean',
      merkleTreeSuit: 'string',
      memberStatus: 'string',
      regionId: 'string',
      antChainName: 'string',
      network: 'string',
      tlsAlgo: 'string',
      version: 'string',
      cipherSuit: 'string',
      resourceSize: 'string',
      nodeNum: 'number',
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainsResponseBodyResult extends $tea.Model {
  pagination?: DescribeAntChainsResponseBodyResultPagination;
  antChains?: DescribeAntChainsResponseBodyResultAntChains[];
  isExist?: boolean;
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      antChains: 'AntChains',
      isExist: 'IsExist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: DescribeAntChainsResponseBodyResultPagination,
      antChains: { 'type': 'array', 'itemType': DescribeAntChainsResponseBodyResultAntChains },
      isExist: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionResponseBodyResultTransaction extends $tea.Model {
  hash?: string;
  from?: string;
  data?: string;
  nonce?: string;
  to?: string;
  timestamp?: number;
  gas?: string;
  period?: number;
  value?: string;
  extentions?: string[];
  txType?: string;
  signatures?: string[];
  static names(): { [key: string]: string } {
    return {
      hash: 'Hash',
      from: 'From',
      data: 'Data',
      nonce: 'Nonce',
      to: 'To',
      timestamp: 'Timestamp',
      gas: 'Gas',
      period: 'Period',
      value: 'Value',
      extentions: 'Extentions',
      txType: 'TxType',
      signatures: 'Signatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hash: 'string',
      from: 'string',
      data: 'string',
      nonce: 'string',
      to: 'string',
      timestamp: 'number',
      gas: 'string',
      period: 'number',
      value: 'string',
      extentions: { 'type': 'array', 'itemType': 'string' },
      txType: 'string',
      signatures: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionResponseBodyResult extends $tea.Model {
  hash?: string;
  blockVersion?: string;
  blockHeight?: number;
  createTime?: number;
  blockHash?: string;
  transaction?: DescribeAntChainTransactionResponseBodyResultTransaction;
  static names(): { [key: string]: string } {
    return {
      hash: 'Hash',
      blockVersion: 'BlockVersion',
      blockHeight: 'BlockHeight',
      createTime: 'CreateTime',
      blockHash: 'BlockHash',
      transaction: 'Transaction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hash: 'string',
      blockVersion: 'string',
      blockHeight: 'number',
      createTime: 'number',
      blockHash: 'string',
      transaction: DescribeAntChainTransactionResponseBodyResultTransaction,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionReceiptResponseBodyResult extends $tea.Model {
  data?: string;
  result?: number;
  logs?: string[];
  gasUsed?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      result: 'Result',
      logs: 'Logs',
      gasUsed: 'GasUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      result: 'number',
      logs: { 'type': 'array', 'itemType': 'string' },
      gasUsed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionStatisticsResponseBodyResult extends $tea.Model {
  creatTime?: number;
  transCount?: number;
  dt?: string;
  lastSumBlockHeight?: number;
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      creatTime: 'CreatTime',
      transCount: 'TransCount',
      dt: 'Dt',
      lastSumBlockHeight: 'LastSumBlockHeight',
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatTime: 'number',
      transCount: 'number',
      dt: 'string',
      lastSumBlockHeight: 'number',
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEthereumDeletableResponseBodyResult extends $tea.Model {
  deletable?: boolean;
  ethereumId?: string;
  static names(): { [key: string]: string } {
    return {
      deletable: 'Deletable',
      ethereumId: 'EthereumId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletable: 'boolean',
      ethereumId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricCandidateOrganizationsResponseBodyResult extends $tea.Model {
  serviceState?: string;
  organizationName?: string;
  clusterState?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceState: 'ServiceState',
      organizationName: 'OrganizationName',
      clusterState: 'ClusterState',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceState: 'string',
      organizationName: 'string',
      clusterState: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricChaincodeUploadPolicyResponseBodyResult extends $tea.Model {
  signature?: string;
  host?: string;
  policy?: string;
  dir?: string;
  accessId?: string;
  expire?: number;
  static names(): { [key: string]: string } {
    return {
      signature: 'Signature',
      host: 'Host',
      policy: 'Policy',
      dir: 'Dir',
      accessId: 'AccessId',
      expire: 'Expire',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signature: 'string',
      host: 'string',
      policy: 'string',
      dir: 'string',
      accessId: 'string',
      expire: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricChannelMembersResponseBodyResult extends $tea.Model {
  withPeer?: boolean;
  acceptTime?: string;
  organizationDomain?: string;
  state?: string;
  inviteTime?: string;
  channelId?: string;
  organizationName?: string;
  organizationDescription?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      withPeer: 'WithPeer',
      acceptTime: 'AcceptTime',
      organizationDomain: 'OrganizationDomain',
      state: 'State',
      inviteTime: 'InviteTime',
      channelId: 'ChannelId',
      organizationName: 'OrganizationName',
      organizationDescription: 'OrganizationDescription',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withPeer: 'boolean',
      acceptTime: 'string',
      organizationDomain: 'string',
      state: 'string',
      inviteTime: 'string',
      channelId: 'string',
      organizationName: 'string',
      organizationDescription: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumAdminStatusResponseBodyResult extends $tea.Model {
  consortiumId?: string;
  consortiumAdministrator?: boolean;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      consortiumAdministrator: 'ConsortiumAdministrator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      consortiumAdministrator: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumChaincodesResponseBodyResult extends $tea.Model {
  type?: number;
  endorsePolicy?: string;
  state?: string;
  createTime?: string;
  chaincodeId?: string;
  message?: string;
  providerName?: string;
  chaincodeName?: string;
  input?: string;
  install?: boolean;
  providerId?: string;
  deployTime?: string;
  chaincodeVersion?: string;
  consortiumId?: string;
  channelName?: string;
  channelId?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      endorsePolicy: 'EndorsePolicy',
      state: 'State',
      createTime: 'CreateTime',
      chaincodeId: 'ChaincodeId',
      message: 'Message',
      providerName: 'ProviderName',
      chaincodeName: 'ChaincodeName',
      input: 'Input',
      install: 'Install',
      providerId: 'ProviderId',
      deployTime: 'DeployTime',
      chaincodeVersion: 'ChaincodeVersion',
      consortiumId: 'ConsortiumId',
      channelName: 'ChannelName',
      channelId: 'ChannelId',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      endorsePolicy: 'string',
      state: 'string',
      createTime: 'string',
      chaincodeId: 'string',
      message: 'string',
      providerName: 'string',
      chaincodeName: 'string',
      input: 'string',
      install: 'boolean',
      providerId: 'string',
      deployTime: 'string',
      chaincodeVersion: 'string',
      consortiumId: 'string',
      channelName: 'string',
      channelId: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumChannelsResponseBodyResult extends $tea.Model {
  batchTimeout?: number;
  updateTime?: string;
  chaincodeCount?: number;
  state?: string;
  memberJoinedCount?: string;
  preferredMaxBytes?: number;
  createTime?: string;
  supportChannelConfig?: boolean;
  ownerName?: string;
  ownerUid?: number;
  ownerBid?: string;
  maxMessageCount?: number;
  memberCount?: number;
  needJoined?: boolean;
  requestId?: string;
  consortiumId?: string;
  channelName?: string;
  deleteTime?: string;
  channelId?: string;
  consortiumChannelId?: number;
  deleted?: boolean;
  consortiumName?: string;
  blockCount?: number;
  static names(): { [key: string]: string } {
    return {
      batchTimeout: 'BatchTimeout',
      updateTime: 'UpdateTime',
      chaincodeCount: 'ChaincodeCount',
      state: 'State',
      memberJoinedCount: 'MemberJoinedCount',
      preferredMaxBytes: 'PreferredMaxBytes',
      createTime: 'CreateTime',
      supportChannelConfig: 'SupportChannelConfig',
      ownerName: 'OwnerName',
      ownerUid: 'OwnerUid',
      ownerBid: 'OwnerBid',
      maxMessageCount: 'MaxMessageCount',
      memberCount: 'MemberCount',
      needJoined: 'NeedJoined',
      requestId: 'RequestId',
      consortiumId: 'ConsortiumId',
      channelName: 'ChannelName',
      deleteTime: 'DeleteTime',
      channelId: 'ChannelId',
      consortiumChannelId: 'ConsortiumChannelId',
      deleted: 'Deleted',
      consortiumName: 'ConsortiumName',
      blockCount: 'BlockCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchTimeout: 'number',
      updateTime: 'string',
      chaincodeCount: 'number',
      state: 'string',
      memberJoinedCount: 'string',
      preferredMaxBytes: 'number',
      createTime: 'string',
      supportChannelConfig: 'boolean',
      ownerName: 'string',
      ownerUid: 'number',
      ownerBid: 'string',
      maxMessageCount: 'number',
      memberCount: 'number',
      needJoined: 'boolean',
      requestId: 'string',
      consortiumId: 'string',
      channelName: 'string',
      deleteTime: 'string',
      channelId: 'string',
      consortiumChannelId: 'number',
      deleted: 'boolean',
      consortiumName: 'string',
      blockCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumConfigResponseBodyResult extends $tea.Model {
  channelPolicy?: string[];
  ordererType?: string[];
  static names(): { [key: string]: string } {
    return {
      channelPolicy: 'ChannelPolicy',
      ordererType: 'OrdererType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelPolicy: { 'type': 'array', 'itemType': 'string' },
      ordererType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumDeletableResponseBodyResult extends $tea.Model {
  deletable?: boolean;
  domain?: string;
  description?: string;
  consortiumId?: string;
  state?: string;
  zoneId?: string;
  codeName?: string;
  consortiumName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deletable: 'Deletable',
      domain: 'Domain',
      description: 'Description',
      consortiumId: 'ConsortiumId',
      state: 'State',
      zoneId: 'ZoneId',
      codeName: 'CodeName',
      consortiumName: 'ConsortiumName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletable: 'boolean',
      domain: 'string',
      description: 'string',
      consortiumId: 'string',
      state: 'string',
      zoneId: 'string',
      codeName: 'string',
      consortiumName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumMemberApprovalResponseBodyResult extends $tea.Model {
  consortiumId?: string;
  state?: string;
  channelCreatePolicy?: string;
  confirmTime?: string;
  organizationName?: string;
  consortiumName?: string;
  domainName?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      state: 'State',
      channelCreatePolicy: 'ChannelCreatePolicy',
      confirmTime: 'ConfirmTime',
      organizationName: 'OrganizationName',
      consortiumName: 'ConsortiumName',
      domainName: 'DomainName',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      state: 'string',
      channelCreatePolicy: 'string',
      confirmTime: 'string',
      organizationName: 'string',
      consortiumName: 'string',
      domainName: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumMembersResponseBodyResult extends $tea.Model {
  domain?: string;
  description?: string;
  consortiumId?: string;
  organizationName?: string;
  joinedTime?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      description: 'Description',
      consortiumId: 'ConsortiumId',
      organizationName: 'OrganizationName',
      joinedTime: 'JoinedTime',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      description: 'string',
      consortiumId: 'string',
      organizationName: 'string',
      joinedTime: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumOrderersResponseBodyResult extends $tea.Model {
  domain?: string;
  updateTime?: string;
  ordererName?: string;
  createTime?: string;
  port?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      updateTime: 'UpdateTime',
      ordererName: 'OrdererName',
      createTime: 'CreateTime',
      port: 'Port',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      updateTime: 'string',
      ordererName: 'string',
      createTime: 'string',
      port: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumsRequestTag extends $tea.Model {
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

export class DescribeFabricConsortiumsResponseBodyResultTags extends $tea.Model {
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

export class DescribeFabricConsortiumsResponseBodyResult extends $tea.Model {
  channelCount?: number;
  domain?: string;
  state?: string;
  createTime?: string;
  tags?: DescribeFabricConsortiumsResponseBodyResultTags[];
  specName?: string;
  supportChannelConfig?: boolean;
  ownerName?: string;
  ownerUid?: number;
  codeName?: string;
  ownerBid?: string;
  regionId?: string;
  channelPolicy?: string;
  requestId?: string;
  consortiumId?: string;
  expiredTime?: string;
  organizationCount?: number;
  consortiumName?: string;
  static names(): { [key: string]: string } {
    return {
      channelCount: 'ChannelCount',
      domain: 'Domain',
      state: 'State',
      createTime: 'CreateTime',
      tags: 'Tags',
      specName: 'SpecName',
      supportChannelConfig: 'SupportChannelConfig',
      ownerName: 'OwnerName',
      ownerUid: 'OwnerUid',
      codeName: 'CodeName',
      ownerBid: 'OwnerBid',
      regionId: 'RegionId',
      channelPolicy: 'ChannelPolicy',
      requestId: 'RequestId',
      consortiumId: 'ConsortiumId',
      expiredTime: 'ExpiredTime',
      organizationCount: 'OrganizationCount',
      consortiumName: 'ConsortiumName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCount: 'number',
      domain: 'string',
      state: 'string',
      createTime: 'string',
      tags: { 'type': 'array', 'itemType': DescribeFabricConsortiumsResponseBodyResultTags },
      specName: 'string',
      supportChannelConfig: 'boolean',
      ownerName: 'string',
      ownerUid: 'number',
      codeName: 'string',
      ownerBid: 'string',
      regionId: 'string',
      channelPolicy: 'string',
      requestId: 'string',
      consortiumId: 'string',
      expiredTime: 'string',
      organizationCount: 'number',
      consortiumName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumSpecsResponseBodyResult extends $tea.Model {
  specName?: string;
  specTitle?: string;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      specName: 'SpecName',
      specTitle: 'SpecTitle',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specName: 'string',
      specTitle: 'string',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricInvitationCodeResponseBodyResult extends $tea.Model {
  senderId?: number;
  email?: string;
  senderBid?: string;
  expireTime?: string;
  consortiumId?: string;
  invitationId?: number;
  senderName?: string;
  code?: string;
  url?: string;
  accepted?: boolean;
  sendTime?: string;
  static names(): { [key: string]: string } {
    return {
      senderId: 'SenderId',
      email: 'Email',
      senderBid: 'SenderBid',
      expireTime: 'ExpireTime',
      consortiumId: 'ConsortiumId',
      invitationId: 'InvitationId',
      senderName: 'SenderName',
      code: 'Code',
      url: 'Url',
      accepted: 'Accepted',
      sendTime: 'SendTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      senderId: 'number',
      email: 'string',
      senderBid: 'string',
      expireTime: 'string',
      consortiumId: 'string',
      invitationId: 'number',
      senderName: 'string',
      code: 'string',
      url: 'string',
      accepted: 'boolean',
      sendTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricInviterResponseBodyResult extends $tea.Model {
  inviterId?: number;
  expireTime?: string;
  consortiumId?: string;
  inviterName?: string;
  consortiumName?: string;
  static names(): { [key: string]: string } {
    return {
      inviterId: 'InviterId',
      expireTime: 'ExpireTime',
      consortiumId: 'ConsortiumId',
      inviterName: 'InviterName',
      consortiumName: 'ConsortiumName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inviterId: 'number',
      expireTime: 'string',
      consortiumId: 'string',
      inviterName: 'string',
      consortiumName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationRequestTag extends $tea.Model {
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

export class DescribeFabricOrganizationResponseBodyResultTags extends $tea.Model {
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

export class DescribeFabricOrganizationResponseBodyResult extends $tea.Model {
  domain?: string;
  peerCount?: number;
  state?: string;
  createTime?: string;
  consortiumCount?: number;
  tags?: DescribeFabricOrganizationResponseBodyResultTags[];
  specName?: string;
  ownerName?: string;
  ownerUid?: number;
  codeName?: string;
  ownerBid?: string;
  organizationDescription?: string;
  regionId?: string;
  organizationId?: string;
  MSP?: string;
  requestId?: string;
  CAUrl?: string;
  CANAME?: string;
  zoneId?: string;
  userCount?: number;
  organizationName?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      peerCount: 'PeerCount',
      state: 'State',
      createTime: 'CreateTime',
      consortiumCount: 'ConsortiumCount',
      tags: 'Tags',
      specName: 'SpecName',
      ownerName: 'OwnerName',
      ownerUid: 'OwnerUid',
      codeName: 'CodeName',
      ownerBid: 'OwnerBid',
      organizationDescription: 'OrganizationDescription',
      regionId: 'RegionId',
      organizationId: 'OrganizationId',
      MSP: 'MSP',
      requestId: 'RequestId',
      CAUrl: 'CAUrl',
      CANAME: 'CANAME',
      zoneId: 'ZoneId',
      userCount: 'UserCount',
      organizationName: 'OrganizationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      peerCount: 'number',
      state: 'string',
      createTime: 'string',
      consortiumCount: 'number',
      tags: { 'type': 'array', 'itemType': DescribeFabricOrganizationResponseBodyResultTags },
      specName: 'string',
      ownerName: 'string',
      ownerUid: 'number',
      codeName: 'string',
      ownerBid: 'string',
      organizationDescription: 'string',
      regionId: 'string',
      organizationId: 'string',
      MSP: 'string',
      requestId: 'string',
      CAUrl: 'string',
      CANAME: 'string',
      zoneId: 'string',
      userCount: 'number',
      organizationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationChaincodesResponseBodyResult extends $tea.Model {
  endorsePolicy?: string;
  state?: string;
  createTime?: string;
  chaincodeId?: string;
  message?: string;
  chaincodeName?: string;
  installed?: string;
  creator?: string;
  deployTime?: string;
  chaincodeVersion?: string;
  channelName?: string;
  consortiumId?: string;
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      endorsePolicy: 'EndorsePolicy',
      state: 'State',
      createTime: 'CreateTime',
      chaincodeId: 'ChaincodeId',
      message: 'Message',
      chaincodeName: 'ChaincodeName',
      installed: 'Installed',
      creator: 'Creator',
      deployTime: 'DeployTime',
      chaincodeVersion: 'ChaincodeVersion',
      channelName: 'ChannelName',
      consortiumId: 'ConsortiumId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endorsePolicy: 'string',
      state: 'string',
      createTime: 'string',
      chaincodeId: 'string',
      message: 'string',
      chaincodeName: 'string',
      installed: 'string',
      creator: 'string',
      deployTime: 'string',
      chaincodeVersion: 'string',
      channelName: 'string',
      consortiumId: 'string',
      channelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationDeletableResponseBodyResult extends $tea.Model {
  deletable?: boolean;
  domain?: string;
  state?: string;
  zoneId?: string;
  organizationName?: string;
  codeName?: string;
  organizationDescription?: string;
  regionId?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      deletable: 'Deletable',
      domain: 'Domain',
      state: 'State',
      zoneId: 'ZoneId',
      organizationName: 'OrganizationName',
      codeName: 'CodeName',
      organizationDescription: 'OrganizationDescription',
      regionId: 'RegionId',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletable: 'boolean',
      domain: 'string',
      state: 'string',
      zoneId: 'string',
      organizationName: 'string',
      codeName: 'string',
      organizationDescription: 'string',
      regionId: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationMembersResponseBodyResult extends $tea.Model {
  domain?: string;
  consortiumId?: string;
  description?: string;
  state?: string;
  organizationName?: string;
  joinedTime?: string;
  consortiumName?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      consortiumId: 'ConsortiumId',
      description: 'Description',
      state: 'State',
      organizationName: 'OrganizationName',
      joinedTime: 'JoinedTime',
      consortiumName: 'ConsortiumName',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      consortiumId: 'string',
      description: 'string',
      state: 'string',
      organizationName: 'string',
      joinedTime: 'string',
      consortiumName: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationPeersResponseBodyResult extends $tea.Model {
  updateTime?: string;
  domain?: string;
  internetIp?: string;
  createTime?: string;
  isAnchor?: boolean;
  instanceType?: string;
  port?: number;
  organizationPeerName?: string;
  intranetIp?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      domain: 'Domain',
      internetIp: 'InternetIp',
      createTime: 'CreateTime',
      isAnchor: 'IsAnchor',
      instanceType: 'InstanceType',
      port: 'Port',
      organizationPeerName: 'OrganizationPeerName',
      intranetIp: 'IntranetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      domain: 'string',
      internetIp: 'string',
      createTime: 'string',
      isAnchor: 'boolean',
      instanceType: 'string',
      port: 'number',
      organizationPeerName: 'string',
      intranetIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationsRequestTag extends $tea.Model {
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

export class DescribeFabricOrganizationsResponseBodyResultTags extends $tea.Model {
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

export class DescribeFabricOrganizationsResponseBodyResult extends $tea.Model {
  domain?: string;
  peerCount?: number;
  state?: string;
  createTime?: string;
  consortiumCount?: number;
  tags?: DescribeFabricOrganizationsResponseBodyResultTags[];
  specName?: string;
  ownerName?: string;
  ownerUid?: number;
  codeName?: string;
  ownerBid?: string;
  organizationDescription?: string;
  regionId?: string;
  organizationId?: string;
  requestId?: string;
  zoneId?: string;
  userCount?: number;
  organizationName?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      peerCount: 'PeerCount',
      state: 'State',
      createTime: 'CreateTime',
      consortiumCount: 'ConsortiumCount',
      tags: 'Tags',
      specName: 'SpecName',
      ownerName: 'OwnerName',
      ownerUid: 'OwnerUid',
      codeName: 'CodeName',
      ownerBid: 'OwnerBid',
      organizationDescription: 'OrganizationDescription',
      regionId: 'RegionId',
      organizationId: 'OrganizationId',
      requestId: 'RequestId',
      zoneId: 'ZoneId',
      userCount: 'UserCount',
      organizationName: 'OrganizationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      peerCount: 'number',
      state: 'string',
      createTime: 'string',
      consortiumCount: 'number',
      tags: { 'type': 'array', 'itemType': DescribeFabricOrganizationsResponseBodyResultTags },
      specName: 'string',
      ownerName: 'string',
      ownerUid: 'number',
      codeName: 'string',
      ownerBid: 'string',
      organizationDescription: 'string',
      regionId: 'string',
      organizationId: 'string',
      requestId: 'string',
      zoneId: 'string',
      userCount: 'number',
      organizationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationSpecsResponseBodyResult extends $tea.Model {
  title?: string;
  organizationSpecsName?: string;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      organizationSpecsName: 'OrganizationSpecsName',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      organizationSpecsName: 'string',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationUsersResponseBodyResult extends $tea.Model {
  expireTime?: string;
  attrs?: string;
  callerBid?: string;
  createTime?: string;
  fullName?: string;
  callerUid?: number;
  username?: string;
  organizationId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      attrs: 'Attrs',
      callerBid: 'CallerBid',
      createTime: 'CreateTime',
      fullName: 'FullName',
      callerUid: 'CallerUid',
      username: 'Username',
      organizationId: 'OrganizationId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      attrs: 'string',
      callerBid: 'string',
      createTime: 'string',
      fullName: 'string',
      callerUid: 'number',
      username: 'string',
      organizationId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBodyResult extends $tea.Model {
  action?: string;
  result?: string;
  sender?: string;
  operationType?: string;
  handled?: boolean;
  responseTime?: string;
  target?: string;
  taskId?: number;
  requestTime?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      result: 'Result',
      sender: 'Sender',
      operationType: 'OperationType',
      handled: 'Handled',
      responseTime: 'ResponseTime',
      target: 'Target',
      taskId: 'TaskId',
      requestTime: 'RequestTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      result: 'string',
      sender: 'string',
      operationType: 'string',
      handled: 'boolean',
      responseTime: 'string',
      target: 'string',
      taskId: 'number',
      requestTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFabricOrganizationSDKResponseBodyResult extends $tea.Model {
  path?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallFabricChaincodeResponseBodyResult extends $tea.Model {
  type?: number;
  endorsePolicy?: string;
  state?: string;
  createTime?: string;
  chaincodeId?: string;
  message?: string;
  providerName?: string;
  chaincodeName?: string;
  install?: boolean;
  input?: string;
  providerId?: string;
  deployTime?: string;
  chaincodeVersion?: string;
  consortiumId?: string;
  channelName?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      endorsePolicy: 'EndorsePolicy',
      state: 'State',
      createTime: 'CreateTime',
      chaincodeId: 'ChaincodeId',
      message: 'Message',
      providerName: 'ProviderName',
      chaincodeName: 'ChaincodeName',
      install: 'Install',
      input: 'Input',
      providerId: 'ProviderId',
      deployTime: 'DeployTime',
      chaincodeVersion: 'ChaincodeVersion',
      consortiumId: 'ConsortiumId',
      channelName: 'ChannelName',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      endorsePolicy: 'string',
      state: 'string',
      createTime: 'string',
      chaincodeId: 'string',
      message: 'string',
      providerName: 'string',
      chaincodeName: 'string',
      install: 'boolean',
      input: 'string',
      providerId: 'string',
      deployTime: 'string',
      chaincodeVersion: 'string',
      consortiumId: 'string',
      channelName: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstantiateFabricChaincodeResponseBodyResult extends $tea.Model {
  type?: number;
  endorsePolicy?: string;
  state?: string;
  createTime?: string;
  chaincodeId?: string;
  message?: string;
  providerName?: string;
  chaincodeName?: string;
  install?: boolean;
  input?: string;
  providerId?: string;
  deployTime?: string;
  chaincodeVersion?: string;
  consortiumId?: string;
  channelName?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      endorsePolicy: 'EndorsePolicy',
      state: 'State',
      createTime: 'CreateTime',
      chaincodeId: 'ChaincodeId',
      message: 'Message',
      providerName: 'ProviderName',
      chaincodeName: 'ChaincodeName',
      install: 'Install',
      input: 'Input',
      providerId: 'ProviderId',
      deployTime: 'DeployTime',
      chaincodeVersion: 'ChaincodeVersion',
      consortiumId: 'ConsortiumId',
      channelName: 'ChannelName',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      endorsePolicy: 'string',
      state: 'string',
      createTime: 'string',
      chaincodeId: 'string',
      message: 'string',
      providerName: 'string',
      chaincodeName: 'string',
      install: 'boolean',
      input: 'string',
      providerId: 'string',
      deployTime: 'string',
      chaincodeVersion: 'string',
      consortiumId: 'string',
      channelName: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinFabricChannelResponseBodyResult extends $tea.Model {
  withPeer?: boolean;
  acceptTime?: string;
  state?: string;
  destroyTime?: string;
  inviteTime?: string;
  channelId?: string;
  confirmTime?: string;
  approveTime?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      withPeer: 'WithPeer',
      acceptTime: 'AcceptTime',
      state: 'State',
      destroyTime: 'DestroyTime',
      inviteTime: 'InviteTime',
      channelId: 'ChannelId',
      confirmTime: 'ConfirmTime',
      approveTime: 'ApproveTime',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withPeer: 'boolean',
      acceptTime: 'string',
      state: 'string',
      destroyTime: 'string',
      inviteTime: 'string',
      channelId: 'string',
      confirmTime: 'string',
      approveTime: 'string',
      organizationId: 'string',
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
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetFabricOrganizationUserPasswordResponseBodyResult extends $tea.Model {
  password?: string;
  expireTime?: string;
  createTime?: string;
  organizationId?: string;
  username?: string;
  fullname?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      expireTime: 'ExpireTime',
      createTime: 'CreateTime',
      organizationId: 'OrganizationId',
      username: 'Username',
      fullname: 'Fullname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      expireTime: 'string',
      createTime: 'string',
      organizationId: 'string',
      username: 'string',
      fullname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeFabricChaincodeResponseBodyResult extends $tea.Model {
  type?: number;
  endorsePolicy?: string;
  state?: string;
  createTime?: string;
  chaincodeId?: string;
  message?: string;
  providerName?: string;
  chaincodeName?: string;
  install?: boolean;
  input?: string;
  providerId?: string;
  deployTime?: string;
  chaincodeVersion?: string;
  consortiumId?: string;
  channelName?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      endorsePolicy: 'EndorsePolicy',
      state: 'State',
      createTime: 'CreateTime',
      chaincodeId: 'ChaincodeId',
      message: 'Message',
      providerName: 'ProviderName',
      chaincodeName: 'ChaincodeName',
      install: 'Install',
      input: 'Input',
      providerId: 'ProviderId',
      deployTime: 'DeployTime',
      chaincodeVersion: 'ChaincodeVersion',
      consortiumId: 'ConsortiumId',
      channelName: 'ChannelName',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      endorsePolicy: 'string',
      state: 'string',
      createTime: 'string',
      chaincodeId: 'string',
      message: 'string',
      providerName: 'string',
      chaincodeName: 'string',
      install: 'boolean',
      input: 'string',
      providerId: 'string',
      deployTime: 'string',
      chaincodeVersion: 'string',
      consortiumId: 'string',
      channelName: 'string',
      path: 'string',
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

export class UpgradeFabricChaincodeResponseBodyResult extends $tea.Model {
  type?: number;
  endorsePolicy?: string;
  state?: string;
  createTime?: string;
  chaincodeId?: string;
  message?: string;
  providerName?: string;
  chaincodeName?: string;
  install?: boolean;
  input?: string;
  providerId?: string;
  deployTime?: string;
  chaincodeVersion?: string;
  consortiumId?: string;
  channelName?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      endorsePolicy: 'EndorsePolicy',
      state: 'State',
      createTime: 'CreateTime',
      chaincodeId: 'ChaincodeId',
      message: 'Message',
      providerName: 'ProviderName',
      chaincodeName: 'ChaincodeName',
      install: 'Install',
      input: 'Input',
      providerId: 'ProviderId',
      deployTime: 'DeployTime',
      chaincodeVersion: 'ChaincodeVersion',
      consortiumId: 'ConsortiumId',
      channelName: 'ChannelName',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      endorsePolicy: 'string',
      state: 'string',
      createTime: 'string',
      chaincodeId: 'string',
      message: 'string',
      providerName: 'string',
      chaincodeName: 'string',
      install: 'boolean',
      input: 'string',
      providerId: 'string',
      deployTime: 'string',
      chaincodeVersion: 'string',
      consortiumId: 'string',
      channelName: 'string',
      path: 'string',
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
      'cn-qingdao': "baas.aliyuncs.com",
      'cn-beijing': "baas.aliyuncs.com",
      'cn-zhangjiakou': "baas.aliyuncs.com",
      'cn-huhehaote': "baas.aliyuncs.com",
      'cn-shanghai': "baas.aliyuncs.com",
      'cn-shenzhen': "baas.aliyuncs.com",
      'cn-hongkong': "baas.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "baas.ap-southeast-1.aliyuncs.com",
      'ap-northeast-1': "baas.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "baas.ap-southeast-1.aliyuncs.com",
      'us-west-1': "baas.ap-southeast-1.aliyuncs.com",
      'us-east-1': "baas.ap-southeast-1.aliyuncs.com",
      'eu-central-1': "baas.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "baas.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("baas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async acceptFabricInvitationWithOptions(request: AcceptFabricInvitationRequest, runtime: $Util.RuntimeOptions): Promise<AcceptFabricInvitationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AcceptFabricInvitationResponse>(await this.doRPCRequest("AcceptFabricInvitation", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new AcceptFabricInvitationResponse({}));
  }

  async acceptFabricInvitation(request: AcceptFabricInvitationRequest): Promise<AcceptFabricInvitationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acceptFabricInvitationWithOptions(request, runtime);
  }

  async applyAntChainCertificateWithOptions(request: ApplyAntChainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ApplyAntChainCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApplyAntChainCertificateResponse>(await this.doRPCRequest("ApplyAntChainCertificate", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new ApplyAntChainCertificateResponse({}));
  }

  async applyAntChainCertificate(request: ApplyAntChainCertificateRequest): Promise<ApplyAntChainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyAntChainCertificateWithOptions(request, runtime);
  }

  async applyAntChainCertificateWithKeyAutoCreationWithOptions(request: ApplyAntChainCertificateWithKeyAutoCreationRequest, runtime: $Util.RuntimeOptions): Promise<ApplyAntChainCertificateWithKeyAutoCreationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApplyAntChainCertificateWithKeyAutoCreationResponse>(await this.doRPCRequest("ApplyAntChainCertificateWithKeyAutoCreation", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new ApplyAntChainCertificateWithKeyAutoCreationResponse({}));
  }

  async applyAntChainCertificateWithKeyAutoCreation(request: ApplyAntChainCertificateWithKeyAutoCreationRequest): Promise<ApplyAntChainCertificateWithKeyAutoCreationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyAntChainCertificateWithKeyAutoCreationWithOptions(request, runtime);
  }

  async batchAddAntChainMiniAppQRCodeAuthorizedUsersWithOptions(tmpReq: BatchAddAntChainMiniAppQRCodeAuthorizedUsersRequest, runtime: $Util.RuntimeOptions): Promise<BatchAddAntChainMiniAppQRCodeAuthorizedUsersResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchAddAntChainMiniAppQRCodeAuthorizedUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.phoneList)) {
      request.phoneListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phoneList, "PhoneList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchAddAntChainMiniAppQRCodeAuthorizedUsersResponse>(await this.doRPCRequest("BatchAddAntChainMiniAppQRCodeAuthorizedUsers", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new BatchAddAntChainMiniAppQRCodeAuthorizedUsersResponse({}));
  }

  async batchAddAntChainMiniAppQRCodeAuthorizedUsers(request: BatchAddAntChainMiniAppQRCodeAuthorizedUsersRequest): Promise<BatchAddAntChainMiniAppQRCodeAuthorizedUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAddAntChainMiniAppQRCodeAuthorizedUsersWithOptions(request, runtime);
  }

  async checkFabricConsortiumDomainWithOptions(request: CheckFabricConsortiumDomainRequest, runtime: $Util.RuntimeOptions): Promise<CheckFabricConsortiumDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckFabricConsortiumDomainResponse>(await this.doRPCRequest("CheckFabricConsortiumDomain", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new CheckFabricConsortiumDomainResponse({}));
  }

  async checkFabricConsortiumDomain(request: CheckFabricConsortiumDomainRequest): Promise<CheckFabricConsortiumDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkFabricConsortiumDomainWithOptions(request, runtime);
  }

  async checkFabricOrganizationDomainWithOptions(request: CheckFabricOrganizationDomainRequest, runtime: $Util.RuntimeOptions): Promise<CheckFabricOrganizationDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckFabricOrganizationDomainResponse>(await this.doRPCRequest("CheckFabricOrganizationDomain", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new CheckFabricOrganizationDomainResponse({}));
  }

  async checkFabricOrganizationDomain(request: CheckFabricOrganizationDomainRequest): Promise<CheckFabricOrganizationDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkFabricOrganizationDomainWithOptions(request, runtime);
  }

  async confirmFabricConsortiumMemberWithOptions(request: ConfirmFabricConsortiumMemberRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmFabricConsortiumMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfirmFabricConsortiumMemberResponse>(await this.doRPCRequest("ConfirmFabricConsortiumMember", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new ConfirmFabricConsortiumMemberResponse({}));
  }

  async confirmFabricConsortiumMember(request: ConfirmFabricConsortiumMemberRequest): Promise<ConfirmFabricConsortiumMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmFabricConsortiumMemberWithOptions(request, runtime);
  }

  async copyAntChainContractProjectWithOptions(request: CopyAntChainContractProjectRequest, runtime: $Util.RuntimeOptions): Promise<CopyAntChainContractProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CopyAntChainContractProjectResponse>(await this.doRPCRequest("CopyAntChainContractProject", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new CopyAntChainContractProjectResponse({}));
  }

  async copyAntChainContractProject(request: CopyAntChainContractProjectRequest): Promise<CopyAntChainContractProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyAntChainContractProjectWithOptions(request, runtime);
  }

  async createAntChainAccountWithOptions(request: CreateAntChainAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAntChainAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAntChainAccountResponse>(await this.doRPCRequest("CreateAntChainAccount", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAntChainAccountResponse({}));
  }

  async createAntChainAccount(request: CreateAntChainAccountRequest): Promise<CreateAntChainAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAntChainAccountWithOptions(request, runtime);
  }

  async createAntChainAccountWithKeyPairAutoCreationWithOptions(request: CreateAntChainAccountWithKeyPairAutoCreationRequest, runtime: $Util.RuntimeOptions): Promise<CreateAntChainAccountWithKeyPairAutoCreationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAntChainAccountWithKeyPairAutoCreationResponse>(await this.doRPCRequest("CreateAntChainAccountWithKeyPairAutoCreation", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAntChainAccountWithKeyPairAutoCreationResponse({}));
  }

  async createAntChainAccountWithKeyPairAutoCreation(request: CreateAntChainAccountWithKeyPairAutoCreationRequest): Promise<CreateAntChainAccountWithKeyPairAutoCreationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAntChainAccountWithKeyPairAutoCreationWithOptions(request, runtime);
  }

  async createAntChainConsortiumWithOptions(request: CreateAntChainConsortiumRequest, runtime: $Util.RuntimeOptions): Promise<CreateAntChainConsortiumResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAntChainConsortiumResponse>(await this.doRPCRequest("CreateAntChainConsortium", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAntChainConsortiumResponse({}));
  }

  async createAntChainConsortium(request: CreateAntChainConsortiumRequest): Promise<CreateAntChainConsortiumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAntChainConsortiumWithOptions(request, runtime);
  }

  async createAntChainContractContentWithOptions(request: CreateAntChainContractContentRequest, runtime: $Util.RuntimeOptions): Promise<CreateAntChainContractContentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAntChainContractContentResponse>(await this.doRPCRequest("CreateAntChainContractContent", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAntChainContractContentResponse({}));
  }

  async createAntChainContractContent(request: CreateAntChainContractContentRequest): Promise<CreateAntChainContractContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAntChainContractContentWithOptions(request, runtime);
  }

  async createAntChainContractProjectWithOptions(request: CreateAntChainContractProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateAntChainContractProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAntChainContractProjectResponse>(await this.doRPCRequest("CreateAntChainContractProject", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAntChainContractProjectResponse({}));
  }

  async createAntChainContractProject(request: CreateAntChainContractProjectRequest): Promise<CreateAntChainContractProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAntChainContractProjectWithOptions(request, runtime);
  }

  async createFabricChaincodeWithOptions(request: CreateFabricChaincodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateFabricChaincodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFabricChaincodeResponse>(await this.doRPCRequest("CreateFabricChaincode", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFabricChaincodeResponse({}));
  }

  async createFabricChaincode(request: CreateFabricChaincodeRequest): Promise<CreateFabricChaincodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFabricChaincodeWithOptions(request, runtime);
  }

  async createFabricChannelWithOptions(request: CreateFabricChannelRequest, runtime: $Util.RuntimeOptions): Promise<CreateFabricChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFabricChannelResponse>(await this.doRPCRequest("CreateFabricChannel", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFabricChannelResponse({}));
  }

  async createFabricChannel(request: CreateFabricChannelRequest): Promise<CreateFabricChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFabricChannelWithOptions(request, runtime);
  }

  async createFabricChannelMemberWithOptions(request: CreateFabricChannelMemberRequest, runtime: $Util.RuntimeOptions): Promise<CreateFabricChannelMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFabricChannelMemberResponse>(await this.doRPCRequest("CreateFabricChannelMember", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFabricChannelMemberResponse({}));
  }

  async createFabricChannelMember(request: CreateFabricChannelMemberRequest): Promise<CreateFabricChannelMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFabricChannelMemberWithOptions(request, runtime);
  }

  async createFabricConsortiumWithOptions(request: CreateFabricConsortiumRequest, runtime: $Util.RuntimeOptions): Promise<CreateFabricConsortiumResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFabricConsortiumResponse>(await this.doRPCRequest("CreateFabricConsortium", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFabricConsortiumResponse({}));
  }

  async createFabricConsortium(request: CreateFabricConsortiumRequest): Promise<CreateFabricConsortiumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFabricConsortiumWithOptions(request, runtime);
  }

  async createFabricConsortiumMemberWithOptions(request: CreateFabricConsortiumMemberRequest, runtime: $Util.RuntimeOptions): Promise<CreateFabricConsortiumMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFabricConsortiumMemberResponse>(await this.doRPCRequest("CreateFabricConsortiumMember", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFabricConsortiumMemberResponse({}));
  }

  async createFabricConsortiumMember(request: CreateFabricConsortiumMemberRequest): Promise<CreateFabricConsortiumMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFabricConsortiumMemberWithOptions(request, runtime);
  }

  async createFabricOrganizationWithOptions(request: CreateFabricOrganizationRequest, runtime: $Util.RuntimeOptions): Promise<CreateFabricOrganizationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFabricOrganizationResponse>(await this.doRPCRequest("CreateFabricOrganization", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFabricOrganizationResponse({}));
  }

  async createFabricOrganization(request: CreateFabricOrganizationRequest): Promise<CreateFabricOrganizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFabricOrganizationWithOptions(request, runtime);
  }

  async createFabricOrganizationUserWithOptions(request: CreateFabricOrganizationUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateFabricOrganizationUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFabricOrganizationUserResponse>(await this.doRPCRequest("CreateFabricOrganizationUser", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFabricOrganizationUserResponse({}));
  }

  async createFabricOrganizationUser(request: CreateFabricOrganizationUserRequest): Promise<CreateFabricOrganizationUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFabricOrganizationUserWithOptions(request, runtime);
  }

  async deleteAntChainConsortiumWithOptions(request: DeleteAntChainConsortiumRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAntChainConsortiumResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAntChainConsortiumResponse>(await this.doRPCRequest("DeleteAntChainConsortium", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAntChainConsortiumResponse({}));
  }

  async deleteAntChainConsortium(request: DeleteAntChainConsortiumRequest): Promise<DeleteAntChainConsortiumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAntChainConsortiumWithOptions(request, runtime);
  }

  async deleteAntChainContractContentWithOptions(request: DeleteAntChainContractContentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAntChainContractContentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAntChainContractContentResponse>(await this.doRPCRequest("DeleteAntChainContractContent", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAntChainContractContentResponse({}));
  }

  async deleteAntChainContractContent(request: DeleteAntChainContractContentRequest): Promise<DeleteAntChainContractContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAntChainContractContentWithOptions(request, runtime);
  }

  async deleteAntChainContractProjectWithOptions(request: DeleteAntChainContractProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAntChainContractProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAntChainContractProjectResponse>(await this.doRPCRequest("DeleteAntChainContractProject", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAntChainContractProjectResponse({}));
  }

  async deleteAntChainContractProject(request: DeleteAntChainContractProjectRequest): Promise<DeleteAntChainContractProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAntChainContractProjectWithOptions(request, runtime);
  }

  async deleteAntChainMiniAppQRCodeAuthorizedUserWithOptions(request: DeleteAntChainMiniAppQRCodeAuthorizedUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAntChainMiniAppQRCodeAuthorizedUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAntChainMiniAppQRCodeAuthorizedUserResponse>(await this.doRPCRequest("DeleteAntChainMiniAppQRCodeAuthorizedUser", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAntChainMiniAppQRCodeAuthorizedUserResponse({}));
  }

  async deleteAntChainMiniAppQRCodeAuthorizedUser(request: DeleteAntChainMiniAppQRCodeAuthorizedUserRequest): Promise<DeleteAntChainMiniAppQRCodeAuthorizedUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAntChainMiniAppQRCodeAuthorizedUserWithOptions(request, runtime);
  }

  async deleteFabricChaincodeWithOptions(request: DeleteFabricChaincodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFabricChaincodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFabricChaincodeResponse>(await this.doRPCRequest("DeleteFabricChaincode", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFabricChaincodeResponse({}));
  }

  async deleteFabricChaincode(request: DeleteFabricChaincodeRequest): Promise<DeleteFabricChaincodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFabricChaincodeWithOptions(request, runtime);
  }

  async describeAntChainAccountsWithOptions(request: DescribeAntChainAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainAccountsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainAccountsResponse>(await this.doRPCRequest("DescribeAntChainAccounts", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainAccountsResponse({}));
  }

  async describeAntChainAccounts(request: DescribeAntChainAccountsRequest): Promise<DescribeAntChainAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainAccountsWithOptions(request, runtime);
  }

  async describeAntChainBlockWithOptions(request: DescribeAntChainBlockRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainBlockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainBlockResponse>(await this.doRPCRequest("DescribeAntChainBlock", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainBlockResponse({}));
  }

  async describeAntChainBlock(request: DescribeAntChainBlockRequest): Promise<DescribeAntChainBlockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainBlockWithOptions(request, runtime);
  }

  async describeAntChainCertificateApplicationsWithOptions(request: DescribeAntChainCertificateApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainCertificateApplicationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainCertificateApplicationsResponse>(await this.doRPCRequest("DescribeAntChainCertificateApplications", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainCertificateApplicationsResponse({}));
  }

  async describeAntChainCertificateApplications(request: DescribeAntChainCertificateApplicationsRequest): Promise<DescribeAntChainCertificateApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainCertificateApplicationsWithOptions(request, runtime);
  }

  async describeAntChainConsortiumsWithOptions(request: DescribeAntChainConsortiumsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainConsortiumsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainConsortiumsResponse>(await this.doRPCRequest("DescribeAntChainConsortiums", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainConsortiumsResponse({}));
  }

  async describeAntChainConsortiums(request: DescribeAntChainConsortiumsRequest): Promise<DescribeAntChainConsortiumsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainConsortiumsWithOptions(request, runtime);
  }

  async describeAntChainContractProjectContentTreeWithOptions(request: DescribeAntChainContractProjectContentTreeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainContractProjectContentTreeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainContractProjectContentTreeResponse>(await this.doRPCRequest("DescribeAntChainContractProjectContentTree", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainContractProjectContentTreeResponse({}));
  }

  async describeAntChainContractProjectContentTree(request: DescribeAntChainContractProjectContentTreeRequest): Promise<DescribeAntChainContractProjectContentTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainContractProjectContentTreeWithOptions(request, runtime);
  }

  async describeAntChainContractProjectsWithOptions(request: DescribeAntChainContractProjectsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainContractProjectsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainContractProjectsResponse>(await this.doRPCRequest("DescribeAntChainContractProjects", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainContractProjectsResponse({}));
  }

  async describeAntChainContractProjects(request: DescribeAntChainContractProjectsRequest): Promise<DescribeAntChainContractProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainContractProjectsWithOptions(request, runtime);
  }

  async describeAntChainDownloadPathsWithOptions(request: DescribeAntChainDownloadPathsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainDownloadPathsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainDownloadPathsResponse>(await this.doRPCRequest("DescribeAntChainDownloadPaths", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainDownloadPathsResponse({}));
  }

  async describeAntChainDownloadPaths(request: DescribeAntChainDownloadPathsRequest): Promise<DescribeAntChainDownloadPathsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainDownloadPathsWithOptions(request, runtime);
  }

  async describeAntChainInformationWithOptions(request: DescribeAntChainInformationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainInformationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainInformationResponse>(await this.doRPCRequest("DescribeAntChainInformation", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainInformationResponse({}));
  }

  async describeAntChainInformation(request: DescribeAntChainInformationRequest): Promise<DescribeAntChainInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainInformationWithOptions(request, runtime);
  }

  async describeAntChainLatestBlocksWithOptions(request: DescribeAntChainLatestBlocksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainLatestBlocksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainLatestBlocksResponse>(await this.doRPCRequest("DescribeAntChainLatestBlocks", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainLatestBlocksResponse({}));
  }

  async describeAntChainLatestBlocks(request: DescribeAntChainLatestBlocksRequest): Promise<DescribeAntChainLatestBlocksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainLatestBlocksWithOptions(request, runtime);
  }

  async describeAntChainLatestTransactionDigestsWithOptions(request: DescribeAntChainLatestTransactionDigestsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainLatestTransactionDigestsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainLatestTransactionDigestsResponse>(await this.doRPCRequest("DescribeAntChainLatestTransactionDigests", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainLatestTransactionDigestsResponse({}));
  }

  async describeAntChainLatestTransactionDigests(request: DescribeAntChainLatestTransactionDigestsRequest): Promise<DescribeAntChainLatestTransactionDigestsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainLatestTransactionDigestsWithOptions(request, runtime);
  }

  async describeAntChainMembersWithOptions(request: DescribeAntChainMembersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainMembersResponse>(await this.doRPCRequest("DescribeAntChainMembers", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainMembersResponse({}));
  }

  async describeAntChainMembers(request: DescribeAntChainMembersRequest): Promise<DescribeAntChainMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainMembersWithOptions(request, runtime);
  }

  async describeAntChainMiniAppBrowserQRCodeAccessLogWithOptions(request: DescribeAntChainMiniAppBrowserQRCodeAccessLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainMiniAppBrowserQRCodeAccessLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainMiniAppBrowserQRCodeAccessLogResponse>(await this.doRPCRequest("DescribeAntChainMiniAppBrowserQRCodeAccessLog", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainMiniAppBrowserQRCodeAccessLogResponse({}));
  }

  async describeAntChainMiniAppBrowserQRCodeAccessLog(request: DescribeAntChainMiniAppBrowserQRCodeAccessLogRequest): Promise<DescribeAntChainMiniAppBrowserQRCodeAccessLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainMiniAppBrowserQRCodeAccessLogWithOptions(request, runtime);
  }

  async describeAntChainMiniAppBrowserQRCodeAuthorizedUsersWithOptions(request: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponse>(await this.doRPCRequest("DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsers", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponse({}));
  }

  async describeAntChainMiniAppBrowserQRCodeAuthorizedUsers(request: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersRequest): Promise<DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainMiniAppBrowserQRCodeAuthorizedUsersWithOptions(request, runtime);
  }

  async describeAntChainMiniAppBrowserTransactionQRCodeWithOptions(request: DescribeAntChainMiniAppBrowserTransactionQRCodeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainMiniAppBrowserTransactionQRCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainMiniAppBrowserTransactionQRCodeResponse>(await this.doRPCRequest("DescribeAntChainMiniAppBrowserTransactionQRCode", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainMiniAppBrowserTransactionQRCodeResponse({}));
  }

  async describeAntChainMiniAppBrowserTransactionQRCode(request: DescribeAntChainMiniAppBrowserTransactionQRCodeRequest): Promise<DescribeAntChainMiniAppBrowserTransactionQRCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainMiniAppBrowserTransactionQRCodeWithOptions(request, runtime);
  }

  async describeAntChainNodesWithOptions(request: DescribeAntChainNodesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainNodesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainNodesResponse>(await this.doRPCRequest("DescribeAntChainNodes", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainNodesResponse({}));
  }

  async describeAntChainNodes(request: DescribeAntChainNodesRequest): Promise<DescribeAntChainNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainNodesWithOptions(request, runtime);
  }

  async describeAntChainQRCodeAuthorizationWithOptions(request: DescribeAntChainQRCodeAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainQRCodeAuthorizationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainQRCodeAuthorizationResponse>(await this.doRPCRequest("DescribeAntChainQRCodeAuthorization", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainQRCodeAuthorizationResponse({}));
  }

  async describeAntChainQRCodeAuthorization(request: DescribeAntChainQRCodeAuthorizationRequest): Promise<DescribeAntChainQRCodeAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainQRCodeAuthorizationWithOptions(request, runtime);
  }

  async describeAntChainsWithOptions(request: DescribeAntChainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainsResponse>(await this.doRPCRequest("DescribeAntChains", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainsResponse({}));
  }

  async describeAntChains(request: DescribeAntChainsRequest): Promise<DescribeAntChainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainsWithOptions(request, runtime);
  }

  async describeAntChainTransactionWithOptions(request: DescribeAntChainTransactionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainTransactionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainTransactionResponse>(await this.doRPCRequest("DescribeAntChainTransaction", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainTransactionResponse({}));
  }

  async describeAntChainTransaction(request: DescribeAntChainTransactionRequest): Promise<DescribeAntChainTransactionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainTransactionWithOptions(request, runtime);
  }

  async describeAntChainTransactionReceiptWithOptions(request: DescribeAntChainTransactionReceiptRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainTransactionReceiptResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainTransactionReceiptResponse>(await this.doRPCRequest("DescribeAntChainTransactionReceipt", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainTransactionReceiptResponse({}));
  }

  async describeAntChainTransactionReceipt(request: DescribeAntChainTransactionReceiptRequest): Promise<DescribeAntChainTransactionReceiptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainTransactionReceiptWithOptions(request, runtime);
  }

  async describeAntChainTransactionStatisticsWithOptions(request: DescribeAntChainTransactionStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainTransactionStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntChainTransactionStatisticsResponse>(await this.doRPCRequest("DescribeAntChainTransactionStatistics", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntChainTransactionStatisticsResponse({}));
  }

  async describeAntChainTransactionStatistics(request: DescribeAntChainTransactionStatisticsRequest): Promise<DescribeAntChainTransactionStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainTransactionStatisticsWithOptions(request, runtime);
  }

  async describeEthereumDeletableWithOptions(request: DescribeEthereumDeletableRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEthereumDeletableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEthereumDeletableResponse>(await this.doRPCRequest("DescribeEthereumDeletable", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEthereumDeletableResponse({}));
  }

  async describeEthereumDeletable(request: DescribeEthereumDeletableRequest): Promise<DescribeEthereumDeletableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEthereumDeletableWithOptions(request, runtime);
  }

  async describeFabricCandidateOrganizationsWithOptions(request: DescribeFabricCandidateOrganizationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricCandidateOrganizationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricCandidateOrganizationsResponse>(await this.doRPCRequest("DescribeFabricCandidateOrganizations", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricCandidateOrganizationsResponse({}));
  }

  async describeFabricCandidateOrganizations(request: DescribeFabricCandidateOrganizationsRequest): Promise<DescribeFabricCandidateOrganizationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricCandidateOrganizationsWithOptions(request, runtime);
  }

  async describeFabricChaincodeUploadPolicyWithOptions(request: DescribeFabricChaincodeUploadPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricChaincodeUploadPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricChaincodeUploadPolicyResponse>(await this.doRPCRequest("DescribeFabricChaincodeUploadPolicy", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricChaincodeUploadPolicyResponse({}));
  }

  async describeFabricChaincodeUploadPolicy(request: DescribeFabricChaincodeUploadPolicyRequest): Promise<DescribeFabricChaincodeUploadPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricChaincodeUploadPolicyWithOptions(request, runtime);
  }

  async describeFabricChannelMembersWithOptions(request: DescribeFabricChannelMembersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricChannelMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricChannelMembersResponse>(await this.doRPCRequest("DescribeFabricChannelMembers", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricChannelMembersResponse({}));
  }

  async describeFabricChannelMembers(request: DescribeFabricChannelMembersRequest): Promise<DescribeFabricChannelMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricChannelMembersWithOptions(request, runtime);
  }

  async describeFabricConsortiumAdminStatusWithOptions(request: DescribeFabricConsortiumAdminStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumAdminStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricConsortiumAdminStatusResponse>(await this.doRPCRequest("DescribeFabricConsortiumAdminStatus", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricConsortiumAdminStatusResponse({}));
  }

  async describeFabricConsortiumAdminStatus(request: DescribeFabricConsortiumAdminStatusRequest): Promise<DescribeFabricConsortiumAdminStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumAdminStatusWithOptions(request, runtime);
  }

  async describeFabricConsortiumChaincodesWithOptions(request: DescribeFabricConsortiumChaincodesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumChaincodesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricConsortiumChaincodesResponse>(await this.doRPCRequest("DescribeFabricConsortiumChaincodes", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricConsortiumChaincodesResponse({}));
  }

  async describeFabricConsortiumChaincodes(request: DescribeFabricConsortiumChaincodesRequest): Promise<DescribeFabricConsortiumChaincodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumChaincodesWithOptions(request, runtime);
  }

  async describeFabricConsortiumChannelsWithOptions(request: DescribeFabricConsortiumChannelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumChannelsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricConsortiumChannelsResponse>(await this.doRPCRequest("DescribeFabricConsortiumChannels", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricConsortiumChannelsResponse({}));
  }

  async describeFabricConsortiumChannels(request: DescribeFabricConsortiumChannelsRequest): Promise<DescribeFabricConsortiumChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumChannelsWithOptions(request, runtime);
  }

  async describeFabricConsortiumConfigWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeFabricConsortiumConfigResponse>(await this.doRPCRequest("DescribeFabricConsortiumConfig", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricConsortiumConfigResponse({}));
  }

  async describeFabricConsortiumConfig(): Promise<DescribeFabricConsortiumConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumConfigWithOptions(runtime);
  }

  async describeFabricConsortiumDeletableWithOptions(request: DescribeFabricConsortiumDeletableRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumDeletableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricConsortiumDeletableResponse>(await this.doRPCRequest("DescribeFabricConsortiumDeletable", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricConsortiumDeletableResponse({}));
  }

  async describeFabricConsortiumDeletable(request: DescribeFabricConsortiumDeletableRequest): Promise<DescribeFabricConsortiumDeletableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumDeletableWithOptions(request, runtime);
  }

  async describeFabricConsortiumMemberApprovalWithOptions(request: DescribeFabricConsortiumMemberApprovalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumMemberApprovalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricConsortiumMemberApprovalResponse>(await this.doRPCRequest("DescribeFabricConsortiumMemberApproval", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricConsortiumMemberApprovalResponse({}));
  }

  async describeFabricConsortiumMemberApproval(request: DescribeFabricConsortiumMemberApprovalRequest): Promise<DescribeFabricConsortiumMemberApprovalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumMemberApprovalWithOptions(request, runtime);
  }

  async describeFabricConsortiumMembersWithOptions(request: DescribeFabricConsortiumMembersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricConsortiumMembersResponse>(await this.doRPCRequest("DescribeFabricConsortiumMembers", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricConsortiumMembersResponse({}));
  }

  async describeFabricConsortiumMembers(request: DescribeFabricConsortiumMembersRequest): Promise<DescribeFabricConsortiumMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumMembersWithOptions(request, runtime);
  }

  async describeFabricConsortiumOrderersWithOptions(request: DescribeFabricConsortiumOrderersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumOrderersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricConsortiumOrderersResponse>(await this.doRPCRequest("DescribeFabricConsortiumOrderers", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricConsortiumOrderersResponse({}));
  }

  async describeFabricConsortiumOrderers(request: DescribeFabricConsortiumOrderersRequest): Promise<DescribeFabricConsortiumOrderersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumOrderersWithOptions(request, runtime);
  }

  async describeFabricConsortiumsWithOptions(request: DescribeFabricConsortiumsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricConsortiumsResponse>(await this.doRPCRequest("DescribeFabricConsortiums", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricConsortiumsResponse({}));
  }

  async describeFabricConsortiums(request: DescribeFabricConsortiumsRequest): Promise<DescribeFabricConsortiumsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumsWithOptions(request, runtime);
  }

  async describeFabricConsortiumSpecsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumSpecsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeFabricConsortiumSpecsResponse>(await this.doRPCRequest("DescribeFabricConsortiumSpecs", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricConsortiumSpecsResponse({}));
  }

  async describeFabricConsortiumSpecs(): Promise<DescribeFabricConsortiumSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumSpecsWithOptions(runtime);
  }

  async describeFabricExplorerWithOptions(request: DescribeFabricExplorerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricExplorerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricExplorerResponse>(await this.doRPCRequest("DescribeFabricExplorer", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricExplorerResponse({}));
  }

  async describeFabricExplorer(request: DescribeFabricExplorerRequest): Promise<DescribeFabricExplorerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricExplorerWithOptions(request, runtime);
  }

  async describeFabricInvitationCodeWithOptions(request: DescribeFabricInvitationCodeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricInvitationCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricInvitationCodeResponse>(await this.doRPCRequest("DescribeFabricInvitationCode", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricInvitationCodeResponse({}));
  }

  async describeFabricInvitationCode(request: DescribeFabricInvitationCodeRequest): Promise<DescribeFabricInvitationCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricInvitationCodeWithOptions(request, runtime);
  }

  async describeFabricInviterWithOptions(request: DescribeFabricInviterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricInviterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricInviterResponse>(await this.doRPCRequest("DescribeFabricInviter", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricInviterResponse({}));
  }

  async describeFabricInviter(request: DescribeFabricInviterRequest): Promise<DescribeFabricInviterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricInviterWithOptions(request, runtime);
  }

  async describeFabricOrdererLogsWithOptions(request: DescribeFabricOrdererLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrdererLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricOrdererLogsResponse>(await this.doRPCRequest("DescribeFabricOrdererLogs", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricOrdererLogsResponse({}));
  }

  async describeFabricOrdererLogs(request: DescribeFabricOrdererLogsRequest): Promise<DescribeFabricOrdererLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrdererLogsWithOptions(request, runtime);
  }

  async describeFabricOrganizationWithOptions(request: DescribeFabricOrganizationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricOrganizationResponse>(await this.doRPCRequest("DescribeFabricOrganization", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricOrganizationResponse({}));
  }

  async describeFabricOrganization(request: DescribeFabricOrganizationRequest): Promise<DescribeFabricOrganizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationWithOptions(request, runtime);
  }

  async describeFabricOrganizationChaincodesWithOptions(request: DescribeFabricOrganizationChaincodesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationChaincodesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricOrganizationChaincodesResponse>(await this.doRPCRequest("DescribeFabricOrganizationChaincodes", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricOrganizationChaincodesResponse({}));
  }

  async describeFabricOrganizationChaincodes(request: DescribeFabricOrganizationChaincodesRequest): Promise<DescribeFabricOrganizationChaincodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationChaincodesWithOptions(request, runtime);
  }

  async describeFabricOrganizationDeletableWithOptions(request: DescribeFabricOrganizationDeletableRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationDeletableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricOrganizationDeletableResponse>(await this.doRPCRequest("DescribeFabricOrganizationDeletable", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricOrganizationDeletableResponse({}));
  }

  async describeFabricOrganizationDeletable(request: DescribeFabricOrganizationDeletableRequest): Promise<DescribeFabricOrganizationDeletableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationDeletableWithOptions(request, runtime);
  }

  async describeFabricOrganizationMembersWithOptions(request: DescribeFabricOrganizationMembersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricOrganizationMembersResponse>(await this.doRPCRequest("DescribeFabricOrganizationMembers", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricOrganizationMembersResponse({}));
  }

  async describeFabricOrganizationMembers(request: DescribeFabricOrganizationMembersRequest): Promise<DescribeFabricOrganizationMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationMembersWithOptions(request, runtime);
  }

  async describeFabricOrganizationPeersWithOptions(request: DescribeFabricOrganizationPeersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationPeersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricOrganizationPeersResponse>(await this.doRPCRequest("DescribeFabricOrganizationPeers", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricOrganizationPeersResponse({}));
  }

  async describeFabricOrganizationPeers(request: DescribeFabricOrganizationPeersRequest): Promise<DescribeFabricOrganizationPeersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationPeersWithOptions(request, runtime);
  }

  async describeFabricOrganizationsWithOptions(request: DescribeFabricOrganizationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricOrganizationsResponse>(await this.doRPCRequest("DescribeFabricOrganizations", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricOrganizationsResponse({}));
  }

  async describeFabricOrganizations(request: DescribeFabricOrganizationsRequest): Promise<DescribeFabricOrganizationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationsWithOptions(request, runtime);
  }

  async describeFabricOrganizationSpecsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationSpecsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeFabricOrganizationSpecsResponse>(await this.doRPCRequest("DescribeFabricOrganizationSpecs", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricOrganizationSpecsResponse({}));
  }

  async describeFabricOrganizationSpecs(): Promise<DescribeFabricOrganizationSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationSpecsWithOptions(runtime);
  }

  async describeFabricOrganizationUsersWithOptions(request: DescribeFabricOrganizationUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricOrganizationUsersResponse>(await this.doRPCRequest("DescribeFabricOrganizationUsers", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricOrganizationUsersResponse({}));
  }

  async describeFabricOrganizationUsers(request: DescribeFabricOrganizationUsersRequest): Promise<DescribeFabricOrganizationUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationUsersWithOptions(request, runtime);
  }

  async describeFabricPeerLogsWithOptions(request: DescribeFabricPeerLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricPeerLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFabricPeerLogsResponse>(await this.doRPCRequest("DescribeFabricPeerLogs", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFabricPeerLogsResponse({}));
  }

  async describeFabricPeerLogs(request: DescribeFabricPeerLogsRequest): Promise<DescribeFabricPeerLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricPeerLogsWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeRootDomainWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRootDomainResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeRootDomainResponse>(await this.doRPCRequest("DescribeRootDomain", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRootDomainResponse({}));
  }

  async describeRootDomain(): Promise<DescribeRootDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRootDomainWithOptions(runtime);
  }

  async describeTasksWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeTasksResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeTasksResponse>(await this.doRPCRequest("DescribeTasks", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTasksResponse({}));
  }

  async describeTasks(): Promise<DescribeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTasksWithOptions(runtime);
  }

  async downloadFabricOrganizationSDKWithOptions(request: DownloadFabricOrganizationSDKRequest, runtime: $Util.RuntimeOptions): Promise<DownloadFabricOrganizationSDKResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DownloadFabricOrganizationSDKResponse>(await this.doRPCRequest("DownloadFabricOrganizationSDK", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new DownloadFabricOrganizationSDKResponse({}));
  }

  async downloadFabricOrganizationSDK(request: DownloadFabricOrganizationSDKRequest): Promise<DownloadFabricOrganizationSDKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadFabricOrganizationSDKWithOptions(request, runtime);
  }

  async freezeAntChainAccountWithOptions(request: FreezeAntChainAccountRequest, runtime: $Util.RuntimeOptions): Promise<FreezeAntChainAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FreezeAntChainAccountResponse>(await this.doRPCRequest("FreezeAntChainAccount", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new FreezeAntChainAccountResponse({}));
  }

  async freezeAntChainAccount(request: FreezeAntChainAccountRequest): Promise<FreezeAntChainAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.freezeAntChainAccountWithOptions(request, runtime);
  }

  async installFabricChaincodeWithOptions(request: InstallFabricChaincodeRequest, runtime: $Util.RuntimeOptions): Promise<InstallFabricChaincodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InstallFabricChaincodeResponse>(await this.doRPCRequest("InstallFabricChaincode", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new InstallFabricChaincodeResponse({}));
  }

  async installFabricChaincode(request: InstallFabricChaincodeRequest): Promise<InstallFabricChaincodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installFabricChaincodeWithOptions(request, runtime);
  }

  async instantiateFabricChaincodeWithOptions(request: InstantiateFabricChaincodeRequest, runtime: $Util.RuntimeOptions): Promise<InstantiateFabricChaincodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InstantiateFabricChaincodeResponse>(await this.doRPCRequest("InstantiateFabricChaincode", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new InstantiateFabricChaincodeResponse({}));
  }

  async instantiateFabricChaincode(request: InstantiateFabricChaincodeRequest): Promise<InstantiateFabricChaincodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.instantiateFabricChaincodeWithOptions(request, runtime);
  }

  async joinFabricChannelWithOptions(request: JoinFabricChannelRequest, runtime: $Util.RuntimeOptions): Promise<JoinFabricChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<JoinFabricChannelResponse>(await this.doRPCRequest("JoinFabricChannel", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new JoinFabricChannelResponse({}));
  }

  async joinFabricChannel(request: JoinFabricChannelRequest): Promise<JoinFabricChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinFabricChannelWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async resetAntChainCertificateWithOptions(request: ResetAntChainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ResetAntChainCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetAntChainCertificateResponse>(await this.doRPCRequest("ResetAntChainCertificate", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new ResetAntChainCertificateResponse({}));
  }

  async resetAntChainCertificate(request: ResetAntChainCertificateRequest): Promise<ResetAntChainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAntChainCertificateWithOptions(request, runtime);
  }

  async resetAntChainUserCertificateWithOptions(request: ResetAntChainUserCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ResetAntChainUserCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetAntChainUserCertificateResponse>(await this.doRPCRequest("ResetAntChainUserCertificate", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new ResetAntChainUserCertificateResponse({}));
  }

  async resetAntChainUserCertificate(request: ResetAntChainUserCertificateRequest): Promise<ResetAntChainUserCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAntChainUserCertificateWithOptions(request, runtime);
  }

  async resetFabricOrganizationUserPasswordWithOptions(request: ResetFabricOrganizationUserPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetFabricOrganizationUserPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetFabricOrganizationUserPasswordResponse>(await this.doRPCRequest("ResetFabricOrganizationUserPassword", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new ResetFabricOrganizationUserPasswordResponse({}));
  }

  async resetFabricOrganizationUserPassword(request: ResetFabricOrganizationUserPasswordRequest): Promise<ResetFabricOrganizationUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetFabricOrganizationUserPasswordWithOptions(request, runtime);
  }

  async synchronizeFabricChaincodeWithOptions(request: SynchronizeFabricChaincodeRequest, runtime: $Util.RuntimeOptions): Promise<SynchronizeFabricChaincodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SynchronizeFabricChaincodeResponse>(await this.doRPCRequest("SynchronizeFabricChaincode", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new SynchronizeFabricChaincodeResponse({}));
  }

  async synchronizeFabricChaincode(request: SynchronizeFabricChaincodeRequest): Promise<SynchronizeFabricChaincodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.synchronizeFabricChaincodeWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async unfreezeAntChainAccountWithOptions(request: UnfreezeAntChainAccountRequest, runtime: $Util.RuntimeOptions): Promise<UnfreezeAntChainAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnfreezeAntChainAccountResponse>(await this.doRPCRequest("UnfreezeAntChainAccount", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new UnfreezeAntChainAccountResponse({}));
  }

  async unfreezeAntChainAccount(request: UnfreezeAntChainAccountRequest): Promise<UnfreezeAntChainAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unfreezeAntChainAccountWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateAntChainWithOptions(request: UpdateAntChainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAntChainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAntChainResponse>(await this.doRPCRequest("UpdateAntChain", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAntChainResponse({}));
  }

  async updateAntChain(request: UpdateAntChainRequest): Promise<UpdateAntChainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAntChainWithOptions(request, runtime);
  }

  async updateAntChainConsortiumWithOptions(request: UpdateAntChainConsortiumRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAntChainConsortiumResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAntChainConsortiumResponse>(await this.doRPCRequest("UpdateAntChainConsortium", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAntChainConsortiumResponse({}));
  }

  async updateAntChainConsortium(request: UpdateAntChainConsortiumRequest): Promise<UpdateAntChainConsortiumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAntChainConsortiumWithOptions(request, runtime);
  }

  async updateAntChainContractContentWithOptions(request: UpdateAntChainContractContentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAntChainContractContentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAntChainContractContentResponse>(await this.doRPCRequest("UpdateAntChainContractContent", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAntChainContractContentResponse({}));
  }

  async updateAntChainContractContent(request: UpdateAntChainContractContentRequest): Promise<UpdateAntChainContractContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAntChainContractContentWithOptions(request, runtime);
  }

  async updateAntChainContractProjectWithOptions(request: UpdateAntChainContractProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAntChainContractProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAntChainContractProjectResponse>(await this.doRPCRequest("UpdateAntChainContractProject", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAntChainContractProjectResponse({}));
  }

  async updateAntChainContractProject(request: UpdateAntChainContractProjectRequest): Promise<UpdateAntChainContractProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAntChainContractProjectWithOptions(request, runtime);
  }

  async updateAntChainMemberWithOptions(request: UpdateAntChainMemberRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAntChainMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAntChainMemberResponse>(await this.doRPCRequest("UpdateAntChainMember", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAntChainMemberResponse({}));
  }

  async updateAntChainMember(request: UpdateAntChainMemberRequest): Promise<UpdateAntChainMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAntChainMemberWithOptions(request, runtime);
  }

  async updateAntChainQRCodeAuthorizationWithOptions(request: UpdateAntChainQRCodeAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAntChainQRCodeAuthorizationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAntChainQRCodeAuthorizationResponse>(await this.doRPCRequest("UpdateAntChainQRCodeAuthorization", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAntChainQRCodeAuthorizationResponse({}));
  }

  async updateAntChainQRCodeAuthorization(request: UpdateAntChainQRCodeAuthorizationRequest): Promise<UpdateAntChainQRCodeAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAntChainQRCodeAuthorizationWithOptions(request, runtime);
  }

  async upgradeFabricChaincodeWithOptions(request: UpgradeFabricChaincodeRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeFabricChaincodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeFabricChaincodeResponse>(await this.doRPCRequest("UpgradeFabricChaincode", "2018-12-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeFabricChaincodeResponse({}));
  }

  async upgradeFabricChaincode(request: UpgradeFabricChaincodeRequest): Promise<UpgradeFabricChaincodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeFabricChaincodeWithOptions(request, runtime);
  }

}
