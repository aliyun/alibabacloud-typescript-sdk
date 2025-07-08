// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsSignDetailBySignIdNewResponseBodyApplicationScene } from "./QuerySmsSignDetailBySignIdNewResponseBodyApplicationScene";
import { QuerySmsSignDetailBySignIdNewResponseBodyList } from "./QuerySmsSignDetailBySignIdNewResponseBodyList";


export class QuerySmsSignDetailBySignIdNewResponseBody extends $dara.Model {
  accessToken?: string;
  applicationScene?: QuerySmsSignDetailBySignIdNewResponseBodyApplicationScene;
  auditInfo?: string;
  auditRemarkInfo?: string;
  auditState?: string;
  authorization?: string;
  authorizationEffTime?: string;
  authorizationLetter?: string;
  authorizationLetterAuditPass?: boolean;
  authorizationLetterId?: string;
  authorizationLetterName?: string;
  authorizationLetterState?: string;
  authorizationLetterStatus?: string;
  authorizationSignScope?: string;
  effectSceneType?: number;
  enableAuthorizationLetter?: boolean;
  extendMessage?: string;
  fileIds?: number[];
  fileUrlList?: string[];
  from?: string;
  gmtCreateStr?: string;
  id?: string;
  isAuthorizationLetterOCRComplete?: boolean;
  isAuthorizationLetterOCRDiff?: boolean;
  isSignScopeOCRDiff?: boolean;
  list?: QuerySmsSignDetailBySignIdNewResponseBodyList[];
  needAuthorized?: boolean;
  openTag?: boolean;
  orderId?: string;
  organizationCode?: string;
  ossKeys?: string[];
  proxyAuthorization?: string;
  remark?: string;
  requestId?: string;
  sceneType?: number;
  serviceType?: number;
  signCode?: string;
  signName?: string;
  signScopeOCR?: string;
  signUpgrade?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      applicationScene: 'ApplicationScene',
      auditInfo: 'AuditInfo',
      auditRemarkInfo: 'AuditRemarkInfo',
      auditState: 'AuditState',
      authorization: 'Authorization',
      authorizationEffTime: 'AuthorizationEffTime',
      authorizationLetter: 'AuthorizationLetter',
      authorizationLetterAuditPass: 'AuthorizationLetterAuditPass',
      authorizationLetterId: 'AuthorizationLetterId',
      authorizationLetterName: 'AuthorizationLetterName',
      authorizationLetterState: 'AuthorizationLetterState',
      authorizationLetterStatus: 'AuthorizationLetterStatus',
      authorizationSignScope: 'AuthorizationSignScope',
      effectSceneType: 'EffectSceneType',
      enableAuthorizationLetter: 'EnableAuthorizationLetter',
      extendMessage: 'ExtendMessage',
      fileIds: 'FileIds',
      fileUrlList: 'FileUrlList',
      from: 'From',
      gmtCreateStr: 'GmtCreateStr',
      id: 'Id',
      isAuthorizationLetterOCRComplete: 'IsAuthorizationLetterOCRComplete',
      isAuthorizationLetterOCRDiff: 'IsAuthorizationLetterOCRDiff',
      isSignScopeOCRDiff: 'IsSignScopeOCRDiff',
      list: 'List',
      needAuthorized: 'NeedAuthorized',
      openTag: 'OpenTag',
      orderId: 'OrderId',
      organizationCode: 'OrganizationCode',
      ossKeys: 'OssKeys',
      proxyAuthorization: 'ProxyAuthorization',
      remark: 'Remark',
      requestId: 'RequestId',
      sceneType: 'SceneType',
      serviceType: 'ServiceType',
      signCode: 'SignCode',
      signName: 'SignName',
      signScopeOCR: 'SignScopeOCR',
      signUpgrade: 'SignUpgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      applicationScene: QuerySmsSignDetailBySignIdNewResponseBodyApplicationScene,
      auditInfo: 'string',
      auditRemarkInfo: 'string',
      auditState: 'string',
      authorization: 'string',
      authorizationEffTime: 'string',
      authorizationLetter: 'string',
      authorizationLetterAuditPass: 'boolean',
      authorizationLetterId: 'string',
      authorizationLetterName: 'string',
      authorizationLetterState: 'string',
      authorizationLetterStatus: 'string',
      authorizationSignScope: 'string',
      effectSceneType: 'number',
      enableAuthorizationLetter: 'boolean',
      extendMessage: 'string',
      fileIds: { 'type': 'array', 'itemType': 'number' },
      fileUrlList: { 'type': 'array', 'itemType': 'string' },
      from: 'string',
      gmtCreateStr: 'string',
      id: 'string',
      isAuthorizationLetterOCRComplete: 'boolean',
      isAuthorizationLetterOCRDiff: 'boolean',
      isSignScopeOCRDiff: 'boolean',
      list: { 'type': 'array', 'itemType': QuerySmsSignDetailBySignIdNewResponseBodyList },
      needAuthorized: 'boolean',
      openTag: 'boolean',
      orderId: 'string',
      organizationCode: 'string',
      ossKeys: { 'type': 'array', 'itemType': 'string' },
      proxyAuthorization: 'string',
      remark: 'string',
      requestId: 'string',
      sceneType: 'number',
      serviceType: 'number',
      signCode: 'string',
      signName: 'string',
      signScopeOCR: 'string',
      signUpgrade: 'string',
    };
  }

  validate() {
    if(this.applicationScene && typeof (this.applicationScene as any).validate === 'function') {
      (this.applicationScene as any).validate();
    }
    if(Array.isArray(this.fileIds)) {
      $dara.Model.validateArray(this.fileIds);
    }
    if(Array.isArray(this.fileUrlList)) {
      $dara.Model.validateArray(this.fileUrlList);
    }
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(Array.isArray(this.ossKeys)) {
      $dara.Model.validateArray(this.ossKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

