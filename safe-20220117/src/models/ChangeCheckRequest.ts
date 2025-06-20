// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeCheckRequestApproveFlowParam } from "./ChangeCheckRequestApproveFlowParam";
import { ChangeCheckRequestBgCustomTemplateExtraDTO } from "./ChangeCheckRequestBgCustomTemplateExtraDto";
import { ChangeCheckRequestBlockInfos } from "./ChangeCheckRequestBlockInfos";
import { ChangeCheckRequestCallBackInfo } from "./ChangeCheckRequestCallBackInfo";
import { ChangeCheckRequestChangeTimes } from "./ChangeCheckRequestChangeTimes";
import { ChangeCheckRequestDamagedChangeNotices } from "./ChangeCheckRequestDamagedChangeNotices";
import { ChangeCheckRequestInfluenceInfo } from "./ChangeCheckRequestInfluenceInfo";
import { ChangeCheckRequestInstance } from "./ChangeCheckRequestInstance";
import { ChangeCheckRequestProduct } from "./ChangeCheckRequestProduct";
import { ChangeCheckRequestReleasePackageInfos } from "./ChangeCheckRequestReleasePackageInfos";


export class ChangeCheckRequest extends $dara.Model {
  affectCustomer?: string;
  approveFlowParam?: ChangeCheckRequestApproveFlowParam;
  authKey?: string;
  authSign?: string;
  bgCustomTemplateExtraDTO?: ChangeCheckRequestBgCustomTemplateExtraDTO;
  bgVid?: string;
  blockInfos?: ChangeCheckRequestBlockInfos[];
  callBackInfo?: ChangeCheckRequestCallBackInfo;
  changeDataType?: string;
  changeDesc?: string;
  changeEndTime?: number;
  changeEnv?: string;
  changeItems?: string;
  changeObject?: string;
  changeOptSubType?: string;
  changeOptType?: string;
  changeReason?: string;
  changeRmarks?: string;
  changeSchemes?: string;
  changeStartTime?: number;
  changeSubTypeDesc?: string;
  changeSystem?: string;
  changeTimes?: ChangeCheckRequestChangeTimes[];
  changeTitle?: string;
  changeValidation?: string;
  creatorEmpId?: string;
  damagedChangeNotices?: ChangeCheckRequestDamagedChangeNotices[];
  executorEmpId?: string;
  extraInfo?: string;
  follower?: string[];
  grayStatus?: string;
  harmChangeNoticeEnum?: string;
  incidence?: string;
  influenceInfo?: ChangeCheckRequestInfluenceInfo;
  instance?: ChangeCheckRequestInstance;
  needModifyDoc?: string;
  product?: ChangeCheckRequestProduct[];
  releasePackageInfos?: ChangeCheckRequestReleasePackageInfos[];
  reqTimestamp?: number;
  reuseSourceOrderId?: string;
  riskLevel?: string;
  rollback?: string;
  sourceName?: string;
  sourceOrderId?: string;
  sourceUrl?: string;
  whiteType?: number;
  static names(): { [key: string]: string } {
    return {
      affectCustomer: 'AffectCustomer',
      approveFlowParam: 'ApproveFlowParam',
      authKey: 'AuthKey',
      authSign: 'AuthSign',
      bgCustomTemplateExtraDTO: 'BgCustomTemplateExtraDTO',
      bgVid: 'BgVid',
      blockInfos: 'BlockInfos',
      callBackInfo: 'CallBackInfo',
      changeDataType: 'ChangeDataType',
      changeDesc: 'ChangeDesc',
      changeEndTime: 'ChangeEndTime',
      changeEnv: 'ChangeEnv',
      changeItems: 'ChangeItems',
      changeObject: 'ChangeObject',
      changeOptSubType: 'ChangeOptSubType',
      changeOptType: 'ChangeOptType',
      changeReason: 'ChangeReason',
      changeRmarks: 'ChangeRmarks',
      changeSchemes: 'ChangeSchemes',
      changeStartTime: 'ChangeStartTime',
      changeSubTypeDesc: 'ChangeSubTypeDesc',
      changeSystem: 'ChangeSystem',
      changeTimes: 'ChangeTimes',
      changeTitle: 'ChangeTitle',
      changeValidation: 'ChangeValidation',
      creatorEmpId: 'CreatorEmpId',
      damagedChangeNotices: 'DamagedChangeNotices',
      executorEmpId: 'ExecutorEmpId',
      extraInfo: 'ExtraInfo',
      follower: 'Follower',
      grayStatus: 'GrayStatus',
      harmChangeNoticeEnum: 'HarmChangeNoticeEnum',
      incidence: 'Incidence',
      influenceInfo: 'InfluenceInfo',
      instance: 'Instance',
      needModifyDoc: 'NeedModifyDoc',
      product: 'Product',
      releasePackageInfos: 'ReleasePackageInfos',
      reqTimestamp: 'ReqTimestamp',
      reuseSourceOrderId: 'ReuseSourceOrderId',
      riskLevel: 'RiskLevel',
      rollback: 'Rollback',
      sourceName: 'SourceName',
      sourceOrderId: 'SourceOrderId',
      sourceUrl: 'SourceUrl',
      whiteType: 'WhiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectCustomer: 'string',
      approveFlowParam: ChangeCheckRequestApproveFlowParam,
      authKey: 'string',
      authSign: 'string',
      bgCustomTemplateExtraDTO: ChangeCheckRequestBgCustomTemplateExtraDTO,
      bgVid: 'string',
      blockInfos: { 'type': 'array', 'itemType': ChangeCheckRequestBlockInfos },
      callBackInfo: ChangeCheckRequestCallBackInfo,
      changeDataType: 'string',
      changeDesc: 'string',
      changeEndTime: 'number',
      changeEnv: 'string',
      changeItems: 'string',
      changeObject: 'string',
      changeOptSubType: 'string',
      changeOptType: 'string',
      changeReason: 'string',
      changeRmarks: 'string',
      changeSchemes: 'string',
      changeStartTime: 'number',
      changeSubTypeDesc: 'string',
      changeSystem: 'string',
      changeTimes: { 'type': 'array', 'itemType': ChangeCheckRequestChangeTimes },
      changeTitle: 'string',
      changeValidation: 'string',
      creatorEmpId: 'string',
      damagedChangeNotices: { 'type': 'array', 'itemType': ChangeCheckRequestDamagedChangeNotices },
      executorEmpId: 'string',
      extraInfo: 'string',
      follower: { 'type': 'array', 'itemType': 'string' },
      grayStatus: 'string',
      harmChangeNoticeEnum: 'string',
      incidence: 'string',
      influenceInfo: ChangeCheckRequestInfluenceInfo,
      instance: ChangeCheckRequestInstance,
      needModifyDoc: 'string',
      product: { 'type': 'array', 'itemType': ChangeCheckRequestProduct },
      releasePackageInfos: { 'type': 'array', 'itemType': ChangeCheckRequestReleasePackageInfos },
      reqTimestamp: 'number',
      reuseSourceOrderId: 'string',
      riskLevel: 'string',
      rollback: 'string',
      sourceName: 'string',
      sourceOrderId: 'string',
      sourceUrl: 'string',
      whiteType: 'number',
    };
  }

