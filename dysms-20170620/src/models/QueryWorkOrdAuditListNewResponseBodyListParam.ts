// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryWorkOrdAuditListNewResponseBodyListParamAuditRemarkInfo } from "./QueryWorkOrdAuditListNewResponseBodyListParamAuditRemarkInfo";
import { QueryWorkOrdAuditListNewResponseBodyListParamAuditState } from "./QueryWorkOrdAuditListNewResponseBodyListParamAuditState";


export class QueryWorkOrdAuditListNewResponseBodyListParam extends $dara.Model {
  auditInfo?: string;
  auditRemarkInfo?: QueryWorkOrdAuditListNewResponseBodyListParamAuditRemarkInfo;
  auditState?: QueryWorkOrdAuditListNewResponseBodyListParamAuditState;
  businessType?: number;
  extendMessage?: string;
  fileIds?: number[];
  fileUrlList?: string[];
  gmtCreateStr?: string;
  id?: number;
  orderId?: string;
  partnerId?: number;
  remark?: string;
  sceneType?: number;
  signName?: string;
  signType?: number;
  static names(): { [key: string]: string } {
    return {
      auditInfo: 'AuditInfo',
      auditRemarkInfo: 'AuditRemarkInfo',
      auditState: 'AuditState',
      businessType: 'BusinessType',
      extendMessage: 'ExtendMessage',
      fileIds: 'FileIds',
      fileUrlList: 'FileUrlList',
      gmtCreateStr: 'GmtCreateStr',
      id: 'Id',
      orderId: 'OrderId',
      partnerId: 'PartnerId',
      remark: 'Remark',
      sceneType: 'SceneType',
      signName: 'SignName',
      signType: 'SignType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditInfo: 'string',
      auditRemarkInfo: QueryWorkOrdAuditListNewResponseBodyListParamAuditRemarkInfo,
      auditState: QueryWorkOrdAuditListNewResponseBodyListParamAuditState,
      businessType: 'number',
      extendMessage: 'string',
      fileIds: { 'type': 'array', 'itemType': 'number' },
      fileUrlList: { 'type': 'array', 'itemType': 'string' },
      gmtCreateStr: 'string',
      id: 'number',
      orderId: 'string',
      partnerId: 'number',
      remark: 'string',
      sceneType: 'number',
      signName: 'string',
      signType: 'number',
    };
  }

  validate() {
    if(this.auditRemarkInfo && typeof (this.auditRemarkInfo as any).validate === 'function') {
      (this.auditRemarkInfo as any).validate();
    }
    if(this.auditState && typeof (this.auditState as any).validate === 'function') {
      (this.auditState as any).validate();
    }
    if(Array.isArray(this.fileIds)) {
      $dara.Model.validateArray(this.fileIds);
    }
    if(Array.isArray(this.fileUrlList)) {
      $dara.Model.validateArray(this.fileUrlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

