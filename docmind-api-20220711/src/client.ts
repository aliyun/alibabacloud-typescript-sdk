// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi, * as $OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "docmind-api.aliyuncs.com",
      'ap-northeast-2-pop': "docmind-api.aliyuncs.com",
      'ap-south-1': "docmind-api.aliyuncs.com",
      'ap-southeast-1': "docmind-api.aliyuncs.com",
      'ap-southeast-2': "docmind-api.aliyuncs.com",
      'ap-southeast-3': "docmind-api.aliyuncs.com",
      'ap-southeast-5': "docmind-api.aliyuncs.com",
      'cn-beijing': "docmind-api.aliyuncs.com",
      'cn-beijing-finance-1': "docmind-api.aliyuncs.com",
      'cn-beijing-finance-pop': "docmind-api.aliyuncs.com",
      'cn-beijing-gov-1': "docmind-api.aliyuncs.com",
      'cn-beijing-nu16-b01': "docmind-api.aliyuncs.com",
      'cn-chengdu': "docmind-api.aliyuncs.com",
      'cn-edge-1': "docmind-api.aliyuncs.com",
      'cn-fujian': "docmind-api.aliyuncs.com",
      'cn-haidian-cm12-c01': "docmind-api.aliyuncs.com",
      'cn-hangzhou-bj-b01': "docmind-api.aliyuncs.com",
      'cn-hangzhou-finance': "docmind-api.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "docmind-api.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "docmind-api.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "docmind-api.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "docmind-api.aliyuncs.com",
      'cn-hangzhou-test-306': "docmind-api.aliyuncs.com",
      'cn-hongkong': "docmind-api.aliyuncs.com",
      'cn-hongkong-finance-pop': "docmind-api.aliyuncs.com",
      'cn-huhehaote': "docmind-api.aliyuncs.com",
      'cn-huhehaote-nebula-1': "docmind-api.aliyuncs.com",
      'cn-north-2-gov-1': "docmind-api.aliyuncs.com",
      'cn-qingdao': "docmind-api.aliyuncs.com",
      'cn-qingdao-nebula': "docmind-api.aliyuncs.com",
      'cn-shanghai': "docmind-api.aliyuncs.com",
      'cn-shanghai-et15-b01': "docmind-api.aliyuncs.com",
      'cn-shanghai-et2-b01': "docmind-api.aliyuncs.com",
      'cn-shanghai-finance-1': "docmind-api.aliyuncs.com",
      'cn-shanghai-inner': "docmind-api.aliyuncs.com",
      'cn-shanghai-internal-test-1': "docmind-api.aliyuncs.com",
      'cn-shenzhen': "docmind-api.aliyuncs.com",
      'cn-shenzhen-finance-1': "docmind-api.aliyuncs.com",
      'cn-shenzhen-inner': "docmind-api.aliyuncs.com",
      'cn-shenzhen-st4-d01': "docmind-api.aliyuncs.com",
      'cn-shenzhen-su18-b01': "docmind-api.aliyuncs.com",
      'cn-wuhan': "docmind-api.aliyuncs.com",
      'cn-wulanchabu': "docmind-api.aliyuncs.com",
      'cn-yushanfang': "docmind-api.aliyuncs.com",
      'cn-zhangbei': "docmind-api.aliyuncs.com",
      'cn-zhangbei-na61-b01': "docmind-api.aliyuncs.com",
      'cn-zhangjiakou': "docmind-api.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "docmind-api.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "docmind-api.aliyuncs.com",
      'eu-central-1': "docmind-api.aliyuncs.com",
      'eu-west-1': "docmind-api.aliyuncs.com",
      'eu-west-1-oxs': "docmind-api.aliyuncs.com",
      'me-east-1': "docmind-api.aliyuncs.com",
      'rus-west-1-pop': "docmind-api.aliyuncs.com",
      'us-east-1': "docmind-api.aliyuncs.com",
      'us-west-1': "docmind-api.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("docmind-api", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }

  async _postOSSObject(bucketName: string, form: {[key: string]: any}): Promise<{[key: string]: any}> {
    let request_ = new $dara.Request();
    let boundary = $dara.Form.getBoundary();
    request_.protocol = "HTTPS";
    request_.method = "POST";
    request_.pathname = `/`;
    request_.headers = {
      host: String(form["host"]),
      date: OpenApiUtil.getDateUTCString(),
      'user-agent': OpenApiUtil.getUserAgent(""),
    };
    request_.headers["content-type"] = `multipart/form-data; boundary=${boundary}`;
    request_.body = $dara.Form.toFileForm(form, boundary);
    let response_ = await $dara.doAction(request_);

    let respMap : {[key: string]: any} = null;
    let bodyStr = await $dara.Stream.readAsString(response_.body);
    if ((response_.statusCode >= 400) && (response_.statusCode < 600)) {
      respMap = $dara.XML.parseXml(bodyStr, null);
      let err = respMap["Error"];
      throw new $OpenApi.ClientError({
        code: String(err["Code"]),
        message: String(err["Message"]),
        data: {
          httpCode: response_.statusCode,
          requestId: String(err["RequestId"]),
          hostId: String(err["HostId"]),
        },
      });
    }

    respMap = $dara.XML.parseXml(bodyStr, null);
    return {
      ...respMap,
    };
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
   * 整票识别
   * 
   * @param tmpReq - AyncTradeDocumentPackageExtractSmartAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AyncTradeDocumentPackageExtractSmartAppResponse
   */
  async ayncTradeDocumentPackageExtractSmartAppWithOptions(tmpReq: $_model.AyncTradeDocumentPackageExtractSmartAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AyncTradeDocumentPackageExtractSmartAppResponse> {
    tmpReq.validate();
    let request = new $_model.AyncTradeDocumentPackageExtractSmartAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customExtractionRange)) {
      request.customExtractionRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customExtractionRange, "CustomExtractionRange", "json");
    }

    let query = { };
    if (!$dara.isNull(request.customExtractionRangeShrink)) {
      query["CustomExtractionRange"] = request.customExtractionRangeShrink;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AyncTradeDocumentPackageExtractSmartApp",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AyncTradeDocumentPackageExtractSmartAppResponse>(await this.callApi(params, req, runtime), new $_model.AyncTradeDocumentPackageExtractSmartAppResponse({}));
  }

  /**
   * 整票识别
   * 
   * @param request - AyncTradeDocumentPackageExtractSmartAppRequest
   * @returns AyncTradeDocumentPackageExtractSmartAppResponse
   */
  async ayncTradeDocumentPackageExtractSmartApp(request: $_model.AyncTradeDocumentPackageExtractSmartAppRequest): Promise<$_model.AyncTradeDocumentPackageExtractSmartAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.ayncTradeDocumentPackageExtractSmartAppWithOptions(request, runtime);
  }

  /**
   * 文档结构化流式接口
   * 
   * @param request - GetDocParserResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocParserResultResponse
   */
  async getDocParserResultWithOptions(request: $_model.GetDocParserResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocParserResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.layoutNum)) {
      query["LayoutNum"] = request.layoutNum;
    }

    if (!$dara.isNull(request.layoutStepSize)) {
      query["LayoutStepSize"] = request.layoutStepSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocParserResult",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocParserResultResponse>(await this.callApi(params, req, runtime), new $_model.GetDocParserResultResponse({}));
  }

  /**
   * 文档结构化流式接口
   * 
   * @param request - GetDocParserResultRequest
   * @returns GetDocParserResultResponse
   */
  async getDocParserResult(request: $_model.GetDocParserResultRequest): Promise<$_model.GetDocParserResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocParserResultWithOptions(request, runtime);
  }

  /**
   * 文档智能解析结果查询
   * 
   * @param request - GetDocStructureResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocStructureResultResponse
   */
  async getDocStructureResultWithOptions(request: $_model.GetDocStructureResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocStructureResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.imageStrategy)) {
      query["ImageStrategy"] = request.imageStrategy;
    }

    if (!$dara.isNull(request.revealMarkdown)) {
      query["RevealMarkdown"] = request.revealMarkdown;
    }

    if (!$dara.isNull(request.useUrlResponseBody)) {
      query["UseUrlResponseBody"] = request.useUrlResponseBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocStructureResult",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocStructureResultResponse>(await this.callApi(params, req, runtime), new $_model.GetDocStructureResultResponse({}));
  }

  /**
   * 文档智能解析结果查询
   * 
   * @param request - GetDocStructureResultRequest
   * @returns GetDocStructureResultResponse
   */
  async getDocStructureResult(request: $_model.GetDocStructureResultRequest): Promise<$_model.GetDocStructureResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocStructureResultWithOptions(request, runtime);
  }

  /**
   * 文档对比结果查询
   * 
   * @param request - GetDocumentCompareResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentCompareResultResponse
   */
  async getDocumentCompareResultWithOptions(request: $_model.GetDocumentCompareResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocumentCompareResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentCompareResult",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocumentCompareResultResponse>(await this.callApi(params, req, runtime), new $_model.GetDocumentCompareResultResponse({}));
  }

  /**
   * 文档对比结果查询
   * 
   * @param request - GetDocumentCompareResultRequest
   * @returns GetDocumentCompareResultResponse
   */
  async getDocumentCompareResult(request: $_model.GetDocumentCompareResultRequest): Promise<$_model.GetDocumentCompareResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocumentCompareResultWithOptions(request, runtime);
  }

  /**
   * 文档转换结果查询
   * 
   * @param request - GetDocumentConvertResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentConvertResultResponse
   */
  async getDocumentConvertResultWithOptions(request: $_model.GetDocumentConvertResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocumentConvertResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentConvertResult",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocumentConvertResultResponse>(await this.callApi(params, req, runtime), new $_model.GetDocumentConvertResultResponse({}));
  }

  /**
   * 文档转换结果查询
   * 
   * @param request - GetDocumentConvertResultRequest
   * @returns GetDocumentConvertResultResponse
   */
  async getDocumentConvertResult(request: $_model.GetDocumentConvertResultRequest): Promise<$_model.GetDocumentConvertResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocumentConvertResultWithOptions(request, runtime);
  }

  /**
   * 文档抽取结果查询
   * 
   * @param request - GetDocumentExtractResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentExtractResultResponse
   */
  async getDocumentExtractResultWithOptions(request: $_model.GetDocumentExtractResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocumentExtractResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentExtractResult",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocumentExtractResultResponse>(await this.callApi(params, req, runtime), new $_model.GetDocumentExtractResultResponse({}));
  }

  /**
   * 文档抽取结果查询
   * 
   * @param request - GetDocumentExtractResultRequest
   * @returns GetDocumentExtractResultResponse
   */
  async getDocumentExtractResult(request: $_model.GetDocumentExtractResultRequest): Promise<$_model.GetDocumentExtractResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocumentExtractResultWithOptions(request, runtime);
  }

  /**
   * openmind
   * 
   * @param request - GetPageNumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPageNumResponse
   */
  async getPageNumWithOptions(request: $_model.GetPageNumRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPageNumResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPageNum",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPageNumResponse>(await this.callApi(params, req, runtime), new $_model.GetPageNumResponse({}));
  }

  /**
   * openmind
   * 
   * @param request - GetPageNumRequest
   * @returns GetPageNumResponse
   */
  async getPageNum(request: $_model.GetPageNumRequest): Promise<$_model.GetPageNumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPageNumWithOptions(request, runtime);
  }

  /**
   * 表格智能解析结果查询
   * 
   * @param request - GetTableUnderstandingResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableUnderstandingResultResponse
   */
  async getTableUnderstandingResultWithOptions(request: $_model.GetTableUnderstandingResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableUnderstandingResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableUnderstandingResult",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableUnderstandingResultResponse>(await this.callApi(params, req, runtime), new $_model.GetTableUnderstandingResultResponse({}));
  }

  /**
   * 表格智能解析结果查询
   * 
   * @param request - GetTableUnderstandingResultRequest
   * @returns GetTableUnderstandingResultResponse
   */
  async getTableUnderstandingResult(request: $_model.GetTableUnderstandingResultRequest): Promise<$_model.GetTableUnderstandingResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableUnderstandingResultWithOptions(request, runtime);
  }

  /**
   * 获取文档智能解析处理状态
   * 
   * @param request - QueryDocParserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDocParserStatusResponse
   */
  async queryDocParserStatusWithOptions(request: $_model.QueryDocParserStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDocParserStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDocParserStatus",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDocParserStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryDocParserStatusResponse({}));
  }

  /**
   * 获取文档智能解析处理状态
   * 
   * @param request - QueryDocParserStatusRequest
   * @returns QueryDocParserStatusResponse
   */
  async queryDocParserStatus(request: $_model.QueryDocParserStatusRequest): Promise<$_model.QueryDocParserStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDocParserStatusWithOptions(request, runtime);
  }

  /**
   * 图片转excel
   * 
   * @param tmpReq - SubmitConvertImageToExcelJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertImageToExcelJobResponse
   */
  async submitConvertImageToExcelJobWithOptions(tmpReq: $_model.SubmitConvertImageToExcelJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitConvertImageToExcelJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitConvertImageToExcelJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.imageNames)) {
      request.imageNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageNames, "ImageNames", "simple");
    }

    if (!$dara.isNull(tmpReq.imageUrls)) {
      request.imageUrlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageUrls, "ImageUrls", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.forceMergeExcel)) {
      query["ForceMergeExcel"] = request.forceMergeExcel;
    }

    if (!$dara.isNull(request.imageNameExtension)) {
      query["ImageNameExtension"] = request.imageNameExtension;
    }

    if (!$dara.isNull(request.imageNamesShrink)) {
      query["ImageNames"] = request.imageNamesShrink;
    }

    if (!$dara.isNull(request.imageUrlsShrink)) {
      query["ImageUrls"] = request.imageUrlsShrink;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitConvertImageToExcelJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitConvertImageToExcelJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitConvertImageToExcelJobResponse({}));
  }

  /**
   * 图片转excel
   * 
   * @param request - SubmitConvertImageToExcelJobRequest
   * @returns SubmitConvertImageToExcelJobResponse
   */
  async submitConvertImageToExcelJob(request: $_model.SubmitConvertImageToExcelJobRequest): Promise<$_model.SubmitConvertImageToExcelJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitConvertImageToExcelJobWithOptions(request, runtime);
  }

  /**
   * 图片转markdown
   * 
   * @param tmpReq - SubmitConvertImageToMarkdownJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertImageToMarkdownJobResponse
   */
  async submitConvertImageToMarkdownJobWithOptions(tmpReq: $_model.SubmitConvertImageToMarkdownJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitConvertImageToMarkdownJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitConvertImageToMarkdownJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.imageNames)) {
      request.imageNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageNames, "ImageNames", "simple");
    }

    if (!$dara.isNull(tmpReq.imageUrls)) {
      request.imageUrlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageUrls, "ImageUrls", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.imageNameExtension)) {
      query["ImageNameExtension"] = request.imageNameExtension;
    }

    if (!$dara.isNull(request.imageNamesShrink)) {
      query["ImageNames"] = request.imageNamesShrink;
    }

    if (!$dara.isNull(request.imageUrlsShrink)) {
      query["ImageUrls"] = request.imageUrlsShrink;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitConvertImageToMarkdownJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitConvertImageToMarkdownJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitConvertImageToMarkdownJobResponse({}));
  }

  /**
   * 图片转markdown
   * 
   * @param request - SubmitConvertImageToMarkdownJobRequest
   * @returns SubmitConvertImageToMarkdownJobResponse
   */
  async submitConvertImageToMarkdownJob(request: $_model.SubmitConvertImageToMarkdownJobRequest): Promise<$_model.SubmitConvertImageToMarkdownJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitConvertImageToMarkdownJobWithOptions(request, runtime);
  }

  /**
   * 图片转pdf
   * 
   * @param tmpReq - SubmitConvertImageToPdfJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertImageToPdfJobResponse
   */
  async submitConvertImageToPdfJobWithOptions(tmpReq: $_model.SubmitConvertImageToPdfJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitConvertImageToPdfJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitConvertImageToPdfJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.imageNames)) {
      request.imageNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageNames, "ImageNames", "simple");
    }

    if (!$dara.isNull(tmpReq.imageUrls)) {
      request.imageUrlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageUrls, "ImageUrls", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.imageNameExtension)) {
      query["ImageNameExtension"] = request.imageNameExtension;
    }

    if (!$dara.isNull(request.imageNamesShrink)) {
      query["ImageNames"] = request.imageNamesShrink;
    }

    if (!$dara.isNull(request.imageUrlsShrink)) {
      query["ImageUrls"] = request.imageUrlsShrink;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitConvertImageToPdfJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitConvertImageToPdfJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitConvertImageToPdfJobResponse({}));
  }

  /**
   * 图片转pdf
   * 
   * @param request - SubmitConvertImageToPdfJobRequest
   * @returns SubmitConvertImageToPdfJobResponse
   */
  async submitConvertImageToPdfJob(request: $_model.SubmitConvertImageToPdfJobRequest): Promise<$_model.SubmitConvertImageToPdfJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitConvertImageToPdfJobWithOptions(request, runtime);
  }

  /**
   * 图片转word
   * 
   * @param tmpReq - SubmitConvertImageToWordJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertImageToWordJobResponse
   */
  async submitConvertImageToWordJobWithOptions(tmpReq: $_model.SubmitConvertImageToWordJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitConvertImageToWordJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitConvertImageToWordJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.imageNames)) {
      request.imageNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageNames, "ImageNames", "simple");
    }

    if (!$dara.isNull(tmpReq.imageUrls)) {
      request.imageUrlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageUrls, "ImageUrls", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.imageNameExtension)) {
      query["ImageNameExtension"] = request.imageNameExtension;
    }

    if (!$dara.isNull(request.imageNamesShrink)) {
      query["ImageNames"] = request.imageNamesShrink;
    }

    if (!$dara.isNull(request.imageUrlsShrink)) {
      query["ImageUrls"] = request.imageUrlsShrink;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitConvertImageToWordJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitConvertImageToWordJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitConvertImageToWordJobResponse({}));
  }

  /**
   * 图片转word
   * 
   * @param request - SubmitConvertImageToWordJobRequest
   * @returns SubmitConvertImageToWordJobResponse
   */
  async submitConvertImageToWordJob(request: $_model.SubmitConvertImageToWordJobRequest): Promise<$_model.SubmitConvertImageToWordJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitConvertImageToWordJobWithOptions(request, runtime);
  }

  /**
   * pdf转excel
   * 
   * @param request - SubmitConvertPdfToExcelJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertPdfToExcelJobResponse
   */
  async submitConvertPdfToExcelJobWithOptions(request: $_model.SubmitConvertPdfToExcelJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitConvertPdfToExcelJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.forceExportInnerImage)) {
      query["ForceExportInnerImage"] = request.forceExportInnerImage;
    }

    if (!$dara.isNull(request.forceMergeExcel)) {
      query["ForceMergeExcel"] = request.forceMergeExcel;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitConvertPdfToExcelJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitConvertPdfToExcelJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitConvertPdfToExcelJobResponse({}));
  }

  /**
   * pdf转excel
   * 
   * @param request - SubmitConvertPdfToExcelJobRequest
   * @returns SubmitConvertPdfToExcelJobResponse
   */
  async submitConvertPdfToExcelJob(request: $_model.SubmitConvertPdfToExcelJobRequest): Promise<$_model.SubmitConvertPdfToExcelJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitConvertPdfToExcelJobWithOptions(request, runtime);
  }

  async submitConvertPdfToExcelJobAdvance(request: $_model.SubmitConvertPdfToExcelJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitConvertPdfToExcelJobResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "docmind-api",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let submitConvertPdfToExcelJobReq = new $_model.SubmitConvertPdfToExcelJobRequest({ });
    OpenApiUtil.convert(request, submitConvertPdfToExcelJobReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      submitConvertPdfToExcelJobReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let submitConvertPdfToExcelJobResp = await this.submitConvertPdfToExcelJobWithOptions(submitConvertPdfToExcelJobReq, runtime);
    return submitConvertPdfToExcelJobResp;
  }

  /**
   * pdf转图片
   * 
   * @param request - SubmitConvertPdfToImageJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertPdfToImageJobResponse
   */
  async submitConvertPdfToImageJobWithOptions(request: $_model.SubmitConvertPdfToImageJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitConvertPdfToImageJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitConvertPdfToImageJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitConvertPdfToImageJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitConvertPdfToImageJobResponse({}));
  }

  /**
   * pdf转图片
   * 
   * @param request - SubmitConvertPdfToImageJobRequest
   * @returns SubmitConvertPdfToImageJobResponse
   */
  async submitConvertPdfToImageJob(request: $_model.SubmitConvertPdfToImageJobRequest): Promise<$_model.SubmitConvertPdfToImageJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitConvertPdfToImageJobWithOptions(request, runtime);
  }

  async submitConvertPdfToImageJobAdvance(request: $_model.SubmitConvertPdfToImageJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitConvertPdfToImageJobResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "docmind-api",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let submitConvertPdfToImageJobReq = new $_model.SubmitConvertPdfToImageJobRequest({ });
    OpenApiUtil.convert(request, submitConvertPdfToImageJobReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      submitConvertPdfToImageJobReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let submitConvertPdfToImageJobResp = await this.submitConvertPdfToImageJobWithOptions(submitConvertPdfToImageJobReq, runtime);
    return submitConvertPdfToImageJobResp;
  }

  /**
   * pdf转markdown
   * 
   * @param request - SubmitConvertPdfToMarkdownJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertPdfToMarkdownJobResponse
   */
  async submitConvertPdfToMarkdownJobWithOptions(request: $_model.SubmitConvertPdfToMarkdownJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitConvertPdfToMarkdownJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitConvertPdfToMarkdownJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitConvertPdfToMarkdownJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitConvertPdfToMarkdownJobResponse({}));
  }

  /**
   * pdf转markdown
   * 
   * @param request - SubmitConvertPdfToMarkdownJobRequest
   * @returns SubmitConvertPdfToMarkdownJobResponse
   */
  async submitConvertPdfToMarkdownJob(request: $_model.SubmitConvertPdfToMarkdownJobRequest): Promise<$_model.SubmitConvertPdfToMarkdownJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitConvertPdfToMarkdownJobWithOptions(request, runtime);
  }

  async submitConvertPdfToMarkdownJobAdvance(request: $_model.SubmitConvertPdfToMarkdownJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitConvertPdfToMarkdownJobResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "docmind-api",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let submitConvertPdfToMarkdownJobReq = new $_model.SubmitConvertPdfToMarkdownJobRequest({ });
    OpenApiUtil.convert(request, submitConvertPdfToMarkdownJobReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      submitConvertPdfToMarkdownJobReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let submitConvertPdfToMarkdownJobResp = await this.submitConvertPdfToMarkdownJobWithOptions(submitConvertPdfToMarkdownJobReq, runtime);
    return submitConvertPdfToMarkdownJobResp;
  }

  /**
   * pdf转word
   * 
   * @param request - SubmitConvertPdfToWordJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitConvertPdfToWordJobResponse
   */
  async submitConvertPdfToWordJobWithOptions(request: $_model.SubmitConvertPdfToWordJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitConvertPdfToWordJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.forceExportInnerImage)) {
      query["ForceExportInnerImage"] = request.forceExportInnerImage;
    }

    if (!$dara.isNull(request.formulaEnhancement)) {
      query["FormulaEnhancement"] = request.formulaEnhancement;
    }

    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitConvertPdfToWordJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitConvertPdfToWordJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitConvertPdfToWordJobResponse({}));
  }

  /**
   * pdf转word
   * 
   * @param request - SubmitConvertPdfToWordJobRequest
   * @returns SubmitConvertPdfToWordJobResponse
   */
  async submitConvertPdfToWordJob(request: $_model.SubmitConvertPdfToWordJobRequest): Promise<$_model.SubmitConvertPdfToWordJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitConvertPdfToWordJobWithOptions(request, runtime);
  }

  async submitConvertPdfToWordJobAdvance(request: $_model.SubmitConvertPdfToWordJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitConvertPdfToWordJobResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "docmind-api",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let submitConvertPdfToWordJobReq = new $_model.SubmitConvertPdfToWordJobRequest({ });
    OpenApiUtil.convert(request, submitConvertPdfToWordJobReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      submitConvertPdfToWordJobReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let submitConvertPdfToWordJobResp = await this.submitConvertPdfToWordJobWithOptions(submitConvertPdfToWordJobReq, runtime);
    return submitConvertPdfToWordJobResp;
  }

  /**
   * 电子解析
   * 
   * @param request - SubmitDigitalDocStructureJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDigitalDocStructureJobResponse
   */
  async submitDigitalDocStructureJobWithOptions(request: $_model.SubmitDigitalDocStructureJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDigitalDocStructureJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.imageStrategy)) {
      query["ImageStrategy"] = request.imageStrategy;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!$dara.isNull(request.revealMarkdown)) {
      query["RevealMarkdown"] = request.revealMarkdown;
    }

    if (!$dara.isNull(request.useUrlResponseBody)) {
      query["UseUrlResponseBody"] = request.useUrlResponseBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDigitalDocStructureJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDigitalDocStructureJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitDigitalDocStructureJobResponse({}));
  }

  /**
   * 电子解析
   * 
   * @param request - SubmitDigitalDocStructureJobRequest
   * @returns SubmitDigitalDocStructureJobResponse
   */
  async submitDigitalDocStructureJob(request: $_model.SubmitDigitalDocStructureJobRequest): Promise<$_model.SubmitDigitalDocStructureJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDigitalDocStructureJobWithOptions(request, runtime);
  }

  async submitDigitalDocStructureJobAdvance(request: $_model.SubmitDigitalDocStructureJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDigitalDocStructureJobResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "docmind-api",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let submitDigitalDocStructureJobReq = new $_model.SubmitDigitalDocStructureJobRequest({ });
    OpenApiUtil.convert(request, submitDigitalDocStructureJobReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      submitDigitalDocStructureJobReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let submitDigitalDocStructureJobResp = await this.submitDigitalDocStructureJobWithOptions(submitDigitalDocStructureJobReq, runtime);
    return submitDigitalDocStructureJobResp;
  }

  /**
   * 文档智能解析流式输出
   * 
   * @param tmpReq - SubmitDocParserJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDocParserJobResponse
   */
  async submitDocParserJobWithOptions(tmpReq: $_model.SubmitDocParserJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDocParserJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitDocParserJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.multimediaParameters)) {
      request.multimediaParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.multimediaParameters, "MultimediaParameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.enhancementMode)) {
      query["EnhancementMode"] = request.enhancementMode;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.formulaEnhancement)) {
      query["FormulaEnhancement"] = request.formulaEnhancement;
    }

    if (!$dara.isNull(request.llmEnhancement)) {
      query["LlmEnhancement"] = request.llmEnhancement;
    }

    if (!$dara.isNull(request.multimediaParametersShrink)) {
      query["MultimediaParameters"] = request.multimediaParametersShrink;
    }

    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!$dara.isNull(request.outputHtmlTable)) {
      query["OutputHtmlTable"] = request.outputHtmlTable;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDocParserJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDocParserJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitDocParserJobResponse({}));
  }

  /**
   * 文档智能解析流式输出
   * 
   * @param request - SubmitDocParserJobRequest
   * @returns SubmitDocParserJobResponse
   */
  async submitDocParserJob(request: $_model.SubmitDocParserJobRequest): Promise<$_model.SubmitDocParserJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDocParserJobWithOptions(request, runtime);
  }

  async submitDocParserJobAdvance(request: $_model.SubmitDocParserJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDocParserJobResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "docmind-api",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let submitDocParserJobReq = new $_model.SubmitDocParserJobRequest({ });
    OpenApiUtil.convert(request, submitDocParserJobReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      submitDocParserJobReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let submitDocParserJobResp = await this.submitDocParserJobWithOptions(submitDocParserJobReq, runtime);
    return submitDocParserJobResp;
  }

  /**
   * 文档智能解析
   * 
   * @param request - SubmitDocStructureJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDocStructureJobResponse
   */
  async submitDocStructureJobWithOptions(request: $_model.SubmitDocStructureJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDocStructureJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowPptFormat)) {
      query["AllowPptFormat"] = request.allowPptFormat;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.formulaEnhancement)) {
      query["FormulaEnhancement"] = request.formulaEnhancement;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.structureType)) {
      query["StructureType"] = request.structureType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDocStructureJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDocStructureJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitDocStructureJobResponse({}));
  }

  /**
   * 文档智能解析
   * 
   * @param request - SubmitDocStructureJobRequest
   * @returns SubmitDocStructureJobResponse
   */
  async submitDocStructureJob(request: $_model.SubmitDocStructureJobRequest): Promise<$_model.SubmitDocStructureJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDocStructureJobWithOptions(request, runtime);
  }

  async submitDocStructureJobAdvance(request: $_model.SubmitDocStructureJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDocStructureJobResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "docmind-api",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let submitDocStructureJobReq = new $_model.SubmitDocStructureJobRequest({ });
    OpenApiUtil.convert(request, submitDocStructureJobReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      submitDocStructureJobReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let submitDocStructureJobResp = await this.submitDocStructureJobWithOptions(submitDocStructureJobReq, runtime);
    return submitDocStructureJobResp;
  }

  /**
   * 文档抽取
   * 
   * @param request - SubmitDocumentExtractJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDocumentExtractJobResponse
   */
  async submitDocumentExtractJobWithOptions(request: $_model.SubmitDocumentExtractJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDocumentExtractJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDocumentExtractJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDocumentExtractJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitDocumentExtractJobResponse({}));
  }

  /**
   * 文档抽取
   * 
   * @param request - SubmitDocumentExtractJobRequest
   * @returns SubmitDocumentExtractJobResponse
   */
  async submitDocumentExtractJob(request: $_model.SubmitDocumentExtractJobRequest): Promise<$_model.SubmitDocumentExtractJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDocumentExtractJobWithOptions(request, runtime);
  }

  async submitDocumentExtractJobAdvance(request: $_model.SubmitDocumentExtractJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDocumentExtractJobResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "docmind-api",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let submitDocumentExtractJobReq = new $_model.SubmitDocumentExtractJobRequest({ });
    OpenApiUtil.convert(request, submitDocumentExtractJobReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      submitDocumentExtractJobReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let submitDocumentExtractJobResp = await this.submitDocumentExtractJobWithOptions(submitDocumentExtractJobReq, runtime);
    return submitDocumentExtractJobResp;
  }

  /**
   * 表格智能解析
   * 
   * @param request - SubmitTableUnderstandingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTableUnderstandingJobResponse
   */
  async submitTableUnderstandingJobWithOptions(request: $_model.SubmitTableUnderstandingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitTableUnderstandingJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitTableUnderstandingJob",
      version: "2022-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitTableUnderstandingJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitTableUnderstandingJobResponse({}));
  }

  /**
   * 表格智能解析
   * 
   * @param request - SubmitTableUnderstandingJobRequest
   * @returns SubmitTableUnderstandingJobResponse
   */
  async submitTableUnderstandingJob(request: $_model.SubmitTableUnderstandingJobRequest): Promise<$_model.SubmitTableUnderstandingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitTableUnderstandingJobWithOptions(request, runtime);
  }

  async submitTableUnderstandingJobAdvance(request: $_model.SubmitTableUnderstandingJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitTableUnderstandingJobResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "docmind-api",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let submitTableUnderstandingJobReq = new $_model.SubmitTableUnderstandingJobRequest({ });
    OpenApiUtil.convert(request, submitTableUnderstandingJobReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      submitTableUnderstandingJobReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let submitTableUnderstandingJobResp = await this.submitTableUnderstandingJobWithOptions(submitTableUnderstandingJobReq, runtime);
    return submitTableUnderstandingJobResp;
  }

}