  validate() {
    if(this.approveFlowParam && typeof (this.approveFlowParam as any).validate === 'function') {
      (this.approveFlowParam as any).validate();
    }
    if(this.bgCustomTemplateExtraDTO && typeof (this.bgCustomTemplateExtraDTO as any).validate === 'function') {
      (this.bgCustomTemplateExtraDTO as any).validate();
    }
    if(Array.isArray(this.blockInfos)) {
      $dara.Model.validateArray(this.blockInfos);
    }
    if(this.callBackInfo && typeof (this.callBackInfo as any).validate === 'function') {
      (this.callBackInfo as any).validate();
    }
    if(Array.isArray(this.changeTimes)) {
      $dara.Model.validateArray(this.changeTimes);
    }
    if(Array.isArray(this.damagedChangeNotices)) {
      $dara.Model.validateArray(this.damagedChangeNotices);
    }
    if(Array.isArray(this.follower)) {
      $dara.Model.validateArray(this.follower);
    }
    if(this.influenceInfo && typeof (this.influenceInfo as any).validate === 'function') {
      (this.influenceInfo as any).validate();
    }
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    if(Array.isArray(this.product)) {
      $dara.Model.validateArray(this.product);
    }
    if(Array.isArray(this.releasePackageInfos)) {
      $dara.Model.validateArray(this.releasePackageInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

