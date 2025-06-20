// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("safe", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 取消封网接口
   * 
   * @param request - CancelBlockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelBlockResponse
   */
  async cancelBlockWithOptions(request: $_model.CancelBlockRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelBlockResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.blockId)) {
      body["BlockId"] = request.blockId;
    }

    if (!$dara.isNull(request.cancelBLockDesc)) {
      body["CancelBLockDesc"] = request.cancelBLockDesc;
    }

    if (!$dara.isNull(request.createEmpId)) {
      body["CreateEmpId"] = request.createEmpId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelBlock",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelBlockResponse>(await this.callApi(params, req, runtime), new $_model.CancelBlockResponse({}));
  }

  /**
   * 取消封网接口
   * 
   * @param request - CancelBlockRequest
   * @returns CancelBlockResponse
   */
  async cancelBlock(request: $_model.CancelBlockRequest): Promise<$_model.CancelBlockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelBlockWithOptions(request, runtime);
  }

  /**
   * 变更取消
   * 
   * @param request - ChangeCancelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeCancelResponse
   */
  async changeCancelWithOptions(request: $_model.ChangeCancelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeCancelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      query["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      query["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      query["SourceOrderId"] = request.sourceOrderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeCancel",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeCancelResponse>(await this.callApi(params, req, runtime), new $_model.ChangeCancelResponse({}));
  }

  /**
   * 变更取消
   * 
   * @param request - ChangeCancelRequest
   * @returns ChangeCancelResponse
   */
  async changeCancel(request: $_model.ChangeCancelRequest): Promise<$_model.ChangeCancelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeCancelWithOptions(request, runtime);
  }

  /**
   * 安全变更check
   * 
   * @param tmpReq - ChangeCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeCheckResponse
   */
  async changeCheckWithOptions(tmpReq: $_model.ChangeCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeCheckResponse> {
    tmpReq.validate();
    let request = new $_model.ChangeCheckShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.damagedChangeNotices)) {
      request.damagedChangeNoticesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.damagedChangeNotices, "DamagedChangeNotices", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.affectCustomer)) {
      body["AffectCustomer"] = request.affectCustomer;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.approveFlowParam)) {
      bodyFlat["ApproveFlowParam"] = request.approveFlowParam;
    }

    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.bgCustomTemplateExtraDTO)) {
      bodyFlat["BgCustomTemplateExtraDTO"] = request.bgCustomTemplateExtraDTO;
    }

    if (!$dara.isNull(request.bgVid)) {
      body["BgVid"] = request.bgVid;
    }

    if (!$dara.isNull(request.blockInfos)) {
      body["BlockInfos"] = request.blockInfos;
    }

    if (!$dara.isNull(request.callBackInfo)) {
      bodyFlat["CallBackInfo"] = request.callBackInfo;
    }

    if (!$dara.isNull(request.changeDataType)) {
      body["ChangeDataType"] = request.changeDataType;
    }

    if (!$dara.isNull(request.changeDesc)) {
      body["ChangeDesc"] = request.changeDesc;
    }

    if (!$dara.isNull(request.changeEndTime)) {
      body["ChangeEndTime"] = request.changeEndTime;
    }

    if (!$dara.isNull(request.changeEnv)) {
      body["ChangeEnv"] = request.changeEnv;
    }

    if (!$dara.isNull(request.changeItems)) {
      body["ChangeItems"] = request.changeItems;
    }

    if (!$dara.isNull(request.changeObject)) {
      body["ChangeObject"] = request.changeObject;
    }

    if (!$dara.isNull(request.changeOptSubType)) {
      body["ChangeOptSubType"] = request.changeOptSubType;
    }

    if (!$dara.isNull(request.changeOptType)) {
      body["ChangeOptType"] = request.changeOptType;
    }

    if (!$dara.isNull(request.changeReason)) {
      body["ChangeReason"] = request.changeReason;
    }

    if (!$dara.isNull(request.changeRmarks)) {
      body["ChangeRmarks"] = request.changeRmarks;
    }

    if (!$dara.isNull(request.changeSchemes)) {
      body["ChangeSchemes"] = request.changeSchemes;
    }

    if (!$dara.isNull(request.changeStartTime)) {
      body["ChangeStartTime"] = request.changeStartTime;
    }

    if (!$dara.isNull(request.changeSubTypeDesc)) {
      body["ChangeSubTypeDesc"] = request.changeSubTypeDesc;
    }

    if (!$dara.isNull(request.changeSystem)) {
      body["ChangeSystem"] = request.changeSystem;
    }

    if (!$dara.isNull(request.changeTimes)) {
      body["ChangeTimes"] = request.changeTimes;
    }

    if (!$dara.isNull(request.changeTitle)) {
      body["ChangeTitle"] = request.changeTitle;
    }

    if (!$dara.isNull(request.changeValidation)) {
      body["ChangeValidation"] = request.changeValidation;
    }

    if (!$dara.isNull(request.creatorEmpId)) {
      body["CreatorEmpId"] = request.creatorEmpId;
    }

    if (!$dara.isNull(request.damagedChangeNoticesShrink)) {
      body["DamagedChangeNotices"] = request.damagedChangeNoticesShrink;
    }

    if (!$dara.isNull(request.executorEmpId)) {
      body["ExecutorEmpId"] = request.executorEmpId;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.follower)) {
      body["Follower"] = request.follower;
    }

    if (!$dara.isNull(request.grayStatus)) {
      body["GrayStatus"] = request.grayStatus;
    }

    if (!$dara.isNull(request.harmChangeNoticeEnum)) {
      body["HarmChangeNoticeEnum"] = request.harmChangeNoticeEnum;
    }

    if (!$dara.isNull(request.incidence)) {
      body["Incidence"] = request.incidence;
    }

    if (!$dara.isNull(request.influenceInfo)) {
      bodyFlat["InfluenceInfo"] = request.influenceInfo;
    }

    if (!$dara.isNull(request.instance)) {
      bodyFlat["Instance"] = request.instance;
    }

    if (!$dara.isNull(request.needModifyDoc)) {
      body["NeedModifyDoc"] = request.needModifyDoc;
    }

    if (!$dara.isNull(request.product)) {
      body["Product"] = request.product;
    }

    if (!$dara.isNull(request.releasePackageInfos)) {
      body["ReleasePackageInfos"] = request.releasePackageInfos;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.reuseSourceOrderId)) {
      body["ReuseSourceOrderId"] = request.reuseSourceOrderId;
    }

    if (!$dara.isNull(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.rollback)) {
      body["Rollback"] = request.rollback;
    }

    if (!$dara.isNull(request.sourceName)) {
      body["SourceName"] = request.sourceName;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      body["SourceOrderId"] = request.sourceOrderId;
    }

    if (!$dara.isNull(request.sourceUrl)) {
      body["SourceUrl"] = request.sourceUrl;
    }

    if (!$dara.isNull(request.whiteType)) {
      body["WhiteType"] = request.whiteType;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeCheck",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeCheckResponse>(await this.callApi(params, req, runtime), new $_model.ChangeCheckResponse({}));
  }

  /**
   * 安全变更check
   * 
   * @param request - ChangeCheckRequest
   * @returns ChangeCheckResponse
   */
  async changeCheck(request: $_model.ChangeCheckRequest): Promise<$_model.ChangeCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeCheckWithOptions(request, runtime);
  }

  /**
   * 变更执行end
   * 
   * @param request - ChangeEndRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeEndResponse
   */
  async changeEndWithOptions(request: $_model.ChangeEndRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeEndResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      query["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.changeEndTime)) {
      query["ChangeEndTime"] = request.changeEndTime;
    }

    if (!$dara.isNull(request.changeResult)) {
      query["ChangeResult"] = request.changeResult;
    }

    if (!$dara.isNull(request.curBatchNo)) {
      query["CurBatchNo"] = request.curBatchNo;
    }

    if (!$dara.isNull(request.executorEmpId)) {
      query["ExecutorEmpId"] = request.executorEmpId;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      query["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      query["SourceOrderId"] = request.sourceOrderId;
    }

    if (!$dara.isNull(request.totalBatchNo)) {
      query["TotalBatchNo"] = request.totalBatchNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeEnd",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeEndResponse>(await this.callApi(params, req, runtime), new $_model.ChangeEndResponse({}));
  }

  /**
   * 变更执行end
   * 
   * @param request - ChangeEndRequest
   * @returns ChangeEndResponse
   */
  async changeEnd(request: $_model.ChangeEndRequest): Promise<$_model.ChangeEndResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeEndWithOptions(request, runtime);
  }

  /**
   * 变更执行start
   * 
   * @param request - ChangeStartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeStartResponse
   */
  async changeStartWithOptions(request: $_model.ChangeStartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeStartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      query["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.changeEndTime)) {
      query["ChangeEndTime"] = request.changeEndTime;
    }

    if (!$dara.isNull(request.changeObject)) {
      query["ChangeObject"] = request.changeObject;
    }

    if (!$dara.isNull(request.changeOptType)) {
      query["ChangeOptType"] = request.changeOptType;
    }

    if (!$dara.isNull(request.changeStartTime)) {
      query["ChangeStartTime"] = request.changeStartTime;
    }

    if (!$dara.isNull(request.changeTitle)) {
      query["ChangeTitle"] = request.changeTitle;
    }

    if (!$dara.isNull(request.creatorEmpId)) {
      query["CreatorEmpId"] = request.creatorEmpId;
    }

    if (!$dara.isNull(request.curBatchNo)) {
      query["CurBatchNo"] = request.curBatchNo;
    }

    if (!$dara.isNull(request.executorEmpId)) {
      query["ExecutorEmpId"] = request.executorEmpId;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      query["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      query["SourceOrderId"] = request.sourceOrderId;
    }

    if (!$dara.isNull(request.totalBatchNo)) {
      query["TotalBatchNo"] = request.totalBatchNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeStart",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeStartResponse>(await this.callApi(params, req, runtime), new $_model.ChangeStartResponse({}));
  }

  /**
   * 变更执行start
   * 
   * @param request - ChangeStartRequest
   * @returns ChangeStartResponse
   */
  async changeStart(request: $_model.ChangeStartRequest): Promise<$_model.ChangeStartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeStartWithOptions(request, runtime);
  }

  /**
   * 三方创建封网接口
   * 
   * @param request - CreateBlockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBlockResponse
   */
  async createBlockWithOptions(request: $_model.CreateBlockRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBlockResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.approveStrategyNodes)) {
      bodyFlat["ApproveStrategyNodes"] = request.approveStrategyNodes;
    }

    if (!$dara.isNull(request.blockId)) {
      body["BlockId"] = request.blockId;
    }

    if (!$dara.isNull(request.director)) {
      body["Director"] = request.director;
    }

    if (!$dara.isNull(request.isNeedApprove)) {
      body["IsNeedApprove"] = request.isNeedApprove;
    }

    if (!$dara.isNull(request.isRecall)) {
      body["IsRecall"] = request.isRecall;
    }

    if (!$dara.isNull(request.isTemplate)) {
      body["IsTemplate"] = request.isTemplate;
    }

    if (!$dara.isNull(request.labelName)) {
      body["LabelName"] = request.labelName;
    }

    if (!$dara.isNull(request.noticeDesc)) {
      body["NoticeDesc"] = request.noticeDesc;
    }

    if (!$dara.isNull(request.noticeEnclosureInfos)) {
      bodyFlat["NoticeEnclosureInfos"] = request.noticeEnclosureInfos;
    }

    if (!$dara.isNull(request.noticeRequestLink)) {
      body["NoticeRequestLink"] = request.noticeRequestLink;
    }

    if (!$dara.isNull(request.noticeType)) {
      body["NoticeType"] = request.noticeType;
    }

    if (!$dara.isNull(request.reason)) {
      body["Reason"] = request.reason;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.scopes)) {
      bodyFlat["Scopes"] = request.scopes;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.versionId)) {
      body["VersionId"] = request.versionId;
    }

    if (!$dara.isNull(request.creatorEmpId)) {
      body["creatorEmpId"] = request.creatorEmpId;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBlock",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBlockResponse>(await this.callApi(params, req, runtime), new $_model.CreateBlockResponse({}));
  }

  /**
   * 三方创建封网接口
   * 
   * @param request - CreateBlockRequest
   * @returns CreateBlockResponse
   */
  async createBlock(request: $_model.CreateBlockRequest): Promise<$_model.CreateBlockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBlockWithOptions(request, runtime);
  }

  /**
   * 创建蚂蚁封网接口
   * 
   * @param tmpReq - CreateMaYiBlockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMaYiBlockResponse
   */
  async createMaYiBlockWithOptions(tmpReq: $_model.CreateMaYiBlockRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMaYiBlockResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMaYiBlockShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.scope)) {
      request.scopeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scope, "Scope", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.blockId)) {
      body["BlockId"] = request.blockId;
    }

    if (!$dara.isNull(request.blockTimes)) {
      body["BlockTimes"] = request.blockTimes;
    }

    if (!$dara.isNull(request.blockType)) {
      body["BlockType"] = request.blockType;
    }

    if (!$dara.isNull(request.creatorEmpId)) {
      body["CreatorEmpId"] = request.creatorEmpId;
    }

    if (!$dara.isNull(request.director)) {
      body["Director"] = request.director;
    }

    if (!$dara.isNull(request.faultVersion)) {
      body["FaultVersion"] = request.faultVersion;
    }

    if (!$dara.isNull(request.information)) {
      body["Information"] = request.information;
    }

    if (!$dara.isNull(request.reason)) {
      body["Reason"] = request.reason;
    }

    if (!$dara.isNull(request.scopeShrink)) {
      body["Scope"] = request.scopeShrink;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMaYiBlock",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMaYiBlockResponse>(await this.callApi(params, req, runtime), new $_model.CreateMaYiBlockResponse({}));
  }

  /**
   * 创建蚂蚁封网接口
   * 
   * @param request - CreateMaYiBlockRequest
   * @returns CreateMaYiBlockResponse
   */
  async createMaYiBlock(request: $_model.CreateMaYiBlockRequest): Promise<$_model.CreateMaYiBlockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMaYiBlockWithOptions(request, runtime);
  }

  /**
   * 创建操作类型
   * 
   * @param request - CreateOperatorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOperatorResponse
   */
  async createOperatorWithOptions(request: $_model.CreateOperatorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOperatorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.bgObject)) {
      body["BgObject"] = request.bgObject;
    }

    if (!$dara.isNull(request.bgSystem)) {
      body["BgSystem"] = request.bgSystem;
    }

    if (!$dara.isNull(request.code)) {
      body["Code"] = request.code;
    }

    if (!$dara.isNull(request.curEmpId)) {
      body["CurEmpId"] = request.curEmpId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.noCheck)) {
      body["NoCheck"] = request.noCheck;
    }

    if (!$dara.isNull(request.noRisk)) {
      body["NoRisk"] = request.noRisk;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOperator",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOperatorResponse>(await this.callApi(params, req, runtime), new $_model.CreateOperatorResponse({}));
  }

  /**
   * 创建操作类型
   * 
   * @param request - CreateOperatorRequest
   * @returns CreateOperatorResponse
   */
  async createOperator(request: $_model.CreateOperatorRequest): Promise<$_model.CreateOperatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOperatorWithOptions(request, runtime);
  }

  /**
   * 变更状态查询
   * 
   * @param request - QueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryResponse
   */
  async queryWithOptions(request: $_model.QueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      query["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.needValidate)) {
      query["NeedValidate"] = request.needValidate;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      query["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      query["SourceOrderId"] = request.sourceOrderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Query",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryResponse>(await this.callApi(params, req, runtime), new $_model.QueryResponse({}));
  }

  /**
   * 变更状态查询
   * 
   * @param request - QueryRequest
   * @returns QueryResponse
   */
  async query(request: $_model.QueryRequest): Promise<$_model.QueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWithOptions(request, runtime);
  }

  /**
   * 查询审批实例信息
   * 
   * @param request - QueryApproveFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryApproveFlowResponse
   */
  async queryApproveFlowWithOptions(request: $_model.QueryApproveFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryApproveFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      query["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      query["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      query["SourceOrderId"] = request.sourceOrderId;
    }

    if (!$dara.isNull(request.stage)) {
      query["Stage"] = request.stage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryApproveFlow",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryApproveFlowResponse>(await this.callApi(params, req, runtime), new $_model.QueryApproveFlowResponse({}));
  }

  /**
   * 查询审批实例信息
   * 
   * @param request - QueryApproveFlowRequest
   * @returns QueryApproveFlowResponse
   */
  async queryApproveFlow(request: $_model.QueryApproveFlowRequest): Promise<$_model.QueryApproveFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryApproveFlowWithOptions(request, runtime);
  }

  /**
   * 查封网事件
   * 
   * @param request - QueryBlockEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBlockEventResponse
   */
  async queryBlockEventWithOptions(request: $_model.QueryBlockEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBlockEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.bgSystemName)) {
      body["BgSystemName"] = request.bgSystemName;
    }

    if (!$dara.isNull(request.blockHarm)) {
      body["BlockHarm"] = request.blockHarm;
    }

    if (!$dara.isNull(request.category)) {
      body["Category"] = request.category;
    }

    if (!$dara.isNull(request.deptNo)) {
      body["DeptNo"] = request.deptNo;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.needRule)) {
      body["NeedRule"] = request.needRule;
    }

    if (!$dara.isNull(request.page)) {
      body["Page"] = request.page;
    }

    if (!$dara.isNull(request.productCodes)) {
      body["ProductCodes"] = request.productCodes;
    }

    if (!$dara.isNull(request.regionReqs)) {
      body["RegionReqs"] = request.regionReqs;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryBlockEvent",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBlockEventResponse>(await this.callApi(params, req, runtime), new $_model.QueryBlockEventResponse({}));
  }

  /**
   * 查封网事件
   * 
   * @param request - QueryBlockEventRequest
   * @returns QueryBlockEventResponse
   */
  async queryBlockEvent(request: $_model.QueryBlockEventRequest): Promise<$_model.QueryBlockEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBlockEventWithOptions(request, runtime);
  }

  /**
   * 变更单详情
   * 
   * @param request - QueryChangeInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryChangeInfoResponse
   */
  async queryChangeInfoWithOptions(request: $_model.QueryChangeInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryChangeInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.az)) {
      body["Az"] = request.az;
    }

    if (!$dara.isNull(request.bgVid)) {
      body["BgVid"] = request.bgVid;
    }

    if (!$dara.isNull(request.buId)) {
      body["BuId"] = request.buId;
    }

    if (!$dara.isNull(request.changeSystem)) {
      body["ChangeSystem"] = request.changeSystem;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.levelTree)) {
      bodyFlat["LevelTree"] = request.levelTree;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.page)) {
      body["Page"] = request.page;
    }

    if (!$dara.isNull(request.product)) {
      body["Product"] = request.product;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      body["SourceOrderId"] = request.sourceOrderId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryChangeInfo",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryChangeInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryChangeInfoResponse({}));
  }

  /**
   * 变更单详情
   * 
   * @param request - QueryChangeInfoRequest
   * @returns QueryChangeInfoResponse
   */
  async queryChangeInfo(request: $_model.QueryChangeInfoRequest): Promise<$_model.QueryChangeInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryChangeInfoWithOptions(request, runtime);
  }

  /**
   * 查询检测详情接口
   * 
   * @param request - QueryCheckInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCheckInfoResponse
   */
  async queryCheckInfoWithOptions(request: $_model.QueryCheckInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCheckInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      body["SourceOrderId"] = request.sourceOrderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCheckInfo",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCheckInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryCheckInfoResponse({}));
  }

  /**
   * 查询检测详情接口
   * 
   * @param request - QueryCheckInfoRequest
   * @returns QueryCheckInfoResponse
   */
  async queryCheckInfo(request: $_model.QueryCheckInfoRequest): Promise<$_model.QueryCheckInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCheckInfoWithOptions(request, runtime);
  }

  /**
   * 查询敏感客户
   * 
   * @param request - QueryCustomerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCustomerResponse
   */
  async queryCustomerWithOptions(request: $_model.QueryCustomerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCustomerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.product)) {
      body["Product"] = request.product;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCustomer",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCustomerResponse>(await this.callApi(params, req, runtime), new $_model.QueryCustomerResponse({}));
  }

  /**
   * 查询敏感客户
   * 
   * @param request - QueryCustomerRequest
   * @returns QueryCustomerResponse
   */
  async queryCustomer(request: $_model.QueryCustomerRequest): Promise<$_model.QueryCustomerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCustomerWithOptions(request, runtime);
  }

  /**
   * 执行单详情
   * 
   * @param request - QueryExecuteInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryExecuteInfoResponse
   */
  async queryExecuteInfoWithOptions(request: $_model.QueryExecuteInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryExecuteInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.az)) {
      body["Az"] = request.az;
    }

    if (!$dara.isNull(request.bgVid)) {
      body["BgVid"] = request.bgVid;
    }

    if (!$dara.isNull(request.buId)) {
      body["BuId"] = request.buId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.exVid)) {
      body["ExVid"] = request.exVid;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.levelTree)) {
      bodyFlat["LevelTree"] = request.levelTree;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.page)) {
      body["Page"] = request.page;
    }

    if (!$dara.isNull(request.product)) {
      body["Product"] = request.product;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      body["SourceOrderId"] = request.sourceOrderId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryExecuteInfo",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryExecuteInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryExecuteInfoResponse({}));
  }

  /**
   * 执行单详情
   * 
   * @param request - QueryExecuteInfoRequest
   * @returns QueryExecuteInfoResponse
   */
  async queryExecuteInfo(request: $_model.QueryExecuteInfoRequest): Promise<$_model.QueryExecuteInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryExecuteInfoWithOptions(request, runtime);
  }

  /**
   * 查询内部产品接口
   * 
   * @param request - QueryInnerProductInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInnerProductInfoResponse
   */
  async queryInnerProductInfoWithOptions(request: $_model.QueryInnerProductInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInnerProductInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.page)) {
      body["Page"] = request.page;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryInnerProductInfo",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInnerProductInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryInnerProductInfoResponse({}));
  }

  /**
   * 查询内部产品接口
   * 
   * @param request - QueryInnerProductInfoRequest
   * @returns QueryInnerProductInfoResponse
   */
  async queryInnerProductInfo(request: $_model.QueryInnerProductInfoRequest): Promise<$_model.QueryInnerProductInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInnerProductInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryRegionAzRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRegionAzResponse
   */
  async queryRegionAzWithOptions(request: $_model.QueryRegionAzRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRegionAzResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.page)) {
      body["Page"] = request.page;
    }

    if (!$dara.isNull(request.product)) {
      body["Product"] = request.product;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRegionAz",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRegionAzResponse>(await this.callApi(params, req, runtime), new $_model.QueryRegionAzResponse({}));
  }

  /**
   * @param request - QueryRegionAzRequest
   * @returns QueryRegionAzResponse
   */
  async queryRegionAz(request: $_model.QueryRegionAzRequest): Promise<$_model.QueryRegionAzResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRegionAzWithOptions(request, runtime);
  }

  /**
   * 变更取消接口
   * 
   * @param request - SafeChangeCancelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SafeChangeCancelResponse
   */
  async safeChangeCancelWithOptions(request: $_model.SafeChangeCancelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SafeChangeCancelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.bgVid)) {
      body["BgVid"] = request.bgVid;
    }

    if (!$dara.isNull(request.operateEmpNo)) {
      body["OperateEmpNo"] = request.operateEmpNo;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      body["SourceOrderId"] = request.sourceOrderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SafeChangeCancel",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SafeChangeCancelResponse>(await this.callApi(params, req, runtime), new $_model.SafeChangeCancelResponse({}));
  }

  /**
   * 变更取消接口
   * 
   * @param request - SafeChangeCancelRequest
   * @returns SafeChangeCancelResponse
   */
  async safeChangeCancel(request: $_model.SafeChangeCancelRequest): Promise<$_model.SafeChangeCancelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.safeChangeCancelWithOptions(request, runtime);
  }

  /**
   * 变更check接口
   * 
   * @param tmpReq - SafeChangeCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SafeChangeCheckResponse
   */
  async safeChangeCheckWithOptions(tmpReq: $_model.SafeChangeCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SafeChangeCheckResponse> {
    tmpReq.validate();
    let request = new $_model.SafeChangeCheckShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.harmNoticeCombineParam)) {
      request.harmNoticeCombineParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.harmNoticeCombineParam, "HarmNoticeCombineParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.checker)) {
      query["Checker"] = request.checker;
    }

    if (!$dara.isNull(request.harmChangeNoticeEnum)) {
      query["HarmChangeNoticeEnum"] = request.harmChangeNoticeEnum;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.affectCustomer)) {
      body["AffectCustomer"] = request.affectCustomer;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.approveFlowParam)) {
      bodyFlat["ApproveFlowParam"] = request.approveFlowParam;
    }

    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.bgCustomTemplateExtraDTO)) {
      bodyFlat["BgCustomTemplateExtraDTO"] = request.bgCustomTemplateExtraDTO;
    }

    if (!$dara.isNull(request.blockInfos)) {
      body["BlockInfos"] = request.blockInfos;
    }

    if (!$dara.isNull(request.callBackInfo)) {
      bodyFlat["CallBackInfo"] = request.callBackInfo;
    }

    if (!$dara.isNull(request.changeDataType)) {
      body["ChangeDataType"] = request.changeDataType;
    }

    if (!$dara.isNull(request.changeDesc)) {
      body["ChangeDesc"] = request.changeDesc;
    }

    if (!$dara.isNull(request.changeEndTime)) {
      body["ChangeEndTime"] = request.changeEndTime;
    }

    if (!$dara.isNull(request.changeEnv)) {
      body["ChangeEnv"] = request.changeEnv;
    }

    if (!$dara.isNull(request.changeItems)) {
      body["ChangeItems"] = request.changeItems;
    }

    if (!$dara.isNull(request.changeObject)) {
      body["ChangeObject"] = request.changeObject;
    }

    if (!$dara.isNull(request.changeOptSubType)) {
      body["ChangeOptSubType"] = request.changeOptSubType;
    }

    if (!$dara.isNull(request.changeOptType)) {
      body["ChangeOptType"] = request.changeOptType;
    }

    if (!$dara.isNull(request.changeReason)) {
      body["ChangeReason"] = request.changeReason;
    }

    if (!$dara.isNull(request.changeRmarks)) {
      body["ChangeRmarks"] = request.changeRmarks;
    }

    if (!$dara.isNull(request.changeSchemes)) {
      body["ChangeSchemes"] = request.changeSchemes;
    }

    if (!$dara.isNull(request.changeStartTime)) {
      body["ChangeStartTime"] = request.changeStartTime;
    }

    if (!$dara.isNull(request.changeSubTypeDesc)) {
      body["ChangeSubTypeDesc"] = request.changeSubTypeDesc;
    }

    if (!$dara.isNull(request.changeSystem)) {
      body["ChangeSystem"] = request.changeSystem;
    }

    if (!$dara.isNull(request.changeTimes)) {
      body["ChangeTimes"] = request.changeTimes;
    }

    if (!$dara.isNull(request.changeTitle)) {
      body["ChangeTitle"] = request.changeTitle;
    }

    if (!$dara.isNull(request.changeValidation)) {
      body["ChangeValidation"] = request.changeValidation;
    }

    if (!$dara.isNull(request.creatorEmpId)) {
      body["CreatorEmpId"] = request.creatorEmpId;
    }

    if (!$dara.isNull(request.damagedChangeNotices)) {
      bodyFlat["DamagedChangeNotices"] = request.damagedChangeNotices;
    }

    if (!$dara.isNull(request.executorEmpId)) {
      body["ExecutorEmpId"] = request.executorEmpId;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.follower)) {
      body["Follower"] = request.follower;
    }

    if (!$dara.isNull(request.grayStatus)) {
      body["GrayStatus"] = request.grayStatus;
    }

    if (!$dara.isNull(request.harmNoticeCombineParamShrink)) {
      body["HarmNoticeCombineParam"] = request.harmNoticeCombineParamShrink;
    }

    if (!$dara.isNull(request.incidence)) {
      body["Incidence"] = request.incidence;
    }

    if (!$dara.isNull(request.influenceInfo)) {
      bodyFlat["InfluenceInfo"] = request.influenceInfo;
    }

    if (!$dara.isNull(request.instance)) {
      bodyFlat["Instance"] = request.instance;
    }

    if (!$dara.isNull(request.needModifyDoc)) {
      body["NeedModifyDoc"] = request.needModifyDoc;
    }

    if (!$dara.isNull(request.operateEmpNo)) {
      body["OperateEmpNo"] = request.operateEmpNo;
    }

    if (!$dara.isNull(request.product)) {
      body["Product"] = request.product;
    }

    if (!$dara.isNull(request.releasePackageInfos)) {
      body["ReleasePackageInfos"] = request.releasePackageInfos;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.reuseSourceOrderId)) {
      body["ReuseSourceOrderId"] = request.reuseSourceOrderId;
    }

    if (!$dara.isNull(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.rollback)) {
      body["Rollback"] = request.rollback;
    }

    if (!$dara.isNull(request.sourceName)) {
      body["SourceName"] = request.sourceName;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      body["SourceOrderId"] = request.sourceOrderId;
    }

    if (!$dara.isNull(request.sourceUrl)) {
      body["SourceUrl"] = request.sourceUrl;
    }

    if (!$dara.isNull(request.whiteType)) {
      body["whiteType"] = request.whiteType;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SafeChangeCheck",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SafeChangeCheckResponse>(await this.callApi(params, req, runtime), new $_model.SafeChangeCheckResponse({}));
  }

  /**
   * 变更check接口
   * 
   * @param request - SafeChangeCheckRequest
   * @returns SafeChangeCheckResponse
   */
  async safeChangeCheck(request: $_model.SafeChangeCheckRequest): Promise<$_model.SafeChangeCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.safeChangeCheckWithOptions(request, runtime);
  }

  /**
   * 变更End接口
   * 
   * @param request - SafeChangeEndRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SafeChangeEndResponse
   */
  async safeChangeEndWithOptions(request: $_model.SafeChangeEndRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SafeChangeEndResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.changeEndTime)) {
      body["ChangeEndTime"] = request.changeEndTime;
    }

    if (!$dara.isNull(request.changeResult)) {
      body["ChangeResult"] = request.changeResult;
    }

    if (!$dara.isNull(request.curBatchNo)) {
      body["CurBatchNo"] = request.curBatchNo;
    }

    if (!$dara.isNull(request.executorEmpId)) {
      body["ExecutorEmpId"] = request.executorEmpId;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      body["SourceOrderId"] = request.sourceOrderId;
    }

    if (!$dara.isNull(request.totalBatchNo)) {
      body["TotalBatchNo"] = request.totalBatchNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SafeChangeEnd",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SafeChangeEndResponse>(await this.callApi(params, req, runtime), new $_model.SafeChangeEndResponse({}));
  }

  /**
   * 变更End接口
   * 
   * @param request - SafeChangeEndRequest
   * @returns SafeChangeEndResponse
   */
  async safeChangeEnd(request: $_model.SafeChangeEndRequest): Promise<$_model.SafeChangeEndResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.safeChangeEndWithOptions(request, runtime);
  }

  /**
   * 变更单查询
   * 
   * @param request - SafeChangeQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SafeChangeQueryResponse
   */
  async safeChangeQueryWithOptions(request: $_model.SafeChangeQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SafeChangeQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.returnType)) {
      query["ReturnType"] = request.returnType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.needValidate)) {
      body["NeedValidate"] = request.needValidate;
    }

    if (!$dara.isNull(request.queryType)) {
      body["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      body["SourceOrderId"] = request.sourceOrderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SafeChangeQuery",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SafeChangeQueryResponse>(await this.callApi(params, req, runtime), new $_model.SafeChangeQueryResponse({}));
  }

  /**
   * 变更单查询
   * 
   * @param request - SafeChangeQueryRequest
   * @returns SafeChangeQueryResponse
   */
  async safeChangeQuery(request: $_model.SafeChangeQueryRequest): Promise<$_model.SafeChangeQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.safeChangeQueryWithOptions(request, runtime);
  }

  /**
   * 查询审批实例信息
   * 
   * @param request - SafeChangeQueryApproveFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SafeChangeQueryApproveFlowResponse
   */
  async safeChangeQueryApproveFlowWithOptions(request: $_model.SafeChangeQueryApproveFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SafeChangeQueryApproveFlowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      body["SourceOrderId"] = request.sourceOrderId;
    }

    if (!$dara.isNull(request.stage)) {
      body["Stage"] = request.stage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SafeChangeQueryApproveFlow",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SafeChangeQueryApproveFlowResponse>(await this.callApi(params, req, runtime), new $_model.SafeChangeQueryApproveFlowResponse({}));
  }

  /**
   * 查询审批实例信息
   * 
   * @param request - SafeChangeQueryApproveFlowRequest
   * @returns SafeChangeQueryApproveFlowResponse
   */
  async safeChangeQueryApproveFlow(request: $_model.SafeChangeQueryApproveFlowRequest): Promise<$_model.SafeChangeQueryApproveFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.safeChangeQueryApproveFlowWithOptions(request, runtime);
  }

  /**
   * 变更Start接口
   * 
   * @param request - SafeChangeStartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SafeChangeStartResponse
   */
  async safeChangeStartWithOptions(request: $_model.SafeChangeStartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SafeChangeStartResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.changeEndTime)) {
      body["ChangeEndTime"] = request.changeEndTime;
    }

    if (!$dara.isNull(request.changeObject)) {
      body["ChangeObject"] = request.changeObject;
    }

    if (!$dara.isNull(request.changeOptType)) {
      body["ChangeOptType"] = request.changeOptType;
    }

    if (!$dara.isNull(request.changeStartTime)) {
      body["ChangeStartTime"] = request.changeStartTime;
    }

    if (!$dara.isNull(request.changeTitle)) {
      body["ChangeTitle"] = request.changeTitle;
    }

    if (!$dara.isNull(request.creatorEmpId)) {
      body["CreatorEmpId"] = request.creatorEmpId;
    }

    if (!$dara.isNull(request.curBatchNo)) {
      body["CurBatchNo"] = request.curBatchNo;
    }

    if (!$dara.isNull(request.executorEmpId)) {
      body["ExecutorEmpId"] = request.executorEmpId;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      body["SourceOrderId"] = request.sourceOrderId;
    }

    if (!$dara.isNull(request.totalBatchNo)) {
      body["TotalBatchNo"] = request.totalBatchNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SafeChangeStart",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SafeChangeStartResponse>(await this.callApi(params, req, runtime), new $_model.SafeChangeStartResponse({}));
  }

  /**
   * 变更Start接口
   * 
   * @param request - SafeChangeStartRequest
   * @returns SafeChangeStartResponse
   */
  async safeChangeStart(request: $_model.SafeChangeStartRequest): Promise<$_model.SafeChangeStartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.safeChangeStartWithOptions(request, runtime);
  }

  /**
   * 提交审批
   * 
   * @param request - SafeChangeStartApproveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SafeChangeStartApproveResponse
   */
  async safeChangeStartApproveWithOptions(request: $_model.SafeChangeStartApproveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SafeChangeStartApproveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.creatorEmpId)) {
      body["CreatorEmpId"] = request.creatorEmpId;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      body["SourceOrderId"] = request.sourceOrderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SafeChangeStartApprove",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SafeChangeStartApproveResponse>(await this.callApi(params, req, runtime), new $_model.SafeChangeStartApproveResponse({}));
  }

  /**
   * 提交审批
   * 
   * @param request - SafeChangeStartApproveRequest
   * @returns SafeChangeStartApproveResponse
   */
  async safeChangeStartApprove(request: $_model.SafeChangeStartApproveRequest): Promise<$_model.SafeChangeStartApproveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.safeChangeStartApproveWithOptions(request, runtime);
  }

  /**
   * 封网范围数据查询
   * 
   * @param request - SafeScopeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SafeScopeDataResponse
   */
  async safeScopeDataWithOptions(request: $_model.SafeScopeDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SafeScopeDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.category)) {
      body["Category"] = request.category;
    }

    if (!$dara.isNull(request.codeList)) {
      body["CodeList"] = request.codeList;
    }

    if (!$dara.isNull(request.factor)) {
      body["Factor"] = request.factor;
    }

    if (!$dara.isNull(request.groupBy)) {
      body["GroupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.idList)) {
      body["IdList"] = request.idList;
    }

    if (!$dara.isNull(request.item)) {
      body["Item"] = request.item;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.needTotalCount)) {
      body["NeedTotalCount"] = request.needTotalCount;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      body["OrderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.page)) {
      body["Page"] = request.page;
    }

    if (!$dara.isNull(request.parentCode)) {
      body["ParentCode"] = request.parentCode;
    }

    if (!$dara.isNull(request.parentId)) {
      body["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.regionNameEn)) {
      body["RegionNameEn"] = request.regionNameEn;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.searchValue)) {
      body["SearchValue"] = request.searchValue;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SafeScopeData",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SafeScopeDataResponse>(await this.callApi(params, req, runtime), new $_model.SafeScopeDataResponse({}));
  }

  /**
   * 封网范围数据查询
   * 
   * @param request - SafeScopeDataRequest
   * @returns SafeScopeDataResponse
   */
  async safeScopeData(request: $_model.SafeScopeDataRequest): Promise<$_model.SafeScopeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.safeScopeDataWithOptions(request, runtime);
  }

  /**
   * 提交审批
   * 
   * @param request - StartApproveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartApproveResponse
   */
  async startApproveWithOptions(request: $_model.StartApproveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartApproveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      query["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.creatorEmpId)) {
      query["CreatorEmpId"] = request.creatorEmpId;
    }

    if (!$dara.isNull(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      query["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.sourceOrderId)) {
      query["SourceOrderId"] = request.sourceOrderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartApprove",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartApproveResponse>(await this.callApi(params, req, runtime), new $_model.StartApproveResponse({}));
  }

  /**
   * 提交审批
   * 
   * @param request - StartApproveRequest
   * @returns StartApproveResponse
   */
  async startApprove(request: $_model.StartApproveRequest): Promise<$_model.StartApproveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startApproveWithOptions(request, runtime);
  }

  /**
   * 同步产品接口
   * 
   * @param request - SyncProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncProductResponse
   */
  async syncProductWithOptions(request: $_model.SyncProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authKey)) {
      body["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSign)) {
      body["AuthSign"] = request.authSign;
    }

    if (!$dara.isNull(request.reqTimestamp)) {
      body["ReqTimestamp"] = request.reqTimestamp;
    }

    if (!$dara.isNull(request.syncProductList)) {
      body["SyncProductList"] = request.syncProductList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncProduct",
      version: "2022-01-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncProductResponse>(await this.callApi(params, req, runtime), new $_model.SyncProductResponse({}));
  }

  /**
   * 同步产品接口
   * 
   * @param request - SyncProductRequest
   * @returns SyncProductResponse
   */
  async syncProduct(request: $_model.SyncProductRequest): Promise<$_model.SyncProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncProductWithOptions(request, runtime);
  }

}
