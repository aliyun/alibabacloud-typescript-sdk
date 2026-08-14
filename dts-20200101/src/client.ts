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
      'cn-qingdao': "dts.aliyuncs.com",
      'cn-beijing': "dts.aliyuncs.com",
      'cn-zhangjiakou': "dts.aliyuncs.com",
      'cn-huhehaote': "dts.aliyuncs.com",
      'cn-hangzhou': "dts.aliyuncs.com",
      'cn-shanghai': "dts.aliyuncs.com",
      'cn-shenzhen': "dts.aliyuncs.com",
      'cn-hongkong': "dts.aliyuncs.com",
      'ap-southeast-1': "dts.aliyuncs.com",
      'ap-southeast-2': "dts.aliyuncs.com",
      'ap-southeast-3': "dts.aliyuncs.com",
      'ap-southeast-5': "dts.aliyuncs.com",
      'eu-west-1': "dts.aliyuncs.com",
      'us-west-1': "dts.aliyuncs.com",
      'us-east-1': "dts.aliyuncs.com",
      'eu-central-1': "dts.aliyuncs.com",
      'me-east-1': "dts.aliyuncs.com",
      'ap-south-1': "dts.aliyuncs.com",
      'cn-hangzhou-finance': "dts.aliyuncs.com",
      'cn-shanghai-finance-1': "dts.aliyuncs.com",
      'cn-shenzhen-finance-1': "dts.aliyuncs.com",
      'cn-north-2-gov-1': "dts.aliyuncs.com",
      'ap-northeast-2-pop': "dts.aliyuncs.com",
      'cn-beijing-finance-1': "dts.aliyuncs.com",
      'cn-beijing-finance-pop': "dts.aliyuncs.com",
      'cn-beijing-gov-1': "dts.aliyuncs.com",
      'cn-beijing-nu16-b01': "dts.aliyuncs.com",
      'cn-chengdu': "dts.aliyuncs.com",
      'cn-edge-1': "dts.aliyuncs.com",
      'cn-fujian': "dts.aliyuncs.com",
      'cn-haidian-cm12-c01': "dts.aliyuncs.com",
      'cn-hangzhou-bj-b01': "dts.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "dts.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "dts.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "dts.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "dts.aliyuncs.com",
      'cn-hangzhou-test-306': "dts.aliyuncs.com",
      'cn-hongkong-finance-pop': "dts.aliyuncs.com",
      'cn-huhehaote-nebula-1': "dts.aliyuncs.com",
      'cn-qingdao-nebula': "dts.aliyuncs.com",
      'cn-shanghai-et15-b01': "dts.aliyuncs.com",
      'cn-shanghai-et2-b01': "dts.aliyuncs.com",
      'cn-shanghai-inner': "dts.aliyuncs.com",
      'cn-shanghai-internal-test-1': "dts.aliyuncs.com",
      'cn-shenzhen-inner': "dts.aliyuncs.com",
      'cn-shenzhen-st4-d01': "dts.aliyuncs.com",
      'cn-shenzhen-su18-b01': "dts.aliyuncs.com",
      'cn-wuhan': "dts.aliyuncs.com",
      'cn-wulanchabu': "dts.aliyuncs.com",
      'cn-yushanfang': "dts.aliyuncs.com",
      'cn-zhangbei-na61-b01': "dts.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "dts.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "dts.aliyuncs.com",
      'eu-west-1-oxs': "dts.aliyuncs.com",
      'rus-west-1-pop': "dts.aliyuncs.com",
      'ap-northeast-1': "dts.ap-northeast-1.aliyuncs.com",
      'ap-northeast-2': "dts.ap-northeast-2.aliyuncs.com",
      'ap-southeast-6': "dts.ap-southeast-6.aliyuncs.com",
      'ap-southeast-7': "dts.ap-southeast-7.aliyuncs.com",
      'cn-guangzhou': "dts.cn-guangzhou.aliyuncs.com",
      'cn-heyuan': "dts.cn-heyuan.aliyuncs.com",
      'cn-wuhan-lr': "dts.cn-wuhan-lr.aliyuncs.com",
      'cn-zhengzhou-jva': "dts.cn-zhengzhou-jva.aliyuncs.com",
      'me-central-1': "dts.me-central-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dts", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }

  async _postOSSObject(bucketName: string, form: {[key: string]: any}, runtime: $dara.RuntimeOptions): Promise<{[key: string]: any}> {
    let _runtime: { [key: string]: any } = {
      key: runtime.key || this._key,
      cert: runtime.cert || this._cert,
      ca: runtime.ca || this._ca,
      readTimeout: runtime.readTimeout || this._readTimeout,
      connectTimeout: runtime.connectTimeout || this._connectTimeout,
      httpProxy: runtime.httpProxy || this._httpProxy,
      httpsProxy: runtime.httpsProxy || this._httpsProxy,
      noProxy: runtime.noProxy || this._noProxy,
      socks5Proxy: runtime.socks5Proxy || this._socks5Proxy,
      socks5NetWork: runtime.socks5NetWork || this._socks5NetWork,
      maxIdleConns: runtime.maxIdleConns || this._maxIdleConns,
      retryOptions: this._retryOptions,
      ignoreSSL: runtime.ignoreSSL || false,
      tlsMinVersion: this._tlsMinVersion,
    }

    let _retriesAttempted = 0;
    let _lastRequest = null, _lastResponse = null;
    let _context = new $dara.RetryPolicyContext({
      retriesAttempted: _retriesAttempted,
    });
    while ($dara.shouldRetry(_runtime['retryOptions'], _context)) {
      if (_retriesAttempted > 0) {
        let _backoffTime = $dara.getBackoffDelay(_runtime['retryOptions'], _context);
        if (_backoffTime > 0) {
          await $dara.sleep(_backoffTime);
        }
      }

      _retriesAttempted = _retriesAttempted + 1;
      try {
        let request_ = new $dara.Request();
        let boundary = $dara.Form.getBoundary();
        let tmp = String(form["host"]);
        let host = `${bucketName}.${tmp}`;
        request_.protocol = "HTTPS";
        request_.method = "POST";
        request_.pathname = `/`;
        request_.headers = {
          host: host,
          date: OpenApiUtil.getDateUTCString(),
          'user-agent': OpenApiUtil.getUserAgent(""),
        };
        request_.headers["content-type"] = `multipart/form-data; boundary=${boundary}`;
        request_.body = $dara.Form.toFileForm(form, boundary);
        _lastRequest = request_;
        let response_ = await $dara.doAction(request_, _runtime);
        _lastResponse = response_;

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
      } catch (ex) {
        _context = new $dara.RetryPolicyContext({
          retriesAttempted : _retriesAttempted,
          httpRequest : _lastRequest,
          httpResponse : _lastResponse,
          exception : ex,
        });
        continue;
      }
    }

    throw $dara.newUnretryableError(_context);
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
   * Configures a data migration or synchronization task.
   * 
   * @remarks
   * - You can perform the required pre-configurations in the console and then preview the corresponding OpenAPI parameter information to help you specify request parameters. For more information, see [Preview OpenAPI request parameters](https://help.aliyun.com/document_detail/2851612.html).
   * - Tasks on dedicated clusters support only the configure-before-purchase mode and do not support cross-region tasks.
   * 
   * @param request - ConfigureDtsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureDtsJobResponse
   */
  async configureDtsJobWithOptions(request: $_model.ConfigureDtsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureDtsJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkpoint)) {
      query["Checkpoint"] = request.checkpoint;
    }

    if (!$dara.isNull(request.dataCheckConfigure)) {
      query["DataCheckConfigure"] = request.dataCheckConfigure;
    }

    if (!$dara.isNull(request.dataInitialization)) {
      query["DataInitialization"] = request.dataInitialization;
    }

    if (!$dara.isNull(request.dataSynchronization)) {
      query["DataSynchronization"] = request.dataSynchronization;
    }

    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.delayNotice)) {
      query["DelayNotice"] = request.delayNotice;
    }

    if (!$dara.isNull(request.delayPhone)) {
      query["DelayPhone"] = request.delayPhone;
    }

    if (!$dara.isNull(request.delayRuleTime)) {
      query["DelayRuleTime"] = request.delayRuleTime;
    }

    if (!$dara.isNull(request.destCaCertificateOssUrl)) {
      query["DestCaCertificateOssUrl"] = request.destCaCertificateOssUrl;
    }

    if (!$dara.isNull(request.destCaCertificatePassword)) {
      query["DestCaCertificatePassword"] = request.destCaCertificatePassword;
    }

    if (!$dara.isNull(request.destClientCertOssUrl)) {
      query["DestClientCertOssUrl"] = request.destClientCertOssUrl;
    }

    if (!$dara.isNull(request.destClientKeyOssUrl)) {
      query["DestClientKeyOssUrl"] = request.destClientKeyOssUrl;
    }

    if (!$dara.isNull(request.destClientPassword)) {
      query["DestClientPassword"] = request.destClientPassword;
    }

    if (!$dara.isNull(request.destPrimaryVswId)) {
      query["DestPrimaryVswId"] = request.destPrimaryVswId;
    }

    if (!$dara.isNull(request.destSecondaryVswId)) {
      query["DestSecondaryVswId"] = request.destSecondaryVswId;
    }

    if (!$dara.isNull(request.destinationEndpointDataBaseName)) {
      query["DestinationEndpointDataBaseName"] = request.destinationEndpointDataBaseName;
    }

    if (!$dara.isNull(request.destinationEndpointEngineName)) {
      query["DestinationEndpointEngineName"] = request.destinationEndpointEngineName;
    }

    if (!$dara.isNull(request.destinationEndpointIP)) {
      query["DestinationEndpointIP"] = request.destinationEndpointIP;
    }

    if (!$dara.isNull(request.destinationEndpointInstanceID)) {
      query["DestinationEndpointInstanceID"] = request.destinationEndpointInstanceID;
    }

    if (!$dara.isNull(request.destinationEndpointInstanceType)) {
      query["DestinationEndpointInstanceType"] = request.destinationEndpointInstanceType;
    }

    if (!$dara.isNull(request.destinationEndpointOracleSID)) {
      query["DestinationEndpointOracleSID"] = request.destinationEndpointOracleSID;
    }

    if (!$dara.isNull(request.destinationEndpointOwnerID)) {
      query["DestinationEndpointOwnerID"] = request.destinationEndpointOwnerID;
    }

    if (!$dara.isNull(request.destinationEndpointPassword)) {
      query["DestinationEndpointPassword"] = request.destinationEndpointPassword;
    }

    if (!$dara.isNull(request.destinationEndpointPort)) {
      query["DestinationEndpointPort"] = request.destinationEndpointPort;
    }

    if (!$dara.isNull(request.destinationEndpointRegion)) {
      query["DestinationEndpointRegion"] = request.destinationEndpointRegion;
    }

    if (!$dara.isNull(request.destinationEndpointRole)) {
      query["DestinationEndpointRole"] = request.destinationEndpointRole;
    }

    if (!$dara.isNull(request.destinationEndpointUserName)) {
      query["DestinationEndpointUserName"] = request.destinationEndpointUserName;
    }

    if (!$dara.isNull(request.disasterRecoveryJob)) {
      query["DisasterRecoveryJob"] = request.disasterRecoveryJob;
    }

    if (!$dara.isNull(request.dtsBisLabel)) {
      query["DtsBisLabel"] = request.dtsBisLabel;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.dtsJobName)) {
      query["DtsJobName"] = request.dtsJobName;
    }

    if (!$dara.isNull(request.errorNotice)) {
      query["ErrorNotice"] = request.errorNotice;
    }

    if (!$dara.isNull(request.errorPhone)) {
      query["ErrorPhone"] = request.errorPhone;
    }

    if (!$dara.isNull(request.fileOssUrl)) {
      query["FileOssUrl"] = request.fileOssUrl;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.maxDu)) {
      query["MaxDu"] = request.maxDu;
    }

    if (!$dara.isNull(request.minDu)) {
      query["MinDu"] = request.minDu;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceEndpointDatabaseName)) {
      query["SourceEndpointDatabaseName"] = request.sourceEndpointDatabaseName;
    }

    if (!$dara.isNull(request.sourceEndpointEngineName)) {
      query["SourceEndpointEngineName"] = request.sourceEndpointEngineName;
    }

    if (!$dara.isNull(request.sourceEndpointIP)) {
      query["SourceEndpointIP"] = request.sourceEndpointIP;
    }

    if (!$dara.isNull(request.sourceEndpointInstanceID)) {
      query["SourceEndpointInstanceID"] = request.sourceEndpointInstanceID;
    }

    if (!$dara.isNull(request.sourceEndpointInstanceType)) {
      query["SourceEndpointInstanceType"] = request.sourceEndpointInstanceType;
    }

    if (!$dara.isNull(request.sourceEndpointOracleSID)) {
      query["SourceEndpointOracleSID"] = request.sourceEndpointOracleSID;
    }

    if (!$dara.isNull(request.sourceEndpointOwnerID)) {
      query["SourceEndpointOwnerID"] = request.sourceEndpointOwnerID;
    }

    if (!$dara.isNull(request.sourceEndpointPassword)) {
      query["SourceEndpointPassword"] = request.sourceEndpointPassword;
    }

    if (!$dara.isNull(request.sourceEndpointPort)) {
      query["SourceEndpointPort"] = request.sourceEndpointPort;
    }

    if (!$dara.isNull(request.sourceEndpointRegion)) {
      query["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    if (!$dara.isNull(request.sourceEndpointRole)) {
      query["SourceEndpointRole"] = request.sourceEndpointRole;
    }

    if (!$dara.isNull(request.sourceEndpointUserName)) {
      query["SourceEndpointUserName"] = request.sourceEndpointUserName;
    }

    if (!$dara.isNull(request.sourceEndpointVSwitchID)) {
      query["SourceEndpointVSwitchID"] = request.sourceEndpointVSwitchID;
    }

    if (!$dara.isNull(request.srcCaCertificateOssUrl)) {
      query["SrcCaCertificateOssUrl"] = request.srcCaCertificateOssUrl;
    }

    if (!$dara.isNull(request.srcCaCertificatePassword)) {
      query["SrcCaCertificatePassword"] = request.srcCaCertificatePassword;
    }

    if (!$dara.isNull(request.srcClientCertOssUrl)) {
      query["SrcClientCertOssUrl"] = request.srcClientCertOssUrl;
    }

    if (!$dara.isNull(request.srcClientKeyOssUrl)) {
      query["SrcClientKeyOssUrl"] = request.srcClientKeyOssUrl;
    }

    if (!$dara.isNull(request.srcClientPassword)) {
      query["SrcClientPassword"] = request.srcClientPassword;
    }

    if (!$dara.isNull(request.srcPrimaryVswId)) {
      query["SrcPrimaryVswId"] = request.srcPrimaryVswId;
    }

    if (!$dara.isNull(request.srcSecondaryVswId)) {
      query["SrcSecondaryVswId"] = request.srcSecondaryVswId;
    }

    if (!$dara.isNull(request.structureInitialization)) {
      query["StructureInitialization"] = request.structureInitialization;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbList)) {
      body["DbList"] = request.dbList;
    }

    if (!$dara.isNull(request.reserve)) {
      body["Reserve"] = request.reserve;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureDtsJobResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureDtsJobResponse({}));
  }

  /**
   * Configures a data migration or synchronization task.
   * 
   * @remarks
   * - You can perform the required pre-configurations in the console and then preview the corresponding OpenAPI parameter information to help you specify request parameters. For more information, see [Preview OpenAPI request parameters](https://help.aliyun.com/document_detail/2851612.html).
   * - Tasks on dedicated clusters support only the configure-before-purchase mode and do not support cross-region tasks.
   * 
   * @param request - ConfigureDtsJobRequest
   * @returns ConfigureDtsJobResponse
   */
  async configureDtsJob(request: $_model.ConfigureDtsJobRequest): Promise<$_model.ConfigureDtsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureDtsJobWithOptions(request, runtime);
  }

  async configureDtsJobAdvance(request: $_model.ConfigureDtsJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureDtsJobResponse> {
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
      Product: "Dts",
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
    let configureDtsJobReq = new $_model.ConfigureDtsJobRequest({ });
    OpenApiUtil.convert(request, configureDtsJobReq);
    if (!$dara.isNull(request.fileOssUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileOssUrlObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      configureDtsJobReq.fileOssUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let configureDtsJobResp = await this.configureDtsJobWithOptions(configureDtsJobReq, runtime);
    return configureDtsJobResp;
  }

  /**
   * Configures a legacy data migration task.
   * 
   * @param request - ConfigureMigrationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureMigrationJobResponse
   */
  async configureMigrationJobWithOptions(request: $_model.ConfigureMigrationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureMigrationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.checkpoint)) {
      query["Checkpoint"] = request.checkpoint;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.migrationJobName)) {
      query["MigrationJobName"] = request.migrationJobName;
    }

    if (!$dara.isNull(request.migrationReserved)) {
      query["MigrationReserved"] = request.migrationReserved;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.destinationEndpoint)) {
      query["DestinationEndpoint"] = request.destinationEndpoint;
    }

    if (!$dara.isNull(request.migrationMode)) {
      query["MigrationMode"] = request.migrationMode;
    }

    if (!$dara.isNull(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.migrationObject)) {
      body["MigrationObject"] = request.migrationObject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureMigrationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureMigrationJobResponse({}));
  }

  /**
   * Configures a legacy data migration task.
   * 
   * @param request - ConfigureMigrationJobRequest
   * @returns ConfigureMigrationJobResponse
   */
  async configureMigrationJob(request: $_model.ConfigureMigrationJobRequest): Promise<$_model.ConfigureMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureMigrationJobWithOptions(request, runtime);
  }

  /**
   * Configures monitoring alerts to monitor the latency and exception status of a data migration task.
   * 
   * @param request - ConfigureMigrationJobAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureMigrationJobAlertResponse
   */
  async configureMigrationJobAlertWithOptions(request: $_model.ConfigureMigrationJobAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureMigrationJobAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.delayAlertPhone)) {
      query["DelayAlertPhone"] = request.delayAlertPhone;
    }

    if (!$dara.isNull(request.delayAlertStatus)) {
      query["DelayAlertStatus"] = request.delayAlertStatus;
    }

    if (!$dara.isNull(request.delayOverSeconds)) {
      query["DelayOverSeconds"] = request.delayOverSeconds;
    }

    if (!$dara.isNull(request.errorAlertPhone)) {
      query["ErrorAlertPhone"] = request.errorAlertPhone;
    }

    if (!$dara.isNull(request.errorAlertStatus)) {
      query["ErrorAlertStatus"] = request.errorAlertStatus;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureMigrationJobAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureMigrationJobAlertResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureMigrationJobAlertResponse({}));
  }

  /**
   * Configures monitoring alerts to monitor the latency and exception status of a data migration task.
   * 
   * @param request - ConfigureMigrationJobAlertRequest
   * @returns ConfigureMigrationJobAlertResponse
   */
  async configureMigrationJobAlert(request: $_model.ConfigureMigrationJobAlertRequest): Promise<$_model.ConfigureMigrationJobAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureMigrationJobAlertWithOptions(request, runtime);
  }

  /**
   * Configures a DTS change tracking task.
   * 
   * @remarks
   * > You can perform the required pre-configurations in the console and then preview the corresponding OpenAPI parameter information to help you specify request parameters. For more information, see [Preview OpenAPI request parameters](https://help.aliyun.com/document_detail/2851612.html).
   * 
   * @param request - ConfigureSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureSubscriptionResponse
   */
  async configureSubscriptionWithOptions(request: $_model.ConfigureSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureSubscriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkpoint)) {
      query["Checkpoint"] = request.checkpoint;
    }

    if (!$dara.isNull(request.dbList)) {
      query["DbList"] = request.dbList;
    }

    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.delayNotice)) {
      query["DelayNotice"] = request.delayNotice;
    }

    if (!$dara.isNull(request.delayPhone)) {
      query["DelayPhone"] = request.delayPhone;
    }

    if (!$dara.isNull(request.delayRuleTime)) {
      query["DelayRuleTime"] = request.delayRuleTime;
    }

    if (!$dara.isNull(request.dtsBisLabel)) {
      query["DtsBisLabel"] = request.dtsBisLabel;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.dtsJobName)) {
      query["DtsJobName"] = request.dtsJobName;
    }

    if (!$dara.isNull(request.errorNotice)) {
      query["ErrorNotice"] = request.errorNotice;
    }

    if (!$dara.isNull(request.errorPhone)) {
      query["ErrorPhone"] = request.errorPhone;
    }

    if (!$dara.isNull(request.maxDu)) {
      query["MaxDu"] = request.maxDu;
    }

    if (!$dara.isNull(request.minDu)) {
      query["MinDu"] = request.minDu;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.reserve)) {
      query["Reserve"] = request.reserve;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceEndpointDatabaseName)) {
      query["SourceEndpointDatabaseName"] = request.sourceEndpointDatabaseName;
    }

    if (!$dara.isNull(request.sourceEndpointEngineName)) {
      query["SourceEndpointEngineName"] = request.sourceEndpointEngineName;
    }

    if (!$dara.isNull(request.sourceEndpointIP)) {
      query["SourceEndpointIP"] = request.sourceEndpointIP;
    }

    if (!$dara.isNull(request.sourceEndpointInstanceID)) {
      query["SourceEndpointInstanceID"] = request.sourceEndpointInstanceID;
    }

    if (!$dara.isNull(request.sourceEndpointInstanceType)) {
      query["SourceEndpointInstanceType"] = request.sourceEndpointInstanceType;
    }

    if (!$dara.isNull(request.sourceEndpointOracleSID)) {
      query["SourceEndpointOracleSID"] = request.sourceEndpointOracleSID;
    }

    if (!$dara.isNull(request.sourceEndpointOwnerID)) {
      query["SourceEndpointOwnerID"] = request.sourceEndpointOwnerID;
    }

    if (!$dara.isNull(request.sourceEndpointPassword)) {
      query["SourceEndpointPassword"] = request.sourceEndpointPassword;
    }

    if (!$dara.isNull(request.sourceEndpointPort)) {
      query["SourceEndpointPort"] = request.sourceEndpointPort;
    }

    if (!$dara.isNull(request.sourceEndpointRegion)) {
      query["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    if (!$dara.isNull(request.sourceEndpointRole)) {
      query["SourceEndpointRole"] = request.sourceEndpointRole;
    }

    if (!$dara.isNull(request.sourceEndpointUserName)) {
      query["SourceEndpointUserName"] = request.sourceEndpointUserName;
    }

    if (!$dara.isNull(request.srcCaCertificateOssUrl)) {
      query["SrcCaCertificateOssUrl"] = request.srcCaCertificateOssUrl;
    }

    if (!$dara.isNull(request.srcCaCertificatePassword)) {
      query["SrcCaCertificatePassword"] = request.srcCaCertificatePassword;
    }

    if (!$dara.isNull(request.srcClientCertOssUrl)) {
      query["SrcClientCertOssUrl"] = request.srcClientCertOssUrl;
    }

    if (!$dara.isNull(request.srcClientKeyOssUrl)) {
      query["SrcClientKeyOssUrl"] = request.srcClientKeyOssUrl;
    }

    if (!$dara.isNull(request.srcClientPassword)) {
      query["SrcClientPassword"] = request.srcClientPassword;
    }

    if (!$dara.isNull(request.subscriptionDataTypeDDL)) {
      query["SubscriptionDataTypeDDL"] = request.subscriptionDataTypeDDL;
    }

    if (!$dara.isNull(request.subscriptionDataTypeDML)) {
      query["SubscriptionDataTypeDML"] = request.subscriptionDataTypeDML;
    }

    if (!$dara.isNull(request.subscriptionInstanceNetworkType)) {
      query["SubscriptionInstanceNetworkType"] = request.subscriptionInstanceNetworkType;
    }

    if (!$dara.isNull(request.subscriptionInstanceVPCId)) {
      query["SubscriptionInstanceVPCId"] = request.subscriptionInstanceVPCId;
    }

    if (!$dara.isNull(request.subscriptionInstanceVSwitchId)) {
      query["SubscriptionInstanceVSwitchId"] = request.subscriptionInstanceVSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureSubscription",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureSubscriptionResponse({}));
  }

  /**
   * Configures a DTS change tracking task.
   * 
   * @remarks
   * > You can perform the required pre-configurations in the console and then preview the corresponding OpenAPI parameter information to help you specify request parameters. For more information, see [Preview OpenAPI request parameters](https://help.aliyun.com/document_detail/2851612.html).
   * 
   * @param request - ConfigureSubscriptionRequest
   * @returns ConfigureSubscriptionResponse
   */
  async configureSubscription(request: $_model.ConfigureSubscriptionRequest): Promise<$_model.ConfigureSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureSubscriptionWithOptions(request, runtime);
  }

  /**
   * Configures a change tracking channel. This is a legacy operation.
   * 
   * @remarks
   * Before you call this operation, you must call the [CreateSubscriptionInstance](https://help.aliyun.com/document_detail/49436.html) operation to create a change tracking instance.
   * > In the **Advanced Settings** step of the console, move the pointer over the **Next: Save the task and perform a precheck** button, and then click **Preview OpenAPI parameters** in the tooltip to view the parameter information for configuring this instance by using API operations.
   * 
   * @param request - ConfigureSubscriptionInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureSubscriptionInstanceResponse
   */
  async configureSubscriptionInstanceWithOptions(request: $_model.ConfigureSubscriptionInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureSubscriptionInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    if (!$dara.isNull(request.subscriptionInstanceName)) {
      query["SubscriptionInstanceName"] = request.subscriptionInstanceName;
    }

    if (!$dara.isNull(request.subscriptionInstanceNetworkType)) {
      query["SubscriptionInstanceNetworkType"] = request.subscriptionInstanceNetworkType;
    }

    if (!$dara.isNull(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    if (!$dara.isNull(request.subscriptionDataType)) {
      query["SubscriptionDataType"] = request.subscriptionDataType;
    }

    if (!$dara.isNull(request.subscriptionInstance)) {
      query["SubscriptionInstance"] = request.subscriptionInstance;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.subscriptionObject)) {
      body["SubscriptionObject"] = request.subscriptionObject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureSubscriptionInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureSubscriptionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureSubscriptionInstanceResponse({}));
  }

  /**
   * Configures a change tracking channel. This is a legacy operation.
   * 
   * @remarks
   * Before you call this operation, you must call the [CreateSubscriptionInstance](https://help.aliyun.com/document_detail/49436.html) operation to create a change tracking instance.
   * > In the **Advanced Settings** step of the console, move the pointer over the **Next: Save the task and perform a precheck** button, and then click **Preview OpenAPI parameters** in the tooltip to view the parameter information for configuring this instance by using API operations.
   * 
   * @param request - ConfigureSubscriptionInstanceRequest
   * @returns ConfigureSubscriptionInstanceResponse
   */
  async configureSubscriptionInstance(request: $_model.ConfigureSubscriptionInstanceRequest): Promise<$_model.ConfigureSubscriptionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureSubscriptionInstanceWithOptions(request, runtime);
  }

  /**
   * Configures monitoring and alerting to monitor the latency and exception status of a change tracking channel.
   * 
   * @param request - ConfigureSubscriptionInstanceAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureSubscriptionInstanceAlertResponse
   */
  async configureSubscriptionInstanceAlertWithOptions(request: $_model.ConfigureSubscriptionInstanceAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureSubscriptionInstanceAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.delayAlertPhone)) {
      query["DelayAlertPhone"] = request.delayAlertPhone;
    }

    if (!$dara.isNull(request.delayAlertStatus)) {
      query["DelayAlertStatus"] = request.delayAlertStatus;
    }

    if (!$dara.isNull(request.delayOverSeconds)) {
      query["DelayOverSeconds"] = request.delayOverSeconds;
    }

    if (!$dara.isNull(request.errorAlertPhone)) {
      query["ErrorAlertPhone"] = request.errorAlertPhone;
    }

    if (!$dara.isNull(request.errorAlertStatus)) {
      query["ErrorAlertStatus"] = request.errorAlertStatus;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureSubscriptionInstanceAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureSubscriptionInstanceAlertResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureSubscriptionInstanceAlertResponse({}));
  }

  /**
   * Configures monitoring and alerting to monitor the latency and exception status of a change tracking channel.
   * 
   * @param request - ConfigureSubscriptionInstanceAlertRequest
   * @returns ConfigureSubscriptionInstanceAlertResponse
   */
  async configureSubscriptionInstanceAlert(request: $_model.ConfigureSubscriptionInstanceAlertRequest): Promise<$_model.ConfigureSubscriptionInstanceAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureSubscriptionInstanceAlertWithOptions(request, runtime);
  }

  /**
   * Configures a data synchronization task by using the previous version.
   * 
   * @remarks
   * Before you call this operation, you must call the [CreateSynchronizationJob](https://help.aliyun.com/document_detail/49446.html) operation to create a data synchronization instance.
   * > - After this operation is called, the data synchronization instance automatically starts and performs a precheck. You do not need to call the [StartSynchronizationJob](https://help.aliyun.com/document_detail/49448.html) operation to start the instance.
   * - If the data synchronization instance fails to start, the precheck may have failed. You can call the [DescribeSynchronizationJobStatus](https://help.aliyun.com/document_detail/49453.html) operation to query the status of the data synchronization instance, obtain the error message of the precheck failure, and adjust the parameters. After the adjustment, you can call the [StartSynchronizationJob](https://help.aliyun.com/document_detail/49448.html) operation to restart the data synchronization instance.
   * 
   * @param request - ConfigureSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureSynchronizationJobResponse
   */
  async configureSynchronizationJobWithOptions(request: $_model.ConfigureSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.checkpoint)) {
      query["Checkpoint"] = request.checkpoint;
    }

    if (!$dara.isNull(request.dataInitialization)) {
      query["DataInitialization"] = request.dataInitialization;
    }

    if (!$dara.isNull(request.migrationReserved)) {
      query["MigrationReserved"] = request.migrationReserved;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.structureInitialization)) {
      query["StructureInitialization"] = request.structureInitialization;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    if (!$dara.isNull(request.synchronizationJobName)) {
      query["SynchronizationJobName"] = request.synchronizationJobName;
    }

    if (!$dara.isNull(request.destinationEndpoint)) {
      query["DestinationEndpoint"] = request.destinationEndpoint;
    }

    if (!$dara.isNull(request.partitionKey)) {
      query["PartitionKey"] = request.partitionKey;
    }

    if (!$dara.isNull(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.synchronizationObjects)) {
      body["SynchronizationObjects"] = request.synchronizationObjects;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureSynchronizationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureSynchronizationJobResponse({}));
  }

  /**
   * Configures a data synchronization task by using the previous version.
   * 
   * @remarks
   * Before you call this operation, you must call the [CreateSynchronizationJob](https://help.aliyun.com/document_detail/49446.html) operation to create a data synchronization instance.
   * > - After this operation is called, the data synchronization instance automatically starts and performs a precheck. You do not need to call the [StartSynchronizationJob](https://help.aliyun.com/document_detail/49448.html) operation to start the instance.
   * - If the data synchronization instance fails to start, the precheck may have failed. You can call the [DescribeSynchronizationJobStatus](https://help.aliyun.com/document_detail/49453.html) operation to query the status of the data synchronization instance, obtain the error message of the precheck failure, and adjust the parameters. After the adjustment, you can call the [StartSynchronizationJob](https://help.aliyun.com/document_detail/49448.html) operation to restart the data synchronization instance.
   * 
   * @param request - ConfigureSynchronizationJobRequest
   * @returns ConfigureSynchronizationJobResponse
   */
  async configureSynchronizationJob(request: $_model.ConfigureSynchronizationJobRequest): Promise<$_model.ConfigureSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * Configures monitoring and alerting to monitor the latency and exception status of a synchronization task.
   * 
   * @param request - ConfigureSynchronizationJobAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureSynchronizationJobAlertResponse
   */
  async configureSynchronizationJobAlertWithOptions(request: $_model.ConfigureSynchronizationJobAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureSynchronizationJobAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.delayAlertPhone)) {
      query["DelayAlertPhone"] = request.delayAlertPhone;
    }

    if (!$dara.isNull(request.delayAlertStatus)) {
      query["DelayAlertStatus"] = request.delayAlertStatus;
    }

    if (!$dara.isNull(request.delayOverSeconds)) {
      query["DelayOverSeconds"] = request.delayOverSeconds;
    }

    if (!$dara.isNull(request.errorAlertPhone)) {
      query["ErrorAlertPhone"] = request.errorAlertPhone;
    }

    if (!$dara.isNull(request.errorAlertStatus)) {
      query["ErrorAlertStatus"] = request.errorAlertStatus;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureSynchronizationJobAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureSynchronizationJobAlertResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureSynchronizationJobAlertResponse({}));
  }

  /**
   * Configures monitoring and alerting to monitor the latency and exception status of a synchronization task.
   * 
   * @param request - ConfigureSynchronizationJobAlertRequest
   * @returns ConfigureSynchronizationJobAlertResponse
   */
  async configureSynchronizationJobAlert(request: $_model.ConfigureSynchronizationJobAlertRequest): Promise<$_model.ConfigureSynchronizationJobAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureSynchronizationJobAlertWithOptions(request, runtime);
  }

  /**
   * Configures the full image matching switch for a data synchronization instance.
   * 
   * @param request - ConfigureSynchronizationJobReplicatorCompareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureSynchronizationJobReplicatorCompareResponse
   */
  async configureSynchronizationJobReplicatorCompareWithOptions(request: $_model.ConfigureSynchronizationJobReplicatorCompareRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureSynchronizationJobReplicatorCompareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    if (!$dara.isNull(request.synchronizationReplicatorCompareEnable)) {
      query["SynchronizationReplicatorCompareEnable"] = request.synchronizationReplicatorCompareEnable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureSynchronizationJobReplicatorCompare",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureSynchronizationJobReplicatorCompareResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureSynchronizationJobReplicatorCompareResponse({}));
  }

  /**
   * Configures the full image matching switch for a data synchronization instance.
   * 
   * @param request - ConfigureSynchronizationJobReplicatorCompareRequest
   * @returns ConfigureSynchronizationJobReplicatorCompareResponse
   */
  async configureSynchronizationJobReplicatorCompare(request: $_model.ConfigureSynchronizationJobReplicatorCompareRequest): Promise<$_model.ConfigureSynchronizationJobReplicatorCompareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureSynchronizationJobReplicatorCompareWithOptions(request, runtime);
  }

  /**
   * Transfers a DTS instance to a different resource group.
   * 
   * @param request - ConvertInstanceResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertInstanceResourceGroupResponse
   */
  async convertInstanceResourceGroupWithOptions(request: $_model.ConvertInstanceResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConvertInstanceResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConvertInstanceResourceGroup",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConvertInstanceResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ConvertInstanceResourceGroupResponse({}));
  }

  /**
   * Transfers a DTS instance to a different resource group.
   * 
   * @param request - ConvertInstanceResourceGroupRequest
   * @returns ConvertInstanceResourceGroupResponse
   */
  async convertInstanceResourceGroup(request: $_model.ConvertInstanceResourceGroupRequest): Promise<$_model.ConvertInstanceResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.convertInstanceResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries the count of tasks by conditions.
   * 
   * @param request - CountJobByConditionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CountJobByConditionResponse
   */
  async countJobByConditionWithOptions(request: $_model.CountJobByConditionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CountJobByConditionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destDbType)) {
      query["DestDbType"] = request.destDbType;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.srcDbType)) {
      query["SrcDbType"] = request.srcDbType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CountJobByCondition",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CountJobByConditionResponse>(await this.callApi(params, req, runtime), new $_model.CountJobByConditionResponse({}));
  }

  /**
   * Queries the count of tasks by conditions.
   * 
   * @param request - CountJobByConditionRequest
   * @returns CountJobByConditionResponse
   */
  async countJobByCondition(request: $_model.CountJobByConditionRequest): Promise<$_model.CountJobByConditionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.countJobByConditionWithOptions(request, runtime);
  }

  /**
   * Creates a consumer group for a change tracking task (new version).
   * 
   * @param request - CreateConsumerChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerChannelResponse
   */
  async createConsumerChannelWithOptions(request: $_model.CreateConsumerChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConsumerChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consumerGroupName)) {
      query["ConsumerGroupName"] = request.consumerGroupName;
    }

    if (!$dara.isNull(request.consumerGroupPassword)) {
      query["ConsumerGroupPassword"] = request.consumerGroupPassword;
    }

    if (!$dara.isNull(request.consumerGroupUserName)) {
      query["ConsumerGroupUserName"] = request.consumerGroupUserName;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConsumerChannel",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConsumerChannelResponse>(await this.callApi(params, req, runtime), new $_model.CreateConsumerChannelResponse({}));
  }

  /**
   * Creates a consumer group for a change tracking task (new version).
   * 
   * @param request - CreateConsumerChannelRequest
   * @returns CreateConsumerChannelResponse
   */
  async createConsumerChannel(request: $_model.CreateConsumerChannelRequest): Promise<$_model.CreateConsumerChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConsumerChannelWithOptions(request, runtime);
  }

  /**
   * Creates a consumer group for a change tracking instance.
   * 
   * @param request - CreateConsumerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroupWithOptions(request: $_model.CreateConsumerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConsumerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.consumerGroupName)) {
      query["ConsumerGroupName"] = request.consumerGroupName;
    }

    if (!$dara.isNull(request.consumerGroupPassword)) {
      query["ConsumerGroupPassword"] = request.consumerGroupPassword;
    }

    if (!$dara.isNull(request.consumerGroupUserName)) {
      query["ConsumerGroupUserName"] = request.consumerGroupUserName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConsumerGroup",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConsumerGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateConsumerGroupResponse({}));
  }

  /**
   * Creates a consumer group for a change tracking instance.
   * 
   * @param request - CreateConsumerGroupRequest
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroup(request: $_model.CreateConsumerGroupRequest): Promise<$_model.CreateConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConsumerGroupWithOptions(request, runtime);
  }

  /**
   * Creates an alert rule by calling the CreateDedicatedClusterMonitorRule operation.
   * 
   * @param request - CreateDedicatedClusterMonitorRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDedicatedClusterMonitorRuleResponse
   */
  async createDedicatedClusterMonitorRuleWithOptions(request: $_model.CreateDedicatedClusterMonitorRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDedicatedClusterMonitorRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cpuAlarmThreshold)) {
      query["CpuAlarmThreshold"] = request.cpuAlarmThreshold;
    }

    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.diskAlarmThreshold)) {
      query["DiskAlarmThreshold"] = request.diskAlarmThreshold;
    }

    if (!$dara.isNull(request.duAlarmThreshold)) {
      query["DuAlarmThreshold"] = request.duAlarmThreshold;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memAlarmThreshold)) {
      query["MemAlarmThreshold"] = request.memAlarmThreshold;
    }

    if (!$dara.isNull(request.noticeSwitch)) {
      query["NoticeSwitch"] = request.noticeSwitch;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phones)) {
      query["Phones"] = request.phones;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDedicatedClusterMonitorRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDedicatedClusterMonitorRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateDedicatedClusterMonitorRuleResponse({}));
  }

  /**
   * Creates an alert rule by calling the CreateDedicatedClusterMonitorRule operation.
   * 
   * @param request - CreateDedicatedClusterMonitorRuleRequest
   * @returns CreateDedicatedClusterMonitorRuleResponse
   */
  async createDedicatedClusterMonitorRule(request: $_model.CreateDedicatedClusterMonitorRuleRequest): Promise<$_model.CreateDedicatedClusterMonitorRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDedicatedClusterMonitorRuleWithOptions(request, runtime);
  }

  /**
   * Creates a document parsing task.
   * 
   * @remarks
   * Calling this operation creates a document parsing task and returns a task ID (DtsJobId).
   * > - This operation relies on Object Storage Service (OSS) for file transfer. We recommend that you call this operation by using an SDK. The CreateDocParserJobAdvance operation automatically encapsulates the file transfer process.
   * > - After you obtain the DtsJobId response parameter, you can call the DescribeDocParserJobStatus operation to query the execution status of the document parsing task, and call the DescribeDocParserJobResult operation to obtain the output of the document parsing task.
   * 
   * @param request - CreateDocParserJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDocParserJobResponse
   */
  async createDocParserJobWithOptions(request: $_model.CreateDocParserJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDocParserJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.ragInstanceId)) {
      query["RagInstanceId"] = request.ragInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resultType)) {
      query["ResultType"] = request.resultType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDocParserJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDocParserJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateDocParserJobResponse({}));
  }

  /**
   * Creates a document parsing task.
   * 
   * @remarks
   * Calling this operation creates a document parsing task and returns a task ID (DtsJobId).
   * > - This operation relies on Object Storage Service (OSS) for file transfer. We recommend that you call this operation by using an SDK. The CreateDocParserJobAdvance operation automatically encapsulates the file transfer process.
   * > - After you obtain the DtsJobId response parameter, you can call the DescribeDocParserJobStatus operation to query the execution status of the document parsing task, and call the DescribeDocParserJobResult operation to obtain the output of the document parsing task.
   * 
   * @param request - CreateDocParserJobRequest
   * @returns CreateDocParserJobResponse
   */
  async createDocParserJob(request: $_model.CreateDocParserJobRequest): Promise<$_model.CreateDocParserJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDocParserJobWithOptions(request, runtime);
  }

  async createDocParserJobAdvance(request: $_model.CreateDocParserJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDocParserJobResponse> {
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
      Product: "Dts",
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
    let createDocParserJobReq = new $_model.CreateDocParserJobRequest({ });
    OpenApiUtil.convert(request, createDocParserJobReq);
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
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      createDocParserJobReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let createDocParserJobResp = await this.createDocParserJobWithOptions(createDocParserJobReq, runtime);
    return createDocParserJobResp;
  }

  /**
   * Purchases a DTS instance by calling the CreateDtsInstance operation.
   * 
   * @remarks
   * <props="china">
   * - Before invoking this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product#/dts/detail) of Data Transmission Service (DTS).
   * <props="intl">
   * - Before invoking this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/product/data-transmission-service/pricing) of Data Transmission Service (DTS).
   * - Nodes on a dedicated cluster support only the workflow of configuring a node before purchasing an instance. You can invoke the [ConfigureDtsJob](https://help.aliyun.com/document_detail/208399.html) operation to configure a node.
   * 
   * @param request - CreateDtsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDtsInstanceResponse
   */
  async createDtsInstanceWithOptions(request: $_model.CreateDtsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDtsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!$dara.isNull(request.computeUnit)) {
      query["ComputeUnit"] = request.computeUnit;
    }

    if (!$dara.isNull(request.databaseCount)) {
      query["DatabaseCount"] = request.databaseCount;
    }

    if (!$dara.isNull(request.destinationEndpointEngineName)) {
      query["DestinationEndpointEngineName"] = request.destinationEndpointEngineName;
    }

    if (!$dara.isNull(request.destinationRegion)) {
      query["DestinationRegion"] = request.destinationRegion;
    }

    if (!$dara.isNull(request.dtsRegion)) {
      query["DtsRegion"] = request.dtsRegion;
    }

    if (!$dara.isNull(request.du)) {
      query["Du"] = request.du;
    }

    if (!$dara.isNull(request.feeType)) {
      query["FeeType"] = request.feeType;
    }

    if (!$dara.isNull(request.insightModule)) {
      query["InsightModule"] = request.insightModule;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.maxDu)) {
      query["MaxDu"] = request.maxDu;
    }

    if (!$dara.isNull(request.minDu)) {
      query["MinDu"] = request.minDu;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceEndpointEngineName)) {
      query["SourceEndpointEngineName"] = request.sourceEndpointEngineName;
    }

    if (!$dara.isNull(request.sourceRegion)) {
      query["SourceRegion"] = request.sourceRegion;
    }

    if (!$dara.isNull(request.syncArchitecture)) {
      query["SyncArchitecture"] = request.syncArchitecture;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDtsInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDtsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDtsInstanceResponse({}));
  }

  /**
   * Purchases a DTS instance by calling the CreateDtsInstance operation.
   * 
   * @remarks
   * <props="china">
   * - Before invoking this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product#/dts/detail) of Data Transmission Service (DTS).
   * <props="intl">
   * - Before invoking this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/product/data-transmission-service/pricing) of Data Transmission Service (DTS).
   * - Nodes on a dedicated cluster support only the workflow of configuring a node before purchasing an instance. You can invoke the [ConfigureDtsJob](https://help.aliyun.com/document_detail/208399.html) operation to configure a node.
   * 
   * @param request - CreateDtsInstanceRequest
   * @returns CreateDtsInstanceResponse
   */
  async createDtsInstance(request: $_model.CreateDtsInstanceRequest): Promise<$_model.CreateDtsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDtsInstanceWithOptions(request, runtime);
  }

  /**
   * Creates or modifies an alert rule for a DTS task.
   * 
   * @remarks
   * DTS currently supports the following alert metrics: **Latency**, **Migration Status**, and **Full Migration Duration**:
   * - **Latency**: Monitors incremental data migration latency. An alert is triggered when the migration latency, synchronization latency, or change tracking latency exceeds the specified threshold (in seconds).
   * - **Migration Status**: Monitors the task status. An alert is triggered when the task status is **Error** or **Recovered**.
   * - **Full Migration Duration**: Monitors the duration of full data migration. An alert is triggered when the duration exceeds the specified threshold (in hours).
   * 
   * @param request - CreateJobMonitorRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobMonitorRuleResponse
   */
  async createJobMonitorRuleWithOptions(request: $_model.CreateJobMonitorRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJobMonitorRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.delayRuleTime)) {
      query["DelayRuleTime"] = request.delayRuleTime;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.noticeValue)) {
      query["NoticeValue"] = request.noticeValue;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.times)) {
      query["Times"] = request.times;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJobMonitorRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateJobMonitorRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateJobMonitorRuleResponse({}));
  }

  /**
   * Creates or modifies an alert rule for a DTS task.
   * 
   * @remarks
   * DTS currently supports the following alert metrics: **Latency**, **Migration Status**, and **Full Migration Duration**:
   * - **Latency**: Monitors incremental data migration latency. An alert is triggered when the migration latency, synchronization latency, or change tracking latency exceeds the specified threshold (in seconds).
   * - **Migration Status**: Monitors the task status. An alert is triggered when the task status is **Error** or **Recovered**.
   * - **Full Migration Duration**: Monitors the duration of full data migration. An alert is triggered when the duration exceeds the specified threshold (in hours).
   * 
   * @param request - CreateJobMonitorRuleRequest
   * @returns CreateJobMonitorRuleResponse
   */
  async createJobMonitorRule(request: $_model.CreateJobMonitorRuleRequest): Promise<$_model.CreateJobMonitorRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createJobMonitorRuleWithOptions(request, runtime);
  }

  /**
   * Purchases a data migration instance.
   * 
   * @param request - CreateMigrationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMigrationJobResponse
   */
  async createMigrationJobWithOptions(request: $_model.CreateMigrationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMigrationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.migrationJobClass)) {
      query["MigrationJobClass"] = request.migrationJobClass;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMigrationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateMigrationJobResponse({}));
  }

  /**
   * Purchases a data migration instance.
   * 
   * @param request - CreateMigrationJobRequest
   * @returns CreateMigrationJobResponse
   */
  async createMigrationJob(request: $_model.CreateMigrationJobRequest): Promise<$_model.CreateMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMigrationJobWithOptions(request, runtime);
  }

  /**
   * Creates a reverse task for a specified synchronization or migration task by calling the CreateReverseDtsJob operation.
   * 
   * @remarks
   * The reverse task created by calling this operation immediately starts a precheck. After the precheck is passed, incremental data collection begins, but the incremental data write module does not run. You must call the **StartReverseWriter** operation to start it.
   * > The created reverse task is a synchronization task that contains only the incremental write module.
   * 
   * @param request - CreateReverseDtsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateReverseDtsJobResponse
   */
  async createReverseDtsJobWithOptions(request: $_model.CreateReverseDtsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateReverseDtsJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.shardPassword)) {
      query["ShardPassword"] = request.shardPassword;
    }

    if (!$dara.isNull(request.shardUsername)) {
      query["ShardUsername"] = request.shardUsername;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateReverseDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateReverseDtsJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateReverseDtsJobResponse({}));
  }

  /**
   * Creates a reverse task for a specified synchronization or migration task by calling the CreateReverseDtsJob operation.
   * 
   * @remarks
   * The reverse task created by calling this operation immediately starts a precheck. After the precheck is passed, incremental data collection begins, but the incremental data write module does not run. You must call the **StartReverseWriter** operation to start it.
   * > The created reverse task is a synchronization task that contains only the incremental write module.
   * 
   * @param request - CreateReverseDtsJobRequest
   * @returns CreateReverseDtsJobResponse
   */
  async createReverseDtsJob(request: $_model.CreateReverseDtsJobRequest): Promise<$_model.CreateReverseDtsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createReverseDtsJobWithOptions(request, runtime);
  }

  /**
   * Creates a change tracking channel. This is a legacy operation.
   * 
   * @param request - CreateSubscriptionInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSubscriptionInstanceResponse
   */
  async createSubscriptionInstanceWithOptions(request: $_model.CreateSubscriptionInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSubscriptionInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!$dara.isNull(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSubscriptionInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSubscriptionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateSubscriptionInstanceResponse({}));
  }

  /**
   * Creates a change tracking channel. This is a legacy operation.
   * 
   * @param request - CreateSubscriptionInstanceRequest
   * @returns CreateSubscriptionInstanceResponse
   */
  async createSubscriptionInstance(request: $_model.CreateSubscriptionInstanceRequest): Promise<$_model.CreateSubscriptionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSubscriptionInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a data synchronization job instance. This is a legacy API operation.
   * 
   * @param request - CreateSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSynchronizationJobResponse
   */
  async createSynchronizationJobWithOptions(request: $_model.CreateSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceCount)) {
      query["DBInstanceCount"] = request.DBInstanceCount;
    }

    if (!$dara.isNull(request.destRegion)) {
      query["DestRegion"] = request.destRegion;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceRegion)) {
      query["SourceRegion"] = request.sourceRegion;
    }

    if (!$dara.isNull(request.synchronizationJobClass)) {
      query["SynchronizationJobClass"] = request.synchronizationJobClass;
    }

    if (!$dara.isNull(request.topology)) {
      query["Topology"] = request.topology;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!$dara.isNull(request.networkType)) {
      query["networkType"] = request.networkType;
    }

    if (!$dara.isNull(request.destinationEndpoint)) {
      query["DestinationEndpoint"] = request.destinationEndpoint;
    }

    if (!$dara.isNull(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSynchronizationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateSynchronizationJobResponse({}));
  }

  /**
   * Creates a data synchronization job instance. This is a legacy API operation.
   * 
   * @param request - CreateSynchronizationJobRequest
   * @returns CreateSynchronizationJobResponse
   */
  async createSynchronizationJob(request: $_model.CreateSynchronizationJobRequest): Promise<$_model.CreateSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * Deletes a consumer group of a change tracking task (new version).
   * 
   * @param request - DeleteConsumerChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerChannelResponse
   */
  async deleteConsumerChannelWithOptions(request: $_model.DeleteConsumerChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConsumerChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consumerGroupId)) {
      query["ConsumerGroupId"] = request.consumerGroupId;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumerChannel",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConsumerChannelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConsumerChannelResponse({}));
  }

  /**
   * Deletes a consumer group of a change tracking task (new version).
   * 
   * @param request - DeleteConsumerChannelRequest
   * @returns DeleteConsumerChannelResponse
   */
  async deleteConsumerChannel(request: $_model.DeleteConsumerChannelRequest): Promise<$_model.DeleteConsumerChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConsumerChannelWithOptions(request, runtime);
  }

  /**
   * Deletes a consumer group from a change tracking channel.
   * 
   * @param request - DeleteConsumerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroupWithOptions(request: $_model.DeleteConsumerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConsumerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.consumerGroupID)) {
      query["ConsumerGroupID"] = request.consumerGroupID;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumerGroup",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConsumerGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConsumerGroupResponse({}));
  }

  /**
   * Deletes a consumer group from a change tracking channel.
   * 
   * @param request - DeleteConsumerGroupRequest
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroup(request: $_model.DeleteConsumerGroupRequest): Promise<$_model.DeleteConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConsumerGroupWithOptions(request, runtime);
  }

  /**
   * Releases a data migration, synchronization, or change tracking instance.
   * 
   * @remarks
   * > <props="china"><ph>Subscription DTS instances cannot be released by calling this API operation. You can release them by unsubscribing. For more information, see [Release a DTS instance](https://help.aliyun.com/document_detail/289054.html).</ph><props="intl"><ph>Subscription DTS instances cannot be released.</ph>.
   * 
   * @param request - DeleteDtsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDtsJobResponse
   */
  async deleteDtsJobWithOptions(request: $_model.DeleteDtsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDtsJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDtsJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDtsJobResponse({}));
  }

  /**
   * Releases a data migration, synchronization, or change tracking instance.
   * 
   * @remarks
   * > <props="china"><ph>Subscription DTS instances cannot be released by calling this API operation. You can release them by unsubscribing. For more information, see [Release a DTS instance](https://help.aliyun.com/document_detail/289054.html).</ph><props="intl"><ph>Subscription DTS instances cannot be released.</ph>.
   * 
   * @param request - DeleteDtsJobRequest
   * @returns DeleteDtsJobResponse
   */
  async deleteDtsJob(request: $_model.DeleteDtsJobRequest): Promise<$_model.DeleteDtsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDtsJobWithOptions(request, runtime);
  }

  /**
   * Releases data migration, data synchronization, or change tracking tasks in batches by calling the DeleteDtsJobs operation.
   * 
   * @remarks
   * > <props="china"><ph>Subscription DTS instances cannot be released by calling API operations. You can release them by unsubscribing. For more information, see [Release a DTS instance](https://help.aliyun.com/document_detail/289054.html).</ph><props="intl"><ph>Subscription DTS instances cannot be released.</ph>.
   * 
   * @param request - DeleteDtsJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDtsJobsResponse
   */
  async deleteDtsJobsWithOptions(request: $_model.DeleteDtsJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDtsJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobIds)) {
      query["DtsJobIds"] = request.dtsJobIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDtsJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDtsJobsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDtsJobsResponse({}));
  }

  /**
   * Releases data migration, data synchronization, or change tracking tasks in batches by calling the DeleteDtsJobs operation.
   * 
   * @remarks
   * > <props="china"><ph>Subscription DTS instances cannot be released by calling API operations. You can release them by unsubscribing. For more information, see [Release a DTS instance](https://help.aliyun.com/document_detail/289054.html).</ph><props="intl"><ph>Subscription DTS instances cannot be released.</ph>.
   * 
   * @param request - DeleteDtsJobsRequest
   * @returns DeleteDtsJobsResponse
   */
  async deleteDtsJobs(request: $_model.DeleteDtsJobsRequest): Promise<$_model.DeleteDtsJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDtsJobsWithOptions(request, runtime);
  }

  /**
   * Releases a data migration instance.
   * 
   * @param request - DeleteMigrationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMigrationJobResponse
   */
  async deleteMigrationJobWithOptions(request: $_model.DeleteMigrationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMigrationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMigrationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMigrationJobResponse({}));
  }

  /**
   * Releases a data migration instance.
   * 
   * @param request - DeleteMigrationJobRequest
   * @returns DeleteMigrationJobResponse
   */
  async deleteMigrationJob(request: $_model.DeleteMigrationJobRequest): Promise<$_model.DeleteMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMigrationJobWithOptions(request, runtime);
  }

  /**
   * Releases the channel of a change tracking instance.
   * 
   * @param request - DeleteSubscriptionInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSubscriptionInstanceResponse
   */
  async deleteSubscriptionInstanceWithOptions(request: $_model.DeleteSubscriptionInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSubscriptionInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSubscriptionInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSubscriptionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSubscriptionInstanceResponse({}));
  }

  /**
   * Releases the channel of a change tracking instance.
   * 
   * @param request - DeleteSubscriptionInstanceRequest
   * @returns DeleteSubscriptionInstanceResponse
   */
  async deleteSubscriptionInstance(request: $_model.DeleteSubscriptionInstanceRequest): Promise<$_model.DeleteSubscriptionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSubscriptionInstanceWithOptions(request, runtime);
  }

  /**
   * Releases a data synchronization instance.
   * 
   * @param request - DeleteSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSynchronizationJobResponse
   */
  async deleteSynchronizationJobWithOptions(request: $_model.DeleteSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSynchronizationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSynchronizationJobResponse({}));
  }

  /**
   * Releases a data synchronization instance.
   * 
   * @param request - DeleteSynchronizationJobRequest
   * @returns DeleteSynchronizationJobResponse
   */
  async deleteSynchronizationJob(request: $_model.DeleteSynchronizationJobRequest): Promise<$_model.DeleteSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * 查询数据投递链路store账号
   * 
   * @param request - DescribeChannelAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelAccountResponse
   */
  async describeChannelAccountWithOptions(request: $_model.DescribeChannelAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChannelAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelAccount",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChannelAccountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChannelAccountResponse({}));
  }

  /**
   * 查询数据投递链路store账号
   * 
   * @param request - DescribeChannelAccountRequest
   * @returns DescribeChannelAccountResponse
   */
  async describeChannelAccount(request: $_model.DescribeChannelAccountRequest): Promise<$_model.DescribeChannelAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelAccountWithOptions(request, runtime);
  }

  /**
   * Contains data validation tasks associated with data migration tasks and data synchronization tasks.
   * 
   * @param request - DescribeCheckJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCheckJobsResponse
   */
  async describeCheckJobsWithOptions(request: $_model.DescribeCheckJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCheckJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkJobId)) {
      query["CheckJobId"] = request.checkJobId;
    }

    if (!$dara.isNull(request.checkType)) {
      query["CheckType"] = request.checkType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCheckJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCheckJobsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCheckJobsResponse({}));
  }

  /**
   * Contains data validation tasks associated with data migration tasks and data synchronization tasks.
   * 
   * @param request - DescribeCheckJobsRequest
   * @returns DescribeCheckJobsResponse
   */
  async describeCheckJobs(request: $_model.DescribeCheckJobsRequest): Promise<$_model.DescribeCheckJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCheckJobsWithOptions(request, runtime);
  }

  /**
   * Queries the log information of a DTS cluster by calling the DescribeClusterOperateLogs operation.
   * 
   * @param request - DescribeClusterOperateLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterOperateLogsResponse
   */
  async describeClusterOperateLogsWithOptions(request: $_model.DescribeClusterOperateLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterOperateLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dedicatedClusterId)) {
      body["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      body["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerID)) {
      body["OwnerID"] = request.ownerID;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterOperateLogs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterOperateLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterOperateLogsResponse({}));
  }

  /**
   * Queries the log information of a DTS cluster by calling the DescribeClusterOperateLogs operation.
   * 
   * @param request - DescribeClusterOperateLogsRequest
   * @returns DescribeClusterOperateLogsResponse
   */
  async describeClusterOperateLogs(request: $_model.DescribeClusterOperateLogsRequest): Promise<$_model.DescribeClusterOperateLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterOperateLogsWithOptions(request, runtime);
  }

  /**
   * Queries the current usage of a cluster by calling the DescribeClusterUsedUtilization operation.
   * 
   * @param request - DescribeClusterUsedUtilizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterUsedUtilizationResponse
   */
  async describeClusterUsedUtilizationWithOptions(request: $_model.DescribeClusterUsedUtilizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterUsedUtilizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dedicatedClusterId)) {
      body["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      body["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.env)) {
      body["Env"] = request.env;
    }

    if (!$dara.isNull(request.metricType)) {
      body["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.ownerID)) {
      body["OwnerID"] = request.ownerID;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityToken)) {
      body["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterUsedUtilization",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterUsedUtilizationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterUsedUtilizationResponse({}));
  }

  /**
   * Queries the current usage of a cluster by calling the DescribeClusterUsedUtilization operation.
   * 
   * @param request - DescribeClusterUsedUtilizationRequest
   * @returns DescribeClusterUsedUtilizationResponse
   */
  async describeClusterUsedUtilization(request: $_model.DescribeClusterUsedUtilizationRequest): Promise<$_model.DescribeClusterUsedUtilizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterUsedUtilizationWithOptions(request, runtime);
  }

  /**
   * Tests the connectivity between the execution node of a data migration task and the source and destination databases.
   * 
   * @param request - DescribeConnectionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConnectionStatusResponse
   */
  async describeConnectionStatusWithOptions(request: $_model.DescribeConnectionStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConnectionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destinationEndpointArchitecture)) {
      query["DestinationEndpointArchitecture"] = request.destinationEndpointArchitecture;
    }

    if (!$dara.isNull(request.destinationEndpointDatabaseName)) {
      query["DestinationEndpointDatabaseName"] = request.destinationEndpointDatabaseName;
    }

    if (!$dara.isNull(request.destinationEndpointEngineName)) {
      query["DestinationEndpointEngineName"] = request.destinationEndpointEngineName;
    }

    if (!$dara.isNull(request.destinationEndpointIP)) {
      query["DestinationEndpointIP"] = request.destinationEndpointIP;
    }

    if (!$dara.isNull(request.destinationEndpointInstanceID)) {
      query["DestinationEndpointInstanceID"] = request.destinationEndpointInstanceID;
    }

    if (!$dara.isNull(request.destinationEndpointInstanceType)) {
      query["DestinationEndpointInstanceType"] = request.destinationEndpointInstanceType;
    }

    if (!$dara.isNull(request.destinationEndpointOracleSID)) {
      query["DestinationEndpointOracleSID"] = request.destinationEndpointOracleSID;
    }

    if (!$dara.isNull(request.destinationEndpointPassword)) {
      query["DestinationEndpointPassword"] = request.destinationEndpointPassword;
    }

    if (!$dara.isNull(request.destinationEndpointPort)) {
      query["DestinationEndpointPort"] = request.destinationEndpointPort;
    }

    if (!$dara.isNull(request.destinationEndpointRegion)) {
      query["DestinationEndpointRegion"] = request.destinationEndpointRegion;
    }

    if (!$dara.isNull(request.destinationEndpointUserName)) {
      query["DestinationEndpointUserName"] = request.destinationEndpointUserName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceEndpointArchitecture)) {
      query["SourceEndpointArchitecture"] = request.sourceEndpointArchitecture;
    }

    if (!$dara.isNull(request.sourceEndpointDatabaseName)) {
      query["SourceEndpointDatabaseName"] = request.sourceEndpointDatabaseName;
    }

    if (!$dara.isNull(request.sourceEndpointEngineName)) {
      query["SourceEndpointEngineName"] = request.sourceEndpointEngineName;
    }

    if (!$dara.isNull(request.sourceEndpointIP)) {
      query["SourceEndpointIP"] = request.sourceEndpointIP;
    }

    if (!$dara.isNull(request.sourceEndpointInstanceID)) {
      query["SourceEndpointInstanceID"] = request.sourceEndpointInstanceID;
    }

    if (!$dara.isNull(request.sourceEndpointInstanceType)) {
      query["SourceEndpointInstanceType"] = request.sourceEndpointInstanceType;
    }

    if (!$dara.isNull(request.sourceEndpointOracleSID)) {
      query["SourceEndpointOracleSID"] = request.sourceEndpointOracleSID;
    }

    if (!$dara.isNull(request.sourceEndpointPassword)) {
      query["SourceEndpointPassword"] = request.sourceEndpointPassword;
    }

    if (!$dara.isNull(request.sourceEndpointPort)) {
      query["SourceEndpointPort"] = request.sourceEndpointPort;
    }

    if (!$dara.isNull(request.sourceEndpointRegion)) {
      query["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    if (!$dara.isNull(request.sourceEndpointUserName)) {
      query["SourceEndpointUserName"] = request.sourceEndpointUserName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConnectionStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConnectionStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConnectionStatusResponse({}));
  }

  /**
   * Tests the connectivity between the execution node of a data migration task and the source and destination databases.
   * 
   * @param request - DescribeConnectionStatusRequest
   * @returns DescribeConnectionStatusResponse
   */
  async describeConnectionStatus(request: $_model.DescribeConnectionStatusRequest): Promise<$_model.DescribeConnectionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeConnectionStatusWithOptions(request, runtime);
  }

  /**
   * Queries the consumer group information of a DTS change tracking task, such as the consumer group ID, name, account, and consumption latency.
   * 
   * @param request - DescribeConsumerChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConsumerChannelResponse
   */
  async describeConsumerChannelWithOptions(request: $_model.DescribeConsumerChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConsumerChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentChannelId)) {
      query["ParentChannelId"] = request.parentChannelId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConsumerChannel",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConsumerChannelResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConsumerChannelResponse({}));
  }

  /**
   * Queries the consumer group information of a DTS change tracking task, such as the consumer group ID, name, account, and consumption latency.
   * 
   * @param request - DescribeConsumerChannelRequest
   * @returns DescribeConsumerChannelResponse
   */
  async describeConsumerChannel(request: $_model.DescribeConsumerChannelRequest): Promise<$_model.DescribeConsumerChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeConsumerChannelWithOptions(request, runtime);
  }

  /**
   * Queries the details of consumer groups in a change tracking instance.
   * 
   * @param request - DescribeConsumerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConsumerGroupResponse
   */
  async describeConsumerGroupWithOptions(request: $_model.DescribeConsumerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConsumerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConsumerGroup",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConsumerGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConsumerGroupResponse({}));
  }

  /**
   * Queries the details of consumer groups in a change tracking instance.
   * 
   * @param request - DescribeConsumerGroupRequest
   * @returns DescribeConsumerGroupResponse
   */
  async describeConsumerGroup(request: $_model.DescribeConsumerGroupRequest): Promise<$_model.DescribeConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeConsumerGroupWithOptions(request, runtime);
  }

  /**
   * Retrieves the DTS IP addresses that must be added to the whitelists of both the source and destination databases.
   * 
   * @param request - DescribeDTSIPRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDTSIPResponse
   */
  async describeDTSIPWithOptions(request: $_model.DescribeDTSIPRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDTSIPResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destinationEndpointRegion)) {
      query["DestinationEndpointRegion"] = request.destinationEndpointRegion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceEndpointRegion)) {
      query["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDTSIP",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDTSIPResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDTSIPResponse({}));
  }

  /**
   * Retrieves the DTS IP addresses that must be added to the whitelists of both the source and destination databases.
   * 
   * @param request - DescribeDTSIPRequest
   * @returns DescribeDTSIPResponse
   */
  async describeDTSIP(request: $_model.DescribeDTSIPRequest): Promise<$_model.DescribeDTSIPResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDTSIPWithOptions(request, runtime);
  }

  /**
   * Obtains the download URL for the list data of inconsistent data.
   * 
   * @param request - DescribeDataCheckReportUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataCheckReportUrlResponse
   */
  async describeDataCheckReportUrlWithOptions(request: $_model.DescribeDataCheckReportUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataCheckReportUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkType)) {
      query["CheckType"] = request.checkType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tbName)) {
      query["TbName"] = request.tbName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataCheckReportUrl",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataCheckReportUrlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataCheckReportUrlResponse({}));
  }

  /**
   * Obtains the download URL for the list data of inconsistent data.
   * 
   * @param request - DescribeDataCheckReportUrlRequest
   * @returns DescribeDataCheckReportUrlResponse
   */
  async describeDataCheckReportUrl(request: $_model.DescribeDataCheckReportUrlRequest): Promise<$_model.DescribeDataCheckReportUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataCheckReportUrlWithOptions(request, runtime);
  }

  /**
   * Queries data consistency verification results at the table level.
   * 
   * @param request - DescribeDataCheckTableDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataCheckTableDetailsResponse
   */
  async describeDataCheckTableDetailsWithOptions(request: $_model.DescribeDataCheckTableDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataCheckTableDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkType)) {
      query["CheckType"] = request.checkType;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataCheckTableDetails",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataCheckTableDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataCheckTableDetailsResponse({}));
  }

  /**
   * Queries data consistency verification results at the table level.
   * 
   * @param request - DescribeDataCheckTableDetailsRequest
   * @returns DescribeDataCheckTableDetailsResponse
   */
  async describeDataCheckTableDetails(request: $_model.DescribeDataCheckTableDetailsRequest): Promise<$_model.DescribeDataCheckTableDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataCheckTableDetailsWithOptions(request, runtime);
  }

  /**
   * Lists data inconsistency results grouped by inconsistent data.
   * 
   * @param request - DescribeDataCheckTableDiffDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataCheckTableDiffDetailsResponse
   */
  async describeDataCheckTableDiffDetailsWithOptions(request: $_model.DescribeDataCheckTableDiffDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataCheckTableDiffDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkType)) {
      query["CheckType"] = request.checkType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tbName)) {
      query["TbName"] = request.tbName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataCheckTableDiffDetails",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataCheckTableDiffDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataCheckTableDiffDetailsResponse({}));
  }

  /**
   * Lists data inconsistency results grouped by inconsistent data.
   * 
   * @param request - DescribeDataCheckTableDiffDetailsRequest
   * @returns DescribeDataCheckTableDiffDetailsResponse
   */
  async describeDataCheckTableDiffDetails(request: $_model.DescribeDataCheckTableDiffDetailsRequest): Promise<$_model.DescribeDataCheckTableDiffDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataCheckTableDiffDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified cluster by calling the DescribeDedicatedCluster operation.
   * 
   * @param request - DescribeDedicatedClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDedicatedClusterResponse
   */
  async describeDedicatedClusterWithOptions(request: $_model.DescribeDedicatedClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDedicatedClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDedicatedCluster",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDedicatedClusterResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDedicatedClusterResponse({}));
  }

  /**
   * Queries the details of a specified cluster by calling the DescribeDedicatedCluster operation.
   * 
   * @param request - DescribeDedicatedClusterRequest
   * @returns DescribeDedicatedClusterResponse
   */
  async describeDedicatedCluster(request: $_model.DescribeDedicatedClusterRequest): Promise<$_model.DescribeDedicatedClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDedicatedClusterWithOptions(request, runtime);
  }

  /**
   * Queries alert rules by calling the DescribeDedicatedClusterMonitorRule operation.
   * 
   * @param request - DescribeDedicatedClusterMonitorRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDedicatedClusterMonitorRuleResponse
   */
  async describeDedicatedClusterMonitorRuleWithOptions(request: $_model.DescribeDedicatedClusterMonitorRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDedicatedClusterMonitorRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDedicatedClusterMonitorRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDedicatedClusterMonitorRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDedicatedClusterMonitorRuleResponse({}));
  }

  /**
   * Queries alert rules by calling the DescribeDedicatedClusterMonitorRule operation.
   * 
   * @param request - DescribeDedicatedClusterMonitorRuleRequest
   * @returns DescribeDedicatedClusterMonitorRuleResponse
   */
  async describeDedicatedClusterMonitorRule(request: $_model.DescribeDedicatedClusterMonitorRuleRequest): Promise<$_model.DescribeDedicatedClusterMonitorRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDedicatedClusterMonitorRuleWithOptions(request, runtime);
  }

  /**
   * Retrieves the result of a document parsing task.
   * 
   * @remarks
   * This operation has rate limits. Calls that exceed the limits are rejected.
   * - The cumulative call threshold per region is 100 calls per second.
   * - The call threshold per account per region is 5 calls per second.
   * 
   * @param request - DescribeDocParserJobResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDocParserJobResultResponse
   */
  async describeDocParserJobResultWithOptions(request: $_model.DescribeDocParserJobResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDocParserJobResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.ragInstanceId)) {
      query["RagInstanceId"] = request.ragInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDocParserJobResult",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDocParserJobResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDocParserJobResultResponse({}));
  }

  /**
   * Retrieves the result of a document parsing task.
   * 
   * @remarks
   * This operation has rate limits. Calls that exceed the limits are rejected.
   * - The cumulative call threshold per region is 100 calls per second.
   * - The call threshold per account per region is 5 calls per second.
   * 
   * @param request - DescribeDocParserJobResultRequest
   * @returns DescribeDocParserJobResultResponse
   */
  async describeDocParserJobResult(request: $_model.DescribeDocParserJobResultRequest): Promise<$_model.DescribeDocParserJobResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDocParserJobResultWithOptions(request, runtime);
  }

  /**
   * Queries the execution status of a document parsing task.
   * 
   * @remarks
   * This operation has call frequency limits. Calls that exceed the limits are rejected.
   * - The cumulative call threshold for a single region is 200 calls per second.
   * - The call threshold for a single account in a single region is 20 calls per second.
   * 
   * @param request - DescribeDocParserJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDocParserJobStatusResponse
   */
  async describeDocParserJobStatusWithOptions(request: $_model.DescribeDocParserJobStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDocParserJobStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.ragInstanceId)) {
      query["RagInstanceId"] = request.ragInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDocParserJobStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDocParserJobStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDocParserJobStatusResponse({}));
  }

  /**
   * Queries the execution status of a document parsing task.
   * 
   * @remarks
   * This operation has call frequency limits. Calls that exceed the limits are rejected.
   * - The cumulative call threshold for a single region is 200 calls per second.
   * - The call threshold for a single account in a single region is 20 calls per second.
   * 
   * @param request - DescribeDocParserJobStatusRequest
   * @returns DescribeDocParserJobStatusResponse
   */
  async describeDocParserJobStatus(request: $_model.DescribeDocParserJobStatusRequest): Promise<$_model.DescribeDocParserJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDocParserJobStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of an ETL task.
   * 
   * @param request - DescribeDtsEtlJobVersionInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDtsEtlJobVersionInfoResponse
   */
  async describeDtsEtlJobVersionInfoWithOptions(request: $_model.DescribeDtsEtlJobVersionInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDtsEtlJobVersionInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDtsEtlJobVersionInfo",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDtsEtlJobVersionInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDtsEtlJobVersionInfoResponse({}));
  }

  /**
   * Queries the details of an ETL task.
   * 
   * @param request - DescribeDtsEtlJobVersionInfoRequest
   * @returns DescribeDtsEtlJobVersionInfoResponse
   */
  async describeDtsEtlJobVersionInfo(request: $_model.DescribeDtsEtlJobVersionInfoRequest): Promise<$_model.DescribeDtsEtlJobVersionInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDtsEtlJobVersionInfoWithOptions(request, runtime);
  }

  /**
   * 查询DTS任务配置
   * 
   * @param request - DescribeDtsJobConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDtsJobConfigResponse
   */
  async describeDtsJobConfigWithOptions(request: $_model.DescribeDtsJobConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDtsJobConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.forAcceleration)) {
      query["ForAcceleration"] = request.forAcceleration;
    }

    if (!$dara.isNull(request.module)) {
      query["Module"] = request.module;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDtsJobConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDtsJobConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDtsJobConfigResponse({}));
  }

  /**
   * 查询DTS任务配置
   * 
   * @param request - DescribeDtsJobConfigRequest
   * @returns DescribeDtsJobConfigResponse
   */
  async describeDtsJobConfig(request: $_model.DescribeDtsJobConfigRequest): Promise<$_model.DescribeDtsJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDtsJobConfigWithOptions(request, runtime);
  }

  /**
   * Queries the details of a DTS task by calling DescribeDtsJobDetail.
   * 
   * @remarks
   * This operation has rate limits. Calls that exceed the limits are rejected.
   * - The cumulative threshold for calls in a single region is 160 calls per second.
   * - The threshold for calls by a single account in a single region is 40 calls per second.
   * 
   * @param request - DescribeDtsJobDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDtsJobDetailResponse
   */
  async describeDtsJobDetailWithOptions(request: $_model.DescribeDtsJobDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDtsJobDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbObjectOutputType)) {
      query["DbObjectOutputType"] = request.dbObjectOutputType;
    }

    if (!$dara.isNull(request.dtsInstanceID)) {
      query["DtsInstanceID"] = request.dtsInstanceID;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.syncSubJobHistory)) {
      query["SyncSubJobHistory"] = request.syncSubJobHistory;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDtsJobDetail",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDtsJobDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDtsJobDetailResponse({}));
  }

  /**
   * Queries the details of a DTS task by calling DescribeDtsJobDetail.
   * 
   * @remarks
   * This operation has rate limits. Calls that exceed the limits are rejected.
   * - The cumulative threshold for calls in a single region is 160 calls per second.
   * - The threshold for calls by a single account in a single region is 40 calls per second.
   * 
   * @param request - DescribeDtsJobDetailRequest
   * @returns DescribeDtsJobDetailResponse
   */
  async describeDtsJobDetail(request: $_model.DescribeDtsJobDetailRequest): Promise<$_model.DescribeDtsJobDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDtsJobDetailWithOptions(request, runtime);
  }

  /**
   * Queries the list of DTS tasks and the execution details of each task.
   * 
   * @remarks
   * This operation has rate limits. Calls that exceed the limits are rejected.
   * - The cumulative threshold for calls in a single region is 200 calls per second.
   * - The threshold for calls by a single account in a single region is 20 calls per second.
   * 
   * @param request - DescribeDtsJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDtsJobsResponse
   */
  async describeDtsJobsWithOptions(request: $_model.DescribeDtsJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDtsJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.destProductType)) {
      query["DestProductType"] = request.destProductType;
    }

    if (!$dara.isNull(request.dtsBisLabel)) {
      query["DtsBisLabel"] = request.dtsBisLabel;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["OrderDirection"] = request.orderDirection;
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

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.srcProductType)) {
      query["SrcProductType"] = request.srcProductType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.withoutDbList)) {
      query["WithoutDbList"] = request.withoutDbList;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDtsJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDtsJobsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDtsJobsResponse({}));
  }

  /**
   * Queries the list of DTS tasks and the execution details of each task.
   * 
   * @remarks
   * This operation has rate limits. Calls that exceed the limits are rejected.
   * - The cumulative threshold for calls in a single region is 200 calls per second.
   * - The threshold for calls by a single account in a single region is 20 calls per second.
   * 
   * @param request - DescribeDtsJobsRequest
   * @returns DescribeDtsJobsResponse
   */
  async describeDtsJobs(request: $_model.DescribeDtsJobsRequest): Promise<$_model.DescribeDtsJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDtsJobsWithOptions(request, runtime);
  }

  /**
   * Queries the log information of a data migration or synchronization task.
   * 
   * @param request - DescribeDtsServiceLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDtsServiceLogResponse
   */
  async describeDtsServiceLogWithOptions(request: $_model.DescribeDtsServiceLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDtsServiceLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.subJobType)) {
      query["SubJobType"] = request.subJobType;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDtsServiceLog",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDtsServiceLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDtsServiceLogResponse({}));
  }

  /**
   * Queries the log information of a data migration or synchronization task.
   * 
   * @param request - DescribeDtsServiceLogRequest
   * @returns DescribeDtsServiceLogResponse
   */
  async describeDtsServiceLog(request: $_model.DescribeDtsServiceLogRequest): Promise<$_model.DescribeDtsServiceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDtsServiceLogWithOptions(request, runtime);
  }

  /**
   * Queries the execution status of a task.
   * 
   * @param request - DescribeEndpointSwitchStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEndpointSwitchStatusResponse
   */
  async describeEndpointSwitchStatusWithOptions(request: $_model.DescribeEndpointSwitchStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEndpointSwitchStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEndpointSwitchStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEndpointSwitchStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEndpointSwitchStatusResponse({}));
  }

  /**
   * Queries the execution status of a task.
   * 
   * @param request - DescribeEndpointSwitchStatusRequest
   * @returns DescribeEndpointSwitchStatusResponse
   */
  async describeEndpointSwitchStatus(request: $_model.DescribeEndpointSwitchStatusRequest): Promise<$_model.DescribeEndpointSwitchStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEndpointSwitchStatusWithOptions(request, runtime);
  }

  /**
   * Queries the running logs of an ETL task.
   * 
   * @param request - DescribeEtlJobLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEtlJobLogsResponse
   */
  async describeEtlJobLogsWithOptions(request: $_model.DescribeEtlJobLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEtlJobLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEtlJobLogs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEtlJobLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEtlJobLogsResponse({}));
  }

  /**
   * Queries the running logs of an ETL task.
   * 
   * @param request - DescribeEtlJobLogsRequest
   * @returns DescribeEtlJobLogsResponse
   */
  async describeEtlJobLogs(request: $_model.DescribeEtlJobLogsRequest): Promise<$_model.DescribeEtlJobLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEtlJobLogsWithOptions(request, runtime);
  }

  /**
   * Queries the running details of a full data migration task.
   * 
   * @param request - DescribeFullProcessListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFullProcessListResponse
   */
  async describeFullProcessListWithOptions(request: $_model.DescribeFullProcessListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFullProcessListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFullProcessList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFullProcessListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFullProcessListResponse({}));
  }

  /**
   * Queries the running details of a full data migration task.
   * 
   * @param request - DescribeFullProcessListRequest
   * @returns DescribeFullProcessListResponse
   */
  async describeFullProcessList(request: $_model.DescribeFullProcessListRequest): Promise<$_model.DescribeFullProcessListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFullProcessListWithOptions(request, runtime);
  }

  /**
   * Queries a list of Global Active Database (GAD) instances.
   * 
   * @param request - DescribeGadInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGadInstancesResponse
   */
  async describeGadInstancesWithOptions(request: $_model.DescribeGadInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGadInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbEngineTypes)) {
      query["DbEngineTypes"] = request.dbEngineTypes;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.masterDbInstanceId)) {
      query["MasterDbInstanceId"] = request.masterDbInstanceId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.slaveDbInstanceId)) {
      query["SlaveDbInstanceId"] = request.slaveDbInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGadInstances",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGadInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGadInstancesResponse({}));
  }

  /**
   * Queries a list of Global Active Database (GAD) instances.
   * 
   * @param request - DescribeGadInstancesRequest
   * @returns DescribeGadInstancesResponse
   */
  async describeGadInstances(request: $_model.DescribeGadInstancesRequest): Promise<$_model.DescribeGadInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGadInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the initialization status. This is an earlier version of the operation.
   * 
   * @param request - DescribeInitializationStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInitializationStatusResponse
   */
  async describeInitializationStatusWithOptions(request: $_model.DescribeInitializationStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInitializationStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInitializationStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInitializationStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInitializationStatusResponse({}));
  }

  /**
   * Queries the initialization status. This is an earlier version of the operation.
   * 
   * @param request - DescribeInitializationStatusRequest
   * @returns DescribeInitializationStatusResponse
   */
  async describeInitializationStatus(request: $_model.DescribeInitializationStatusRequest): Promise<$_model.DescribeInitializationStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInitializationStatusWithOptions(request, runtime);
  }

  /**
   * Queries the alert rules of a DTS task by calling DescribeJobMonitorRule.
   * 
   * @param request - DescribeJobMonitorRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobMonitorRuleResponse
   */
  async describeJobMonitorRuleWithOptions(request: $_model.DescribeJobMonitorRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeJobMonitorRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJobMonitorRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeJobMonitorRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeJobMonitorRuleResponse({}));
  }

  /**
   * Queries the alert rules of a DTS task by calling DescribeJobMonitorRule.
   * 
   * @param request - DescribeJobMonitorRuleRequest
   * @returns DescribeJobMonitorRuleResponse
   */
  async describeJobMonitorRule(request: $_model.DescribeJobMonitorRuleRequest): Promise<$_model.DescribeJobMonitorRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJobMonitorRuleWithOptions(request, runtime);
  }

  /**
   * Queries cluster monitoring information by calling the DescribeMetricList operation.
   * 
   * @param request - DescribeMetricListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricListResponse
   */
  async describeMetricListWithOptions(request: $_model.DescribeMetricListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      body["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.env)) {
      body["Env"] = request.env;
    }

    if (!$dara.isNull(request.metricName)) {
      body["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.metricType)) {
      body["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.ownerID)) {
      body["OwnerID"] = request.ownerID;
    }

    if (!$dara.isNull(request.param)) {
      body["Param"] = request.param;
    }

    if (!$dara.isNull(request.period)) {
      body["Period"] = request.period;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricListResponse({}));
  }

  /**
   * Queries cluster monitoring information by calling the DescribeMetricList operation.
   * 
   * @param request - DescribeMetricListRequest
   * @returns DescribeMetricListResponse
   */
  async describeMetricList(request: $_model.DescribeMetricListRequest): Promise<$_model.DescribeMetricListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricListWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring and alert settings of a data migration task.
   * 
   * @param request - DescribeMigrationJobAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMigrationJobAlertResponse
   */
  async describeMigrationJobAlertWithOptions(request: $_model.DescribeMigrationJobAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMigrationJobAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMigrationJobAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMigrationJobAlertResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMigrationJobAlertResponse({}));
  }

  /**
   * Queries the monitoring and alert settings of a data migration task.
   * 
   * @param request - DescribeMigrationJobAlertRequest
   * @returns DescribeMigrationJobAlertResponse
   */
  async describeMigrationJobAlert(request: $_model.DescribeMigrationJobAlertRequest): Promise<$_model.DescribeMigrationJobAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMigrationJobAlertWithOptions(request, runtime);
  }

  /**
   * Queries the execution details of a data migration task. This is a legacy operation.
   * 
   * @param request - DescribeMigrationJobDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMigrationJobDetailResponse
   */
  async describeMigrationJobDetailWithOptions(request: $_model.DescribeMigrationJobDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMigrationJobDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.migrationMode)) {
      query["MigrationMode"] = request.migrationMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMigrationJobDetail",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMigrationJobDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMigrationJobDetailResponse({}));
  }

  /**
   * Queries the execution details of a data migration task. This is a legacy operation.
   * 
   * @param request - DescribeMigrationJobDetailRequest
   * @returns DescribeMigrationJobDetailResponse
   */
  async describeMigrationJobDetail(request: $_model.DescribeMigrationJobDetailRequest): Promise<$_model.DescribeMigrationJobDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMigrationJobDetailWithOptions(request, runtime);
  }

  /**
   * Queries the status of a data migration task. This is a legacy operation.
   * 
   * @param request - DescribeMigrationJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMigrationJobStatusResponse
   */
  async describeMigrationJobStatusWithOptions(request: $_model.DescribeMigrationJobStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMigrationJobStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMigrationJobStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMigrationJobStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMigrationJobStatusResponse({}));
  }

  /**
   * Queries the status of a data migration task. This is a legacy operation.
   * 
   * @param request - DescribeMigrationJobStatusRequest
   * @returns DescribeMigrationJobStatusResponse
   */
  async describeMigrationJobStatus(request: $_model.DescribeMigrationJobStatusRequest): Promise<$_model.DescribeMigrationJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMigrationJobStatusWithOptions(request, runtime);
  }

  /**
   * Queries the list of data migration instances and details of each migration instance.
   * 
   * @param request - DescribeMigrationJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMigrationJobsResponse
   */
  async describeMigrationJobsWithOptions(request: $_model.DescribeMigrationJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMigrationJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.migrationJobName)) {
      query["MigrationJobName"] = request.migrationJobName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMigrationJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMigrationJobsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMigrationJobsResponse({}));
  }

  /**
   * Queries the list of data migration instances and details of each migration instance.
   * 
   * @param request - DescribeMigrationJobsRequest
   * @returns DescribeMigrationJobsResponse
   */
  async describeMigrationJobs(request: $_model.DescribeMigrationJobsRequest): Promise<$_model.DescribeMigrationJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMigrationJobsWithOptions(request, runtime);
  }

  /**
   * Queries the task result of a precheck for creating a Global Active Database (GAD) order node.
   * 
   * @param request - DescribePreCheckCreateGadOrderResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePreCheckCreateGadOrderResultResponse
   */
  async describePreCheckCreateGadOrderResultWithOptions(request: $_model.DescribePreCheckCreateGadOrderResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePreCheckCreateGadOrderResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePreCheckCreateGadOrderResult",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePreCheckCreateGadOrderResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribePreCheckCreateGadOrderResultResponse({}));
  }

  /**
   * Queries the task result of a precheck for creating a Global Active Database (GAD) order node.
   * 
   * @param request - DescribePreCheckCreateGadOrderResultRequest
   * @returns DescribePreCheckCreateGadOrderResultResponse
   */
  async describePreCheckCreateGadOrderResult(request: $_model.DescribePreCheckCreateGadOrderResultRequest): Promise<$_model.DescribePreCheckCreateGadOrderResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePreCheckCreateGadOrderResultWithOptions(request, runtime);
  }

  /**
   * Queries the execution details of subtasks of a DTS task, including precheck, schema migration or synchronization, full data migration or synchronization, and incremental data migration or synchronization.
   * 
   * @param request - DescribePreCheckStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePreCheckStatusResponse
   */
  async describePreCheckStatusWithOptions(request: $_model.DescribePreCheckStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePreCheckStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.jobCode)) {
      query["JobCode"] = request.jobCode;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.structPhase)) {
      query["StructPhase"] = request.structPhase;
    }

    if (!$dara.isNull(request.structType)) {
      query["StructType"] = request.structType;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePreCheckStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePreCheckStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribePreCheckStatusResponse({}));
  }

  /**
   * Queries the execution details of subtasks of a DTS task, including precheck, schema migration or synchronization, full data migration or synchronization, and incremental data migration or synchronization.
   * 
   * @param request - DescribePreCheckStatusRequest
   * @returns DescribePreCheckStatusResponse
   */
  async describePreCheckStatus(request: $_model.DescribePreCheckStatusRequest): Promise<$_model.DescribePreCheckStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePreCheckStatusWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring and alerting settings of a change tracking instance.
   * 
   * @param request - DescribeSubscriptionInstanceAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubscriptionInstanceAlertResponse
   */
  async describeSubscriptionInstanceAlertWithOptions(request: $_model.DescribeSubscriptionInstanceAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSubscriptionInstanceAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSubscriptionInstanceAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSubscriptionInstanceAlertResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSubscriptionInstanceAlertResponse({}));
  }

  /**
   * Queries the monitoring and alerting settings of a change tracking instance.
   * 
   * @param request - DescribeSubscriptionInstanceAlertRequest
   * @returns DescribeSubscriptionInstanceAlertResponse
   */
  async describeSubscriptionInstanceAlert(request: $_model.DescribeSubscriptionInstanceAlertRequest): Promise<$_model.DescribeSubscriptionInstanceAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSubscriptionInstanceAlertWithOptions(request, runtime);
  }

  /**
   * Queries the instance status details of a change tracking channel. This is a legacy operation.
   * 
   * @param request - DescribeSubscriptionInstanceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubscriptionInstanceStatusResponse
   */
  async describeSubscriptionInstanceStatusWithOptions(request: $_model.DescribeSubscriptionInstanceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSubscriptionInstanceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSubscriptionInstanceStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSubscriptionInstanceStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSubscriptionInstanceStatusResponse({}));
  }

  /**
   * Queries the instance status details of a change tracking channel. This is a legacy operation.
   * 
   * @param request - DescribeSubscriptionInstanceStatusRequest
   * @returns DescribeSubscriptionInstanceStatusResponse
   */
  async describeSubscriptionInstanceStatus(request: $_model.DescribeSubscriptionInstanceStatusRequest): Promise<$_model.DescribeSubscriptionInstanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSubscriptionInstanceStatusWithOptions(request, runtime);
  }

  /**
   * Queries the list of change tracking instances and the details of each instance.
   * 
   * @param request - DescribeSubscriptionInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubscriptionInstancesResponse
   */
  async describeSubscriptionInstancesWithOptions(request: $_model.DescribeSubscriptionInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSubscriptionInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceName)) {
      query["SubscriptionInstanceName"] = request.subscriptionInstanceName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSubscriptionInstances",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSubscriptionInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSubscriptionInstancesResponse({}));
  }

  /**
   * Queries the list of change tracking instances and the details of each instance.
   * 
   * @param request - DescribeSubscriptionInstancesRequest
   * @returns DescribeSubscriptionInstancesResponse
   */
  async describeSubscriptionInstances(request: $_model.DescribeSubscriptionInstancesRequest): Promise<$_model.DescribeSubscriptionInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSubscriptionInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the information about subtasks of a PolarDB-X 1.0 distributed change tracking task.
   * 
   * @remarks
   * <props="china">
   * - Because a PolarDB-X 1.0 change tracking task is a distributed change tracking task, each ApsaraDB RDS for MySQL instance associated with the task corresponds to a change tracking subtask. You can call this operation to query the information about change tracking subtasks.
   * - You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the instance ID, consumer group ID, and other information about a PolarDB-X 1.0 change tracking task.
   * <props="intl">
   * - Because a DRDS change tracking task is a distributed change tracking task, each ApsaraDB RDS for MySQL instance associated with the task corresponds to a change tracking subtask. You can call this operation to query the information about change tracking subtasks.
   * - You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the instance ID, consumer group ID, and other information about a DRDS change tracking task.
   * .
   * 
   * @param tmpReq - DescribeSubscriptionMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubscriptionMetaResponse
   */
  async describeSubscriptionMetaWithOptions(tmpReq: $_model.DescribeSubscriptionMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSubscriptionMetaResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeSubscriptionMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.subMigrationJobIds)) {
      request.subMigrationJobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subMigrationJobIds, "SubMigrationJobIds", "json");
    }

    if (!$dara.isNull(tmpReq.topics)) {
      request.topicsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.topics, "Topics", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!$dara.isNull(request.subMigrationJobIdsShrink)) {
      query["SubMigrationJobIds"] = request.subMigrationJobIdsShrink;
    }

    if (!$dara.isNull(request.topicsShrink)) {
      query["Topics"] = request.topicsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSubscriptionMeta",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSubscriptionMetaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSubscriptionMetaResponse({}));
  }

  /**
   * Queries the information about subtasks of a PolarDB-X 1.0 distributed change tracking task.
   * 
   * @remarks
   * <props="china">
   * - Because a PolarDB-X 1.0 change tracking task is a distributed change tracking task, each ApsaraDB RDS for MySQL instance associated with the task corresponds to a change tracking subtask. You can call this operation to query the information about change tracking subtasks.
   * - You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the instance ID, consumer group ID, and other information about a PolarDB-X 1.0 change tracking task.
   * <props="intl">
   * - Because a DRDS change tracking task is a distributed change tracking task, each ApsaraDB RDS for MySQL instance associated with the task corresponds to a change tracking subtask. You can call this operation to query the information about change tracking subtasks.
   * - You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the instance ID, consumer group ID, and other information about a DRDS change tracking task.
   * .
   * 
   * @param request - DescribeSubscriptionMetaRequest
   * @returns DescribeSubscriptionMetaResponse
   */
  async describeSubscriptionMeta(request: $_model.DescribeSubscriptionMetaRequest): Promise<$_model.DescribeSubscriptionMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSubscriptionMetaWithOptions(request, runtime);
  }

  /**
   * 查看同步和迁移任务的增量写入延迟信息
   * 
   * @param request - DescribeSyncStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSyncStatusResponse
   */
  async describeSyncStatusWithOptions(request: $_model.DescribeSyncStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSyncStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSyncStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSyncStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSyncStatusResponse({}));
  }

  /**
   * 查看同步和迁移任务的增量写入延迟信息
   * 
   * @param request - DescribeSyncStatusRequest
   * @returns DescribeSyncStatusResponse
   */
  async describeSyncStatus(request: $_model.DescribeSyncStatusRequest): Promise<$_model.DescribeSyncStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSyncStatusWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring and alerting settings of a synchronization task.
   * 
   * @param request - DescribeSynchronizationJobAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSynchronizationJobAlertResponse
   */
  async describeSynchronizationJobAlertWithOptions(request: $_model.DescribeSynchronizationJobAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSynchronizationJobAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSynchronizationJobAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSynchronizationJobAlertResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSynchronizationJobAlertResponse({}));
  }

  /**
   * Queries the monitoring and alerting settings of a synchronization task.
   * 
   * @param request - DescribeSynchronizationJobAlertRequest
   * @returns DescribeSynchronizationJobAlertResponse
   */
  async describeSynchronizationJobAlert(request: $_model.DescribeSynchronizationJobAlertRequest): Promise<$_model.DescribeSynchronizationJobAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSynchronizationJobAlertWithOptions(request, runtime);
  }

  /**
   * Retrieves the current image matching switch configuration. This is a legacy operation.
   * 
   * @param request - DescribeSynchronizationJobReplicatorCompareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSynchronizationJobReplicatorCompareResponse
   */
  async describeSynchronizationJobReplicatorCompareWithOptions(request: $_model.DescribeSynchronizationJobReplicatorCompareRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSynchronizationJobReplicatorCompareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSynchronizationJobReplicatorCompare",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSynchronizationJobReplicatorCompareResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSynchronizationJobReplicatorCompareResponse({}));
  }

  /**
   * Retrieves the current image matching switch configuration. This is a legacy operation.
   * 
   * @param request - DescribeSynchronizationJobReplicatorCompareRequest
   * @returns DescribeSynchronizationJobReplicatorCompareResponse
   */
  async describeSynchronizationJobReplicatorCompare(request: $_model.DescribeSynchronizationJobReplicatorCompareRequest): Promise<$_model.DescribeSynchronizationJobReplicatorCompareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSynchronizationJobReplicatorCompareWithOptions(request, runtime);
  }

  /**
   * Queries the running status of a data synchronization task. This is a legacy API operation.
   * 
   * @param request - DescribeSynchronizationJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSynchronizationJobStatusResponse
   */
  async describeSynchronizationJobStatusWithOptions(request: $_model.DescribeSynchronizationJobStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSynchronizationJobStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSynchronizationJobStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSynchronizationJobStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSynchronizationJobStatusResponse({}));
  }

  /**
   * Queries the running status of a data synchronization task. This is a legacy API operation.
   * 
   * @param request - DescribeSynchronizationJobStatusRequest
   * @returns DescribeSynchronizationJobStatusResponse
   */
  async describeSynchronizationJobStatus(request: $_model.DescribeSynchronizationJobStatusRequest): Promise<$_model.DescribeSynchronizationJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSynchronizationJobStatusWithOptions(request, runtime);
  }

  /**
   * Queries the status list of synchronization jobs. This is a legacy operation.
   * 
   * @param request - DescribeSynchronizationJobStatusListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSynchronizationJobStatusListResponse
   */
  async describeSynchronizationJobStatusListWithOptions(request: $_model.DescribeSynchronizationJobStatusListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSynchronizationJobStatusListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationJobIdListJsonStr)) {
      query["SynchronizationJobIdListJsonStr"] = request.synchronizationJobIdListJsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSynchronizationJobStatusList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSynchronizationJobStatusListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSynchronizationJobStatusListResponse({}));
  }

  /**
   * Queries the status list of synchronization jobs. This is a legacy operation.
   * 
   * @param request - DescribeSynchronizationJobStatusListRequest
   * @returns DescribeSynchronizationJobStatusListResponse
   */
  async describeSynchronizationJobStatusList(request: $_model.DescribeSynchronizationJobStatusListRequest): Promise<$_model.DescribeSynchronizationJobStatusListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSynchronizationJobStatusListWithOptions(request, runtime);
  }

  /**
   * Queries a list of data synchronization instances and the details of each instance by calling DescribeSynchronizationJobs.
   * 
   * @param request - DescribeSynchronizationJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSynchronizationJobsResponse
   */
  async describeSynchronizationJobsWithOptions(request: $_model.DescribeSynchronizationJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSynchronizationJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationJobName)) {
      query["SynchronizationJobName"] = request.synchronizationJobName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSynchronizationJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSynchronizationJobsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSynchronizationJobsResponse({}));
  }

  /**
   * Queries a list of data synchronization instances and the details of each instance by calling DescribeSynchronizationJobs.
   * 
   * @param request - DescribeSynchronizationJobsRequest
   * @returns DescribeSynchronizationJobsResponse
   */
  async describeSynchronizationJobs(request: $_model.DescribeSynchronizationJobsRequest): Promise<$_model.DescribeSynchronizationJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSynchronizationJobsWithOptions(request, runtime);
  }

  /**
   * Queries the execution status of a task that modifies synchronization objects. This is a legacy operation.
   * 
   * @param request - DescribeSynchronizationObjectModifyStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSynchronizationObjectModifyStatusResponse
   */
  async describeSynchronizationObjectModifyStatusWithOptions(request: $_model.DescribeSynchronizationObjectModifyStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSynchronizationObjectModifyStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSynchronizationObjectModifyStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSynchronizationObjectModifyStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSynchronizationObjectModifyStatusResponse({}));
  }

  /**
   * Queries the execution status of a task that modifies synchronization objects. This is a legacy operation.
   * 
   * @param request - DescribeSynchronizationObjectModifyStatusRequest
   * @returns DescribeSynchronizationObjectModifyStatusResponse
   */
  async describeSynchronizationObjectModifyStatus(request: $_model.DescribeSynchronizationObjectModifyStatusRequest): Promise<$_model.DescribeSynchronizationObjectModifyStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSynchronizationObjectModifyStatusWithOptions(request, runtime);
  }

  /**
   * Queries all tags that are bound to a data migration, data synchronization, or change tracking instance.
   * 
   * @param request - DescribeTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagKeysResponse
   */
  async describeTagKeysWithOptions(request: $_model.DescribeTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTagKeys",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagKeysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagKeysResponse({}));
  }

  /**
   * Queries all tags that are bound to a data migration, data synchronization, or change tracking instance.
   * 
   * @param request - DescribeTagKeysRequest
   * @returns DescribeTagKeysResponse
   */
  async describeTagKeys(request: $_model.DescribeTagKeysRequest): Promise<$_model.DescribeTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries all values of a tag key that is attached to a data migration, data synchronization, or change tracking instance.
   * 
   * @param request - DescribeTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagValuesResponse
   */
  async describeTagValuesWithOptions(request: $_model.DescribeTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagValuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTagValues",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagValuesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagValuesResponse({}));
  }

  /**
   * Queries all values of a tag key that is attached to a data migration, data synchronization, or change tracking instance.
   * 
   * @param request - DescribeTagValuesRequest
   * @returns DescribeTagValuesResponse
   */
  async describeTagValues(request: $_model.DescribeTagValuesRequest): Promise<$_model.DescribeTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagValuesWithOptions(request, runtime);
  }

  /**
   * Removes a secondary role.
   * 
   * @param request - DetachGadInstanceDbMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachGadInstanceDbMemberResponse
   */
  async detachGadInstanceDbMemberWithOptions(request: $_model.DetachGadInstanceDbMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachGadInstanceDbMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.slaveDbInstanceId)) {
      query["SlaveDbInstanceId"] = request.slaveDbInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachGadInstanceDbMember",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachGadInstanceDbMemberResponse>(await this.callApi(params, req, runtime), new $_model.DetachGadInstanceDbMemberResponse({}));
  }

  /**
   * Removes a secondary role.
   * 
   * @param request - DetachGadInstanceDbMemberRequest
   * @returns DetachGadInstanceDbMemberResponse
   */
  async detachGadInstanceDbMember(request: $_model.DetachGadInstanceDbMemberRequest): Promise<$_model.DetachGadInstanceDbMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachGadInstanceDbMemberWithOptions(request, runtime);
  }

  /**
   * Initializes a built-in account in a node of an active geo-redundancy database cluster. Data Transmission Service (DTS) uses this account to connect to the node and perform synchronization tasks.
   * 
   * @remarks
   * - The unit node must be an ApsaraDB RDS for MySQL instance or a self-managed MySQL database connected through Cloud Enterprise Network (CEN).
   * - This operation initializes a built-in account named rdsdt_dtsacct in a unit node of an active geo-redundancy database cluster. DTS uses this account to connect to the node and perform synchronization tasks.
   * 
   * @param request - InitDtsRdsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitDtsRdsInstanceResponse
   */
  async initDtsRdsInstanceWithOptions(request: $_model.InitDtsRdsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitDtsRdsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.endpointCenId)) {
      query["EndpointCenId"] = request.endpointCenId;
    }

    if (!$dara.isNull(request.endpointInstanceId)) {
      query["EndpointInstanceId"] = request.endpointInstanceId;
    }

    if (!$dara.isNull(request.endpointInstanceType)) {
      query["EndpointInstanceType"] = request.endpointInstanceType;
    }

    if (!$dara.isNull(request.endpointRegion)) {
      query["EndpointRegion"] = request.endpointRegion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitDtsRdsInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitDtsRdsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.InitDtsRdsInstanceResponse({}));
  }

  /**
   * Initializes a built-in account in a node of an active geo-redundancy database cluster. Data Transmission Service (DTS) uses this account to connect to the node and perform synchronization tasks.
   * 
   * @remarks
   * - The unit node must be an ApsaraDB RDS for MySQL instance or a self-managed MySQL database connected through Cloud Enterprise Network (CEN).
   * - This operation initializes a built-in account named rdsdt_dtsacct in a unit node of an active geo-redundancy database cluster. DTS uses this account to connect to the node and perform synchronization tasks.
   * 
   * @param request - InitDtsRdsInstanceRequest
   * @returns InitDtsRdsInstanceResponse
   */
  async initDtsRdsInstance(request: $_model.InitDtsRdsInstanceRequest): Promise<$_model.InitDtsRdsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initDtsRdsInstanceWithOptions(request, runtime);
  }

  /**
   * Queries all clusters created by the current user. You can also filter specific clusters based on specified conditions.
   * 
   * @param request - ListDedicatedClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDedicatedClusterResponse
   */
  async listDedicatedClusterWithOptions(request: $_model.ListDedicatedClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDedicatedClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["OrderDirection"] = request.orderDirection;
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

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDedicatedCluster",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDedicatedClusterResponse>(await this.callApi(params, req, runtime), new $_model.ListDedicatedClusterResponse({}));
  }

  /**
   * Queries all clusters created by the current user. You can also filter specific clusters based on specified conditions.
   * 
   * @param request - ListDedicatedClusterRequest
   * @returns ListDedicatedClusterResponse
   */
  async listDedicatedCluster(request: $_model.ListDedicatedClusterRequest): Promise<$_model.ListDedicatedClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDedicatedClusterWithOptions(request, runtime);
  }

  /**
   * Query the JobStep list
   * 
   * @param request - ListJobStepRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobStepResponse
   */
  async listJobStepWithOptions(request: $_model.ListJobStepRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobStepResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobStep",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobStepResponse>(await this.callApi(params, req, runtime), new $_model.ListJobStepResponse({}));
  }

  /**
   * Query the JobStep list
   * 
   * @param request - ListJobStepRequest
   * @returns ListJobStepResponse
   */
  async listJobStep(request: $_model.ListJobStepRequest): Promise<$_model.ListJobStepResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobStepWithOptions(request, runtime);
  }

  /**
   * Queries the tags bound to data migration, data synchronization, and change tracking instances. You can also query the instances bound to specific tags.
   * 
   * @remarks
   * ***.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags bound to data migration, data synchronization, and change tracking instances. You can also query the instances bound to specific tags.
   * 
   * @remarks
   * ***.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the information of a consumer group in a change tracking channel (new version).
   * 
   * @param request - ModifyConsumerChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyConsumerChannelResponse
   */
  async modifyConsumerChannelWithOptions(request: $_model.ModifyConsumerChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyConsumerChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consumerGroupId)) {
      query["ConsumerGroupId"] = request.consumerGroupId;
    }

    if (!$dara.isNull(request.consumerGroupName)) {
      query["ConsumerGroupName"] = request.consumerGroupName;
    }

    if (!$dara.isNull(request.consumerGroupPassword)) {
      query["ConsumerGroupPassword"] = request.consumerGroupPassword;
    }

    if (!$dara.isNull(request.consumerGroupUserName)) {
      query["ConsumerGroupUserName"] = request.consumerGroupUserName;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyConsumerChannel",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyConsumerChannelResponse>(await this.callApi(params, req, runtime), new $_model.ModifyConsumerChannelResponse({}));
  }

  /**
   * Modifies the information of a consumer group in a change tracking channel (new version).
   * 
   * @param request - ModifyConsumerChannelRequest
   * @returns ModifyConsumerChannelResponse
   */
  async modifyConsumerChannel(request: $_model.ModifyConsumerChannelRequest): Promise<$_model.ModifyConsumerChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyConsumerChannelWithOptions(request, runtime);
  }

  /**
   * Modifies the password of a consumer group. This is a legacy operation.
   * 
   * @param request - ModifyConsumerGroupPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyConsumerGroupPasswordResponse
   */
  async modifyConsumerGroupPasswordWithOptions(request: $_model.ModifyConsumerGroupPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyConsumerGroupPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.consumerGroupID)) {
      query["ConsumerGroupID"] = request.consumerGroupID;
    }

    if (!$dara.isNull(request.consumerGroupName)) {
      query["ConsumerGroupName"] = request.consumerGroupName;
    }

    if (!$dara.isNull(request.consumerGroupPassword)) {
      query["ConsumerGroupPassword"] = request.consumerGroupPassword;
    }

    if (!$dara.isNull(request.consumerGroupUserName)) {
      query["ConsumerGroupUserName"] = request.consumerGroupUserName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    if (!$dara.isNull(request.consumerGroupNewPassword)) {
      query["consumerGroupNewPassword"] = request.consumerGroupNewPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyConsumerGroupPassword",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyConsumerGroupPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ModifyConsumerGroupPasswordResponse({}));
  }

  /**
   * Modifies the password of a consumer group. This is a legacy operation.
   * 
   * @param request - ModifyConsumerGroupPasswordRequest
   * @returns ModifyConsumerGroupPasswordResponse
   */
  async modifyConsumerGroupPassword(request: $_model.ModifyConsumerGroupPasswordRequest): Promise<$_model.ModifyConsumerGroupPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyConsumerGroupPasswordWithOptions(request, runtime);
  }

  /**
   * Modifies the consumption checkpoint of a change tracking instance channel.
   * 
   * @param request - ModifyConsumptionTimestampRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyConsumptionTimestampResponse
   */
  async modifyConsumptionTimestampWithOptions(request: $_model.ModifyConsumptionTimestampRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyConsumptionTimestampResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.consumptionTimestamp)) {
      query["ConsumptionTimestamp"] = request.consumptionTimestamp;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyConsumptionTimestamp",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyConsumptionTimestampResponse>(await this.callApi(params, req, runtime), new $_model.ModifyConsumptionTimestampResponse({}));
  }

  /**
   * Modifies the consumption checkpoint of a change tracking instance channel.
   * 
   * @param request - ModifyConsumptionTimestampRequest
   * @returns ModifyConsumptionTimestampResponse
   */
  async modifyConsumptionTimestamp(request: $_model.ModifyConsumptionTimestampRequest): Promise<$_model.ModifyConsumptionTimestampResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyConsumptionTimestampWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of a dedicated cluster by calling the ModifyDedicatedCluster operation.
   * 
   * @remarks
   * Currently, only the overcommit ratio can be modified.
   * 
   * @param request - ModifyDedicatedClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDedicatedClusterResponse
   */
  async modifyDedicatedClusterWithOptions(request: $_model.ModifyDedicatedClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDedicatedClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.dedicatedClusterName)) {
      query["DedicatedClusterName"] = request.dedicatedClusterName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.oversoldRatio)) {
      query["OversoldRatio"] = request.oversoldRatio;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDedicatedCluster",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDedicatedClusterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDedicatedClusterResponse({}));
  }

  /**
   * Modifies the configuration of a dedicated cluster by calling the ModifyDedicatedCluster operation.
   * 
   * @remarks
   * Currently, only the overcommit ratio can be modified.
   * 
   * @param request - ModifyDedicatedClusterRequest
   * @returns ModifyDedicatedClusterResponse
   */
  async modifyDedicatedCluster(request: $_model.ModifyDedicatedClusterRequest): Promise<$_model.ModifyDedicatedClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDedicatedClusterWithOptions(request, runtime);
  }

  /**
   * Modifies a data synchronization task by calling the ModifyDtsJob operation.
   * 
   * @remarks
   * > You can preconfigure settings in the console as needed, and then preview the corresponding OpenAPI parameter information to help you specify request parameters. For more information, see [Preview OpenAPI request parameters](https://help.aliyun.com/document_detail/2851612.html).
   * 
   * @param tmpReq - ModifyDtsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDtsJobResponse
   */
  async modifyDtsJobWithOptions(tmpReq: $_model.ModifyDtsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDtsJobResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyDtsJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dbList)) {
      request.dbListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dbList, "DbList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataInitialization)) {
      query["DataInitialization"] = request.dataInitialization;
    }

    if (!$dara.isNull(request.dataSynchronization)) {
      query["DataSynchronization"] = request.dataSynchronization;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.fileOssUrl)) {
      query["FileOssUrl"] = request.fileOssUrl;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.structureInitialization)) {
      query["StructureInitialization"] = request.structureInitialization;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbListShrink)) {
      body["DbList"] = request.dbListShrink;
    }

    if (!$dara.isNull(request.etlOperatorColumnReference)) {
      body["EtlOperatorColumnReference"] = request.etlOperatorColumnReference;
    }

    if (!$dara.isNull(request.filterTableName)) {
      body["FilterTableName"] = request.filterTableName;
    }

    if (!$dara.isNull(request.modifyTypeEnum)) {
      body["ModifyTypeEnum"] = request.modifyTypeEnum;
    }

    if (!$dara.isNull(request.reserved)) {
      body["Reserved"] = request.reserved;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDtsJobResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDtsJobResponse({}));
  }

  /**
   * Modifies a data synchronization task by calling the ModifyDtsJob operation.
   * 
   * @remarks
   * > You can preconfigure settings in the console as needed, and then preview the corresponding OpenAPI parameter information to help you specify request parameters. For more information, see [Preview OpenAPI request parameters](https://help.aliyun.com/document_detail/2851612.html).
   * 
   * @param request - ModifyDtsJobRequest
   * @returns ModifyDtsJobResponse
   */
  async modifyDtsJob(request: $_model.ModifyDtsJobRequest): Promise<$_model.ModifyDtsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDtsJobWithOptions(request, runtime);
  }

  async modifyDtsJobAdvance(request: $_model.ModifyDtsJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDtsJobResponse> {
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
      Product: "Dts",
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
    let modifyDtsJobReq = new $_model.ModifyDtsJobRequest({ });
    OpenApiUtil.convert(request, modifyDtsJobReq);
    if (!$dara.isNull(request.fileOssUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileOssUrlObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      modifyDtsJobReq.fileOssUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let modifyDtsJobResp = await this.modifyDtsJobWithOptions(modifyDtsJobReq, runtime);
    return modifyDtsJobResp;
  }

  /**
   * Modifies the parameters of a DTS task by calling the ModifyDtsJobConfig operation.
   * 
   * @param request - ModifyDtsJobConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDtsJobConfigResponse
   */
  async modifyDtsJobConfigWithOptions(request: $_model.ModifyDtsJobConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDtsJobConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDtsJobConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDtsJobConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDtsJobConfigResponse({}));
  }

  /**
   * Modifies the parameters of a DTS task by calling the ModifyDtsJobConfig operation.
   * 
   * @param request - ModifyDtsJobConfigRequest
   * @returns ModifyDtsJobConfigResponse
   */
  async modifyDtsJobConfig(request: $_model.ModifyDtsJobConfigRequest): Promise<$_model.ModifyDtsJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDtsJobConfigWithOptions(request, runtime);
  }

  /**
   * Changes the dedicated cluster on which a task runs.
   * 
   * @remarks
   * > After a migration task is changed from a dedicated cluster to a public cluster, the billing method of the task changes to pay-as-you-go, and billing starts.
   * 
   * @param request - ModifyDtsJobDedicatedClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDtsJobDedicatedClusterResponse
   */
  async modifyDtsJobDedicatedClusterWithOptions(request: $_model.ModifyDtsJobDedicatedClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDtsJobDedicatedClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.dtsJobIds)) {
      query["DtsJobIds"] = request.dtsJobIds;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDtsJobDedicatedCluster",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDtsJobDedicatedClusterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDtsJobDedicatedClusterResponse({}));
  }

  /**
   * Changes the dedicated cluster on which a task runs.
   * 
   * @remarks
   * > After a migration task is changed from a dedicated cluster to a public cluster, the billing method of the task changes to pay-as-you-go, and billing starts.
   * 
   * @param request - ModifyDtsJobDedicatedClusterRequest
   * @returns ModifyDtsJobDedicatedClusterResponse
   */
  async modifyDtsJobDedicatedCluster(request: $_model.ModifyDtsJobDedicatedClusterRequest): Promise<$_model.ModifyDtsJobDedicatedClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDtsJobDedicatedClusterWithOptions(request, runtime);
  }

  /**
   * Modifies the DU upper limit of a DTS task by calling the ModifyDtsJobDuLimit operation.
   * 
   * @remarks
   * - DTS instances in a dedicated cluster must support specification changes. By changing the resources consumed by a task at runtime, you can dynamically adjust the number of schedulable tasks in the current cluster, thereby deducting or releasing the total number of DUs in the cluster.
   * - Before modifying the DU upper limit of a task, ensure that sufficient resources are available.
   * 
   * @param request - ModifyDtsJobDuLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDtsJobDuLimitResponse
   */
  async modifyDtsJobDuLimitWithOptions(request: $_model.ModifyDtsJobDuLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDtsJobDuLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.duLimit)) {
      query["DuLimit"] = request.duLimit;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDtsJobDuLimit",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDtsJobDuLimitResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDtsJobDuLimitResponse({}));
  }

  /**
   * Modifies the DU upper limit of a DTS task by calling the ModifyDtsJobDuLimit operation.
   * 
   * @remarks
   * - DTS instances in a dedicated cluster must support specification changes. By changing the resources consumed by a task at runtime, you can dynamically adjust the number of schedulable tasks in the current cluster, thereby deducting or releasing the total number of DUs in the cluster.
   * - Before modifying the DU upper limit of a task, ensure that sufficient resources are available.
   * 
   * @param request - ModifyDtsJobDuLimitRequest
   * @returns ModifyDtsJobDuLimitResponse
   */
  async modifyDtsJobDuLimit(request: $_model.ModifyDtsJobDuLimitRequest): Promise<$_model.ModifyDtsJobDuLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDtsJobDuLimitWithOptions(request, runtime);
  }

  /**
   * Modifies the source or destination instance of a DTS synchronization or migration task.
   * 
   * @remarks
   * > After the database instance is modified, the DTS incremental write module rolls back writes by 10 seconds. If the synchronized or migrated data does not have a primary key, stop writing data to the source instance during the database instance replacement. Otherwise, duplicate data may occur.
   * 
   * @param request - ModifyDtsJobEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDtsJobEndpointResponse
   */
  async modifyDtsJobEndpointWithOptions(request: $_model.ModifyDtsJobEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDtsJobEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunUid)) {
      query["AliyunUid"] = request.aliyunUid;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!$dara.isNull(request.endpointInstanceId)) {
      query["EndpointInstanceId"] = request.endpointInstanceId;
    }

    if (!$dara.isNull(request.endpointInstanceType)) {
      query["EndpointInstanceType"] = request.endpointInstanceType;
    }

    if (!$dara.isNull(request.endpointIp)) {
      query["EndpointIp"] = request.endpointIp;
    }

    if (!$dara.isNull(request.endpointPort)) {
      query["EndpointPort"] = request.endpointPort;
    }

    if (!$dara.isNull(request.endpointRegionId)) {
      query["EndpointRegionId"] = request.endpointRegionId;
    }

    if (!$dara.isNull(request.modifyAccount)) {
      query["ModifyAccount"] = request.modifyAccount;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.shardPassword)) {
      query["ShardPassword"] = request.shardPassword;
    }

    if (!$dara.isNull(request.shardUsername)) {
      query["ShardUsername"] = request.shardUsername;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDtsJobEndpoint",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDtsJobEndpointResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDtsJobEndpointResponse({}));
  }

  /**
   * Modifies the source or destination instance of a DTS synchronization or migration task.
   * 
   * @remarks
   * > After the database instance is modified, the DTS incremental write module rolls back writes by 10 seconds. If the synchronized or migrated data does not have a primary key, stop writing data to the source instance during the database instance replacement. Otherwise, duplicate data may occur.
   * 
   * @param request - ModifyDtsJobEndpointRequest
   * @returns ModifyDtsJobEndpointResponse
   */
  async modifyDtsJobEndpoint(request: $_model.ModifyDtsJobEndpointRequest): Promise<$_model.ModifyDtsJobEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDtsJobEndpointWithOptions(request, runtime);
  }

  /**
   * Modifies the name of a DTS task by calling ModifyDtsJobName.
   * 
   * @param request - ModifyDtsJobNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDtsJobNameResponse
   */
  async modifyDtsJobNameWithOptions(request: $_model.ModifyDtsJobNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDtsJobNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.dtsJobName)) {
      query["DtsJobName"] = request.dtsJobName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDtsJobName",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDtsJobNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDtsJobNameResponse({}));
  }

  /**
   * Modifies the name of a DTS task by calling ModifyDtsJobName.
   * 
   * @param request - ModifyDtsJobNameRequest
   * @returns ModifyDtsJobNameResponse
   */
  async modifyDtsJobName(request: $_model.ModifyDtsJobNameRequest): Promise<$_model.ModifyDtsJobNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDtsJobNameWithOptions(request, runtime);
  }

  /**
   * Modifies the password of a DTS task (new version).
   * 
   * @param request - ModifyDtsJobPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDtsJobPasswordResponse
   */
  async modifyDtsJobPasswordWithOptions(request: $_model.ModifyDtsJobPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDtsJobPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDtsJobPassword",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDtsJobPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDtsJobPasswordResponse({}));
  }

  /**
   * Modifies the password of a DTS task (new version).
   * 
   * @param request - ModifyDtsJobPasswordRequest
   * @returns ModifyDtsJobPasswordResponse
   */
  async modifyDtsJobPassword(request: $_model.ModifyDtsJobPasswordRequest): Promise<$_model.ModifyDtsJobPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDtsJobPasswordWithOptions(request, runtime);
  }

  /**
   * Adjusts the migration rate of a data synchronization or migration instance.
   * 
   * @param request - ModifyDynamicConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDynamicConfigResponse
   */
  async modifyDynamicConfigWithOptions(request: $_model.ModifyDynamicConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDynamicConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configList)) {
      query["ConfigList"] = request.configList;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.enableLimit)) {
      query["EnableLimit"] = request.enableLimit;
    }

    if (!$dara.isNull(request.jobCode)) {
      query["JobCode"] = request.jobCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDynamicConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDynamicConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDynamicConfigResponse({}));
  }

  /**
   * Adjusts the migration rate of a data synchronization or migration instance.
   * 
   * @param request - ModifyDynamicConfigRequest
   * @returns ModifyDynamicConfigResponse
   */
  async modifyDynamicConfig(request: $_model.ModifyDynamicConfigRequest): Promise<$_model.ModifyDynamicConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDynamicConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the name of a Global Active Database (GAD) instance.
   * 
   * @param request - ModifyGadInstanceNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGadInstanceNameResponse
   */
  async modifyGadInstanceNameWithOptions(request: $_model.ModifyGadInstanceNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGadInstanceNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyGadInstanceName",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyGadInstanceNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyGadInstanceNameResponse({}));
  }

  /**
   * Modifies the name of a Global Active Database (GAD) instance.
   * 
   * @param request - ModifyGadInstanceNameRequest
   * @returns ModifyGadInstanceNameResponse
   */
  async modifyGadInstanceName(request: $_model.ModifyGadInstanceNameRequest): Promise<$_model.ModifyGadInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGadInstanceNameWithOptions(request, runtime);
  }

  /**
   * Modify the offset for incremental data writing.
   * 
   * @param request - ModifyJobStepCheckpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyJobStepCheckpointResponse
   */
  async modifyJobStepCheckpointWithOptions(request: $_model.ModifyJobStepCheckpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyJobStepCheckpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.jobStepId)) {
      query["JobStepId"] = request.jobStepId;
    }

    if (!$dara.isNull(request.newCheckPoint)) {
      query["NewCheckPoint"] = request.newCheckPoint;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyJobStepCheckpoint",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyJobStepCheckpointResponse>(await this.callApi(params, req, runtime), new $_model.ModifyJobStepCheckpointResponse({}));
  }

  /**
   * Modify the offset for incremental data writing.
   * 
   * @param request - ModifyJobStepCheckpointRequest
   * @returns ModifyJobStepCheckpointResponse
   */
  async modifyJobStepCheckpoint(request: $_model.ModifyJobStepCheckpointRequest): Promise<$_model.ModifyJobStepCheckpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyJobStepCheckpointWithOptions(request, runtime);
  }

  /**
   * Modifies a change tracking task (new version).
   * 
   * @remarks
   * > You can perform the required preconfigurations in the console and then preview the corresponding OpenAPI parameter information to help you fill in the request parameters. For more information, see [Preview OpenAPI request parameters](https://help.aliyun.com/document_detail/2851612.html).
   * 
   * @param request - ModifySubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySubscriptionResponse
   */
  async modifySubscriptionWithOptions(request: $_model.ModifySubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySubscriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbList)) {
      query["DbList"] = request.dbList;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.modifyType)) {
      query["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.reserved)) {
      query["Reserved"] = request.reserved;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionDataTypeDDL)) {
      query["SubscriptionDataTypeDDL"] = request.subscriptionDataTypeDDL;
    }

    if (!$dara.isNull(request.subscriptionDataTypeDML)) {
      query["SubscriptionDataTypeDML"] = request.subscriptionDataTypeDML;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySubscription",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifySubscriptionResponse({}));
  }

  /**
   * Modifies a change tracking task (new version).
   * 
   * @remarks
   * > You can perform the required preconfigurations in the console and then preview the corresponding OpenAPI parameter information to help you fill in the request parameters. For more information, see [Preview OpenAPI request parameters](https://help.aliyun.com/document_detail/2851612.html).
   * 
   * @param request - ModifySubscriptionRequest
   * @returns ModifySubscriptionResponse
   */
  async modifySubscription(request: $_model.ModifySubscriptionRequest): Promise<$_model.ModifySubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySubscriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the subscription objects of a change tracking task. This is a legacy operation.
   * 
   * @param request - ModifySubscriptionObjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySubscriptionObjectResponse
   */
  async modifySubscriptionObjectWithOptions(request: $_model.ModifySubscriptionObjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySubscriptionObjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    if (!$dara.isNull(request.subscriptionObject)) {
      query["SubscriptionObject"] = request.subscriptionObject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySubscriptionObject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySubscriptionObjectResponse>(await this.callApi(params, req, runtime), new $_model.ModifySubscriptionObjectResponse({}));
  }

  /**
   * Modifies the subscription objects of a change tracking task. This is a legacy operation.
   * 
   * @param request - ModifySubscriptionObjectRequest
   * @returns ModifySubscriptionObjectResponse
   */
  async modifySubscriptionObject(request: $_model.ModifySubscriptionObjectRequest): Promise<$_model.ModifySubscriptionObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySubscriptionObjectWithOptions(request, runtime);
  }

  /**
   * Modifies the synchronization objects in a data synchronization job instance. This is a legacy operation.
   * 
   * @param request - ModifySynchronizationObjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySynchronizationObjectResponse
   */
  async modifySynchronizationObjectWithOptions(request: $_model.ModifySynchronizationObjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySynchronizationObjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.synchronizationObjects)) {
      body["SynchronizationObjects"] = request.synchronizationObjects;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySynchronizationObject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySynchronizationObjectResponse>(await this.callApi(params, req, runtime), new $_model.ModifySynchronizationObjectResponse({}));
  }

  /**
   * Modifies the synchronization objects in a data synchronization job instance. This is a legacy operation.
   * 
   * @param request - ModifySynchronizationObjectRequest
   * @returns ModifySynchronizationObjectResponse
   */
  async modifySynchronizationObject(request: $_model.ModifySynchronizationObjectRequest): Promise<$_model.ModifySynchronizationObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySynchronizationObjectWithOptions(request, runtime);
  }

  /**
   * Prechecks an order for creating a Global Active Database (GAD) instance group.
   * 
   * @param request - PreCheckCreateGadOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreCheckCreateGadOrderResponse
   */
  async preCheckCreateGadOrderWithOptions(request: $_model.PreCheckCreateGadOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PreCheckCreateGadOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.masterDatabaseName)) {
      query["MasterDatabaseName"] = request.masterDatabaseName;
    }

    if (!$dara.isNull(request.masterEngineArchType)) {
      query["MasterEngineArchType"] = request.masterEngineArchType;
    }

    if (!$dara.isNull(request.masterShardAccountName)) {
      query["MasterShardAccountName"] = request.masterShardAccountName;
    }

    if (!$dara.isNull(request.masterShardAccountPassword)) {
      query["MasterShardAccountPassword"] = request.masterShardAccountPassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.slaveDatabaseName)) {
      query["SlaveDatabaseName"] = request.slaveDatabaseName;
    }

    if (!$dara.isNull(request.slaveDbInstanceId)) {
      query["SlaveDbInstanceId"] = request.slaveDbInstanceId;
    }

    if (!$dara.isNull(request.slaveDbInstanceRegion)) {
      query["SlaveDbInstanceRegion"] = request.slaveDbInstanceRegion;
    }

    if (!$dara.isNull(request.slaveEngineArchType)) {
      query["SlaveEngineArchType"] = request.slaveEngineArchType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreCheckCreateGadOrder",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreCheckCreateGadOrderResponse>(await this.callApi(params, req, runtime), new $_model.PreCheckCreateGadOrderResponse({}));
  }

  /**
   * Prechecks an order for creating a Global Active Database (GAD) instance group.
   * 
   * @param request - PreCheckCreateGadOrderRequest
   * @returns PreCheckCreateGadOrderResponse
   */
  async preCheckCreateGadOrder(request: $_model.PreCheckCreateGadOrderRequest): Promise<$_model.PreCheckCreateGadOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.preCheckCreateGadOrderWithOptions(request, runtime);
  }

  /**
   * Promote a geo-disaster recovery instance from the secondary role to the primary role
   * 
   * @param request - PromoteToMasterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PromoteToMasterResponse
   */
  async promoteToMasterWithOptions(request: $_model.PromoteToMasterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PromoteToMasterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.masterDbInstanceId)) {
      query["MasterDbInstanceId"] = request.masterDbInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.slaveDbInstanceId)) {
      query["SlaveDbInstanceId"] = request.slaveDbInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PromoteToMaster",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PromoteToMasterResponse>(await this.callApi(params, req, runtime), new $_model.PromoteToMasterResponse({}));
  }

  /**
   * Promote a geo-disaster recovery instance from the secondary role to the primary role
   * 
   * @param request - PromoteToMasterRequest
   * @returns PromoteToMasterResponse
   */
  async promoteToMaster(request: $_model.PromoteToMasterRequest): Promise<$_model.PromoteToMasterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.promoteToMasterWithOptions(request, runtime);
  }

  /**
   * Renews a DTS instance. This operation is applicable only to subscription DTS instances.
   * 
   * @param request - RenewInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewInstanceResponse
   */
  async renewInstanceWithOptions(request: $_model.RenewInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buyCount)) {
      query["BuyCount"] = request.buyCount;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewInstanceResponse({}));
  }

  /**
   * Renews a DTS instance. This operation is applicable only to subscription DTS instances.
   * 
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(request: $_model.RenewInstanceRequest): Promise<$_model.RenewInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  /**
   * Resets a data synchronization or change tracking task.
   * 
   * @remarks
   * > After the configuration of a data synchronization or change tracking task is cleared, the original task is deleted. DTS creates a new unconfigured task. You must call the [ConfigureDtsJob](https://help.aliyun.com/document_detail/208399.html) operation to reconfigure the task.
   * 
   * @param request - ResetDtsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetDtsJobResponse
   */
  async resetDtsJobWithOptions(request: $_model.ResetDtsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetDtsJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetDtsJobResponse>(await this.callApi(params, req, runtime), new $_model.ResetDtsJobResponse({}));
  }

  /**
   * Resets a data synchronization or change tracking task.
   * 
   * @remarks
   * > After the configuration of a data synchronization or change tracking task is cleared, the original task is deleted. DTS creates a new unconfigured task. You must call the [ConfigureDtsJob](https://help.aliyun.com/document_detail/208399.html) operation to reconfigure the task.
   * 
   * @param request - ResetDtsJobRequest
   * @returns ResetDtsJobResponse
   */
  async resetDtsJob(request: $_model.ResetDtsJobRequest): Promise<$_model.ResetDtsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetDtsJobWithOptions(request, runtime);
  }

  /**
   * Resets the configuration of a data synchronization task.
   * 
   * @remarks
   * > After you reset the configuration of a data synchronization task, the original synchronization task is released. You must call the **ConfigureSynchronizationJob** operation to reconfigure the synchronization task before you can start the task.
   * 
   * @param request - ResetSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetSynchronizationJobResponse
   */
  async resetSynchronizationJobWithOptions(request: $_model.ResetSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetSynchronizationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.ResetSynchronizationJobResponse({}));
  }

  /**
   * Resets the configuration of a data synchronization task.
   * 
   * @remarks
   * > After you reset the configuration of a data synchronization task, the original synchronization task is released. You must call the **ConfigureSynchronizationJob** operation to reconfigure the synchronization task before you can start the task.
   * 
   * @param request - ResetSynchronizationJobRequest
   * @returns ResetSynchronizationJobResponse
   */
  async resetSynchronizationJob(request: $_model.ResetSynchronizationJobRequest): Promise<$_model.ResetSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * 调转双向任务的方向
   * 
   * @param request - ReverseTwoWayDirectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReverseTwoWayDirectionResponse
   */
  async reverseTwoWayDirectionWithOptions(request: $_model.ReverseTwoWayDirectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReverseTwoWayDirectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.ignoreErrorSubJob)) {
      query["IgnoreErrorSubJob"] = request.ignoreErrorSubJob;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReverseTwoWayDirection",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReverseTwoWayDirectionResponse>(await this.callApi(params, req, runtime), new $_model.ReverseTwoWayDirectionResponse({}));
  }

  /**
   * 调转双向任务的方向
   * 
   * @param request - ReverseTwoWayDirectionRequest
   * @returns ReverseTwoWayDirectionResponse
   */
  async reverseTwoWayDirection(request: $_model.ReverseTwoWayDirectionRequest): Promise<$_model.ReverseTwoWayDirectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reverseTwoWayDirectionWithOptions(request, runtime);
  }

  /**
   * Skips the precheck for a legacy data migration or synchronization task.
   * 
   * @param request - ShieldPrecheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ShieldPrecheckResponse
   */
  async shieldPrecheckWithOptions(request: $_model.ShieldPrecheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ShieldPrecheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.precheckItems)) {
      query["PrecheckItems"] = request.precheckItems;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ShieldPrecheck",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ShieldPrecheckResponse>(await this.callApi(params, req, runtime), new $_model.ShieldPrecheckResponse({}));
  }

  /**
   * Skips the precheck for a legacy data migration or synchronization task.
   * 
   * @param request - ShieldPrecheckRequest
   * @returns ShieldPrecheckResponse
   */
  async shieldPrecheck(request: $_model.ShieldPrecheckRequest): Promise<$_model.ShieldPrecheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.shieldPrecheckWithOptions(request, runtime);
  }

  /**
   * Skips tables that do not need to be synchronized during the full data synchronization phase.
   * 
   * @param request - SkipFullJobTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SkipFullJobTableResponse
   */
  async skipFullJobTableWithOptions(request: $_model.SkipFullJobTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SkipFullJobTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.jobProgressId)) {
      query["JobProgressId"] = request.jobProgressId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SkipFullJobTable",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SkipFullJobTableResponse>(await this.callApi(params, req, runtime), new $_model.SkipFullJobTableResponse({}));
  }

  /**
   * Skips tables that do not need to be synchronized during the full data synchronization phase.
   * 
   * @param request - SkipFullJobTableRequest
   * @returns SkipFullJobTableResponse
   */
  async skipFullJobTable(request: $_model.SkipFullJobTableRequest): Promise<$_model.SkipFullJobTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.skipFullJobTableWithOptions(request, runtime);
  }

  /**
   * Suppresses or unsuppresses precheck alert items.
   * 
   * @param request - SkipPreCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SkipPreCheckResponse
   */
  async skipPreCheckWithOptions(request: $_model.SkipPreCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SkipPreCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.skip)) {
      query["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.skipPreCheckItems)) {
      query["SkipPreCheckItems"] = request.skipPreCheckItems;
    }

    if (!$dara.isNull(request.skipPreCheckNames)) {
      query["SkipPreCheckNames"] = request.skipPreCheckNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SkipPreCheck",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SkipPreCheckResponse>(await this.callApi(params, req, runtime), new $_model.SkipPreCheckResponse({}));
  }

  /**
   * Suppresses or unsuppresses precheck alert items.
   * 
   * @param request - SkipPreCheckRequest
   * @returns SkipPreCheckResponse
   */
  async skipPreCheck(request: $_model.SkipPreCheckRequest): Promise<$_model.SkipPreCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.skipPreCheckWithOptions(request, runtime);
  }

  /**
   * Starts a data migration, data synchronization, or change tracking task by calling the StartDtsJob operation.
   * 
   * @param request - StartDtsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDtsJobResponse
   */
  async startDtsJobWithOptions(request: $_model.StartDtsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDtsJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDtsJobResponse>(await this.callApi(params, req, runtime), new $_model.StartDtsJobResponse({}));
  }

  /**
   * Starts a data migration, data synchronization, or change tracking task by calling the StartDtsJob operation.
   * 
   * @param request - StartDtsJobRequest
   * @returns StartDtsJobResponse
   */
  async startDtsJob(request: $_model.StartDtsJobRequest): Promise<$_model.StartDtsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDtsJobWithOptions(request, runtime);
  }

  /**
   * Starts multiple data migration or synchronization tasks in a batch by calling the StartDtsJobs operation.
   * 
   * @param request - StartDtsJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDtsJobsResponse
   */
  async startDtsJobsWithOptions(request: $_model.StartDtsJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDtsJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobIds)) {
      query["DtsJobIds"] = request.dtsJobIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDtsJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDtsJobsResponse>(await this.callApi(params, req, runtime), new $_model.StartDtsJobsResponse({}));
  }

  /**
   * Starts multiple data migration or synchronization tasks in a batch by calling the StartDtsJobs operation.
   * 
   * @param request - StartDtsJobsRequest
   * @returns StartDtsJobsResponse
   */
  async startDtsJobs(request: $_model.StartDtsJobsRequest): Promise<$_model.StartDtsJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDtsJobsWithOptions(request, runtime);
  }

  /**
   * Starts a data migration task of Data Transmission Service (DTS).
   * 
   * @param request - StartMigrationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartMigrationJobResponse
   */
  async startMigrationJobWithOptions(request: $_model.StartMigrationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartMigrationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartMigrationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.StartMigrationJobResponse({}));
  }

  /**
   * Starts a data migration task of Data Transmission Service (DTS).
   * 
   * @param request - StartMigrationJobRequest
   * @returns StartMigrationJobResponse
   */
  async startMigrationJob(request: $_model.StartMigrationJobRequest): Promise<$_model.StartMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startMigrationJobWithOptions(request, runtime);
  }

  /**
   * Starts a reverse task that is created by calling the CreateReverseDtsJob operation.
   * 
   * @remarks
   * Before you call this operation, check the status of the reverse task in the console or by calling [DescribeDtsJobDetail](https://help.aliyun.com/document_detail/208925.html). Make sure that the task has not been released and is in the paused state.
   * 
   * @param request - StartReverseWriterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartReverseWriterResponse
   */
  async startReverseWriterWithOptions(request: $_model.StartReverseWriterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartReverseWriterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkPoint)) {
      query["CheckPoint"] = request.checkPoint;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartReverseWriter",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartReverseWriterResponse>(await this.callApi(params, req, runtime), new $_model.StartReverseWriterResponse({}));
  }

  /**
   * Starts a reverse task that is created by calling the CreateReverseDtsJob operation.
   * 
   * @remarks
   * Before you call this operation, check the status of the reverse task in the console or by calling [DescribeDtsJobDetail](https://help.aliyun.com/document_detail/208925.html). Make sure that the task has not been released and is in the paused state.
   * 
   * @param request - StartReverseWriterRequest
   * @returns StartReverseWriterResponse
   */
  async startReverseWriter(request: $_model.StartReverseWriterRequest): Promise<$_model.StartReverseWriterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startReverseWriterWithOptions(request, runtime);
  }

  /**
   * Starts the channel of a change tracking instance. This is a legacy operation.
   * 
   * @param request - StartSubscriptionInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSubscriptionInstanceResponse
   */
  async startSubscriptionInstanceWithOptions(request: $_model.StartSubscriptionInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartSubscriptionInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartSubscriptionInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartSubscriptionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartSubscriptionInstanceResponse({}));
  }

  /**
   * Starts the channel of a change tracking instance. This is a legacy operation.
   * 
   * @param request - StartSubscriptionInstanceRequest
   * @returns StartSubscriptionInstanceResponse
   */
  async startSubscriptionInstance(request: $_model.StartSubscriptionInstanceRequest): Promise<$_model.StartSubscriptionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startSubscriptionInstanceWithOptions(request, runtime);
  }

  /**
   * Starts a data synchronization task.
   * 
   * @param request - StartSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSynchronizationJobResponse
   */
  async startSynchronizationJobWithOptions(request: $_model.StartSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartSynchronizationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.StartSynchronizationJobResponse({}));
  }

  /**
   * Starts a data synchronization task.
   * 
   * @param request - StartSynchronizationJobRequest
   * @returns StartSynchronizationJobResponse
   */
  async startSynchronizationJob(request: $_model.StartSynchronizationJobRequest): Promise<$_model.StartSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * Releases a cluster by calling the StopDedicatedCluster operation.
   * 
   * @param request - StopDedicatedClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDedicatedClusterResponse
   */
  async stopDedicatedClusterWithOptions(request: $_model.StopDedicatedClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDedicatedClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.dedicatedClusterName)) {
      query["DedicatedClusterName"] = request.dedicatedClusterName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDedicatedCluster",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDedicatedClusterResponse>(await this.callApi(params, req, runtime), new $_model.StopDedicatedClusterResponse({}));
  }

  /**
   * Releases a cluster by calling the StopDedicatedCluster operation.
   * 
   * @param request - StopDedicatedClusterRequest
   * @returns StopDedicatedClusterResponse
   */
  async stopDedicatedCluster(request: $_model.StopDedicatedClusterRequest): Promise<$_model.StopDedicatedClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDedicatedClusterWithOptions(request, runtime);
  }

  /**
   * Stops a data migration, data synchronization, or change tracking task by calling StopDtsJob.
   * 
   * @param request - StopDtsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDtsJobResponse
   */
  async stopDtsJobWithOptions(request: $_model.StopDtsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDtsJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDtsJobResponse>(await this.callApi(params, req, runtime), new $_model.StopDtsJobResponse({}));
  }

  /**
   * Stops a data migration, data synchronization, or change tracking task by calling StopDtsJob.
   * 
   * @param request - StopDtsJobRequest
   * @returns StopDtsJobResponse
   */
  async stopDtsJob(request: $_model.StopDtsJobRequest): Promise<$_model.StopDtsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDtsJobWithOptions(request, runtime);
  }

  /**
   * Stops multiple DTS tasks at a time.
   * 
   * @param request - StopDtsJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDtsJobsResponse
   */
  async stopDtsJobsWithOptions(request: $_model.StopDtsJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDtsJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobIds)) {
      query["DtsJobIds"] = request.dtsJobIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDtsJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDtsJobsResponse>(await this.callApi(params, req, runtime), new $_model.StopDtsJobsResponse({}));
  }

  /**
   * Stops multiple DTS tasks at a time.
   * 
   * @param request - StopDtsJobsRequest
   * @returns StopDtsJobsResponse
   */
  async stopDtsJobs(request: $_model.StopDtsJobsRequest): Promise<$_model.StopDtsJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDtsJobsWithOptions(request, runtime);
  }

  /**
   * Ends a data migration task that is in a migration state.
   * 
   * @param request - StopMigrationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopMigrationJobResponse
   */
  async stopMigrationJobWithOptions(request: $_model.StopMigrationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopMigrationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopMigrationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.StopMigrationJobResponse({}));
  }

  /**
   * Ends a data migration task that is in a migration state.
   * 
   * @param request - StopMigrationJobRequest
   * @returns StopMigrationJobResponse
   */
  async stopMigrationJob(request: $_model.StopMigrationJobRequest): Promise<$_model.StopMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopMigrationJobWithOptions(request, runtime);
  }

  /**
   * Queries the number of tables migrated in a Data Transmission Service (DTS) data migration or synchronization task.
   * 
   * @param request - SummaryJobDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SummaryJobDetailResponse
   */
  async summaryJobDetailWithOptions(request: $_model.SummaryJobDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SummaryJobDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.jobCode)) {
      query["JobCode"] = request.jobCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.structType)) {
      query["StructType"] = request.structType;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SummaryJobDetail",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SummaryJobDetailResponse>(await this.callApi(params, req, runtime), new $_model.SummaryJobDetailResponse({}));
  }

  /**
   * Queries the number of tables migrated in a Data Transmission Service (DTS) data migration or synchronization task.
   * 
   * @param request - SummaryJobDetailRequest
   * @returns SummaryJobDetailResponse
   */
  async summaryJobDetail(request: $_model.SummaryJobDetailRequest): Promise<$_model.SummaryJobDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.summaryJobDetailWithOptions(request, runtime);
  }

  /**
   * Suspends a data migration or synchronization task. Change tracking tasks are not supported. Change tracking instances do not support the suspend capability. Do not call this operation on change tracking instances.
   * 
   * @remarks
   * ***
   * 
   * @param request - SuspendDtsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendDtsJobResponse
   */
  async suspendDtsJobWithOptions(request: $_model.SuspendDtsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendDtsJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendDtsJobResponse>(await this.callApi(params, req, runtime), new $_model.SuspendDtsJobResponse({}));
  }

  /**
   * Suspends a data migration or synchronization task. Change tracking tasks are not supported. Change tracking instances do not support the suspend capability. Do not call this operation on change tracking instances.
   * 
   * @remarks
   * ***
   * 
   * @param request - SuspendDtsJobRequest
   * @returns SuspendDtsJobResponse
   */
  async suspendDtsJob(request: $_model.SuspendDtsJobRequest): Promise<$_model.SuspendDtsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendDtsJobWithOptions(request, runtime);
  }

  /**
   * Suspends multiple DTS tasks at a time.
   * 
   * @param request - SuspendDtsJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendDtsJobsResponse
   */
  async suspendDtsJobsWithOptions(request: $_model.SuspendDtsJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendDtsJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobIds)) {
      query["DtsJobIds"] = request.dtsJobIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendDtsJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendDtsJobsResponse>(await this.callApi(params, req, runtime), new $_model.SuspendDtsJobsResponse({}));
  }

  /**
   * Suspends multiple DTS tasks at a time.
   * 
   * @param request - SuspendDtsJobsRequest
   * @returns SuspendDtsJobsResponse
   */
  async suspendDtsJobs(request: $_model.SuspendDtsJobsRequest): Promise<$_model.SuspendDtsJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendDtsJobsWithOptions(request, runtime);
  }

  /**
   * Suspends a data migration task that is in progress.
   * 
   * @param request - SuspendMigrationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendMigrationJobResponse
   */
  async suspendMigrationJobWithOptions(request: $_model.SuspendMigrationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendMigrationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendMigrationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.SuspendMigrationJobResponse({}));
  }

  /**
   * Suspends a data migration task that is in progress.
   * 
   * @param request - SuspendMigrationJobRequest
   * @returns SuspendMigrationJobResponse
   */
  async suspendMigrationJob(request: $_model.SuspendMigrationJobRequest): Promise<$_model.SuspendMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendMigrationJobWithOptions(request, runtime);
  }

  /**
   * Pauses a data synchronization task that is in the Synchronizing state.
   * 
   * @remarks
   * > - When you call this operation, the synchronization task must be in the Synchronizing state.
   * - A synchronization task cannot be paused for more than 6 hours. Otherwise, the task cannot be restarted.
   * - DTS continues to charge fees for a pay-as-you-go synchronization task even if the task is paused. This is because DTS only pauses writing data to the destination instance but continues to pull logs from the source instance to ensure quick resumption when the task is restarted. Therefore, the task still consumes resources such as bandwidth of the source database.
   * 
   * @param request - SuspendSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendSynchronizationJobResponse
   */
  async suspendSynchronizationJobWithOptions(request: $_model.SuspendSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendSynchronizationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.SuspendSynchronizationJobResponse({}));
  }

  /**
   * Pauses a data synchronization task that is in the Synchronizing state.
   * 
   * @remarks
   * > - When you call this operation, the synchronization task must be in the Synchronizing state.
   * - A synchronization task cannot be paused for more than 6 hours. Otherwise, the task cannot be restarted.
   * - DTS continues to charge fees for a pay-as-you-go synchronization task even if the task is paused. This is because DTS only pauses writing data to the destination instance but continues to pull logs from the source instance to ensure quick resumption when the task is restarted. Therefore, the task still consumes resources such as bandwidth of the source database.
   * 
   * @param request - SuspendSynchronizationJobRequest
   * @returns SuspendSynchronizationJobResponse
   */
  async suspendSynchronizationJob(request: $_model.SuspendSynchronizationJobRequest): Promise<$_model.SuspendSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * Performs physical migration of an MSSQL database to Alibaba Cloud.
   * 
   * @param request - SwitchPhysicalDtsJobToCloudRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchPhysicalDtsJobToCloudResponse
   */
  async switchPhysicalDtsJobToCloudWithOptions(request: $_model.SwitchPhysicalDtsJobToCloudRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchPhysicalDtsJobToCloudResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchPhysicalDtsJobToCloud",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchPhysicalDtsJobToCloudResponse>(await this.callApi(params, req, runtime), new $_model.SwitchPhysicalDtsJobToCloudResponse({}));
  }

  /**
   * Performs physical migration of an MSSQL database to Alibaba Cloud.
   * 
   * @param request - SwitchPhysicalDtsJobToCloudRequest
   * @returns SwitchPhysicalDtsJobToCloudResponse
   */
  async switchPhysicalDtsJobToCloud(request: $_model.SwitchPhysicalDtsJobToCloudRequest): Promise<$_model.SwitchPhysicalDtsJobToCloudResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchPhysicalDtsJobToCloudWithOptions(request, runtime);
  }

  /**
   * Passes the connection information of the new database to DTS after a primary/secondary switchover. DTS restarts data synchronization from the checkpoint.
   * 
   * @param request - SwitchSynchronizationEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchSynchronizationEndpointResponse
   */
  async switchSynchronizationEndpointWithOptions(request: $_model.SwitchSynchronizationEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchSynchronizationEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    if (!$dara.isNull(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!$dara.isNull(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchSynchronizationEndpoint",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchSynchronizationEndpointResponse>(await this.callApi(params, req, runtime), new $_model.SwitchSynchronizationEndpointResponse({}));
  }

  /**
   * Passes the connection information of the new database to DTS after a primary/secondary switchover. DTS restarts data synchronization from the checkpoint.
   * 
   * @param request - SwitchSynchronizationEndpointRequest
   * @returns SwitchSynchronizationEndpointResponse
   */
  async switchSynchronizationEndpoint(request: $_model.SwitchSynchronizationEndpointRequest): Promise<$_model.SwitchSynchronizationEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchSynchronizationEndpointWithOptions(request, runtime);
  }

  /**
   * Binds tags to one or more data migration, synchronization, and change tracking instances by calling the TagResources operation.
   * 
   * @remarks
   * If you have a large number of instances, you can create multiple tags and attach different tags to instances for categorization. Then, you can filter instances by tag.
   * - A tag consists of a key-value pair. Tag keys must be unique within the same Alibaba Cloud account and region. Tag values do not have this restriction.
   * - If the specified tag does not exist, the tag is automatically created and attached to the destination instance.
   * - If the instance already has a tag with the same key, the existing tag is overwritten.
   * - You can attach up to 20 tags to each instance.
   * - You can invoke the operation to attach tags to up to 50 instances at a time.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Binds tags to one or more data migration, synchronization, and change tracking instances by calling the TagResources operation.
   * 
   * @remarks
   * If you have a large number of instances, you can create multiple tags and attach different tags to instances for categorization. Then, you can filter instances by tag.
   * - A tag consists of a key-value pair. Tag keys must be unique within the same Alibaba Cloud account and region. Tag values do not have this restriction.
   * - If the specified tag does not exist, the tag is automatically created and attached to the destination instance.
   * - If the instance already has a tag with the same key, the existing tag is overwritten.
   * - You can attach up to 20 tags to each instance.
   * - You can invoke the operation to attach tags to up to 50 instances at a time.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Upgrades or downgrades the specifications of a DTS instance.
   * 
   * @remarks
   * > - Downgrading DTS instance specifications is no longer supported.
   * - If the source of a DTS instance is Redis 6.0 and incremental data updates exist, do not perform an upgrade. Otherwise, the DTS instance may fail and cannot be recovered. You must reconfigure the instance after a failure.
   * 
   * @param request - TransferInstanceClassRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferInstanceClassResponse
   */
  async transferInstanceClassWithOptions(request: $_model.TransferInstanceClassRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferInstanceClassResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseCount)) {
      query["DatabaseCount"] = request.databaseCount;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferInstanceClass",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferInstanceClassResponse>(await this.callApi(params, req, runtime), new $_model.TransferInstanceClassResponse({}));
  }

  /**
   * Upgrades or downgrades the specifications of a DTS instance.
   * 
   * @remarks
   * > - Downgrading DTS instance specifications is no longer supported.
   * - If the source of a DTS instance is Redis 6.0 and incremental data updates exist, do not perform an upgrade. Otherwise, the DTS instance may fail and cannot be recovered. You must reconfigure the instance after a failure.
   * 
   * @param request - TransferInstanceClassRequest
   * @returns TransferInstanceClassResponse
   */
  async transferInstanceClass(request: $_model.TransferInstanceClassRequest): Promise<$_model.TransferInstanceClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferInstanceClassWithOptions(request, runtime);
  }

  /**
   * Transforms the payment method of a DTS instance.
   * 
   * @remarks
   * <props="china">Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product#/dts/detail) of Data Transmission Service (DTS).
   * <props="intl">Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of Data Transmission Service (DTS).
   * - To avoid resource waste, confirm the payment method transformation before you perform the operation.
   * - Data migration instances support only the pay-as-you-go billing method. No transformation is required.
   * <props="china">
   * - Serverless instances do not support payment method transformation.
   * 
   * @param request - TransferPayTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferPayTypeResponse
   */
  async transferPayTypeWithOptions(request: $_model.TransferPayTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferPayTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.buyCount)) {
      query["BuyCount"] = request.buyCount;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.maxDu)) {
      query["MaxDu"] = request.maxDu;
    }

    if (!$dara.isNull(request.minDu)) {
      query["MinDu"] = request.minDu;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferPayType",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferPayTypeResponse>(await this.callApi(params, req, runtime), new $_model.TransferPayTypeResponse({}));
  }

  /**
   * Transforms the payment method of a DTS instance.
   * 
   * @remarks
   * <props="china">Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product#/dts/detail) of Data Transmission Service (DTS).
   * <props="intl">Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of Data Transmission Service (DTS).
   * - To avoid resource waste, confirm the payment method transformation before you perform the operation.
   * - Data migration instances support only the pay-as-you-go billing method. No transformation is required.
   * <props="china">
   * - Serverless instances do not support payment method transformation.
   * 
   * @param request - TransferPayTypeRequest
   * @returns TransferPayTypeResponse
   */
  async transferPayType(request: $_model.TransferPayTypeRequest): Promise<$_model.TransferPayTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferPayTypeWithOptions(request, runtime);
  }

  /**
   * Unbinds tags from data migration, synchronization, and change tracking instances.
   * 
   * @remarks
   * > After a tag is unbound from an instance, the tag is automatically deleted if it is not bound to any other instance.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Unbinds tags from data migration, synchronization, and change tracking instances.
   * 
   * @remarks
   * > After a tag is unbound from an instance, the tag is automatically deleted if it is not bound to any other instance.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Upgrades the synchronization topology of a DTS data synchronization instance from one-way synchronization to two-way synchronization.
   * 
   * @remarks
   * <props="china">Before you use this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product#/dts/detail) of ApsaraDB DTS.
   * <props="intl">Before you use this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of ApsaraDB DTS.
   * Before you begin:
   * - The database type of both the source instance and the destination instance of the data synchronization node must be **MySQL**.
   * - The synchronization topology of the data synchronization node must be **one-way synchronization**.
   * - The data synchronization node must be in the **Synchronizing** state.
   * - During the upgrade, data synchronization may experience a latency of approximately 5 seconds. Perform this operation during off-peak hours.
   * 
   * @param request - UpgradeTwoWayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeTwoWayResponse
   */
  async upgradeTwoWayWithOptions(request: $_model.UpgradeTwoWayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeTwoWayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeTwoWay",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeTwoWayResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeTwoWayResponse({}));
  }

  /**
   * Upgrades the synchronization topology of a DTS data synchronization instance from one-way synchronization to two-way synchronization.
   * 
   * @remarks
   * <props="china">Before you use this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product#/dts/detail) of ApsaraDB DTS.
   * <props="intl">Before you use this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of ApsaraDB DTS.
   * Before you begin:
   * - The database type of both the source instance and the destination instance of the data synchronization node must be **MySQL**.
   * - The synchronization topology of the data synchronization node must be **one-way synchronization**.
   * - The data synchronization node must be in the **Synchronizing** state.
   * - During the upgrade, data synchronization may experience a latency of approximately 5 seconds. Perform this operation during off-peak hours.
   * 
   * @param request - UpgradeTwoWayRequest
   * @returns UpgradeTwoWayResponse
   */
  async upgradeTwoWay(request: $_model.UpgradeTwoWayRequest): Promise<$_model.UpgradeTwoWayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeTwoWayWithOptions(request, runtime);
  }

  /**
   * Queries the IP addresses of DTS servers by calling the WhiteIpList operation.
   * 
   * @remarks
   * <props="china">If the **source or destination instance** is a **self-managed database** or a **third-party ApsaraDB database**, you need to invoke this operation to query the IP addresses of DTS servers, and then add the returned IP addresses to the security settings (typically the firewall) of the source or destination instance. For more information about how to add IP addresses, see [Add the CIDR blocks of DTS servers to the whitelist of a self-managed database for migration, synchronization, or subscribe](https://help.aliyun.com/document_detail/84900.html).
   * <props="intl">If the **source or destination instance** is a **self-managed database** or a **third-party ApsaraDB database**, you need to invoke this operation to query the IP addresses of DTS servers, and then add the returned IP addresses to the security settings (typically the firewall) of the source or destination instance. For more information about how to add IP addresses, see [Add the CIDR blocks of DTS servers to the whitelist of a self-managed database](https://help.aliyun.com/document_detail/176627.html).
   * > If the **source or destination database** is an **Alibaba Cloud database instance** (such as ApsaraDB RDS or ApsaraDB for MongoDB) or a **self-managed database hosted on ECS**, the system automatically adds the IP addresses of DTS servers to the security settings of the instance when you click **Authorize Whitelist and Proceed to Next Step** during the configuration of the source or destination instance. You do not need to manually add the IP addresses.
   * 
   * @param request - WhiteIpListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WhiteIpListResponse
   */
  async whiteIpListWithOptions(request: $_model.WhiteIpListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.WhiteIpListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destAliyunUid)) {
      query["DestAliyunUid"] = request.destAliyunUid;
    }

    if (!$dara.isNull(request.destPrimaryVswId)) {
      query["DestPrimaryVswId"] = request.destPrimaryVswId;
    }

    if (!$dara.isNull(request.destRoleName)) {
      query["DestRoleName"] = request.destRoleName;
    }

    if (!$dara.isNull(request.destSecondaryVswId)) {
      query["DestSecondaryVswId"] = request.destSecondaryVswId;
    }

    if (!$dara.isNull(request.destVpcId)) {
      query["DestVpcId"] = request.destVpcId;
    }

    if (!$dara.isNull(request.destinationRegion)) {
      query["DestinationRegion"] = request.destinationRegion;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.srcAliyunUid)) {
      query["SrcAliyunUid"] = request.srcAliyunUid;
    }

    if (!$dara.isNull(request.srcPrimaryVswId)) {
      query["SrcPrimaryVswId"] = request.srcPrimaryVswId;
    }

    if (!$dara.isNull(request.srcRoleName)) {
      query["SrcRoleName"] = request.srcRoleName;
    }

    if (!$dara.isNull(request.srcSecondaryVswId)) {
      query["SrcSecondaryVswId"] = request.srcSecondaryVswId;
    }

    if (!$dara.isNull(request.srcVpcId)) {
      query["SrcVpcId"] = request.srcVpcId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WhiteIpList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WhiteIpListResponse>(await this.callApi(params, req, runtime), new $_model.WhiteIpListResponse({}));
  }

  /**
   * Queries the IP addresses of DTS servers by calling the WhiteIpList operation.
   * 
   * @remarks
   * <props="china">If the **source or destination instance** is a **self-managed database** or a **third-party ApsaraDB database**, you need to invoke this operation to query the IP addresses of DTS servers, and then add the returned IP addresses to the security settings (typically the firewall) of the source or destination instance. For more information about how to add IP addresses, see [Add the CIDR blocks of DTS servers to the whitelist of a self-managed database for migration, synchronization, or subscribe](https://help.aliyun.com/document_detail/84900.html).
   * <props="intl">If the **source or destination instance** is a **self-managed database** or a **third-party ApsaraDB database**, you need to invoke this operation to query the IP addresses of DTS servers, and then add the returned IP addresses to the security settings (typically the firewall) of the source or destination instance. For more information about how to add IP addresses, see [Add the CIDR blocks of DTS servers to the whitelist of a self-managed database](https://help.aliyun.com/document_detail/176627.html).
   * > If the **source or destination database** is an **Alibaba Cloud database instance** (such as ApsaraDB RDS or ApsaraDB for MongoDB) or a **self-managed database hosted on ECS**, the system automatically adds the IP addresses of DTS servers to the security settings of the instance when you click **Authorize Whitelist and Proceed to Next Step** during the configuration of the source or destination instance. You do not need to manually add the IP addresses.
   * 
   * @param request - WhiteIpListRequest
   * @returns WhiteIpListResponse
   */
  async whiteIpList(request: $_model.WhiteIpListRequest): Promise<$_model.WhiteIpListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.whiteIpListWithOptions(request, runtime);
  }

}
