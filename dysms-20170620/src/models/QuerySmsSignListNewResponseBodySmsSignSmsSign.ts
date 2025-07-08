// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsSignListNewResponseBodySmsSignSmsSignFileIds } from "./QuerySmsSignListNewResponseBodySmsSignSmsSignFileIds";
import { QuerySmsSignListNewResponseBodySmsSignSmsSignFileUrlList } from "./QuerySmsSignListNewResponseBodySmsSignSmsSignFileUrlList";
import { QuerySmsSignListNewResponseBodySmsSignSmsSignSignSceneDetailList } from "./QuerySmsSignListNewResponseBodySmsSignSmsSignSignSceneDetailList";


export class QuerySmsSignListNewResponseBodySmsSignSmsSign extends $dara.Model {
  aggregatedRegisterStatus?: number;
  applySource?: string;
  auditInfo?: string;
  auditRemarkInfo?: string;
  auditState?: string;
  authorization?: string;
  authorizationEffTime?: string;
  authorizationLetter?: string;
  authorizationLetterAuditPass?: boolean;
  authorizationLetterId?: number;
  authorizationLetterName?: string;
  authorizationLetterStatus?: string;
  authorizationSignScope?: string;
  canRegister?: boolean;
  enableAuthorizationLetter?: boolean;
  extendMessage?: string;
  fileIds?: QuerySmsSignListNewResponseBodySmsSignSmsSignFileIds;
  fileUrlList?: QuerySmsSignListNewResponseBodySmsSignSmsSignFileUrlList;
  gmtCreateStr?: string;
  id?: string;
  isAuthorizationLetterOCRComplete?: boolean;
  isAuthorizationLetterOCRDiff?: boolean;
  isDefaultSign?: boolean;
  isSignScopeOCRDiff?: boolean;
  mobileRegisterStatus?: number;
  operateDateStr?: string;
  orderCount?: number;
  orderId?: string;
  organizationCode?: string;
  proxyAuthorization?: string;
  qualificationId?: number;
  qualificationName?: string;
  qualificationState?: string;
  qualificationVersion?: number;
  qualificationWorkOrderId?: number;
  registerResult?: number;
  registerTime?: number;
  remark?: string;
  resultReason?: string;
  sceneType?: number;
  serviceType?: number;
  signCode?: string;
  signName?: string;
  signSceneDetailList?: QuerySmsSignListNewResponseBodySmsSignSmsSignSignSceneDetailList;
  signScopeOCR?: string;
  signSource?: string;
  signType?: number;
  telecomRegisterStatus?: number;
  unicomRegisterStatus?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatedRegisterStatus: 'AggregatedRegisterStatus',
      applySource: 'ApplySource',
      auditInfo: 'AuditInfo',
      auditRemarkInfo: 'AuditRemarkInfo',
      auditState: 'AuditState',
      authorization: 'Authorization',
      authorizationEffTime: 'AuthorizationEffTime',
      authorizationLetter: 'AuthorizationLetter',
      authorizationLetterAuditPass: 'AuthorizationLetterAuditPass',
      authorizationLetterId: 'AuthorizationLetterId',
      authorizationLetterName: 'AuthorizationLetterName',
      authorizationLetterStatus: 'AuthorizationLetterStatus',
      authorizationSignScope: 'AuthorizationSignScope',
      canRegister: 'CanRegister',
      enableAuthorizationLetter: 'EnableAuthorizationLetter',
      extendMessage: 'ExtendMessage',
      fileIds: 'FileIds',
      fileUrlList: 'FileUrlList',
      gmtCreateStr: 'GmtCreateStr',
      id: 'Id',
      isAuthorizationLetterOCRComplete: 'IsAuthorizationLetterOCRComplete',
      isAuthorizationLetterOCRDiff: 'IsAuthorizationLetterOCRDiff',
      isDefaultSign: 'IsDefaultSign',
      isSignScopeOCRDiff: 'IsSignScopeOCRDiff',
      mobileRegisterStatus: 'MobileRegisterStatus',
      operateDateStr: 'OperateDateStr',
      orderCount: 'OrderCount',
      orderId: 'OrderId',
      organizationCode: 'OrganizationCode',
      proxyAuthorization: 'ProxyAuthorization',
      qualificationId: 'QualificationId',
      qualificationName: 'QualificationName',
      qualificationState: 'QualificationState',
      qualificationVersion: 'QualificationVersion',
      qualificationWorkOrderId: 'QualificationWorkOrderId',
      registerResult: 'RegisterResult',
      registerTime: 'RegisterTime',
      remark: 'Remark',
      resultReason: 'ResultReason',
      sceneType: 'SceneType',
      serviceType: 'ServiceType',
      signCode: 'SignCode',
      signName: 'SignName',
      signSceneDetailList: 'SignSceneDetailList',
      signScopeOCR: 'SignScopeOCR',
      signSource: 'SignSource',
      signType: 'SignType',
      telecomRegisterStatus: 'TelecomRegisterStatus',
      unicomRegisterStatus: 'UnicomRegisterStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatedRegisterStatus: 'number',
      applySource: 'string',
      auditInfo: 'string',
      auditRemarkInfo: 'string',
      auditState: 'string',
      authorization: 'string',
      authorizationEffTime: 'string',
      authorizationLetter: 'string',
      authorizationLetterAuditPass: 'boolean',
      authorizationLetterId: 'number',
      authorizationLetterName: 'string',
      authorizationLetterStatus: 'string',
      authorizationSignScope: 'string',
      canRegister: 'boolean',
      enableAuthorizationLetter: 'boolean',
      extendMessage: 'string',
      fileIds: QuerySmsSignListNewResponseBodySmsSignSmsSignFileIds,
      fileUrlList: QuerySmsSignListNewResponseBodySmsSignSmsSignFileUrlList,
      gmtCreateStr: 'string',
      id: 'string',
      isAuthorizationLetterOCRComplete: 'boolean',
      isAuthorizationLetterOCRDiff: 'boolean',
      isDefaultSign: 'boolean',
      isSignScopeOCRDiff: 'boolean',
      mobileRegisterStatus: 'number',
      operateDateStr: 'string',
      orderCount: 'number',
      orderId: 'string',
      organizationCode: 'string',
      proxyAuthorization: 'string',
      qualificationId: 'number',
      qualificationName: 'string',
      qualificationState: 'string',
      qualificationVersion: 'number',
      qualificationWorkOrderId: 'number',
      registerResult: 'number',
      registerTime: 'number',
      remark: 'string',
      resultReason: 'string',
      sceneType: 'number',
      serviceType: 'number',
      signCode: 'string',
      signName: 'string',
      signSceneDetailList: QuerySmsSignListNewResponseBodySmsSignSmsSignSignSceneDetailList,
      signScopeOCR: 'string',
      signSource: 'string',
      signType: 'number',
      telecomRegisterStatus: 'number',
      unicomRegisterStatus: 'number',
    };
  }

  validate() {
    if(this.fileIds && typeof (this.fileIds as any).validate === 'function') {
      (this.fileIds as any).validate();
    }
    if(this.fileUrlList && typeof (this.fileUrlList as any).validate === 'function') {
      (this.fileUrlList as any).validate();
    }
    if(this.signSceneDetailList && typeof (this.signSceneDetailList as any).validate === 'function') {
      (this.signSceneDetailList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

