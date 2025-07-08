// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsSignLastRangeNewResponseBodyListSmsSignFileIds } from "./QuerySmsSignLastRangeNewResponseBodyListSmsSignFileIds";
import { QuerySmsSignLastRangeNewResponseBodyListSmsSignFileUrlList } from "./QuerySmsSignLastRangeNewResponseBodyListSmsSignFileUrlList";
import { QuerySmsSignLastRangeNewResponseBodyListSmsSignSignSceneDetailList } from "./QuerySmsSignLastRangeNewResponseBodyListSmsSignSignSceneDetailList";


export class QuerySmsSignLastRangeNewResponseBodyListSmsSign extends $dara.Model {
  auditInfo?: string;
  auditRemarkInfo?: string;
  auditState?: string;
  extendMessage?: string;
  fileIds?: QuerySmsSignLastRangeNewResponseBodyListSmsSignFileIds;
  fileUrlList?: QuerySmsSignLastRangeNewResponseBodyListSmsSignFileUrlList;
  gmtCreateStr?: string;
  id?: string;
  isDefaultSign?: boolean;
  operateDateStr?: string;
  orderId?: string;
  remark?: string;
  sceneType?: number;
  serviceType?: number;
  signName?: string;
  signSceneDetailList?: QuerySmsSignLastRangeNewResponseBodyListSmsSignSignSceneDetailList;
  signType?: number;
  signUsageName?: string;
  static names(): { [key: string]: string } {
    return {
      auditInfo: 'AuditInfo',
      auditRemarkInfo: 'AuditRemarkInfo',
      auditState: 'AuditState',
      extendMessage: 'ExtendMessage',
      fileIds: 'FileIds',
      fileUrlList: 'FileUrlList',
      gmtCreateStr: 'GmtCreateStr',
      id: 'Id',
      isDefaultSign: 'IsDefaultSign',
      operateDateStr: 'OperateDateStr',
      orderId: 'OrderId',
      remark: 'Remark',
      sceneType: 'SceneType',
      serviceType: 'ServiceType',
      signName: 'SignName',
      signSceneDetailList: 'SignSceneDetailList',
      signType: 'SignType',
      signUsageName: 'SignUsageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditInfo: 'string',
      auditRemarkInfo: 'string',
      auditState: 'string',
      extendMessage: 'string',
      fileIds: QuerySmsSignLastRangeNewResponseBodyListSmsSignFileIds,
      fileUrlList: QuerySmsSignLastRangeNewResponseBodyListSmsSignFileUrlList,
      gmtCreateStr: 'string',
      id: 'string',
      isDefaultSign: 'boolean',
      operateDateStr: 'string',
      orderId: 'string',
      remark: 'string',
      sceneType: 'number',
      serviceType: 'number',
      signName: 'string',
      signSceneDetailList: QuerySmsSignLastRangeNewResponseBodyListSmsSignSignSceneDetailList,
      signType: 'number',
      signUsageName: 'string',
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

