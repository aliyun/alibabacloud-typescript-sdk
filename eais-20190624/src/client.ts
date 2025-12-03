// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "eais.aliyuncs.com",
      'ap-northeast-2-pop': "eais.aliyuncs.com",
      'ap-south-1': "eais.aliyuncs.com",
      'ap-southeast-1': "eais.aliyuncs.com",
      'ap-southeast-2': "eais.aliyuncs.com",
      'ap-southeast-3': "eais.aliyuncs.com",
      'ap-southeast-5': "eais.aliyuncs.com",
      'cn-beijing-finance-1': "eais.aliyuncs.com",
      'cn-beijing-finance-pop': "eais.aliyuncs.com",
      'cn-beijing-gov-1': "eais.aliyuncs.com",
      'cn-beijing-nu16-b01': "eais.aliyuncs.com",
      'cn-edge-1': "eais.aliyuncs.com",
      'cn-fujian': "eais.aliyuncs.com",
      'cn-haidian-cm12-c01': "eais.aliyuncs.com",
      'cn-hangzhou-bj-b01': "eais.aliyuncs.com",
      'cn-hangzhou-finance': "eais.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "eais.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "eais.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "eais.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "eais.aliyuncs.com",
      'cn-hangzhou-test-306': "eais.aliyuncs.com",
      'cn-hongkong': "eais.aliyuncs.com",
      'cn-hongkong-finance-pop': "eais.aliyuncs.com",
      'cn-huhehaote': "eais.aliyuncs.com",
      'cn-huhehaote-nebula-1': "eais.aliyuncs.com",
      'cn-north-2-gov-1': "eais.aliyuncs.com",
      'cn-qingdao': "eais.aliyuncs.com",
      'cn-qingdao-nebula': "eais.aliyuncs.com",
      'cn-shanghai-et15-b01': "eais.aliyuncs.com",
      'cn-shanghai-et2-b01': "eais.aliyuncs.com",
      'cn-shanghai-finance-1': "eais.aliyuncs.com",
      'cn-shanghai-inner': "eais.aliyuncs.com",
      'cn-shanghai-internal-test-1': "eais.aliyuncs.com",
      'cn-shenzhen-finance-1': "eais.aliyuncs.com",
      'cn-shenzhen-inner': "eais.aliyuncs.com",
      'cn-shenzhen-st4-d01': "eais.aliyuncs.com",
      'cn-shenzhen-su18-b01': "eais.aliyuncs.com",
      'cn-wuhan': "eais.aliyuncs.com",
      'cn-wulanchabu': "eais.aliyuncs.com",
      'cn-yushanfang': "eais.aliyuncs.com",
      'cn-zhangbei': "eais.aliyuncs.com",
      'cn-zhangbei-na61-b01': "eais.aliyuncs.com",
      'cn-zhangjiakou': "eais.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "eais.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "eais.aliyuncs.com",
      'eu-central-1': "eais.aliyuncs.com",
      'eu-west-1': "eais.aliyuncs.com",
      'eu-west-1-oxs': "eais.aliyuncs.com",
      'me-east-1': "eais.aliyuncs.com",
      'rus-west-1-pop': "eais.aliyuncs.com",
      'us-east-1': "eais.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eais", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 将弹性加速计算实例挂载到ECS实例上
   * 
   * @param request - AttachEaiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachEaiResponse
   */
  async attachEaiWithOptions(request: $_model.AttachEaiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachEaiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientInstanceId)) {
      query["ClientInstanceId"] = request.clientInstanceId;
    }

    if (!$dara.isNull(request.elasticAcceleratedInstanceId)) {
      query["ElasticAcceleratedInstanceId"] = request.elasticAcceleratedInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachEai",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachEaiResponse>(await this.callApi(params, req, runtime), new $_model.AttachEaiResponse({}));
  }

  /**
   * 将弹性加速计算实例挂载到ECS实例上
   * 
   * @param request - AttachEaiRequest
   * @returns AttachEaiResponse
   */
  async attachEai(request: $_model.AttachEaiRequest): Promise<$_model.AttachEaiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachEaiWithOptions(request, runtime);
  }

  /**
   * 将EI绑定到ECS或ECI实例上
   * 
   * @param request - AttachEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachEaisEiResponse
   */
  async attachEaisEiWithOptions(request: $_model.AttachEaisEiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachEaisEiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientInstanceId)) {
      query["ClientInstanceId"] = request.clientInstanceId;
    }

    if (!$dara.isNull(request.eiInstanceId)) {
      query["EiInstanceId"] = request.eiInstanceId;
    }

    if (!$dara.isNull(request.eiInstanceType)) {
      query["EiInstanceType"] = request.eiInstanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachEaisEiResponse>(await this.callApi(params, req, runtime), new $_model.AttachEaisEiResponse({}));
  }

  /**
   * 将EI绑定到ECS或ECI实例上
   * 
   * @param request - AttachEaisEiRequest
   * @returns AttachEaisEiResponse
   */
  async attachEaisEi(request: $_model.AttachEaisEiRequest): Promise<$_model.AttachEaisEiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachEaisEiWithOptions(request, runtime);
  }

  /**
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * 创建一个弹性加速计算实例
   * 
   * @param request - CreateEaiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEaiResponse
   */
  async createEaiWithOptions(request: $_model.CreateEaiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEaiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.image)) {
      query["Image"] = request.image;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEai",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEaiResponse>(await this.callApi(params, req, runtime), new $_model.CreateEaiResponse({}));
  }

  /**
   * 创建一个弹性加速计算实例
   * 
   * @param request - CreateEaiRequest
   * @returns CreateEaiResponse
   */
  async createEai(request: $_model.CreateEaiRequest): Promise<$_model.CreateEaiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEaiWithOptions(request, runtime);
  }

  /**
   * 创建一个EAIS实例和ECI实例并绑定
   * 
   * @param tmpReq - CreateEaiEciRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEaiEciResponse
   */
  async createEaiEciWithOptions(tmpReq: $_model.CreateEaiEciRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEaiEciResponse> {
    tmpReq.validate();
    let request = new $_model.CreateEaiEciShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.eci)) {
      request.eciShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eci, "Eci", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.eaisName)) {
      query["EaisName"] = request.eaisName;
    }

    if (!$dara.isNull(request.eaisType)) {
      query["EaisType"] = request.eaisType;
    }

    if (!$dara.isNull(request.eciShrink)) {
      query["Eci"] = request.eciShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEaiEci",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEaiEciResponse>(await this.callApi(params, req, runtime), new $_model.CreateEaiEciResponse({}));
  }

  /**
   * 创建一个EAIS实例和ECI实例并绑定
   * 
   * @param request - CreateEaiEciRequest
   * @returns CreateEaiEciResponse
   */
  async createEaiEci(request: $_model.CreateEaiEciRequest): Promise<$_model.CreateEaiEciResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEaiEciWithOptions(request, runtime);
  }

  /**
   * 创建一个EAIS实例和ECS实例并绑定
   * 
   * @param tmpReq - CreateEaiEcsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEaiEcsResponse
   */
  async createEaiEcsWithOptions(tmpReq: $_model.CreateEaiEcsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEaiEcsResponse> {
    tmpReq.validate();
    let request = new $_model.CreateEaiEcsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecs)) {
      request.ecsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecs, "Ecs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.eaisName)) {
      query["EaisName"] = request.eaisName;
    }

    if (!$dara.isNull(request.eaisType)) {
      query["EaisType"] = request.eaisType;
    }

    if (!$dara.isNull(request.ecsShrink)) {
      query["Ecs"] = request.ecsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEaiEcs",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEaiEcsResponse>(await this.callApi(params, req, runtime), new $_model.CreateEaiEcsResponse({}));
  }

  /**
   * 创建一个EAIS实例和ECS实例并绑定
   * 
   * @param request - CreateEaiEcsRequest
   * @returns CreateEaiEcsResponse
   */
  async createEaiEcs(request: $_model.CreateEaiEcsRequest): Promise<$_model.CreateEaiEcsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEaiEcsWithOptions(request, runtime);
  }

  /**
   * 创建一个EAIS Jupyter环境
   * 
   * @param tmpReq - CreateEaiJupyterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEaiJupyterResponse
   */
  async createEaiJupyterWithOptions(tmpReq: $_model.CreateEaiJupyterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEaiJupyterResponse> {
    tmpReq.validate();
    let request = new $_model.CreateEaiJupyterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.environmentVar)) {
      request.environmentVarShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.environmentVar, "EnvironmentVar", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.eaisName)) {
      query["EaisName"] = request.eaisName;
    }

    if (!$dara.isNull(request.eaisType)) {
      query["EaisType"] = request.eaisType;
    }

    if (!$dara.isNull(request.environmentVarShrink)) {
      query["EnvironmentVar"] = request.environmentVarShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEaiJupyter",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEaiJupyterResponse>(await this.callApi(params, req, runtime), new $_model.CreateEaiJupyterResponse({}));
  }

  /**
   * 创建一个EAIS Jupyter环境
   * 
   * @param request - CreateEaiJupyterRequest
   * @returns CreateEaiJupyterResponse
   */
  async createEaiJupyter(request: $_model.CreateEaiJupyterRequest): Promise<$_model.CreateEaiJupyterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEaiJupyterWithOptions(request, runtime);
  }

  /**
   * 创建一个弹性加速计算实例
   * 
   * @param request - CreateEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEaisEiResponse
   */
  async createEaisEiWithOptions(request: $_model.CreateEaisEiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEaisEiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEaisEiResponse>(await this.callApi(params, req, runtime), new $_model.CreateEaisEiResponse({}));
  }

  /**
   * 创建一个弹性加速计算实例
   * 
   * @param request - CreateEaisEiRequest
   * @returns CreateEaisEiResponse
   */
  async createEaisEi(request: $_model.CreateEaisEiRequest): Promise<$_model.CreateEaisEiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEaisEiWithOptions(request, runtime);
  }

  /**
   * 释放一个弹性加速计算实例
   * 
   * @param request - DeleteEaiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEaiResponse
   */
  async deleteEaiWithOptions(request: $_model.DeleteEaiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEaiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.elasticAcceleratedInstanceId)) {
      query["ElasticAcceleratedInstanceId"] = request.elasticAcceleratedInstanceId;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEai",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEaiResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEaiResponse({}));
  }

  /**
   * 释放一个弹性加速计算实例
   * 
   * @param request - DeleteEaiRequest
   * @returns DeleteEaiResponse
   */
  async deleteEai(request: $_model.DeleteEaiRequest): Promise<$_model.DeleteEaiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEaiWithOptions(request, runtime);
  }

  /**
   * 释放一个弹性加速计算实例以及与其绑定的ECS或ECI实例
   * 
   * @param request - DeleteEaiAllRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEaiAllResponse
   */
  async deleteEaiAllWithOptions(request: $_model.DeleteEaiAllRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEaiAllResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientInstanceId)) {
      query["ClientInstanceId"] = request.clientInstanceId;
    }

    if (!$dara.isNull(request.elasticAcceleratedInstanceId)) {
      query["ElasticAcceleratedInstanceId"] = request.elasticAcceleratedInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEaiAll",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEaiAllResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEaiAllResponse({}));
  }

  /**
   * 释放一个弹性加速计算实例以及与其绑定的ECS或ECI实例
   * 
   * @param request - DeleteEaiAllRequest
   * @returns DeleteEaiAllResponse
   */
  async deleteEaiAll(request: $_model.DeleteEaiAllRequest): Promise<$_model.DeleteEaiAllResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEaiAllWithOptions(request, runtime);
  }

  /**
   * 释放弹性加速计算实例
   * 
   * @param request - DeleteEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEaisEiResponse
   */
  async deleteEaisEiWithOptions(request: $_model.DeleteEaisEiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEaisEiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eiInstanceId)) {
      query["EiInstanceId"] = request.eiInstanceId;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEaisEiResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEaisEiResponse({}));
  }

  /**
   * 释放弹性加速计算实例
   * 
   * @param request - DeleteEaisEiRequest
   * @returns DeleteEaisEiResponse
   */
  async deleteEaisEi(request: $_model.DeleteEaisEiRequest): Promise<$_model.DeleteEaisEiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEaisEiWithOptions(request, runtime);
  }

  /**
   * 查询一个或多个弹性加速计算实例的详细信息
   * 
   * @param request - DescribeEaisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEaisResponse
   */
  async describeEaisWithOptions(request: $_model.DescribeEaisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEaisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientInstanceId)) {
      query["ClientInstanceId"] = request.clientInstanceId;
    }

    if (!$dara.isNull(request.elasticAcceleratedInstanceIds)) {
      query["ElasticAcceleratedInstanceIds"] = request.elasticAcceleratedInstanceIds;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
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

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEais",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEaisResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEaisResponse({}));
  }

  /**
   * 查询一个或多个弹性加速计算实例的详细信息
   * 
   * @param request - DescribeEaisRequest
   * @returns DescribeEaisResponse
   */
  async describeEais(request: $_model.DescribeEaisRequest): Promise<$_model.DescribeEaisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEaisWithOptions(request, runtime);
  }

  /**
   * 查询您可以使用的阿里云地域
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * 查询您可以使用的阿里云地域
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
   * 从ECS实例上卸载弹性加速计算实例
   * 
   * @param request - DetachEaiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachEaiResponse
   */
  async detachEaiWithOptions(request: $_model.DetachEaiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachEaiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.elasticAcceleratedInstanceId)) {
      query["ElasticAcceleratedInstanceId"] = request.elasticAcceleratedInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachEai",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachEaiResponse>(await this.callApi(params, req, runtime), new $_model.DetachEaiResponse({}));
  }

  /**
   * 从ECS实例上卸载弹性加速计算实例
   * 
   * @param request - DetachEaiRequest
   * @returns DetachEaiResponse
   */
  async detachEai(request: $_model.DetachEaiRequest): Promise<$_model.DetachEaiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachEaiWithOptions(request, runtime);
  }

  /**
   * 将EI实例与ECS或ECI实例解绑
   * 
   * @param request - DetachEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachEaisEiResponse
   */
  async detachEaisEiWithOptions(request: $_model.DetachEaisEiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachEaisEiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eiInstanceId)) {
      query["EiInstanceId"] = request.eiInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachEaisEiResponse>(await this.callApi(params, req, runtime), new $_model.DetachEaisEiResponse({}));
  }

  /**
   * 将EI实例与ECS或ECI实例解绑
   * 
   * @param request - DetachEaisEiRequest
   * @returns DetachEaisEiResponse
   */
  async detachEaisEi(request: $_model.DetachEaisEiRequest): Promise<$_model.DetachEaisEiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachEaisEiWithOptions(request, runtime);
  }

  /**
   * 获取EAIS实例级别的监控数据
   * 
   * @param request - GetInstanceMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceMetricsResponse
   */
  async getInstanceMetricsWithOptions(request: $_model.GetInstanceMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceMetricsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceMetrics",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceMetricsResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceMetricsResponse({}));
  }

  /**
   * 获取EAIS实例级别的监控数据
   * 
   * @param request - GetInstanceMetricsRequest
   * @returns GetInstanceMetricsResponse
   */
  async getInstanceMetrics(request: $_model.GetInstanceMetricsRequest): Promise<$_model.GetInstanceMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceMetricsWithOptions(request, runtime);
  }

  /**
   * 查询标签列表
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
      version: "2019-06-24",
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
   * 查询标签列表
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 启动一个部署了notebook的弹性加速计算实例
   * 
   * @param request - StartEaiJupyterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartEaiJupyterResponse
   */
  async startEaiJupyterWithOptions(request: $_model.StartEaiJupyterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartEaiJupyterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartEaiJupyter",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartEaiJupyterResponse>(await this.callApi(params, req, runtime), new $_model.StartEaiJupyterResponse({}));
  }

  /**
   * 启动一个部署了notebook的弹性加速计算实例
   * 
   * @param request - StartEaiJupyterRequest
   * @returns StartEaiJupyterResponse
   */
  async startEaiJupyter(request: $_model.StartEaiJupyterRequest): Promise<$_model.StartEaiJupyterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startEaiJupyterWithOptions(request, runtime);
  }

  /**
   * 启动一个弹性加速计算实例
   * 
   * @param request - StartEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartEaisEiResponse
   */
  async startEaisEiWithOptions(request: $_model.StartEaisEiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartEaisEiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eiInstanceId)) {
      query["EiInstanceId"] = request.eiInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartEaisEiResponse>(await this.callApi(params, req, runtime), new $_model.StartEaisEiResponse({}));
  }

  /**
   * 启动一个弹性加速计算实例
   * 
   * @param request - StartEaisEiRequest
   * @returns StartEaisEiResponse
   */
  async startEaisEi(request: $_model.StartEaisEiRequest): Promise<$_model.StartEaisEiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startEaisEiWithOptions(request, runtime);
  }

  /**
   * 停止一个部署了notebook的弹性加速计算实例
   * 
   * @param request - StopEaiJupyterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopEaiJupyterResponse
   */
  async stopEaiJupyterWithOptions(request: $_model.StopEaiJupyterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopEaiJupyterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopEaiJupyter",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopEaiJupyterResponse>(await this.callApi(params, req, runtime), new $_model.StopEaiJupyterResponse({}));
  }

  /**
   * 停止一个部署了notebook的弹性加速计算实例
   * 
   * @param request - StopEaiJupyterRequest
   * @returns StopEaiJupyterResponse
   */
  async stopEaiJupyter(request: $_model.StopEaiJupyterRequest): Promise<$_model.StopEaiJupyterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopEaiJupyterWithOptions(request, runtime);
  }

  /**
   * 停止一个弹性加速计算实例
   * 
   * @param request - StopEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopEaisEiResponse
   */
  async stopEaisEiWithOptions(request: $_model.StopEaisEiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopEaisEiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eiInstanceId)) {
      query["EiInstanceId"] = request.eiInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopEaisEiResponse>(await this.callApi(params, req, runtime), new $_model.StopEaisEiResponse({}));
  }

  /**
   * 停止一个弹性加速计算实例
   * 
   * @param request - StopEaisEiRequest
   * @returns StopEaisEiResponse
   */
  async stopEaisEi(request: $_model.StopEaisEiRequest): Promise<$_model.StopEaisEiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopEaisEiWithOptions(request, runtime);
  }

  /**
   * 为弹性加速计算实例创建并绑定标签
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
      version: "2019-06-24",
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
   * 为弹性加速计算实例创建并绑定标签
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 解绑并删除标签
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
      version: "2019-06-24",
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
   * 解绑并删除标签
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
