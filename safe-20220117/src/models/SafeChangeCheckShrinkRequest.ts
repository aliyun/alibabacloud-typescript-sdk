// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SafeChangeCheckShrinkRequestApproveFlowParam } from "./SafeChangeCheckShrinkRequestApproveFlowParam";
import { SafeChangeCheckShrinkRequestBgCustomTemplateExtraDTO } from "./SafeChangeCheckShrinkRequestBgCustomTemplateExtraDto";
import { SafeChangeCheckShrinkRequestBlockInfos } from "./SafeChangeCheckShrinkRequestBlockInfos";
import { SafeChangeCheckShrinkRequestCallBackInfo } from "./SafeChangeCheckShrinkRequestCallBackInfo";
import { SafeChangeCheckShrinkRequestChangeTimes } from "./SafeChangeCheckShrinkRequestChangeTimes";
import { SafeChangeCheckShrinkRequestDamagedChangeNotices } from "./SafeChangeCheckShrinkRequestDamagedChangeNotices";
import { SafeChangeCheckShrinkRequestInfluenceInfo } from "./SafeChangeCheckShrinkRequestInfluenceInfo";
import { SafeChangeCheckShrinkRequestInstance } from "./SafeChangeCheckShrinkRequestInstance";
import { SafeChangeCheckShrinkRequestProduct } from "./SafeChangeCheckShrinkRequestProduct";
import { SafeChangeCheckShrinkRequestReleasePackageInfos } from "./SafeChangeCheckShrinkRequestReleasePackageInfos";


export class SafeChangeCheckShrinkRequest extends $dara.Model {
  affectCustomer?: string;
  approveFlowParam?: SafeChangeCheckShrinkRequestApproveFlowParam;
  authKey?: string;
  authSign?: string;
  bgCustomTemplateExtraDTO?: SafeChangeCheckShrinkRequestBgCustomTemplateExtraDTO;
  blockInfos?: SafeChangeCheckShrinkRequestBlockInfos[];
  callBackInfo?: SafeChangeCheckShrinkRequestCallBackInfo;
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
  changeTimes?: SafeChangeCheckShrinkRequestChangeTimes[];
  changeTitle?: string;
  changeValidation?: string;
  checker?: string[];
  creatorEmpId?: string;
  damagedChangeNotices?: SafeChangeCheckShrinkRequestDamagedChangeNotices[];
  executorEmpId?: string;
  extraInfo?: string;
  follower?: string[];
  grayStatus?: string;
  harmChangeNoticeEnum?: string;
  harmNoticeCombineParamShrink?: string;
  incidence?: string;
  influenceInfo?: SafeChangeCheckShrinkRequestInfluenceInfo;
  instance?: SafeChangeCheckShrinkRequestInstance;
  needModifyDoc?: string;
  operateEmpNo?: string;
  product?: SafeChangeCheckShrinkRequestProduct[];
  releasePackageInfos?: SafeChangeCheckShrinkRequestReleasePackageInfos[];
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
      checker: 'Checker',
      creatorEmpId: 'CreatorEmpId',
      damagedChangeNotices: 'DamagedChangeNotices',
      executorEmpId: 'ExecutorEmpId',
      extraInfo: 'ExtraInfo',
      follower: 'Follower',
      grayStatus: 'GrayStatus',
      harmChangeNoticeEnum: 'HarmChangeNoticeEnum',
      harmNoticeCombineParamShrink: 'HarmNoticeCombineParam',
      incidence: 'Incidence',
      influenceInfo: 'InfluenceInfo',
      instance: 'Instance',
      needModifyDoc: 'NeedModifyDoc',
      operateEmpNo: 'OperateEmpNo',
      product: 'Product',
      releasePackageInfos: 'ReleasePackageInfos',
      reqTimestamp: 'ReqTimestamp',
      reuseSourceOrderId: 'ReuseSourceOrderId',
      riskLevel: 'RiskLevel',
      rollback: 'Rollback',
      sourceName: 'SourceName',
      sourceOrderId: 'SourceOrderId',
      sourceUrl: 'SourceUrl',
      whiteType: 'whiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectCustomer: 'string',
      approveFlowParam: SafeChangeCheckShrinkRequestApproveFlowParam,
      authKey: 'string',
      authSign: 'string',
      bgCustomTemplateExtraDTO: SafeChangeCheckShrinkRequestBgCustomTemplateExtraDTO,
      blockInfos: { 'type': 'array', 'itemType': SafeChangeCheckShrinkRequestBlockInfos },
      callBackInfo: SafeChangeCheckShrinkRequestCallBackInfo,
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
      changeTimes: { 'type': 'array', 'itemType': SafeChangeCheckShrinkRequestChangeTimes },
      changeTitle: 'string',
      changeValidation: 'string',
      checker: { 'type': 'array', 'itemType': 'string' },
      creatorEmpId: 'string',
      damagedChangeNotices: { 'type': 'array', 'itemType': SafeChangeCheckShrinkRequestDamagedChangeNotices },
      executorEmpId: 'string',
      extraInfo: 'string',
      follower: { 'type': 'array', 'itemType': 'string' },
      grayStatus: 'string',
      harmChangeNoticeEnum: 'string',
      harmNoticeCombineParamShrink: 'string',
      incidence: 'string',
      influenceInfo: SafeChangeCheckShrinkRequestInfluenceInfo,
      instance: SafeChangeCheckShrinkRequestInstance,
      needModifyDoc: 'string',
      operateEmpNo: 'string',
      product: { 'type': 'array', 'itemType': SafeChangeCheckShrinkRequestProduct },
      releasePackageInfos: { 'type': 'array', 'itemType': SafeChangeCheckShrinkRequestReleasePackageInfos },
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
    if(Array.isArray(this.checker)) {
      $dara.Model.validateArray(this.checker);
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

