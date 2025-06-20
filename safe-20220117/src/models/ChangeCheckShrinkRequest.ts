// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeCheckShrinkRequestApproveFlowParam } from "./ChangeCheckShrinkRequestApproveFlowParam";
import { ChangeCheckShrinkRequestBgCustomTemplateExtraDTO } from "./ChangeCheckShrinkRequestBgCustomTemplateExtraDto";
import { ChangeCheckShrinkRequestBlockInfos } from "./ChangeCheckShrinkRequestBlockInfos";
import { ChangeCheckShrinkRequestCallBackInfo } from "./ChangeCheckShrinkRequestCallBackInfo";
import { ChangeCheckShrinkRequestChangeTimes } from "./ChangeCheckShrinkRequestChangeTimes";
import { ChangeCheckShrinkRequestInfluenceInfo } from "./ChangeCheckShrinkRequestInfluenceInfo";
import { ChangeCheckShrinkRequestInstance } from "./ChangeCheckShrinkRequestInstance";
import { ChangeCheckShrinkRequestProduct } from "./ChangeCheckShrinkRequestProduct";
import { ChangeCheckShrinkRequestReleasePackageInfos } from "./ChangeCheckShrinkRequestReleasePackageInfos";


export class ChangeCheckShrinkRequest extends $dara.Model {
  affectCustomer?: string;
  approveFlowParam?: ChangeCheckShrinkRequestApproveFlowParam;
  authKey?: string;
  authSign?: string;
  bgCustomTemplateExtraDTO?: ChangeCheckShrinkRequestBgCustomTemplateExtraDTO;
  bgVid?: string;
  blockInfos?: ChangeCheckShrinkRequestBlockInfos[];
  callBackInfo?: ChangeCheckShrinkRequestCallBackInfo;
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
  changeTimes?: ChangeCheckShrinkRequestChangeTimes[];
  changeTitle?: string;
  changeValidation?: string;
  creatorEmpId?: string;
  damagedChangeNoticesShrink?: string;
  executorEmpId?: string;
  extraInfo?: string;
  follower?: string[];
  grayStatus?: string;
  harmChangeNoticeEnum?: string;
  incidence?: string;
  influenceInfo?: ChangeCheckShrinkRequestInfluenceInfo;
  instance?: ChangeCheckShrinkRequestInstance;
  needModifyDoc?: string;
  product?: ChangeCheckShrinkRequestProduct[];
  releasePackageInfos?: ChangeCheckShrinkRequestReleasePackageInfos[];
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
      damagedChangeNoticesShrink: 'DamagedChangeNotices',
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
      approveFlowParam: ChangeCheckShrinkRequestApproveFlowParam,
      authKey: 'string',
      authSign: 'string',
      bgCustomTemplateExtraDTO: ChangeCheckShrinkRequestBgCustomTemplateExtraDTO,
      bgVid: 'string',
      blockInfos: { 'type': 'array', 'itemType': ChangeCheckShrinkRequestBlockInfos },
      callBackInfo: ChangeCheckShrinkRequestCallBackInfo,
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
      changeTimes: { 'type': 'array', 'itemType': ChangeCheckShrinkRequestChangeTimes },
      changeTitle: 'string',
      changeValidation: 'string',
      creatorEmpId: 'string',
      damagedChangeNoticesShrink: 'string',
      executorEmpId: 'string',
      extraInfo: 'string',
      follower: { 'type': 'array', 'itemType': 'string' },
      grayStatus: 'string',
      harmChangeNoticeEnum: 'string',
      incidence: 'string',
      influenceInfo: ChangeCheckShrinkRequestInfluenceInfo,
      instance: ChangeCheckShrinkRequestInstance,
      needModifyDoc: 'string',
      product: { 'type': 'array', 'itemType': ChangeCheckShrinkRequestProduct },
      releasePackageInfos: { 'type': 'array', 'itemType': ChangeCheckShrinkRequestReleasePackageInfos },
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

