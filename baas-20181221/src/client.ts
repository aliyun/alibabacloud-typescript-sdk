// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ChaincodePackage extends $tea.Model {
  chaincodePackageId?: string;
  checksum?: string;
  deleteTime?: string;
  deleted?: boolean;
  installTime?: string;
  label?: string;
  md5sum?: string;
  message?: string;
  organizationId?: string;
  ossURL?: string;
  providerBid?: string;
  providerUid?: string;
  state?: string;
  type?: number;
  typeName?: string;
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      chaincodePackageId: 'ChaincodePackageId',
      checksum: 'Checksum',
      deleteTime: 'DeleteTime',
      deleted: 'Deleted',
      installTime: 'InstallTime',
      label: 'Label',
      md5sum: 'Md5sum',
      message: 'Message',
      organizationId: 'OrganizationId',
      ossURL: 'OssURL',
      providerBid: 'ProviderBid',
      providerUid: 'ProviderUid',
      state: 'State',
      type: 'Type',
      typeName: 'TypeName',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodePackageId: 'string',
      checksum: 'string',
      deleteTime: 'string',
      deleted: 'boolean',
      installTime: 'string',
      label: 'string',
      md5sum: 'string',
      message: 'string',
      organizationId: 'string',
      ossURL: 'string',
      providerBid: 'string',
      providerUid: 'string',
      state: 'string',
      type: 'number',
      typeName: 'string',
      uploadTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChaincodeVO extends $tea.Model {
  chaincodeDefinitionId?: string;
  chaincodeId?: string;
  chaincodePackageId?: string;
  channelId?: string;
  channelName?: string;
  consortiumId?: string;
  createTime?: string;
  deployTime?: string;
  endorsePolicy?: string;
  initRequired?: boolean;
  input?: string;
  install?: boolean;
  management?: boolean;
  message?: string;
  name?: string;
  path?: string;
  providerId?: string;
  providerName?: string;
  state?: string;
  type?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      chaincodeDefinitionId: 'ChaincodeDefinitionId',
      chaincodeId: 'ChaincodeId',
      chaincodePackageId: 'ChaincodePackageId',
      channelId: 'ChannelId',
      channelName: 'ChannelName',
      consortiumId: 'ConsortiumId',
      createTime: 'CreateTime',
      deployTime: 'DeployTime',
      endorsePolicy: 'EndorsePolicy',
      initRequired: 'InitRequired',
      input: 'Input',
      install: 'Install',
      management: 'Management',
      message: 'Message',
      name: 'Name',
      path: 'Path',
      providerId: 'ProviderId',
      providerName: 'ProviderName',
      state: 'State',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeDefinitionId: 'string',
      chaincodeId: 'string',
      chaincodePackageId: 'string',
      channelId: 'string',
      channelName: 'string',
      consortiumId: 'string',
      createTime: 'string',
      deployTime: 'string',
      endorsePolicy: 'string',
      initRequired: 'boolean',
      input: 'string',
      install: 'boolean',
      management: 'boolean',
      message: 'string',
      name: 'string',
      path: 'string',
      providerId: 'string',
      providerName: 'string',
      state: 'string',
      type: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  errorCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
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
  commonName?: string;
  consortiumId?: string;
  countryName?: string;
  localityName?: string;
  organizationName?: string;
  organizationUnitName?: string;
  password?: string;
  stateOrProvinceName?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      commonName: 'CommonName',
      consortiumId: 'ConsortiumId',
      countryName: 'CountryName',
      localityName: 'LocalityName',
      organizationName: 'OrganizationName',
      organizationUnitName: 'OrganizationUnitName',
      password: 'Password',
      stateOrProvinceName: 'StateOrProvinceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      commonName: 'string',
      consortiumId: 'string',
      countryName: 'string',
      localityName: 'string',
      organizationName: 'string',
      organizationUnitName: 'string',
      password: 'string',
      stateOrProvinceName: 'string',
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

export class ApproveFabricChaincodeDefinitionRequest extends $tea.Model {
  chaincodeId?: string;
  chaincodePackageId?: string;
  location?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      chaincodeId: 'ChaincodeId',
      chaincodePackageId: 'ChaincodePackageId',
      location: 'Location',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeId: 'string',
      chaincodePackageId: 'string',
      location: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveFabricChaincodeDefinitionResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  result?: ChaincodeVO;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      result: ChaincodeVO,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveFabricChaincodeDefinitionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApproveFabricChaincodeDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApproveFabricChaincodeDefinitionResponseBody,
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
  errorCode?: number;
  requestId?: string;
  result?: CheckFabricConsortiumDomainResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: CheckFabricConsortiumDomainResponseBodyResult,
      success: 'boolean',
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
  domain?: string;
  domainCode?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      domainCode: 'DomainCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      domainCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFabricOrganizationDomainResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: CheckFabricOrganizationDomainResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: CheckFabricOrganizationDomainResponseBodyResult,
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
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
  projectDescription?: string;
  projectId?: string;
  projectName?: string;
  projectVersion?: string;
  static names(): { [key: string]: string } {
    return {
      projectDescription: 'ProjectDescription',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectDescription: 'string',
      projectId: 'string',
      projectName: 'string',
      projectVersion: 'string',
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
  account?: string;
  accountPubKey?: string;
  accountRecoverPubKey?: string;
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      accountPubKey: 'AccountPubKey',
      accountRecoverPubKey: 'AccountRecoverPubKey',
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      accountPubKey: 'string',
      accountRecoverPubKey: 'string',
      antChainId: 'string',
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
  account?: string;
  antChainId?: string;
  password?: string;
  recoverPassword?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      antChainId: 'AntChainId',
      password: 'Password',
      recoverPassword: 'RecoverPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      antChainId: 'string',
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
  consortiumDescription?: string;
  consortiumName?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumDescription: 'ConsortiumDescription',
      consortiumName: 'ConsortiumName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumDescription: 'string',
      consortiumName: 'string',
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
  content?: string;
  contentName?: string;
  isDirectory?: boolean;
  parentContentId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentName: 'ContentName',
      isDirectory: 'IsDirectory',
      parentContentId: 'ParentContentId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentName: 'string',
      isDirectory: 'boolean',
      parentContentId: 'string',
      projectId: 'string',
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
  projectDescription?: string;
  projectName?: string;
  projectVersion?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      projectDescription: 'ProjectDescription',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      projectDescription: 'string',
      projectName: 'string',
      projectVersion: 'string',
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
  channelId?: string;
  consortiumId?: string;
  endorsePolicy?: string;
  location?: string;
  organizationId?: string;
  ossBucket?: string;
  ossUrl?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      consortiumId: 'ConsortiumId',
      endorsePolicy: 'EndorsePolicy',
      location: 'Location',
      organizationId: 'OrganizationId',
      ossBucket: 'OssBucket',
      ossUrl: 'OssUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      consortiumId: 'string',
      endorsePolicy: 'string',
      location: 'string',
      organizationId: 'string',
      ossBucket: 'string',
      ossUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChaincodeResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: CreateFabricChaincodeResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: CreateFabricChaincodeResponseBodyResult,
      success: 'boolean',
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

export class CreateFabricChaincodePackageRequest extends $tea.Model {
  location?: string;
  organizationId?: string;
  ossUrl?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      organizationId: 'OrganizationId',
      ossUrl: 'OssUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      organizationId: 'string',
      ossUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChaincodePackageResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  result?: ChaincodePackage;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      result: ChaincodePackage,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChaincodePackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFabricChaincodePackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFabricChaincodePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChannelRequest extends $tea.Model {
  batchTimeout?: number;
  channelName?: string;
  consortiumId?: string;
  maxMessageCount?: number;
  organization?: CreateFabricChannelRequestOrganization[];
  preferredMaxBytes?: number;
  static names(): { [key: string]: string } {
    return {
      batchTimeout: 'BatchTimeout',
      channelName: 'ChannelName',
      consortiumId: 'ConsortiumId',
      maxMessageCount: 'MaxMessageCount',
      organization: 'Organization',
      preferredMaxBytes: 'PreferredMaxBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchTimeout: 'number',
      channelName: 'string',
      consortiumId: 'string',
      maxMessageCount: 'number',
      organization: { 'type': 'array', 'itemType': CreateFabricChannelRequestOrganization },
      preferredMaxBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChannelResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: CreateFabricChannelResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: CreateFabricChannelResponseBodyResult,
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
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
  channelPolicy?: string;
  consortiumDescription?: string;
  consortiumName?: string;
  domain?: string;
  location?: string;
  ordererType?: string;
  orderersCount?: number;
  organization?: CreateFabricConsortiumRequestOrganization[];
  paymentDuration?: number;
  paymentDurationUnit?: string;
  peersCount?: number;
  specName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      channelPolicy: 'ChannelPolicy',
      consortiumDescription: 'ConsortiumDescription',
      consortiumName: 'ConsortiumName',
      domain: 'Domain',
      location: 'Location',
      ordererType: 'OrdererType',
      orderersCount: 'OrderersCount',
      organization: 'Organization',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      peersCount: 'PeersCount',
      specName: 'SpecName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelPolicy: 'string',
      consortiumDescription: 'string',
      consortiumName: 'string',
      domain: 'string',
      location: 'string',
      ordererType: 'string',
      orderersCount: 'number',
      organization: { 'type': 'array', 'itemType': CreateFabricConsortiumRequestOrganization },
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      peersCount: 'number',
      specName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricConsortiumResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: CreateFabricConsortiumResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: CreateFabricConsortiumResponseBodyResult,
      success: 'boolean',
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
  code?: string;
  consortiumId?: string;
  organization?: CreateFabricConsortiumMemberRequestOrganization[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      consortiumId: 'ConsortiumId',
      organization: 'Organization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      consortiumId: 'string',
      organization: { 'type': 'array', 'itemType': CreateFabricConsortiumMemberRequestOrganization },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricConsortiumMemberResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
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
  description?: string;
  domain?: string;
  location?: string;
  organizationName?: string;
  paymentDuration?: number;
  paymentDurationUnit?: string;
  peersCount?: number;
  specName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      domain: 'Domain',
      location: 'Location',
      organizationName: 'OrganizationName',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      peersCount: 'PeersCount',
      specName: 'SpecName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domain: 'string',
      location: 'string',
      organizationName: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      peersCount: 'number',
      specName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricOrganizationResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: CreateFabricOrganizationResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: CreateFabricOrganizationResponseBodyResult,
      success: 'boolean',
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
  attrs?: string;
  organizationId?: string;
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      attrs: 'Attrs',
      organizationId: 'OrganizationId',
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attrs: 'string',
      organizationId: 'string',
      password: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricOrganizationUserResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: CreateFabricOrganizationUserResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: CreateFabricOrganizationUserResponseBodyResult,
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
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
  antChainId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

export class DescribeAntChainAccountsV2Request extends $tea.Model {
  antChainId?: string;
  consortiumId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      consortiumId: 'ConsortiumId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      consortiumId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainAccountsV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainAccountsV2ResponseBodyResult;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeAntChainAccountsV2ResponseBodyResult,
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainAccountsV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainAccountsV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainAccountsV2ResponseBody,
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

export class DescribeAntChainBlockV2Request extends $tea.Model {
  antChainId?: string;
  consortiumId?: string;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      consortiumId: 'ConsortiumId',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      consortiumId: 'string',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainBlockV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainBlockV2ResponseBodyResult;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeAntChainBlockV2ResponseBodyResult,
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainBlockV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainBlockV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainBlockV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainCertificateApplicationsRequest extends $tea.Model {
  antChainId?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
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

export class DescribeAntChainCertificateApplicationsV2Request extends $tea.Model {
  antChainId?: string;
  consortiumId?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      consortiumId: 'ConsortiumId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      consortiumId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainCertificateApplicationsV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainCertificateApplicationsV2ResponseBodyResult;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeAntChainCertificateApplicationsV2ResponseBodyResult,
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainCertificateApplicationsV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainCertificateApplicationsV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainCertificateApplicationsV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainConsortiumsRequest extends $tea.Model {
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

export class DescribeAntChainConsortiumsV2Request extends $tea.Model {
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

export class DescribeAntChainConsortiumsV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainConsortiumsV2ResponseBodyResult;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeAntChainConsortiumsV2ResponseBodyResult,
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainConsortiumsV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainConsortiumsV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainConsortiumsV2ResponseBody,
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

export class DescribeAntChainContractProjectContentTreeV2Request extends $tea.Model {
  consortiumId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectContentTreeV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: string;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectContentTreeV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainContractProjectContentTreeV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainContractProjectContentTreeV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectsRequest extends $tea.Model {
  consortiumId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

export class DescribeAntChainContractProjectsV2Request extends $tea.Model {
  consortiumId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectsV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainContractProjectsV2ResponseBodyResult;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeAntChainContractProjectsV2ResponseBodyResult,
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectsV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainContractProjectsV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainContractProjectsV2ResponseBody,
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

export class DescribeAntChainDownloadPathsV2Request extends $tea.Model {
  antChainId?: string;
  consortiumId?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      consortiumId: 'ConsortiumId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      consortiumId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainDownloadPathsV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainDownloadPathsV2ResponseBodyResult;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeAntChainDownloadPathsV2ResponseBodyResult,
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainDownloadPathsV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainDownloadPathsV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainDownloadPathsV2ResponseBody,
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

export class DescribeAntChainInformationV2Request extends $tea.Model {
  antChainId?: string;
  consortiumId?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      consortiumId: 'ConsortiumId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      consortiumId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainInformationV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainInformationV2ResponseBodyResult;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeAntChainInformationV2ResponseBodyResult,
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainInformationV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainInformationV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainInformationV2ResponseBody,
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

export class DescribeAntChainLatestBlocksV2Request extends $tea.Model {
  antChainId?: string;
  consortiumId?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      consortiumId: 'ConsortiumId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      consortiumId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainLatestBlocksV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainLatestBlocksV2ResponseBodyResult[];
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeAntChainLatestBlocksV2ResponseBodyResult },
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainLatestBlocksV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainLatestBlocksV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainLatestBlocksV2ResponseBody,
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

export class DescribeAntChainLatestTransactionDigestsV2Request extends $tea.Model {
  antChainId?: string;
  consortiumId?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      consortiumId: 'ConsortiumId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      consortiumId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainLatestTransactionDigestsV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: string[];
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainLatestTransactionDigestsV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainLatestTransactionDigestsV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainLatestTransactionDigestsV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMembersRequest extends $tea.Model {
  consortiumId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

export class DescribeAntChainMembersV2Request extends $tea.Model {
  consortiumId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMembersV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainMembersV2ResponseBodyResult;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeAntChainMembersV2ResponseBodyResult,
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMembersV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainMembersV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainMembersV2ResponseBody,
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

export class DescribeAntChainMiniAppBrowserQRCodeAccessLogV2Request extends $tea.Model {
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

export class DescribeAntChainMiniAppBrowserQRCodeAccessLogV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainMiniAppBrowserQRCodeAccessLogV2ResponseBodyResult;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeAntChainMiniAppBrowserQRCodeAccessLogV2ResponseBodyResult,
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAccessLogV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainMiniAppBrowserQRCodeAccessLogV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainMiniAppBrowserQRCodeAccessLogV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersRequest extends $tea.Model {
  antChainId?: string;
  pageNumber?: number;
  pageSize?: number;
  QRCodeType?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      QRCodeType: 'QRCodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      QRCodeType: 'string',
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

export class DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2Request extends $tea.Model {
  antChainId?: string;
  pageNumber?: number;
  pageSize?: number;
  QRCodeType?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      QRCodeType: 'QRCodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      QRCodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2ResponseBodyResult;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2ResponseBodyResult,
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2ResponseBody,
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

export class DescribeAntChainMiniAppBrowserTransactionQRCodeNewRequest extends $tea.Model {
  antChainId?: string;
  contractId?: string;
  transactionHash?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      contractId: 'ContractId',
      transactionHash: 'TransactionHash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      contractId: 'string',
      transactionHash: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserTransactionQRCodeNewResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainMiniAppBrowserTransactionQRCodeNewResponseBodyResult;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeAntChainMiniAppBrowserTransactionQRCodeNewResponseBodyResult,
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserTransactionQRCodeNewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainMiniAppBrowserTransactionQRCodeNewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainMiniAppBrowserTransactionQRCodeNewResponseBody,
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

export class DescribeAntChainNodesV2Request extends $tea.Model {
  antChainId?: string;
  consortiumId?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      consortiumId: 'ConsortiumId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      consortiumId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainNodesV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: string[];
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainNodesV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainNodesV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainNodesV2ResponseBody,
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

export class DescribeAntChainQRCodeAuthorizationV2Request extends $tea.Model {
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

export class DescribeAntChainQRCodeAuthorizationV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainQRCodeAuthorizationV2ResponseBodyResult;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeAntChainQRCodeAuthorizationV2ResponseBodyResult,
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainQRCodeAuthorizationV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainQRCodeAuthorizationV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainQRCodeAuthorizationV2ResponseBody,
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

export class DescribeAntChainTransactionReceiptV2Request extends $tea.Model {
  antChainId?: string;
  consortiumId?: string;
  hash?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      consortiumId: 'ConsortiumId',
      hash: 'Hash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      consortiumId: 'string',
      hash: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionReceiptV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainTransactionReceiptV2ResponseBodyResult;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeAntChainTransactionReceiptV2ResponseBodyResult,
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionReceiptV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainTransactionReceiptV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainTransactionReceiptV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionStatisticsRequest extends $tea.Model {
  antChainId?: string;
  end?: number;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      end: 'number',
      start: 'number',
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

export class DescribeAntChainTransactionStatisticsV2Request extends $tea.Model {
  antChainId?: string;
  consortiumId?: string;
  end?: number;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      consortiumId: 'ConsortiumId',
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      consortiumId: 'string',
      end: 'number',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionStatisticsV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainTransactionStatisticsV2ResponseBodyResult[];
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeAntChainTransactionStatisticsV2ResponseBodyResult },
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionStatisticsV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainTransactionStatisticsV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainTransactionStatisticsV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionV2Request extends $tea.Model {
  antChainId?: string;
  consortiumId?: string;
  hash?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      consortiumId: 'ConsortiumId',
      hash: 'Hash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      consortiumId: 'string',
      hash: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainTransactionV2ResponseBodyResult;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeAntChainTransactionV2ResponseBodyResult,
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainTransactionV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainTransactionV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainsRequest extends $tea.Model {
  consortiumId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

export class DescribeAntChainsV2Request extends $tea.Model {
  consortiumId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainsV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  result?: DescribeAntChainsV2ResponseBodyResult;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeAntChainsV2ResponseBodyResult,
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainsV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntChainsV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntChainsV2ResponseBody,
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
  errorCode?: number;
  requestId?: string;
  result?: DescribeEthereumDeletableResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: DescribeEthereumDeletableResponseBodyResult,
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricCandidateOrganizationsResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricCandidateOrganizationsResponseBodyResult },
      success: 'boolean',
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

export class DescribeFabricChaincodeDefinitionTaskRequest extends $tea.Model {
  chaincodeId?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      chaincodeId: 'ChaincodeId',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeId: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricChaincodeDefinitionTaskResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricChaincodeDefinitionTaskResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: DescribeFabricChaincodeDefinitionTaskResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricChaincodeDefinitionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricChaincodeDefinitionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricChaincodeDefinitionTaskResponseBody,
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
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricChaincodeUploadPolicyResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: DescribeFabricChaincodeUploadPolicyResponseBodyResult,
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricChannelMembersResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricChannelMembersResponseBodyResult },
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricConsortiumAdminStatusResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricConsortiumAdminStatusResponseBodyResult },
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricConsortiumChaincodesResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricConsortiumChaincodesResponseBodyResult },
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricConsortiumChannelsResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricConsortiumChannelsResponseBodyResult },
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricConsortiumConfigResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: DescribeFabricConsortiumConfigResponseBodyResult,
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricConsortiumDeletableResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: DescribeFabricConsortiumDeletableResponseBodyResult,
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricConsortiumMemberApprovalResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricConsortiumMemberApprovalResponseBodyResult },
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricConsortiumMembersResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricConsortiumMembersResponseBodyResult },
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricConsortiumOrderersResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricConsortiumOrderersResponseBodyResult },
      success: 'boolean',
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

export class DescribeFabricConsortiumSpecsResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricConsortiumSpecsResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricConsortiumSpecsResponseBodyResult },
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricConsortiumsResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricConsortiumsResponseBodyResult },
      success: 'boolean',
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

export class DescribeFabricExplorerRequest extends $tea.Model {
  exBody?: string;
  exMethod?: string;
  exUrl?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      exBody: 'ExBody',
      exMethod: 'ExMethod',
      exUrl: 'ExUrl',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exBody: 'string',
      exMethod: 'string',
      exUrl: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricExplorerResponseBody extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: number;
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'number',
      requestId: 'string',
      result: 'string',
      success: 'boolean',
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
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricInvitationCodeResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'number',
      requestId: 'string',
      result: DescribeFabricInvitationCodeResponseBodyResult,
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricInviterResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: DescribeFabricInviterResponseBodyResult,
      success: 'boolean',
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
  lines?: string;
  ordererName?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      lines: 'Lines',
      ordererName: 'OrdererName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      lines: 'string',
      ordererName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrdererLogsResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: 'string',
      success: 'boolean',
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
  location?: string;
  organizationId?: string;
  tag?: DescribeFabricOrganizationRequestTag[];
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      organizationId: 'OrganizationId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      organizationId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeFabricOrganizationRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricOrganizationResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: DescribeFabricOrganizationResponseBodyResult,
      success: 'boolean',
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

export class DescribeFabricOrganizationChaincodePackageRequest extends $tea.Model {
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

export class DescribeFabricOrganizationChaincodePackageResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  result?: ChaincodePackage[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ChaincodePackage },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationChaincodePackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricOrganizationChaincodePackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricOrganizationChaincodePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationChaincodesRequest extends $tea.Model {
  location?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationChaincodesResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricOrganizationChaincodesResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricOrganizationChaincodesResponseBodyResult },
      success: 'boolean',
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

export class DescribeFabricOrganizationChannelsRequest extends $tea.Model {
  location?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationChannelsResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricOrganizationChannelsResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricOrganizationChannelsResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationChannelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFabricOrganizationChannelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFabricOrganizationChannelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationDeletableRequest extends $tea.Model {
  location?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationDeletableResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricOrganizationDeletableResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: DescribeFabricOrganizationDeletableResponseBodyResult,
      success: 'boolean',
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
  location?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationMembersResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricOrganizationMembersResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricOrganizationMembersResponseBodyResult },
      success: 'boolean',
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
  location?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationPeersResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricOrganizationPeersResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricOrganizationPeersResponseBodyResult },
      success: 'boolean',
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

export class DescribeFabricOrganizationSpecsResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricOrganizationSpecsResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricOrganizationSpecsResponseBodyResult },
      success: 'boolean',
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
  location?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationUsersResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricOrganizationUsersResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricOrganizationUsersResponseBodyResult },
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: DescribeFabricOrganizationsResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeFabricOrganizationsResponseBodyResult },
      success: 'boolean',
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

export class DescribeFabricPeerLogsRequest extends $tea.Model {
  lines?: string;
  organizationId?: string;
  peerName?: string;
  static names(): { [key: string]: string } {
    return {
      lines: 'Lines',
      organizationId: 'OrganizationId',
      peerName: 'PeerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lines: 'string',
      organizationId: 'string',
      peerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricPeerLogsResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: 'string',
      success: 'boolean',
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
  acceptLanguage?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  errorCode?: number;
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
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
  errorCode?: number;
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: 'string',
      success: 'boolean',
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
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: number;
  requestId?: string;
  result?: DescribeTasksResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeTasksResponseBodyResult },
      success: 'boolean',
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
  location?: string;
  organizationId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      organizationId: 'OrganizationId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      organizationId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFabricOrganizationSDKResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: DownloadFabricOrganizationSDKResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DownloadFabricOrganizationSDKResponseBodyResult },
      success: 'boolean',
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
  chaincodeId?: string;
  location?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      chaincodeId: 'ChaincodeId',
      location: 'Location',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeId: 'string',
      location: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallFabricChaincodeResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: InstallFabricChaincodeResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: InstallFabricChaincodeResponseBodyResult,
      success: 'boolean',
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

export class InstallFabricChaincodePackageRequest extends $tea.Model {
  chaincodePackageId?: string;
  location?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      chaincodePackageId: 'ChaincodePackageId',
      location: 'Location',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodePackageId: 'string',
      location: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallFabricChaincodePackageResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  result?: ChaincodePackage;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      result: ChaincodePackage,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallFabricChaincodePackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstallFabricChaincodePackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstallFabricChaincodePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstantiateFabricChaincodeRequest extends $tea.Model {
  chaincodeId?: string;
  collectionConfig?: string;
  endorsePolicy?: string;
  location?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      chaincodeId: 'ChaincodeId',
      collectionConfig: 'CollectionConfig',
      endorsePolicy: 'EndorsePolicy',
      location: 'Location',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeId: 'string',
      collectionConfig: 'string',
      endorsePolicy: 'string',
      location: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstantiateFabricChaincodeResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: InstantiateFabricChaincodeResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: InstantiateFabricChaincodeResponseBodyResult,
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: JoinFabricChannelResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': JoinFabricChannelResponseBodyResult },
      success: 'boolean',
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
  nextToken?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  location?: string;
  organizationId?: string;
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      organizationId: 'OrganizationId',
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      organizationId: 'string',
      password: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetFabricOrganizationUserPasswordResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: ResetFabricOrganizationUserPasswordResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: ResetFabricOrganizationUserPasswordResponseBodyResult,
      success: 'boolean',
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

export class SubmitFabricChaincodeDefinitionRequest extends $tea.Model {
  chaincodePackageId?: string;
  chaincodeVersion?: string;
  channelId?: string;
  collectionConfig?: string;
  endorsePolicy?: string;
  initRequired?: boolean;
  location?: string;
  name?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      chaincodePackageId: 'ChaincodePackageId',
      chaincodeVersion: 'ChaincodeVersion',
      channelId: 'ChannelId',
      collectionConfig: 'CollectionConfig',
      endorsePolicy: 'EndorsePolicy',
      initRequired: 'InitRequired',
      location: 'Location',
      name: 'Name',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodePackageId: 'string',
      chaincodeVersion: 'string',
      channelId: 'string',
      collectionConfig: 'string',
      endorsePolicy: 'string',
      initRequired: 'boolean',
      location: 'string',
      name: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFabricChaincodeDefinitionResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  result?: ChaincodeVO;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      result: ChaincodeVO,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFabricChaincodeDefinitionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitFabricChaincodeDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitFabricChaincodeDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeFabricChaincodeRequest extends $tea.Model {
  chaincodeId?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      chaincodeId: 'ChaincodeId',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeId: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeFabricChaincodeResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: SynchronizeFabricChaincodeResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: SynchronizeFabricChaincodeResponseBodyResult,
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
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
  errorCode?: number;
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
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
  consortiumDescription?: string;
  consortiumId?: string;
  consortiumName?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumDescription: 'ConsortiumDescription',
      consortiumId: 'ConsortiumId',
      consortiumName: 'ConsortiumName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumDescription: 'string',
      consortiumId: 'string',
      consortiumName: 'string',
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
  content?: string;
  contentId?: string;
  contentName?: string;
  parentContentId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentId: 'ContentId',
      contentName: 'ContentName',
      parentContentId: 'ParentContentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentId: 'string',
      contentName: 'string',
      parentContentId: 'string',
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
  projectDescription?: string;
  projectId?: string;
  projectName?: string;
  projectVersion?: string;
  static names(): { [key: string]: string } {
    return {
      projectDescription: 'ProjectDescription',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectDescription: 'string',
      projectId: 'string',
      projectName: 'string',
      projectVersion: 'string',
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
  consortiumId?: string;
  memberId?: string;
  memberName?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      memberId: 'MemberId',
      memberName: 'MemberName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      memberId: 'string',
      memberName: 'string',
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
  authorizationType?: string;
  QRCodeType?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      authorizationType: 'AuthorizationType',
      QRCodeType: 'QRCodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      authorizationType: 'string',
      QRCodeType: 'string',
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
  chaincodeId?: string;
  collectionConfig?: string;
  endorsePolicy?: string;
  location?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      chaincodeId: 'ChaincodeId',
      collectionConfig: 'CollectionConfig',
      endorsePolicy: 'EndorsePolicy',
      location: 'Location',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeId: 'string',
      collectionConfig: 'string',
      endorsePolicy: 'string',
      location: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeFabricChaincodeResponseBody extends $tea.Model {
  errorCode?: number;
  requestId?: string;
  result?: UpgradeFabricChaincodeResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      requestId: 'string',
      result: UpgradeFabricChaincodeResponseBodyResult,
      success: 'boolean',
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

export class UpgradeFabricChaincodeDefinitionRequest extends $tea.Model {
  chaincodeId?: string;
  chaincodePackageId?: string;
  chaincodeVersion?: string;
  collectionConfig?: string;
  endorsePolicy?: string;
  initRequired?: boolean;
  location?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      chaincodeId: 'ChaincodeId',
      chaincodePackageId: 'ChaincodePackageId',
      chaincodeVersion: 'ChaincodeVersion',
      collectionConfig: 'CollectionConfig',
      endorsePolicy: 'EndorsePolicy',
      initRequired: 'InitRequired',
      location: 'Location',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeId: 'string',
      chaincodePackageId: 'string',
      chaincodeVersion: 'string',
      collectionConfig: 'string',
      endorsePolicy: 'string',
      initRequired: 'boolean',
      location: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeFabricChaincodeDefinitionResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  result?: ChaincodeVO;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      result: ChaincodeVO,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeFabricChaincodeDefinitionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeFabricChaincodeDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeFabricChaincodeDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAntChainCertificateWithKeyAutoCreationResponseBodyResultDownloadPath extends $tea.Model {
  caCrtUrl?: string;
  clientCrtUrl?: string;
  sdkUrl?: string;
  trustCaUrl?: string;
  static names(): { [key: string]: string } {
    return {
      caCrtUrl: 'CaCrtUrl',
      clientCrtUrl: 'ClientCrtUrl',
      sdkUrl: 'SdkUrl',
      trustCaUrl: 'TrustCaUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCrtUrl: 'string',
      clientCrtUrl: 'string',
      sdkUrl: 'string',
      trustCaUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAntChainCertificateWithKeyAutoCreationResponseBodyResult extends $tea.Model {
  downloadPath?: ApplyAntChainCertificateWithKeyAutoCreationResponseBodyResultDownloadPath;
  privateKey?: string;
  static names(): { [key: string]: string } {
    return {
      downloadPath: 'DownloadPath',
      privateKey: 'PrivateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadPath: ApplyAntChainCertificateWithKeyAutoCreationResponseBodyResultDownloadPath,
      privateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFabricConsortiumDomainResponseBodyResult extends $tea.Model {
  domain?: string;
  prompt?: string;
  valid?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      prompt: 'Prompt',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      prompt: 'string',
      valid: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFabricOrganizationDomainResponseBodyResult extends $tea.Model {
  domain?: string;
  prompt?: string;
  valid?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      prompt: 'Prompt',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      prompt: 'string',
      valid: 'boolean',
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
  consortiumId?: string;
  createTime?: number;
  projectDescription?: string;
  projectId?: string;
  projectName?: string;
  projectVersion?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      createTime: 'CreateTime',
      projectDescription: 'ProjectDescription',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      createTime: 'number',
      projectDescription: 'string',
      projectId: 'string',
      projectName: 'string',
      projectVersion: 'string',
      updateTime: 'number',
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
  account?: string;
  accountPrivateKey?: string;
  accountPublicKey?: string;
  accountRecoverPrivateKey?: string;
  accountRecoverPublicKey?: string;
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      accountPrivateKey: 'AccountPrivateKey',
      accountPublicKey: 'AccountPublicKey',
      accountRecoverPrivateKey: 'AccountRecoverPrivateKey',
      accountRecoverPublicKey: 'AccountRecoverPublicKey',
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      accountPrivateKey: 'string',
      accountPublicKey: 'string',
      accountRecoverPrivateKey: 'string',
      accountRecoverPublicKey: 'string',
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
  content?: string;
  contentId?: string;
  contentName?: string;
  createTime?: string;
  isDirectory?: boolean;
  parentContentId?: string;
  projectId?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentId: 'ContentId',
      contentName: 'ContentName',
      createTime: 'CreateTime',
      isDirectory: 'IsDirectory',
      parentContentId: 'ParentContentId',
      projectId: 'ProjectId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentId: 'string',
      contentName: 'string',
      createTime: 'string',
      isDirectory: 'boolean',
      parentContentId: 'string',
      projectId: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntChainContractProjectResponseBodyResult extends $tea.Model {
  consortiumId?: string;
  createTime?: number;
  projectDescription?: string;
  projectId?: string;
  projectName?: string;
  projectVersion?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      createTime: 'CreateTime',
      projectDescription: 'ProjectDescription',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      createTime: 'number',
      projectDescription: 'string',
      projectId: 'string',
      projectName: 'string',
      projectVersion: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricChaincodeResponseBodyResult extends $tea.Model {
  chaincodeId?: string;
  chaincodeName?: string;
  chaincodeVersion?: string;
  channelName?: string;
  consortiumId?: string;
  createTime?: string;
  deployTime?: string;
  endorsePolicy?: string;
  input?: string;
  install?: boolean;
  message?: string;
  path?: string;
  providerId?: string;
  providerName?: string;
  state?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      chaincodeId: 'ChaincodeId',
      chaincodeName: 'ChaincodeName',
      chaincodeVersion: 'ChaincodeVersion',
      channelName: 'ChannelName',
      consortiumId: 'ConsortiumId',
      createTime: 'CreateTime',
      deployTime: 'DeployTime',
      endorsePolicy: 'EndorsePolicy',
      input: 'Input',
      install: 'Install',
      message: 'Message',
      path: 'Path',
      providerId: 'ProviderId',
      providerName: 'ProviderName',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeId: 'string',
      chaincodeName: 'string',
      chaincodeVersion: 'string',
      channelName: 'string',
      consortiumId: 'string',
      createTime: 'string',
      deployTime: 'string',
      endorsePolicy: 'string',
      input: 'string',
      install: 'boolean',
      message: 'string',
      path: 'string',
      providerId: 'string',
      providerName: 'string',
      state: 'string',
      type: 'number',
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
  blockCount?: number;
  chaincodeCount?: number;
  channelId?: string;
  channelName?: string;
  consortiumId?: string;
  consortiumName?: string;
  createTime?: string;
  maxMessageCount?: number;
  memberCount?: number;
  ownerBid?: string;
  ownerName?: string;
  ownerUid?: number;
  preferredMaxBytes?: number;
  requestId?: string;
  state?: string;
  supportConfig?: boolean;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      batchTimeout: 'BatchTimeout',
      blockCount: 'BlockCount',
      chaincodeCount: 'ChaincodeCount',
      channelId: 'ChannelId',
      channelName: 'ChannelName',
      consortiumId: 'ConsortiumId',
      consortiumName: 'ConsortiumName',
      createTime: 'CreateTime',
      maxMessageCount: 'MaxMessageCount',
      memberCount: 'MemberCount',
      ownerBid: 'OwnerBid',
      ownerName: 'OwnerName',
      ownerUid: 'OwnerUid',
      preferredMaxBytes: 'PreferredMaxBytes',
      requestId: 'RequestId',
      state: 'State',
      supportConfig: 'SupportConfig',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchTimeout: 'number',
      blockCount: 'number',
      chaincodeCount: 'number',
      channelId: 'string',
      channelName: 'string',
      consortiumId: 'string',
      consortiumName: 'string',
      createTime: 'string',
      maxMessageCount: 'number',
      memberCount: 'number',
      ownerBid: 'string',
      ownerName: 'string',
      ownerUid: 'number',
      preferredMaxBytes: 'number',
      requestId: 'string',
      state: 'string',
      supportConfig: 'boolean',
      updateTime: 'string',
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
  channelPolicy?: string;
  clusterState?: string;
  codeName?: string;
  consortiumId?: string;
  consortiumName?: string;
  createTime?: string;
  description?: string;
  domain?: string;
  memberCount?: number;
  ordererCount?: number;
  ordererType?: string;
  ownerBid?: string;
  ownerUid?: number;
  regionId?: string;
  serviceState?: string;
  specName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      channelCount: 'ChannelCount',
      channelPolicy: 'ChannelPolicy',
      clusterState: 'ClusterState',
      codeName: 'CodeName',
      consortiumId: 'ConsortiumId',
      consortiumName: 'ConsortiumName',
      createTime: 'CreateTime',
      description: 'Description',
      domain: 'Domain',
      memberCount: 'MemberCount',
      ordererCount: 'OrdererCount',
      ordererType: 'OrdererType',
      ownerBid: 'OwnerBid',
      ownerUid: 'OwnerUid',
      regionId: 'RegionId',
      serviceState: 'ServiceState',
      specName: 'SpecName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCount: 'number',
      channelPolicy: 'string',
      clusterState: 'string',
      codeName: 'string',
      consortiumId: 'string',
      consortiumName: 'string',
      createTime: 'string',
      description: 'string',
      domain: 'string',
      memberCount: 'number',
      ordererCount: 'number',
      ordererType: 'string',
      ownerBid: 'string',
      ownerUid: 'number',
      regionId: 'string',
      serviceState: 'string',
      specName: 'string',
      zoneId: 'string',
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
  clusterState?: string;
  codeName?: string;
  consortiumCount?: number;
  createTime?: string;
  domain?: string;
  organizationDescription?: string;
  organizationId?: string;
  organizationName?: string;
  ownerBid?: string;
  ownerName?: string;
  ownerUid?: number;
  peerCount?: number;
  regionId?: string;
  requestId?: string;
  serviceState?: string;
  specName?: string;
  userCount?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterState: 'ClusterState',
      codeName: 'CodeName',
      consortiumCount: 'ConsortiumCount',
      createTime: 'CreateTime',
      domain: 'Domain',
      organizationDescription: 'OrganizationDescription',
      organizationId: 'OrganizationId',
      organizationName: 'OrganizationName',
      ownerBid: 'OwnerBid',
      ownerName: 'OwnerName',
      ownerUid: 'OwnerUid',
      peerCount: 'PeerCount',
      regionId: 'RegionId',
      requestId: 'RequestId',
      serviceState: 'ServiceState',
      specName: 'SpecName',
      userCount: 'UserCount',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterState: 'string',
      codeName: 'string',
      consortiumCount: 'number',
      createTime: 'string',
      domain: 'string',
      organizationDescription: 'string',
      organizationId: 'string',
      organizationName: 'string',
      ownerBid: 'string',
      ownerName: 'string',
      ownerUid: 'number',
      peerCount: 'number',
      regionId: 'string',
      requestId: 'string',
      serviceState: 'string',
      specName: 'string',
      userCount: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFabricOrganizationUserResponseBodyResult extends $tea.Model {
  createTime?: string;
  expireTime?: string;
  fullname?: string;
  organizationId?: string;
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      fullname: 'Fullname',
      organizationId: 'OrganizationId',
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      fullname: 'string',
      organizationId: 'string',
      password: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainAccountsResponseBodyResultAccounts extends $tea.Model {
  account?: string;
  accountPublicKey?: string;
  accountRecoveryKey?: string;
  accountStatus?: string;
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      accountPublicKey: 'AccountPublicKey',
      accountRecoveryKey: 'AccountRecoveryKey',
      accountStatus: 'AccountStatus',
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      accountPublicKey: 'string',
      accountRecoveryKey: 'string',
      accountStatus: 'string',
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainAccountsResponseBodyResultPagination extends $tea.Model {
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

export class DescribeAntChainAccountsResponseBodyResult extends $tea.Model {
  accounts?: DescribeAntChainAccountsResponseBodyResultAccounts[];
  pagination?: DescribeAntChainAccountsResponseBodyResultPagination;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': DescribeAntChainAccountsResponseBodyResultAccounts },
      pagination: DescribeAntChainAccountsResponseBodyResultPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainAccountsV2ResponseBodyResultAccounts extends $tea.Model {
  account?: string;
  accountPublicKey?: string;
  accountRecoveryKey?: string;
  accountStatus?: string;
  antChainId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      accountPublicKey: 'AccountPublicKey',
      accountRecoveryKey: 'AccountRecoveryKey',
      accountStatus: 'AccountStatus',
      antChainId: 'AntChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      accountPublicKey: 'string',
      accountRecoveryKey: 'string',
      accountStatus: 'string',
      antChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainAccountsV2ResponseBodyResultPagination extends $tea.Model {
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

export class DescribeAntChainAccountsV2ResponseBodyResult extends $tea.Model {
  accounts?: DescribeAntChainAccountsV2ResponseBodyResultAccounts[];
  pagination?: DescribeAntChainAccountsV2ResponseBodyResultPagination;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': DescribeAntChainAccountsV2ResponseBodyResultAccounts },
      pagination: DescribeAntChainAccountsV2ResponseBodyResultPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainBlockResponseBodyResult extends $tea.Model {
  antChainId?: string;
  blockHash?: string;
  createTime?: number;
  height?: number;
  previousHash?: string;
  rootTxHash?: string;
  transSummaryList?: string;
  transactionSize?: number;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      blockHash: 'BlockHash',
      createTime: 'CreateTime',
      height: 'Height',
      previousHash: 'PreviousHash',
      rootTxHash: 'RootTxHash',
      transSummaryList: 'TransSummaryList',
      transactionSize: 'TransactionSize',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      blockHash: 'string',
      createTime: 'number',
      height: 'number',
      previousHash: 'string',
      rootTxHash: 'string',
      transSummaryList: 'string',
      transactionSize: 'number',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainBlockV2ResponseBodyResultTransSummaryList extends $tea.Model {
  alias?: string;
  blockHash?: string;
  category?: number;
  createTime?: number;
  from?: string;
  gasUsed?: number;
  hash?: string;
  height?: number;
  referenceCount?: number;
  to?: string;
  transTypeV10?: string;
  transTypeV6?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      blockHash: 'BlockHash',
      category: 'Category',
      createTime: 'CreateTime',
      from: 'From',
      gasUsed: 'GasUsed',
      hash: 'Hash',
      height: 'Height',
      referenceCount: 'ReferenceCount',
      to: 'To',
      transTypeV10: 'TransTypeV10',
      transTypeV6: 'TransTypeV6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      blockHash: 'string',
      category: 'number',
      createTime: 'number',
      from: 'string',
      gasUsed: 'number',
      hash: 'string',
      height: 'number',
      referenceCount: 'number',
      to: 'string',
      transTypeV10: 'string',
      transTypeV6: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainBlockV2ResponseBodyResult extends $tea.Model {
  antChainId?: string;
  blockHash?: string;
  createTime?: number;
  height?: number;
  previousHash?: string;
  rootTxHash?: string;
  transSummaryList?: DescribeAntChainBlockV2ResponseBodyResultTransSummaryList[];
  transactionSize?: number;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      blockHash: 'BlockHash',
      createTime: 'CreateTime',
      height: 'Height',
      previousHash: 'PreviousHash',
      rootTxHash: 'RootTxHash',
      transSummaryList: 'TransSummaryList',
      transactionSize: 'TransactionSize',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      blockHash: 'string',
      createTime: 'number',
      height: 'number',
      previousHash: 'string',
      rootTxHash: 'string',
      transSummaryList: { 'type': 'array', 'itemType': DescribeAntChainBlockV2ResponseBodyResultTransSummaryList },
      transactionSize: 'number',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainCertificateApplicationsResponseBodyResultCertificateApplications extends $tea.Model {
  antChainId?: string;
  bid?: string;
  createtime?: number;
  status?: string;
  updatetime?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      bid: 'Bid',
      createtime: 'Createtime',
      status: 'Status',
      updatetime: 'Updatetime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      bid: 'string',
      createtime: 'number',
      status: 'string',
      updatetime: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainCertificateApplicationsResponseBodyResultPagination extends $tea.Model {
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

export class DescribeAntChainCertificateApplicationsResponseBodyResult extends $tea.Model {
  certificateApplications?: DescribeAntChainCertificateApplicationsResponseBodyResultCertificateApplications[];
  pagination?: DescribeAntChainCertificateApplicationsResponseBodyResultPagination;
  static names(): { [key: string]: string } {
    return {
      certificateApplications: 'CertificateApplications',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateApplications: { 'type': 'array', 'itemType': DescribeAntChainCertificateApplicationsResponseBodyResultCertificateApplications },
      pagination: DescribeAntChainCertificateApplicationsResponseBodyResultPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainCertificateApplicationsV2ResponseBodyResultCertificateApplications extends $tea.Model {
  antChainId?: string;
  bid?: string;
  createtime?: number;
  status?: string;
  updatetime?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      bid: 'Bid',
      createtime: 'Createtime',
      status: 'Status',
      updatetime: 'Updatetime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      bid: 'string',
      createtime: 'number',
      status: 'string',
      updatetime: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainCertificateApplicationsV2ResponseBodyResultPagination extends $tea.Model {
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

export class DescribeAntChainCertificateApplicationsV2ResponseBodyResult extends $tea.Model {
  certificateApplications?: DescribeAntChainCertificateApplicationsV2ResponseBodyResultCertificateApplications[];
  pagination?: DescribeAntChainCertificateApplicationsV2ResponseBodyResultPagination;
  static names(): { [key: string]: string } {
    return {
      certificateApplications: 'CertificateApplications',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateApplications: { 'type': 'array', 'itemType': DescribeAntChainCertificateApplicationsV2ResponseBodyResultCertificateApplications },
      pagination: DescribeAntChainCertificateApplicationsV2ResponseBodyResultPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainConsortiumsResponseBodyResultAntConsortiums extends $tea.Model {
  chainNum?: number;
  consortiumDescription?: string;
  consortiumId?: string;
  consortiumName?: string;
  createTime?: number;
  memberNum?: number;
  role?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      chainNum: 'ChainNum',
      consortiumDescription: 'ConsortiumDescription',
      consortiumId: 'ConsortiumId',
      consortiumName: 'ConsortiumName',
      createTime: 'CreateTime',
      memberNum: 'MemberNum',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainNum: 'number',
      consortiumDescription: 'string',
      consortiumId: 'string',
      consortiumName: 'string',
      createTime: 'number',
      memberNum: 'number',
      role: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainConsortiumsResponseBodyResultPagination extends $tea.Model {
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

export class DescribeAntChainConsortiumsV2ResponseBodyResultAntConsortiums extends $tea.Model {
  chainNum?: number;
  consortiumDescription?: string;
  consortiumId?: string;
  consortiumName?: string;
  createTime?: number;
  isEmptyConsortium?: boolean;
  memberNum?: number;
  role?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      chainNum: 'ChainNum',
      consortiumDescription: 'ConsortiumDescription',
      consortiumId: 'ConsortiumId',
      consortiumName: 'ConsortiumName',
      createTime: 'CreateTime',
      isEmptyConsortium: 'IsEmptyConsortium',
      memberNum: 'MemberNum',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainNum: 'number',
      consortiumDescription: 'string',
      consortiumId: 'string',
      consortiumName: 'string',
      createTime: 'number',
      isEmptyConsortium: 'boolean',
      memberNum: 'number',
      role: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainConsortiumsV2ResponseBodyResultPagination extends $tea.Model {
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

export class DescribeAntChainConsortiumsV2ResponseBodyResult extends $tea.Model {
  antConsortiums?: DescribeAntChainConsortiumsV2ResponseBodyResultAntConsortiums[];
  pagination?: DescribeAntChainConsortiumsV2ResponseBodyResultPagination;
  static names(): { [key: string]: string } {
    return {
      antConsortiums: 'AntConsortiums',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antConsortiums: { 'type': 'array', 'itemType': DescribeAntChainConsortiumsV2ResponseBodyResultAntConsortiums },
      pagination: DescribeAntChainConsortiumsV2ResponseBodyResultPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectContentTreeResponseBodyResult extends $tea.Model {
  children?: { [key: string]: any }[];
  projectDescription?: string;
  projectId?: string;
  projectName?: string;
  projectVersion?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      projectDescription: 'ProjectDescription',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      projectDescription: 'string',
      projectId: 'string',
      projectName: 'string',
      projectVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectsResponseBodyResultContractProjects extends $tea.Model {
  consortiumId?: string;
  createTime?: number;
  projectDescription?: string;
  projectId?: string;
  projectName?: string;
  projectVersion?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      createTime: 'CreateTime',
      projectDescription: 'ProjectDescription',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      createTime: 'number',
      projectDescription: 'string',
      projectId: 'string',
      projectName: 'string',
      projectVersion: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectsResponseBodyResultPagination extends $tea.Model {
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

export class DescribeAntChainContractProjectsResponseBodyResult extends $tea.Model {
  contractProjects?: DescribeAntChainContractProjectsResponseBodyResultContractProjects[];
  pagination?: DescribeAntChainContractProjectsResponseBodyResultPagination;
  static names(): { [key: string]: string } {
    return {
      contractProjects: 'ContractProjects',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractProjects: { 'type': 'array', 'itemType': DescribeAntChainContractProjectsResponseBodyResultContractProjects },
      pagination: DescribeAntChainContractProjectsResponseBodyResultPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectsV2ResponseBodyResultContractProjects extends $tea.Model {
  consortiumId?: string;
  createTime?: number;
  projectDescription?: string;
  projectId?: string;
  projectName?: string;
  projectVersion?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      createTime: 'CreateTime',
      projectDescription: 'ProjectDescription',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      createTime: 'number',
      projectDescription: 'string',
      projectId: 'string',
      projectName: 'string',
      projectVersion: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainContractProjectsV2ResponseBodyResultPagination extends $tea.Model {
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

export class DescribeAntChainContractProjectsV2ResponseBodyResult extends $tea.Model {
  contractProjects?: DescribeAntChainContractProjectsV2ResponseBodyResultContractProjects[];
  pagination?: DescribeAntChainContractProjectsV2ResponseBodyResultPagination;
  static names(): { [key: string]: string } {
    return {
      contractProjects: 'ContractProjects',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractProjects: { 'type': 'array', 'itemType': DescribeAntChainContractProjectsV2ResponseBodyResultContractProjects },
      pagination: DescribeAntChainContractProjectsV2ResponseBodyResultPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainDownloadPathsResponseBodyResult extends $tea.Model {
  caCrtUrl?: string;
  clientCrtUrl?: string;
  sdkUrl?: string;
  trustCaUrl?: string;
  static names(): { [key: string]: string } {
    return {
      caCrtUrl: 'CaCrtUrl',
      clientCrtUrl: 'ClientCrtUrl',
      sdkUrl: 'SdkUrl',
      trustCaUrl: 'TrustCaUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCrtUrl: 'string',
      clientCrtUrl: 'string',
      sdkUrl: 'string',
      trustCaUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainDownloadPathsV2ResponseBodyResult extends $tea.Model {
  caCrtUrl?: string;
  clientCrtUrl?: string;
  sdkUrl?: string;
  trustCaUrl?: string;
  static names(): { [key: string]: string } {
    return {
      caCrtUrl: 'CaCrtUrl',
      clientCrtUrl: 'ClientCrtUrl',
      sdkUrl: 'SdkUrl',
      trustCaUrl: 'TrustCaUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCrtUrl: 'string',
      clientCrtUrl: 'string',
      sdkUrl: 'string',
      trustCaUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainInformationResponseBodyResultNodeInfos extends $tea.Model {
  blockHeight?: number;
  nodeName?: string;
  status?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      blockHeight: 'BlockHeight',
      nodeName: 'NodeName',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockHeight: 'number',
      nodeName: 'string',
      status: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainInformationResponseBodyResult extends $tea.Model {
  abnormalNodes?: number;
  antChainId?: string;
  blockHeight?: number;
  createTime?: number;
  nodeInfos?: DescribeAntChainInformationResponseBodyResultNodeInfos[];
  nodeNumber?: number;
  normal?: boolean;
  transactionSum?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalNodes: 'AbnormalNodes',
      antChainId: 'AntChainId',
      blockHeight: 'BlockHeight',
      createTime: 'CreateTime',
      nodeInfos: 'NodeInfos',
      nodeNumber: 'NodeNumber',
      normal: 'Normal',
      transactionSum: 'TransactionSum',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalNodes: 'number',
      antChainId: 'string',
      blockHeight: 'number',
      createTime: 'number',
      nodeInfos: { 'type': 'array', 'itemType': DescribeAntChainInformationResponseBodyResultNodeInfos },
      nodeNumber: 'number',
      normal: 'boolean',
      transactionSum: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainInformationV2ResponseBodyResultNodeInfos extends $tea.Model {
  blockHeight?: number;
  nodeName?: string;
  status?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      blockHeight: 'BlockHeight',
      nodeName: 'NodeName',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockHeight: 'number',
      nodeName: 'string',
      status: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainInformationV2ResponseBodyResult extends $tea.Model {
  abnormalNodes?: number;
  antChainId?: string;
  blockHeight?: number;
  createTime?: number;
  isRole?: boolean;
  nodeInfos?: DescribeAntChainInformationV2ResponseBodyResultNodeInfos[];
  nodeNumber?: number;
  normal?: boolean;
  transactionSum?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalNodes: 'AbnormalNodes',
      antChainId: 'AntChainId',
      blockHeight: 'BlockHeight',
      createTime: 'CreateTime',
      isRole: 'IsRole',
      nodeInfos: 'NodeInfos',
      nodeNumber: 'NodeNumber',
      normal: 'Normal',
      transactionSum: 'TransactionSum',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalNodes: 'number',
      antChainId: 'string',
      blockHeight: 'number',
      createTime: 'number',
      isRole: 'boolean',
      nodeInfos: { 'type': 'array', 'itemType': DescribeAntChainInformationV2ResponseBodyResultNodeInfos },
      nodeNumber: 'number',
      normal: 'boolean',
      transactionSum: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainLatestBlocksV2ResponseBodyResult extends $tea.Model {
  alias?: string;
  bizData?: string;
  blockHash?: string;
  createTime?: number;
  height?: number;
  previousHash?: string;
  rootTxHash?: string;
  size?: number;
  transactionSize?: number;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      bizData: 'BizData',
      blockHash: 'BlockHash',
      createTime: 'CreateTime',
      height: 'Height',
      previousHash: 'PreviousHash',
      rootTxHash: 'RootTxHash',
      size: 'Size',
      transactionSize: 'TransactionSize',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      bizData: 'string',
      blockHash: 'string',
      createTime: 'number',
      height: 'number',
      previousHash: 'string',
      rootTxHash: 'string',
      size: 'number',
      transactionSize: 'number',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMembersResponseBodyResultMembers extends $tea.Model {
  joinTime?: number;
  memberId?: string;
  memberName?: string;
  role?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      joinTime: 'JoinTime',
      memberId: 'MemberId',
      memberName: 'MemberName',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTime: 'number',
      memberId: 'string',
      memberName: 'string',
      role: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMembersResponseBodyResultPagination extends $tea.Model {
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

export class DescribeAntChainMembersV2ResponseBodyResultMembers extends $tea.Model {
  joinTime?: number;
  memberId?: string;
  memberName?: string;
  role?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      joinTime: 'JoinTime',
      memberId: 'MemberId',
      memberName: 'MemberName',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTime: 'number',
      memberId: 'string',
      memberName: 'string',
      role: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMembersV2ResponseBodyResultPagination extends $tea.Model {
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

export class DescribeAntChainMembersV2ResponseBodyResult extends $tea.Model {
  members?: DescribeAntChainMembersV2ResponseBodyResultMembers[];
  pagination?: DescribeAntChainMembersV2ResponseBodyResultPagination;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': DescribeAntChainMembersV2ResponseBodyResultMembers },
      pagination: DescribeAntChainMembersV2ResponseBodyResultPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAccessLogResponseBodyResult extends $tea.Model {
  accessAlipayAccountCount?: number;
  accessCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessAlipayAccountCount: 'AccessAlipayAccountCount',
      accessCount: 'AccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessAlipayAccountCount: 'number',
      accessCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAccessLogV2ResponseBodyResult extends $tea.Model {
  accessAlipayAccountCount?: number;
  accessCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessAlipayAccountCount: 'AccessAlipayAccountCount',
      accessCount: 'AccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessAlipayAccountCount: 'number',
      accessCount: 'number',
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

export class DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBodyResult extends $tea.Model {
  antChainId?: string;
  authorizationType?: string;
  authorizedUserList?: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBodyResultAuthorizedUserList[];
  pagination?: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBodyResultPagination;
  QRCodeType?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      authorizationType: 'AuthorizationType',
      authorizedUserList: 'AuthorizedUserList',
      pagination: 'Pagination',
      QRCodeType: 'QRCodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      authorizationType: 'string',
      authorizedUserList: { 'type': 'array', 'itemType': DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBodyResultAuthorizedUserList },
      pagination: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponseBodyResultPagination,
      QRCodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2ResponseBodyResultAuthorizedUserList extends $tea.Model {
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

export class DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2ResponseBodyResultPagination extends $tea.Model {
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

export class DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2ResponseBodyResult extends $tea.Model {
  antChainId?: string;
  authorizationType?: string;
  authorizedUserList?: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2ResponseBodyResultAuthorizedUserList[];
  pagination?: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2ResponseBodyResultPagination;
  QRCodeType?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      authorizationType: 'AuthorizationType',
      authorizedUserList: 'AuthorizedUserList',
      pagination: 'Pagination',
      QRCodeType: 'QRCodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      authorizationType: 'string',
      authorizedUserList: { 'type': 'array', 'itemType': DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2ResponseBodyResultAuthorizedUserList },
      pagination: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2ResponseBodyResultPagination,
      QRCodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserTransactionQRCodeResponseBodyResult extends $tea.Model {
  antChainId?: string;
  base64QRCodePNG?: string;
  QRCodeContent?: string;
  transactionHash?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      base64QRCodePNG: 'Base64QRCodePNG',
      QRCodeContent: 'QRCodeContent',
      transactionHash: 'TransactionHash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      base64QRCodePNG: 'string',
      QRCodeContent: 'string',
      transactionHash: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainMiniAppBrowserTransactionQRCodeNewResponseBodyResult extends $tea.Model {
  antChainId?: string;
  base64QRCodePNG?: string;
  QRCodeContent?: string;
  transactionHash?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      base64QRCodePNG: 'Base64QRCodePNG',
      QRCodeContent: 'QRCodeContent',
      transactionHash: 'TransactionHash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      base64QRCodePNG: 'string',
      QRCodeContent: 'string',
      transactionHash: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainQRCodeAuthorizationResponseBodyResult extends $tea.Model {
  antChainId?: string;
  authorizationType?: string;
  QRCodeType?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      authorizationType: 'AuthorizationType',
      QRCodeType: 'QRCodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      authorizationType: 'string',
      QRCodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainQRCodeAuthorizationV2ResponseBodyResult extends $tea.Model {
  antChainId?: string;
  authorizationType?: string;
  QRCodeType?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      authorizationType: 'AuthorizationType',
      QRCodeType: 'QRCodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      authorizationType: 'string',
      QRCodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionResponseBodyResultTransaction extends $tea.Model {
  data?: string;
  extentions?: string[];
  from?: string;
  gas?: string;
  hash?: string;
  nonce?: string;
  period?: number;
  signatures?: string[];
  timestamp?: number;
  to?: string;
  txType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      extentions: 'Extentions',
      from: 'From',
      gas: 'Gas',
      hash: 'Hash',
      nonce: 'Nonce',
      period: 'Period',
      signatures: 'Signatures',
      timestamp: 'Timestamp',
      to: 'To',
      txType: 'TxType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      extentions: { 'type': 'array', 'itemType': 'string' },
      from: 'string',
      gas: 'string',
      hash: 'string',
      nonce: 'string',
      period: 'number',
      signatures: { 'type': 'array', 'itemType': 'string' },
      timestamp: 'number',
      to: 'string',
      txType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionResponseBodyResult extends $tea.Model {
  blockHash?: string;
  blockHeight?: number;
  blockVersion?: string;
  createTime?: number;
  hash?: string;
  transaction?: DescribeAntChainTransactionResponseBodyResultTransaction;
  static names(): { [key: string]: string } {
    return {
      blockHash: 'BlockHash',
      blockHeight: 'BlockHeight',
      blockVersion: 'BlockVersion',
      createTime: 'CreateTime',
      hash: 'Hash',
      transaction: 'Transaction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockHash: 'string',
      blockHeight: 'number',
      blockVersion: 'string',
      createTime: 'number',
      hash: 'string',
      transaction: DescribeAntChainTransactionResponseBodyResultTransaction,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionReceiptResponseBodyResult extends $tea.Model {
  data?: string;
  gasUsed?: string;
  logs?: string[];
  result?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      gasUsed: 'GasUsed',
      logs: 'Logs',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      gasUsed: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      result: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionReceiptV2ResponseBodyResult extends $tea.Model {
  data?: string;
  gasUsed?: string;
  logs?: string[];
  result?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      gasUsed: 'GasUsed',
      logs: 'Logs',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      gasUsed: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      result: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionStatisticsResponseBodyResult extends $tea.Model {
  antChainId?: string;
  creatTime?: number;
  dt?: string;
  lastSumBlockHeight?: number;
  transCount?: number;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      creatTime: 'CreatTime',
      dt: 'Dt',
      lastSumBlockHeight: 'LastSumBlockHeight',
      transCount: 'TransCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      creatTime: 'number',
      dt: 'string',
      lastSumBlockHeight: 'number',
      transCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionStatisticsV2ResponseBodyResult extends $tea.Model {
  antChainId?: string;
  creatTime?: number;
  dt?: number;
  lastSumBlockHeight?: number;
  transCount?: number;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      creatTime: 'CreatTime',
      dt: 'Dt',
      lastSumBlockHeight: 'LastSumBlockHeight',
      transCount: 'TransCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      creatTime: 'number',
      dt: 'number',
      lastSumBlockHeight: 'number',
      transCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionV2ResponseBodyResultTransaction extends $tea.Model {
  data?: string;
  extentions?: string[];
  from?: string;
  gas?: string;
  hash?: string;
  nonce?: string;
  period?: number;
  signatures?: string[];
  timestamp?: number;
  to?: string;
  txType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      extentions: 'Extentions',
      from: 'From',
      gas: 'Gas',
      hash: 'Hash',
      nonce: 'Nonce',
      period: 'Period',
      signatures: 'Signatures',
      timestamp: 'Timestamp',
      to: 'To',
      txType: 'TxType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      extentions: { 'type': 'array', 'itemType': 'string' },
      from: 'string',
      gas: 'string',
      hash: 'string',
      nonce: 'string',
      period: 'number',
      signatures: { 'type': 'array', 'itemType': 'string' },
      timestamp: 'number',
      to: 'string',
      txType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainTransactionV2ResponseBodyResult extends $tea.Model {
  blockHash?: string;
  blockHeight?: number;
  blockVersion?: string;
  createTime?: number;
  hash?: string;
  transaction?: DescribeAntChainTransactionV2ResponseBodyResultTransaction;
  static names(): { [key: string]: string } {
    return {
      blockHash: 'BlockHash',
      blockHeight: 'BlockHeight',
      blockVersion: 'BlockVersion',
      createTime: 'CreateTime',
      hash: 'Hash',
      transaction: 'Transaction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockHash: 'string',
      blockHeight: 'number',
      blockVersion: 'string',
      createTime: 'number',
      hash: 'string',
      transaction: DescribeAntChainTransactionV2ResponseBodyResultTransaction,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainsResponseBodyResultAntChains extends $tea.Model {
  antChainId?: string;
  antChainName?: string;
  chainType?: string;
  cipherSuit?: string;
  createTime?: number;
  expireTime?: number;
  isAdmin?: boolean;
  memberStatus?: string;
  merkleTreeSuit?: string;
  network?: string;
  nodeNum?: number;
  regionId?: string;
  resourceSize?: string;
  tlsAlgo?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      antChainName: 'AntChainName',
      chainType: 'ChainType',
      cipherSuit: 'CipherSuit',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      isAdmin: 'IsAdmin',
      memberStatus: 'MemberStatus',
      merkleTreeSuit: 'MerkleTreeSuit',
      network: 'Network',
      nodeNum: 'NodeNum',
      regionId: 'RegionId',
      resourceSize: 'ResourceSize',
      tlsAlgo: 'TlsAlgo',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      antChainName: 'string',
      chainType: 'string',
      cipherSuit: 'string',
      createTime: 'number',
      expireTime: 'number',
      isAdmin: 'boolean',
      memberStatus: 'string',
      merkleTreeSuit: 'string',
      network: 'string',
      nodeNum: 'number',
      regionId: 'string',
      resourceSize: 'string',
      tlsAlgo: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainsResponseBodyResultPagination extends $tea.Model {
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

export class DescribeAntChainsResponseBodyResult extends $tea.Model {
  antChains?: DescribeAntChainsResponseBodyResultAntChains[];
  isExist?: boolean;
  pagination?: DescribeAntChainsResponseBodyResultPagination;
  static names(): { [key: string]: string } {
    return {
      antChains: 'AntChains',
      isExist: 'IsExist',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChains: { 'type': 'array', 'itemType': DescribeAntChainsResponseBodyResultAntChains },
      isExist: 'boolean',
      pagination: DescribeAntChainsResponseBodyResultPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainsV2ResponseBodyResultAntChains extends $tea.Model {
  antChainId?: string;
  antChainName?: string;
  chainType?: string;
  cipherSuit?: string;
  createTime?: number;
  expireTime?: number;
  instanceId?: string;
  isAdmin?: boolean;
  memberStatus?: string;
  merkleTreeSuit?: string;
  monitorStatus?: boolean;
  network?: string;
  nodeNum?: number;
  regionId?: string;
  resourceSize?: string;
  restStatus?: string;
  tlsAlgo?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      antChainId: 'AntChainId',
      antChainName: 'AntChainName',
      chainType: 'ChainType',
      cipherSuit: 'CipherSuit',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      isAdmin: 'IsAdmin',
      memberStatus: 'MemberStatus',
      merkleTreeSuit: 'MerkleTreeSuit',
      monitorStatus: 'MonitorStatus',
      network: 'Network',
      nodeNum: 'NodeNum',
      regionId: 'RegionId',
      resourceSize: 'ResourceSize',
      restStatus: 'RestStatus',
      tlsAlgo: 'TlsAlgo',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChainId: 'string',
      antChainName: 'string',
      chainType: 'string',
      cipherSuit: 'string',
      createTime: 'number',
      expireTime: 'number',
      instanceId: 'string',
      isAdmin: 'boolean',
      memberStatus: 'string',
      merkleTreeSuit: 'string',
      monitorStatus: 'boolean',
      network: 'string',
      nodeNum: 'number',
      regionId: 'string',
      resourceSize: 'string',
      restStatus: 'string',
      tlsAlgo: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntChainsV2ResponseBodyResultPagination extends $tea.Model {
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

export class DescribeAntChainsV2ResponseBodyResult extends $tea.Model {
  antChains?: DescribeAntChainsV2ResponseBodyResultAntChains[];
  isExist?: boolean;
  pagination?: DescribeAntChainsV2ResponseBodyResultPagination;
  static names(): { [key: string]: string } {
    return {
      antChains: 'AntChains',
      isExist: 'IsExist',
      pagination: 'Pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antChains: { 'type': 'array', 'itemType': DescribeAntChainsV2ResponseBodyResultAntChains },
      isExist: 'boolean',
      pagination: DescribeAntChainsV2ResponseBodyResultPagination,
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
  clusterState?: string;
  organizationId?: string;
  organizationName?: string;
  serviceState?: string;
  static names(): { [key: string]: string } {
    return {
      clusterState: 'ClusterState',
      organizationId: 'OrganizationId',
      organizationName: 'OrganizationName',
      serviceState: 'ServiceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterState: 'string',
      organizationId: 'string',
      organizationName: 'string',
      serviceState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricChaincodeDefinitionTaskResponseBodyResultContentChaincodeDefinition extends $tea.Model {
  chaincodePackageId?: string;
  collectionConfig?: string;
  endorsementPolicy?: string;
  initRequired?: boolean;
  name?: string;
  sequence?: number;
  uid?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      chaincodePackageId: 'ChaincodePackageId',
      collectionConfig: 'CollectionConfig',
      endorsementPolicy: 'EndorsementPolicy',
      initRequired: 'InitRequired',
      name: 'Name',
      sequence: 'Sequence',
      uid: 'Uid',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodePackageId: 'string',
      collectionConfig: 'string',
      endorsementPolicy: 'string',
      initRequired: 'boolean',
      name: 'string',
      sequence: 'number',
      uid: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricChaincodeDefinitionTaskResponseBodyResultContent extends $tea.Model {
  chaincodeDefinition?: DescribeFabricChaincodeDefinitionTaskResponseBodyResultContentChaincodeDefinition;
  static names(): { [key: string]: string } {
    return {
      chaincodeDefinition: 'ChaincodeDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeDefinition: DescribeFabricChaincodeDefinitionTaskResponseBodyResultContentChaincodeDefinition,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricChaincodeDefinitionTaskResponseBodyResult extends $tea.Model {
  approvers?: string[];
  channelName?: string;
  content?: DescribeFabricChaincodeDefinitionTaskResponseBodyResultContent;
  createTime?: number;
  creator?: string;
  description?: string;
  status?: string;
  taskId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      approvers: 'Approvers',
      channelName: 'ChannelName',
      content: 'Content',
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      status: 'Status',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvers: { 'type': 'array', 'itemType': 'string' },
      channelName: 'string',
      content: DescribeFabricChaincodeDefinitionTaskResponseBodyResultContent,
      createTime: 'number',
      creator: 'string',
      description: 'string',
      status: 'string',
      taskId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricChaincodeUploadPolicyResponseBodyResult extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: number;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'number',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricChannelMembersResponseBodyResult extends $tea.Model {
  acceptTime?: string;
  channelId?: string;
  inviteTime?: string;
  organizationDescription?: string;
  organizationDomain?: string;
  organizationId?: string;
  organizationName?: string;
  state?: string;
  withPeer?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceptTime: 'AcceptTime',
      channelId: 'ChannelId',
      inviteTime: 'InviteTime',
      organizationDescription: 'OrganizationDescription',
      organizationDomain: 'OrganizationDomain',
      organizationId: 'OrganizationId',
      organizationName: 'OrganizationName',
      state: 'State',
      withPeer: 'WithPeer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptTime: 'string',
      channelId: 'string',
      inviteTime: 'string',
      organizationDescription: 'string',
      organizationDomain: 'string',
      organizationId: 'string',
      organizationName: 'string',
      state: 'string',
      withPeer: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumAdminStatusResponseBodyResult extends $tea.Model {
  consortiumAdministrator?: boolean;
  consortiumId?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumAdministrator: 'ConsortiumAdministrator',
      consortiumId: 'ConsortiumId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumAdministrator: 'boolean',
      consortiumId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumChaincodesResponseBodyResult extends $tea.Model {
  chaincodeId?: string;
  chaincodeName?: string;
  chaincodeVersion?: string;
  channelId?: string;
  channelName?: string;
  consortiumId?: string;
  createTime?: string;
  deployTime?: string;
  endorsePolicy?: string;
  input?: string;
  install?: boolean;
  message?: string;
  path?: string;
  providerId?: string;
  providerName?: string;
  state?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      chaincodeId: 'ChaincodeId',
      chaincodeName: 'ChaincodeName',
      chaincodeVersion: 'ChaincodeVersion',
      channelId: 'ChannelId',
      channelName: 'ChannelName',
      consortiumId: 'ConsortiumId',
      createTime: 'CreateTime',
      deployTime: 'DeployTime',
      endorsePolicy: 'EndorsePolicy',
      input: 'Input',
      install: 'Install',
      message: 'Message',
      path: 'Path',
      providerId: 'ProviderId',
      providerName: 'ProviderName',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeId: 'string',
      chaincodeName: 'string',
      chaincodeVersion: 'string',
      channelId: 'string',
      channelName: 'string',
      consortiumId: 'string',
      createTime: 'string',
      deployTime: 'string',
      endorsePolicy: 'string',
      input: 'string',
      install: 'boolean',
      message: 'string',
      path: 'string',
      providerId: 'string',
      providerName: 'string',
      state: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumChannelsResponseBodyResult extends $tea.Model {
  batchTimeout?: number;
  blockCount?: number;
  chaincodeCount?: number;
  channelId?: string;
  channelName?: string;
  consortiumChannelId?: number;
  consortiumId?: string;
  consortiumName?: string;
  createTime?: string;
  deleteTime?: string;
  deleted?: boolean;
  maxMessageCount?: number;
  memberCount?: number;
  memberJoinedCount?: string;
  needJoined?: boolean;
  ownerBid?: string;
  ownerName?: string;
  ownerUid?: number;
  preferredMaxBytes?: number;
  requestId?: string;
  state?: string;
  supportChannelConfig?: boolean;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      batchTimeout: 'BatchTimeout',
      blockCount: 'BlockCount',
      chaincodeCount: 'ChaincodeCount',
      channelId: 'ChannelId',
      channelName: 'ChannelName',
      consortiumChannelId: 'ConsortiumChannelId',
      consortiumId: 'ConsortiumId',
      consortiumName: 'ConsortiumName',
      createTime: 'CreateTime',
      deleteTime: 'DeleteTime',
      deleted: 'Deleted',
      maxMessageCount: 'MaxMessageCount',
      memberCount: 'MemberCount',
      memberJoinedCount: 'MemberJoinedCount',
      needJoined: 'NeedJoined',
      ownerBid: 'OwnerBid',
      ownerName: 'OwnerName',
      ownerUid: 'OwnerUid',
      preferredMaxBytes: 'PreferredMaxBytes',
      requestId: 'RequestId',
      state: 'State',
      supportChannelConfig: 'SupportChannelConfig',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchTimeout: 'number',
      blockCount: 'number',
      chaincodeCount: 'number',
      channelId: 'string',
      channelName: 'string',
      consortiumChannelId: 'number',
      consortiumId: 'string',
      consortiumName: 'string',
      createTime: 'string',
      deleteTime: 'string',
      deleted: 'boolean',
      maxMessageCount: 'number',
      memberCount: 'number',
      memberJoinedCount: 'string',
      needJoined: 'boolean',
      ownerBid: 'string',
      ownerName: 'string',
      ownerUid: 'number',
      preferredMaxBytes: 'number',
      requestId: 'string',
      state: 'string',
      supportChannelConfig: 'boolean',
      updateTime: 'string',
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
  codeName?: string;
  consortiumId?: string;
  consortiumName?: string;
  deletable?: boolean;
  description?: string;
  domain?: string;
  regionId?: string;
  state?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      codeName: 'CodeName',
      consortiumId: 'ConsortiumId',
      consortiumName: 'ConsortiumName',
      deletable: 'Deletable',
      description: 'Description',
      domain: 'Domain',
      regionId: 'RegionId',
      state: 'State',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeName: 'string',
      consortiumId: 'string',
      consortiumName: 'string',
      deletable: 'boolean',
      description: 'string',
      domain: 'string',
      regionId: 'string',
      state: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumMemberApprovalResponseBodyResult extends $tea.Model {
  channelCreatePolicy?: string;
  confirmTime?: string;
  consortiumId?: string;
  consortiumName?: string;
  domainName?: string;
  organizationId?: string;
  organizationName?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      channelCreatePolicy: 'ChannelCreatePolicy',
      confirmTime: 'ConfirmTime',
      consortiumId: 'ConsortiumId',
      consortiumName: 'ConsortiumName',
      domainName: 'DomainName',
      organizationId: 'OrganizationId',
      organizationName: 'OrganizationName',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCreatePolicy: 'string',
      confirmTime: 'string',
      consortiumId: 'string',
      consortiumName: 'string',
      domainName: 'string',
      organizationId: 'string',
      organizationName: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumMembersResponseBodyResult extends $tea.Model {
  consortiumId?: string;
  description?: string;
  domain?: string;
  joinedTime?: string;
  organizationId?: string;
  organizationName?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      description: 'Description',
      domain: 'Domain',
      joinedTime: 'JoinedTime',
      organizationId: 'OrganizationId',
      organizationName: 'OrganizationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      description: 'string',
      domain: 'string',
      joinedTime: 'string',
      organizationId: 'string',
      organizationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumOrderersResponseBodyResult extends $tea.Model {
  createTime?: string;
  domain?: string;
  instanceType?: string;
  ordererName?: string;
  port?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domain: 'Domain',
      instanceType: 'InstanceType',
      ordererName: 'OrdererName',
      port: 'Port',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domain: 'string',
      instanceType: 'string',
      ordererName: 'string',
      port: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricConsortiumSpecsResponseBodyResult extends $tea.Model {
  enable?: boolean;
  specName?: string;
  specTitle?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      specName: 'SpecName',
      specTitle: 'SpecTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      specName: 'string',
      specTitle: 'string',
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
  channelPolicy?: string;
  codeName?: string;
  consortiumId?: string;
  consortiumName?: string;
  createTime?: string;
  domain?: string;
  expiredTime?: string;
  organizationCount?: number;
  ownerBid?: string;
  ownerName?: string;
  ownerUid?: number;
  regionId?: string;
  requestId?: string;
  specName?: string;
  state?: string;
  supportChannelConfig?: boolean;
  tags?: DescribeFabricConsortiumsResponseBodyResultTags[];
  static names(): { [key: string]: string } {
    return {
      channelCount: 'ChannelCount',
      channelPolicy: 'ChannelPolicy',
      codeName: 'CodeName',
      consortiumId: 'ConsortiumId',
      consortiumName: 'ConsortiumName',
      createTime: 'CreateTime',
      domain: 'Domain',
      expiredTime: 'ExpiredTime',
      organizationCount: 'OrganizationCount',
      ownerBid: 'OwnerBid',
      ownerName: 'OwnerName',
      ownerUid: 'OwnerUid',
      regionId: 'RegionId',
      requestId: 'RequestId',
      specName: 'SpecName',
      state: 'State',
      supportChannelConfig: 'SupportChannelConfig',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCount: 'number',
      channelPolicy: 'string',
      codeName: 'string',
      consortiumId: 'string',
      consortiumName: 'string',
      createTime: 'string',
      domain: 'string',
      expiredTime: 'string',
      organizationCount: 'number',
      ownerBid: 'string',
      ownerName: 'string',
      ownerUid: 'number',
      regionId: 'string',
      requestId: 'string',
      specName: 'string',
      state: 'string',
      supportChannelConfig: 'boolean',
      tags: { 'type': 'array', 'itemType': DescribeFabricConsortiumsResponseBodyResultTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricInvitationCodeResponseBodyResult extends $tea.Model {
  accepted?: boolean;
  code?: string;
  consortiumId?: string;
  email?: string;
  expireTime?: string;
  invitationId?: number;
  sendTime?: string;
  senderBid?: string;
  senderId?: number;
  senderName?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      accepted: 'Accepted',
      code: 'Code',
      consortiumId: 'ConsortiumId',
      email: 'Email',
      expireTime: 'ExpireTime',
      invitationId: 'InvitationId',
      sendTime: 'SendTime',
      senderBid: 'SenderBid',
      senderId: 'SenderId',
      senderName: 'SenderName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accepted: 'boolean',
      code: 'string',
      consortiumId: 'string',
      email: 'string',
      expireTime: 'string',
      invitationId: 'number',
      sendTime: 'string',
      senderBid: 'string',
      senderId: 'number',
      senderName: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricInviterResponseBodyResult extends $tea.Model {
  consortiumId?: string;
  consortiumName?: string;
  expireTime?: string;
  inviterId?: number;
  inviterName?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      consortiumName: 'ConsortiumName',
      expireTime: 'ExpireTime',
      inviterId: 'InviterId',
      inviterName: 'InviterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      consortiumName: 'string',
      expireTime: 'string',
      inviterId: 'number',
      inviterName: 'string',
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
  CANAME?: string;
  CAUrl?: string;
  codeName?: string;
  consortiumCount?: number;
  createTime?: string;
  domain?: string;
  MSP?: string;
  organizationDescription?: string;
  organizationId?: string;
  organizationName?: string;
  ownerBid?: string;
  ownerName?: string;
  ownerUid?: number;
  peerCount?: number;
  regionId?: string;
  requestId?: string;
  specName?: string;
  state?: string;
  tags?: DescribeFabricOrganizationResponseBodyResultTags[];
  userCount?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      CANAME: 'CANAME',
      CAUrl: 'CAUrl',
      codeName: 'CodeName',
      consortiumCount: 'ConsortiumCount',
      createTime: 'CreateTime',
      domain: 'Domain',
      MSP: 'MSP',
      organizationDescription: 'OrganizationDescription',
      organizationId: 'OrganizationId',
      organizationName: 'OrganizationName',
      ownerBid: 'OwnerBid',
      ownerName: 'OwnerName',
      ownerUid: 'OwnerUid',
      peerCount: 'PeerCount',
      regionId: 'RegionId',
      requestId: 'RequestId',
      specName: 'SpecName',
      state: 'State',
      tags: 'Tags',
      userCount: 'UserCount',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CANAME: 'string',
      CAUrl: 'string',
      codeName: 'string',
      consortiumCount: 'number',
      createTime: 'string',
      domain: 'string',
      MSP: 'string',
      organizationDescription: 'string',
      organizationId: 'string',
      organizationName: 'string',
      ownerBid: 'string',
      ownerName: 'string',
      ownerUid: 'number',
      peerCount: 'number',
      regionId: 'string',
      requestId: 'string',
      specName: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': DescribeFabricOrganizationResponseBodyResultTags },
      userCount: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationChaincodesResponseBodyResult extends $tea.Model {
  chaincodeId?: string;
  chaincodeName?: string;
  chaincodeVersion?: string;
  channelId?: string;
  channelName?: string;
  consortiumId?: string;
  createTime?: string;
  creator?: string;
  deployTime?: string;
  endorsePolicy?: string;
  installed?: string;
  message?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      chaincodeId: 'ChaincodeId',
      chaincodeName: 'ChaincodeName',
      chaincodeVersion: 'ChaincodeVersion',
      channelId: 'ChannelId',
      channelName: 'ChannelName',
      consortiumId: 'ConsortiumId',
      createTime: 'CreateTime',
      creator: 'Creator',
      deployTime: 'DeployTime',
      endorsePolicy: 'EndorsePolicy',
      installed: 'Installed',
      message: 'Message',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeId: 'string',
      chaincodeName: 'string',
      chaincodeVersion: 'string',
      channelId: 'string',
      channelName: 'string',
      consortiumId: 'string',
      createTime: 'string',
      creator: 'string',
      deployTime: 'string',
      endorsePolicy: 'string',
      installed: 'string',
      message: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationChannelsResponseBodyResult extends $tea.Model {
  batchTimeout?: number;
  blockCount?: number;
  chaincodeCount?: number;
  channelId?: string;
  channelName?: string;
  consortiumId?: string;
  consortiumName?: string;
  createTime?: string;
  deleteTime?: string;
  deleted?: boolean;
  maxMessageCount?: number;
  memberCount?: number;
  ownerBid?: string;
  ownerName?: string;
  ownerUid?: number;
  preferredMaxBytes?: number;
  requestId?: string;
  state?: string;
  supportChannelConfig?: boolean;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      batchTimeout: 'BatchTimeout',
      blockCount: 'BlockCount',
      chaincodeCount: 'ChaincodeCount',
      channelId: 'ChannelId',
      channelName: 'ChannelName',
      consortiumId: 'ConsortiumId',
      consortiumName: 'ConsortiumName',
      createTime: 'CreateTime',
      deleteTime: 'DeleteTime',
      deleted: 'Deleted',
      maxMessageCount: 'MaxMessageCount',
      memberCount: 'MemberCount',
      ownerBid: 'OwnerBid',
      ownerName: 'OwnerName',
      ownerUid: 'OwnerUid',
      preferredMaxBytes: 'PreferredMaxBytes',
      requestId: 'RequestId',
      state: 'State',
      supportChannelConfig: 'SupportChannelConfig',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchTimeout: 'number',
      blockCount: 'number',
      chaincodeCount: 'number',
      channelId: 'string',
      channelName: 'string',
      consortiumId: 'string',
      consortiumName: 'string',
      createTime: 'string',
      deleteTime: 'string',
      deleted: 'boolean',
      maxMessageCount: 'number',
      memberCount: 'number',
      ownerBid: 'string',
      ownerName: 'string',
      ownerUid: 'number',
      preferredMaxBytes: 'number',
      requestId: 'string',
      state: 'string',
      supportChannelConfig: 'boolean',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationDeletableResponseBodyResult extends $tea.Model {
  codeName?: string;
  deletable?: boolean;
  domain?: string;
  organizationDescription?: string;
  organizationId?: string;
  organizationName?: string;
  regionId?: string;
  state?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      codeName: 'CodeName',
      deletable: 'Deletable',
      domain: 'Domain',
      organizationDescription: 'OrganizationDescription',
      organizationId: 'OrganizationId',
      organizationName: 'OrganizationName',
      regionId: 'RegionId',
      state: 'State',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeName: 'string',
      deletable: 'boolean',
      domain: 'string',
      organizationDescription: 'string',
      organizationId: 'string',
      organizationName: 'string',
      regionId: 'string',
      state: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationMembersResponseBodyResult extends $tea.Model {
  consortiumId?: string;
  consortiumName?: string;
  description?: string;
  domain?: string;
  joinedTime?: string;
  organizationId?: string;
  organizationName?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      consortiumId: 'ConsortiumId',
      consortiumName: 'ConsortiumName',
      description: 'Description',
      domain: 'Domain',
      joinedTime: 'JoinedTime',
      organizationId: 'OrganizationId',
      organizationName: 'OrganizationName',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consortiumId: 'string',
      consortiumName: 'string',
      description: 'string',
      domain: 'string',
      joinedTime: 'string',
      organizationId: 'string',
      organizationName: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationPeersResponseBodyResult extends $tea.Model {
  createTime?: string;
  domain?: string;
  instanceType?: string;
  internetIp?: string;
  intranetIp?: string;
  isAnchor?: boolean;
  organizationPeerName?: string;
  port?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domain: 'Domain',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      isAnchor: 'IsAnchor',
      organizationPeerName: 'OrganizationPeerName',
      port: 'Port',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domain: 'string',
      instanceType: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      isAnchor: 'boolean',
      organizationPeerName: 'string',
      port: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationSpecsResponseBodyResult extends $tea.Model {
  enable?: boolean;
  organizationSpecsName?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      organizationSpecsName: 'OrganizationSpecsName',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      organizationSpecsName: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFabricOrganizationUsersResponseBodyResult extends $tea.Model {
  attrs?: string;
  callerBid?: string;
  callerUid?: number;
  createTime?: string;
  expireTime?: string;
  fullName?: string;
  organizationId?: string;
  regionId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      attrs: 'Attrs',
      callerBid: 'CallerBid',
      callerUid: 'CallerUid',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      fullName: 'FullName',
      organizationId: 'OrganizationId',
      regionId: 'RegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attrs: 'string',
      callerBid: 'string',
      callerUid: 'number',
      createTime: 'string',
      expireTime: 'string',
      fullName: 'string',
      organizationId: 'string',
      regionId: 'string',
      username: 'string',
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
  codeName?: string;
  consortiumCount?: number;
  createTime?: string;
  domain?: string;
  organizationDescription?: string;
  organizationId?: string;
  organizationName?: string;
  ownerBid?: string;
  ownerName?: string;
  ownerUid?: number;
  peerCount?: number;
  regionId?: string;
  requestId?: string;
  specName?: string;
  state?: string;
  tags?: DescribeFabricOrganizationsResponseBodyResultTags[];
  userCount?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      codeName: 'CodeName',
      consortiumCount: 'ConsortiumCount',
      createTime: 'CreateTime',
      domain: 'Domain',
      organizationDescription: 'OrganizationDescription',
      organizationId: 'OrganizationId',
      organizationName: 'OrganizationName',
      ownerBid: 'OwnerBid',
      ownerName: 'OwnerName',
      ownerUid: 'OwnerUid',
      peerCount: 'PeerCount',
      regionId: 'RegionId',
      requestId: 'RequestId',
      specName: 'SpecName',
      state: 'State',
      tags: 'Tags',
      userCount: 'UserCount',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeName: 'string',
      consortiumCount: 'number',
      createTime: 'string',
      domain: 'string',
      organizationDescription: 'string',
      organizationId: 'string',
      organizationName: 'string',
      ownerBid: 'string',
      ownerName: 'string',
      ownerUid: 'number',
      peerCount: 'number',
      regionId: 'string',
      requestId: 'string',
      specName: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': DescribeFabricOrganizationsResponseBodyResultTags },
      userCount: 'number',
      zoneId: 'string',
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
  handled?: boolean;
  operationType?: string;
  requestTime?: number;
  responseTime?: string;
  result?: string;
  sender?: string;
  target?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      handled: 'Handled',
      operationType: 'OperationType',
      requestTime: 'RequestTime',
      responseTime: 'ResponseTime',
      result: 'Result',
      sender: 'Sender',
      target: 'Target',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      handled: 'boolean',
      operationType: 'string',
      requestTime: 'number',
      responseTime: 'string',
      result: 'string',
      sender: 'string',
      target: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFabricOrganizationSDKResponseBodyResult extends $tea.Model {
  content?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallFabricChaincodeResponseBodyResult extends $tea.Model {
  chaincodeId?: string;
  chaincodeName?: string;
  chaincodeVersion?: string;
  channelName?: string;
  consortiumId?: string;
  createTime?: string;
  deployTime?: string;
  endorsePolicy?: string;
  input?: string;
  install?: boolean;
  message?: string;
  path?: string;
  providerId?: string;
  providerName?: string;
  state?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      chaincodeId: 'ChaincodeId',
      chaincodeName: 'ChaincodeName',
      chaincodeVersion: 'ChaincodeVersion',
      channelName: 'ChannelName',
      consortiumId: 'ConsortiumId',
      createTime: 'CreateTime',
      deployTime: 'DeployTime',
      endorsePolicy: 'EndorsePolicy',
      input: 'Input',
      install: 'Install',
      message: 'Message',
      path: 'Path',
      providerId: 'ProviderId',
      providerName: 'ProviderName',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeId: 'string',
      chaincodeName: 'string',
      chaincodeVersion: 'string',
      channelName: 'string',
      consortiumId: 'string',
      createTime: 'string',
      deployTime: 'string',
      endorsePolicy: 'string',
      input: 'string',
      install: 'boolean',
      message: 'string',
      path: 'string',
      providerId: 'string',
      providerName: 'string',
      state: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstantiateFabricChaincodeResponseBodyResult extends $tea.Model {
  chaincodeId?: string;
  chaincodeName?: string;
  chaincodeVersion?: string;
  channelName?: string;
  consortiumId?: string;
  createTime?: string;
  deployTime?: string;
  endorsePolicy?: string;
  input?: string;
  install?: boolean;
  message?: string;
  path?: string;
  providerId?: string;
  providerName?: string;
  state?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      chaincodeId: 'ChaincodeId',
      chaincodeName: 'ChaincodeName',
      chaincodeVersion: 'ChaincodeVersion',
      channelName: 'ChannelName',
      consortiumId: 'ConsortiumId',
      createTime: 'CreateTime',
      deployTime: 'DeployTime',
      endorsePolicy: 'EndorsePolicy',
      input: 'Input',
      install: 'Install',
      message: 'Message',
      path: 'Path',
      providerId: 'ProviderId',
      providerName: 'ProviderName',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeId: 'string',
      chaincodeName: 'string',
      chaincodeVersion: 'string',
      channelName: 'string',
      consortiumId: 'string',
      createTime: 'string',
      deployTime: 'string',
      endorsePolicy: 'string',
      input: 'string',
      install: 'boolean',
      message: 'string',
      path: 'string',
      providerId: 'string',
      providerName: 'string',
      state: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinFabricChannelResponseBodyResult extends $tea.Model {
  acceptTime?: string;
  approveTime?: string;
  channelId?: string;
  confirmTime?: string;
  destroyTime?: string;
  inviteTime?: string;
  organizationId?: string;
  state?: string;
  withPeer?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceptTime: 'AcceptTime',
      approveTime: 'ApproveTime',
      channelId: 'ChannelId',
      confirmTime: 'ConfirmTime',
      destroyTime: 'DestroyTime',
      inviteTime: 'InviteTime',
      organizationId: 'OrganizationId',
      state: 'State',
      withPeer: 'WithPeer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptTime: 'string',
      approveTime: 'string',
      channelId: 'string',
      confirmTime: 'string',
      destroyTime: 'string',
      inviteTime: 'string',
      organizationId: 'string',
      state: 'string',
      withPeer: 'boolean',
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

export class ResetFabricOrganizationUserPasswordResponseBodyResult extends $tea.Model {
  createTime?: string;
  expireTime?: string;
  fullname?: string;
  organizationId?: string;
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      fullname: 'Fullname',
      organizationId: 'OrganizationId',
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      fullname: 'string',
      organizationId: 'string',
      password: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeFabricChaincodeResponseBodyResult extends $tea.Model {
  chaincodeId?: string;
  chaincodeName?: string;
  chaincodeVersion?: string;
  channelName?: string;
  consortiumId?: string;
  createTime?: string;
  deployTime?: string;
  endorsePolicy?: string;
  input?: string;
  install?: boolean;
  message?: string;
  path?: string;
  providerId?: string;
  providerName?: string;
  state?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      chaincodeId: 'ChaincodeId',
      chaincodeName: 'ChaincodeName',
      chaincodeVersion: 'ChaincodeVersion',
      channelName: 'ChannelName',
      consortiumId: 'ConsortiumId',
      createTime: 'CreateTime',
      deployTime: 'DeployTime',
      endorsePolicy: 'EndorsePolicy',
      input: 'Input',
      install: 'Install',
      message: 'Message',
      path: 'Path',
      providerId: 'ProviderId',
      providerName: 'ProviderName',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeId: 'string',
      chaincodeName: 'string',
      chaincodeVersion: 'string',
      channelName: 'string',
      consortiumId: 'string',
      createTime: 'string',
      deployTime: 'string',
      endorsePolicy: 'string',
      input: 'string',
      install: 'boolean',
      message: 'string',
      path: 'string',
      providerId: 'string',
      providerName: 'string',
      state: 'string',
      type: 'number',
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
  chaincodeId?: string;
  chaincodeName?: string;
  chaincodeVersion?: string;
  channelName?: string;
  consortiumId?: string;
  createTime?: string;
  deployTime?: string;
  endorsePolicy?: string;
  input?: string;
  install?: boolean;
  message?: string;
  path?: string;
  providerId?: string;
  providerName?: string;
  state?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      chaincodeId: 'ChaincodeId',
      chaincodeName: 'ChaincodeName',
      chaincodeVersion: 'ChaincodeVersion',
      channelName: 'ChannelName',
      consortiumId: 'ConsortiumId',
      createTime: 'CreateTime',
      deployTime: 'DeployTime',
      endorsePolicy: 'EndorsePolicy',
      input: 'Input',
      install: 'Install',
      message: 'Message',
      path: 'Path',
      providerId: 'ProviderId',
      providerName: 'ProviderName',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chaincodeId: 'string',
      chaincodeName: 'string',
      chaincodeVersion: 'string',
      channelName: 'string',
      consortiumId: 'string',
      createTime: 'string',
      deployTime: 'string',
      endorsePolicy: 'string',
      input: 'string',
      install: 'boolean',
      message: 'string',
      path: 'string',
      providerId: 'string',
      providerName: 'string',
      state: 'string',
      type: 'number',
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
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["Code"] = request.code;
    }

    if (!Util.isUnset(request.isAccepted)) {
      body["IsAccepted"] = request.isAccepted;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AcceptFabricInvitation",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AcceptFabricInvitationResponse>(await this.callApi(params, req, runtime), new AcceptFabricInvitationResponse({}));
  }

  async acceptFabricInvitation(request: AcceptFabricInvitationRequest): Promise<AcceptFabricInvitationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acceptFabricInvitationWithOptions(request, runtime);
  }

  async applyAntChainCertificateWithOptions(request: ApplyAntChainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ApplyAntChainCertificateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.uploadReq)) {
      body["UploadReq"] = request.uploadReq;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApplyAntChainCertificate",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyAntChainCertificateResponse>(await this.callApi(params, req, runtime), new ApplyAntChainCertificateResponse({}));
  }

  async applyAntChainCertificate(request: ApplyAntChainCertificateRequest): Promise<ApplyAntChainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyAntChainCertificateWithOptions(request, runtime);
  }

  async applyAntChainCertificateWithKeyAutoCreationWithOptions(request: ApplyAntChainCertificateWithKeyAutoCreationRequest, runtime: $Util.RuntimeOptions): Promise<ApplyAntChainCertificateWithKeyAutoCreationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.commonName)) {
      body["CommonName"] = request.commonName;
    }

    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.countryName)) {
      body["CountryName"] = request.countryName;
    }

    if (!Util.isUnset(request.localityName)) {
      body["LocalityName"] = request.localityName;
    }

    if (!Util.isUnset(request.organizationName)) {
      body["OrganizationName"] = request.organizationName;
    }

    if (!Util.isUnset(request.organizationUnitName)) {
      body["OrganizationUnitName"] = request.organizationUnitName;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.stateOrProvinceName)) {
      body["StateOrProvinceName"] = request.stateOrProvinceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApplyAntChainCertificateWithKeyAutoCreation",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyAntChainCertificateWithKeyAutoCreationResponse>(await this.callApi(params, req, runtime), new ApplyAntChainCertificateWithKeyAutoCreationResponse({}));
  }

  async applyAntChainCertificateWithKeyAutoCreation(request: ApplyAntChainCertificateWithKeyAutoCreationRequest): Promise<ApplyAntChainCertificateWithKeyAutoCreationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyAntChainCertificateWithKeyAutoCreationWithOptions(request, runtime);
  }

  async approveFabricChaincodeDefinitionWithOptions(request: ApproveFabricChaincodeDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<ApproveFabricChaincodeDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chaincodeId)) {
      body["ChaincodeId"] = request.chaincodeId;
    }

    if (!Util.isUnset(request.chaincodePackageId)) {
      body["ChaincodePackageId"] = request.chaincodePackageId;
    }

    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApproveFabricChaincodeDefinition",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApproveFabricChaincodeDefinitionResponse>(await this.callApi(params, req, runtime), new ApproveFabricChaincodeDefinitionResponse({}));
  }

  async approveFabricChaincodeDefinition(request: ApproveFabricChaincodeDefinitionRequest): Promise<ApproveFabricChaincodeDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveFabricChaincodeDefinitionWithOptions(request, runtime);
  }

  async batchAddAntChainMiniAppQRCodeAuthorizedUsersWithOptions(tmpReq: BatchAddAntChainMiniAppQRCodeAuthorizedUsersRequest, runtime: $Util.RuntimeOptions): Promise<BatchAddAntChainMiniAppQRCodeAuthorizedUsersResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchAddAntChainMiniAppQRCodeAuthorizedUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.phoneList)) {
      request.phoneListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phoneList, "PhoneList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.phoneListShrink)) {
      body["PhoneList"] = request.phoneListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchAddAntChainMiniAppQRCodeAuthorizedUsers",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchAddAntChainMiniAppQRCodeAuthorizedUsersResponse>(await this.callApi(params, req, runtime), new BatchAddAntChainMiniAppQRCodeAuthorizedUsersResponse({}));
  }

  async batchAddAntChainMiniAppQRCodeAuthorizedUsers(request: BatchAddAntChainMiniAppQRCodeAuthorizedUsersRequest): Promise<BatchAddAntChainMiniAppQRCodeAuthorizedUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAddAntChainMiniAppQRCodeAuthorizedUsersWithOptions(request, runtime);
  }

  async checkFabricConsortiumDomainWithOptions(request: CheckFabricConsortiumDomainRequest, runtime: $Util.RuntimeOptions): Promise<CheckFabricConsortiumDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domainCode)) {
      body["DomainCode"] = request.domainCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckFabricConsortiumDomain",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckFabricConsortiumDomainResponse>(await this.callApi(params, req, runtime), new CheckFabricConsortiumDomainResponse({}));
  }

  async checkFabricConsortiumDomain(request: CheckFabricConsortiumDomainRequest): Promise<CheckFabricConsortiumDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkFabricConsortiumDomainWithOptions(request, runtime);
  }

  async checkFabricOrganizationDomainWithOptions(request: CheckFabricOrganizationDomainRequest, runtime: $Util.RuntimeOptions): Promise<CheckFabricOrganizationDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.domainCode)) {
      body["DomainCode"] = request.domainCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckFabricOrganizationDomain",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckFabricOrganizationDomainResponse>(await this.callApi(params, req, runtime), new CheckFabricOrganizationDomainResponse({}));
  }

  async checkFabricOrganizationDomain(request: CheckFabricOrganizationDomainRequest): Promise<CheckFabricOrganizationDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkFabricOrganizationDomainWithOptions(request, runtime);
  }

  async confirmFabricConsortiumMemberWithOptions(request: ConfirmFabricConsortiumMemberRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmFabricConsortiumMemberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consortiumId)) {
      query["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.organization)) {
      query["Organization"] = request.organization;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmFabricConsortiumMember",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfirmFabricConsortiumMemberResponse>(await this.callApi(params, req, runtime), new ConfirmFabricConsortiumMemberResponse({}));
  }

  async confirmFabricConsortiumMember(request: ConfirmFabricConsortiumMemberRequest): Promise<ConfirmFabricConsortiumMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmFabricConsortiumMemberWithOptions(request, runtime);
  }

  async copyAntChainContractProjectWithOptions(request: CopyAntChainContractProjectRequest, runtime: $Util.RuntimeOptions): Promise<CopyAntChainContractProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectDescription)) {
      body["ProjectDescription"] = request.projectDescription;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.projectVersion)) {
      body["ProjectVersion"] = request.projectVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CopyAntChainContractProject",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CopyAntChainContractProjectResponse>(await this.callApi(params, req, runtime), new CopyAntChainContractProjectResponse({}));
  }

  async copyAntChainContractProject(request: CopyAntChainContractProjectRequest): Promise<CopyAntChainContractProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyAntChainContractProjectWithOptions(request, runtime);
  }

  async createAntChainAccountWithOptions(request: CreateAntChainAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAntChainAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.account)) {
      body["Account"] = request.account;
    }

    if (!Util.isUnset(request.accountPubKey)) {
      body["AccountPubKey"] = request.accountPubKey;
    }

    if (!Util.isUnset(request.accountRecoverPubKey)) {
      body["AccountRecoverPubKey"] = request.accountRecoverPubKey;
    }

    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAntChainAccount",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAntChainAccountResponse>(await this.callApi(params, req, runtime), new CreateAntChainAccountResponse({}));
  }

  async createAntChainAccount(request: CreateAntChainAccountRequest): Promise<CreateAntChainAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAntChainAccountWithOptions(request, runtime);
  }

  async createAntChainAccountWithKeyPairAutoCreationWithOptions(request: CreateAntChainAccountWithKeyPairAutoCreationRequest, runtime: $Util.RuntimeOptions): Promise<CreateAntChainAccountWithKeyPairAutoCreationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.account)) {
      body["Account"] = request.account;
    }

    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.recoverPassword)) {
      body["RecoverPassword"] = request.recoverPassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAntChainAccountWithKeyPairAutoCreation",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAntChainAccountWithKeyPairAutoCreationResponse>(await this.callApi(params, req, runtime), new CreateAntChainAccountWithKeyPairAutoCreationResponse({}));
  }

  async createAntChainAccountWithKeyPairAutoCreation(request: CreateAntChainAccountWithKeyPairAutoCreationRequest): Promise<CreateAntChainAccountWithKeyPairAutoCreationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAntChainAccountWithKeyPairAutoCreationWithOptions(request, runtime);
  }

  async createAntChainConsortiumWithOptions(request: CreateAntChainConsortiumRequest, runtime: $Util.RuntimeOptions): Promise<CreateAntChainConsortiumResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consortiumDescription)) {
      body["ConsortiumDescription"] = request.consortiumDescription;
    }

    if (!Util.isUnset(request.consortiumName)) {
      body["ConsortiumName"] = request.consortiumName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAntChainConsortium",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAntChainConsortiumResponse>(await this.callApi(params, req, runtime), new CreateAntChainConsortiumResponse({}));
  }

  async createAntChainConsortium(request: CreateAntChainConsortiumRequest): Promise<CreateAntChainConsortiumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAntChainConsortiumWithOptions(request, runtime);
  }

  async createAntChainContractContentWithOptions(request: CreateAntChainContractContentRequest, runtime: $Util.RuntimeOptions): Promise<CreateAntChainContractContentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.contentName)) {
      body["ContentName"] = request.contentName;
    }

    if (!Util.isUnset(request.isDirectory)) {
      body["IsDirectory"] = request.isDirectory;
    }

    if (!Util.isUnset(request.parentContentId)) {
      body["ParentContentId"] = request.parentContentId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAntChainContractContent",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAntChainContractContentResponse>(await this.callApi(params, req, runtime), new CreateAntChainContractContentResponse({}));
  }

  async createAntChainContractContent(request: CreateAntChainContractContentRequest): Promise<CreateAntChainContractContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAntChainContractContentWithOptions(request, runtime);
  }

  async createAntChainContractProjectWithOptions(request: CreateAntChainContractProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateAntChainContractProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.projectDescription)) {
      body["ProjectDescription"] = request.projectDescription;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.projectVersion)) {
      body["ProjectVersion"] = request.projectVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAntChainContractProject",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAntChainContractProjectResponse>(await this.callApi(params, req, runtime), new CreateAntChainContractProjectResponse({}));
  }

  async createAntChainContractProject(request: CreateAntChainContractProjectRequest): Promise<CreateAntChainContractProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAntChainContractProjectWithOptions(request, runtime);
  }

  async createFabricChaincodeWithOptions(request: CreateFabricChaincodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateFabricChaincodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.endorsePolicy)) {
      body["EndorsePolicy"] = request.endorsePolicy;
    }

    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.ossBucket)) {
      body["OssBucket"] = request.ossBucket;
    }

    if (!Util.isUnset(request.ossUrl)) {
      body["OssUrl"] = request.ossUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFabricChaincode",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFabricChaincodeResponse>(await this.callApi(params, req, runtime), new CreateFabricChaincodeResponse({}));
  }

  async createFabricChaincode(request: CreateFabricChaincodeRequest): Promise<CreateFabricChaincodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFabricChaincodeWithOptions(request, runtime);
  }

  async createFabricChaincodePackageWithOptions(request: CreateFabricChaincodePackageRequest, runtime: $Util.RuntimeOptions): Promise<CreateFabricChaincodePackageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.ossUrl)) {
      body["OssUrl"] = request.ossUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFabricChaincodePackage",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFabricChaincodePackageResponse>(await this.callApi(params, req, runtime), new CreateFabricChaincodePackageResponse({}));
  }

  async createFabricChaincodePackage(request: CreateFabricChaincodePackageRequest): Promise<CreateFabricChaincodePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFabricChaincodePackageWithOptions(request, runtime);
  }

  async createFabricChannelWithOptions(request: CreateFabricChannelRequest, runtime: $Util.RuntimeOptions): Promise<CreateFabricChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!Util.isUnset(request.consortiumId)) {
      query["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.organization)) {
      query["Organization"] = request.organization;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.batchTimeout)) {
      body["BatchTimeout"] = request.batchTimeout;
    }

    if (!Util.isUnset(request.maxMessageCount)) {
      body["MaxMessageCount"] = request.maxMessageCount;
    }

    if (!Util.isUnset(request.preferredMaxBytes)) {
      body["PreferredMaxBytes"] = request.preferredMaxBytes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFabricChannel",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFabricChannelResponse>(await this.callApi(params, req, runtime), new CreateFabricChannelResponse({}));
  }

  async createFabricChannel(request: CreateFabricChannelRequest): Promise<CreateFabricChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFabricChannelWithOptions(request, runtime);
  }

  async createFabricChannelMemberWithOptions(request: CreateFabricChannelMemberRequest, runtime: $Util.RuntimeOptions): Promise<CreateFabricChannelMemberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.organization)) {
      query["Organization"] = request.organization;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFabricChannelMember",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFabricChannelMemberResponse>(await this.callApi(params, req, runtime), new CreateFabricChannelMemberResponse({}));
  }

  async createFabricChannelMember(request: CreateFabricChannelMemberRequest): Promise<CreateFabricChannelMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFabricChannelMemberWithOptions(request, runtime);
  }

  async createFabricConsortiumWithOptions(request: CreateFabricConsortiumRequest, runtime: $Util.RuntimeOptions): Promise<CreateFabricConsortiumResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channelPolicy)) {
      body["ChannelPolicy"] = request.channelPolicy;
    }

    if (!Util.isUnset(request.consortiumDescription)) {
      body["ConsortiumDescription"] = request.consortiumDescription;
    }

    if (!Util.isUnset(request.consortiumName)) {
      body["ConsortiumName"] = request.consortiumName;
    }

    if (!Util.isUnset(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    if (!Util.isUnset(request.ordererType)) {
      body["OrdererType"] = request.ordererType;
    }

    if (!Util.isUnset(request.orderersCount)) {
      body["OrderersCount"] = request.orderersCount;
    }

    if (!Util.isUnset(request.organization)) {
      body["Organization"] = request.organization;
    }

    if (!Util.isUnset(request.paymentDuration)) {
      body["PaymentDuration"] = request.paymentDuration;
    }

    if (!Util.isUnset(request.paymentDurationUnit)) {
      body["PaymentDurationUnit"] = request.paymentDurationUnit;
    }

    if (!Util.isUnset(request.peersCount)) {
      body["PeersCount"] = request.peersCount;
    }

    if (!Util.isUnset(request.specName)) {
      body["SpecName"] = request.specName;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFabricConsortium",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFabricConsortiumResponse>(await this.callApi(params, req, runtime), new CreateFabricConsortiumResponse({}));
  }

  async createFabricConsortium(request: CreateFabricConsortiumRequest): Promise<CreateFabricConsortiumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFabricConsortiumWithOptions(request, runtime);
  }

  async createFabricConsortiumMemberWithOptions(request: CreateFabricConsortiumMemberRequest, runtime: $Util.RuntimeOptions): Promise<CreateFabricConsortiumMemberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.consortiumId)) {
      query["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.organization)) {
      query["Organization"] = request.organization;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFabricConsortiumMember",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFabricConsortiumMemberResponse>(await this.callApi(params, req, runtime), new CreateFabricConsortiumMemberResponse({}));
  }

  async createFabricConsortiumMember(request: CreateFabricConsortiumMemberRequest): Promise<CreateFabricConsortiumMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFabricConsortiumMemberWithOptions(request, runtime);
  }

  async createFabricOrganizationWithOptions(request: CreateFabricOrganizationRequest, runtime: $Util.RuntimeOptions): Promise<CreateFabricOrganizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.location)) {
      query["Location"] = request.location;
    }

    if (!Util.isUnset(request.organizationName)) {
      query["OrganizationName"] = request.organizationName;
    }

    if (!Util.isUnset(request.specName)) {
      query["SpecName"] = request.specName;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paymentDuration)) {
      body["PaymentDuration"] = request.paymentDuration;
    }

    if (!Util.isUnset(request.paymentDurationUnit)) {
      body["PaymentDurationUnit"] = request.paymentDurationUnit;
    }

    if (!Util.isUnset(request.peersCount)) {
      body["PeersCount"] = request.peersCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFabricOrganization",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFabricOrganizationResponse>(await this.callApi(params, req, runtime), new CreateFabricOrganizationResponse({}));
  }

  async createFabricOrganization(request: CreateFabricOrganizationRequest): Promise<CreateFabricOrganizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFabricOrganizationWithOptions(request, runtime);
  }

  async createFabricOrganizationUserWithOptions(request: CreateFabricOrganizationUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateFabricOrganizationUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attrs)) {
      body["Attrs"] = request.attrs;
    }

    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.username)) {
      body["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFabricOrganizationUser",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFabricOrganizationUserResponse>(await this.callApi(params, req, runtime), new CreateFabricOrganizationUserResponse({}));
  }

  async createFabricOrganizationUser(request: CreateFabricOrganizationUserRequest): Promise<CreateFabricOrganizationUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFabricOrganizationUserWithOptions(request, runtime);
  }

  async deleteAntChainConsortiumWithOptions(request: DeleteAntChainConsortiumRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAntChainConsortiumResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAntChainConsortium",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAntChainConsortiumResponse>(await this.callApi(params, req, runtime), new DeleteAntChainConsortiumResponse({}));
  }

  async deleteAntChainConsortium(request: DeleteAntChainConsortiumRequest): Promise<DeleteAntChainConsortiumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAntChainConsortiumWithOptions(request, runtime);
  }

  async deleteAntChainContractContentWithOptions(request: DeleteAntChainContractContentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAntChainContractContentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contentId)) {
      body["ContentId"] = request.contentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAntChainContractContent",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAntChainContractContentResponse>(await this.callApi(params, req, runtime), new DeleteAntChainContractContentResponse({}));
  }

  async deleteAntChainContractContent(request: DeleteAntChainContractContentRequest): Promise<DeleteAntChainContractContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAntChainContractContentWithOptions(request, runtime);
  }

  async deleteAntChainContractProjectWithOptions(request: DeleteAntChainContractProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAntChainContractProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAntChainContractProject",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAntChainContractProjectResponse>(await this.callApi(params, req, runtime), new DeleteAntChainContractProjectResponse({}));
  }

  async deleteAntChainContractProject(request: DeleteAntChainContractProjectRequest): Promise<DeleteAntChainContractProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAntChainContractProjectWithOptions(request, runtime);
  }

  async deleteAntChainMiniAppQRCodeAuthorizedUserWithOptions(request: DeleteAntChainMiniAppQRCodeAuthorizedUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAntChainMiniAppQRCodeAuthorizedUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.phone)) {
      body["Phone"] = request.phone;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAntChainMiniAppQRCodeAuthorizedUser",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAntChainMiniAppQRCodeAuthorizedUserResponse>(await this.callApi(params, req, runtime), new DeleteAntChainMiniAppQRCodeAuthorizedUserResponse({}));
  }

  async deleteAntChainMiniAppQRCodeAuthorizedUser(request: DeleteAntChainMiniAppQRCodeAuthorizedUserRequest): Promise<DeleteAntChainMiniAppQRCodeAuthorizedUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAntChainMiniAppQRCodeAuthorizedUserWithOptions(request, runtime);
  }

  async deleteFabricChaincodeWithOptions(request: DeleteFabricChaincodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFabricChaincodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chaincodeId)) {
      body["ChaincodeId"] = request.chaincodeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFabricChaincode",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFabricChaincodeResponse>(await this.callApi(params, req, runtime), new DeleteFabricChaincodeResponse({}));
  }

  async deleteFabricChaincode(request: DeleteFabricChaincodeRequest): Promise<DeleteFabricChaincodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFabricChaincodeWithOptions(request, runtime);
  }

  async describeAntChainAccountsWithOptions(request: DescribeAntChainAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainAccountsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

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
      action: "DescribeAntChainAccounts",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainAccountsResponse>(await this.callApi(params, req, runtime), new DescribeAntChainAccountsResponse({}));
  }

  async describeAntChainAccounts(request: DescribeAntChainAccountsRequest): Promise<DescribeAntChainAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainAccountsWithOptions(request, runtime);
  }

  async describeAntChainAccountsV2WithOptions(request: DescribeAntChainAccountsV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainAccountsV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

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
      action: "DescribeAntChainAccountsV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainAccountsV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainAccountsV2Response({}));
  }

  async describeAntChainAccountsV2(request: DescribeAntChainAccountsV2Request): Promise<DescribeAntChainAccountsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainAccountsV2WithOptions(request, runtime);
  }

  async describeAntChainBlockWithOptions(request: DescribeAntChainBlockRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainBlockResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.height)) {
      body["Height"] = request.height;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainBlock",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainBlockResponse>(await this.callApi(params, req, runtime), new DescribeAntChainBlockResponse({}));
  }

  async describeAntChainBlock(request: DescribeAntChainBlockRequest): Promise<DescribeAntChainBlockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainBlockWithOptions(request, runtime);
  }

  async describeAntChainBlockV2WithOptions(request: DescribeAntChainBlockV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainBlockV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.height)) {
      body["Height"] = request.height;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainBlockV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainBlockV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainBlockV2Response({}));
  }

  async describeAntChainBlockV2(request: DescribeAntChainBlockV2Request): Promise<DescribeAntChainBlockV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainBlockV2WithOptions(request, runtime);
  }

  async describeAntChainCertificateApplicationsWithOptions(request: DescribeAntChainCertificateApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainCertificateApplicationsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainCertificateApplications",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainCertificateApplicationsResponse>(await this.callApi(params, req, runtime), new DescribeAntChainCertificateApplicationsResponse({}));
  }

  async describeAntChainCertificateApplications(request: DescribeAntChainCertificateApplicationsRequest): Promise<DescribeAntChainCertificateApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainCertificateApplicationsWithOptions(request, runtime);
  }

  async describeAntChainCertificateApplicationsV2WithOptions(request: DescribeAntChainCertificateApplicationsV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainCertificateApplicationsV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainCertificateApplicationsV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainCertificateApplicationsV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainCertificateApplicationsV2Response({}));
  }

  async describeAntChainCertificateApplicationsV2(request: DescribeAntChainCertificateApplicationsV2Request): Promise<DescribeAntChainCertificateApplicationsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainCertificateApplicationsV2WithOptions(request, runtime);
  }

  async describeAntChainConsortiumsWithOptions(request: DescribeAntChainConsortiumsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainConsortiumsResponse> {
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
      action: "DescribeAntChainConsortiums",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainConsortiumsResponse>(await this.callApi(params, req, runtime), new DescribeAntChainConsortiumsResponse({}));
  }

  async describeAntChainConsortiums(request: DescribeAntChainConsortiumsRequest): Promise<DescribeAntChainConsortiumsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainConsortiumsWithOptions(request, runtime);
  }

  async describeAntChainConsortiumsV2WithOptions(request: DescribeAntChainConsortiumsV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainConsortiumsV2Response> {
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
      action: "DescribeAntChainConsortiumsV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainConsortiumsV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainConsortiumsV2Response({}));
  }

  async describeAntChainConsortiumsV2(request: DescribeAntChainConsortiumsV2Request): Promise<DescribeAntChainConsortiumsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainConsortiumsV2WithOptions(request, runtime);
  }

  async describeAntChainContractProjectContentTreeWithOptions(request: DescribeAntChainContractProjectContentTreeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainContractProjectContentTreeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainContractProjectContentTree",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainContractProjectContentTreeResponse>(await this.callApi(params, req, runtime), new DescribeAntChainContractProjectContentTreeResponse({}));
  }

  async describeAntChainContractProjectContentTree(request: DescribeAntChainContractProjectContentTreeRequest): Promise<DescribeAntChainContractProjectContentTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainContractProjectContentTreeWithOptions(request, runtime);
  }

  async describeAntChainContractProjectContentTreeV2WithOptions(request: DescribeAntChainContractProjectContentTreeV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainContractProjectContentTreeV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainContractProjectContentTreeV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainContractProjectContentTreeV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainContractProjectContentTreeV2Response({}));
  }

  async describeAntChainContractProjectContentTreeV2(request: DescribeAntChainContractProjectContentTreeV2Request): Promise<DescribeAntChainContractProjectContentTreeV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainContractProjectContentTreeV2WithOptions(request, runtime);
  }

  async describeAntChainContractProjectsWithOptions(request: DescribeAntChainContractProjectsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainContractProjectsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

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
      action: "DescribeAntChainContractProjects",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainContractProjectsResponse>(await this.callApi(params, req, runtime), new DescribeAntChainContractProjectsResponse({}));
  }

  async describeAntChainContractProjects(request: DescribeAntChainContractProjectsRequest): Promise<DescribeAntChainContractProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainContractProjectsWithOptions(request, runtime);
  }

  async describeAntChainContractProjectsV2WithOptions(request: DescribeAntChainContractProjectsV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainContractProjectsV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

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
      action: "DescribeAntChainContractProjectsV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainContractProjectsV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainContractProjectsV2Response({}));
  }

  async describeAntChainContractProjectsV2(request: DescribeAntChainContractProjectsV2Request): Promise<DescribeAntChainContractProjectsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainContractProjectsV2WithOptions(request, runtime);
  }

  async describeAntChainDownloadPathsWithOptions(request: DescribeAntChainDownloadPathsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainDownloadPathsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainDownloadPaths",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainDownloadPathsResponse>(await this.callApi(params, req, runtime), new DescribeAntChainDownloadPathsResponse({}));
  }

  async describeAntChainDownloadPaths(request: DescribeAntChainDownloadPathsRequest): Promise<DescribeAntChainDownloadPathsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainDownloadPathsWithOptions(request, runtime);
  }

  async describeAntChainDownloadPathsV2WithOptions(request: DescribeAntChainDownloadPathsV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainDownloadPathsV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainDownloadPathsV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainDownloadPathsV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainDownloadPathsV2Response({}));
  }

  async describeAntChainDownloadPathsV2(request: DescribeAntChainDownloadPathsV2Request): Promise<DescribeAntChainDownloadPathsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainDownloadPathsV2WithOptions(request, runtime);
  }

  async describeAntChainInformationWithOptions(request: DescribeAntChainInformationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainInformationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainInformation",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainInformationResponse>(await this.callApi(params, req, runtime), new DescribeAntChainInformationResponse({}));
  }

  async describeAntChainInformation(request: DescribeAntChainInformationRequest): Promise<DescribeAntChainInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainInformationWithOptions(request, runtime);
  }

  async describeAntChainInformationV2WithOptions(request: DescribeAntChainInformationV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainInformationV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainInformationV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainInformationV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainInformationV2Response({}));
  }

  async describeAntChainInformationV2(request: DescribeAntChainInformationV2Request): Promise<DescribeAntChainInformationV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainInformationV2WithOptions(request, runtime);
  }

  async describeAntChainLatestBlocksWithOptions(request: DescribeAntChainLatestBlocksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainLatestBlocksResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainLatestBlocks",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainLatestBlocksResponse>(await this.callApi(params, req, runtime), new DescribeAntChainLatestBlocksResponse({}));
  }

  async describeAntChainLatestBlocks(request: DescribeAntChainLatestBlocksRequest): Promise<DescribeAntChainLatestBlocksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainLatestBlocksWithOptions(request, runtime);
  }

  async describeAntChainLatestBlocksV2WithOptions(request: DescribeAntChainLatestBlocksV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainLatestBlocksV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainLatestBlocksV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainLatestBlocksV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainLatestBlocksV2Response({}));
  }

  async describeAntChainLatestBlocksV2(request: DescribeAntChainLatestBlocksV2Request): Promise<DescribeAntChainLatestBlocksV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainLatestBlocksV2WithOptions(request, runtime);
  }

  async describeAntChainLatestTransactionDigestsWithOptions(request: DescribeAntChainLatestTransactionDigestsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainLatestTransactionDigestsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainLatestTransactionDigests",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainLatestTransactionDigestsResponse>(await this.callApi(params, req, runtime), new DescribeAntChainLatestTransactionDigestsResponse({}));
  }

  async describeAntChainLatestTransactionDigests(request: DescribeAntChainLatestTransactionDigestsRequest): Promise<DescribeAntChainLatestTransactionDigestsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainLatestTransactionDigestsWithOptions(request, runtime);
  }

  async describeAntChainLatestTransactionDigestsV2WithOptions(request: DescribeAntChainLatestTransactionDigestsV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainLatestTransactionDigestsV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainLatestTransactionDigestsV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainLatestTransactionDigestsV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainLatestTransactionDigestsV2Response({}));
  }

  async describeAntChainLatestTransactionDigestsV2(request: DescribeAntChainLatestTransactionDigestsV2Request): Promise<DescribeAntChainLatestTransactionDigestsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainLatestTransactionDigestsV2WithOptions(request, runtime);
  }

  async describeAntChainMembersWithOptions(request: DescribeAntChainMembersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainMembersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

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
      action: "DescribeAntChainMembers",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainMembersResponse>(await this.callApi(params, req, runtime), new DescribeAntChainMembersResponse({}));
  }

  async describeAntChainMembers(request: DescribeAntChainMembersRequest): Promise<DescribeAntChainMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainMembersWithOptions(request, runtime);
  }

  async describeAntChainMembersV2WithOptions(request: DescribeAntChainMembersV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainMembersV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

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
      action: "DescribeAntChainMembersV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainMembersV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainMembersV2Response({}));
  }

  async describeAntChainMembersV2(request: DescribeAntChainMembersV2Request): Promise<DescribeAntChainMembersV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainMembersV2WithOptions(request, runtime);
  }

  async describeAntChainMiniAppBrowserQRCodeAccessLogWithOptions(request: DescribeAntChainMiniAppBrowserQRCodeAccessLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainMiniAppBrowserQRCodeAccessLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.QRCodeType)) {
      body["QRCodeType"] = request.QRCodeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainMiniAppBrowserQRCodeAccessLog",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainMiniAppBrowserQRCodeAccessLogResponse>(await this.callApi(params, req, runtime), new DescribeAntChainMiniAppBrowserQRCodeAccessLogResponse({}));
  }

  async describeAntChainMiniAppBrowserQRCodeAccessLog(request: DescribeAntChainMiniAppBrowserQRCodeAccessLogRequest): Promise<DescribeAntChainMiniAppBrowserQRCodeAccessLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainMiniAppBrowserQRCodeAccessLogWithOptions(request, runtime);
  }

  async describeAntChainMiniAppBrowserQRCodeAccessLogV2WithOptions(request: DescribeAntChainMiniAppBrowserQRCodeAccessLogV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainMiniAppBrowserQRCodeAccessLogV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.QRCodeType)) {
      body["QRCodeType"] = request.QRCodeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainMiniAppBrowserQRCodeAccessLogV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainMiniAppBrowserQRCodeAccessLogV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainMiniAppBrowserQRCodeAccessLogV2Response({}));
  }

  async describeAntChainMiniAppBrowserQRCodeAccessLogV2(request: DescribeAntChainMiniAppBrowserQRCodeAccessLogV2Request): Promise<DescribeAntChainMiniAppBrowserQRCodeAccessLogV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainMiniAppBrowserQRCodeAccessLogV2WithOptions(request, runtime);
  }

  async describeAntChainMiniAppBrowserQRCodeAuthorizedUsersWithOptions(request: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.QRCodeType)) {
      body["QRCodeType"] = request.QRCodeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsers",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponse>(await this.callApi(params, req, runtime), new DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponse({}));
  }

  async describeAntChainMiniAppBrowserQRCodeAuthorizedUsers(request: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersRequest): Promise<DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainMiniAppBrowserQRCodeAuthorizedUsersWithOptions(request, runtime);
  }

  async describeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2WithOptions(request: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.QRCodeType)) {
      body["QRCodeType"] = request.QRCodeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2Response({}));
  }

  async describeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2(request: DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2Request): Promise<DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2WithOptions(request, runtime);
  }

  async describeAntChainMiniAppBrowserTransactionQRCodeWithOptions(request: DescribeAntChainMiniAppBrowserTransactionQRCodeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainMiniAppBrowserTransactionQRCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.transactionHash)) {
      body["TransactionHash"] = request.transactionHash;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainMiniAppBrowserTransactionQRCode",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainMiniAppBrowserTransactionQRCodeResponse>(await this.callApi(params, req, runtime), new DescribeAntChainMiniAppBrowserTransactionQRCodeResponse({}));
  }

  async describeAntChainMiniAppBrowserTransactionQRCode(request: DescribeAntChainMiniAppBrowserTransactionQRCodeRequest): Promise<DescribeAntChainMiniAppBrowserTransactionQRCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainMiniAppBrowserTransactionQRCodeWithOptions(request, runtime);
  }

  async describeAntChainMiniAppBrowserTransactionQRCodeNewWithOptions(request: DescribeAntChainMiniAppBrowserTransactionQRCodeNewRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainMiniAppBrowserTransactionQRCodeNewResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.contractId)) {
      body["ContractId"] = request.contractId;
    }

    if (!Util.isUnset(request.transactionHash)) {
      body["TransactionHash"] = request.transactionHash;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainMiniAppBrowserTransactionQRCodeNew",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainMiniAppBrowserTransactionQRCodeNewResponse>(await this.callApi(params, req, runtime), new DescribeAntChainMiniAppBrowserTransactionQRCodeNewResponse({}));
  }

  async describeAntChainMiniAppBrowserTransactionQRCodeNew(request: DescribeAntChainMiniAppBrowserTransactionQRCodeNewRequest): Promise<DescribeAntChainMiniAppBrowserTransactionQRCodeNewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainMiniAppBrowserTransactionQRCodeNewWithOptions(request, runtime);
  }

  async describeAntChainNodesWithOptions(request: DescribeAntChainNodesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainNodesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainNodes",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainNodesResponse>(await this.callApi(params, req, runtime), new DescribeAntChainNodesResponse({}));
  }

  async describeAntChainNodes(request: DescribeAntChainNodesRequest): Promise<DescribeAntChainNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainNodesWithOptions(request, runtime);
  }

  async describeAntChainNodesV2WithOptions(request: DescribeAntChainNodesV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainNodesV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainNodesV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainNodesV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainNodesV2Response({}));
  }

  async describeAntChainNodesV2(request: DescribeAntChainNodesV2Request): Promise<DescribeAntChainNodesV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainNodesV2WithOptions(request, runtime);
  }

  async describeAntChainQRCodeAuthorizationWithOptions(request: DescribeAntChainQRCodeAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainQRCodeAuthorizationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.QRCodeType)) {
      body["QRCodeType"] = request.QRCodeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainQRCodeAuthorization",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainQRCodeAuthorizationResponse>(await this.callApi(params, req, runtime), new DescribeAntChainQRCodeAuthorizationResponse({}));
  }

  async describeAntChainQRCodeAuthorization(request: DescribeAntChainQRCodeAuthorizationRequest): Promise<DescribeAntChainQRCodeAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainQRCodeAuthorizationWithOptions(request, runtime);
  }

  async describeAntChainQRCodeAuthorizationV2WithOptions(request: DescribeAntChainQRCodeAuthorizationV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainQRCodeAuthorizationV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.QRCodeType)) {
      body["QRCodeType"] = request.QRCodeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainQRCodeAuthorizationV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainQRCodeAuthorizationV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainQRCodeAuthorizationV2Response({}));
  }

  async describeAntChainQRCodeAuthorizationV2(request: DescribeAntChainQRCodeAuthorizationV2Request): Promise<DescribeAntChainQRCodeAuthorizationV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainQRCodeAuthorizationV2WithOptions(request, runtime);
  }

  async describeAntChainTransactionWithOptions(request: DescribeAntChainTransactionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainTransactionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.hash)) {
      body["Hash"] = request.hash;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainTransaction",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainTransactionResponse>(await this.callApi(params, req, runtime), new DescribeAntChainTransactionResponse({}));
  }

  async describeAntChainTransaction(request: DescribeAntChainTransactionRequest): Promise<DescribeAntChainTransactionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainTransactionWithOptions(request, runtime);
  }

  async describeAntChainTransactionReceiptWithOptions(request: DescribeAntChainTransactionReceiptRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainTransactionReceiptResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.hash)) {
      body["Hash"] = request.hash;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainTransactionReceipt",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainTransactionReceiptResponse>(await this.callApi(params, req, runtime), new DescribeAntChainTransactionReceiptResponse({}));
  }

  async describeAntChainTransactionReceipt(request: DescribeAntChainTransactionReceiptRequest): Promise<DescribeAntChainTransactionReceiptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainTransactionReceiptWithOptions(request, runtime);
  }

  async describeAntChainTransactionReceiptV2WithOptions(request: DescribeAntChainTransactionReceiptV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainTransactionReceiptV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.hash)) {
      body["Hash"] = request.hash;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainTransactionReceiptV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainTransactionReceiptV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainTransactionReceiptV2Response({}));
  }

  async describeAntChainTransactionReceiptV2(request: DescribeAntChainTransactionReceiptV2Request): Promise<DescribeAntChainTransactionReceiptV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainTransactionReceiptV2WithOptions(request, runtime);
  }

  async describeAntChainTransactionStatisticsWithOptions(request: DescribeAntChainTransactionStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainTransactionStatisticsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.end)) {
      body["End"] = request.end;
    }

    if (!Util.isUnset(request.start)) {
      body["Start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainTransactionStatistics",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainTransactionStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeAntChainTransactionStatisticsResponse({}));
  }

  async describeAntChainTransactionStatistics(request: DescribeAntChainTransactionStatisticsRequest): Promise<DescribeAntChainTransactionStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainTransactionStatisticsWithOptions(request, runtime);
  }

  async describeAntChainTransactionStatisticsV2WithOptions(request: DescribeAntChainTransactionStatisticsV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainTransactionStatisticsV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.end)) {
      body["End"] = request.end;
    }

    if (!Util.isUnset(request.start)) {
      body["Start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainTransactionStatisticsV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainTransactionStatisticsV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainTransactionStatisticsV2Response({}));
  }

  async describeAntChainTransactionStatisticsV2(request: DescribeAntChainTransactionStatisticsV2Request): Promise<DescribeAntChainTransactionStatisticsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainTransactionStatisticsV2WithOptions(request, runtime);
  }

  async describeAntChainTransactionV2WithOptions(request: DescribeAntChainTransactionV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainTransactionV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.hash)) {
      body["Hash"] = request.hash;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntChainTransactionV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainTransactionV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainTransactionV2Response({}));
  }

  async describeAntChainTransactionV2(request: DescribeAntChainTransactionV2Request): Promise<DescribeAntChainTransactionV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainTransactionV2WithOptions(request, runtime);
  }

  async describeAntChainsWithOptions(request: DescribeAntChainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

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
      action: "DescribeAntChains",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainsResponse>(await this.callApi(params, req, runtime), new DescribeAntChainsResponse({}));
  }

  async describeAntChains(request: DescribeAntChainsRequest): Promise<DescribeAntChainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainsWithOptions(request, runtime);
  }

  async describeAntChainsV2WithOptions(request: DescribeAntChainsV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeAntChainsV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

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
      action: "DescribeAntChainsV2",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntChainsV2Response>(await this.callApi(params, req, runtime), new DescribeAntChainsV2Response({}));
  }

  async describeAntChainsV2(request: DescribeAntChainsV2Request): Promise<DescribeAntChainsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntChainsV2WithOptions(request, runtime);
  }

  async describeEthereumDeletableWithOptions(request: DescribeEthereumDeletableRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEthereumDeletableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ethereumId)) {
      body["EthereumId"] = request.ethereumId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEthereumDeletable",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEthereumDeletableResponse>(await this.callApi(params, req, runtime), new DescribeEthereumDeletableResponse({}));
  }

  async describeEthereumDeletable(request: DescribeEthereumDeletableRequest): Promise<DescribeEthereumDeletableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEthereumDeletableWithOptions(request, runtime);
  }

  async describeFabricCandidateOrganizationsWithOptions(request: DescribeFabricCandidateOrganizationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricCandidateOrganizationsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricCandidateOrganizations",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricCandidateOrganizationsResponse>(await this.callApi(params, req, runtime), new DescribeFabricCandidateOrganizationsResponse({}));
  }

  async describeFabricCandidateOrganizations(request: DescribeFabricCandidateOrganizationsRequest): Promise<DescribeFabricCandidateOrganizationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricCandidateOrganizationsWithOptions(request, runtime);
  }

  async describeFabricChaincodeDefinitionTaskWithOptions(request: DescribeFabricChaincodeDefinitionTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricChaincodeDefinitionTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chaincodeId)) {
      body["ChaincodeId"] = request.chaincodeId;
    }

    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricChaincodeDefinitionTask",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricChaincodeDefinitionTaskResponse>(await this.callApi(params, req, runtime), new DescribeFabricChaincodeDefinitionTaskResponse({}));
  }

  async describeFabricChaincodeDefinitionTask(request: DescribeFabricChaincodeDefinitionTaskRequest): Promise<DescribeFabricChaincodeDefinitionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricChaincodeDefinitionTaskWithOptions(request, runtime);
  }

  async describeFabricChaincodeUploadPolicyWithOptions(request: DescribeFabricChaincodeUploadPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricChaincodeUploadPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricChaincodeUploadPolicy",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricChaincodeUploadPolicyResponse>(await this.callApi(params, req, runtime), new DescribeFabricChaincodeUploadPolicyResponse({}));
  }

  async describeFabricChaincodeUploadPolicy(request: DescribeFabricChaincodeUploadPolicyRequest): Promise<DescribeFabricChaincodeUploadPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricChaincodeUploadPolicyWithOptions(request, runtime);
  }

  async describeFabricChannelMembersWithOptions(request: DescribeFabricChannelMembersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricChannelMembersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricChannelMembers",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricChannelMembersResponse>(await this.callApi(params, req, runtime), new DescribeFabricChannelMembersResponse({}));
  }

  async describeFabricChannelMembers(request: DescribeFabricChannelMembersRequest): Promise<DescribeFabricChannelMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricChannelMembersWithOptions(request, runtime);
  }

  async describeFabricConsortiumAdminStatusWithOptions(request: DescribeFabricConsortiumAdminStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumAdminStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricConsortiumAdminStatus",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricConsortiumAdminStatusResponse>(await this.callApi(params, req, runtime), new DescribeFabricConsortiumAdminStatusResponse({}));
  }

  async describeFabricConsortiumAdminStatus(request: DescribeFabricConsortiumAdminStatusRequest): Promise<DescribeFabricConsortiumAdminStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumAdminStatusWithOptions(request, runtime);
  }

  async describeFabricConsortiumChaincodesWithOptions(request: DescribeFabricConsortiumChaincodesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumChaincodesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricConsortiumChaincodes",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricConsortiumChaincodesResponse>(await this.callApi(params, req, runtime), new DescribeFabricConsortiumChaincodesResponse({}));
  }

  async describeFabricConsortiumChaincodes(request: DescribeFabricConsortiumChaincodesRequest): Promise<DescribeFabricConsortiumChaincodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumChaincodesWithOptions(request, runtime);
  }

  async describeFabricConsortiumChannelsWithOptions(request: DescribeFabricConsortiumChannelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumChannelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consortiumId)) {
      query["ConsortiumId"] = request.consortiumId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricConsortiumChannels",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricConsortiumChannelsResponse>(await this.callApi(params, req, runtime), new DescribeFabricConsortiumChannelsResponse({}));
  }

  async describeFabricConsortiumChannels(request: DescribeFabricConsortiumChannelsRequest): Promise<DescribeFabricConsortiumChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumChannelsWithOptions(request, runtime);
  }

  async describeFabricConsortiumConfigWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeFabricConsortiumConfig",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricConsortiumConfigResponse>(await this.callApi(params, req, runtime), new DescribeFabricConsortiumConfigResponse({}));
  }

  async describeFabricConsortiumConfig(): Promise<DescribeFabricConsortiumConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumConfigWithOptions(runtime);
  }

  async describeFabricConsortiumDeletableWithOptions(request: DescribeFabricConsortiumDeletableRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumDeletableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consortiumId)) {
      query["ConsortiumId"] = request.consortiumId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricConsortiumDeletable",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricConsortiumDeletableResponse>(await this.callApi(params, req, runtime), new DescribeFabricConsortiumDeletableResponse({}));
  }

  async describeFabricConsortiumDeletable(request: DescribeFabricConsortiumDeletableRequest): Promise<DescribeFabricConsortiumDeletableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumDeletableWithOptions(request, runtime);
  }

  async describeFabricConsortiumMemberApprovalWithOptions(request: DescribeFabricConsortiumMemberApprovalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumMemberApprovalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consortiumId)) {
      query["ConsortiumId"] = request.consortiumId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricConsortiumMemberApproval",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricConsortiumMemberApprovalResponse>(await this.callApi(params, req, runtime), new DescribeFabricConsortiumMemberApprovalResponse({}));
  }

  async describeFabricConsortiumMemberApproval(request: DescribeFabricConsortiumMemberApprovalRequest): Promise<DescribeFabricConsortiumMemberApprovalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumMemberApprovalWithOptions(request, runtime);
  }

  async describeFabricConsortiumMembersWithOptions(request: DescribeFabricConsortiumMembersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumMembersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricConsortiumMembers",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricConsortiumMembersResponse>(await this.callApi(params, req, runtime), new DescribeFabricConsortiumMembersResponse({}));
  }

  async describeFabricConsortiumMembers(request: DescribeFabricConsortiumMembersRequest): Promise<DescribeFabricConsortiumMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumMembersWithOptions(request, runtime);
  }

  async describeFabricConsortiumOrderersWithOptions(request: DescribeFabricConsortiumOrderersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumOrderersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricConsortiumOrderers",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricConsortiumOrderersResponse>(await this.callApi(params, req, runtime), new DescribeFabricConsortiumOrderersResponse({}));
  }

  async describeFabricConsortiumOrderers(request: DescribeFabricConsortiumOrderersRequest): Promise<DescribeFabricConsortiumOrderersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumOrderersWithOptions(request, runtime);
  }

  async describeFabricConsortiumSpecsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumSpecsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeFabricConsortiumSpecs",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricConsortiumSpecsResponse>(await this.callApi(params, req, runtime), new DescribeFabricConsortiumSpecsResponse({}));
  }

  async describeFabricConsortiumSpecs(): Promise<DescribeFabricConsortiumSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumSpecsWithOptions(runtime);
  }

  async describeFabricConsortiumsWithOptions(request: DescribeFabricConsortiumsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricConsortiumsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consortiumId)) {
      query["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricConsortiums",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricConsortiumsResponse>(await this.callApi(params, req, runtime), new DescribeFabricConsortiumsResponse({}));
  }

  async describeFabricConsortiums(request: DescribeFabricConsortiumsRequest): Promise<DescribeFabricConsortiumsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricConsortiumsWithOptions(request, runtime);
  }

  async describeFabricExplorerWithOptions(request: DescribeFabricExplorerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricExplorerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.exBody)) {
      query["ExBody"] = request.exBody;
    }

    if (!Util.isUnset(request.exMethod)) {
      query["ExMethod"] = request.exMethod;
    }

    if (!Util.isUnset(request.exUrl)) {
      query["ExUrl"] = request.exUrl;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricExplorer",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricExplorerResponse>(await this.callApi(params, req, runtime), new DescribeFabricExplorerResponse({}));
  }

  async describeFabricExplorer(request: DescribeFabricExplorerRequest): Promise<DescribeFabricExplorerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricExplorerWithOptions(request, runtime);
  }

  async describeFabricInvitationCodeWithOptions(request: DescribeFabricInvitationCodeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricInvitationCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricInvitationCode",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricInvitationCodeResponse>(await this.callApi(params, req, runtime), new DescribeFabricInvitationCodeResponse({}));
  }

  async describeFabricInvitationCode(request: DescribeFabricInvitationCodeRequest): Promise<DescribeFabricInvitationCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricInvitationCodeWithOptions(request, runtime);
  }

  async describeFabricInviterWithOptions(request: DescribeFabricInviterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricInviterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["Code"] = request.code;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricInviter",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricInviterResponse>(await this.callApi(params, req, runtime), new DescribeFabricInviterResponse({}));
  }

  async describeFabricInviter(request: DescribeFabricInviterRequest): Promise<DescribeFabricInviterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricInviterWithOptions(request, runtime);
  }

  async describeFabricOrdererLogsWithOptions(request: DescribeFabricOrdererLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrdererLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consortiumId)) {
      query["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.lines)) {
      query["Lines"] = request.lines;
    }

    if (!Util.isUnset(request.ordererName)) {
      query["OrdererName"] = request.ordererName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricOrdererLogs",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricOrdererLogsResponse>(await this.callApi(params, req, runtime), new DescribeFabricOrdererLogsResponse({}));
  }

  async describeFabricOrdererLogs(request: DescribeFabricOrdererLogsRequest): Promise<DescribeFabricOrdererLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrdererLogsWithOptions(request, runtime);
  }

  async describeFabricOrganizationWithOptions(request: DescribeFabricOrganizationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricOrganization",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricOrganizationResponse>(await this.callApi(params, req, runtime), new DescribeFabricOrganizationResponse({}));
  }

  async describeFabricOrganization(request: DescribeFabricOrganizationRequest): Promise<DescribeFabricOrganizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationWithOptions(request, runtime);
  }

  async describeFabricOrganizationChaincodePackageWithOptions(request: DescribeFabricOrganizationChaincodePackageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationChaincodePackageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricOrganizationChaincodePackage",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricOrganizationChaincodePackageResponse>(await this.callApi(params, req, runtime), new DescribeFabricOrganizationChaincodePackageResponse({}));
  }

  async describeFabricOrganizationChaincodePackage(request: DescribeFabricOrganizationChaincodePackageRequest): Promise<DescribeFabricOrganizationChaincodePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationChaincodePackageWithOptions(request, runtime);
  }

  async describeFabricOrganizationChaincodesWithOptions(request: DescribeFabricOrganizationChaincodesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationChaincodesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricOrganizationChaincodes",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricOrganizationChaincodesResponse>(await this.callApi(params, req, runtime), new DescribeFabricOrganizationChaincodesResponse({}));
  }

  async describeFabricOrganizationChaincodes(request: DescribeFabricOrganizationChaincodesRequest): Promise<DescribeFabricOrganizationChaincodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationChaincodesWithOptions(request, runtime);
  }

  async describeFabricOrganizationChannelsWithOptions(request: DescribeFabricOrganizationChannelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationChannelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricOrganizationChannels",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricOrganizationChannelsResponse>(await this.callApi(params, req, runtime), new DescribeFabricOrganizationChannelsResponse({}));
  }

  async describeFabricOrganizationChannels(request: DescribeFabricOrganizationChannelsRequest): Promise<DescribeFabricOrganizationChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationChannelsWithOptions(request, runtime);
  }

  async describeFabricOrganizationDeletableWithOptions(request: DescribeFabricOrganizationDeletableRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationDeletableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricOrganizationDeletable",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricOrganizationDeletableResponse>(await this.callApi(params, req, runtime), new DescribeFabricOrganizationDeletableResponse({}));
  }

  async describeFabricOrganizationDeletable(request: DescribeFabricOrganizationDeletableRequest): Promise<DescribeFabricOrganizationDeletableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationDeletableWithOptions(request, runtime);
  }

  async describeFabricOrganizationMembersWithOptions(request: DescribeFabricOrganizationMembersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationMembersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricOrganizationMembers",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricOrganizationMembersResponse>(await this.callApi(params, req, runtime), new DescribeFabricOrganizationMembersResponse({}));
  }

  async describeFabricOrganizationMembers(request: DescribeFabricOrganizationMembersRequest): Promise<DescribeFabricOrganizationMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationMembersWithOptions(request, runtime);
  }

  async describeFabricOrganizationPeersWithOptions(request: DescribeFabricOrganizationPeersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationPeersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricOrganizationPeers",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricOrganizationPeersResponse>(await this.callApi(params, req, runtime), new DescribeFabricOrganizationPeersResponse({}));
  }

  async describeFabricOrganizationPeers(request: DescribeFabricOrganizationPeersRequest): Promise<DescribeFabricOrganizationPeersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationPeersWithOptions(request, runtime);
  }

  async describeFabricOrganizationSpecsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationSpecsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeFabricOrganizationSpecs",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricOrganizationSpecsResponse>(await this.callApi(params, req, runtime), new DescribeFabricOrganizationSpecsResponse({}));
  }

  async describeFabricOrganizationSpecs(): Promise<DescribeFabricOrganizationSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationSpecsWithOptions(runtime);
  }

  async describeFabricOrganizationUsersWithOptions(request: DescribeFabricOrganizationUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricOrganizationUsers",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricOrganizationUsersResponse>(await this.callApi(params, req, runtime), new DescribeFabricOrganizationUsersResponse({}));
  }

  async describeFabricOrganizationUsers(request: DescribeFabricOrganizationUsersRequest): Promise<DescribeFabricOrganizationUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationUsersWithOptions(request, runtime);
  }

  async describeFabricOrganizationsWithOptions(request: DescribeFabricOrganizationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricOrganizationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricOrganizations",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricOrganizationsResponse>(await this.callApi(params, req, runtime), new DescribeFabricOrganizationsResponse({}));
  }

  async describeFabricOrganizations(request: DescribeFabricOrganizationsRequest): Promise<DescribeFabricOrganizationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricOrganizationsWithOptions(request, runtime);
  }

  async describeFabricPeerLogsWithOptions(request: DescribeFabricPeerLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFabricPeerLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lines)) {
      query["Lines"] = request.lines;
    }

    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.peerName)) {
      query["PeerName"] = request.peerName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFabricPeerLogs",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFabricPeerLogsResponse>(await this.callApi(params, req, runtime), new DescribeFabricPeerLogsResponse({}));
  }

  async describeFabricPeerLogs(request: DescribeFabricPeerLogsRequest): Promise<DescribeFabricPeerLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFabricPeerLogsWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeRootDomainWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRootDomainResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeRootDomain",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRootDomainResponse>(await this.callApi(params, req, runtime), new DescribeRootDomainResponse({}));
  }

  async describeRootDomain(): Promise<DescribeRootDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRootDomainWithOptions(runtime);
  }

  async describeTasksWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeTasksResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeTasks",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTasksResponse>(await this.callApi(params, req, runtime), new DescribeTasksResponse({}));
  }

  async describeTasks(): Promise<DescribeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTasksWithOptions(runtime);
  }

  async downloadFabricOrganizationSDKWithOptions(request: DownloadFabricOrganizationSDKRequest, runtime: $Util.RuntimeOptions): Promise<DownloadFabricOrganizationSDKResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DownloadFabricOrganizationSDK",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadFabricOrganizationSDKResponse>(await this.callApi(params, req, runtime), new DownloadFabricOrganizationSDKResponse({}));
  }

  async downloadFabricOrganizationSDK(request: DownloadFabricOrganizationSDKRequest): Promise<DownloadFabricOrganizationSDKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadFabricOrganizationSDKWithOptions(request, runtime);
  }

  async freezeAntChainAccountWithOptions(request: FreezeAntChainAccountRequest, runtime: $Util.RuntimeOptions): Promise<FreezeAntChainAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.account)) {
      body["Account"] = request.account;
    }

    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FreezeAntChainAccount",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FreezeAntChainAccountResponse>(await this.callApi(params, req, runtime), new FreezeAntChainAccountResponse({}));
  }

  async freezeAntChainAccount(request: FreezeAntChainAccountRequest): Promise<FreezeAntChainAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.freezeAntChainAccountWithOptions(request, runtime);
  }

  async installFabricChaincodeWithOptions(request: InstallFabricChaincodeRequest, runtime: $Util.RuntimeOptions): Promise<InstallFabricChaincodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chaincodeId)) {
      body["ChaincodeId"] = request.chaincodeId;
    }

    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InstallFabricChaincode",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InstallFabricChaincodeResponse>(await this.callApi(params, req, runtime), new InstallFabricChaincodeResponse({}));
  }

  async installFabricChaincode(request: InstallFabricChaincodeRequest): Promise<InstallFabricChaincodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installFabricChaincodeWithOptions(request, runtime);
  }

  async installFabricChaincodePackageWithOptions(request: InstallFabricChaincodePackageRequest, runtime: $Util.RuntimeOptions): Promise<InstallFabricChaincodePackageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chaincodePackageId)) {
      body["ChaincodePackageId"] = request.chaincodePackageId;
    }

    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InstallFabricChaincodePackage",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InstallFabricChaincodePackageResponse>(await this.callApi(params, req, runtime), new InstallFabricChaincodePackageResponse({}));
  }

  async installFabricChaincodePackage(request: InstallFabricChaincodePackageRequest): Promise<InstallFabricChaincodePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installFabricChaincodePackageWithOptions(request, runtime);
  }

  async instantiateFabricChaincodeWithOptions(request: InstantiateFabricChaincodeRequest, runtime: $Util.RuntimeOptions): Promise<InstantiateFabricChaincodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chaincodeId)) {
      body["ChaincodeId"] = request.chaincodeId;
    }

    if (!Util.isUnset(request.collectionConfig)) {
      body["CollectionConfig"] = request.collectionConfig;
    }

    if (!Util.isUnset(request.endorsePolicy)) {
      body["EndorsePolicy"] = request.endorsePolicy;
    }

    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InstantiateFabricChaincode",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InstantiateFabricChaincodeResponse>(await this.callApi(params, req, runtime), new InstantiateFabricChaincodeResponse({}));
  }

  async instantiateFabricChaincode(request: InstantiateFabricChaincodeRequest): Promise<InstantiateFabricChaincodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.instantiateFabricChaincodeWithOptions(request, runtime);
  }

  async joinFabricChannelWithOptions(request: JoinFabricChannelRequest, runtime: $Util.RuntimeOptions): Promise<JoinFabricChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.do)) {
      query["Do"] = request.do;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "JoinFabricChannel",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<JoinFabricChannelResponse>(await this.callApi(params, req, runtime), new JoinFabricChannelResponse({}));
  }

  async joinFabricChannel(request: JoinFabricChannelRequest): Promise<JoinFabricChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinFabricChannelWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
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
      version: "2018-12-21",
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

  async resetAntChainCertificateWithOptions(request: ResetAntChainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ResetAntChainCertificateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResetAntChainCertificate",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetAntChainCertificateResponse>(await this.callApi(params, req, runtime), new ResetAntChainCertificateResponse({}));
  }

  async resetAntChainCertificate(request: ResetAntChainCertificateRequest): Promise<ResetAntChainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAntChainCertificateWithOptions(request, runtime);
  }

  async resetAntChainUserCertificateWithOptions(request: ResetAntChainUserCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ResetAntChainUserCertificateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.username)) {
      body["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResetAntChainUserCertificate",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetAntChainUserCertificateResponse>(await this.callApi(params, req, runtime), new ResetAntChainUserCertificateResponse({}));
  }

  async resetAntChainUserCertificate(request: ResetAntChainUserCertificateRequest): Promise<ResetAntChainUserCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAntChainUserCertificateWithOptions(request, runtime);
  }

  async resetFabricOrganizationUserPasswordWithOptions(request: ResetFabricOrganizationUserPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetFabricOrganizationUserPasswordResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.username)) {
      body["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResetFabricOrganizationUserPassword",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetFabricOrganizationUserPasswordResponse>(await this.callApi(params, req, runtime), new ResetFabricOrganizationUserPasswordResponse({}));
  }

  async resetFabricOrganizationUserPassword(request: ResetFabricOrganizationUserPasswordRequest): Promise<ResetFabricOrganizationUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetFabricOrganizationUserPasswordWithOptions(request, runtime);
  }

  async submitFabricChaincodeDefinitionWithOptions(request: SubmitFabricChaincodeDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<SubmitFabricChaincodeDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chaincodePackageId)) {
      body["ChaincodePackageId"] = request.chaincodePackageId;
    }

    if (!Util.isUnset(request.chaincodeVersion)) {
      body["ChaincodeVersion"] = request.chaincodeVersion;
    }

    if (!Util.isUnset(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.collectionConfig)) {
      body["CollectionConfig"] = request.collectionConfig;
    }

    if (!Util.isUnset(request.endorsePolicy)) {
      body["EndorsePolicy"] = request.endorsePolicy;
    }

    if (!Util.isUnset(request.initRequired)) {
      body["InitRequired"] = request.initRequired;
    }

    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitFabricChaincodeDefinition",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitFabricChaincodeDefinitionResponse>(await this.callApi(params, req, runtime), new SubmitFabricChaincodeDefinitionResponse({}));
  }

  async submitFabricChaincodeDefinition(request: SubmitFabricChaincodeDefinitionRequest): Promise<SubmitFabricChaincodeDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitFabricChaincodeDefinitionWithOptions(request, runtime);
  }

  async synchronizeFabricChaincodeWithOptions(request: SynchronizeFabricChaincodeRequest, runtime: $Util.RuntimeOptions): Promise<SynchronizeFabricChaincodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chaincodeId)) {
      body["ChaincodeId"] = request.chaincodeId;
    }

    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SynchronizeFabricChaincode",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SynchronizeFabricChaincodeResponse>(await this.callApi(params, req, runtime), new SynchronizeFabricChaincodeResponse({}));
  }

  async synchronizeFabricChaincode(request: SynchronizeFabricChaincodeRequest): Promise<SynchronizeFabricChaincodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.synchronizeFabricChaincodeWithOptions(request, runtime);
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
      version: "2018-12-21",
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

  async unfreezeAntChainAccountWithOptions(request: UnfreezeAntChainAccountRequest, runtime: $Util.RuntimeOptions): Promise<UnfreezeAntChainAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.account)) {
      body["Account"] = request.account;
    }

    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnfreezeAntChainAccount",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnfreezeAntChainAccountResponse>(await this.callApi(params, req, runtime), new UnfreezeAntChainAccountResponse({}));
  }

  async unfreezeAntChainAccount(request: UnfreezeAntChainAccountRequest): Promise<UnfreezeAntChainAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unfreezeAntChainAccountWithOptions(request, runtime);
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
      version: "2018-12-21",
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

  async updateAntChainWithOptions(request: UpdateAntChainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAntChainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.antChainName)) {
      body["AntChainName"] = request.antChainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAntChain",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAntChainResponse>(await this.callApi(params, req, runtime), new UpdateAntChainResponse({}));
  }

  async updateAntChain(request: UpdateAntChainRequest): Promise<UpdateAntChainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAntChainWithOptions(request, runtime);
  }

  async updateAntChainConsortiumWithOptions(request: UpdateAntChainConsortiumRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAntChainConsortiumResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consortiumDescription)) {
      body["ConsortiumDescription"] = request.consortiumDescription;
    }

    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.consortiumName)) {
      body["ConsortiumName"] = request.consortiumName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAntChainConsortium",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAntChainConsortiumResponse>(await this.callApi(params, req, runtime), new UpdateAntChainConsortiumResponse({}));
  }

  async updateAntChainConsortium(request: UpdateAntChainConsortiumRequest): Promise<UpdateAntChainConsortiumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAntChainConsortiumWithOptions(request, runtime);
  }

  async updateAntChainContractContentWithOptions(request: UpdateAntChainContractContentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAntChainContractContentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.contentId)) {
      body["ContentId"] = request.contentId;
    }

    if (!Util.isUnset(request.contentName)) {
      body["ContentName"] = request.contentName;
    }

    if (!Util.isUnset(request.parentContentId)) {
      body["ParentContentId"] = request.parentContentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAntChainContractContent",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAntChainContractContentResponse>(await this.callApi(params, req, runtime), new UpdateAntChainContractContentResponse({}));
  }

  async updateAntChainContractContent(request: UpdateAntChainContractContentRequest): Promise<UpdateAntChainContractContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAntChainContractContentWithOptions(request, runtime);
  }

  async updateAntChainContractProjectWithOptions(request: UpdateAntChainContractProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAntChainContractProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectDescription)) {
      body["ProjectDescription"] = request.projectDescription;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.projectVersion)) {
      body["ProjectVersion"] = request.projectVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAntChainContractProject",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAntChainContractProjectResponse>(await this.callApi(params, req, runtime), new UpdateAntChainContractProjectResponse({}));
  }

  async updateAntChainContractProject(request: UpdateAntChainContractProjectRequest): Promise<UpdateAntChainContractProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAntChainContractProjectWithOptions(request, runtime);
  }

  async updateAntChainMemberWithOptions(request: UpdateAntChainMemberRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAntChainMemberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consortiumId)) {
      body["ConsortiumId"] = request.consortiumId;
    }

    if (!Util.isUnset(request.memberId)) {
      body["MemberId"] = request.memberId;
    }

    if (!Util.isUnset(request.memberName)) {
      body["MemberName"] = request.memberName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAntChainMember",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAntChainMemberResponse>(await this.callApi(params, req, runtime), new UpdateAntChainMemberResponse({}));
  }

  async updateAntChainMember(request: UpdateAntChainMemberRequest): Promise<UpdateAntChainMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAntChainMemberWithOptions(request, runtime);
  }

  async updateAntChainQRCodeAuthorizationWithOptions(request: UpdateAntChainQRCodeAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAntChainQRCodeAuthorizationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.antChainId)) {
      body["AntChainId"] = request.antChainId;
    }

    if (!Util.isUnset(request.authorizationType)) {
      body["AuthorizationType"] = request.authorizationType;
    }

    if (!Util.isUnset(request.QRCodeType)) {
      body["QRCodeType"] = request.QRCodeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAntChainQRCodeAuthorization",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAntChainQRCodeAuthorizationResponse>(await this.callApi(params, req, runtime), new UpdateAntChainQRCodeAuthorizationResponse({}));
  }

  async updateAntChainQRCodeAuthorization(request: UpdateAntChainQRCodeAuthorizationRequest): Promise<UpdateAntChainQRCodeAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAntChainQRCodeAuthorizationWithOptions(request, runtime);
  }

  async upgradeFabricChaincodeWithOptions(request: UpgradeFabricChaincodeRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeFabricChaincodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chaincodeId)) {
      body["ChaincodeId"] = request.chaincodeId;
    }

    if (!Util.isUnset(request.collectionConfig)) {
      body["CollectionConfig"] = request.collectionConfig;
    }

    if (!Util.isUnset(request.endorsePolicy)) {
      body["EndorsePolicy"] = request.endorsePolicy;
    }

    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeFabricChaincode",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeFabricChaincodeResponse>(await this.callApi(params, req, runtime), new UpgradeFabricChaincodeResponse({}));
  }

  async upgradeFabricChaincode(request: UpgradeFabricChaincodeRequest): Promise<UpgradeFabricChaincodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeFabricChaincodeWithOptions(request, runtime);
  }

  async upgradeFabricChaincodeDefinitionWithOptions(request: UpgradeFabricChaincodeDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeFabricChaincodeDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chaincodeId)) {
      body["ChaincodeId"] = request.chaincodeId;
    }

    if (!Util.isUnset(request.chaincodePackageId)) {
      body["ChaincodePackageId"] = request.chaincodePackageId;
    }

    if (!Util.isUnset(request.chaincodeVersion)) {
      body["ChaincodeVersion"] = request.chaincodeVersion;
    }

    if (!Util.isUnset(request.collectionConfig)) {
      body["CollectionConfig"] = request.collectionConfig;
    }

    if (!Util.isUnset(request.endorsePolicy)) {
      body["EndorsePolicy"] = request.endorsePolicy;
    }

    if (!Util.isUnset(request.initRequired)) {
      body["InitRequired"] = request.initRequired;
    }

    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    if (!Util.isUnset(request.organizationId)) {
      body["OrganizationId"] = request.organizationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeFabricChaincodeDefinition",
      version: "2018-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeFabricChaincodeDefinitionResponse>(await this.callApi(params, req, runtime), new UpgradeFabricChaincodeDefinitionResponse({}));
  }

  async upgradeFabricChaincodeDefinition(request: UpgradeFabricChaincodeDefinitionRequest): Promise<UpgradeFabricChaincodeDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeFabricChaincodeDefinitionWithOptions(request, runtime);
  }

}
