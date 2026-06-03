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
    this._endpoint = this.getEndpoint("dypns", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 配置认证方案APP信息
   * 
   * @param request - ConfigVerifySceneAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigVerifySceneAppInfoResponse
   */
  async configVerifySceneAppInfoWithOptions(request: $_model.ConfigVerifySceneAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigVerifySceneAppInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.CM)) {
      query["CM"] = request.CM;
    }

    if (!$dara.isNull(request.CT)) {
      query["CT"] = request.CT;
    }

    if (!$dara.isNull(request.CU)) {
      query["CU"] = request.CU;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.ipWhitelist)) {
      query["IpWhitelist"] = request.ipWhitelist;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigVerifySceneAppInfo",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigVerifySceneAppInfoResponse>(await this.callApi(params, req, runtime), new $_model.ConfigVerifySceneAppInfoResponse({}));
  }

  /**
   * 配置认证方案APP信息
   * 
   * @param request - ConfigVerifySceneAppInfoRequest
   * @returns ConfigVerifySceneAppInfoResponse
   */
  async configVerifySceneAppInfo(request: $_model.ConfigVerifySceneAppInfoRequest): Promise<$_model.ConfigVerifySceneAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configVerifySceneAppInfoWithOptions(request, runtime);
  }

  /**
   * @param request - CopySchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopySchemeResponse
   */
  async copySchemeWithOptions(request: $_model.CopySchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopySchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemeId)) {
      query["SchemeId"] = request.schemeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyScheme",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopySchemeResponse>(await this.callApi(params, req, runtime), new $_model.CopySchemeResponse({}));
  }

  /**
   * @param request - CopySchemeRequest
   * @returns CopySchemeResponse
   */
  async copyScheme(request: $_model.CopySchemeRequest): Promise<$_model.CopySchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copySchemeWithOptions(request, runtime);
  }

  /**
   * 复制号码认证方案信息
   * 
   * @param request - CopyVerifySchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyVerifySchemeResponse
   */
  async copyVerifySchemeWithOptions(request: $_model.CopyVerifySchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyVerifySchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cmApiCode)) {
      query["CmApiCode"] = request.cmApiCode;
    }

    if (!$dara.isNull(request.cmNewFlag)) {
      query["CmNewFlag"] = request.cmNewFlag;
    }

    if (!$dara.isNull(request.ctApiCode)) {
      query["CtApiCode"] = request.ctApiCode;
    }

    if (!$dara.isNull(request.ctNewFlag)) {
      query["CtNewFlag"] = request.ctNewFlag;
    }

    if (!$dara.isNull(request.cuApiCode)) {
      query["CuApiCode"] = request.cuApiCode;
    }

    if (!$dara.isNull(request.cuNewFlag)) {
      query["CuNewFlag"] = request.cuNewFlag;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.modelSceneCode)) {
      query["ModelSceneCode"] = request.modelSceneCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyVerifyScheme",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyVerifySchemeResponse>(await this.callApi(params, req, runtime), new $_model.CopyVerifySchemeResponse({}));
  }

  /**
   * 复制号码认证方案信息
   * 
   * @param request - CopyVerifySchemeRequest
   * @returns CopyVerifySchemeResponse
   */
  async copyVerifyScheme(request: $_model.CopyVerifySchemeRequest): Promise<$_model.CopyVerifySchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyVerifySchemeWithOptions(request, runtime);
  }

  /**
   * 创建短信认证2.0http回执测试
   * 
   * @param request - CreateDypnsSmsVerifyCallBackTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDypnsSmsVerifyCallBackTestResponse
   */
  async createDypnsSmsVerifyCallBackTestWithOptions(request: $_model.CreateDypnsSmsVerifyCallBackTestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDypnsSmsVerifyCallBackTestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.method)) {
      query["Method"] = request.method;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDypnsSmsVerifyCallBackTest",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDypnsSmsVerifyCallBackTestResponse>(await this.callApi(params, req, runtime), new $_model.CreateDypnsSmsVerifyCallBackTestResponse({}));
  }

  /**
   * 创建短信认证2.0http回执测试
   * 
   * @param request - CreateDypnsSmsVerifyCallBackTestRequest
   * @returns CreateDypnsSmsVerifyCallBackTestResponse
   */
  async createDypnsSmsVerifyCallBackTest(request: $_model.CreateDypnsSmsVerifyCallBackTestRequest): Promise<$_model.CreateDypnsSmsVerifyCallBackTestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDypnsSmsVerifyCallBackTestWithOptions(request, runtime);
  }

  /**
   * 创建短信认证2.0http回执url
   * 
   * @param request - CreateDypnsSmsVerifyMessageCallBackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDypnsSmsVerifyMessageCallBackResponse
   */
  async createDypnsSmsVerifyMessageCallBackWithOptions(request: $_model.CreateDypnsSmsVerifyMessageCallBackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDypnsSmsVerifyMessageCallBackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDypnsSmsVerifyMessageCallBack",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDypnsSmsVerifyMessageCallBackResponse>(await this.callApi(params, req, runtime), new $_model.CreateDypnsSmsVerifyMessageCallBackResponse({}));
  }

  /**
   * 创建短信认证2.0http回执url
   * 
   * @param request - CreateDypnsSmsVerifyMessageCallBackRequest
   * @returns CreateDypnsSmsVerifyMessageCallBackResponse
   */
  async createDypnsSmsVerifyMessageCallBack(request: $_model.CreateDypnsSmsVerifyMessageCallBackRequest): Promise<$_model.CreateDypnsSmsVerifyMessageCallBackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDypnsSmsVerifyMessageCallBackWithOptions(request, runtime);
  }

  /**
   * 创建短信认证2.0mns回执队列
   * 
   * @param request - CreateDypnsSmsVerifyMessageQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDypnsSmsVerifyMessageQueueResponse
   */
  async createDypnsSmsVerifyMessageQueueWithOptions(request: $_model.CreateDypnsSmsVerifyMessageQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDypnsSmsVerifyMessageQueueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.queryQueueTypes)) {
      query["QueryQueueTypes"] = request.queryQueueTypes;
    }

    if (!$dara.isNull(request.queueType)) {
      query["QueueType"] = request.queueType;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDypnsSmsVerifyMessageQueue",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDypnsSmsVerifyMessageQueueResponse>(await this.callApi(params, req, runtime), new $_model.CreateDypnsSmsVerifyMessageQueueResponse({}));
  }

  /**
   * 创建短信认证2.0mns回执队列
   * 
   * @param request - CreateDypnsSmsVerifyMessageQueueRequest
   * @returns CreateDypnsSmsVerifyMessageQueueResponse
   */
  async createDypnsSmsVerifyMessageQueue(request: $_model.CreateDypnsSmsVerifyMessageQueueRequest): Promise<$_model.CreateDypnsSmsVerifyMessageQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDypnsSmsVerifyMessageQueueWithOptions(request, runtime);
  }

  /**
   * @param request - CreateFileByBizRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileByBizResponse
   */
  async createFileByBizWithOptions(request: $_model.CreateFileByBizRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFileByBizResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.saveOssFileName)) {
      query["SaveOssFileName"] = request.saveOssFileName;
    }

    if (!$dara.isNull(request.userViewFileName)) {
      query["UserViewFileName"] = request.userViewFileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFileByBiz",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFileByBizResponse>(await this.callApi(params, req, runtime), new $_model.CreateFileByBizResponse({}));
  }

  /**
   * @param request - CreateFileByBizRequest
   * @returns CreateFileByBizResponse
   */
  async createFileByBiz(request: $_model.CreateFileByBizRequest): Promise<$_model.CreateFileByBizResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFileByBizWithOptions(request, runtime);
  }

  /**
   * @param request - CreateGateVerifyExportLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGateVerifyExportLogResponse
   */
  async createGateVerifyExportLogWithOptions(request: $_model.CreateGateVerifyExportLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGateVerifyExportLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authenticationType)) {
      query["AuthenticationType"] = request.authenticationType;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.queryMonth)) {
      query["QueryMonth"] = request.queryMonth;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGateVerifyExportLog",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGateVerifyExportLogResponse>(await this.callApi(params, req, runtime), new $_model.CreateGateVerifyExportLogResponse({}));
  }

  /**
   * @param request - CreateGateVerifyExportLogRequest
   * @returns CreateGateVerifyExportLogResponse
   */
  async createGateVerifyExportLog(request: $_model.CreateGateVerifyExportLogRequest): Promise<$_model.CreateGateVerifyExportLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGateVerifyExportLogWithOptions(request, runtime);
  }

  /**
   * 创建图形认证方案号
   * 
   * @param request - CreateGraphicAuthSchemeConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGraphicAuthSchemeConfigResponse
   */
  async createGraphicAuthSchemeConfigWithOptions(request: $_model.CreateGraphicAuthSchemeConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGraphicAuthSchemeConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGraphicAuthSchemeConfig",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGraphicAuthSchemeConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateGraphicAuthSchemeConfigResponse({}));
  }

  /**
   * 创建图形认证方案号
   * 
   * @param request - CreateGraphicAuthSchemeConfigRequest
   * @returns CreateGraphicAuthSchemeConfigResponse
   */
  async createGraphicAuthSchemeConfig(request: $_model.CreateGraphicAuthSchemeConfigRequest): Promise<$_model.CreateGraphicAuthSchemeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGraphicAuthSchemeConfigWithOptions(request, runtime);
  }

  /**
   * 创建产品
   * 
   * @param request - CreateProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProductResponse
   */
  async createProductWithOptions(request: $_model.CreateProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProduct",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProductResponse>(await this.callApi(params, req, runtime), new $_model.CreateProductResponse({}));
  }

  /**
   * 创建产品
   * 
   * @param request - CreateProductRequest
   * @returns CreateProductResponse
   */
  async createProduct(request: $_model.CreateProductRequest): Promise<$_model.CreateProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProductWithOptions(request, runtime);
  }

  /**
   * 融合认证-新增方案
   * 
   * @param request - CreateSchemeConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSchemeConfigResponse
   */
  async createSchemeConfigWithOptions(request: $_model.CreateSchemeConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSchemeConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidPackageName)) {
      query["AndroidPackageName"] = request.androidPackageName;
    }

    if (!$dara.isNull(request.androidPackageSign)) {
      query["AndroidPackageSign"] = request.androidPackageSign;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.h5Origin)) {
      query["H5Origin"] = request.h5Origin;
    }

    if (!$dara.isNull(request.h5Url)) {
      query["H5Url"] = request.h5Url;
    }

    if (!$dara.isNull(request.iosBundleId)) {
      query["IosBundleId"] = request.iosBundleId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSchemeConfig",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSchemeConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateSchemeConfigResponse({}));
  }

  /**
   * 融合认证-新增方案
   * 
   * @param request - CreateSchemeConfigRequest
   * @returns CreateSchemeConfigResponse
   */
  async createSchemeConfig(request: $_model.CreateSchemeConfigRequest): Promise<$_model.CreateSchemeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSchemeConfigWithOptions(request, runtime);
  }

  /**
   * @param request - CreateSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsSignResponse
   */
  async createSmsSignWithOptions(request: $_model.CreateSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appUrl)) {
      query["AppUrl"] = request.appUrl;
    }

    if (!$dara.isNull(request.businessLicenseCert)) {
      query["BusinessLicenseCert"] = request.businessLicenseCert;
    }

    if (!$dara.isNull(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!$dara.isNull(request.extendMessage)) {
      query["ExtendMessage"] = request.extendMessage;
    }

    if (!$dara.isNull(request.oldSmsSignName)) {
      query["OldSmsSignName"] = request.oldSmsSignName;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.organizationCodeCert)) {
      query["OrganizationCodeCert"] = request.organizationCodeCert;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smsSignName)) {
      query["SmsSignName"] = request.smsSignName;
    }

    if (!$dara.isNull(request.smsSignRemark)) {
      query["SmsSignRemark"] = request.smsSignRemark;
    }

    if (!$dara.isNull(request.smsSignSource)) {
      query["SmsSignSource"] = request.smsSignSource;
    }

    if (!$dara.isNull(request.taxRegistrationCert)) {
      query["TaxRegistrationCert"] = request.taxRegistrationCert;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsSign",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsSignResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsSignResponse({}));
  }

  /**
   * @param request - CreateSmsSignRequest
   * @returns CreateSmsSignResponse
   */
  async createSmsSign(request: $_model.CreateSmsSignRequest): Promise<$_model.CreateSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsSignWithOptions(request, runtime);
  }

  /**
   * @param request - CreateSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsTemplateResponse
   */
  async createSmsTemplateWithOptions(request: $_model.CreateSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizUrl)) {
      query["BizUrl"] = request.bizUrl;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smsTemplateContent)) {
      query["SmsTemplateContent"] = request.smsTemplateContent;
    }

    if (!$dara.isNull(request.smsTemplateName)) {
      query["SmsTemplateName"] = request.smsTemplateName;
    }

    if (!$dara.isNull(request.smsTemplateRule)) {
      query["SmsTemplateRule"] = request.smsTemplateRule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsTemplate",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsTemplateResponse({}));
  }

  /**
   * @param request - CreateSmsTemplateRequest
   * @returns CreateSmsTemplateResponse
   */
  async createSmsTemplate(request: $_model.CreateSmsTemplateRequest): Promise<$_model.CreateSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsTemplateWithOptions(request, runtime);
  }

  /**
   * 创建短信认证用量统计记录导出任务
   * 
   * @param request - CreateSmsVerifyStatisticRecordsExportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsVerifyStatisticRecordsExportTaskResponse
   */
  async createSmsVerifyStatisticRecordsExportTaskWithOptions(request: $_model.CreateSmsVerifyStatisticRecordsExportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsVerifyStatisticRecordsExportTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fromDate)) {
      query["FromDate"] = request.fromDate;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    if (!$dara.isNull(request.toDate)) {
      query["ToDate"] = request.toDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsVerifyStatisticRecordsExportTask",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsVerifyStatisticRecordsExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsVerifyStatisticRecordsExportTaskResponse({}));
  }

  /**
   * 创建短信认证用量统计记录导出任务
   * 
   * @param request - CreateSmsVerifyStatisticRecordsExportTaskRequest
   * @returns CreateSmsVerifyStatisticRecordsExportTaskResponse
   */
  async createSmsVerifyStatisticRecordsExportTask(request: $_model.CreateSmsVerifyStatisticRecordsExportTaskRequest): Promise<$_model.CreateSmsVerifyStatisticRecordsExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsVerifyStatisticRecordsExportTaskWithOptions(request, runtime);
  }

  /**
   * 创建认证方案
   * 
   * @param request - CreateVerifySchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVerifySchemeResponse
   */
  async createVerifySchemeWithOptions(request: $_model.CreateVerifySchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVerifySchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!$dara.isNull(request.cmApiCode)) {
      query["CmApiCode"] = request.cmApiCode;
    }

    if (!$dara.isNull(request.ctApiCode)) {
      query["CtApiCode"] = request.ctApiCode;
    }

    if (!$dara.isNull(request.cuApiCode)) {
      query["CuApiCode"] = request.cuApiCode;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.hmAppIdentifier)) {
      query["HmAppIdentifier"] = request.hmAppIdentifier;
    }

    if (!$dara.isNull(request.hmPackageName)) {
      query["HmPackageName"] = request.hmPackageName;
    }

    if (!$dara.isNull(request.hmSignName)) {
      query["HmSignName"] = request.hmSignName;
    }

    if (!$dara.isNull(request.ipWhiteList)) {
      query["IpWhiteList"] = request.ipWhiteList;
    }

    if (!$dara.isNull(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.packName)) {
      query["PackName"] = request.packName;
    }

    if (!$dara.isNull(request.packSign)) {
      query["PackSign"] = request.packSign;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    if (!$dara.isNull(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    if (!$dara.isNull(request.smsSignName)) {
      query["SmsSignName"] = request.smsSignName;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVerifyScheme",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVerifySchemeResponse>(await this.callApi(params, req, runtime), new $_model.CreateVerifySchemeResponse({}));
  }

  /**
   * 创建认证方案
   * 
   * @param request - CreateVerifySchemeRequest
   * @returns CreateVerifySchemeResponse
   */
  async createVerifyScheme(request: $_model.CreateVerifySchemeRequest): Promise<$_model.CreateVerifySchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVerifySchemeWithOptions(request, runtime);
  }

  /**
   * 创建短信认证导出任务
   * 
   * @param request - CreatetVerifySmsExportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatetVerifySmsExportTaskResponse
   */
  async createtVerifySmsExportTaskWithOptions(request: $_model.CreatetVerifySmsExportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatetVerifySmsExportTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    if (!$dara.isNull(request.sendStatus)) {
      query["SendStatus"] = request.sendStatus;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatetVerifySmsExportTask",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatetVerifySmsExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreatetVerifySmsExportTaskResponse({}));
  }

  /**
   * 创建短信认证导出任务
   * 
   * @param request - CreatetVerifySmsExportTaskRequest
   * @returns CreatetVerifySmsExportTaskResponse
   */
  async createtVerifySmsExportTask(request: $_model.CreatetVerifySmsExportTaskRequest): Promise<$_model.CreatetVerifySmsExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createtVerifySmsExportTaskWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSceneResponse
   */
  async deleteSceneWithOptions(request: $_model.DeleteSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScene",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSceneResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSceneResponse({}));
  }

  /**
   * @param request - DeleteSceneRequest
   * @returns DeleteSceneResponse
   */
  async deleteScene(request: $_model.DeleteSceneRequest): Promise<$_model.DeleteSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSceneWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSchemeResponse
   */
  async deleteSchemeWithOptions(request: $_model.DeleteSchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemeId)) {
      query["SchemeId"] = request.schemeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScheme",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSchemeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSchemeResponse({}));
  }

  /**
   * @param request - DeleteSchemeRequest
   * @returns DeleteSchemeResponse
   */
  async deleteScheme(request: $_model.DeleteSchemeRequest): Promise<$_model.DeleteSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSchemeWithOptions(request, runtime);
  }

  /**
   * @param request - GetDownLoadFileUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDownLoadFileUrlResponse
   */
  async getDownLoadFileUrlWithOptions(request: $_model.GetDownLoadFileUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDownLoadFileUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acctId)) {
      query["AcctId"] = request.acctId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDownLoadFileUrl",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDownLoadFileUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetDownLoadFileUrlResponse({}));
  }

  /**
   * @param request - GetDownLoadFileUrlRequest
   * @returns GetDownLoadFileUrlResponse
   */
  async getDownLoadFileUrl(request: $_model.GetDownLoadFileUrlRequest): Promise<$_model.GetDownLoadFileUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDownLoadFileUrlWithOptions(request, runtime);
  }

  /**
   * @param request - GetEnterpriseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnterpriseInfoResponse
   */
  async getEnterpriseInfoWithOptions(request: $_model.GetEnterpriseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEnterpriseInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEnterpriseInfo",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEnterpriseInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetEnterpriseInfoResponse({}));
  }

  /**
   * @param request - GetEnterpriseInfoRequest
   * @returns GetEnterpriseInfoResponse
   */
  async getEnterpriseInfo(request: $_model.GetEnterpriseInfoRequest): Promise<$_model.GetEnterpriseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEnterpriseInfoWithOptions(request, runtime);
  }

  /**
   * @param request - GetOpenSubProductStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOpenSubProductStatusResponse
   */
  async getOpenSubProductStatusWithOptions(request: $_model.GetOpenSubProductStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOpenSubProductStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOpenSubProductStatus",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOpenSubProductStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetOpenSubProductStatusResponse({}));
  }

  /**
   * @param request - GetOpenSubProductStatusRequest
   * @returns GetOpenSubProductStatusResponse
   */
  async getOpenSubProductStatus(request: $_model.GetOpenSubProductStatusRequest): Promise<$_model.GetOpenSubProductStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOpenSubProductStatusWithOptions(request, runtime);
  }

  /**
   * @param request - GetOssUploadForEnterpriseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssUploadForEnterpriseResponse
   */
  async getOssUploadForEnterpriseWithOptions(request: $_model.GetOssUploadForEnterpriseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssUploadForEnterpriseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssUploadForEnterprise",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOssUploadForEnterpriseResponse>(await this.callApi(params, req, runtime), new $_model.GetOssUploadForEnterpriseResponse({}));
  }

  /**
   * @param request - GetOssUploadForEnterpriseRequest
   * @returns GetOssUploadForEnterpriseResponse
   */
  async getOssUploadForEnterprise(request: $_model.GetOssUploadForEnterpriseRequest): Promise<$_model.GetOssUploadForEnterpriseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssUploadForEnterpriseWithOptions(request, runtime);
  }

  /**
   * @param request - GetOssUploadSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssUploadSignResponse
   */
  async getOssUploadSignWithOptions(request: $_model.GetOssUploadSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssUploadSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssUploadSign",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOssUploadSignResponse>(await this.callApi(params, req, runtime), new $_model.GetOssUploadSignResponse({}));
  }

  /**
   * @param request - GetOssUploadSignRequest
   * @returns GetOssUploadSignResponse
   */
  async getOssUploadSign(request: $_model.GetOssUploadSignRequest): Promise<$_model.GetOssUploadSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssUploadSignWithOptions(request, runtime);
  }

  /**
   * @param request - GetSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSchemeResponse
   */
  async getSchemeWithOptions(request: $_model.GetSchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemeId)) {
      query["SchemeId"] = request.schemeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScheme",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSchemeResponse>(await this.callApi(params, req, runtime), new $_model.GetSchemeResponse({}));
  }

  /**
   * @param request - GetSchemeRequest
   * @returns GetSchemeResponse
   */
  async getScheme(request: $_model.GetSchemeRequest): Promise<$_model.GetSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSchemeWithOptions(request, runtime);
  }

  /**
   * @param request - GetSmsCodeLimitConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSmsCodeLimitConfigResponse
   */
  async getSmsCodeLimitConfigWithOptions(request: $_model.GetSmsCodeLimitConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSmsCodeLimitConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSmsCodeLimitConfig",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSmsCodeLimitConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetSmsCodeLimitConfigResponse({}));
  }

  /**
   * @param request - GetSmsCodeLimitConfigRequest
   * @returns GetSmsCodeLimitConfigResponse
   */
  async getSmsCodeLimitConfig(request: $_model.GetSmsCodeLimitConfigRequest): Promise<$_model.GetSmsCodeLimitConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSmsCodeLimitConfigWithOptions(request, runtime);
  }

  /**
   * @param request - GetSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSmsSignResponse
   */
  async getSmsSignWithOptions(request: $_model.GetSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSmsSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smsSignName)) {
      query["SmsSignName"] = request.smsSignName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSmsSign",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSmsSignResponse>(await this.callApi(params, req, runtime), new $_model.GetSmsSignResponse({}));
  }

  /**
   * @param request - GetSmsSignRequest
   * @returns GetSmsSignResponse
   */
  async getSmsSign(request: $_model.GetSmsSignRequest): Promise<$_model.GetSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSmsSignWithOptions(request, runtime);
  }

  /**
   * @param request - ListAuditPassEnterpriseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuditPassEnterpriseInfoResponse
   */
  async listAuditPassEnterpriseInfoWithOptions(request: $_model.ListAuditPassEnterpriseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuditPassEnterpriseInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAuditPassEnterpriseInfo",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuditPassEnterpriseInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListAuditPassEnterpriseInfoResponse({}));
  }

  /**
   * @param request - ListAuditPassEnterpriseInfoRequest
   * @returns ListAuditPassEnterpriseInfoResponse
   */
  async listAuditPassEnterpriseInfo(request: $_model.ListAuditPassEnterpriseInfoRequest): Promise<$_model.ListAuditPassEnterpriseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuditPassEnterpriseInfoWithOptions(request, runtime);
  }

  /**
   * @param request - ListCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCertificateResponse
   */
  async listCertificateWithOptions(request: $_model.ListCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNo)) {
      query["PhoneNo"] = request.phoneNo;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCertificate",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCertificateResponse>(await this.callApi(params, req, runtime), new $_model.ListCertificateResponse({}));
  }

  /**
   * @param request - ListCertificateRequest
   * @returns ListCertificateResponse
   */
  async listCertificate(request: $_model.ListCertificateRequest): Promise<$_model.ListCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCertificateWithOptions(request, runtime);
  }

  /**
   * @param request - ListEnterpriseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnterpriseInfoResponse
   */
  async listEnterpriseInfoWithOptions(request: $_model.ListEnterpriseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnterpriseInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnterpriseInfo",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnterpriseInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListEnterpriseInfoResponse({}));
  }

  /**
   * @param request - ListEnterpriseInfoRequest
   * @returns ListEnterpriseInfoResponse
   */
  async listEnterpriseInfo(request: $_model.ListEnterpriseInfoRequest): Promise<$_model.ListEnterpriseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnterpriseInfoWithOptions(request, runtime);
  }

  /**
   * @param request - ListSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSchemeResponse
   */
  async listSchemeWithOptions(request: $_model.ListSchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScheme",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSchemeResponse>(await this.callApi(params, req, runtime), new $_model.ListSchemeResponse({}));
  }

  /**
   * @param request - ListSchemeRequest
   * @returns ListSchemeResponse
   */
  async listScheme(request: $_model.ListSchemeRequest): Promise<$_model.ListSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSchemeWithOptions(request, runtime);
  }

  /**
   * @param request - ListSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSmsSignResponse
   */
  async listSmsSignWithOptions(request: $_model.ListSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSmsSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.querySmsSign)) {
      query["QuerySmsSign"] = request.querySmsSign;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSmsSign",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSmsSignResponse>(await this.callApi(params, req, runtime), new $_model.ListSmsSignResponse({}));
  }

  /**
   * @param request - ListSmsSignRequest
   * @returns ListSmsSignResponse
   */
  async listSmsSign(request: $_model.ListSmsSignRequest): Promise<$_model.ListSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSmsSignWithOptions(request, runtime);
  }

  /**
   * @param request - ListSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSmsTemplateResponse
   */
  async listSmsTemplateWithOptions(request: $_model.ListSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSmsTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.queryTemplate)) {
      query["QueryTemplate"] = request.queryTemplate;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSmsTemplate",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSmsTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ListSmsTemplateResponse({}));
  }

  /**
   * @param request - ListSmsTemplateRequest
   * @returns ListSmsTemplateResponse
   */
  async listSmsTemplate(request: $_model.ListSmsTemplateRequest): Promise<$_model.ListSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSmsTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - OpenCommonProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenCommonProductResponse
   */
  async openCommonProductWithOptions(request: $_model.OpenCommonProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenCommonProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenCommonProduct",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenCommonProductResponse>(await this.callApi(params, req, runtime), new $_model.OpenCommonProductResponse({}));
  }

  /**
   * @param request - OpenCommonProductRequest
   * @returns OpenCommonProductResponse
   */
  async openCommonProduct(request: $_model.OpenCommonProductRequest): Promise<$_model.OpenCommonProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openCommonProductWithOptions(request, runtime);
  }

  /**
   * @param request - QueryCommonBillingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCommonBillingResponse
   */
  async queryCommonBillingWithOptions(request: $_model.QueryCommonBillingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCommonBillingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.month)) {
      query["Month"] = request.month;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCommonBilling",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCommonBillingResponse>(await this.callApi(params, req, runtime), new $_model.QueryCommonBillingResponse({}));
  }

  /**
   * @param request - QueryCommonBillingRequest
   * @returns QueryCommonBillingResponse
   */
  async queryCommonBilling(request: $_model.QueryCommonBillingRequest): Promise<$_model.QueryCommonBillingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCommonBillingWithOptions(request, runtime);
  }

  /**
   * 查询客户信息
   * 
   * @param request - QueryCommonCustInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCommonCustInfoResponse
   */
  async queryCommonCustInfoWithOptions(request: $_model.QueryCommonCustInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCommonCustInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCommonCustInfo",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCommonCustInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryCommonCustInfoResponse({}));
  }

  /**
   * 查询客户信息
   * 
   * @param request - QueryCommonCustInfoRequest
   * @returns QueryCommonCustInfoResponse
   */
  async queryCommonCustInfo(request: $_model.QueryCommonCustInfoRequest): Promise<$_model.QueryCommonCustInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCommonCustInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryCommonStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCommonStatisticResponse
   */
  async queryCommonStatisticWithOptions(request: $_model.QueryCommonStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCommonStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCommonStatistic",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCommonStatisticResponse>(await this.callApi(params, req, runtime), new $_model.QueryCommonStatisticResponse({}));
  }

  /**
   * @param request - QueryCommonStatisticRequest
   * @returns QueryCommonStatisticResponse
   */
  async queryCommonStatistic(request: $_model.QueryCommonStatisticRequest): Promise<$_model.QueryCommonStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCommonStatisticWithOptions(request, runtime);
  }

  /**
   * @param request - QueryCommonStatisticPreviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCommonStatisticPreviewResponse
   */
  async queryCommonStatisticPreviewWithOptions(request: $_model.QueryCommonStatisticPreviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCommonStatisticPreviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCommonStatisticPreview",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCommonStatisticPreviewResponse>(await this.callApi(params, req, runtime), new $_model.QueryCommonStatisticPreviewResponse({}));
  }

  /**
   * @param request - QueryCommonStatisticPreviewRequest
   * @returns QueryCommonStatisticPreviewResponse
   */
  async queryCommonStatisticPreview(request: $_model.QueryCommonStatisticPreviewRequest): Promise<$_model.QueryCommonStatisticPreviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCommonStatisticPreviewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDayuMigrateStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDayuMigrateStatusResponse
   */
  async queryDayuMigrateStatusWithOptions(request: $_model.QueryDayuMigrateStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDayuMigrateStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDayuMigrateStatus",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDayuMigrateStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryDayuMigrateStatusResponse({}));
  }

  /**
   * @param request - QueryDayuMigrateStatusRequest
   * @returns QueryDayuMigrateStatusResponse
   */
  async queryDayuMigrateStatus(request: $_model.QueryDayuMigrateStatusRequest): Promise<$_model.QueryDayuMigrateStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDayuMigrateStatusWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDictDataItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDictDataItemResponse
   */
  async queryDictDataItemWithOptions(request: $_model.QueryDictDataItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDictDataItemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.classifyItemCode)) {
      query["ClassifyItemCode"] = request.classifyItemCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDictDataItem",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDictDataItemResponse>(await this.callApi(params, req, runtime), new $_model.QueryDictDataItemResponse({}));
  }

  /**
   * @param request - QueryDictDataItemRequest
   * @returns QueryDictDataItemResponse
   */
  async queryDictDataItem(request: $_model.QueryDictDataItemRequest): Promise<$_model.QueryDictDataItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDictDataItemWithOptions(request, runtime);
  }

  /**
   * @param request - QueryGateVerifyBillingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryGateVerifyBillingResponse
   */
  async queryGateVerifyBillingWithOptions(request: $_model.QueryGateVerifyBillingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryGateVerifyBillingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authenticationType)) {
      query["AuthenticationType"] = request.authenticationType;
    }

    if (!$dara.isNull(request.month)) {
      query["Month"] = request.month;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryGateVerifyBilling",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryGateVerifyBillingResponse>(await this.callApi(params, req, runtime), new $_model.QueryGateVerifyBillingResponse({}));
  }

  /**
   * @param request - QueryGateVerifyBillingRequest
   * @returns QueryGateVerifyBillingResponse
   */
  async queryGateVerifyBilling(request: $_model.QueryGateVerifyBillingRequest): Promise<$_model.QueryGateVerifyBillingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryGateVerifyBillingWithOptions(request, runtime);
  }

  /**
   * @param request - QueryGateVerifyRecordListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryGateVerifyRecordListResponse
   */
  async queryGateVerifyRecordListWithOptions(request: $_model.QueryGateVerifyRecordListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryGateVerifyRecordListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authenticationType)) {
      query["AuthenticationType"] = request.authenticationType;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNum)) {
      query["PhoneNum"] = request.phoneNum;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.queryDate)) {
      query["QueryDate"] = request.queryDate;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryGateVerifyRecordList",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryGateVerifyRecordListResponse>(await this.callApi(params, req, runtime), new $_model.QueryGateVerifyRecordListResponse({}));
  }

  /**
   * @param request - QueryGateVerifyRecordListRequest
   * @returns QueryGateVerifyRecordListResponse
   */
  async queryGateVerifyRecordList(request: $_model.QueryGateVerifyRecordListRequest): Promise<$_model.QueryGateVerifyRecordListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryGateVerifyRecordListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryGateVerifyStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryGateVerifyStatisticResponse
   */
  async queryGateVerifyStatisticWithOptions(request: $_model.QueryGateVerifyStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryGateVerifyStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authenticationType)) {
      query["AuthenticationType"] = request.authenticationType;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryGateVerifyStatistic",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryGateVerifyStatisticResponse>(await this.callApi(params, req, runtime), new $_model.QueryGateVerifyStatisticResponse({}));
  }

  /**
   * @param request - QueryGateVerifyStatisticRequest
   * @returns QueryGateVerifyStatisticResponse
   */
  async queryGateVerifyStatistic(request: $_model.QueryGateVerifyStatisticRequest): Promise<$_model.QueryGateVerifyStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryGateVerifyStatisticWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPnsConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPnsConfigResponse
   */
  async queryPnsConfigWithOptions(request: $_model.QueryPnsConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPnsConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPnsConfig",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPnsConfigResponse>(await this.callApi(params, req, runtime), new $_model.QueryPnsConfigResponse({}));
  }

  /**
   * @param request - QueryPnsConfigRequest
   * @returns QueryPnsConfigResponse
   */
  async queryPnsConfig(request: $_model.QueryPnsConfigRequest): Promise<$_model.QueryPnsConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPnsConfigWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPnsPackageDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPnsPackageDetailResponse
   */
  async queryPnsPackageDetailWithOptions(request: $_model.QueryPnsPackageDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPnsPackageDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPnsPackageDetail",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPnsPackageDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryPnsPackageDetailResponse({}));
  }

  /**
   * @param request - QueryPnsPackageDetailRequest
   * @returns QueryPnsPackageDetailResponse
   */
  async queryPnsPackageDetail(request: $_model.QueryPnsPackageDetailRequest): Promise<$_model.QueryPnsPackageDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPnsPackageDetailWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPnsPackageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPnsPackageListResponse
   */
  async queryPnsPackageListWithOptions(request: $_model.QueryPnsPackageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPnsPackageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billCycle)) {
      query["BillCycle"] = request.billCycle;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPnsPackageList",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPnsPackageListResponse>(await this.callApi(params, req, runtime), new $_model.QueryPnsPackageListResponse({}));
  }

  /**
   * @param request - QueryPnsPackageListRequest
   * @returns QueryPnsPackageListResponse
   */
  async queryPnsPackageList(request: $_model.QueryPnsPackageListRequest): Promise<$_model.QueryPnsPackageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPnsPackageListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPnsPackageStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPnsPackageStatisticsResponse
   */
  async queryPnsPackageStatisticsWithOptions(request: $_model.QueryPnsPackageStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPnsPackageStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPnsPackageStatistics",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPnsPackageStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.QueryPnsPackageStatisticsResponse({}));
  }

  /**
   * @param request - QueryPnsPackageStatisticsRequest
   * @returns QueryPnsPackageStatisticsResponse
   */
  async queryPnsPackageStatistics(request: $_model.QueryPnsPackageStatisticsRequest): Promise<$_model.QueryPnsPackageStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPnsPackageStatisticsWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySceneListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySceneListResponse
   */
  async querySceneListWithOptions(request: $_model.QuerySceneListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySceneListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySceneList",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySceneListResponse>(await this.callApi(params, req, runtime), new $_model.QuerySceneListResponse({}));
  }

  /**
   * @param request - QuerySceneListRequest
   * @returns QuerySceneListResponse
   */
  async querySceneList(request: $_model.QuerySceneListRequest): Promise<$_model.QuerySceneListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySceneListWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySdkVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySdkVersionResponse
   */
  async querySdkVersionWithOptions(request: $_model.QuerySdkVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySdkVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.customerId)) {
      query["customerId"] = request.customerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["prodCode"] = request.prodCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySdkVersion",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySdkVersionResponse>(await this.callApi(params, req, runtime), new $_model.QuerySdkVersionResponse({}));
  }

  /**
   * @param request - QuerySdkVersionRequest
   * @returns QuerySdkVersionResponse
   */
  async querySdkVersion(request: $_model.QuerySdkVersionRequest): Promise<$_model.QuerySdkVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySdkVersionWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTagStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTagStatusResponse
   */
  async queryTagStatusWithOptions(request: $_model.QueryTagStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTagStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.attrKey)) {
      query["AttrKey"] = request.attrKey;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTagStatus",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTagStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryTagStatusResponse({}));
  }

  /**
   * @param request - QueryTagStatusRequest
   * @returns QueryTagStatusResponse
   */
  async queryTagStatus(request: $_model.QueryTagStatusRequest): Promise<$_model.QueryTagStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTagStatusWithOptions(request, runtime);
  }

  /**
   * @param request - RemoveGateVerifyExportLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveGateVerifyExportLogResponse
   */
  async removeGateVerifyExportLogWithOptions(request: $_model.RemoveGateVerifyExportLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveGateVerifyExportLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveGateVerifyExportLog",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveGateVerifyExportLogResponse>(await this.callApi(params, req, runtime), new $_model.RemoveGateVerifyExportLogResponse({}));
  }

  /**
   * @param request - RemoveGateVerifyExportLogRequest
   * @returns RemoveGateVerifyExportLogResponse
   */
  async removeGateVerifyExportLog(request: $_model.RemoveGateVerifyExportLogRequest): Promise<$_model.RemoveGateVerifyExportLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeGateVerifyExportLogWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitEnterpriseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitEnterpriseInfoResponse
   */
  async submitEnterpriseInfoWithOptions(request: $_model.SubmitEnterpriseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitEnterpriseInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessLicenseAddress)) {
      query["BusinessLicenseAddress"] = request.businessLicenseAddress;
    }

    if (!$dara.isNull(request.businessLicensePicture)) {
      query["BusinessLicensePicture"] = request.businessLicensePicture;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.enterpriseName)) {
      query["EnterpriseName"] = request.enterpriseName;
    }

    if (!$dara.isNull(request.legalPersonCertNumber)) {
      query["LegalPersonCertNumber"] = request.legalPersonCertNumber;
    }

    if (!$dara.isNull(request.legalPersonCertPicture)) {
      query["LegalPersonCertPicture"] = request.legalPersonCertPicture;
    }

    if (!$dara.isNull(request.legalPersonName)) {
      query["LegalPersonName"] = request.legalPersonName;
    }

    if (!$dara.isNull(request.managerCertNumber)) {
      query["ManagerCertNumber"] = request.managerCertNumber;
    }

    if (!$dara.isNull(request.managerCertPicture)) {
      query["ManagerCertPicture"] = request.managerCertPicture;
    }

    if (!$dara.isNull(request.managerContactNumber)) {
      query["ManagerContactNumber"] = request.managerContactNumber;
    }

    if (!$dara.isNull(request.managerName)) {
      query["ManagerName"] = request.managerName;
    }

    if (!$dara.isNull(request.numberApplicationLetterPicture)) {
      query["NumberApplicationLetterPicture"] = request.numberApplicationLetterPicture;
    }

    if (!$dara.isNull(request.organizationCode)) {
      query["OrganizationCode"] = request.organizationCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.undertakingPicture)) {
      query["UndertakingPicture"] = request.undertakingPicture;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitEnterpriseInfo",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitEnterpriseInfoResponse>(await this.callApi(params, req, runtime), new $_model.SubmitEnterpriseInfoResponse({}));
  }

  /**
   * @param request - SubmitEnterpriseInfoRequest
   * @returns SubmitEnterpriseInfoResponse
   */
  async submitEnterpriseInfo(request: $_model.SubmitEnterpriseInfoRequest): Promise<$_model.SubmitEnterpriseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitEnterpriseInfoWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateExportLogStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExportLogStateResponse
   */
  async updateExportLogStateWithOptions(request: $_model.UpdateExportLogStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExportLogStateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExportLogState",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateExportLogStateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateExportLogStateResponse({}));
  }

  /**
   * @param request - UpdateExportLogStateRequest
   * @returns UpdateExportLogStateResponse
   */
  async updateExportLogState(request: $_model.UpdateExportLogStateRequest): Promise<$_model.UpdateExportLogStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateExportLogStateWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateSmsCodeLimitConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmsCodeLimitConfigResponse
   */
  async updateSmsCodeLimitConfigWithOptions(request: $_model.UpdateSmsCodeLimitConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmsCodeLimitConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.limitDay)) {
      query["LimitDay"] = request.limitDay;
    }

    if (!$dara.isNull(request.limitHour)) {
      query["LimitHour"] = request.limitHour;
    }

    if (!$dara.isNull(request.limitId)) {
      query["LimitId"] = request.limitId;
    }

    if (!$dara.isNull(request.limitMinute)) {
      query["LimitMinute"] = request.limitMinute;
    }

    if (!$dara.isNull(request.limitOther)) {
      query["LimitOther"] = request.limitOther;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmsCodeLimitConfig",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmsCodeLimitConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmsCodeLimitConfigResponse({}));
  }

  /**
   * @param request - UpdateSmsCodeLimitConfigRequest
   * @returns UpdateSmsCodeLimitConfigResponse
   */
  async updateSmsCodeLimitConfig(request: $_model.UpdateSmsCodeLimitConfigRequest): Promise<$_model.UpdateSmsCodeLimitConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmsCodeLimitConfigWithOptions(request, runtime);
  }

}
