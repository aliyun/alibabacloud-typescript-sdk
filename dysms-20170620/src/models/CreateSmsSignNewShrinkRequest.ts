// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsSignNewShrinkRequest extends $dara.Model {
  applicationSceneId?: number;
  applySource?: string;
  authorization?: string;
  authorizationEffTime?: string;
  authorizationLetter?: string;
  authorizationLetterAuditPass?: boolean;
  authorizationLetterId?: number;
  authorizationLetterName?: string;
  authorizationSignScope?: string;
  createSignGray?: boolean;
  enableAuthorizationLetter?: boolean;
  extendMessage?: string;
  fileIds?: string;
  isAuthorizationLetterOCRComplete?: boolean;
  isAuthorizationLetterOCRDiff?: boolean;
  isSignScopeOCRDiff?: boolean;
  moreDataShrink?: string;
  orderId?: string;
  organizationCode?: string;
  ossKeys?: string;
  ownerId?: number;
  prodCode?: string;
  proxyAuthorization?: string;
  qualificationId?: number;
  qualificationType?: number;
  qualificationVersion?: number;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sceneType?: number;
  serviceType?: number;
  signCode?: string;
  signId?: string;
  signName?: string;
  signScopeOCR?: string;
  signUpgrade?: boolean;
  thirdParty?: boolean;
  userViewFileName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationSceneId: 'ApplicationSceneId',
      applySource: 'ApplySource',
      authorization: 'Authorization',
      authorizationEffTime: 'AuthorizationEffTime',
      authorizationLetter: 'AuthorizationLetter',
      authorizationLetterAuditPass: 'AuthorizationLetterAuditPass',
      authorizationLetterId: 'AuthorizationLetterId',
      authorizationLetterName: 'AuthorizationLetterName',
      authorizationSignScope: 'AuthorizationSignScope',
      createSignGray: 'CreateSignGray',
      enableAuthorizationLetter: 'EnableAuthorizationLetter',
      extendMessage: 'ExtendMessage',
      fileIds: 'FileIds',
      isAuthorizationLetterOCRComplete: 'IsAuthorizationLetterOCRComplete',
      isAuthorizationLetterOCRDiff: 'IsAuthorizationLetterOCRDiff',
      isSignScopeOCRDiff: 'IsSignScopeOCRDiff',
      moreDataShrink: 'MoreData',
      orderId: 'OrderId',
      organizationCode: 'OrganizationCode',
      ossKeys: 'OssKeys',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      proxyAuthorization: 'ProxyAuthorization',
      qualificationId: 'QualificationId',
      qualificationType: 'QualificationType',
      qualificationVersion: 'QualificationVersion',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneType: 'SceneType',
      serviceType: 'ServiceType',
      signCode: 'SignCode',
      signId: 'SignId',
      signName: 'SignName',
      signScopeOCR: 'SignScopeOCR',
      signUpgrade: 'SignUpgrade',
      thirdParty: 'ThirdParty',
      userViewFileName: 'UserViewFileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationSceneId: 'number',
      applySource: 'string',
      authorization: 'string',
      authorizationEffTime: 'string',
      authorizationLetter: 'string',
      authorizationLetterAuditPass: 'boolean',
      authorizationLetterId: 'number',
      authorizationLetterName: 'string',
      authorizationSignScope: 'string',
      createSignGray: 'boolean',
      enableAuthorizationLetter: 'boolean',
      extendMessage: 'string',
      fileIds: 'string',
      isAuthorizationLetterOCRComplete: 'boolean',
      isAuthorizationLetterOCRDiff: 'boolean',
      isSignScopeOCRDiff: 'boolean',
      moreDataShrink: 'string',
      orderId: 'string',
      organizationCode: 'string',
      ossKeys: 'string',
      ownerId: 'number',
      prodCode: 'string',
      proxyAuthorization: 'string',
      qualificationId: 'number',
      qualificationType: 'number',
      qualificationVersion: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneType: 'number',
      serviceType: 'number',
      signCode: 'string',
      signId: 'string',
      signName: 'string',
      signScopeOCR: 'string',
      signUpgrade: 'boolean',
      thirdParty: 'boolean',
      userViewFileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

