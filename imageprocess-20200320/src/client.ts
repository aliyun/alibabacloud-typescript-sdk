// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import * as $OSSUtil from '@alicloud/oss-util';
import * as $FileForm from '@alicloud/tea-fileform';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("imageprocess", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 主动脉瘤肺动脉高压检测
   * 
   * @param request - AnalyzeChestVesselRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeChestVesselResponse
   */
  async analyzeChestVesselWithOptions(request: $_model.AnalyzeChestVesselRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AnalyzeChestVesselResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnalyzeChestVessel",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AnalyzeChestVesselResponse>(await this.callApi(params, req, runtime), new $_model.AnalyzeChestVesselResponse({}));
  }

  /**
   * 主动脉瘤肺动脉高压检测
   * 
   * @param request - AnalyzeChestVesselRequest
   * @returns AnalyzeChestVesselResponse
   */
  async analyzeChestVessel(request: $_model.AnalyzeChestVesselRequest): Promise<$_model.AnalyzeChestVesselResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.analyzeChestVesselWithOptions(request, runtime);
  }

  async analyzeChestVesselAdvance(request: $_model.AnalyzeChestVesselAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AnalyzeChestVesselResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let analyzeChestVesselReq = new $_model.AnalyzeChestVesselRequest({ });
    OpenApiUtil.convert(request, analyzeChestVesselReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.AnalyzeChestVesselRequestURLList = analyzeChestVesselReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let analyzeChestVesselResp = await this.analyzeChestVesselWithOptions(analyzeChestVesselReq, runtime);
    return analyzeChestVesselResp;
  }

  /**
   * 骨密度估计
   * 
   * @param request - CalcBMDRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CalcBMDResponse
   */
  async calcBMDWithOptions(request: $_model.CalcBMDRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CalcBMDResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CalcBMD",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CalcBMDResponse>(await this.callApi(params, req, runtime), new $_model.CalcBMDResponse({}));
  }

  /**
   * 骨密度估计
   * 
   * @param request - CalcBMDRequest
   * @returns CalcBMDResponse
   */
  async calcBMD(request: $_model.CalcBMDRequest): Promise<$_model.CalcBMDResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.calcBMDWithOptions(request, runtime);
  }

  async calcBMDAdvance(request: $_model.CalcBMDAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CalcBMDResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let calcBMDReq = new $_model.CalcBMDRequest({ });
    OpenApiUtil.convert(request, calcBMDReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.CalcBMDRequestURLList = calcBMDReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let calcBMDResp = await this.calcBMDWithOptions(calcBMDReq, runtime);
    return calcBMDResp;
  }

  /**
   * @param request - CalcCACSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CalcCACSResponse
   */
  async calcCACSWithOptions(request: $_model.CalcCACSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CalcCACSResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CalcCACS",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CalcCACSResponse>(await this.callApi(params, req, runtime), new $_model.CalcCACSResponse({}));
  }

  /**
   * @param request - CalcCACSRequest
   * @returns CalcCACSResponse
   */
  async calcCACS(request: $_model.CalcCACSRequest): Promise<$_model.CalcCACSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.calcCACSWithOptions(request, runtime);
  }

  async calcCACSAdvance(request: $_model.CalcCACSAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CalcCACSResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let calcCACSReq = new $_model.CalcCACSRequest({ });
    OpenApiUtil.convert(request, calcCACSReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.CalcCACSRequestURLList = calcCACSReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let calcCACSResp = await this.calcCACSWithOptions(calcCACSReq, runtime);
    return calcCACSResp;
  }

  /**
   * @param request - DetectCovid19CadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectCovid19CadResponse
   */
  async detectCovid19CadWithOptions(request: $_model.DetectCovid19CadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectCovid19CadResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectCovid19Cad",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectCovid19CadResponse>(await this.callApi(params, req, runtime), new $_model.DetectCovid19CadResponse({}));
  }

  /**
   * @param request - DetectCovid19CadRequest
   * @returns DetectCovid19CadResponse
   */
  async detectCovid19Cad(request: $_model.DetectCovid19CadRequest): Promise<$_model.DetectCovid19CadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectCovid19CadWithOptions(request, runtime);
  }

  async detectCovid19CadAdvance(request: $_model.DetectCovid19CadAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectCovid19CadResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let detectCovid19CadReq = new $_model.DetectCovid19CadRequest({ });
    OpenApiUtil.convert(request, detectCovid19CadReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.DetectCovid19CadRequestURLList = detectCovid19CadReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let detectCovid19CadResp = await this.detectCovid19CadWithOptions(detectCovid19CadReq, runtime);
    return detectCovid19CadResp;
  }

  /**
   * 脂肪肝检测
   * 
   * @param request - DetectLiverSteatosisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectLiverSteatosisResponse
   */
  async detectLiverSteatosisWithOptions(request: $_model.DetectLiverSteatosisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectLiverSteatosisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectLiverSteatosis",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectLiverSteatosisResponse>(await this.callApi(params, req, runtime), new $_model.DetectLiverSteatosisResponse({}));
  }

  /**
   * 脂肪肝检测
   * 
   * @param request - DetectLiverSteatosisRequest
   * @returns DetectLiverSteatosisResponse
   */
  async detectLiverSteatosis(request: $_model.DetectLiverSteatosisRequest): Promise<$_model.DetectLiverSteatosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectLiverSteatosisWithOptions(request, runtime);
  }

  async detectLiverSteatosisAdvance(request: $_model.DetectLiverSteatosisAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectLiverSteatosisResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let detectLiverSteatosisReq = new $_model.DetectLiverSteatosisRequest({ });
    OpenApiUtil.convert(request, detectLiverSteatosisReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.DetectLiverSteatosisRequestURLList = detectLiverSteatosisReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let detectLiverSteatosisResp = await this.detectLiverSteatosisWithOptions(detectLiverSteatosisReq, runtime);
    return detectLiverSteatosisResp;
  }

  /**
   * @param request - DetectLungNoduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectLungNoduleResponse
   */
  async detectLungNoduleWithOptions(request: $_model.DetectLungNoduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectLungNoduleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.threshold)) {
      body["Threshold"] = request.threshold;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectLungNodule",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectLungNoduleResponse>(await this.callApi(params, req, runtime), new $_model.DetectLungNoduleResponse({}));
  }

  /**
   * @param request - DetectLungNoduleRequest
   * @returns DetectLungNoduleResponse
   */
  async detectLungNodule(request: $_model.DetectLungNoduleRequest): Promise<$_model.DetectLungNoduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectLungNoduleWithOptions(request, runtime);
  }

  async detectLungNoduleAdvance(request: $_model.DetectLungNoduleAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectLungNoduleResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let detectLungNoduleReq = new $_model.DetectLungNoduleRequest({ });
    OpenApiUtil.convert(request, detectLungNoduleReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.DetectLungNoduleRequestURLList = detectLungNoduleReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let detectLungNoduleResp = await this.detectLungNoduleWithOptions(detectLungNoduleReq, runtime);
    return detectLungNoduleResp;
  }

  /**
   * 淋巴结检测
   * 
   * @param request - DetectLymphRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectLymphResponse
   */
  async detectLymphWithOptions(request: $_model.DetectLymphRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectLymphResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectLymph",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectLymphResponse>(await this.callApi(params, req, runtime), new $_model.DetectLymphResponse({}));
  }

  /**
   * 淋巴结检测
   * 
   * @param request - DetectLymphRequest
   * @returns DetectLymphResponse
   */
  async detectLymph(request: $_model.DetectLymphRequest): Promise<$_model.DetectLymphResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectLymphWithOptions(request, runtime);
  }

  async detectLymphAdvance(request: $_model.DetectLymphAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectLymphResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let detectLymphReq = new $_model.DetectLymphRequest({ });
    OpenApiUtil.convert(request, detectLymphReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.DetectLymphRequestURLList = detectLymphReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let detectLymphResp = await this.detectLymphWithOptions(detectLymphReq, runtime);
    return detectLymphResp;
  }

  /**
   * 胰腺癌检测
   * 
   * @param request - DetectPancRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectPancResponse
   */
  async detectPancWithOptions(request: $_model.DetectPancRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectPancResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectPanc",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectPancResponse>(await this.callApi(params, req, runtime), new $_model.DetectPancResponse({}));
  }

  /**
   * 胰腺癌检测
   * 
   * @param request - DetectPancRequest
   * @returns DetectPancResponse
   */
  async detectPanc(request: $_model.DetectPancRequest): Promise<$_model.DetectPancResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectPancWithOptions(request, runtime);
  }

  async detectPancAdvance(request: $_model.DetectPancAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectPancResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let detectPancReq = new $_model.DetectPancRequest({ });
    OpenApiUtil.convert(request, detectPancReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.DetectPancRequestURLList = detectPancReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let detectPancResp = await this.detectPancWithOptions(detectPancReq, runtime);
    return detectPancResp;
  }

  /**
   * @param request - DetectRibFractureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectRibFractureResponse
   */
  async detectRibFractureWithOptions(request: $_model.DetectRibFractureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectRibFractureResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectRibFracture",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectRibFractureResponse>(await this.callApi(params, req, runtime), new $_model.DetectRibFractureResponse({}));
  }

  /**
   * @param request - DetectRibFractureRequest
   * @returns DetectRibFractureResponse
   */
  async detectRibFracture(request: $_model.DetectRibFractureRequest): Promise<$_model.DetectRibFractureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectRibFractureWithOptions(request, runtime);
  }

  async detectRibFractureAdvance(request: $_model.DetectRibFractureAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectRibFractureResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let detectRibFractureReq = new $_model.DetectRibFractureRequest({ });
    OpenApiUtil.convert(request, detectRibFractureReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.DetectRibFractureRequestURLList = detectRibFractureReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let detectRibFractureResp = await this.detectRibFractureWithOptions(detectRibFractureReq, runtime);
    return detectRibFractureResp;
  }

  /**
   * @param request - DetectSkinDiseaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectSkinDiseaseResponse
   */
  async detectSkinDiseaseWithOptions(request: $_model.DetectSkinDiseaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectSkinDiseaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectSkinDisease",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectSkinDiseaseResponse>(await this.callApi(params, req, runtime), new $_model.DetectSkinDiseaseResponse({}));
  }

  /**
   * @param request - DetectSkinDiseaseRequest
   * @returns DetectSkinDiseaseResponse
   */
  async detectSkinDisease(request: $_model.DetectSkinDiseaseRequest): Promise<$_model.DetectSkinDiseaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectSkinDiseaseWithOptions(request, runtime);
  }

  async detectSkinDiseaseAdvance(request: $_model.DetectSkinDiseaseAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectSkinDiseaseResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let detectSkinDiseaseReq = new $_model.DetectSkinDiseaseRequest({ });
    OpenApiUtil.convert(request, detectSkinDiseaseReq);
    if (!$dara.isNull(request.urlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.urlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      detectSkinDiseaseReq.url = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let detectSkinDiseaseResp = await this.detectSkinDiseaseWithOptions(detectSkinDiseaseReq, runtime);
    return detectSkinDiseaseResp;
  }

  /**
   * 会话反馈
   * 
   * @param request - FeedbackSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FeedbackSessionResponse
   */
  async feedbackSessionWithOptions(request: $_model.FeedbackSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FeedbackSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.feedback)) {
      body["Feedback"] = request.feedback;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FeedbackSession",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FeedbackSessionResponse>(await this.callApi(params, req, runtime), new $_model.FeedbackSessionResponse({}));
  }

  /**
   * 会话反馈
   * 
   * @param request - FeedbackSessionRequest
   * @returns FeedbackSessionResponse
   */
  async feedbackSession(request: $_model.FeedbackSessionRequest): Promise<$_model.FeedbackSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.feedbackSessionWithOptions(request, runtime);
  }

  /**
   * 胸部CT平扫筛查结果报告生成
   * 
   * @param tmpReq - GenerateReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateReportResponse
   */
  async generateReportWithOptions(tmpReq: $_model.GenerateReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateReportResponse> {
    tmpReq.validate();
    let request = new $_model.GenerateReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.reportConfigs)) {
      request.reportConfigsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.reportConfigs, "ReportConfigs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reportConfigsShrink)) {
      body["ReportConfigs"] = request.reportConfigsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateReport",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateReportResponse>(await this.callApi(params, req, runtime), new $_model.GenerateReportResponse({}));
  }

  /**
   * 胸部CT平扫筛查结果报告生成
   * 
   * @param request - GenerateReportRequest
   * @returns GenerateReportResponse
   */
  async generateReport(request: $_model.GenerateReportRequest): Promise<$_model.GenerateReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateReportWithOptions(request, runtime);
  }

  /**
   * @param request - GetAsyncJobResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncJobResultResponse
   */
  async getAsyncJobResultWithOptions(request: $_model.GetAsyncJobResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAsyncJobResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsyncJobResult",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAsyncJobResultResponse>(await this.callApi(params, req, runtime), new $_model.GetAsyncJobResultResponse({}));
  }

  /**
   * @param request - GetAsyncJobResultRequest
   * @returns GetAsyncJobResultResponse
   */
  async getAsyncJobResult(request: $_model.GetAsyncJobResultRequest): Promise<$_model.GetAsyncJobResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
  }

  /**
   * CVD心血管不良事件预测
   * 
   * @param request - PredictCVDRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PredictCVDResponse
   */
  async predictCVDWithOptions(request: $_model.PredictCVDRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PredictCVDResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PredictCVD",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PredictCVDResponse>(await this.callApi(params, req, runtime), new $_model.PredictCVDResponse({}));
  }

  /**
   * CVD心血管不良事件预测
   * 
   * @param request - PredictCVDRequest
   * @returns PredictCVDResponse
   */
  async predictCVD(request: $_model.PredictCVDRequest): Promise<$_model.PredictCVDResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.predictCVDWithOptions(request, runtime);
  }

  async predictCVDAdvance(request: $_model.PredictCVDAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PredictCVDResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let predictCVDReq = new $_model.PredictCVDRequest({ });
    OpenApiUtil.convert(request, predictCVDReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.PredictCVDRequestURLList = predictCVDReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let predictCVDResp = await this.predictCVDWithOptions(predictCVDReq, runtime);
    return predictCVDResp;
  }

  /**
   * @param request - RunCTRegistrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCTRegistrationResponse
   */
  async runCTRegistrationWithOptions(request: $_model.RunCTRegistrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunCTRegistrationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.floatingList)) {
      body["FloatingList"] = request.floatingList;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.referenceList)) {
      body["ReferenceList"] = request.referenceList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCTRegistration",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunCTRegistrationResponse>(await this.callApi(params, req, runtime), new $_model.RunCTRegistrationResponse({}));
  }

  /**
   * @param request - RunCTRegistrationRequest
   * @returns RunCTRegistrationResponse
   */
  async runCTRegistration(request: $_model.RunCTRegistrationRequest): Promise<$_model.RunCTRegistrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCTRegistrationWithOptions(request, runtime);
  }

  async runCTRegistrationAdvance(request: $_model.RunCTRegistrationAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunCTRegistrationResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let runCTRegistrationReq = new $_model.RunCTRegistrationRequest({ });
    OpenApiUtil.convert(request, runCTRegistrationReq);
    if (!$dara.isNull(request.floatingList)) {
      let i0 : number = 0;

      for(let item0 of request.floatingList) {
        if (!$dara.isNull(item0.floatingURLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.floatingURLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.RunCTRegistrationRequestFloatingList = runCTRegistrationReq.floatingList[i0];
          tmp.floatingURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    if (!$dara.isNull(request.referenceList)) {
      let i1 : number = 0;

      for(let item0 of request.referenceList) {
        if (!$dara.isNull(item0.referenceURLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.referenceURLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.RunCTRegistrationRequestReferenceList = runCTRegistrationReq.referenceList[i1];
          tmp.referenceURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i1++;
        }

      }
    }

    let runCTRegistrationResp = await this.runCTRegistrationWithOptions(runCTRegistrationReq, runtime);
    return runCTRegistrationResp;
  }

  /**
   * @param request - RunMedQARequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunMedQAResponse
   */
  async runMedQAWithOptions(request: $_model.RunMedQARequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunMedQAResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.answerImageDataList)) {
      body["AnswerImageDataList"] = request.answerImageDataList;
    }

    if (!$dara.isNull(request.answerImageURLList)) {
      body["AnswerImageURLList"] = request.answerImageURLList;
    }

    if (!$dara.isNull(request.answerTextList)) {
      body["AnswerTextList"] = request.answerTextList;
    }

    if (!$dara.isNull(request.department)) {
      body["Department"] = request.department;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.questionType)) {
      body["QuestionType"] = request.questionType;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunMedQA",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunMedQAResponse>(await this.callApi(params, req, runtime), new $_model.RunMedQAResponse({}));
  }

  /**
   * @param request - RunMedQARequest
   * @returns RunMedQAResponse
   */
  async runMedQA(request: $_model.RunMedQARequest): Promise<$_model.RunMedQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runMedQAWithOptions(request, runtime);
  }

  async runMedQAAdvance(request: $_model.RunMedQAAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunMedQAResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let runMedQAReq = new $_model.RunMedQARequest({ });
    OpenApiUtil.convert(request, runMedQAReq);
    if (!$dara.isNull(request.answerImageURLList)) {
      let i0 : number = 0;

      for(let item0 of request.answerImageURLList) {
        if (!$dara.isNull(item0.answerImageURLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.answerImageURLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.RunMedQARequestAnswerImageURLList = runMedQAReq.answerImageURLList[i0];
          tmp.answerImageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let runMedQAResp = await this.runMedQAWithOptions(runMedQAReq, runtime);
    return runMedQAResp;
  }

  /**
   * 结直肠癌筛查
   * 
   * @param request - ScreenCRCRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScreenCRCResponse
   */
  async screenCRCWithOptions(request: $_model.ScreenCRCRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScreenCRCResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScreenCRC",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScreenCRCResponse>(await this.callApi(params, req, runtime), new $_model.ScreenCRCResponse({}));
  }

  /**
   * 结直肠癌筛查
   * 
   * @param request - ScreenCRCRequest
   * @returns ScreenCRCResponse
   */
  async screenCRC(request: $_model.ScreenCRCRequest): Promise<$_model.ScreenCRCResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.screenCRCWithOptions(request, runtime);
  }

  async screenCRCAdvance(request: $_model.ScreenCRCAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScreenCRCResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let screenCRCReq = new $_model.ScreenCRCRequest({ });
    OpenApiUtil.convert(request, screenCRCReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.ScreenCRCRequestURLList = screenCRCReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let screenCRCResp = await this.screenCRCWithOptions(screenCRCReq, runtime);
    return screenCRCResp;
  }

  /**
   * 胸部CT平扫
   * 
   * @param request - ScreenChestCTRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScreenChestCTResponse
   */
  async screenChestCTWithOptions(request: $_model.ScreenChestCTRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScreenChestCTResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.mask)) {
      body["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    if (!$dara.isNull(request.verbose)) {
      body["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScreenChestCT",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScreenChestCTResponse>(await this.callApi(params, req, runtime), new $_model.ScreenChestCTResponse({}));
  }

  /**
   * 胸部CT平扫
   * 
   * @param request - ScreenChestCTRequest
   * @returns ScreenChestCTResponse
   */
  async screenChestCT(request: $_model.ScreenChestCTRequest): Promise<$_model.ScreenChestCTResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.screenChestCTWithOptions(request, runtime);
  }

  async screenChestCTAdvance(request: $_model.ScreenChestCTAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScreenChestCTResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let screenChestCTReq = new $_model.ScreenChestCTRequest({ });
    OpenApiUtil.convert(request, screenChestCTReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.ScreenChestCTRequestURLList = screenChestCTReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let screenChestCTResp = await this.screenChestCTWithOptions(screenChestCTReq, runtime);
    return screenChestCTResp;
  }

  /**
   * 食管癌筛查
   * 
   * @param request - ScreenECRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScreenECResponse
   */
  async screenECWithOptions(request: $_model.ScreenECRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScreenECResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScreenEC",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScreenECResponse>(await this.callApi(params, req, runtime), new $_model.ScreenECResponse({}));
  }

  /**
   * 食管癌筛查
   * 
   * @param request - ScreenECRequest
   * @returns ScreenECResponse
   */
  async screenEC(request: $_model.ScreenECRequest): Promise<$_model.ScreenECResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.screenECWithOptions(request, runtime);
  }

  async screenECAdvance(request: $_model.ScreenECAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScreenECResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let screenECReq = new $_model.ScreenECRequest({ });
    OpenApiUtil.convert(request, screenECReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.ScreenECRequestURLList = screenECReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let screenECResp = await this.screenECWithOptions(screenECReq, runtime);
    return screenECResp;
  }

  /**
   * 胃癌筛查
   * 
   * @param request - ScreenGCRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScreenGCResponse
   */
  async screenGCWithOptions(request: $_model.ScreenGCRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScreenGCResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScreenGC",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScreenGCResponse>(await this.callApi(params, req, runtime), new $_model.ScreenGCResponse({}));
  }

  /**
   * 胃癌筛查
   * 
   * @param request - ScreenGCRequest
   * @returns ScreenGCResponse
   */
  async screenGC(request: $_model.ScreenGCRequest): Promise<$_model.ScreenGCResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.screenGCWithOptions(request, runtime);
  }

  async screenGCAdvance(request: $_model.ScreenGCAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScreenGCResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let screenGCReq = new $_model.ScreenGCRequest({ });
    OpenApiUtil.convert(request, screenGCReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.ScreenGCRequestURLList = screenGCReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let screenGCResp = await this.screenGCWithOptions(screenGCReq, runtime);
    return screenGCResp;
  }

  /**
   * 肝癌筛查
   * 
   * @param request - ScreenLCRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScreenLCResponse
   */
  async screenLCWithOptions(request: $_model.ScreenLCRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScreenLCResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScreenLC",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScreenLCResponse>(await this.callApi(params, req, runtime), new $_model.ScreenLCResponse({}));
  }

  /**
   * 肝癌筛查
   * 
   * @param request - ScreenLCRequest
   * @returns ScreenLCResponse
   */
  async screenLC(request: $_model.ScreenLCRequest): Promise<$_model.ScreenLCResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.screenLCWithOptions(request, runtime);
  }

  async screenLCAdvance(request: $_model.ScreenLCAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScreenLCResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let screenLCReq = new $_model.ScreenLCRequest({ });
    OpenApiUtil.convert(request, screenLCReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.ScreenLCRequestURLList = screenLCReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let screenLCResp = await this.screenLCWithOptions(screenLCReq, runtime);
    return screenLCResp;
  }

  /**
   * 放疗淋巴站分割
   * 
   * @param request - SegmentLymphNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SegmentLymphNodeResponse
   */
  async segmentLymphNodeWithOptions(request: $_model.SegmentLymphNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SegmentLymphNodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyPart)) {
      body["BodyPart"] = request.bodyPart;
    }

    if (!$dara.isNull(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SegmentLymphNode",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SegmentLymphNodeResponse>(await this.callApi(params, req, runtime), new $_model.SegmentLymphNodeResponse({}));
  }

  /**
   * 放疗淋巴站分割
   * 
   * @param request - SegmentLymphNodeRequest
   * @returns SegmentLymphNodeResponse
   */
  async segmentLymphNode(request: $_model.SegmentLymphNodeRequest): Promise<$_model.SegmentLymphNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.segmentLymphNodeWithOptions(request, runtime);
  }

  async segmentLymphNodeAdvance(request: $_model.SegmentLymphNodeAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SegmentLymphNodeResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let segmentLymphNodeReq = new $_model.SegmentLymphNodeRequest({ });
    OpenApiUtil.convert(request, segmentLymphNodeReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.SegmentLymphNodeRequestURLList = segmentLymphNodeReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let segmentLymphNodeResp = await this.segmentLymphNodeWithOptions(segmentLymphNodeReq, runtime);
    return segmentLymphNodeResp;
  }

  /**
   * 多器官分割
   * 
   * @param request - SegmentOARRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SegmentOARResponse
   */
  async segmentOARWithOptions(request: $_model.SegmentOARRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SegmentOARResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyPart)) {
      body["BodyPart"] = request.bodyPart;
    }

    if (!$dara.isNull(request.contrast)) {
      body["Contrast"] = request.contrast;
    }

    if (!$dara.isNull(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.maskList)) {
      body["MaskList"] = request.maskList;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SegmentOAR",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SegmentOARResponse>(await this.callApi(params, req, runtime), new $_model.SegmentOARResponse({}));
  }

  /**
   * 多器官分割
   * 
   * @param request - SegmentOARRequest
   * @returns SegmentOARResponse
   */
  async segmentOAR(request: $_model.SegmentOARRequest): Promise<$_model.SegmentOARResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.segmentOARWithOptions(request, runtime);
  }

  async segmentOARAdvance(request: $_model.SegmentOARAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SegmentOARResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let segmentOARReq = new $_model.SegmentOARRequest({ });
    OpenApiUtil.convert(request, segmentOARReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.SegmentOARRequestURLList = segmentOARReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let segmentOARResp = await this.segmentOARWithOptions(segmentOARReq, runtime);
    return segmentOARResp;
  }

  /**
   * 放疗靶区勾画算法
   * 
   * @param request - TargetVolumeSegmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TargetVolumeSegmentResponse
   */
  async targetVolumeSegmentWithOptions(request: $_model.TargetVolumeSegmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TargetVolumeSegmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cancerType)) {
      body["CancerType"] = request.cancerType;
    }

    if (!$dara.isNull(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.targetVolumeType)) {
      body["TargetVolumeType"] = request.targetVolumeType;
    }

    if (!$dara.isNull(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TargetVolumeSegment",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TargetVolumeSegmentResponse>(await this.callApi(params, req, runtime), new $_model.TargetVolumeSegmentResponse({}));
  }

  /**
   * 放疗靶区勾画算法
   * 
   * @param request - TargetVolumeSegmentRequest
   * @returns TargetVolumeSegmentResponse
   */
  async targetVolumeSegment(request: $_model.TargetVolumeSegmentRequest): Promise<$_model.TargetVolumeSegmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.targetVolumeSegmentWithOptions(request, runtime);
  }

  async targetVolumeSegmentAdvance(request: $_model.TargetVolumeSegmentAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TargetVolumeSegmentResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
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
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "imageprocess",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let targetVolumeSegmentReq = new $_model.TargetVolumeSegmentRequest({ });
    OpenApiUtil.convert(request, targetVolumeSegmentReq);
    if (!$dara.isNull(request.URLList)) {
      let i0 : number = 0;

      for(let item0 of request.URLList) {
        if (!$dara.isNull(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : $_model.TargetVolumeSegmentRequestURLList = targetVolumeSegmentReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0++;
        }

      }
    }

    let targetVolumeSegmentResp = await this.targetVolumeSegmentWithOptions(targetVolumeSegmentReq, runtime);
    return targetVolumeSegmentResp;
  }

}
