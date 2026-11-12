// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "SWAS-OPEN";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "swas.ap-northeast-1.aliyuncs.com",
      'ap-northeast-2': "swas.ap-northeast-2.aliyuncs.com",
      'ap-southeast-1': "swas.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "swas.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "swas.ap-southeast-5.aliyuncs.com",
      'ap-southeast-6': "swas.ap-southeast-6.aliyuncs.com",
      'ap-southeast-7': "swas.ap-southeast-7.aliyuncs.com",
      'cn-beijing': "swas.cn-beijing.aliyuncs.com",
      'cn-chengdu': "swas.cn-chengdu.aliyuncs.com",
      'cn-fuzhou': "swas.cn-fuzhou.aliyuncs.com",
      'cn-guangzhou': "swas.cn-guangzhou.aliyuncs.com",
      'cn-hangzhou': "swas.cn-hangzhou.aliyuncs.com",
      'cn-heyuan': "swas.cn-heyuan.aliyuncs.com",
      'cn-hongkong': "swas.cn-hongkong.aliyuncs.com",
      'cn-huhehaote': "swas.cn-huhehaote.aliyuncs.com",
      'cn-nanjing': "swas.cn-nanjing.aliyuncs.com",
      'cn-qingdao': "swas.cn-qingdao.aliyuncs.com",
      'cn-shanghai': "swas.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "swas.cn-shenzhen.aliyuncs.com",
      'cn-wuhan-lr': "swas.cn-wuhan-lr.aliyuncs.com",
      'cn-wulanchabu': "swas.cn-wulanchabu.aliyuncs.com",
      'cn-zhangjiakou': "swas.cn-zhangjiakou.aliyuncs.com",
      'us-west-1': "swas.us-west-1.aliyuncs.com",
      'us-east-1': "swas.us-east-1.aliyuncs.com",
      'eu-west-1': "swas.eu-west-1.aliyuncs.com",
      'eu-central-1': "swas.eu-central-1.aliyuncs.com",
      'me-central-1': "swas.me-central-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("swas-open", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Shares a custom image with other Alibaba Cloud accounts in the same region to quickly deploy identical environment configurations for multiple simple application servers and improve deployment efficiency.
   * 
   * @remarks
   * - Before sharing a shared image, purge sensitive data and files.
   * - Obtain the Alibaba Cloud account ID. Move the mouse over the user profile picture in the upper-right corner of the console. In the pop-up user information box, if the account identity is an Alibaba Cloud account, the displayed account ID is the Alibaba Cloud account ID.
   * 
   * @param request - AddCustomImageShareAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomImageShareAccountResponse
   */
  async addCustomImageShareAccountWithOptions(request: $_model.AddCustomImageShareAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddCustomImageShareAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomImageShareAccount",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCustomImageShareAccountResponse>(await this.callApi(params, req, runtime), new $_model.AddCustomImageShareAccountResponse({}));
  }

  /**
   * Shares a custom image with other Alibaba Cloud accounts in the same region to quickly deploy identical environment configurations for multiple simple application servers and improve deployment efficiency.
   * 
   * @remarks
   * - Before sharing a shared image, purge sensitive data and files.
   * - Obtain the Alibaba Cloud account ID. Move the mouse over the user profile picture in the upper-right corner of the console. In the pop-up user information box, if the account identity is an Alibaba Cloud account, the displayed account ID is the Alibaba Cloud account ID.
   * 
   * @param request - AddCustomImageShareAccountRequest
   * @returns AddCustomImageShareAccountResponse
   */
  async addCustomImageShareAccount(request: $_model.AddCustomImageShareAccountRequest): Promise<$_model.AddCustomImageShareAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCustomImageShareAccountWithOptions(request, runtime);
  }

  /**
   * Applies for a public network access endpoint.
   * 
   * @remarks
   * Lightweight database instances do not provide public endpoints by default. If you need public network access to the database through the lightweight container service or Data Management (DMS), you must apply for a public endpoint.
   * 
   * @param request - AllocatePublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocatePublicConnectionResponse
   */
  async allocatePublicConnectionWithOptions(request: $_model.AllocatePublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocatePublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocatePublicConnection",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllocatePublicConnectionResponse>(await this.callApi(params, req, runtime), new $_model.AllocatePublicConnectionResponse({}));
  }

  /**
   * Applies for a public network access endpoint.
   * 
   * @remarks
   * Lightweight database instances do not provide public endpoints by default. If you need public network access to the database through the lightweight container service or Data Management (DMS), you must apply for a public endpoint.
   * 
   * @param request - AllocatePublicConnectionRequest
   * @returns AllocatePublicConnectionResponse
   */
  async allocatePublicConnection(request: $_model.AllocatePublicConnectionRequest): Promise<$_model.AllocatePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocatePublicConnectionWithOptions(request, runtime);
  }

  /**
   * Applies a firewall template to configure firewall rules for multiple Simple Application Server instances at a time to improve configuration efficiency.
   * 
   * @remarks
   * If the port, protocol, or IP address of a firewall rule in the firewall template duplicates an existing rule of the instance, the new rule overwrites the existing rule regardless of whether the existing rule is enabled or disabled.
   * 
   * @param request - ApplyFirewallTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyFirewallTemplateResponse
   */
  async applyFirewallTemplateWithOptions(request: $_model.ApplyFirewallTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyFirewallTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.firewallTemplateId)) {
      query["FirewallTemplateId"] = request.firewallTemplateId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyFirewallTemplate",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyFirewallTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ApplyFirewallTemplateResponse({}));
  }

  /**
   * Applies a firewall template to configure firewall rules for multiple Simple Application Server instances at a time to improve configuration efficiency.
   * 
   * @remarks
   * If the port, protocol, or IP address of a firewall rule in the firewall template duplicates an existing rule of the instance, the new rule overwrites the existing rule regardless of whether the existing rule is enabled or disabled.
   * 
   * @param request - ApplyFirewallTemplateRequest
   * @returns ApplyFirewallTemplateResponse
   */
  async applyFirewallTemplate(request: $_model.ApplyFirewallTemplateRequest): Promise<$_model.ApplyFirewallTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyFirewallTemplateWithOptions(request, runtime);
  }

  /**
   * Attaches a key pair to a simple application server.
   * 
   * @remarks
   * You can attach only one key pair to a simple application server in the console. If the selected simple application server is already attached to another key pair, the new key pair overwrites the existing one.
   * 
   * @param request - AttachKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachKeyPairResponse
   */
  async attachKeyPairWithOptions(request: $_model.AttachKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachKeyPairResponse>(await this.callApi(params, req, runtime), new $_model.AttachKeyPairResponse({}));
  }

  /**
   * Attaches a key pair to a simple application server.
   * 
   * @remarks
   * You can attach only one key pair to a simple application server in the console. If the selected simple application server is already attached to another key pair, the new key pair overwrites the existing one.
   * 
   * @param request - AttachKeyPairRequest
   * @returns AttachKeyPairResponse
   */
  async attachKeyPair(request: $_model.AttachKeyPairRequest): Promise<$_model.AttachKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachKeyPairWithOptions(request, runtime);
  }

  /**
   * Creates a Cloud Assistant command.
   * 
   * @param request - CreateCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCommandResponse
   */
  async createCommandWithOptions(request: $_model.CreateCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCommandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableParameter)) {
      query["EnableParameter"] = request.enableParameter;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.workingDir)) {
      query["WorkingDir"] = request.workingDir;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCommand",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCommandResponse>(await this.callApi(params, req, runtime), new $_model.CreateCommandResponse({}));
  }

  /**
   * Creates a Cloud Assistant command.
   * 
   * @param request - CreateCommandRequest
   * @returns CreateCommandResponse
   */
  async createCommand(request: $_model.CreateCommandRequest): Promise<$_model.CreateCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCommandWithOptions(request, runtime);
  }

  /**
   * Creates a custom image from a snapshot.
   * 
   * @remarks
   * A custom image is an image that you create from a snapshot of a Simple Application Server. You can use a configured custom image to create more Simple Application Servers with the same configurations. You can also share the custom image to Elastic Computing Service to create ECS instances or replace operating systems by using the shared image. For more information about custom images, see [Custom image overview](https://help.aliyun.com/document_detail/199375.html).
   * Before you create a custom image, you must create a system disk snapshot for the Simple Application Server. For more information, see [CreateSnapshot](https://help.aliyun.com/document_detail/190452.html).
   * > If you want to include data disk data in the custom image, create a data disk snapshot for the server first.
   * Before you create a custom image, take note of the following items:
   * - The custom image is created in the same region as the Simple Application Server.
   * - The maximum number of custom images that you can create is three times the number of Simple Application Servers that you have created, up to a maximum of 15.
   * - Only system disk snapshots can be directly used to create custom images. If you want to include data disk data in the custom image, you must manually select the corresponding data disk snapshot during the creation process.
   * - If a Simple Application Server is released due to expiration or refund, the custom images created from the server are also released.
   * - Resetting the system or replacing the image clears the disk data on the server. Back up your data as needed.
   * 
   * @param request - CreateCustomImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomImageResponse
   */
  async createCustomImageWithOptions(request: $_model.CreateCustomImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataSnapshotId)) {
      query["DataSnapshotId"] = request.dataSnapshotId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
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

    if (!$dara.isNull(request.systemSnapshotId)) {
      query["SystemSnapshotId"] = request.systemSnapshotId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomImage",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomImageResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomImageResponse({}));
  }

  /**
   * Creates a custom image from a snapshot.
   * 
   * @remarks
   * A custom image is an image that you create from a snapshot of a Simple Application Server. You can use a configured custom image to create more Simple Application Servers with the same configurations. You can also share the custom image to Elastic Computing Service to create ECS instances or replace operating systems by using the shared image. For more information about custom images, see [Custom image overview](https://help.aliyun.com/document_detail/199375.html).
   * Before you create a custom image, you must create a system disk snapshot for the Simple Application Server. For more information, see [CreateSnapshot](https://help.aliyun.com/document_detail/190452.html).
   * > If you want to include data disk data in the custom image, create a data disk snapshot for the server first.
   * Before you create a custom image, take note of the following items:
   * - The custom image is created in the same region as the Simple Application Server.
   * - The maximum number of custom images that you can create is three times the number of Simple Application Servers that you have created, up to a maximum of 15.
   * - Only system disk snapshots can be directly used to create custom images. If you want to include data disk data in the custom image, you must manually select the corresponding data disk snapshot during the creation process.
   * - If a Simple Application Server is released due to expiration or refund, the custom images created from the server are also released.
   * - Resetting the system or replacing the image clears the disk data on the server. Back up your data as needed.
   * 
   * @param request - CreateCustomImageRequest
   * @returns CreateCustomImageResponse
   */
  async createCustomImage(request: $_model.CreateCustomImageRequest): Promise<$_model.CreateCustomImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomImageWithOptions(request, runtime);
  }

  /**
   * Creates a firewall rule for a specified simple application server.
   * 
   * @remarks
   * Firewalls control network access to simple application servers and are used to divide security domains in the cloud. By default, the firewall of each simple application server allows traffic on port 22 (SSH), port 80 (HTTP), and port 443 (HTTPS). All other ports are disabled by default. You can add firewall rules to allow traffic on more ports.
   * 
   * @param request - CreateFirewallRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFirewallRuleResponse
   */
  async createFirewallRuleWithOptions(request: $_model.CreateFirewallRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFirewallRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.ruleProtocol)) {
      query["RuleProtocol"] = request.ruleProtocol;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFirewallRule",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFirewallRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateFirewallRuleResponse({}));
  }

  /**
   * Creates a firewall rule for a specified simple application server.
   * 
   * @remarks
   * Firewalls control network access to simple application servers and are used to divide security domains in the cloud. By default, the firewall of each simple application server allows traffic on port 22 (SSH), port 80 (HTTP), and port 443 (HTTPS). All other ports are disabled by default. You can add firewall rules to allow traffic on more ports.
   * 
   * @param request - CreateFirewallRuleRequest
   * @returns CreateFirewallRuleResponse
   */
  async createFirewallRule(request: $_model.CreateFirewallRuleRequest): Promise<$_model.CreateFirewallRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFirewallRuleWithOptions(request, runtime);
  }

  /**
   * Creates multiple firewall rules for a specified simple application server.
   * 
   * @remarks
   * Firewalls control network access to simple application servers and are used to divide security domains in the cloud. By default, the firewall of each simple application server allows traffic on port 22 (SSH), port 80 (HTTP), and port 443 (HTTPS). All other ports are disabled by default. You can add firewall rules to allow traffic on more ports.
   * 
   * @param tmpReq - CreateFirewallRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFirewallRulesResponse
   */
  async createFirewallRulesWithOptions(tmpReq: $_model.CreateFirewallRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFirewallRulesResponse> {
    tmpReq.validate();
    let request = new $_model.CreateFirewallRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.firewallRules)) {
      request.firewallRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.firewallRules, "FirewallRules", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.firewallRulesShrink)) {
      query["FirewallRules"] = request.firewallRulesShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFirewallRules",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFirewallRulesResponse>(await this.callApi(params, req, runtime), new $_model.CreateFirewallRulesResponse({}));
  }

  /**
   * Creates multiple firewall rules for a specified simple application server.
   * 
   * @remarks
   * Firewalls control network access to simple application servers and are used to divide security domains in the cloud. By default, the firewall of each simple application server allows traffic on port 22 (SSH), port 80 (HTTP), and port 443 (HTTPS). All other ports are disabled by default. You can add firewall rules to allow traffic on more ports.
   * 
   * @param request - CreateFirewallRulesRequest
   * @returns CreateFirewallRulesResponse
   */
  async createFirewallRules(request: $_model.CreateFirewallRulesRequest): Promise<$_model.CreateFirewallRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFirewallRulesWithOptions(request, runtime);
  }

  /**
   * Creates a firewall template.
   * 
   * @remarks
   * A firewall template allows you to group multiple firewall rules. You can use a template to add a set of firewall rules to one or more instances simultaneously, improving the efficiency of configuring firewall rules.
   * 
   * @param request - CreateFirewallTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFirewallTemplateResponse
   */
  async createFirewallTemplateWithOptions(request: $_model.CreateFirewallTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFirewallTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.firewallRule)) {
      query["FirewallRule"] = request.firewallRule;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFirewallTemplate",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFirewallTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateFirewallTemplateResponse({}));
  }

  /**
   * Creates a firewall template.
   * 
   * @remarks
   * A firewall template allows you to group multiple firewall rules. You can use a template to add a set of firewall rules to one or more instances simultaneously, improving the efficiency of configuring firewall rules.
   * 
   * @param request - CreateFirewallTemplateRequest
   * @returns CreateFirewallTemplateResponse
   */
  async createFirewallTemplate(request: $_model.CreateFirewallTemplateRequest): Promise<$_model.CreateFirewallTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFirewallTemplateWithOptions(request, runtime);
  }

  /**
   * Adds firewall rules to a firewall template.
   * 
   * @remarks
   * Adding rules to a firewall template does not affect the rules of instances to which the template is applied.
   * 
   * @param request - CreateFirewallTemplateRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFirewallTemplateRulesResponse
   */
  async createFirewallTemplateRulesWithOptions(request: $_model.CreateFirewallTemplateRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFirewallTemplateRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firewallRule)) {
      query["FirewallRule"] = request.firewallRule;
    }

    if (!$dara.isNull(request.firewallTemplateId)) {
      query["FirewallTemplateId"] = request.firewallTemplateId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFirewallTemplateRules",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFirewallTemplateRulesResponse>(await this.callApi(params, req, runtime), new $_model.CreateFirewallTemplateRulesResponse({}));
  }

  /**
   * Adds firewall rules to a firewall template.
   * 
   * @remarks
   * Adding rules to a firewall template does not affect the rules of instances to which the template is applied.
   * 
   * @param request - CreateFirewallTemplateRulesRequest
   * @returns CreateFirewallTemplateRulesResponse
   */
  async createFirewallTemplateRules(request: $_model.CreateFirewallTemplateRulesRequest): Promise<$_model.CreateFirewallTemplateRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFirewallTemplateRulesWithOptions(request, runtime);
  }

  /**
   * Creates a key pair for a simple application server.
   * 
   * @param request - CreateInstanceKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceKeyPairResponse
   */
  async createInstanceKeyPairWithOptions(request: $_model.CreateInstanceKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceKeyPairResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceKeyPairResponse({}));
  }

  /**
   * Creates a key pair for a simple application server.
   * 
   * @param request - CreateInstanceKeyPairRequest
   * @returns CreateInstanceKeyPairResponse
   */
  async createInstanceKeyPair(request: $_model.CreateInstanceKeyPairRequest): Promise<$_model.CreateInstanceKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceKeyPairWithOptions(request, runtime);
  }

  /**
   * Creates one or more subscription Simple Application Server instances.
   * 
   * @remarks
   * <props="china">
   * - Before you call this operation, understand the billing of Simple Application Server. For more information, see [Billable items](https://help.aliyun.com/document_detail/58623.html).
   * > If your Alibaba Cloud account has coupons, the coupons are used by default to pay for the Simple Application Server instances.
   * - For each Alibaba Cloud account, the total number of Simple Application Server, Simple Application Server load balancing, Simple Container Service, and Simple Database Service instances that you can purchase in a single region is limited to 50.
   * - When you call this operation to create instances, make sure that your Alibaba Cloud account balance is sufficient. Otherwise, the creation fails.
   * <props="intl">
   * - Before you call this operation, understand the billing of Simple Application Server. For more information, see [Billable items](https://help.aliyun.com/document_detail/58623.html).
   * > If your Alibaba Cloud account has coupons, the coupons are used by default to pay for the Simple Application Server instances.
   * - For each Alibaba Cloud account, the maximum number of Simple Application Server instances that you can purchase in a single region is 50.
   * - When you call this operation to create instances, make sure that the default payment method of your account can cover the required fees. Otherwise, the creation fails.
   * 
   * @param request - CreateInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstancesResponse
   */
  async createInstancesWithOptions(request: $_model.CreateInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataDiskSize)) {
      query["DataDiskSize"] = request.dataDiskSize;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstancesResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstancesResponse({}));
  }

  /**
   * Creates one or more subscription Simple Application Server instances.
   * 
   * @remarks
   * <props="china">
   * - Before you call this operation, understand the billing of Simple Application Server. For more information, see [Billable items](https://help.aliyun.com/document_detail/58623.html).
   * > If your Alibaba Cloud account has coupons, the coupons are used by default to pay for the Simple Application Server instances.
   * - For each Alibaba Cloud account, the total number of Simple Application Server, Simple Application Server load balancing, Simple Container Service, and Simple Database Service instances that you can purchase in a single region is limited to 50.
   * - When you call this operation to create instances, make sure that your Alibaba Cloud account balance is sufficient. Otherwise, the creation fails.
   * <props="intl">
   * - Before you call this operation, understand the billing of Simple Application Server. For more information, see [Billable items](https://help.aliyun.com/document_detail/58623.html).
   * > If your Alibaba Cloud account has coupons, the coupons are used by default to pay for the Simple Application Server instances.
   * - For each Alibaba Cloud account, the maximum number of Simple Application Server instances that you can purchase in a single region is 50.
   * - When you call this operation to create instances, make sure that the default payment method of your account can cover the required fees. Otherwise, the creation fails.
   * 
   * @param request - CreateInstancesRequest
   * @returns CreateInstancesResponse
   */
  async createInstances(request: $_model.CreateInstancesRequest): Promise<$_model.CreateInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstancesWithOptions(request, runtime);
  }

  /**
   * Creates a key pair for a simple application server.
   * 
   * @remarks
   * Alibaba Cloud SSH key pairs provide a secure and convenient logon authentication method for identity verification and encrypted communication over the SSH protocol. An SSH key pair consists of a public key and a private key. SSH key pairs are supported only on Linux instances and help you meet business requirements for higher security and convenience.
   * - You can configure key pair-based logon only for simple application servers that run Linux.
   * - You can create up to 10 key pairs in a region within an Alibaba Cloud account.
   * - The console supports only the creation of RSA 2048-bit key pairs.
   * 
   * @param request - CreateKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKeyPairResponse
   */
  async createKeyPairWithOptions(request: $_model.CreateKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKeyPairResponse>(await this.callApi(params, req, runtime), new $_model.CreateKeyPairResponse({}));
  }

  /**
   * Creates a key pair for a simple application server.
   * 
   * @remarks
   * Alibaba Cloud SSH key pairs provide a secure and convenient logon authentication method for identity verification and encrypted communication over the SSH protocol. An SSH key pair consists of a public key and a private key. SSH key pairs are supported only on Linux instances and help you meet business requirements for higher security and convenience.
   * - You can configure key pair-based logon only for simple application servers that run Linux.
   * - You can create up to 10 key pairs in a region within an Alibaba Cloud account.
   * - The console supports only the creation of RSA 2048-bit key pairs.
   * 
   * @param request - CreateKeyPairRequest
   * @returns CreateKeyPairResponse
   */
  async createKeyPair(request: $_model.CreateKeyPairRequest): Promise<$_model.CreateKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createKeyPairWithOptions(request, runtime);
  }

  /**
   * Queries the pricing information of Simple Application Server.
   * 
   * @remarks
   * Alibaba Cloud SSH key pairs provide a secure and convenient logon authentication method for identity verification and encrypted communication over the SSH protocol. An SSH key pair consists of a public key and a private key. SSH key pairs are supported only on Linux instances and meet your business requirements for higher security and convenience.
   * - Only Simple Application Server instances that run Linux support SSH key pair logon.
   * - You can create up to 10 SSH key pairs in a region within an Alibaba Cloud account.
   * - The console supports only the creation of RSA 2048-bit key pairs.
   * 
   * @param request - CreateOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrderResponse
   */
  async createOrderWithOptions(request: $_model.CreateOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!$dara.isNull(request.commodity)) {
      query["Commodity"] = request.commodity;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.fromApp)) {
      query["FromApp"] = request.fromApp;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrder",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrderResponse({}));
  }

  /**
   * Queries the pricing information of Simple Application Server.
   * 
   * @remarks
   * Alibaba Cloud SSH key pairs provide a secure and convenient logon authentication method for identity verification and encrypted communication over the SSH protocol. An SSH key pair consists of a public key and a private key. SSH key pairs are supported only on Linux instances and meet your business requirements for higher security and convenience.
   * - Only Simple Application Server instances that run Linux support SSH key pair logon.
   * - You can create up to 10 SSH key pairs in a region within an Alibaba Cloud account.
   * - The console supports only the creation of RSA 2048-bit key pairs.
   * 
   * @param request - CreateOrderRequest
   * @returns CreateOrderResponse
   */
  async createOrder(request: $_model.CreateOrderRequest): Promise<$_model.CreateOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrderWithOptions(request, runtime);
  }

  /**
   * Creates a snapshot for a specified disk.
   * 
   * @remarks
   * A snapshot is a backup file of the disk data state at a specific point in time. Snapshots are commonly used for daily data backup, recovery from accidental data operations on servers, recovery from network attacks, and creation of custom images.
   * > Creating snapshots for Simple Application Server is free of charge.
   * ### Precautions
   * - You can create up to three snapshots for a single Simple Application Server instance.
   * - The maximum number of snapshots that an Alibaba Cloud account can create is three times the number of Simple Application Server instances created, up to a maximum of 15.
   * - If a server is released upon expiration, the snapshots associated with the server are deleted.
   * - Snapshots created before a system reset or image replacement are retained after the operation, but they cannot be used for rollback.
   * 
   * @param request - CreateSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSnapshotResponse
   */
  async createSnapshotWithOptions(request: $_model.CreateSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSnapshot",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.CreateSnapshotResponse({}));
  }

  /**
   * Creates a snapshot for a specified disk.
   * 
   * @remarks
   * A snapshot is a backup file of the disk data state at a specific point in time. Snapshots are commonly used for daily data backup, recovery from accidental data operations on servers, recovery from network attacks, and creation of custom images.
   * > Creating snapshots for Simple Application Server is free of charge.
   * ### Precautions
   * - You can create up to three snapshots for a single Simple Application Server instance.
   * - The maximum number of snapshots that an Alibaba Cloud account can create is three times the number of Simple Application Server instances created, up to a maximum of 15.
   * - If a server is released upon expiration, the snapshots associated with the server are deleted.
   * - Snapshots created before a system reset or image replacement are retained after the operation, but they cannot be used for rollback.
   * 
   * @param request - CreateSnapshotRequest
   * @returns CreateSnapshotResponse
   */
  async createSnapshot(request: $_model.CreateSnapshotRequest): Promise<$_model.CreateSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

  /**
   * Deletes a command.
   * 
   * @remarks
   * You cannot delete a command that is being executed.
   * 
   * @param request - DeleteCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCommandResponse
   */
  async deleteCommandWithOptions(request: $_model.DeleteCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCommandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCommand",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCommandResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCommandResponse({}));
  }

  /**
   * Deletes a command.
   * 
   * @remarks
   * You cannot delete a command that is being executed.
   * 
   * @param request - DeleteCommandRequest
   * @returns DeleteCommandResponse
   */
  async deleteCommand(request: $_model.DeleteCommandRequest): Promise<$_model.DeleteCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCommandWithOptions(request, runtime);
  }

  /**
   * Deletes a specified custom image.
   * 
   * @remarks
   * If you no longer need a custom image, you can delete it. After a custom image is deleted, simple application servers created from the image cannot use it to reset their systems.
   * > If the custom image is a shared image, you must unshare the shared image before you delete it. After you unshare the shared image, you can no longer query the custom image in the Elastic Compute Service (ECS) console or by calling ECS API operations. If you still need to use the image in ECS, copy the image before you delete it. For more information, see [Copy an image](https://help.aliyun.com/document_detail/199378.html).
   * 
   * @param request - DeleteCustomImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomImageResponse
   */
  async deleteCustomImageWithOptions(request: $_model.DeleteCustomImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomImage",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomImageResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomImageResponse({}));
  }

  /**
   * Deletes a specified custom image.
   * 
   * @remarks
   * If you no longer need a custom image, you can delete it. After a custom image is deleted, simple application servers created from the image cannot use it to reset their systems.
   * > If the custom image is a shared image, you must unshare the shared image before you delete it. After you unshare the shared image, you can no longer query the custom image in the Elastic Compute Service (ECS) console or by calling ECS API operations. If you still need to use the image in ECS, copy the image before you delete it. For more information, see [Copy an image](https://help.aliyun.com/document_detail/199378.html).
   * 
   * @param request - DeleteCustomImageRequest
   * @returns DeleteCustomImageResponse
   */
  async deleteCustomImage(request: $_model.DeleteCustomImageRequest): Promise<$_model.DeleteCustomImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomImageWithOptions(request, runtime);
  }

  /**
   * Deletes custom images in batches. After a custom image is deleted, simple application servers created from the image cannot use it to reset the system.
   * 
   * @remarks
   * If a custom image is being shared, you must unshare the shared image before you delete the custom image. After the shared image is unshared, you cannot query the custom image in the Elastic Computing Service console or by calling Elastic Computing Service API operations. If you still need to use the image on an Elastic Computing Service server, we recommend that you perform image replication before you delete the custom image. For more information, see [Image replication](https://help.aliyun.com/document_detail/199378.html).
   * 
   * @param request - DeleteCustomImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomImagesResponse
   */
  async deleteCustomImagesWithOptions(request: $_model.DeleteCustomImagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomImagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageIds)) {
      query["ImageIds"] = request.imageIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomImages",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomImagesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomImagesResponse({}));
  }

  /**
   * Deletes custom images in batches. After a custom image is deleted, simple application servers created from the image cannot use it to reset the system.
   * 
   * @remarks
   * If a custom image is being shared, you must unshare the shared image before you delete the custom image. After the shared image is unshared, you cannot query the custom image in the Elastic Computing Service console or by calling Elastic Computing Service API operations. If you still need to use the image on an Elastic Computing Service server, we recommend that you perform image replication before you delete the custom image. For more information, see [Image replication](https://help.aliyun.com/document_detail/199378.html).
   * 
   * @param request - DeleteCustomImagesRequest
   * @returns DeleteCustomImagesResponse
   */
  async deleteCustomImages(request: $_model.DeleteCustomImagesRequest): Promise<$_model.DeleteCustomImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomImagesWithOptions(request, runtime);
  }

  /**
   * Deletes a firewall rule of a specified simple application server.
   * 
   * @remarks
   * After you delete a firewall rule of a specified simple application server, services may become inaccessible. Make sure that the simple application server instance no longer requires the firewall rule before you delete it.
   * 
   * @param request - DeleteFirewallRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFirewallRuleResponse
   */
  async deleteFirewallRuleWithOptions(request: $_model.DeleteFirewallRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFirewallRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFirewallRule",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFirewallRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFirewallRuleResponse({}));
  }

  /**
   * Deletes a firewall rule of a specified simple application server.
   * 
   * @remarks
   * After you delete a firewall rule of a specified simple application server, services may become inaccessible. Make sure that the simple application server instance no longer requires the firewall rule before you delete it.
   * 
   * @param request - DeleteFirewallRuleRequest
   * @returns DeleteFirewallRuleResponse
   */
  async deleteFirewallRule(request: $_model.DeleteFirewallRuleRequest): Promise<$_model.DeleteFirewallRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFirewallRuleWithOptions(request, runtime);
  }

  /**
   * Deletes multiple firewall rules of a simple application server.
   * 
   * @remarks
   * After a firewall rule is deleted, your business deployed on the simple application server may become inaccessible. Before you delete a firewall rule, make sure that the firewall rule is no longer needed by the simple application server.
   * 
   * @param tmpReq - DeleteFirewallRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFirewallRulesResponse
   */
  async deleteFirewallRulesWithOptions(tmpReq: $_model.DeleteFirewallRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFirewallRulesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteFirewallRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ruleIds)) {
      request.ruleIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ruleIds, "RuleIds", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleIdsShrink)) {
      query["RuleIds"] = request.ruleIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFirewallRules",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFirewallRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFirewallRulesResponse({}));
  }

  /**
   * Deletes multiple firewall rules of a simple application server.
   * 
   * @remarks
   * After a firewall rule is deleted, your business deployed on the simple application server may become inaccessible. Before you delete a firewall rule, make sure that the firewall rule is no longer needed by the simple application server.
   * 
   * @param request - DeleteFirewallRulesRequest
   * @returns DeleteFirewallRulesResponse
   */
  async deleteFirewallRules(request: $_model.DeleteFirewallRulesRequest): Promise<$_model.DeleteFirewallRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFirewallRulesWithOptions(request, runtime);
  }

  /**
   * Deletes firewall rules from a firewall template based on your requirements.
   * 
   * @remarks
   * Deletion of firewall rules does not affect the firewall rules that have been applied to simple application servers.
   * 
   * @param request - DeleteFirewallTemplateRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFirewallTemplateRulesResponse
   */
  async deleteFirewallTemplateRulesWithOptions(request: $_model.DeleteFirewallTemplateRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFirewallTemplateRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.firewallTemplateId)) {
      query["FirewallTemplateId"] = request.firewallTemplateId;
    }

    if (!$dara.isNull(request.firewallTemplateRuleId)) {
      query["FirewallTemplateRuleId"] = request.firewallTemplateRuleId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFirewallTemplateRules",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFirewallTemplateRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFirewallTemplateRulesResponse({}));
  }

  /**
   * Deletes firewall rules from a firewall template based on your requirements.
   * 
   * @remarks
   * Deletion of firewall rules does not affect the firewall rules that have been applied to simple application servers.
   * 
   * @param request - DeleteFirewallTemplateRulesRequest
   * @returns DeleteFirewallTemplateRulesResponse
   */
  async deleteFirewallTemplateRules(request: $_model.DeleteFirewallTemplateRulesRequest): Promise<$_model.DeleteFirewallTemplateRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFirewallTemplateRulesWithOptions(request, runtime);
  }

  /**
   * Deletes firewall templates from a simple application server.
   * 
   * @remarks
   * Deleting a firewall template does not affect the firewall rules that have been applied to simple application servers. You can delete firewall templates that you no longer need.
   * 
   * @param request - DeleteFirewallTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFirewallTemplatesResponse
   */
  async deleteFirewallTemplatesWithOptions(request: $_model.DeleteFirewallTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFirewallTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.firewallTemplateId)) {
      query["FirewallTemplateId"] = request.firewallTemplateId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFirewallTemplates",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFirewallTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFirewallTemplatesResponse({}));
  }

  /**
   * Deletes firewall templates from a simple application server.
   * 
   * @remarks
   * Deleting a firewall template does not affect the firewall rules that have been applied to simple application servers. You can delete firewall templates that you no longer need.
   * 
   * @param request - DeleteFirewallTemplatesRequest
   * @returns DeleteFirewallTemplatesResponse
   */
  async deleteFirewallTemplates(request: $_model.DeleteFirewallTemplatesRequest): Promise<$_model.DeleteFirewallTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFirewallTemplatesWithOptions(request, runtime);
  }

  /**
   * Deletes the key pair of a simple application server.
   * 
   * @param request - DeleteInstanceKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceKeyPairResponse
   */
  async deleteInstanceKeyPairWithOptions(request: $_model.DeleteInstanceKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      action: "DeleteInstanceKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceKeyPairResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceKeyPairResponse({}));
  }

  /**
   * Deletes the key pair of a simple application server.
   * 
   * @param request - DeleteInstanceKeyPairRequest
   * @returns DeleteInstanceKeyPairResponse
   */
  async deleteInstanceKeyPair(request: $_model.DeleteInstanceKeyPairRequest): Promise<$_model.DeleteInstanceKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceKeyPairWithOptions(request, runtime);
  }

  /**
   * Deletes the SSH key pairs of simple application servers.
   * 
   * @remarks
   * You must unbind SSH key pairs that you no longer use from simple application servers before you delete the SSH key pairs.
   * 
   * @param request - DeleteKeyPairsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKeyPairsResponse
   */
  async deleteKeyPairsWithOptions(request: $_model.DeleteKeyPairsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKeyPairsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.keyPairNames)) {
      query["KeyPairNames"] = request.keyPairNames;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKeyPairs",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteKeyPairsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteKeyPairsResponse({}));
  }

  /**
   * Deletes the SSH key pairs of simple application servers.
   * 
   * @remarks
   * You must unbind SSH key pairs that you no longer use from simple application servers before you delete the SSH key pairs.
   * 
   * @param request - DeleteKeyPairsRequest
   * @returns DeleteKeyPairsResponse
   */
  async deleteKeyPairs(request: $_model.DeleteKeyPairsRequest): Promise<$_model.DeleteKeyPairsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteKeyPairsWithOptions(request, runtime);
  }

  /**
   * Deletes a snapshot of a simple application server.
   * 
   * @remarks
   * You can delete a snapshot if you no longer need it.
   * > If a custom image was created from the snapshot, delete the custom image before you delete the snapshot.
   * 
   * @param request - DeleteSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshotWithOptions(request: $_model.DeleteSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnapshot",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSnapshotResponse({}));
  }

  /**
   * Deletes a snapshot of a simple application server.
   * 
   * @remarks
   * You can delete a snapshot if you no longer need it.
   * > If a custom image was created from the snapshot, delete the custom image before you delete the snapshot.
   * 
   * @param request - DeleteSnapshotRequest
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshot(request: $_model.DeleteSnapshotRequest): Promise<$_model.DeleteSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  /**
   * Deletes snapshots of a simple application server.
   * 
   * @param request - DeleteSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnapshotsResponse
   */
  async deleteSnapshotsWithOptions(request: $_model.DeleteSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSnapshotsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.snapshotIds)) {
      query["SnapshotIds"] = request.snapshotIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnapshots",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSnapshotsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSnapshotsResponse({}));
  }

  /**
   * Deletes snapshots of a simple application server.
   * 
   * @param request - DeleteSnapshotsRequest
   * @returns DeleteSnapshotsResponse
   */
  async deleteSnapshots(request: $_model.DeleteSnapshotsRequest): Promise<$_model.DeleteSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSnapshotsWithOptions(request, runtime);
  }

  /**
   * Queries the Cloud Assistant information of one or more instances.
   * 
   * @param tmpReq - DescribeCloudAssistantAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudAssistantAttributesResponse
   */
  async describeCloudAssistantAttributesWithOptions(tmpReq: $_model.DescribeCloudAssistantAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudAssistantAttributesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeCloudAssistantAttributesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudAssistantAttributes",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudAssistantAttributesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudAssistantAttributesResponse({}));
  }

  /**
   * Queries the Cloud Assistant information of one or more instances.
   * 
   * @param request - DescribeCloudAssistantAttributesRequest
   * @returns DescribeCloudAssistantAttributesResponse
   */
  async describeCloudAssistantAttributes(request: $_model.DescribeCloudAssistantAttributesRequest): Promise<$_model.DescribeCloudAssistantAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudAssistantAttributesWithOptions(request, runtime);
  }

  /**
   * Queries whether the Cloud Assistant client is installed on simple application servers.
   * 
   * @remarks
   * By default, the Cloud Assistant client is installed on simple application servers. If you have manually uninstalled the client, you must reinstall the client. Otherwise, you cannot run commands on the servers.
   * 
   * @param tmpReq - DescribeCloudAssistantStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudAssistantStatusResponse
   */
  async describeCloudAssistantStatusWithOptions(tmpReq: $_model.DescribeCloudAssistantStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudAssistantStatusResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeCloudAssistantStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudAssistantStatus",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudAssistantStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudAssistantStatusResponse({}));
  }

  /**
   * Queries whether the Cloud Assistant client is installed on simple application servers.
   * 
   * @remarks
   * By default, the Cloud Assistant client is installed on simple application servers. If you have manually uninstalled the client, you must reinstall the client. Otherwise, you cannot run commands on the servers.
   * 
   * @param request - DescribeCloudAssistantStatusRequest
   * @returns DescribeCloudAssistantStatusResponse
   */
  async describeCloudAssistantStatus(request: $_model.DescribeCloudAssistantStatusRequest): Promise<$_model.DescribeCloudAssistantStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudAssistantStatusWithOptions(request, runtime);
  }

  /**
   * Queries the status of the CloudMonitor agent on simple application servers.
   * 
   * @param request - DescribeCloudMonitorAgentStatusesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudMonitorAgentStatusesResponse
   */
  async describeCloudMonitorAgentStatusesWithOptions(request: $_model.DescribeCloudMonitorAgentStatusesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudMonitorAgentStatusesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudMonitorAgentStatuses",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudMonitorAgentStatusesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudMonitorAgentStatusesResponse({}));
  }

  /**
   * Queries the status of the CloudMonitor agent on simple application servers.
   * 
   * @param request - DescribeCloudMonitorAgentStatusesRequest
   * @returns DescribeCloudMonitorAgentStatusesResponse
   */
  async describeCloudMonitorAgentStatuses(request: $_model.DescribeCloudMonitorAgentStatusesRequest): Promise<$_model.DescribeCloudMonitorAgentStatusesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudMonitorAgentStatusesWithOptions(request, runtime);
  }

  /**
   * Queries the list and status of commands run by Cloud Assistant.
   * 
   * @param request - DescribeCommandInvocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCommandInvocationsResponse
   */
  async describeCommandInvocationsWithOptions(request: $_model.DescribeCommandInvocationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCommandInvocationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!$dara.isNull(request.commandName)) {
      query["CommandName"] = request.commandName;
    }

    if (!$dara.isNull(request.commandType)) {
      query["CommandType"] = request.commandType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.invocationStatus)) {
      query["InvocationStatus"] = request.invocationStatus;
    }

    if (!$dara.isNull(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCommandInvocations",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCommandInvocationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCommandInvocationsResponse({}));
  }

  /**
   * Queries the list and status of commands run by Cloud Assistant.
   * 
   * @param request - DescribeCommandInvocationsRequest
   * @returns DescribeCommandInvocationsResponse
   */
  async describeCommandInvocations(request: $_model.DescribeCommandInvocationsRequest): Promise<$_model.DescribeCommandInvocationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCommandInvocationsWithOptions(request, runtime);
  }

  /**
   * Queries commands that you manually created or public commands provided by Alibaba Cloud.
   * 
   * @param request - DescribeCommandsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCommandsResponse
   */
  async describeCommandsWithOptions(request: $_model.DescribeCommandsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCommandsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.provider)) {
      query["Provider"] = request.provider;
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

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCommands",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCommandsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCommandsResponse({}));
  }

  /**
   * Queries commands that you manually created or public commands provided by Alibaba Cloud.
   * 
   * @param request - DescribeCommandsRequest
   * @returns DescribeCommandsResponse
   */
  async describeCommands(request: $_model.DescribeCommandsRequest): Promise<$_model.DescribeCommandsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCommandsWithOptions(request, runtime);
  }

  /**
   * Queries the error logs of a lightweight database instance.
   * 
   * @remarks
   * Use this operation to query the error logs of a lightweight database instance to identify and troubleshoot issues.
   * 
   * @param request - DescribeDatabaseErrorLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatabaseErrorLogsResponse
   */
  async describeDatabaseErrorLogsWithOptions(request: $_model.DescribeDatabaseErrorLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDatabaseErrorLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatabaseErrorLogs",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDatabaseErrorLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDatabaseErrorLogsResponse({}));
  }

  /**
   * Queries the error logs of a lightweight database instance.
   * 
   * @remarks
   * Use this operation to query the error logs of a lightweight database instance to identify and troubleshoot issues.
   * 
   * @param request - DescribeDatabaseErrorLogsRequest
   * @returns DescribeDatabaseErrorLogsResponse
   */
  async describeDatabaseErrorLogs(request: $_model.DescribeDatabaseErrorLogsRequest): Promise<$_model.DescribeDatabaseErrorLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatabaseErrorLogsWithOptions(request, runtime);
  }

  /**
   * Retrieves monitoring metrics for a lightweight database instance.
   * 
   * @remarks
   * After you create a lightweight database instance, you can retrieve its detailed monitoring metrics. These metrics include CPU and memory usage, disk space, IOPS (Input/Output Operations Per Second), and the number of connections.
   * 
   * @param request - DescribeDatabaseInstanceMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatabaseInstanceMetricDataResponse
   */
  async describeDatabaseInstanceMetricDataWithOptions(request: $_model.DescribeDatabaseInstanceMetricDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDatabaseInstanceMetricDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatabaseInstanceMetricData",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDatabaseInstanceMetricDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDatabaseInstanceMetricDataResponse({}));
  }

  /**
   * Retrieves monitoring metrics for a lightweight database instance.
   * 
   * @remarks
   * After you create a lightweight database instance, you can retrieve its detailed monitoring metrics. These metrics include CPU and memory usage, disk space, IOPS (Input/Output Operations Per Second), and the number of connections.
   * 
   * @param request - DescribeDatabaseInstanceMetricDataRequest
   * @returns DescribeDatabaseInstanceMetricDataResponse
   */
  async describeDatabaseInstanceMetricData(request: $_model.DescribeDatabaseInstanceMetricDataRequest): Promise<$_model.DescribeDatabaseInstanceMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatabaseInstanceMetricDataWithOptions(request, runtime);
  }

  /**
   * View parameters for a lightweight database instance.
   * 
   * @remarks
   * This operation retrieves the parameter details of a lightweight database instance.
   * 
   * @param request - DescribeDatabaseInstanceParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatabaseInstanceParametersResponse
   */
  async describeDatabaseInstanceParametersWithOptions(request: $_model.DescribeDatabaseInstanceParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDatabaseInstanceParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatabaseInstanceParameters",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDatabaseInstanceParametersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDatabaseInstanceParametersResponse({}));
  }

  /**
   * View parameters for a lightweight database instance.
   * 
   * @remarks
   * This operation retrieves the parameter details of a lightweight database instance.
   * 
   * @param request - DescribeDatabaseInstanceParametersRequest
   * @returns DescribeDatabaseInstanceParametersResponse
   */
  async describeDatabaseInstanceParameters(request: $_model.DescribeDatabaseInstanceParametersRequest): Promise<$_model.DescribeDatabaseInstanceParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatabaseInstanceParametersWithOptions(request, runtime);
  }

  /**
   * Queries the details of lightweight database instances.
   * 
   * @remarks
   * Queries the details of one or more lightweight database instances in a specified region, including the instance ID, name, plan, database version, public endpoint, internal endpoint, creation time, and expiration time.
   * 
   * @param request - DescribeDatabaseInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatabaseInstancesResponse
   */
  async describeDatabaseInstancesWithOptions(request: $_model.DescribeDatabaseInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDatabaseInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseInstanceIds)) {
      query["DatabaseInstanceIds"] = request.databaseInstanceIds;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatabaseInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDatabaseInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDatabaseInstancesResponse({}));
  }

  /**
   * Queries the details of lightweight database instances.
   * 
   * @remarks
   * Queries the details of one or more lightweight database instances in a specified region, including the instance ID, name, plan, database version, public endpoint, internal endpoint, creation time, and expiration time.
   * 
   * @param request - DescribeDatabaseInstancesRequest
   * @returns DescribeDatabaseInstancesResponse
   */
  async describeDatabaseInstances(request: $_model.DescribeDatabaseInstancesRequest): Promise<$_model.DescribeDatabaseInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatabaseInstancesWithOptions(request, runtime);
  }

  /**
   * Retrieves slow log details for Simple Database Service.
   * 
   * @remarks
   * You can query the slow logs of a Simple Database Service instance to diagnose issues.
   * > Simple Database Service retains slow logs for 7 days.
   * 
   * @param request - DescribeDatabaseSlowLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatabaseSlowLogRecordsResponse
   */
  async describeDatabaseSlowLogRecordsWithOptions(request: $_model.DescribeDatabaseSlowLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDatabaseSlowLogRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatabaseSlowLogRecords",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDatabaseSlowLogRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDatabaseSlowLogRecordsResponse({}));
  }

  /**
   * Retrieves slow log details for Simple Database Service.
   * 
   * @remarks
   * You can query the slow logs of a Simple Database Service instance to diagnose issues.
   * > Simple Database Service retains slow logs for 7 days.
   * 
   * @param request - DescribeDatabaseSlowLogRecordsRequest
   * @returns DescribeDatabaseSlowLogRecordsResponse
   */
  async describeDatabaseSlowLogRecords(request: $_model.DescribeDatabaseSlowLogRecordsRequest): Promise<$_model.DescribeDatabaseSlowLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatabaseSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the results of applying a firewall template to instances.
   * 
   * @param request - DescribeFirewallTemplateApplyResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFirewallTemplateApplyResultsResponse
   */
  async describeFirewallTemplateApplyResultsWithOptions(request: $_model.DescribeFirewallTemplateApplyResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFirewallTemplateApplyResultsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.firewallTemplateId)) {
      query["FirewallTemplateId"] = request.firewallTemplateId;
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

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFirewallTemplateApplyResults",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFirewallTemplateApplyResultsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFirewallTemplateApplyResultsResponse({}));
  }

  /**
   * Queries the results of applying a firewall template to instances.
   * 
   * @param request - DescribeFirewallTemplateApplyResultsRequest
   * @returns DescribeFirewallTemplateApplyResultsResponse
   */
  async describeFirewallTemplateApplyResults(request: $_model.DescribeFirewallTemplateApplyResultsRequest): Promise<$_model.DescribeFirewallTemplateApplyResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFirewallTemplateApplyResultsWithOptions(request, runtime);
  }

  /**
   * Queries the result of applying a firewall template rule to simple application servers.
   * 
   * @param request - DescribeFirewallTemplateRulesApplyResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFirewallTemplateRulesApplyResultResponse
   */
  async describeFirewallTemplateRulesApplyResultWithOptions(request: $_model.DescribeFirewallTemplateRulesApplyResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFirewallTemplateRulesApplyResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.firewallTemplateId)) {
      query["FirewallTemplateId"] = request.firewallTemplateId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFirewallTemplateRulesApplyResult",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFirewallTemplateRulesApplyResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFirewallTemplateRulesApplyResultResponse({}));
  }

  /**
   * Queries the result of applying a firewall template rule to simple application servers.
   * 
   * @param request - DescribeFirewallTemplateRulesApplyResultRequest
   * @returns DescribeFirewallTemplateRulesApplyResultResponse
   */
  async describeFirewallTemplateRulesApplyResult(request: $_model.DescribeFirewallTemplateRulesApplyResultRequest): Promise<$_model.DescribeFirewallTemplateRulesApplyResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFirewallTemplateRulesApplyResultWithOptions(request, runtime);
  }

  /**
   * Queries details about firewall templates.
   * 
   * @param request - DescribeFirewallTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFirewallTemplatesResponse
   */
  async describeFirewallTemplatesWithOptions(request: $_model.DescribeFirewallTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFirewallTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firewallTemplateId)) {
      query["FirewallTemplateId"] = request.firewallTemplateId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFirewallTemplates",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFirewallTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFirewallTemplatesResponse({}));
  }

  /**
   * Queries details about firewall templates.
   * 
   * @param request - DescribeFirewallTemplatesRequest
   * @returns DescribeFirewallTemplatesResponse
   */
  async describeFirewallTemplates(request: $_model.DescribeFirewallTemplatesRequest): Promise<$_model.DescribeFirewallTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFirewallTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries information about the key pair of a simple application server.
   * 
   * @param request - DescribeInstanceKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceKeyPairResponse
   */
  async describeInstanceKeyPairWithOptions(request: $_model.DescribeInstanceKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      action: "DescribeInstanceKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceKeyPairResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceKeyPairResponse({}));
  }

  /**
   * Queries information about the key pair of a simple application server.
   * 
   * @param request - DescribeInstanceKeyPairRequest
   * @returns DescribeInstanceKeyPairResponse
   */
  async describeInstanceKeyPair(request: $_model.DescribeInstanceKeyPairRequest): Promise<$_model.DescribeInstanceKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceKeyPairWithOptions(request, runtime);
  }

  /**
   * Checks whether a password is set for a simple application server.
   * 
   * @param request - DescribeInstancePasswordsSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancePasswordsSettingResponse
   */
  async describeInstancePasswordsSettingWithOptions(request: $_model.DescribeInstancePasswordsSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancePasswordsSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      action: "DescribeInstancePasswordsSetting",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstancePasswordsSettingResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstancePasswordsSettingResponse({}));
  }

  /**
   * Checks whether a password is set for a simple application server.
   * 
   * @param request - DescribeInstancePasswordsSettingRequest
   * @returns DescribeInstancePasswordsSettingResponse
   */
  async describeInstancePasswordsSetting(request: $_model.DescribeInstancePasswordsSettingRequest): Promise<$_model.DescribeInstancePasswordsSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancePasswordsSettingWithOptions(request, runtime);
  }

  /**
   * Queries the VNC connection address of a simple application server.
   * 
   * @param request - DescribeInstanceVncUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceVncUrlResponse
   */
  async describeInstanceVncUrlWithOptions(request: $_model.DescribeInstanceVncUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceVncUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      action: "DescribeInstanceVncUrl",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceVncUrlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceVncUrlResponse({}));
  }

  /**
   * Queries the VNC connection address of a simple application server.
   * 
   * @param request - DescribeInstanceVncUrlRequest
   * @returns DescribeInstanceVncUrlResponse
   */
  async describeInstanceVncUrl(request: $_model.DescribeInstanceVncUrlRequest): Promise<$_model.DescribeInstanceVncUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceVncUrlWithOptions(request, runtime);
  }

  /**
   * Queries the execution result of a single command.
   * 
   * @remarks
   * - After you run a command, the command is not necessarily run successfully or achieves the expected results. Call this operation to view the actual execution result based on the actual output.
   * - You can query execution information from the last two weeks. A maximum of 100,000 entries of execution information can be retained.
   * 
   * @param request - DescribeInvocationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInvocationResultResponse
   */
  async describeInvocationResultWithOptions(request: $_model.DescribeInvocationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInvocationResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInvocationResult",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInvocationResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInvocationResultResponse({}));
  }

  /**
   * Queries the execution result of a single command.
   * 
   * @remarks
   * - After you run a command, the command is not necessarily run successfully or achieves the expected results. Call this operation to view the actual execution result based on the actual output.
   * - You can query execution information from the last two weeks. A maximum of 100,000 entries of execution information can be retained.
   * 
   * @param request - DescribeInvocationResultRequest
   * @returns DescribeInvocationResultResponse
   */
  async describeInvocationResult(request: $_model.DescribeInvocationResultRequest): Promise<$_model.DescribeInvocationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInvocationResultWithOptions(request, runtime);
  }

  /**
   * Queries the details of a command.
   * 
   * @remarks
   * - After you run a command, the command is not guaranteed to succeed or produce the expected results. Check the actual execution results based on the return values of this operation.
   * - You can query execution information from the last two weeks. A maximum of 100,000 execution records can be retained.
   * 
   * @param request - DescribeInvocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInvocationsResponse
   */
  async describeInvocationsWithOptions(request: $_model.DescribeInvocationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInvocationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.invokeStatus)) {
      query["InvokeStatus"] = request.invokeStatus;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInvocations",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInvocationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInvocationsResponse({}));
  }

  /**
   * Queries the details of a command.
   * 
   * @remarks
   * - After you run a command, the command is not guaranteed to succeed or produce the expected results. Check the actual execution results based on the return values of this operation.
   * - You can query execution information from the last two weeks. A maximum of 100,000 execution records can be retained.
   * 
   * @param request - DescribeInvocationsRequest
   * @returns DescribeInvocationsResponse
   */
  async describeInvocations(request: $_model.DescribeInvocationsRequest): Promise<$_model.DescribeInvocationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring information about vCPUs, memory, disk IOPS, and traffic of a simple application server.
   * 
   * @param request - DescribeMonitorDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitorDataResponse
   */
  async describeMonitorDataWithOptions(request: $_model.DescribeMonitorDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitorDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.length)) {
      query["Length"] = request.length;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMonitorData",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitorDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitorDataResponse({}));
  }

  /**
   * Queries the monitoring information about vCPUs, memory, disk IOPS, and traffic of a simple application server.
   * 
   * @param request - DescribeMonitorDataRequest
   * @returns DescribeMonitorDataResponse
   */
  async describeMonitorData(request: $_model.DescribeMonitorDataRequest): Promise<$_model.DescribeMonitorDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitorDataWithOptions(request, runtime);
  }

  /**
   * Retrieves the pricing information of Simple Application Server.
   * 
   * @remarks
   * - After you run a command, it does not mean that the command is successfully run or produces the expected results. You must check the actual execution results based on the API response. The actual output prevails.
   * - You can query the execution information of the last two weeks. The maximum number of retained execution records is 100,000.
   * 
   * @param request - DescribePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePriceResponse
   */
  async describePriceWithOptions(request: $_model.DescribePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.commodityType)) {
      query["CommodityType"] = request.commodityType;
    }

    if (!$dara.isNull(request.dataDiskSize)) {
      query["DataDiskSize"] = request.dataDiskSize;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.priceUnit)) {
      query["PriceUnit"] = request.priceUnit;
    }

    if (!$dara.isNull(request.promotionOptions)) {
      query["PromotionOptions"] = request.promotionOptions;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePrice",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePriceResponse>(await this.callApi(params, req, runtime), new $_model.DescribePriceResponse({}));
  }

  /**
   * Retrieves the pricing information of Simple Application Server.
   * 
   * @remarks
   * - After you run a command, it does not mean that the command is successfully run or produces the expected results. You must check the actual execution results based on the API response. The actual output prevails.
   * - You can query the execution information of the last two weeks. The maximum number of retained execution records is 100,000.
   * 
   * @param request - DescribePriceRequest
   * @returns DescribePriceResponse
   */
  async describePrice(request: $_model.DescribePriceRequest): Promise<$_model.DescribePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  /**
   * Queries the status of the Security Center agent on a simple application server.
   * 
   * @param request - DescribeSecurityAgentStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityAgentStatusResponse
   */
  async describeSecurityAgentStatusWithOptions(request: $_model.DescribeSecurityAgentStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityAgentStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      action: "DescribeSecurityAgentStatus",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityAgentStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityAgentStatusResponse({}));
  }

  /**
   * Queries the status of the Security Center agent on a simple application server.
   * 
   * @param request - DescribeSecurityAgentStatusRequest
   * @returns DescribeSecurityAgentStatusResponse
   */
  async describeSecurityAgentStatus(request: $_model.DescribeSecurityAgentStatusRequest): Promise<$_model.DescribeSecurityAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityAgentStatusWithOptions(request, runtime);
  }

  /**
   * Unbinds key pairs from simple application servers.
   * 
   * @remarks
   * If you want to change the SSH key pairs that are bound to your simple application servers or your end user no longer needs to access a specific simple application server, you can unbind the SSH key pairs from simple application servers to improve the security of the simple application servers or restrict access to the specific simple application server.
   * 
   * @param request - DetachKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachKeyPairResponse
   */
  async detachKeyPairWithOptions(request: $_model.DetachKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachKeyPairResponse>(await this.callApi(params, req, runtime), new $_model.DetachKeyPairResponse({}));
  }

  /**
   * Unbinds key pairs from simple application servers.
   * 
   * @remarks
   * If you want to change the SSH key pairs that are bound to your simple application servers or your end user no longer needs to access a specific simple application server, you can unbind the SSH key pairs from simple application servers to improve the security of the simple application servers or restrict access to the specific simple application server.
   * 
   * @param request - DetachKeyPairRequest
   * @returns DetachKeyPairResponse
   */
  async detachKeyPair(request: $_model.DetachKeyPairRequest): Promise<$_model.DetachKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachKeyPairWithOptions(request, runtime);
  }

  /**
   * Disables a firewall policy for a specified simple application server.
   * 
   * @param request - DisableFirewallRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableFirewallRuleResponse
   */
  async disableFirewallRuleWithOptions(request: $_model.DisableFirewallRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableFirewallRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableFirewallRule",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableFirewallRuleResponse>(await this.callApi(params, req, runtime), new $_model.DisableFirewallRuleResponse({}));
  }

  /**
   * Disables a firewall policy for a specified simple application server.
   * 
   * @param request - DisableFirewallRuleRequest
   * @returns DisableFirewallRuleResponse
   */
  async disableFirewallRule(request: $_model.DisableFirewallRuleRequest): Promise<$_model.DisableFirewallRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableFirewallRuleWithOptions(request, runtime);
  }

  /**
   * Enables a firewall policy for a specified simple application server.
   * 
   * @param request - EnableFirewallRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableFirewallRuleResponse
   */
  async enableFirewallRuleWithOptions(request: $_model.EnableFirewallRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableFirewallRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableFirewallRule",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableFirewallRuleResponse>(await this.callApi(params, req, runtime), new $_model.EnableFirewallRuleResponse({}));
  }

  /**
   * Enables a firewall policy for a specified simple application server.
   * 
   * @param request - EnableFirewallRuleRequest
   * @returns EnableFirewallRuleResponse
   */
  async enableFirewallRule(request: $_model.EnableFirewallRuleRequest): Promise<$_model.EnableFirewallRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableFirewallRuleWithOptions(request, runtime);
  }

  /**
   * Imports an existing key pair.
   * 
   * @remarks
   * You can import an existing key pair to the console to log on to your Simple Application Server instances. The key pair must use a supported encryption method. For more information, see [Q2: What encryption methods are supported for importing an existing key pair?](https://help.aliyun.com/document_detail/59085.html).
   * 
   * @param request - ImportKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportKeyPairResponse
   */
  async importKeyPairWithOptions(request: $_model.ImportKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.publicKeyBody)) {
      query["PublicKeyBody"] = request.publicKeyBody;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportKeyPairResponse>(await this.callApi(params, req, runtime), new $_model.ImportKeyPairResponse({}));
  }

  /**
   * Imports an existing key pair.
   * 
   * @remarks
   * You can import an existing key pair to the console to log on to your Simple Application Server instances. The key pair must use a supported encryption method. For more information, see [Q2: What encryption methods are supported for importing an existing key pair?](https://help.aliyun.com/document_detail/59085.html).
   * 
   * @param request - ImportKeyPairRequest
   * @returns ImportKeyPairResponse
   */
  async importKeyPair(request: $_model.ImportKeyPairRequest): Promise<$_model.ImportKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importKeyPairWithOptions(request, runtime);
  }

  /**
   * Installs the Cloud Assistant client on simple application servers at a time.
   * 
   * @remarks
   * To run commands on your simple application servers, you must install the Cloud Assistant client on your servers. You can call the [DescribeCloudAssistantStatus](https://help.aliyun.com/document_detail/439512.html) operation to check whether the Cloud Assistant client is installed on your simple application servers. If you have not installed the Cloud Assistant client, you can call the InstallCloudAssistant operation to install the client. Then, you can call the [RebootInstance](https://help.aliyun.com/document_detail/190443.html) operation to restart the servers to allow the client to take effect.
   * 
   * @param tmpReq - InstallCloudAssistantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallCloudAssistantResponse
   */
  async installCloudAssistantWithOptions(tmpReq: $_model.InstallCloudAssistantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallCloudAssistantResponse> {
    tmpReq.validate();
    let request = new $_model.InstallCloudAssistantShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallCloudAssistant",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallCloudAssistantResponse>(await this.callApi(params, req, runtime), new $_model.InstallCloudAssistantResponse({}));
  }

  /**
   * Installs the Cloud Assistant client on simple application servers at a time.
   * 
   * @remarks
   * To run commands on your simple application servers, you must install the Cloud Assistant client on your servers. You can call the [DescribeCloudAssistantStatus](https://help.aliyun.com/document_detail/439512.html) operation to check whether the Cloud Assistant client is installed on your simple application servers. If you have not installed the Cloud Assistant client, you can call the InstallCloudAssistant operation to install the client. Then, you can call the [RebootInstance](https://help.aliyun.com/document_detail/190443.html) operation to restart the servers to allow the client to take effect.
   * 
   * @param request - InstallCloudAssistantRequest
   * @returns InstallCloudAssistantResponse
   */
  async installCloudAssistant(request: $_model.InstallCloudAssistantRequest): Promise<$_model.InstallCloudAssistantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installCloudAssistantWithOptions(request, runtime);
  }

  /**
   * Installs the CloudMonitor agent for a simple application server.
   * 
   * @param request - InstallCloudMonitorAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallCloudMonitorAgentResponse
   */
  async installCloudMonitorAgentWithOptions(request: $_model.InstallCloudMonitorAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallCloudMonitorAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

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
      action: "InstallCloudMonitorAgent",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallCloudMonitorAgentResponse>(await this.callApi(params, req, runtime), new $_model.InstallCloudMonitorAgentResponse({}));
  }

  /**
   * Installs the CloudMonitor agent for a simple application server.
   * 
   * @param request - InstallCloudMonitorAgentRequest
   * @returns InstallCloudMonitorAgentResponse
   */
  async installCloudMonitorAgent(request: $_model.InstallCloudMonitorAgentRequest): Promise<$_model.InstallCloudMonitorAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installCloudMonitorAgentWithOptions(request, runtime);
  }

  /**
   * Runs a Command Assistant command for one or more simple application servers.
   * 
   * @remarks
   *   The simple application servers for which you want to call the operation must meet the following conditions. If a simple application server cannot meet the conditions, you must call this operation again.
   *     *   The simple application servers are in the `Running` state. You can call the [ListInstances](https://help.aliyun.com/document_detail/2361065.html) operation to query the status of simple application servers.
   *     *   Cloud Assistant Agent is installed on the simple application servers. For more information, see [InstallCloudAssistant](https://help.aliyun.com/document_detail/2361030.html).
   *     *   If you run a PowerShell command, make sure that the PowerShell module is configured for the simple application servers.
   * *   The command may fail to be run due to the abnormal states of simple application servers, network exceptions, or exceptions in Cloud Assistant Agent. If the command fails to be run, no execution information is generated.
   * *   If you enable the custom parameter feature when you create a command, you must set the `Parameters` parameter to specify custom parameters when you run the command.
   * *   When you call this operation, you can select only one common command or a custom command that you have created.
   * 
   * @param tmpReq - InvokeCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeCommandResponse
   */
  async invokeCommandWithOptions(tmpReq: $_model.InvokeCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InvokeCommandResponse> {
    tmpReq.validate();
    let request = new $_model.InvokeCommandShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeCommand",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvokeCommandResponse>(await this.callApi(params, req, runtime), new $_model.InvokeCommandResponse({}));
  }

  /**
   * Runs a Command Assistant command for one or more simple application servers.
   * 
   * @remarks
   *   The simple application servers for which you want to call the operation must meet the following conditions. If a simple application server cannot meet the conditions, you must call this operation again.
   *     *   The simple application servers are in the `Running` state. You can call the [ListInstances](https://help.aliyun.com/document_detail/2361065.html) operation to query the status of simple application servers.
   *     *   Cloud Assistant Agent is installed on the simple application servers. For more information, see [InstallCloudAssistant](https://help.aliyun.com/document_detail/2361030.html).
   *     *   If you run a PowerShell command, make sure that the PowerShell module is configured for the simple application servers.
   * *   The command may fail to be run due to the abnormal states of simple application servers, network exceptions, or exceptions in Cloud Assistant Agent. If the command fails to be run, no execution information is generated.
   * *   If you enable the custom parameter feature when you create a command, you must set the `Parameters` parameter to specify custom parameters when you run the command.
   * *   When you call this operation, you can select only one common command or a custom command that you have created.
   * 
   * @param request - InvokeCommandRequest
   * @returns InvokeCommandResponse
   */
  async invokeCommand(request: $_model.InvokeCommandRequest): Promise<$_model.InvokeCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.invokeCommandWithOptions(request, runtime);
  }

  /**
   * Calls the ListCustomImageShareAccounts operation to query information about cross-account shared images.
   * 
   * @param request - ListCustomImageShareAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomImageShareAccountsResponse
   */
  async listCustomImageShareAccountsWithOptions(request: $_model.ListCustomImageShareAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomImageShareAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomImageShareAccounts",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomImageShareAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomImageShareAccountsResponse({}));
  }

  /**
   * Calls the ListCustomImageShareAccounts operation to query information about cross-account shared images.
   * 
   * @param request - ListCustomImageShareAccountsRequest
   * @returns ListCustomImageShareAccountsResponse
   */
  async listCustomImageShareAccounts(request: $_model.ListCustomImageShareAccountsRequest): Promise<$_model.ListCustomImageShareAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomImageShareAccountsWithOptions(request, runtime);
  }

  /**
   * Queries information about one or more custom images that have been created in a specified region.
   * 
   * @param request - ListCustomImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomImagesResponse
   */
  async listCustomImagesWithOptions(request: $_model.ListCustomImagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomImagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataSnapshotId)) {
      query["DataSnapshotId"] = request.dataSnapshotId;
    }

    if (!$dara.isNull(request.imageIds)) {
      query["ImageIds"] = request.imageIds;
    }

    if (!$dara.isNull(request.imageNames)) {
      query["ImageNames"] = request.imageNames;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.share)) {
      query["Share"] = request.share;
    }

    if (!$dara.isNull(request.systemSnapshotId)) {
      query["SystemSnapshotId"] = request.systemSnapshotId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomImages",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomImagesResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomImagesResponse({}));
  }

  /**
   * Queries information about one or more custom images that have been created in a specified region.
   * 
   * @param request - ListCustomImagesRequest
   * @returns ListCustomImagesResponse
   */
  async listCustomImages(request: $_model.ListCustomImagesRequest): Promise<$_model.ListCustomImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomImagesWithOptions(request, runtime);
  }

  /**
   * Queries the information about disks in a region.
   * 
   * @remarks
   * The `InstanceId`, `DiskIds`, and `ResourceGroupId` parameters are optional. However, you can specify them as filter conditions and combine them with the logical AND operator to filter disks that you want to query.
   * 
   * @param request - ListDisksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDisksResponse
   */
  async listDisksWithOptions(request: $_model.ListDisksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDisksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskIds)) {
      query["DiskIds"] = request.diskIds;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDisks",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDisksResponse>(await this.callApi(params, req, runtime), new $_model.ListDisksResponse({}));
  }

  /**
   * Queries the information about disks in a region.
   * 
   * @remarks
   * The `InstanceId`, `DiskIds`, and `ResourceGroupId` parameters are optional. However, you can specify them as filter conditions and combine them with the logical AND operator to filter disks that you want to query.
   * 
   * @param request - ListDisksRequest
   * @returns ListDisksResponse
   */
  async listDisks(request: $_model.ListDisksRequest): Promise<$_model.ListDisksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDisksWithOptions(request, runtime);
  }

  /**
   * Queries the firewall rules of a specified simple application server.
   * 
   * @remarks
   * You can call this API operation to query the firewall rules of a specified simple application server, including information such as the port range, firewall rule ID, and transport layer protocol.
   * 
   * @param request - ListFirewallRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFirewallRulesResponse
   */
  async listFirewallRulesWithOptions(request: $_model.ListFirewallRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFirewallRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firewallRuleId)) {
      query["FirewallRuleId"] = request.firewallRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFirewallRules",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFirewallRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListFirewallRulesResponse({}));
  }

  /**
   * Queries the firewall rules of a specified simple application server.
   * 
   * @remarks
   * You can call this API operation to query the firewall rules of a specified simple application server, including information such as the port range, firewall rule ID, and transport layer protocol.
   * 
   * @param request - ListFirewallRulesRequest
   * @returns ListFirewallRulesResponse
   */
  async listFirewallRules(request: $_model.ListFirewallRulesRequest): Promise<$_model.ListFirewallRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFirewallRulesWithOptions(request, runtime);
  }

  /**
   * Queries the information about images in a region.
   * 
   * @remarks
   * You can query details about one or more images in a specified region, including the IDs, names, and types of the images.
   * 
   * @param request - ListImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImagesResponse
   */
  async listImagesWithOptions(request: $_model.ListImagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListImagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageIds)) {
      query["ImageIds"] = request.imageIds;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImages",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListImagesResponse>(await this.callApi(params, req, runtime), new $_model.ListImagesResponse({}));
  }

  /**
   * Queries the information about images in a region.
   * 
   * @remarks
   * You can query details about one or more images in a specified region, including the IDs, names, and types of the images.
   * 
   * @param request - ListImagesRequest
   * @returns ListImagesResponse
   */
  async listImages(request: $_model.ListImagesRequest): Promise<$_model.ListImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImagesWithOptions(request, runtime);
  }

  /**
   * This topic describes the list of plans to which a specified simple application server can be upgraded.
   * 
   * @remarks
   * As your business grows, the resources of a purchased server may no longer meet your requirements. Retrieve the list of plans to which the current server can be upgraded, then call the [UpgradeInstance](https://help.aliyun.com/document_detail/190445.html) to upgrade.
   * > We recommend that you create a snapshot of the disk of the server to back up data before you upgrade the instance. For more information, see [CreateSnapshot](https://help.aliyun.com/document_detail/190452.html).
   * For more information about the limits on instance configuration upgrades, see [Upgrade instance configurations](https://help.aliyun.com/document_detail/61433.html).
   * 
   * @param request - ListInstancePlansModificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancePlansModificationResponse
   */
  async listInstancePlansModificationWithOptions(request: $_model.ListInstancePlansModificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancePlansModificationResponse> {
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
      action: "ListInstancePlansModification",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancePlansModificationResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancePlansModificationResponse({}));
  }

  /**
   * This topic describes the list of plans to which a specified simple application server can be upgraded.
   * 
   * @remarks
   * As your business grows, the resources of a purchased server may no longer meet your requirements. Retrieve the list of plans to which the current server can be upgraded, then call the [UpgradeInstance](https://help.aliyun.com/document_detail/190445.html) to upgrade.
   * > We recommend that you create a snapshot of the disk of the server to back up data before you upgrade the instance. For more information, see [CreateSnapshot](https://help.aliyun.com/document_detail/190452.html).
   * For more information about the limits on instance configuration upgrades, see [Upgrade instance configurations](https://help.aliyun.com/document_detail/61433.html).
   * 
   * @param request - ListInstancePlansModificationRequest
   * @returns ListInstancePlansModificationResponse
   */
  async listInstancePlansModification(request: $_model.ListInstancePlansModificationRequest): Promise<$_model.ListInstancePlansModificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancePlansModificationWithOptions(request, runtime);
  }

  /**
   * Queries the status of simple application servers.
   * 
   * @param request - ListInstanceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceStatusResponse
   */
  async listInstanceStatusWithOptions(request: $_model.ListInstanceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceStatus",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceStatusResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceStatusResponse({}));
  }

  /**
   * Queries the status of simple application servers.
   * 
   * @param request - ListInstanceStatusRequest
   * @returns ListInstanceStatusResponse
   */
  async listInstanceStatus(request: $_model.ListInstanceStatusRequest): Promise<$_model.ListInstanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of one or more instances in a specified region.
   * 
   * @remarks
   * Queries the details of one or more instances in a specified region, including the server name, public IP address, internal IP address, creation time, and expiration time.
   * 
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.planType)) {
      query["PlanType"] = request.planType;
    }

    if (!$dara.isNull(request.publicIpAddresses)) {
      query["PublicIpAddresses"] = request.publicIpAddresses;
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
      action: "ListInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Queries the details of one or more instances in a specified region.
   * 
   * @remarks
   * Queries the details of one or more instances in a specified region, including the server name, public IP address, internal IP address, creation time, and expiration time.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the details about data transfer plans of simple application servers.
   * 
   * @remarks
   * You can query the details of data transfer plans of simple application servers, including the total quota, used quota, unused quota, and excess data transfers in the current month.
   * Simple Application Server provides data transfer plans that can be used to offset data transfer fees. You are charged for excess data transfers. Take note of the following items:
   * - Only outbound data transfers of simple application servers over the Internet are calculated. Outbound data transfers include the data transfer quota and the excess data transfers beyond the quota. Inbound data transfers of simple application servers over the Internet are not calculated.
   * - Outbound data transfers from simple application servers to other Alibaba Cloud services over the Internet first consume data transfer quotas. If the quotas are exhausted, you are charged for excess data transfers.
   * - You are not charged for data transfers between simple application servers within the same virtual private cloud (VPC).
   * For more information, see [Quotas and billing of data transfers](https://help.aliyun.com/document_detail/86281.html).
   * 
   * @param request - ListInstancesTrafficPackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesTrafficPackagesResponse
   */
  async listInstancesTrafficPackagesWithOptions(request: $_model.ListInstancesTrafficPackagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesTrafficPackagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstancesTrafficPackages",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesTrafficPackagesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesTrafficPackagesResponse({}));
  }

  /**
   * Queries the details about data transfer plans of simple application servers.
   * 
   * @remarks
   * You can query the details of data transfer plans of simple application servers, including the total quota, used quota, unused quota, and excess data transfers in the current month.
   * Simple Application Server provides data transfer plans that can be used to offset data transfer fees. You are charged for excess data transfers. Take note of the following items:
   * - Only outbound data transfers of simple application servers over the Internet are calculated. Outbound data transfers include the data transfer quota and the excess data transfers beyond the quota. Inbound data transfers of simple application servers over the Internet are not calculated.
   * - Outbound data transfers from simple application servers to other Alibaba Cloud services over the Internet first consume data transfer quotas. If the quotas are exhausted, you are charged for excess data transfers.
   * - You are not charged for data transfers between simple application servers within the same virtual private cloud (VPC).
   * For more information, see [Quotas and billing of data transfers](https://help.aliyun.com/document_detail/86281.html).
   * 
   * @param request - ListInstancesTrafficPackagesRequest
   * @returns ListInstancesTrafficPackagesResponse
   */
  async listInstancesTrafficPackages(request: $_model.ListInstancesTrafficPackagesRequest): Promise<$_model.ListInstancesTrafficPackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesTrafficPackagesWithOptions(request, runtime);
  }

  /**
   * The list of key pairs.
   * 
   * @param request - ListKeyPairsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKeyPairsResponse
   */
  async listKeyPairsWithOptions(request: $_model.ListKeyPairsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListKeyPairsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKeyPairs",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKeyPairsResponse>(await this.callApi(params, req, runtime), new $_model.ListKeyPairsResponse({}));
  }

  /**
   * The list of key pairs.
   * 
   * @param request - ListKeyPairsRequest
   * @returns ListKeyPairsResponse
   */
  async listKeyPairs(request: $_model.ListKeyPairsRequest): Promise<$_model.ListKeyPairsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKeyPairsWithOptions(request, runtime);
  }

  /**
   * Queries all plan information for simple application servers in a specified region.
   * 
   * @remarks
   * You can query all plan information for simple application servers in a specified region, including the plan ID, disk capacity, disk type, and plan price.
   * 
   * @param request - ListPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPlansResponse
   */
  async listPlansWithOptions(request: $_model.ListPlansRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPlansResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPlans",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPlansResponse>(await this.callApi(params, req, runtime), new $_model.ListPlansResponse({}));
  }

  /**
   * Queries all plan information for simple application servers in a specified region.
   * 
   * @remarks
   * You can query all plan information for simple application servers in a specified region, including the plan ID, disk capacity, disk type, and plan price.
   * 
   * @param request - ListPlansRequest
   * @returns ListPlansResponse
   */
  async listPlans(request: $_model.ListPlansRequest): Promise<$_model.ListPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPlansWithOptions(request, runtime);
  }

  /**
   * Queries all regions in which Simple Application Server is supported.
   * 
   * @remarks
   * The query results include all the Alibaba Cloud regions where Simple Application Server is supported on the international site (alibabacloud.com) and the China site (aliyun.com).
   * 
   * @param request - ListRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(request: $_model.ListRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRegionsResponse({}));
  }

  /**
   * Queries all regions in which Simple Application Server is supported.
   * 
   * @remarks
   * The query results include all the Alibaba Cloud regions where Simple Application Server is supported on the international site (alibabacloud.com) and the China site (aliyun.com).
   * 
   * @param request - ListRegionsRequest
   * @returns ListRegionsResponse
   */
  async listRegions(request: $_model.ListRegionsRequest): Promise<$_model.ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionsWithOptions(request, runtime);
  }

  /**
   * Queries information about one or more snapshots that have been created.
   * 
   * @remarks
   * InstanceId, DiskId, SnapshotIds, and ResourceGroupId are not required request parameters, but you can use them to build filter logic. These parameters have a logical AND relationship.
   * 
   * @param request - ListSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSnapshotsResponse
   */
  async listSnapshotsWithOptions(request: $_model.ListSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSnapshotsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.snapshotIds)) {
      query["SnapshotIds"] = request.snapshotIds;
    }

    if (!$dara.isNull(request.sourceDiskType)) {
      query["SourceDiskType"] = request.sourceDiskType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSnapshots",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSnapshotsResponse>(await this.callApi(params, req, runtime), new $_model.ListSnapshotsResponse({}));
  }

  /**
   * Queries information about one or more snapshots that have been created.
   * 
   * @remarks
   * InstanceId, DiskId, SnapshotIds, and ResourceGroupId are not required request parameters, but you can use them to build filter logic. These parameters have a logical AND relationship.
   * 
   * @param request - ListSnapshotsRequest
   * @returns ListSnapshotsResponse
   */
  async listSnapshots(request: $_model.ListSnapshotsRequest): Promise<$_model.ListSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSnapshotsWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to simple resources, such as instances, snapshots, disks, images, commands, and firewall rules.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      version: "2020-06-01",
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
   * Queries the tags that are added to simple resources, such as instances, snapshots, disks, images, commands, and firewall rules.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Performs a remote logon to a simple application server by using Workbench.
   * 
   * @remarks
   * After you create a simple application server, you can perform a remote logon to the server to set up environments and deploy applications.
   * 
   * @param request - LoginInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoginInstanceResponse
   */
  async loginInstanceWithOptions(request: $_model.LoginInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LoginInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LoginInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LoginInstanceResponse>(await this.callApi(params, req, runtime), new $_model.LoginInstanceResponse({}));
  }

  /**
   * Performs a remote logon to a simple application server by using Workbench.
   * 
   * @remarks
   * After you create a simple application server, you can perform a remote logon to the server to set up environments and deploy applications.
   * 
   * @param request - LoginInstanceRequest
   * @returns LoginInstanceResponse
   */
  async loginInstance(request: $_model.LoginInstanceRequest): Promise<$_model.LoginInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.loginInstanceWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a lightweight database instance.
   * 
   * @param request - ModifyDatabaseInstanceDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDatabaseInstanceDescriptionResponse
   */
  async modifyDatabaseInstanceDescriptionWithOptions(request: $_model.ModifyDatabaseInstanceDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDatabaseInstanceDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseInstanceDescription)) {
      query["DatabaseInstanceDescription"] = request.databaseInstanceDescription;
    }

    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDatabaseInstanceDescription",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDatabaseInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDatabaseInstanceDescriptionResponse({}));
  }

  /**
   * Modifies the description of a lightweight database instance.
   * 
   * @param request - ModifyDatabaseInstanceDescriptionRequest
   * @returns ModifyDatabaseInstanceDescriptionResponse
   */
  async modifyDatabaseInstanceDescription(request: $_model.ModifyDatabaseInstanceDescriptionRequest): Promise<$_model.ModifyDatabaseInstanceDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDatabaseInstanceDescriptionWithOptions(request, runtime);
  }

  /**
   * After you create a Simple Application Server database service instance, you can view and modify its parameters.
   * 
   * @param request - ModifyDatabaseInstanceParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDatabaseInstanceParameterResponse
   */
  async modifyDatabaseInstanceParameterWithOptions(request: $_model.ModifyDatabaseInstanceParameterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDatabaseInstanceParameterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.forceRestart)) {
      query["ForceRestart"] = request.forceRestart;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDatabaseInstanceParameter",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDatabaseInstanceParameterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDatabaseInstanceParameterResponse({}));
  }

  /**
   * After you create a Simple Application Server database service instance, you can view and modify its parameters.
   * 
   * @param request - ModifyDatabaseInstanceParameterRequest
   * @returns ModifyDatabaseInstanceParameterResponse
   */
  async modifyDatabaseInstanceParameter(request: $_model.ModifyDatabaseInstanceParameterRequest): Promise<$_model.ModifyDatabaseInstanceParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDatabaseInstanceParameterWithOptions(request, runtime);
  }

  /**
   * Modifies a firewall rule of a specified simple application server.
   * 
   * @param request - ModifyFirewallRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFirewallRuleResponse
   */
  async modifyFirewallRuleWithOptions(request: $_model.ModifyFirewallRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFirewallRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleProtocol)) {
      query["RuleProtocol"] = request.ruleProtocol;
    }

    if (!$dara.isNull(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFirewallRule",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFirewallRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFirewallRuleResponse({}));
  }

  /**
   * Modifies a firewall rule of a specified simple application server.
   * 
   * @param request - ModifyFirewallRuleRequest
   * @returns ModifyFirewallRuleResponse
   */
  async modifyFirewallRule(request: $_model.ModifyFirewallRuleRequest): Promise<$_model.ModifyFirewallRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFirewallRuleWithOptions(request, runtime);
  }

  /**
   * Updates the firewall rules in an existing firewall template based on your business requirements and applies the rules to Simple Application Server instances through the firewall template.
   * 
   * @remarks
   * Updating a firewall template does not affect the rules of instances to which the template is already applied.
   * 
   * @param request - ModifyFirewallTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFirewallTemplateResponse
   */
  async modifyFirewallTemplateWithOptions(request: $_model.ModifyFirewallTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFirewallTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.firewallTemplateId)) {
      query["FirewallTemplateId"] = request.firewallTemplateId;
    }

    if (!$dara.isNull(request.firewallTemplateRule)) {
      query["FirewallTemplateRule"] = request.firewallTemplateRule;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFirewallTemplate",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFirewallTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFirewallTemplateResponse({}));
  }

  /**
   * Updates the firewall rules in an existing firewall template based on your business requirements and applies the rules to Simple Application Server instances through the firewall template.
   * 
   * @remarks
   * Updating a firewall template does not affect the rules of instances to which the template is already applied.
   * 
   * @param request - ModifyFirewallTemplateRequest
   * @returns ModifyFirewallTemplateResponse
   */
  async modifyFirewallTemplate(request: $_model.ModifyFirewallTemplateRequest): Promise<$_model.ModifyFirewallTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFirewallTemplateWithOptions(request, runtime);
  }

  /**
   * Shares or unshares a custom image to Elastic Compute Service (ECS).
   * 
   * @remarks
   * Custom images can be shared to ECS. If the configurations of your simple application server cannot meet your business requirements, or you want to deploy your business on ECS instances, you can share your custom image to ECS to transfer your business from Simple Application Server to ECS.
   * > The region in which the shared image resides in ECS is the same as the region in which the custom image resides in Simple Application Server.
   * You can unshare a custom image based on your business requirements or when you want to delete the custom image. After you unshare a custom image, take note of the following items:
   * - You cannot query or use the custom image by using the ECS console or API.
   * - You cannot re-initialize the disks of the ECS instances that were created based on the shared image.
   * 
   * @param request - ModifyImageShareStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyImageShareStatusResponse
   */
  async modifyImageShareStatusWithOptions(request: $_model.ModifyImageShareStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyImageShareStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyImageShareStatus",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyImageShareStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyImageShareStatusResponse({}));
  }

  /**
   * Shares or unshares a custom image to Elastic Compute Service (ECS).
   * 
   * @remarks
   * Custom images can be shared to ECS. If the configurations of your simple application server cannot meet your business requirements, or you want to deploy your business on ECS instances, you can share your custom image to ECS to transfer your business from Simple Application Server to ECS.
   * > The region in which the shared image resides in ECS is the same as the region in which the custom image resides in Simple Application Server.
   * You can unshare a custom image based on your business requirements or when you want to delete the custom image. After you unshare a custom image, take note of the following items:
   * - You cannot query or use the custom image by using the ECS console or API.
   * - You cannot re-initialize the disks of the ECS instances that were created based on the shared image.
   * 
   * @param request - ModifyImageShareStatusRequest
   * @returns ModifyImageShareStatusResponse
   */
  async modifyImageShareStatus(request: $_model.ModifyImageShareStatusRequest): Promise<$_model.ModifyImageShareStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyImageShareStatusWithOptions(request, runtime);
  }

  /**
   * Changes the VNC password of a simple application server.
   * 
   * @param request - ModifyInstanceVncPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceVncPasswordResponse
   */
  async modifyInstanceVncPasswordWithOptions(request: $_model.ModifyInstanceVncPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceVncPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vncPassword)) {
      query["VncPassword"] = request.vncPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceVncPassword",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceVncPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceVncPasswordResponse({}));
  }

  /**
   * Changes the VNC password of a simple application server.
   * 
   * @param request - ModifyInstanceVncPasswordRequest
   * @returns ModifyInstanceVncPasswordResponse
   */
  async modifyInstanceVncPassword(request: $_model.ModifyInstanceVncPasswordRequest): Promise<$_model.ModifyInstanceVncPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceVncPasswordWithOptions(request, runtime);
  }

  /**
   * Restarts a simple application server.
   * 
   * @remarks
   * - You can restart only simple application server instances that are in the Running state.
   * - After a simple application server instance is restarted, it enters the Starting state.
   * 
   * @param request - RebootInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootInstanceResponse
   */
  async rebootInstanceWithOptions(request: $_model.RebootInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      action: "RebootInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RebootInstanceResponse({}));
  }

  /**
   * Restarts a simple application server.
   * 
   * @remarks
   * - You can restart only simple application server instances that are in the Running state.
   * - After a simple application server instance is restarted, it enters the Starting state.
   * 
   * @param request - RebootInstanceRequest
   * @returns RebootInstanceResponse
   */
  async rebootInstance(request: $_model.RebootInstanceRequest): Promise<$_model.RebootInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootInstanceWithOptions(request, runtime);
  }

  /**
   * Restarts simple application servers.
   * 
   * @param request - RebootInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootInstancesResponse
   */
  async rebootInstancesWithOptions(request: $_model.RebootInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.forceReboot)) {
      query["ForceReboot"] = request.forceReboot;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootInstancesResponse>(await this.callApi(params, req, runtime), new $_model.RebootInstancesResponse({}));
  }

  /**
   * Restarts simple application servers.
   * 
   * @param request - RebootInstancesRequest
   * @returns RebootInstancesResponse
   */
  async rebootInstances(request: $_model.RebootInstancesRequest): Promise<$_model.RebootInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootInstancesWithOptions(request, runtime);
  }

  /**
   * Releases the public endpoint of a lightweight database instance if you no longer need to access it from the internet.
   * 
   * @param request - ReleasePublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleasePublicConnectionResponse
   */
  async releasePublicConnectionWithOptions(request: $_model.ReleasePublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleasePublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleasePublicConnection",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleasePublicConnectionResponse>(await this.callApi(params, req, runtime), new $_model.ReleasePublicConnectionResponse({}));
  }

  /**
   * Releases the public endpoint of a lightweight database instance if you no longer need to access it from the internet.
   * 
   * @param request - ReleasePublicConnectionRequest
   * @returns ReleasePublicConnectionResponse
   */
  async releasePublicConnection(request: $_model.ReleasePublicConnectionRequest): Promise<$_model.ReleasePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releasePublicConnectionWithOptions(request, runtime);
  }

  /**
   * Unshares a custom image that is shared across Alibaba Cloud accounts.
   * 
   * @param request - RemoveCustomImageShareAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveCustomImageShareAccountResponse
   */
  async removeCustomImageShareAccountWithOptions(request: $_model.RemoveCustomImageShareAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveCustomImageShareAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveCustomImageShareAccount",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveCustomImageShareAccountResponse>(await this.callApi(params, req, runtime), new $_model.RemoveCustomImageShareAccountResponse({}));
  }

  /**
   * Unshares a custom image that is shared across Alibaba Cloud accounts.
   * 
   * @param request - RemoveCustomImageShareAccountRequest
   * @returns RemoveCustomImageShareAccountResponse
   */
  async removeCustomImageShareAccount(request: $_model.RemoveCustomImageShareAccountRequest): Promise<$_model.RemoveCustomImageShareAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeCustomImageShareAccountWithOptions(request, runtime);
  }

  /**
   * Renews a simple application server.
   * 
   * @remarks
   * - Before you call this operation, we recommend that you understand the billing of Simple Application Server. For more information, see [Billable items](https://help.aliyun.com/document_detail/58623.html).
   * - Before you call this operation, make sure that the balance in your account is sufficient. If the balance in your account is insufficient, the renewal fails.
   * 
   * @param request - RenewInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewInstanceResponse
   */
  async renewInstanceWithOptions(request: $_model.RenewInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewInstance",
      version: "2020-06-01",
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
   * Renews a simple application server.
   * 
   * @remarks
   * - Before you call this operation, we recommend that you understand the billing of Simple Application Server. For more information, see [Billable items](https://help.aliyun.com/document_detail/58623.html).
   * - Before you call this operation, make sure that the balance in your account is sufficient. If the balance in your account is insufficient, the renewal fails.
   * 
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(request: $_model.RenewInstanceRequest): Promise<$_model.RenewInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  /**
   * Resets the password of the administrator account for a database. You can call this operation to change the password if the current password has low security. For database security, change the database password on a regular basis.
   * 
   * @param request - ResetDatabaseAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetDatabaseAccountPasswordResponse
   */
  async resetDatabaseAccountPasswordWithOptions(request: $_model.ResetDatabaseAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetDatabaseAccountPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetDatabaseAccountPassword",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetDatabaseAccountPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetDatabaseAccountPasswordResponse({}));
  }

  /**
   * Resets the password of the administrator account for a database. You can call this operation to change the password if the current password has low security. For database security, change the database password on a regular basis.
   * 
   * @param request - ResetDatabaseAccountPasswordRequest
   * @returns ResetDatabaseAccountPasswordResponse
   */
  async resetDatabaseAccountPassword(request: $_model.ResetDatabaseAccountPasswordRequest): Promise<$_model.ResetDatabaseAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetDatabaseAccountPasswordWithOptions(request, runtime);
  }

  /**
   * Rolls back a disk to a snapshot.
   * 
   * @remarks
   * - When you roll back a disk by using a snapshot, the corresponding simple application server must be in the Stopped state.
   * - Rolling back a disk to a snapshot causes the incremental data generated after the snapshot was created to be lost. Back up your data before the rollback if necessary.
   * ### Precautions
   * Resetting the system or replacing the image clears the disk data on the server. Snapshots created before the system reset or image replacement are retained but cannot be used for rollback operations.
   * 
   * @param request - ResetDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetDiskResponse
   */
  async resetDiskWithOptions(request: $_model.ResetDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetDisk",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetDiskResponse>(await this.callApi(params, req, runtime), new $_model.ResetDiskResponse({}));
  }

  /**
   * Rolls back a disk to a snapshot.
   * 
   * @remarks
   * - When you roll back a disk by using a snapshot, the corresponding simple application server must be in the Stopped state.
   * - Rolling back a disk to a snapshot causes the incremental data generated after the snapshot was created to be lost. Back up your data before the rollback if necessary.
   * ### Precautions
   * Resetting the system or replacing the image clears the disk data on the server. Snapshots created before the system reset or image replacement are retained but cannot be used for rollback operations.
   * 
   * @param request - ResetDiskRequest
   * @returns ResetDiskResponse
   */
  async resetDisk(request: $_model.ResetDiskRequest): Promise<$_model.ResetDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetDiskWithOptions(request, runtime);
  }

  /**
   * Resets a simple application server.
   * 
   * @remarks
   * You can reset a simple application server to re-install its applications or operating system and re-initialize the server. You can reset a simple application server by resetting the current system or changing the image.
   * - Reset the current system: You can re-install the operating system without changing the image.
   * - Change the image: You can select another Alibaba Cloud image or a custom image to re-install the operating system.
   * ### [](#)Precautions
   * - Resetting the system or changing the image of a simple application server clears the disk data on the server. Back up the data as needed.
   * - After you reset a simple application server, monitoring may fail. In this case, you can use one of the following methods to install the CloudMonitor agent on the server:
   *   - Connect to the server: For more information, see [Manually install the CloudMonitor agent for C++ on an ECS instance](https://help.aliyun.com/document_detail/183482.html).
   *   - Use Command Assistant: For more information, see [Use Command Assistant](https://help.aliyun.com/document_detail/438681.html). You can obtain the command that can be used to install CloudMonitor from the "Common commands" section of the [Use Command Assistant](https://help.aliyun.com/document_detail/438681.html) topic.
   * ### [](#)Limits
   * - Snapshots that are created before the reset are retained, but the snapshots cannot be used to restore the disks of the server.
   * - You cannot reset simple application servers that were created from custom images that contain data of data disks.
   * - If you reset a simple application server by replacing the existing image with a custom image, the following limits apply:
   *   - The custom image must reside in the same region as the current server.
   *   - The custom image cannot be created based on the current server. If you want to restore the data on the server, you can use a snapshot of the server to restore disk data.
   *   - If your simple application server resides in a region outside the Chinese mainland, you cannot switch the operating system of the server between Windows Server and Linux. You cannot use a Windows Server custom image to reset a Linux simple application server. Similarly, you cannot use a Linux custom image to reset a Windows Server simple application server. You can switch the operating systems of simple application servers only between Windows Server versions or between Linux distributions.
   *   - The following limits apply to the disks attached to the simple application server:
   *     - If the custom image contains a system disk and a data disk but only a system disk is attached to the simple application server, you cannot use the custom image to reset the simple application server.
   *     - If the system disk size of the custom image is greater than the system disk size of the simple application server, you cannot directly use the custom image to reset the simple application server.
   *     - Only if the system disk size of the simple application server is greater than or equal to the system disk size of the custom image, you can use the custom image to reset the simple application server. To increase the system disk size of your server, you can upgrade the server configuration. For more information, see Upgrade a simple application server.
   *     - If the data disk size of the custom image is greater than the data disk size of the simple application server, you cannot use the custom image to reset the simple application server.
   * 
   * @param request - ResetSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetSystemResponse
   */
  async resetSystemWithOptions(request: $_model.ResetSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.loginCredentials)) {
      query["LoginCredentials"] = request.loginCredentials;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetSystem",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetSystemResponse>(await this.callApi(params, req, runtime), new $_model.ResetSystemResponse({}));
  }

  /**
   * Resets a simple application server.
   * 
   * @remarks
   * You can reset a simple application server to re-install its applications or operating system and re-initialize the server. You can reset a simple application server by resetting the current system or changing the image.
   * - Reset the current system: You can re-install the operating system without changing the image.
   * - Change the image: You can select another Alibaba Cloud image or a custom image to re-install the operating system.
   * ### [](#)Precautions
   * - Resetting the system or changing the image of a simple application server clears the disk data on the server. Back up the data as needed.
   * - After you reset a simple application server, monitoring may fail. In this case, you can use one of the following methods to install the CloudMonitor agent on the server:
   *   - Connect to the server: For more information, see [Manually install the CloudMonitor agent for C++ on an ECS instance](https://help.aliyun.com/document_detail/183482.html).
   *   - Use Command Assistant: For more information, see [Use Command Assistant](https://help.aliyun.com/document_detail/438681.html). You can obtain the command that can be used to install CloudMonitor from the "Common commands" section of the [Use Command Assistant](https://help.aliyun.com/document_detail/438681.html) topic.
   * ### [](#)Limits
   * - Snapshots that are created before the reset are retained, but the snapshots cannot be used to restore the disks of the server.
   * - You cannot reset simple application servers that were created from custom images that contain data of data disks.
   * - If you reset a simple application server by replacing the existing image with a custom image, the following limits apply:
   *   - The custom image must reside in the same region as the current server.
   *   - The custom image cannot be created based on the current server. If you want to restore the data on the server, you can use a snapshot of the server to restore disk data.
   *   - If your simple application server resides in a region outside the Chinese mainland, you cannot switch the operating system of the server between Windows Server and Linux. You cannot use a Windows Server custom image to reset a Linux simple application server. Similarly, you cannot use a Linux custom image to reset a Windows Server simple application server. You can switch the operating systems of simple application servers only between Windows Server versions or between Linux distributions.
   *   - The following limits apply to the disks attached to the simple application server:
   *     - If the custom image contains a system disk and a data disk but only a system disk is attached to the simple application server, you cannot use the custom image to reset the simple application server.
   *     - If the system disk size of the custom image is greater than the system disk size of the simple application server, you cannot directly use the custom image to reset the simple application server.
   *     - Only if the system disk size of the simple application server is greater than or equal to the system disk size of the custom image, you can use the custom image to reset the simple application server. To increase the system disk size of your server, you can upgrade the server configuration. For more information, see Upgrade a simple application server.
   *     - If the data disk size of the custom image is greater than the data disk size of the simple application server, you cannot use the custom image to reset the simple application server.
   * 
   * @param request - ResetSystemRequest
   * @returns ResetSystemResponse
   */
  async resetSystem(request: $_model.ResetSystemRequest): Promise<$_model.ResetSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetSystemWithOptions(request, runtime);
  }

  /**
   * Call this operation to restart a lightweight database instance in the Running state.
   * 
   * @param request - RestartDatabaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDatabaseInstanceResponse
   */
  async restartDatabaseInstanceWithOptions(request: $_model.RestartDatabaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDatabaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartDatabaseInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartDatabaseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestartDatabaseInstanceResponse({}));
  }

  /**
   * Call this operation to restart a lightweight database instance in the Running state.
   * 
   * @param request - RestartDatabaseInstanceRequest
   * @returns RestartDatabaseInstanceResponse
   */
  async restartDatabaseInstance(request: $_model.RestartDatabaseInstanceRequest): Promise<$_model.RestartDatabaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartDatabaseInstanceWithOptions(request, runtime);
  }

  /**
   * Runs a command on a simple application server.
   * 
   * @remarks
   * Command Assistant is an automated O&M tool designed for simple application servers. You can run commands (Shell, PowerShell, and Bat) on simple application server instances from the console for operations management without having to log on to the instances.
   * To use Command Assistant, the following conditions must be met:
   * - The simple application server instance must be in the Running state.
   * - Cloud Assistant Agent must be installed. Cloud Assistant Agent is installed on simple application server instances by default. If you manually uninstalled it, reinstall it. For more information, see [Install Cloud Assistant Agent](https://help.aliyun.com/document_detail/64921.html).
   * 
   * @param tmpReq - RunCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCommandResponse
   */
  async runCommandWithOptions(tmpReq: $_model.RunCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunCommandResponse> {
    tmpReq.validate();
    let request = new $_model.RunCommandShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!$dara.isNull(request.enableParameter)) {
      query["EnableParameter"] = request.enableParameter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.windowsPasswordName)) {
      query["WindowsPasswordName"] = request.windowsPasswordName;
    }

    if (!$dara.isNull(request.workingDir)) {
      query["WorkingDir"] = request.workingDir;
    }

    if (!$dara.isNull(request.workingUser)) {
      query["WorkingUser"] = request.workingUser;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCommand",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunCommandResponse>(await this.callApi(params, req, runtime), new $_model.RunCommandResponse({}));
  }

  /**
   * Runs a command on a simple application server.
   * 
   * @remarks
   * Command Assistant is an automated O&M tool designed for simple application servers. You can run commands (Shell, PowerShell, and Bat) on simple application server instances from the console for operations management without having to log on to the instances.
   * To use Command Assistant, the following conditions must be met:
   * - The simple application server instance must be in the Running state.
   * - Cloud Assistant Agent must be installed. Cloud Assistant Agent is installed on simple application server instances by default. If you manually uninstalled it, reinstall it. For more information, see [Install Cloud Assistant Agent](https://help.aliyun.com/document_detail/64921.html).
   * 
   * @param request - RunCommandRequest
   * @returns RunCommandResponse
   */
  async runCommand(request: $_model.RunCommandRequest): Promise<$_model.RunCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  /**
   * Starts a database instance.
   * 
   * @remarks
   * This operation starts a database instance that is in the stopped state.
   * 
   * @param request - StartDatabaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDatabaseInstanceResponse
   */
  async startDatabaseInstanceWithOptions(request: $_model.StartDatabaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDatabaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDatabaseInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDatabaseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartDatabaseInstanceResponse({}));
  }

  /**
   * Starts a database instance.
   * 
   * @remarks
   * This operation starts a database instance that is in the stopped state.
   * 
   * @param request - StartDatabaseInstanceRequest
   * @returns StartDatabaseInstanceResponse
   */
  async startDatabaseInstance(request: $_model.StartDatabaseInstanceRequest): Promise<$_model.StartDatabaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDatabaseInstanceWithOptions(request, runtime);
  }

  /**
   * Starts a simple application server.
   * 
   * @remarks
   * You can call this operation to start a simple application server that is in the Stopped state.
   * 
   * @param request - StartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceResponse
   */
  async startInstanceWithOptions(request: $_model.StartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      action: "StartInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartInstanceResponse({}));
  }

  /**
   * Starts a simple application server.
   * 
   * @remarks
   * You can call this operation to start a simple application server that is in the Stopped state.
   * 
   * @param request - StartInstanceRequest
   * @returns StartInstanceResponse
   */
  async startInstance(request: $_model.StartInstanceRequest): Promise<$_model.StartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  /**
   * Starts one or more simple application servers.
   * 
   * @param request - StartInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstancesResponse
   */
  async startInstancesWithOptions(request: $_model.StartInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartInstancesResponse>(await this.callApi(params, req, runtime), new $_model.StartInstancesResponse({}));
  }

  /**
   * Starts one or more simple application servers.
   * 
   * @param request - StartInstancesRequest
   * @returns StartInstancesResponse
   */
  async startInstances(request: $_model.StartInstancesRequest): Promise<$_model.StartInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startInstancesWithOptions(request, runtime);
  }

  /**
   * Starts a session to log on to a Simple Application Server instance.
   * 
   * @param request - StartTerminalSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTerminalSessionResponse
   */
  async startTerminalSessionWithOptions(request: $_model.StartTerminalSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartTerminalSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandLine)) {
      query["CommandLine"] = request.commandLine;
    }

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
      action: "StartTerminalSession",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartTerminalSessionResponse>(await this.callApi(params, req, runtime), new $_model.StartTerminalSessionResponse({}));
  }

  /**
   * Starts a session to log on to a Simple Application Server instance.
   * 
   * @param request - StartTerminalSessionRequest
   * @returns StartTerminalSessionResponse
   */
  async startTerminalSession(request: $_model.StartTerminalSessionRequest): Promise<$_model.StartTerminalSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startTerminalSessionWithOptions(request, runtime);
  }

  /**
   * Stops a lightweight database instance.
   * 
   * @remarks
   * This operation stops a lightweight database instance that is in the running state. After the instance is stopped, you cannot log on to or access it.
   * 
   * @param request - StopDatabaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDatabaseInstanceResponse
   */
  async stopDatabaseInstanceWithOptions(request: $_model.StopDatabaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDatabaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDatabaseInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDatabaseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopDatabaseInstanceResponse({}));
  }

  /**
   * Stops a lightweight database instance.
   * 
   * @remarks
   * This operation stops a lightweight database instance that is in the running state. After the instance is stopped, you cannot log on to or access it.
   * 
   * @param request - StopDatabaseInstanceRequest
   * @returns StopDatabaseInstanceResponse
   */
  async stopDatabaseInstance(request: $_model.StopDatabaseInstanceRequest): Promise<$_model.StopDatabaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDatabaseInstanceWithOptions(request, runtime);
  }

  /**
   * Stops a simple application server.
   * 
   * @remarks
   * If a simple application server is temporarily not needed, you can stop it.
   * > Stopping a simple application server instance may cause service interruptions. Perform this operation during off-peak hours.
   * 
   * @param request - StopInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceResponse
   */
  async stopInstanceWithOptions(request: $_model.StopInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      action: "StopInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopInstanceResponse({}));
  }

  /**
   * Stops a simple application server.
   * 
   * @remarks
   * If a simple application server is temporarily not needed, you can stop it.
   * > Stopping a simple application server instance may cause service interruptions. Perform this operation during off-peak hours.
   * 
   * @param request - StopInstanceRequest
   * @returns StopInstanceResponse
   */
  async stopInstance(request: $_model.StopInstanceRequest): Promise<$_model.StopInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  /**
   * Stops one or more simple application servers.
   * 
   * @param request - StopInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstancesResponse
   */
  async stopInstancesWithOptions(request: $_model.StopInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopInstancesResponse>(await this.callApi(params, req, runtime), new $_model.StopInstancesResponse({}));
  }

  /**
   * Stops one or more simple application servers.
   * 
   * @param request - StopInstancesRequest
   * @returns StopInstancesResponse
   */
  async stopInstances(request: $_model.StopInstancesRequest): Promise<$_model.StopInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInstancesWithOptions(request, runtime);
  }

  /**
   * Adds tags to simple application servers, snapshots, custom images, commands, firewall rules, and disks to facilitate the viewing and management of the preceding resources.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      action: "TagResources",
      version: "2020-06-01",
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
   * Adds tags to simple application servers, snapshots, custom images, commands, firewall rules, and disks to facilitate the viewing and management of the preceding resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Unbinds and deletes tags from specified lightweight resources, such as instances, snapshots, disks, images, commands, and firewall rules.
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

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      version: "2020-06-01",
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
   * Unbinds and deletes tags from specified lightweight resources, such as instances, snapshots, disks, images, commands, and firewall rules.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifys the parameter of a command.
   * 
   * @param request - UpdateCommandAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCommandAttributeResponse
   */
  async updateCommandAttributeWithOptions(request: $_model.UpdateCommandAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCommandAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.workingDir)) {
      query["WorkingDir"] = request.workingDir;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCommandAttribute",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCommandAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCommandAttributeResponse({}));
  }

  /**
   * Modifys the parameter of a command.
   * 
   * @param request - UpdateCommandAttributeRequest
   * @returns UpdateCommandAttributeResponse
   */
  async updateCommandAttribute(request: $_model.UpdateCommandAttributeRequest): Promise<$_model.UpdateCommandAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCommandAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the remarks for the data disk that is attached to a simple application server.
   * 
   * @param request - UpdateDiskAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDiskAttributeResponse
   */
  async updateDiskAttributeWithOptions(request: $_model.UpdateDiskAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDiskAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDiskAttribute",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDiskAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDiskAttributeResponse({}));
  }

  /**
   * Modifies the remarks for the data disk that is attached to a simple application server.
   * 
   * @param request - UpdateDiskAttributeRequest
   * @returns UpdateDiskAttributeResponse
   */
  async updateDiskAttribute(request: $_model.UpdateDiskAttributeRequest): Promise<$_model.UpdateDiskAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDiskAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the information of an instance, including the instance name and password.
   * 
   * @remarks
   * ## Operation description
   * After you change the password, you must restart the server by calling the [RebootInstance](https://help.aliyun.com/document_detail/190443.html) operation for the new password to take effect.
   * 
   * @param request - UpdateInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceAttributeResponse
   */
  async updateInstanceAttributeWithOptions(request: $_model.UpdateInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceAttribute",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceAttributeResponse({}));
  }

  /**
   * Modifies the information of an instance, including the instance name and password.
   * 
   * @remarks
   * ## Operation description
   * After you change the password, you must restart the server by calling the [RebootInstance](https://help.aliyun.com/document_detail/190443.html) operation for the new password to take effect.
   * 
   * @param request - UpdateInstanceAttributeRequest
   * @returns UpdateInstanceAttributeResponse
   */
  async updateInstanceAttribute(request: $_model.UpdateInstanceAttributeRequest): Promise<$_model.UpdateInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the remarks of a snapshot of a simple application server.
   * 
   * @param request - UpdateSnapshotAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSnapshotAttributeResponse
   */
  async updateSnapshotAttributeWithOptions(request: $_model.UpdateSnapshotAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSnapshotAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSnapshotAttribute",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSnapshotAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSnapshotAttributeResponse({}));
  }

  /**
   * Modifies the remarks of a snapshot of a simple application server.
   * 
   * @param request - UpdateSnapshotAttributeRequest
   * @returns UpdateSnapshotAttributeResponse
   */
  async updateSnapshotAttribute(request: $_model.UpdateSnapshotAttributeRequest): Promise<$_model.UpdateSnapshotAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSnapshotAttributeWithOptions(request, runtime);
  }

  /**
   * Upgrades the plan configuration for a specified simple application server.
   * 
   * @remarks
   * - Only upgrades to a higher-tier plan are supported. For more information about plans, see [Billing items](https://help.aliyun.com/document_detail/58623.html).
   * - When you call this operation to upgrade a server, ensure that your Alibaba Cloud account balance is sufficient. Otherwise, the upgrade fails.
   * 
   * @param request - UpgradeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeInstanceResponse
   */
  async upgradeInstanceWithOptions(request: $_model.UpgradeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeInstanceResponse({}));
  }

  /**
   * Upgrades the plan configuration for a specified simple application server.
   * 
   * @remarks
   * - Only upgrades to a higher-tier plan are supported. For more information about plans, see [Billing items](https://help.aliyun.com/document_detail/58623.html).
   * - When you call this operation to upgrade a server, ensure that your Alibaba Cloud account balance is sufficient. Otherwise, the upgrade fails.
   * 
   * @param request - UpgradeInstanceRequest
   * @returns UpgradeInstanceResponse
   */
  async upgradeInstance(request: $_model.UpgradeInstanceRequest): Promise<$_model.UpgradeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeInstanceWithOptions(request, runtime);
  }

  /**
   * Imports a key pair for a simple application server.
   * 
   * @param request - UploadInstanceKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadInstanceKeyPairResponse
   */
  async uploadInstanceKeyPairWithOptions(request: $_model.UploadInstanceKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadInstanceKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.publicKey)) {
      query["PublicKey"] = request.publicKey;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadInstanceKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadInstanceKeyPairResponse>(await this.callApi(params, req, runtime), new $_model.UploadInstanceKeyPairResponse({}));
  }

  /**
   * Imports a key pair for a simple application server.
   * 
   * @param request - UploadInstanceKeyPairRequest
   * @returns UploadInstanceKeyPairResponse
   */
  async uploadInstanceKeyPair(request: $_model.UploadInstanceKeyPairRequest): Promise<$_model.UploadInstanceKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadInstanceKeyPairWithOptions(request, runtime);
  }

}
